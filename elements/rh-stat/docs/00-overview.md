{% section %}
## Overview

{{ tagName | getElementDescription }}

{% example palette="light",
           alt="A vertically aligned stack of elements; includes a small red icon, large red data text showing 80% percent, and two lines of black body text",
           src="stat-sample-element.png" %}
{% endsection %}

{% section %}
## Sample element
  <rh-stat>
    <pf-icon slot="icon" set="fas" icon="tower-cell" size="lg" style="color: #ee0000"></pf-icon>
    <span slot="statistic">80%</span>
    <span>of Fortune Global 500 telecommunications companies</span>
  </rh-stat>
{% endsection %}

{% repoStatus %}

<hr style="margin-block:var(--rh-space-xl) var(--rh-space-5xl);">

{% section %}
  ## Demo
  View a live version of this element and see how it can be customized.

  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-stat>` demo in a new tab
  {% endcta %}
{% endsection %}

{% section %}
## When to use
- When you need to add visual emphasis to a statistic
- When you need to pair a data point with supporting text to add more context
- When you need to display several statistics together in a group
{% endsection %}

{% section %}
  {% componentStatus -%}{% endcomponentStatus %}
{% endsection %}
