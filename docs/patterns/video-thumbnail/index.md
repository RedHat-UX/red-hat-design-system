---
title: Video thumbnail
order: 120
hasToc: true
tags:
  - pattern
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">
<link rel="stylesheet" href="{{ '/styles/samp.css' | url }}">

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--rh-space-2xl, 32px);
  }

  @container container (min-width: 567px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

## Overview

A Video thumbnail is a graphical preview of a video overlayed with a play button. When it’s selected, a video player modal will be displayed so a user can watch the video at a larger size.

## Sample pattern

<uxdot-example width-adjustment="555px">
  <img src="{{ './video-thumbnail.svg' | url }}" alt="Video thumbnail">
</uxdot-example>

{% repoStatus type="Pattern" %}


## Style

A video thumbnail is a combination of a graphic with a slightly transparent play button on top. A video thumbnail can also include an optional caption underneath that explains what the video is.

<uxdot-example width-adjustment="624px">
  <img src="{{ './video-thumbnail-style.svg' | url }}" alt="Video thumbnail specs">
</uxdot-example>


## Theme

<uxdot-example color-palette="light" width-adjustment="870px">
  <img src="{{ './video-thumbnail-theme-light.svg' | url }}" alt="Video thumbnail light theme">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="870px">
  <img src="{{ './video-thumbnail-theme-dark.svg' | url }}" alt="Video thumbnail dark theme">
</uxdot-example>


### Button

A video thumbnail can include either a light or a dark play button, depending on the image underneath. If an image is lighter, use a dark play button for accessibility and vice versa.

<div class="grid">
  <uxdot-example width-adjustment="172px">
    <img src="{{ './video-button-light.svg' | url }}" alt="Play button on light theme">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="172px">
    <img src="{{ './video-button-dark.svg' | url }}" alt="Play button on dark theme">
  </uxdot-example>
</div>


## Usage

A video thumbnail can be used to indicate that a video can be played and using a caption underneath isn’t required.


### Layouts

A video thumbnail can be used in most layouts that have enough space to accommodate a small image with a play button on top. A video thumbnail used in a card is a good example of a minimum size.

<uxdot-example width-adjustment="487px">
  <img src="{{ './video-thumbnail-layout-specs.svg' | url }}" alt="Specs of video button thumbnail">
</uxdot-example>


### Caption

An optional descriptor caption can be placed underneath the video thumbnail, it can be left- or center-aligned, depending on how the video is oriented.


### Character counts

A caption should be limited to 150 characters.


## Best practices

Don't reposition the play button.

<uxdot-example width-adjustment="555px" danger>
  <img src="{{ './video-thumbnail-best-practices-1.png' | url }}" alt="Don't reposition play button">
</uxdot-example>

Don't change the aspect ratio of a video thumbnail.

<uxdot-example width-adjustment="555px" danger>
  <img src="{{ './video-thumbnail-best-practices-2.png' | url }}" alt="Don't change aspect ratio">
</uxdot-example>


## Behavior

### Modal

When a video thumbnail is smaller than six columns, selecting the play button triggers a [Video player modal](../modal) where a larger version of the video will play on top of a background overlay.


### Inline

When a video thumbnail is larger than six columns, the video will play inline on the page.


## Responsive design

A video thumbnail changes size, but it should maintain its aspect ratio across all screen sizes. The caption also maintains the same text size, but changes alignment to match the video thumbnail.


### Desktop, centered

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ './video-thumbnail-responsive-desktop.svg' | url }}" alt="Video thumbnail centered">
</uxdot-example>

When centered, the video thumbnail and caption should span six grid columns

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ './video-thumbnail-responsive-desktop-sides.svg' | url }}" alt="Video thumbnail sides">
</uxdot-example>

When aligned on the left or right edge of the grid, the video thumbnail and caption should span five grid columns

### Mobile

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="{{ './video-thumbnail-responsive-mobile.svg' | url }}" alt="Video thumbnail on mobile">
</uxdot-example>


## Interaction states

The only interactive element in a video thumbnail is the play button. For more information about modal interaction states, see [Video player modal](../modal).


### Default

<uxdot-example width-adjustment="555px">
  <img src="{{ './video-thumbnail-interaction-default.svg' | url }}" alt="Video thumbnail default state">
</uxdot-example>


### Focus

<uxdot-example width-adjustment="555px">
  <img src="{{ './video-thumbnail-interaction-focus.svg' | url }}" alt="Video thumbnail focus state">
</uxdot-example>


### Hover

<uxdot-example width-adjustment="555px">
  <img src="{{ './video-thumbnail-interaction-hover.svg' | url }}" alt="Video thumbnail hover state">
</uxdot-example>


### Active

<uxdot-example width-adjustment="555px">
  <img src="{{ './video-thumbnail-interaction-active.svg' | url }}" alt="Video thumbnail active state">
</uxdot-example>

<div class="grid">
  <figure>
    <uxdot-example width-adjustment="116px">
      <img src="{{ './video-button-hover-state-dark.svg' | url }}" alt="Video thumbnail hover state light">
    </uxdot-example>
    <figcaption>The dark play button background becomes 25% darker on hover</figcaption>
  </figure>
  <figure>
    <uxdot-example color-palette="darkest" width-adjustment="116px">
      <img src="{{ './video-button-hover-state-light.svg' | url }}" alt="Video thumbnail hover state dark">
    </uxdot-example>
    <figcaption>The light play button background becomes 25% lighter on hover</figcaption>
  </figure>
</div>


## Spacing

A video thumbnail uses [space tokens](/tokens/space/) to define spacing 
values between elements.

<uxdot-example width-adjustment="870px">
  <img src="{{ './video-thumbnail-spacing.svg' | url }}" alt="Video thumbnail spacing specs">
</uxdot-example>

<rh-table>
  {% spacerTokensTable 
    headline="",
    caption='',
    headingLevel="4",
    tokens="--rh-space-xl" %}
  {% endspacerTokensTable %}
</rh-table>


{% include 'partials/component/feedback.html' %}
