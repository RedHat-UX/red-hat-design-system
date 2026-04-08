import { LitElement } from 'lit';
/**
 * Sidebar content block for prose, promotions, or calls to action
 * within `<rh-footer>`. Use when the footer needs content alongside
 * link columns. Should contain a heading in the `header` slot for
 * accessible labeling via `aria-labelledby`. Tab navigates
 * interactive children.
 *
 * @summary Sidebar content block for footer prose or promotions
 */
export declare class RhFooterBlock extends LitElement {
    static readonly styles: CSSStyleSheet;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-block': RhFooterBlock;
    }
}
