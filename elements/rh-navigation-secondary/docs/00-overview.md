{% section %}
## Overview
{{ tagName | getElementDescription }}
{% endsection %}

{% section %}
  ## Sample component

  ![Example of an navigation secondary component][secondary-nav-example] {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}
{% endsection %}


{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-navigation-secondary>` demo in a new tab
  {% endcta %}
{% endsection %}

{% section %}
  ## Anatomy
  ### Introduction to zones

  The secondary navigation is divided into **three zones** where content can be placed. Each zone may include custom content and elements in certain zones will collapse or become hidden completely as breakpoints get smaller. **It is not required to use all three zones.**

  - Zone 1 - Includes **primary elements** that are representative of the experience or series of pages
  - Zone 2 - Includes **navigation elements** like menus and links
  - Zone 3 - Includes **secondary elements** that provide additional actions

  {% alert title="Helpful tip" %}
  Content in Zone 1 should be linked and direct visitors to the main page of the experience when selected.
  {% endalert %}

  ![Secondary navigation - introduction to zones][zones-intro] {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}

  ### Zones on small breakpoints
  On small breakpoints, navigation elements in Zone 2 will collapse into an accordion within a menu. Content in Zone 3 will either be positioned below the accordion or be hidden completely.

  ![Secondary navigation - introduction to zones (small breakpoints)][zones-small] {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 576px;"}

{% endsection %}

{% include 'feedback.html' %}



[secondary-nav-example]: {{ './secondary-nav-example.png' | url }}
[zones-intro]: {{ './zones-intro.png' | url }}
[zones-small]: {{ './zones-small-breakpoints.png' | url }}