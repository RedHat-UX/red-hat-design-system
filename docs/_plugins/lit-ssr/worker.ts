/* eslint-disable no-console */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { html, type LitElement, type ReactiveController } from 'lit';
import type { RenderInfo, RenderResult } from '@lit-labs/ssr';
import type { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.ts';
import type { RenderResponseMessage, InitResponseMessage, RenderRequestMessage } from './lit.js';

import { parentPort, workerData } from 'node:worker_threads';
import { register as registerTS } from 'tsx/esm/api';

const { tsconfig } = workerData;
registerTS({ tsconfig });
import { register } from 'node:module';
register('./lit-css-node.ts', import.meta.url);

import { resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

import { render } from '@lit-labs/ssr';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';

import chalk from 'chalk';

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';
import { parse, parseFragment } from 'parse5';
import { type Element, replaceWith, query } from '@parse5/tools';
import { serialize } from 'parse5';

// Lit SSR includes comment markers to track the outer template from
// the template we've generated here, but it's not possible for this
// outer template to be hydrated, so they serve no purpose.
function trimOuterMarkers(renderedContent: string) {
  return renderedContent
      .replace(/^((<!--[^<>]*-->)|(<\?>)|\s)+/, '')
      .replace(/((<!--[^<>]*-->)|(<\?>)|\s)+$/, '');
}

if (parentPort === null) {
  throw new Error('worker.js must only be run in a worker thread');
}

class RHDSSSRableRenderer extends LitElementRenderer {
  static isRHDSSSRController(ctrl: ReactiveController): ctrl is RHDSSSRController {
    return !!(ctrl as RHDSSSRController).isRHDSSSRController;
  }

  getControllers() {
    const element = (this.element as LitElement & { _$EO: Set<ReactiveController> });
    return Array.from(element._$EO ?? new Set())
        .filter(RHDSSSRableRenderer.isRHDSSSRController);
  }

  constructor(tagName: string) {
    super(tagName);
    console.log(`constructed renderer for ${this.tagName}`);
  }

  async setupController(controller: RHDSSSRController, renderInfo: RenderInfo) {
    if (controller.ssrSetup) {
      await controller.ssrSetup(renderInfo);
    }
    return '';
  }

  override* renderShadow(renderInfo: RenderInfo): RenderResult {
    console.log(`renderShadow()`, this.tagName);
    for (const controller of this.getControllers()) {
      yield this.setupController(controller, renderInfo);
    }
    return super.renderShadow(renderInfo);
  }
}

let initialized = false;

const elementRenderers = [
  // RHDSSSRableRenderer,
  LitElementRenderer,
];

class UnsafeHTMLStringsArray extends Array {
  public raw: readonly string[];
  constructor(string: string) {
    super();
    this.push(string);
    this.raw = [string];
  }
}

async function renderPage(message: RenderRequestMessage) {
  const { content, page } = message;
  const document = parse(content);
  const body = query(document, node => (node as Element).tagName === 'body') as Element;
  const result = render(html(new UnsafeHTMLStringsArray(serialize(body))), { elementRenderers,
    // @ts-expect-error: yeah, yeah
    page,
  });
  console.log(...result);
  const done = await collectResult(result);
  const newBody = trimOuterMarkers(done);
  replaceWith(body, ...parseFragment(newBody).childNodes);
  return serialize(document);
}

async function failAfter(ms: number, message: RenderRequestMessage): Promise<never> {
  await new Promise(r => setTimeout(r, ms));
  throw new Error(`FAILED ${message.page.outputPath}`);
}

parentPort.on('message', async message => {
  switch (message.type) {
    case 'initialize-request': {
      if (!initialized) {
        await Promise.all(workerData.imports.map(async function importModule(bareSpec: string) {
          const spec = pathToFileURL(resolve(process.cwd(), bareSpec)).href.replace('.js', '.ts');
          try {
            await import(spec);
          } catch (e) {
            console.log(`${resolve(process.cwd(), fileURLToPath(spec))}: ${(e as Error).message}`, e);
            throw e;
          }
        })).then(() => {
          parentPort!.postMessage({
            type: 'initialize-response',
          } satisfies InitResponseMessage);
        });
      }
      initialized = true;
      break;
    }

    case 'render-request': {
      const { id, page } = message;
      const start = performance.now();
      let rendered: string | void;
      try {
        rendered = await Promise.race<string>([renderPage(message), failAfter(5_000, message)]);
      } catch (error) {
        console.error(error);
        return undefined;
      }
      const prefix = rendered ? 'Rendering took' : `Rendering ${chalk.red('FAILED')}`;
      const d = (performance.now() - start).toFixed(2);
      console.log(`${prefix} ${chalk.blue(d)}ms for ${message.page.outputPath}`);
      const type = 'render-response' as const;
      parentPort!.postMessage({ type, page, id, rendered } satisfies RenderResponseMessage);
      break;
    }
  }
});
