---
title: Scale
heading: Typography
sidenavTitle: Typography
layout: layouts/pages/has-toc.njk
permalink: /foundations/typography/scale.html
tags:
  - typography
subnav:
  collection: sortedTypography
  order: 2
---

<link data-helmet rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">

<script type="module" data-helmet>
  import '@rhds/elements/rh-table/rh-table.js';
</script>

<style data-helmet>
  rh-table table {
    & td, & th { width: 20%; }
    & td {
      &:has(s) { color: var(--rh-color-text-brand); }
      & span { color: var(--rh-color-green-60); }
      & s { color: var(--rh-color-gray-40); }
      & :is(s, span) { display: block; }
    }
  }
</style>

## Overview

The type scale includes a range of text sizes and weights designed to support 
various content needs. There are type scales for both desktop and mobile 
environments. For more technical details, go to the 
[Tokens][tokens] section.

## Desktop scale

### Heading

You might see headings with larger sizes or different weights. Those are used 
for limited bespoke use cases only. Contact the [Brand team][brandteam] to learn 
more about using heading sizes and weights different from the table below.

<rh-table>

| Style        | Font family     | Font weight   | Font size    | Line height |
|--------------|-----------------|---------------|--------------|-------------|
| Heading, 2xl | Red Hat Display | Regular (400) | 48 (3.0rem)  | 62.4 (1.3)  |
| Heading, xl  | Red Hat Display | Regular (400) | 40 (2.5rem)  | 52 (1.3)    |
| Heading, lg  | Red Hat Display | Medium (500)  | 36 (2.25rem) | 46.8 (1.3)  |
| Heading, md  | Red Hat Display | Medium (500)  | 28 (1.75rem) | 36.4 (1.3)  |
| Heading, sm  | Red Hat Display | Medium (500)  | 24 (1.5rem)  | 31.2 (1.3)  |
| Heading, xs  | Red Hat Display | Medium (500)  | 20 (1.25rem) | 26 (1.3)    |

</rh-table>

### Body text

Body text can use italic and medium styles for emphasis.

<rh-table>

| Style          | Font family  | Font weight   | Font size     | Line height |
|----------------|--------------|---------------|---------------|-------------|
| Body text, 2xl | Red Hat Text | Regular (400) | 24 (1.5rem)   | 36 (1.5)    |
| Body text, xl  | Red Hat Text | Regular (400) | 20 (1.25rem)  | 30 (1.5)    |
| Body text, lg  | Red Hat Text | Regular (400) | 18 (1.125rem) | 27 (1.5)    |
| Body text, md  | Red Hat Text | Regular (400) | 16 (1.0rem)   | 24 (1.5)    |
| Body text, sm  | Red Hat Text | Regular (400) | 14 (0.875rem) | 21 (1.5)    |
| Body text, xs  | Red Hat Text | Regular (400) | 12 (0.75rem)  | 18 (1.5)    |

</rh-table>

### Code text

Code text may use italic and medium styles for emphasis if absolutely necessary.

<rh-table>

| Style          | Font family  | Font weight   | Font size     | Line height |
|----------------|--------------|---------------|---------------|-------------|
| Code text, 2xl | Red Hat Mono | Regular (400) | 24 (1.5rem)   | 36 (1.5)    |
| Code text, xl  | Red Hat Mono | Regular (400) | 20 (1.25rem)  | 30 (1.5)    |
| Code text, lg  | Red Hat Mono | Regular (400) | 18 (1.125rem) | 27 (1.5)    |
| Code text, md  | Red Hat Mono | Regular (400) | 16 (1.0rem)   | 24 (1.5)    |
| Code text, sm  | Red Hat Mono | Regular (400) | 14 (0.875rem) | 21 (1.5)    |
| Code text, xs  | Red Hat Mono | Regular (400) | 12 (0.75rem)  | 18 (1.5)    |

</rh-table>

### Title

<rh-table>

| Style     | Font family  | Font weight   | Font size   | Line height |
|-----------|--------------|---------------|-------------|-------------|
| Title, lg | Red Hat Text | Regular (400) | 24 (1.5rem) | 36 (1.5)    |
| Title, sm | Red Hat Text | Regular (400) | 16 (1.0rem) | 24 (1.5)    |

</rh-table>

### Blockquote

<rh-table>

| Style          | Font family     | Font weight   | Font size    | Line height |
|----------------|-----------------|---------------|--------------|-------------|
| Blockquote, lg | Red Hat Display | Regular (400) | 28 (1.75rem) | 36.4 (1.3)  |
| Blockquote, sm | Red Hat Display | Regular (400) | 20 (1.25rem) | 26 (1.3)    |

</rh-table>

## Mobile scale

The mobile scale takes effect when the viewport size is less than 768px.

### Heading

<rh-table>

| Style        | Font family     | Font weight   | Font size                         | Line height                  |
|--------------|-----------------|---------------|-----------------------------------|------------------------------|
| Heading, 2xl | Red Hat Display | Regular (400) | <s>48 (3.0rem)</s> Reduces to 35  | <s>62.4 (1.3)</s> 45.5 (1.3) |
| Heading, xl  | Red Hat Display | Regular (400) | <s>40 (2.5rem)</s> Reduces to 29  | <s>52 (1.3)</s> 37.7 (1.3)   |
| Heading, lg  | Red Hat Display | Medium (500)  | <s>36 (2.25rem)</s> Reduces to 26 | <s>46.8 (1.3)</s> 33.8 (1.3) |
| Heading, md  | Red Hat Display | Medium (500)  | <s>28 (1.75rem)</s> Reduces to 24 | <s>36.4 (1.3)</s> 31.2 (1.3) |
| Heading, sm  | Red Hat Display | Medium (500)  | <s>24 (1.5rem)</s> Reduces to 20  | <s>31.2 (1.3)</s> 26 (1.3)   |
| Heading, xs  | Red Hat Display | Medium (500)  | <s>20 (1.25rem)</s> Reduces to 18 | <s>26 (1.3)</s> 23.4 (1.3)   |

</rh-table>

### Body text

<rh-table>

| Style          | Font family  | Font weight   | Font size                                  | Line height              |
| -------------- | ------------ | ------------- | ------------------------------------------ | ------------------------ |
| Body text, 2xl | Red Hat Text | Regular (400) | <s>24 (1.5rem)</s> Reduces to 20           | <s>36 (1.5)</s> 30 (1.5) |
| Body text, xl  | Red Hat Text | Regular (400) | <s>20 (1.25rem)</s> Reduces to 18          | <s>30 (1.5)</s> 27 (1.5) |
| Body text, lg  | Red Hat Text | Regular (400) | <s>18 (1.125rem)</s> Reduces to 16         | <s>27 (1.5)</s> 24 (1.5) |
| Body text, md  | Red Hat Text | Regular (400) | 16 (1.0rem) <span>Does not change</span>   | 24 (1.5)                 |
| Body text, sm  | Red Hat Text | Regular (400) | 14 (0.875rem) <span>Does not change</span> | 21 (1.5)                 |
| Body text, xs  | Red Hat Text | Regular (400) | 12 (0.75rem) <span>Does not change</span>  | 18 (1.5)                 |

</rh-table>

### Code text

<rh-table>

| Style          | Font family  | Font weight   | Font size                                  | Line height              |
| -------------- | ------------ | ------------- | ------------------------------------------ | ------------------------ |
| Code text, 2xl | Red Hat Mono | Regular (400) | <s>24 (1.5rem)</s> Reduces to 20           | <s>36 (1.5)</s> 30 (1.5) |
| Code text, xl  | Red Hat Mono | Regular (400) | <s>20 (1.25rem)</s> Reduces to 18          | <s>30 (1.5)</s> 27 (1.5) |
| Code text, lg  | Red Hat Mono | Regular (400) | <s>18 (1.125rem)</s> Reduces to 16         | <s>27 (1.5)</s> 24 (1.5) |
| Code text, md  | Red Hat Mono | Regular (400) | 16 (1.0rem) <span>Does not change</span>   | 24 (1.5)                 |
| Code text, sm  | Red Hat Mono | Regular (400) | 14 (0.875rem) <span>Does not change</span> | 21 (1.5)                 |
| Code text, xs  | Red Hat Mono | Regular (400) | 12 (0.75rem) <span>Does not change</span>  | 18 (1.5)                 |

</rh-table>

### Title

<rh-table>

| Style     | Font family  | Font weight   | Font size                                | Line height              |
| --------- | ------------ | ------------- | ---------------------------------------- | ------------------------ |
| Title, lg | Red Hat Text | Regular (400) | <s>24 (1.5rem)</s> Reduces to 20         | <s>36 (1.5)</s> 30 (1.5) |
| Title, sm | Red Hat Text | Regular (400) | 16 (1.0rem) <span>Does not change</span> | 24 (1.5)                 |

</rh-table>

### Blockquote

<rh-table>

| Style          | Font family     | Font weight   | Font size                         | Line height                  |
|----------------|-----------------|---------------|-----------------------------------|------------------------------|
| Blockquote, lg | Red Hat Display | Regular (400) | <s>28 (1.75rem)</s> Reduces to 24 | <s>36.4 (1.3)</s> 31.2 (1.3) |
| Blockquote, sm | Red Hat Display | Regular (400) | <s>20 (1.25rem)</s> Reduces to 18 | <s>26 (1.3)</s> 23.4 (1.3)   |

</rh-table>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[tokens]: https://ux.redhat.com/tokens/font/
[brandteam]: https://brand.redhat.com/
