import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

export { RhFooterUniversal } from './rh-footer-universal.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';

import './rh-footer-social-link.js';
import './rh-footer-links.js';
import './rh-footer-block.js';

import style from './rh-footer.css' with { type: 'css' };

import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

function isHeaderTagName(tagName: string) {
  return !!tagName.match(/^H[1-6]$/i);
}

/**
 * Site footer with navigation links, social icons, and legal content.
 * MUST slot an `rh-footer-universal` in the `universal` slot. SHOULD
 * contain `rh-footer-links` groups and `rh-footer-block` sections.
 * Uses a `<footer>` landmark with a visually-hidden `<h2>` for
 * screen readers. Tab navigates links; `aria-labelledby` auto-wires
 * to headers. On mobile, link columns collapse to `rh-accordion`.
 *
 * @summary Site footer with navigation links, social icons, and legal content
 *
 * @alias footer
 *
 * @cssprop --rh-footer-nojs-min-height - Minimum height when JavaScript is disabled. @deprecated target `rh-footer:not(:defined)` directly
 * @cssprop --rh-footer-icon-color - Default icon color. Uses --rh-color-gray-40 design token
 * @cssprop --rh-footer-icon-color-hover - Icon color on hover/focus. Uses --rh-color-gray-30 design token
 * @cssprop --rh-footer-border-color - Border color for section dividers. Uses --rh-color-border-subtle-on-dark design token
 * @cssprop --rh-footer-accent-color - Accent color for emphasis. Uses --rh-color-accent-brand-on-light design token
 * @cssprop --rh-footer-section-side-gap - Horizontal padding for footer sections. Responsive: 16px / 32px / 64px
 * @cssprop --rh-footer-links-gap - Vertical spacing between footer link items. Defaults to --rh-space-lg
 * @cssprop --rh-footer-link-header-font-size - Font size for link column headers. Defaults to --rh-font-size-body-text-sm
 */
@customElement('rh-footer')
export class RhFooter extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [style];

  /**
   * Isomorphic import.meta.url function
   * Requires a node.js dom shim that sets window.location
   */
  static getImportURL(relativeLocation: string | URL): string | URL {
    const url = new URL(relativeLocation, import.meta.url);
    if (url.protocol === 'file:') {
      return new URL(relativeLocation, window.location.href);
    }
    return url;
  }

  #compact = false;

  /**
   * ScreenSizeController effects callback to set #compact is true when viewport
   * `(min-width: ${tabletLandscapeBreakpoint})`.
   */
  protected screenSize = new ScreenSizeController(this, 'md', {
    onChange: matches => {
      this.#compact = !matches;
    },
  });

  override connectedCallback() {
    super.connectedCallback();
    this.#compact = !this.screenSize.matches.has('md');
    // wire up accessibility aria-labels with unordered lists
    this.updateAccessibility();
  }

  override render() {
    return html`
      <!-- main footer element, containing all footer content -->
      <footer class="base ${classMap({ isMobile: this.#compact })}" part="base">
        <h2 id="heading"><!-- summary: visually-hidden footer heading for assistive technology
             description: |
               Screen readers announce this heading to identify the footer landmark region.
               Defaults to "Red Hat footer". Override for localized or custom heading text. --><slot name="heading">Red Hat footer</slot></h2>
        <!-- summary: overrides all footer content
             description: |
               Replaces the entire footer inner structure. AVOID using; bypasses all
               built-in layout, accessibility wiring, and responsive behavior. -->
        <slot name="base">
          <!-- summary: footer header with logo and social links
               description: |
                 Contains the site logo and social media links. Screen readers navigate
                 these as link groups. Tab moves through logo link and social links. -->
          <div class="section header" part="section header">
            <!-- Overrides header-primary, logo, and social-links slots.
                 SHOULD contain block-level elements. Screen readers
                 navigate child links as a group. -->
            <slot name="header">
              <!-- primary footer header content, e.g. main logo -->
              <div class="header-primary" part="header-primary">
                <!-- Primary header area, typically the site logo.
                     Overrides the logo slot. SHOULD contain an
                     accessible \`<a>\` linking to the homepage. -->
                <slot name="header-primary">
                  <!-- main page or product logo container -->
                  <div class="logo" part="logo">
                    <!-- summary: main page or product logo
                         description: |
                           Slot for the site logo linking to the homepage. Defaults to the Red Hat
                           corporate logo. Screen readers rely on the img \`alt\` attribute or link
                           text for identification. MUST contain an accessible \`<a>\` with an image
                           or text. -->
                    <slot name="logo">
                      <a href="/">
                        <img alt="Red Hat" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"/>
                      </a>
                    </slot>
                  </div>
                </slot>
              </div>
              <!-- secondary footer header content, e.g. social links -->
              <div class="header-secondary" part="header-secondary">
                <!-- Secondary header area for social media links.
                     Overrides social-links slot. SHOULD contain
                     \`<rh-footer-social-link>\` elements with
                     accessible labels for screen readers. -->
                <slot name="header-secondary">
                  <div class="social-links">
                    <!-- social links container \`<rh-footer-links>\` -->
                    <rh-footer-links class="social-links-item"
                                     part="social-links"
                                     role="list"
                                     aria-label="Red Hat social media links">
                      <!-- summary: social media icon links
                         description: |
                           Container for \`<rh-footer-social-link>\` elements. Each link MUST have
                           an \`accessible-label\` for screen reader announcement. Rendered as a
                           list with \`role="list"\` and \`aria-label="Red Hat social media links"\`. -->
                      <slot name="social-links"></slot>
                    </rh-footer-links>
                  </div>
                </slot>
              </div>
            </slot>
          </div>
          <!-- main content container. -->
          <div class="section main" part="section main">
            <!-- Main footer content area. Overrides main-primary
                 and main-secondary slots. SHOULD contain
                 \`<rh-footer-links>\` groups with heading elements.
                 Screen readers use aria-labelledby on each group. -->
            <slot name="main">
              <!-- container for main footer links -->
              <div class="main-primary" part="main-primary">
                <!-- Primary footer links in a columnar grid.
                     SHOULD contain \`<rh-footer-links>\` with heading
                     elements. On mobile, collapses to accordion. -->
                <slot name="main-primary">
                  <!-- container for main footer links -->
                  <div class="links" part="links">
                    ${this.#renderLinksTemplate(this.#compact)}
                  </div>
                </slot>
              </div>
              <!-- container for prose or promotional content -->
              <div class="main-secondary" part="main-secondary">
                <!-- Secondary content area for prose, promotional
                     blocks, or \`<rh-footer-block>\` elements.
                     Accepts block-level content. -->
                <slot name="main-secondary"></slot>
              </div>
            </slot>
          </div>
          <!-- summary: universal footer slot
               description: |
                 MUST contain an \`<rh-footer-universal>\` element providing global Red Hat
                 links, logo, and copyright. Screen readers navigate this as a separate
                 footer landmark region. MUST NOT be omitted. -->
          <slot name="universal"></slot>
        </slot>
      </footer>
    `;
  }

  #renderLinksTemplate(isMobile = false) {
    // gather all of the links that need to be wrapped into the accordion
    // give them a designation of either 'header' or 'panel'
    const children = Array.from(this.querySelectorAll?.(':scope > [slot^=links]') ?? []);

    // Update the dynamic slot names if on mobile
    children.forEach((child, i) => child.setAttribute('slot', isMobile ? `links-${i}` : 'links'));

    return !(isMobile && children) ? html`
      <!-- main footer links -->
      <slot name="links"></slot>
      ` : html`

      <rh-accordion on="dark" color-palette="darkest">${children.map((child, i) => {
          const type = isHeaderTagName(child.tagName) ? 'header' : 'panel';
          // SEE https://github.com/asyncLiz/minify-html-literals/issues/37
          switch (type) {
            case 'header': return html`
              <!-- mobile links accordion header element -->
              <rh-accordion-header part="links-accordion-header">
                <slot name="links-${i}"></slot>
              </rh-accordion-header>`;
            case 'panel': return html`
              <!-- mobile links panel container element -->
              <rh-accordion-panel part="links-accordion-panel">
                <slot name="links-${i}"></slot>
              </rh-accordion-panel>`;
          }
        })}
      </rh-accordion>
    `;
  }

  private static LISTS_SELECTOR =
    ':is([slot^=links],[slot=footer-links-primary],[slot=footer-links-secondary]):is(ul)';

  /**
   * Get any `<ul>`s that are in the designated link slots
   * and synchronously update each list and header if we need to.
   */
  public updateAccessibility(): void {
    for (const list of this.querySelectorAll?.(RhFooter.LISTS_SELECTOR) ?? []) {
      // if we already have a label then we assume that the user
      // has wired this up themselves.
      if (!list.hasAttribute('aria-labelledby')) {
        // get the corresponding header that should be the previous sibling
        const header =
          isHeaderTagName(list.previousElementSibling?.tagName ?? '') ?
            list.previousElementSibling
            : null;
        if (!header) {
          return;
        } else {
          // add an ID to the header if we need it
          header.id ||= getRandomId('rh-footer');
          // add that header id to the aria-labelledby attribute
          list.setAttribute('aria-labelledby', header.id);
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer': RhFooter;
  }
}
