---
layout: layouts/pages/basic.njk
title: Release notes
hasToc: true
---

<link data-helmet
      rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">
<link data-helmet
      rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">

<style data-helmet>
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

  @media (min-width: 768px) {
    [data-label="Change"] {
      width: 30%;
    }

    [data-label="Type"] {
      width: 10%;
    }
  }
  @media (max-width: 768px) {
    rh-table thead ~ tbody tr :is(th, td) {
      display: block;
    }
    rh-table thead ~ tbody tr :is(td,th):before {
      margin-inline-end: var(--rh-length-2xs, 3px);
    }
  }
</style>

<script data-helmet type="module">
  import '@rhds/elements/rh-tile/rh-tile.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-table/rh-table.js';
</script>

{% macro j() %}<rh-tag color="red">Major</rh-tag>{% endmacro %}
{% macro i() %}<rh-tag color="blue">Minor</rh-tag>{% endmacro %}
{% macro p() %}<rh-tag color="gray">Patch</rh-tag>{% endmacro %}

## Changelog

We are continually making changes in order to improve and grow the Red Hat 
Design System. If you think changes need to be made to a component, foundation, 
or anything else, please submit a [GitHub issue][issues].

<rh-tile compact>
  <rh-icon slot="image" set="social" icon="github" size="lg"></rh-icon>
  <a slot="headline" href="https://github.com/RedHat-UX/red-hat-design-system/releases">Changelog</a>
</rh-tile>

<section aria-labelledby="version-2.1.0">

## Version 2.1.0
Released October 1, 2024

### Highlights

<rh-table>

| Change                              | Type    | Notes |
| ----------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Theming: added theming tokens to most elements | {{i()}} | New theming tokens allow page-level and container-level colour palettes on patterns and elements. |
| `<rh-alert>`: added new `state` colors | {{i()}} | Added `info`, `neutral`, and `caution`. Deprecated `note` (aliasing `info`), `default` (aliasing `neutral`), and `error` (aliasing `danger`) |
| `<rh-accordion>`: improved accessibility | {{i()}} | Removed arrow-key keyboard navigation in favor of tab navigation through accordion sets |
| `<rh-badge>`: added new `state` colors | {{i()}} | Added `danger`, `warning`, `caution`, `neutral`, and `info`. Deprecated `critical` (aliasing `danger`), `important` (aliasing `caution`), `moderate` (aliasing `warning`), and `note` (aliasing `info`) |
| `<rh-button>`: added `icon-set` attribute | {{i()}} | Added `icon-set="..."` attribute, which corresponds to `<rh-icon set="...">` |
| `<rh-card>`: added header background theming API | {{i()}} | Using `--rh-card-header-background-on-light` and `--rh-card-header-background-on-dark` CSS custom props allows for theming the card header's background |
| `<rh-code-block>`: added syntax highlighting | {{i()}} | Code blocks now have optional Red Hat color-themed syntax highlighting via client side or server side (prerendered prismjs code-blocks). |
| `<rh-table>`: improved responsive layout API | {{i()}} | Added auto-generated table cell headings for responsive layout on small screens |
| `<rh-tag>`: added new tag colors | {{i()}} | Added `red-orange`, `yellow`, and `teal` colors. Deprecated `cyan`, aliasing it to `teal` |
| `<rh-tag>`: added `destaurated` variant | {{i()}} | Added `variant="desaturated"` to reduce visual prominence or to better fit a specific theme or visual style |
| `<rh-tag>`: added `size` attribute | {{i()}} | Added `size="compact"` for areas where space is limited |
| `<rh-tag>`: added optional `href` attribute | {{i()}} | Adding `href` attribute to `<rh-tag>` removes the need for slotting an anchor element (`<a>`) on liked tags |
| `<rh-tile>`: added `private` and `external` link variants | {{i()}} |  Using `link="private"` or `link="external"` indicates whether the link is private or external and changes the tile icon from an arrow to a padlock or external link icons respectively |
| `<rh-skip-link>`: added optional `href` attribute | {{i()}} | Adding `href` attribute to `<rh-skip-link>` removes the need for slotting an anchor element (`<a>`) |
| `<rh-audio-player>`: added mini playback control | {{p()}} | Mini layout now has playback control |
| `<rh-navigation-secondary>`: improved accessibility | {{p()}} | Removed arrow-key keyboard navigation in favor of tab navigation through navigation items and added `accessible-label` attribute to explicitly label landmark |
| `<rh-subnav>`: improved accessibility | {{p()}} | Removed arrow-key keyboard navigation in favor of tab navigation through navigation items and added `accessible-label` attribute to explicitly label landmark |
| `<rh-table>`: added container query support | {{p()}} | Tables now adjust to the size of their containing element, not just viewport size |
| `<rh-tabs>`: added container query support | {{p()}} | Tabs now adjust to the size of their containing element, not just viewport size |
| `<rh-tabs>`: added advanced layout support | {{p()}} | Tabs can now participate in advanced layouts, like `display: subgrid` |

</rh-table>

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v2.1.0">View all version 2.1 release notes</a></rh-cta>

</section>

</section>

<section aria-labelledby="version-2.0.0">

## Version 2.0.0
Released August 27, 2024

<rh-alert state="info">
  <h3 slot="header">Upgrading?</h3>
  <p>If you're upgrading to version 2.0, <a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v2.0.0">read our changelog</a> for upgrade instructions.</p>
</rh-alert>

### Highlights

<rh-table>

| Change                                                     | Type    | Notes |
| ---------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<rh-accordion>` accessibility improvements                | {{j()}} | Removed the `heading-tag` and `heading-text` attributes from the `rh-accordion-header` element to improve accessibility.                                                                                                                        |
| `<rh-accordion>` API changes                               | {{j()}} | Removed the unused `icon` part (and attribute) and the (previously undocumented) `container` part from `<rh-accordion-header>`. Removed unused `bordered` attribute.                                                                            |
| `<rh-footer>` API changes                                  | {{j()}} | Removed deprecated `<rh-global-footer>` element and deprecated `global` slot. Use `<rh-footer-universal>` element and `universal` slot.                                                                                                         |
| `<rh-cta>` API changes                                     | {{j()}} | Removed read-only `cta` property; use `data-analytics` attributes instead.                                                                                                                                                                      |
| `<rh-tabs>` JavaScript API changes                         | {{j()}} | Removed deprectated `RhTabs.isTab()` and `RhTabs.isPanel()` static class methods.                                                                                                                                                               |
| `<rh-tabs>` HTML/CSS API changes                           | {{j()}} | Removed deprectated `theme` attribute for the tabs and panels; use the `--rh-tabs-active-border-color` CSS property directly.                                                                                                                   |
| `<rh-dialog>` API changes                                  | {{j()}} | Removed deprecated `--rh-modal-video-aspect-ratio` CSS custom property.                                                                                                                                                                         |
| `<rh-footer>` API changes                                  | {{j()}} | Removed deprecated CSS custom properties.                                                                                                                                                                                                       |
| `<rh-table>` API changes                                   | {{j()}} | Removed deprecated CSS custom properties.                                                                                                                                                                                                       |
| `<rh-spinner>` API changes                                 | {{j()}} | Removed deprecated `color-palette` attribute.                                                                                                                                                                                                   |
| `<rh-cta>` API changes                                     | {{j()}} | Removed previously-deprecated `color-palette` attribute.                                                                                                                                                                                        |
| `<rh-alert>` API changes                                   | {{j()}} | Removed deprecated `toast` boolean attribute.                                                                                                                                                                                                   |
| `<rh-navigation-secondary>` API changes                    | {{j()}} | Removed deprecated alias `<rh-secondary-nav>`.                                                                                                                                                                                                  |
| `<rh-tabs>` API changes                                    | {{j()}} | Removed `box` and `vertical` attributes from `<rh-tab>`; set them on `<rh-tabs>` instead.                                                                                                                                                       |
| Changed RHDS entrypoint                                    | {{j()}} | Removed the `rhds.min.js` entrypoint and replaced it with a module that reexports all our element modules.                                                                                                                                      |
| Added `<rh-icon>`                                          | {{i()}} | Icons represents general concepts and can support text as a decorative element. The `<rh-icon>` element allows experience and content authors to add Red Hat icons of varying dimensions in the same area without shifting surrounding content. |
| Added `<rh-switch>`                                        | {{i()}} | A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.                                          |
| Added `<rh-health-index>`                                  | {{i()}} | Health index grades the health or security level of something.                                                                                                                                                                                  |
| Added `<rh-video-embed>`                                   | {{i()}} | A video embed is a graphical preview of a video overlayed with a play button. When clicked, the YouTube video will begin playing.                                                                                                               |
| Added `<rh-breadcrumb>`                                    | {{i()}} | A breadcrumb navigation is a secondary navigation element consisting of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application.                     |
| Added `promo` variant to `<rh-card>`                       | {{i()}} | The promo card variant allows users to easily display text and optionally an image side by side.                                                                                                                                                |
| Added `open` variant and `small` size to `<rh-pagination>` | {{i()}} | Users can now further customize pagination by choosing which variant and size are most appropriate for their applications.                                                                                                                      |
| Added static `toast` method to `<rh-alert>`                | {{i()}} | The `toast` method allows for toast-like alert messages.                                                                                                                                                                                        |
| Added dark color palette to `<rh-pagination>`              | {{i()}} | Pagination now responds to themeable containers like `<rh-surface>`.                                                                                                                                                                            |
| Added light DOM shim for `<rh-cta>`                        | {{i()}} | Added `rh-cta-lightdom-shim.css` as an optional file to help reduce layout shift before element is defined, where declarative shadow DOM is not an option.                                                                                      |
| Added `<rh-card>` heading custom properties                | {{i()}} | User can now cumstomize CSS custom properties for card headings.                                                                                                                                                                                |
| Added `href` attribute to `<rh-cta>`                       | {{i()}} | Users can now set the `href` directly on `<rh-cta>` rather than slotting an anchor tag.                                                                                                                                                         |
| Added `icon-set` attribute to `<rh-cta>`                   | {{i()}} | Users can now choose an `icon-set` in their call-to-action.                                                                                                                                                                                     |
| Fix `<rh-tile-group>` grid layout                          | {{p()}} | Corrected application of grid layout to slotted elements.                                                                                                                                                                                       |
| Updated `<rh-cta>` focus states                            | {{p()}} | Changed focus states to mimic hover states and an additional outline.                                                                                                                                                                           |

</rh-table>

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v2.0.0">View all version 2.0 release notes</a></rh-cta>

</section>

<section aria-labelledby="version-1.4.0">

## Version 1.4.0
Released April 22, 2024

### Highlights

<rh-table>

| Change                              | Type    | Notes |
| ---------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Added `<rh-site-status>`            | {{i()}} | Website status communicates the operational status of a website or domain using a status icon and link. It is usually located in the Footer component.                                  |
| Added `<rh-back-to-top>`            | {{i()}} | Back to top component is a fragment link that allows users to quickly navigate to the top of a lengthy content.                                                                         |
| Added `<rh-skip-link>`              | {{i()}} | A skip link is used to skip repetitive content on a page. It is hidden by default and can be activated by hitting the <span class="kbd">Tab</span> key after loading/refreshing a page. |
| Updated `<rh-code-block>`           | {{i()}} | Added line numbers option, "Show more" toggle, copy and wrap actions, to `<rh-code-block>`                                                                                              |
| Updated `<rh-menu>`                 | {{p()}} | Improved focus accessibility for keyboard navigation users on Firefox.                                                                                                                  |
| Updated `<rh-button>`               | {{p()}} | Improved focus accessibility on Firefox.                                                                                                                                                |
| Updated `<rh-accordion>`            | {{p()}} | Added an accents slot with placement options as inline and bottom.                                                                                                                      |
| Updated `<rh-alert>`                | {{p()}} | Make sure alerts always have to correct (lightest) color palette.                                                                                                                       |
| Updated `<rh-tabs>`                 | {{p()}} | Allow tabs with long text content to fit into different-sized containers.                                                                                                               |
| Updated PatternFly Elements tooling | {{i()}} | [Patch update to dependencies][pfepatchlit3], including Lit version 3.                                                                                                                  |

</rh-table>

[pfepatchlit3]: https://github.com/patternfly/patternfly-elements/releases/tag/%40patternfly%2Fpfe-core%403.0.0

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.4.0">View all version 1.4 release notes</rh-cta>

</section>

<section aria-labelledby="version-1.3.0">

## Version 1.3.0
Released January 11, 2024

### Highlights

<rh-table>

| Change                                  | Type    | Notes                                                                                                      |
| --------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| Added `<rh-surface>`                    | {{i()}} | a content container that provides accessible background and font color theming for its child elements.     |
| Updated to `RH Tokens 2.0`              | {{i()}} | Uses RHDS Tokens version 2.0. [See v1.3 release notes][tokens13] for important info regarding this update. |
| Updated `<rh-tabs-panel>`               | {{i()}} | Tab Panels can now have their margin and padding overridden.                                               |
| Updated `<rh-pagination>`               | {{i()}} | Added `numeric` CSS shadow part.                                                                           |
| Added `accessible-label` to `<rh-tile>` | {{i()}} | Tile's form control labels can now be customized.                                                          |
| Fixed `<rh-tile>` radio and checkboxes  | {{i()}} | Radio and checkbox tiles now submit their values in `<form>` elements.                                     |

</rh-table>

[tokens13]: https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.3.0

<rh-cta><a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.3.0">View all version 1.3 release notes</a></rh-cta>

</section>

<section aria-labelledby="version-1.2.0">

## Version 1.2.0
Released October 16, 2023

### Highlights

<rh-table>

| Change                                                           | Type    | Notes                                                                                                                           |
| ---------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Added `<rh-table>`                                               | {{i()}} | A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.        |
| Added `<rh-tile>`                                                | {{i()}} | A tile is a flexible layout with a clickable and contained surface.                                                             |
| Added `<rh-timestamp>`                                           | {{i()}} | Provides consistent formats for displaying date and time values.                                                                |
| Added `<rh-navigation-secondary>` current page indicator support | {{i()}} | Updated support for a current page indicator using `aria-current="page"`.                                                       |
| Fixed `<rh-card>` `header` slot                                  | {{i()}} | Card's header slot now displays items vertically instead of stacking, allowing for more than one item to display in the header. |
| Improved keyboard navigation on `<rh-navigation-secondary>`      | {{p()}} | Secondary Navigation now has improved keyboard navigation.                                                                      |
| Fixed `<rh-cta>` `brick` variant                                 | {{p()}} | Brick variants of calls to action (CTAs) are now full width.                                                                    |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.2.0">View all version 1.2 release notes</rh-cta>

</section>

<section aria-labelledby="version-1.1.0">

## Version 1.1.0
Released July 5, 2023

### Highlights

<rh-table>

| Change                                             | Type    | Notes |
| ---------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Added `<rh-card>`                                  | {{i()}} | Card creates a component with a header, body, and footer. The header and footer are optional.                            |
| Added `<rh-audio-player>`                          | {{i()}} | Audio-player creates a custom UI for audio files.                                                                        |
| Added `<rh-code-block>`                            | {{i()}} | A container for a block of code. May be composed into a toolbar or contain copy buttons or other interactive components. |
| Added new CSS custom properties for `<rh-tooltip>` | {{i()}} | New CSS custom properties, like `--rh-tooltip-arrow-size`, `--rh-tooltip-content-background-color`, and more!            |
| Added outline variant for `<rh-tag>`               | {{i()}} | Now you can use `variant="outline"`.                                                                                     |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.1.0">
View all version 1.1 release notes
</rh-cta>

</section>

<section aria-labelledby="version-1.0.0">

## Version 1.0.0
Released April 3, 2023

### Highlights

<rh-table>

| Change                                                      | Type    | Notes |
| ---------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Added `<rh-cta>`                                            | {{j()}} | A Call to Action is a styled link that directs a user to other pages or sometimes displays hidden content.                                                                                                             |
| Added `<rh-secondary-nav>`                                  | {{j()}} | A non-primary navigation for products and subcategory pages.                                                                                                                                                           |
| Added `<rh-global-footer>`                                  | {{j()}} | A standalone global footer component.                                                                                                                                                                                  |
| Renamed `<rh-global-footer>` to `<rh-footer-universal>`     | {{j()}} | Renamed the global slot to universal.                                                                                                                                                                                  |
| Renamed `<rh-secondary-nav>` to `<rh-navigation-secondary>` | {{j()}} | Renamed the component and all sub components to `<rh-navigation-secondary-*>`.                                                                                                                                         |
| Added `<rh-spinner>`                                        | {{i()}} | Spinner consists of an animated circle and sometimes a message, and it indicates that a section is loading.                                                                                                            |
| Added `<rh-button>`                                         | {{i()}} | Button is a form-associated custom element. Buttons allow users to perform an action when triggered.                                                                                                                   |
| Added `<rh-tag>`                                            | {{i()}} | A tag is an inline-block element component that provides a distinct visual style for metadata in a UI.                                                                                                                 |
| Added `<rh-blockquote>`                                     | {{i()}} | Displays a quote with author's name and title.                                                                                                                                                                         |
| Added `<rh-subnav>`                                         | {{i()}} | The subnav component is used when an alternate navigation structure is needed to provide additional navigation on a site that does not need the product branding or structural depth that `rh-secondary-nav` provides. |
| Added `<rh-tabs>`                                           | {{i()}} | A tab set of layered content, including tab widgets and their associated tab panel.                                                                                                                                    |
| Added `<rh-accordion>`                                      | {{i()}} | Accordion displays multiple, related disclosure widgets.                                                                                                                                                               |
| Added `<rh-alert>`                                          | {{i()}} | An alert displays auxiliary information on a website. An alert can have one of several states of severity.                                                                                                             |
| Added `<rh-avatar>`                                         | {{i()}} | An Avatar is a placeholder graphic for a photo or an image that is placed to the left or on top of text.                                                                                                               |
| Added `<rh-pagination>`                                     | {{i()}} | Pagination is a web component for navigating paginated content.                                                                                                                                                        |
| Added `<rh-stat>`                                           | {{i()}} | An element which can be used to display statistics inside of an app.                                                                                                                                                   |
| Added `<rh-badge>`                                          | {{i()}} | A badge is used to annotate other information with numerical content.                                                                                                                                                  |
| Added `<rh-tooltip>`                                        | {{i()}} | A tooltip displays floating content next to a portion of inline content.                                                                                                                                               |
| Added `<rh-footer>`                                         | {{i()}} | A universal footer component.                                                                                                                                                                                          |
 
</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v1.0.0">View all version 1.0 release notes</rh-cta>

</section>

<section aria-labelledby="older-versions">

## Older versions

For release notes on older versions, please [view our release notes on 
GitHub][releasenotes].

</section>

<uxdot-feedback>
  <h2>Roadmap</h2>
  <p>For an up-to-date outline of what we're working on and what we're planning 
    to do in the Red Hat Design System, visit <a href="/about/roadmap">our 
      roadmap</a>.</p>
</uxdot-feedback>

[releasenotes]: https://github.com/RedHat-UX/red-hat-design-system/releases
[issues]: https://github.com/RedHat-UX/red-hat-design-system/issues
