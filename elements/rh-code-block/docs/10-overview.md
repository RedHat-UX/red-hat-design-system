## Overview

{{ tagName | getElementDescription }}

{% example palette="light",
           width=360,
           alt="Image of a code block with black code text within a light gray container",
           src="./code-block-sample.png" %}

## Sample element

<rh-code-block>
  <script type="text/html"><!DOCTYPE html>
<title>Title</title>
<style>body {width: 500px;}</style>
<script type="application/javascript">
  function $init() {return true;}
<</script><script type="text/html">/script>
<body>
  <p checked class="title" id="title">Title</p>
  <!-- here goes the rest of the page -->
</body></script>
</rh-code-block>

## Demos
  View a live version of this element to see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-code-block>` demo in a new tab
  {% endcta %}


## When to use

- When you need to highlight a block of code while maintaining the formatting

{% repoStatus type="Element" %}
