import { LitElement } from 'lit';
import { type Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
/**
 * A tooltip is a floating text area that provides helpful
 * or contextual information on hover, focus, or tap.
 *
 * @summary Reveals a small area of information on hover
 *
 * @alias tooltip
 *
 */
export declare class RhTooltip extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: CSSStyleSheet[];
    private static instances;
    private static announcer;
    private static announce;
    private static initAnnouncer;
    /** The position of the tooltip, relative to the invoking content */
    position: Placement;
    /** Tooltip content. Overridden by the content slot */
    content?: string;
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
