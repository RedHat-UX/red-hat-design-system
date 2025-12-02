import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { themable } from '@rhds/elements/lib/themable.js';
import styles from './rh-button-group.css';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

/**
 * A button group visually organizes multiple related buttons into a single
 * collection.
 *
 * @summary Organize multiple related buttons into a single collection
 *
 * @alias button-group
 */
@customElement('rh-button-group')
@themable
export class RhButtonGroup extends LitElement {
  static readonly styles = [styles];

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'group' });

  override render() {
    return html`
      <!-- Place \`<rh-button>\` elements or native \`<button>\` elements here to organize them into a button group. -->
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button-group': RhButtonGroup;
  }
}
