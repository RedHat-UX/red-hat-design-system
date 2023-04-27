import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
export declare class TabExpandEvent extends ComposedEvent {
    active: boolean;
    tab: BaseTab;
    constructor(active: boolean, tab: BaseTab);
}
export declare abstract class BaseTab extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
    };
    private icons;
    private button;
    /** `active` should be observed, and true when the tab is selected */
    abstract active: boolean;
    /** `active` should be observed, and true when the tab is disabled */
    abstract disabled: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(changed: PropertyValues<this>): void;
    focus(): void;
}
