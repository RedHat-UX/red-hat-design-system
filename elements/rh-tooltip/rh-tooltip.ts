import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import {
  FloatingDOMController,
  type Placement,
} from '@patternfly/pfe-core/controllers/floating-dom-controller.js';

import styles from './rh-tooltip.css';

const ENTER_EVENTS = ['focusin', 'tap', 'click', 'mouseenter'];
const EXIT_EVENTS = ['focusout', 'blur', 'mouseleave'];

/**
 * A tooltip is a floating text area that provides helpful
 * or contextual information on hover, focus, or tap.
 *
 * @summary Reveals a small area of information on hover
 *
 * @slot - Place invoking element here,
 *         i.e. the element which when hovered the tooltip will display.
 *         Must be inline content.
 * @slot content - Place tooltip content here. Overrides the `content` attribute.
 *
 * @cssprop {<length>} [--rh-tooltip-arrow-size=11px]
 * @cssprop {<color>} [--rh-tooltip-content-background-color=#ffffff]
 * @cssprop {<color>} [--rh-tooltip-content-color=#151515]
 * @cssprop {<length>} [--rh-tooltip-max-width=18.75rem]
 * @cssprop {<length>} [--rh-tooltip-content-padding-block-start=16px]
 * @cssprop {<length>} [--rh-tooltip-content-padding-inline-end=16px]
 * @cssprop {<length>} [--rh-tooltip-content-padding-block-end=16px]
 * @cssprop {<length>} [--rh-tooltip-content-padding-inline-start=16px]
 * @cssprop {<absolute-size> | <relative-size> | <length> | <percentage>} [--rh-tooltip-content-font-size=0.875rem]
 */
@customElement('rh-tooltip')
export class RhTooltip extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  /** The position of the tooltip, relative to the invoking content */
  @property() position: Placement = 'top';

  /** Tooltip content. Overridden by the content slot */
  @property() content?: string;

  @colorContextConsumer() private on?: ColorTheme;

  #float = new FloatingDOMController(this, {
    content: (): HTMLElement | undefined | null => this.shadowRoot?.querySelector('#tooltip'),
  });

  #initialized = false;

  override connectedCallback(): void {
    super.connectedCallback();
    ENTER_EVENTS.forEach(evt => this.addEventListener(evt, this.show));
    EXIT_EVENTS.forEach(evt => this.addEventListener(evt, this.hide));
    document.addEventListener('keydown', this.#onKeydown);
  }

  override render() {
    const { on = '' } = this;
    const { alignment, anchor, open, styles } = this.#float;

    return html`
      <div id="container"
           style="${styleMap(styles)}"
           class="${classMap({ open,
                              'initialized': !!this.#initialized,
                               [on]: !!on,
                               [anchor]: !!anchor,
                               [alignment]: !!alignment })}">
        <div class="display-c" role="tooltip" aria-labelledby="tooltip">
          <slot id="invoker"></slot>
        </div>
        <div class="display-c" aria-hidden="${String(!open) as 'true' | 'false'}">
          <slot id="tooltip" name="content">${this.content}</slot>
        </div>
      </div>
    `;
  }

  /** Show the tooltip */
  async show() {
    await this.updateComplete;
    const placement = this.position;
    const offset =
        !placement?.match(/top|bottom/) ? 15
      : { mainAxis: 15, alignmentAxis: -4 };
    await this.#float.show({ offset, placement });
    this.#initialized ||= true;
  }

  /** Hide the tooltip */
  async hide() {
    await this.#float.hide();
  }

  #onKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      this.hide();
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tooltip': RhTooltip;
  }
}
