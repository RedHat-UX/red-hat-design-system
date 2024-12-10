import { html, LitElement, isServer } from 'lit';
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

  private static instances = new Set<RhTooltip>();

  static {
    if (!isServer) {
      globalThis.addEventListener('keydown', (event: KeyboardEvent) => {
        const { instances } = RhTooltip;
        for (const instance of instances) {
          instance.#onKeydown(event);
        }
      });
      RhTooltip.initAnnouncer();
    }
  }

  private static announcer: HTMLElement;

  private static announce(message: string) {
    this.announcer.innerText = message;
  }

  private static initAnnouncer() {
    this.announcer = document.createElement('div');
    this.announcer.setAttribute('aria-live', 'polite');
    // apply `.visually-hidden` styles
    this.announcer.style.position = 'fixed';
    this.announcer.style.insetInlineStart = '0';
    this.announcer.style.insetBlockStart = '0';
    this.announcer.style.overflow = 'hidden';
    this.announcer.style.clip = 'rect(0,0,0,0)';
    this.announcer.style.whiteSpace = 'nowrap';
    this.announcer.style.border = '0';
    document.body.append(this.announcer);
  }

  /** The position of the tooltip, relative to the invoking content */
  @property() position: Placement = 'top';

  /** Tooltip content. Overridden by the content slot */
  @property() content?: string;

  @colorContextConsumer() private on?: ColorTheme;

  #float = new FloatingDOMController(this, {
    content: (): HTMLElement | undefined | null => this.shadowRoot?.querySelector('#tooltip'),
  });

  #initialized = false;

  get #content() {
    if (!this.#float.open || isServer) {
      return '';
    } else {
      return this.content || (this.shadowRoot
          ?.getElementById('content') as HTMLSlotElement)
          ?.assignedNodes().map(x => x.textContent ?? '')
          ?.join(' ');
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    ENTER_EVENTS.forEach(evt => this.addEventListener(evt, this.show));
    EXIT_EVENTS.forEach(evt => this.addEventListener(evt, this.hide));
    RhTooltip.instances.add(this);
  }

  override render() {
    const { on = '' } = this;
    const { alignment, anchor, open, styles } = this.#float;

    return html`
      <div id="container"
           style="${styleMap(styles)}"
           class="${classMap({ open,
                               initialized: !!this.#initialized,
                               [on]: !!on,
                               [anchor]: !!anchor,
                               [alignment]: !!alignment })}">
        <div id="invoker">
          <slot id="invoker-slot"></slot>
        </div>
        <div id="tooltip" role="status">
          <slot id="content" name="content">${this.content}</slot>
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
    RhTooltip.announce(this.#content);
  }

  /** Hide the tooltip */
  async hide() {
    await this.#float.hide();
    RhTooltip.announcer.innerText = '';
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
