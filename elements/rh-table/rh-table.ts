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
  ['asc']: {
    viewBox: '0 0 320 512',
    path: 'M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224z',
  },
  ['desc']: {
    viewBox: '0 0 320 512',
    path: 'M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z',
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

  get rows() {
    console.log(this.querySelectorAll<HTMLTableRowElement>('tbody > tr'));
    return this.querySelectorAll<HTMLTableRowElement>('tbody > tr');
  }

  @property({ reflect: true, attribute: 'sort-column' }) sortColumn?: string;
  @property({ reflect: true, attribute: 'sort-direction' }) sortDirection?: 'asc' | 'desc';

  @queryAssignedElements() _defaultSlot?: HTMLElement[];
  @query('#container') _container!: HTMLDivElement;

  #table!: HTMLTableElement | null;
  #headers!: HTMLTableCellElement[] | null;
  sortables: HTMLTableCellElement[] = [];
  #cols: HTMLTableColElement[] = [];

  #listeners = new Map(Object.entries({
    sort: this.#onSort.bind(this),
  }));

  #logger = new Logger(this);
  #screenSize = new ScreenSizeController(this);

  render() {
    const { mobile } = this.#screenSize;

    return html`
      <div
        id="container"
        class=${classMap({ mobile })}
        @pointerleave=${this.#onPointerleave}
        @pointerover=${this.#onPointerover}>
        <slot @slotchange="${this.#onSlotchange}"></slot>
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

  #onSlotchange() {
    this.#table = this.querySelector('table');
    this.sortables = [...(this.querySelectorAll('th[sortable]') || [])] as HTMLTableCellElement[];

    // Enable sorting on table headings
    for (const [index, header] of this.sortables.entries()) {
      const children = header.childNodes;
      // Create the button
      const button = document.createElement('button');
      button.classList.add('sort-button');
      button.dataset.column = index.toString();
      // TODO cleanup
      button.addEventListener('click', this.#onSort.bind(this));
      // a11y
      const span = document.createElement('span');
      span.classList.add('visually-hidden');
      // icon
      const icon = document.createElement('span');
      icon.classList.add('sort-icon');

      button.append(...children);
      button.append(span);
      button.append(icon);

      // Add the button
      header.replaceChildren(button);
    }

    this.#cols = [...(this.querySelectorAll('col') || [])];
  }

  // TODO
  #getSortDirection(direction: string | null): 'asc' | 'desc' {
    if (direction && Object.keys(DIRECTIONS).includes(direction)) {
      // @ts-ignore
      return DIRECTIONS[direction];
    }
    return DIRECTIONS['asc'];
  }

  #onSort(event: Event) {
    let parent!: HTMLTableCellElement;
    let direction!: 'desc' | 'asc';
    for (const button of [...this.querySelectorAll('.sort-button')]) {
      if (button === event.currentTarget) {
        direction = this.#getSortDirection(button.getAttribute('sort-direction'));
        button.setAttribute('sort-direction', direction);
        // @ts-ignore
        parent = button.closest('th');
        if (parent) {
          parent.ariaSort = `${direction}ending`;
        }
        const icon = button.querySelector('.sort-icon') as HTMLSpanElement;
        if (icon) {
          render(ICONS.get(direction), icon);
        }
        const a11y = button.querySelector('.visually-hidden') as HTMLSpanElement;
        if (a11y) {
          a11y.innerText = `(sorted ${direction}ending)`;
        }
      } else {
        button.removeAttribute('sort-direction');
        button.closest('th')?.removeAttribute('aria-sort');
        const icon = button.querySelector('.sort-icon');
        const a11y = button.querySelector('.visually-hidden');
        if (icon) {
          icon.innerHTML = '';
        }
        if (a11y) {
          a11y.innerHTML = '';
        }
      }
    }
    if (!event.defaultPrevented) {
      this.#performSort(parent, direction);
    }
  }

  #performSort(header: HTMLTableCellElement, direction: 'asc' | 'desc') {
    const children = header.parentElement?.children;
    if (children) {
      const columnIndexToSort = [...children].indexOf(header);
      debugger;
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
    debugger;
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
