{% section %}
## Overview
{{ tagName | getElementDescription }}
{% example palette="light",
          width=143,
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Two badges; from left to right, one badge has a light gray background with a dark gray counter number and the other badge has a blue background with a white counter number",
          src="./badge-sample-element.png" %}
{% endsection %}

{% section %}
## Demos
View a live version of this component and see how it can be customized.
{% playground tagName=tagName %}{% endplayground %}
{% cta href="./demo/", target="_blank" %}
  View the `<rh-badge>` demo in a new tab
{% endcta %}
{% endsection %}

{% section %}
## When to use
- When you need to reflect counts like number of objects, events, or unread items
{% endsection %}

{% section %}
## Repo status
{%- componentStatus -%}{% endcomponentStatus %}
{% endsection %}

{% set related = 'rh-avatar, rh-button, rh-tag' %}
{% include 'feedback.html' %}
