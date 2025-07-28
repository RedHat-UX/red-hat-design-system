import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { consume } from '@lit/context';
import { navigationContext } from './navigation-context.js';
import { borderedContext, type BorderedContext } from './bordered-context.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import styles from './rh-navigation-item.css';

/**
 * A generic, single item for use in Red Hat Design System navigation components.
 * It is designed to be context-aware and styled by a parent navigation container.
 *
 * @summary A flexible, shared navigation item.
 */
@customElement('rh-navigation-item')
export class RhNavigationItem extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'listitem' });

  /**
   * The nesting depth of this item, driven by context from a parent navigator.
   * This is a read-only property and should not be set by users.
   */
  @property({ type: Number, reflect: true }) depth = 0;

  /**
   * The URL that the navigation item points to.
   * If provided, the item will be rendered as a link.
   */
  @property({ reflect: true }) href?: string;

  /**
   * Whether the item is the currently active navigation item.
   * Sets the `aria-current="page"` attribute on the link.
   */
  @property({ type: Boolean, reflect: true }) active = false;

  /**
   * Sets the bordered context for this item, driven by a parent navigator.
   * This is a read-only property and should not be set by users.
   * @internal
   */
  @property({ reflect: true }) bordered?: BorderedContext;

  @consume({ context: navigationContext, subscribe: true })
  @state() private navDepth?: number;

  @consume({ context: borderedContext, subscribe: true })
  @state() private borderedContext?: BorderedContext;

  willUpdate() {
    this.depth = this.navDepth ?? 0;
    this.bordered = this.borderedContext;
  }

  render(): TemplateResult<1> {
    const ariaCurrent = this.active ? 'page' : undefined;
    return html`
      <div id="container">
        ${this.href ? html`
          <!-- The navigation item link. In most cases, theming properties should be sufficient. -->
          <a part="link" href="${ifDefined(this.href)}" aria-current="${ifDefined(ariaCurrent)}">
            <!-- Slot for optional icon -->
            <slot name="icon"></slot>
            <!-- Default slot for link text -->
            <slot></slot>
          </a>
        ` : html`
          <!-- Slot for optional icon -->
          <slot name="icon"></slot>
          <!-- The content of the navigation item, typically a text label.
               May also contain \`<rh-badge>\` elements,
               for example to draw attention to new navigation items. -->
          <slot></slot>
        `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-item': RhNavigationItem;
  }
}
