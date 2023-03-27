Dialogs can be used in the light theme only. There are two dialog variants that 
feature different styles, depending on what is being presented to a user. 
Dialogs include a content container or a video player and are placed in the 
center of a background overlay that covers the entire browser window.

{% example palette="light",
           class="inline-flex centered",
           width=872,
           alt="Dialog style",
           src="../dialog-style.svg" %}

{% example palette="light",
           class="inline-flex centered",
           width=872,
           alt="Dialog style for video",
           src="../dialog-style-video.svg" %}

## Content

A content dialog can include different kinds of information and interactive 
elements. A basic content dialog should include at least a headline, content, a 
button or a call to action, and a close button.

{% example palette="light",
           class="inline-flex centered",
           width=872,
           alt="Dialog style content",
           src="../dialog-style-content.svg" %}

## Video player

A video player dialog showcases a video at a large size for easy viewing. It 
includes a video, playback controls, and a close button.

{% example palette="light",
           class="inline-flex centered",
           width=872,
           alt="Dialog style video player",
           src="../dialog-style-video-player.svg" %}

## Background overlay

The background overlay is a black solid with opacity that is positioned under a 
dialog container. It eliminates distractions and helps a user focus on the 
content in the dialog.

<hr style="margin-block:var(--rh-space-5xl);">

{% section %}
## Responsive Design

Both dialog variants occupy eight columns on large screens and span the entire 
browser window on small screens.

### Desktop

<img alt="Dialog desktop scale"
     src="{{ '../dialog-responsive-desktop.svg' | url }}"
     class="centered margin-top--4 margin-bottom--4" />

<img alt="Dialog desktop scale for video dialog"
     src="{{ '../dialog-responsive-desktop-video.svg' | url }}"
     class="centered margin-top--4 margin-bottom--4" />

### Tablet

<img alt="Dialog tablet scale"
     src="{{ '../dialog-responsive-tablet.svg' | url }}"
     class="margin-top--4 margin-bottom--4"
     style="--inline-img-max-width: 768px;">

<img alt="Dialog tablet video scale"
     src="{{ '../dialog-responsive-tablet-video.svg' | url }}"
     class="margin-top--4 margin-bottom--4"
     style="--inline-img-max-width: 768px;"/>

### Mobile

<img alt="Dialog mobile scale"
     src="{{ '../dialog-responsive-mobile.svg' | url }}"
     class="margin-top--4 margin-bottom--4"
     style="--inline-img-max-width: 764px;"/>

{% endsection %}

{% section %}
## Spacing

Both dialog variants use [PatternFly 4 
spacers](https://www.patternfly.org/v4/guidelines/spacers) to define spacing 
values between elements.

### Desktop

{% example palette="light",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="spacing for dialog",
           src="../dialog-spacing-desktop.svg" %}

{% example palette="light",
           style="--inline-img-max-width:872px;margin-inline:auto;",
           alt="spacing for dialog for video",
           src="../dialog-spacing-desktop-video.svg" %}

### Mobile

{% example palette="light",
           style="--inline-img-max-width:784px;margin-inline:auto;",
           alt="spacing for modal on mobile",
           src="../dialog-spacing-mobile.svg" %}

{% endsection %}

