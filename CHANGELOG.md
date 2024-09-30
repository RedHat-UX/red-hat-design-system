# @rhds/elements

## 2.1.0

### Minor Changes

- 82ffb12: `<rh-tile>`: add `link="private"` attribute, indicating that the link is
  private, which changes the link icon from an arrow to a padlock, and
  `link="external"` attribute, which changes the link icon to the "external link"
  icon
- 82ffb12: `<rh-card>` added `--rh-card-header-background-on-light` and `--rh-card-header-background-on-dark` CSS custom properties

  ```css
  rh-card.custom-card {
    --rh-card-header-background-on-light: cornflowerblue;
    --rh-card-header-background-on-dark: darkblue;
  }
  ```

- 82ffb12: `<rh-subnav>`:

  - removed arrow-key keyboard navigation in favor of tab navigation.
  - add `accessible-label` attribute to explicitly label landmark.
  - corrects overflow icons

  ```
  <rh-subnav accessible-label="Customer service">
   <a href="#" active>Help</a>
   <a href="#">Contact Us</a>
   <a href="#">FAQ</a>
  </rh-subnav>
  ```

- 82ffb12: `<rh-code-block>`: syntax highlighting via prerendered prismjs code-blocks. Use
  the `highlighting="prerendered"` attribute when rendering code blocks using
  server side prism, e.g. in a markdown fenced code block.

  ```html
  <rh-code-block highlighting="prerendered">
    <pre class="language-css"><code class="language-css"><span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--rh-color-interactive-primary-default<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></pre>
  </rh-code-block>
  ```

- 82ffb12: `<rh-tag>` added `red-orange`, `yellow`, and `teal` colors. **NOTE** that `cyan` is now deprecated, but will continue to work using the `teal` colors.
- 82ffb12: `<rh-table>`: added auto-generated table cell headings for responsive layout on small screens.
- 82ffb12: `<rh-tag>`: added desaturated variant:

  ```html
  <rh-tag variant="desaturated">New</rh-tag>
  ```

- 82ffb12: `<rh-tag>`: added `size` attribute.

  ```html
  <rh-tag size="compact">New</rh-tag>
  ```

- 82ffb12: `<rh-alert>`: added new states: `info`, `neutral`, and `caution`, and deprecated
  `note` (now an alias to `info`), `default` (now an alias to `neutral`), and
  `error` (now an alias to `danger`).
- 82ffb12: `<rh-button>`: add `icon-set` attribute, corresponding to `<rh-icon set="...">`

  ```html
  <rh-button icon="giftbox" icon-set="standard">Donate</rh-button>
  ```

- 82ffb12: `<rh-navigation-secondary>`:

  - removed arrow-key keyboard navigation in favor of tab navigation.
  - add `accessible-label` attribute to explicitly label landmark.

  ```
  <rh-navigation-secondary accessible-label="Main">
   ...
  </rh-navigation-secondary>
  ```

- 82ffb12: `<rh-badge>`: added new states:

  - `danger`
  - `warning`
  - `caution`
  - `neutral`
  - `info`

  We deprecated:

  - `critical` (now an alias to `danger`)
  - `important` (now an alias to `caution`)
  - `moderate` (now an alias to `warning`)
  - `note` (now an alias to `info`)

- 82ffb12: `<rh-skip-link>`: added optional `href` attribute:

  ```html
  <rh-skip-link href="#main-content">Skip to main content</rh-skip-link>
  ```

  is equivalent to:

  ```html
  <rh-skip-link>
    <a href="#main-content">Skip to main content</a>
  </rh-skip-link>
  ```

- 82ffb12: `<rh-code-block>`: Added `highlighting="client"` for client-side syntax highlighting with Red Hat colour scheme
- 82ffb12: `<rh-tag>`: added `href` attribute

  ```html
  <rh-tag icon="information-fill" href="/info">Info</rh-tag>
  ```

- 82ffb12: Theming: Added [theming tokens][theming] to most elements

  Theming tokens let authors respond to the currently-active colour palette, and
  are especially useful when implementing [patterns][patterns] using themeable
  elements.

  ```html
  <rh-card class="example-logo-text-and-cta">
    <p>Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>.</p>
    <rh-cta slot="footer" href="#">Call to action</rh-cta>
  </rh-card>

  <style>
    .example-logo-text-and-cta {
      width: 360px;
      & em {
        color: var(--rh-color-accent-base);
      }
    }
  </style>
  ```

  [theming]: ux.redhat.com/theming
  [patterns]: https://ux.redhat.com/patterns/

### Patch Changes

- 82ffb12: `<rh-audio-player>`: corrected focus when keyboard navigating options menu
- 82ffb12: `<rh-audio-player>`: use theme tokens
- 82ffb12: `<rh-accordion>`: Make `<rh-accordion-header>`'s bold.
- 82ffb12: `<rh-table>`: tables now adjust to the size of their containing element, not to the size of the viewport.
- 82ffb12: `<rh-accordion>`: removed arrow-key keyboard navigation in favor of tab navigation.
- 82ffb12: `<rh-audio-player>`: use official red hat icons
- 82ffb12: `<rh-tabs>`: tabs now adjust to the size of their containing element, not to the size of the viewport.
- 82ffb12: `<rh-alert>`: hide header when it is empty
- 82ffb12: `<rh-audio-player>`: add a playback control to the mini layout
- 82ffb12: `<rh-card>`: style some slotted links
- 82ffb12: `<rh-tile>`: corrected layout when rendering some image slotted elements
- 82ffb12: `<rh-tag>`: now supports color [theming](https://ux.redhat.com/theming/)
- 82ffb12: `<rh-tabs>`: allow tabs to participate in advanced layouts
- 82ffb12: `<rh-skip-link>`: ensure link is always at top of the page, per guidelines
- 82ffb12: `<rh-site-status>`: use `<rh-icon>` for status indicators

## 2.0.1

### Patch Changes

- 1ec3653: `<rh-footer-universal>`: improve compatibility with <abbr title="Server side rendering">SSR</abbr>
- f77af9a: `<rh-navigation-secondary>`: corrected visibility of the borders when using the dark color palette
- 1ec3653: `<rh-alert>`: fixed styles and typings for the `RhAlert.toast()` method
- fecbe5d: `<rh-button>`: corrected style issue which caused layout side effects
- 1ec3653: `<rh-icon>`: prevent error when hydrating server-side-rendered icons
- cb5e01a: `<rh-cta>`: corrected icon not loading on default variant
- f4fcd78: `<rh-back-to-top>`: builds-in the style guidelines in: back to top is fixed and always on top. Note that this change removes previously undocumented CSS custom properties `--rh-back-to-top-position-right` and `--rh-back-to-top-position-bottom`.
- 5323a21: `<rh-tooltip>`: added border radius style to match specifications
- b558e00: `<rh-navigation-secondary>`: corrected logo slot text line-height

## 2.0.0

### Major Changes

- fa2c4d2: `<rh-accordion>`: Removed the `heading-tag` and `heading-text` attributes from the `rh-accordion-header` element.
  `<h2>` (etc.) elements are no longer valid content for `<rh-accordion-header>`,
  but users are encouraged to wrap accordion headers in the appropriate heading element, in case javascript fails to load.

  Before:

  ```html
  <rh-accordion>
    <rh-accordion-header>
      <h2>First Header</h2>
    </rh-accordion-header>
    <rh-accordion-panel>...</rh-accordion-panel>
  </rh-accordion>
  ```

  After:

  ```html
  <rh-accordion>
    <h2><rh-accordion-header>First Header</rh-accordion-header></h2>
    <rh-accordion-panel>...</rh-accordion-panel>
  </rh-accordion>
  ```

- fa2c4d2: `<rh-accordion>`: removed the unused `icon` part and attribute from `<rh-accordion-header>`
- fa2c4d2: `<rh-accordion>`: removed the (previously undocumented) `container` part from `<rh-accordion-header>`
- fa2c4d2: `<rh-footer>`: removed deprecated `<rh-global-footer>` element and deprecated `global` slot. Use `<rh-footer-universal>` element and `universal` slot.

  Before:

  ```html
  <rh-footer>
    <!-- ... -->
    <rh-global-footer slot="global">
      <!-- ... -->
    </rh-global-footer>
  </rh-footer>
  ```

  After:

  ```html
  <rh-footer>
    <!-- ... -->
    <rh-footer-universal slot="universal">
      <!-- ... -->
    </rh-footer-universal>
  </rh-footer>
  ```

- fa2c4d2: `<rh-tabs>`: removed deprecated `RhTabs.isTab()` and `RhTabs.isPanel()` static class methods.
- fa2c4d2: `<rh-cta>`: removed read-only `cta` property; use `data-analytics` attributes instead
- fa2c4d2: Removed the `rhds.min.js` entrypoint and replaced it with a module that reexports all our element modules.

  Before:

  ```js
  import "@rhds/elements"; // get the minified bundle
  import "@rhds/elements/rh-cta/rh-cta.js";
  // => DOMException: 'rh-cta' has already been defined as a custom element
  ```

  After:

  ```js
  import "@rhds/elements"; // get the entrypoint module
  import "@rhds/elements/rh-cta/rh-cta.js";
  // => get the same module referenced in the entry point
  ```

- 8a061e9: `<rh-tabs>`: Removed the deprectated attribute that sets the theme for the tabs and panels
  Please use the `--rh-tabs-active-border-color` CSS property directly.

  Before:

  ```html
  <rh-tabs theme="base">
    <!-- ... -->
  </rh-tabs>
  ```

  After:

  ```html
  <rh-tabs
    style="--rh-tabs-active-border-color: var(--rh-color-border-interactive-on-light, #0066cc)"
  >
    <!-- ... -->
  </rh-tabs>

  <rh-tabs
    color-palette="darkest"
    style="--rh-tabs-active-border-color: var(--rh-color-border-interactive-on-dark, #92c5f9)"
  >
    <!-- ... -->
  </rh-tabs>
  ```

- 8e68a6a: `<rh-dialog>`: removed deprecated `--rh-modal-video-aspect-ratio` CSS custom property

  Before:

  ```css
  rh-dialog.custom-dialog {
    --rh-modal-video-aspect-ratio: 3/2;
  }
  ```

  After:

  ```css
  rh-dialog.custom-dialog {
    --rh-dialog-video-aspect-ratio: 3/2;
  }
  ```

- 8e68a6a: `<rh-footer>`: removed deprecated CSS custom properties

  Before:

  ```css
  rh-footer.custom-footer {
    --rh-color-link-inline-on-dark: cyan;
    --rh-color-link-inline-hover-on-dark: cornflowerblue;
    --rh-color-link-inline-focus-on-dark: cornflowerblue;
    --rh-color-link-inline-visited-on-dark: cornflowerblue;
  }
  ```

  After:

  ```css
  rh-footer.custom-footer {
    --rh-color-interactive-blue-lighter: cyan;
    --rh-color-interactive-blue-lightest: cornflowerblue;
  }
  ```

- fa2c4d2: `<rh-accordion>`: remove unused `bordered` attribute
- fa2c4d2: `<rh-spinner>`: remove deprecated `color-palette` attribute

  Before:

  ```html
  <rh-spinner color-palette="darkest"></rh-spinner>
  ```

  After:

  ```html
  <rh-surface color-palette="darkest">
    <rh-spinner></rh-spinner>
  </rh-surface>
  ```

- fa2c4d2: `<rh-cta>`: Removed previously-deprecated `color-palette` attribute

  Use themeable containers (e.g. `<rh-surface>` or `<rh-card>`) instead.

  Before:

  ```html
  <rh-cta color-palette="dark" href="#default">Default</rh-cta>
  ```

  After:

  ```html
  <rh-surface color-palette="dark">
    <rh-cta href="#default">Default</rh-cta>
  </rh-surface>
  ```

- fa2c4d2: `<rh-alert>`: removed deprecated toast boolean attribute

  Before:

  ```html
  <rh-alert toast>
    <h3 slot="header">Default</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
      elit sed est egestas, a sollicitudin mauris tincidunt.
    </p>
  </rh-alert>
  ```

  After:

  ```html
  <rh-alert variant="toast">
    <h3 slot="header">Default</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
      elit sed est egestas, a sollicitudin mauris tincidunt.
    </p>
  </rh-alert>
  ```

- fa2c4d2: `<rh-table>`: removed deprecated CSS custom properties

  Before:

  ```css
  rh-table.custom-table {
    --rh-table-row-background-color: crimson;
    --rh-table-column-background-color: royalblue;
  }
  ```

  After:

  ```css
  rh-table.custom-table {
    --rh-table-row-background-hover-color: crimson;
    --rh-table-column-background-hover-color: royalblue;
  }
  ```

- fa2c4d2: `<rh-navigation-secondary>` removed deprecated alias `rh-secondary-nav`

  Before:

  ```html
  <rh-secondary-nav>
    <!-- ... -->
  </rh-secondary-nav>
  ```

  After:

  ```html
  <rh-navigation-secondary>
    <!-- ... -->
  </rh-navigation-secondary>
  ```

- 8e68a6a: `<rh-tabs>`: removed `box` and `vertical` attributes from `<rh-tab>`. Set them
  on `<rh-tabs>` instead.

  In most cases, you shouldn't need to update your templates, as long as `<rh-tabs>`
  has the right attributes

### Minor Changes

- fa2c4d2: ✨ Added `<rh-health-index>`

  Health index grades the health or security level of something.

  ```html
  <rh-health-index grade="A">A</rh-health-index>
  ```

- fa2c4d2: `<rh-alert>` added static `toast` method

  ```js
  import { RhAlert } from "@rhds/elements/rh-alert/rh-alert.js";

  RhAlert.toast({
    state: "warning",
    heading: "Careful",
    message: "Toast is high in calories!",
  });
  ```

- fa2c4d2: ✨ Added `<rh-video-embed>`

  A video embed is a graphical preview of a video overlayed with a play button. When clicked, the YouTube video will begin playing.

  ```html
  <rh-video-embed>
    <img
      slot="thumbnail"
      src="https://fakeimg.pl/900x499/282828/eae0d0"
      alt="Image description"
    />
    <template>
      <iframe
        title="Title of video"
        width="900"
        height="499"
        src="https://www.youtube.com/embed/Hc8emNr2igU"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </template>
    <p slot="caption">
      <a class="rh-video-embed-caption-link" href="https://www.redhat.com/"
        >View the infographic</a
      >
    </p>
  </rh-video-embed>
  ```

- fa2c4d2: `<rh-pagination>`: ✨ Added open variant and small size

  Users can now further customize pagination by choosing which variant and size are most appropriate for their applications.

  ```html
  <rh-pagination variant="open" size="sm">
    <ol>
      <li><a href="#">1</a></li>
      <li><a href="#2">2</a></li>
      <li><a href="#3">3</a></li>
      <li><a href="#4">4</a></li>
      <li><a href="#5">5</a></li>
    </ol>
  </rh-pagination>
  ```

- fa2c4d2: `<rh-card>`: ✨ Added promo card variant

  The promo card variant allows users to easily display text and optionally an image side by side.

  ```html
  <rh-card variant="promo">
    <img
      slot="image"
      alt="product illustration"
      src="/assets/images/new-product.png"
    />
    <h2 slot="header">Try our new product</h2>
    <p>Our new product is the best in class.</p>
    <rh-cta slot="footer" href="#">Start a Free Trial</rh-cta>
  </rh-card>
  ```

- fa2c4d2: ✨ Added `<rh-breadcrumb>`.

  A breadcrumb navigation is a secondary navigation element consisting of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application.

  ```html
  <rh-breadcrumb>
    <ol>
      <li><a href="../../../..">Home</a></li>
      <li><a href="../../../">About</a></li>
      <li><a href="#" aria-current="page">Our Team</a></li>
    </ol>
  </rh-breadcrumb>
  ```

- fa2c4d2: `<rh-pagination>`: ✨ Added support for dark color themes

  ```html
  <rh-surface color-palette="dark">
    <rh-pagination>
      <ol>
        <li><a href="#">1</a></li>
        <li><a href="#2">2</a></li>
        <li><a href="#3">3</a></li>
        <li><a href="#4">4</a></li>
        <li><a href="#5">5</a></li>
      </ol>
    </rh-pagination>
  </rh-surface>
  ```

- fa2c4d2: ✨ Added `<rh-icon>`.

  Icons represents general concepts and can support text as a decorative element. The `<rh-icon>` element allows experience and content authors to add Red Hat icons of varying dimensions in the same area without shifting surrounding content.

  ```html
  <rh-icon icon="alert"></rh-icon>
  ```

  `<rh-icon>` has experimental SSR support. It's not ready for production, but if you try it, let us know!

- fa2c4d2: `<rh-cta>`: Added `rh-cta-lightdom-shim.css` as an optional file to help reduce layout shift before element is defined, where declarative shadow DOM is not an option.
- fa2c4d2: `<rh-cta>`: added `href` attribute. When set, do not slot an anchor or button,
  instead, slot in the link text.

  These two are equivalent:

  ```html
  <rh-cta>
    <a href="/elements">Elements</a>
  </rh-cta>
  ```

  ```html
  <rh-cta href="/elements">Elements</rh-cta>
  ```

- fa2c4d2: `<rh-card>`: Added CSS custom properties for card headings:

  - `--rh-card-heading-font-family`
  - `--rh-card-heading-font-size`
  - `--rh-card-heading-font-weight`

- fa2c4d2: `<rh-cta>`: added `icon-set` attribute to better control icon loading

  ```html
  <rh-cta icon="success" icon-set="custom">...</rh-cta>
  ```

- fa2c4d2: ✨ Added `<rh-switch>`

  A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.

  ```html
  <rh-switch id="switch-a" accessible-label="Switch A" checked>
    <span slot="message-on">Message when <strong>on</strong></span>
    <span slot="message-off">Message when <strong>off</strong></span>
  </rh-switch>
  ```

### Patch Changes

- fa2c4d2: `<rh-audio-player>`: enforce typography for headings
- fa2c4d2: `<rh-card>`: Corrected slotted header margin
- fa2c4d2: `<rh-tile>`: corrected border color token
- fa2c4d2: `<rh-tile-group>`: Corrected application of grid layout to slotted elements.
- fa2c4d2: `<rh-cta>`: lazy-load the icon component dependency
- fa2c4d2: `<rh-tag>`: update green border color
- fa2c4d2: `<rh-cta>`: corrected cta tokens public api
- fa2c4d2: `<rh-cta>`: Changed focus states to mimic hover states + an additional outline.
- fa2c4d2: `<rh-button variant="play">`: Play icon is now centered in the circle of the button.
- fa2c4d2: `<rh-breadcrumb>`: improved accessibility by adding underlines to links

  `<rh-navigation-secondary>`: improved accessibility by adding underlines to links

- fa2c4d2: `<rh-site-status>`: fix element layout
- 784da94: `<rh-navigation-secondary>`: corrected mobile menu keyboard accessibility, now properly closes when focus leaves
- fa2c4d2: `<rh-accordion-header>`: removed deprecated and unused `icon` property
- d564ef0: `<rh-navigation-secondary>`: improved accessibility
- fa2c4d2: `<rh-tile>`: Fixed the headline, title, body text, and footer font-sizes to match the Tile specs for both the default and compact variants

## 1.4.5

### Patch Changes

- 45ab120: **React**: resolve another syntax error in generated modules

## 1.4.4

### Patch Changes

- 0f94d81: **React**: corrected syntax errors in certain generated modules
- 0f94d81: **React**: moved files from `/react/elements/*` to `/react/*`, and updated the export map to match
- cbd7c6a: **Custom Elements Manifest**: corrected module paths in the manifest
- a5853c7: Copies lightdom CSS files into the package root, making it easier to use RHDS with CDNS like UNPKG.

## 1.4.3

### Patch Changes

- 8eebce6: `<rh-tabs>`: improved focus accessibility for keyboard navigation and assistive technology users.'

## 1.4.2

### Patch Changes

- 69e2cd9: `<rh-tabs>`: added support for rtl language overflow scroll buttons
- 1b20464: React: add generated react wrappers to NPM package
- 971214d: `<rh-site-status>`: automatically fetch status for the current domain
- 835a008: `<rh-card>`: hide header, body, or footer regions when they have no content
- 727c799: `<rh-card>`: applied heading font to card headings
- b443fe2: `<rh-code-block>`: corrected 'show more' button styles
- 8365fac: `<rh-tag>`: ensure correct font-family is used
- 2f1324e: `<rh-card>`: removes landmark semantics from card, simplifying page navigation for screen reader users

## 1.4.1

### Patch Changes

- 862380b: corrected `@patternfly/elements` dependency to be included with the package

## 1.4.0

### Minor Changes

- fecdcbf: `<rh-codeblock>`: added line numbers
- fecdcbf: ✨ Added `<rh-site-status>`

  Website status communicates the operational status of a website or domain using a status icon and link. It is usually located in the Footer component.

  ```html
  <rh-site-status></rh-site-status>
  ```

- fecdcbf: ✨ Added `<rh-back-to-top>`.

  Back to top component is a fragment link that allows users to quickly navigate to the top of a lengthy content.

  ```html
  <rh-back-to-top href="#top">Back to top</rh-back-to-top>
  ```

- fecdcbf: ✨ Added `<rh-skip-link>`.

  A skip link is used to skip repetitive content on a page. It is hidden by default and can be activated by hitting the "Tab" key after loading/refreshing a page.

  ```html
  <rh-skip-link>
    <a href="#main-content">Skip to main content</a>
  </rh-skip-link>
  ```

- fecdcbf: ⚛️ Added React wrapper components

  You can now more easily integrate RHDS elements into your React apps by importing our wrapper components

  First, make sure that you list `@lit/react` as a dependency in your project

  ```sh
  npm install --save @lit/react
  ```

  Then import the element components you need and treat them like any other react component

  ```js
  import { Tabs } from '@rhds/elements/react/rh-tabs/rh-tabs.js';
  import { Tab } from '@rhds/elements/react/rh-tabs/rh-tab.js';
  import { TabPanel } from '@rhds/elements/react/rh-tabs/rh-tab-panel.js';

  import { useState } from 'react';

  const tabs = [
    { heading: 'Hello Red Hat', content: 'Let\'s break down silos' },
    { heading: 'Web components', content: 'They work everywhere' }
  ];

  function App() {
    const [index, setExpanded] = useState(-1);
    return (
      <span>expanded {expanded}</span>
      <Tabs>{tabs.map(({ heading, content }, i) => (
        <Tab slot="tab" onExpand={() => setExpanded(i)}>{heading}</Tab>
        <TabPanel>{content}</TabPanel>))}
      </Tabs>
    );
  }
  ```

- fecdcbf: `<rh-codeblock>`: added `Show more` toggle
- fecdcbf: `<rh-codeblock>`: added copy and wrap actions, with localizable slots for the button labels

  ```html
  <rh-code-block actions="wrap copy">
    <span slot="action-label-copy">Copy to Clipboard</span>
    <span slot="action-label-copy" hidden data-code-block-state="active"
      >Copied!</span
    >
    <span slot="action-label-wrap">Toggle word wrap</span>
    <span slot="action-label-wrap" hidden data-code-block-state="active"
      >Toggle overflow</span
    >
    <script type="text/css">
      :host {
        display: block;
      }
    </script>
  </rh-code-block>
  ```

### Patch Changes

- fecdcbf: `<rh-menu>`: improved focus accessibility for keyboard navigation users on firefox
  `<rh-button>`: improved focus accessibility on firefox
- fecdcbf: `<rh-accordion>`: added a accents slot with placement options as inline and bottom
- fecdcbf: Context: aligned context implementation with updated [protocol defintions](https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md#definitions)
- fecdcbf: Update dependencies, including Lit version 3
- fecdcbf: `<rh-alert>`: make sure alerts always have to correct (lightest) colour palette
- fecdcbf: `<rh-tabs>`: allow tabs with long text content to fit into different-sized containers

## 1.3.2

### Patch Changes

- 1d1640705: `<rh-tile>`: corrected icon slot visibility with a slotted icon
- d61b8dc71: `<rh-dialog>`: ensure that `cancel`, `open`, and `closed` events fire

## 1.3.1

### Patch Changes

- d87dfb94a: `<rh-tabs>`: fixed issue that stop tabs from correctly resizing on mobile
- 01f100cf8: `<rh-tile>`: fixed issue with click target area of tile
- 08722dd71: `<rh-table>`: corrected custom background hover color tokens.
- 4259ba0ed: `<rh-tabs>`: improved documentation

## 1.3.0

### Minor Changes

- 5e64235d5: `<rh-audio-player>`: added Hebrew translations
- 0829fa2c4: ✨ Added `<rh-surface>`.

  Surface is a container which sets background color and text color and provides that theme context to its child elements. Surface supports `darkest`, `darker`, `dark`, `light`, `lighter`, `lightest` color palettes.

  ```html
  <rh-surface color-palette="darker">
    <rh-cta><a href="#">Call to Action</a>
  </rh-surface>
  ```

- c9b81875e: `<rh-tabs-panel>`: adds ability to override panel margin and padding
- 31b28dcc6: `<rh-pagination>`: add `numeric` CSS shadow part, corresponding to the numeric page input

  Example: hiding the numeric paginator

  ```css
  rh-pagination::part(numeric) {
    display: none;
  }
  ```

- 05fbc275a: `<rh-tile>`: add `accessible-label` attribute to override form control label

  Accessible labels are visually hidden labels for form controls. In the case of
  `<rh-tile>`, they are optional, so long as the text content of the tile is
  already an accessible label for the control.

  Use `accessible-label` when you would like to label the form control with
  something other than the tile's text content, or when the tile has no text
  content.

  ```html
  <form>
    <rh-tile-group radio>
      <rh-tile name="radio" value="1">Tile 1</rh-tile>
      <rh-tile name="radio" value="2">Tile 2</rh-tile>
      <rh-tile name="radio" value="3" accessible-label="Tile 3">
        <img slot="image" role="presentation" src="tile-3.webp" />
      </rh-tile>
    </rh-tile-group>
  </form>
  ```

- 58ab8e60b: Uses `@rhds/tokens` - Red Hat Design Tokens - version 2!

  ⚠️ if your pages directly override "crayon" colour values, (e.g. `--rh-color-red-50`)
  then this is a breaking change, since the token names have changed.

  However, if your project follows the theming guidelines and only overrides the
  semantic tokens, then you should automatically receive the new colour values.

- 05fbc275a: `<rh-tile>`: radio and checkbox tiles now submit their values in `<form>` elements

### Patch Changes

- b123092da: `<rh-tabs>`: removed dependency on `@patternfly/elements` package.
- 5e64235d5: `<rh-alert>`: fix `<rh-button variant="link">` as slotted action
- 976981b0d: `<rh-alert>`: fix inline variant's styles
- 6a87885e8: `<rh-badge>`: remove dependency on `@patternfly/elements`
- 719873947: `<rh-blockquote>`: remove user-agent margin from blockquote, in accordance with [design guidelines][design]

  [design]: https://ux.redhat.com/elements/blockquote/style/

- fcf22f028: `<rh-button>`: remove dependency on `@patternfly/elements`
- 18f802f7f: `<rh-table>`: added color palette and theme support
- c0af10745: `<rh-card>`: improved styles for first body paragraph when there is other content displayed first
- 4f6ff65e7: `<rh-card>`: ensure footer is always on the bottom of the card
- 6e8fad64b: `<rh-card>`: adjust whitespace of card parts to suit design
- bf7c96ca4: `<rh-code-block>`: allow for pre-rendered (via prism.js) code blocks
- f969ff1f2: `<rh-tabs>`: fixed layout of non-vertical box variant tabs
- 54264f37c: `<rh-spinner>`: deprecates the `color-palette` attribute.
- 8cb9790e2: `<rh-tile>`: fixed cursor when arrow is hovered
- 976981b0d: `<rh-alert>`: remove padding for alerts which have only header content
- 976981b0d: `<rh-alert>`: make variants case-insensitive
- a6510e224: `<rh-tabs>`: adds default value for tab font-size
- eefc04cb9: `<rh-tooltip>`: fixes issue where content would take up unwanted space before the element fully upgraded
- 2137702b3: `<rh-footer-social-link>`: updated twitter logo with X
- 0254749cb: `<rh-tab-panel>`: removed unused color-palette attribute
- 8c5559cee: `<rh-dialog>`: remove the dependency on `@patternfly/elements`.
  _NOTE_: The `open`, `close`, and `cancel` events are no longer the same object constructor type as `<pf-modal>`, so `instanceof` checks may fail.
- 2eb82a822: `<rh-avatar>`: removed non-existent `name` slot from the element manifest.
  This doesn't change the element, only the documentation. Instead of `name`, use
  the anonymous slot:

  ```html
  <rh-avatar>
    <span>Title</span>
    <span slot="subtitle">Subtitle</span>
  </rh-avatar>
  ```

- 5e64235d5: `<rh-menu>`: support color context
- 6a134b5f4: `<rh-tag>`: remove dependency on `@patternfly/elements`
- 369d5b7cf: `<rh-card>`: collapses margins between header, body, and footer

  NOTE that this changes the default styling of the `header`, `body`, and `footer`
  CSS Shadow Parts. They previously used `padding` for layout, and now use `margin`.
  If you modified their padding via the `::part` selector, you will need to update your CSS

  Before:

  ```css
  .special-card::part(header) {
    padding: var(--rh-space-sm);
  }
  ```

  After:

  ```css
  .special-card::part(header) {
    margin-block-start: var(--rh-space-sm);
    margin-inline: var(--rh-space-sm);
  }
  ```

- 5e64235d5: `<rh-dialog>`: ensure dialog content is always on light theme
- 42c167f9e: `<rh-table>`: improved color palette styles
- 0d2d349d7: `rh-table`: corrected table height
- a1c587d1b: `<rh-navigation-secondary>`: adds current page indicator to logo slot
- c68165b4e: `<rh-tabs>`: adds deprecation notice on `theme` attribute
- 54264f37c: `<rh-spinner>`: remove dependency on `@patternfly/elements`
- baa382063: `<rh-accordion>`: fixed border color for dark color palettes
- fb9e3eac0: `<rh-accordion>`: remove dependency on `@patternfly/elements`
- d4e1ebd4b: `<rh-tag>`: while tag should not be used on dark contexts unless it has the
  `white` colour, this change ensures that tags that are used on dark context will
  be legible.
- 422d6279b: `<rh-tile>`: ensure that tiles in a flex container grow along the cross axis
- 61ca7202d: `<rh-tooltip>`: remove dependency on `@patternfly/elements`
- b3f7b1877: `<rh-tile>`: added arrow animation on hover
- 9f1249474: `<rh-navigation-secondary>`: fixed initialization of current page indicator

## 1.2.0

### Minor Changes

- 35c28e72: Added `<rh-tile>`.

  Tile creates a component that can be used in place of a link, checkbox, or radio button selection.

  ```html
  <rh-tile-group radio>
    <rh-tile checked>
      <div slot="title">Title</div>
      <h2 slot="headline"><a href="#top">Link</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>

    <rh-tile>
      <div slot="title">Title</div>
      <h2 slot="headline"><a href="#top">Link</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>

    <rh-tile>
      <div slot="title">Title</div>
      <h2 slot="headline"><a href="#top">Link</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>
  </rh-tile-group>
  ```

- 9d3c7b09: ✨ Added `<rh-table>`.

  A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.

  ```html
  <rh-table>
    <table>
      <caption>
        Concerts
      </caption>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th scope="col" data-label="Date">Date</th>
          <th scope="col" data-label="Event">
            Event<rh-sort-button></rh-sort-button>
          </th>
          <th scope="col" data-label="Venue">
            Venue<rh-sort-button></rh-sort-button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Date">12 February</td>
          <td data-label="Event">Waltz with Strauss</td>
          <td data-label="Venue">Main Hall</td>
        </tr>
        <tr>
          <td data-label="Date">24 March</td>
          <td data-label="Event">The Obelisks</td>
          <td data-label="Venue">West Wing</td>
        </tr>
        <tr>
          <td data-label="Date">14 April</td>
          <td data-label="Event">The What</td>
          <td data-label="Venue">Main Hall</td>
        </tr>
      </tbody>
    </table>
    <small slot="summary">Dates and venues subject to change.</small>
  </rh-table>
  ```

- 39e76fc6: `rh-card`: `header` slot now displays items vertically instead of stacked, allowing for more than one item to display in the header.

  Example:

  ```html
  <rh-card>
    <img slot="header" src="kitten-400x250.jpeg"></img>
    <h2 slot="header">Headline, sm</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Nullam eleifend elit sed est egestas, a sollicitudin mauris
       tincidunt. Pellentesque vel dapibus risus. Nullam aliquam
       felis orci, eget cursus mi lacinia quis. Vivamus at felis sem.</p>
    <rh-cta priority="primary" slot="footer">
      <a href="#">Call to action</a>
    </rh-cta>
  </rh-card>
  ```

- c9780fc2: ✨ Added `<rh-timestamp>`.

  Provides consistent formats for displaying date and time values.

  ```html
  <rh-timestamp date="Tue Aug 09 2006 14:57:00 GMT-0400"
    >Tue Aug 09 2006 14:57:00 GMT-0400</rh-timestamp
  >
  ```

### Patch Changes

- f4fcb1f3: `<rh-navigation-secondary>`: improved keyboard navigation
- 681519b5: `<rh-avatar>`:
  `<rh-code-block>`:
  `<rh-navigation-secondary>`: Updated custom elements manifest summaries
- ed6ff92e: `<rh-navigation-secondary>`: corrected and updated support for current page indicator
- a6ca3987: `<rh-cta>`: `brick` variants are now full width.

  `<rh-cta variant="brick">` should only be used within grids. Check your layouts to make sure they adhere to the guidelines.

- 0c2d42b1: `<rh-tabs>`: corrects the custom element manifest's event name for the `expand` event
- 7e2c9bb6: `<rh-cta>`: adds `color-palette` attribute back with deprecation notice

## 1.1.1

### Patch Changes

- ab339ac6: `<rh-tag>`: outline variant should now get the correct background styles added.
- f79543b7: `<rh-avatar>`: uses SVG for default images instead of much larger base-64 PNG images
- 77fa329a: `<rh-audio-player>`: Added @csspart docs.
- f0f66ec2: `<rh-tabs>`: fixed vertical tabs text alignment
- 716b52d1: `<rh-cta>` and other elements: color context support
- cf8ee6cb: `<rh-audio-player>`: corrected subscribe slot documentation.
- d709896f: `<rh-cta>`: corrected layout of icon brick variant
- d709896f: `<rh-cta>`: ensured entire CTA is clickable
- d709896f: `<rh-cta>`: fix a style bug which affects CTA links at narrow widths
- ff90f4d6: `<rh-footer>`: prevent an error when using footer and react in certain chrome versions
- 44a444a5: `<rh-navigation-secondary>`: corrected navigation bar height for small and large viewports'

## 1.1.0

### Minor Changes

- 9eedf473: `<rh-tag>`: added `outline` variant
- bc0fd968: ✨ Added `<rh-card>`.

  Card creates a component with a header, body, and footer. The header and footer are optional.

  ```html
  <rh-card>
    <h2 slot="header">Headline, sm</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
      elit sed est egestas, a sollicitudin mauris tincidunt. Pellentesque vel
      dapibus risus. Nullam aliquam felis orci, eget cursus mi lacinia quis.
      Vivamus at felis sem.
    </p>
    <rh-cta slot="footer">
      <a href="#">Call to action</a>
    </rh-cta>
  </rh-card>
  ```

- b4815ae7: ✨ Added `<rh-audio-player>`.

  Audio-player creates a custom UI for audio files.

  ```html
  <rh-audio-player>
    <h3 slot="title">Rethinking Networks In Telecommunications</h3>
    <p slot="series">Code Comments</p>
    <audio crossorigin="anonymous" slot="media" controls>
      <source type="audio/mp3" srclang="en" src="./rethinking.mp3" />
    </audio>
  </rh-audio-player>
  ```

- d784f716: ✨ Added `<rh-code-block>`.

  A container for a block of code. May be composed into a toolbar or contain copy buttons or other interactive components.

  ```html
  <rh-code-block>
    <script type="text/text">
      Error: Error creating network Load Balancer: AccessDenied: User:
      arn:aws:sts::970xxxxxxxxx:assumed-role/ManagedOpenShift-Installer-Role/163xxxxxxxxxxxxxxxx is
      not authorized to perform: iam:CreateServiceLinkedRole on resource:
      arn:aws:iam::970xxxxxxxxx:role/aws-service-role/elasticloadbalancing.amazonaws.com/
      AWSServiceRoleForElasticLoadBalancing
    </script>
  </rh-code-block>
  ```

- b2e607bd: `<rh-tooltip>`: [added][commit] new CSS custom properties:

  - `--rh-tooltip-arrow-size`
  - `--rh-tooltip-content-background-color`
  - `--rh-tooltip-content-color`
  - `--rh-tooltip-content-font-size`
  - `--rh-tooltip-content-padding-block-end`
  - `--rh-tooltip-content-padding-block-start`
  - `--rh-tooltip-content-padding-inline-end`
  - `--rh-tooltip-content-padding-inline-start`
  - `--rh-tooltip-max-width`

  [commit]: https://github.com/RedHat-UX/red-hat-design-system/commit/b2e607bd99f9ff879295b8d6a86d82e353f0ac9a

### Patch Changes

- fca74374: Updated design system token metadata in custom elements manifest
- 9eedf473: `<rh-tag>`: support dark color context
- 4861f8a8: `<rh-navigation-secondary>`: corrected css parts and css properties manifest documentation
- 1a569a2d: `<rh-accordion>`: corrected and updated custom elements manifest
- 9acd4e0f: `<rh-tabs>`: Vertical tabs on small screen size `<768px` will display as a horizontal
- 760ef109: `<rh-footer>`: corrected and updated custom elements manifest
- c92f29f9: Adds `<rh-context-picker>` element in `/lib`. Moves the undocumented
  `<rh-context-provider>` element to `/lib`, and adds a deprecation warning.
- 2245dfe0: `<rh-footer>`: contain focus outline to the width of the link text
- b2e607bd: `<rh-tooltip>`: corrected and updated custom elements manifest
- 3785dfc0: `<rh-tabs>`: reduced padding on overflow scroll buttons
- a99c620a: `<rh-subnav>`: decreased padding on overflow buttons.
- 0504e5c5: `rh-footer`: fixes mobile layout on initial load
- 86c606bb: `<rh-button>`: corrected and updated custom elements manifest
- f42910c3: `<rh-badge>`: corrected and updated custom elements manifest
- cced7a49: prevent "command not found" error which could occur when installing the npm
  package in certain situations
- ee37ace4: `<rh-alert>`: clarify that the `variant` attribute takes values: `alternate`,
  `inline` (default) or `toast`
- f4ff68dc: `<rh-avatar>`: corrected css custom property data type in custom elements manifest
- b4815ae7: `<rh-avatar>`: fixed styles for names, links
- b4815ae7: `<rh-avatar>`: fix bug which could hide the name of the avatar's subject if the element contains whitespace.
- de61361d: `<rh-cta>`: make the entire background clickable
- b5333ad8: `<rh-navigation-secondary>`: fix unclosed `cta` slot tag
- de6c5869: `<rh-pagination>`: prevent false content validation warning
- 06252186: `<rh-pagination>`: fix for pagination in right-to-left contexts
- 4e272629: `<rh-spinner>`: updated and corrected custom elements manifest
- 58124c4a: `<rh-tabs>`: corrected and updated custom elements manifest
- 58124c4a: `<rh-tabs>`: replaced nonexistent `--rh-spacer-xl` token with the correct name `--rh-space-xl`
- 04573fa2: `<rh-accordion>`: fixed keyboard navigation inside of nested accordions
- 469a1c53: `<rh-navigation-secondary>`: reduce, validate, and simplify styles
- 71dd262c: `<rh-tag>`: improve loading performance by removing unnecessary imports
- 81c1676a: `<rh-subnav>`: corrected default background color to `@rhds/tokens` value
- a0d20b6d: `<rh-alert>`: corrected css for header font-weight and padding

## 1.0.1

### Patch Changes

- 12b71432: `<rh-accordion>`: fixed font-weight of focused or active header
- bac2b97c: `<rh-tabs>`: improved accessibility by updating PatternFly Elements
  dependencies. Assigns random IDs to tabs if none is provided.
- 0f5ecacb: `<rh-alert>`: fixed font-family for header slot

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
