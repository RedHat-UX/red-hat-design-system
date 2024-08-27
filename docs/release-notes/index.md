---
layout: layouts/pages/basic.njk
title: Release notes
hasToc: true
importElements:
  - rh-tile
  - rh-tag
  - rh-alert
---

<link rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">
<link rel="stylesheet" href=" /assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">

<style>
  rh-tile {
    margin-block: var(--rh-space-3xl, 48px);
    max-width: 320px;
  }

  rh-tile [slot="headline"] {
    font-weight: var(--rh-font-weight-heading-bold, 700);
  }

  rh-tile [icon="github"] {
    --rh-icon-size: var(--rh-size-icon-03, 32px);
  }

  [data-label="Change"] {
    width: 30%;
  }

  [data-label="Type"] {
    width: 10%;
  }
</style>


## Changelog

We are continually making changes in order to improve and grow the Red Hat Design System. If you think changes need to be made to a component, foundation, or anything else, please submit a [GitHub issue](https://github.com/RedHat-UX/red-hat-design-system/issues).

<rh-tile compact>
  <rh-icon slot="image" set="social" icon="github" size="lg"></rh-icon>
  <a slot="headline" href="https://github.com/RedHat-UX/red-hat-design-system/releases">Changelog</a>
</rh-tile>

<section aria-labelledby="version-2.0.0">

## Version 2.0.0
Released August 27, 2024

<rh-alert state="info">
    <h3 slot="header">Upgrading?</h3>
    <p>If you're upgrading to version 2.0, <a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v2.0.0">read our changelog</a> for upgrade instructions.</p>
</rh-alert>

### Highlights

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Change">Change</th>
        <th scope="col" data-label="Type">Type</th>
        <th scope="col" data-label="Notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Change"><code>&lt;rh-accordion&gt;</code> accessibility improvements</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed the <code>heading-tag</code> and <code>heading-text</code> attributes from the <code>rh-accordion-header</code> element to improve accessibility.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-accordion&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed the unused <code>icon</code> part (and attribute) and the (previously undocumented) <code>container</code> part from <code>&lt;rh-accordion-header&gt;</code>. Removed unused <code>bordered</code> attribute.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-footer&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed deprecated <code>&lt;rh-global-footer&gt;</code> element and deprecated <code>global</code> slot. Use <code>&lt;rh-footer-universal&gt;</code> element and <code>universal</code> slot.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-cta&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed read-only <code>cta</code> property; use <code>data-analytics</code> attributes instead.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-tabs&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed deprectated <code>theme</code> attribute for the tabs and panels; use the <code>--rh-tabs-active-border-color</code> CSS property directly.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-dialog&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed deprecated <code>--rh-modal-video-aspect-ratio</code> CSS custom property.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-footer&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed deprecated CSS custom properties.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-table&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed deprecated CSS custom properties.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-spinner&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed deprecated <code>color-palette</code> attribute.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-cta&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed deprecated <code>color-palette</code> attribute.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-alert&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed deprecated <code>toast</code> boolean attribute.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-navigation-secondary&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed deprecated alias <code>&lt;rh-secondary-nav&gt;</code>.</td>
      </tr>
      <tr>
        <td data-label="Change"><code>&lt;rh-tabs&gt;</code> API changes</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed <code>box</code> and <code>vertical</code> attributes from <code>&lt;rh-tab&gt;</code>; set them on <code>&lt;rh-tabs&gt;</code> instead.</td>
      </tr>
      <tr>
        <td data-label="Change">Changed RHDS entrypoint</td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Removed the <code>rhds.min.js</code> entrypoint and replaced it with a module that reexports all our element modules.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-icon&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Icons represents general concepts and can support text as a decorative element. The <code>&lt;rh-icon&gt;</code> element allows experience and content authors to add Red Hat icons of varying dimensions in the same area without shifting surrounding content.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-switch&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-health-index&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Health index grades the health or security level of something.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-video-embed&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A video embed is a graphical preview of a video overlayed with a play button. When clicked, the YouTube video will begin playing.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-breadcrumb&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A breadcrumb navigation is a secondary navigation element consisting of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>promo</code> variant to <code>&lt;rh-card&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">The promo card variant allows users to easily display text and optionally an image side by side.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>open</code> variant and <code>small</code> size to <code>&lt;rh-pagination&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Users can now further customize pagination by choosing which variant and size are most appropriate for their applications.</td>
      </tr>
      <tr>
        <td data-label="Change">Added static <code>toast</code> method to <code>&lt;rh-alert&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">The <code>toast</code> method allows for toast-like alert messages.</td>
      </tr>
      <tr>
        <td data-label="Change">Fix <code>&lt;rh-tile-group&gt;</code> grid layout</td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Corrected application of grid layout to slotted elements.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-cta&gt;</code> focus states</td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Changed focus states to mimic hover states and an additional outline.</td>
      </tr>
      <tr>
        <td data-label="Change">Added dark color palette to <code>&lt;rh-pagination&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Users can now set <code>color-palette="dark"</code> on pagination.</td>
      </tr>
      <tr>
        <td data-label="Change">Added light DOM shim for <code>&lt;rh-cta&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Added <code>rh-cta-lightdom-shim.css</code> as an optional file to help reduce layout shift before element is defined, where declarative shadow DOM is not an option.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-card&gt;</code> heading custom properties</td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">User can now cumstomize CSS custom properties for card headings.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>href</code> attribute to <code>&lt;rh-cta&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Users can now set the <code>href</code> directly on <code>&lt;rh-cta&gt;</code> rather than slotting an anchor tag.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>icon-set</code> attribute to <code>&lt;rh-cta&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Users can now choose an <code>icon-set</code> in their call-to-action.</td>
      </tr>
    </tbody>
  </table>
</rh-table>

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v2.0.0">View version 2.0 release notes</a></rh-cta>

</section>

<section aria-labelledby="version-1.4.0">

## Version 1.4.0
Released April 22, 2024

### Highlights

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Change">Change</th>
        <th scope="col" data-label="Type">Type</th>
        <th scope="col" data-label="Notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-site-status&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Website status communicates the operational status of a website or domain using a status icon and link. It is usually located in the Footer component.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-back-to-top&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Back to top component is a fragment link that allows users to quickly navigate to the top of a lengthy content.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-skip-link&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A skip link is used to skip repetitive content on a page. It is hidden by default and can be activated by hitting the <kbd>Tab<kbd> key after loading/refreshing a page.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-code-block&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Added line numbers option, "Show more" toggle, copy and wrap actions, to <code>&lt;rh-code-block&gt;</code></td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-menu&gt;</code></td>
        <td data-label="Type"><rh-tag color="gray">Patch</rh-tag></td>
        <td data-label="Notes">Improved focus accessibility for keyboard navigation users on Firefox.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-button&gt;</code></td>
        <td data-label="Type"><rh-tag color="gray">Patch</rh-tag></td>
        <td data-label="Notes">Improved focus accessibility on Firefox.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-accordion&gt;</code></td>
        <td data-label="Type"><rh-tag color="gray">Patch</rh-tag></td>
        <td data-label="Notes">Added an accents slot with placement options as inline and bottom.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-alert&gt;</code></td>
        <td data-label="Type"><rh-tag color="gray">Patch</rh-tag></td>
        <td data-label="Notes">Make sure alerts always have to correct (lightest) color palette.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-tabs&gt;</code></td>
        <td data-label="Type"><rh-tag color="gray">Patch</rh-tag></td>
        <td data-label="Notes">Allow tabs with long text content to fit into different-sized containers.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated PatternFly Elements tooling</td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes"><a href="https://github.com/patternfly/patternfly-elements/releases/tag/%40patternfly%2Fpfe-core%403.0.0">Patch update to dependencies</a>, including Lit version 3.</td>
      </tr>
    </tbody>
  </table>
</rh-table>

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.4.0">View version 1.4 release notes</a></rh-cta>

</section>

<section aria-labelledby="version-1.3.0">

## Version 1.3.0
Released January 11, 2024

### Highlights

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Change">Change</th>
        <th scope="col" data-label="Type">Type</th>
        <th scope="col" data-label="Notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-surface&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">a content container that provides accessible background and font color theming for its child elements.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated to <code>RH Tokens 2.0</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Uses RHDS Tokens version 2.0. <a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.3.0">See release notes</a> for important info regarding this update.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-tabs-panel&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Tab Panels can now have their margin and padding overridden.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-pagination&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Added <code>numeric</code> CSS shadow part.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>accessible-label</code> to <code>&lt;rh-tile&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Tile's form control labels can now be customized.</td>
      </tr>
      <tr>
        <td data-label="Change">Fixed <code>&lt;rh-tile&gt;</code> radio and checkboxes</td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Radio and checkbox tiles now submit their values in <code>&lt;form&gt;</code> elements.</td>
      </tr>
    </tbody>
  </table>
</rh-table>

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.3.0">View version 1.3 release notes</a></rh-cta>

</section>

<section aria-labelledby="version-1.2.0">

## Version 1.2.0
Released October 16, 2023

### Highlights

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Change">Change</th>
        <th scope="col" data-label="Type">Type</th>
        <th scope="col" data-label="Notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-table&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-tile&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A tile is a flexible layout with a clickable and contained surface.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-timestamp&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Provides consistent formats for displaying date and time values.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-navigation-secondary&gt;</code> current page indicator support</td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Updated support for a current page indicator using <code>aria-current="page"</code>.</td>
      </tr>
      <tr>
        <td data-label="Change">Fixed <code>&lt;rh-card&gt;</code> <code>header</code> slot</td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Card's header slot now displays items vertically instead of stacking, allowing for more than one item to display in the header.</td>
      </tr>
      <tr>
        <td data-label="Change">Improved keyboard navigation on <code>&lt;rh-navigation-secondary&gt;</code></td>
        <td data-label="Type"><rh-tag color="gray">Patch</rh-tag></td>
        <td data-label="Notes">Secondary Navigation now has improved keyboard navigation.</td>
      </tr>
      <tr>
        <td data-label="Change">Fixed <code>&lt;rh-cta&gt;</code> <code>brick</code> variant</td>
        <td data-label="Type"><rh-tag color="gray">Patch</rh-tag></td>
        <td data-label="Notes">Brick variants of calls to action (CTAs) are now full width.</td>
      </tr>
    </tbody>
  </table>
</rh-table>

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.2.0">View version 1.2 release notes</a></rh-cta>

</section>

<section aria-labelledby="version-1.1.0">

## Version 1.1.0
Released July 5, 2023

### Highlights

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Change">Change</th>
        <th scope="col" data-label="Type">Type</th>
        <th scope="col" data-label="Notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-card&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Card creates a component with a header, body, and footer. The header and footer are optional.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-audio-player&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Audio-player creates a custom UI for audio files.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-code-block&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A container for a block of code. May be composed into a toolbar or contain copy buttons or other interactive components.</td>
      </tr>
      <tr>
        <td data-label="Change">Added new CSS custom properties for <code>&lt;rh-tooltip&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">New CSS custom properties, like <code>--rh-tooltip-arrow-size</code>, <code>--rh-tooltip-content-background-color</code>, and more!</td>
      </tr>
      <tr>
        <td data-label="Change">Added outline variant for <code>&lt;rh-tag&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Now you can use <code>variant="outline"</code>.</td>
      </tr>
    </tbody>
  </table>
</rh-table>

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.1.0">View version 1.1 release notes</a></rh-cta>

</section>

<section aria-labelledby="version-1.0.0">

## Version 1.0.0
Released April 3, 2023

### Highlights

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Change">Change</th>
        <th scope="col" data-label="Type">Type</th>
        <th scope="col" data-label="Notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-cta&gt;</code></td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">A Call to Action is a styled link that directs a user to other pages or sometimes displays hidden content.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-secondary-nav&gt;</code></td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">A non-primary navigation for products and subcategory pages.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-global-footer&gt;</code></td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">A standalone global footer component.</td>
      </tr>
      <tr>
        <td data-label="Change">Renamed <code>&lt;rh-global-footer&gt;</code> to <code>&lt;rh-footer-universal&gt;</code></td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Renamed the global slot to universal.</td>
      </tr>
      <tr>
        <td data-label="Change">Renamed <code>&lt;rh-secondary-nav&gt;</code> to <code>&lt;rh-navigation-secondary&gt;</code></td>
        <td data-label="Type"><rh-tag color="red">Major</rh-tag></td>
        <td data-label="Notes">Renamed the component and all sub components to <code>&lt;rh-navigation-secondary-*&gt;</code>.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-spinner&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Spinner consists of an animated circle and sometimes a message, and it indicates that a section is loading.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-button&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Button is a form-associated custom element. Buttons allow users to perform an action when triggered.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-tag&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A tag is an inline-block element component that provides a distinct visual style for metadata in a UI.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-blockquote&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Displays a quote with author's name and title.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-subnav&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">The subnav component is used when an alternate navigation structure is needed to provide additional navigation on a site that does not need the product branding or structural depth that <code>rh-secondary-nav</code> provides.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-tabs&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A tab set of layered content, including tab widgets and their associated tab panel.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-accordion&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Accordion displays multiple, related disclosure widgets.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-alert&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">An alert displays auxiliary information on a website. An alert can have one of several states of severity.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-avatar&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">An Avatar is a placeholder graphic for a photo or an image that is placed to the left or on top of text.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-pagination&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">Pagination is a web component for navigating paginated content.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-stat&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">An element which can be used to display statistics inside of an app.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-badge&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A badge is used to annotate other information with numerical content.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-tooltip&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A tooltip displays floating content next to a portion of inline content.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-footer&gt;</code></td>
        <td data-label="Type"><rh-tag color="blue">Minor</rh-tag></td>
        <td data-label="Notes">A universal footer component.</td>
      </tr>
    </tbody>
  </table>
</rh-table>


<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.0.0">View version 1.0 release notes</a></rh-cta>

</section>

<section aria-labelledby="older-versions">

## Older versions

For release notes on older versions, please [view our release notes on GitHub](https://github.com/RedHat-UX/red-hat-design-system/releases).

</section>

<uxdot-feedback>
  <h2>Roadmap</h2>
  <p>For an up-to-date outline of what we're working on and what we're planning to do in the Red Hat Design System, visit <a href="/about/roadmap">our roadmap</a>.</p>
</uxdot-feedback>
