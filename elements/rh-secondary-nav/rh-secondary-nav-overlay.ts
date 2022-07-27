import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { ComposedEvent } from '@patternfly/pfe-core';
import { pfelement, bound } from '@patternfly/pfe-core/decorators.js';

import type { RhSecondaryNav } from './rh-secondary-nav.js';

import styles from './rh-secondary-nav-overlay.css';

export class SecondaryNavOverlayEvent extends ComposedEvent {
  constructor(
    public open: boolean,
    public toggle: HTMLElement
  ) {
    super('overlay-change');
  }
}

/**
 * @element 'rh-secondary-nav-overlay'
**/
@customElement('rh-secondary-nav-overlay') @pfelement()
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
