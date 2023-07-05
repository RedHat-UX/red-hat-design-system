import { LitElement, html } from 'lit';
import { css } from "lit";
const style = css `:host{display:block}:host([hidden]){display:none}`;
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
class BaseTabPanel extends LitElement {
    static { this.styles = [style]; }
    #internals = this.attachInternals();
    render() {
        return html `
      <slot></slot>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id ||= getRandomId('pf-tab-panel');
        this.hidden ??= true;
        this.#internals.role = 'tabpanel';
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
export { BaseTabPanel };
//# sourceMappingURL=BaseTabPanel.js.map