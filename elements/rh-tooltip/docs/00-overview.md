{% section %}
## Overview
{{ tagName | getElementDescription }}

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);width:auto",
          alt=" A black tooltip on top of a gray disabled button",
          src="./tooltip-sample-element.png" %}
{% endsection %}

{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-tooltip>` demo in a new tab
  {% endcta %}
{% endsection %}

## When to use 
- When users need help making a decision
- When you need to provide more information for icons or icon buttons without labels
- When you need to define new or unfamiliar UI elements - that are not described directly in the user interface

{%- componentStatus -%}{% endcomponentStatus %}

{% include 'feedback.html' %}
