import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { BaseAccordion } from './BaseAccordion.js';
import { ComposedEvent } from '@patternfly/pfe-core';
export declare class AccordionHeaderChangeEvent extends ComposedEvent {
    expanded: boolean;
    toggle: BaseAccordionHeader;
    accordion: BaseAccordion;
    constructor(expanded: boolean, toggle: BaseAccordionHeader, accordion: BaseAccordion);
}
export declare abstract class BaseAccordionHeader extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
    };
    expanded: boolean;
    headingText: string;
    headingTag: string;
    connectedCallback(): void;
    /** Template hook: before </button> */
    renderAfterButton?(): TemplateResult;
    render(): TemplateResult;
}
