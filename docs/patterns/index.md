---
title: Patterns
sidenavTitle: All Patterns
summaries:
  accordion: Automatically expand accordions when a URL has hash fragments
  announcement: Displays important messages across web properties
  call-to-action: Use theming to create desaturated CTAs
  card: Arranges content and interactive elements in a layout
  disclosure: Toggles the visibility of a content panel
  filter: Sorts data by predetermined sections and tags
  form: Collects information from a user through inputs
  link: Directs users to other domains or pages
  link-with-icon: Adds additional context or decoration to a link
  logo-wall: Visual arrangement of logos representing various brands, companies, or organizations
  search-bar: Performs a search and displays relevant content
  skip-navigation: Moves a user down to content by keyboard input
  sticky-banner: Anchors an offer to the bottom edge of a page
  sticky-card: Anchors an offer to the right edge of a page
  tabs: Programatically activate a tab panel or item inside a tab panel
  tag: Tags can be used with other elements to label or categorize content
  tile: Style Tiles to differentiate them from other page elements
  video-thumbnail: Overlays a button that indicates video playback
order: 0
tags:
  - pattern
---

<link data-helmet
      rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">


<style data-helmet>
  #patterns-nav {
    margin-block: var(--rh-space--2xl, 32px);
  }
    rh-tile h3 {
    margin: 0 !important;
  }
  rh-tile p {
    margin-block: 0 0 !important;
  }
</style>

<script data-helmet type="module">
  import '@rhds/elements/rh-tile/rh-tile.js';
</script>

{# NOTE: all images in this view need to be 340 by 200 px in order to maintain same ratio. #}

## Overview
Patterns compose elements and tokens with content and validation rules to 
create uniform, accessible experiences.

<nav id="patterns-nav"
     class="grid xs-two-columns sm-three-columns"
     aria-label="Patterns">
  {%- for pattern in collections.pattern -%}
  {%- if pattern.page.inputPath !== page.inputPath -%}
  {%- set slug = pattern.fileSlug -%}

  {%- set title = pattern.data.heading -%}
  {% if title == 'Patterns' %}
    {%- set title = pattern.data.title -%}
  {% endif %}

  {%- set summary = pattern.description -%}
  {%- set title = pattern.data.heading or pattern.data.title -%}
  {%- if not summary -%}
    {%- set summary = summaries[slug] -%}
  {%- endif -%}
  <rh-tile>
    <uxdot-example slot="image">
      <img alt="{{ title }}"
           src="/assets/patterns/all-patterns-{{ slug }}.avif"
>
    </uxdot-example>
    <h3 slot="headline"><a href="{{ pattern.url }}">{{ title }}</a></h3>
    <p>{{ summary }}</p>
  </rh-tile>
  {%- endif -%}
{%- endfor -%}
</nav>

## Make a request
To request a new element or if updates need to be made to an existing element, 
[contact us](mailto:digital-design-system@redhat.com).

<uxdot-feedback>
  <h2>Patterns</h2>
  <p>To learn how to use our patterns in your designs, visit the <a href="/patterns/">Patterns</a> section.</p>
</uxdot-feedback>
