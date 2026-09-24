import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './uxdot-pathfinder.css';

/**
 * A previous/next page navigation component for the docs site.
 * Slots `<a>` elements into "previous" and "next" card positions.
 *
 * @slot previous - Link to the previous page
 * @slot next - Link to the next page
 */
@customElement('uxdot-pathfinder')
export class UxdotPathfinder extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <nav aria-label="Previous and next pages">
        <div id="previous">
          <rh-icon set="ui" icon="arrow-left"></rh-icon>
          <span class="text">
            <span class="label">Previous</span>
            <slot name="previous"></slot>
          </span>
        </div>
        <div id="next">
          <span class="text">
            <span class="label">Next</span>
            <slot name="next"></slot>
          </span>
          <rh-icon set="ui" icon="arrow-right"></rh-icon>
        </div>
      </nav>
    `;
  }
}
