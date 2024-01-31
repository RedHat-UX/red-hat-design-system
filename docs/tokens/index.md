---
layout: layouts/pages/tokens.njk
title: Overview
bodyClasses: token-docs
---

<style>
  ul.multi-column--min-400-wide {
    list-style-type: none;
    padding-inline: 0;
  }
  #token-categories-nav figure {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--rh-space-lg);
  }
  #token-categories-nav figcaption {
    font-family: var(--rh-font-family-heading);
    font-size: var(--rh-font-size-heading-sm);
  }
</style>

## Introduction

Design tokens are the source of truth of our design decisions. They are
also the values needed to maintain our design system, including
[color][color], [space][space], [typography][typography], etc. Designers,
developers, engineers, etc. use tokens instead of hard-coded values to create
flexible yet seamless user experiences across a variety of platforms and
technologies. Design tokens will soon be directly integrated into all of our
websites, libraries, and tools.

{% example palette="lightest",
  alt="Flow showing how a color like brand red becomes a token, how it is named, and how it is applied to a call to action",
  src="images/design-tokens-intro.png" %}

## Installation

To install design tokens, please visit our dedicated repo for instructions.

{% cta href="https://github.com/redhat-ux/red-hat-design-tokens" %}
Install our design tokens
{% endcta %}

## Token categories

We want your feedback on our tokens. [Contact us][contact] if there are missing 
values or if you have an idea for an output format or tool integration.

<nav id="token-categories-nav" class="multi-column--min-400-wide">
  <figure>
    {% example
      alt="Tokens for border radius, width, color, and more",
      src="images/design-tokens-category-border.png" %}
    <figcaption>Border</figcaption>
  </figure>
  <figure>
    {% example
      alt="Tokens for box shadows",
      src="images/design-tokens-category-box-shadow.png" %}
    <figcaption>Box shadow</figcaption>
  </figure>
  <figure>
    {% example
      alt="Tokens for breakpoint sizes",
      src="images/design-tokens-category-breakpoint.png" %}
    <figcaption>Breakpoint</figcaption>
  </figure>
  <figure>
    {% example
      alt="Tokens for colors",
      src="images/design-tokens-category-color.png" %}
    <figcaption>Color</figcaption>
  </figure>
  <figure>
    {% example
      alt="Tokens for icon sizes",
      src="images/design-tokens-category-icon.png" %}
    <figcaption>Icon</figcaption>
  </figure>
  <figure>
    {% example
      alt="Tokens for length values",
      src="images/design-tokens-category-length.png" %}
    <figcaption>Length</figcaption>
  </figure>
  <figure>
    {% example
      alt="Tokens for media query sizes",
      src="images/design-tokens-category-media-query.png" %}
    <figcaption>Media query</figcaption>
  </figure>
  <figure>
    {% example
      alt="Tokens for opacity values",
      src="images/design-tokens-category-opacity.png" %}
    <figcaption>Opacity</figcaption>
  </figure>
  <figure>
    {% example
      alt="Tokens for spacer sizes",
      src="images/design-tokens-category-space.png" %}
    <figcaption>Space</figcaption>
  </figure>
  <figure>
    {% example
      alt="Tokens for fonts, sizes, weights, line heights, color, and more",
      src="images/design-tokens-category-typography.png" %}
    <figcaption>Typography</figcaption>
  </figure>
</nav>


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

- ### Element tokens
  Element tokens link semantic tokens to specific elements. They are
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
toward consistency even if a token is updated.

{% example
  alt="Flow showing how changing a global token like a color will propagate through the entire design system",
  src="images/design-tokens-why-we-need-tokens.png" %}

## Tokens and our design system

We are working toward a platform-agnostic and shareable resource for our
collective design decisions. Our goal is to enable users to download, customize,
and apply tokens to their designs and code without keeping track of so many 
websites, libraries, and tools.

{% example
  alt="Flow showing how tokens can be utilized in design programs as well as applied to various touchpoints like brand, web, and product",
  src="images/design-tokens-and-our-ds.png" %}

## Naming tokens

Design tokens are names based on how they are used. For example,
`--rh-color-surface-lightest` is used as a background colour in light color
contexts. A clear and predictable name ensures that attributes are displayed
correctly and any actions are communicated clearly. Tokens should be named by
proceeding from the general to the specific, e.g. `colour` (general), `surface`
(more specific), `lightest` (most specific).

{% example
  alt="Destructive button with a Danger text label showing its assigned token name underneath",
  src="images/design-tokens-naming.png" %}

### Aliases

Some of our design tokens leverage an additional layer of abstraction called 
**aliases**. Alias tokens point to a global token which holds their value.

We use aliases to help systematize the desired values referenced by our tokens. 
One benefit of this approach is that by using alias tokens, users can reference 
semantic aliases instead of hard-coded values. Another benefit is that it 
enables flexibility. If we need to update an alias and want those changes 
applied across the design system, we only need to change that single alias in 
order for it to propagate everywhere.

{% example
  alt="Flow showing how 1 global token is applied to 2 different elements because the alias names are different",
  src="images/design-tokens-aliases.png" %}

## Themes

Themes are collections of design tokens that reference specific values. These 
values change when a user switches themes. Using themes enables us to ship one 
design system while serving multiple design languages that need to meet 
different audience or brand requirements.

{% example
  alt="Examples of how tokens are applied to elements in the light and dark themes",
  src="images/design-tokens-themes.png" %}

[color]: /tokens/color/
[space]: /tokens/space/
[typography]: /tokens/typography/
[contact]: mailto:design-system@redhat.com

{% include 'layouts/snippets/feedback.html' %}
