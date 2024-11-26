import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
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

  #tooltipContentID = getRandomId('tooltip-content');

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
        <div class="display-c">
          <slot id="invoker" @slotchange=${this.#handleInvokerSlotChange}></slot>
        </div>
        <div class="display-c" aria-hidden="${String(!open) as 'true' | 'false'}">
          <slot id="tooltip" name="content" @slotchange=${this.#handleTooltipSlotChange}>${this.content}</slot>
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

  #handleInvokerSlotChange(): void {
    const invokerSlot = this.shadowRoot?.querySelector<HTMLSlotElement>('#invoker');
    if (!invokerSlot) {
      return;
    }

    const assignedNodes = invokerSlot.assignedElements({ flatten: true });

    const focusableSelector = `
      a[href]:not([inert]):not([inert] *):not([tabindex^="-"]),
      input:not([type="hidden"]):not([type="radio"]):not([inert]):not([inert] *):not([tabindex^="-"]):not(:disabled),
      input[type="radio"]:not([inert]):not([inert] *):not([tabindex^="-"]):not(:disabled),
      select:not([inert]):not([inert] *):not([tabindex^="-"]):not(:disabled),
      textarea:not([inert]):not([inert] *):not([tabindex^="-"]):not(:disabled),
      button:not([inert]):not([inert] *):not([tabindex^="-"]):not(:disabled)
    `;

    const findFocusableElement = (node: Element): HTMLElement | null => {
      if (node.matches(focusableSelector)) {
        return node as HTMLElement;
      }

      if (node.tagName.toLowerCase().startsWith('rh-')) {
        setTimeout(() => {
          const shadowFocusable = node.shadowRoot?.querySelector(focusableSelector);
          shadowFocusable?.setAttribute('aria-describedby', this.#tooltipContentID);
          return;
        }, 50);
      }

      return null;
    };

    let invokerElement: HTMLElement | undefined;

    for (const node of assignedNodes) {
      const focusableElement = findFocusableElement(node);
      if (focusableElement) {
        invokerElement = focusableElement;
        break;
      }
    }

    if (invokerElement) {
      invokerElement.setAttribute('aria-describedby', this.#tooltipContentID);
    }
  }

  #handleTooltipSlotChange(): void {
    const tooltipSlot = this.shadowRoot?.querySelector<HTMLSlotElement>('#tooltip');
    if (!tooltipSlot) {
      return;
    }

    const assignedNodes = tooltipSlot.assignedElements({ flatten: true });
    const tooltipContent = assignedNodes[0] as HTMLElement | undefined;

    if (tooltipContent) {
      tooltipContent.setAttribute('id', this.#tooltipContentID);
      tooltipContent.setAttribute('role', 'tooltip');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tooltip': RhTooltip;
  }
}
