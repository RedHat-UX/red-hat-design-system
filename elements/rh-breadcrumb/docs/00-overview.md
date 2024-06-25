<link rel="stylesheet" type="text/css" href="/assets/packages/@rhds/elements/elements/rh-breadcrumb/rh-breadcrumb-lightdom.css">

## Overview

{{ tagName | getElementDescription }}

{% example palette="light", alt="Three placeholder breadcrumb links and a current page breadcrumb", src="breadcrumb-sample-element.svg" %}

{% repoStatusList %}

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
{% cta href="./demo/", target="_blank" %}View the `<rh-breadcrumb>` demo in a new tab{% endcta %}

## When to use

- When you want to help orient a user and and show where they are in the page hierarchy
- When you want to provide a secondary method for navigating to parent pages of the current page

{% repoStatusChecklist %}