import type { ColorPalette } from '@patternfly/pfe-core';

import { LitElement, html } from 'lit';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';

import { colorContextProvider } from '@patternfly/pfe-core/decorators.js';
import { pfelement } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import style from './rh-footer.css';
import { responsiveStyles } from './rh-footer-responsive.css.js';

import { tabletLandscapeBreakpoint } from '../../lib/tokens.js';
// TODO: upstream to PFE
import { MatchMediaController } from '../../lib/MatchMediaController.js';

import './rh-footer-social-link.js';
import './rh-footer-links.js';
import './rh-footer-block.js';
import './rh-footer-copyright.js';
import './rh-global-footer.js';

import '@patternfly/pfe-icon';
import '@patternfly/pfe-accordion';

function isHeader(tagName: string) {
  return !!tagName.match(/^H[1-6]$/i);
}

/**
 * @element 'rh-footer'
 * @slot    base
 * @csspart base
 * @slot    header
 * @csspart header
 * @slot    header-primary
 * @csspart header-primary
 * @slot    header-secondary
 * @csspart header-secondary
 * @slot    logo
 * @csspart logo
 * @slot    social-links
 * @csspart social-links
 * @slot    social-links-start
 * @csspart social-links-start
 * @slot    social-links-end
 * @csspart social-links-end
 * @slot    main
 * @csspart main
 * @slot    main-primary
 * @csspart main-primary
 * @slot    main-secondary
 * @csspart main-secondary
 * @slot    footer
 * @csspart footer
 * @slot    footer-logo
 * @csspart footer-logo
 * @slot    footer-primary
 * @csspart footer-primary
 * @slot    footer-primary-start
 * @csspart footer-primary-start
 * @slot    footer-primary-end
 * @csspart footer-primary-end
 * @slot    footer-secondary
 * @csspart footer-secondary
 * @slot    footer-secondary-start
 * @csspart footer-secondary-start
 * @slot    footer-secondary-end
 * @csspart footer-secondary-end
 * @slot    footer-links-primary
 * @csspart footer-links-primary
 * @slot    footer-links-secondary
 * @csspart footer-links-secondary
 * @slot    footer-tertiary
 * @csspart footer-tertiary
 */
@pfelement()
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

  private logger = new Logger(this);

  protected matchMedia = new MatchMediaController(this, `(max-width: ${tabletLandscapeBreakpoint})`, {
    onChange: ({ matches }) =>
      this.isMobile = matches,
  });

  @property({ type: Boolean, reflect: true, attribute: 'is-mobile' }) isMobile = false;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'darker';

  connectedCallback() {
    super.connectedCallback();
    // wire up accessbility aria-lables with unordered lists
    this.updateAccessibility();
  }

  render() {
    return html`
      <footer class="base" part="base">
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
                      part="social-links-item"
                      aria-label="Red Hat social media links">
                      <slot name="social-links">
                        <slot name="social-links-start"></slot>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-linkedin">
                          <a href="http://www.linkedin.com/company/red-hat">LinkedIn</a>
                        </rh-footer-social-link>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-youtube">
                          <a href="http://www.youtube.com/user/RedHatVideos">Youtube</a>
                        </rh-footer-social-link>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-facebook">
                          <a href="https://www.facebook.com/redhatinc">Facebook</a>
                        </rh-footer-social-link>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-twitter">
                          <a href="https://twitter.com/RedHat">Twitter</a>
                        </rh-footer-social-link>
                        <slot name="social-links-end"></slot>
                      </slot>
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
                    ${this.renderLinksTemplate()}
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

  private renderLinksTemplate() {
    // gather all of the links that need to be wrapped into the accordion
    // give them a designation of either 'header' or 'panel'
    const children = Array.from(this.querySelectorAll(':scope > [slot^=links]'), ref => ({
      type: isHeader(ref.tagName) ? 'header' : 'panel',
      ref,
    }));

    // Update the dynamic slot names if on mobile
    children.forEach(({ ref }, i) => ref.setAttribute('slot', this.isMobile ? `links-${i}` : 'links'));

    return !(this.isMobile && children) ? html`
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
          return this.logger.warn('This links set doesn\'t have a valid header associated with it.');
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
