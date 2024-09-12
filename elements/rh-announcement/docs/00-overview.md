## Overview

{{ tagName | getElementDescription }}

Announcement is a short banner that conveys an important message, such as 
promoting an event or advertising an organizational or product announcement.

<uxdot-example width-adjustment="555px">
  <img src="./announcement-sample.svg" alt="sample screenshot of rh-announcement element">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}

## Sample element

<rh-announcement>
  <svg slot="image"
       width="80"
       height="48"
       role="img"
       aria-label="Sample image">
    <rect fill="var(--rh-color-border-interactive)"
      fill-opacity="0.1"
      stroke="var(--rh-color-border-interactive)"
      stroke-width="2px"
      width="100%"
      height="100%"
      stroke-dasharray="4 4">
    </rect>
    <text x="17"
          y="30"
          fill="var(--rh-color-blue-50)"
          style="font-family: var(--rh-font-family-code);
                 font-size: var(--rh-font-size-body-text-md);">Image</text>
  </svg>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit.</p>
  <rh-cta slot="cta">
    <a href="#">Learn More</a>
  </rh-cta>
</rh-announcement>

## When to use

  - When you want to announce an event or product launch

{% repoStatusChecklist repoStatus=repoStatus %}
