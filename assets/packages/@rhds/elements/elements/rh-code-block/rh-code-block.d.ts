import { LitElement } from 'lit';
/**
 * A code block is formatted text within a container.
 * @summary Formatted code strings in a container.
 * @slot - A non-executable script tag containing the sample content. JavaScript
 *         samples should use the type `text/sample-javascript`. HTML samples
 *         containing script tags must escape the closing `</script>` tag.
 */
export declare class RhCodeBlock extends LitElement {
    static styles: import("lit").CSSResult[];
    /** When set, the code block displays with compact spacing */
    compact: boolean;
    /** When set, the code block is resizable */
    resizable: boolean;
    /** When set, the code block occupies it's full height, without scrolling */
    fullHeight: boolean;
    private on?;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-code-block': RhCodeBlock;
    }
}
