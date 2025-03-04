import { LitElement, html, type TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { provide } from '@lit/context';

import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { NumberListConverter, ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { RhAccordionHeader, AccordionHeaderChangeEvent } from './rh-accordion-header.js';
import { RhAccordionPanel } from './rh-accordion-panel.js';

import { context, type RhAccordionContext } from './context.js';

import styles from './rh-accordion.css';

export class AccordionExpandEvent extends ComposedEvent {
  constructor(
    public toggle: RhAccordionHeader,
    public panel: RhAccordionPanel,
  ) {
    super('expand');
  }
}

export class AccordionCollapseEvent extends ComposedEvent {
  constructor(
    public toggle: RhAccordionHeader,
    public panel: RhAccordionPanel,
  ) {
    super('collapse');
  }
}

/**
 * An accordion is a stacked list of panels which allows users to expand or collapse information when selected. They feature panels that consist of a section text label and a caret icon that collapses or expands to reveal more information.
 * @summary Expands or collapses a stacked list of panels
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 * @slot - Place the `rh-accordion-header` and `rh-accordion-panel` elements here.
 * @attr  [accents=inline] Position accents in the header either inline or bottom
 */
@customElement('rh-accordion')
@colorContextProvider()
@colorContextConsumer
export class RhAccordion extends LitElement {
  static readonly styles = [styles];

  static isAccordion(target: EventTarget | null): target is RhAccordion {
    return target instanceof RhAccordion;
  }

  static isHeader(target: EventTarget | null): target is RhAccordionHeader {
    return target instanceof RhAccordionHeader;
  }

  static isPanel(target: EventTarget | null): target is RhAccordionPanel {
    return target instanceof RhAccordionPanel;
  }

  static isAccordionChangeEvent(event: Event): event is AccordionHeaderChangeEvent {
    return event instanceof AccordionHeaderChangeEvent;
  }

  /**
   * Sets accordion header's accents position to inline or bottom
   */
  @property({ attribute: true, reflect: true }) accents?: 'inline' | 'bottom';

  /**
   * If this accordion uses large styles
   */
  @property({ reflect: true, type: Boolean }) large = false;

  /**
   * If this accordion has a border
   */
  @property({ reflect: true, type: Boolean }) bordered = true;

  /**
   * Color Palette for this accordion.
   * @see https://ux.redhat.com/theming/color-palettes/
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Sets and reflects the currently expanded accordion 0-based indexes.
   * Use commas to separate multiple indexes.
   * ```html
   * <pf-accordion expanded-index="1,2">
   *   ...
   * </pf-accordion>
   * ```
   */
  @property({
    attribute: 'expanded-index',
    converter: NumberListConverter,
    hasChanged(value, old) {
      return JSON.stringify(old) !== JSON.stringify(value);
    },
  })
  get expandedIndex() {
    return this.#expandedIndex;
  }

  set expandedIndex(value) {
    this.#expandedIndex = value;
    this.#expanded = !!this.#expandedIndex.length;
    this.headers.forEach((header, i) => {
      const expanded = this.#expandedIndexSet.has(i);
      header.expanded = expanded;
      const panel = this.panels[i];
      if (panel) {
        panel.expanded = expanded;
        panel.hidden = !expanded;
      }
    });
  }

  /** All headers for this accordion */
  get headers() {
    return this.#allHeaders();
  }

  /** All panels for this accordion */
  get panels() {
    return this.#allPanels();
  }

  #expandedIndexSet = new Set<number>();

  #expanded = false;

  #expandedIndex: number[] = [];

  #logger = new Logger(this);

  #mo = new MutationObserver(() => this.updateAccessibility());

  @provide({ context }) private ctx = this.#makeContext();

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this.#onChange as EventListener);
    this.#mo.observe(this, { childList: true });
    this.updateAccessibility();
  }

  override render(): TemplateResult {
    return html`
      <div id="container" class="${classMap({ expanded: this.#expanded })}"><slot></slot></div>
    `;
  }

  protected override async getUpdateComplete(): Promise<boolean> {
    const c = await super.getUpdateComplete();
    const results = await Promise.all([
      ...this.headers.map(x => x.updateComplete),
      ...this.panels.map(x => x.updateComplete),
    ]);
    return c && results.every(Boolean);
  }

  override firstUpdated() {
    this.headers.forEach((header, index) => {
      if (header.expanded) {
        this.#expandedIndexSet.add(index);
      }
    });
    this.expandedIndex = [...this.#expandedIndexSet];
    this.#expanded = !!this.#expandedIndex.length;
  }

  @observes('accents')
  @observes('large')
  @observes('bordered')
  @observes('expandedIndex')
  private contextChanged() {
    this.ctx = this.#makeContext();
  }

  #makeContext(): RhAccordionContext {
    const { accents = 'inline', large } = this;
    const expanded = this.#expanded;
    return { accents, large, expanded };
  }

  #panelForHeader(header: RhAccordionHeader) {
    const next = header.nextElementSibling;
    if (!RhAccordion.isPanel(next)) {
      return next?.querySelector('rh-accordion-panel');
    } else {
      return next;
    }
  }

  #expand(index: number) {
    // If this index is not already listed in the expandedSets array, add it
    this.expandedIndex = [...this.#expandedIndexSet.add(index)];
  }

  #collapse(index: number) {
    if (this.#expandedIndexSet.delete(index)) {
      this.expandedIndex = [...this.#expandedIndexSet];
    }
  }

  #onChange(event: AccordionHeaderChangeEvent) {
    if (RhAccordion.isAccordionChangeEvent(event)) {
      const index = this.#getIndex(event.target);
      if (event.expanded) {
        this.expand(index, event.accordion);
      } else {
        this.collapse(index);
      }
    }
    this.requestUpdate('expandedIndex');
  }

  #allHeaders(accordion: RhAccordion = this): RhAccordionHeader[] {
    return Array.from(accordion.children).filter((x): x is RhAccordionHeader =>
      x instanceof RhAccordionHeader
    );
  }

  #allPanels(accordion: RhAccordion = this): RhAccordionPanel[] {
    return Array.from(accordion.children).filter((x =>
      RhAccordion.isPanel(x)) as typeof RhAccordion.isPanel
    );
  }

  #getIndex(el: Element | null) {
    if (RhAccordion.isHeader(el)) {
      return this.headers.findIndex(header => header.id === el.id);
    }

    if (RhAccordion.isPanel(el)) {
      return this.panels.findIndex(panel => panel.id === el.id);
    }

    this.#logger.warn('The #getIndex method expects to receive a header or panel element.');
    return -1;
  }

  /**
   * Initialize the accordion by connecting headers and panels
   * with aria controls and labels; set up the default disclosure
   * state if not set by the author; and check the URL for default
   * open
   */
  public updateAccessibility() {
    const { headers } = this;

    // For each header in the accordion, attach the aria connections
    for (const header of headers) {
      const panel = this.#panelForHeader(header);
      if (panel) {
        header.setAttribute('aria-controls', panel.id);
        panel.setAttribute('aria-labelledby', header.id);
      }
    }
  }

  /**
   * Accepts a 0-based index value (integer) for the set of accordion items to expand or collapse.
   * @param index header index to toggle
   */
  public async toggle(index: number) {
    const { headers } = this;
    const header = headers[index];

    if (!header.expanded) {
      await this.expand(index);
    } else {
      await this.collapse(index);
    }
  }

  /**
   * Accepts a 0-based index value (integer) for the set of accordion items to expand.
   * Accepts an optional parent accordion to search for headers and panels.
   * @param index header index to toggle
   * @param parentAccordion target accordion to expand in
   */
  public async expand(index: number, parentAccordion?: RhAccordion) {
    const allHeaders: RhAccordionHeader[] = this.#allHeaders(parentAccordion);

    const header = allHeaders[index];
    if (!header) {
      return;
    }

    const panel = this.#panelForHeader(header);
    if (!panel) {
      return;
    }

    // If the header and panel exist, open both
    this.#expand(index);

    header.focus();

    this.dispatchEvent(new AccordionExpandEvent(header, panel));

    await this.updateComplete;
  }

  /**
   * Expands all accordion items.
   */
  public async expandAll() {
    this.headers.forEach((_, i) => this.#expand(i));
    await this.updateComplete;
  }

  /**
   * Accepts a 0-based index value (integer) for the set of accordion items to collapse.
   * @param index header index to collapse
   */
  public async collapse(index: number) {
    const header = this.headers.at(index);
    const panel = this.panels.at(index);

    if (!header || !panel) {
      return;
    }

    this.#collapse(index);

    this.dispatchEvent(new AccordionCollapseEvent(header, panel));
    await this.updateComplete;
  }

  /**
   * Collapses all accordion items.
   */
  public async collapseAll() {
    this.headers.forEach((_, i) => this.#collapse(i));
    await this.updateComplete;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion': RhAccordion;
  }

  interface HTMLElementEventMap {
    'expand': AccordionExpandEvent;
    'collapse': AccordionCollapseEvent;
  }
}
