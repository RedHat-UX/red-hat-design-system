import { __decorate } from "tslib";
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { BaseAccordionPanel } from '@patternfly/elements/pf-accordion/BaseAccordionPanel.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const styles = css `:host{color:var(--rh-color-surface-darkest,#151515);--_background-color:var(--rh-color-surface-white, #ffffff);--_panel-color:var(--rh-color-surface-darkest, #151515);--_panel-font-size:var(--rh-font-size-body-text-md, 1rem);--_panel-content-body-accent-color:var(--rh-color-border-danger-on-light, #ee0000);--_panel-body-padding-block-start:var(--rh-space-lg, 16px);--_panel-body-padding-inline-end:var(--rh-space-xl, 24px);--_panel-body-padding-block-end:var(--rh-space-lg, 16px);--_panel-body-padding-inline-start:var(--rh-space-xl, 24px)}.dark{--_background-color:var(--rh-color-surface-darkest, #151515);--_panel-color:var(--rh-color-text-primary-on-dark, #ffffff);--_panel-content-body-accent-color:var(--rh-color-brand-on-dark, #ff442b);--_panel-border-inline-end-color:var(--rh-color-border-subtle-on-dark, #707070)}:host ::slotted(*){display:block;margin:unset;background-color:transparent}:host ::slotted(:not(:first-child)){padding-block-start:var(--rh-space-xl,24px)}:host([large]){--_panel-body-padding-block-start:var(--rh-space-xl, 24px);--_panel-body-padding-inline-end:var(--rh-space-xl, 24px);--_panel-body-padding-block-end:var(--rh-space-xl, 24px);--_panel-body-padding-inline-start:var(--rh-space-xl, 24px);--_panel-font-size:var(--rh-font-size-body-text-md, 1rem)}.body{padding:var(--_panel-body-padding-block-start,var(--rh-space-md,8px)) var(--_panel-body-padding-inline-end,var(--rh-space-lg,16px)) var(--_panel-body-padding-block-end,var(--rh-space-md,8px)) var(--_panel-body-padding-inline-start,var(--rh-space-lg,16px))}:host([large]) .body:last-child{--_panel-body-padding-block-end:var(--rh-space-xl, 24px)}:host([fixed]){max-height:9.375rem}:host([expanded]){position:unset}#rhds-container{border-inline-end:1px solid var(--_panel-border-inline-end-color,var(--rh-color-border-subtle-on-light,#c7c7c7));background-color:var(--_background-color)}.content[expanded],:host([expanded]) .content{--_panel-body--before-background-color:var(\n      --_panel-content-body-accent-color,\n      var(--rh-color-accent-base-on-light, #0066cc)\n    )}.body:after{width:var(--_panel-body--before--Width,var(--rh-border-width-lg,3px));background-color:var(--_panel-body--before-background-color,transparent);inset-block:0;inset-inline-start:0}.content{color:var(--_panel-color,var(--rh-color-surface-darkest,#151515));font-size:var(--_panel-font-size, var(--rh-font-size-body-text-sm, .875rem))}`;
/**
 * Accordion Panel
 *
 * @slot
 *       The content of the accordion panel can be any basic markup including but not limited to div, paragraph, or nested accordion panels.
 */
let RhAccordionPanel = class RhAccordionPanel extends BaseAccordionPanel {
    render() {
        const { on = '' } = this;
        return html `
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
    }
};
RhAccordionPanel.version = '{{version}}';
RhAccordionPanel.styles = [...BaseAccordionPanel.styles, styles];
__decorate([
    colorContextConsumer()
], RhAccordionPanel.prototype, "on", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhAccordionPanel.prototype, "colorPalette", void 0);
RhAccordionPanel = __decorate([
    customElement('rh-accordion-panel')
], RhAccordionPanel);
export { RhAccordionPanel };
//# sourceMappingURL=rh-accordion-panel.js.map