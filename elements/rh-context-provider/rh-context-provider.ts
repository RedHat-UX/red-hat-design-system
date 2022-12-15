import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer, colorContextProvider } from '../../lib/context/color.js';

import contextStyle from '../../lib/context/context-color.css';
import style from './rh-context-provider.css';

@customElement('rh-context-provider')
export class ContextProvider extends LitElement {
  static readonly styles = [contextStyle, style];

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() on: ColorTheme = 'light';

  render() {
    return html`<div class="${classMap({ [this.on]: !!this.on })}"><slot></slot></div>`;
  }
}
