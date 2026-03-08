import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

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
 * Provides navigation, social icons, and legal content at the bottom
 * of a page. Columns collapse into an accordion on small viewports.
 * MUST contain `<rh-footer-universal>` in the `universal` slot.
 * SHOULD add headings before each `<ul>` for `aria-labelledby`.
 * MUST NOT wrap in `<footer>` — sets ARIA `contentinfo` role via
 * ElementInternals. Tab moves focus; Enter/Space expands accordions.
 *
 * @summary Displays secondary information at the bottom of a page
 *
 * @alias footer
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
    this.#internals.role = 'contentinfo';
    this.#compact = !this.screenSize.matches.has('md');
    // wire up accessibility aria-labels with unordered lists
    this.updateAccessibility();
  }

  override render() {
    return html`
      <!-- main footer container, containing all footer content. -->
      <div class="footer base ${classMap({ isMobile: this.#compact })}" part="base">
        <h2 id="heading"><!-- Visually-hidden heading announced by screen readers to identify the footer landmark. Expects inline text. Defaults to "Red Hat footer". --><slot name="heading">Red Hat footer</slot></h2>
        <!-- Overrides the entire footer layout. AVOID using; it replaces all default regions including ARIA landmarks. Expects block-level elements. -->
        <slot name="base">
          <!-- footer header, typically containing main logo and social links -->
          <div class="section header" part="section header">
            <!-- Overrides header-primary, header-secondary, logo, and social-links slots. Expects block-level elements. -->
            <slot name="header">
              <!-- primary footer header content, e.g. main logo -->
              <div class="header-primary" part="header-primary">
                <!-- Primary footer header content. Overrides the logo slot. Expects block-level elements such as an anchor wrapping an image. -->
                <slot name="header-primary">
                  <!-- main page or product logo container -->
                  <div class="logo" part="logo">
                    <!-- Main page or product logo. Expects an anchor wrapping an \`<img>\` with descriptive alt text for screen readers. Defaults to Red Hat corporate logo. -->
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
                <!-- Secondary footer header content. Overrides the social-links slot. Expects block-level elements. -->
                <slot name="header-secondary">
                  <div class="social-links">
                    <!-- social links container \`<rh-footer-links>\` -->
                    <rh-footer-links class="social-links-item"
                                     part="social-links"
                                     role="list"
                                     aria-label="Red Hat social media links">
                      <!-- Social media icon links. Expects \`<rh-footer-social-link>\` elements, each with an \`accessible-label\` attribute for screen readers. -->
                      <slot name="social-links"></slot>
                    </rh-footer-links>
                  </div>
                </slot>
              </div>
            </slot>
          </div>
          <!-- main content container. -->
          <div class="section main" part="section main">
            <!-- Overrides the main-primary and main-secondary slots. Expects block-level elements. -->
            <slot name="main">
              <!-- container for main footer links -->
              <div class="main-primary" part="main-primary">
                <!-- Main footer region displayed as a columnar grid. Expects block-level elements. -->
                <slot name="main-primary">
                  <!-- container for main footer links -->
                  <div class="links" part="links">
                    ${this.#renderLinksTemplate(this.#compact)}
                  </div>
                </slot>
              </div>
              <!-- container for prose or promotional content -->
              <div class="main-secondary" part="main-secondary">
                <!-- Prose or promotional content such as \`<rh-footer-block>\` elements. Expects block-level elements. -->
                <slot name="main-secondary"></slot>
              </div>
            </slot>
          </div>
          <!-- MUST contain an \`<rh-footer-universal>\` element. Provides global Red Hat links and legal information. The universal footer manages its own ARIA landmark role. -->
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
