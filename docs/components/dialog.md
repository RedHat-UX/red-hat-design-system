---
layout: layout-basic.njk
templateEngineOverride: njk,md
markdownTemplateEngine: njk,md
title: Dialog
tags:
  - component
includeComponent:
  - rh-dialog
---
{% section headline="Overview" -%}

Modals display information in a window or help a user focus on a task without navigating them away from the page.
A user cannot perform other actions until the modal is dismissed.

{%- endsection %}

{% section headline="Sample component" -%}

<div class="inline-flex centered margin-top--4 margin-bottom--4">
  <img src="{{ '/assets/dialog/dialog.svg' | url }}" alt="Dialog" style="">
</div>

{%- endsection %}

{% section headline="Component status" -%}
  <rhds-component-status component="Dialog"></rhds-component-status>
{%- endsection %}

{% section headline="Demo" -%}

{% demo headline="Standard modal dialog" %}
<rh-dialog slot="footer">
  <h2 slot="header">Modal dialog with a header</h2>
  <p>Lorem ipsum dolor sit amet, <a href="#foo">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.</p>
  <pfe-cta>
    <a href="#bar">Learn more</a>
  </pfe-cta>
  <pfe-cta slot="trigger">
    <button id="first-modal">Open modal dialog</button>
  </pfe-cta>
</rh-dialog>
{% enddemo %}

{% demo headline="Video modal dialog" %}
<rh-dialog id="video-modal" slot="footer" variant="video">
  <iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ" title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
  <pfe-cta slot="trigger">
    <button>Open video modal dialog</button>
  </pfe-cta>
</rh-dialog>
{% enddemo %}

{%- endsection %}

<hr class="margin-top--10 margin-bottom--10">

{% section headline="Style" -%}

Modals can be used in the light theme only.
There are two modal variants that feature different styles, depending on what is being presented to a user.
Modals include a content container or a video player and are placed in the center of a background overlay that covers the entire browser window.

{% example palette="light" %}
  <div class="inline-flex centered">
    <img src="{{ '/assets/dialog/dialog-style.svg' | url }}" alt="Dialog style" style="--inline-img-max-width: 872px;">
  </div>
{%- endexample %}

{% example palette="light" %}
  <div class="inline-flex centered">
    <img src="{{ '/assets/dialog/dialog-style-video.svg' | url }}" alt="Modal style for video" style="--inline-img-max-width: 872px;">
  </div>
{%- endexample %}

#### Content

A content modal can include different kinds of information and interactive elements.
A basic content modal should include at least a headline, content, a button or a call to action, and a close button.

{% example palette="light" %}
  <div class="inline-flex centered">
    <img src="{{ '/assets/dialog/dialog-style-content.svg' | url }}" alt="Modal style content" style="--inline-img-max-width: 872px;">
  </div>
{%- endexample %}

#### Video player

A video player modal showcases a video at a large size for easy viewing.
It includes a video, playback controls, and a close button.

{% example palette='light' %}
  <div class="inline-flex centered">
    <img src="{{ '/assets/dialog/dialog-style-video-player.svg' | url }}" alt="Modal style video player" style="--inline-img-max-width: 872px;">
  </div>
{%- endexample %}

#### Background overlay

The background overlay is a black solid with opacity that is positioned under a modal container.
It eliminates distractions and helps a user focus on the content in the modal.

{%- endsection %}

<hr class="margin-top--10 margin-bottom--10">

{% section headline="Usage" -%}

Modals can be used when critical information requires immediate user attention or for hiding extra content that cannot be displayed due to layout constraints.
Modals interrupt user workflows or hide secondary content by design, but should be used sparingly to limit user disruption.

#### Size

Container heights and widths will shift responsively depending on the screen size and the amount of content that is included.

<div class="margin-bottom--4">
  {% example palette='light' %}
    <div class="centered">
      <img src="{{ '/assets/dialog/dialog-usage-size.svg' | url }}" alt="Modal size" style="--inline-img-max-width: 872px;">
    </div>
  {%- endexample %}
</div>

<div class="multi-column--500-wide">
  {% example palette='light' %}
    <div class="centered inline-flex">
      <img src="{{ '/assets/dialog/dialog-style-size-mobile.svg' | url }}" alt="Modal size mobile" style="--inline-img-max-width: 360p;">
    </div>
  {%- endexample %}
</div>

<div class="margin-top--4">

#### Content vs. video

Modals can either organize content that a user can interact with or they can display a large video that a user can watch.
A content modal can include smaller videos if they are placed inline with other elements whereas a video player modal features one large video only.

</div>

{%- endsection %}

<hr class="margin-top--2 margin-bottom--10">

{% section headline="Best practices" -%}

Do not use other components inside of a content modal container unless absolutely necessary.

{% example palette='wrong' %}
  <div class="centered">
    <img src="{{ '/assets/dialog/dialog-best-practices-1.svg' | url }}" alt="Modal content issue" style="--inline-img-max-width: 872px;">
  </div>
{%- endexample %}

  <p>Do not display a video alone in a content modal, use a video player modal instead.</p>

  {% example palette='wrong' %}
    <div class="centered">
      <img src="{{ '/assets/dialog/dialog-best-practices-2.svg' | url }}" alt="Modal information issue" style="--inline-img-max-width: 872px;">
    </div>
  {%- endexample %}

  <p>Do not omit the close button from either modal variant, it is needed for accessibility.</p>

  {% example palette='wrong' %}
    <div class="centered">
      <img src="{{ '/assets/dialog/dialog-best-practices-3.svg' | url }}" alt="Modal close missing issue" style="--inline-img-max-width: 872px;">
    </div>
  {%- endexample %}

{%- endsection %}

{% section headline="Behavior" -%}

  <h4>Accessibility</h4>

  <p>Modals cover the entire page and browser window, so the ability to dismiss them quickly and easily with any input is required.</p>

  <table>
    <tr>
      <td><strong>Key</strong></td>
      <td><strong>Interaction</strong></td>
    </tr>
    <tr>
      <td>Space or Enter (if the modal trigger is focused)</td>
      <td>Triggers a modal.</td>
    </tr>
    <tr>
      <td>Space or Enter (if the modal is displayed)</td>
      <td>Triggers the focused interactive element or dismisses the modal if the close button is still focused.</td>
    </tr>
    <tr>
      <td>Tab (if the modal is open)</td>
      <td>Focuses the next interactive element in the tab order until the close button is focused again, it should not leave the content modal container.</td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>Dismisses a modal without any further actions taking place.</td>
    </tr>
  </table>

  <h4>Close button</h4>

  <p>Both modal variants require a close button which is the most direct way to dismiss a modal. A user needs to actively dismiss a modal, it should not close on its own.</p>

  <h4>Overlay</h4>

  <p>A user can click on or tap anywhere in the background overlay to dismiss a modal.</p>

  <h4>Tab order</h4>

  <p>The close button is focused when a modal appears and is therefore always the first interactive element in the tab order. When the Tab key is pressed repeatedly, the focus indicator moves off of the close button and any interactive elements below it are added to the tab order.</p>

  {% example palette='lightest' %}
    <div class="centered">
      <img src="{{ '/assets/dialog/dialog-behavior-tab-order.svg' | url }}" alt="Modal tab order" style="--inline-img-max-width: 872px;">
    </div>
  {%- endexample %}

{%- endsection %}

{% section headline="Responsive design" -%}

  <p>Both modal variants occupy eight columns on large screens and span the entire browser window on small screens.<p>

  <h4>Desktop</h4>

  <div class="centered margin-top--4 margin-bottom--4">
    <img src="{{ '/assets/dialog/dialog-responsive-desktop.svg' | url }}" alt="Modal desktop scale" style="">
  </div>

  <div class="centered margin-top--4 margin-bottom--4">
    <img src="{{ '/assets/dialog/dialog-responsive-desktop-video.svg' | url }}" alt="Modal desktop scale for video modal" style="">
  </div>

  <h4>Tablet</h4>

  <div class="margin-top--4 margin-bottom--4">
    <img src="{{ '/assets/dialog/dialog-responsive-tablet.svg' | url }}" alt="Modal tablet scale" style="--inline-img-max-width: 768px;">
  </div>

  <div class="margin-top--4 margin-bottom--4">
    <img src="{{ '/assets/dialog/dialog-responsive-tablet-video.svg' | url }}" alt="Modal tablet video scale" style="--inline-img-max-width: 768px;">
  </div>

  <h4>Mobile</h4>

  <div class="margin-top--4 margin-bottom--4">
    <img src="{{ '/assets/dialog/dialog-responsive-mobile.svg' | url }}" alt="Modal mobile scale" style="--inline-img-max-width: 764px;">
  </div>

{%- endsection %}

{% section headline="Interaction states" -%}

  <p>The interaction states in the content modal and the video player modal are slightly different.<p>

{%- endsection %}

<hr class="margin-top--10 margin-bottom--10">

{% section headline="Spacing" -%}

  <p>Both modal variants use <a href="https://www.patternfly.org/v4/guidelines/spacers">PatternFly 4 spacers</a> to define spacing values between elements.</p>

  <h4>Desktop</h4>

  {% example palette='light' %}
    <div class="centered">
      <img src="{{ '/assets/dialog/dialog-spacing-desktop.svg' | url }}" alt="spacing for modal" style="--inline-img-max-width: 872px;">
    </div>
  {%- endexample %}

  {% example palette='light' %}
    <div class="centered">
      <img src="{{ '/assets/dialog/dialog-spacing-desktop-video.svg' | url }}" alt="spacing for modal for video" style="--inline-img-max-width: 872px;">
    </div>
  {%- endexample %}

  <h4>Mobile</h4>

  {% example palette='light' %}
    <div class="centered">
      <img src="{{ '/assets/dialog/dialog-spacing-mobile.svg' | url }}" alt="spacing for modal on mobile" style="--inline-img-max-width: 784px;">
    </div>
  {%- endexample %}

{%- endsection %}

<div class="multi-column--min-300-wide">

  {% section headline="Feedback" -%}
    <p>To give feedback about anything on this page, <a href="mailto:digital-design-system@redhat.com">contact us</a>.</p>
  {%- endsection %}

  {% section headline="Foundations" -%}
    <p>To learn how to use our other components in your designs, visit the <a href="/components">Components</a> section.</p>
  {%- endsection %}

</div>
