## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="752px">
  <img src="{{ './tile-sample.png' | url }}" alt="Example of a default link tile and a selectable tile">
</uxdot-example>


## Sample element

<rh-tile>
  <img slot="image" src="https://fakeimg.pl/296x50" alt="296 X 50 placeholder">
  <div slot="title">Title</div>
  <h2 slot="headline"><a href="#top">Link</a></h2>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <div slot="footer">Suspendisse eu turpis elementum</div>
</rh-tile>

## Demo

View a live version of this element and see how it can be customized.

{% playground tagName=tagName %}{% endplayground %}

<rh-cta><a href="{{ './demo/' | url }}">Full screen demo</a></rh-cta>


## When to use

- When you need to group content in a linked container
- When you need an alternative to a group of cards with the same calls to action
- When you need to group content for a radio button or checkbox in a form

{% repoStatus type="Element" %}

