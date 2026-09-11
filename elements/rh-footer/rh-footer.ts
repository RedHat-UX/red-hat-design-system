import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

export { RhFooterUniversal } from './rh-footer-universal.js';

import '@rhds/elements/rh-accordion/rh-accordion.js';

import './rh-footer-links.js';
import './rh-footer-social-link.js';
import './rh-footer-block.js';

import style from './rh-footer.css' with { type: 'css' };

import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

function isHeaderTagName(tagName: string) {
  return !!tagName.match(/^H[1-6]$/i);
}

/**
 * Site footer for navigation links, social icons, and legal content.
 * Use when a page needs branded footer navigation. Must slot an
 * `rh-footer-universal` in the `universal` slot and should contain
 * `rh-footer-links` groups and `rh-footer-block` sections. Uses a
 * `<footer>` landmark with `aria-labelledby` auto-wired to headers.
 * Tab navigates links. On mobile, collapses to accordion.
 *
 * @summary Site footer with navigation links, social icons, and legal content
 *
 * @cssprop --rh-footer-nojs-min-height - Minimum height when JavaScript is disabled. @deprecated target `rh-footer:not(:defined)` directly
 * @cssprop --rh-footer-icon-color - Default icon color. Uses --rh-color-icon-subtle design token
 * @cssprop --rh-footer-icon-color-hover - Icon color on hover/focus. Uses --rh-color-icon-subtle-hover design token
 * @cssprop --rh-footer-border-color - Border color for section dividers. Uses --rh-color-border-subtle design token
 * @cssprop --rh-footer-accent-color - Accent color for emphasis. Uses --rh-color-accent-brand-on-light design token
 * @cssprop --rh-footer-section-side-gap - Horizontal padding for footer sections. Responsive: 16px / 32px / 64px
 * @cssprop --rh-footer-links-gap - Vertical spacing between footer link items. Defaults to --rh-space-lg
 * @cssprop --rh-footer-link-header-font-size - Font size for link column headers. Defaults to --rh-font-size-body-text-sm
 */
@customElement('rh-footer')
@colorPalettes
@themable
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

  /**
   * Sets color palette, which affects the footer's styles and descendants'
   * color scheme. Overrides parent color context. Accepts all six palettes.
   * Surfaces collapse via `light-dark()`: domain header/main use lighter
   * (light) / darker (dark); universal uses lightest (light) / darkest (dark).
   * Defaults to undefined (inherits from parent; light on a bare page).
   * Apply `color-palette="darkest"` to keep a dark footer.
   * @see https://ux.redhat.com/theming/color-palettes/
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  #compact = false;

  #internals = InternalsController.of(this);

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
    this.#updateRole();
    this.#compact = !this.screenSize.matches.has('md');
    // wire up accessibility aria-labels with unordered lists
    this.updateAccessibility();
  }

  /**
   * Check if this element is nested inside a `<footer>`.
   * If not, set role="contentinfo" on the host via InternalsController.
   * NOTE: Does not check for other custom elements with `role="contentinfo"`
   */
  #updateRole() {
    let node: HTMLElement | null | undefined = this.parentElement;
    let hasFooterAncestor = false;

    while (node) {
      if (node.tagName === 'FOOTER') {
        hasFooterAncestor = true;
        break;
      }

      if (node.shadowRoot?.querySelector('footer')) {
        hasFooterAncestor = true;
        break;
      }

      node = node.parentElement;
    }

    if (!hasFooterAncestor) {
      this.#internals.role = 'contentinfo';
    }
  }

  override render() {
    return html`
      <!-- main footer container, containing all footer content. -->
      <div class="footer base ${classMap({ isMobile: this.#compact })}" part="base">
        <h2 id="heading"><!--
            summary: visually-hidden footer heading for assistive technology
            description: |
                Expects inline text. Screen readers announce this heading to identify the
                footer landmark region. Defaults to "Red Hat footer". --><slot name="heading">Red Hat footer</slot></h2>
        <!-- summary: overrides all footer content
             description: |
               Expects block elements. Replaces the entire footer inner structure.
               Avoid using; bypasses all built-in layout, ARIA wiring, and responsive behavior. -->
        <slot name="base">
          <!-- summary: footer header with logo and social links
               description: |
                 Contains the site logo and social media links. Screen readers navigate
                 these as link groups. Tab moves through logo link and social links. -->
          <div class="section header" part="section header">
            <!-- Expects block elements. Overrides header-primary, logo, and
                 social-links slots. Screen readers navigate child links
                 as a group. -->
            <slot name="header">
              <!-- primary footer header content, e.g. main logo -->
              <div class="header-primary" part="header-primary">
                <!-- Expects block elements. Primary header area, typically the
                     site logo. Should contain an accessible \`<a>\` linking
                     to the homepage. Screen readers use the link text. -->
                <slot name="header-primary">
                  <!-- main page or product logo container -->
                  <div class="logo" part="logo">
                    <!-- summary: main page or product logo
                         description: |
                           Expects block elements: an \`<a>\` wrapping an image. Defaults to the
                           Red Hat corporate logo. Screen readers rely on the img \`alt\` attribute
                           or link text for identification. -->
                    <slot name="logo">
                      <a href="https://www.redhat.com/en" aria-label="Red Hat">
                        <svg preserveAspectRatio="xMinYMid slice" viewBox="0 0 613 145" role="img" aria-hidden="true">
                          <path fill="var(--rh-color-brand-red, #ee0000)" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"/>
                          <path d="M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"/>
                          <path fill="light-dark(var(--rh-color-text-primary-on-light, #151515), var(--rh-color-text-primary-on-dark, #ffffff))" d="M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"/>
                        </svg>
                      </a>
                    </slot>
                  </div>
                </slot>
              </div>
              <!-- secondary footer header content, e.g. social links -->
              <div class="header-secondary" part="header-secondary">
                <!-- Expects block elements. Overrides social-links slot. Should
                     contain \`<rh-footer-social-link>\` elements with
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
                           Expects block elements: \`<rh-footer-social-link>\` elements. Each link
                           must have an \`accessible-label\` for screen reader announcement.
                           Rendered as a list with \`role="list"\`. -->
                      <slot name="social-links"></slot>
                    </rh-footer-links>
                  </div>
                </slot>
              </div>
            </slot>
          </div>
          <!-- main content container. -->
          <div class="section main" part="section main">
            <!-- Expects block elements. Overrides main-primary and
                 main-secondary slots. Should contain \`<rh-footer-links>\`
                 groups. Screen readers use aria-labelledby on each group. -->
            <slot name="main">
              <!-- container for main footer links -->
              <div class="main-primary" part="main-primary">
                <!-- Expects block elements: \`<rh-footer-links>\` with heading
                     elements. On mobile, collapses to accordion. Screen
                     readers use \`aria-labelledby\` on each link group. -->
                <slot name="main-primary">
                  <!-- container for main footer links -->
                  <div class="links" part="links">
                    ${this.#renderLinksTemplate(this.#compact)}
                  </div>
                </slot>
              </div>
              <!-- container for prose or promotional content -->
              <div class="main-secondary" part="main-secondary">
                <!-- Expects block elements: prose, promotional content, or
                     \`<rh-footer-block>\` elements. Screen readers announce
                     content in DOM order. -->
                <slot name="main-secondary"></slot>
              </div>
            </slot>
          </div>
          <!-- summary: universal footer slot
               description: |
                 Expects block elements: an \`<rh-footer-universal>\` element providing
                 global Red Hat links, logo, and copyright. Screen readers navigate
                 this as a separate footer landmark region. Must not be omitted. -->
          <slot name="universal"></slot>
        </slot>
      </div>
    `;
  }

  #renderLinksTemplate(isMobile = false) {
    // gather all of the links that need to be wrapped into the accordion
    // give them a designation of either 'header' or 'panel'
    const children = Array.from(this.querySelectorAll?.(':scope > [slot^=links]') ?? []);

    // Update the dynamic slot names if on mobile
    children.forEach((child, i) => child.setAttribute('slot', isMobile ? `links-${i}` : 'links'));

    return !(isMobile && children) ? html`
      <!-- Main footer link columns. Expects alternating headings (e.g. \`<h3>\`) and \`<ul>\` lists. Each heading MUST have a unique id so screen readers announce groups via \`aria-labelledby\`. -->
      <slot name="links"></slot>
      ` : html`

      <rh-accordion>${children.map((child, i) => {
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
