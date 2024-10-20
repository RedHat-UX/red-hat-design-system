/* eslint-disable no-console */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import type { LitElement, ReactiveController } from 'lit';
import type { RenderInfo } from '@lit-labs/ssr';
import type { RenderResult } from '@lit-labs/ssr/lib/render-result.js';
import type { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.ts';
import type { RenderResponseMessage, InitResponseMessage } from './lit.js';

import { register } from 'node:module';
import { resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { parentPort, workerData } from 'node:worker_threads';

import { register as registerTS } from 'tsx/esm/api';
import { render } from '@lit-labs/ssr';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';

class RHDSSSRableRenderer extends LitElementRenderer {
  static isRHDSSSRController(controller: ReactiveController): controller is RHDSSSRController {
    return !!(controller as RHDSSSRController).isRHDSSSRController;
  }

  * setupSSRControllers(renderInfo: RenderInfo) {
    const controllers =
      (this.element as LitElement & { _$EO: ReactiveController[] })._$EO ?? [];
    console.log(`RENDERSHADOW ${this.tagName}`, { controllers });
    for (const controller of controllers ?? []) {
      if (RHDSSSRableRenderer.isRHDSSSRController(controller) && controller.ssrSetup) {
        console.log('FOUND CONTROLLER');
        yield controller.ssrSetup(renderInfo)
            .catch(e => console.error(e));
      }
    }
    console.log(`RENDERSHADOW ${this.tagName} done with controllers`);
  }

  * renderShadow(renderInfo: RenderInfo) {
    yield* this.setupSSRControllers(renderInfo);
    yield* super.renderShadow(renderInfo);
  }
}

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

let initialized = false;

parentPort.on('message', async message => {
  switch (message.type) {
    case 'initialize-request': {
      if (!initialized) {
        const { tsconfig } = workerData;
        registerTS({ tsconfig });
        register('./lit-css-node.ts', import.meta.url);
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
      console.log(message);
      let rendered: string | undefined;
      try {
        const done = await collectResult(render(unsafeHTML(message.content), {
          elementRenderers: [RHDSSSRableRenderer],
          page: message.page,
        } as unknown as RenderInfo));
        rendered = trimOuterMarkers(done);
      } catch (e) {
        console.error(e);
      }
      parentPort!.postMessage({
        type: 'render-response',
        page: message.page,
        rendered,
      } satisfies RenderResponseMessage);
      break;
    }
  }
});
