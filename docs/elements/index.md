---
layout: layout-basic.njk
title: Elements
summaries:
  audio-player: Plays audio clips and includes other features
  jump-links: Moves users to specific content when a link is selected
  navigation-primary: Organizes content representing global web properties
  popover: Overlays an area of information without blocking users
  progress-steps: Guides users through a task with sequential steps
---

{# NOTE: all images in this view need to be 340 by 200 px in order to maintain same ratio. #}

{% section %}
  ## Overview
  Red Hat design system's elements are custom HTML elements - interactive 
  building blocks of our design system. Each element was created to meet a 
  specific UI and accessibility need. Elements should be used harmoniously 
  together in the same space to create more intuitive user interfaces and 
  experiences.
{% endsection %}

<div class="multi-column--min-400-wide margin-top--10">
{%- for tagName, docs in collections.elementDocs | groupby('tagName') -%}
  {%- set doc = docs[0] -%}
  {%- set slug = doc.slug -%}
  {%- set linkTitle = doc.alias or (slug | deslugify) -%}
  {%- set summary = doc.docsPage.summary -%}
  {% if not summary %}
    {%- set summary = summaries[slug] -%}
  {% endif %}

  {%- set wrapperClass = '' -%}
  {% if linkTitle in ['Dialog'] %}
    {%- set wrapperClass = 'gray-bg' -%}
  {% endif %}

  <div class="padding-stacked">
    <a href="{{ doc.href | url }}">
      {% example palette="descriptive",
                 width=340,
                 alt=linkTitle,
                 wrapperClass=wrapperClass,
                 srcAbsolute=true,
                 src=doc.screenshotPath %}
    </a>

    <h3>{{ docs | getTitleFromDocs }}</h3>
    <p>{{ summary }}</p>
  </div>
{% endfor %}
</div>

{% section %}
  ## Make a request
  To request a new element or if updates need to be made to an existing element, 
  [contact us](mailto:digital-design-system@redhat.com).
{% endsection %}

{% include 'feedback.html' %}
