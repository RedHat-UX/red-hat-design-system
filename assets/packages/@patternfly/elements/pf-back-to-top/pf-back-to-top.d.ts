import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * The **back to top** component is a shortcut that allows users to quickly navigate to the top of a lengthy content page.
 * @summary A shortcut that allows users to quickly navigate to the top of a lengthy content page.
 * @alias Back to Top
 */
export declare class PfBackToTop extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Shorthand for the `icon` slot, the value is icon name */
    icon?: string;
    /** Icon set for the `icon` property */
    iconSet?: string;
    /** Flag to always show back to top button, defaults to false. */
    alwaysVisible: boolean;
    /** Element selector to spy on for scrolling. Not passing a selector defaults to spying on window scroll events */
    scrollableSelector?: string;
    /** Distance from the top of the scrollable element to trigger the visibility of the back to top button */
    scrollDistance: number;
    /** Accessible name for the back-to-top link, use when component does not have slotted text */
    label?: string;
    /** Page fragment link to target element, must include hash ex: #top */
    href?: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changed: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-back-to-top': PfBackToTop;
    }
}
