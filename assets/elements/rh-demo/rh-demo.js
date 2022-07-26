import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from "./rh-demo.css.js";
let RhDemo = class RhDemo extends LitElement {
    constructor() {
        super();
        import('@patternfly/pfe-accordion');
        import('@lrnwebcomponents/code-sample');
    }
    createRenderRoot() {
        return this;
    }
    firstUpdated() {
        this.syncCodeEditor();
    }
    syncCodeEditor() {
        const template = this.querySelector('template');
        if (template) {
            const output = this.renderRoot.querySelector('.rh-demo-code-area template');
            if (output) {
                output.innerHTML = template.innerHTML;
                this.syncPreview();
            }
        }
    }
    syncPreview() {
        const preview = this.renderRoot.querySelector('.rh-demo-preview-area');
        if (preview) {
            preview.innerHTML =
                this.renderRoot.querySelector('.rh-demo-code-area template')
                    ?.innerHTML || '';
        }
    }
    render() {
        return html `
      <div class="rh-demo-preview-area"></div>
      <div part="code" class="rh-demo-code-area">
        <pfe-accordion>
          <pfe-accordion-header>
            <h3>View code</h3>
          </pfe-accordion-header>
          <pfe-accordion-panel>
            <code-sample>
              <template></template>
            </code-sample>
          </pfe-accordion-panel>
        </pfe-accordion>
      </div>
    `;
    }
};
RhDemo.styles = style;
RhDemo = __decorate([
    customElement('rh-demo')
], RhDemo);
export { RhDemo };
//# sourceMappingURL=rh-demo.js.map