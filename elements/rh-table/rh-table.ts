import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { RequestSortEvent, RhSortButton } from './rh-sort-button.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-table.css';

/**
 * A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.
 *
 * @summary Organizes and displays information from a data set
 *
 * @alias table
 *
 * @cssprop {<color>} [--rh-table-row-background-hover-color=224 224 224 / 40%] - row hover background color
 * @cssprop {<color>} [--rh-table-column-background-hover-color=0 102 204 / 10%] - column hover background color
 * @cssprop [--rh-table-row-border=1px solid #c7c7c7] - row border
 */
@customElement('rh-table')
@themable
export class RhTable extends LitElement {
  static readonly styles = [styles];

  private static getNodeContentForSort(
    columnIndexToSort: number,
    node: Element,
  ) {
    const content = node.querySelector(`
      :is(th, td):nth-child(${columnIndexToSort + 1}),
      tr > :is(th, td):nth-child(${columnIndexToSort + 1})
    `.trim())?.textContent?.trim()?.toLowerCase() ?? '';
    return { node, content };
  }

  private static sortByContent(
    direction: 'asc' | 'desc',
    a: { content: string },
    b: { content: string },
  ) {
    if (direction === 'asc') {
      return (a.content < b.content ? -1 : a.content > b.content ? 1 : 0);
    } else {
      return (b.content < a.content ? -1 : b.content > a.content ? 1 : 0);
    }
  }

  get #table(): HTMLTableElement | undefined {
    return this.querySelector?.('table') as HTMLTableElement | undefined;
  }

  get #cols(): NodeListOf<HTMLTableColElement> | undefined {
    return this.querySelectorAll?.('col') as NodeListOf<HTMLTableColElement> | undefined;
  }

  get #rows(): NodeListOf<HTMLTableRowElement> | undefined {
    return this.querySelectorAll?.('tbody > tr') as NodeListOf<HTMLTableRowElement> | undefined;
  }

  get #colHeaders(): NodeListOf<HTMLTableCellElement> | undefined {
    return this.querySelectorAll?.<HTMLTableCellElement>('thead > tr > th');
  }

  get #summary(): HTMLElement | undefined {
    return this.querySelector?.('[slot="summary"]') as HTMLElement | undefined;
  }

  #logger = new Logger(this);

  #mo = new MutationObserver(() => this.#init);

  connectedCallback() {
    super.connectedCallback();
    this.#init();
    this.#mo.observe(this, { childList: true });
  }

  render() {
    return html`
      <div id="container" part="container">
        <!-- an HTML table -->
        <slot @pointerleave="${this.#onPointerleave}"
              @pointerover="${this.#onPointerover}"
              @request-sort="${this.#onRequestSort}"
              @slotchange="${this.#onSlotChange}"></slot>
        <!-- description of the data -->
        <slot id="summary" name="summary"></slot>
      </div>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#mo.disconnect();
  }

  #onPointerleave() {
    if (!this.#cols) {
      return;
    }

    this.#cols.forEach(col => col.classList.remove('active'));
  }

  #onPointerover(event: PointerEvent) {
    if (!this.#cols) {
      return;
    }

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

    event.preventDefault();

    this.#cols.forEach((col, index) => {
      const { cellIndex } = target as HTMLTableCellElement;
      col.classList.toggle('active', index === cellIndex);
    });
  }

  #init() {
    if (this.#table && this.#summary) {
      this.#table.setAttribute('aria-describedby', 'summary');
    }

    /**
     * Fail criteria:
     * - If rowspan exists anywhere in the table, the auto-generated heading labels won't work
     * - If colspan exists in the <thead>, the auto-generated heading labels won't work
     * - If colspan exists in the <tbody>, the auto-generated heading labels partially work (only assigning the first)
     *
     * So we bail for now...
     */
    if (this.querySelector?.('[colspan], [rowspan]')) {
      return;
    }

    /* If responsive attribute set, auto-assign `data-label` attributes based on column headers */
    if (this.#table?.tHead && this.#colHeaders?.length && this.#rows) {
      for (const row of this.#rows) {
        row?.querySelectorAll<HTMLElement>(':is(td, th)')
            .forEach((cell, index) => {
              cell.dataset.label ||= this.#colHeaders?.[index]?.innerText || '';
            });
      }
    }
  }

  #onSlotChange() {
    this.#init();
  }

  #onRequestSort(event: Event) {
    if (event instanceof RequestSortEvent) {
      for (const button of this.querySelectorAll('rh-sort-button')) {
        const header = button.closest('th');
        if (button === event.target) {
          header?.setAttribute('aria-sort', `${event.direction}ending`);
        } else {
          button.removeAttribute('sort-direction');
          header?.removeAttribute('aria-sort');
        }
      }
      if (!event.defaultPrevented && event.target instanceof RhSortButton) {
        event.target.sortDirection = event.direction;
        this.#performSort(event.target, event.direction);
      }
    }
  }

  // @todo: should we move the remaining methods into a controller to share with pf-table?
  #performSort(button: RhSortButton, direction: 'asc' | 'desc') {
    const header = button.closest('th');
    const children = header?.parentElement?.children;
    if (children) {
      const columnIndexToSort = [...children].indexOf(header);

      if (!this.#rows) {
        this.#logger.warn('Could not perform sort: no rows found');
        return;
      }

      Array
          .from(this.#rows, node => RhTable.getNodeContentForSort(columnIndexToSort, node))
          .sort((a, b) => RhTable.sortByContent(direction, a, b))
          .forEach(({ node }, index) => {
            if (!this.#rows) {
              return;
            }
            const target = this.#rows[index];
            if (this.#rows[index] !== node) {
              const position: InsertPosition =
                direction === 'desc' ? 'afterend' : 'beforebegin';
              target.insertAdjacentElement(position, node);
            }
          });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-table': RhTable;
  }
}
