import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

export { RhFooterUniversal } from './rh-footer-universal.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';

import './rh-footer-social-link.js';
import './rh-footer-links.js';
import './rh-footer-block.js';

import style from './rh-footer.css';

import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

function isHeaderTagName(tagName: string) {
  return !!tagName.match(/^H[1-6]$/i);
}

/**
 * A footer displays secondary content and legal information to users who reach the bottom of a page.
 * @summary Displays secondary information at the bottom of a page
 * @csspart base - main footer element, containing all footer content
 * @slot    base - Overrides everything. Do not use.
 * @slot    header - Overrides `header-*`, `logo`, `social-links`
 * @csspart header - footer header, typically containing main logo and social links
 * @slot    header-primary - primary footer header content, e.g. main logo. Overrides `logo`
 * @csspart header-primary - primary footer header content, e.g. main logo
 * @slot    header-secondary - secondary footer header content, e.g. social links. Overrides `social-links`
 * @csspart header-secondary - secondary footer header content, e.g. social links
 * @slot    heading - text that describes the footer section to assistive tecchnology. Contains default text "Red Hat footer".
 * @slot    logo - main page or product logo. Defaults to Red Hat corporate logo
 * @csspart logo - main page or product logo container
 * @slot    social-links - social media links (icons). Contains a default set of links
 * @csspart social-links - social links container `<rh-footer-links>`
 * @slot    main - main footer content. Overrides `main-*`
 * @csspart main - main content container.
 * @slot    main-primary - main footer region. typically a columnar grid
 * @csspart main-primary - container for main footer links
 * @slot    links - main footer links
 * @csspart links - container for main footer links
 * @csspart links-accordion-header - mobile links accordion header element
 * @csspart links-accordion-panel - mobile links panel container element
 * @slot    main-secondary - typically contains prose or promotional content
 * @csspart main-secondary - container fro prose or promotional content
 * @slot    universal - must contain `<rh-footer-universal>`
 * @cssprop [--rh-footer-icon-color=#8a8d90]
 * @cssprop [--rh-footer-icon-color-hover=#b8bbbe]
 * @cssprop [--rh-footer-border-color=#6a6e73]
 * @cssprop [--rh-footer-accent-color=#e00]
 * @cssprop [--rh-footer-section-side-gap=16px]
 * @cssprop [--rh-footer-links-gap=8px]
 * @cssprop [--rh-footer-link-header-font-size=0.875em]
 * @cssprop [--rh-footer-nojs-min-height=750px]
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

  #logger = new Logger(this);

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
      <footer class="base ${classMap({ isMobile: this.#compact })}" part="base">
        <h2 id="heading"><slot name="heading">Red Hat footer</slot></h2>
        <slot name="base">
          <div class="section header" part="section header">
            <slot name="header">
              <div class="header-primary" part="header-primary">
                <slot name="header-primary">
                  <div class="logo" part="logo">
                    <slot name="logo">
                      <a href="/">
                        <img alt="Red Hat" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"/>
                      </a>
                    </slot>
                  </div>
                </slot>
              </div>
              <div class="header-secondary" part="header-secondary">
                <slot name="header-secondary">
                  <div class="social-links">
                    <rh-footer-links class="social-links-item"
                      part="social-links"
                      aria-label="Red Hat social media links"
                      role="list">
                      <slot name="social-links"></slot>
                    </rh-footer-links>
                  </div>
                </slot>
              </div>
            </slot>
          </div>
          <div class="section main" part="section main">
            <slot name="main">
              <div class="main-primary" part="main-primary">
                <slot name="main-primary">
                  <div class="links" part="links">
                    ${this.#renderLinksTemplate(this.#compact)}
                  </div>
                </slot>
              </div>
              <div class="main-secondary" part="main-secondary">
                <slot name="main-secondary"></slot>
              </div>
            </slot>
          </div>
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
      <slot name="links"></slot>
      ` : html`

      <rh-accordion on="dark" color-palette="darkest">${children.map((child, i) => {
          const type = isHeaderTagName(child.tagName) ? 'header' : 'panel';
          // SEE https://github.com/asyncLiz/minify-html-literals/issues/37
          switch (type) {
            case 'header': return html`
              <rh-accordion-header part="links-accordion-header">
                <slot name="links-${i}"></slot>
              </rh-accordion-header>`;
            case 'panel': return html`
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
          return this.#logger.warn(
            'This links set doesn\'t have a valid header associated with it.'
          );
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
