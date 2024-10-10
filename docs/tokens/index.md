---
layout: layouts/pages/has-toc.njk
title: Overvie
tokenSearch: true
---

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@rhds/elements/rh-tile/rh-tile.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
</script>

<style data-helmet>
.page-overvie .container .grid {
    margin-block: var(--rh-space--2xl, 32px);
  }

  uxdot-example::part(container) {
    background: transparent;
  }

  rh-tile [slot="headline"] h3,
  rh-tile [slot="image"] {
     margin-block: 0 !important;
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

<uxdot-example width-adjustment="807px">
  <img alt="Flow showing how a color like brand red becomes a token, how it is named, and how it is applied to a call to action" src="/tokens/images/design-tokens-intro.png">
</uxdot-example>

## Installation

To install design tokens, please visit our dedicated repo for instructions.

<rh-cta href="https://github.com/redhat-ux/red-hat-design-tokens">Install our design tokens</rh-cta>

## Token categories

We want your feedback on our tokens. [Contact us][contact] if there are missing 
values or if you have an idea for an output format or tool integration.

<nav class="grid xs-two-columns sm-three-columns">
  <rh-tile compact bleed>
    <uxdot-example slot="image" no-border>
      <img alt="Tokens for border radius, width, color, and more" src="/tokens/images/design-tokens-category-border.png">
    </uxdot-example>
    <a slot="headline" href="border/"><h3>Border</h3></a>
  </rh-tile>
  <rh-tile compact bleed>
    <uxdot-example slot="image" no-border>
      <img alt="Tokens for box shadows" src="/tokens/images/design-tokens-category-box-shadow.png">
    </uxdot-example>
    <a slot="headline" href="box-shadow/"><h3>Box shadow</h3></a>
  </rh-tile>
  <rh-tile compact bleed>
    <uxdot-example slot="image" no-border>
      <img alt="Tokens for breakpoint sizes" src="/tokens/images/design-tokens-category-breakpoint.png">
    </uxdot-example>
    <a slot="headline" href="breakpoint/" slot="headline"><h3>Breakpoint</h3></a>
  </rh-tile>
  <rh-tile compact bleed>
    <uxdot-example slot="image" no-border>
      <img alt="Tokens for colors" src="/tokens/images/design-tokens-category-color.png">
    </uxdot-example>
    <a slot="headline" href="color/"><h3>Color</h3></a>
  </rh-tile>
  <rh-tile compact bleed>
    <uxdot-example slot="image" no-border>
      <img alt="Tokens for icon sizes" src="/tokens/images/design-tokens-category-icon.png">
    </uxdot-example>
    <a slot="headline" href="icon/"><h3>Icon</h3></a>
  </rh-tile>
  <rh-tile compact bleed>
    <uxdot-example slot="image" no-border>
      <img alt="Tokens for length values" src="/tokens/images/design-tokens-category-length.png">
    </uxdot-example>
    <a slot="headline" href="length/"><h3>Length</h3></a>
  </rh-tile>
  <rh-tile compact bleed>
    <uxdot-example slot="image" no-border>
      <img alt="Tokens for media query sizes" src="/tokens/images/design-tokens-category-media-query.png">
    </uxdot-example>
    <a slot="headline" href="media/"><h3>Media query</h3></a>
  </rh-tile>
  <rh-tile compact bleed>
    <uxdot-example slot="image" no-border>
      <img alt="Tokens for opacity values" src="/tokens/images/design-tokens-category-opacity.png">
    </uxdot-example>
    <a slot="headline" href="opacity/"><h3>Opacity</h3></a>
  </rh-tile>
  <rh-tile compact bleed>
    <uxdot-example slot="image" no-border>
      <img alt="Tokens for spacer sizes" src="/tokens/images/design-tokens-category-space.png">
    </uxdot-example>
    <a slot="headline" href="space/"><h3>Space</h3></a>
  </rh-tile>
  <rh-tile compact bleed>
    <uxdot-example slot="image" no-border>
      <img alt="Tokens for fonts, sizes, weights, line heights, color, and more" src="/tokens/images/design-tokens-category-typography.png">
    </uxdot-example>
    <a slot="headline" href="font/"><h3>Typography</h3></a>
  </rh-tile>
</nav>

## Types of tokens

<div class="grid">
  <div>
    <h3>Global tokens</h3>
    <p>Global tokens represent the foundations of our design language and should
    have context-agnostic names. These can be used and are inherited by other
    token types.</p>

    <code>--rh-brand-red-500</code>
  </div>

  <div>
    <h3>Semantic tokens</h3>
    <p>Semantic tokens represent context or abstraction. They communicate the purpose
    of a token and are effective when a value with a single intent is used
    multiple times.</p>

    <code>--rh-color-surface-lightest</code>
  </div>

  <div>
    <h3>Element tokens</h3>
    <p>Element tokens link semantic tokens to specific elements. They are
    prefixed with the element name and ship in the @rhds/elements package,
    rather than @rhds/tokens.</p>

    <code>--rh-cta-color-primary</code>
  </div>
</div>


## Why we need tokens

In addition to being the source of truth of our design decisions, design tokens
help us track system-wide changes. When we make an update, that change will
propagate consistently across all of our experiences. For example, if we update
a color to be more accessible, or a font size to be more legible, these changes
will propagate to every page which uses the updated `@rhds/tokens` package.

Design tokens can also bring teams together under common practices. For example,
designers, developers, engineers, etc. can all use the same tokens and work 
toward consistency even if a token is updated.

<uxdot-example width-adjustment="739px">
  <img alt="Flow showing how changing a global token like a color will propagate through the entire design system" src="/tokens/images/design-tokens-why-we-need-tokens.png">
</uxdot-example>

## Tokens and our design system

We are working toward a platform-agnostic and shareable resource for our
collective design decisions. Our goal is to enable users to download, customize,
and apply tokens to their designs and code without keeping track of so many 
websites, libraries, and tools.

<uxdot-example width-adjustment="396px">
  <img alt="Flow showing how tokens can be utilized in design programs as well as applied to various touchpoints like brand, web, and product" src="/tokens/images/design-tokens-and-our-ds.png">
</uxdot-example>

## Naming tokens

Design tokens are names based on how they are used. For example,
`--rh-color-surface-lightest` is used as a background colour in light color
contexts. A clear and predictable name ensures that attributes are displayed
correctly and any actions are communicated clearly. Tokens should be named by
proceeding from the general to the specific, e.g. `colour` (general), `surface`
(more specific), `lightest` (most specific).

<uxdot-example width-adjustment="269px">
  <img alt="Destructive button with a Danger text label showing its assigned token name underneath" src="/tokens/images/design-tokens-naming.png">
</uxdot-example>

### Aliases

Some of our design tokens leverage an additional layer of abstraction called 
**aliases**. Alias tokens point to a global token which holds their value.

We use aliases to help systematize the desired values referenced by our tokens. 
One benefit of this approach is that by using alias tokens, users can reference 
semantic aliases instead of hard-coded values. Another benefit is that it 
enables flexibility. If we need to update an alias and want those changes 
applied across the design system, we only need to change that single alias in 
order for it to propagate everywhere.

<uxdot-example width-adjustment="602px">
  <img alt="Flow showing how 1 global token is applied to 2 different elements because the alias names are different" src="/tokens/images/design-tokens-aliases.png">
</uxdot-example>

## Themes

Themes are collections of design tokens that reference specific values. These 
values change when a user switches themes. Using themes enables us to ship one 
design system while serving multiple design languages that need to meet 
different audience or brand requirements.

<uxdot-example width-adjustment="870px">
  <img alt="Examples of how tokens are applied to elements in the light and dark themes" src="/tokens/images/design-tokens-themes.png">
</uxdot-example>

[color]: /tokens/color/
[space]: /tokens/space/
[typography]: /tokens/typography/
[contact]: mailto:design-system@redhat.com

{% include 'partials/component/feedback.11ty.cjs' %}
