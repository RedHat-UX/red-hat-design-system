---
title: How to use
heading: How to use
layout: layouts/pages/has-toc.njk
order: 1
tags:
  - theming
  - themes
subnav:
  collection: sortedThemes
  order: 00
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-alert/rh-alert.js';
</script>

The Red Hat Design System features a powerful, flexible, and easy-to-use theming 
system.

## What is theming?

We use theming to modify our elements and patterns so they fit a specific visual 
style. Themes can be applied to an element, a page, or a UI. 
Theming encompases device dark and light color schemes, RHDS' color palettes and tokens, and design customizations. 

## How does it work?

Our design system includes built-in branded and accessible defaults, so all you 
need to do if you want to create digital experiences that feel like Red Hat is 
to write a few lines of HTML.

When we want to flex our design muscles, our elements include powerful theming 
primitives in the form of **slots**, **design tokens**, and **CSS shadow 
parts**. These primitives enable you to theme a single element, section, page, 
or entire app UI.

## Terminology
Before we dive into the details, let's take a moment to clarify the terminology
used around color within RHDS.

[Color scheme](./color-palettes/#color-schemes)
:  `light` or `dark`, aka "light mode" or "dark mode".

   Color schemes are built into web browsers and operating systems, and form the
standard backbone of RHDS' theming engine.

   **Note:** Previous versions of RHDS referred to color schemes as `on` or "Backgrounds",
   and elements that have a color scheme as "color context consumers" because
   they reacted passively to the color scheme of their containers.

   <rh-alert state="caution">Avoid the terms "light theme" or "dark theme",
   as they can be confused with "theming", below.</rh-alert>

[Color palette](./color-palettes/#color-palettes)
:  `lightest`, `lighter`, `light`, `dark`, `darker`, or `darkest`

   Color palettes are unique to RHDS, and build upon the standard color schemes
   They apply to elements which contain other elements.

   **Note:** Previous versions of RHDS referred to elements with a
   color palette as "color context providers" because setting their color
   palette would actively change their descendant element's color schemes as
   well.

[Theming](./customizing/)
:  The process by which the appearance of RHDS elements are customized by
   tweaking theme variables. Single elements or entire pages can be themed.

<uxdot-feedback>
  <h2>Color palettes and color schemes</h2>
  <p>To learn more about working with color palettes and color schemes,
     <a href="color-palettes/">click here</a>.</p>
</uxdot-feedback>
