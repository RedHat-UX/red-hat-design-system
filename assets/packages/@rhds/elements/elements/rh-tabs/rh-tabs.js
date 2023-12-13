import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { cascades, deprecation } from '@patternfly/pfe-core/decorators.js';
import { BaseTabs } from '@patternfly/elements/pf-tabs/BaseTabs.js';
import { RhTab } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const styles = css `:host{background:var(--_context-background-color);color:var(--_context-text)}#rhds-container{display:contents;--_border-color:var(--rh-tabs-border-color, var(--rh-color-border-subtle-on-light, #c7c7c7));--_arrow-color:var(--rh-color-accent-base-on-light, #0066cc);--_overflow-button-text-color:var(--rh-color-text-secondary-on-light, #4d4d4d);--_overflow-button-disabled-text-color:#d2d2d2;--_overflow-button-hover-text-color:var(--rh-color-text-primary-on-light, #151515)}#rhds-container.dark{--_border-color:var(--rh-tabs-border-color, var(--rh-color-border-subtle-on-dark, #707070));--_arrow-color:var(--rh-color-accent-base-on-dark, #92c5f9);--_overflow-button-text-color:var(--rh-color-text-secondary-on-dark, #c7c7c7);--_overflow-button-disabled-text-color:var(--rh-color-gray-40, #a3a3a3);--_overflow-button-hover-text-color:var(--rh-color-text-primary-on-dark, #ffffff)}[part=tabs-container]:before{border-width:0 0 var(--rh-border-width-sm,1px);border-color:var(--_border-color);border-style:solid}[part=tabs]{display:flex;bottom:0;margin:0;width:auto;font-size:var(--rh-font-size-body-text-md, 1rem)}:host(:is([centered],[box=inset])) [part=tabs]{margin-inline:var(--rh-tabs-inset,var(--_inset-inline-margin,auto))}:host([box=inset]){--_inset-inline-margin:var(--rh-space-2xl, 32px)}.overflow [part=panels]{--_panels-overflow-padding:var(--rh-space-2xl, 32px)}#previousTab+[part=tabs]{--_inset-inline-margin:0;position:relative;left:-1px;z-index:1}#nextTab,#previousTab{padding-block:0;padding-inline:var(--rh-space-lg,16px);background-color:var(--_context-background-color);color:var(--_overflow-button-text-color);position:relative;z-index:2;--pf-icon--size:14px}#nextTab{left:-1px}#nextTab:hover,#previousTab:hover{color:var(--_overflow-button-hover-text-color,var(--rh-color-text-primary-on-light,#151515))}#nextTab:before,#previousTab:before{border-block-start:var(--rh-border-width-sm,1px) solid transparent;border-block-end:var(--rh-border-width-sm,1px) solid var(--_border-color);border-inline:var(--rh-border-width-sm,1px) solid var(--_border-color)}#previousTab:before{border-inline-width:0 1px}#nextTab:before{border-inline-width:1px 0}#nextTab:hover:before,#previousTab:hover:before{border-block-end:var(--rh-border-width-lg,3px) solid var(--_border-color)}#nextTab:disabled,#previousTab:disabled{color:var(--_overflow-button-disabled-text-color)}@media screen and (min-width:768px){:host([vertical]) [part=container]{display:grid;grid-template-columns:max-content 1fr;grid-template-areas:"tabs panels"}:host([vertical]) [part=tabs-container]{grid-area:tabs;display:inline-flex;flex-direction:column;height:100%;padding:0;overflow:visible}:host([vertical]) [part=panels]{grid-area:panels}:host([vertical]) [part=tabs-container]:before{height:100%;border-block-end-width:0;border-inline-start-width:var(--rh-border-width-sm,1px)}:host([vertical][box]) [part=tabs-container]:before{border-inline-start-width:0;border-inline-end-width:var(--rh-border-width-sm,1px)}:host([vertical]) [part=tabs]{flex-direction:column;flex-grow:1;max-width:15.625rem}}`;
export { RhTab };
/**
 * Tabs are used to organize and navigate between sections of content.
 * They feature a horizontal or a vertical list of section text labels
 * with a content panel below or to the right of the component.
 *
 * @summary Arranges content in a contained view on the same page
 *
 * @csspart container - outer container
 * @csspart tabs-container - tabs container
 * @csspart tabs - tablist
 * @csspart panels - panels
 *
 * @slot tab - Must contain one or more `<rh-tab>`
 * @slot - Must contain one or more `<rh-tab-panel>`
 *
 * @cssprop {<color>} --rh-tabs-border-color - Tabs Border color {@default `#c7c7c7`}
 * @cssprop {<length>} --rh-tabs-inset - Tabs inset {@default `auto`}
 *
 */
let RhTabs = class RhTabs extends BaseTabs {
    constructor() {
        super(...arguments);
        this.centered = false;
        /**
         * Sets the theme for the tabs and panels
         * @deprecated attribute will be removed in future release, please use the `--rh-tabs-active-border-color` css property directly.
         */
        this.theme = null;
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
    deprecation({ alias: 'css property --rh-tabs-active-border-color', reflect: true, attribute: 'theme' })
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