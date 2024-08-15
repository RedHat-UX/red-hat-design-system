## Overview

{{ tagName | getElementDescription }}

Rh-announcement is a short banner that conveys an important message, such as promoting an event or advertising an organizational or product announcement.

<uxdot-example width-adjustment="555px">
  <img src="{{ './announcement-sample.svg' | url }}" alt="INSERT ALT TEXT">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}

## Sample element

<rh-announcement>
  <img src="https://placehold.co/120x40?text=logo" slot="image" alt="LOGO" width="120" height="40">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit.</p>
  <rh-cta slot="cta">
    <a href="#">Learn More</a>
  </rh-cta>
</rh-announcement>

## When to use 
  
  - When you want to announce an event or product launch

{% repoStatusChecklist repoStatus=repoStatus %}
