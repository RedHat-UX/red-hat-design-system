/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { LitElement, html, nothing } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import styles from './rh-table.css';

/**
 * Table
 * @slot - Place element content here
 */
@customElement('rh-table')
export class RhTable extends LitElement {
  static readonly styles = [styles];

  @property({ type: Boolean, reflect: true }) hoverable = true;

  @queryAssignedElements() private defaultSlot?: HTMLElement[];

  private cells: HTMLTableCellElement[] = [];

  render() {
    return html`
    <div id="container" 
         @blur=${() => nothing} 
         @mouseleave=${this._onMouseleave}
         @focus=${() => nothing}
         @mouseover=${this._onMouseover}>
      <slot @slotchange="${this._onSlotchange}"></slot>
    </div>
    `;
  }

  _onMouseleave() {
    this.cells.forEach(cell => {
      cell.classList.remove('active-row', 'active-column', 'active-cell');
    });
  }

  _onMouseover(event: MouseEvent) {
    // don't execute effect on heading row
    if (event.composedPath().some(x => x instanceof HTMLTableSectionElement && x.tagName === 'THEAD')) {
      return;
    }

    let { target } = event;

    if (!(target instanceof Element)) {
      return;
    }

    if (target.tagName !== 'td') {
      const ancestorCell = target.closest('td');
      if (ancestorCell) {
        target = ancestorCell;
      } else {
        return;
      }
    }

    const currentCell = target as HTMLTableCellElement;

    // cell already has focus
    if (currentCell.classList.contains('active-cell')) {
      return;
    }

    // highlight all siblings in the same column
    const columnIds = currentCell.headers?.split(' ');
    this.cells.forEach(cell => {
      const sibling = columnIds.find(id => cell.headers?.includes(id) || cell.id === id);
      if (sibling) {
        cell.classList.add('active-column');
      } else {
        cell.classList.remove('active-row');
        cell.classList.remove('active-column');
      }
      // clear previously focused cell
      cell.classList.remove('active-cell');
    });

    // highlight all siblings in the same row
    const currentRow = currentCell.closest('tr') as HTMLTableRowElement;
    [...currentRow.cells].forEach(cell => {
      if (cell !== currentCell) {
        cell.classList.add('active-row');
      }
    });

    // add focus state
    currentCell.classList.add('active-cell');
  }

  _onSlotchange() {
    // todo: warning if no table
    const table = this.defaultSlot?.[0];
    if (table) {
      this.cells = [...(table.querySelectorAll('th, td') || [])] as HTMLTableCellElement[];
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-table': RhTable;
  }
}
