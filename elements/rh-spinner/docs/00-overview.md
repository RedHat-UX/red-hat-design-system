{% section %}
## Overview

A spinner indicates that an action is in progress. It appears as an animated circle over the section that is loading, and it may include a text label.

{% example palette="light",
           width=184,
           alt="Example of a spinner",
           src="spinner-sample.png" %}
{% endsection %}

{% section %}
## Sample component
<rh-spinner>Loading...</rh-spinner>
{% endsection %}

{% section %}
  ## When to use
  - When loading a section is expected to take fewer than ten seconds
  - When the structure or amount of content that's loading is unknown
{% endsection %}

{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-spinner>` demo in a new tab
  {% endcta %}
{% endsection %}

{% section %}
{% componentStatus -%}{% endcomponentStatus %}
{% endsection %}

{% include 'feedback.html' %}