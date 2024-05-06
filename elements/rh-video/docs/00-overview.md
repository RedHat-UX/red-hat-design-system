## Overview
{{ tagName | getElementDescription }}

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);width:auto",
          alt="Placeholder for example image",
          src="" %}

## Sample element
<rh-video>
  <img slot="thumbnail" src="https://fakeimg.pl/300x150/282828/eae0d0" alt="Image description"/>
  <template>
    <iframe title="Title of video" width="300" height="150" src="https://www.youtube.com/embed/Hc8emNr2igU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </template>
  <p slot="caption">Video caption here</p>
</rh-video>


## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-video>` demo in a new tab
  {% endcta %}

## When to use 
