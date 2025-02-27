---
layout: layouts/pages/pattern.njk
title: Overview
heading: Personalization Patterns
sidenavTitle: All Personalization Patterns
order: 0
tags:
  - personalization
---

<link data-helmet
      rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">

<style data-helmet>
  #patterns-nav {
    margin-block: var(--rh-space--2xl, 32px);
  }
</style>

<script data-helmet type="module">
  import '@rhds/elements/rh-tile/rh-tile.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
</script>

{# NOTE: all images in this view need to be 340 by 200 px in order to maintain same ratio. #}

## What is Personalization?

Personalization is a digital marketing tactic as well as a UX layer applied on top of a website. It can be applied to one page or many pages.

Personalization works by intercepting priority audiences through account-based, demographic, behavioral, lifecycle, and intent-based targeting. These audiences are then presented with an interactive pattern that features, what we believe, is their best “next action” in order to meet their specific needs and progress them through the customer lifecycle.

## Current patterns

Current personalization patterns use the following assets.

- [Foundations](/foundations/) and [elements](/elements/) from the Red Hat Design System
- Icons using our [Icon](/elements/icon/) element

<nav id="patterns-nav" class="grid xs-two-columns sm-three-columns">
    {%- for pattern in collections['personalization-pattern'] -%}
    {%- set alt = pattern.data['pattern-info']['thumbnail-alt'] or pattern.data.title -%}
    <rh-tile compact bleed>
        <uxdot-example slot="image" no-border transparent>
            <img alt="{{alt}}"
                width="340"
                height="200"
                src="{{pattern.data['pattern-info'].thumbnail}}">
        </uxdot-example>
        <h3 slot="headline"><a href="{{pattern.url}}">{{pattern.data.title}}</a></h3>
        {%- if pattern.data['pattern-info'].status == 'deprecated' -%}
        <rh-tag slot="footer" variant="filled" color="orange" icon="close-circle-fill">Deprecated</rh-tag>
        {%- endif -%}
        {%- if pattern.data['pattern-info'].status == 'planned' -%}
        <rh-tag slot="footer" color="purple" variant="filled" icon="notification-fill">Planned</rh-tag>
        {%- endif -%}
    </rh-tile>
    {%- endfor -%}
</nav>

## Minimum requirements

In order to use personalization, the following technologies **must be implemented in advance**. There may be additional requirements per pattern beyond what is listed below.

To learn more, go to the Implementation page for the pattern you are interested in using.

- **Adobe Target** - deploys each personalized experience
- **Adobe Analytics** - provides insights that inform future personalized experiences
- **Red Hat Design System** - standardized code that all patterns rely on

<uxdot-feedback>
  <h2>Non-personalization patterns</h2>
  
  Learn more about using non-personalization patterns in your designs by visiting the [Patterns page][patternspage].

</uxdot-feedback>

[feedbackform]: https://docs.google.com/forms/d/e/1FAIpQLSft-6oHhI5d2wO-oEeBuT23wiYPpxOH2UKLH9ZkRswjby2CSg/viewform?usp=sf_link
[feedbackemail]: mailto:digital-design-system@redhat.com
[patternspage]: /patterns/