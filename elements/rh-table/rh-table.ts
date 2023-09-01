/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import styles from './rh-table.css';

// TODO: translations
// TODO: replace with rh-icon
const ICONS = {
  ['full-screen']: {
    viewBox: '0 0 448 512',
    path: 'M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z',
  },
  get(name: 'full-screen') {
    const { viewBox, path } = ICONS[name];
    return svg`
      <svg
          aria-hidden="true"
          class="icon"
          fill="currentColor"
          height="1em" width="1em"
          style="vertical-align:-0.125em"
          viewBox="${viewBox}">
        <path d="${path}"/>
      </svg>`;
  },
};

/**
 * Table
 * @slot - Place element content here
 */
@customElement('rh-table')
export class RhTable extends LitElement {
  static readonly styles = [styles];

  @property({ type: Boolean, reflect: true, attribute: 'no-full-screen' }) noFullScreen = false;

  @queryAssignedElements() private defaultSlot?: HTMLElement[];

  private cols: HTMLTableColElement[] = [];
  private logger = new Logger(this);

  render() {
    return html`
      <div id="container" @pointerleave=${this.onPointerleave} @pointerover=${this.onPointerover}>
        <button id="full-screen-button" class="button" title="Maximize the table" ?hidden=${this.noFullScreen}>${ICONS.get('full-screen')}</button>
        <slot @slotchange="${this.onSlotchange}"></slot>
      </div>
    `;
  }

  private onPointerleave() {
    this.cols.forEach((col) => col.classList.remove('active'));
  }

  private onPointerover(event: PointerEvent) {
    event.preventDefault();

    let { target } = event;

    if (!(target instanceof Element)) {
      return;
    }

    if (!['td', 'th'].includes(target.tagName)) {
      const ancestorCell = target.closest('td, th');
      if (ancestorCell) {
        target = ancestorCell;
      } else {
        return;
      }
    }

    this.cols.forEach((col, index) => {
      const { cellIndex } = target as HTMLTableCellElement;
      if (index === cellIndex) {
        col.classList.add('active');
      } else {
        col.classList.remove('active');
      }
    });
  }

  onSlotchange() {
    const table = this.defaultSlot?.[0];
    if (table) {
      this.cols = [...(table.querySelectorAll('col') || [])] as HTMLTableColElement[];
    } else {
      this.logger.warn('[rh-table] expects a slotted <table> tag.');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-table': RhTable;
  }
}
