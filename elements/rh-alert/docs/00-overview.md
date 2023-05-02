{% section %}
## Overview
{{ tagName | getElementDescription }}
{% endsection %}

{% section %}
## Sample component
{% example palette="light",
           width=538,
           alt="Two examples of the alert element",
           src="alert-sample.svg" %}
{% endsection %}

{% section %}
  ## When to use
  - When additional information needs to be emphasized 
  - When a user needs to be notified after performing an action
  - When the severity of a message needs to be indicated
{% endsection %}

{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-alert>` demo in a new tab
  {% endcta %}
{% endsection %}

{% section %}
{% componentStatus -%}{% endcomponentStatus %}
{% endsection %}

{% include 'feedback.html' %}