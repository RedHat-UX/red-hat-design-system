## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="752px">
  <img src="{{ './overview.svg' | url }}" alt="Four health index components. One is green with letter grade A, one is yellow with letter grade C, one is orange with letter grade D, and one is red with letter grade F.">
</uxdot-example>


{% repoStatusList repoStatus=repoStatus %}

## Sample element

<rh-health-index grade="A">A</rh-health-index>


## When to use

- When you need to use severity to communicate the health of something
- When you need to communicate how secure or vulnerable something is
- When you need to measure how current or out of date something is



{% repoStatusChecklist repoStatus=repoStatus %}