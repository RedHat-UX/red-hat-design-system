import { html, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { consume } from '@lit/context';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import style from './rh-jump-links-item.css';

import { rhJumpLinksOrientationContext } from './context.js';

/**
 */
@customElement('rh-jump-links-item')
@themable
export class RhJumpLinksItem extends LitElement {
  static readonly styles: CSSStyleSheet[] = [style];

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /** Whether the layout of children is vertical or horizontal. */
  @consume({ context: rhJumpLinksOrientationContext, subscribe: true })
  @state() private orientation?: 'horizontal' | 'vertical';

  /** Whether this item is active. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** hypertext reference for this link */
  @property({ reflect: true }) href?: string;

  #internals = InternalsController.of(this, { role: 'listitem' });

  render(): TemplateResult<1> {
    const { active, orientation = 'vertical' } = this;
    return html`
      <a class="${classMap({ active, [orientation]: true })}"
         href="${ifDefined(this.href)}"
         @click="${this.#onClick}">
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
    'rh-jump-links-item': RhJumpLinksItem;
  }
}
