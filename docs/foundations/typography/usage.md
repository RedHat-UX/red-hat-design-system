---
layout: layouts/pages/basic.njk
title: Usage
heading: Typography
sidenavTitle: Typography
hasToc: true
tags:
  - typography
subnav:
  collection: sortedTypography
  order: 3
permalink: /foundations/typography/usage.html
---

## Using styles

### Headings

Headings are used to establish hierarchy and introduce content.

<uxdot-example width-adjustment="367px">
  <img src="/assets/typography/type-usage-headings.svg"
      alt="3 examples of headings: Large, medium, and small."
      width="367"
      height="174">
</uxdot-example>

### Body text

Body text is used for blocks of text including inline links and lists. Do not center align too many lines of body text.

<uxdot-example width-adjustment="668px">
  <img src="/assets/typography/type-usage-body-text.svg"
      alt="Example of body text with an inline link."
      width="668"
      height="81">
</uxdot-example>

### Code text

Code text is used for code snippets or to style text for technical audiences. Do not center align code text.

<uxdot-example width-adjustment="317px">
  <img src="/assets/typography/type-usage-code-text.svg"
      alt="Example of code text with 3 lines."
      width="317"
      height="96">
</uxdot-example>

### Title

Titles are used above content to explain what can be expected underneath. Titles should always be sentence case and never uppercase.

<uxdot-example width-adjustment="247px">
  <img src="/assets/typography/type-usage-title.svg"
      alt="2 examples of titles: Small and large."
      width="247"
      height="92">
</uxdot-example>

### Blockquote

A blockquote is a combination of a quote icon and text styles used to add emphasis to quotes. A blockquote should always include attribution. The name is always medium weight and the company name is always italic.


<uxdot-example width-adjustment="422px">
  <img src="/assets/typography/type-usage-blockquote.svg"
      alt="Example of blockquote with quote icon and attribution."
      width="422"
      height="261">
</uxdot-example>

## Line length

Shorter lines of text tend to be more comfortable to read. As line length increases, the eye has to travel further from the end of one line to the beginning of the next line, making it difficult to focus and keep track of progress.

If you are placing text by itself on a grid, a comfortable line length is between 6 and 8 columns. When text is in a fluid layout, set the max-width to 50rem (800px). When text is in a component like a card, the line length is determined by the width of the component.

<uxdot-example width-adjustment="1012px">
  <img src="/assets/typography/type-usage-line-length.svg"
      alt="2 examples of line length: The first example shows that comfortable text is between 4 and 8 columns wide. The second example shows that comfortable text is no more than 800 pixels wide."
      width="1012"
      height="318">
</uxdot-example>

## Best practices

### Using headings

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img src="/assets/typography/type-usage-best-practice-1-do.svg"
      alt="Example of a heading set correctly in Red Hat Display."
      width="418"
      height="52">
    </uxdot-example>
    <p>Use the correct font family for the correct use case.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img src="/assets/typography/type-usage-best-practice-1-dont.svg"
      alt="Example of a heading set incorrectly in Red Hat Text."
      width="418"
      height="52">
    </uxdot-example>
    <p>Do not use Red Hat Text for headings.</p>
  </uxdot-best-practice>
</div>

### Using body text

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img src="/assets/typography/type-usage-best-practice-2-do.svg"
      alt="Example of body text set correctly in Red Hat Text."
      width="418"
      height="135">
    </uxdot-example>
    <p>Use the correct font family for the correct use case.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img src="/assets/typography/type-usage-best-practice-2-dont.svg"
      alt="Example of body text set incorrectly in Red Hat Display."
      width="418"
      height="135">
    </uxdot-example>
    <p>Do not use Red Hat Display for blocks of body text on websites.</p>
  </uxdot-best-practice>
</div>

### Spacing in between text styles

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img src="/assets/typography/type-usage-best-practice-3-do.svg"
      alt="Example of comfortable spacing in between various text styles which is correct."
      width="418"
      height="226">
    </uxdot-example>
    <p>Use comfortable spacing in between text styles.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="418px" slot="image">
      <img src="/assets/typography/type-usage-best-practice-3-dont.svg"
      alt="Example of uncomfortable spacing in between various text styles which is incorrect."
      width="418"
      height="226">
    </uxdot-example>
    <p>Do not space text too close together. Ensure users can read each style separately.</p>
  </uxdot-best-practice>
</div>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>
