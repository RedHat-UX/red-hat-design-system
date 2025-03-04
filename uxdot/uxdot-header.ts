import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import styles from './uxdot-header.css';

import {
  colorSchemeProvider,
  type ColorPalette,
} from '@rhds/elements/lib/context/color/provider.js';

@customElement('uxdot-header')
@colorSchemeProvider()
export class UxdotHeader extends LitElement {
  static styles = [styles];

  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette?: ColorPalette = 'lighter';

  @property({ type: Boolean, attribute: 'has-subnav' }) hasSubnav = false;

  @property({ type: Boolean, attribute: 'has-search' }) hasSearch = false;

  render() {
    const { hasSubnav, hasSearch } = this;
    return html`
      <div id="container"
           part="container"
           class=${classMap({ hasSubnav, hasSearch })}>
        <slot part="heading"></slot>
        <slot name="search" part="search"></slot>
      </div>
      <slot name="subnav" part="subnav"></slot>
    `;
  }
}
