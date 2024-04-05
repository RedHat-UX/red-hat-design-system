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
    <iframe title="Title of video" width="300" height="150" frameborder="0" allowfullscreen src="https://www.youtube.com/embed/9gYLKxJ9NbY"></iframe>
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


{% repoStatus type="Element" %}

