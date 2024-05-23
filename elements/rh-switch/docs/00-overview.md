## Overview

{{ tagName | getElementDescription }}

{% example palette="light",
            alt="example of switch that's on",
            src="../switch-overview.svg" %}

{% repoStatusList %}

## Sample element

<rh-switch id="sample-switch" aria-describedby="sample-message" accessible-label="Sample switch" checked>
  <div id="sample-message">
    <span data-state="on">Message when on</span>
    <span data-state="off" hidden>Message when off</span>
  </div>
</rh-switch>

## Demo

View a live version of this component and see how it can be customized.

{% playground tagName=tagName %}{% endplayground %}
{% cta href="./demo/", target="_blank" %}View the `<rh-switch>` demo in a new tab{% endcta %}

## When to use

- When users need to choose between two binary actions
- When users need to immediately activate or deactivate something
- When users need to toggle an item on or off


{% repoStatusChecklist %}
