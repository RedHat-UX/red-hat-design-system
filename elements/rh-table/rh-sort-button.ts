import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { ComposedEvent } from '@patternfly/pfe-core';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-sort-button.css' with { type: 'css' };

const DIRECTIONS_OPPOSITES = { asc: 'desc', desc: 'asc' } as const;

export class RequestSortEvent extends ComposedEvent {
  constructor(public direction: 'asc' | 'desc') {
    super('request-sort', {
      cancelable: true,
    });
  }
}

const paths = new Map(Object.entries({
  // eslint-disable-next-line @stylistic/max-len
  asc: 'M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z',
  // eslint-disable-next-line @stylistic/max-len
  desc: 'M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z',
  // eslint-disable-next-line @stylistic/max-len
  sort: 'M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z',
}));

/**
 * A button for sorting table columns in ascending or descending order.
 * Authors MUST place this element inside a `<th>` cell within an
 * `<rh-table>` element. The button provides a screen reader accessible
 * label announcing the current sort direction and column name.
 * Authors SHOULD set the `column` attribute to identify the sorted
 * column for assistive technology users.
 *
 * @summary Toggles column sort direction within a table header
 *
 * @fires {RequestSortEvent} request-sort - Fired when the user
 *        activates the sort button. The event detail includes a
 *        `direction` property set to `'asc'` or `'desc'`.
 *        Cancelling this event prevents the default sort behavior.
 *
 * @csspart sort-button - The native button element. Use to
 *          customize the sort button appearance.
 * @csspart sort-indicator - The wrapper around the sort direction
 *          SVG icon.
 *
 */
@customElement('rh-sort-button')
@themable
export class RhSortButton extends LitElement {
  static readonly styles = [styles];

  /** The button's sorting order */
  @property({
    reflect: true,
    attribute: 'sort-direction',
  }) sortDirection?: 'asc' | 'desc';

  /** The column name associated with this button (for screen readers) */
  @property() column?: string;

  render() {
    return html`
      <!-- button element -->
      <button id="sort-button" part="sort-button" @click="${this.sort}" aria-label="Sort">
        <span class="visually-hidden">${!this.sortDirection ? '' : `(sort${!this.column ? '' : ` by ${this.column}`} in ${this.sortDirection === 'asc' ? 'ascending' : 'descending'} order)`}</span>
        <!-- icon wrapper element -->
        <span id="sort-indicator" part="sort-indicator">
          <svg fill="currentColor"
               height="1em"
               width="1em"
               viewBox="0 0 320 512"
               aria-hidden="true"
               role="img"
               style="vertical-align: -0.125em;">
            ${svg`<path d="${paths.get(this.sortDirection ?? 'sort')}"></path>`}
          </svg>
        </span>
      </button>
    `;
  }

  /**
   * Dispatch a request-sort event in ascending (asc) or descending (desc) order
   */
  sort() {
    const next = DIRECTIONS_OPPOSITES[this.sortDirection ?? 'asc'];
    this.dispatchEvent(new RequestSortEvent(next));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-sort-button': RhSortButton;
  }
}
