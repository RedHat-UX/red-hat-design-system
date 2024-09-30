import { __decorate } from "tslib";
import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `#sort-button{background-color:initial;border:0;color:var(--rh-color-text-primary-on-light,#151515)}#sort-button.dark{color:var(--rh-color-text-primary-on-dark,#fff)}#sort-button:after{content:"";position:absolute;inset:0;cursor:pointer}#sort-button #sort-indicator{color:currentcolor}.visually-hidden{position:fixed;top:0;left:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`;
const DIRECTIONS_OPPOSITES = { asc: 'desc', desc: 'asc' };
export class RequestSortEvent extends ComposedEvent {
    constructor(direction) {
        super('request-sort', {
            cancelable: true,
        });
        this.direction = direction;
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
 * Table sort button
 *
 * @csspart sort-button    - button element
 * @csspart sort-indicator - icon wrapper element
 *
 * @fires {RequestSortEvent} request-sort - when the button is clicked
 */
let RhSortButton = class RhSortButton extends LitElement {
    render() {
        const { on = '' } = this;
        return html `
      <button id="sort-button" part="sort-button" @click="${this.sort}" aria-label="Sort" class="${classMap({ [on]: !!on })}">
        <span class="visually-hidden">${!this.sortDirection ? '' : `(sort${!this.column ? '' : ` by ${this.column}`} in ${this.sortDirection === 'asc' ? 'ascending' : 'descending'} order)`}</span>
        <span id="sort-indicator" part="sort-indicator">
          <svg fill="currentColor" 
               height="1em"
               width="1em"
               viewBox="0 0 320 512"
               aria-hidden="true"
               role="img"
               style="vertical-align: -0.125em;">
            ${svg `<path d="${paths.get(this.sortDirection ?? 'sort')}"></path>`}
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
};
RhSortButton.styles = [styles];
__decorate([
    colorContextConsumer()
], RhSortButton.prototype, "on", void 0);
__decorate([
    property({
        reflect: true,
        attribute: 'sort-direction',
    })
], RhSortButton.prototype, "sortDirection", void 0);
__decorate([
    property()
], RhSortButton.prototype, "column", void 0);
RhSortButton = __decorate([
    customElement('rh-sort-button')
], RhSortButton);
export { RhSortButton };
//# sourceMappingURL=rh-sort-button.js.map