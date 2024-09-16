---
title: Patterns
sidenavTitle: All Patterns
summaries:
  announcement: Displays important messages across web properties
  card: Arranges content and interactive elements in a layout
  disclosure: Toggles the visibility of a content panel
  filter: Sorts data by predetermined sections and tags
  form: Collects information from a user through inputs
  link: Directs users to other domains or pages
  link-with-icon: Adds additional context or decoration to a link
  search-bar: Performs a search and displays relevant content
  skip-navigation: Moves a user down to content by keyboard input
  sticky-banner: Anchors an offer to the bottom edge of a page
  sticky-card: Anchors an offer to the right edge of a page
  video-thumbnail: Overlays a button that indicates video playback
  logo-wall: Visual arrangement of logos representing various brands, companies, or organizations
order: 0
tags:
  - pattern
importElements: 
  - rh-tile
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css' | url }}">

<style>
  #patterns-nav {
    margin-block: var(--rh-space--2xl, 32px);
  }
</style>

{# NOTE: all images in this view need to be 340 by 200 px in order to maintain same ratio. #}

## Overview
Patterns compose elements and tokens with content and validation rules to 
create uniform, accessible experiences.

<nav id="patterns-nav" class="grid xs-two-columns sm-three-columns" aria-label="Patterns">
{%- for pattern in collections.pattern -%}

  {% if pattern.data.title !== 'Patterns' %}

  {%- set slug = pattern.fileSlug -%}
  {%- set summary = pattern.description -%}
  {% if not summary %}
    {%- set summary = summaries[slug] -%}
  {% endif %}

  <rh-tile>
    <uxdot-example slot="image">
      <img src="{{ '/assets/patterns/all-patterns-' + slug + '.png' | url }}" alt="{{ pattern.data.title }}">
    </uxdot-example>
    <a slot="headline" href="{{ pattern.url }}"><h3>{{ pattern.data.title }}</h3></a>
    <p slot="footer">{{ summary }}</p>
  </rh-tile>

  {% endif %}

{% endfor %}
</nav>

## Make a request
To request a new element or if updates need to be made to an existing element, 
[contact us](mailto:digital-design-system@redhat.com).

<uxdot-feedback>
  <h2>Patterns</h2>
  <p>To learn how to use our patterns in your designs, visit the <a href="{{ '/patterns/' | url }}">Patterns</a> section.</p>
</uxdot-feedback>
