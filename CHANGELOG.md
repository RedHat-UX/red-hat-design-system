# @rhds/elements

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
  <rh-global-footer>
    ...
  </rh-global-footer>
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
