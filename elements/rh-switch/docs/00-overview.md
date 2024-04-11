## Overview

{{ tagName | getElementDescription }}


## Sample element

<rh-switch id="sample" checked show-check-icon></rh-switch>
<label for="sample">
  <span data-state="on">Message when on</span>
  <span data-state="off" hidden>Message when off</span>
</label>

## Demo

{% playground tagName=tagName %}{% endplayground %}
{% cta href="./demo/", target="_blank" %}View the `<rh-switch>` demo{% endcta %}

## When to use

- When you need to provide a more explicit, visible representation on a setting

{% repoStatus type="Element" %}
