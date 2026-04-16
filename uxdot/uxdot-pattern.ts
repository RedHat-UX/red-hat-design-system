import { LitElement, html, isServer } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import {
  ColorPaletteListConverter,
  ContextChangeEvent,
  paletteNames,
} from '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/rh-tabs/rh-tabs.js';

import { TabExpandEvent } from '@rhds/elements/rh-tabs/rh-tab.js';

import styles from './uxdot-pattern.css';

@customElement('uxdot-pattern')
@colorPalettes
@themable
export class UxdotPattern extends LitElement {
  static styles = [styles];

  /** Which color palette to apply to the demo surface */
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette: ColorPalette = 'lightest';

  /** The id of the element in shadow DOM which the color picker targets */
  @property({ reflect: true }) target = 'content';

  /** Should the color picker be hidden? */
  @property({ type: Boolean, attribute: 'no-color-picker' }) noColorPicker = false;

  /** Should the code tabs be hidden? */
  @property({ type: Boolean, attribute: 'no-code-tabs' }) noCodeTabs = false;

  /** Should the code blocks be expanded? */
  @property({ type: Boolean, attribute: 'full-height' }) fullHeight = false;

  /** Which code tab should be active initially? */
  @property({ reflect: true, attribute: 'active-tab' }) activeTab?: 'html' | 'css' | 'js';

  /** Which color palettes should be allowed in the picker? (default: all) */
  @property({ converter: ColorPaletteListConverter }) allow = paletteNames;

  #picked = false;

  #slots = new SlotController(
    this,
    null,
    'heading',
    'content',
    'html-source',
    'css-source',
    'js-source',
  );

  render() {
    const { activeTab = 'html' } = this;
    const hasCss = this.#slots.hasSlotted('css-source');
    const hasJs = this.#slots.hasSlotted('js-source');

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

        <div id="description" class="${classMap({ empty: this.#slots.isEmpty(null) })}">
          <slot></slot>
        </div>

        <rh-surface id="content"><slot name="content"></slot></rh-surface>

        <rh-tabs id="code-tabs"
                 class="code-tabs"
                 active-index="${ifDefined(!this.#picked ? ['html', 'css', 'js'].indexOf(activeTab) : undefined)}"
                 ?hidden="${this.noCodeTabs}"
                 @expand="${this.#onExpand}">
          <rh-tab id="html-tab" slot="tab">HTML</rh-tab>
          <rh-tab-panel id="html-panel">
            <slot name="html-source"></slot>
          </rh-tab-panel>
          <rh-tab id="css-tab" slot="tab" .disabled="${!hasCss}">CSS</rh-tab>
          <rh-tab-panel id="css-panel">
            <slot name="css-source"></slot>
          </rh-tab-panel>
          <rh-tab id="js-tab" slot="tab" .disabled="${!hasJs}">JS</rh-tab>
          <rh-tab-panel id="js-panel">
            <slot name="js-source"></slot>
          </rh-tab-panel>
        </rh-tabs>
      </div>
    `;
  }

  #onExpand(event: Event) {
    if (!isServer && event instanceof TabExpandEvent) {
      this.#picked = true;
    }
  }

  #onChange(event: Event) {
    if (event instanceof ContextChangeEvent) {
      this.colorPalette = event.colorPalette;
    }
  }
}
