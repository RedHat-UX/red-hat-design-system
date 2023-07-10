---
layout: layout-basic.njk
title: Release notes
bodyClasses: page-docs
---

<style>
  .releases-links {
    margin-block-start: var(--rh-space-3xl) !important;
    display: flex;
    gap: 2rem;
  }

  rh-tile a {
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    padding: var(--rh-space-lg);
    border: 1px solid var(--rh-color-border-subtle-on-light);
    border-radius: var(--rh-border-radius-default);
    text-decoration: none;
  }

  rh-tile a:hover {
    text-decoration: underline;
    background: var(--rh-color-surface-light);
  }

  rh-tile a::after {
    align-self: flex-end;
    content: url('data:image/svg+xml;utf8,<svg focusable="false" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z"></path><path d="M10 1L10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z"></path></svg>');
  }

  rh-tile a[href*="github"]::before {
    content: url('data:image/svg+xml;utf8,<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" class="MdxIcon-module--mdx-icon--4dec0"><path fill-rule="evenodd" d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"></path></svg>');
  }

  rh-tile [slot="header"] {
    font-size: 1rem;
  }

  .release-version h3 {
    margin-top: var(--rh-space-lg);
  }

  body.page-docs .release-version copy-permalink.h3 {
    margin-block-start: var(--rh-space-xl);
  }

  .release-version table + p {
    margin-block-start: var(--rh-space-2xl);
  }
</style>

## Overview

We are continually making changes in order to improve and grow the Red Hat Design System. If you think changes need to be made to a component, foundation, or anything else, [contact us](mailto:digital-design-system@redhat.com) or submit a [GitHub issue](https://github.com/RedHat-UX/red-hat-design-system/issues).

<nav class="releases-links">
  <rh-tile id="changelog">
    <a href="https://github.com/RedHat-UX/red-hat-design-system/releases">
      <h2 slot="header">Changelog</h2>
    </a>
  </rh-tile>
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
<!-- Cross links -->
