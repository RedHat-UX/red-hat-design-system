import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import style from './rh-footer-links.css';

@customElement('rh-footer-links')
export class RhFooterLinks extends LitElement {
  static readonly styles = style;

  /**
   * Cause the header slot to be visually hidden.
   * Setting this to true will not affect `aria-labelledby`.
   */
  @property({ type: Boolean, attribute: 'header-hidden', reflect: true })
  accessor headerHidden = false;

  #logger = new Logger(this);

  #mo = new MutationObserver(() => this.updateAccessibility());

  protected slots = new SlotController(this, 'header');

  connectedCallback() {
    super.connectedCallback();
    this.updateAccessibility();
    this.#mo.observe(this, { childList: true });
  }

  updateAccessibility() {
    // ensure we've rendered to our shadowroot
    const header = this.querySelector('[slot="header"]');
    const ul = this.querySelector('ul');
    if (header && ul) {
      // ensure there is an id on the header slot
      header.id ||= getRandomId('rh-footer-links');
      ul.setAttribute('aria-labelledby', header.id);
    } else {
      this.#logger.warn('This links set doesn\'t have a valid header associated with it.');
    }
  }

  render() {
    return html`
      <div part="header" class="header">
        <slot name="header"></slot>
      </div>
      <div part="default" class="default">
        <slot name="panel"></slot>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-links': RhFooterLinks;
  }
}
