import { html, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { ScrollSpyController } from '@patternfly/pfe-core/controllers/scroll-spy-controller.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import { RhDisclosure } from '@rhds/elements/rh-disclosure/rh-disclosure.js';

import { RhJumpLinksItem } from './rh-jump-links-item.js';
import { RhJumpLinksList } from './rh-jump-links-list.js';

import style from './rh-jump-links.css';

/**
 * **Jump links** allow users to navigate to sections within a page.
 * @fires toggle - when the `expanded` disclosure widget is toggled
 * @slot - Place rh-jump-links-items here
 */
@customElement('rh-jump-links')
export class RhJumpLinks extends LitElement {
  static readonly styles: CSSStyleSheet[] = [style];

  /** Whether the element features a disclosure widget around the nav items */
  @property({ reflect: true, type: Boolean }) expandable = false;

  /** Whether the expandable element's disclosure widget is expanded */
  @property({ reflect: true, type: Boolean }) expanded = false;

  /** Whether the layout of children is vertical or horizontal. */
  @property() layout: 'horizontal' | 'vertical' = 'horizontal';

  /** Accessible label for nav */
  @property() label?: string;

  #tabindex = RovingTabindexController.of<RhJumpLinksItem | RhJumpLinksList>(this, {
    getItems: () => Array.from(
      this.querySelectorAll('rh-jump-links-item, rh-jump-links-list') ?? [],
    ),
  });

  #spy = new ScrollSpyController(this, {
    rootMargin: `0px 0px 0px 0px`,
    tagNames: ['rh-jump-links-item'],
  });

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('select', this.#onSelect);
  }

  override firstUpdated(): void {
    const active: RhJumpLinksItem | null = this.querySelector('rh-jump-links-item[active]');
    if (active) {
      this.#setActiveItem(active);
    }
  }

  render(): TemplateResult<1> {
    return html`
      <nav id="container">${this.expandable ? html`
        <rh-disclosure summary="${this.label}" ?open="${this.expanded}" @toggle="${this.#onToggle}">
          <slot></slot>
        </rh-disclosure>
        ` : html`
        <span id="label">${this.label}</span>
        <div role="listbox" aria-labelledby="label">
          <slot></slot>
        </div>`}
      </nav>
    `;
  }

  #onSelect(event: Event) {
    if (event.target instanceof RhJumpLinksItem) {
      this.#setActiveItem(event.target);
    }
  }

  #setActiveItem(item: RhJumpLinksItem) {
    this.#spy.setActive(item);
  }

  #onToggle(event: Event) {
    if (event.target instanceof RhDisclosure) {
      this.expanded = event.target.open;
    }
    this.dispatchEvent(new Event('toggle'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-jump-links': RhJumpLinks;
  }
}
