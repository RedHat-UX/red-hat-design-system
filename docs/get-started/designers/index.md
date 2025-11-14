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

<style data-helmet>
  #learn-about-grid {
    margin-block-start: var(--rh-space-2xl, 32px);
    & rh-tile > rh-icon {
      color: var(--rh-color-brand-red);
    }
  }
</style>

## Introduction

Welcome to the **Red Hat Design System** (RHDS). Follow the steps below to get 
started and let us know if you have any questions along the way.

## Start here

### Brand Standards

Brand standards are the starting point for all projects, they ensure that every
interaction our audiences have with Red Hat reflects our brand personality, 
aligns to our brand strategy, and uses a consistent visual language.

Why does that matter? Because it helps us create an authentic relationship 
and credibility with our customers, partners, and contributors.

<rh-cta><a href="https://www.redhat.com/en/about/brand/standards">Explore brand standards</a></rh-cta>

### Hybrid Style

Hybrid style allows us to add expressive storytelling to our brand, but 
the essentials of our brand stay the same. Knowing when to and how to 
balance the two is key.

Consider the goal of each project, the message we want to communicate, 
and where our customer is in their journey. Each piece of every project 
falls on a spectrum from the most essential to the most expressive, 
playful storytelling.

<rh-cta><a href="https://www.redhat.com/en/about/brand/standards/hybrid-style-handbook">Explore hybrid style</a></rh-cta>

### Design system essentials

<div id="learn-about-grid" class="grid xs-two-columns sm-three-columns">
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="website-system"></rh-icon>
    <h4 slot="headline"><a href="/foundations">Foundations</a></h4>
    <p>How we express our brand through design language like color, space, typography, and more.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="toolbox"></rh-icon>
    <h4 slot="headline"><a href="/tokens">Design tokens</a></h4>
    <p>Our single source of truth and how we translate design language decisions into code.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="wheelchair-accessible"></rh-icon>
    <h4 slot="headline"><a href="/accessibility/design/">Accessibility</a></h4>
    <p>Designer-specific guidelines that include information about how to create inclusive experiences.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="paint-roller"></rh-icon>
    <h4 slot="headline"><a href="/theming">Theming</a></h4>
    <p>An easy-to-use system that modifies elements and patterns to fit a specific visual style.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="interoperability"></rh-icon>
    <h4 slot="headline"><a href="/elements">Elements</a></h4>
    <p>Custom HTML elements that are the interactive building blocks of our design system.</p>
  </rh-tile>
  <rh-tile>
    <rh-icon slot="icon" set="standard" icon="blueprints"></rh-icon>
    <h4 slot="headline"><a href="/patterns">Patterns</a></h4>
    <p>Composable elements and tokens with content to create uniform, accessible experiences.</p>
  </rh-tile>
</div>

## Additional resources

Use these additional resources to stay aligned and informed while working.

  - [Accessibility tools](/accessibility/accessibility-tools/)
  - [Design system GitHub repo](https://github.com/RedHat-UX/red-hat-design-system)
  - [Design system roadmap](https://github.com/orgs/RedHat-UX/projects/7)
  - [Red Hat fonts](https://github.com/RedHatOfficial/RedHatFont)
  - [rha11y tools repo](https://github.com/hellogreg/rha11y-tools)

You can also reference these pages to see how our brand and design system work together.

  - [Catalog page](https://catalog.redhat.com/en)
  - [redhat.com home page](https://www.redhat.com/en)
  - [Product page](https://www.redhat.com/en/technologies/cloud-computing/openshift)
  - [Topic page](https://www.redhat.com/en/topics/ai/what-is-generative-ai)
  - [Trial page](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/server/trial)

## Connect with us

For questions, additional support, or training, 
[email](mailto:design-system@redhat.com) us or connect with us on 
[Slack](/support/#contact-us).

<uxdot-feedback>
  <h2>Developers</h2>
  <p>To get started using our design system as a developer, go to the <a href="get-started/developers">Developers</a> page.</p>
</uxdot-feedback>
