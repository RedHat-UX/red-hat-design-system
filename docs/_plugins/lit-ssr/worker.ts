import type { CSSResult, CSSResultOrNative, LitElement, ReactiveController } from 'lit';
import type { RenderInfo } from '@lit-labs/ssr';
import type { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.ts';
import type { RenderRequestMessage, RenderResponseMessage } from './lit.js';
import type { Thunk, ThunkedRenderResult } from '@lit-labs/ssr/lib/render-result.js';

import '@patternfly/pfe-core/ssr-shims.js';

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
import { transform } from 'lightningcss';

interface WorkerInitData {
  imports: string[];
  tsconfig: string;
}

const { imports, tsconfig } = Piscina.workerData as WorkerInitData;

registerTS({ tsconfig });
register('./lit-css-node.ts', import.meta.url);

/* eslint-disable no-console */
for (const bareSpec of imports) {
  const conventionalTagName = bareSpec.split('/')?.pop()?.split('.').shift();
  if (!conventionalTagName) {
    throw new Error(`${bareSpec} does not appear to be an element module`);
  }
  if (!customElements.get(conventionalTagName)) {
    const spec = pathToFileURL(resolve(process.cwd(), bareSpec)).href.replace('.js', '.ts');
    try {
      await import(spec);
      if (!customElements.get(conventionalTagName)) {
        throw new Error(`${conventionalTagName} declaration loaded, but not defined!`);
      }
    } catch (e) {
      console.warn((e as Error)?.message?.trim() || e);
      throw new Error(`FAILED to load ${bareSpec}`);
    }
  }
}
/* eslint-enable no-console */

class RHDSSSRableRenderer extends LitElementRenderer {
  static styleCache = new Map<string, Thunk>();

  static isRHDSSSRController(ctrl: ReactiveController): ctrl is RHDSSSRController {
    return !!(ctrl as RHDSSSRController).isRHDSSSRController;
  }

  getControllers() {
    const element = (this.element as LitElement & { _$EO: Set<ReactiveController> });
    return Array.from(element._$EO ?? new Set())
        .filter(RHDSSSRableRenderer.isRHDSSSRController);
  }

  setupController(controller: RHDSSSRController, renderInfo: RenderInfo): Thunk {
    return async () => {
      if (controller.ssrSetup) {
        await controller.ssrSetup(renderInfo);
      }
      return '';
    };
  }

  override renderShadow(renderInfo: RenderInfo): ThunkedRenderResult {
    return [
      // set up controllers
      ...this.#setupControllers(renderInfo),
      // Render styles.
      this.#renderStyles(),
      // Render template
      ...renderValue(
        // @ts-expect-error: if upstream can do it, so can we
        this.element.render(),
        renderInfo,
      ),
    ];
  }

  #setupControllers(renderInfo: RenderInfo): Thunk[] {
    return this.getControllers()
        .flatMap(controller =>
          this.setupController(controller, renderInfo));
  }

  #renderStyles(): Thunk {
    const styles = (this.element.constructor as typeof LitElement).elementStyles;
    if (styles !== undefined && styles.length > 0) {
      return () => [
        '<style>',
        ...this.#thunkStyles(styles),
        '</style>',
      ];
    } else {
      return () => '';
    }
  }

  #thunkStyles(styles: CSSResultOrNative[]): Thunk[] {
    return styles.flatMap(style => {
      const { cssText } = style as CSSResult;
      if (!RHDSSSRableRenderer.styleCache.has(cssText)) {
        const processed = () => {
          try {
            const { code } = transform({
              filename: 'constructed-stylesheet.css',
              code: Buffer.from(cssText),
              minify: true,
            });
            return code.toString();
          } catch {
            return cssText;
          }
        };
        RHDSSSRableRenderer.styleCache.set(cssText, processed);
      }
      return [RHDSSSRableRenderer.styleCache.get(cssText)!];
    });
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
  slotControllerElements,
}: RenderRequestMessage): Promise<RenderResponseMessage> {
  const start = performance.now();
  const tpl = html(new UnsafeHTMLStringsArray(content));
  const result = render(tpl, {
    elementRenderers,
    page,
    slotControllerElements,
  } as unknown as RenderInfo);
  const rendered = await collectResult(result);
  const end = performance.now();
  return { page, rendered, durationMs: end - start };
}
