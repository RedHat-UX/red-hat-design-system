---
layout: layout-basic.njk
title: Patterns
summaries:
  announcement: Displays an important message across web properties
  disclosure: Toggles the visibility of only one content panel
  filter: Sorts a data set by predetermined sections and tags
  form: Collects specific information from a user through inputs
  link: Directs a user to another domain, page, or location
  link-with-icon: Adds additional context or decoration to an inline link
  promo: Advertises a specific promotional message or offer
  search-bar: Performs a search and displays relevant content
  skip-navigation: Moves a user down to content by keyboard input
  sticky-banner: Anchors an offer to the bottom edge of a page
  sticky-card: Anchors an offer to the right edge of a page
  video-thumbnail: Overlays a button on an image indicating video playback
---

{# NOTE: all images in this view need to be 340 by 200 px in order to maintain same ratio. #}

{% section %}
  ## Overview
  Patterns compose elements and tokens with content and validation rules to 
  create uniform, accessible experiences.
{% endsection %}

<div class="multi-column--min-400-wide margin-top--10">
{%- for doc in collections.pattern -%}
  {%- set slug = (doc|log).fileSlug -%}
  {%- set summary = doc.description -%}
  {% if not summary %}
    {%- set summary = summaries[slug|log] -%}
  {% endif %}
  <div class="padding-stacked">
    <a href="{{ doc.url }}">
      {% example palette="descriptive",
                 width=340,
                 alt=doc.data.title,
                 src=('/assets/patterns/' + slug + '.png') %}
    </a>
    <h3>{{ doc.title }}</h3>
    <p>{{ summary }}</p>
  </div>
{% endfor %}
</div>

{% section %}
  ## Make a request
  To request a new  or if updates need to be made to an existing , [contact 
  pattern, [contact [contact [contact [contact [contact [contact 
  us](mailto:digital-design-system@redhat.com).
{% endsection %}

{% include 'feedback.html' %}
