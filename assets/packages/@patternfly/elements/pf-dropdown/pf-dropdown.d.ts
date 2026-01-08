import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-button/pf-button.js';
export declare class PfDropdownSelectEvent extends Event {
    originalEvent: Event | KeyboardEvent;
    value: string;
    constructor(originalEvent: Event | KeyboardEvent, value: string);
}
/**
 * A **dropdown** presents a menu of actions or links in a constrained space that
 * will trigger a process or navigate to a new location.
 * @alias Dropdown
 * @fires {PfDropdownSelectEvent} select - when a user select dropdown value
 * @fires open - when the dropdown toggles open
 * @fires close - when the dropdown toggles closed
 */
export declare class PfDropdown extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /**
     * When disabled, the dropdown can still be toggled open and closed via keyboard, but menu items cannot be activated.
     */
    disabled: boolean;
    /**
     * Whether the dropdown is expanded
     */
    expanded: boolean;
    private _toggleElements;
    private _menuElements;
    private ctx;
    protected getUpdateComplete(): Promise<boolean>;
    willUpdate(changed: PropertyValues): void;
    render(): TemplateResult<1>;
    firstUpdated(): void;
    updated(changed: PropertyValues<this>): void;
    /**
     * Opens the dropdown
     */
    show(): Promise<void>;
    /**
     * Closes the dropdown
     */
    hide(): Promise<void>;
    toggle(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-dropdown': PfDropdown;
    }
}
