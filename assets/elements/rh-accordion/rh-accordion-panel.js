import { __decorate } from "tslib";
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { BaseAccordionPanel } from '@patternfly/pfe-accordion/BaseAccordionPanel.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import styles from "./rh-accordion-panel.css.js";
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
      <div id="container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
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