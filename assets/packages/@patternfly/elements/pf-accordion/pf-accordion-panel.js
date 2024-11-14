import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { css } from "lit";
const style = css `:host {\n  display: none;\n  position: relative;\n  overflow: hidden;\n  will-change: height;\n  color: var(--pf-global--Color--100, #151515);\n  background-color:\n    var(\n      --pf-c-accordion--BackgroundColor,\n      var(--pf-global--BackgroundColor--light-100, #ffffff)\n    );\n}\n\n.body {\n  padding:\n    var(--pf-c-accordion__panel-body--PaddingTop, var(--pf-global--spacer--sm, 0.5rem))\n    var(--pf-c-accordion__panel-body--PaddingRight, var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-accordion__panel-body--PaddingBottom, var(--pf-global--spacer--sm, 0.5rem))\n    var(--pf-c-accordion__panel-body--PaddingLeft, var(--pf-global--spacer--md, 1rem));\n}\n\n.body:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: var(--pf-c-accordion__panel-body--before--Width, var(--pf-global--BorderWidth--lg, 3px));\n  background-color: var(--pf-c-accordion__panel-body--before--BackgroundColor, transparent);\n}\n\n:host([large]) {\n  --pf-c-accordion__panel-body--PaddingTop:\n    var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingTop, 0);\n  --pf-c-accordion__panel-body--PaddingRight:\n    var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingRight, 1rem);\n  --pf-c-accordion__panel-body--PaddingBottom:\n    var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingBottom, 1.5rem);\n  --pf-c-accordion__panel-body--PaddingLeft:\n    var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingLeft, 1.5rem);\n  --pf-c-accordion__panel--FontSize:\n    var(--pf-c-accordion--m-display-lg__expanded-content--FontSize, 1rem);\n  --pf-c-accordion__panel--Color:\n    var(--pf-c-accordion--m-display-lg__expanded-content--Color, #151515);\n}\n\n:host([large]) .body:last-child {\n  --pf-c-accordion__panel-body--PaddingBottom:\n    var(--pf-c-accordion--m-display-lg__expanded-content-body--last-child--PaddingBottom, 1.5rem);\n}\n\n.content {\n  color: var(--pf-c-accordion__panel--Color, var(--pf-global--Color--dark-200, #6a6e73));\n  font-size: var(--pf-c-accordion__panel--FontSize, var(--pf-global--FontSize--sm, 0.875rem));\n}\n\n:host([fixed]) {\n  overflow-y: auto;\n  max-height: var(--pf-c-accordion__panel--m-fixed--MaxHeight, 9.375rem);\n}\n\n:host([expanded]) {\n  display: block;\n  position: relative;\n}\n\n.content[expanded],\n:host([expanded]) .content {\n  --pf-c-accordion__panel-body--before--BackgroundColor:\n    var(\n      --pf-c-accordion__panel--content-body--before--BackgroundColor,\n      var(--pf-global--primary-color--100, #0066cc));\n}\n`;
let PfAccordionPanel = class PfAccordionPanel extends LitElement {
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
};
PfAccordionPanel.styles = [style];
PfAccordionPanel.version = "4.0.2";
__decorate([
    property({ type: Boolean, reflect: true })
], PfAccordionPanel.prototype, "expanded", void 0);
__decorate([
    property({ reflect: true })
], PfAccordionPanel.prototype, "bordered", void 0);
PfAccordionPanel = __decorate([
    customElement('pf-accordion-panel')
], PfAccordionPanel);
export { PfAccordionPanel };
//# sourceMappingURL=pf-accordion-panel.js.map