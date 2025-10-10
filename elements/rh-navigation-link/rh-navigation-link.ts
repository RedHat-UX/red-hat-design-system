import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import styles from './rh-navigation-link.css';

/**
 * Navigation Link
 * @alias navigation-link
 * @slot - Place element content here
 */
@customElement('rh-navigation-link')
@themable
export class RhNavigationLink extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  // TODO: Is it always the case that we assume the link is part of a list?
  // If not, we'll need to remove the role from the internals.  How could we determine the context
  // maybe use @lit/context to determine the context? More research needed.
  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'listitem' });

  /** Shorthand for the `icon` slot, the value is icon name */
  @property() icon?: IconNameFor<IconSetName>;

  /** Icon set for the `icon` property - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName;

  /** The URL to navigate to when the link is clicked */
  @property({ reflect: true }) href?: string;

  /**
   * Optional current-page attribute that, highlights the item as the current page.
   * Used to pass the aria-current attribute to the anchor element when the <a> is not slotted.
   */
  @property({ attribute: 'current-page', type: Boolean }) currentPage? = false;

  firstUpdated(): void {
    /**
     * SSR Adds the role, but then removes when ElementInternals is hydrated
     * However, axe-dev tools then complains as it doesn't handle Internals correctly
     * So.... lets readd it for brevity, then when axe decides to fix their stuff,
     * we can remove at a later date.
     */
    this.role = 'listitem';
  }

  override async scheduleUpdate() {
    if (this.icon) {
      await import('@rhds/elements/rh-icon/rh-icon.js');
    }
    super.scheduleUpdate();
  }

  render(): TemplateResult<1> {
    const isCurrentPage = this.currentPage ? 'page' : undefined;

    return html`
      <div id="container">
        ${this.href ? html`
          <a href="${ifDefined(this.href)}" aria-current="${ifDefined(isCurrentPage)}">
            <slot name="icon">
              ${this.icon ?
                html`<rh-icon icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>`
                : html``
              }
            </slot>
            <slot></slot>
          </a>`
          : html`
          <slot></slot>`
        }
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-link': RhNavigationLink;
  }
}
