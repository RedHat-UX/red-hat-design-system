import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { RequestSortEvent, RhSortButton } from './rh-sort-button.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import styles from './rh-table.css';

/**
 * A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.
 * @summary Organizes and displays information from a data set
 * @slot               - an HTML table
 * @slot    summary    - a brief description of the data
 * @cssprop {<color>} [--rh-table-row-background-hover-color=224 224 224 / 40%] - row hover background color
 * @cssprop {<color>} [--rh-table-column-background-hover-color=0 102 204 / 10%] - column hover background color
 * @cssprop [--rh-table-row-border=1px solid #c7c7c7] - row border
 */
@customElement('rh-table')
export class RhTable extends LitElement {
  static readonly styles = [styles];

  /**
   * Auto-generates header labels for responsive layout
   */
  @property({ reflect: true }) responsive?: 'stack';

  @colorContextConsumer() private on?: ColorTheme;

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
    return this.querySelector('table') as HTMLTableElement | undefined;
  }

  get #cols(): NodeListOf<HTMLTableColElement> | undefined {
    return this.querySelectorAll('col') as NodeListOf<HTMLTableColElement> | undefined;
  }

  get #rows(): NodeListOf<HTMLTableRowElement> | undefined {
    return this.querySelectorAll('tbody > tr') as NodeListOf<HTMLTableRowElement> | undefined;
  }

  get #colHeaders(): NodeListOf<HTMLTableCellElement> | undefined {
    return this.querySelectorAll<HTMLTableCellElement>('thead > tr > th');
  }

  get #summary(): HTMLElement | undefined {
    return this.querySelector('[slot="summary"]') as HTMLElement | undefined;
  }

  #internalColorPalette?: string | null;

  #logger = new Logger(this);

  connectedCallback() {
    super.connectedCallback();
    this.#init();
  }

  protected willUpdate(): void {
    /**
     * TEMPORARY: this fixes the need to access the parents color-palette in order to get the `lightest`
     * value.  This fix will only update the component when switching between light and dark themes as
     * thats when the consumer requests an update.  Switching between lighter -> light for example will
     * not trigger the component to update at this time.
     */
    this.#internalColorPalette = this.closest('[color-palette]')?.getAttribute('color-palette');
  }

  render() {
    const { on = 'light' } = this;
    return html`
      <div id="container"
           part="container"
           class="${classMap({
             on: true,
             [on]: true,
             [`color-palette-${this.#internalColorPalette}`]: !!this.#internalColorPalette,
           })}">
        <slot @pointerleave="${this.#onPointerleave}"
              @pointerover="${this.#onPointerover}"
              @request-sort="${this.#onRequestSort}"
              @slotchange="${this.#onSlotChange}"></slot>
        <slot id="summary" name="summary"></slot>
      </div>
    `;
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
    const { responsive } = this;

    if (this.#table && this.#summary) {
      this.#table.setAttribute('aria-describedby', 'summary');
    }

    /* If responsive attribute set, auto-assign `data-label` attributes based on column headers */
    if (responsive && this.#table?.tHead && this.#colHeaders?.length && this.#rows) {
      for (const row of this.#rows) {
        if (!row) {
          continue;
        }

        const cells = row.querySelectorAll(':is(td, th)');

        cells.forEach((cell, index) => {
          if (!cell.hasAttribute('data-label')) {
            const colHeader = this.#colHeaders ? this.#colHeaders[index].innerText : '';
            cell.setAttribute('data-label', colHeader);
          }
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
