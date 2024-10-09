import type { ColorPalette } from '@rhds/elements/lib/context/color/provider.js';

import { LitElement, html, isServer } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import {
  colorContextConsumer,
  type ColorTheme,
} from '@rhds/elements/lib/context/color/consumer.js';

import {
  ColorPaletteListConverter,
  ContextChangeEvent,
  paletteNames,
} from '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/rh-tabs/rh-tabs.js';

import { UxdotPatternSSRController } from './uxdot-pattern-ssr-controller.js';

import styles from './uxdot-pattern.css';

@customElement('uxdot-pattern')
export class UxdotPattern extends LitElement {
  static styles = [styles];

  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette: ColorPalette = 'lightest';

  @colorContextConsumer() private on?: ColorTheme;

  @property({ reflect: true }) src?: string;

  @property({ attribute: 'output-path' }) outputPath?: string;

  @property({ attribute: 'input-path' }) inputPath?: string;

  @property({ reflect: true, attribute: 'css-src' }) cssSrc?: string;

  @property({ reflect: true, attribute: 'js-src' }) jsSrc?: string;

  @property({ reflect: true }) target = 'content';

  @property({ type: Boolean }) noColorPicker = false;

  @property({ type: Boolean }) stacked = false;

  @property({ converter: ColorPaletteListConverter }) allow = paletteNames;

  ssrController = new UxdotPatternSSRController(this);

  render() {
    const target = isServer || (this.target === 'container') ? this.target
      : (this.getRootNode() as Document).getElementById(this.target);

    const actionsLabels = html`
      <span slot="action-label-copy">Copy to Clipboard</span>
      <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
      <span slot="action-label-wrap">Toggle line wrap</span>
    `;

    return html`
      <div id="container">
        <div id="heading"><slot name="heading"><h3>Example</h3></slot></div>

        <form id="color-picker"
              ?hidden="${this.noColorPicker}"
              @submit="${(e: Event) => e.preventDefault()}">
          <label for="picker">Color palette</label>
          <rh-context-picker id="picker"
                             @change="${this.#onChange}"
                             value="${this.colorPalette}"
                             target="${target}"
                             allow="${this.allow}"></rh-context-picker>
        </form>

        <div id="description"><slot></slot></div>

        <rh-surface id="content">${this.ssrController.allContent}</rh-surface>

        <rh-tabs class="code-tabs">
          <rh-tab slot="tab" active>HTML</rh-tab>
          <rh-tab-panel>
            <rh-code-block highlighting="prerendered" actions="copy wrap">
              ${this.ssrController.htmlContent}
              ${actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab slot="tab" ?disabled="${!this.ssrController.hasCss}">CSS</rh-tab>
          <rh-tab-panel>
            <rh-code-block highlighting="prerendered" actions="copy wrap">
              ${this.ssrController.cssContent}
              ${actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab slot="tab" ?disabled="${!this.ssrController.hasJs}">JS</rh-tab>
          <rh-tab-panel>
            <rh-code-block highlighting="prerendered" actions="copy wrap">
              ${this.ssrController.jsContent}
              ${actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
        </rh-tabs>
      </div>
    `;
  }

  #onChange(event: Event) {
    if (event instanceof ContextChangeEvent) {
      this.colorPalette = event.colorPalette;
    }
  }
}
