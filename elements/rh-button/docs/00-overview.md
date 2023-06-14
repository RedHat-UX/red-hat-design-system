{% section %}
## Overview
{{ tagName | getElementDescription }}
{% endsection %}

{% section  %}
  ## Sample component
  <rh-button>Default</rh-button>
  <rh-button danger>Danger</rh-button>
  <rh-button>Primary</rh-button>
  <rh-button variant="link">Link</rh-button>
  <rh-button variant="secondary">Secondary</rh-button>
  <rh-button variant="secondary" danger>Secondary Danger</rh-button>
  <rh-button variant="tertiary">Tertiary</rh-button>
  <rh-button variant="close">Close</rh-button>
  <rh-button variant="play">Play</rh-button>
  <rh-button disabled>Disabled</rh-button>
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

{%- componentStatus -%}{% endcomponentStatus %}

