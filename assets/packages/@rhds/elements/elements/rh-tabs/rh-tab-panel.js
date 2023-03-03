import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { BaseTabPanel } from '@patternfly/elements/pf-tabs/BaseTabPanel.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const styles = css `#rhds-container{display:block;padding:var(--rh-space-2xl,32px)}:host([vertical]) #rhds-container{margin-inline:0}:host([box=inset]) #rhds-container{padding-inline:var(--_panels-overflow-padding,var(--rh-space-4xl,64px))}:host([box][vertical]) #rhds-container{padding:var(--rh-space-3xl,48px)}[hidden]{display:none!important}`;
/**
 * Tabs
 * @slot - Place element content here
 */
let RhTabPanel = class RhTabPanel extends BaseTabPanel {
    render() {
        const { on = '' } = this;
        return html `
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
    }
};
RhTabPanel.version = '{{version}}';
RhTabPanel.styles = [styles];
__decorate([
    colorContextConsumer()
], RhTabPanel.prototype, "on", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhTabPanel.prototype, "colorPalette", void 0);
RhTabPanel = __decorate([
    customElement('rh-tab-panel')
], RhTabPanel);
export { RhTabPanel };
//# sourceMappingURL=rh-tab-panel.js.map