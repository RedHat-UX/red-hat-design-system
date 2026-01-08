import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core/core.js';
import '@patternfly/elements/pf-button/pf-button.js';
type HeadingLevel = 2 | 3 | 4 | 5 | 6;
type AlertSeverity = 'default' | 'info' | 'warning' | 'success' | 'danger';
export declare class PopoverHideEvent extends ComposedEvent {
    constructor();
}
export declare class PopoverHiddenEvent extends ComposedEvent {
    constructor();
}
export declare class PopoverShowEvent extends ComposedEvent {
    constructor();
}
export declare class PopoverShownEvent extends ComposedEvent {
    constructor();
}
/**
 * A **Popover** displays content in a non-modal dialog and adds contextual information or provides resources via text and links.
 * @summary Toggle the visibility of helpful or contextual information.
 * @alias Popover
 */
export declare class PfPopover extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static instances;
    private static alertIcons;
    /**
     * Indicates the initial popover position.
     * There are 12 options: `top`, `bottom`, `left`, `right`, `top-start`, `top-end`,
     * `bottom-start`, `bottom-end`, `left-start`, `left-end`,`right-start`, `right-end`.
     * The default is `top`.
     */
    position: Placement;
    /**
     * The content rendered in the popover's heading.
     */
    heading?: string;
    /**
     * The content rendered in the popover's body.
     */
    body?: string;
    /**
     * The content rendered in the popover's footer.
     */
    footer?: string;
    /**
     * The icon placed before the popover's heading.
     */
    icon?: string;
    /**
     * The accessible label for the popover. This is required if the no heading is set.
     */
    label?: string;
    /**
     * The distance to set between the popover and its trigger element.
     */
    distance?: number;
    /**
     * The flip order when flip is enabled and the initial position is not possible.
     * There are 12 options: `top`, `bottom`, `left`, `right`, `top-start`, `top-end`,
     * `bottom-start`, `bottom-end`, `left-start`, `left-end`,`right-start`, `right-end`.
     * The default is [oppositePlacement], where only the opposite placement is tried.
     */
    flipBehavior?: Placement[];
    /**
     * Disable the flip behavior. The default is `false`.
     */
    noFlip: boolean;
    /**
     * The heading level to use for the popover's header. The default is `h6`.
     */
    headingLevel?: HeadingLevel;
    /**
     * Indicates which icon set to use for the header's icon.
     * The default is `fas` (Font Awesome Free Solid).
     */
    iconSet?: string;
    /**
     * Hide the close button. The default is `false`.
     */
    hideClose?: boolean;
    /**
     * Indicates the severity variant to use for the alert popover.
     * There are five options: `default`, `info`, `warning`, `success`, and `danger`.
     */
    alertSeverity?: AlertSeverity;
    /**
     * The accessible label for the popover's close button. The default is `Close popover`.
     */
    accessibleCloseLabel?: string;
    /**
     * @deprecated do not use the color-palette attribute, which was added by mistake. use context-providing containers (e.g. rh-card) instead
     */
    closeButtonLabel?: string;
    /**
     * The text announced by the screen reader to indicate the popover's severity.
     * The default is `${alertSeverity} alert:`.
     */
    alertSeverityText?: string;
    /**
     * Don't hide the popover when clicking ouside of it.
     */
    noOutsideClick?: boolean;
    /**
     * The ID of the element to attach the popover to.
     */
    trigger?: string;
    private _popover;
    private _slottedTrigger?;
    private _arrow;
    constructor();
    render(): TemplateResult<1>;
    disconnectedCallback(): void;
    /**
     * Removes event listeners from the old trigger element and attaches
     * them to the new trigger element.
     * @param changed changed props
     */
    willUpdate(changed: PropertyValues<this>): void;
    /**
     * Toggle the popover
     */
    toggle(): Promise<void>;
    /**
     * Opens the popover
     */
    show(): Promise<void>;
    /**
     * Closes the popover
     */
    hide(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-popover': PfPopover;
    }
}
export {};
