import { html, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { consume } from '@lit/context';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import style from './rh-jump-link.css' with { type: 'css' };

import { rhJumpLinksOrientationContext } from './context.js';

/**
 * An individual navigation link within `<rh-jump-links>` that scrolls the
 * page to a target section. Renders as `role="listitem"` with an internal
 * anchor. When active, sets `aria-current="location"` for screen readers.
 * Tab moves focus to the link; Enter or click scrolls to the `href`
 * target. Must be a child of `<rh-jump-links>` or `<rh-jump-links-list>`.
 *
 * @summary A single jump link targeting a page section
 */
@customElement('rh-jump-link')
@themable
export class RhJumpLink extends LitElement {
  static readonly styles: CSSStyleSheet[] = [style];

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /** Whether the layout of children is vertical or horizontal. */
  @consume({ context: rhJumpLinksOrientationContext, subscribe: true })
  @state() private orientation?: 'horizontal' | 'vertical';

  /** Whether this link represents the currently visible section. When true, a bold border and `aria-current="location"` are applied. Defaults to false. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** The URL fragment (e.g. `"#section-id"`) this link navigates to. Must match an element ID on the page. Defaults to undefined. */
  @property({ reflect: true }) href?: string;

  #internals = InternalsController.of(this, { role: 'listitem' });

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'listitem';
  }

  render(): TemplateResult<1> {
    const { active, orientation = 'vertical' } = this;
    return html`
      <a class="${classMap({ active, [orientation]: true })}"
         aria-current="${ifDefined(this.active ? 'location' : undefined)}"
         href="${ifDefined(this.href)}"
         @click="${this.#onClick}">
        <!-- summary: link label text (default slot)
             description: |
               Text content for this jump link. Serves as the accessible
               name for the internal anchor element, so it should match
               or closely reflect the target section heading (per WCAG
               2.4.6 Headings and Labels). Keep text concise. -->
        <slot></slot>
      </a>
    `;
  }

  @observes('active')
  protected activeChanged(): void {
    this.#internals.ariaCurrent = this.active ? 'location' : null;
  }

  #onClick() {
    this.dispatchEvent(new Event('select', { bubbles: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-jump-link': RhJumpLink;
  }
}
