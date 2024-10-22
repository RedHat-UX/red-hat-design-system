/**
 * @license based on code from eleventy-plugin-lit
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import type { EleventyPage } from '@11ty/eleventy/src/UserConfig.js';
import type { UserConfig } from '@11ty/eleventy';

import { Worker } from 'node:worker_threads';
import { readFile, writeFile } from 'node:fs/promises';
import tsBlankSpace from 'ts-blank-space';

import { register } from 'node:module';

export interface InitRequestMessage {
  type: 'initialize-request';
  imports: string[];
  tsconfig: string;
}

export interface InitResponseMessage {
  type: 'initialize-response';
}

export interface RenderRequestMessage {
  type: 'render-request';
  content: string;
  page: Pick<EleventyPage, 'inputPath' | 'outputPath'>;
  id: number;
}

export interface RenderResponseMessage {
  type: 'render-response';
  page: Pick<EleventyPage, 'inputPath' | 'outputPath'>;
  rendered?: string;
  id: number;
}

export type Message =
| InitRequestMessage
| InitResponseMessage
| RenderRequestMessage
| RenderResponseMessage;

interface Options {
  componentModules?: string[];
  /** path from project root to tsconfig */
  tsconfig?: string;
}

async function redactTSFileInPlace(path: string) {
  const inURL = new URL(path, import.meta.url);
  const outURL = new URL(path.replace('.ts', '.js'), import.meta.url);
  await writeFile(outURL, tsBlankSpace(await readFile(inURL, 'utf8')), 'utf8');
}

export default async function(eleventyConfig: UserConfig, opts?: Options) {
  const imports = opts?.componentModules ?? [];
  const tsconfig = opts?.tsconfig ?? './tsconfig.json';

  // If there are no component modules, we could never have anything to
  // render.
  if (imports?.length) {
    let worker: Worker;

    let initialized: Promise<void>;

    let requestId = 0;

    const renderRequestResolveMap = new Map<number, (content?: string) => void>();

    eleventyConfig.on('eleventy.before', async function() {
      await redactTSFileInPlace('./worker.ts');
      register('./lit-css-node.ts', import.meta.url);

      let initializedResolve: (value?: void) => void;
      initialized = new Promise<void>(resolve => {
        initializedResolve = resolve;
      });

      worker ??= new Worker(new URL('./worker.js', import.meta.url), {
        workerData: {
          imports,
          tsconfig,
        },
      });

      worker.on('error', function(error: Error) {
        // eslint-disable-next-line no-console
        console.error(
          'Unexpected error while rendering lit component in worker thread',
          error.message
        );
        throw error;
      });

      worker.on('message', function(message: Message) {
        switch (message.type) {
          case 'initialize-response': return initializedResolve();
          case 'render-response': {
            const resolve = renderRequestResolveMap.get(message.id);
            if (!resolve) {
              throw new Error('lit-ssr received invalid render-response message');
            }
            resolve(message.rendered);
            renderRequestResolveMap.delete(message.id);
            break;
          }
        }
      });

      worker.postMessage({ type: 'initialize-request' });
    });

    eleventyConfig.on('eleventy.after', async () => void await worker.terminate());

    eleventyConfig.addTransform('render-lit', async function(this, content) {
      await initialized;
      const { outputPath, inputPath } = this.page;

      if (!outputPath.endsWith('.html')) {
        return content;
      }

      const rendered = new Promise<string>(resolve => {
        const page = { outputPath, inputPath };
        const type = 'render-request' as const;
        renderRequestResolveMap.set(requestId, resolve as (content?: string) => void);
        worker.postMessage({
          type,
          content,
          page,
          id: requestId++,
        } satisfies RenderRequestMessage);
      });
      return rendered ?? content;
    });
  }
}
