<link rel="stylesheet" type="text/css" href="/assets/packages/@rhds/elements/elements/rh-breadcrumb/rh-breadcrumb-lightdom.css">

## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="296px">
  <img src="breadcrumb-sample-element.svg"
        alt="Three placeholder breadcrumb links and a current page breadcrumb"
        width="296"
        height="21">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}

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

## When to use

- When you want to help orient a user and and show where they are in the page hierarchy
- When you want to provide a secondary method for navigating to parent pages of the current page

{% repoStatusChecklist repoStatus=repoStatus %}