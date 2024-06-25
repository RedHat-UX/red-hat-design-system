## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="872px">
  <img src="{{ './subnav-sample.png' | url }}" alt="Image of a subnavigation; a horizontal row of links placed on a light gray bar">
</uxdot-example>


{% repoStatusList %}

## Sample element

<rh-subnav>
  <a href="#" active>Lorem ipsum</a>
  <a href="#">Dolor sit amet</a>
  <a href="#">Consectetur</a>
  <a href="#">Adipiscing</a>
  <a href="#">Elit nullam</a>
</rh-subnav>

## Demo

{% playground tagName=tagName %}{% endplayground %}

<rh-cta><a href="{{ './demo/' | url }}">Full screen demo</a></rh-cta>


## When to use

  - When you need to connect a group of related pages together
  - When you need to offer users a more granular navigation
  - When you want to allow users to browse high-level and low-level pages in the 
    same experience

{% repoStatusChecklist %}
