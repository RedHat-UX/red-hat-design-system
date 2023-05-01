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

  @property({ type: Boolean, reflect: true, attribute: 'no-hover' }) noHover = false;

  @queryAssignedElements() private defaultSlot?: HTMLElement[];

  private cells: HTMLTableCellElement[] = [];

  render() {
    return html`
    <div id="container" 
         @pointerleave=${this.noHover ? nothing : this._onPointerleave}
         @pointerover=${this.noHover ? nothing : this._onPointerover}>
      <slot @slotchange="${this._onSlotchange}"></slot>
    </div>
    `;
  }

  _onPointerleave() {
    this.cells.forEach(cell => {
      const classes = [
        'active-column',
        'active-row--mouse',
        'active-row--touch',
        'active-cell--mouse',
        'active-cell--touch'
      ];
      cell.classList.remove(...classes);
    });
  }

  _onPointerover(event: PointerEvent) {
    event.preventDefault();

    // don't execute effect on heading row
    if (event.composedPath().some(el => el instanceof HTMLTableSectionElement && el.tagName === 'THEAD')) {
      return;
    }

    let { target, pointerType } = event;

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
    // pen should have the same experience as touch
    const variant = pointerType === 'mouse' ? 'mouse' : 'touch';

    // cell already has focus
    if (currentCell.classList.contains(`active-cell--${variant}`)) {
      return;
    }

    // highlight all siblings in the same column
    const columnIds = currentCell.headers?.split(' ');
    this.cells.forEach(cell => {
      const sibling = columnIds.find(id => cell.headers?.includes(id) || cell.id === id);
      if (sibling) {
        cell.classList.add('active-column');
      } else {
        cell.classList.remove(`active-row--${variant}`);
        cell.classList.remove('active-column');
      }
      // clear previously focused cell
      cell.classList.remove(`active-cell--${variant}`);
    });

    // highlight all siblings in the same row
    const currentRow = currentCell.closest('tr') as HTMLTableRowElement;
    [...currentRow.cells].forEach(cell => cell.classList.add(`active-row--${variant}`));

    // add focus state
    currentCell.classList.add(`active-cell--${variant}`);
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
