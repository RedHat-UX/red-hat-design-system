import { html, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { consume } from '@lit/context';
import { classMap } from 'lit-html/directives/class-map.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { rhJumpLinksOrientationContext } from './context.js';

import style from './rh-jump-links-list.css';

/**
 */
@customElement('rh-jump-links-list')
@themable
export class RhJumpLinksList extends LitElement {
  static readonly styles: CSSStyleSheet[] = [style];

  #internals = InternalsController.of(this, { role: 'listitem' });

  /** Whether the layout of children is vertical or horizontal. */
  @consume({ context: rhJumpLinksOrientationContext, subscribe: true })
  @state() private orientation?: 'horizontal' | 'vertical';

  /** Whether this item is active. */
  @property({ type: Boolean, reflect: true }) active = false;

  @observes('active')
  protected activeChanged(): void {
    this.#internals.ariaCurrent = this.active ? 'location' : null;
  }

  render(): TemplateResult<1> {
    const { active, orientation = 'vertical' } = this;
    return html`
      <div id="container" class="${classMap({ active, [orientation]: true })}">
        <slot name="parent" ?hidden="${!active}"></slot>
        <div id="list"
             ?hidden="${this.orientation === 'horizontal'}"
             role="list">
          <slot></slot>
        </div>
      </div>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'rh-jump-links-list': RhJumpLinksList;
  }
}
