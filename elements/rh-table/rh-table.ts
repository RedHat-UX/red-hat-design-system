/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { LitElement, html, nothing } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import styles from './rh-table.css';

/**
 * Table
 * @slot - Place element content here
 */
@customElement('rh-table')
export class RhTable extends LitElement {
  static readonly styles = [styles];

  @property({ type: Boolean, reflect: true, attribute: 'active-focus' }) activeFocus = false;

  @queryAssignedElements() private defaultSlot?: HTMLElement[];

  private cols: HTMLTableColElement[] = [];
  private logger = new Logger(this);

  render() {
    return html`
    <div id="container" 
         @pointerleave=${this.onPointerleave}
         @pointerover=${this.onPointerover}>
      <slot @slotchange="${this.onSlotchange}"></slot>
    </div>
    `;
  }

  private onPointerleave() {
    this.cols.forEach(col => col.classList.remove('active'));
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
