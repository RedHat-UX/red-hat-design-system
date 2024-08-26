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
 * @csspart container - The component wrapper
 * @csspart content - The content wrapper
 * @csspart header - The header element; only visible if both an icon annd heading are provided.
 * @csspart heading - The heading element
 * @csspart icon - The header icon
 * @csspart close-button - The close button
 * @csspart body - The container for the body content
 * @csspart footer - The container for the footer content
 * @cssprop {<length>} [--pf-c-popover__arrow--Height=1.5625rem] Height of the arrow
 * @cssprop {<length>} [--pf-c-popover__arrow--Width=1.5625rem] Width of the arrow
 * @cssprop {<color>} [--pf-c-popover__title-text--Color=inherit] Heading font color
 * @cssprop {<color>} [--pf-c-popover__title-icon--Color=#151515] Heading icon font color
 * @cssprop {<color>} [--pf-c-popover__arrow--BackgroundColor=#fff] Arrow background color
 * @cssprop [--pf-c-popover__arrow--BoxShadow=0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08)] Arrow box shadow
 * @cssprop [--pf-c-popover--BoxShadow=0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08)] Popover box shadow
 * @cssprop {<length>} [--pf-c-tooltip__content--PaddingTop=1rem] Popover top padding
 * @cssprop {<length>} [--pf-c-tooltip__content--PaddingRight=1rem] Popover right padding
 * @cssprop {<length>} [--pf-c-tooltip__content--PaddingBottom=1rem]
 *          Popover bottom padding
 *
 * @cssprop {<length>} [--pf-c-tooltip__content--PaddingLeft=1rem]
 *          Popover left padding
 *
 * @cssprop {<number>} [--pf-c-popover--line-height=1.5]
 *          Popover line height
 *
 * @cssprop {<length>} [--pf-c-popover__content--FontSize=0.875rem]
 *          Popover font-size
 *
 * @cssprop {<color>} [--pf-c-popover__content--BackgroundColor=#fff]
 *          Popover background color
 *
 * @cssprop {<length>} [--pf-c-popover--MaxWidth=20.75rem]
 *          Popover max-width
 *
 * @cssprop {<length>} [--pf-c-popover--MinWidth=20.75rem]
 *          Popover min-width
 *
 * @cssprop {<number>} [--pf-c-popover--c-button--Right=`0]
 *          Close button right position
 *
 * @cssprop {<number>} [--pf-c-popover--c-button--Top=0]
 *          Close button top position
 *
 * @cssprop {<length>} [--pf-c-popover--c-button--sibling--PaddingRight=3rem]
 *          Padding between close button and its immediate sibling
 *
 * @cssprop {<length>} [--pf-c-popover__title-icon--MarginRight=0.5rem]
 *          Heading icon right margin
 *
 * @cssprop {<length>} [--pf-c-popover__title--FontSize=1rem]
 *          Header font-size
 *
 * @cssprop {<length>} [--pf-c-popover__title--MarginBottom=0.5rem]
 *          Header bottom margin
 *
 * @cssprop {<number>} [--pf-c-popover__title--LineHeight=1.5]
 *          Header line height
 *
 * @cssprop {<string>} [--pf-c-popover__title--FontFamily='RedHatDisplay', 'Overpass', overpass, helvetica, arial, sans-serif]
 *          Header font-family
 *
 * @cssprop {<length>} [--pf-c-popover__footer--MarginTop=1rem]
 *          Footer top margin
 *
 * @cssprop {<color>} [--pf-c-popover--m-default__title-text--Color=#003737]
 *          Default alert heading color
 *
 * @cssprop {<color>} [--pf-c-popover--m-default__title-icon--Color=#009596]
 *          Default alert icon color
 *
 * @cssprop {<color>} [--pf-c-popover--m-info__title-text--Color=#002952]
 *          Default alert heading color
 *
 * @cssprop {<color>} [--pf-c-popover--m-info__title-icon--Color=#2b9af3]
 *          Default alert icon color
 *
 * @cssprop {<color>} [--pf-c-popover--m-warning__title-text--Color=#795600]
 *          Default alert heading color
 *
 * @cssprop {<color>} [--pf-c-popover--m-warning__title-icon--Color=#f0ab00]
 *          Default alert icon color
 *
 * @cssprop {<color>} [--pf-c-popover--m-success__title-text--Color=#1e4f18]
 *          Default alert heading color
 *
 * @cssprop {<color>} [--pf-c-popover--m-success__title-icon--Color=#3e8635]
 *          Default alert icon color
 *
 * @cssprop {<color>} [--pf-c-popover--m-danger__title-text--Color=#a30000]
 *          Default alert heading color
 *
 * @cssprop {<color>} [--pf-c-popover--m-danger__title-icon--Color=#c9190b]
 *          Default alert icon color
 *
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
