/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import styles from './rh-table.css';
import { classMap } from 'lit/directives/class-map.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { query } from 'lit/decorators/query.js';

// TODO: translations

// TODO: replace with rh-icon
const ICONS = {
  ['full-screen']: {
    viewBox: '0 0 448 512',
    path: 'M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z',
  },
  ['close-full-screen']: {
    viewBox: '0 0 512 512',
    path: 'M200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312c0-13.3-10.7-24-24-24zm112-64h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3c6.2-6.2 6.2-16.4 0-22.6L481.9 4.7c-6.2-6.2-16.4-6.2-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112c0 13.3 10.7 24 24 24zm96 136l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312c-13.3 0-24 10.7-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3c6.2 6.2 16.4 6.2 22.6 0l25.4-25.4c6.2-6.2 6.2-16.4 0-22.6L408 360zM183 71.1L152 104 52.7 4.7c-6.2-6.2-16.4-6.2-22.6 0L4.7 30.1c-6.2 6.2-6.2 16.4 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112c13.3 0 24-10.7 24-24V88c0-21.3-25.9-32-41-16.9z'
  },
  get(name: 'full-screen' | 'close-full-screen' ) {
    const { viewBox, path } = ICONS[name];
    return svg`
      <svg
          aria-hidden="true"
          class="icon"
          fill="currentColor"
          height="1em"
          width="1em"
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

  @property({ type: Boolean, reflect: true, attribute: 'no-full-screen' }) fullScreenDisabled = false;

  @queryAssignedElements() _defaultSlot?: HTMLElement[];
  @query('#full-screen-dialog') _dialog!: HTMLDialogElement;

  #cols: HTMLTableColElement[] = [];
  #logger = new Logger(this);
  #screenSize = new ScreenSizeController(this);
  #expanded = false;

  render() {
    const { mobile } = this.#screenSize;

    return html`
      <div id="container"
           class=${classMap({ mobile })}
           @pointerleave=${this.#onPointerleave}
           @pointerover=${this.#onPointerover}>
        <button id="full-screen-button"
                class="button"
                title="Maximize the table"
                @click=${this.#toggleFullScreen}
                ?hidden=${this.fullScreenDisabled}>${ICONS.get('full-screen')}</button>
        <slot @slotchange="${this.onSlotchange}"></slot>
      </div>
      <dialog id="full-screen-dialog">
        <div id="dialog-container">
        <button id="close-full-screen-button"
                class="button"
                title="Restore table to original size"
                @click=${this.#toggleFullScreen}>${ICONS.get('close-full-screen')}</button>
        <!-- clone slotted content? -->
        </div>
      </dialog>
    `;
  }

  #toggleFullScreen() {
    this.#expanded = !this.#expanded;
    this.#expanded ? this._dialog.showModal() : this._dialog.close();
  }

  #onPointerleave() {
    this.#cols.forEach(col => col.classList.remove('active'));
  }

  #onPointerover(event: PointerEvent) {
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

    this.#cols.forEach((col, index) => {
      const { cellIndex } = target as HTMLTableCellElement;
      if (index === cellIndex) {
        col.classList.add('active');
      } else {
        col.classList.remove('active');
      }
    });
  }

  onSlotchange() {
    const table = this._defaultSlot?.[0];
    if (table) {
      this.#cols = [...(table.querySelectorAll('col') || [])] as HTMLTableColElement[];
    } else {
      this.#logger.warn('[rh-table] expects a slotted <table> tag.');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-table': RhTable;
  }
}
