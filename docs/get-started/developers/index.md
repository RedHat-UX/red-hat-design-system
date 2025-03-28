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

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
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

  #learn-about-grid {
    margin-block-start: var(--rh-space-2xl, 32px);
  }
</style>


## Introduction

Welcome to the **Red Hat Design System** (RHDS) for digital experiences. If you need to develop something using our design system, you have come to the right place.

Read this section to get started and e-mail [design-system@redhat.com](mailto:design-system@redhat.com) or connect with us on Slack if you have any questions along the way.

<rh-cta><a href="installation">How to install RHDS</a></rh-cta>

## Learn about our design system

Our design system documentation offers assets and guidance needed to create digital experiences. Please use these resources to have a better understanding of how build with our design system.

<div id="learn-about-grid" class="grid xs-two-columns sm-three-columns">
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="website-system"></rh-icon>
    <h3 slot="headline"><a href="/foundations">Foundations</a></h3>
    <p>Read about how we us grid, space, color, typography, and more to express our brand.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="book"></rh-icon>
    <h3 slot="headline"><a href="/elements">Element docs</a></h3>
    <p>Learn how to implement and customize our RHDS Web Components, the interactive building blocks of our design system.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="blueprints"></rh-icon>
    <h3 slot="headline"><a href="/patterns">Pattern docs</a></h3>
    <p>Patterns compose elements, tokens, and scripts with content to create uniform, accessible experiences.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="hierarchy"></rh-icon>
    <h3 slot="headline"><a href="/tokens">Design token docs</a></h3>
    <p>We translate our design language decisions into code through design tokens. Learn how to incorporate them.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="paint-roller"></rh-icon>
    <h3 slot="headline"><a href="/theming">Theming docs</a></h3>
    <p>Explore how to use our powerful and flexible theming system to customize RHDS.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="wheelchair-accessible"></rh-icon>
    <h3 slot="headline"><a href="/accessibility/development/">Accessibility docs</a></h3>
    <p>Developer-specific guidelines equip you with the information to create inclusive digital experiences.</p>
  </rh-tile>
</div>

## Our GitHub repositories

Our design system is open source.

<div class="grid xs-two-columns">
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="code"></rh-icon>
    <h3 slot="headline"><a href="https://github.com/RedHat-UX/red-hat-design-system">RHDS repo</a></h3>
    <p>Explore our Red Hat Design System code, roadmaps, and discussions.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="open-source"></rh-icon>
    <h3 slot="headline"><a href="https://github.com/RedHat-UX/">Our GitHub org</a></h3>
    <p>Check out our other open source repositiories, like our Design Tokens or RHDS Extensions.</p>
  </rh-tile>
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
  <img src="/assets/get-started/developers/web-components-1.svg" 
      alt="" 
      width="369"
      height="304">
  <div class="content-block">

#### Encapsulation

Web Components encapsulate their templates, styles, and behavior. They establish a strong boundary between the component's internals and the rest of the website, letting developers write more modular code while avoiding conflicts with page-level CSS and JS. This hides complex logic and templating from the rest of the page's UI, which helps to ship design systems and applications at scale. In addition to encapsulating styles, Web Components can ship complex accessibility patterns, making it easier for page authors to provide accessible, rich experiences.

  </div>
</section>
<section class="grid layout-content-image reversed" id="section-apis">
  <img src="/assets/get-started/developers/web-components-2.svg"
      alt="" 
      width="369"
      height="215"> 
  <div class="content-block">

#### Web standards APIs

Because Web Components are built with web standards, the technology is future-proofed, reliable, and supported by every modern browser. As the browser's native component model, Web Components continually benefit from new specifications and features as they are added to the web platform (e.g.,[Scoped Custom Element Registries][scoped]).

  </div>
</section>
<section class="grid layout-content-image" id="section-framework">
  <img src="/assets/get-started/developers/web-components-3.svg"
      alt="" 
      width="369"
      height="312">
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
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
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
