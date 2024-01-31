---
layout: layouts/pages/foundations.njk
title: Overview
heading: Color
tags:
  - foundations
  - color
permalink: /foundations/color/index.html
order: 00
bodyClasses: element-docs
---

{% import 'macros/foundations.njk' as foundations %}

## Introduction

Color helps unify Red Hat digital properties, from website experiences to 
application interfaces.

## Color system

Our color system provides comprehensive guidelines on use, definition, and role 
of color in branded digital experiences.

### Role of color

Our color palette is designed with brand, usability, and accessibility in mind 
and is used for all projects across Red Hat. Applying color thoughtfully and 
consistently helps us create cohesive, recognizable, and engaging experiences 
for our users.

### Color relationships

When colors are used together, they form relationships that communicate brand, 
hierarchy, state, and more.

{% example palette="light",
          alt="Variants of several elements",
          src="/assets/color/color-relationships.png" %}

### Color design tokens

Design tokens are the source of truth of our design decisions. They allow for 
changes at scale, making design language updates easy to implement.

To learn more about our color design tokens, go to the [Tokens](/tokens) section.


### "Crayon" and semantic colors

Our design system includes multiple sets of colors known as **"crayon" colors**. Crayon colors reference hard-coded values, but offer no information about usage. **Semantic** colors reference crayon colors and define how a color is used. Semantic naming is essential not just for color, but for all foundational styles.

{% example palette="light",
          alt="Example of how crayon color tokens are aliased to semantic tokens, which are used to style a button",
          src="/assets/color/primitive-and-semantic-colors.png" %}

{% feedback %}
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
{% endfeedback %}
