## Overview

{{ tagName | getElementDescription }}

A video embed element is a graphical preview of a video overlayed with a play button. When clicked, the YouTube video will begin playing.

<uxdot-example width-adjustment="555px">
  <img src="./video-sample.svg" alt="Red Hat Logo on a gray background">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}

## Sample element

<div class="grid sm-two-columns">
  <rh-video-embed>
    <img slot="thumbnail" src="./video-sample-thumb.svg" alt="Red Hat Logo on a gray background"/>
    <template>
      <iframe title="Red Hat OpenShift AI overview" width="900" height="499" src="https://www.youtube.com/embed/Hc8emNr2igU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </template>
    <p slot="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </rh-video-embed>
</div>

## When to use 
  
  - When you need to embed a YouTube video on a page
  - When you want a faster YouTube embed
  - When you don’t want to load several megabytes of JavaScript for a YouTube embed

{% repoStatusChecklist repoStatus=repoStatus %}
