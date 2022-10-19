import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import style from './rh-demo.css';

@customElement('rh-demo')
export class RhDemo extends LitElement {
  static readonly styles = style;

  constructor() {
    super();
    import('@patternfly/pfe-accordion');
    import('@lrnwebcomponents/code-sample');
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  firstUpdated() {
    this.syncCodeEditor();
  }

  public syncCodeEditor() {
    const template = this.querySelector('template');
    if (template) {
      const output = this.renderRoot.querySelector(
        '.rh-demo-code-area template'
      );
      if (output) {
        output.innerHTML = template.innerHTML;
        this.syncPreview();
      }
    }
  }

  public syncPreview() {
    const preview = this.renderRoot.querySelector('.rh-demo-preview-area');
    if (preview) {
      preview.innerHTML =
        this.renderRoot.querySelector('.rh-demo-code-area template')
          ?.innerHTML || '';
    }
  }

  render() {
    return html`
      <div class="rh-demo-preview-area"></div>
      <div part="code" class="rh-demo-code-area">
        <rh-accordion>
          <rh-accordion-header>
            <h3>View code</h3>
          </rh-accordion-header>
          <rh-accordion-panel>
            <code-sample>
              <template></template>
            </code-sample>
          </rh-accordion-panel>
        </rh-accordion>
      </div>
    `;
  }
}
