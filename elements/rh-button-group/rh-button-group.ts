import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { themable } from '@rhds/elements/lib/themable.js';
import styles from './rh-button-group.css';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

// ✅ Import RhButton type for IntelliSense
import type { RhButton } from '@rhds/elements/rh-button/rh-button.js';

// ✅ Side-effect imports to register elements for runtime & linter
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-button-group/rh-button-group.js';

@customElement('rh-button-group')
export class RhButtonGroup extends themable(LitElement) {
  static readonly styles = [styles];
  #logger = new Logger(this);

  /**
   * Role of the group:
   * - "group": Each button tabbable (normal tab order)
   * - "toolbar": Roving tabindex (WAI-ARIA Toolbar pattern)
   */
  @property({ reflect: true })
  role: 'group' | 'toolbar' = 'group';

  /**
   * Slotted buttons: can be native <button> or <rh-button>
   */
  @queryAssignedElements({ flatten: true })
  private _buttons!: (HTMLButtonElement | RhButton)[];

  override firstUpdated() {
    if (!this._buttons?.length) {
      this.#logger.warn('<rh-button-group> has no slotted buttons');
      return;
    }

    if (this.role === 'toolbar') {
      this.#setupToolbar();
    }
  }

  /**
   * Setup roving tabindex for toolbar
   */
  #setupToolbar() {
    let currentIndex = 0;

    this._buttons.forEach((btn, i) => {
      btn.setAttribute('tabindex', i === 0 ? '0' : '-1');
    });

    this.addEventListener('keydown', (event: KeyboardEvent) => {
      const { key } = event;

      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(key)) {
        return;
      }

      event.preventDefault();

      switch (key) {
        case 'ArrowRight':
        case 'ArrowDown':
          this._moveFocus(currentIndex, 1);
          currentIndex = (currentIndex + 1) % this._buttons.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          this._moveFocus(currentIndex, -1);
          currentIndex = (currentIndex - 1 + this._buttons.length) % this._buttons.length;
          break;
        case 'Home':
          this._focusButton(0);
          currentIndex = 0;
          break;
        case 'End':
          this._focusButton(this._buttons.length - 1);
          currentIndex = this._buttons.length - 1;
          break;
      }
    });
  }

  private _moveFocus(current: number, delta: number) {
    const next = (current + delta + this._buttons.length) % this._buttons.length;
    this._focusButton(next);
  }

  private _focusButton(index: number) {
    this._buttons.forEach((btn, i) => {
      btn.setAttribute('tabindex', i === index ? '0' : '-1');
    });
    (this._buttons[index] as HTMLElement).focus();
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
