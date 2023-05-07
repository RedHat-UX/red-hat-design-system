import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { cascades } from '@patternfly/pfe-core/decorators.js';
import { BaseTabs } from '@patternfly/elements/pf-tabs/BaseTabs.js';
import { RhTab } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const styles = css `:host{background:var(--_context-background-color);color:var(--_context-text)}#rhds-container{display:contents;--_border-color:var(--rh-tabs-border-color, var(--rh-color-border-subtle-on-light, #c7c7c7));--_arrow-color:var(--rh-color-accent-base-on-light, #0066cc);--_overflow-button-text-color:var(--rh-color-text-secondary-on-light, #4d4d4d);--_overflow-button-disabled-text-color:#d2d2d2;--_overflow-button-hover-text-color:var(--rh-color-text-primary-on-light, #151515)}#rhds-container.dark{--_border-color:var(--rh-tabs-border-color, var(--rh-color-border-subtle-on-dark, #707070));--_arrow-color:var(--rh-color-accent-base-on-dark, #73bcf7);--_overflow-button-text-color:var(--rh-color-text-secondary-on-dark, #c7c7c7);--_overflow-button-disabled-text-color:var(--rh-color-gray-40, #707070);--_overflow-button-hover-text-color:var(--rh-color-text-primary-on-dark, #ffffff)}[part=tabs-container]:before{border-width:0 0 var(--rh-border-width-sm,1px);border-color:var(--_border-color);border-style:solid}[part=tabs]{display:flex;bottom:0;margin:0;width:auto}:host(:is([centered],[box=inset])) [part=tabs]{margin-inline:var(--rh-tabs-inset,var(--_inset-inline-margin,auto))}:host([vertical]) [part=container]{display:grid;grid-template-columns:max-content 1fr;grid-template-areas:"tabs panels"}:host([vertical]) [part=tabs-container]{grid-area:tabs;display:inline-flex;flex-direction:column;height:100%;padding:0;overflow:visible}:host([vertical]) [part=tabs-container]:before{height:100%;border-block-end-width:0;border-inline-start-width:var(--rh-border-width-sm,1px)}:host([vertical][box]) [part=tabs-container]:before{border-inline-start-width:0;border-inline-end-width:var(--rh-border-width-sm,1px)}:host([vertical]) [part=tabs]{flex-direction:column;flex-grow:1;max-width:15.625rem}:host([box=inset]){--_inset-inline-margin:var(--rh-spacer-2xl, 32px)}.overflow [part=panels]{--_panels-overflow-padding:var(--rh-spacer-2xl, 32px)}:host([vertical]) [part=panels]{grid-area:panels}#previousTab+[part=tabs]{--_inset-inline-margin:0;position:relative;left:-1px;z-index:1}#nextTab,#previousTab{padding-block:0;padding-inline:var(--rh-space-lg,16px);background-color:var(--_context-background-color);color:var(--_overflow-button-text-color);position:relative;z-index:2;--pf-icon--size:14px}#nextTab{left:-1px}#nextTab:hover,#previousTab:hover{color:var(--_overflow-button-hover-text-color,var(--rh-color-text-primary-on-light,#151515))}#nextTab:before,#previousTab:before{border-block-start:var(--rh-border-width-sm,1px) solid transparent;border-block-end:var(--rh-border-width-sm,1px) solid var(--_border-color);border-inline:var(--rh-border-width-sm,1px) solid var(--_border-color)}#previousTab:before{border-inline-width:0 1px}#nextTab:before{border-inline-width:1px 0}#nextTab:hover:before,#previousTab:hover:before{border-block-end:var(--rh-border-width-lg,3px) solid var(--_border-color)}#nextTab:disabled,#previousTab:disabled{color:var(--_overflow-button-disabled-text-color)}`;
export { RhTab };
/**
 * Tabs
 * @summary Arranges content in a contained view on the same page
 */
let RhTabs = class RhTabs extends BaseTabs {
    constructor() {
        super(...arguments);
        this.centered = false;
        // cascade doesn't like undefined values as default
        this.theme = null;
        // cascade doesn't like undefined values as default
        this.box = null;
        this.vertical = false;
    }
    static isTab(element) {
        return element instanceof RhTab;
    }
    static isPanel(element) {
        return element instanceof RhTabPanel;
    }
    get canShowScrollButtons() {
        return !this.vertical;
    }
    render() {
        const { on = '' } = this;
        return html `
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
    }
};
RhTabs.styles = [...BaseTabs.styles, styles];
__decorate([
    colorContextConsumer()
], RhTabs.prototype, "on", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhTabs.prototype, "colorPalette", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhTabs.prototype, "centered", void 0);
__decorate([
    cascades('rh-tab'),
    property({ reflect: true })
], RhTabs.prototype, "theme", void 0);
__decorate([
    cascades('rh-tab', 'rh-tab-panel'),
    property({ reflect: true })
], RhTabs.prototype, "box", void 0);
__decorate([
    cascades('rh-tab', 'rh-tab-panel'),
    property({ reflect: true, type: Boolean })
], RhTabs.prototype, "vertical", void 0);
RhTabs = __decorate([
    customElement('rh-tabs')
], RhTabs);
export { RhTabs };
//# sourceMappingURL=rh-tabs.js.map