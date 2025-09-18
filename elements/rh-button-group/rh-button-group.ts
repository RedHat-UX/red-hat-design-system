import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { themable } from '@rhds/elements/lib/themable.js';
import styles from './rh-button-group.css';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

import type { RhButton } from '@rhds/elements/rh-button/rh-button.js';

import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-button-group/rh-button-group.js';

/**
 * description
 *
 * @alias Button Group
 */
@customElement('rh-button-group')
export class RhButtonGroup extends themable(LitElement) {
  static readonly styles = [styles];
  #logger = new Logger(this);

  @queryAssignedElements({ flatten: true })
  private _buttons!: (HTMLButtonElement | RhButton)[];

  private _rovingController?: RovingTabindexController<HTMLButtonElement | RhButton>;

  protected override firstUpdated() {
    if (typeof window === 'undefined') {
      return;
    } // SSR-safe

    const setupToolbar = () => {
      if (!this._buttons?.length) {
        this.#logger.warn('<rh-button-group> has no slotted buttons');
        return;
      }

      if (this.getAttribute('role') === 'toolbar') {
        // Set initial tabindex
        this._buttons.forEach(b =>
          b.setAttribute('tabindex', b === this._buttons[0] ? '0' : '-1')
        );

        if (!this._rovingController) {
          // Create RovingTabindexController with required getItems function
          this._rovingController = RovingTabindexController.of(this, {
            getItems: () => this._buttons,
          });
          this.addController(this._rovingController);
        }
      } else {
        // role="group" → all buttons tabbable
        this._buttons.forEach(btn => btn.setAttribute('tabindex', '0'));
      }
    };

    // Initial setup
    setupToolbar();

    // Slotchange listener for dynamic buttons
    const slot = this.shadowRoot!.querySelector('slot');
    slot?.addEventListener('slotchange', () => {
      setupToolbar();
    });
  }

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button-group': RhButtonGroup;
    'rh-button': RhButton;
  }
}
