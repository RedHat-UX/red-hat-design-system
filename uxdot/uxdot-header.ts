import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import styles from './uxdot-header.css';

import { themable } from '@rhds/elements/lib/themable.js';

@customElement('uxdot-header')
@themable
export class UxdotHeader extends LitElement {
  static styles = [styles];

  @property({ type: Boolean, attribute: 'has-subnav' }) hasSubnav = false;

  render() {
    const { hasSubnav } = this;
    return html`
      <div id="container"
           part="container"
           class=${classMap({ hasSubnav })}>
        <slot part="heading"></slot>
      </div>
      <slot name="subnav" part="subnav"></slot>
    `;
  }
}
