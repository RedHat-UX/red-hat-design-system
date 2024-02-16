## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="404px">
  <img src="{{ './tag-sample-element.png' | url }}" alt="Two rows of tags; the top row is ‘Filled’ tags and the bottom row is ‘Unfilled’ tags; from left to right, both rows of tags include red, orange, green, cyan, blue, purple, and gray colors">
</uxdot-example>

## Sample element

### Filled

<rh-tag color="red">Red<span class="visually-hidden">Hat</span></rh-tag>
<rh-tag color="orange">Orange</rh-tag>
<rh-tag color="green">Green</rh-tag>
<rh-tag color="cyan">Cyan</rh-tag>
<rh-tag color="blue">Blue</rh-tag>
<rh-tag color="purple">Purple</rh-tag>
<rh-tag>Gray</rh-tag>


### Unfilled

<rh-tag variant="outline" color="red">Red<span 
class="visually-hidden">Hat</span></rh-tag>
<rh-tag variant="outline" color="orange">Orange</rh-tag>
<rh-tag variant="outline" color="green">Green</rh-tag>
<rh-tag variant="outline" color="cyan">Cyan</rh-tag>
<rh-tag variant="outline" color="blue">Blue</rh-tag>
<rh-tag variant="outline" color="purple">Purple</rh-tag>
<rh-tag variant="outline">Gray</rh-tag>


## Demo
{% playground tagName=tagName %}{% endplayground %}

<rh-cta><a href="{{ './demo/' | url }}">Full screen demo</a></rh-cta>


## When to use
  - When you want to highlight an element on a page to draw attention to it or make it more searchable
  - When you need to tag items of the same category
  - When you need to indicate status


{% repoStatus type="Element" %}
