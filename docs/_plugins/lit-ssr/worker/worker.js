/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { parentPort } from 'worker_threads';
import { render } from '@lit-labs/ssr';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';

if (parentPort === null) {
  throw new Error('worker.js must only be run in a worker thread');
}

let initialized = false;

parentPort.on('message', async message => {
  switch (message.type) {
    case 'initialize-request': {
      if (!initialized) {
        const { imports } = message;
        await Promise.all(imports.map(module => import(module)));
        const response = { type: 'initialize-response' };
        parentPort.postMessage(response);
      }
      initialized = true;
      break;
    }

    case 'render-request': {
      const { id, content, page } = message;
      const result = render(unsafeHTML(content), {
        elementRenderers: [
          class UxdotPatternRenderer extends LitElementRenderer {
            * renderShadow(renderInfo) {
              if (this.tagName === 'uxdot-pattern') {
                this.element.ssrController.page = page;
                yield [this.element.ssrController.hostUpdate()];
              }
              yield* super.renderShadow(renderInfo);
            }
          },
        ],
      });
      const rendered = await collectResult(result);
      const response = {
        type: 'render-response',
        id,
        rendered,
      };
      parentPort.postMessage(response);
      break;
    }
  }
});

