---
layout: layouts/pages/basic.njk
title: Overview
order: 0
tags:
  - getstarted
---

<style>
  #get-started {
    display: flex;
    flex-direction: column;
    gap: var(--rh-space-lg);
  }
  figcaption {
    font-family: var(--rh-font-family-heading);
    font-size: var(--rh-font-size-heading-sm);
  }

</style>

## Get started

The Red Hat Design System for digital experiences gives designers and developers the tools to create accessible and on-brand user interfaces quickly. The role-specific pages linked below will guide you through using the design system.

<nav id="get-started">
  <a href="/get-started/designers">
    <figure>
      {% example
        palette="descriptive",
        alt="Row of two cards being resized with a mouse pointer",
        src="/assets/get-started/designers.png" %}
      <figcaption>Designers</figcaption>
    </figure>
  </a>
  <figure>
    {% example
      palette="descriptive",
      alt="Card overlapping code editor user interface",
      src="/assets/get-started/developers.png" %}
    <figcaption>Developers (Coming soon)</figcaption>
  </figure>
</nav>

<uxdot-feedback>
  <h2>Release notes</h2>
  <p>To see what foundations, tokens, elements, or patterns have been released recently, check out our <a href="/release-notes">release notes</a>.</p>
</uxdot-feedback>
