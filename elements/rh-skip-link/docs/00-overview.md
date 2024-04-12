## Overview
{{ tagName | getElementDescription }}

{% example palette="light",
           class="centered",
           alt="Image of a skip link",
           src="skip-link.svg" %}

## Sample element

To show the skip link, click this paragraph and hit the "Tab" key on your keyboard to show the skip link.

<rh-skip-link>
  <a href="#demo">Skip to demo</a>
</rh-skip-link>

## Demo

View a live version of this component and see how it can be customized.

{% playground tagName=tagName %}{% endplayground %}
{% cta href="./demo/", target="_blank" %}View the demo{% endcta %}

## When to use
  - When there are many navigation items preceding main content
  - When there are blocks of content that are repeated on multiple pages

{% repoStatus type="Element" %}