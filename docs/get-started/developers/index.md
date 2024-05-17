---
layout: layouts/pages/basic.njk
title: Overview
heading: Developers
sidenavTitle: Developers
tags:
  - getstarted
  - developers
permalink: /get-started/developers/index.html
subnav:
  collection: sortedDevelopers
  order: 00
order: 20
---

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-2xl, 32px)
  }

  @container (min-width: 567px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

## Introduction

Welcome to the **Red Hat Design System** (RHDS) for digital experiences. If you need to develop something using our design system, you have come to the right place.

Read this section to get started and e-mail [design-system@redhat.com](mailto:design-system@redhat.com) or connect with us on Slack if you have any questions along the way.


## Learn about our design system

Our design system libraries and the documentation website offer assets and guidance needed to create digital experiences. Please use these resources to have a better understanding of how to use our design system.

<div class="grid">
  <div>
    <h3>Foundations</h3>
    <p><a href="foundations">Foundations</a> are how we express our brand through color, space, typography, etc.</p>
  </div>
  <div>
    <h3>Design tokens</h3>
    <p><a href="tokens">Design tokens</a> are how we translate our design language decisions into code.</p>
  </div>
  <div>
    <h3>Documentation</h3>
    <p>This website offers guidance about how to use our <a href="elements">elements</a> and <a href="patterns">patterns</a>. Learn how to apply them accessibily with <a href="/accessibility/development/">developer-specific guidelines</a>.</p>
  </div>
  <div>
    <h3>GitHub repositories</h3>
    <p>Explore our code, roadmaps, and discussions in the <a href="https://github.com/RedHat-UX/red-hat-design-system">Red Hat Design System repo</a> and the <a href="https://github.com/RedHat-UX/red-hat-design-tokens">Red Hat Design Tokens repo</a>.</p>
  </div>
</div>


## About web components

Web components are based on a set of web platform APIs that help to create reusable and encapsulated UI elements. Those standards consist of custom elements, shadow DOM, and HTML Templates.

Because they're able to work with any framework that supports HTML, web components can be used without having to rework all of your code and are less likely to be affected by changes in preferred web stacks. Encapsulation within the shadow DOM prevents a page's code from breaking a component's style and allows for a scalable design system.

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
</uxdot-feedback>
