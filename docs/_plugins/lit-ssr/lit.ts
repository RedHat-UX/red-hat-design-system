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

import chalk from 'chalk';

import { register } from 'node:module';
register('./lit-css-node.ts', import.meta.url);

await writeFile(
  new URL('./worker.js', import.meta.url),
  tsBlankSpace(await readFile(new URL('./worker.ts', import.meta.url), 'utf8')),
  'utf8',
);

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
  id: number;
  content: string;
  page: Pick<EleventyPage, 'inputPath' | 'outputPath'>;
}

export interface RenderResponseMessage {
  type: 'render-response';
  id: number;
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

class RenderTimeoutError extends Error {
  constructor(public timeout: number, public outputPath: string) {
    super(`${chalk.red`TIMEOUT`} ${outputPath} timed out after ${timeout}ms`);
  }
}

let requestId = 0;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const requestIdResolveMap = new Map<number, Function>();

async function initializeWorker(imports: string[], tsconfig = './tsconfig') {
  let requestResolve: (value?: unknown) => void;
  const requestPromise = new Promise(resolve => {
    requestResolve = resolve;
  });

  const worker = new Worker(new URL('./worker.js', import.meta.url), {
    env: {
      NODE_OPTIONS: '--import tsx/esm',
    },
  });

  worker.on('error', err => {
    console.error(
      'Unexpected error while rendering lit component in worker thread',
      err
    );
    throw err;
  });

  worker.postMessage({
    type: 'initialize-request',
    imports,
    tsconfig,
  } satisfies InitRequestMessage);

  worker.on('message', message => {
    switch (message.type) {
      case 'initialize-response': return requestResolve();
      case 'render-response': return onRenderResponse(message);
    }
  });

  await requestPromise;

  return worker;
}

async function getRenderRequestPromise(worker: Worker, opts: RenderPageOpts) {
  return new Promise<string>(resolve => {
    const id = requestId++;
    worker.postMessage({ type: 'render-request', id, ...opts } satisfies RenderRequestMessage);
    requestIdResolveMap.set(id, resolve);
  });
}

async function renderPage(worker: Worker, opts: RenderPageOpts) {
  const start = performance.now();
  const renderedContent = await getRenderRequestPromise(worker, opts);
  const end = performance.now();
  console.log(`Rendering took ${chalk.blue((end - start).toFixed(3))}ms for ${opts.page.outputPath}`);
  return renderedContent;
}

function onRenderResponse({ id, rendered }: RenderResponseMessage) {
  const resolve = requestIdResolveMap.get(id);
  if (resolve === undefined) {
    throw new Error(
      '@lit-labs/eleventy-plugin-lit received invalid render-response message'
    );
  }
  requestIdResolveMap.delete(id);
  resolve(rendered);
}

export default async function(eleventyConfig: UserConfig, opts?: Options) {
  const componentModules = opts?.componentModules ?? [];

  // If there are no component modules, we could never have anything to
  // render.
  if (componentModules?.length) {
    const worker = await initializeWorker(componentModules, opts?.tsconfig);

    eleventyConfig.on('eleventy.after', async () => void await worker.terminate());

    eleventyConfig.addTransform('render-lit', async function(this, content) {
      const { outputPath, inputPath } = this.page;

      if (!outputPath.endsWith('.html')) {
        return content;
      }

      const rendered = await renderPage(worker, { content, page: { outputPath, inputPath } });
      return rendered ?? content;
    });
  }
}
