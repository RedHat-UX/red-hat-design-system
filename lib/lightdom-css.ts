import { isServer, type ReactiveElement } from 'lit';

import type { Constructor } from '@lit/reactive-element/decorators/base.js';

/**
 * Symbol key for storing the lightdom CSS URL on the element class.
 * Used by the SSR renderer to find and emit `<style>` tags.
 */
export const LIGHTDOM_CSS_URL = Symbol.for('rhds.lightdomCSSUrl');

/** Per-root deduplication for client-side adoption */
const roots = new WeakMap<Document | ShadowRoot, Map<string, Promise<void>>>();

function adoptIntoRoot(href: string, root: Document | ShadowRoot): Promise<void> {
  let sheets = roots.get(root);
  if (!sheets) {
    roots.set(root, sheets = new Map());
  }
  if (!sheets.has(href)) {
    sheets.set(href, (async () => {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(await fetch(href).then(r => r.text()));
      root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
    })());
  }
  return sheets.get(href)!;
}

/** Returns the lightdom CSS URL for a decorated element class, if any. */
export function getLightdomCSSUrl(
  klass: abstract new (...args: never) => unknown,
): URL | undefined {
  const record = klass as unknown as Record<symbol, unknown>;
  return record[LIGHTDOM_CSS_URL] as URL | undefined;
}

/**
 * Automatically loads lightdom CSS into the element's root node.
 *
 * On the client, adopts the stylesheet into the element's root (document or
 * shadow root) via `adoptedStyleSheets`, deduplicating per root.
 *
 * On the server, stores the resolved URL as a static property so the SSR
 * renderer can emit an inline `<style>` tag.
 *
 * @param baseUrl - pass `import.meta.url` from the element's module
 * @param path - relative path to the lightdom CSS file
 *
 * @example
 * ```ts
 * @customElement('rh-table')
 * @lightdomCSS(import.meta.url, './rh-table-lightdom.css')
 * export class RhTable extends LitElement { }
 * ```
 */
export function lightdomCSS(baseUrl: string, path: string) {
  return function <T extends Constructor<ReactiveElement>>(klass: T): T {
    const url = new URL(path, baseUrl);
    Object.defineProperty(klass, LIGHTDOM_CSS_URL, { value: url, configurable: true });

    if (isServer) {
      return klass;
    }

    const { href } = url;
    return class LightdomCSSElement extends klass {
      override connectedCallback() {
        super.connectedCallback();
        const root = this.getRootNode();
        if (root instanceof Document || root instanceof ShadowRoot) {
          adoptIntoRoot(href, root);
        }
      }
    } as unknown as T;
  };
}
