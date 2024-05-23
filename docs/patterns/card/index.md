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
  rh-card {
    display: grid;
    max-width: 360px;
    &.bar::part(header) {
      margin: 0;
      text-transform: uppercase;
      padding: var(--rh-space-lg, 16px) var(--rh-space-xl, 24px);
      background-color: var(--_header-bg, var(--rh-color-surface-light, #e0e0e0));
      font-weight: var(--rh-font-weight-heading-regular, 300);
      font-size: var(--rh-font-size-body-text-md, 1rem);
    }
    &.full::part(header) {
      padding: 0;
    }
    &.alt {
      --rh-color-surface-light: #f0f0f0;
      --rh-color-surface-lighter: #f0f0f0;
      --rh-color-surface-lightest: #f0f0f0;
      --rh-color-surface-dark: #3c3f42;
      --rh-color-surface-darker: #3c3f42;
      --rh-color-surface-darkest: #3c3f42;
    }
    &.custom-light-theme {
      --rh-color-border-subtle-on-light: #EF6461;
      --rh-color-surface-lightest: #feeded;
      --rh-color-text-primary-on-light: #30292F;
    }
    &.custom-dark-theme {
      --rh-color-border-subtle-on-dark: #5e40be;
      --rh-color-surface-darkest: #261a4c;
      --rh-color-text-primary-on-dark: #e8e4f5;
    }
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

## Alternative color scheme

<rh-card class="alt">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend 
    elit sed est egestas, a
    sollicitudin mauris tincidunt. Pellentesque vel dapibus risus. Nullam 
    aliquam felis orci, eget cursus mi
    lacinia quis. Vivamus at felis sem.
  </p>
  <rh-cta variant="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>

## Title bar

<rh-card class="bar">
  <h2 slot="header">Card title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
    libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
    elit. Donec id elit non mi porta gravida at eget metus.</p>
  <rh-cta variant="primary" slot="footer"><a href="#">Footer</a></rh-cta>
</rh-card>

## Image title bar

<rh-card class="bar full">
  <img src="./kitten-900x300.jpeg" slot="header">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
    libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
    elit. Donec id elit non mi porta gravida at eget metus.</p>
  <rh-cta slot="footer"><a href="#">Footer</a></rh-cta>
</rh-card>

## Custom Theming

To customize a card the design tokens must be altered.  These design tokens are different depending on the context for the card (light or dark theme).

Examples include:

- [`--rh-color-surface-lightest`](/tokens/color/#rh-color-surface-lightest)
- [`--rh-color-border-subtle-on-light`](/tokens/border/#rh-color-border-subtle-on-light)
- [`--rh-color-text-primary-on-light`](/tokens/font/#rh-color-text-primary-on-light)

For more information, please see the [card css custom properties](/elements/card/code/#css-custom-properties).

### Custom Light Theme

  <rh-card color-palette="light" class="custom-light-theme">
    <h2 slot="header">Card title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
      libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
      elit. Donec id elit non mi porta gravida at eget metus.</p>
    <rh-cta slot="footer"><a href="#">Footer</a></rh-cta>
  </rh-card>

### Custom Dark Theme

  <rh-card color-palette="dark" class="custom-dark-theme">
    <h2 slot="header">Card title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
      libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
      elit. Donec id elit non mi porta gravida at eget metus.</p>
    <rh-cta slot="footer"><a href="#">Footer</a></rh-cta>
  </rh-card>

{% include 'feedback.html' %}


[element]: /elements/card

