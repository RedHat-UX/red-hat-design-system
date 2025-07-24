import { LitElement, type PropertyValues } from 'lit';
/**
 * A code block applies special formatting to sections of code.
 *
 * @summary Formats code strings within a container
 *
 * @alias code-block
 */
export declare class RhCodeBlock extends LitElement {
    #private;
    private static actionIcons;
    static styles: CSSStyleSheet[];
    /**
     * Space- or comma-separated list of code block action buttons to display, containing either 'copy', 'wrap', or both.
     * 'copy' adds a button that copies the text content to the clipboard. 'wrap' adds a button that toggles line wrap.
     *
     * To override the default labels, e.g. for purposes of internationalization, use the
     * `action-label-copy` and `action-label-wrap` slots. Each slot may receive two elements,
     * one for the action's default state (e.g. "Copy to clipboard"),
     * and one for the actions alternative state, e.g. "Copied!".
     * The active-state element must have the attributes `hidden data-code-block-state="active"`
     *
     * @example html```
     *          <rh-code-block actions="copy wrap">
     *            <span slot="action-label-copy">Copy to Clipboard</span>
     *            <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
     *            <span slot="action-label-wrap">Toggle word wrap</span>
     *            <span slot="action-label-wrap" hidden data-code-block-state="active">Toggle overflow</span>
     *          </rh-code-block>
     *          ```
     */
    actions: ('copy' | 'wrap')[];
    /**
     * When set to "client", `<rh-code-block>` will automatically highlight the source using Prism.js
     * When set to "Prerendered", `<rh-code-block>` will apply supported RHDS styles to children with
     * prismjs classnames in the element's root.
     */
    highlighting?: 'client' | 'prerendered';
    /** When set along with `highlighting="client"`, this grammar will be used to highlight source code */
    language?: 'html' | 'css' | 'javascript' | 'typescript' | 'bash' | 'ruby' | 'yaml' | 'json';
    /** When set, the code block displays with compact spacing */
    compact: boolean;
    /** When set, the code block source code will be dedented */
    dedent: boolean;
    /** When set, the code block is resizable */
    resizable: boolean;
    /** When set, the code block occupies it's full height, without scrolling */
    fullHeight: boolean;
    /** When set, lines in the code snippet wrap */
    wrap: boolean;
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
