import type { IconNameFor, IconSetName } from '@rhds/icons';
import { LitElement } from 'lit';
/**
 * Fired when a tab is selected. Contains the `active` state and
 * a reference to the `tab` element. This event bubbles and is
 * cancelable; calling `preventDefault()` prevents the tab from
 * activating.
 *
 * Event properties:
 * - `active` {boolean} - whether the tab was already active
 * - `tab` {RhTab} - the tab element being expanded
 */
export declare class TabExpandEvent extends Event {
    /** Whether the tab was already active before this event */
    active: boolean;
    /** The tab element being expanded */
    tab: RhTab;
    constructor(
    /** Whether the tab was already active before this event */
    active: boolean, 
    /** The tab element being expanded */
    tab: RhTab);
}
/**
 * A tab button for use in an `rh-tabs` element. Each `rh-tab`
 * must be paired with an `rh-tab-panel`. The ARIA `tab` role
 * and `aria-selected` state allow screen reader users to
 * identify the active tab. Authors should keep labels short
 * and should avoid interactive content inside the tab.
 *
 * @summary A single tab within an `rh-tabs` set
 *
 * @fires {TabExpandEvent} expand - when a tab expands.
 *        The event detail shape includes `active` (boolean)
 *        indicating prior state and `tab` (RhTab) referencing
 *        the expanded element. Cancelable with
 *        `preventDefault()`.
 *
 * @csspart button - the interactive tab button container
 * @csspart icon - container for the icon slot
 * @csspart text - container for the default (text) slot
 *
 */
export declare class RhTab extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * When true, this tab is the currently selected tab. Only one
     * tab in a set should be active at a time. Screen readers
     * announce the active state via `aria-selected`.
     */
    active: boolean;
    /**
     * When true, the tab cannot be activated by click, Enter, or
     * focus. The tab receives `aria-disabled="true"` to communicate
     * the disabled state to assistive technologies.
     */
    disabled: boolean;
    /**
     * Icon name from the specified icon set to display before the tab label.
     * When set, an `rh-icon` element renders in the icon slot as a
     * decorative visual. Icons complement the text label but should not
     * replace it.
     */
    icon?: IconNameFor<IconSetName>;
    /**
     * The icon set from which to select the icon. Defaults to `ui`.
     */
    iconSet: IconSetName;
    private box;
    private vertical;
    private manual;
    private activeTab;
    private firstTab;
    private lastTab;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    protected iconChanged(): void;
    private activeChanged;
    /**
     * if a tab is disabled, then it is also aria-disabled
     * if a tab is removed from disabled its not necessarily
     * not still aria-disabled so we don't remove the aria-disabled
     */
    private disabledChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tab': RhTab;
    }
}
