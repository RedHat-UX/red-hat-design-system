import { html, isServer, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { provide } from '@lit/context';

import { ScrollSpyController } from '@patternfly/pfe-core/controllers/scroll-spy-controller.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { RhJumpLinksItem } from './rh-jump-links-item.js';
import { rhJumpLinksOrientationContext } from './context.js';

import style from './rh-jump-links.css';

import '@rhds/elements/rh-icon/rh-icon.js';
import { observes } from '@patternfly/pfe-core/decorators.js';

/**
 * **Jump links** allow users to navigate to sections within a page.
 * @fires toggle - when the `expanded` disclosure widget is toggled
 * @slot - Place rh-jump-links-items here
 */
@customElement('rh-jump-links')
@themable
export class RhJumpLinks extends LitElement {
  static readonly styles: CSSStyleSheet[] = [style];

  /** Whether the layout of children is vertical or horizontal. */
  @provide({ context: rhJumpLinksOrientationContext })
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';

  /** Accessible label for nav */
  @property() label?: string;

  #overflow = new OverflowController(this);

  #spy = new ScrollSpyController(this, {
    rootMargin: '0px 0px 0px 0px',
    tagNames: ['rh-jump-links-item'],
    onIntersection: () => {
      for (const list of this.querySelectorAll('rh-jump-links-list')) {
        list.active = !!list.querySelector('rh-jump-links-item[active]');
      }
    },
  });

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'nav';
    this.addEventListener('select', this.#onSelect);
    if (!isServer) {
      RovingTabindexController.of(this, {
        getItems: () => Array.from(
          this.querySelectorAll('rh-jump-links-item'),
          x => x.shadowRoot?.querySelector('a')
        ).filter(x =>
          !!x
          && (this.orientation === 'vertical'
          || !x?.closest('rh-jump-links-list'))) as HTMLAnchorElement[],
      });
    }
  }

  override firstUpdated(): void {
    const active: RhJumpLinksItem | null = this.querySelector('rh-jump-links-item[active]');
    if (active) {
      this.#setActiveItem(active);
    }
  }

  render(): TemplateResult<1> {
    const overflow = this.#overflow.showScrollButtons;
    console.log({ overflow });
    return html`
        <button id="scroll-start"
                class="overflow-button"
                ?hidden="${!overflow}"
                tabindex="-1"
                data-direction="start"
                aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll back'}"
                ?disabled="${!this.#overflow.overflowLeft}"
                @click="${this.#onClickScroll}">
          <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
        </button>

        <div id="container" role="list">
          <slot></slot>
        </div>

        <button id="scroll-end"
                class="overflow-button"
                ?hidden="${!overflow}"
                tabindex="-1"
                data-direction="end"
                aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll forward'}"
                ?disabled="${!this.#overflow.overflowRight}"
                @click="${this.#onClickScroll}">
           <rh-icon set="ui" icon="caret-right" loading="eager"></rh-icon>
        </button>
    `;
  }

  @observes('orientation')
  async orientationChanged() {
    if (!isServer && this.orientation === 'horizontal') {
      if (!this.hasUpdated) {
        await this.updateComplete;
      }
      const container = this.shadowRoot?.getElementById('container')!;
      const items = Array.from(this.querySelectorAll(':scope > *'));
      this.#overflow.init(container, items);
    }
  }

  #onClickScroll(event: Event) {
    if (event.target instanceof HTMLElement) {
      switch (event.target.dataset.direction) {
        case 'start':
          if (this.matches(':dir(rtl)')) {
            this.#overflow.scrollRight();
          } else {
            this.#overflow.scrollLeft();
          }
          break;
        case 'end':
          if (this.matches(':dir(rtl)')) {
            this.#overflow.scrollLeft();
          } else {
            this.#overflow.scrollRight();
          }
          break;
      }
    }
  }

  #onSelect(event: Event) {
    if (event.target instanceof RhJumpLinksItem) {
      this.#setActiveItem(event.target);
    }
  }

  async #setActiveItem(item: RhJumpLinksItem) {
    await this.updateComplete;
    this.#spy.setActive(item);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-jump-links': RhJumpLinks;
  }
}
