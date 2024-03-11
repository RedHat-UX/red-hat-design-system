import { LitElement, html, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { type ColorTheme, colorContextConsumer } from '../../lib/context/color/consumer.js';

import { RhCodeActionEvent } from './rh-code-action.js';

import style from './rh-code-block.css';

const lineNumberStyleMap = new WeakMap<HTMLElement, CSSStyleDeclaration>();

/**
 * Tell me how many lines-of-text an element is in height.
 */
function computeLineNumber(el?: HTMLElement | null): number {
  if (!el) {
    return 0;
  } else {
    if (!lineNumberStyleMap.get(el)) {
      lineNumberStyleMap.set(el, getComputedStyle(el));
    }
    const divHeight = el.offsetHeight;
    const lineHeight = parseInt(lineNumberStyleMap.get(el)!.getPropertyValue('line-height'));
    return Math.floor(divHeight / lineHeight) || 0;
  }
}

/**
 * A code block is formatted text within a container.
 * @summary Formats code strings within a container
 * @slot - A non-executable script tag containing the sample content. JavaScript
 *         samples should use the type `text/sample-javascript`. HTML samples
 *         containing script tags must escape the closing `</script>` tag.
 * @slot {RhCodeActionEvent} actions - `<rh-code-action>` buttons
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

  @colorContextConsumer() private on?: ColorTheme;

  @property({ type: Boolean }) wrap = false;

  #slots = new SlotController(this, null, 'actions');

  #linesMax = 0;

  render() {
    const { on = '', fullHeight, wrap } = this;
    const expandable = this.#linesMax > 5;
    const truncated = expandable && !fullHeight;
    return html`
      <div id="container"
           class="${classMap({ [on]: !!on, wrap, truncated, expandable, fullHeight })}"
           @code-action="${this.#onCodeAction}">
        <slot id="content" @slotchange="${this.#computeSnippetLines}"></slot>
        <slot id="actions"
              name="actions"
              ?hidden="${!this.#slots.hasSlotted('actions')}"></slot>
        <button id="expand"
                ?hidden="${!expandable}"
                @click="${this.#onClickExpand}">
          <span>^</span>
          <slot name="show-more" ?hidden="${this.fullHeight}">Show more</slot>
          <slot name="show-less" ?hidden="${!this.fullHeight}">Show less</slot>
        </button>
      </div>
    `;
  }

  protected override firstUpdated(): void {
    this.#computeSnippetLines();
  }

  protected override updated(changed: PropertyValues<this>): void {
    if (changed.has('wrap')) {
      this.#computeSnippetLines();
    }
  }

  /**
   * Clone the text content and connect it to the document, in order to calculate the number of lines
   */
  #computeSnippetLines() {
    const slot = this.shadowRoot?.getElementById('content') as HTMLSlotElement;
    this.#linesMax = computeLineNumber(slot);
    this.requestUpdate('#linesMax', 0);
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
