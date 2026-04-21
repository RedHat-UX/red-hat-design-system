import type { ChildPart } from 'lit-html';
import { noChange } from 'lit';
import { Directive, type PartInfo } from 'lit/directive.js';
/**
 * SSRAdopt: a Lit directive that adopts SSR'd DOM during hydration.
 *
 * ## Problem
 *
 * The server SSR controller uses `unsafeHTML(content)` to inject pattern
 * demos and highlighted code into uxdot-pattern's shadow DOM. Internally,
 * `unsafeHTML` impersonates a `TemplateResult` (via `_$litType$`), so Lit
 * SSR serializes it with a `<!--lit-part DIGEST-->` marker whose digest is
 * derived from the content string.
 *
 * On the client, the exact server content string is unrecoverable: browser
 * HTML parsing normalizes the serialization differently from parse5, and
 * SSR adds `defer-hydration` attributes that were absent in the original.
 * Any string mismatch produces a different digest, and the hydration walker
 * throws "Unexpected TemplateResult rendered to part."
 *
 * ## Solution
 *
 * Instead of reproducing the content, we create a **no-op** TemplateResult
 * with empty strings and zero bindings, then patch the SSR comment marker
 * to carry this no-op template's digest. The hydration walker sees a
 * matching digest, pushes a `template-instance` with no parts, and
 * gracefully skips every nested `<!--lit-part-->` / `<!--lit-node-->`
 * marker inside the region. The existing DOM is left untouched.
 *
 * On subsequent re-renders (e.g. color-palette change), the directive
 * returns `noChange`, preserving the adopted content indefinitely.
 *
 * ## Lit-internal coupling
 *
 * This module touches two pieces of Lit internals that could break across
 * versions:
 *
 * 1. **Marker patching** (`part.startNode.data = ...`):
 *    `ChildPart.startNode` is a *public getter* (documented in lit-html's
 *    d.ts). Writing to the comment node's `.data` is standard DOM. However,
 *    the hydration walker reads `marker.data` *after* `resolveDirective`
 *    returns -- if Lit ever reorders that sequence (reading marker data
 *    before resolving the directive), the patch would be too late.
 *    See lit-html source: hydrate-lit-html.js, openChildPart.
 *
 * 2. **Fake TemplateResult** (`{ _$litType$: 1, strings, values: [] }`):
 *    This mirrors what `unsafeHTML` itself does (lit-html/directives/
 *    unsafe-html.js). The `_$litType$` property name is declared with
 *    bracket notation (`['_$litType$']`) to survive minification, and Lit
 *    checks it with `isTemplateResult()`. If Lit changes the result type
 *    tag, both `unsafeHTML` and this directive would break simultaneously,
 *    making it easy to detect.
 *
 * 3. **`digestForTemplateResult`** is a public export of
 *    `@lit-labs/ssr-client`. The digest algorithm (DJB2 variant, base64
 *    encoded) is stable across lit-html 3.x and @lit-labs/ssr-client 1.x.
 */
declare class SSRAdoptDirective extends Directive {
    #private;
    constructor(partInfo: PartInfo);
    update(part: ChildPart): {
        _$litType$: number;
        strings: string[] & {
            raw: readonly string[];
        };
        values: unknown[];
    } | typeof noChange;
    render(): symbol;
}
/**
 * A directive that tells Lit's hydration walker to adopt the existing
 * SSR'd DOM without re-rendering. Use in place of `unsafeHTML` on the
 * client side of a server/client SSR controller split.
 *
 * ```ts
 * import { ssrAdopt } from './ssr-adopt-directive.js';
 *
 * class MySSRControllerClient extends RHDSSSRController {
 *   content = ssrAdopt();
 * }
 * ```
 */
export declare const ssrAdopt: () => import("lit-html/directive.js").DirectiveResult<typeof SSRAdoptDirective>;
export {};
