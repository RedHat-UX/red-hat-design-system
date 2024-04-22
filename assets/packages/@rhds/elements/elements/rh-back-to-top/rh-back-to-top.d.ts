import { LitElement, type PropertyValues } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * Back to top component is a fragment link that allows users to quickly navigate
 * to the top of a lengthy content page.
 *
 * @summary A shortcut to the top of the page content
 *
 * @csspart trigger - back to top link anchor element

 * @slot - Text for the back to top link
 *
 */
export declare class RhBackToTop extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Flag to always show back to top button, defaults to false. */
    visible?: 'always' | undefined;
    /** Element selector to spy on for scrolling. Not passing a selector defaults to spying on window scroll events */
    scrollableSelector?: string;
    /** Distance from the top of the scrollable element to trigger the visibility of the back to top button */
    scrollDistance: number;
    /** Page fragment link to target element, must include hash ex: #top */
    href?: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changed: PropertyValues<this>): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-back-to-top': RhBackToTop;
    }
}
