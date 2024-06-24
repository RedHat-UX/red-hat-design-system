## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="794px">
  <img src="{{ './pagination-sample.png' | url }}" alt="Image of two paginations; one is full size showing double truncation and a page input field and the other one is compact size showing only a page field input.">
</uxdot-example>


## Sample element

<rh-pagination>
  <ol>
    <li><a href="#1">1</a></li>
    <li><a href="#2">2</a></li>
    <li><a href="#3">3</a></li>
    <li><a href="#4">4</a></li>
    <li><a href="#5">5</a></li>
  </ol>
</rh-pagination>


## Demo

View a live version of this element to see how it can be customized.

{% playground tagName=tagName %}{% endplayground %}

<rh-cta><a href="{{ './demo/' | url }}">Full screen demo</a></rh-cta>


## When to use
  - When you need to divide large quantities of data or content into chunks
  - When you need to enable users to navigate to through pages or locate a specific page number
  - When you need to improve the loading performance of a system

{% repoStatusChecklist %}
