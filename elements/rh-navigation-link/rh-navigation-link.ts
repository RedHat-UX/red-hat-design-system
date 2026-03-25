import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import styles from './rh-navigation-link.css' with { type: 'css' };

/**
 * Navigation Link provides a link for use within Red Hat navigation
 * components. It MUST be a child of elements like `rh-subnav` or
 * `rh-navigation-primary` that provide the parent list context. Authors
 * SHOULD set `href` or slot an `<a>` element directly; authors MUST NOT
 * slot a `<button>`. When `current-page` is set, `aria-current="page"` is
 * applied so screen readers announce the active page. Uses
 * `delegatesFocus` so Tab focus passes to the anchor.
 *
 * @summary A link that can be used as a child of navigation elements.
 * @alias navigation-link
 *
 * @slot
 *       When the `href` attribute is set, this slot SHOULD contain inline
 *       text for the link label. Alternatively, an anchor element
 *       (\`<a href="...">\`) SHOULD be the first child in this slot when
 *       `href` is not set. Screen readers will announce the slotted text as
 *       the accessible name for the link.
 *
 * @slot icon
 *       Use this slot when the \`icon\` and \`icon-set\` attributes are not
 *       set. Can contain an \`rh-icon\`, \`svg\`, or \`img\` element. Icon
 *       content SHOULD have appropriate \`aria-hidden\` or \`alt\` attributes
 *       so screen readers do not announce decorative images.
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
   * Indicates that this link refers to the current page for accessibility; used with the `href` attribute.
   * Sets the `aria-current` attribute to 'page' on the anchor element internally in the shadow DOM.
   */
  @property({ attribute: 'current-page', type: Boolean }) currentPage? = false;

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
            <!-- summary: Optional icon slot
                 description: |
                   Use this slot when the \`icon\` and \`icon-set\` attributes
                   are not set. Can contain an \`rh-icon\`, \`svg\`, or \`img\`
                   element. Icon content SHOULD have appropriate
                   \`aria-hidden\` or \`alt\` attributes so screen readers do
                   not announce decorative images. -->
            <slot name="icon">
              ${!this.icon ? html``
                : html`<rh-icon icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>`
              }
            </slot>
            <!-- summary: Link content
                 description: |
                   When the \`href\` attribute is set, this slot SHOULD
                   contain inline text for the link label. Alternatively,
                   an anchor element (\`<a href="...">\`) SHOULD be the
                   first child in this slot when \`href\` is not set.
                   Screen readers will announce the slotted text as the
                   accessible name for the link. Authors MUST NOT slot a
                   \`<button>\` element. -->
            <slot></slot>
          </a>`
          : html`<!-- summary: Link content
                 description: |
                   When the \`href\` attribute is set, this slot SHOULD
                   contain inline text for the link label. Alternatively,
                   an anchor element (\`<a href="...">\`) SHOULD be the
                   first child in this slot when \`href\` is not set.
                   Screen readers will announce the slotted text as the
                   accessible name for the link. Authors MUST NOT slot a
                   \`<button>\` element. -->
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
