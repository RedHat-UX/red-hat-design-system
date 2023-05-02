{% section %}
  ## Overview
  The Primary navigation is a container of menus and utilities, it allows 
  visitors to orient themselves and move through a website. It is persistent on 
  every page to ensure a consistent user experience across websites.
{% endsection %}

{% section %}
  ## Sample component
  ![Primary navigation component sample]({{ './primary-nav-example.png' | url 
  }}){style="--inline-img-max-width:1000px;"}
{% endsection %}

{%- componentStatus -%}{% endcomponentStatus %}

{#
{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-card>` demo in a new tab
  {% endcta %}
{% endsection %}
#}

{% section %}
  ## Demos
  View a live version of this component to see how it can be customized.

  {% cta href="https://codepen.io/heyMP/pen/gOoYXov" %}View this component in action{% endcta %}
{% endsection %}

<hr style="margin-block:var(--rh-space-5xl);">

{% section %}
  ## Anatomy

  The primary navigation is divided into **three zones** where content can be 
  placed. Each zone may include custom content and elements in certain zones 
  will collapse or become hidden completely as breakpoints get smaller. 
  **It is required to use all three zones.**

  - **Zone 1** - Website logo
  - **Zone 2** - Menus
  - **Zone 3** - Utilities

  {% alert title="Helpful tip" %}
  The website logo in Zone 1 should direct visitors to a home page when selected.
  {% endalert %}

  ![Primary navigation - anatomy]({{ './primary-nav-anatomy.png' | url 
  }}){style="--inline-img-max-width:1000px;"}

  - ### Website logo
    A branded logo corresponding to the website in which the primary navigation 
    is used. It will direct a visitor to the website home page when selected.
  - ### Menus
    Text that triggers an expandable tray when selected. The content within is 
    specific to one website and does not appear in the same format on other 
    websites.
  - ### Utilities
    Actions or tools that display content within an expandable tray when 
    triggered or function as links. They can be unique to one website or global 
    across many websites.
  {.multi-column--min-400-wide style="padding:0;list-style-type:none;"}
{% endsection %}

{% set related = 'rh-navigation-secondary, rh-subnav, skip-navigation' %}
{% include 'feedback.html' %}