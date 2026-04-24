import { LitElement, html, nothing, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { provide } from '@lit/context';
import { context } from './context.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import { RhNavigationPrimaryItem } from './rh-navigation-primary-item.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-navigation-primary.css' with { type: 'css' };

export type NavigationPrimaryPalette = Extract<ColorPalette, (
  | 'lightest'
  | 'darkest'
)>;

/**
 * Primary navigation provides a persistent bar for orienting users and
 * navigating across websites and domains. It groups primary links,
 * dropdown menus, event promotions, and utility actions into a single
 * responsive bar. There must not be more than one on a page. The element
 * uses the ARIA `navigation` landmark role and should have a unique
 * `accessible-label` when multiple navigation landmarks exist on the page,
 * so screen readers can distinguish between them. Keyboard users navigate
 * items with Tab/Shift+Tab and close open dropdowns with Escape.
 *
 * @summary Persistent bar for orienting users and navigating across sites
 *
 * @alias Navigation (primary)
 *
 */
@customElement('rh-navigation-primary')
@colorPalettes
@themable
export class RhNavigationPrimary extends LitElement {
  static readonly styles = [styles];

  // Setting role: navigation here will output role="navigation" prior to lit SSR hydration in the DSD.
  // When hydration runs it will then remove the role, which we then re-add in connectedCallback().
  // Note: Setting role here blocks the user from setting any other role on the rh-navigation host element.
  // IE: role="banner" for when the hamburger items are empty.
  #internals = InternalsController.of(this, { role: 'navigation' });

  #openPrimaryDropdowns = new Set<RhNavigationPrimaryItem>();

  #openSecondaryDropdowns = new Set<RhNavigationPrimaryItem>();

  #ro?: ResizeObserver;

  #hydrated = false;

  #slots = new SlotController(this,
                              'logo',
                              'summary',
                              'event',
                              'links',
                              'dropdowns',
                              null,
  );

  /**
   * We should start in compact mode (mobile first)
   * Later, after the element has fully hydrated, we can recompute
   * whether to use the compact layout based on the viewport
   * @internal
   */
  @provide({ context })
  @state() compact = true;

  @state()
  private _overlayOpen = false;

  @state()
  private _hamburgerOpen = false;

  @state()
  private _linksMenuOpen = false;

  @query('#hamburger')
  private _hamburger!: HTMLDetailsElement;

  @query('#links-menu')
  private _linksMenu!: HTMLDetailsElement;

  @query('#hamburger summary')
  private _hamburgerSummary!: HTMLElement;

  @query('#links-menu summary')
  private _linksMenuSummary!: HTMLElement;


  @query('#title')
  private _title!: HTMLHeadingElement;


  /**
   * Accessible label for the mobile hamburger toggle. Must be set when the
   * navigation is served in a non-English locale. Defaults to `'Menu'`.
   */
  @property({ attribute: 'mobile-toggle-label' }) mobileToggleLabel = 'Menu';

  /**
   * Accessible label for the mobile links (bento box) toggle. Must be set
   * when the navigation is served in a non-English locale. Defaults to
   * `'Explore Red Hat'`.
   */
  @property({ attribute: 'mobile-links-toggle-label' }) mobileLinksToggleLabel = 'Explore Red Hat';

  /**
   * Sets the color palette for the navigation and its child components.
   * Should only use `lightest` or `darkest` to match the page theme.
   * Defaults to `undefined` (inherits from the page color scheme).
   * Should not be set when user's color-scheme preference is respected.
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: NavigationPrimaryPalette;

  /**
   * Accessible label applied to the navigation landmark. Must be set when the
   * navigation is served in a non-English locale, and should be set when the
   * page contains multiple navigation landmarks, to provide unique identification
   * for assistive technology. Defaults to `'Main navigation'`.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'Main navigation';

  /**
   * Sets the visible sub-domain title displayed beside the Red Hat logo
   * lockup. Both `site-name` and `site-href` must be set to enable the
   * sub-domain variation; when either is missing the sub-domain area is
   * hidden. Defaults to `undefined`.
   */
  @property({ reflect: true, attribute: 'site-name' }) siteName?: string;

  /**
   * Sets the URL for the sub-domain title link. Both `site-href` and
   * `site-name` must be set to enable the sub-domain variation; when
   * either is missing the sub-domain area is hidden. Defaults to
   * `undefined`.
   */
  @property({ reflect: true, attribute: 'site-href' }) siteHref?: string;

  /**
   * Sets the `href` for the default logo link. Avoid changing this value
   * unless the site requires a non-root landing page for the logo. Defaults
   * to `'/'`.
   */
  @property({ attribute: 'logo-href' }) logoHref = '/';

  constructor() {
    super();
    if (!isServer) {
      // TODO: Perf look into debouncing the resize observer
      // or look into using style observer: https://www.bram.us/2025/02/24/solved-by-styleobserver-element-matchcontainer/?ref=dailydev
      // lea verou style observer: https://github.com/LeaVerou/style-observer/
      this.#ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const [contentBoxSize] = entry.contentBoxSize;
          const oldState = this.compact;
          const newState = contentBoxSize.inlineSize < 1200;
          if (oldState !== newState) {
            this.compact = newState;
            if (this.#openPrimaryDropdowns.size === 0
              && this.#openSecondaryDropdowns.size === 0 && !this.compact) {
              this.#closeOverlay();
            }
          }
          // Close links menu when container goes below 320px (where it's hidden via CSS)
          if (contentBoxSize.inlineSize < 320 && this._linksMenuOpen) {
            this.#closeLinksMenu();
          }
        }
      });
    }
  }

  protected firstUpdated(): void {
    // ensure we update initially on client hydration
    const _isHydrated = isServer && !this.hasUpdated;
    if (!_isHydrated) {
      this.#hydrated = true;
      this.compact = this.offsetWidth < 1200;
      // Open links menu at desktop viewport
      if (!this.compact) {
        this._linksMenuOpen = true;
      }
    }
    if (!isServer) {
      if (this._title) {
        this.#internals.ariaLabelledByElements = [this._title];
      }
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      // We set this back to navigation due to axe automation tools not reading the element internals value
      // for the navigation.  This was made prior to our discovery of the bug in lit ssr hydration
      // https://github.com/lit/lit/pull/5115 that only removed some of the aria- attributes.
      // Moved inside the !isServer check as there still could be a race condition on ssr hydration that
      // connectedCallback() runs before hydration completes removing the reset role attribute.
      this.role = 'navigation';

      this.#ro?.observe(this);
      this.addEventListener('toggle', this.#onDropdownToggle);
      this.addEventListener('focusout', this.#onFocusout);
      this.addEventListener('keydown', this.#onKeydown);
      this.addEventListener('keyup', this.#onKeyup);
      this.#upgradeAccessibility();
    }
  }


  render() {
    const { compact } = this;
    const subdomain = !!(this.siteName && this.siteHref);
    const classes = {
      compact,
      dehydrated: !this.#hydrated,
      subdomain: subdomain,
    };

    const hasSlottedDefault = this.#slots.hasSlotted();
    const hasEvent = this.#slots.hasSlotted('event');
    const hasLinks = this.#slots.hasSlotted('links');
    const hasDropdowns = this.#slots.hasSlotted('dropdowns');

    return html`
      <h2 id="title" class="visually-hidden">${this.accessibleLabel}</h2>
      <div id="container" class="${classMap(classes)}">
        <div id="bar">
          <div id="lockup">
            <div id="logo">
              <!--
                Accepts an anchor element wrapping an inline SVG or \`<img>\` to
                override the default Red Hat logo. The slotted anchor should
                contain a \`<title>\` or \`alt\` text so screen readers can
                identify the brand link.
              -->
              <slot name="logo">
                <a href="${this.logoHref}">
                  <svg preserveAspectRatio="xMinYMid slice" viewBox="0 0 613 145" role="img">
                    <title>Red Hat</title>
                    <g id="fedora">
                      <path id="hat" fill="var(--rh-color-brand-red, #ee0000)" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"></path>
                      <path id="band" d="M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"></path>
                    </g>
                    <path id="wordmark" fill="light-dark(var(--rh-color-text-primary-on-light, #151515), var(--rh-color-text-primary-on-dark, #ffffff))" d="M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"></path>
                  </svg>
                </a>
              </slot>
            </div>
            <div id="sub-domain">
              ${subdomain ?
                html`<a href="${ifDefined(this.siteHref)}">${this.siteName}</a>`
                : nothing}
            </div>
          </div>
          <details id="hamburger" ?open="${this._hamburgerOpen}" @toggle="${this.#hamburgerToggle}" @focusout="${this.#onHamburgerFocusOut}" class="${classMap({ 'hidden': !hasSlottedDefault })}">
            <summary @blur="${this.#onHamburgerSummaryBlur}">
              <rh-icon icon="menu-bars" set="ui"></rh-icon>
              <div id="summary" class="visually-hidden">${this.mobileToggleLabel}</div>
            </summary>
            <div id="details-content" role="list">
              <!--
                Accepts \`<rh-navigation-primary-item>\` block elements for
                hamburger menu links and dropdowns. The parent container has
                \`role="list"\`, so slotted items must have \`role="listitem"\`
                for screen readers; \`rh-navigation-primary-item\` applies this
                automatically. Leaving this slot empty makes the hamburger
                menu inaccessible.
              -->
              <slot></slot>
            </div>
          </details>
          <div id="secondary">
            <div id="event" role="list" class="${classMap({ 'hidden': !hasEvent })}">
              <!--
                Accepts \`<rh-navigation-primary-item slot="event">\` block
                elements for event promotion such as conference logos. The
                parent has \`role="list"\`, so any other slotted element must
                include \`role="listitem"\` to avoid accessibility tree issues.
              -->
              <slot name="event"></slot>
            </div>
            <details id="links-menu" class="${classMap({ 'hidden': !hasLinks })}" ?open="${this._linksMenuOpen}" @toggle="${this.#linksMenuToggle}" @focusout="${this.#onLinksMenuFocusOut}">
              <summary @blur="${this.#onLinksMenuSummaryBlur}">
                <div id="links-menu-summary" class="visually-hidden">${this.mobileLinksToggleLabel}</div>
                <rh-icon icon="menu-switcher" set="ui"></rh-icon>
              </summary>
              <div id="links-menu-content" role="list">
                <!--
                  Accepts \`<rh-navigation-primary-item slot="links">\` block
                  elements for quick links to external sites (e.g., docs,
                  support). The parent has \`role="list"\`, so other slotted
                  elements must include \`role="listitem"\`.
                -->
                <slot name="links"></slot>
              </div>
            </details>
            <div id="dropdowns" role="list" class="${classMap({ 'hidden': !hasDropdowns })}">
              <!--
                Accepts \`<rh-navigation-primary-item slot="dropdowns"
                variant="dropdown">\` block elements for utility dropdowns
                (search, notifications, account). The parent has
                \`role="list"\`, so other slotted elements must include
                \`role="listitem"\`.
              -->
              <slot name="dropdowns"></slot>
            </div>
          </div>
        </div>
      </div>
      <div id="overlay"
           class="${classMap({ open: this._overlayOpen })}"
           @click="${this.#onOverlayClick}"
           @keydown="${this.#onOverlayClick}">
      </div>
    `;
  }

  /**
   * Upgrades the aria attributes on upgrade
   */
  #upgradeAccessibility(): void {
    this.#internals.ariaLabel = this.accessibleLabel;
  }

  #openOverlay() {
    this._overlayOpen = true;
  }

  #closeOverlay() {
    this._overlayOpen = false;
  }

  #onOverlayClick() {
    this.#closePrimaryDropdowns();
    this.#closeSecondaryDropdowns();

    if (this.compact) {
      this.#closeHamburger();
      this.#closeLinksMenu();
    }

    this.#closeOverlay();
  }

  #primaryItems(): RhNavigationPrimaryItem[] {
    return Array.from(
      this.querySelectorAll(
        'rh-navigation-primary-item:not([slot]), rh-navigation-link:not([slot])'
      )
    );
  }

  #openDropdownItems(): RhNavigationPrimaryItem[] {
    return Array.from(
      this.querySelectorAll(
        'rh-navigation-primary-item[variant="dropdown"][open]',
      )
    );
  }

  #secondaryLinksItems(): HTMLElement[] {
    return Array.from(
      this.querySelectorAll<HTMLElement>(
        ':is(rh-navigation-primary-item, rh-navigation-link)[slot="links"]',
      )
    );
  }


  async #onDropdownToggle(event: Event) {
    const item = event.target as RhNavigationPrimaryItem;
    // if the event came from a secondary link in a compact mode we'll want to close the hamburger first if it is open
    const slottedSecondary = this.#slots.getSlotted('links', 'dropdowns');
    const secondaryEventToggle = slottedSecondary.find(node =>
      node.isEqualNode(item));

    if (item.open) {
      this.#closePrimaryDropdowns(item);
      this.#closeSecondaryDropdowns();

      if (secondaryEventToggle) {
        if (this.compact) {
          this.#closeHamburger();
          this.#closeLinksMenu();
        }
        this.#openSecondaryDropdowns.add(item);
      } else {
        this.#openPrimaryDropdowns.add(item);
      }
      this.#openOverlay();
    } else {
      if (secondaryEventToggle) {
        this.#openSecondaryDropdowns.delete(item);
        if (this.#openSecondaryDropdowns.size === 0
          && (this.compact && !this._hamburgerOpen && !this._linksMenuOpen)) {
          this.#closeOverlay();
        }
      } else {
        this.#openPrimaryDropdowns.delete(item);
      }

      if (!this.compact
        && this.#openPrimaryDropdowns.size === 0
        && this.#openSecondaryDropdowns.size === 0) {
        this.#closeOverlay();
      }
    }
  }

  #hamburgerContains(item: Node): boolean {
    const primaryItems = this.#primaryItems();
    return primaryItems.some(pi => pi.contains(item));
  }

  #onHamburgerSummaryBlur(event: FocusEvent) {
    if (event.relatedTarget) {
      if (this.#hamburgerContains(event.relatedTarget as Node)) {
        return;
      }
      if (this.compact) {
        this.#closeHamburger();
      }
    }
  }

  #onHamburgerFocusOut(event: FocusEvent) {
    if (event.relatedTarget) {
      if (event.relatedTarget === this._hamburgerSummary) {
        return;
      }
      if (this.#hamburgerContains(event.relatedTarget as Node)) {
        return;
      }
      if (this.compact) {
        this.#closeHamburger();
      }
    }
  }

  #linksMenuContains(item: Node): boolean {
    return this.#secondaryLinksItems().some(li => li.contains(item));
  }

  #onLinksMenuSummaryBlur(event: FocusEvent) {
    if (event.relatedTarget) {
      if (this.#linksMenuContains(event.relatedTarget as Node)) {
        return;
      }
      if (this.compact) {
        this.#closeLinksMenu();
      }
    }
  }

  #onLinksMenuFocusOut(event: FocusEvent) {
    if (event.relatedTarget) {
      if (event.relatedTarget === this._linksMenuSummary) {
        return;
      }
      if (this.#linksMenuContains(event.relatedTarget as Node)) {
        return;
      }
      if (this.compact) {
        this.#closeLinksMenu();
      }
    }
  }

  async #onFocusout(event: FocusEvent) {
    const target = event.relatedTarget as HTMLElement;
    if (target?.closest('rh-navigation-primary') === this || target === null) {
      // if the focus is still inside the rh-navigation-secondary exit
      return;
    } else {
      this.close();
    }
  }

  #onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape': {
        this.#onEscDown();
        break;
      }
      default:
        break;
    }
  }

  #onKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case 'Tab': {
        this.#onTabUp(event);
        break;
      }
    }
  }

  #onEscDown() {
    if (this.#openPrimaryDropdowns.size > 0) {
      const [dropdown] = this.#openPrimaryDropdowns;
      dropdown.hide();
      dropdown.shadowRoot?.querySelector('summary')?.focus();
    } else if (this.#openSecondaryDropdowns.size > 0) {
      const [dropdown] = this.#openSecondaryDropdowns;
      dropdown.hide();
      dropdown.shadowRoot?.querySelector('summary')?.focus();
    } else if (this._hamburgerOpen && this.compact) {
      this.#closeHamburger();
      this._hamburger.querySelector('summary')?.focus();
    } else if (this._linksMenuOpen && this.compact) {
      this.#closeLinksMenu();
      this._linksMenu.querySelector('summary')?.focus();
    }
  }

  #onTabUp(event: KeyboardEvent) {
    // target is the element we are entering with tab up press
    const target = event.target as HTMLElement;
    if (!this.#openDropdownItems().some(item => item.contains(target))) {
      this.#closePrimaryDropdowns();
      this.#closeSecondaryDropdowns();
    }
  }

  #closePrimaryDropdowns(except?: RhNavigationPrimaryItem) {
    this.#openPrimaryDropdowns.forEach((dropdown: RhNavigationPrimaryItem) => {
      if (dropdown !== except) {
        dropdown.hide();
      }
    });
  }

  /** close all open dropdowns in secondary slot */
  #closeSecondaryDropdowns() {
    this.#openSecondaryDropdowns.forEach((dropdown: RhNavigationPrimaryItem) => {
      dropdown.hide();
    });
  }

  async #openHamburger() {
    if (!this._hamburger) {
      await this.updateComplete;
    }
    this._hamburgerOpen = true;
    this.requestUpdate();
    await this.updateComplete;
  }

  async #closeHamburger() {
    if (!this._hamburger) {
      await this.updateComplete;
    }
    this._hamburgerOpen = false;
    this.requestUpdate();
    await this.updateComplete;
  }

  #hamburgerToggle(event: Event) {
    if (event instanceof ToggleEvent) {
      if (event.newState === 'open') {
        this.#openHamburger();
        // close links menu when hamburger opens
        if (this.compact && this._linksMenuOpen) {
          this.#closeLinksMenu();
        }
        // if we are compact mode and any secondary link dropdowns are open, close them
        if (this.compact && this.#openSecondaryDropdowns.size > 0) {
          this.#closeSecondaryDropdowns();
        }
        if (this.compact) {
          this.#openOverlay();
        }
      } else {
        this.#closeHamburger();
        if (this.#openPrimaryDropdowns.size > 0) {
          this.#closePrimaryDropdowns();
        }
        if (this.compact && this.#openSecondaryDropdowns.size === 0 && !this._linksMenuOpen) {
          this.#closeOverlay();
        }
      }
    }
  }

  #linksMenuToggle(event: Event) {
    if (event instanceof ToggleEvent) {
      if (event.newState === 'open') {
        this.#openLinksMenu();
        // close hamburger menu when links menu opens
        if (this.compact && this._hamburgerOpen) {
          this.#closeHamburger();
        }
        // close any open secondary dropdowns when links menu opens
        if (this.compact && this.#openSecondaryDropdowns.size > 0) {
          this.#closeSecondaryDropdowns();
        }
        // Only open overlay in compact (mobile) mode
        if (this.compact) {
          this.#openOverlay();
        }
      } else {
        this.#closeLinksMenu();
        if (this.compact && this.#openSecondaryDropdowns.size === 0 && !this._hamburgerOpen) {
          this.#closeOverlay();
        }
      }
    }
  }

  async #openLinksMenu() {
    if (!this._linksMenu) {
      await this.updateComplete;
    }
    this._linksMenuOpen = true;
    this.requestUpdate();
    await this.updateComplete;
  }

  async #closeLinksMenu() {
    if (!this._linksMenu) {
      await this.updateComplete;
    }
    this._linksMenuOpen = false;
    this.requestUpdate();
    await this.updateComplete;
  }

  @observes('compact')
  protected compactChanged(oldVal: boolean, newVal: boolean) {
    // transition into desktop
    if (oldVal && !newVal) {
      this.#openHamburger();
      this.#openLinksMenu();
    }
    // transition into compact
    if (!oldVal && newVal) {
      if (this.#openPrimaryDropdowns.size === 0) {
        this.#closeHamburger();
      }
      this.#closeLinksMenu();
    }
  }

  /**
   * Close Menus
   * @param skip Boolean - closes hamburger menu if true and in a small viewport, default false;
   */
  close(skip = false): void {
    if (this.#openPrimaryDropdowns.size > 0) {
      this.#closePrimaryDropdowns();
    } else if (this.#openSecondaryDropdowns.size > 0) {
      this.#closeSecondaryDropdowns();
    }
    if (this.compact && !skip) {
      this.#closeHamburger();
      this.#closeLinksMenu();
    }
    this.#closeOverlay();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary': RhNavigationPrimary;
  }
}
