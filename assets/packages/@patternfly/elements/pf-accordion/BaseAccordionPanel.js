import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { css } from "lit";
const style = css `:host {\n  display: none;\n  overflow: hidden;\n  will-change: height;\n}\n\n:host([expanded]) {\n  display: block;\n  position: relative;\n}\n\n:host([fixed]) {\n  overflow-y: auto;\n}\n\n.body {\n  position: relative;\n  overflow: hidden;\n}\n\n.body:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n}\n`;
export class BaseAccordionPanel extends LitElement {
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
//# sourceMappingURL=BaseAccordionPanel.js.map