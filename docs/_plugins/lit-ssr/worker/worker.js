/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/** @import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js' */
/** @import { ReactiveController } from 'lit' */

import { parentPort } from 'worker_threads';
import { render } from '@lit-labs/ssr';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';

import { ssrControllerMap } from '@rhds/elements/lib/ssr-controller.js';

if (parentPort === null) {
  throw new Error('worker.js must only be run in a worker thread');
}

let initialized = false;

/**
 * @param {ReactiveController} controller
 * @returns {controller is RHDSSSRController}
 */
function isRHDSSSRController(controller) {
  return !!controller.isRHDSSSRController;
}

parentPort.on('message', async message => {
  switch (message.type) {
    case 'initialize-request': {
      if (!initialized) {
        await Promise.all(message.imports.map(module => import(module)));
        parentPort.postMessage({ type: 'initialize-response' });
      }
      initialized = true;
      break;
    }

    case 'render-request': {
      const { id, content, page } = message;
      const result = render(unsafeHTML(content), {
        elementRenderers: [
          class RHDSSSRableRenderer extends LitElementRenderer {
            * renderShadow(renderInfo) {
              const controllers = ssrControllerMap.get(this.element);
              yield controllers?.map(async x => {
                if (isRHDSSSRController(x)) {
                  x.page = page;
                  await x.ssrSetup();
                  return [];
                }
              }) ?? [];
              yield* super.renderShadow(renderInfo);
            }
          },
        ],
      });
      const rendered = await collectResult(result);
      parentPort.postMessage({
        type: 'render-response',
        id,
        rendered,
      });
      break;
    }
  }
});

