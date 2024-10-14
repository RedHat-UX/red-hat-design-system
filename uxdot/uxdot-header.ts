import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import styles from './uxdot-header.css';

import { colorContextProvider } from '@rhds/elements/lib/context/color/provider.js';

import colorContextProviderCss from '@rhds/tokens/css/color-context-provider.css.js';

@customElement('uxdot-header')
export class UxdotHeader extends LitElement {
  static styles = [styles, colorContextProviderCss];

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette = 'lighter';

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

