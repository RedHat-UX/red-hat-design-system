import { LitElement } from 'lit';
export { RhFooterUniversal } from './rh-footer-universal.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';
import './rh-footer-social-link.js';
import './rh-footer-links.js';
import './rh-footer-block.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
/**
 * A footer displays secondary content and legal information to users who reach the bottom of a page.
 *
 * @summary Displays secondary information at the bottom of a page
 *
 * @alias footer
 *
 */
export declare class RhFooter extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: CSSStyleSheet[];
    /**
     * Isomorphic import.meta.url function
     * Requires a node.js dom shim that sets window.location
     */
    static getImportURL(relativeLocation: string | URL): string | URL;
    /**
     * ScreenSizeController effects callback to set #compact is true when viewport
     * `(min-width: ${tabletLandscapeBreakpoint})`.
     */
    protected screenSize: ScreenSizeController;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private static LISTS_SELECTOR;
    /**
     * Get any `<ul>`s that are in the designated link slots
     * and synchronously update each list and header if we need to.
     */
    updateAccessibility(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer': RhFooter;
    }
}
