import { LitElement } from 'lit';
import { type Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
/**
 * A tooltip provides contextual information on hover, focus, or tap.
 * Content should be brief. Authors must ensure the invoking element
 * is focusable for keyboard and screen reader users. Pressing Escape
 * dismisses the tooltip. When `silent` is set, authors must provide
 * an alternative accessible label.
 *
 * @summary Reveals a small area of information on hover
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
    /** When true, disables screen reader announcements for tooltip content. Only use when another accessible label is provided. */
    silent: boolean;
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
