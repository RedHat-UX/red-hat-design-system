import { html, LitElement, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';


import {
  FloatingDOMController,
  type Placement,
} from '@patternfly/pfe-core/controllers/floating-dom-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-tooltip.css';

const ENTER_EVENTS = ['focusin', 'tap', 'click', 'mouseenter'];
const EXIT_EVENTS = ['focusout', 'blur', 'mouseleave'];

function flattenSlottedNodes(x: Node): Node[] {
  if (x.nodeType === Node.COMMENT_NODE) {
    return [];
  } else if (x instanceof HTMLSlotElement) {
    let assignedNodes = x.assignedNodes();
    if (!assignedNodes.length) {
      assignedNodes = Array.from(x.childNodes);
    }
    return assignedNodes.flatMap(flattenSlottedNodes);
  } else {
    return [x];
  }
}

function getBestGuessAccessibleContent(node: Node): string {
  if (node instanceof HTMLElement) {
    if (node.hasAttribute('aria-label')) {
      return node.getAttribute('aria-label') ?? '';
    } else if (node.hidden || node.hasAttribute('inert')) {
      return '';
    }
  }
  return node.textContent ?? '';
}

/**
 * A tooltip is a floating text area that provides helpful
 * or contextual information on hover, focus, or tap.
 *
 * @summary Reveals a small area of information on hover
 *
 * @alias tooltip
 *
 */
@customElement('rh-tooltip')
@themable
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
    document.body.append((this.announcer = Object.assign(document.createElement('div'), {
      role: 'status',
      // apply `.visually-hidden` styles
      style: /* css */`
        position: fixed;
        inset-block-start: 0;
        inset-inline-start: 0;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border: 0;`,
    })));
  }

  /** The position of the tooltip, relative to the invoking content */
  @property() position: Placement = 'top';

  /** Tooltip content. Overridden by the content slot */
  @property() content?: string;

  /** When true, disables screen reader announcements for tooltip content. Only use when another accessible label is provided. */
  @property({ type: Boolean, reflect: true }) silent = false;

  #float = new FloatingDOMController(this, {
    content: (): HTMLElement | undefined | null => this.shadowRoot?.querySelector('#tooltip'),
  });

  #initialized = false;
  #style?: CSSStyleDeclaration;

  get #content() {
    if (!this.#float.open || isServer) {
      return '';
    } else if (this.content) {
      return this.content;
    } else {
      const contentSlot =
        (this.shadowRoot?.getElementById('content') as HTMLSlotElement | null) ?? null;
      const nodes = contentSlot
          ?.assignedNodes()
          ?.flatMap(flattenSlottedNodes) ?? [];
      return nodes
          .map(getBestGuessAccessibleContent)
          .join(' ')
          .trim();
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    ENTER_EVENTS.forEach(evt => this.addEventListener(evt, this.show));
    EXIT_EVENTS.forEach(evt => this.addEventListener(evt, this.hide));
    RhTooltip.instances.add(this);
  }

  override render() {
    const { alignment, anchor, open, styles } = this.#float;

    const scheme = this.#style?.colorScheme ?? 'light';
    const dark = !!scheme.match(/^light( (dark|only))?/);
    const light = !!scheme.match(/^dark( only)?/);

    return html`
      <div id="container"
           style="${styleMap(styles)}"
           class="${classMap({ open,
                               initialized: !!this.#initialized,
                               [anchor]: !!anchor,
                               [alignment]: !!alignment })}">
        <div id="invoker">
          <!--
            Place invoking element here,
            i.e. the element which when hovered the tooltip will display.
            Must be inline content.
          -->
          <slot id="invoker-slot"></slot>
        </div>
        <div id="tooltip" role="status" class="${classMap({ dark, light })}">
          <!-- Place tooltip content here. Overrides the \`content\` attribute. -->
          <slot id="content" name="content">${this.content}</slot>
        </div>
      </div>
    `;
  }

  /** Show the tooltip */
  async show() {
    this.#style ??= getComputedStyle(this);
    await this.updateComplete;
    const placement = this.position;
    const offset =
        !placement?.match(/top|bottom/) ? 15
      : { mainAxis: 15, alignmentAxis: -4 };
    await this.#float.show({ offset, placement });
    this.#initialized ||= true;
    if (!this.silent) {
      RhTooltip.announce(this.#content);
    }
  }

  /** Hide the tooltip */
  async hide() {
    await this.#float.hide();
    if (!this.silent) {
      RhTooltip.announcer.innerText = '';
    }
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
