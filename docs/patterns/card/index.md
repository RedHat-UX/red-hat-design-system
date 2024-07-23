---
title: Overview
heading: Card
sidenavTitle: Card
layout: layouts/pages/pattern.njk
hasToc: true
order: 20
tags:
  - pattern
  - cardPatterns
subnav:
  collection: cardPatterns
  order: 1
importElements:
  - rh-card
  - rh-cta
  - rh-surface
  - rh-avatar
  - rh-accordion
---

<script type="module">
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">
<link rel="stylesheet" href="{{ '/styles/samp.css' | url }}">


## Overview

A card formats content in a small, contained space. It can be used to display a 
preview of information or provide secondary content in relation to the content 
it's near. Several cards can be used together to group related information.

<rh-alert state="info">

  These Card patterns document different design-approved uses of the `<rh-card>`
  element. [Consult the `<rh-card>` element documentation][element] for more
  information on how to use the card element.

</rh-alert>


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


## Customizing cards

To customize a card the design tokens must be altered. These design tokens are 
different depending on the context for the card (light or dark theme).

Examples include:

- [`--rh-color-surface-lightest`](/tokens/color/#rh-color-surface-lightest)
- [`--rh-color-border-subtle-on-light`](/tokens/border/#rh-color-border-subtle-on-light)
- [`--rh-color-text-primary-on-light`](/tokens/font/#rh-color-text-primary-on-light)

For more information, please see the [card css custom properties][css-props].


## Themes

Themes are expressed in terms of color palettes.

- `lightest`
- `lighter`
- `light`
- `dark`
- `darker`
- `darkest`

{% include './patterns/themes.html' %}


### Custom theming

When using design tokens to apply custom themes, it is important to ensure that the colors used meet [color contrast guidelines][color-contrast].

{% include './patterns/custom-themes.html' %}


{% include 'partials/component/feedback.html' %}

[element]: /elements/card
[css-props]: /elements/card/code/#css-custom-properties
[color-contrast]: /accessibility/design/#contrast