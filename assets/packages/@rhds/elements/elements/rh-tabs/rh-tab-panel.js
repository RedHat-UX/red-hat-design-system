var _RhTabPanel_internals;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `:host{display:block;padding:var(--_panel-padding,var(--rh-space-2xl,32px))}:host([hidden]){display:none!important}#container{display:contents}`;
/**
 * The tab panel for use within a rh-tabs element, must be paired with a rh-tab.
 *
 * @slot - Panel content should follow guidelines for [tab panel content layout](../guidelines)
 *
 */
let RhTabPanel = class RhTabPanel extends LitElement {
    constructor() {
        super(...arguments);
        _RhTabPanel_internals.set(this, this.attachInternals());
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('rh-tab-panel'));
        this.hidden ?? (this.hidden = true);
        __classPrivateFieldGet(this, _RhTabPanel_internals, "f").role = 'tabpanel';
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
    render() {
        const { on = 'light' } = this;
        return html `
      <div id="container" class="${classMap({ on: true, [on]: true })}">
        <slot></slot>
      </div>
    `;
    }
};
_RhTabPanel_internals = new WeakMap();
RhTabPanel.styles = [styles];
__decorate([
    colorContextConsumer()
], RhTabPanel.prototype, "on", void 0);
RhTabPanel = __decorate([
    customElement('rh-tab-panel')
], RhTabPanel);
export { RhTabPanel };
//# sourceMappingURL=rh-tab-panel.js.map