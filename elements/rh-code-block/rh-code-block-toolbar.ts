import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import styles from './rh-code-block-toolbar.css';

/**
 *
 *
 * @summary  A toolbar used in a panel
 *
 * @slot          - Toolbar items
 * @slot toolbar  - Toolbar actions
 *
 */
@customElement('rh-code-block-toolbar')
export class RhCodeBlockToolbar extends LitElement {
  static readonly styles = styles;

  @property() title = '';

  #slots = new SlotController(this, 'title', null, 'actions');

  render() {
    const hasTitle = this.title || this.#slots.hasSlotted('title');
    return html`
      <div id="container">
        <slot id="title" name="title" class="${classMap({ hasTitle })}">${this.title}</slot>
        <slot id="content"></slot>
        <slot id="actions" name="actions"></slot>
      </div>
    `;
  }
}
