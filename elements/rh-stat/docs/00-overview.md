## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="346px">
  <img src="{{ './stat-sample-element.png' | url }}" alt="A vertically aligned stack of elements; includes a small red icon, large red data text showing 80% percent, and two lines of black body text">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}


## Sample element

<rh-stat>
  <pf-icon slot="icon" set="fas" icon="tower-cell" size="lg" style="color: var(--rh-color-text-brand-on-light, #ee0000);"></pf-icon>
  <span slot="statistic">80%</span>
  <span>of Fortune Global 500 telecommunications companies</span>
</rh-stat>

## When to use

  - When you need to add visual emphasis to a statistic
  - When you need to pair a data point with supporting text to add more context
  - When you need to display several statistics together in a group

{% repoStatusChecklist %}

