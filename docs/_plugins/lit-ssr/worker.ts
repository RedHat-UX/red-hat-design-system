import type { LitElement, ReactiveController } from 'lit';
import type { RenderInfo, RenderResult } from '@lit-labs/ssr';
import type { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.ts';
import type { RenderRequestMessage } from './lit.js';

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';

import { register } from 'node:module';
import { register as registerTS } from 'tsx/esm/api';

import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

import { html } from 'lit';
import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';

import { getEachMessage, getOneMessage, sendMessage } from 'execa';

const msg = await getOneMessage();

const { imports, tsconfig } = msg as {
  imports: string[];
  tsconfig: string;
};

registerTS({ tsconfig });
register('./lit-css-node.ts', import.meta.url);

await Promise.all(imports.map(async function importModule(bareSpec: string) {
  const spec = pathToFileURL(resolve(process.cwd(), bareSpec)).href.replace('.js', '.ts');
  await import(spec);
}));

class RHDSSSRableRenderer extends LitElementRenderer {
  static isRHDSSSRController(ctrl: ReactiveController): ctrl is RHDSSSRController {
    return !!(ctrl as RHDSSSRController).isRHDSSSRController;
  }

  getControllers() {
    const element = (this.element as LitElement & { _$EO: Set<ReactiveController> });
    return Array.from(element._$EO ?? new Set())
        .filter(RHDSSSRableRenderer.isRHDSSSRController);
  }

  async setupController(controller: RHDSSSRController, renderInfo: RenderInfo) {
    if (controller.ssrSetup) {
      await controller.ssrSetup(renderInfo);
    }
    return '';
  }

  override* renderShadow(renderInfo: RenderInfo): RenderResult {
    for (const controller of this.getControllers()) {
      yield this.setupController(controller, renderInfo);
    }
    yield* super.renderShadow(renderInfo);
  }
}

const elementRenderers = [
  RHDSSSRableRenderer,
];

class UnsafeHTMLStringsArray extends Array {
  public raw: readonly string[];
  constructor(string: string) {
    super();
    this.push(string);
    this.raw = [string];
  }
}

for await (const message of getEachMessage() as AsyncIterableIterator<RenderRequestMessage>) {
  if (message.content) {
    const start = performance.now();
    const { page, content } = message;
    const tpl = html(new UnsafeHTMLStringsArray(content));
    const result = render(tpl, { elementRenderers, page } as unknown as RenderInfo);
    try {
      const rendered = await collectResult(result);
      const end = performance.now();
      await sendMessage({ page, rendered, durationMs: end - start });
    } catch (e) {
      console.log(...Object.keys(e.message));
    }
  }
}

