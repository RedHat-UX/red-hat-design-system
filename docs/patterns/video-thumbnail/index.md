---
title: Video thumbnail
tags:
  - pattern
---

## Overview

A Video thumbnail is a graphical preview of a video overlayed with a play button. When it’s selected, a video player modal will be displayed so a user can watch the video at a larger size.

## Sample component
{% example palette="none",
           alt="Video thumbnail",
           src="./video-thumbnail.svg" %}{% endexample %}

{% repoStatus %}

## Style

A video thumbnail is a combination of a graphic with a slightly transparent play button on top. A video thumbnail can also include an optional caption underneath that explains what the video is.

{% example palette="light",
           alt="Video thumbnail specs",
           src="./video-thumbnail-style.svg" %}{% endexample %}

## Theme
{% example palette="light",
           alt="Video thumbnail light theme",
           src="./video-thumbnail-theme-light.svg" %}{% endexample %}
           
{% example palette="darkest",
           alt="Video thumbnail dark theme",
           src="./video-thumbnail-theme-dark.svg" %}{% endexample %}

### Button

A video thumbnail can include either a light or a dark play button, depending on the image underneath. If an image is lighter, use a dark play button for accessibility and vice versa.

<div class="multi-column--min-300-wide"><div>
    {% example palette="light",
              alt="Play button on light theme",
              src="./video-button-light.svg" %}{% endexample %}
  </div><div>
    {% example palette="darkest",
              alt="Play button on dark theme",
              src="./video-button-dark.svg" %}{% endexample %}
</div></div>

## Usage

A video thumbnail can be used to indicate that a video can be played and using a caption underneath isn’t required.

### Layouts

A video thumbnail can be used in most layouts that have enough space to accommodate a small image with a play button on top. A video thumbnail used in a card is a good example of a minimum size.

{% example palette="light",
           alt="Specs of video button thumbnail",
           src="./video-thumbnail-layout-specs.svg" %}{% endexample %}

### Caption

An optional descriptor caption can be placed underneath the video thumbnail, it can be left- or center-aligned, depending on how the video is oriented.

## Best practices

Don't reposition the play button.

{% example palette="wrong",
           alt="Don't reposition play button",
           src="./video-thumbnail-best-practices-1.png" %}{% endexample %}

Don't change the aspect ratio of a video thumbnail.

{% example palette="wrong",
           alt="Don't change aspect ratio",
           src="./video-thumbnail-best-practices-2.png" %}{% endexample %}

## Behavior

### Modal

When a video thumbnail is smaller than six columns, selecting the play button triggers a [Video player modal](../modal) where a larger version of the video will play on top of a background overlay.

### Inline

When a video thumbnail is larger than six columns, the video will play inline on the page.

## Responsive design

A video thumbnail changes size, but it should maintain its aspect ratio across all screen sizes. The caption also maintains the same text size, but changes alignment to match the video thumbnail.

### Desktop, centered

{% example palette="none",
           alt="Video thumbnail centered",
           src="./video-thumbnail-responsive-desktop.svg" %}{% endexample %}

When centered, the video thumbnail and caption should span six grid columns

{% example palette="none",
           alt="Video thumbnail sides",
           src="./video-thumbnail-responsive-desktop-sides.svg" %}{% endexample %}

When aligned on the left or right edge of the grid, the video thumbnail and caption should span five grid columns

### Mobile

{% example palette="none",
           alt="Video thumbnail on mobile",
           src="./video-thumbnail-responsive-mobile.svg" %}{% endexample %}

## Interaction states

The only interactive element in a video thumbnail is the play button. For more information about modal interaction states, see [Video player modal](../modal).

### Default
{% example palette="light",
           alt="Video thumbnail default state",
           src="./video-thumbnail-interaction-default.svg" %}{% endexample %}

### Focus
{% example palette="light",
           alt="Video thumbnail focus state",
           src="./video-thumbnail-interaction-focus.svg" %}{% endexample %}

### Hover
{% example palette="light",
           alt="Video thumbnail hover state",
           src="./video-thumbnail-interaction-hover.svg" %}{% endexample %}

### Active
{% example palette="light",
           alt="Video thumbnail active state",
           src="./video-thumbnail-interaction-active.svg" %}{% endexample %}

<div class="multi-column--min-300-wide"><div>
    {% example palette="light",
              alt="Video thumbnail hover state light",
              src="./video-button-hover-state-dark.svg" %}{% endexample %}

    The dark play button background becomes 25% darker on hover
    {.example-notes}
</div><div>
    {% example palette="darkest",
              alt="Video thumbnail hover state dark",
              src="./video-button-hover-state-light.svg" %}{% endexample %}

    The light play button background becomes 25% lighter on hover
    {.example-notes}
</div></div>

## Spacing

A video thumbnail uses [space tokens](/tokens/space/) to define spacing 
values between elements.

{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-xl" %}
{% endspacerTokensTable %}

{% example palette="light",
           alt="Video thumbnail spacing specs",
           src="./video-thumbnail-spacing.svg" %}{% endexample %}

{% include 'feedback.html' %}