## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="872px">
  <img src="{{ './code-block-sample.png' | url }}" alt="Image of a code block with black code text within a light gray container">
</uxdot-example>

{% repoStatusList %}


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


## Demo

View a live version of this element to see how it can be customized.

{% playground tagName=tagName %}{% endplayground %}

<rh-cta><a href="{{ './demo/' | url }}">Full screen demo</a></rh-cta>


## When to use

- When you need to highlight a block of code while maintaining the formatting

{% repoStatusChecklist %}