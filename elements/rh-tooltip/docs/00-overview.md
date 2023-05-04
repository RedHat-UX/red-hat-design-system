{% section %}
## Overview
{{ tagName | getElementDescription }}

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);width:auto",
          alt=" A black tooltip on top of a gray disabled button",
          src="./tooltip-sample-element.png" %}
{% endsection %}
## Sample component
  <p>
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
  </p>


{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-tooltip>` demo in a new tab
  {% endcta %}
{% endsection %}

## When to use 
- When users need help making a decision
- When you need to provide more information for icons or icon buttons without labels
- When you need to define new or unfamiliar UI elements - that are not described directly in the user interface

{%- componentStatus -%}{% endcomponentStatus %}

{% include 'feedback.html' %}
