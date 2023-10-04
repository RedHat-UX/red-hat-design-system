import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import styles from './rh-sort-button.css';
import { ComposedEvent } from '@patternfly/pfe-core';

const DIRECTIONS = { asc: 'desc', desc: 'asc' } as const;

export class RequestSortEvent extends ComposedEvent {
  constructor(public direction: 'asc' | 'desc') {
    super('request-sort', {
      cancelable: true,
    });
  }
}

// TODO need finalized icons from designers
const paths = new Map(Object.entries({
  asc: 'M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z',
  desc: 'M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z',
  sort: 'M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z',
}));

/**
 * Table sort button
 */
@customElement('rh-sort-button')
export class RhSortButton extends LitElement {
  static readonly styles = [styles];

  @property({
    reflect: true,
    attribute: 'sort-direction',
  }) sortDirection?: 'asc' | 'desc';

  @property() column?: string;

  render() {
    return html`
      <button id="sort-button" part="sort-button" @click="${this.sort}" aria-label="Sort">
        <span class="visually-hidden">${!this.sortDirection ? '' : `(sort${!this.column ? '' : ` by ${this.column}`} in ${this.sortDirection === 'asc' ? 'ascending' : 'descending'} order)`}</span>
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

  sort() {
    const next = DIRECTIONS[this.sortDirection ?? 'asc'];
    this.dispatchEvent(new RequestSortEvent(next));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-sort-button': RhSortButton;
  }
}
