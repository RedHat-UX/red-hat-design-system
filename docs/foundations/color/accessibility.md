---
title: Accessibility
heading: Color
sidenavTitle: Color
layout: layouts/pages/has-toc.njk
permalink: /foundations/color/accessibility/index.html
tags:
  - color
subnav:
  collection: sortedColor
  order: 3
---

<link data-helmet rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">

<script data-helmet type="module">
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-table/rh-table.js';
</script>

<style data-helmet>
  .pass { color: var(--rh-color-status-success); }
  .fail { color: var(--rh-color-status-danger); }
  figcaption { 
    margin-block-start: var(--rh-space-lg);
    color: var(--rh-color-text-secondary-on-light);
    font-size: var(--rh-font-size-body-text-sm);
  }
</style>

## Approach

At our core, we believe in creating interactions and experiences that are inclusive. This means ensuring that all Red Hat digital properties are accessible to everyone.

## Using color alone

When considering methods of communication or feedback, do not rely solely upon color. Use text, icons, underlines, or other visual cues to communicate meaning.

Consider how these elements might look to a color blind user:

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="1012px">
    <img alt="Dialog with a gray leave button, a form field with a gray bottom border, and progress steps in gray without labels" src="/assets/color/color-a11y-using-color-alone.svg">
  </uxdot-example>
  <figcaption>
    A simulation of what a color blind user might see when only color is used to communicate meaning.
  </figcaption>
</figure>

Note that the emphasis here is on "solely," as we often do use color to enhance the visual design of our digital experiences. As stated in the [WCAG criterion on color usage](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html), "This should not in any way discourage the use of color on a page, or even color coding if it is complemented by other visual indication."

## Color contrast

### Body and code text

Foreground body and code text (non-bold text **under 24px** and bold text
**under 19px**) must have a contrast ratio of 4.5:1. Large foreground body and
code text (non-bold text of **at least 24px** and bold text of **at least
19px**) must have a contrast ratio of 3:1.

<uxdot-example width-adjustment=”100%” variant="full" alignment="left" no-border>
  <img alt="Two examples of dark text on light backgrounds and two examples of light text on dark backgrounds" 
       src="/assets/color/color-a11y-color-contrast-body-code-text.svg">
</uxdot-example>

### Red text on backgrounds

Red is our primary brand color. It has many applications, but on the web, it does not pass color contrast against all background colors, especially text at small sizes.

If red text cannot be used, use dark gray or black text against lighter backgrounds, or light gray or white text against darker backgrounds. If you have questions about using our other red colors, contact the Brand team.

<uxdot-example width-adjustment=”100%” variant="full" alignment="left" no-border>
  <img alt="Several examples of red text over light and dark themed backgrounds showing some that pass and some that fail. There is also an example of dark gray text and black text against a light background as well as an example of light gray text and white text on a dark background." src="/assets/color/color-a11y-red-text-on-bgs.svg">
</uxdot-example>

#### Red text WCAG requirements

WCAG 2.2 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. The standard also requires a contrast ratio of at least 3:1 for graphics and UI elements like form input borders. Use the table below to confirm you are using color contrast correctly before using red text.

The font sizes that are considered normal and large are as follows:

- **Normal** - non-bold text under 18pt/24px and bold text under 14pt/19px
- **Large** - non-bold text of at least 18pt/24px and bold text of at least 14pt/19px

{% macro p(content='WCAG AA: Pass') %}<span class="pass">{{ content }}</span>{% endmacro %}
{% macro f(content='WCAG AA: Fail') %}<span class="fail">{{ content }}</span>{% endmacro %}

<rh-table>

| Background color      | Contrast ratio | Normal text | Large text | Objects and UI elements |
| --------------------- | -------------- | ----------- | ---------- | ----------------------- |
| `white` (`#fff`)      | {{ p(4.35) }}  | {{ p() }}   | {{ p() }}  | {{ p() }}               |
| `gray-10` (`#f2f2f2`) | {{ p(4.04) }}  | {{ f() }}   | {{ p() }}  | {{ p() }}               |
| `gray-20` (`#e0e0e0`) | {{ f(3.43) }}  | {{ f() }}   | {{ p() }}  | {{ p() }}               |
| `gray-70` (`#383838`) | {{ f(2.58) }}  | {{ f() }}   | {{ f() }}  | {{ f() }}               |
| `gray-80` (`#292929`) | {{ f(3.21) }}  | {{ f() }}   | {{ p() }}  | {{ p() }}               |
| `gray-90` (`#1f1f1f`) | {{ f(3.63) }}  | {{ f() }}   | {{ p() }}  | {{ p() }}               |
| `gray-95` (`#151515`) | {{ f(4.03) }}  | {{ f() }}   | {{ p() }}  | {{ p() }}               |
| `black` (`#000`)      | {{ p(4.63) }}  | {{ p() }}   | {{ p() }}  | {{ p() }}               |

</rh-table>

### Links

To differentiate text links from their surrounding text without relying on color
contrast, links in all states must be underlined. Links isolated within visually
distinct sections (like navigation menus) or links with additional visual cues (like call to action arrows) are **exempt from this requirement**, although you can still add
underlines at your discretion.

<uxdot-example width-adjustment="797px">
  {% include './color-a11y-color-contrast-links.svg' %}
</uxdot-example>

### Graphical objects and UI elements

Graphical objects and UI elements like charts and infographics should have a
contrast ratio of at least 3:1. If color is the only way to distinguish between
inline controls and surrounding text, the contrast ratio between the control and
text must be at least 3:1.

- Non-color cues like borders must be used to signify when an element receives
  focus

### Layering

You can layer colors on light or dark backgrounds. However, layering colors on top of other colors will cause vibration. For more information about layering colors, follow [WCAG 2.2 AA][wcag22aa] requirements.

<uxdot-example width-adjustment=”1140px” variant="full" alignment="left" no-border>
  <img alt="Red call to action on a white background, blue button on a light gray background, and a light red-orange button on a black background"
       src="/assets/color/color-a11y-color-contrast-layering.svg">
</uxdot-example>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[brandteam]: https://www.redhat.com/en/about/brand/standards
[wcag22aa]: https://www.w3.org/WAI/WCAG22/Understanding/
