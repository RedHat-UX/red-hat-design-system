import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { css } from "lit";
const styles = css `:host([box=light]){background-color:var(--pf-c-tab-content--m-light-300,var(--pf-global--BackgroundColor--light-300,#f0f0f0))}`;
import { BaseTabPanel } from './BaseTabPanel.js';
/**
 * @slot - Tab panel content
 *
 * @cssprop {<color>} --pf-c-tab-content--m-light-300 {@default `#f0f0f0`}
 *
 * @csspart container - container for the panel content
 */
let PfTabPanel = class PfTabPanel extends BaseTabPanel {
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('pf-tab-panel'));
    }
};
PfTabPanel.styles = [...BaseTabPanel.styles, styles];
PfTabPanel = __decorate([
    customElement('pf-tab-panel')
], PfTabPanel);
export { PfTabPanel };
//# sourceMappingURL=pf-tab-panel.js.map