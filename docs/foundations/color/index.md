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
    gap: var(--rh-space-2xl);
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

<uxdot-example width-adjustment="840px">
  <img alt="Variants of several elements"
       src="/assets/color/color-relationships.png"
       width="840"
       height="599">
</uxdot-example>


### Color design tokens

Design tokens are the source of truth of our design decisions. They allow for 
changes at scale, making design language updates easy to implement.

To learn more about our color design tokens, go to the [Tokens](/tokens) section.

### "Crayon" and semantic colors

Our design system includes multiple sets of colors known as **"crayon" colors**. 
Crayon colors reference hard-coded values, but offer no information about usage. 
**Semantic** colors reference crayon colors and define how a color is used. 
Semantic naming is essential not just for color, but for all foundational 
styles.

<uxdot-example width-adjustment="626px">
  <img alt="Example of how crayon color tokens are aliased to semantic tokens, which are used to style a button"
       src="/assets/color/primitive-and-semantic-colors.png"
       width="626"
       height="550">
</uxdot-example>

## Color tokens

Read more about our colour tokens on the [tokens page](/tokens/).

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
