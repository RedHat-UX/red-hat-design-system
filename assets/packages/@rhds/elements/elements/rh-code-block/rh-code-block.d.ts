import { LitElement, type PropertyValues } from 'lit';
/**
 * A code block is formatted text within a container.
 * @summary Formats code strings within a container
 * @slot - A non-executable script tag containing the sample content. JavaScript
 *         samples should use the type `text/sample-javascript`. HTML samples
 *         containing script tags must escape the closing `</script>` tag. Can
 *         also be a `<pre>` tag.
 * @slot action-label-copy - tooltip content for the copy action button
 * @slot action-label-wrap - tooltip content for the wrap action button
 * @slot show-more - text content for the expandable toggle button when the code
 *                   block is collapsed.
 * @slot show-less - text content for the expandable toggle button when the code
 *                   block is expanded.
 * @slot legend - `<dl>` element containing rh-badges in the `<dt>`
 *                and legend text in the `<dd>` elements
 */
export declare class RhCodeBlock extends LitElement {
    #private;
    private static actionIcons;
    static styles: CSSStyleSheet[];
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
    private on?;
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
/**
 * TODO: slotted fabs like this:
 *
 *```html
  <rh-tooltip slot="actions">
    <span slot="content">Copy to Clipboard</span>
    <span slot="content"
          hidden
          data-code-block-state="active">Copied!</span>
    <rh-fab icon="copy"
            data-code-block-action="copy"></rh-fab>
  </rh-tooltip>

  <rh-tooltip slot="actions">
    <span slot="content">Toggle linewrap</span>
    <span slot="content"
          hidden
          data-code-block-state="active">Toggle linewrap</span>
    <rh-fab icon="copy"
            data-code-block-action="copy"></rh-fab>
  </rh-tooltip>
  ````
 *
 */
