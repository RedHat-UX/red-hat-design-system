import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ComposedEvent } from '@patternfly/pfe-core';
import { pfelement, bound } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-secondary-nav-overlay.css';

export class SecondaryNavOverlayEvent extends ComposedEvent {
  constructor(
    public open: boolean,
    public toggle: HTMLElement
  ) {
    super('overlay-change');
  }
}

@customElement('rh-secondary-nav-overlay') @pfelement()
export class RhSecondaryNavOverlay extends LitElement {
  static readonly styles = [styles];

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html``;
  }

  @bound
  public toggleNavOverlay(open: true | false) {
    if (open) {
      this.removeAttribute('hidden');
    } else {
      this.setAttribute('hidden', '');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-overlay': RhSecondaryNavOverlay;
  }
}
