import { LitElement, html } from 'lit';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
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

import '@patternfly/pfe-icon';
import '@patternfly/pfe-accordion';

function isHeader(tagName: string) {
  return !!tagName.match(/^H[1-6]$/i);
}

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
                    <slot name="social-links">
                      <rh-footer-links class="social-links-item"
                          part="social-links-item"
                          aria-label="Red Hat social media links">
                        <slot name="social-links-start"></slot>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-linkedin">
                          <a href="#LinkedIn">LinkedIn</a>
                        </rh-footer-social-link>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-youtube">
                          <a href="#Youtube">Youtube</a>
                        </rh-footer-social-link>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-facebook">
                          <a href="#Facebook">Facebook</a>
                        </rh-footer-social-link>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-twitter">
                          <a href="#Twitter">Twitter</a>
                        </rh-footer-social-link>
                        <slot name="social-links-end"></slot>
                      </rh-footer-links>
                    </slot>
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
          <div class="section footer" part="section footer">
            <slot name="footer">
              <div class="footer-logo" part="footer-logo">
                <slot name="footer-logo">
                  <a class="footer-logo-anchor"
                      part="footer-logo-anchor"
                      href="/en"
                      alt="Visit Red Hat">
                    <svg title="Red Hat logo"
                        class="footer-logo-image"
                        part="footer-logo-image"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192 145">
                      <defs>
                        <style>
                          .band {
                            fill: transparent;
                          }
                        </style>
                      </defs>
                      <path class="band" d="M157.77,62.61a14,14,0,0,1,.31,3.42c0,14.88-18.1,17.46-30.61,17.46C78.83,83.49,42.53,53.26,42.53,44a6.43,6.43,0,0,1,.22-1.94l-3.66,9.06a18.45,18.45,0,0,0-1.51,7.33c0,18.11,41,45.48,87.74,45.48,20.69,0,36.43-7.76,36.43-21.77,0-1.08,0-1.94-1.73-10.13Z" />
                      <path class="cls-1" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78" />
                    </svg>
                  </a>
                </slot>
              </div>
              <div class="footer-primary" part="footer-primary">
                <slot name="footer-primary">
                  <div class="footer-primary-start" part="footer-primary-start">
                    <slot name="footer-primary-start"></slot>
                  </div>
                  <div class="footer-links-primary" part="footer-links-primary">
                    <slot name="footer-links-primary"></slot>
                  </div>
                  <div class="footer-primary-end" part="footer-primary-end">
                    <slot name="footer-primary-end"></slot>
                  </div>
                </slot>
              </div>
              <div class="spacer" part="spacer"></div>
              <div class="footer-secondary" part="footer-secondary">
                <slot name="footer-secondary">
                  <div class="footer-secondary-start" part="footer-secondary-start">
                    <slot name="footer-secondary-start"></slot>
                  </div>
                  <div class="footer-links-secondary" part="footer-links-secondary">
                    <slot name="footer-links-secondary"></slot>
                  </div>
                  <div class="footer-secondary-end" part="footer-secondary-end">
                    <slot name="footer-secondary-end"></slot>
                  </div>
                </slot>
              </div>
              <div class="footer-tertiary" part="footer-tertiary">
                <slot name="footer-tertiary"></slot>
              </div>
            </slot>
          </div>
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
