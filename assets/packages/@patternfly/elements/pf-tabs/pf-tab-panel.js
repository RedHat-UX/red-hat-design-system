import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { consume } from '@lit/context';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { context } from './context.js';
import { css } from "lit";
const styles = css `:host {
  display: block;
}

:host([hidden]) {
  display: none;
}

:host([box="light"]) {
  /** Background color for light tab content */
  background-color: var(--pf-c-tab-content--m-light-300, var(--pf-global--BackgroundColor--light-300, #f0f0f0));
}
`;
let PfTabPanel = class PfTabPanel extends LitElement {
    render() {
        return html `
      <!-- container for the panel content -->
      <div part="container">
        <!-- Tab panel content -->
        <slot></slot>
      </div>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('pf-tab-panel'));
        this.hidden ?? (this.hidden = true);
        /*
         To make it easy for screen reader users to navigate from a tab
         to the beginning of content in the active tabpanel, the tabpanel
         element has tabindex="0" to include the panel in the page Tab sequence.
         It is recommended that all tabpanel elements in a tab set are focusable
         if there are any panels in the set that contain content where the first
         element in the panel is not focusable.
         https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic
        */
        this.tabIndex = 0;
    }
    willUpdate() {
        const { box, vertical } = this.ctx ?? {};
        this.toggleAttribute('vertical', vertical);
        if (box) {
            this.setAttribute('box', box);
        }
        else {
            this.removeAttribute('box');
        }
    }
};
PfTabPanel.styles = [styles];
PfTabPanel.version = "4.3.0";
__decorate([
    consume({ context, subscribe: true }),
    state()
], PfTabPanel.prototype, "ctx", void 0);
PfTabPanel = __decorate([
    customElement('pf-tab-panel')
], PfTabPanel);
export { PfTabPanel };
//# sourceMappingURL=pf-tab-panel.js.map