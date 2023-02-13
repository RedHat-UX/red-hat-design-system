import { BaseTabPanel } from './BaseTabPanel.js';
/**
 * @slot - Tab panel content
 *
 * @cssprop {<color>} --pf-c-tab-content--m-light-300 {@default `#f0f0f0`}
 *
 * @csspart container - container for the panel content
 */
export declare class PfTabPanel extends BaseTabPanel {
    static readonly styles: import("lit").CSSResult[];
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tab-panel': PfTabPanel;
    }
}
