## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="230px">
  <img src="./tooltip-sample-element.png" alt="A black tooltip on top of a gray disabled button">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}

## Sample element

<rh-tooltip position="top">
  <rh-button>Top Tooltip</rh-button>
  <span slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>
</rh-tooltip>
<rh-tooltip position="left">
  <rh-button>Left Tooltip</rh-button>
  <span slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>
</rh-tooltip>
<rh-tooltip position="right">
  <rh-button>Right Tooltip</rh-button>
  <span slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>
</rh-tooltip>
<rh-tooltip position="bottom">
  <rh-button>Bottom Tooltip</rh-button>
  <span slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>
</rh-tooltip>

## When to use 
- When users need help making a decision
- When you need to provide more information for icons or icon buttons without labels
- When you need to define new or unfamiliar UI elements that are not described directly in the user interface

{% repoStatusChecklist repoStatus=repoStatus %}
