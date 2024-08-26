import type { PropertyValues, TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { type Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
/**
 * A **tooltip** is in-app messaging used to identify elements on a page with short,
 * clarifying text.
 * @summary Toggle the visibility of helpful or contextual information.
 * @slot
 *       This slot wraps around the element that should be used to invoke the tooltip content to display.
 *       Typically this would be an icon, button, or other small sized element.
 * @slot content
 *       This slot renders the content that will be displayed inside of the tooltip.
 *       Typically this would include a string of text without any additional elements.
 *       This element is wrapped with a div inside of the component to give it the stylings and background colors.
 * @cssprop     {<color>} [--pf-c-tooltip__content--BackgroundColor=#1b1d21]
 *              Sets the background color for the tooltip content.
 *
 * @cssprop     {<color>} [--pf-c-tooltip__content--Color=#e0e0e0]
 *              Sets the font color for the tooltip content.
 *
 * @cssprop     {<number>} [--pf-c-tooltip--line-height=1.5]
 *              Sets the font color for the tooltip content.
 *
 * @cssprop     {<length>} [--pf-c-tooltip--MaxWidth=18.75rem]
 *              Maximum width for the tooltip.
 *
 * @cssprop     [--pf-c-tooltip--BoxShadow=0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06)]
 *              Box shadow for the tooltip.
 *
 * @cssprop     {<length>} [--pf-c-tooltip__content--PaddingTop=0.5rem]
 *              Top padding for the tooltip.
 *
 * @cssprop     {<length>} [--pf-c-tooltip__content--PaddingRight=0.5rem]
 *              Right padding for the tooltip.
 *
 * @cssprop     {<length>} [--pf-c-tooltip__content--PaddingBottom=0.5rem]
 *              Bottom padding for the tooltip.
 *
 * @cssprop     {<length>} [--pf-c-tooltip__content--PaddingLeft=0.5rem]
 *              Left Padding for the tooltip.
 *
 * @cssprop     [--pf-c-tooltip__content--FontSize=0.875rem]
 *              Font size for the tooltip content.
 *
 * @cssprop     {<length>} [--pf-c-tooltip__arrow--Width=0.5rem]
 *              Tooltip arrow width.
 *
 * @cssprop     {<length>} [--pf-c-tooltip__arrow--Height=0.5rem]
 *              Tooltip arrow height.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-top--TranslateX=-50]
 *              Positions the tooltip arrow along the x axis for `top` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-top--TranslateY=50]
 *              Positions the tooltip arrow along the y axis for `top` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-top--Rotate=45deg]
 *              Rotates the tooltip arrow based on degrees of movement for `top` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-right--TranslateX=-50]
 *              Positions the tooltip arrow along the x axis for `right` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-right--TranslateY=-50]
 *              Positions the tooltip arrow along the y axis for `right` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-right--Rotate=45deg]
 *              Rotates the tooltip arrow based on degrees of movement for `right` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-bottom--TranslateX=-50]
 *              Positions the tooltip arrow along the x axis for `bottom` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-bottom--TranslateY=-50]
 *              Positions the tooltip arrow along the y axis for `bottom` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-bottom--Rotate=45deg]
 *              Rotates the tooltip arrow based on degrees of movement for `bottom` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-left--TranslateX=50]
 *              Positions the tooltip arrow along the x axis for `left` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-left--TranslateY=-50]
 *              Positions the tooltip arrow along the y axis for `left` positioned arrows.
 *
 * @cssprop     [--pf-c-tooltip__arrow--m-left--Rotate=45deg]
 *              Rotates the tooltip arrow based on degrees of movement for `left` positioned arrows.
 *
 */
export declare class PfTooltip extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** The position of the tooltip, relative to the invoking content */
    position: Placement;
    /** Tooltip content. Overridden by the content slot */
    content?: string;
    /** If false, prevents the tooltip from trying to remain in view by flipping itself when necessary */
    noFlip: boolean;
    trigger?: string | Element;
    /**
     * The flip order when flip is enabled and the initial position is not possible.
     * There are 12 options: `top`, `bottom`, `left`, `right`, `top-start`, `top-end`,
     * `bottom-start`, `bottom-end`, `left-start`, `left-end`,`right-start`, `right-end`.
     * The default is [oppositePlacement], where only the opposite placement is tried.
     */
    flipBehavior?: Placement[];
    connectedCallback(): void;
    /**
     * Removes event listeners from the old trigger element and attaches
     * them to the new trigger element.
     * @param changed changed properties
     */
    willUpdate(changed: PropertyValues<this>): void;
    render(): TemplateResult<1>;
    show(): Promise<void>;
    hide(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tooltip': PfTooltip;
    }
}
