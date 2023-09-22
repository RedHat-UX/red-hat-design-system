---
layout: layout-basic.njk
title: Release notes
bodyClasses: page-docs
---

## Changelog

We are continually making changes in order to improve and grow the Red Hat Design System. If you think changes need to be made to a component, foundation, or anything else, please submit a [GitHub issue](https://github.com/RedHat-UX/red-hat-design-system/issues).

<nav class="releases-links">
  <rh-block id="changelog">
    <a href="https://github.com/RedHat-UX/red-hat-design-system/releases">
      <h2 slot="header">Changelog</h2>
    </a>
  </rh-block>
</nav>

<section class="release-versions">
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
