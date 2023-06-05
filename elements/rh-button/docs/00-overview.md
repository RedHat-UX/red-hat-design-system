{% section %}
## Overview
{{ tagName | getElementDescription }}

{% example palette="light",
          alt="Image of Danger, Primary, Secondary, Tertiary, and Link buttons in the first row and Play and Close buttons in the second row",
          src="./button-sample.png" %}
{% endsection %}

{% section  %}
  ## Sample component
  <rh-button>Primary</rh-button>
{% endsection %}

{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-button>` demo in a new tab
  {% endcta %}
{% endsection %}

{% section %}
## When to use
- When you need to allow users to interact with pages in a variety of ways
- When you need to communicate actions users can take
- When you need to draw attention to the highest priority action

{% endsection %}

{% repoStatus type="Element" %}

