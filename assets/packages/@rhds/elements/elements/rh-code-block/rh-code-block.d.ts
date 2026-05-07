import { LitElement, type PropertyValues } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Fired when the user activates the copy button via click, Enter, or Space.
 * Provides `content` (string) for clipboard use. Listeners SHOULD modify
 * `content` to strip prompts. MUST call `preventDefault()` to cancel.
 * Screen reader users activate this via the keyboard-accessible button.
 */
export declare class RhCodeBlockCopyEvent extends Event {
    /** Text content to copy */
    content: string;
    constructor(
    /** Text content to copy */
    content: string);
}
/**
 * A read-only code viewer for formatted snippets that allows syntax
 * highlighting, line numbers, and copy/wrap actions. Source must be
 * in a `<script type="text/sample-...">` or `<pre>` child. The code
 * region is keyboard-scrollable; screen readers announce it via ARIA
 * as a scrollable area. Authors should avoid nesting interactive
 * elements inside the code slot.
 *
 * @summary Formats code strings within a container
 *
 * @fires {RhCodeBlockCopyEvent} copy - Fired when the user clicks the copy
 *        action button or activates it with Enter/Space. The event's
 *        `content` field (string) contains the text to copy. Listeners MAY
 *        modify `event.content` to alter the copied text (e.g. to strip a
 *        shell prompt). Call `event.preventDefault()` to cancel the copy.
 */
export declare class RhCodeBlock extends LitElement {
    #private;
    private static actionIcons;
    static styles: CSSStyleSheet[];
    /**
     * Space- or comma-separated list of action buttons to display.
     * Accepts `'copy'`, `'wrap'`, or both (e.g. `"copy wrap"`). `'copy'` adds a
     * clipboard button; `'wrap'` adds a word-wrap toggle. Defaults to `[]`
     * (no actions shown). Labels can be overridden via the `action-label-copy`
     * and `action-label-wrap` slots for internationalization. The active-state
     * element must have `hidden data-code-block-state="active"`.
     *
     * @example ```html
     *          <rh-code-block actions="copy wrap">
     *            <span slot="action-label-copy">Copy to Clipboard</span>
     *            <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
     *            <span slot="action-label-copy" hidden data-code-block-state="failed">Copy failed!</span>
     *            <span slot="action-label-wrap">Toggle word wrap</span>
     *            <span slot="action-label-wrap" hidden data-code-block-state="active">Toggle overflow</span>
     *          </rh-code-block>
     *          ```
     */
    actions: ('copy' | 'wrap')[];
    /**
     * Controls how syntax highlighting is applied. Accepts `'client'` or
     * `'prerendered'`. When `'client'`, Prism.js is loaded on-demand and
     * highlights source from `<script>` children. When `'prerendered'`,
     * RHDS token colors are applied to existing Prism class names in child
     * `<pre>` elements. Defaults to `undefined` (no highlighting).
     */
    highlighting?: 'client' | 'prerendered';
    /**
     * Specifies the Prism.js grammar for client-side highlighting. Requires
     * `highlighting="client"`. Accepts `'html'` | `'css'` | `'javascript'` |
     * `'typescript'` | `'bash'` | `'ruby'` | `'yaml'` | `'json'`. Defaults
     * to `undefined`. When omitted, no syntax coloring is applied.
     */
    language?: 'html' | 'css' | 'javascript' | 'typescript' | 'bash' | 'ruby' | 'yaml' | 'json';
    /** When true, reduces internal padding for tighter layouts. Defaults to false. */
    compact: boolean;
    /** When true, strips common leading whitespace from source lines before rendering. Defaults to false. */
    dedent: boolean;
    /** When true, allows the user to vertically resize the code area by dragging. Defaults to false. */
    resizable: boolean;
    /** When true, the code block expands to its full height without scroll truncation. Defaults to false. */
    fullHeight: boolean;
    /** When true, long lines wrap instead of scrolling horizontally. Defaults to false. */
    wrap: boolean;
    /** Controls line-number visibility. Accepts `'hidden'` or `'visible'`. When `'hidden'`, the gutter column is removed. Defaults to `undefined` (visible). */
    lineNumbers?: 'hidden' | 'visible';
    private copyButtonState;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    protected updated(changed: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-code-block': RhCodeBlock;
    }
}
