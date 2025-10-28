---
title: Focus indicators
heading: Interactions
sidenavTitle: Interactions
layout: layouts/pages/has-toc.njk
permalink: /foundations/interactions/focus-indicators/index.html
tags:
  - interactions
subnav:
  collection: sortedInteractions
  order: 3
---

<link rel="stylesheet" 
      href="/path/to/rh-code-block/rh-code-block-lightdom.css"
      data-helmet>

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-table/rh-table.js';
  import "@uxdot/elements/uxdot-pattern.js";
</script>


## Focus indicator styles

Focus styles visually indicate when interactive elements like links and buttons are selected (usually via keyboard) and ready to receive input. **All interactive elements are required** to have a [visible focus indicator](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) to conform with the Web Content Accessibility Guidelines (WCAG).

To view keyboard focus states on a computer, open a web page in your browser and start pressing the <kbd>Tab</kbd> key. You will likely see the interactive elements on that page display some sort of indicator (e.g. an outline) as you navigate each of them.

 <img src="./focus-indicator-demo.svg" alt="In-context paragraph demo of our focus indicator style" style="max-width: 100%;">

## How we style focus

Users who depend on focus indicators need styles that are **clear and consistent**, so they always know where they are in an experience. Our focus styles align with our [brand standards](https://www.redhat.com/en/about/brand/standards) and the latest [WCAG guidance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance).

When focus is applied to an interactive element, we apply an outline that:

- is solid (not dashed or dotted).
- is 3px thick.
- is offset from the element by 3px.
- has 3:1 or greater contrast from the background colors just outside and inside of it.
- temporarily disables any transition animations on the element (so entering or exiting the focus state is not distracting).


### Basic CSS

In CSS terms, here is some minimal code that meets these requirements:

```css rh-code-block
:is(*, :hover):focus-visible {
  outline-color: light-dark(--rh-color-blue-50, --rh-color-blue-30);
  outline-offset: 3px;
  outline-style: solid;
  outline-width: 3px;
  transition: none; 
}
```

### Styling options

Adjust the offset as needed. If an offset risks overflowing the focus ring outside the boundary of a page or the visible edge of a region, that offset can be removed or even made inset (see the example CSS below).

We have designated focus ring colors that align with our brand standards for both light and dark schemes.

<rh-table>
  <table>
    <colgroup>
      <col>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Property</th>
        <th scope="col">Light scheme</th>
        <th scope="col">Dark scheme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Focus ring color</td>
        <td><code>--rh-color-blue-50</code></td>
        <td><code>--rh-color-blue-30</code></td>
      </tr>
    </tbody>
  </table>
</rh-table>


#### Styling considerations

Note that there may be cases where a focus ring appears against a light background in dark mode and vice versa. For example, an inset focus ring for a text field may appear against a white background, even in dark mode. In these cases, you may need to manually override the default dark scheme ring color (<code>--rh-color-blue-30</code>) with the light scheme color (<code>--rh-color-blue-50</code>).

<img src="./focus-styling-considerations-demo.png" alt="Demo of how inset ring colors should be set based on their background color and not the page theme" style="max-width: 100%;">


## Example CSS
```css rh-code-block
:is(*, :hover):focus-visible {
  outline-color: light-dark(--rh-color-blue-50, --rh-color-blue-30);
  outline-offset: 3px;
  outline-style: solid;
  outline-width: 3px;
  transition: none; 
}

/* Placeholder `.inset` class for inset focus. */
.inset:is(*, :hover):focus-visible {
  outline-offset: -7px;
}

/* Placeholder `.no-offset` class for focus on element border. */
.no-offset:is(*, :hover):focus-visible {
  outline-offset: 0;
}

/* Placeholder `.light-bg` class for focus against light backgrounds. */
.light-bg:is(*, :hover):focus-visible {
  outline-color: --rh-color-blue-50;
}

/* Placeholder `.dark-bg` class for focus against dark backgrounds. */
.dark-bg:is(*, :hover):focus-visible {
  outline-color: --rh-color-blue-30;
}

:focus:not(:focus-visible) {
  outline: none;
}
```

### Technical notes on the CSS

- We use the <code>color-scheme</code> property on our websites, which allows us to use the <code>light-dark()</code> function. If your website does not use <code>color-scheme</code>, you can separate out the dark mode focus ring color into another selector or query. The good news is that, even if you do not have a <code>color-scheme</code> and you do not account for this, the fallback ring color of <code>--rh-color-blue-50</code> is **WCAG conformant** against both our dark and light backgrounds.
- The <code>:is(*, :hover)</code> pseudo-class prevents potential hover state style conflicts from making the focus outline disappear, for cases where an element has both keyboard focus and mouse cursor hover.
- WCAG 2.2 requires 2px outlines for AAA conformance when focus is offset. However, **inset** focus must be greater than 2px. So, for the sake of consistency, we go with 3px in **all cases**.
- We add a <code>transition: none</code> property to **temporarily remove any animations** that may be on the element, so the focus ring appearance does not animate.
- Inset focus rings receive a negative <code>outline-offset</code> just large enough to leave some whitespace between the ring and the border of the element.
- Note that we prefer <code>:focus-visible</code> to <code>:focus</code>. **Avoid using the latter**. In fact, our code above disables the latter.


## Best Practices


### Custom focus indicator styles

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <img src="./focus-do.svg" slot="image" alt="Several examples of acceptable focus outlines"  style="max-width: 100%;">
    <p>Always use the default focus indicator styles.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <img src="./focus-dont.svg" slot="image" alt="A selection of unacceptable focus styles: outlines not matching our standard, background color changes, etc."  style="max-width: 100%;">
    <p>Do not create custom focus styles.</p>
  </uxdot-best-practice>
</div>