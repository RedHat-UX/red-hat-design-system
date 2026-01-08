import type { PfAccordion } from './pf-accordion.js';
import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
export declare class PfAccordionHeaderChangeEvent extends Event {
    expanded: boolean;
    toggle: PfAccordionHeader;
    accordion: PfAccordion;
    target: PfAccordionHeader;
    constructor(expanded: boolean, toggle: PfAccordionHeader, accordion: PfAccordion);
}
/**
 * Accordion Header
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 *
 */
export declare class PfAccordionHeader extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    bordered?: 'true' | 'false';
    icon?: string;
    iconSet?: string;
    expanded: boolean;
    headingText?: string;
    headingTag?: string;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-accordion-header': PfAccordionHeader;
    }
}
