---
layout: layout-basic.njk
title: Elements
summaries:
  audio-player: Plays audio clips and includes other features
  jump-links: Moves users to specific content when a link is selected
  navigation-primary: Organizes content representing global web properties
  popover: Overlays an area of information without blocking users
  progress-steps: Guides users through a task with sequential steps
  breadcrumb: Keeps track of location as users move through pages
  footnote: Provides additional information or a source for content
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
  {%- set title = docs | getTitleFromDocs -%}
  {%- set comingSoon = tagName in comingSoonItems  -%}
  {% if comingSoon %}
    {%- set title = [title, "(coming soon)"] | join(" ") -%}
  {% endif %}
  {%- set summary = doc.docsPage.summary -%}
  {% if not summary %}
    {%- set summary = summaries[slug] -%}
  {% endif %}

  {%- set wrapperClass = '' -%}
  {% if title in ['Dialog'] %}
    {%- set wrapperClass = 'gray-bg' -%}
  {% endif %}

  <div class="padding-stacked">
    {% if not comingSoon %}<a href="{{ doc.href | url }}">{% endif %}
      {% example palette="descriptive",
                 width=340,
                 alt=linkTitle,
                 wrapperClass=wrapperClass,
                 srcAbsolute=true,
                 src=doc.screenshotPath %}
    {% if not comingSoon %}</a>{% endif %}
    <h3>{{ title }}</h3>
    <p>{{ summary }}</p>
  </div>
{% endfor %}
</div>

{% section %}
  ## Make a request
  To request a new element or if updates need to be made to an existing element, <a href="https://github.com/RedHat-UX/red-hat-design-system/issues/new/choose" target="_blank">create a GitHub issue</a>.
{% endsection %}

{% include 'feedback.html' %}
