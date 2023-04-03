# @rhds/elements

## 1.0.0

### Major Changes

- acbb034d: `<rh-navigation-secondary>`: renamed `rh-secondary-nav` to
  `rh-navigation-secondary`

  - Renamed all sub components `rh-secondary-nav-*` to `rh-navigation-secondary-*`
  - Renamed all css custom properties `--rh-secondary-nav-*` to `--rh-navigation-secondary-*`
  - Deprecated usage of `rh-secondary-nav-*` tags

- 16f2cf09: **Color Context**: Removed deprecated context tokens
- 8f533e50: ✨ Added `<rh-cta>`.

  A Call to Action is a styled link that directs a user to other pages or
  sometimes displays hidden content.

  ```html
  <rh-cta>
    <a href="/subscribe">Subscribe</a>
  </rh-cta>
  ```

  **Color Contrast**: added color context decorators and controllers.

- 96731e4c: 💱 Renamed `<rh-global-footer>` to `<rh-footer-universal>`
  💱 `<rh-footer>`: Renamed the `global` slot to `universal`

  Until the next major release, `<rh-global-footer>` will continue to work as an
  alias of `<rh-footer-universal>`, and the `global` slot will continue to work as
  the default content of the `universal` slot.

- 58831e00: ✨ Added `<rh-global-footer>` standalone component.

  Global footer only

  ```html
  <rh-global-footer> ... </rh-global-footer>
  ```

  Usage in <rh-footer>

  ```html
  <rh-footer>
    ...
    <rh-global-footer slot="global">...</rh-global-footer>
  </rh-footer>
  ```

  Adds font-size initial and em values instead of px values for a11y.
  Allow user stylesheet to increase and decrease font-size.

  https://github.com/RedHat-UX/red-hat-design-system/issues/312

  Fixes double border on mobile.

  https://github.com/RedHat-UX/red-hat-design-system/issues/392

  Removes `is-mobile` attribute

- 80c58924: `<rh-navigation-secondary>`: fixed incorrect color map for dark variant
  `color-palette="darker"` to `color-palette="dark"`
- 0266dd0f: `<rh-secondary-nav>`: removed the `main` boolean attribute in favour of
  `aria-label`.

  If before you used the `main` boolean attribute to set the `aria-label` of the
  shadow navigation, now, just use `aria-label` on the host.

  BEFORE:

  ```html
  <rh-secondary-nav role="navigation">
    <!-- shadow label for nav is "secondary" -->
  </rh-secondary-nav>
  <rh-secondary-nav role="navigation" main>
    <!-- shadow label for nav is "main" -->
  </rh-secondary-nav>
  ```

  AFTER:

  ```html
  <rh-secondary-nav role="navigation">
    <!-- shadow label for nav is "secondary" -->
  </rh-secondary-nav>
  <rh-secondary-nav role="navigation" aria-label="Hlavná">
    <!-- shadow label for nav is "Hlavná" -->
  </rh-secondary-nav>
  ```

- 80c58924: `<rh-secondary-nav>`: replaced `variant="dark"` attribute with
  `color-palette="darker"`
- 5841b46b: `<rh-footer>`: removed the side-effect free `RhFooter.js` module.

  If you were relying on this to extend `RhFooter`, instead import from `rh-footer.js` or use `whenDefined`, Note that `rh-footer` will be registered already, so choose a new custom element name.
  BEFORE:

  ```js
  import { RhFooter } from "@rhds/elements/rh-footer/RhFooter.js";
  ```

  AFTER:

  ```js
  import { RhFooter } from "@rhds/elements/rh-footer/rh-footer.js";
  ```

  or

  ```js
  const RhFooter = await customElements.whenDefined("rh-footer");
  ```

  **NOTE**: `<rh-footer>` is carefully developed to adhere to brand guidelines. If you find that your project has need to `extend RhFooter`, please reach out to the design systems team, so that we can work with you to use `<rh-footer>` as-is.

### Minor Changes

- 172bacfb: ✨ Added `<rh-spinner>`.

  Spinner consists of an animated circle and sometimes a message, and it indicates
  that a section is loading.

  ```html
  <rh-spinner> Loading... </rh-spinner>
  ```

- e40e87dc: ✨ Added `<rh-button>`.

  Button is a form-associated custom element. Buttons allow users to
  perform an action when triggered. They feature a text label, a background or a
  border, and icons.

  ```html
  <rh-button>Submit</rh-button>
  ```

- 99cf19e9: ✨ Added `<rh-tag>`.

  A tag is an inline-block element component that provides a distinct visual style for metadata in a UI. Supports adding icon by attribute or slotted.

  ```html
  <rh-tag>Content</rh-tag>
  ```

- ba05def7: ✨ Added `<rh-blockquote>`.

  Displays a quote with author's name and title.

  ```html
  <rh-blockquote>
    <p slot="quote">
      In open source, we feel strongly that to really do something well, you
      have to get a lot of people involved.
    </p>
    <span slot="author">Linus Torvalds</span>
    <span slot="title">Software Engineer</span>
  </rh-blockquote>
  ```

- 4725692d: `<rh-footer>`: fixed sidegap spacing, introduced a new CSS custom property `--rh-footer-section-side-gap`.

  ```css
  rh-footer.custom-gap {
    /* use a larger gap in the footer */
    --rh-footer-section-side-gap: var(--rh-space-xl);
  }
  ```

- 5376e551: ✨ Added `<rh-subnav>`.

  The subnav component is used when an alternate navigation structure is needed to provide additional navigatation on a site that does not need the product branding or structural depth that `rh-secondary-nav` provides

  ```html
  <rh-subnav>
    <a href="#">Users</a>
    <a href="#">Containers</a>
    <a href="#">Databases</a>
    <a href="#" active>Servers</a>
    <a href="#">System</a>
    <a href="#">Network</a>
    <a href="#">Cloud</a>
  </rh-subnav>
  ```

- 0ed6700c: ✨ Added `<rh-tabs>`.

  A tab set of layered content, including tab widgets and their associated tab
  panel. When a tab is activated, the associated panel content becomes visible.
  Tabs automatically display their panel when they receive focus.

  ```html
  <rh-tabs>
    <rh-tab>Tab 1</rh-tab>
    <rh-tab-panel>Panel 1</rh-tab-panel>
    <rh-tab>Tab 2</rh-tab>
    <rh-tab-panel>Panel 2</rh-tab-panel>
  </rh-tabs>
  ```

- de7fd69b: ✨ Added `<rh-context-provider>`.

  Component meant to be used internally within rh-elements shadow templates or
  demos to override colour context.

  `<rh-dialog>`:

  - [fixed][overrides] the colour context overrides for slotted content.
  - renamed the `variant` attribute to `type`.

  [overrides]: https://github.com/patternfly/patternfly-elements/pull/2036#issuecomment-1134460631

- f58c607e: ✨ Added `<rh-accordion>`.

  Accordion displays multiple, related disclosure widgets.

  ```html
  <rh-accordion>
    <rh-accordion-header>
      <h2>Item One</h2>
    </rh-accordion-header>
    <rh-accordion-panel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </rh-accordion-panel>
    <rh-accordion-header>
      <h2>Item Two</h2>
    </rh-accordion-header>
    <rh-accordion-panel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </rh-accordion-panel>
    <rh-accordion-header>
      <h2>Item Three</h2>
    </rh-accordion-header>
    <rh-accordion-panel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </rh-accordion-panel>
  </rh-accordion>
  ```

- b8af17ca: ✨ Added `<rh-alert>`.

  An alert displays auxiliary information on a website. An alert can have one of
  several states of severity.

  ```html
  <rh-alert>
    <h3 slot="header">Default</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
      elit sed est egestas, a sollicitudin mauris tincidunt.
    </p>
    <button slot="actions" data-action="dismiss">Dismiss</button>
    <button slot="actions" data-action="confirm">Confirm</button>
  </rh-alert>
  ```

- 110def91: ✨ Added `<rh-avatar>`

  An Avatar is a placeholder graphic for a photo or an image that is placed to the
  left or on top of text.

  ```html
  <rh-avatar
    name="Grace Hopper"
    subtitle="Rear Admiral"
    src="hopper.jpg"
  ></rh-avatar>
  ```

- b625710c: ✨ Added `<rh-footer>`.

  ```html
  <rh-footer>
    <a slot="logo" href="/en">
      <img
        alt="Red Hat logo"
        src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"
      />
    </a>
    <rh-footer-social-link slot="social-links-end" icon="web-icon-github">
      <a aria-label="Github" href="#github">Github</a>
    </rh-footer-social-link>
    <h3 slot="links">Products</h3>
    <ul slot="links">
      <li><a href="#">Red Hat Ansible Automation Platform</a></li>
      <li><a href="#">Red Hat Enterprise Linux</a></li>
      <li><a href="#">Red Hat OpenShift</a></li>
      <li><a href="#">Red Hat OpenShift Container Storage</a></li>
      <li><a href="#">Red Hat OpenStack Platform</a></li>
      <li><a href="#">See all products</a></li>
    </ul>
    <h3 slot="links">Tools</h3>
    <ul slot="links">
      <li><a href="#">My account</a></li>
      <li><a href="#">Customer support</a></li>
      <li><a href="#">Red Hat OpenShift</a></li>
      <li><a href="#">Contact training</a></li>
      <li><a href="#">Red Hat OpenStack Platform</a></li>
      <li><a href="#">See all products</a></li>
    </ul>
    <rh-footer-block slot="main-secondary">
      <h3 slot="header">About Red Hat</h3>
      <p>
        We’re the world’s leading provider of enterprise open source
        solutions―including Linux, cloud, container, and Kubernetes. We deliver
        hardened solutions that make it easier for enterprises to work across
        platforms and environments, from the core datacenter to the network
        edge.
      </p>
    </rh-footer-block>
    <rh-footer-block slot="main-secondary">
      <h3 slot="header">Subscribe to our free newsletter, Red Hat Shares</h3>
      <rh-cta><a href="#blocks">Sign up now</a></rh-cta>
    </rh-footer-block>
    <h3 slot="footer-links-primary" hidden>Red Hat legal and privacy links</h3>
    <ul slot="footer-links-primary">
      <li><a href="#">About Red Hat</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Locations</a></li>
      <li><a href="#">Contact Red Hat</a></li>
      <li><a href="#">Red Hat Blog</a></li>
      <li><a href="#">Cool Stuff Store</a></li>
      <li><a href="#">Diversity, equity, and inclusion</a></li>
    </ul>
    <rh-footer-copyright slot="footer-links-secondary"></rh-footer-copyright>
  </rh-footer>
  ```

- 86d075e8: `<rh-secondary-nav>`: match the default color-palette to design spec, use token
  color values
- c677b9e8: ✨ Added `<rh-pagination>`.

  Pagination is a web component for navigating paginated content.

  ```html
  <rh-pagination>
    <ol>
      <li><a href="#">1</a></li>
      <li><a href="#2">2</a></li>
      <li><a href="#3">3</a></li>
      <li><a href="#4">4</a></li>
      <li><a href="#5">5</a></li>
    </ol>
  </rh-pagination>
  ```

  Read more on the [Pagination docs](https://ux.redhat.com/elements/pagination/)

- 32489905: ✨ Added `<rh-stat>`.

  An element which can be used to display statistics inside of an app.

  ```html
  <rh-stat size="large" icon="rh-atom">
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description"
      >Stat body text that includes two lines and a footnote<sup>2</sup></span
    >
  </rh-stat>
  ```

- ffc4dddf: ✨ Added `<rh-badge>`.

  A badge is used to annotate other information with numerical content.

  ```html
  <rh-badge number="1">1</rh-badge>
  ```

- 8edb3df8: ✨ Added `<rh-secondary-nav>`.

  A non-primary navigation for products and subcategory pages.

  ```html
  <rh-secondary-nav role="navigation">
    <a href="#" slot="logo">Logo</a>
    <ul slot="nav">
      <li><a href="#">Link 1</a></li>
      <li>
        <rh-secondary-nav-dropdown>
          <a slot="link">Link 2</a>
          <rh-secondary-nav-menu slot="menu">
            <rh-secondary-nav-menu-section>
              <h3 slot="header">Title of Links</h3>
              <ul slot="links">
                <li><a href="#">Link 2.1</a></li>
                <li><a href="#">Link 2.2</a></li>
              </ul>
            </rh-secondary-nav-menu-section>
          </rh-secondary-nav-menu>
        </rh-secondary-nav-dropdown>
      </li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </rh-secondary-nav>
  ```

  lib: renamed `RHDSScreenSizeController` to `ScreenSizeController`.
  lib: updated `matchMedia()` breakpoints in `ScreenSizeController` to use
  `min-width` values for standard breakpoints

- b940eab4: ✨ Added `<rh-tooltip>`.

  A tooltip displays floating content next to a portion of inline content.

  ```html
  <p>
    Red Hat Design System is an interoperable
    <rh-tooltip position="top">
      <rh-icon icon="info" aria-label="information"></rh-icon>
      <span slot="content"
        >Interoperable components work in any frontend framework, or none</span
      >
    </rh-tooltip>
    set of components with Red Hat branding guidelines built in.
  </p>
  ```

- 0703a7ea: `<rh-tooltip>`: improved performance and removed need for `process.env.NODE_ENV`
- e59eceab: ✨ Added `ScreenSizeController`

  ```js
  import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

  export class RhPagination extends LitElement {

    #screenSize = new ScreenSizeController(this);

    render() {
      const { mobile, size } = this.#screenSize;
      return html`
      <div id="container" class=${classMap({ mobile, [size as string]: true })}>
        ...
      </div>
      `
    }
  }
  ```

### Patch Changes

- aa2d5b40: `<rh-tooltip>`: calculated the tooltip offset when the element is first updated
- 1f196b58: `<rh-stat>`: fixed several bugs
  - **BREAKING**: removed `@pfelement` decorator
  - **BREAKING**: removed `is-mobile` attribute
  - **BREAKING**: removed `description` slot, replace with anonymous slot
  - replaced internal `MatchMediaController` with `ScreenSizeController`
  - documented slots and css properties
  - hid empty slots
  - made `updateIcons` method private, and refactor it to run on slot
    change and affect only the icon slotted into `icon`
  - initialized properties in class field initializers
- b627f538: `<rh-secondary-nav>`: fixed bugs:
  - Moved overflow from mobile menu list to outer container
  - Fixed border on dark variant in compact view
- 139044fe: `<rh-secondary-nav>`: added `mobile-menu` slot to allow for translations, RTL
  support.
- 84da26fd: `<rh-footer>`: corrected href for footer logo links. They were incorrectly pointing
  to the `href="/en"` url. They have been changed to `href="/"`.
- fd78f884: `<rh-footer>`: fixed styles when used on redhat.com
- 86d075e8: **Color Context**: added missing `light` color palette option
- aa2d5b40: `<rh-blockquote>`: added colour context and updated style tokens
- b7aa79aa: **Color Context**: added `attribute` option to `@colorContextConsumer` (defaults
  to `false`), allowing elements to make their context private to the shadow DOM.
- da26ab31: `<rh-alert>`: clicking close button now removes the element.
- d36937b3: `<rh-button>`: improved readability of `<rh-button danger>` in dark color contexts.
- 41e27ddc: `<rh-tag>`: fixed styles and tests connected with upstream changes in `BaseLabel`
- 2831b7e5: Improves page-loading performance of individual elements
- 4d5a5385: `<rh-secondary-nav>`: updated demos
- 96453bf6: `<rh-navigation-secondary>`: realigned `color-palette` default to new surface
  token values
- eea1ec17: `<rh-footer>`: prevent warnings in certain JavaScript frameworks
- 94eeec07: `<rh-global-footer>`: fixed logo links, as per `<rh-footer>`
- 17d5bf87: `<rh-footer>`: fixed primary columns not being equal.
- 185df893: **Color Context**: fixed context features, making sure they update the host
  element.
- b6cd5137: `<rh-footer>`: fixed several bugs:
  - secondary start slot not being used but still showing gap #488
  - two column breakpoint on global footer not present #496
  - tertiary slot in global footer has a margin-start padding that needs to be removed #498
  - reduce the spacing beneath the primary footer nav / language switcher to match the xd #499
    - corrected the margin at Tablet, landscape breakpoint to 64px
  - add max-width on footer-block child elements #524
  - social icon size changed to 24px down from 28px (band aide) #525
  - add no-js styles to reduce flash of unstyled content before upgrade #543
  - remove Summit logo #534
  - ensure blocks in main secondary are flush to the top of the region
  - header colors are being overwritten by base styles. #563
- 9bf77eb7: `<rh-subnav>`: Added `rh-subnav-lightdom.css` to reduce layout shift before element is defined
- db3c6af1: `<rh-spinner>`: made color context implementation private (removed `on`
  attribute).
- ac4ef8fc: `<rh-footer>`: main footer logo fills height first
- e2d0e2a8: `<rh-cta>`: ensured that arrow in default CTAs is aligned to the end of the last line of text
- 54a2bbcc: `<rh-alert>`: fixed empty footer actions container still taking up blockwise
  space.
- 52476709: `<rh-footer>`: fixed several bugs:
  - links should be styled to match dark context colors. #307
  - `social-links` slot should not override the `social-links` internal
    `rh-footer-links`
  - `social-links` hrefs should point to the default RHDC links
- ee8e16d1: `<rh-secondary-nav>`: updated styles for `rh-context-provider` in shadowroot to
  ensure cta centering.

  **Color Context**: added `light` and `dark` context-color css rules to match
  surface tokens `--rh-color-surface-light` and `--rh-color-surface-dark`

- d46168fe: `<rh-subnav>`:
  - Applies `!important` to ensure slotted links styles
- 99a1e142: `<rh-secondary-nav>`:
  - Removed component scaling with user font size preference by replacing em based spacers with space tokens.
  - Updated font-family stacks with font tokens
  - Fixed nav bar height not adjusting when logo text wraps to 3 lines
  - Fixed button background on color-palette="darker"
  - Fixed focus out handler bug closing menu when clicking on flyout menu
- b04d8c8f: chore: included lib directory in npm package.
- 09996556: `<rh-cta>`: fixed layout when using the `icon` attribute
- 1a6cfee7: chore: added missing `tslib` dependency
- c6d26a43: `<rh-footer>`: added TypeScript types for the `rh-footer` tag name.
- ce2ce34a: chore: added missing development dependencies
- 750f451a: Added support for PFE 2.0 icon color in rh-footer
- fe8f11f6: `<rh-stat>`: fixed dark theme font color contrast.
- 42331698: Fixed nested colour contexts
- 7f1ae4a8: `<rh-footer>`: fix typography in various page contexts ([#790][issue])

  [issue]: https://github.com/RedHat-UX/red-hat-design-system/issues/790

- d6de21ae: chore:
  - added tsconfig to pfeDevServerConfig in `web-dev-server.config.js` and `web-test-runner.config.js`
  - unpinned pfe-tools version.
- 3d579793: **Color**: replace "danger" red colors with non-brand reds
- 9229f99a: `<rh-alert>`: prevent page styles from overriding component styles
- e40e87dc: `<rh-context-provider>`: notify children of context when adding them using javascript.
- e40e87dc: `<rh-context-provider>`: set color context, rather than palette, on consumers
- 33aa1846: `<rh-cta>`: ensure slotted links are clickable
- b02d46c5: `<rh-footer-universal>`: improves layout of copyright statement
- 54ce28ab: `<rh-footer>`: improved loading performance for minified bundles
- 15b1100c: `<rh-footer>`: fixed layout at exactly 992px screen width
- f2cb6393: `<rh-footer>`: improved support for screen readers
- f2cb6393: `<rh-footer-universal>`: improved support for screen readers
- 94b43fcc: `<rh-footer-universal>`: improved accessibility for screen reader users, and others
- 694fd26b: `<rh-alert>`: fixed typography and description margins, and added a cursor style
  for the slotted actions.
- 6f29b7ca: `<rh-alert>`: used design tokens for icon dimensions
- 0d802409: css:

  - added missing `font-family` stacks when base css isn't applied
  - [Red Hat Design Tokens][tokens] for font family stacks

  * fixed a regression in spacing for slotted `<rh-cta>`

  [tokens]: https://github.com/redhat-ux/red-hat-design-tokens/

- 57f660c4: `<rh-cta>`: made color context implementation private (removed `on` attribute).
- 69abc30a: minor fixes:
  - included lightdom styles in the package.
  - prevented custom element double-registration by removing PFE dependencies.
- 620b59a2: chore: shipped the files in `lib` to npm
- e36bf5c6: `<rh-accordion>`: prevented unwanted scrollbars from appearing in headers
- b23a8038: `<rh-tooltip>`: fixed tooltips on dark contexts
- 38a788cf: `<rh-alert>`,
  `<rh-cta>`,
  `<rh-footer>`,
  `<rh-secondary-nav>`,
  `<rh-stat>`: added [Red Hat Design Tokens][tokens].

  `<rh-cta>`: fixed layout styles.

  `<rh-footer>`:

  - fixed primary links grid gap spacing on desktop
  - added parts for accordion header/panel

  [tokens]: https://red-hat-design-tokens.netlify.app

- 2efcf306: `<rh-secondary-nav>`:
  - fixed the nav level slotted cta color context when viewed in a mobile nav dropdown
  - fixed `:hover` color for dark variant logo text
- 448e4543: `<rh-footer>`: fixed a console error which would fire if the icon was not found
- d7af0721: `<rh-secondary-nav>`: updated documentation
- 9087c137: `<rh-footer>`: reduce bundle size when loading footer with other RHDS elements
- ccd0e376: `<rh-accordion>`: fixed double border on expanded state
- ccd0e376: `<rh-footer>`: fixed accordion styles at mobile screen sizes ([#707][issue])

  [issue]: https://github.com/RedHat-UX/red-hat-design-system/issues/707

- 6f8c8e79: `<rh-footer>`: fixed representation of social media links list for assistive technologies
- 399bca02: `<rh-cta>`: made inner border visible in focus and active states
- c269740d: `<rh-tabs>`: fixed color context default values
- ba3e8474: `<rh-footer>`: grid areas show gap regardless of existing ([#575][issue]).

  [issue]: https://github.com/RedHat-UX/red-hat-design-system/issues/575

- a76169e3: added the `lib/` directory to the exports in `package.json`.
  Users can now do things like import controllers into their own projects:

  ```js
  import { ScreenSizeController } from "@rhds/elements/lib/ScreenSizeController.js";
  ```

- 73a4a9ef: `<rh-footer>`: update icons
- 52b9fce3: `<rh-subnav>`: improved accessibility for keyboard users
- c38202a3: `<rh-spinner>`: added tokens to standardize styling for slotted text
- c0001bcf: `<rh-secondary-nav>`: update build dependencies
- 4f52fbb5: `<rh-tooltip>`: improved screen reader support
- 034e28d4: `<rh-blockquote>`: added [Red Hat Design Tokens][tokens].

  [tokens]: https://red-hat-design-tokens.netlify.app

- d2e77b5b: `<rh-tooltip>`: removed `on` attribute
- 21da484a: `<rh-accordion>`: fixed styles for RTL languages.
- 3edd725f: `<rh-cta>`: fixed styles
- b7aa79aa: `<rh-stat>`: fixed `icon` slot and attribute
- 7001943c: `<rh-cta>`: hide arrow from assistive tech

## 1.0.0-beta.34

### Patch Changes

- d46168fe: `<rh-subnav>`:
  - Applies `!important` to ensure slotted links styles
- fd3e0663: Removed undocumented `rh-demo` element

## 1.0.0-beta.33

### Major Changes

- acbb034d: Renamed `rh-secondary-nav` to `rh-navigation-secondary`

  - Renamed all sub components `rh-secondary-nav-*` to `rh-navigation-secondary-*`
  - Renamed all css custom properties `--rh-secondary-nav-*` to `--rh-navigation-secondary-*`
  - Deprecated usage of `rh-secondary-nav-*` tags

### Minor Changes

- 5376e551: :sparkles: Added `<rh-subnav>`.

  The subnav component is used when an alternate navigation structure is needed to provide additional navigatation on a site that does not need the product branding or structural depth that `rh-secondary-nav` provides

  ```html
  <rh-subnav>
    <a href="#">Users</a>
    <a href="#">Containers</a>
    <a href="#">Databases</a>
    <a href="#" active>Servers</a>
    <a href="#">System</a>
    <a href="#">Network</a>
    <a href="#">Cloud</a>
  </rh-subnav>
  ```

- 0ed6700c: ✨ Added `<rh-tabs>`.

  A tab set of layered content, including tab widgets and their associated tab
  panel. When a tab is activated, the associated panel content becomes visible.
  Tabs automatically display their panel when they receive focus.

  ```html
  <rh-tabs>
    <rh-tab>Tab 1</rh-tab>
    <rh-tab-panel>Panel 1</rh-tab-panel>
    <rh-tab>Tab 2</rh-tab>
    <rh-tab-panel>Panel 2</rh-tab-panel>
  </rh-tabs>
  ```

- 110def91: ✨ Added `<rh-avatar>`

  An Avatar is a placeholder graphic for a photo or an image that is placed to the
  left or on top of text.

  ```html
  <rh-avatar
    name="Grace Hopper"
    subtitle="Rear Admiral"
    src="hopper.jpg"
  ></rh-avatar>
  ```

### Patch Changes

- 2831b7e5: Improves page-loading performance of individual elements
- eea1ec17: `<rh-footer>`: prevent warnings in certain JavaScript frameworks
- 6f29b7ca: `<rh-alert>`: used design tokens for icon dimensions

## 1.0.0-beta.32

### Patch Changes

- ccd0e376: `<rh-accordion>`: fixed double border on expanded state
- ccd0e376: `<rh-footer>`: fixed accordion styles at mobile screen sizes ([#707][issue])

  [issue]: https://github.com/RedHat-UX/red-hat-design-system/issues/707

## 1.0.0-beta.31

### Patch Changes

- e40663d3: fix: bundle in package phase

## 1.0.0-beta.30

### Patch Changes

- b28681d0: Removed postinstall husky script from users

## 1.0.0-beta.29

### Minor Changes

- e40e87dc: ✨ Added `<rh-button>`.

  Button is a form-associated custom element. Buttons allow users to
  perform an action when triggered. They feature a text label, a background or a
  border, and icons.

  ```html
  <rh-button>Submit</rh-button>
  ```

### Patch Changes

- 84da26fd: `<rh-footer>`: Corrected href for footer logo links. They were incorrectly pointing
  to the `href="/en"` url. They have been changed to `href="/"`.
- 94eeec07: `<rh-global-footer>`: fixed logo links, as per `<rh-footer>`
- 42331698: Fixed nested colour contexts
- e40e87dc: `<rh-context-provider>`: notify children of context when adding them using javascript.
- e40e87dc: `<rh-context-provider>`: set color context, rather than palette, on consumers
- b23a8038: `<rh-tooltip>`: fixed tooltips on dark contexts
- 62fe8299: Update to PatternFly Elements RC
- 21da484a: `<rh-accordion>`: fixed styles for RTL languages.
- 7001943c: `<rh-cta>`: hide arrow from assistive tech

## 1.0.0-beta.28

### Minor Changes

- 99cf19e9: ✨ Added `<rh-tag>`.

  A tag is an inline-block element component that provides a distinct visual style for metadata in a UI. Supports adding icon by attribute or slotted.

  ```html
  <rh-tag>Content</rh-tag>
  ```

- f58c607e: ✨ Added `<rh-accordion>`.

  Accordion displays multiple, related disclosure widgets.

  ```html
  <rh-accordion>
    <rh-accordion-header>
      <h2>Item One</h2>
    </rh-accordion-header>
    <rh-accordion-panel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </rh-accordion-panel>
    <rh-accordion-header>
      <h2>Item Two</h2>
    </rh-accordion-header>
    <rh-accordion-panel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </rh-accordion-panel>
    <rh-accordion-header>
      <h2>Item Three</h2>
    </rh-accordion-header>
    <rh-accordion-panel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </rh-accordion-panel>
  </rh-accordion>
  ```

- ffc4dddf: ✨ Added `<rh-badge>`.

  A badge is used to annotate other information with numerical content.

  ```html
  <rh-badge number="1">1</rh-badge>
  ```

- 0703a7ea: `rh-tooltip` is being moved from the previous version of `pfe-tooltip` to the newest version which includes the migration from popperjs to floating-ui.

  This will provide user experience and performance improvements and eliminate the need for the `process.env.NODE_ENV` variable to be set by the user going forward.

### Patch Changes

- aa2d5b40: `<rh-tooltip>`: calculated the tooltip offset when the element is first updated
- aa2d5b40: `<rh-blockquote>`: added colour context and updated style tokens
- b7aa79aa: **Color Context**: added `attribute` option to `@colorContextConsumer` (defaults
  to `false`), allowing elements to make their context private to the shadow DOM.
- 41e27ddc: `<rh-tag>`: Fixed styles and tests connected with upstream changes in `BaseLabel`
- 185df893: **Color Context**: fixed context features, making sure they update the host
  element.
- db3c6af1: `<rh-spinner>`: made color context implementation private (removed `on`
  attribute).
- 54a2bbcc: `<rh-alert>`: fixed empty footer actions container still taking up blockwise
  space.
- ee8e16d1: `<rh-secondary-nav>`:

  - updated styles for `rh-context-provider` in shadowroot to ensure cta
    centering.
  - **BREAKING**: fixed incorrect color map for dark variant `color-palette="darker"` to `color-palette="dark"`

  **Color Context**: added `light` and `dark` context-color css rules to match
  surface tokens `--rh-color-surface-light` and `--rh-color-surface-dark`

- 750f451a: Added support for PFE 2.0 icon color in rh-footer
- 57f660c4: `<rh-cta>`: made color context implementation private (removed `on` attribute).
- aa2d5b40: `<rh-dialog>`: internal refactoring
- 6f8c8e79: `<rh-footer>`: fixed representation of social media links list for assistive technologies
- a76169e3: chore: added the `lib/` directory to the exports in `package.json`.
  Users can now do things like import controllers into their own projects:

  ```js
  import { ScreenSizeController } from "@rhds/elements/lib/ScreenSizeController.js";
  ```

- d2e77b5b: `<rh-tooltip>`: removed `on` attribute
- 3edd725f: `<rh-cta>`: fixed styles.
- b7aa79aa: `<rh-stat>`: fixed `icon` slot and attribute.

## 1.0.0-beta.27

### Minor Changes

- 172bacfb: Added `<rh-spinner>`. Spinner consists of an animated circle and sometimes a message, and it indicates that a section is loading.

  ```html
  <rh-spinner> Loading... </rh-spinner>
  ```

## 1.0.0-beta.26

### Patch Changes

- 73a4a9ef: Updated `<rh-footer>` to use new `<pfe-icon>`

## 1.0.0-beta.25

### Patch Changes

- da26ab31: Added behaviour to `<rh-alert>`'s close button: clicking it now removes the element.

## 1.0.0-beta.24

### Minor Changes

- c677b9e8: Added `<rh-pagination>`, a web component for navigating paginated content.

  ```html
  <rh-pagination>
    <ol>
      <li><a href="#">1</a></li>
      <li><a href="#2">2</a></li>
      <li><a href="#3">3</a></li>
      <li><a href="#4">4</a></li>
      <li><a href="#5">5</a></li>
    </ol>
  </rh-pagination>
  ```

  Read more on the [Pagination docs](https://ux.redhat.com/elements/pagination/)

### Patch Changes

- 139044fe: Added `mobile-menu` slot to rh-secondary-nav to allow for translations
  Added translation demo demonstrating new slot and rtl support
- 72fdbc06: Fixes for `<rh-secondary-nav>`:
  - Remove `em` based font-styling, use rems
  - Move `font-size: initial` from `rh-secondary-nav-lightdom.css` to D7 specific stylesheet fix (proxy demo)
  - Fix carets to properly scale with font-size based on rh-tokens
- ba3e8474: `<rh-footer>` grid areas show gap regardless of existing [#575](https://github.com/RedHat-UX/red-hat-design-system/issues/575)

## 1.0.0-beta.23

### Patch Changes

- d6de21ae: Add tsconfig to pfeDevServerConfig in `web-dev-server.config.js`
  Add tsconfig to pfeDevServerConfig in `web-test-runner.config.js`
  Unpins pfe-tools in package.json, allows versions > next.29 to be installed.

## 1.0.0-beta.22

### Patch Changes

- c0001bcf: Recent update to @patternfly/pfe-tools breaks rh-secondary-nav

## 1.0.0-beta.21

### Patch Changes

- b627f538: Changes to `<rh-secondary-nav>`:
  - Moved overflow from mobile menu list to outer container
  - Fixes border on dark variant in compact view
- b6cd5137: Footer bug fixes
  - secondary start slot not being used but still showing gap #488
  - two column breakpoint on global footer not present #496
  - tertiary slot in global footer has a margin-start padding that needs to be removed #498
  - reduce the spacing beneath the primary footer nav / language switcher to match the xd #499
    - corrected the margin at Tablet, landscape breakpoint to 64px
  - add max-width on footer-block child elements #524
  - social icon size changed to 24px down from 28px (band aide) #525
  - add no-js styles to reduce flash of unstyled content before upgrade #543
  - remove Summit logo #534
  - ensure blocks in main secondary are flush to the top of the region
  - header colors are being overwritten by base styles. #563

## 1.0.0-beta.20

### Patch Changes

- 2efcf306: Changes to `<rh-secondary-nav>`:
  - Fixes the nav level slotted cta color context when viewed in a mobile nav dropdown
  - Fixes :hover color for dark variant logo text

## 1.0.0-beta.19

### Patch Changes

- 99a1e142: Changes to `<rh-secondary-nav>`:
  - Removed component scaling with user font size preference by replacing em based spacers with space tokens.
  - Updated font-family stacks with font tokens
  - Fixed nav bar height not adjusting when logo text wraps to 3 lines
  - Fixed button background on color-palette="darker"
  - Fixed focus out handler bug closing menu when clicking on flyout menu
- 694fd26b: rh-alert: fixing styling for font-family, header font-size, description margins, and adding a cursor: pointer style for the slotted actions.

## 1.0.0-beta.18

### Patch Changes

- 38a788c: Alert, Stat, Secondary Nav changes:

  - use [design system tokens](https://red-hat-design-tokens.netlify.app) for consistency and themability

  CTA Changes:

  - use [design system tokens](https://red-hat-design-tokens.netlify.app) for consistency and themability
  - fix CSS values like padding, etc.

  Footer Changes:

  - use [design system tokens](https://red-hat-design-tokens.netlify.app) for consistency and themability
  - fix: fixed primary links grid gap spacing on desktop
  - fix: added parts for accordion header/panel

## 1.0.0-beta.17

### Patch Changes

- fe8f11f: Stat: Fixes dark theme font color contrast.
- 620b59a: Ships the files in `lib` to npm

## 1.0.0-beta.16

### Major Changes

- 8f533e5: - Adds color context decorators and controllers.
  Affects footer, dialog, CTA, secondary nav, and stat.

  - Adds `<rh-cta>`, a styled link that directs a user to other pages or sometimes displays hidden content.

    ```html
    <rh-cta>
      <a href="/subscribe">Subscribe</a>
    </rh-cta>
    ```

### Minor Changes

- b940eab: Adds `<rh-tooltip>` element to display floating content.

  ```html
  <p>
    Red Hat Design System is an interoperable
    <rh-tooltip position="top">
      <rh-icon icon="info" aria-label="information"></rh-icon>
      <span slot="content"
        >Interoperable components work in any frontend framework, or none</span
      >
    </rh-tooltip>
    set of components with Red Hat branding guidelines built in.
  </p>
  ```

### Patch Changes

- 1f196b5: Changes to `<rh-stat>`:
  - **BREAKING**: remove `@pfelement` decorator
  - **BREAKING**: remove `is-mobile` attribute
  - **BREAKING**: remove `description` slot, replace with anonymous slot
  - replace internal `MatchMediaController` with `ScreenSizeController`
  - document slots and css properties
  - hide empty slots
  - make `updateIcons` method private, and refactor it to run on slot
    change and affect only the icon slotted into `icon`
  - initialize properties in class field initializers
- ac4ef8f: Footer: Main footer logo fills height first
- d7af072: Changes to `<rh-secondary-nav>`:
  - **BREAKING**: replaces `variant="dark"` attribute with `color-palette="darker"`
  - replaces internal `#textDirection` method with `DirController` implementation for consistent RTL support
  - updates documentation
- 034e28d: Blockquote: Add design tokens to rh-blockquote's css files

## 1.0.0-beta.15

### Patch Changes

- 0d80240: \* Fixes missing font-family stacks when base css isn't applied
  - Adds rh-token CSS custom properties for font family stacks
  - Fixes regression in spacing for slotted cta

## 1.0.0-beta.14

### Minor Changes

- 8edb3df: Adds `rh-secondary-nav`

  A non-primary navigation for products and subcategory pages.

  Renames `RHDSScreenSizeController` to `ScreenSizeController` and updates references.
  Updates `matchMedia()` breakpoints in `ScreenSizeController` to use `min-width` values for standard breakpoints

  ```html
  <rh-secondary-nav role="navigation">
    <a href="#" slot="logo">Logo</a>
    <ul slot="nav">
      <li><a href="#">Link 1</a></li>
      <li>
        <rh-secondary-nav-dropdown>
          <a slot="link">Link 2</a>
          <rh-secondary-nav-menu slot="menu">
            <rh-secondary-nav-menu-section>
              <h3 slot="header">Title of Links</h3>
              <ul slot="links">
                <li><a href="#">Link 2.1</a></li>
                <li><a href="#">Link 2.2</a></li>
              </ul>
            </rh-secondary-nav-menu-section>
          </rh-secondary-nav-menu>
        </rh-secondary-nav-dropdown>
      </li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </rh-secondary-nav>
  ```

### Patch Changes

- 4d5a538: Fixes path for light dom CSS in secondary-nav demo

## 1.0.0-beta.13

### Minor Changes

- ba05def: Add 'rh-blockquote'

  A blockquote for displaying quote, author, and author title..

  ```html
  <rh-blockquote color-palette="lightest" align="inline-start" size="default">
    <p slot="quote">
      In open source, we feel strongly that to really do something well, you
      have to get a lot of people involved.
    </p>
    <span slot="author">Linus Torvalds</span>
    <span slot="title">Software Engineer</span>
  </rh-blockquote>
  ```

### Patch Changes

- 1a6cfee: Adds missing `tslib` dependency

## 1.0.0-beta.12

### Patch Changes

- 17d5bf8: Fixes rh-footer primary columns not being equal.

## 1.0.0-beta.11

### Patch Changes

- b04d8c8: Include lib directory in npm package

## 1.0.0-beta.10

### Minor Changes

- bdc1121: Ship components unbundled

### Patch Changes

- c6d26a4: Typescript: Map footer element classes to tagnames

## 1.0.0-beta.9

### Major Changes

- 58831e0: Adds `<rh-global-footer>` standalone component

  Global footer only

  ```html
  <rh-global-footer> ... </rh-global-footer>
  ```

  Usage in <rh-footer>

  ```html
  <rh-footer>
    ...
    <rh-global-footer slot="global">...</rh-global-footer>
  </rh-footer>
  ```

  Adds font-size initial and em values instead of px values for a11y.
  Allow user stylesheet to increase and decrease font-size.

  https://github.com/RedHat-UX/red-hat-design-system/issues/312

  Fixes double border on mobile.

  https://github.com/RedHat-UX/red-hat-design-system/issues/392

  Removes `is-mobile` attribute

## 1.0.0-beta.8

### Minor Changes

- de7fd69: Added `rh-context-provider` component, which is meant to be used internally within rh-elements shadow templates to override colour context.
  In `rh-dialog`, fix the colour context overrides for slotted content. See https://github.com/patternfly/patternfly-elements/pull/2036#issuecomment-1134460631
  In `rh-dialog`, changed the attribute `variant="video"` to `type="video"`, because `<pfe-modal>` uses variant for width.
- 3248990: Add `rh-stat`

  An element which can be used to display statistics inside of an app.

  ```html
  <rh-stat size="large" icon="rh-atom">
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description"
      >Stat body text that includes two lines and a footnote<sup>2</sup></span
    >
  </rh-stat>
  ```

## 1.0.0-beta.7

### Patch Changes

- da9ba6d: Remove patch-package dev dependency

## 1.0.0-beta.6

### Patch Changes

- ce2ce34: Add missing devDependencies which prevent installing the package

## 1.0.0-beta.5

### Patch Changes

- 5247670: Fixed [bug] `<rh-footer>` links should be styled to match dark context colors. #307
  Fixed the `social-links` slot to not override the `social-links` internal `rh-footer-links`
  Fixed the `social-links` hrefs to point to the default RHDC links

## 1.0.0-beta.4

### Minor Changes

- e59ecea: Add `RHDSScreenSizeController`

  ```js
  import { RHDSScreenSizeController } from '../../lib/RHDSScreenSizeController.js';

  export class RhPagination extends LitElement {

    #screenSize = new RHDSScreenSizeController(this);

    render() {
      const { mobile, size } = this.#screenSize;
      return html`
      <div id="container" class=${classMap({ mobile, [size as string]: true })}>
        ...
      </div>
      `
    }
  }
  ```

### Patch Changes

- fd78f88: Fix `<rh-footer>` styles when used on redhat.com

## 1.0.0-beta.3

### Patch Changes

- 69abc30: Include lightdom styles in the package. Prevent custom-element double-registration error by removing pfe-1.0 dependencies.

## 1.0.0-beta.2

### Minor Changes

- b625710: Adds `<rh-footer>`

  ```html
  <rh-footer>
    <a slot="logo" href="/en">
      <img
        alt="Red Hat logo"
        src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"
      />
    </a>
    <rh-footer-social-link slot="social-links-end" icon="web-icon-github">
      <a aria-label="Github" href="#github">Github</a>
    </rh-footer-social-link>
    <h3 slot="links">Products</h3>
    <ul slot="links">
      <li><a href="#">Red Hat Ansible Automation Platform</a></li>
      <li><a href="#">Red Hat Enterprise Linux</a></li>
      <li><a href="#">Red Hat OpenShift</a></li>
      <li><a href="#">Red Hat OpenShift Container Storage</a></li>
      <li><a href="#">Red Hat OpenStack Platform</a></li>
      <li><a href="#">See all products</a></li>
    </ul>
    <h3 slot="links">Tools</h3>
    <ul slot="links">
      <li><a href="#">My account</a></li>
      <li><a href="#">Customer support</a></li>
      <li><a href="#">Red Hat OpenShift</a></li>
      <li><a href="#">Contact training</a></li>
      <li><a href="#">Red Hat OpenStack Platform</a></li>
      <li><a href="#">See all products</a></li>
    </ul>
    <rh-footer-block slot="main-secondary">
      <h3 slot="header">About Red Hat</h3>
      <p>
        We’re the world’s leading provider of enterprise open source
        solutions―including Linux, cloud, container, and Kubernetes. We deliver
        hardened solutions that make it easier for enterprises to work across
        platforms and environments, from the core datacenter to the network
        edge.
      </p>
    </rh-footer-block>
    <rh-footer-block slot="main-secondary">
      <h3 slot="header">Subscribe to our free newsletter, Red Hat Shares</h3>
      <pfe-cta><a href="#blocks">Sign up now</a></pfe-cta>
    </rh-footer-block>
    <h3 slot="footer-links-primary" hidden>Red Hat legal and privacy links</h3>
    <ul slot="footer-links-primary">
      <li><a href="#">About Red Hat</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Locations</a></li>
      <li><a href="#">Contact Red Hat</a></li>
      <li><a href="#">Red Hat Blog</a></li>
      <li><a href="#">Cool Stuff Store</a></li>
      <li><a href="#">Diversity, equity, and inclusion</a></li>
    </ul>
    <rh-footer-copyright slot="footer-links-secondary"></rh-footer-copyright>
  </rh-footer>
  ```

## 1.0.0-beta.1

### Minor Changes

- b8af17c: Add `<rh-alert>`

  An alert to display information on a website.

  ```html
  <rh-alert>
    <h3 slot="header">Default</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
      elit sed est egestas, a sollicitudin mauris tincidunt.
    </p>
    <button slot="actions" data-action="dismiss">Dismiss</button>
    <button slot="actions" data-action="confirm">Confirm</button>
  </rh-alert>
  ```
