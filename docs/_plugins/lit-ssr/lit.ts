/**
 * @license based on code from eleventy-plugin-lit
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import type { UserConfig } from '@11ty/eleventy';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Worker } from 'node:worker_threads';

const __dirname = dirname(fileURLToPath(import.meta.url));

interface Options {
  componentModules?: string[];
}

// Lit SSR includes comment markers to track the outer template from
// the template we've generated here, but it's not possible for this
// outer template to be hydrated, so they serve no purpose.
function trimOuterMarkers(renderedContent: string) {
  return renderedContent
      .replace(/^((<!--[^<>]*-->)|(<\?>)|\s)+/, '')
      .replace(/((<!--[^<>]*-->)|(<\?>)|\s)+$/, '');
}

export default function(eleventyConfig: UserConfig, opts?: Options) {
  const { componentModules } = opts ?? {};
  if (componentModules === undefined || componentModules.length === 0) {
    // If there are no component modules, we could never have anything to
    // render.
    return;
  }

  const resolvedComponentModules = componentModules.map(module =>
    pathToFileURL(resolve(process.cwd(), module)).href);

  let worker: Worker;

  const requestIdResolveMap = new Map();
  let requestId = 0;

  eleventyConfig.on('eleventy.before', async function() {
    worker = new Worker(resolve(__dirname, './worker/worker.js'));

    worker.on('error', err => {
      // eslint-disable-next-line no-console
      console.error('Unexpected error while rendering lit component in worker thread', err);
      throw err;
    });

    let requestResolve: (v?: unknown) => void;
    const requestPromise = new Promise(_resolve => {
      requestResolve = _resolve;
    });

    worker.on('message', message => {
      switch (message.type) {
        case 'initialize-response': {
          requestResolve();
          break;
        }

        case 'render-response': {
          const { id, rendered } = message;
          const _resolve = requestIdResolveMap.get(id);
          if (_resolve === undefined) {
            throw new Error(
              '@lit-labs/eleventy-plugin-lit received invalid render-response message'
            );
          }
          _resolve(rendered);
          requestIdResolveMap.delete(id);
          break;
        }
      }
    });

    const message = {
      type: 'initialize-request',
      imports: resolvedComponentModules,
    };

    worker.postMessage(message);
    await requestPromise;
  });

  eleventyConfig.on('eleventy.after', async () => {
    await worker.terminate();
  });

  eleventyConfig.addTransform('render-lit', async function(this, content) {
    const { outputPath, inputPath, fileSlug } = this.page;
    if (!outputPath.endsWith('.html')) {
      return content;
    }

    const renderedContent: string = await new Promise(_resolve => {
      requestIdResolveMap.set(requestId, _resolve);
      const message = {
        type: 'render-request',
        id: requestId++,
        content,
        page: JSON.parse(JSON.stringify({ outputPath, inputPath, fileSlug })),
      };
      worker.postMessage(message);
    });

    const outerMarkersTrimmed = trimOuterMarkers(renderedContent);
    return outerMarkersTrimmed;
  });
};

