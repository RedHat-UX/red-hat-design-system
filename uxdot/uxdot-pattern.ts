import { LitElement, html, isServer, nothing } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import {
  ColorPaletteListConverter,
  ContextChangeEvent,
  paletteNames,
} from './uxdot-context-select.js';

import './uxdot-context-select.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-button-group/rh-button-group.js';

import { TabExpandEvent } from '@rhds/elements/rh-tabs/rh-tab.js';

import { UxdotPatternSSRController } from './uxdot-pattern-ssr-controller.js';

import styles from './uxdot-pattern.css';

@customElement('uxdot-pattern')
@colorPalettes
@themable
export class UxdotPattern extends LitElement {
  static styles = [styles];

  /** Which color palette to apply to the demo surface */
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette?: ColorPalette;

  /** The id of the element in shadow DOM which the color picker targets */
  @property({ reflect: true }) target = 'content';

  /** Path to the pattern source file, relative to the input file */
  @property({ reflect: true }) src?: string;

  /** Path to additional CSS file to include */
  @property({ reflect: true, attribute: 'css-src' }) cssSrc?: string;

  /** Path to additional JS file to include */
  @property({ reflect: true, attribute: 'js-src' }) jsSrc?: string;

  /** Render pattern in an iframe for proper @media query support */
  @property({ type: Boolean, reflect: true }) viewport = false;

  /** Should the color picker be hidden? */
  @property({ type: Boolean, attribute: 'no-color-picker' }) noColorPicker = false;

  /** Should the code tabs be hidden? */
  @property({ type: Boolean, attribute: 'no-code-tabs' }) noCodeTabs = false;

  /** Should the code blocks be expanded? */
  @property({ type: Boolean, attribute: 'full-height' }) fullHeight = false;

  /** Should the code blocks be expanded? */
  @property({ reflect: true, attribute: 'active-tab' }) activeTab?: 'html' | 'css' | 'js';

  /** Which color palettes should be allowed in the picker? (default: all) */
  @property({ converter: ColorPaletteListConverter }) allow = paletteNames;

  readonly #viewportSizes: Record<string, string> = {
    mobile: '360px',
    tablet: '768px',
    desktop: '100%',
  };

  @state() private _viewportSize: 'mobile' | 'tablet' | 'desktop' = 'desktop';

  #picked = false;

  ssr = new UxdotPatternSSRController(this);

  #slots = new SlotController(this, null, 'heading');

  render() {
    const { activeTab = 'html' } = this;
    const { allContent, htmlContent, cssContent, jsContent, hasJs, hasCss } = this.ssr;

    const actionsLabels = html`
      <span slot="action-label-copy">Copy to Clipboard</span>
      <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
      <span slot="action-label-wrap">Toggle line wrap</span>
    `;

    const viewportWidth = this.#viewportSizes[this._viewportSize] ?? '100%';

    return html`
      <div id="container">
        <div id="heading"><slot name="heading"></slot></div>

        <div id="description" class="${classMap({ empty: this.#slots.isEmpty(null) })}">
          <slot></slot>
        </div>

        <div id="controls-row">
          ${this.viewport ? html`
          <rh-button-group id="viewport-controls"
                           role="toolbar"
                           aria-label="Viewport size">
            <rh-button variant="tertiary"
                       icon="mobile-phone"
                       accessible-label="Mobile (360px)"
                       ?active="${this._viewportSize === 'mobile'}"
                       @click="${() => this.#onViewportSize('mobile')}"></rh-button>
            <rh-button variant="tertiary"
                       icon="tablet"
                       accessible-label="Tablet (768px)"
                       ?active="${this._viewportSize === 'tablet'}"
                       @click="${() => this.#onViewportSize('tablet')}"></rh-button>
            <rh-button variant="tertiary"
                       icon="desktop"
                       accessible-label="Desktop (100%)"
                       ?active="${this._viewportSize === 'desktop'}"
                       @click="${() => this.#onViewportSize('desktop')}"></rh-button>
          </rh-button-group>` : nothing}

          <div id="color-picker"
               ?hidden="${this.noColorPicker}">
            <uxdot-context-select id="picker"
                                accessible-label="Color palette"
                                @change="${this.#onChange}"
                                value="${ifDefined(this.colorPalette)}"
                                target="${this.target}"
                                allow="${this.allow}"></uxdot-context-select>
          </div>
        </div>

        ${this.viewport
          ? html`<iframe id="viewport-frame"
                       style="max-inline-size: ${viewportWidth}"
                       src="${ifDefined(this.ssr.viewportSrc)}"
                       title="${this.src ?? 'Pattern preview'}"></iframe>`
          : html`<rh-surface id="content">${allContent}</rh-surface>`}

        <rh-tabs id="code-tabs"
                 class="code-tabs"
                 active-index="${ifDefined(!this.#picked ? ['html', 'css', 'js'].indexOf(activeTab) : undefined)}"
                 ?hidden="${this.noCodeTabs}"
                 @expand="${this.#onExpand}">
          <rh-tab id="html-tab" slot="tab">HTML</rh-tab>
          <rh-tab-panel id="html-panel">
            <rh-code-block highlighting="prerendered"
                           line-numbers="visible"
                           actions="copy wrap"
                           ?full-height="${this.fullHeight}">
              ${htmlContent}
              ${actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab id="css-tab" slot="tab" .disabled="${!hasCss}">CSS</rh-tab>
          <rh-tab-panel id="css-panel">
            <rh-code-block highlighting="prerendered"
                           actions="copy wrap"
                           ?full-height="${this.fullHeight}">
              ${cssContent}
              ${actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab id="js-tab" slot="tab" .disabled="${!hasJs}">JS</rh-tab>
          <rh-tab-panel id="js-panel">
            <rh-code-block highlighting="prerendered"
                           actions="copy wrap"
                           ?full-height="${this.fullHeight}">
              ${jsContent}
              ${actionsLabels}
            </rh-code-block>
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

  #onViewportSize(size: 'mobile' | 'tablet' | 'desktop') {
    this._viewportSize = size;
  }

  #onChange(event: Event) {
    if (event instanceof ContextChangeEvent) {
      const codeTabs = this.shadowRoot?.querySelector('#code-tabs');
      if (event.colorPalette) {
        codeTabs?.setAttribute('color-palette', event.colorPalette);
      } else {
        codeTabs?.removeAttribute('color-palette');
      }
      if (this.viewport) {
        this.#postColorPalette(event.colorPalette);
      }
    }
  }

  #postColorPalette(colorPalette: ColorPalette) {
    const iframe = this.shadowRoot?.querySelector<HTMLIFrameElement>('#viewport-frame');
    iframe?.contentWindow?.postMessage({
      type: 'uxdot-pattern:color-palette',
      colorPalette,
    }, '*');
  }
}
