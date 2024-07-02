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


## Introduction

Welcome to the **Red Hat Design System** (RHDS) for digital experiences. If you need to develop something using our design system, you have come to the right place.

Read this section to get started and e-mail [design-system@redhat.com](mailto:design-system@redhat.com) or connect with us on Slack if you have any questions along the way.


## Learn about our design system

Our design system libraries and the documentation website offer assets and guidance needed to create digital experiences. Please use these resources to have a better understanding of how to use our design system.

<div class="grid sm-two-columns">
  <div>
    <h3>Foundations</h3>
    <p><a href="/foundations">Foundations</a> are how we express our brand through color, space, typography, etc.</p>
  </div>
  <div>
    <h3>Design tokens</h3>
    <p><a href="tokens">Design tokens</a> are how we translate our design language decisions into code.</p>
  </div>
  <div>
    <h3>Documentation</h3>
    <p>This website offers guidance about how to use our <a href="/elements">elements</a> and <a href="/patterns">patterns</a>. Learn how to apply them accessibily with <a href="/accessibility/development/">developer-specific guidelines</a>.</p>
  </div>
  <div>
    <h3>GitHub repositories</h3>
    <p>Explore our code, roadmaps, and discussions in the <a href="https://github.com/RedHat-UX/red-hat-design-system">Red Hat Design System repo</a> and the <a href="https://github.com/RedHat-UX/red-hat-design-tokens">Red Hat Design Tokens repo</a>.</p>
  </div>
</div>


## About web components

### What are Web Components?

Web components are based on a set of web platform APIs that help to create reusable and encapsulated UI elements. Those standards consist of [custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements), [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM), and [HTML Templates](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots).

### Why Web Components?

#### Encapsulation

Web components allow for encapsulation, which provides a clear boundary between the component and the website. This makes the components modular and prevents conflicts with page-level CSS and JS, hiding complex logic from the UI, and allowing for a scalable design system. In addition to encapsulating styles, web components can also ship complex accessibility features, making it easier for page authors to provide accessible rich experiences.

#### Web Standard APIs

Web Components use Web Standard APIs, which means the technology is future-proofed, reliable, and supported by every modern browser.

#### Platform and framework agnostic

Because Web Components are built using Web Standards, they are platform and framework agnostic, allowing Red Hat to build and maintain a single Design System library that can be used across the entire enterprise. This makes it easier to switch frameworks if necessary and reduces duplication of efforts.

### Do Web Components affect page performance?

Much of our JavaScript payload is strings of HTML or CSS, which allows us to define new, custom HTML elements. This compresses well and parses quickly.

As HTML and CSS module specifications become more widely imported in browsers, those resources will be shipped as `.html` and `.css` files. The JavaScript that remains will be behavioral&mdash;progressively enhancing the elements in question when it comes online.

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
</uxdot-feedback>
