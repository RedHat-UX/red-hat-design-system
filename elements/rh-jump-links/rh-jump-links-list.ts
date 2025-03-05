import { html, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import style from './rh-jump-links-list.css';

/**
 */
@customElement('rh-jump-links-list')
export class RhJumpLinksList extends LitElement {
  static readonly styles: CSSStyleSheet[] = [style];

  #internals = InternalsController.of(this, { role: 'listitem' });

  /** Whether this item is active. */
  @property({ type: Boolean, reflect: true }) active = false;

  @observes('active')
  protected activeChanged(): void {
    this.#internals.ariaCurrent = this.active ? 'location' : null;
  }

  render(): TemplateResult<1> {
    // TODO: add label

    return html`
      <slot name="parent"></slot>
      <div id="container" role="list">
        <slot></slot>
      </div>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'rh-jump-links-list': RhJumpLinksList;
  }
}
