---
title: Usage
heading: Typography
sidenavTitle: Typography
layout: layouts/pages/has-toc.njk
permalink: /foundations/typography/usage.html
tags:
  - typography
subnav:
  collection: sortedTypography
  order: 3
---

## Using styles

### Headings

Headings are used to establish hierarchy and introduce content.

<uxdot-example width-adjustment="367px">
  {% include './type-usage-headings.svg' %}
</uxdot-example>

### Body text

Body text is used for blocks of text including inline links and lists. Do not
center align too many lines of body text.

<uxdot-example width-adjustment="668px">
  {% include './type-usage-body-text.svg' %}
</uxdot-example>

### Code text

Code text is used for code snippets or to style text for technical audiences. Do
not center align code text.

<uxdot-example width-adjustment="317px">
  {% include './type-usage-code-text.svg' %}
</uxdot-example>

### Title

Titles are used above content to explain what can be expected underneath. Titles
should always be sentence case and never uppercase.

<uxdot-example width-adjustment="247px">
  {% include './type-usage-title.svg' %}
</uxdot-example>

### Blockquote

A blockquote is a combination of a quote icon and text styles used to add
emphasis to quotes. A blockquote should always include attribution. The name is
always medium weight and the company name is always italic.


<uxdot-example width-adjustment="422px">
  {% include './type-usage-blockquote.svg' %}
</uxdot-example>

## Line length

Shorter lines of text tend to be more comfortable to read. As line length
increases, the eye has to travel further from the end of one line to the
beginning of the next line, making it difficult to focus and keep track of
progress.

If you are placing text by itself on a grid, a comfortable line length is
between 6 and 8 columns. When text is in a fluid layout, set the max-width to
50rem (800px). When text is in a component like a card, the line length is
determined by the width of the component.

<uxdot-example color-palette="lightest" width-adjustment="1012px">
  {% include './type-usage-line-length.svg' %}
</uxdot-example>

## Best practices

### Using headings

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      {% include './type-usage-best-practice-1-do.svg' %}
    </uxdot-example>
    <p>Use the correct font family for the correct use case.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      {% include './type-usage-best-practice-1-dont.svg' %}
    </uxdot-example>
    <p>Do not use Red Hat Text for headings.</p>
  </uxdot-best-practice>
</div>

### Using body text

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      {% include './type-usage-best-practice-2-do.svg' %}
    </uxdot-example>
    <p>Use the correct font family for the correct use case.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      {% include './type-usage-best-practice-2-dont.svg' %}
    </uxdot-example>
    <p>Do not use Red Hat Display for blocks of body text on websites.</p>
  </uxdot-best-practice>
</div>

### Spacing in between text styles

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      {% include './type-usage-best-practice-3-do.svg' %}
    </uxdot-example>
    <p>Use comfortable spacing in between text styles.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      {% include './type-usage-best-practice-3-dont.svg' %}
    </uxdot-example>
    <p>Do not space text too close together. Ensure users can read each style separately.</p>
  </uxdot-best-practice>
</div>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>
