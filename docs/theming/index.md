---
title: How to use
heading: How to use
layout: layouts/pages/has-toc.njk
order: 1
tags:
  - theming
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
</script>

<style>
  .theme-cards {
    display: grid;
    gap: var(--rh-space-2xl, 32px);
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    margin-block-start: var(--rh-space-2xl, 32px);

    rh-card {
      height: 100%;
    }
  }
</style>

## What is theming?

The Red Hat Design System uses a powerful, flexible, and easy-to-use theming
system to modify our elements and patterns to fit a specific visual style.
Themes can be applied to an element, page, or UI. Theming encompasses device
light and dark color schemes, our color palettes and tokens, and design
customizations.

## How does it work?

Our design system includes built-in branded and accessible defaults, so all you
need to do if you want to create digital experiences that feel like Red Hat is
to write a few lines of HTML.

When we want to flex our design muscles, our elements include powerful theming
primitives in the form of **slots**, **design tokens**, and **CSS shadow
parts**. These primitives enable you to theme a single element, section, page,
or entire app UI.

## Terminology

Before we dive into things, let's take a moment to clarify some terminology
used around color.

### Color scheme

Refer to color schemes as `light` (light mode) or `dark` (dark mode) only. Do
not use terms like `light theme` or `dark theme`.

Color schemes are built into web browsers and operating systems, and form the
standard backbone of our theming engine.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Previous versions of RHDS refer to color schemes as <code>on</code> or backgrounds.</p>
</rh-alert>

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Elements that have a <b>color context consumer</b> color scheme is because they reacted passively to the color scheme of their containers.</p>
</rh-alert>

### Color palette

Refer to color palettes as `lightest`, `lighter`, `light`, `dark`, `darker`, or
`darkest` only.

Color palettes are unique to RHDS and build upon standard color schemes. They
apply to elements which contain other elements.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Previous versions of RHDS referred to elements with a color palette as <b>color context providers</b> because setting their color palette would actively change the color scheme of the descendant elements as well.</p>
</rh-alert>

### Theming

The process by which the appearance of RHDS elements are customized by tweaking
theme variables. Single elements or entire pages can be themed.

<div class="theme-cards">
  <rh-card>
    <h3 slot="header">Project Felt theme</h3>
    <p>Cross-team initiative to unify the Red Hat brand, marketing experiences, and product UIs.</p>
    <rh-cta slot="footer"><a href="themes/project-felt/">Learn more</a></rh-cta>
  </rh-card>
  <rh-card>
    <h3 slot="header">Color palettes</h3>
    <p>Design system color palettes integrate tokens with elements and patterns to produce striking layouts.</p>
    <rh-cta slot="footer"><a href="color-palettes/">Learn more</a></rh-cta>
  </rh-card>
  <rh-card>
    <h3 slot="header">Customizing</h3>
    <p>How named design tokens and semantically-defined color palettes open up theming possibilities.</p>
    <rh-cta slot="footer"><a href="customizing/">Learn more</a></rh-cta>
  </rh-card>
  <rh-card>
    <h3 slot="header">Developer</h3>
    <p>Tools and techniques to help you develop custom themes.</p>
    <rh-cta slot="footer"><a href="developers/">Learn more</a></rh-cta>
  </rh-card>
</div>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
