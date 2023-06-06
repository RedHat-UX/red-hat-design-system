{% section %}
## Overview

{{ tagName | getElementDescription }}

{% example palette="light",
           alt="Two rows of tags; the top row is ‘Filled’ tags and the bottom row is ‘Unfilled’ tags; from left to right, both rows of tags include red, orange, green, cyan, blue, purple, and gray colors",
           src="tag-sample-element.png" %}
{% endsection %}

{% section %}

<hgroup>

## Sample element
### Filled

</hgroup>

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

{% endsection %}

{% section %}
  ## Demo
  View a live version of this element and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-tag>` demo in a new tab
  {% endcta %}
{% endsection %}

{% section %}
  ## When to use
  - When you want to highlight an element on a page to draw attention to it or make it more searchable
  - When you need to tag items of the same category
  - When you need to indicate status
{% endsection %}

{% section %}

{% repoStatus type="Element" %}

{% endsection %}
