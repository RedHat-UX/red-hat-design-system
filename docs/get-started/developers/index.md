---
layout: layouts/pages/has-toc.njk
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

<script type="module" data-helmet>
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
</script>

<style data-helmet>
  .grid > rh-card {
    display: grid;
  }

  rh-card > rh-icon[slot] {
    color: var(--rh-color-accent-brand-on-light, #ee0000);
    margin-block-end: var(--rh-space-lg, 16px);
    display: inline;
    place-content: unset;
    aspect-ratio: unset;

    --rh-icon-size: var(--rh-size-icon-07, 80px);
  }

  rh-card > p[slot],
  rh-card > h3[slot] {
    margin-block: 0;
  }

  #section-encapsulation {
    margin-block-start: var(--rh-space-2xl, 32px);
  }

  svg.image-block  {
    width: 100%;
    max-width: 400px;
    padding: var(--rh-space-lg, 16px);
    border: var(--rh-border-width-sm, 1px) solid var(--rh-color-border-subtle-on-light, #c7c7c7);
    border-radius: var(--rh-border-radius-default, 3px);
  }
</style>


## Introduction

Welcome to the **Red Hat Design System** (RHDS) for digital experiences. If you need to develop something using our design system, you have come to the right place.

Read this section to get started and e-mail [design-system@redhat.com](mailto:design-system@redhat.com) or connect with us on Slack if you have any questions along the way.


## Learn about our design system

Our design system libraries and the documentation website offer assets and guidance needed to create digital experiences. Please use these resources to have a better understanding of how to use our design system.

<div class="grid xs-two-columns">
  <rh-card>
    <rh-icon slot="header" set="standard" icon="website-system"></rh-icon>
    <h3 slot="header">Foundations</h3>
    <p>Foundations are how we express our brand through color, space, typography, etc.</p>
    <rh-cta slot="footer" href="/foundations">Our foundations</rh-cta>
  </rh-card>
  <rh-card>
    <rh-icon slot="header" set="standard" icon="interoperability"></rh-icon>
    <h3 slot="header">Design tokens</h3>
    <p>Design tokens are how we translate our design language decisions into code.</p>
    <rh-cta slot="footer" href="tokens">Our design tokens</rh-cta>
  </rh-card>
  <rh-card>
    <rh-icon slot="header" set="standard" icon="book"></rh-icon>
    <h3 slot="header">Documentation</h3>
    <p>This website offers guidance about how to use our 
      <a href="/elements">elements</a> and <a href="/patterns">patterns</a>.
      Learn how to apply them accessibily with
      <a href="/accessibility/development/">developer-specific guidelines</a>.</p>
    <rh-cta slot="footer" href="/elements">Our elements</rh-cta>
  </rh-card>
  <rh-card>
    <rh-icon slot="header" set="standard" icon="code"></rh-icon>
    <h3 slot="header">GitHub repositories</h3>
    <p>Explore our code, roadmaps, and discussions in the 
      <a href="https://github.com/RedHat-UX/red-hat-design-system">Red Hat Design System repo</a> and the 
      <a href="https://github.com/RedHat-UX/red-hat-design-tokens">Red Hat Design Tokens repo</a>.</p>
    <rh-cta slot="footer" href="https://github.com/RedHat-UX/">View our repos</rh-cta>
  </rh-card>
</div>


## About Web Components

### What are Web Components?

Every Web Component is a custom HTML element. Web Components are made with standard web platform APIs, and not only with JavaScript frameworks. Those standards include:

- [Custom Elements][ce]
- [Shadow DOM][sd]
- [HTML templates][te]
- [CSS Custom Properties][cssprop] and [Shadow Parts][csspart]
- [Element Internals][internals]
- [ECMAScript Modules][esm]
- _and others_

These standards combine to enable developers to write reusable and encapsulated UI elements which work with the browser's built-in component model.

### Why Web Components?

<section class="grid layout-content-image" id="section-encapsulation">
  {% include './web-components-1.svg' %}
  <div class="content-block">

#### Encapsulation

Web Components encapsulate their templates, styles, and behavior. They establish a strong boundary between the component's internals and the rest of the website, letting developers write more modular code while avoiding conflicts with page-level CSS and JS. This hides complex logic and templating from the rest of the page's UI, which helps to ship design systems and applications at scale. In addition to encapsulating styles, Web Components can ship complex accessibility patterns, making it easier for page authors to provide accessible, rich experiences.

  </div>
</section>
<section class="grid layout-content-image reversed" id="section-apis">
  {% include './web-components-2.svg' %}
  <div class="content-block">

#### Web standards APIs

Because Web Components are built with web standards, the technology is future-proofed, reliable, and supported by every modern browser. As the browser's native component model, Web Components continually benefit from new specifications and features as they are added to the web platform (e.g.,[Scoped Custom Element Registries][scoped]).

  </div>
</section>
<section class="grid layout-content-image" id="section-framework">
  {% include './web-components-3.svg' %}
  <div class="content-block">

#### Framework agnostic

Web Components are framework agnostic, meaning they can be used in any JavaScript framework which outputs HTML. This allows Red Hat to build and maintain a single Design System library that can be used across the entire enterprise. Engineers can then switch frameworks, if necessary, without throwing away all their work. Web Components help to break down silos, increase collaboration, and reduce duplication of effort.

  </div>
</section>

### How do Web Components affect performance?

Because the code which delineates the component model for Web Components is already a part of your users' browser, they do not need to rely on client-side JavaScript in the same way that framework components do. We have observed that adding several of our design systems' components to an app increased the bundle size by an amount _less than the weight of the `react-dom` library_. Much of that JavaScript payload consists of HTML and CSS, which compresses well and executes efficiently. Advanced techniques like <abbr title="server-side rendering">SSR</abbr> of [Declarative Shadow DOM templates][dsd] can help to reduce loading times and cumulative layout shift.

We anticipate that if HTML modules and CSS modules become widely implemented in browsers, that something like [Declarative Custom Elements][dce] will make shipping design system elements in plain `.html` files feasible.

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="../designers/">Designers</a> page.</p>
</uxdot-feedback>

[ce]: https://html.spec.whatwg.org/dev/custom-elements.html#custom-elements
[sd]: https://dom.spec.whatwg.org/#shadow-trees
[te]: https://html.spec.whatwg.org/dev/scripting.html#the-template-element
[cssprop]: https://www.w3.org/TR/css-variables/
[csspart]: https://www.w3.org/TR/css-shadow-parts-1/
[internals]: https://html.spec.whatwg.org/dev/custom-elements.html#element-internals
[esm]: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-modules
[scoped]: https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Scoped-Custom-Element-Registries.md
[dsd]: https://html.spec.whatwg.org/dev/scripting.html#attr-template-shadowrootmode
[dce]: https://github.com/WICG/webcomponents/issues/1009
