{% section %}
## Overview

{{ tagName | getElementDescription }}

{% example palette="light",
           width=794,
           alt="Image of two paginations; one is full size showing double truncation and a page input field and the other one is compact size showing only a page field input.",
           src="../pagination-sample.png" %}

{% endsection %}

{% section %}
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

{% endsection %}

{% section %}

## Demo

View a live version of this element to see how it can be customized.

{% playground tagName=tagName %}{% endplayground %}

{% cta href="./demo/", target="_blank" %}
View the demo
{% endcta %}

{% endsection %}

{% section %}
## When to use

* When you need to divide large quantities of data or content into chunks
* When you need to enable users to navigate to through pages or locate a specific page number
* When you need to improve the loading performance of a system

{% endsection %}

{% section %}
## Repo status

Learn more about our various code repos by visiting this [page](https://ux.redhat.com/about/how-we-build/).

  | Element      | RHDS     | WebRH | WebDMS | Adobe Target |
  | ------------ | :------: | :---: | :----: | :----------: |
  | Compact size |  &check; |       |        |              |
  | Full size    |  &check; |       |        |              |

{% endsection %}