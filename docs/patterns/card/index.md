---
title: Card
layout: layout-basic.njk
tags:
  - pattern
---

<script type="module">
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
</script>

<style>
.element-docs .card-patterns copy-permalink.h3 {
  margin-block-start: 0;
}
</style>

## Overview

A card formats content in a small, contained space. It can be used to display a 
preview of information or provide secondary content in relation to the content 
it's near. Several cards can be used together to group related information.

{% alert state="info" %}
  These Card patterns document different design-approved uses of the `<rh-card>`
  element. [Consult the `<rh-card>` element documentation][element] for more
  information on how to use the card element.
{% endalert %}

## Patterns

<section class="multi-column--min-400-wide card-patterns">

<div>

  ### Alternative color scheme

  <style>
    rh-card.alt {
      --rh-color-surface-light: #f0f0f0;
      --rh-color-surface-lighter: #f0f0f0;
      --rh-color-surface-lightest: #f0f0f0;
      --rh-color-surface-dark: #3c3f42;
      --rh-color-surface-darker: #3c3f42;
      --rh-color-surface-darkest: #3c3f42;
    }
  </style>

<rh-card class="alt">

Card's color scheme can be modified using the `--rh-color-surface-*`
Tokens. However, before modifying design tokens, first determine if one of
card's [existing color palettes](/elements/card/code/#attributes) should be used instead.

{#
Read more about color palettes and themes in the
[getting started](/get-started/color/) section.
#}

  <rh-cta variant="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>

</div><div>

  ### Image title bar

  <style>
    rh-card.image::part(header) {
      padding: 0;
      margin: 0;
    }
  </style>

  <rh-card class="image">
    <img src="./kitten-900x300.jpeg" slot="header">
    <p>Use to add an image to the basic style above the text.
       Secondary and Default calls to action may be used.</p>
    <rh-cta slot="footer" variant="secondary">
      <a href="#">Footer</a>
    </rh-cta>
  </rh-card>

</div><div>

  ### List
  Use to display a short amount of content using various list styles. 
  Secondary and Default calls to action may be used.

</div><div>

  ### Data
  Use to display quick facts or short data points under a label. A Secondary 
  call to action may be used or not.

</div><div>

  ### Logo
  Use to display a customer logo in a variety of arrangements. A call to 
  action is required, otherwise use a logo wall.

</div><div>

  ### Bar

  <style>
    rh-card.bar::part(header) {
      margin: 0;
      text-transform: uppercase;
      padding: var(--rh-space-lg, 16px) var(--rh-space-xl, 24px);
      background-color: var(--_header-bg, var(--rh-color-surface-light, #e0e0e0));
      font-weight: var(--rh-font-weight-heading-regular, 300);
      font-size: var(--rh-font-size-body-text-md, 1rem);
      flex-direction: row;
      gap: var(--rh-space-lg);
    }
  </style>

<rh-card class="bar">
  <svg slot="header" width="var(--rh-size-icon-02)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M16 0C7.178 0 0 7.178 0 16s7.178 16 16 16 16-7.178 16-16S24.822 0 16 0Zm1.25 23a1.25 1.25 0 1 1-2.5 0v-8a1.25 1.25 0 1 1 2.5 0v8ZM16 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path>
  </svg>
  <rh-icon hidden slot="header" set="ui" icon="information"></rh-icon>
  <h2 slot="header">Card title</h2>

Use to add a small icon and a label group to the header section. A larger 
icon or a logo may be used.

Alternative title bar styles can be achieved by selecting [card's `header` CSS
Shadow Part](/elements/card/code/#parts).

  <rh-cta variant="primary" slot="footer">
    <a href="#">Footer</a>
  </rh-cta>
</rh-card>

</div><div>

  ### Icon
  Use to add an icon to the basic style above the text. Secondary and Default 
  calls to action may be used.

</div><div>

  ### Asset
  Use to display that an asset can be downloaded. An icon and label group or 
  text may be used to describe the asset.

</div><div>

  ### Quote
  Use to display a short quote with attribution text. Logos, images, and a 
  Secondary call to action may be used or not.

</div><div>

  ### Avatars
  Use to highlight a group of people who engage in an event. A label should be 
  included, but including text is optional.

</div><div>

  ### Video
  Use to trigger a video that will play in a [Modal dialog](/elements/dialog).
  Different layout configurations may be used.

</div><div>

  ### Pricing
  Use to outline the pricing and benefits of something. Elements may be 
  removed or rearranged depending on content needs.

</div><div>

  ### Logo slider
  Use to display more content about a company when expanded on hover or tap. A 
  title and text should be included.

</div><div>

  ### Name slider
  Use to display more content about a person when the tray expands. A title 
  and text should be included.

</div>
</section>

## Custom Theming

To customize a card the design tokens must be altered.  These design tokens are different depending on the context for the card (light or dark theme).

Examples include:

- [`--rh-color-surface-lightest`](/tokens/color/#rh-color-surface-lightest)
- [`--rh-color-border-subtle-on-light`](/tokens/border/#rh-color-border-subtle-on-light)
- [`--rh-color-text-primary-on-light`](/tokens/font/#rh-color-text-primary-on-light)

For more information, please see the [card css custom properties](/elements/card/code/#css-custom-properties).

<section class="multi-column--min-400-wide card-patterns">

<div>

  ### Custom Light Theme

  <style>
    rh-card.custom-light-theme {
      --rh-color-border-subtle-on-light: #EF6461;
      --rh-color-surface-lightest: #feeded;
      --rh-color-text-primary-on-light: #30292F;
    }
  </style>

  <rh-card color-palette="light" class="custom-light-theme">
    <h2 slot="header">Card title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
      libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
      elit. Donec id elit non mi porta gravida at eget metus.</p>
    <rh-cta slot="footer"><a href="#">Footer</a></rh-cta>
  </rh-card>

</div><div>

  ### Custom Dark Theme

  <style>
    rh-card.custom-dark-theme {
      --rh-color-border-subtle-on-dark: #5e40be;
      --rh-color-surface-darkest: #261a4c;
      --rh-color-text-primary-on-dark: #e8e4f5;
    }
  </style>

  <rh-card color-palette="dark" class="custom-dark-theme">
    <h2 slot="header">Card title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
      libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
      elit. Donec id elit non mi porta gravida at eget metus.</p>
    <rh-cta slot="footer"><a href="#">Footer</a></rh-cta>
  </rh-card>

</div>
</section>

{% include 'feedback.html' %}


[element]: /elements/card

