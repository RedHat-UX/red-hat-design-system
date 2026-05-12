import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';

import { lightdomCSS } from '@rhds/elements/lib/lightdom-css.js';
import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

import './rh-navigation-vertical-list.js';

import styles from './rh-navigation-vertical.css' with { type: 'css' };

/**
 * A vertical sidebar navigation for organizing site structure. Authors
 * must set `accessible-label` when multiple navigation landmarks exist.
 * Uses a `navigation` ARIA role with a visually hidden heading for
 * screen readers. Keyboard users tab through links and groups.
 *
 * @summary Organizes and communicates structure and content vertically
 * @alias Navigation (vertical)
 *
 */
@customElement('rh-navigation-vertical')
@themable
@lightdomCSS(import.meta.url, './rh-navigation-vertical-lightdom.css')
export class RhNavigationVertical extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  #internals = InternalsController.of(this, { role: 'navigation' });

  @query('#title')
  private _title!: HTMLHeadingElement;

  /**
   * The accessible-label attribute labels the navigation using a visually hidden heading.
   * Defaults to 'Navigation'. This label should be changed if other navigation elements
   * are present or when translations are needed.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'Navigation';


  protected firstUpdated(): void {
    // ensure we update initially on client hydration
    if (!isServer) {
      if (this._title) {
        this.#internals.ariaLabelledByElements = [this._title];
      }
    }
  }

  render(): TemplateResult<1> {
    return html`
      <h2 class="visually-hidden">${this.accessibleLabel}</h2>
      <div id="container" role="list">
        <!-- summary: Navigation items
             description: |
               Place \`<rh-navigation-link>\` or \`<rh-navigation-vertical-list>\`
               elements. Each item receives an ARIA listitem role for
               screen reader accessibility. -->
        <slot></slot>
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-vertical': RhNavigationVertical;
  }
}
