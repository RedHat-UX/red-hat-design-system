import { LitElement } from 'lit';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
export declare class RhFooterLinks extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet;
    /**
     * Cause the header slot to be visually hidden.
     * Setting this to true will not affect `aria-labelledby`.
     */
    headerHidden: boolean;
    protected slots: SlotController;
    connectedCallback(): void;
    updateAccessibility(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-links': RhFooterLinks;
    }
}
