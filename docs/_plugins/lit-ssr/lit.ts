/* eslint-disable no-console */
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

import chalk from 'chalk';

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
}

export interface RenderResponseMessage {
  type: 'render-response';
  page: Pick<EleventyPage, 'inputPath' | 'outputPath'>;
  rendered?: string;
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

interface RenderPageOpts {
  content: string;
  page: Pick<EleventyPage, 'inputPath' | 'outputPath'>;
}

let worker: Worker;

export default async function(eleventyConfig: UserConfig, opts?: Options) {
  const imports = opts?.componentModules ?? [];
  const tsconfig = opts?.tsconfig ?? './tsconfig.json';

  // If there are no component modules, we could never have anything to
  // render.
  if (imports?.length) {
    eleventyConfig.on('eleventy.before', async function() {
      const start = performance.now();
      register('./lit-css-node.ts', import.meta.url);
      let requestResolve: (value?: unknown) => void;
      const requestPromise = new Promise(resolve => {
        requestResolve = resolve;
      });

      await writeFile(
        new URL('./worker.js', import.meta.url),
        tsBlankSpace(await readFile(new URL('./worker.ts', import.meta.url), 'utf8')),
        'utf8',
      );

      const renderRequestResolveMap = new Map<string, (content?: string) => void>();

      async function renderPage(opts: RenderPageOpts) {
        console.log(opts);
        const { content, page } = opts;
        return new Promise<string>(resolve => {
          renderRequestResolveMap.set(page.outputPath, resolve as (content?: string) => void);
          worker.postMessage({
            type: 'render-request',
            content,
            page,
          } satisfies RenderRequestMessage);
        });
      }

      worker ??= new Worker(new URL('./worker.js', import.meta.url), {
        workerData: {
          imports,
          tsconfig,
        },
      });

      worker.on('error', function(evt: ErrorEvent) {
        const { error } = evt;
        console.error(
          'Unexpected error while rendering lit component in worker thread',
          evt.error
        );
        throw error;
      });

      worker.on('message', function(message: Message) {
        console.log(message);
        switch (message.type) {
          case 'render-response': {
            const resolve = renderRequestResolveMap.get(message.page.outputPath);
            if (!resolve) {
              throw new Error('lit-ssr received invalid render-response message');
            }
            resolve(message.rendered);
            break;
          } case 'initialize-response':
            return requestResolve();
        }
      });

      worker.postMessage({ type: 'initialize-request' });

      await requestPromise;

      const d = (performance.now() - start).toFixed(2);
      console.log(`Initialized in ${d}`);

      eleventyConfig.on('eleventy.after', async () => void await worker.terminate());

      eleventyConfig.addTransform('render-lit', async function(this, content) {
        const { outputPath, inputPath } = this.page;

        if (!outputPath.endsWith('.html')) {
          return content;
        }

        const start = performance.now();
        const rendered = await renderPage({ content, page: { outputPath, inputPath } });
        const prefix = rendered ? 'Rendering took' : `Rendering ${chalk.red('FAILED')}`;
        const d = (performance.now() - start).toFixed(2);
        console.log(`${prefix} ${chalk.blue(d)}ms for ${outputPath}`);
        return rendered ?? content;
      });
    });
  }
}
