import { LitElement, html, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { property } from 'lit/decorators/property.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { type ColorTheme, colorContextConsumer } from '../../lib/context/color/consumer.js';

import { RhCodeActionEvent } from './rh-code-action.js';

import style from './rh-code-block.css';

interface CodeLineHeightsInfo {
  lines: string[];
  lineHeights: (number | undefined)[];
  sizer: HTMLElement;
  oneLinerHeight: number;
}

/**
 * A code block is formatted text within a container.
 * @summary Formats code strings within a container
 * @slot - A non-executable script tag containing the sample content. JavaScript
 *         samples should use the type `text/sample-javascript`. HTML samples
 *         containing script tags must escape the closing `</script>` tag. Can
 *         also be a `<pre>` tag.
 * @slot {RhCodeActionEvent} actions - `<rh-code-action>` buttons
 * @slot show-more - text content for the expandable toggle button when the code
 *                   block is collapsed.
 * @slot show-less - text content for the expandable toggle button when the code
 *                   block is expanded.
 */
@customElement('rh-code-block')
export class RhCodeBlock extends LitElement {
  static styles = [style];

  /** When set, the code block displays with compact spacing */
  @property({ type: Boolean, reflect: true }) compact = false;

  /** When set, the code block is resizable */
  @property({ type: Boolean, reflect: true }) resizable = false;

  /** When set, the code block occupies it's full height, without scrolling */
  @property({ type: Boolean, reflect: true, attribute: 'full-height' }) fullHeight = false;

  /** When set, lines in the code snippet wrap */
  @property({ type: Boolean }) wrap = false;

  @colorContextConsumer() private on?: ColorTheme;

  #slots = new SlotController(this, null, 'actions');

  #ro = new ResizeObserver(() => this.#computeLineNumbers());

  #lineHeights: `${string}px`[] = [];

  override connectedCallback() {
    super.connectedCallback();
    this.#ro.observe(this);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.#ro.disconnect();
  }

  render() {
    const { on = '', fullHeight, wrap, resizable, compact } = this;
    const expandable = this.#lineHeights.length > 5;
    const truncated = expandable && !fullHeight;
    const actions = this.#slots.hasSlotted('actions');
    return html`
      <div id="container"
           class="${classMap({
              [on]: !!on,
              actions,
              compact,
              expandable,
              fullHeight,
              resizable,
              truncated,
              wrap,
           })}"
           @code-action="${this.#onCodeAction}">
        <div id="content-lines">
          <div id="sizers" aria-hidden="true"></div>
          <ol id="line-numbers" aria-hidden="true">${this.#lineHeights.map((height, i) => html`
            <li style="${styleMap({ height })}">${i + 1}</li>`)}
          </ol>
          <slot id="content" @slotchange="${this.#computeLineNumbers}"></slot>
        </div>
        <slot id="actions" name="actions"></slot>
        <button id="expand"
                ?hidden="${!expandable}"
                @click="${this.#onClickExpand}">
          <slot name="show-more" ?hidden="${this.fullHeight}">Show more</slot>
          <slot name="show-less" ?hidden="${!this.fullHeight}">Show less</slot>
          <svg xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 11 7">
            <path d="M4.919.239.242 4.847a.801.801 0 0 0 0 1.148l.778.766a.83.83 0 0 0 1.165 0L5.5 3.495 8.815 6.76a.83.83 0 0 0 1.165 0l.778-.766a.802.802 0 0 0 0-1.148L6.08.239a.826.826 0 0 0-1.162 0Z"/>
          </svg>
        </button>
      </div>
    `;
  }

  protected override firstUpdated(): void {
    this.#computeLineNumbers();
  }

  protected override updated(changed: PropertyValues<this>): void {
    if (changed.has('wrap')) {
      this.#computeLineNumbers();
      for (const action of this.querySelectorAll('rh-code-action')) {
        if (action.action === 'wrap') {
          action.active = this.wrap;
        }
      }
    }
  }

  /**
   * Clone the text content and connect it to the document, in order to calculate the number of lines
   * @license portions copyright prism.js authors (MIT license)
   */
  #computeLineNumbers() {
    const slot = this.shadowRoot?.getElementById('content') as HTMLSlotElement;

    const codes: HTMLElement[] = slot.assignedElements().flatMap(x =>
        x instanceof HTMLScriptElement ||
        x instanceof HTMLPreElement ? [x]
      : []);

    const infos: CodeLineHeightsInfo[] = codes.map(element => {
      const sizer = document.createElement('span');
      sizer.className = 'sizer';
      sizer.innerText = '0';
      sizer.style.display = 'block';
      this.shadowRoot?.getElementById('sizers')?.appendChild(sizer);
      return {
        lines: element.textContent?.split(/\n(?!$)/g) ?? [],
        lineHeights: [],
        sizer,
        oneLinerHeight: sizer.getBoundingClientRect().height,
      };
    });

    for (const { lines, lineHeights, sizer, oneLinerHeight } of infos) {
      lineHeights[lines.length - 1] = undefined; // why?
      lines.forEach((line, i) => {
        if (line.length > 1) {
          const e = sizer.appendChild(document.createElement('span'));
          e.style.display = 'block';
          e.textContent = line;
        } else {
          lineHeights[i] = oneLinerHeight;
        }
      });
    }

    for (const { sizer, lineHeights } of infos) {
      let childIndex = 0;
      for (let i = 0; i < lineHeights.length; i++) {
        if (lineHeights[i] === undefined) {
          lineHeights[i] = sizer.children[childIndex++].getBoundingClientRect()?.height ?? 0;
        }
      }
      sizer.remove();
    }

    this.#lineHeights = infos.flatMap(x =>
      x.lineHeights?.map(y =>
        `${y ?? x.oneLinerHeight}px` as const));

    this.requestUpdate('#linesNumbers', 0);
  }

  #onCodeAction(event: RhCodeActionEvent) {
    switch (event.action) {
      case 'copy':
        return this.#copy();
      case 'wrap':
        this.wrap = !this.wrap;
        this.requestUpdate();
        return;
    }
  }

  #onClickExpand() {
    this.fullHeight = !this.fullHeight;
  }

  async #copy() {
    await navigator.clipboard.writeText(
      Array.from(
        this.querySelectorAll('script'),
        x => x.textContent,
      ).join('')
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-code-block': RhCodeBlock;
  }
}
