/* eslint-disable no-console */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import type { LitElement, ReactiveController } from 'lit';
import type { EleventyPage } from '@11ty/eleventy/src/UserConfig.js';
import type { RenderInfo } from '@lit-labs/ssr';
import type { RenderResult } from '@lit-labs/ssr/lib/render-result.js';
import type { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.ts';
import type {
  Message,
  RenderRequestMessage,
  InitRequestMessage,
  RenderResponseMessage,
  InitResponseMessage,
} from './lit.js';

import { register as registerTS } from 'tsx/esm/api';
import { register } from 'node:module';

import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parentPort } from 'worker_threads';
import { render } from '@lit-labs/ssr';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';

let ssrControllerMap: WeakMap<LitElement, RHDSSSRController[]>;

if (parentPort === null) {
  throw new Error('worker.js must be run in a worker thread');
}

class RHDSSSRableRenderer extends LitElementRenderer {
  seenElements = new Set();
  * renderShadow(renderInfo: RenderInfo & { page: EleventyPage }): RenderResult {
    if (!this.seenElements.has(this.element)) {
      this.seenElements.add(this);
      const controllers = ssrControllerMap.get(this.element) ?? [];
      yield Promise.resolve(controllers.map(async x => {
        if (isRHDSSSRController(x)) {
          await x.ssrSetup?.(renderInfo);
        }
        return [''];
      }));
    }
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

function isRHDSSSRController(controller: ReactiveController): controller is RHDSSSRController {
  return !!(controller as RHDSSSRController).isRHDSSSRController;
}

async function importModule(bareSpec: string) {
  const spec = pathToFileURL(resolve(process.cwd(), bareSpec)).href.replace('.js', '.ts');
  try {
    await import(spec);
  } catch (e) {
    console.log(`${spec.replace(`file://${process.cwd()}`, '')}: ${(e as Error).message}`, e);
    throw e;
  }
}

async function renderPage({ id, content, page }: RenderRequestMessage) {
  const renderInfo = { elementRenderers: [RHDSSSRableRenderer], page } as unknown as RenderInfo;
  const type = 'render-response' as const;
  let rendered: string | undefined;
  try {
    rendered = trimOuterMarkers(await collectResult(render(unsafeHTML(content), renderInfo)));
  } catch (e) {
    console.error(e);
    rendered = undefined;
  }
  parentPort!.postMessage({ type, id, rendered } satisfies RenderResponseMessage);
}

let initialized = false;

async function initialize({ imports, tsconfig }: InitRequestMessage) {
  registerTS({ tsconfig });
  register('./lit-css-node.ts', import.meta.url);
  ({ ssrControllerMap } = await import('@rhds/elements/lib/ssr-controller.ts'));
  if (!initialized) {
    await Promise.all(imports.map(importModule));
    parentPort!.postMessage({ type: 'initialize-response' } satisfies InitResponseMessage);
  }
  initialized = true;
}

parentPort.on('message', async (message: Message) => {
  switch (message.type) {
    case 'initialize-request': return initialize(message);
    case 'render-request': return renderPage(message);
  }
});
