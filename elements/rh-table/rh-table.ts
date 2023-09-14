/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { LitElement, html, svg, render } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import styles from './rh-table.css';
import { classMap } from 'lit/directives/class-map.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { query } from 'lit/decorators/query.js';

const DIRECTIONS = { asc: 'desc', desc: 'asc' } as const;

// TODO: translations
/**
 * Title
 * Expand fullscreen functionality (cp-elements)
 * Sorting
 * - default sort
 * - add event handler to each th element
 * - shift nodes
 * Vertical scrolling
 * Hover
 * Link styling
 * Mobile styling
 */

// TODO: replace with rh-icon
const ICONS = {
  asc: {
    viewBox: '0 0 320 512',
    path: 'M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z',
  },
  desc: {
    viewBox: '0 0 320 512',
    path: 'M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z',
  },
  get(name: 'asc' | 'desc') {
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

  @property({ reflect: true }) disclaimer?: string;

  get rows() {
    return this.querySelectorAll<HTMLTableRowElement>('tbody > tr');
  }

  @queryAssignedElements() _defaultSlot?: HTMLElement[];
  @query('#container') _container!: HTMLDivElement;

  #table!: HTMLTableElement | null;
  #sortableHeaders: HTMLTableCellElement[] = [];
  #cols: HTMLTableColElement[] = [];
  #logger = new Logger(this);
  #screenSize = new ScreenSizeController(this);

  render() {
    const { mobile } = this.#screenSize;

    return html`
      <div id="container"
           class=${classMap({ mobile })}
           @pointerleave=${this.#onPointerleave}
           @pointerover=${this.#onPointerover}>
        <slot @slotchange="${this.#onSlotchange}"></slot>
        <slot name="disclaimer">
          ${!this.disclaimer ? nothing : html`<small id="disclaimer" part="disclaimer">${this.disclaimer}</small>`}
        </slot>
      </div>
    `;
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

  #sortButtonTemplate(children: NodeListOf<ChildNode>) {
    return html`
      <button class="sort-button"
              @click="${this.#onSort.bind(this)}">
              ${[...children]}
        <span class="visually-hidden"></span>
        <span class="sort-indicator"></span>
      </button>`;
  }

  #onSlotchange() {
    this.#table = this.querySelector('table');
    this.#sortableHeaders = [...(this.querySelectorAll('th[sortable]') || [])] as HTMLTableCellElement[];

    // Add button to sortable headers
    for (const header of this.#sortableHeaders) {
      render(this.#sortButtonTemplate(header.childNodes), header);
    }

    this.#cols = [...(this.querySelectorAll('col') || [])];
  }

  #onSort(event: Event) {
    // update selected
    const selected = event.currentTarget as HTMLButtonElement;
    const selectedParent = selected.closest('th');
    // TODO better way of writing this to avoid ts errors
    // @ts-ignore
    const direction = DIRECTIONS[selectedParent?.getAttribute('sort-direction') ?? 'asc'] || 'desc';
    selectedParent?.setAttribute('aria-sort', `${direction}ending`);
    selectedParent?.setAttribute('sort-direction', direction);
    const iconContainer = selected.querySelector('.sort-indicator') as HTMLSpanElement;
    render(ICONS.get(direction), iconContainer);
    const srContainer = selected.querySelector('.visually-hidden') as HTMLSpanElement;
    render(`(sorted ${direction}ending)`, srContainer);

    // clean up previously sorted headers
    for (const header of this.#sortableHeaders) {
      if (header !== selectedParent) {
        header.removeAttribute('sort-direction');
        header.removeAttribute('aria-sort');
      }
    }

    // only sort if it hasn't been handled already
    if (!event.defaultPrevented && selectedParent instanceof HTMLTableCellElement) {
      this.#performSort(selectedParent, direction);
    }
  }

  // TODO should we move the remaining methods into a controller?
  #performSort(header: HTMLTableCellElement, direction: 'asc' | 'desc') {
    const children = header.parentElement?.children;
    if (children) {
      const columnIndexToSort = [...children].indexOf(header);
      Array
        .from(this.rows, node => RhTable.getNodeContentForSort(columnIndexToSort, node))
        .sort((a, b) => RhTable.sortByContent(direction, a, b))
        .forEach(({ node }, index) => {
          const target = this.rows[index];
          if (this.rows[index] !== node) {
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
