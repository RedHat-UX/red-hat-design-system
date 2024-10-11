import type { ColorPalette } from '@rhds/elements/lib/context/color/provider.js';

import { LitElement, html, type PropertyValues } from 'lit';

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

  /** Which color palette to apply to the demo surface */
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette: ColorPalette = 'lightest';

  /** The id of the element in shadow DOM which the color picker targets */
  @property({ reflect: true }) target = 'content';

  /** Path to the pattern source file, relative to the input file */
  @property({ reflect: true }) src?: string;

  /** Path to additional CSS file to include */
  @property({ reflect: true, attribute: 'css-src' }) cssSrc?: string;

  /** Path to additional JS file to include */
  @property({ reflect: true, attribute: 'js-src' }) jsSrc?: string;

  /** Should the color picker be hidden? */
  @property({ type: Boolean, attribute: 'no-color-picker' }) noColorPicker = false;

  /** Should the code blocks be expanded? */
  @property({ type: Boolean, attribute: 'full-height' }) fullHeight = false;

  /** Which colour palettes should be allowed in the picker? (default: all) */
  @property({ converter: ColorPaletteListConverter }) allow = paletteNames;

  @colorContextConsumer() private on?: ColorTheme;

  ssr = new UxdotPatternSSRController(this);

  update(changed: PropertyValues<this>) {
    try {
      super.update(changed);
    } catch (e) {
      if ((e as any).message.startsWith('Hydration')) {
        this.updateComplete.then(() =>
          this.requestUpdate());
      }
      throw e;
    }
  }

  render() {
    const { allContent, htmlContent, cssContent, jsContent, hasJs, hasCss } = this.ssr;

    const actionsLabels = html`
      <span slot="action-label-copy">Copy to Clipboard</span>
      <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
      <span slot="action-label-wrap">Toggle line wrap</span>
    `;

    return html`
      <div id="container">
        <div id="heading"><slot name="heading"></slot></div>

        <form id="color-picker"
              ?hidden="${this.noColorPicker}"
              @submit="${(e: Event) => e.preventDefault()}">
          <label for="picker">Color palette</label>
          <rh-context-picker id="picker"
                             @change="${this.#onChange}"
                             value="${this.colorPalette}"
                             target="${this.target}"
                             allow="${this.allow}"></rh-context-picker>
        </form>

        <div id="description"><slot></slot></div>

        <rh-surface id="content">${allContent}</rh-surface>

        <rh-tabs id="code-tabs" class="code-tabs">
          <rh-tab id="html-tab"
                  slot="tab"
                  active>HTML</rh-tab>
          <rh-tab-panel id="html-panel">
            <rh-code-block highlighting="prerendered"
                           actions="copy wrap"
                           .full-height="${this.fullHeight}">
              ${htmlContent}
              ${actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab id="css-tab"
                  slot="tab"
                  .disabled="${!hasCss}">CSS</rh-tab>
          <rh-tab-panel id="css-panel">
            <rh-code-block highlighting="prerendered"
                           actions="copy wrap"
                           .full-height="${this.fullHeight}">
              ${cssContent}
              ${actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab id="js-tab"
                  slot="tab"
                  .disabled="${!hasJs}">JS</rh-tab>
          <rh-tab-panel id="js-panel">
            <rh-code-block highlighting="prerendered"
                           actions="copy wrap"
                           .full-height="${this.fullHeight}">
              ${jsContent}
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

