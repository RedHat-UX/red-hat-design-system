import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { ComposedEvent } from '@patternfly/pfe-core';
import { observed } from '@patternfly/pfe-core/decorators.js';

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
 * @summary An overlay element to cover content with an opacity when navigation is expanded.
 */
@customElement('rh-secondary-nav-overlay')
export class RhSecondaryNavOverlay extends LitElement {
  static readonly styles = [styles];

  @observed
  @state() open = false;

  render() {
    return html``;
  }

  protected _openChanged(_oldValue?: boolean, newValue?: boolean) {
    this.toggleAttribute('open', newValue);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-overlay': RhSecondaryNavOverlay;
  }
}
