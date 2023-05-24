{% section %}
## Overview
  {{ tagName | getElementDescription }}
{% endsection %}

{% section %}
## Sample component
  {% example palette="light",
             width=360,
             alt="Example of a card element",
             src="card.svg" %}
{% endsection %}

{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-card>` demo in a new tab
  {% endcta %}
{% endsection %}

{% section %}
  {% repoStatus type="Element" %}
{% endsection %}
