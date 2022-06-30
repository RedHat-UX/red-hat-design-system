"use strict";

// ../rh-demo/rh-demo.js
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { css } from "lit";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var styles = css`pfe-accordion{--pfe-accordion--MaxWidth--content:none}code-sample{display:flex;flex:1 1 auto;flex-direction:column}`;
var rh_demo_default = styles;
var RhDemo = class extends LitElement {
  constructor() {
    super();
    import("@patternfly/pfe-accordion");
    import("@lrnwebcomponents/code-sample");
  }
  createRenderRoot() {
    return this;
  }
  firstUpdated() {
    this.syncCodeEditor();
  }
  syncCodeEditor() {
    const template = this.querySelector("template");
    if (template) {
      const output = this.renderRoot.querySelector(".rh-demo-code-area template");
      if (output) {
        output.innerHTML = template.innerHTML;
        this.syncPreview();
      }
    }
  }
  syncPreview() {
    const preview = this.renderRoot.querySelector(".rh-demo-preview-area");
    if (preview) {
      preview.innerHTML = this.renderRoot.querySelector(".rh-demo-code-area template")?.innerHTML || "";
    }
  }
  render() {
    return html`
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
RhDemo.styles = rh_demo_default;
RhDemo = __decorateClass([
  customElement("rh-demo")
], RhDemo);
export {
  RhDemo
};
//# sourceMappingURL=rh-demo.js.map
