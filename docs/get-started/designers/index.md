---
layout: layouts/pages/has-toc.njk
title: Overview
heading: Designers
sidenavTitle: Designers
permalink: /get-started/designers/index.html
tags:
  - getstarted
  - designers
subnav:
  collection: sortedDesigners
  order: 00
order: 10
---

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>
<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-example.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-table/rh-table.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
</script>

{#
  the .page-designers rule allows for spacing of "sections" while only using
  headers which are converted to uxdot-copy-permalink
  TODO: determine if this is how we want to do this
#}

<style data-helmet>
  .page-overview .container {
    uxdot-copy-permalink:not(:first-of-type) {
      margin-block-start: var(--rh-space-5xl, 80px);
    }

    uxdot-copy-permalink:not(:first-of-type) + uxdot-copy-permalink {
      margin-block-start: var(--rh-space-2xl, 32px);
    }

    ul {
      font-size: var(--rh-font-size-body-text-lg, 1.125rem);
      margin-block-end: var(--rh-space-2xl, 32px);
    }
  }

  #learn-about-grid {
    margin-block-start: var(--rh-space-2xl, 32px);
    & h3 {
      font-size: var(--rh-font-size-heading-sm, 1.5rem);
      font-weight: var(--rh-font-weight-heading-medium, 500);
    }
  }
</style>

## Introduction

Welcome to the **Red Hat Design System** (RHDS) for digital experiences. If you
need to design something using our design system, you have come to the right
place.

Follow these steps to get started and e-mail 
[design-system@redhat.com][designsystemredhatcom] or [connect with us
on Slack][connectslack] if you have any questions along the way.

## Explore brand standards

Our [Brand standards][brandstandards] are the source code of the Red Hat brand. 
Using brand standards as the starting point for every project ensures that every 
interaction with Red Hat reflects our brand personality, brand strategy, and 
consistent visual language. Consistency is how we create authentic relationships 
and credibility with our customers, partners, and contributors.

<uxdot-example color-palette="lightest" variant="full" no-border>
  <img alt="The text 'Brand Standards' with small illustrations of color swatches, dropdown element, and resizing an icon"
       src="brand-standards.png">
</uxdot-example>

<rh-cta><a href="https://www.redhat.com/en/about/brand/standards">Explore brand standards</a></rh-cta>

## Learn about our design system

Our design system libraries and the documentation website offer assets and
guidance needed to create digital experiences. Please read through each section
to have a better understanding of how to use our design system.

<div id="learn-about-grid" class="grid xs-two-columns sm-three-columns">
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="website-system"></rh-icon>
    <h3 slot="headline"><a href="/foundations">Foundations</a></h3>
    <p>Foundations are how we express our brand through color, space, typography, etc.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="toolbox"></rh-icon>
    <h3 slot="headline"><a href="/tokens">Design tokens</a></h3>
    <p>Design tokens</a> are how we translate our design language decisions into code.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="interoperability"></rh-icon>
    <h3 slot="headline"><a href="/elements">Elements</a></h3>
    <p>Custom HTML elements that are the interactive building blocks of our design system.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="blueprints"></rh-icon>
    <h3 slot="headline"><a href="/patterns">Patterns</a></h3>
    <p>Patterns compose elements and tokens with content to create uniform, accessible experiences.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="paint-roller"></rh-icon>
    <h3 slot="headline"><a href="/theming">Theming</a></h3>
    <p>Learn about our powerful, flexible, and easy-to-use theming system.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="wheelchair-accessible"></rh-icon>
    <h3 slot="headline"><a href="/accessibility/design/">Accessibility</a></h3>
    <p>Designer-specific guidelines equip you with the information to create inclusive digital experiences.</p>
  </rh-tile>
</div>

## Connect with us

For questions, additional support, or training, e-mail
[design-system@redhat.com][designsystemredhatcom] or connect with us on Slack.

## Additional resources
Use these resources to help you stay aligned to our brand and design system while working.

-   [Brand standards][brandstandards]
-   [Fonts][fonts]
-   [Foundations][foundations], [elements][elements], and
    [patterns][patterns]
-   [GitHub repo][githuborg] and our [roadmap][roadmap]
-   [RHa11y Resource Hub][rha11yresourcehub]
-   Reference existing pages so you can see how brand and design system
    assets are being used
    -   [redhat.com home page][redhatcomhomepage]
    -   [Product page][productpage]
    -   [Resource article page][resourcearticlepage]
    -   [Catalog SERP][catalogserp]
    -   [Product trial page][producttrialpage]

<uxdot-feedback>
  <h2>Developers</h2>
  <p>To get started using our design system as a developer, go to the <a href="get-started/developers">Developers</a> page.</p>
</uxdot-feedback>

[brandstandards]: https://www.redhat.com/en/about/brand/standards
[catalogserp]: https://catalog.redhat.com/software/search?functionalCategories=AI%20%26%20machine%20learning
[connectslack]: /support/#contact-us
[createanissue]: https://github.com/RedHat-UX/red-hat-design-system/issues/new/choose
[designsystemredhatcom]: mailto:design-system@redhat.com
[elements]: /elements
[fonts]: https://github.com/RedHatOfficial/RedHatFont
[foundations]: /foundations
[githuborg]: https://github.com/RedHat-UX
[githubrepo]: https://github.com/RedHat-UX/red-hat-design-system
[patterns]: /patterns
[productpage]: https://www.redhat.com/en/technologies/cloud-computing/openshift
[producttrialpage]: https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/server/trial
[redhatcomhomepage]: https://redhat.com/
[resourcearticlepage]: https://www.redhat.com/en/topics/cloud-computing/what-are-cloud-services
[rha11yresourcehub]: https://github.com/hellogreg/rha11y-tools
[roadmap]: https://ux.redhat.com/about/roadmap/
