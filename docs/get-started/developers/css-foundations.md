---
layout: layouts/pages/has-toc.njk
title: CSS foundations
heading: Developers
permalink: /get-started/developers/css-foundations/index.html
tags:
  - developers
subnav:
  collection: sortedDevelopers
  order: 40
---

<style data-helmet>
  .code-tabs rh-tab-panel {
    padding-block-end: 0;
    padding-inline: 0;
  }
</style>

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-example.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
</script>

We use CSS patterns to create a foundation of typography and layout compositions within the design system. Below are some common foundational CSS patterns that we use in combination with [our Tokens](/get-started/developers/tokens/) for this site, which you might find helpful for bootstrapping your own application, page, or website.

We also have element-specific patterns for extending our design system elements on our [Patterns page](/patterns/).

## Reset


```css code-block {dedent: true, language: "css", highlighting: "prerendered"}
{% set cssContent = "./docs/styles/reset.css" | inlineCss %}{{ cssContent | safe }}
```

## Fonts

### Red Hat CDN

If you are on a `*.redhat.com` domain, you can use our CDN to access the Red Hat fonts:

```html code-block {dedent: true, language: "css", highlighting: "prerendered"}
https://www.redhatstatic.com/dssf-001/v2/@redhat/redhat-font@4.1.0/font.min.css
```

### Hosted/bundled assets

Optionally, you can [download the Red Hat fonts](https://github.com/RedHatOfficial/RedHatFont) and include them directly in your project. Below is an example of how you might reference them in CSS:

```css code-block {dedent: true, language: "css", highlighting: "prerendered"}
{% set cssContent = "./docs/assets/examples/css/fonts.css" | inlineCss %}{{ cssContent | safe }}
```

## Typography

We highly recommend [using our tokens](/get-started/developers/tokens/#how-to-install-tokens) in your project, so that you can take full advantage of their utility throughout your code. Here is an example of how to set typography using our tokens:

```css code-block {dedent: true, language: "css", highlighting: "prerendered"}
{% set cssContent = "./docs/assets/examples/css/typography.css" | inlineCss %}{{ cssContent | safe }}
```

## Layout and grid

There are a number of ways you can create layouts and grid systems within your application or website. With [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout) and [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts), it's never been easier.

### CSS-based grid layout

```css code-block {dedent: true, language: "css", highlighting: "prerendered"}
{% set cssContent = "./docs/assets/examples/css/layout-grid.css" | inlineCss %}{{ cssContent | safe }}
```

### Experimental RHX Grid

If you'd prefer using a Web Component for layout and grid purposes, we have an experimental `<rhx-grid>` [element available](https://github.com/RedHat-UX/red-hat-extensions). You can install it using one of two ways:

1. NPM [@rhdx/elements](https://www.npmjs.com/package/@rhdx/elements)
2. Red Hat CDN

```html code-block {line-numbers=hidden}
https://www.redhatstatic.com/dssf-001/v2/@rhdx/elements@0.0.1/elements/rhx-grid/rhx-grid.js
```

We'd love your [feedback](/support/) on `<rhx-grid>` and/or our CSS-based approach.


## FAQs

Here are some frequently asked questions we get about our CSS patterns and other assets for bootstrapping applications, websites, and pages.

<rh-accordion>
  <h3><rh-accordion-header>Why don't we ship these patterns in our npm package?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>While we do ship our global tokens in the <a href="https://www.npmjs.com/package/@rhds/tokens">@rhds/tokens</a> package, we are not shipping these CSS patterns yet. This is primarily because we want different teams and projects to try them out first, identify integration issues, and <a href="/support/#documentation-and-figma-help">provide feedback</a>.</p>
    <p>We know that there are a lot of different CSS framework approaches, tool chains, and requirements across the different applications, domains, etc. used by the teams we support. So at this point, we feel it's a little premature to make a one-size-fits-all kind of recommendation. However, with these easily copyable example snippets, we encourage you to use LLM coding tools to adjust our recommendations to suit your toolchains, workflows, and conventions. We don’t have a specific timeframe for a more formal release, which is why we need you to try these out and <a href="/support/#documentation-and-figma-help">give us your feedback</a>.</p>
  </rh-accordion-panel>
  <h3><rh-accordion-header>Why don't we ship utility classes for each token like <code>class="rh-color-text-primary"</code>?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>We'd like to encourage teams to move towards a more semantic, high-level approach to web design and development. Ideally, teams would block-out experiences using semantic, design system elements and patterns, and then make adjustments using the design system's <a href="/theming/">theming features</a>, <a href="/theming/color-palettes/">color palettes</a>, attributes, and variants which the design team designers and engineers have prepared for those very purposes. In doing so, teams can make their design knowledge <em>portable</em> across different projects, and they can be confident that they are shipping experiences which align with Red Hat's Brand standards.</p>
  </rh-accordion-panel>
</rh-accordion>
