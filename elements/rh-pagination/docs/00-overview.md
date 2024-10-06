## Overview

{{ tagName | getElementDescription }}

Pagination allows users to navigate between pages of related content.

<uxdot-example width-adjustment="736px">
  <img src="./pagination-sample.svg"
        alt="Image of four paginations; one is full size showing double truncation and a page input field. One is compact size showing only a page field input. The two below it are the open variants in the same sizes."
        width="736"
        height="384">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}

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

## When to use
  - When you need to divide large quantities of data or content into chunks
  - When you need to enable users to navigate to through pages or locate a specific page number
  - When you need to improve the loading performance of a system

{% repoStatusChecklist repoStatus=repoStatus %}
