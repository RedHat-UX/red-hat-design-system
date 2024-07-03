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
    <p>
      <a href="/foundations">Foundations</a> 
      are how we express our brand through color, space, typography, etc.
    </p>
  </div>
  <div>
    <h3>Design tokens</h3>
    <p>
      <a href="tokens">Design tokens</a> 
      are how we translate our design language decisions into code.
    </p>
  </div>
  <div>
    <h3>Documentation</h3>
    <p>
      This website offers guidance about how to use our 
      <a href="/elements">elements</a> and <a href="/patterns">patterns</a>.
      Learn how to apply them accessibily with
      <a href="/accessibility/development/">developer-specific guidelines</a>.
    </p>
  </div>
  <div>
    <h3>GitHub repositories</h3>
    <p>
      Explore our code, roadmaps, and discussions in the 
      <a href="https://github.com/RedHat-UX/red-hat-design-system">
        Red Hat Design System repo
      </a> and the <a href="https://github.com/RedHat-UX/red-hat-design-tokens">
        Red Hat Design Tokens repo
      </a>.
    </p>
  </div>
</div>


## About web components

### What are web components?

Every web component is a custom HTML element. Web components are made with standard web platform APIs, and not only with JavaScript frameworks. Those standards include [Custom Elements][ce]; [Shadow DOM][sd]; [HTML templates][te]; [CSS Custom Properties][cssprop] and [Shadow Parts][csspart]; [Element Internals][internals]; [ECMAScript Modules][esm]; and others. These combine to enable developers to write reusable and encapsulated UI elements which work with the browser's in-built component model.

### Why web components?

#### Encapsulation

Web components encapsulate their templates, styles, and behaviour. They establish a strong boundary between the component's internals and the rest of the website, letting developers write more modular code while avoiding conflicts with page-level CSS and JS. This hides complex logic and templating from the rest of the page's UI, which helps to ship design systems and applications at scale. In addition to encapsulating styles, web components can ship complex accessibility patterns, making it easier for page authors to provide accessible rich experiences.

#### Web standards

Because web components are build with web standards, the technology is future-proofed, reliable, and supported by every modern browser. As the browser's native component model, web components continually benefit from new specifications and features as they are added to the web platform, for example [Scoped Custom Element Registries][scoped].

#### Framework agnostic

Web components are framework agnostic, meaning they can be used in any javascript framework which outputs HTML. This allows Red Hat to build and maintain a single Design System library that can be used across the entire enterprise. This makes it easier to switch frameworks if necessary, without throwing away all their work. Web components help to break down silos, increase collaboration, reduce duplication of effort.

### How do web components affect performance?

Because the code which delineates the component model for Web components is already a part of your users' browser, they do not need to rely on client-side JavaScript in the same way that framework components do. We have observed that adding several of our design systems' components to an app increased the bundle size by an amount _less than the weight of the `react-dom` library_. Much of that JavaScript payload consists of HTML and CSS, which compresses well and executes efficiently. Advanced techniques like <abbr title="server-side rendering">SSR</abbr> of [Declarative Shadow DOM templates][dsd] can help to reduce loading times and cumulative layout shift.

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
