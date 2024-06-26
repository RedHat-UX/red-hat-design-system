---
title: Card
layout: layouts/pages/basic.njk
hasToc: true
order: 20
tags:
  - pattern
importElements:
  - rh-card
  - rh-cta
  - rh-surface
  - rh-avatar
---

<script type="module">
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">
<link rel="stylesheet" href="{{ '/styles/samp.css' | url }}">

<style>
  rh-card {
    display: block;
    max-width: 360px;
  }

  rh-surface {
    width: fit-content;
  }

  rh-card.alt,
  rh-surface[color-palette^="light"] rh-card.alt {
    --rh-card-background-color: #f0f0f0;
  }

  rh-surface[color-palette^="dark"] rh-card.alt {
    --rh-card-background-color: #3c3f42;
  }

  rh-card.bar::part(header) {
    background-color: var(--_background-color, #f0f0f0);
    text-transform: uppercase;
    font-weight: var(--rh-font-weight-heading-regular, 300);
    font-size: var(--rh-font-size-body-text-md, 1rem);
  }

  rh-card.bar::part(header) {
    background-color: var(--_header-background-color);
    text-transform: uppercase;
    font-weight: var(--rh-font-weight-heading-regular, 300);
    font-size: var(--rh-font-size-body-text-md, 1rem);
  }

  rh-card.bar::part(header) {
    background-color: var(--_header-background-color);
    text-transform: uppercase;
    font-weight: var(--rh-font-weight-heading-regular, 300);
    font-size: var(--rh-font-size-body-text-md, 1rem);
  }

  rh-card.full::part(header) {
    padding-inline: 0;
    padding-block: 0;
  }

  rh-card.custom-light-theme {
    --rh-color-border-subtle-on-light: #EF6461;
    --rh-color-surface-lightest: #feeded;
    --rh-color-text-primary-on-light: #30292F;
  }

  rh-card.custom-dark-theme {
    --rh-color-border-subtle-on-dark: #5e40be;
    --rh-color-surface-darkest: #261a4c;
    --rh-color-text-primary-on-dark: #e8e4f5;
  }
</style>


## Overview

A card formats content in a small, contained space. It can be used to display a 
preview of information or provide secondary content in relation to the content 
it's near. Several cards can be used together to group related information.

<rh-alert state="info">

  These Card patterns document different design-approved uses of the `<rh-card>`
  element. [Consult the `<rh-card>` element documentation][element] for more
  information on how to use the card element.

</rh-alert>

## Asset
Use to display that an asset can be downloaded. An icon and label group or 
text may be used to describe the asset.

{% include './patterns/asset.html' %}

## Image

Use to add an image to the basic style above the text.
Secondary and Default calls to action may be used.

{% include './patterns/image.html' %}

## List
Use to display a short amount of content using various list styles. 
Secondary and Default calls to action may be used.


{% include './patterns/list.html' %}

## Data
Use to display quick facts or short data points under a label. A Secondary 
call to action may be used or not.

## Logo
Use to display a customer logo in a variety of arrangements. A call to 
action is required, otherwise use a logo wall.

## Bar

Use to add a small icon and a label group to the header section. A larger icon
or a logo may be used.

Alternative title bar styles can be achieved by selecting [card's `header` CSS
Shadow Part](/elements/card/code/#parts).

{% include './patterns/bar.html' %}


## Icon

Use to add an icon to the basic style above the text. Secondary and Default 
calls to action may be used.


#### Light Theme

<rh-surface color-palette="light">
  <rh-card>
    <h2 slot="header">Card title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
      libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
      elit. Donec id elit non mi porta gravida at eget metus.</p>
    <rh-cta slot="footer"><a href="#">Footer</a></rh-cta>
  </rh-card>
</rh-surface>

#### Dark Theme

<rh-surface color-palette="dark">
  <rh-card>
    <h2 slot="header">Card title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
      libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
      elit. Donec id elit non mi porta gravida at eget metus.</p>
    <rh-cta slot="footer"><a href="#">Footer</a></rh-cta>
  </rh-card>
</rh-surface>

## Quote

Use to display a short quote with attribution text. Logos, images, and a 
Secondary call to action may be used or not.

## Avatars

Use to highlight a group of people who engage in an event. A label
should be included, but including text is optional.

Use the [`<rh-avatar>`](/elements/avatar/) element to element to present
the list of users.

{% include './patterns/avatars.html' %}

## Video

Use to trigger a video that will play in a [Modal dialog](/elements/dialog).
Different layout configurations may be used.

## Pricing

Use to outline the pricing and benefits of something. Elements may be 
removed or rearranged depending on content needs.

## Logo slider

Use to display more content about a company when expanded on hover or tap. A 
title and text should be included.

## Name slider

Use to display more content about a person when the tray expands. A title 
and text should be included.

## Custom Theming

To customize a card the design tokens must be altered. These design tokens are 
different depending on the context for the card (light or dark theme).

Examples include:

- [`--rh-color-surface-lightest`](/tokens/color/#rh-color-surface-lightest)
- [`--rh-color-border-subtle-on-light`](/tokens/border/#rh-color-border-subtle-on-light)
- [`--rh-color-text-primary-on-light`](/tokens/font/#rh-color-text-primary-on-light)

For more information, please see the [card css custom properties][css-props].

### Custom themes

Themes are expressed in terms of color palettes.

{% include './patterns/themes.html' %}


## Usage

### Character count
The recommended maximum character count for the elements of a card are listed below and include spaces.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Title</td>
        <td data-label="Character count">20</td>
      </tr>
      <tr>
        <td data-label="Element">Headline</td>
        <td data-label="Character count">50</td>
      </tr>
      <tr>
        <td data-label="Element">Body text</td>
        <td data-label="Character count">165</td>
      </tr>
      <tr>
        <td data-label="Element">Footer</td>
        <td data-label="Character count">55</td>
      </tr>
    </tbody>
  </table>
</rh-table>


{% include 'partials/component/feedback.html' %}

[element]: /elements/card
[css-props]: /elements/card/code/#css-custom-properties