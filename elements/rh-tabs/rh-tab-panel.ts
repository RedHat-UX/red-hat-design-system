import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import styles from './rh-tab-panel.css';

/**
 * The tab panel for use within a rh-tabs element, must be paired with a rh-tab.
 *
 * @slot - Panel content should follow guidelines for [tab panel content layout](../guidelines)
 *
 */
@customElement('rh-tab-panel')
export class RhTabPanel extends LitElement {
  static readonly styles = [styles];

  #internals = this.attachInternals();

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId('rh-tab-panel');
    this.hidden ??= true;
    this.#internals.role = 'tabpanel';

    /*
     To make it easy for screen reader users to navigate from a tab
     to the beginning of content in the active tabpanel, the tabpanel
     element has tabindex="0" to include the panel in the page Tab sequence.
     It is recommended that all tabpanel elements in a tab set are focusable
     if there are any panels in the set that contain content where the first
     element in the panel is not focusable.
     https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic
    */
    this.tabIndex = 0;
  }

  render() {
    return html`
      <div id="container">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tab-panel': RhTabPanel;
  }
}
