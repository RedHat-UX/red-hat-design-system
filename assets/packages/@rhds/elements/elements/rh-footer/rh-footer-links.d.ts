import { LitElement } from 'lit';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
/**
 * Accessible link group for the footer. Auto-wires `aria-labelledby`
 * between the heading and `<ul>` for screen readers. Must contain a
 * `<ul>`; should include a heading in the `header` slot. Tab moves
 * focus through each link. On mobile, collapses into an accordion
 * panel.
 *
 * @summary Accessible link group with heading for footer navigation
 */
export declare class RhFooterLinks extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet;
    /**
     * Visually hides the header slot content while preserving it for screen
     * readers. The `aria-labelledby` association remains active regardless
     * of this setting. Use when the heading should be accessible but not
     * visible (e.g. social links group). Defaults to false.
     */
    headerHidden: boolean;
    /**
     * Accessible name for this link group, applied as `aria-label` on the host
     * when no `header` is slotted. Use to name a social links list
     * (`role="list"`). Localize surrounding words; keep "Red Hat" except in
     * Simplified Chinese (`红帽`). Override only when the accounts are not
     * corporate Red Hat. Defaults to undefined. A slotted header still wins
     * via `aria-labelledby` on the inner `<ul>`.
     */
    accessibleLabel?: string;
    protected slots: SlotController;
    connectedCallback(): void;
    updateAccessibility(): void;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-links': RhFooterLinks;
    }
}
