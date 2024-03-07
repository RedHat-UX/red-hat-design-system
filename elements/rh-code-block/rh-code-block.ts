import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { type ColorTheme, colorContextConsumer } from '../../lib/context/color/consumer.js';

import { RhCodeActionEvent } from './rh-code-action.js';

import style from './rh-code-block.css';

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

  #wrap = false;

  #slots = new SlotController(this, null, 'actions');

  get #lines() {
    const el = this.shadowRoot?.getElementById('content');
    if (el) {
      console.log(el.offsetHeight);
      const divHeight = el.offsetHeight;
      const lineHeight = parseInt(this.#slotStyle!.getPropertyValue('line-height'));
      return divHeight / lineHeight;
    } else {
      return 0;
    }
  }

  #slotStyle?: CSSStyleDeclaration;

  protected override firstUpdated() {
    const el = this.shadowRoot?.getElementById('content');
    this.#slotStyle = getComputedStyle(el!);
  }

  render() {
    const { on = '' } = this;
    const isShort = this.#lines <= 5;
    return html`
      <div id="container"
           class="${classMap({ [on]: !!on,
                               wrap: this.#wrap,
                               truncated: !isShort && !this.fullHeight, })}"
           @code-action="${this.#onCodeAction}">
        <slot id="content"></slot>
        <slot id="actions"
              name="actions"
              ?hidden="${!this.#slots.hasSlotted('actions')}"></slot>
        <button id="expand"
                ?hidden="${isShort}"
                @click="${() => this.fullHeight = !this.fullHeight}">
          <span>^</span>
          <slot name="show-more" ?hidden="${!this.fullHeight}">Show more</slot>
          <slot name="show-less" ?hidden="${this.fullHeight}">Show less</slot>
        </button>
      </div>
    `;
  }

  #onCodeAction(event: RhCodeActionEvent) {
    switch (event.action) {
      case 'copy':
        return this.#copy();
      case 'wrap':
        this.#wrap = !this.#wrap;
        this.requestUpdate();
        return;
    }
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
