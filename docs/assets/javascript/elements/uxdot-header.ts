import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import styles from './uxdot-header.css';

@customElement('uxdot-header')
export class UxdotHeader extends LitElement {
  static styles = [styles];

  @property({ type: Boolean, attribute: 'has-subnav' }) hasSubnav = false;

  @property({ type: Boolean, attribute: 'has-search' }) hasSearch = false;

  render() {
    const { hasSubnav, hasSearch } = this;
    return html`
      <rh-surface color-palette="lighter" id="container" class=${classMap({ hasSubnav, hasSearch })} part="container">
        <slot part="heading"></slot>
        <slot name="search" part="search"></slot>
        <slot name="subnav" part="subnav"></slot>
      </rh-surface>
    `;
  }
}

