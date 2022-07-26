import type { ColorPalette } from '@patternfly/pfe-core';

import { LitElement, html } from 'lit';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextProvider } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import style from './rh-footer.css';
import { responsiveStyles } from './rh-footer-responsive.css.js';

import { tabletLandscapeBreakpoint } from '../../lib/tokens.js';
// TODO: use ScreenSizeController
import { MatchMediaController } from '../../lib/MatchMediaController.js';

import './rh-footer-social-link.js';
import './rh-footer-links.js';
import './rh-footer-block.js';
import './rh-global-footer.js';

import '@patternfly/pfe-icon';
import '@patternfly/pfe-accordion';

function isHeader(tagName: string) {
  return !!tagName.match(/^H[1-6]$/i);
}

/**
 * @element rh-footer
 * @csspart base - main footer element, containing all footer content
 * @slot    base - Overrides everything. Do not use.
 * @slot    header - Overrides `header-*`, `logo`, `social-links`
 * @csspart header - footer header, typically containing main logo and social links
 * @slot    header-primary - primary footer header content, e.g. main logo. Overrides `logo`
 * @csspart header-primary - primary footer header content, e.g. main logo
 * @slot    header-secondary - secondary footer header content, e.g. social links. Overrides `social-links`
 * @csspart header-secondary - secondary footer header content, e.g. social links
 * @slot    logo - main page or product logo. Defaults to Red Hat corporate logo
 * @csspart logo - main page or product logo container
 * @slot    social-links - social media links (icons). Contains a default set of links
 * @csspart social-links - social links container `<rh-footer-links>`
 * @slot    main - main footer content. Overrides `main-*`
 * @csspart main - main content container.
 * @slot    main-primary - main footer links. typically a columnar grid
 * @csspart main-primary - container for main footer links
 * @slot    main-secondary - typically contains prose or promotional content
 * @csspart main-secondary - container fro prose or promotional content
 * @slot    global - must contain `<rh-global-footer>`
 *
 * @cssprop --rh-footer-icon-color - {@default #8a8d90}
 * @cssprop --rh-footer-icon-color-hover - {@default #b8bbbe}
 * @cssprop --rh-footer-border-color - {@default #6a6e73}
 * @cssprop --rh-footer-accent-color - {@default #e00}
 * @cssprop --rh-footer-section-side-gap - {@default 32px}
 * @cssprop --rh-footer-links-column-gap - {@default 32px}
 * @cssprop --rh-footer-links-gap - {@default 32px}
 * @cssprop --rh-footer-link-header-font-size - {@default 0.875em}
 */
export class RhFooter extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [style, responsiveStyles];

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

  #matchMedia = new MatchMediaController(this, `(max-width: ${tabletLandscapeBreakpoint})`);

  #logger = new Logger(this);

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'darker';

  override connectedCallback() {
    super.connectedCallback();
    // wire up accessbility aria-labels with unordered lists
    this.updateAccessibility();
  }

  override render() {
    const isMobile = this.#matchMedia.mediaQueryList?.matches ?? false;
    return html`
      <footer class="base ${classMap({ isMobile })}" part="base">
        <slot name="base">
          <div class="section header" part="section header">
            <slot name="header">
              <div class="header-primary" part="header-primary">
                <slot name="header-primary">
                  <div class="logo" part="logo">
                    <slot name="logo">
                      <a href="/en">
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
                      aria-label="Red Hat social media links">
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
                    ${this.#renderLinksTemplate(isMobile)}
                  </div>
                </slot>
              </div>
              <div class="main-secondary" part="main-secondary">
                <slot name="main-secondary"></slot>
              </div>
            </slot>
          </div>
          <slot name="global"></slot>
        </slot>
      </footer>
    `;
  }

  #renderLinksTemplate(isMobile = false) {
    // gather all of the links that need to be wrapped into the accordion
    // give them a designation of either 'header' or 'panel'
    const children = Array.from(this.querySelectorAll(':scope > [slot^=links]'), ref => ({
      type: isHeader(ref.tagName) ? 'header' : 'panel',
      ref,
    }));

    // Update the dynamic slot names if on mobile
    children.forEach(({ ref }, i) => ref.setAttribute('slot', isMobile ? `links-${i}` : 'links'));

    return !(isMobile && children) ? html`
      <slot name="links"></slot>
      ` : html`
      <pfe-accordion on="dark" color-palette="darkest">${children.map((child, index) => staticHtml`
        <pfe-accordion-${unsafeStatic(child.type)}>
          <slot name="links-${index}"></slot>
         </pfe-accordion-${unsafeStatic(child.type)}>`)}
      </pfe-accordion>
    `;
  }

  /**
   * Get any `<ul>`s that are in the designated link slots
   * and syncronously update each list and header if we need to.
   */
  public updateAccessibility(): void {
    const listsSelector = ':is([slot^=links],[slot=footer-links-primary],[slot=footer-links-secondary]):is(ul)';
    for (const list of this.querySelectorAll(listsSelector)) {
      // if we already have a label then we assume that the user
      // has wired this up themselves.
      if (!list.hasAttribute('aria-labelledby')) {
        // get the corresponding header that should be the previous sibling
        const header = isHeader(list.previousElementSibling?.tagName ?? '') ? list.previousElementSibling : null;
        if (!header) {
          return this.#logger.warn('This links set doesn\'t have a valid header associated with it.');
        } else {
          // add an ID to the header if we need it
          header.id ||= getRandomId('rh-footer');
          // add that header id to the aria-labelledby tagk
          list.setAttribute('aria-labelledby', header.id);
        }
      }
    }
  }
}
