import { LitElement } from 'lit';
/**
 * Copyright notice for `<rh-footer-universal>`. Use when the footer
 * requires a legal copyright line. Authors should avoid overriding.
 *
 * @summary Copyright notice with auto-updating year
 */
export declare class RhFooterCopyright extends LitElement {
    static readonly styles: CSSStyleSheet;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-copyright': RhFooterCopyright;
    }
}
