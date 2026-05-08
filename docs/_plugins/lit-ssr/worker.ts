import type { CSSResult, LitElement, ReactiveController } from "lit";
import type { RenderInfo } from "@lit-labs/ssr";
import type { RHDSSSRController } from "@rhds/elements/lib/ssr-controller.ts";
import type { RenderRequestMessage, RenderResponseMessage } from "./lit.js";
import type { ThunkedRenderResult } from "@lit-labs/ssr/lib/render-result.js";

import "@patternfly/pfe-core/ssr-shims.js";

import { LitElementRenderer } from "@lit-labs/ssr/lib/lit-element-renderer.js";

import { register } from "node:module";
import { register as registerTS } from "tsx/esm/api";

import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { html } from "lit";
import { render } from "@lit-labs/ssr";
import { collectResult } from "@lit-labs/ssr/lib/render-result.js";
import { renderValue } from "@lit-labs/ssr/lib/render-value.js";

import Piscina from "piscina";
import { transform, Features } from "lightningcss";

interface WorkerInitData {
  imports: string[];
}

const { imports } = Piscina.workerData as WorkerInitData;

registerTS();
register("./lit-css-node.ts", import.meta.url);

/* eslint-disable no-console */
for (const bareSpec of imports) {
  const conventionalTagName = bareSpec.split("/")?.pop()?.split(".").shift();
  if (!conventionalTagName) {
    throw new Error(`${bareSpec} does not appear to be an element module`);
  }
  if (!customElements.get(conventionalTagName)) {
    const spec = pathToFileURL(resolve(process.cwd(), bareSpec)).href.replace(
      ".js",
      ".ts"
    );
    try {
      await import(spec);
      if (!customElements.get(conventionalTagName)) {
        throw new Error(
          `${conventionalTagName} declaration loaded, but not defined!`
        );
      }
    } catch (e) {
      console.warn((e as Error)?.message?.trim() || e);
      throw new Error(`FAILED to load ${bareSpec}`);
    }
  }
}
/* eslint-enable no-console */

const SHEET_MARKER_RE = /^\/\*\s*@sheet:([\w-]+)\s*\*\//;
const specifierMap = new Map<string, string>();

class RHDSSSRableRenderer extends LitElementRenderer {
  // Eagerly processed CSS strings, not thunks. connectedCallback() must store
  // the final CSS in specifierMap before rendering so post-processing can build
  // the shared <style type="module"> blocks for <head>. A thunk would be too late.
  static styleCache = new Map<string, string>();

  static isRHDSSSRController(
    ctrl: ReactiveController
  ): ctrl is RHDSSSRController {
    return !!(ctrl as RHDSSSRController).isRHDSSSRController;
  }

  #specifiers: string[] = [];

  getControllers() {
    const element = this.element as LitElement & {
      _$EO: Set<ReactiveController>;
    };
    return Array.from(element._$EO ?? new Set()).filter(
      RHDSSSRableRenderer.isRHDSSSRController
    );
  }

  // Extract @sheet: markers from elementStyles after the element is constructed.
  // Builds #specifiers for this instance's host/template attributes, and populates
  // the page-level specifierMap so each stylesheet is processed and emitted only once.
  override connectedCallback() {
    super.connectedCallback();
    const styles =
      (this.element.constructor as typeof LitElement).elementStyles ?? [];
    for (const style of styles) {
      const { cssText } = style as CSSResult;
      const match = cssText.match(SHEET_MARKER_RE);
      if (match) {
        const [, specifier] = match;
        this.#specifiers.push(specifier);
        if (!specifierMap.has(specifier)) {
          const stripped = cssText.slice(match[0].length).trimStart();
          specifierMap.set(specifier, this.#processCSS(stripped, specifier));
        }
      }
    }
  }

  override renderAttributes() {
    const result = super.renderAttributes();
    if (this.#specifiers.length > 0) {
      result.push(
        ` shadowrootadoptedstylesheets="${this.#specifiers.join(" ")}"`
      );
    }
    return result;
  }

  override renderShadow(renderInfo: RenderInfo): ThunkedRenderResult {
    const result: ThunkedRenderResult = [];

    if (this.#specifiers.length > 0) {
      result.push(`<!--@adopted:${this.#specifiers.join(" ")}-->`);
    }

    // Fallback for styles without @sheet: markers. Marked styles are already in
    // specifierMap and will be emitted once in <head>. Anything else renders
    // inline so nothing breaks.
    const inlineStyles = (
      (this.element.constructor as typeof LitElement).elementStyles ?? []
    ).filter((s) => !SHEET_MARKER_RE.test((s as CSSResult).cssText));
    if (inlineStyles.length > 0) {
      result.push(() => [
        "<style>",
        ...inlineStyles.map((s) => this.#processCSS((s as CSSResult).cssText)),
        "</style>",
      ]);
    }

    result.push(async () => {
      for (const controller of this.getControllers()) {
        if (controller.ssrSetup) {
          await controller.ssrSetup(renderInfo);
        }
      }
      return renderValue(
        // @ts-expect-error: if upstream can do it, so can we
        this.element.render(),
        renderInfo
      );
    });

    return result;
  }

  #processCSS(cssText: string, cacheKey?: string): string {
    const key = cacheKey ?? cssText;
    if (!RHDSSSRableRenderer.styleCache.has(key)) {
      try {
        const { code } = transform({
          filename: "constructed-stylesheet.css",
          code: Buffer.from(cssText),
          minify: true,
          include: Features.Nesting,
        });
        // Fix lightningcss normalizing inherit to normal for color-scheme
        // https://github.com/parcel-bundler/lightningcss/issues/821#issuecomment-3719524299
        RHDSSSRableRenderer.styleCache.set(
          key,
          code
            .toString()
            .replaceAll("color-scheme:normal", "color-scheme:inherit")
        );
      } catch {
        RHDSSSRableRenderer.styleCache.set(key, cssText);
      }
    }
    return RHDSSSRableRenderer.styleCache.get(key)!;
  }
}

const elementRenderers = [RHDSSSRableRenderer];

class UnsafeHTMLStringsArray extends Array {
  public raw: readonly string[];
  constructor(string: string) {
    super();
    this.push(string);
    this.raw = [string];
  }
}

function postProcessAdoptedStyleSheets(html: string): string {
  if (specifierMap.size === 0) {
    return html;
  }

  const TEMPLATE_RE = new RegExp(
    '(<template\\s+shadowroot="[^"]*"\\s+shadowrootmode="[^"]*"' +
      "(?:\\s+shadowrootdelegatesfocus)?)(>)\\s*" +
      "<!--@adopted:([\\w -]+)-->",
    "g"
  );
  let processed = html.replace(
    TEMPLATE_RE,
    (_, open, close, specs) =>
      `${open} shadowrootadoptedstylesheets="${specs.trim()}"${close}`
  );

  // Emit each <style type="module"> just before the first host element that
  // references it, so style definitions appear near their consumers in
  // document order rather than batched in <head>.
  const emitted = new Set<string>();
  processed = processed.replace(
    /(<[\w-]+\s[^>]*shadowrootadoptedstylesheets=")([\w -]+)(")/g,
    (match, before, specs, after) => {
      const newBlocks = specs
        .trim()
        .split(/\s+/)
        .filter((s: string) => !emitted.has(s) && specifierMap.has(s))
        .map((s: string) => {
          emitted.add(s);
          return `<style type="module" specifier="${s}">${specifierMap.get(
            s
          )}</style>\n`;
        })
        .join("");
      return `${newBlocks}${before}${specs}${after}`;
    }
  );

  return processed;
}

/**
 * Render a page using lit-ssr
 *
 * @param opts
 * @param opts.page
 * @param opts.content
 * @param opts.slotControllerElements
 */
export default async function renderPage({
  page,
  content,
  slotControllerElements,
}: RenderRequestMessage): Promise<RenderResponseMessage> {
  specifierMap.clear();
  const start = performance.now();
  const tpl = html(new UnsafeHTMLStringsArray(content));
  const result = render(tpl, {
    elementRenderers,
    page,
    slotControllerElements,
  } as unknown as RenderInfo);
  const rendered = await collectResult(result);
  const postProcessed = postProcessAdoptedStyleSheets(rendered);
  const end = performance.now();
  return { page, rendered: postProcessed, durationMs: end - start };
}
