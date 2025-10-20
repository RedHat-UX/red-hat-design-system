import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { themable } from '@rhds/elements/lib/themable.js';
import styles from './rh-button-group.css';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

import type { RhButton } from '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-button/rh-button.js';

/**
 * A button group visually organizes multiple related buttons into a single collection.
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

  private _rovingController?: RovingTabindexController<HTMLButtonElement | RhButton>;

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

    if (this.getAttribute('role') === 'toolbar') {
      this._buttons.forEach(b =>
        b.setAttribute('tabindex', b === this._buttons[0] ? '0' : '-1')
      );

      if (!this._rovingController) {
        this._rovingController = RovingTabindexController.of(this, {
          getItems: () => this._buttons,
        });
        this.addController(this._rovingController);
      }
    } else {
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
    'rh-button': RhButton;
  }
}
