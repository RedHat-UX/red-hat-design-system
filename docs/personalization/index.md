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
</script>

{# NOTE: all images in this view need to be 340 by 200 px in order to maintain same ratio. #}

## Overview

Personalization is a digital marketing tactic where priority audiences are
intercepted through targeting. Those audiences can be account-, demographic-,
behavioral-, lifecycle-, or intent-based. Our goal is to provide visitors with
the best next action when browsing our websites as well as meet their specific
needs and progress them through the customer lifecycle.

For more information about how personalization works, the team, and our vision
for the future, read the [source deck][sourcedeck].

<nav id="patterns-nav" class="grid xs-two-columns sm-three-columns">

    {%- for pattern in collections['personalization-pattern'] -%}
    {%- set alt = pattern.data['pattern-info']['thumbnail-alt'] or pattern.data.title -%}
    <rh-tile compact bleed>
        <uxdot-example color-palette="dark" slot="image" no-border>
            <img alt="{{alt}}"
                width="340"
                height="200"
                src="{{pattern.data['pattern-info'].thumbnail}}">
        </uxdot-example>
        <h3 slot="headline"><a href="{{pattern.url}}" slot="headline">{{pattern.data.title}}</a></h3>
    </rh-tile>
    {%- endfor -%}
</nav>

## Getting started with personalization

Before jumping into personalization, have answers to these questions ready first.

-   What audience are you trying to target?
-   How large is the audience?
    -   Reference the [Go/No go estimator][gonogoestimator]
        to calculate and determine the viability of your project.
-   What do you want that audience to do?
-   What would success look like for this audience?
-   What type of experience(s) do you want to use?
-   Are any tests or personalizations already running on the page you
    are working on?

## Custom patterns

Custom patterns are not pre-established targeting opportunities. If you are interested in creating a custom targeting experience, please reach out to the [design system team][feedbackemail] or [via this form][feedbackform] with the details of your request and they will help you to establish the framework for the new design.

<uxdot-feedback>
  <h2>Non-personalization patterns</h2>
  
  Learn more about using non-personalization patterns in your designs by visiting the [Patterns page][patternspage].

</uxdot-feedback>

[sourcedeck]: https://docs.google.com/presentation/d/1rRLFRJLsbspINGu5r2zXBUITRkwzVVH8T3CveA1Z_bM/edit#slide=id.g24f5d8f664e_0_1100
[feedbackform]: https://docs.google.com/forms/d/e/1FAIpQLSft-6oHhI5d2wO-oEeBuT23wiYPpxOH2UKLH9ZkRswjby2CSg/viewform?usp=sf_link
[feedbackemail]: mailto:digital-design-system@redhat.com
[patternspage]: /patterns/
[gonogoestimator]: https://docs.google.com/document/d/1hutgW-tyti73C64XnO4_ftpO83R81KEquEV4AeGqvWA/edit?usp=sharing