import { LitElement, html, svg, render, nothing } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import styles from './rh-table.css';
import { classMap } from 'lit/directives/class-map.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { property } from 'lit/decorators/property.js';
import { RequestSortEvent, RhSortButton } from './rh-sort-button.js';
export * from './rh-sort-button.js';

/**
 * Table sort button
 * @slot - Place element content here
 */
@customElement('rh-table')
export class RhTable extends LitElement {
  static readonly styles = [styles];

  get #rows(): NodeListOf<HTMLTableRowElement> | undefined {
    return this.querySelectorAll('tbody > tr') as NodeListOf<HTMLTableRowElement> | undefined;
  }

  get #sortableHeaders(): NodeListOf<HTMLTableCellElement> | undefined {
    return this.querySelectorAll('th[sortable]') as NodeListOf<HTMLTableCellElement> | undefined;
  }

  get #cols(): NodeListOf<HTMLTableColElement> | undefined {
    return this.querySelectorAll('col') as NodeListOf<HTMLTableColElement> | undefined;
  }

  @property({ reflect: true }) disclaimer?: string;

  #logger = new Logger(this);
  #screenSize = new ScreenSizeController(this);

  render() {
    const { mobile } = this.#screenSize;

    return html`
      <div id="container"
           class=${classMap({ mobile })}
           @pointerleave=${this.#onPointerleave}
           @pointerover=${this.#onPointerover}>
        <slot @slotchange="${this.#onSlotchange}"
              @request-sort="${this.#onRequestSort}"></slot>
        <slot name="disclaimer">
          ${!this.disclaimer ? nothing : html`<small id="disclaimer" part="disclaimer">${this.disclaimer}</small>`}
        </slot>
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

    if (!this.#cols) {
      return;
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

  #onSlotchange() {
    //
  }

  #onRequestSort(event: Event) {
    if (event instanceof RequestSortEvent) {
      for (const button of this.querySelectorAll<RhSortButton>('rh-sort-button')) {
        button.selected = button === event.target;
        if (button !== event.target) {
          button.removeAttribute('sort-direction');
        }
      }
      if (!event.defaultPrevented && event.target instanceof RhSortButton) {
        event.target.sortDirection = event.direction;
        this.#performSort(event.target, event.direction);
      }
    }
  }

  // TODO should we move the remaining methods into a controller?
  #performSort(button: RhSortButton, direction: 'asc' | 'desc') {
    const header = button.closest('th');
    const children = header?.parentElement?.children;
    if (children) {
      const columnIndexToSort = [...children].indexOf(header);

      if (!this.#rows) {
        this.#logger.warn('No rows found');
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
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-table': RhTable;
  }
}
