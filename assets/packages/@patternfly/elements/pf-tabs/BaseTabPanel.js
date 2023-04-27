var _BaseTabPanel_internals;
import { __classPrivateFieldGet } from "tslib";
import { LitElement, html } from 'lit';
import { css } from "lit";
const style = css `:host{display:block}:host([hidden]){display:none}`;
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
class BaseTabPanel extends LitElement {
    constructor() {
        super(...arguments);
        this.hidden = true;
        _BaseTabPanel_internals.set(this, this.attachInternals());
    }
    render() {
        return html `
      <slot></slot>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('pf-tab-panel'));
        __classPrivateFieldGet(this, _BaseTabPanel_internals, "f").role = 'tabpanel';
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
}
_BaseTabPanel_internals = new WeakMap();
BaseTabPanel.styles = [style];
export { BaseTabPanel };
//# sourceMappingURL=BaseTabPanel.js.map