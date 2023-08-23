import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { css } from "lit";
const style = css `:host{display:none;overflow:hidden;will-change:height}:host([expanded]){display:block;position:relative}:host(.animating){display:block;transition:height .3s ease-in-out}:host([fixed]){overflow-y:auto}.body{position:relative;overflow:hidden}.body:after{content:"";position:absolute;top:0;bottom:0;left:0}`;
class BaseAccordionPanel extends LitElement {
    constructor() {
        super(...arguments);
        this.expanded = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        this.setAttribute('role', 'region');
    }
    render() {
        return html `
      <div tabindex="-1">
        <div id="container" class="content" part="container">
          <div class="body">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
    }
}
BaseAccordionPanel.styles = [style];
__decorate([
    property({ type: Boolean, reflect: true })
], BaseAccordionPanel.prototype, "expanded", void 0);
export { BaseAccordionPanel };
//# sourceMappingURL=BaseAccordionPanel.js.map