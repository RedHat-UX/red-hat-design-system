---
title: Patterns
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
---

{# NOTE: all images in this view need to be 340 by 200 px in order to maintain same ratio. #}

## Overview
Patterns compose elements and tokens with content and validation rules to 
create uniform, accessible experiences.

<div class="multi-column--min-400-wide margin-top--10">
{%- for pattern in collections.pattern -%}
  {%- set slug = pattern.fileSlug -%}
  {%- set summary = pattern.description -%}
  {% if not summary %}
    {%- set summary = summaries[slug] -%}
  {% endif %}

  <div class="padding-stacked">
    <a href="{{ pattern.url }}">
      {% example palette="descriptive",
                 width=340,
                 wrapperClass=wrapperClass,
                 alt=pattern.data.title,
                 srcAbsolute="true",
                 src=('/assets/patterns/all-patterns-' + slug + '.png') %}
    </a>
    <a href="{{ pattern.url }}"><h3>{{ pattern.data.title }}</h3></a>
    <p>{{ summary }}</p>
  </div>
{% endfor %}
</div>

## Make a request
To request a new element or if updates need to be made to an existing element, 
[contact us](mailto:digital-design-system@redhat.com).

{% include 'feedback.html' %}
