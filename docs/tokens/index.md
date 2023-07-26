---
layout: layout-tokens.njk
title: Overview
bodyClasses: token-docs
---

<style>
  ul.multi-column--min-400-wide {
    list-style-type: none;
    padding-inline: 0;
  }
</style>

<script type="module">
  import '@rhds/elements/rh-code-block/rh-code-block.js';
</script>

## Introduction

Design tokens are the source of truth of our design decisions. They are
also the values needed to maintain our design system, including
[color][color], [space][space], [typography][typography], etc. Designers,
developers, engineers, etc. use tokens instead of hard-coded values to create
flexible yet seamless user experiences across a variety of platforms and
technologies. design tokens will soon be directly integrated into all of our
websites, libraries, and tools.

{% example alt="", src="" %}

## Types of tokens

- ### Global tokens
  Global tokens represent the foundations of our design language and should
  have context-agnostic names. These can be used and are inherited by other
  token types.

  <rh-code-block>
    <script type="text/css">--rh-brand-red-500</script>
  </rh-code-block>

- ### Semantic tokens
  Semantic tokens represent context or abstraction. They communicate the purpose
  of a token and are effective when a value with a single intent is used
  multiple times.

  <rh-code-block>
    <script type="text/css">--rh-color-surface-lightest</script>
  </rh-code-block>

- ### Component tokens
  Component tokens link semantic tokens to specific components. They are
  prefixed with the element name and ship in the `@rhds/elements` package,
  rather than `@rhds/tokens`.

  <rh-code-block>
    <script type="text/css">--rh-cta-color-primary</script>
  </rh-code-block>

  {.multi-column--min-400-wide}

## Why we need tokens

In addition to being the source of truth of our design decisions, design tokens
help us track system-wide changes. When we make an update, that change will
propagate consistently across all of our experiences. For example, if we update
a color to be more accessible, or a font size to be more legible, these changes
will propagate to every page which uses the updated `@rhds/tokens` package.

Design tokens can also bring teams together under common practices. For example,
designers, developers, engineers, etc. can all use the same tokens and work 
toward consistency even if a token is update.

{% example alt="", src="" %}

## Tokens and our design system

We are workign toward a platform-agnostic and shareable resource for our
collective design decisions. Our goal is to enable users to download, customize,
and apply tokens to their designs and code without keeping track of so many 
websites , libraries, and tools.

{% example alt="", src="" %}

## Naming tokens

Design tokens are names based on how they are used. For example,
`--rh-color-surface-lightest` is used as a background colour in light color
contexts. A clear and predictable name ensures that attributes are displayed
correctly and any actions are communicated clearly. Tokens should be named by
proceeding from the general to the specific, e.g. `colour` (general), `surface`
(more specific), `lightest` (most specific).

{% example alt="", src="" %}

### Aliases

Some of our design tokens leverage additional layers of abstraction, called
aliases. Alias tokens point to a global token which holds their value.

{% example alt="", src="" %}

## Themes

TBD

{% example alt="", src="" %}

## Installation

```sh
npm install @rhds/tokens
```

[color]: /tokens/color/
[space]: /tokens/space/
[typography]: /tokens/typography/

{% include 'feedback.html' %}
