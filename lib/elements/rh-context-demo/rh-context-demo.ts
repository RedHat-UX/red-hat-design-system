import { LitElement, html, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { type ColorPalette } from '../../context/color/provider.js';
import { ContextChangeEvent } from '../rh-context-picker/rh-context-picker.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import style from './rh-context-demo.css';
import paginationLightdomStyle from '../../../elements/rh-pagination/rh-pagination-lightdom.css';

@customElement('rh-context-demo')
export class RhContextDemo extends LitElement {
  static readonly styles = [style, paginationLightdomStyle];

  static readonly formAssociated = true;

  @property() value: ColorPalette = 'darkest';

  @property() label = 'Color Palette';

  @property({ attribute: 'color-palette', reflect: true }) colorPalette = this.value;

  #internals = this.attachInternals();

  render() {
    const { value = 'darkest' } = this;
    const [on = 'dark'] = value.match(/dark|light/) ?? [];
    return html`
      <rh-surface id="provider"
                  color-palette="${value}"
                  class="${classMap({ [on]: true })}"
                  @change="${this.#onChange}">
          <div id="picker-container">
            <rh-context-picker id="picker"
                               .value="${this.value}"
                               target="provider"></rh-context-picker>
            <label for="picker">${this.label}</label>
          </div>
        <slot part="demo">
          <div id="default">
            <rh-accordion>
              <rh-accordion-header>Results from Customer Portal</rh-accordion-header>
              <rh-accordion-panel></rh-accordion-panel>
            </rh-accordion>
            <rh-cta variant="primary">
              <a href="#">Get started</a>
            </rh-cta>
            <rh-audio-player></rh-audio-player>
            <rh-pagination>
              <ol>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ol>
            </rh-pagination>
            <p> More cloud choice. Less cloud management.</p>
            <rh-card>
              <p> Create, manage, and dynamically scale automation across your entire enterprise.</p>
              <rh-cta slot="footer">
                <a href="#">Get product details</a>
              </rh-cta>
            </rh-card>
            <rh-tabs box="box">
              <rh-tab slot="tab">App development and delivery</rh-tab>
              <rh-tab-panel></rh-tab-panel>
              <rh-tab slot="tab">Modernize existing apps</rh-tab>
              <rh-tab-panel></rh-tab-panel>
              <rh-tab slot="tab">AI/ML</rh-tab>
              <rh-tab-panel></rh-tab-panel>
              <rh-tab slot="tab">Edge computing</rh-tab>
              <rh-tab-panel></rh-tab-panel>
            </rh-tabs>
          </div>
        </slot>
      </rh-surface>
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    if (!this.matches(':empty')) {
      import('@rhds/elements/rh-accordion/rh-accordion.js');
      import('@rhds/elements/rh-audio-player/rh-audio-player.js');
      import('@rhds/elements/rh-button/rh-button.js');
      import('@rhds/elements/rh-card/rh-card.js');
      import('@rhds/elements/rh-cta/rh-cta.js');
      import('@rhds/elements/rh-pagination/rh-pagination.js');
      import('@rhds/elements/rh-tabs/rh-tabs.js');
    }
  }

  willUpdate(changed: PropertyValues<this>) {
    if (changed.has('colorPalette')) {
      this.value = this.colorPalette;
    }
    if (changed.has('colorPalette')) {
      this.value = this.colorPalette;
    }
    if (changed.has('value')) {
      this.colorPalette = this.value;
    }
  }

  formStateRestoreCallback(state: string) {
    this.#setValue(state as ColorPalette);
  }

  #onChange(event: Event) {
    if (event instanceof ContextChangeEvent) {
      this.#setValue(event.colorPalette);
    }
  }

  #setValue(value: ColorPalette) {
    if (value) {
      this.#internals.setFormValue(value);
      this.value = value;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-context-demo': RhContextDemo;
  }
}
