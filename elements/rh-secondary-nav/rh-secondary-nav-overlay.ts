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
  public toggleNavOverlay(event: SecondaryNavOverlayEvent, parent: HTMLElement) {
    if (parent.contains(event.toggle)) {
      if (event.open) {
        this.setAttribute('visible', '');
      } else {
        this.removeAttribute('visible');
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-overlay': RhSecondaryNavOverlay;
  }
}
