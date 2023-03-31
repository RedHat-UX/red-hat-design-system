import { LitElement } from 'lit';
/**
 * @summary An overlay element to cover content with an opacity when navigation is expanded.
 */
export declare class RhNavigationSecondaryOverlay extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    open: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary-overlay': RhNavigationSecondaryOverlay;
    }
}
