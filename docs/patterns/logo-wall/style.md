---
title: Style
heading: Logo wall
sidenavTitle: Logo wall
layout: layouts/pages/pattern.njk
order: 20
tags:
  - logowallPatterns
subnav:
  collection: logowallPatterns
  order: 2
---

## Style

There are two styles of logo wall: bordered and borderless. Both styles can be either interactive or static; however, it is recommended to use the bordered style for interactive logos.

## Anatomy

<uxdot-example width-adjustment="442px">
  <img src="../style-anatomy.svg"
      alt="Examples of a bordered logo and borderless logo with numbers pointing to the logos and border of the bordered variant."
      width="442"
      height="177">
</uxdot-example>

1. Logo
2. Border

## Theme

Logo walls can be used in light and dark themes.

<rh-alert state="warning">
  When using a borderless logo wall, ensure that the color contrast between each logo and the background meets accessibility standards.
</rh-alert>

### Light theme

<uxdot-example width-adjustment="462px">
  <img src="../style-theme-light.svg"
      alt="Image of bordered and borderless logos against 3 light themed backgrounds."
      width="462"
      height="618">
</uxdot-example>

### Dark theme

<uxdot-example width-adjustment="924px">
  <img src="../style-theme-dark.svg"
      alt="Image of bordered and borderless logos against 4 dark themed backgrounds."
      width="924"
      height="412">
</uxdot-example>

## Space

Logo walls define layout rules for spacing logos, and their styles.

### Bordered
 - Logos are evenly spaced.
 - Logos are in a container with 16px of padding on all sides and a corner radius of 3px.

<uxdot-example width-adjustment="1113px">
  <img src="../style-space-group-bordered.png"
      alt="Example of a bordered logo wall with spacing values."
      width="1113"
      height="110">
</uxdot-example>

### Borderless
 - Logos are evenly spaced.
 - Logos are in a container with 16px of top and bottom padding and 8px of left and right padding.
 - All containers using the borderless style have the same height but will likely have different widths depending on the dimensions of the logo.

<uxdot-example width-adjustment="1113px">
  <img src="../style-space-group-borderless.png"
      alt="Example of a borderless logo wall with spacing values."
      width="1113"
      height="110">
</uxdot-example>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

<uxdot-example width-adjustment="328px">
  <img src="../style-states-hover-light.svg"
      alt="Image showing hover states in light theme. The bordered logo background changes to light gray. The borderless logo has a red border on the bottom."
      width="328"
      height="110">
</uxdot-example>

<uxdot-example width-adjustment="328px">
  <img src="../style-states-hover-dark.svg"
      alt="Image showing hover states in dark theme. The bordered logo background changes to lighter gray. The borderless logo has a red border on the bottom."
      width="328"
      height="110">
</uxdot-example>

### Focus

<rh-alert state="info">
  The focus states have the same styles as the hover states, except for the focus ring.
</rh-alert>

<uxdot-example width-adjustment="332px">
  <img src="../style-states-focus-light.svg"
      alt="Image showing focus states in light theme. The focus states are the same as the hover states with an added focus ring."
      width="332"
      height="114">
</uxdot-example>

<uxdot-example width-adjustment="332px">
  <img src="../style-states-focus-dark.svg"
      alt="Image showing focus states in dark theme. The focus states are the same as the hover states with an added focus ring."
      width="332"
      height="114">
</uxdot-example>

### Active

<rh-alert state="info">
  The active states have the same styles as the focus states.
</rh-alert>

<uxdot-example width-adjustment="332x">
  <img src="../style-states-focus-light.svg"
      alt="Image showing active states in light theme. They are the same as the focus state."
      width="332"
      height="114">
</uxdot-example>

<uxdot-example width-adjustment="332px">
  <img src="../style-states-focus-dark.svg"
      alt="Image showing active states in dark theme. They are the same as the focus state."
      width="332"
      height="114">
</uxdot-example>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
