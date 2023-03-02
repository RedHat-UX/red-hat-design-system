import { LitElement } from 'lit';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
export declare class RhFooterLinks extends LitElement {
    static readonly styles: import("lit").CSSResult;
    /**
     * Visibily hide the header slot. Setting this to true will not affect
     * aria-labelledby.
     */
    headerHidden: boolean;
    private logger;
    protected slots: SlotController;
    updateAccessibility(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-links': RhFooterLinks;
    }
}
