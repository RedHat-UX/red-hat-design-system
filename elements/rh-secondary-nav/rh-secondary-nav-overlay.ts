import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { ComposedEvent } from '@patternfly/pfe-core';
import { bound } from '@patternfly/pfe-core/decorators.js';

import type { RhSecondaryNav } from './rh-secondary-nav.js';

import styles from './rh-secondary-nav-overlay.css';

export class SecondaryNavOverlayChangeEvent extends ComposedEvent {
  constructor(
    public open: boolean,
    public toggle: HTMLElement
  ) {
    super('overlay-change');
  }
}

/**
 * @summary A overlay to cover content when navigation is expanded.
 */
@customElement('rh-secondary-nav-overlay')
export class RhSecondaryNavOverlay extends LitElement {
  static readonly styles = [styles];

  @state()
  public open = false;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html``;
  }

  /**
   * Sets or removes the hidden attribute to toggle the overlay
   * @param toggle {HTMLElement} overlay to toggle
   * @param state {boolean} open = true, closed = false
   * @param parent {RhSecondaryNav} parent nav of overlay
   */
  @bound
  public toggleNavOverlay(toggle: HTMLElement, state: boolean, parent: RhSecondaryNav) {
    if (parent.contains(toggle) || parent.shadowRoot?.contains(toggle)) {
      if (state) {
        this.removeAttribute('hidden');
        this.open = true;
      } else {
        this.setAttribute('hidden', '');
        this.open = false;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-overlay': RhSecondaryNavOverlay;
  }
}
