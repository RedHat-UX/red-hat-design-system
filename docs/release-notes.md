---
layout: layout-basic.njk
title: Release notes
bodyClasses: page-docs
---

## Changelog

We are continually making changes in order to improve and grow the Red Hat Design System. If you think changes need to be made to a component, foundation, or anything else, please submit a [GitHub issue](https://github.com/RedHat-UX/red-hat-design-system/issues).

<nav class="releases-links">
  <rh-block id="changelog-block">
    <a href="https://github.com/RedHat-UX/red-hat-design-system/releases">
      Changelog
    </a>
  </rh-block>
</nav>

<section class="release-versions">
<section class="section release-version">

## Version 1.4.0
Release April 22, 2024

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
<section class="section release-version">

## Version 1.3.0
Released January 11, 2024

### Highlights

| Change                         | Notes {style="width: 70%" } |
| ------------------------------ | --------------------------------- |
| Added `<rh-surface>`           | a content container that provides accessible background and font color theming for its child elements. |
| Updated to `RH Tokens 2.0`     | Uses RHDS Tokens version 2.0. [See release notes](https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.3.0) for important info regarding this update. |
| Updated `<rh-tabs-panel>`      | Tab Panels can now have their margin and padding overridden. |
| Updated `<rh-pagination>`      | Added `numeric` CSS shadow part. |
| Added `accessible-label` to `<rh-tile>` | Tile's form control labels can now be customized. |
| Fixed `<rh-tile>` radio and checkboxes | Radio and checkbox tiles now submit their values in `<form>` elements. |

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.3.0">View version 1.3 release notes</a></rh-cta>

</section>
<section class="section release-version">

## Version 1.2.0
Released October 16, 2023

### Highlights

| Change                         | Notes {style="width: 70%" } |
| ------------------------------ | --------------------------------- |
| Added `<rh-table>`             | A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data. |
| Added `<rh-tile>`              | A tile is a flexible layout with a clickable and contained surface. |
| Added `<rh-timestamp>`         | Provides consistent formats for displaying date and time values. |
| Added `<rh-navigation-secondary>` current page indicator support | Updated support for a current page indicator using `aria-current="page"`. |
| Improved keyboard navigation on `<rh-navigation-secondary>` | Secondary Navigation now has improved keyboard navigation. |
| Fixed `<rh-card>` `header` slot | Card's header slot now displays items vertically instead of stacking, allowing for more than one item to display in the header. |
| Fixed `<rh-cta>` `brick` variant | Brick variants of calls to action (CTAs) are now full width. |


<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.2.0">View version 1.2 release notes</a></rh-cta>

</section>
<section class="section release-version">

## Version 1.1.0
Released July 5, 2023

### Highlights

| Change                         | Notes {style="width: 70%" } |
| ------------------------------ | --------------------------------- |
| Added `<rh-card>`              | Card creates a component with a header, body, and footer. The header and footer are optional. |
| Added `<rh-audio-player>`      | Audio-player creates a custom UI for audio files. |
| Added `<rh-code-block>`        | A container for a block of code. May be composed into a toolbar or contain copy buttons or other interactive components. |
| Added new CSS custom properties for `<rh-tooltip>` | New CSS custom properties, like `--rh-tooltip-arrow-size`, `--rh-tooltip-content-background-color`, and more! |
| Added outline variant for `<rh-tag>` | Now you can use `variant="outline"`. |


<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.1.0">View version 1.1 release notes</a></rh-cta>

</section>
<section class="section release-version">

## Version 1.0.0
Released April 3, 2023

### Highlights

| Change                         | Notes {style="width: 70%" } |
| ------------------------------ | --------------------------------- |
| Added `<rh-cta>`      | A Call to Action is a styled link that directs a user to other pages or sometimes displays hidden content. |
| Added `<rh-spinner>`      | Spinner consists of an animated circle and sometimes a message, and it indicates that a section is loading. |
| Added `<rh-button>`      | Button is a form-associated custom element. Buttons allow users to perform an action when triggered. |
| Added `<rh-tag>`      | A tag is an inline-block element component that provides a distinct visual style for metadata in a UI. |
| Added `<rh-blockquote>`      | Displays a quote with author's name and title. |
| Added `<rh-subnav>`      | The subnav component is used when an alternate navigation structure is needed to provide additional navigation on a site that does not need the product branding or structural depth that `rh-secondary-nav` provides. |
| Added `<rh-tabs>`      | A tab set of layered content, including tab widgets and their associated tab panel. |
| Added `<rh-accordion>`      | Accordion displays multiple, related disclosure widgets. |
| Added `<rh-alert>`      | An alert displays auxiliary information on a website. An alert can have one of several states of severity. |
| Added `<rh-avatar>`      | An Avatar is a placeholder graphic for a photo or an image that is placed to the left or on top of text. |
| Added `<rh-pagination>`      | Pagination is a web component for navigating paginated content. |
| Added `<rh-stat>`      | An element which can be used to display statistics inside of an app. |
| Added `<rh-badge>`      | A badge is used to annotate other information with numerical content. |
| Added `<rh-tooltip>`      | A tooltip displays floating content next to a portion of inline content. |
| Added `<rh-secondary-nav>` | A non-primary navigation for products and subcategory pages. |
| Added `<rh-footer>`      | A universal footer component. |
| Added `<rh-global-footer>` | A standalone global footer component. |
| Renamed `<rh-global-footer>` to `<rh-footer-universal>` | Renamed the global slot to universal. |
| Renamed `<rh-secondary-nav>` to `<rh-navigation-secondary>` | Renamed the component and all sub components to `rh-navigation-secondary-*`. |



<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.0.0">View version 1.0 release notes</a></rh-cta>

</section>
</section>

<section class="section release-version">

## Older versions

For release notes on older versions, please [view our release notes on GitHub](https://github.com/RedHat-UX/red-hat-design-system/releases).

</section>

{% feedback %}
  <h2>Roadmap</h2>
  <p>For an up-to-date outline of what we're working on and what we're planning to do in the Red Hat Design System, visit <a href="/about/roadmap">our roadmap</a>.</p>
{% endfeedback %}
