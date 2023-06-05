import { type TemplateResult } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
import { BaseAccordion } from '@patternfly/elements/pf-accordion/BaseAccordion.js';
import './rh-accordion-header.js';
import './rh-accordion-panel.js';
/**
 * An accordion is a stacked list of panels which allows users to expand or collapse information when selected. They feature panels that consist of a section text label and a caret icon that collapses or expands to reveal more information.
 *
 * @summary Expands or collapses a stacked list of panels
 *
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 *
 *
 * @slot
 *       Place the `rh-accordion-header` and `rh-accordion-panel` elements here.
 *
 */
export declare class RhAccordion extends BaseAccordion {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    private on?;
    colorPalette?: ColorPalette;
    large: boolean;
    bordered: boolean;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion': RhAccordion;
    }
}
