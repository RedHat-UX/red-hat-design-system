import { LitElement } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
/**
 * Accordion Panel
 *
 * @slot
 *       The content of the accordion panel can be any basic markup including but not limited to div, paragraph, or nested accordion panels.
 */
export declare class RhAccordionPanel extends LitElement {
    static readonly version = "{{version}}";
    static readonly styles: CSSStyleSheet[];
    expanded: boolean;
    colorPalette?: ColorPalette;
    private on?;
    private ctx?;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion-panel': RhAccordionPanel;
    }
}
