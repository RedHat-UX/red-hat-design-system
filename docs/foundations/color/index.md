---
title: Overview
heading: Color
sidenavTitle: Color
layout: layouts/pages/has-toc.njk
order: 10
permalink: /foundations/color/index.html
tags:
  - foundations
  - color
subnav:
  collection: sortedColor
  order: 1
crayons:
  - red
  - red-orange
  - orange
  - yellow
  - green
  - teal
  - blue
  - purple
  - gray
---
<style data-helmet>
  #crayons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    @container (min-width: 576px) and (max-width: 746px) {
      grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    }
   column-gap: var(--rh-space-2xl);
   row-gap: var(--rh-space-4xl);
    & .crayons-list {
      margin: 0;
      padding: 0;
      list-style-type: none;
      & li {
        padding: 0;
        margin: 0;
        & samp {
          display: block;
          font-size: var(--rh-font-size-body-text-md);
          font-family: var(--rh-font-family-code);
          padding: var(--rh-space-md) var(--rh-space-lg);
        }
      }
    }
  }
</style>

## Introduction

Color is integral to expressing the Red Hat brand successfully across digital experiences. We use color in our elements, patterns, websites, app UI, and more.

## Using color

### Color palette

Since all projects use color in some way, our color palette was designed with brand, usability, and accessibility as foundations.

### Communication

When colors are used together, they communicate brand, hierarchy, state, and more.

<uxdot-example width-adjustment="920px">
  {% include './color-communication.svg' %}
</uxdot-example>

## Design tokens

Design tokens are how we communicate and translate our design decisions to code. Changes can be made at scale, so any elements or patterns using our tokens will always be current.

To learn more, go to the [Tokens][tokens] section.

### Crayon and semantic tokens

Our design system includes two sets of tokens:

- **Crayon tokens** - reference hard-coded values and offer no information about usage
- **Semantic tokens** - reference crayon colors and define how a color should be used

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Semantic naming is essential not only just for color, but for all foundational styles.</p>
</rh-alert>

<uxdot-example width-adjustment="730px">
  {% include './color-semantic-tokens.svg' %}
</uxdot-example>

### Color palette tokens

<section id="crayons-grid">
{%- for crayon in crayons -%}
  <div>
    <h3>{{ crayon | title }}</h3>
    <ol class="crayons-list">
      {%- for _, token in tokens.color[crayon] -%}
      {%- if token.$value and not r/-(rgb|hsl)$/.test(token.name) -%}
      <li>
        <samp style="background-color: var(--{{token.name}});
                     color: {{ 'black' if token.attributes.isLight else 'white' }}">{{ token.name }}</samp>
      </li>
      {%- endif -%}
      {%- endfor -%}
    </ol>
  </div>
{%- endfor -%}
</section>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[tokens]: /tokens
