## Overview

{{ tagName | getElementDescription }}


## Sample element
<rh-tile>
    <img slot="image" src="//fakeimg.pl/296x50" alt="296 X 50 placeholder image">
    <div slot="title">Title</div>
    <h2 slot="headline"><a href="#top">Link</a></h2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <div slot="footer">Suspendisse eu turpis elementum</div>
</rh-tile>



## Demo
  View a live version of this element and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-tile>` demo in a new tab
  {% endcta %}


## When to use
  - When you want to highlight an element on a page to draw attention to it or make it more searchable
  - When you need to tag items of the same category
  - When you need to indicate status



{% repoStatus type="Element" %}

