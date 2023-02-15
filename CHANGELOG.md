# @rhds/elements

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

  Read more on the [Pagination docs](https://ux.redhat.com/components/pagination/)

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
