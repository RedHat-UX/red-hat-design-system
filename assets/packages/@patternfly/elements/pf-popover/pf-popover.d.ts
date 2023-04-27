import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core/core.js';
import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import '@patternfly/elements/pf-button/pf-button.js';
declare const headingLevels: readonly [2, 3, 4, 5, 6];
type HeadingLevel = (typeof headingLevels)[number];
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
 *
 * @summary Toggle the visibility of helpful or contextual information.
 *
 * @slot -
 *         The default slot holds invoking element.
 *         Typically this would be an icon, button, or other small sized element.
 * @slot heading
 *       This slot renders the content that will be displayed inside of the header of the popover.
 *       Typically this would be a heading element.
 * @slot icon
 *       This slot renders the icon that will be displayed inside the header of the popover,
 *       before the heading.
 * @slot body
 *       This slot renders the content that will be displayed inside of the body of the popover.
 * @slot footer
 *       This slot renders the content that will be displayed inside of the footer of the popover.
 *
 * @csspart container - The component wrapper
 * @csspart content - The content wrapper
 * @csspart header - The header element; only visible if both an icon annd heading are provided.
 * @csspart heading - The heading element
 * @csspart icon - The header icon
 * @csspart close-button - The close button
 * @csspart body - The container for the body content
 * @csspart footer - The container for the footer content
 *
 * @cssprop {<length>} --pf-c-popover__arrow--Height
 *          Height of the arrow
 *          {@default `1.5625rem`}
 * @cssprop {<length>} --pf-c-popover__arrow--Width
 *          Width of the arrow
 *          {@default `1.5625rem`}
 * @cssprop {<color>} --pf-c-popover__title-text--Color
 *          Heading font color
 *          {@default `inherit`}
 * @cssprop {<color>} --pf-c-popover__title-icon--Color
 *          Heading icon font color
 *          {@default `#151515`}
 * @cssprop {<color>} --pf-c-popover__arrow--BackgroundColor
 *          Arrow background color
 *          {@default `#fff`}
 * @cssprop --pf-c-popover__arrow--BoxShadow
 *          Arrow box shadow
 *          {@default `0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08)`}
 * @cssprop --pf-c-popover--BoxShadow
 *          Popover box shadow
 *          {@default `0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08)`}
 * @cssprop {<length>} --pf-c-tooltip__content--PaddingTop
 *          Popover top padding
 *          {@default `1rem`}
 * @cssprop {<length>} --pf-c-tooltip__content--PaddingRight
 *          Popover right padding
 *          {@default `1rem`}
 * @cssprop {<length>} --pf-c-tooltip__content--PaddingBottom
 *          Popover bottom padding
 *          {@default `1rem`}
 * @cssprop {<length>} --pf-c-tooltip__content--PaddingLeft
 *          Popover left padding
 *          {@default `1rem`}
 * @cssprop {<number>} --pf-c-popover--line-height
 *          Popover line height
 *          {@default `1.5`}
 * @cssprop {<length>} --pf-c-popover__content--FontSize
 *          Popover font-size
 *          {@default `0.875rem`}
 * @cssprop {<color>} --pf-c-popover__content--BackgroundColor
 *          Popover background color
 *          {@default `#fff`}
 * @cssprop {<length>} --pf-c-popover--MaxWidth
 *          Popover max-width
 *          {@default `20.75rem`}
 * @cssprop {<length>} --pf-c-popover--MinWidth
 *          Popover min-width
 *          {@default `20.75rem`}
 * @cssprop {<number>} --pf-c-popover--c-button--Right
 *          Close button right position
 *          {@default `0}
 * @cssprop {<number>} --pf-c-popover--c-button--Top
 *          Close button top position
 *          {@default `0`}
 * @cssprop {<length>} --pf-c-popover--c-button--sibling--PaddingRight
 *          Padding between close button and its immediate sibling
 *          {@default `3rem`}
 * @cssprop {<length>} --pf-c-popover__title-icon--MarginRight
 *          Heading icon right margin
 *          {@default `0.5rem`}
 * @cssprop {<length>} --pf-c-popover__title--FontSize
 *          Header font-size
 *          {@default `1rem`}
 * @cssprop {<length>} --pf-c-popover__title--MarginBottom
 *          Header bottom margin
 *          {@default `0.5rem`}
 * @cssprop {<number>} --pf-c-popover__title--LineHeight
 *          Header line height
 *          {@default `1.5`}
 * @cssprop {<string>} --pf-c-popover__title--FontFamily
 *          Header font-family
 *          {@default `'RedHatDisplay', 'Overpass', overpass, helvetica, arial, sans-serif`}
 * @cssprop {<length>} --pf-c-popover__footer--MarginTop
 *          Footer top margin
 *          {@default `1rem`}
 * @cssprop {<color>} --pf-c-popover--m-default__title-text--Color
 *          Default alert heading color
 *          {@default `#003737`}
 * @cssprop {<color>} --pf-c-popover--m-default__title-icon--Color
 *          Default alert icon color
 *          {@default `#009596`}
 * @cssprop {<color>} --pf-c-popover--m-info__title-text--Color
 *          Default alert heading color
 *          {@default `#002952`}
 * @cssprop {<color>} --pf-c-popover--m-info__title-icon--Color
 *          Default alert icon color
 *          {@default `#2b9af3`}
 * @cssprop {<color>} --pf-c-popover--m-warning__title-text--Color
 *          Default alert heading color
 *          {@default `#795600`}
 * @cssprop {<color>} --pf-c-popover--m-warning__title-icon--Color
 *          Default alert icon color
 *          {@default `#f0ab00`}
 * @cssprop {<color>} --pf-c-popover--m-success__title-text--Color
 *          Default alert heading color
 *          {@default `#1e4f18`}
 * @cssprop {<color>} --pf-c-popover--m-success__title-icon--Color
 *          Default alert icon color
 *          {@default `#3e8635`}
 * @cssprop {<color>} --pf-c-popover--m-danger__title-text--Color
 *          Default alert heading color
 *          {@default `#a30000`}
 * @cssprop {<color>} --pf-c-popover--m-danger__title-icon--Color
 *          Default alert icon color
 *          {@default `#c9190b`}
 */
export declare class PfPopover extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
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
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    disconnectedCallback(): void;
    private onKeydown;
    /**
     * Removes event listeners from the old trigger element and attaches
     * them to the new trigger element.
     */
    triggerChanged(oldValue?: string, newValue?: string): void;
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
