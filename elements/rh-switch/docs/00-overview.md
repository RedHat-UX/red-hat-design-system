## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="78px">
  <img src="./switch-overview.svg"
        alt="example of switch that's on"
        width="78"
        height="24">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}

## Sample element

<rh-switch id="sample-switch" aria-describedby="sample-message" accessible-label="Sample switch" checked>
  <div id="sample-message">
    <span data-state="on">Message when on</span>
    <span data-state="off" hidden>Message when off</span>
  </div>
</rh-switch>


## When to use

- When users need to choose between two binary actions
- When users need to immediately activate or deactivate something
- When users need to toggle an item on or off


{% repoStatusChecklist repoStatus=repoStatus %}
