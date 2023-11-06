---
layout: layout-foundations.njk
title: Overview
heading: Color
tags:
  - foundations
  - color
permalink: /foundations/color/index.html
order: 00
---


## Introduction
Color helps unify Red Hat digital properties, from website experiences to application interfaces.

## Color system

### Role of color

Our color palette is designed with brand, usability, and accessibility in mind and is used for all projects across Red Hat. Applying color thoughtfully and consistently helps us create cohesive, recognizable, and engaging experiences for our users.

### Color relationships

When colors are used together, they form relationships that communicate brand, hierarchy, state, and more.

{% example palette="light",
          alt="",
          src="/assets/color/color-relationships.png" %}

### Color design tokens

Design tokens are the source of truth of our design decisions. They allow for changes at scale, making design language updates easy to implement.

To learn more about our color design tokens, go to the <a href="/tokens">Tokens</a> section.

### Primitive and semantic colors

Our design system includes multiple sets of colors known as primitives. Primitives reference hard-coded values, but offer no information about usage. Semantic colors reference primitive colors and define how a color is used. Semantic naming is essential not just for color, but for all foundational styles.

{% example palette="light",
          alt="",
          src="/assets/color/primitive-and-semantic-colors.png" %}

{% feedback %}
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
{% endfeedback %}
