import { LitElement, html, type TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { provide } from '@lit/context';

import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
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
export class RhAccordion extends LitElement {
  static readonly version = '{{version}}';

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
  @property({
    attribute: true,
    reflect: true,
  }) accents?: 'inline' | 'bottom';

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
  })
  get expandedIndex() {
    return this.#expandedIndex;
  }

  set expandedIndex(value) {
    const old = this.#expandedIndex;
    this.#expandedIndex = value;
    if (JSON.stringify(old) !== JSON.stringify(value)) {
      this.requestUpdate('expandedIndex', old);
      this.collapseAll().then(async () => {
        for (const i of this.expandedIndex) {
          await this.expand(i, this);
        }
      });
    }
  }

  get #ctx(): RhAccordionContext {
    const accents = this.accents ? this.accents : 'inline';
    return { accents };
  }


  @property({ reflect: true, type: Boolean }) large = false;

  @property({ reflect: true, type: Boolean }) bordered = true;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer() private on?: ColorTheme;

  protected expandedSets = new Set<number>();

  #expandedIndex: number[] = [];

  #headerIndex = RovingTabindexController.of(this, {
    getItems: () => this.headers,
  });

  // actually is read in #init, by the `||=` operator
  // eslint-disable-next-line no-unused-private-class-members
  #initialized = false;

  #logger = new Logger(this);

  #mo = new MutationObserver(() => this.#init());

  @provide({ context }) private ctx = this.#ctx;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this.#onChange as EventListener);
    this.#mo.observe(this, { childList: true });
    this.#init();
  }

  override render(): TemplateResult {
    const { on = '' } = this;
    return html`
      <div id="container" class="${classMap({ [on]: !!on })}"><slot></slot></div>
    `;
  }

  async firstUpdated() {
    const { headers } = this;
    headers.forEach((header, index) => {
      if (header.expanded) {
        this.#expandHeader(header, index);
        const panel = this.#panelForHeader(header);
        if (panel) {
          this.#expandPanel(panel);
        }
      }
    });
    this.ctx = this.#ctx;
  }

  @observes('large')
  private largeChanged(this: RhAccordion) {
    [...this.headers, ...this.panels].forEach(el => el.toggleAttribute('large', this.large));
  }

  /**
   * Initialize the accordion by connecting headers and panels
   * with aria controls and labels; set up the default disclosure
   * state if not set by the author; and check the URL for default
   * open
   */
  async #init() {
    this.#initialized ||= !!await this.updateComplete;
    // Event listener to the accordion header after the accordion has been initialized to add the roving tabindex
    this.addEventListener('focusin', this.#updateActiveHeader);
    this.updateAccessibility();
  }

  protected override async getUpdateComplete(): Promise<boolean> {
    const c = await super.getUpdateComplete();
    const results = await Promise.all([
      ...this.#allHeaders().map(x => x.updateComplete),
      ...this.#allPanels().map(x => x.updateComplete),
    ]);
    return c && results.every(Boolean);
  }

  get #activeHeader() {
    const { headers } = this;
    const index = headers.findIndex(header => header.matches(':focus,:focus-within'));
    return index > -1 ? headers.at(index) : undefined;
  }

  #updateActiveHeader() {
    if (this.#activeHeader) {
      this.#headerIndex.atFocusedItemIndex = this.headers.indexOf(this.#activeHeader);
    }
  }

  #panelForHeader(header: RhAccordionHeader) {
    const next = header.nextElementSibling;
    if (!RhAccordion.isPanel(next)) {
      return void this.#logger.error('Sibling element to a header needs to be a panel');
    } else {
      return next;
    }
  }

  #expandHeader(header: RhAccordionHeader, index = this.#getIndex(header)) {
    // If this index is not already listed in the expandedSets array, add it
    this.expandedSets.add(index);
    this.#expandedIndex = [...this.expandedSets as Set<number>];
    header.expanded = true;
  }

  #expandPanel(panel: RhAccordionPanel) {
    panel.expanded = true;
    panel.hidden = false;
  }

  async #collapseHeader(header: RhAccordionHeader, index = this.#getIndex(header)) {
    if (!this.expandedSets) {
      await this.updateComplete;
    }
    this.expandedSets.delete(index);
    header.expanded = false;
    await header.updateComplete;
  }

  async #collapsePanel(panel: RhAccordionPanel) {
    await panel.updateComplete;
    if (!panel.expanded) {
      return;
    }

    panel.expanded = false;
    panel.hidden = true;
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

  get headers() {
    return this.#allHeaders();
  }

  get panels() {
    return this.#allPanels();
  }

  public updateAccessibility() {
    const { headers } = this;

    // For each header in the accordion, attach the aria connections
    headers.forEach(header => {
      const panel = this.#panelForHeader(header);
      if (panel) {
        header.setAttribute('aria-controls', panel.id);
        panel.setAttribute('aria-labelledby', header.id);
        panel.hidden = !panel.expanded;
      }
    });
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
    this.#expandHeader(header, index);
    this.#expandPanel(panel);

    header.focus();

    this.dispatchEvent(new AccordionExpandEvent(header, panel));

    await this.updateComplete;
  }

  /**
   * Expands all accordion items.
   */
  public async expandAll() {
    this.headers.forEach(header => this.#expandHeader(header));
    this.panels.forEach(panel => this.#expandPanel(panel));
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

    this.#collapseHeader(header);
    this.#collapsePanel(panel);

    this.dispatchEvent(new AccordionCollapseEvent(header, panel));
    await this.updateComplete;
  }

  /**
   * Collapses all accordion items.
   */
  public async collapseAll() {
    this.headers.forEach(header => this.#collapseHeader(header));
    this.panels.forEach(panel => this.#collapsePanel(panel));
    await this.updateComplete;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion': RhAccordion;
  }
}
