import { LitElement } from 'lit';
/**
 * Overlay
 * @slot - Place element content here
 */
export declare class RhNavigationPrimaryOverlay extends LitElement {
    static readonly styles: CSSStyleSheet[];
    open: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-primary-overlay': RhNavigationPrimaryOverlay;
    }
}
