import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-code-block-toolbar-panel.css';

/**
 *
 *
 * @summary  A panel containing a toolbar and a content element
 *
 *
 * @slot         - The Blockquote
 * @slot toolbar  - The toolbar
 *
 */
@customElement('rh-code-block-toolbar-panel')
export class RhCodeBlockToolbarPanel extends LitElement {
  static readonly styles = styles;

  @colorContextProvider()
  @property({ attribute: 'color-palette', reflect: true }) colorPalette?: ColorPalette;

  render() {
    return html`
      <article id="content">
        <header>
          <slot name="toolbar"></slot>
        </header>
        <slot></slot>
      </article>
    `;
  }
}
