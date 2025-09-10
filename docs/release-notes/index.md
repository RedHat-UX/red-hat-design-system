---
layout: layouts/pages/has-toc.njk
title: Release notes
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
    max-inline-size: 320px;
  }

  rh-tile [icon="github"] {
    --rh-icon-size: var(--rh-size-icon-03, 32px);
  }

  @container host (max-width: 768px) {
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

{% macro j() %}<rh-tag color="red" size="compact">Major</rh-tag>{% endmacro %}
{% macro i() %}<rh-tag color="blue" size="compact">Minor</rh-tag>{% endmacro %}
{% macro p() %}<rh-tag color="gray" size="compact">Patch</rh-tag>{% endmacro %}

## Changelog

We are continually making changes in order to improve and grow the Red Hat 
Design System. If you think changes need to be made to a component, foundation, 
or anything else, please submit a [GitHub issue][issues].

<rh-tile compact>
  <rh-icon slot="image" set="social" icon="github" size="lg"></rh-icon>
  <a slot="headline" href="https://github.com/RedHat-UX/red-hat-design-system/releases">Changelog</a>
</rh-tile>

<section aria-labelledby="version-3.1.0">

### Patches from version 3.1.1

<rh-table>

| Change        | Type        | Notes        |
| ------------- | ----------- | ------------ |
| `<rh-alert>`: color schemes | {{p()}} | Added support for dark color schemes |
| `<rh-breadcrumb>`: layout fixes | {{p()}} | Fix colors, spacing, and arrows |
| `<rh-footer>`: color contrast | {{p()}} | Fix color contrast of text when javascript fails to load |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v3.1.1">View all version 3.1.1 release notes</rh-cta>


## Version 3.1.0
Released August 6, 2025

### Highlights

<rh-table>

| Change        | Type        | Notes        |
| ------------- | ----------- | ------------ |
| ✨ Added `<rh-progress-stepper>` | {{i()}} | Progress stepper communicates how many steps are required to complete a process. |
| ✨ Added `<rh-scheme-toggle>` | {{i()}} | A toggle to switch between light, dark and system default color schemes. |
| ✨ Added `<rh-skeleton>` | {{i()}} | A skeleton loader is a placeholder for content that is loading. |
| `<rh-breadcrumb>`: added the `truncate` attribute | {{i()}} | When the `truncate` attribute is present, the middle breadcrumb items are hidden until the user interacts with them. |
| `<rh-code-block>`: added the `line-numbers="hidden"` attribute | {{i()}} | Line numbers can now be hidden. |
| `<rh-navigation-primary>`: improved logo rendering | {{i()}} | Default logo is now bi-modal auto adjusting text color to light or dark scheme. For more control, use the existing [`logo` slot](https://ux.redhat.com/elements/navigation-primary/code/#slots). |
| `<rh-tag>`: add disabled, hover, focus, and active states to linked tags | {{i()}} | Linked `<rh-tag>` elements now have hover, focus, active, and disabled states. |
| `<rh-alert>`: fixed case-sensitivity on `state` attribute | {{p()}} | Made `state` attribute case-insensitive. |
| `<rh-announcement>`: fixed line wrapping in CTAs | {{p()}} | Long CTA text wraps to next line for small viewports. |
| `<rh-audio-player>`: corrected icons for rewind and fast forward | {{p()}} | Fixed rewind and fast forward icons. |
| `<rh-card>`: allow card to accept all six color palettes | {{p()}} | `<rh-card>` now works with all six [color palettes](https://ux.redhat.com/theming/color-palettes/). |
| `<rh-code-block>`: performance improvements | {{p()}} | Improved performance when `line-numbers="hidden"` attribute is present. |
| `<rh-footer>`: corrected height style | {{p()}} | Corrected height style when JavaScript is not available |
| `<rh-footer>`: removed console warnings | {{p()}} | Removed console warnings in `<rh-footer>`. |
| `<rh-footer>`: removed "Inc" from copyright | {{p()}} | Removed "Inc" from copyright in `<rh-footer>`. |
| `<rh-navigation-primary>`: keyboard accessibility | {{p()}} | Improved keyboard accessibility of the dropdown toggle. |
| `<rh-tabs>`: corrected background styles | {{p()}} | Corrected background styles inherited from parent color-scheme and host color-palette. |
| `<rh-tabs>`: corrected vertical layout styles | {{p()}} |  |
| `<rh-tabs>`: corrected duplicate focus ring | {{p()}} | Fixed duplicate focus ring with keyboard navigation. |
| `<rh-tag>`: color contrast improvements | {{p()}} | Improved color contrast of gray tags on dark color schemes. |
| Improved accessibility of links | {{p()}} | Inline links should show a dashed underline in accordance to our [inline link style guidelines](https://ux.redhat.com/foundations/interactions/links/#inline-links). |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v3.1.0">View all version 3.1 release notes</rh-cta>

</section>

<section aria-labelledby="version-3.0.0">

### Patches from version 3.0.4

<rh-table>

| Change        | Type        | Notes        |
| ------------- | ----------- | ------------ |
| `<rh-audio-player>`: responsive design | {{p()}} | Fix layout issue between 576px and 768px breakpoints |
| `<rh-navigation-primary>`: reactivity | {{p()}} | Improved component reactivity |
| Server side rendering: improve support | {{p()}} | Improved SSR for elements whose layout depends on their content |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v3.0.4">View all version 3.0.4 release notes</rh-cta>

### Patches from version 3.0.3

<rh-table>

| Change        | Type        | Notes        |
| ------------- | ----------- | ------------ |
| `<rh-code-block>`: performance improvement | {{p()}} | Improve performance of line numbers |
| `<rh-navigation-primary>`: prevent error | {{p()}} | Prevent an error from being thrown in certain circumstances when the element connects |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v3.0.3">View all version 3.0.3 release notes</rh-cta>

### Patches from version 3.0.2

<rh-table>

| Change        | Type        | Notes        |
| ------------- | ----------- | ------------ |
| `<rh-accordion>`: hover color scheme | {{p()}} | Corrected hover background-color for dark scheme |
| `<rh-audio-player>`: icon alignment | {{p()}} | Fix play button icon misalignment in webkit |
| `<rh-audio-player>`: close button positioning | {{p()}} | Fix transcript close button on chrome |
| `<rh-badge>`: SSR fix | {{p()}} | Fixed rendering in SSR scenarios |
| `<rh-code-block>`: performance improvement | {{p()}} | Improve performance of pre-rendered code blocks. |
| `<rh-code-block>`, `<rh-dialog>`, `<rh-health-index>`: dark scheme | {{p()}} | Corrected background color for dark scheme |
| `<rh-code-block>`: copy action | {{p()}} | Fixed copy actions for prerendered codeblocks with badge callouts |
| `<rh-code-block>`: default button content | {{p()}} | Added default content for action buttons. |
| `<rh-code-block>`: auto-load tooltip | {{p()}} | Automatically load tooltip when action buttons are added |
| `<rh-dialog>`: prevent scroll | {{p()}} | Corrected dialog positioning to prevent page scrolling |
| `<rh-dialog>`: scrollbar reset | {{p()}} | The dialog element will now reset scrollbar when closed, even if it was not in focus at the time of closure. |
| `<rh-dialog>`, `<rh-navigation-primary>`, `<rh-navigation-secondary>`: token update | {{p()}} | Updated usage of design tokens |
| `<rh-footer>`: scrollbar fix | {{p()}} | Only show vertical scrollbars if content overflows |
| `<rh-navigation-primary>`: slot documentation | {{p()}} | Corrected missing named logo slot documentation |
| `<rh-navigation-primary>`: active state | {{p()}} | Corrected :active state for hamburger and secondary slotted items |
| `<rh-navigation-primary>`: cursor style | {{p()}} | Corrected cursor style on secondary links |
| `<rh-navigation-primary>`: safari height | {{p()}} | Corrected render height for navigation items in safari |
| `<rh-navigation-primary>`: logo slot documentation | {{p()}} | Documented the logo slot |
| `<rh-navigation-secondary>`: dark scheme | {{p()}} | Corrected background color for dark scheme |
| `<rh-pagination>`: page counter | {{p()}} | Show total pages counter |
| `<rh-pagination>`: dark scheme | {{p()}} | Correct background-colors for dark scheme |
| `<rh-subnav>`: esbuild bundling | {{p()}} | Prevent error which can occur when bundling the element with esbuild |
| `<rh-switch>`: dark scheme | {{p()}} | Corrected switch handle color for dark scheme |
| `<rh-tile>`: background scheme | {{p()}} | Corrected background color for light and dark scheme |
| `<rh-tooltip>`: accessibility improvement | {{p()}} | Improved screen reader support |
| `<rh-tooltip>`: color scheme | {{p()}} | Correctly renders tooltip content using contrasting color scheme |
| `<rh-video-embed>`: fix functionality | {{p()}} | Hide thumbnail and show video after hitting play button |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v3.0.2">View all version 3.0.2 release notes</rh-cta>

### Patches from version 3.0.1

<rh-table>

| Change        | Type        | Notes        |
| ------------- | ----------- | ------------ |
| `<rh-button>`: dark scheme support | {{p()}} | Dark scheme support for buttons with icons |
| `<rh-cta>`: load icon | {{p()}} | Ensure the arrow icon always appears |
| `<rh-dialog>`: improve accessibility | {{p()}} | Increase contrast of close button for video dialogs |
| `<rh-pagination>`: improve accessibility | {{p()}} | Fix ellipsis background color on dark color schemes |
| `<rh-tile>`: body slot | {{p()}} | Fixed empty body slot |
| Server side rendering: improve support | {{p()}} | Improved SSR support for the following elements: `<rh-accordion>`, `<rh-avatar>`, `<rh-back-to-top>`, `<rh-code-block>`, `<rh-navigation-secondary>`, `<rh-pagination>`, `<rh-stat>`, `<rh-switch>`, `<rh-table>` |
| Theming: load default theme | {{p()}} | Ensure themable elements always load the default theme |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v3.0.1">View all version 3.0.1 release notes</rh-cta>

## Version 3.0.0
Released April 7, 2025

<rh-alert state="info">
  <h3 slot="header">Upgrading?</h3>
  <p>If you're upgrading to version 3.0, <a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v3.0.0">read our v3.0 changelog</a> for upgrade instructions.</p>
</rh-alert>

### Highlights

<rh-table>

| Change        | Type        | Notes        |
| ------------- | ----------- | ------------ |
| 🌓 Color schemes: added built-in support for user color scheme preferences (aka "dark mode") | {{j()}} | `Color-palette` and [theming](https://ux.redhat.com/theming/) integrate into device color schemes, or can be overridden on a per-page or per-element basis. |
| `<rh-dialog>`: Dialog's `overlay` CSS shadow part has been removed | {{j()}} | With the migration to HTML's native dialog element, `<rh-dialog>` now uses its `::backdrop` pseudo-element. For customization, please refer to our [theming documentation](https://ux.redhat.com/theming/customizing/) |
| `<rh-accordion>`: Accordion panel always uses its parent's color scheme | {{j()}} | Users can no longer override an accordion panel's `color-palette` |
| `<rh-accordion>`: removed unused `bordered` attribute | {{j()}} | Removed unused `bordered` attribute, which has had no effect since 2.0 |
| `<rh-tabs>`: removed border color token | {{j()}} | Removed `--rh-tabs-border-color` and replaced with `--rh-color-border-subtle` token. |
| `@rhds/tokens`: bumps version to 3.0 | {{j()}} | See the [design tokens' release notes](https://github.com/RedHat-UX/red-hat-design-tokens/releases/tag/v3.0.0) for changes. |
| `@patternfly/pfe-core`: SSR support | {{j()}} | Server-side Rendering (SSR) support through SSR hints, `connectedCallback()` and context protocol in SSR scenarios. For more information, read our [PatternFly Elements Core v5 release notes](https://github.com/patternfly/patternfly-elements/releases/tag/%40patternfly%2Fpfe-core%405.0.0) |
| ✨ Added `<rh-navigation-primary>` | {{i()}} | The Primary navigation element ensures a consistent user experience across our website system. |
| ✨ Added `<rh-jump-links>` | {{i()}} | Jump links is a navigation list of links enhanced with Red Hat branded design and a scroll spy mechanism. |
| ✨ Added `<rh-chip>` | {{i()}} | Chip creates a component that can be used in place of a checkbox. |
| ✨ Added `<rh-disclosure>` | {{i()}} | A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible). |
| ✨ Added `<rh-announcement>` | {{i()}} | `<rh-announcement>` is a short banner that conveys an important message, such as promoting an event or advertising an organizational or product announcement. |
| `<rh-alert>`: improved toast API | {{i()}} | Added `actions` and `persistent: true` options for toasts |
| `<rh-footer>`: social link element can now take an `href` attribute | {{i()}} | While a slotted link will still work, the `<rh-footer-social-link>` elements can now have an `href` attribute instead. |
| `<rh-accordion>`: fixed `expanded` and `expanded-index` attributes | {{p()}} | Accordion's `expanded` and `expanded-index` attributes now work as expected. |
| `<rh-button>`: corrected play button's icon colors | {{p()}} | Adjusted the icon colors of the `play` button variant. |
| `<rh-blockquote>`: fixed center alignment | {{p()}} | Fixed `align="center"` alignment and font size. |
| `<rh-card>`: changed the `header` slot margin | {{p()}} | Changed Card's `header` slot's top margin from `--rh-space-lg` to `--rh-space-xl`. |
| `<rh-card>`: layout improvements | {{p()}} | Corrected margins on small screens |
| `<rh-dialog>`: added dark color scheme support | {{p()}} | The Dialog element now supports dark mode. |
| `<rh-tile>`: corrected border colors | {{p()}} | Corrected border colors on Tile. |
| `<rh-tile>`: layout improvements | {{p()}} | Improved layout when footer slot is empty. |
| `<rh-tile>`: fix link bug | {{p()}} | Fix a bug where a Tile's link stretches beyond the bounds of the element when JavaScript doesn't load. |
| `<rh-pagination>`: dark color scheme improvements | {{p()}} | Improved dark mode for the numeric paginator control. |
| `<rh-pagination>`: layout improvements | {{p()}} | Improved layouts for non-left-to-right languages. |
| `<rh-pagination>`: removed background from `open` variant links | {{p()}} | The `open` pagination variant no longer has a background color behind its links |
| `<rh-auto-player>`: layout improvements | {{p()}} | Fixed right-to-left layout. |
| `<rh-health-index>`: fixed `z-index` stacking | {{p()}} | Prevents graphical elements from escaping stacking context. |
| `<rh-health-index>`: corrected colors | {{p()}} | Corrected `<rh-health-index>` colors. |
| `<rh-navigation-secondary>`: removed underlines from links | {{p()}} | Removed underlines from links from Secondary Navigation. |
| `<rh-navigation-secondary>`: layout improvements | {{p()}} | Improved visual rendering when scrollbars are turned on by the user. |
| `<rh-back-to-top>`: removed console errors and warnings | {{p()}} | Removed user-facing errors and warning from missing attributes/values from the console.  |
| `<rh-dialog>`: aligned private, undocumented CSS variable names | {{p()}} | Changed several undocumented CSS variable names to align with privacy conventions, like `--offset` to `--_offset`, etc. |
| `<rh-subnav>`: fixed overflow scrolling | {{p()}} | Restored horizontal overflow scrolling on `<rh-subnav>`. |
| `<rh-subnav>`: fixed focus styles | {{p()}} | Correct the focus state styles on `<rh-subnav>`. |
| `<rh-subnav>`: removed background color | {{p()}} | Removed Subnav's background color. |
| `<rh-site-status>`: correct icon colors | {{p()}} | Fixed icons colors in Site Status. |
| `<rh-table>`: removed background color | {{p()}} | Use an `<rh-surface>` element or other themable container element to set a background color. |
| `<rh-tabs>`: removed background from tab panels | {{p()}} | Removed tab panel backgrounds and correct colors. |
| Removed instances of `--rh-color-surface-dark-alt` across several elements | {{p()}} | Instead of `--rh-color-surface-dark-alt`, use `--rh-color-surface-dark` and surface colors will be automatically darkened where necessary. |
| Reduced JavaScript payload across several elements | {{p()}} | Improved performance of several elements, like `<rh-accordion>`, `<rh-pagination>`, `<rh-cta>`, etc. |
| `Color-palette` attributes no longer depend on JavaScript | {{p()}} | Elements with `color-palette` attributes no longer depend on JavaScript to set the background color of children. See [theming docs](https://ux.redhat.com/theming) for more information. |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v3.0.0">View all version 3.0 release notes</rh-cta>

</section>

<section aria-labelledby="version-2.1.0">

### Patches from version 2.1.2

<rh-table>

| Change        | Type        | Notes        |
| ------------- | ----------- | ------------ |
| `<rh-tooltip>`: accessibility improvements | {{p()}} | Make tooltip content available to assistive technology. |
| `<rh-tile>`: layout improvements | {{p()}} | Fixed layout of compact link tiles with icons. |
| `<rh-avatar>`: layout improvements | {{p()}} | Corrected small viewport margin for `plain` variant avatars |
| `<rh-button>`: accessibility improvements | {{p()}} | Improved accessibility by allowing focus when disabled. |
| `<rh-cta>`: accessibility improvements | {{p()}} | Improved accessibility by correcting active and focus styles. |
| `<rh-cta>`: fixed icon bug in Safari | {{p()}} | Workaround for Safari which sometimes double-renders icons. |
| `<rh-icon>`: fixed icon bug in Safari | {{p()}} | Workaround for Safari which sometimes double-renders icons. |
| `<rh-code-block>`: improve copy and word wrap features | {{p()}} | Enables copy and word wrap action for prerendered content. |
| `<rh-accordion>`: fix hover colors | {{p()}} | Restore missing hover colors. |
| `<rh-accordion>`: fixed header font | {{p()}} | Corrected accordion header text font weight. |
| `<rh-footer>`: fixed loading failsafe for more graceful degradation | {{p()}} | Shows content after 5 seconds if JavaScript fails. |
| `@rhds/tokens`: Use non-localized font stacks | {{p()}} | See [`@rhds/tokens` v2.1.1 release notes](https://github.com/RedHat-UX/red-hat-design-tokens/releases/tag/v2.1.1). |
| `@rhds/tokens`: bump version to 2.1.1 | {{p()}} | See [`@rhds/tokens` v2.1.1 release notes](https://github.com/RedHat-UX/red-hat-design-tokens/releases/tag/v2.1.1). |
| Removed all caps in heading | {{p()}} | No longer force headings to be in all caps on various elements, like `<rh-tile>`. |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v2.1.2">View all version 2.1.2 release notes</rh-cta>

### Patches from version 2.1.1

<rh-table>

| Change        | Type        | Notes        |
| ------------- | ----------- | ------------ |
| Color Context: SSR support | {{p()}} | Prevent errors in certain Server-side Rendered (SSR) scenarios. |
| `<rh-alert>`: layout improvements | {{p()}} | Corrected typography and layouts. |
| `<rh-code-block>`: code highlighting improvements | {{p()}} | Ensure that syntax colors and styles are applied when the element upgrades. |
| `<rh-tabs>`: SSR fix | {{p()}} | Corrects active tab styles in SSR scenarios |
| `<rh-navigation-secondary>`: dark color scheme fix | {{p()}} | Corrected style regression in dark color palettes. |
| `<rh-surface>`: fixed themed text color | {{p()}} | Corrected themed text color. |
| `<rh-alert>`: corrected heading colors | {{p()}} | Change heading color for all states of alert to make them all the same. |
| `<rh-table>`: SSR support | {{p()}} | Improved SSR support. |
| `<rh-cta>`: SSR fix | {{p()}} | Fix some errors when hydrating in SSR scenarios. |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v2.1.1">View all version 2.1.1 release notes</rh-cta>

## Version 2.1.0
Released October 1, 2024

### Highlights

<rh-table>

| Change                                                    | Type    | Notes                                                                                                                                                                                                    |
| --------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Theming: added theming tokens to most elements            | {{i()}} | New theming tokens allow page-level and container-level color palettes on patterns and elements.                                                                                                        |
| `<rh-alert>`: added new `state` colors                    | {{i()}} | Added `info`, `neutral`, and `caution`. Deprecated `note` (aliasing `info`), `default` (aliasing `neutral`), and `error` (aliasing `danger`).                                                            |
| `<rh-accordion>`: improved accessibility                  | {{i()}} | Removed arrow-key keyboard navigation in favor of tab navigation through accordion sets.                                                                                                                 |
| `<rh-badge>`: added new `state` colors                    | {{i()}} | Added `danger`, `warning`, `caution`, `neutral`, and `info`. Deprecated `critical` (aliasing `danger`), `important` (aliasing `caution`), `moderate` (aliasing `warning`), and `note` (aliasing `info`). |
| `<rh-button>`: added `icon-set` attribute                 | {{i()}} | Added `icon-set="..."` attribute, which corresponds to `<rh-icon set="...">`.                                                                                                                            |
| `<rh-card>`: added header background theming API          | {{i()}} | Using `--rh-card-header-background-on-light` and `--rh-card-header-background-on-dark` CSS custom props allows for theming the card header's background.                                                 |
| `<rh-code-block>`: added syntax highlighting              | {{i()}} | Code blocks now have optional Red Hat color-themed syntax highlighting via client side or server side (prerendered prismjs code-blocks).                                                                 |
| `<rh-table>`: improved responsive layout API              | {{i()}} | Added auto-generated table cell headings for responsive layout on small screens.                                                                                                                         |
| `<rh-tag>`: added new tag colors                          | {{i()}} | Added `red-orange`, `yellow`, and `teal` colors. Deprecated `cyan`, aliasing it to `teal`.                                                                                                               |
| `<rh-tag>`: added `desaturated` variant                   | {{i()}} | Added `variant="desaturated"` to reduce visual prominence or to better fit a specific theme or visual style.                                                                                             |
| `<rh-tag>`: added `size` attribute                        | {{i()}} | Added `size="compact"` for areas where space is limited.                                                                                                                                                 |
| `<rh-tag>`: added optional `href` attribute               | {{i()}} | Adding `href` attribute to `<rh-tag>` removes the need for slotting an anchor element (`<a>`) on linked tags.                                                                                            |
| `<rh-tile>`: added `private` and `external` link variants | {{i()}} |  Using `link="private"` or `link="external"` indicates whether the link is private or external and changes the tile icon from an arrow to a padlock or external link icons respectively.                 |
| `<rh-skip-link>`: added optional `href` attribute         | {{i()}} | Adding `href` attribute to `<rh-skip-link>` removes the need for slotting an anchor element (`<a>`).                                                                                                     |
| `<rh-audio-player>`: added mini playback control          | {{p()}} | Mini layout now has playback control.                                                                                                                                                                    |
| `<rh-navigation-secondary>`: improved accessibility       | {{p()}} | Removed arrow-key keyboard navigation in favor of tab navigation through navigation items and added `accessible-label` attribute to explicitly label landmark.                                           |
| `<rh-subnav>`: improved accessibility                     | {{p()}} | Removed arrow-key keyboard navigation in favor of tab navigation through navigation items and added `accessible-label` attribute to explicitly label landmark.                                           |
| `<rh-table>`: added container query support               | {{p()}} | Tables now adjust to the size of their containing element, not the viewport size.                                                                                                                        |
| `<rh-tabs>`: added container query support                | {{p()}} | Tabs now adjust to the size of their containing element, not the viewport size.                                                                                                                          |
| `<rh-tabs>`: added advanced layout support                | {{p()}} | Tabs can now participate in advanced layouts, like `display: subgrid`.                                                                                                                                   |

</rh-table>

<rh-cta href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v2.1.0">View all version 2.1 release notes</rh-cta>

</section>

<section aria-labelledby="version-2.0.0">

## Version 2.0.0
Released August 27, 2024

<rh-alert state="info">
  <h3 slot="header">Upgrading?</h3>
  <p>If you're upgrading to version 2.0, <a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v2.0.0">read our v2.0 changelog</a> for upgrade instructions.</p>
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
| Added dark color palette to `<rh-pagination>`              | {{i()}} | Pagination now responds to themable containers like `<rh-surface>`.                                                                                                                                                                            |
| Added light DOM shim for `<rh-cta>`                        | {{i()}} | Added `rh-cta-lightdom-shim.css` as an optional file to help reduce layout shift before element is defined, where declarative shadow DOM is not an option.                                                                                      |
| Added `<rh-card>` heading custom properties                | {{i()}} | User can now customize CSS custom properties for card headings.                                                                                                                                                                                |
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
| Added `<rh-pagination>`                                     | {{i()}} | Pagination is a Web Component for navigating paginated content.                                                                                                                                                        |
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
