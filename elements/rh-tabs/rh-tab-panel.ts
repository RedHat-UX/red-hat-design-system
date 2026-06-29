import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-tab-panel.css' with { type: 'css' };

/**
 * A content panel for use in an `rh-tabs` element. Each panel
 * must be paired with a corresponding `rh-tab`. Authors should
 * avoid empty panels. The ARIA `tabpanel` role and `tabindex`
 * allow screen reader and keyboard navigation.
 *
 * @summary Content panel paired with an `rh-tab`
 *
 */
@customElement('rh-tab-panel')
@themable
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
        <!-- summary: Panel content
             description: |
               Content shown when the paired tab is active. Screen
               reader users navigate here via the ARIA tabpanel
               role. Authors should ensure keyboard accessibility. -->
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
