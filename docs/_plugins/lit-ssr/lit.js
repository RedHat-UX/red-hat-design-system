/**
 * @license based on code from eleventy-plugin-lit
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { dirname, resolve as _resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Worker } from 'node:worker_threads';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Lit SSR includes comment markers to track the outer template from
// the template we've generated here, but it's not possible for this
// outer template to be hydrated, so they serve no purpose.
function trimOuterMarkers(renderedContent) {
  return renderedContent
      .replace(/^((<!--[^<>]*-->)|(<\?>)|\s)+/, '')
      .replace(/((<!--[^<>]*-->)|(<\?>)|\s)+$/, '');
}

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 * @param {{componentModules: string[]}} resolvedComponentModules
 */
export default function(eleventyConfig, { componentModules } = {}) {
  if (componentModules === undefined || componentModules.length === 0) {
    // If there are no component modules, we could never have anything to
    // render.
    return;
  }

  const resolvedComponentModules = componentModules.map(module =>
    pathToFileURL(_resolve(process.cwd(), module)).href);

  let worker;

  const requestIdResolveMap = new Map();
  let requestId = 0;

  eleventyConfig.on('eleventy.before', async function() {
    worker = new Worker(_resolve(__dirname, './worker/worker.js'));

    worker.on('error', err => {
      // eslint-disable-next-line no-console
      console.error('Unexpected error while rendering lit component in worker thread', err);
      throw err;
    });

    let requestResolve;
    const requestPromise = new Promise(resolve => {
      requestResolve = resolve;
    });

    worker.on('message', message => {
      switch (message.type) {
        case 'initialize-response': {
          requestResolve();
          break;
        }

        case 'render-response': {
          const { id, rendered } = message;
          const resolve = requestIdResolveMap.get(id);
          if (resolve === undefined) {
            throw new Error(
              '@lit-labs/eleventy-plugin-lit received invalid render-response message'
            );
          }
          resolve(rendered);
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

  eleventyConfig.addTransform('render-lit', async function(content) {
    const { outputPath, inputPath, fileSlug } = this.page;
    if (!outputPath.endsWith('.html')) {
      return content;
    }

    const renderedContent = await new Promise(resolve => {
      requestIdResolveMap.set(requestId, resolve);
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
  }
  );
};

