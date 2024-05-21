<link rel="stylesheet" type="text/css" href="/assets/packages/@rhds/elements/elements/rh-breadcrumb/rh-breadcrumb-lightdom.css">

## Overview

{{ tagName | getElementDescription }}

## Sample element

<rh-breadcrumb>
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Red Hat OpenShift on AWS</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">Introduction to ROSA</a></li>
    <li><a href="#" aria-current="page">Chapter 1. Understanding ROSA</a></li>
  </ol>
</rh-breadcrumb>

## Demo

{% playground tagName=tagName %}{% endplayground %}
{% cta href="./demo/", target="_blank" %}View the demo{% endcta %}

## When to use

- When a user needs to know where they are within a site
