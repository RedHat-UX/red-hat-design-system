import type { CSSResult, LitElement, ReactiveController } from 'lit';
import type { RenderInfo, RenderResult } from '@lit-labs/ssr';
import type { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.ts';
import type { RenderRequestMessage, RenderResponseMessage } from './lit.js';

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';

import { register } from 'node:module';
import { register as registerTS } from 'tsx/esm/api';

import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

import { html } from 'lit';
import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';
import { renderValue } from '@lit-labs/ssr/lib/render-value.js';

import Piscina from 'piscina';
import Postcss from 'postcss';
import cssnano from 'cssnano';

const postcss = Postcss([cssnano]);

interface WorkerInitData {
  imports: string[];
  tsconfig: string;
}

const { imports, tsconfig } = Piscina.workerData as WorkerInitData;

registerTS({ tsconfig });
register('./lit-css-node.ts', import.meta.url);

/* eslint-disable no-console */
try {
  await Promise
      .allSettled(imports.map(async function importModule(bareSpec: string) {
        const spec = pathToFileURL(resolve(process.cwd(), bareSpec)).href.replace('.js', '.ts');
        try {
          await import(spec);
        } catch (e) {
          console.log(`Failed to load ${bareSpec} from ${spec.replace(process.cwd(), '').replace('file://', '')}!`);
          console.warn((e as Error)?.message?.trim() || e);
        }
      }));
} catch (e) {
  console.error(e);
};
/* eslint-enable no-console */

class RHDSSSRableRenderer extends LitElementRenderer {
  static styleCache = new Map<string, Promise<string>>();

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
    // Render styles.
    const styles = (this.element.constructor as typeof LitElement).elementStyles;
    if (styles !== undefined && styles.length > 0) {
      yield '<style>';
      for (const style of styles) {
        const { cssText } = style as CSSResult;
        if (!RHDSSSRableRenderer.styleCache.has(cssText)) {
          RHDSSSRableRenderer.styleCache.set(cssText, postcss
              .process(cssText, { from: undefined })
              .then(r => r.css));
        }
        yield RHDSSSRableRenderer.styleCache.get(cssText)!;
      }
      yield '</style>';
    }
    // Render template

    yield* renderValue(
      // @ts-expect-error: if upstream can do it, so can we
      this.element.render(),
      renderInfo,
    );
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

/**
 * Render a page using lit-ssr
 *
 * @param opts
 * @param opts.page
 * @param opts.content
 */
export default async function renderPage({
  page,
  content,
}: RenderRequestMessage): Promise<RenderResponseMessage> {
  const start = performance.now();
  const tpl = html(new UnsafeHTMLStringsArray(content));
  const result = render(tpl, { elementRenderers, page } as unknown as RenderInfo);
  const rendered = await collectResult(result);
  const end = performance.now();
  return { page, rendered, durationMs: end - start };
}
