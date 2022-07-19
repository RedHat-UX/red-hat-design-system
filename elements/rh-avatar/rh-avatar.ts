import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-avatar.css';

/**
 * An avatar is a visual used to represent a user. It may contain an image or
 * a placeholder graphic.
 *
 *
 * @summary  An avatar is a visual used to represent a user.
 */
@customElement('rh-avatar') @pfelement()
export class RhAvatar extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  render() {
    return html`
      <img
        class="pf-c-avatar"
        src="/assets/images/img_avatar-light.svg"
        alt="Avatar"
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-avatar': RhAvatar;
  }
}
