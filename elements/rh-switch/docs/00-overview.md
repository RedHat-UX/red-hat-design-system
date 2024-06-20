## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="222px">
  <img src="{{ './switch-overview.svg' | url }}" alt="example of switch that's on">
</uxdot-example>

{% repoStatusList %}

## Sample element

<rh-switch id="sample-switch" aria-describedby="sample-message" accessible-label="Sample switch" checked>
  <div id="sample-message">
    <span data-state="on">Message when on</span>
    <span data-state="off" hidden>Message when off</span>
  </div>
</rh-switch>

## Demo

View a live version of this element to see how it can be customized.

{% playground tagName=tagName %}{% endplayground %}

<rh-cta><a href="{{ './demo/' | url }}">Full screen demo</a></rh-cta>


## When to use

- When users need to choose between two binary actions
- When users need to immediately activate or deactivate something
- When users need to toggle an item on or off


{% repoStatusChecklist %}
