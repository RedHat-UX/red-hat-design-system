import { LitElement } from 'lit';
import { type Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
/**
 * A tooltip is a floating text area that provides helpful
 * or contextual information on hover, focus, or tap.
 *
 * @summary Reveals a small area of information on hover
 *
 * @slot - Place invoking element here,
 *         i.e. the element which when hovered the tooltip will display.
 *         Must be inline content.
 * @slot content - Place tooltip content here. Overrides the `content` attribute.
 *
 * @cssprop {<length>} [--rh-tooltip-arrow-size=11px]
 * @cssprop {<color>} [--rh-tooltip-content-background-color=#ffffff]
 * @cssprop {<color>} [--rh-tooltip-content-color=#151515]
 * @cssprop {<length>} [--rh-tooltip-max-width=18.75rem]
 * @cssprop {<length>} [--rh-tooltip-content-padding-block-start=16px]
 * @cssprop {<length>} [--rh-tooltip-content-padding-inline-end=16px]
 * @cssprop {<length>} [--rh-tooltip-content-padding-block-end=16px]
 * @cssprop {<length>} [--rh-tooltip-content-padding-inline-start=16px]
 * @cssprop {<absolute-size> | <relative-size> | <length> | <percentage>} [--rh-tooltip-content-font-size=0.875rem]
 */
export declare class RhTooltip extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: CSSStyleSheet[];
    /** The position of the tooltip, relative to the invoking content */
    position: Placement;
    /** Tooltip content. Overridden by the content slot */
    content?: string;
    private on?;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    /** Show the tooltip */
    show(): Promise<void>;
    /** Hide the tooltip */
    hide(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tooltip': RhTooltip;
    }
}
