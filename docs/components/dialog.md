---
layout: layout-basic.njk
title: Dialog
tags:
  - component
includeComponent:
  - rh-dialog
---
{% section %}
## Overview

Dialogs display information in a window or help a user focus on a task without 
navigating them away from the page. A user cannot perform other actions until 
the dialog is dismissed.

{% endsection %}

{% section %}
## Sample component
<div class="inline-flex centered margin-top--4 margin-bottom--4">
  <img src="{{ '/assets/dialog/dialog.svg' | url }}" alt="Dialog"/>
</div>
{% endsection %}


{% componentStatus %}{%- endcomponentStatus %}

{% section %}
## Demo

{% demo headline="Standard modal dialog" %}
<rh-dialog slot="footer" trigger="standard-trigger">
  <h2 slot="header">Modal dialog with a header</h2>
  <p>Lorem ipsum dolor sit amet, <a href="#foo">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.</p>
  <rh-cta>
    <a href="#bar">Learn more</a>
  </rh-cta>
</rh-dialog>
<rh-cta id="standard-trigger">
  <button id="first-dialog">Open modal dialog</button>
</rh-cta>
{% enddemo %}

{% demo headline="Video modal dialog" %}
<rh-dialog id="video-modal" type="video" trigger="video-trigger">
  <iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?enablejsapi=1" title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</rh-dialog>
<rh-cta id="video-trigger" slot="footer">
  <button>Open video modal dialog</button>
</rh-cta>
{% enddemo %}

{% endsection %}

<hr class="margin-top--10 margin-bottom--10">

{% section %}
## Style

Dialogs can be used in the light theme only. There are two dialog variants that feature different styles, depending on what is being presented to a user. Dialogs include a content container or a video player and are placed in the center of a background overlay that covers the entire browser window.

{% example palette="light",
           class="inline-flex centered",
           style="--inline-img-max-width:872px;",
           alt="Dialog style",
           src="/assets/dialog/dialog-style.svg" %}

{% example palette="light",
           class="inline-flex centered",
           style="--inline-img-max-width:872px;",
           alt="Dialog style for video",
           src="/assets/dialog/dialog-style-video.svg" %}

### Content

A content dialog can include different kinds of information and interactive 
elements. A basic content dialog should include at least a headline, content, a 
button or a call to action, and a close button.

{% example palette="light",
           class="inline-flex centered",
           style="--inline-img-max-width:872px;",
           alt="Dialog style content",
           src="/assets/dialog/dialog-style-content.svg" %}

### Video player

A video player dialog showcases a video at a large size for easy viewing. It 
includes a video, playback controls, and a close button.

{% example palette="light",
           class="inline-flex centered",
           style="--inline-img-max-width:872px;",
           alt="Dialog style video player",
           src="/assets/dialog/dialog-style-video-player.svg" %}

### Background overlay

The background overlay is a black solid with opacity that is positioned under a 
dialog container. It eliminates distractions and helps a user focus on the 
content in the dialog.

{%- endsection %}

<hr class="margin-top--10 margin-bottom--10">

{% section %}
## Usage

Dialogs can be used when critical information requires immediate user attention 
or for hiding extra content that cannot be displayed due to layout constraints. 
Dialogs interrupt user workflows or hide secondary content by design, but should 
be used sparingly to limit user disruption.

### Size

Container heights and widths will shift responsively depending on the screen 
size and the amount of content that is included.

{% example palette="light",
           class="margin-bottom--4",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="Dialog size",
           src="/assets/dialog/dialog-style-video-player.svg" %}

{% example palette="light",
           class="inline-flex multi-column--500-wide",
           style="--inline-img-max-width:360p;margin-inline:auto;",
           alt="Dialog size mobile",
           src="/assets/dialog/dialog-style-size-mobile.svg" %}

### Content vs. video {style="margin-block-start:var(--rh-space-2xl);"}

Dialogs can either organize content that a user can interact with or they can 
display a large video that a user can watch. A content dialog can include 
smaller videos if they are placed inline with other elements whereas a video 
player dialog features one large video only.

{% endsection %}

<hr style="margin-block:var(--rh-space-lg) var(--rh-space-5xl);">

{% section %}
## Best Practices

Do not use other components inside of a content dialog container unless 
absolutely necessary.

{% example palette="wrong",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="Dialog content issue",
           src="/assets/dialog/dialog-best-practices-1.svg" %}

Do not display a video alone in a content dialog, use a video player dialog 
instead.

{% example palette="wrong",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="Dialog information issue",
           src="/assets/dialog/dialog-best-practices-2.svg" %}

Do not omit the close button from either dialog variant, it is needed for 
accessibility.

{% example palette="wrong",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="Dialog close missing issue",
           src="/assets/dialog/dialog-best-practices-3.svg" %}

{% endsection %}

{% section %}
## Behavior

### Accessibility

When shown, modal dialogs cover the entire page and browser window, so the 
ability to dismiss them quickly and easily with any input is required.

| Key            | State              | Interaction                                                                                                                              |
| -------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Space or Enter | Trigger is focused | Shows the modal dialog.                                                                                                                  |
| Space or Enter | Dialog is shown    | Triggers the focused interactive element or dismisses the dialog if the close button is focused.                                         |
| Tab            | Dialog is shown    | Focuses the next interactive element in the tab order until the close button is focused again. Focus may not leave the dialog container. |
| Esc            | Dialog is shown    | Dismisses a dialog without any further actions taking place.                                                                             |

### Close button

Both dialog variants require a close button which is the most direct way to 
dismiss a dialog. A user needs to actively dismiss a dialog, it should not close 
on its own.

### Overlay

A user can click on or tap anywhere in the background overlay to dismiss a 
dialog.

### Tab order

The close button is focused when a dialog appears and is therefore always the 
first interactive element in the tab order. When the Tab key is pressed 
repeatedly, the focus indicator moves off of the close button and any 
interactive elements below it are added to the tab order.

{% example palette="lightest",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="Dialog tab order",
           src="/assets/dialog/dialog-behavior-tab-order.svg" %}

{% endsection %}

{% section %}
## Responsive Design

Both dialog variants occupy eight columns on large screens and span the entire 
browser window on small screens.

### Desktop

<img alt="Dialog desktop scale"
     src="{{ '/assets/dialog/dialog-responsive-desktop.svg' | url }}"
     class="centered margin-top--4 margin-bottom--4" />

<img alt="Dialog desktop scale for video dialog"
     src="{{ '/assets/dialog/dialog-responsive-desktop-video.svg' | url }}"
     class="centered margin-top--4 margin-bottom--4" />

### Tablet

<img alt="Dialog tablet scale"
     src="{{ '/assets/dialog/dialog-responsive-tablet.svg' | url }}"
     class="margin-top--4 margin-bottom--4"
     style="--inline-img-max-width: 768px;">

<img alt="Dialog tablet video scale"
     src="{{ '/assets/dialog/dialog-responsive-tablet-video.svg' | url }}"
     class="margin-top--4 margin-bottom--4"
     style="--inline-img-max-width: 768px;"/>

### Mobile

<img alt="Dialog mobile scale"
     src="{{ '/assets/dialog/dialog-responsive-mobile.svg' | url }}"
     class="margin-top--4 margin-bottom--4"
     style="--inline-img-max-width: 764px;"/>

{% endsection %}

{% section %}
## Interaction states

The interaction states in the content dialog and the video player dialog are 
slightly different.

{% endsection %}

<hr style="margin-block:var(--rh-space-5xl);">

{% section %}
## Spacing

Both dialog variants use [PatternFly 4 
spacers](https://www.patternfly.org/v4/guidelines/spacers) to define spacing 
values between elements.

### Desktop

{% example palette="light",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="spacing for dialog",
           src="/assets/dialog/dialog-spacing-desktop.svg" %}

{% example palette="light",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="spacing for dialog for video",
           src="/assets/dialog/dialog-spacing-desktop-video.svg" %}

### Mobile

{% example palette="light",
           style="--inline-img-max-width:784px;margin-inline:auto;",
           alt="spacing for modal on mobile",
           src="/assets/dialog/dialog-spacing-mobile.svg" %}

{%- endsection %}

<div class="multi-column--min-300-wide">

{% include 'feedback.html' %}
