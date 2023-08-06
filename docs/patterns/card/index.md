---
title: Card
layout: layout-basic.njk
tags:
  - pattern
---

## Overview

A card formats content in a small, contained space. It can be used to display a 
preview of information or provide secondary content in relation to the content 
it's near. Several cards can be used together to group related information.

{% alert %}
These Card patterns document different design-approved uses of the `<rh-card>`
element. [Consult the `<rh-card>` element documentation][element] for more
information on how to use the card element.
{% endalert %}

## Sample

<rh-card>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend 
    elit sed est egestas, a sollicitudin mauris tincidunt. Pellentesque vel 
    dapibus risus. Nullam aliquam felis orci, eget cursus mi lacinia quis. 
    Vivamus at felis sem.</p>
  <rh-cta priority="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>

## Sample - Slotted Title

<rh-card>
  <h2 slot="header">Headline, sm</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend 
    elit sed est egestas, a sollicitudin mauris tincidunt. Pellentesque vel 
    dapibus risus. Nullam aliquam felis orci, eget cursus milacinia quis. 
    Vivamus at felis sem.
  </p>
  <rh-cta priority="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>

## Sample - alternative color scheme

<rh-card class="alt">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend 
    elit sed est egestas, a
    sollicitudin mauris tincidunt. Pellentesque vel dapibus risus. Nullam 
    aliquam felis orci, eget cursus mi
    lacinia quis. Vivamus at felis sem.
  </p>
  <rh-cta priority="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>

## Sample - title bar

<rh-card class="bar">
  <h2 slot="header">Headline, sm</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend 
    elit sed est egestas, a
    sollicitudin mauris tincidunt. Pellentesque vel dapibus risus. Nullam 
    aliquam felis orci, eget cursus mi
    lacinia quis. Vivamus at felis sem.
  </p>
  <rh-cta priority="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>

## Title bar

<rh-card class="bar">
  <h2 slot="header">Card title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
    libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
    elit. Donec id elit non mi porta gravida at eget metus.</p>
  <rh-cta priority="primary" slot="footer"><a href="#">Footer</a></rh-cta>
</rh-card>

## Image title bar

<rh-card class="bar full">
  <img src="./kitten-900x300.jpeg" slot="header">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
    libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
    elit. Donec id elit non mi porta gravida at eget metus.</p>
  <rh-cta slot="footer"><a href="#">Footer</a></rh-cta>
</rh-card>

## Style

A card can be used in light and dark themes.

### Theme

<rh-context-provider color-palette="light">
  <rh-card>
    <h2 slot="header">Card title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
      libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
      elit. Donec id elit non mi porta gravida at eget metus.</p>
    <rh-cta slot="footer"><a href="#">Footer</a></rh-cta>
  </rh-card>
</rh-context-provider>

<rh-context-provider color-palette="dark">
  <rh-card>
    <h2 slot="header">Card title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit 
      libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id 
      elit. Donec id elit non mi porta gravida at eget metus.</p>
    <rh-cta slot="footer"><a href="#">Footer</a></rh-cta>
  </rh-card>
</rh-context-provider>

{% repoStatus %}

{% include 'feedback.html' %}

<script src="/elements/card/demo/rh-card.js" type="module"></script>
<style>
  rh-card {
    display: grid;
    max-width: 360px;
  }

  rh-card.alt,
  rh-context-provider[color-palette^="light"] rh-card.alt {
    --rh-card-background-color: #f0f0f0;
  }

  rh-context-provider[color-palette^="dark"] rh-card.alt {
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
</style>

