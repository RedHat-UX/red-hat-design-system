import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * The **back to top** component is a shortcut that allows users to quickly navigate to the top of a lengthy content page.
 * @summary A shortcut that allows users to quickly navigate to the top of a lengthy content page.
 * @csspart trigger - The `<a>` or `<pf-button>` element
 * @slot icon
 *       Contains the prefix icon to display before the link or button.
 * @slot
 *       Text to display inside the link or button.
 * @cssprop {<length>} [--pf-c-back-to-top--Right=3rem`]
 * @cssprop {<length>} [--pf-c-back-to-top--Bottom=1.5rem`]
 * @cssprop [--pf-c-back-to-top--c-button--BoxShadow=0 0.75rem 0.75rem -0.5rem rgba(3, 3, 3, 0.18)]
 * @cssprop {<length>} [--pf-c-button--FontSize=0.75rem]
 * @cssprop {<length>|<percentage>}  [--pf-c-button--BorderRadius=30em]
 * @cssprop {<length>} [--pf-c-button--PaddingTop=0.25rem]
 * @cssprop {<length>} [--pf-c-button--PaddingRight=0.5rem]
 * @cssprop {<length>} [--pf-c-button--PaddingBottom=0.25rem]
 * @cssprop {<length>} [--pf-c-button--PaddingLeft=0.5rem]
 * @cssprop {<color>} [--pf-c-button--m-primary--Color=#fff]
 * @cssprop {<color>} [--pf-c-button--m-primary--BackgroundColor=#06c]
 * @cssprop {<length>} [--pf-c-button__icon--m-end--MarginLeft=0.25rem]
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
