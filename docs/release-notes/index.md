---
layout: layouts/pages/basic.njk
title: Release notes
hasToc: true
importElements:
  - rh-tile
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css' | url }}">
<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">

<style>
  rh-tile {
    margin-block: var(--rh-space-3xl, 48px);
    max-width: 320px;
  }

  rh-tile [slot="headline"] {
    font-weight: var(--rh-font-weight-heading-bold, 700);
  }

  rh-tile [icon="github"] {
    --pf-icon--size: var(--rh-size-icon-03, 32px);
  }
</style>


## Changelog

We are continually making changes in order to improve and grow the Red Hat Design System. If you think changes need to be made to a component, foundation, or anything else, please submit a [GitHub issue](https://github.com/RedHat-UX/red-hat-design-system/issues).

<rh-tile compact>
  <pf-icon slot="image" set="fab" icon="github" size="lg"></pf-icon>
  <a slot="headline" href="https://github.com/RedHat-UX/red-hat-design-system/releases">Changelog</a>
</rh-tile>

<section>

## Version 1.4.0
Released April 22, 2024

### Highlights

| Change                         | Notes {style="width: 70%" } |
| ------------------------------ | --------------------------------- |
| Added `<rh-site-status>`       | Website status communicates the operational status of a website or domain using a status icon and link. It is usually located in the Footer component. |
| Added `<rh-back-to-top>`       | Back to top component is a fragment link that allows users to quickly navigate to the top of a lengthy content. | A skip link is used to skip repetitive content on a page. It is hidden by default and can be activated by hitting the "Tab" key after loading/refreshing a page. |
| Added `<rh-skip-link>`         | A skip link is used to skip repetitive content on a page. It is hidden by default and can be activated by hitting the "Tab" key after loading/refreshing a page. |
| Updated `<rh-codeblock>`       | Added line numbers option, `Show more` toggle, copy and wrap actions, to `<rh-codeblock>` |
| Updated `<rh-menu>`            | Improved focus accessibility for keyboard navigation users on firefox. |
| Updated `<rh-button>`          | Improved focus accessibility on firefox. |
| Updated `<rh-accordion>`       | Added an accents slot with placement options as inline and bottom. |
| Updated `<rh-alert>`           | Make sure alerts always have to correct (lightest) colour palette. |
| Updated `<rh-tabs>`            | Allow tabs with long text content to fit into different-sized containers. |
| Updated PatternFly Elements tooling | [Patch update to dependencies](https://github.com/patternfly/patternfly-elements/releases/tag/%40patternfly%2Fpfe-core%403.0.0), including Lit version 3. |

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.4.0">View version 1.4 release notes</a></rh-cta>

</section>

<section>

## Version 1.3.0
Released January 11, 2024

### Highlights

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Change">Change</th>
        <th scope="col" data-label="Notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-surface&gt;</code></td>
        <td data-label="Notes">a content container that provides accessible background and font color theming for its child elements.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated to <code>RH Tokens 2.0<code></td>
        <td data-label="Notes">Uses RHDS Tokens version 2.0. <a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.3.0">See release notes</a> for important info regarding this update.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-tabs-panel&gt;</code></td>
        <td data-label="Notes">Tab Panels can now have their margin and padding overridden.</td>
      </tr>
      <tr>
        <td data-label="Change">Updated <code>&lt;rh-pagination&gt;</code></td>
        <td data-label="Notes">Added <code>numeric<code> CSS shadow part.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>accessible-label<code> to <code>&lt;rh-tile&gt;</code></td>
        <td data-label="Notes">Tile's form control labels can now be customized.</td>
      </tr>
      <tr>
        <td data-label="Change">Fixed <code>&lt;rh-tile&gt;</code> radio and checkboxes</td>
        <td data-label="Notes">Radio and checkbox tiles now submit their values in <code><form&gt;</code> elements.</td>
      </tr>
    </tbody>
  </table>
</rh-table>

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.3.0">View version 1.3 release notes</a></rh-cta>

</section>

<section>

## Version 1.2.0
Released October 16, 2023

### Highlights

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Change">Change</th>
        <th scope="col" data-label="Notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-table&gt;</code></td>
        <td data-label="Notes">A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-tile&gt;</code></td>
        <td data-label="Notes">A tile is a flexible layout with a clickable and contained surface.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-timestamp&gt;</code></td>
        <td data-label="Notes">Provides consistent formats for displaying date and time values.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-navigation-secondary&gt;</code> current page indicator support</td>
        <td data-label="Notes">Updated support for a current page indicator using <code>aria-current="page"</code>.</td>
      </tr>
      <tr>
        <td data-label="Change">Improved keyboard navigation on <code>&lt;rh-navigation-secondary&gt;</code></td>
        <td data-label="Notes">Secondary Navigation now has improved keyboard navigation.</td>
      </tr>
      <tr>
        <td data-label="Change">Fixed <code>&lt;rh-card&gt;</code> <code>header</code> slot</td>
        <td data-label="Notes">Card's header slot now displays items vertically instead of stacking, allowing for more than one item to display in the header.</td>
      </tr>
      <tr>
        <td data-label="Change">Fixed <code>&lt;rh-cta&gt;</code> <code>brick</code> variant</td>
        <td data-label="Notes">Brick variants of calls to action (CTAs) are now full width.</td>
      </tr>
    </tbody>
  </table>
</rh-table>

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.2.0">View version 1.2 release notes</a></rh-cta>

</section>

<section>

## Version 1.1.0
Released July 5, 2023

### Highlights

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Change">Change</th>
        <th scope="col" data-label="Notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-card&gt;</code></td>
        <td data-label="Notes">Card creates a component with a header, body, and footer. The header and footer are optional.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-audio-player&gt;</code></td>
        <td data-label="Notes">Audio-player creates a custom UI for audio files.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-code-block&gt;</code></td>
        <td data-label="Notes">A container for a block of code. May be composed into a toolbar or contain copy buttons or other interactive components.</td>
      </tr>
      <tr>
        <td data-label="Change">Added new CSS custom properties for <code>&lt;rh-tooltip&gt;</code></td>
        <td data-label="Notes">New CSS custom properties, like <code>--rh-tooltip-arrow-size</code>, <code>--rh-tooltip-content-background-color</code>, and more!</td>
      </tr>
      <tr>
        <td data-label="Change">Added outline variant for <code>&lt;rh-tag&gt;</code></td>
        <td data-label="Notes">Now you can use <code>variant="outline"</code>.</td>
      </tr>
    </tbody>
  </table>
</rh-table>

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.1.0">View version 1.1 release notes</a></rh-cta>

</section>

<section>

## Version 1.0.0
Released April 3, 2023

### Highlights

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Change">Change</th>
        <th scope="col" data-label="Notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-cta&gt;</code></td>
        <td data-label="Notes">A Call to Action is a styled link that directs a user to other pages or sometimes displays hidden content.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-spinner&gt;</code></td>
        <td data-label="Notes">Spinner consists of an animated circle and sometimes a message, and it indicates that a section is loading.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-button&gt;</code></td>
        <td data-label="Notes">Button is a form-associated custom element. Buttons allow users to perform an action when triggered.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-tag&gt;</code></td>
        <td data-label="Notes">A tag is an inline-block element component that provides a distinct visual style for metadata in a UI.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-blockquote&gt;</code></td>
        <td data-label="Notes">Displays a quote with author's name and title.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-subnav&gt;</code></td>
        <td data-label="Notes">The subnav component is used when an alternate navigation structure is needed to provide additional navigation on a site that does not need the product branding or structural depth that <code>rh-secondary-nav</code> provides.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-tabs&gt;</code></td>
        <td data-label="Notes">A tab set of layered content, including tab widgets and their associated tab panel.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-accordion&gt;</code></td>
        <td data-label="Notes">Accordion displays multiple, related disclosure widgets.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-alert&gt;</code></td>
        <td data-label="Notes">An alert displays auxiliary information on a website. An alert can have one of several states of severity.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-avatar&gt;</code></td>
        <td data-label="Notes">An Avatar is a placeholder graphic for a photo or an image that is placed to the left or on top of text.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-pagination&gt;</code></td>
        <td data-label="Notes">Pagination is a web component for navigating paginated content.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-stat&gt;</code></td>
        <td data-label="Notes">An element which can be used to display statistics inside of an app.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-badge&gt;</code></td>
        <td data-label="Notes">A badge is used to annotate other information with numerical content.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-tooltip&gt;</code></td>
        <td data-label="Notes">A tooltip displays floating content next to a portion of inline content.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-secondary-nav&gt;</code></td>
        <td data-label="Notes">A non-primary navigation for products and subcategory pages.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-footer&gt;</code></td>
        <td data-label="Notes">A universal footer component.</td>
      </tr>
      <tr>
        <td data-label="Change">Added <code>&lt;rh-global-footer&gt;</code></td>
        <td data-label="Notes">A standalone global footer component.</td>
      </tr>
      <tr>
        <td data-label="Change">Renamed <code>&lt;rh-global-footer&gt;</code> to <code>&lt;rh-footer-universal&gt;</code></td>
        <td data-label="Notes">Renamed the global slot to universal.</td>
      </tr>
      <tr>
        <td data-label="Change">Renamed <code>&lt;rh-secondary-nav&gt;</code> to <code>&lt;rh-navigation-secondary&gt;</code></td>
        <td data-label="Notes">Renamed the component and all sub components to <code>&lt;rh-navigation-secondary-*&gt;</code>.</td>
      </tr>
    </tbody>
  </table>
</rh-table>


<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.0.0">View version 1.0 release notes</a></rh-cta>

</section>

<section>

## Older versions

For release notes on older versions, please [view our release notes on GitHub](https://github.com/RedHat-UX/red-hat-design-system/releases).

</section>

<uxdot-feedback>
  <h2>Roadmap</h2>
  <p>For an up-to-date outline of what we're working on and what we're planning to do in the Red Hat Design System, visit <a href="/about/roadmap">our roadmap</a>.</p>
</uxdot-feedback>
