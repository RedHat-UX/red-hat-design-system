import { html, isServer, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { provide } from '@lit/context';

import { ScrollSpyController } from '@patternfly/pfe-core/controllers/scroll-spy-controller.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { observes } from '@patternfly/pfe-core/decorators.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { RhJumpLink } from './rh-jump-link.js';
import { rhJumpLinksOrientationContext } from './context.js';

import style from './rh-jump-links.css' with { type: 'css' };

import '@rhds/elements/rh-icon/rh-icon.js';

/**
 * Persistent in-page navigation for jumping to content sections.
 * Renders a `role="navigation"` landmark with `aria-label` from
 * `accessible-label` (required per WCAG 1.3.6 when multiple nav
 * landmarks exist). Supports vertical and horizontal orientations
 * with ScrollSpy auto-highlighting. Avoid nesting more than one
 * level deep.
 *
 * @summary Persistent navigation links to page sections
 *
 * @fires toggle - Fired when the `expanded` disclosure widget is toggled.
 *   Does not carry additional detail data.
 */
@customElement('rh-jump-links')
@themable
export class RhJumpLinks extends LitElement {
  static readonly styles: CSSStyleSheet[] = [style];

  /**
   * Controls the layout direction of jump link items.
   *
   * - `vertical` (default) - Links are stacked vertically, typically displayed on the side of the page
   * - `horizontal` - Links are arranged in a row, with overflow scroll controls when needed
   *
   * ## Usage guidelines
   * - Use `vertical` for sidebar navigation on desktop layouts
   * - Use `horizontal` for mobile-friendly layouts or when space is limited
   * - When horizontal, scroll buttons appear automatically to navigate overflowing links
   * - The orientation cascades to child `<rh-jump-link>` and `<rh-jump-links-list>` elements
   *
   * @see [Orientation](https://ux.redhat.com/elements/jump-links/style/#orientation) in Style documentation
   */
  @provide({ context: rhJumpLinksOrientationContext })
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';

  /**
   * Accessible name for the navigation landmark.
   *
   * Provides an `aria-label` for the jump links navigation element, helping screen reader
   * users identify and navigate to this section. This is especially important when multiple
   * navigation landmarks exist on the page.
   *
   * ## Usage guidelines
   * - Use a descriptive label like "On this page" or "Page sections"
   * - Ensure the label is unique if you have multiple `<rh-jump-links>` on the page
   * - Keep labels concise and meaningful for screen reader users
   *
   * ## Accessibility
   * - Jump links use `role="navigation"` creating a navigation landmark
   * - The accessible label helps distinguish this navigation from others on the page
   * - Without an accessible label, screen readers will announce "navigation" without context
   *
   * @see [Accessibility](https://ux.redhat.com/elements/jump-links/accessibility/) documentation
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  #internals = InternalsController.of(this, { role: 'navigation' });

  #overflow = new OverflowController(this);

  #onScroll = this.#overflow.onScroll.bind(this);

  #spy = new ScrollSpyController(this, {
    rootMargin: '0px 0px 0px 0px',
    tagNames: ['rh-jump-link'],
    onIntersection: () => {
      for (const list of this.querySelectorAll('rh-jump-links-list')) {
        list.active = !!list.querySelector('rh-jump-link[active]');
      }
      this.#overflow.update();
    },
  });

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('select', this.#onSelect);
  }

  override firstUpdated(): void {
    const active: RhJumpLink | null = this.querySelector('rh-jump-link[active]');
    if (active) {
      this.#setActiveItem(active);
    }
  }

  @observes('accessibleLabel')
  protected labelChanged() {
    if (this.accessibleLabel) {
      this.#internals.ariaLabel = this.accessibleLabel;
    }
  }

  render(): TemplateResult<1> {
    const { overflowLeft, overflowRight, showScrollButtons: overflow } = this.#overflow;
    return html`
        <button id="scroll-start"
                class="overflow-button"
                ?hidden="${!overflow}"
                tabindex="-1"
                data-direction="start"
                aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll back'}"
                ?disabled="${!overflowLeft}"
                @click="${this.#onClickScroll}">
          <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
        </button>

        <div id="container" role="list">
          <!-- summary: navigation link items and nested lists (default slot)
               description: |
                 Contains \`<rh-jump-link>\` elements and optional
                 \`<rh-jump-links-list>\` groups. Each child receives
                 \`role="listitem"\` within the \`role="list"\` container,
                 forming an accessible navigation structure for screen
                 readers. Link each item to a section ID (\`href="#id"\`)
                 corresponding to a heading or landmark on the page.
                 Place links in page order so assistive technology users
                 experience a logical sequence. Use nested lists
                 sparingly to avoid overwhelming users. -->
          <slot></slot>
        </div>

        <button id="scroll-end"
                class="overflow-button"
                ?hidden="${!overflow}"
                tabindex="-1"
                data-direction="end"
                aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll forward'}"
                ?disabled="${!overflowRight}"
                @click="${this.#onClickScroll}">
           <rh-icon set="ui" icon="caret-right" loading="eager"></rh-icon>
        </button>
    `;
  }

  @observes('orientation')
  async orientationChanged() {
    if (isServer) {
      return;
    }
    if (!this.hasUpdated) {
      await this.updateComplete;
    }
    const container = this.shadowRoot!.getElementById('container')!;
    const items = Array.from(this.querySelectorAll(':scope > *')) as HTMLElement[];
    switch (this.orientation) {
      case 'horizontal':
        this.#overflow.init(container, items);
        container.addEventListener('scroll', this.#onScroll);
        break;
      case 'vertical':
        container.removeEventListener('scroll', this.#onScroll);
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
    if (event.target instanceof RhJumpLink) {
      this.#setActiveItem(event.target);
    }
  }

  async #setActiveItem(item: RhJumpLink) {
    await this.updateComplete;
    this.#spy.setActive(item);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-jump-links': RhJumpLinks;
  }
}
