import { BaseAccordionPanel } from '@patternfly/pfe-accordion/BaseAccordionPanel.js';
import { type ColorPalette } from '../../lib/context/color/provider.js';
/**
 * Accordion Panel
 *
 * @slot
 *       The content of the accordion panel can be any basic markup including but not limited to div, paragraph, or nested accordion panels.
 */
export declare class RhAccordionPanel extends BaseAccordionPanel {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    private on?;
    colorPalette?: ColorPalette;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion-panel': RhAccordionPanel;
    }
}
