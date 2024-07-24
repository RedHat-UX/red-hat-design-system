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
importElements:
  - rh-card
  - rh-cta
---

<style>
  .grid > rh-card {
    display: grid;
  }

  rh-card > svg[slot] {
    fill: var(--rh-color-accent-brand-on-light, #ee0000);
    width: var(--rh-size-icon-07, 80px);
    margin-block-end: var(--rh-space-lg, 16px);
  }

  rh-card > p[slot],
  rh-card > h3[slot] {
    margin-block: 0;
  }

  #section-encapsulation,
  #section-apis,
  #section-framework {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: "image" "content";
    gap: var(--rh-space-2xl, 32px);
  }

  #section-encapsulation {
    margin-block-start: var(--rh-space-2xl, 32px);
  }

  section > div {
    grid-area: content;
  }

  section > svg {
    grid-area: image;
    padding: var(--rh-space-2xl, 32px);
    border: var(--rh-border-width-sm, 1px) solid var(--rh-color-border-subtle-on-light, #c7c7c7);
    border-radius: var(--rh-border-radius-default, 3px);
  }

  @media (min-width: 992px) {
    #section-encapsulation,
    #section-framework {
      grid-template-columns: auto 295px;
      grid-template-areas: "content image";
    }

    #section-apis {
      grid-template-columns: 295px auto;
      grid-template-areas: "image content";
    }

    #section-encapsulation svg,
    #section-framework svg {
      justify-self: self-end;
    }
  }
</style>


## Introduction

Welcome to the **Red Hat Design System** (RHDS) for digital experiences. If you need to develop something using our design system, you have come to the right place.

Read this section to get started and e-mail [design-system@redhat.com](mailto:design-system@redhat.com) or connect with us on Slack if you have any questions along the way.


## Learn about our design system

Our design system libraries and the documentation website offer assets and guidance needed to create digital experiences. Please use these resources to have a better understanding of how to use our design system.

<div class="grid sm-two-columns">
  <rh-card>
    <svg slot="header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
      <path d="M10 21.37a.63.63 0 0 0-.62.64.63.63 0 0 0 1.25 0 .64.64 0 0 0-.63-.64Zm-2 0a.63.63 0 0 0-.62.64.63.63 0 0 0 1.25 0 .64.64 0 0 0-.63-.64Z"/>
      <path d="M22 18.38H5a.62.62 0 0 0-.62.62v12a.62.62 0 0 0 .62.62h17a.62.62 0 0 0 .62-.62V19a.62.62 0 0 0-.62-.62Zm-.62 12H5.62V19.62h15.76Z"/>
      <path d="M14 22.62h5a.62.62 0 0 0 0-1.24h-5a.62.62 0 1 0 0 1.24Zm5-13h6a.62.62 0 0 0 .62-.62V5a.62.62 0 0 0-.62-.62h-6a.62.62 0 0 0-.62.62v4a.62.62 0 0 0 .62.62Zm.62-4h4.76v2.76h-4.76ZM31 14.38h-6a.62.62 0 0 0-.62.62v4a.62.62 0 0 0 .62.62h6a.62.62 0 0 0 .62-.62v-4a.62.62 0 0 0-.62-.62Zm-.62 4h-4.76v-2.76h4.76ZM6 14.62h6a.62.62 0 0 0 .62-.62v-4a.62.62 0 0 0-.62-.62H6a.62.62 0 0 0-.62.62v4a.62.62 0 0 0 .62.62Zm.62-4h4.76v2.76H6.62Zm20.8 9.81a.61.61 0 0 0-.82.32 9.41 9.41 0 0 1-3 3.75.63.63 0 0 0-.12.88.62.62 0 0 0 .5.24.68.68 0 0 0 .38-.12 10.67 10.67 0 0 0 3.36-4.25.62.62 0 0 0-.3-.82Zm-1.92-9.05a9.47 9.47 0 0 1 1.1 1.87.61.61 0 0 0 .57.37.56.56 0 0 0 .25 0 .62.62 0 0 0 .32-.82 11.07 11.07 0 0 0-1.24-2.13.63.63 0 0 0-1 .76ZM13 9a.58.58 0 0 0 .31-.08 9.23 9.23 0 0 1 .83-.42l.23-.1c.22-.09.44-.18.67-.25a10.17 10.17 0 0 1 1.08-.3c.31-.06.62-.11.94-.14a.62.62 0 1 0-.12-1.24 9 9 0 0 0-1.06.16 9.34 9.34 0 0 0-1 .27l-.17.07a7.61 7.61 0 0 0-.75.28l-.27.11c-.31.14-.61.29-.91.46a.61.61 0 0 0-.31.62A.63.63 0 0 0 13 9Zm-5.57 6.94a9.29 9.29 0 0 0 0 1.06.62.62 0 0 0 1.24 0c0-.32 0-.63.05-.94a.62.62 0 1 0-1.24-.12Z"/>
    </svg>
    <h3 slot="header">Foundations</h3>
    <p>Foundations are how we express our brand through color, space, typography, etc.</p>
    <rh-cta slot="footer">
      <a href="/foundations">Our foundations</a>
    </rh-cta>
  </rh-card>
  <rh-card>
    <svg slot="header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
      <path d="M28 24.5a.64.64 0 0 0-1.08 0l-3.5 6.19a.64.64 0 0 0 0 .63.62.62 0 0 0 .54.3h7a.62.62 0 0 0 .54-.93Zm-3 5.88 2.43-4.3 2.43 4.3Zm-17-26a3.62 3.62 0 0 0 0 7.24 3.62 3.62 0 0 0 0-7.24Zm0 6a2.38 2.38 0 0 1 0-4.75 2.38 2.38 0 0 1 0 4.75Zm3 14H5a.62.62 0 0 0-.62.62v6a.62.62 0 0 0 .62.62h6a.62.62 0 0 0 .62-.62v-6a.62.62 0 0 0-.62-.62Zm-.62 6H5.62v-4.76h4.76Zm17.18-17.94a.61.61 0 0 0 .88 0l4-4a.61.61 0 0 0 0-.88l-4-4a.61.61 0 0 0-.88 0l-4 4a.61.61 0 0 0 0 .88ZM28 4.88 31.12 8 28 11.12 24.88 8Zm-4.42.26c.27-.84-.84-.95-1.4-1.16a14.83 14.83 0 0 0-9.4.35.63.63 0 0 0 .44 1.17 13.57 13.57 0 0 1 9.56 0 .61.61 0 0 0 .8-.36ZM4.76 22.6a.63.63 0 0 0 .42-.78 13.48 13.48 0 0 1 .32-8.6.62.62 0 0 0-1.16-.44 14.69 14.69 0 0 0-.34 9.4.63.63 0 0 0 .76.42Zm16.11 8.47a13.54 13.54 0 0 1-6.69-.25.63.63 0 0 0-.36 1.2 14.84 14.84 0 0 0 7.31.27.64.64 0 0 0 .48-.75.61.61 0 0 0-.74-.47Zm9.9-18.86a.63.63 0 0 0-.35.82 13.41 13.41 0 0 1-.33 10.7.62.62 0 0 0 .29.83c1.5.67 2.34-5.49 2.25-6.56s-.45-6.33-1.86-5.79Z"/>
    </svg>
    <h3 slot="header">Design tokens</h3>
    <p>Design tokens are how we translate our design language decisions into code.</p>
    <rh-cta slot="footer">
      <a href="tokens">Our design tokens</a>
    </rh-cta>
  </rh-card>
  <rh-card>
    <svg slot="header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
      <path d="M31 11.38H18.26l-6.82-6.82a.62.62 0 0 0-1.06.44v6.38H5a.62.62 0 0 0-.62.62v19a.62.62 0 0 0 .62.62h26a.62.62 0 0 0 .62-.62V12a.62.62 0 0 0-.62-.62Zm-.62 13H25a.62.62 0 0 0-.62.62v5.38h-5.76V12.62h11.76Zm-.89 1.24-3.87 3.87v-3.87ZM11.62 6.51l5.76 5.75v17.23l-5.76-5.75Zm-6 6.11h4.76V24a.59.59 0 0 0 .18.44l5.93 5.94H5.62Zm20.89 17.76 3.87-3.87v3.87Z"/>
    </svg>
    <h3 slot="header">Documentation</h3>
    <p>This website offers guidance about how to use our 
      <a href="/elements">elements</a> and <a href="/patterns">patterns</a>.
      Learn how to apply them accessibily with
      <a href="/accessibility/development/">developer-specific guidelines</a>.</p>
    <rh-cta slot="footer">
      <a href="/elements">Our elements</a>
    </rh-cta>
  </rh-card>
  <rh-card>
    <svg slot="header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
      <path d="M31 4.38H5a.62.62 0 0 0-.62.62v26a.62.62 0 0 0 .62.62h26a.62.62 0 0 0 .62-.62V5a.62.62 0 0 0-.62-.62Zm-.62 26H5.62V5.62h24.76Z"/>
      <path d="M17.24 21.54a.62.62 0 0 0 .74-.49l1.24-5.84a.64.64 0 0 0-.48-.75.63.63 0 0 0-.74.54l-1.25 5.84a.64.64 0 0 0 .49.7ZM23.12 18 21 20.11a.63.63 0 1 0 .88.89l2.56-2.56a.62.62 0 0 0 0-.89L21.88 15a.63.63 0 1 0-.88.88Zm-9 3a.63.63 0 0 0 .88-.89L12.88 18 15 15.87c.59-.56-.31-1.46-.88-.88l-2.56 2.56a.62.62 0 0 0 0 .89Z"/>
    </svg>
    <h3 slot="header">GitHub repositories</h3>
    <p>Explore our code, roadmaps, and discussions in the 
      <a href="https://github.com/RedHat-UX/red-hat-design-system">Red Hat Design System repo</a> and the 
      <a href="https://github.com/RedHat-UX/red-hat-design-tokens">Red Hat Design Tokens repo</a>.</p>
    <rh-cta slot="footer">
      <a href="https://github.com/RedHat-UX/">View our repos</a>
    </rh-cta>
  </rh-card>
</div>


## About Web Components

### What are Web Components?

Every web component is a custom HTML element. Web Components are made with standard web platform APIs, and not only with JavaScript frameworks. Those standards include [Custom Elements][ce]; [Shadow DOM][sd]; [HTML templates][te]; [CSS Custom Properties][cssprop] and [Shadow Parts][csspart]; [Element Internals][internals]; [ECMAScript Modules][esm]; and others. These combine to enable developers to write reusable and encapsulated UI elements which work with the browser's in-built component model.

### Why Web Components?

<section id="section-encapsulation">
  <svg id="encapsulation-image" width="295" height="243" viewBox="0 0 295 243" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="295" height="242.357" rx="3" fill="#F2F2F2"/>
    <mask id="mask0_89_60" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="43" y="16" width="210" height="221">
      <path d="M43 16H253V237H43V16Z" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_89_60)">
      <path d="M113.353 84.1064L162.036 84.1094L186.143 125.593L161.569 167.618L112.886 167.888L88.7785 126.132L113.353 84.1064Z" fill="#92C5F9"/>
      <path d="M103.418 117.907L128.287 75.3775L177.569 75.3794L201.935 117.308L177.064 159.842L127.787 160.115L103.418 117.907Z" stroke="#151515" stroke-width="6"/>
      <path d="M149.924 67.357L164.068 8" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M147.325 62.018L141.377 45.771" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M137.4 36.2001L147.133 44.2438L135.3 48.651L137.4 36.2001Z" fill="#A3A3A3"/>
      <path d="M200.144 94.8159L253.764 65.6934" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M202.381 89.3156L210.499 74.0371" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M214.965 64.6836L215.48 77.2998L204.296 71.438L214.965 64.6836Z" fill="#A3A3A3"/>
      <path d="M201.513 143.04L233.483 195.013" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M207.126 144.977L222.82 152.26" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M232.4 156.215L219.83 157.41L225.081 145.927L232.4 156.215Z" fill="#A3A3A3"/>
      <path d="M94.8564 94.8159L41.2356 65.6934" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M92.6193 89.3156L84.5011 74.0371" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M80.0355 64.6836L79.5202 77.2998L90.7037 71.438L80.0355 64.6836Z" fill="#A3A3A3"/>
      <path d="M93.4873 143.04L61.5168 195.013" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M87.874 144.977L72.1801 152.26" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M62.5999 156.215L75.1699 157.41L69.9194 145.927L62.5999 156.215Z" fill="#A3A3A3"/>
      <path d="M152.769 175L138.625 234.357" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M155.368 180.339L161.316 196.586" stroke="#A3A3A3" stroke-width="2" stroke-linejoin="bevel" stroke-dasharray="16 8"/>
      <path d="M165.293 206.157L155.56 198.113L167.393 193.706L165.293 206.157Z" fill="#A3A3A3"/>
    </g>
  </svg>
  <div>

#### Encapsulation

Web Components encapsulate their templates, styles, and behaviour. They establish a strong boundary between the component's internals and the rest of the website, letting developers write more modular code while avoiding conflicts with page-level CSS and JS. This hides complex logic and templating from the rest of the page's UI, which helps to ship design systems and applications at scale. In addition to encapsulating styles, Web Components can ship complex accessibility patterns, making it easier for page authors to provide accessible rich experiences.

  </div>
</section>
<section id="section-apis">
  <svg id="apis-image" width="294" height="171" viewBox="0 0 294 171" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="294" height="171" rx="3" fill="#f2f2f2"/>
    <mask id="mask0_63_262" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="80" y="24" width="134" height="123">
      <rect x="80.5" y="24" width="133" height="123" fill="white"/>
    </mask>
    <g mask="url(#mask0_63_262)">
      <path d="M106.629 42.6347L155.311 42.6365L179.419 84.1211L154.844 126.147L106.162 126.416L82.0539 84.6602L106.629 42.6347Z" fill="#92c5f9"/>
      <path d="M96.6929 76.4349L121.562 33.9058L170.845 33.9066L195.211 75.8367L170.339 118.371L121.062 118.643L96.6929 76.4349Z" stroke="#151515" stroke-width="6"/>
      <path d="M171.5 144.457H119L121.903 138.457H168.245L171.5 144.457Z" fill="#a3a3a3"/>
      <path d="M157 122.457L119 122.181L122.844 115.456L161.13 115.406L157 122.457Z" fill="#92c5f9"/>
      <path d="M172.5 122.232H157.13L161.15 115.357L168.6 115.356L172.5 122.232Z" fill="#f2f2f2"/>
      <path d="M172.8 30.1408L199.64 75.8496L191.676 75.85L168.9 36.9563L172.8 30.1408Z" fill="#f2f2f2"/>
      <path d="M186.196 25.0089L212.2 70.013L205.4 70.0167L182.627 30.8276L186.196 25.0089Z" fill="#a3a3a3"/>
      <line x1="172.857" y1="35.4855" x2="195.495" y2="73.2152" stroke="#151515" stroke-width="2" stroke-dasharray="8 8"/>
      <line x1="124" y1="119" x2="168" y2="119" stroke="#151515" stroke-width="2" stroke-dasharray="8 8"/>
    </g>
  </svg>
  <div>

#### Web standards APIs

Because Web Components are build with web standards, the technology is future-proofed, reliable, and supported by every modern browser. As the browser's native component model, Web Components continually benefit from new specifications and features as they are added to the web platform, for example [Scoped Custom Element Registries][scoped].

  </div>
</section>
<section id="section-framework">
  <svg id="framework-image" width="294" height="248" viewBox="0 0 294 248" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="294" height="248" rx="3" fill="#F2F2F2"/>
    <mask id="mask0_89_91" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="32" y="24" width="230" height="200">
      <rect x="32" y="24" width="230" height="200" fill="white"/>
    </mask>
    <g mask="url(#mask0_89_91)">
      <path d="M197.37 58.4229L197.935 57.4325L197.37 56.4421L182.353 30.0961L181.778 29.0865L180.616 29.0865L150.582 29.0865L149.42 29.0865L148.844 30.0961L133.827 56.4421L133.263 57.4325L133.827 58.4229L148.844 84.7688L149.42 85.7784L150.582 85.7784L180.616 85.7784L181.778 85.7784L182.353 84.7688L197.37 58.4229Z" stroke="#A3A3A3" stroke-width="4"/>
      <path d="M245.738 86.8037L246.302 85.8133L245.738 84.8229L230.721 58.4769L230.145 57.4673L228.983 57.4673L198.949 57.4673L197.787 57.4673L197.211 58.4769L182.194 84.8229L181.63 85.8133L182.194 86.8037L197.211 113.15L197.787 114.159L198.949 114.159L228.983 114.159L230.145 114.159L230.721 113.15L245.738 86.8037Z" stroke="#A3A3A3" stroke-width="4"/>
      <path d="M245.738 143.559L246.302 142.569L245.738 141.578L230.721 115.232L230.145 114.223L228.983 114.223L198.949 114.223L197.787 114.223L197.211 115.232L182.194 141.578L181.63 142.569L182.194 143.559L197.211 169.905L197.787 170.915L198.949 170.915L228.983 170.915L230.145 170.915L230.721 169.905L245.738 143.559Z" stroke="#A3A3A3" stroke-width="4"/>
      <path d="M86.7128 195.616L86.2894 196.359L86.7128 197.102L96.6103 214.466L97.0419 215.223L97.9134 215.223L117.708 215.223L118.58 215.223L119.012 214.466L128.909 197.102L129.332 196.359L128.909 195.616L119.012 178.252L118.58 177.495L117.708 177.495L97.9134 177.495L97.0419 177.495L96.6103 178.252L86.7128 195.616Z" stroke="#A3A3A3" stroke-width="3"/>
      <path d="M54.8346 176.91L54.4112 177.653L54.8346 178.396L64.7321 195.76L65.1637 196.517L66.0352 196.517L85.8302 196.517L86.7018 196.517L87.1334 195.76L97.0309 178.396L97.4543 177.653L97.0309 176.91L87.1334 159.546L86.7018 158.789L85.8302 158.789L66.0352 158.789L65.1636 158.789L64.732 159.546L54.8346 176.91Z" stroke="#A3A3A3" stroke-width="3"/>
      <path d="M54.8346 139.504L54.4112 140.247L54.8346 140.99L64.7321 158.354L65.1637 159.111L66.0352 159.111L85.8302 159.111L86.7018 159.111L87.1334 158.354L97.0309 140.99L97.4543 140.247L97.0309 139.504L87.1334 122.14L86.7018 121.383L85.8302 121.383L66.0352 121.383L65.1636 121.383L64.732 122.14L54.8346 139.504Z" stroke="#A3A3A3" stroke-width="3"/>
      <path d="M60.7827 59.7333L60.2875 59.451L59.7923 59.7333L48.7423 66.0317L48.2375 66.3194V66.9004V79.4972V80.0783L48.7423 80.366L59.7923 86.6644L60.2875 86.9466L60.7827 86.6644L71.8326 80.366L72.3374 80.0783V79.4972V66.9004V66.3194L71.8326 66.0317L60.7827 59.7333Z" stroke="#A3A3A3" stroke-width="2"/>
      <path d="M72.6866 39.4471L72.1914 39.1649L71.6962 39.4471L60.6462 45.7455L60.1414 46.0333V46.6143V59.2111V59.7921L60.6462 60.0799L71.6962 66.3782L72.1914 66.6605L72.6866 66.3782L83.7365 60.0799L84.2413 59.7921V59.2111V46.6143V46.0333L83.7365 45.7455L72.6866 39.4471Z" stroke="#A3A3A3" stroke-width="2"/>
      <path d="M96.4905 39.4471L95.9953 39.1649L95.5001 39.4471L84.4501 45.7455L83.9453 46.0333V46.6143V59.2111V59.7921L84.4501 60.0799L95.5001 66.3782L95.9953 66.6605L96.4905 66.3782L107.54 60.0799L108.045 59.7921V59.2111V46.6143V46.0333L107.54 45.7455L96.4905 39.4471Z" stroke="#A3A3A3" stroke-width="2"/>
      <path d="M191.684 208.189L191.931 208.33L192.179 208.189L200.072 203.69L200.324 203.547V203.256V194.258V193.968L200.072 193.824L192.179 189.325L191.931 189.184L191.684 189.325L183.791 193.824L183.538 193.968V194.258V203.256V203.547L183.791 203.69L191.684 208.189Z" stroke="#A3A3A3"/>
      <path d="M183.181 222.68L183.428 222.821L183.676 222.68L191.569 218.181L191.821 218.037V217.746V208.749V208.458L191.569 208.314L183.676 203.815L183.428 203.674L183.181 203.815L175.288 208.314L175.036 208.458V208.749V217.746V218.037L175.288 218.181L183.181 222.68Z" stroke="#A3A3A3"/>
      <path d="M166.178 222.68L166.426 222.821L166.673 222.68L174.566 218.181L174.818 218.037V217.746V208.749V208.458L174.566 208.314L166.673 203.815L166.426 203.674L166.178 203.815L158.285 208.314L158.033 208.458V208.749V217.746V218.037L158.285 218.181L166.178 222.68Z" stroke="#A3A3A3"/>
      <path d="M124.839 100.84L154.298 100.84L168.887 125.945L154.016 151.376L124.556 151.539L109.968 126.271L124.839 100.84Z" fill="#92C5F9"/>
      <path d="M122.93 120.592L137.269 96.07L165.687 96.0693L179.734 120.243L165.393 144.768L136.979 144.926L122.93 120.592Z" stroke="#151515" stroke-width="4"/>
    </g>
  </svg>
  <div>

#### Framework agnostic

Web Components are framework agnostic, meaning they can be used in any javascript framework which outputs HTML. This allows Red Hat to build and maintain a single Design System library that can be used across the entire enterprise. This makes it easier to switch frameworks if necessary, without throwing away all their work. Web Components help to break down silos, increase collaboration, reduce duplication of effort.

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
