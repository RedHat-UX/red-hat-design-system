import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { themable } from '@rhds/elements/lib/themable.js';
import styles from './rh-button-group.css';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

/**
 * A button group visually organizes multiple related buttons into a single
 * collection.
 *
 * The component exposes `role="group"` via ElementInternals; authors do not need
 * to set it.
 *
 * For a toolbar pattern, wrap the group in an element with
 * `role="toolbar"`. When there is more than one toolbar, each must have an
 * accessible name (`aria-label` or `aria-labelledby`). For vertical toolbars, set
 * `aria-orientation="vertical"` on the toolbar element.
 *
 * For further accessibility details, see the [Accessibility](/elements/button-group/accessibility/) documentation.
 *
 * @summary Organize multiple related buttons into a single collection
 */
@customElement('rh-button-group')
@themable
export class RhButtonGroup extends LitElement {
  static readonly styles = [styles];

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'group' });

  override render() {
    return html`
      <!-- Place \`<rh-button>\` elements or native \`<button>\` elements here to organize them into a button group. For toolbar semantics and labeling, wrap the group in an element with \`role="toolbar"\` and see the element accessibility documentation. -->
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button-group': RhButtonGroup;
  }
}
