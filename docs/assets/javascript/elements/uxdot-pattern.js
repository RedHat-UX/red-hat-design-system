import { LitElement, css, html } from 'lit';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

class UxdotPattern extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-name: host;
      container-type: inline-size;
      margin-block-end: var(--rh-space-2xl, 32px);
    }

    #container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas: "controls" "example" "code";
      column-gap: var(--rh-space-4xl, 64px);
      row-gap: var(--rh-space-2xl, 32px);
      padding: var(--rh-space-2xl, 32px);
      border: var(--rh-border-width-sm, 1px) solid var(--rh-color-border-subtle-on-light, #c7c7c7);
      border-radius: var(--rh-border-radius-default, 3px);
    }

    #container.dark {
      background-color: var(--_context-background-color);
      color: var(--_context-text);
      border-color: var(--rh-color-border-subtle-on-dark, #707070);
    }

    #container h3,
    #container ::slotted(h2),
    #container ::slotted(h3),
    #container ::slotted(h4),
    #container ::slotted(h5),
    #container ::slotted(h6) {
      margin-block-start: 0 !important;
      margin-block-end: var(--rh-space-lg, 16px) !important;
      font-size: var(--rh-font-size-body-text-lg, 1.125rem) !important;
    }

    #color-picker {
      grid-area: controls;
      justify-self: flex-end;
      display: flex;
      align-items: center;
      gap: var(--rh-space-lg, 16px);
    }

    #example {
      grid-area: example;
    }

    #example ::slotted(*:not(style)) {
      display: block;
      max-width: 360px;
    }

    :host([stacked]) #example ::slotted(*) {
      max-width: 100%;
    }

    #code {
      grid-area: code;
      display: flex;
      flex-direction: column;
      gap: var(--rh-space-lg, 16px);
    }

    :host([no-colorpicker]) #container {
      grid-template-areas: "example" "code";
    }

    :host([no-colorpicker]) #color-picker {
      display: none !important;
    }

    @container host (min-width: 992px) {
      #container {
        grid-template-columns: max-content auto;
        grid-template-areas: "controls controls"
                             "example code";
      }

      :host([no-colorpicker]) #container {
        grid-template-areas: "example code";
      }

      :host([stacked]) #container {
        grid-template-columns: 1fr;
        grid-template-areas: "controls" "example" "code";
      }

      :host([stacked][no-colorpicker]) #container {
        grid-template-areas: "example" "code";
      }
    }
  `;

  static properties = {
    colorPalette: { type: String, reflect: true, attribute: 'color-palette' },
    target: { type: String, reflect: true },
    noColorPicker: { type: Boolean, reflect: true, attribute: 'no-colorpicker' },
    stacked: { type: Boolean, reflect: true },
    allow: { type: String, reflect: true },
  };

  #slots;

  constructor() {
    super();
    this.colorPalette = 'lightest';
    this.target = 'container';
    this.noColorPicker = false;
    this.stacked = false;
    this.#slots = new SlotController(this, 'html', 'css', 'js');
  }

  render() {
    const hasHtml = this.#slots.hasSlotted('html');
    const hasCss = this.#slots.hasSlotted('css');
    const hasJs = this.#slots.hasSlotted('js');
    const allowed = this.allow ?? `lightest, lighter, light, dark, darker, darkest`;
    return html`
      <rh-surface id="container" part="container" @change="${this.#onMutation}">
        <label id="color-picker">
          Color palette
          <rh-context-picker target="${this.target}" value="${this.colorPalette}" allow="${allowed}"></rh-context-picker>
        </label>
        <div id="example">
          <slot name="heading"><h3>Example</h3></slot>
          <slot></slot>
        </div>
        <div id="code">
          ${hasHtml ? html`
          <div id="html">
            <slot name="html-heading"><h3>HTML</h3></slot>
            <slot name="html"></slot>
          </div>` : ``}
          ${hasCss ? html`
          <div id="css">
            <slot name="css-heading"><h3>CSS</h3></slot>
            <slot name="css"></slot>
          </div>` : ``}
          ${hasJs ? html`
          <div id="js">
            <slot name="js-heading"><h3>JS</h3></slot>
            <slot name="js"></slot>
          </div>` : ``}
        </div>
      </rh-surface>
    `;
  }

  #onMutation(changed) {
    this.colorPalette = changed.colorPalette;
    this.requestUpdate();
  }
}

customElements.define('uxdot-pattern', UxdotPattern);
