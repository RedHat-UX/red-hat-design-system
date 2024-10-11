---
title: Video thumbnail
layout: layouts/pages/has-toc.njk
order: 130
tags:
  - pattern
---

<link rel="stylesheet" data-helmer href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
<link rel="stylesheet" data-helmer href="/styles/samp.css">

## Overview

A Video thumbnail is a graphical preview of a video overlayed with a play
button. When it’s selected, a video player modal will be displayed so a user can
watch the video at a larger size.

## Sample pattern

<uxdot-example width-adjustment="555px">
  <img src="./video-thumbnail.svg"
      alt="Video thumbnail"
      width="555"
      height="312">
</uxdot-example>

## Style

A video thumbnail is a combination of a graphic with a slightly transparent play
button on top. A video thumbnail can also include an optional caption underneath
that explains what the video is.

<uxdot-example width-adjustment="624px">
  <img src="./video-thumbnail-style.svg"
      alt="Video thumbnail specs"
      width="624"
      height="379">
</uxdot-example>

## Theme

<uxdot-example color-palette="light" width-adjustment="870px">
  <img src="./video-thumbnail-theme-light.svg"
      alt="Video thumbnail light theme"
      width="1110"
      height="692">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="870px">
  <img src="./video-thumbnail-theme-dark.svg"
      alt="Video thumbnail dark theme"
      width="1110"
      height="692">
</uxdot-example>

### Button

A video thumbnail can include either a light or a dark play button, depending on
the image underneath. If an image is lighter, use a dark play button for
accessibility and vice versa.

<div class="grid sm-two-columns">
  <uxdot-example width-adjustment="172px">
    <img src="./video-button-light.svg"
         alt="Play button on light theme"
         width="172"
         height="64">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="172px">
    <img src="./video-button-dark.svg"
         alt="Play button on dark theme"
         width="172"
         height="64">
  </uxdot-example>
</div>

## Usage

A video thumbnail can be used to indicate that a video can be played and using a
caption underneath isn’t required.

### Layouts

A video thumbnail can be used in most layouts that have enough space to
accommodate a small image with a play button on top. A video thumbnail used in a
card is a good example of a minimum size.

<uxdot-example width-adjustment="487px">
  <img src="./video-thumbnail-layout-specs.svg"
       alt="Specs of video button thumbnail"
       width="487"
       height="502">
</uxdot-example>

### Caption

An optional descriptor caption can be placed underneath the video thumbnail, it
can be left- or center-aligned, depending on how the video is oriented.

### Character counts

A caption should be limited to 150 characters.

## Best practices

Don't reposition the play button.

<uxdot-example width-adjustment="555px" danger>
  <img src="./video-thumbnail-best-practices-1.png"
      alt="Don't reposition play button"
      width="555"
      height="312">
</uxdot-example>

Don't change the aspect ratio of a video thumbnail.

<uxdot-example width-adjustment="555px" danger>
  <img src="./video-thumbnail-best-practices-2.png"
      alt="Don't change aspect ratio"
      width="555"
      height="416">
</uxdot-example>

## Behavior

### Modal

When a video thumbnail is smaller than six columns, selecting the play button
triggers a [Video player modal](../modal) where a larger version of the video
will play on top of a background overlay.

### Inline

When a video thumbnail is larger than six columns, the video will play inline on
the page.

## Responsive design

A video thumbnail changes size, but it should maintain its aspect ratio across
all screen sizes. The caption also maintains the same text size, but changes
alignment to match the video thumbnail.

### Desktop, centered

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="./video-thumbnail-responsive-desktop.svg"
       alt="Video thumbnail centered"
       width="1000"
       height="310">
</uxdot-example>

When centered, the video thumbnail and caption should span six grid columns

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="./video-thumbnail-responsive-desktop-sides.svg"
      alt="Video thumbnail sides"
      width="1000"
      height="262">
</uxdot-example>

When aligned on the left or right edge of the grid, the video thumbnail and
caption should span five grid columns

### Mobile

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="./video-thumbnail-responsive-mobile.svg"
      alt="Video thumbnail on mobile"
      width="720"
      height="1280">
</uxdot-example>

## Interaction states

The only interactive element in a video thumbnail is the play button. For more
information about modal interaction states, see [Video player modal](../modal).

### Default

<uxdot-example width-adjustment="555px">
  <img src="./video-thumbnail-interaction-default.svg"
       alt="Video thumbnail default state"
       width="555"
       height="312">
</uxdot-example>

### Focus

<uxdot-example width-adjustment="555px">
  <img src="./video-thumbnail-interaction-focus.svg"
       alt="Video thumbnail focus state"
       width="559"
       height="316">
</uxdot-example>

### Hover

<uxdot-example width-adjustment="555px">
  <img src="./video-thumbnail-interaction-hover.svg"
       alt="Video thumbnail hover state"
       width="555"
       height="312">
</uxdot-example>

### Active

<uxdot-example width-adjustment="555px">
  <img src="./video-thumbnail-interaction-active.svg"
       alt="Video thumbnail active state"
       width="559"
       height="316">
</uxdot-example>

<div class="grid">
  <figure>
    <uxdot-example width-adjustment="116px">
      <img src="./video-button-hover-state-dark.svg"
           alt="Video thumbnail hover state light"
           width="116"
           height="64">
    </uxdot-example>
    <figcaption>The dark play button background becomes 25% darker on hover</figcaption>
  </figure>
  <figure>
    <uxdot-example color-palette="darkest" width-adjustment="116px">
      <img src="./video-button-hover-state-light.svg"
           alt="Video thumbnail hover state dark"
           width="116"
           height="64">
    </uxdot-example>
    <figcaption>The light play button background becomes 25% lighter on hover</figcaption>
  </figure>
</div>

## Spacing

A video thumbnail uses [space tokens](/tokens/space/) to define spacing
values between elements.

<uxdot-example width-adjustment="1000px">
  <img src="./video-thumbnail-spacing.svg"
       alt="Video thumbnail spacing specs"
       width="1110"
       height="692">
</uxdot-example>

<rh-table>
  {% spacerTokensTable headingLevel="4",
                       tokens="--rh-space-xl" %}
  {% endspacerTokensTable %}
</rh-table>

{% renderFile './docs/_includes/partials/component/feedback.11ty.cjs' %}
