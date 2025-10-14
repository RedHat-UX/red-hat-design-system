import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import styles from './rh-navigation-link.css';

/**
 * Navigation Link is a link that is used as a child of the primary, secondary, subnav, and vertical navigation elements.
 * The link is intrinsically an list item and should not be used outside of navigation elements that define the parent
 * list element.
 *
 * @summary A link that can be used as a child of navigation elements.
 * @alias navigation-link
 */
@customElement('rh-navigation-link')
@themable
export class RhNavigationLink extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

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
            <--
              Use this slot when the \`icon\` and \`icon-set\` attributes are not set. 
              Can contain a rh-icon, svg, or img tag.
            -->
            <slot name="icon">
              ${this.icon ?
                html`<rh-icon icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>`
                : html``
              }
            </slot>
            <--
              The default slot should contain the link text when the \`href\` attribute is set. 
              Alternatively, an anchor tag (\`<a href="...">\`) should be the first child inside
              the slot. Slot should never contain a button tag.
            -->
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
