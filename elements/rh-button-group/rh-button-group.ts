import type { RhButton } from '@rhds/elements/rh-button/rh-button.js';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { themable } from '@rhds/elements/lib/themable.js';
import styles from './rh-button-group.css';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

/**
 * A button group organizes multiple related buttons into a single collection,
 * providing visual grouping and coordinated keyboard navigation behavior.
 *
 * @alias Button Group
 */
@customElement('rh-button-group')
@themable
export class RhButtonGroup extends LitElement {
  static readonly styles = [styles];
  #logger = new Logger(this);

  @queryAssignedElements({ flatten: true })
  private _buttons!: (HTMLButtonElement | RhButton)[];

  // eslint-disable-next-line no-unused-private-class-members
  #rtic = RovingTabindexController.of(this, {
    getItems: () => {
      if (this.role !== 'toolbar') {
        return [];
      } else {
        return this._buttons;
      }
    },
  });

  protected override firstUpdated() {
    if (typeof window === 'undefined') {
      return;
    }
    this.#setupButtons();
  }

  #setupButtons() {
    if (!this._buttons?.length) {
      this.#logger.warn('rh-button-group has no slotted buttons');
      return;
    }

    // Set tabindex="0" for non-toolbar roles (group role needs individual focus)
    if (this.getAttribute('role') !== 'toolbar') {
      this._buttons.forEach(btn => btn.setAttribute('tabindex', '0'));
    }
  }

  #onSlotchange() {
    this.#setupButtons();
  }

  override render() {
    return html`<slot @slotchange="${this.#onSlotchange}"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button-group': RhButtonGroup;
  }
}
