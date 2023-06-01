{% section %}
## Overview
{{ tagName | getElementDescription }}

{% example palette="light",
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
{% repoStatus type="Element" %}
{% endsection %}
