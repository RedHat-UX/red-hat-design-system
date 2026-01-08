import type { PropertyValues, TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { type Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
/**
 * A **tooltip** is in-app messaging used to identify elements on a page with short,
 * clarifying text.
 * @summary Toggle the visibility of helpful or contextual information.
 * @alias Tooltip
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
