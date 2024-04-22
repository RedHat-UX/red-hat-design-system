import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
export declare class TabExpandEvent extends Event {
    active: boolean;
    tab: RhTab;
    constructor(active: boolean, tab: RhTab);
}
/**
 * The tab button for use within a rh-tabs element, must be paired with a rh-tab-panel.
 *
 * @slot icon - Can contain an `<svg>` or `<pf-icon>`
 * @slot - Tab title text
 *
 * @csspart button - `<button>` element
 * @csspart icon - icon `<span>` element
 * @csspart text - tile text `<span>` element
 *
 * @cssprop {<color>} --rh-tabs-link-color - Tab link text color {@default `#4d4d4d`}
 * @cssprop {<color>} --rh-tabs-active-border-color - Tab active border color {@default `#ff442b`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-start - Tab padding inline start {@default `32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-start - Tab padding block start {@default `16px`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-end - Tab padding inline end {@default 32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-end - Tab padding block end {@default `16px`}
 *
 * @fires { TabExpandEvent } expand - when a tab expands
 */
export declare class RhTab extends LitElement {
    #private;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
    static readonly version = "{{version}}";
    static readonly styles: CSSStyleSheet[];
    /** `active` should be observed, and true when the tab is selected */
    active: boolean;
    /** `disabled` should be observed, and true when the tab is disabled */
    disabled: boolean;
    private ctx?;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    private icons;
    private button;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    updated(changed: PropertyValues<this>): void;
    focus(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tab': RhTab;
    }
}
