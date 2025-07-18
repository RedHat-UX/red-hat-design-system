## Style

Primary navigation includes our brand logo or hat and groups of menus and links in a container that spans the width of the browser window.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="A stack of long bars represent a text skeleton group, with each bar defined as a text skeleton. A shape skeleton can be a circle, square, or rectangle."
         src="../skeleton-style-anatomy.svg"
         width="1012"
         height="103">
  </uxdot-example>
  <figcaption>
    <ol style="font-size: var(--rh-font-size-body-text-sm, 0.875rem);">
      <li>Text skeleton</li>
      <li>Text skeleton group</li>
      <li>Shape skeleton</li>
    </ol>
  </figcaption>
</figure>

## Color scheme

Skeletons are available in both light and dark schemes.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>It is recommended to match color schemes. For example, if you are working in a section with a dark background, use the dark color scheme skeleton.</p>
</rh-alert>

### Light scheme

<uxdot-example color-palette="lightest">
  <img alt="When used over a light background, a text skeleton group and a rectangle skeleton are filled with a light gray gradient."
       src="../skeleton-style-scheme-light.svg"
       width="600"
       height="173">
</uxdot-example>

### Dark scheme

<uxdot-example color-palette="darkest">
  <img alt="When used over a dark background, a text skeleton group and a rectangle skeleton are filled with a dark gray gradient."
       src="../skeleton-style-scheme-dark.svg"
       width="600"
       height="173">
</uxdot-example>

## Configuration

### Sizes

Text skeleton sizes range from `xs` to `6xl`.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>These are the sizes built into the element. However, the sizes can be customized with CSS, as the skeleton is primarily lightDOM-based.</p>
</rh-alert>

<uxdot-example color-palette="lightest">
  <img alt="Ten rectangular skeletons in two columns with sizes varying from xs to 6xl."
       src="../skeleton-style-sizes-text.svg"
       width="648"
       height="441">
</uxdot-example>

Shape skeletons are available in `sm`, `md`, and `lg` sizes. However, their sizes can be easily customized if necessary.

<uxdot-example color-palette="lightest">
  <img alt="Three square skeletons, sm, md, and large."
       src="../skeleton-style-sizes-shapes.svg"
       width="320"
       height="157">
</uxdot-example>

### Types

There are four types of skeletons: text, circle, square, and rectangle.

<uxdot-example color-palette="lightest">
  <img alt="A full width text skeleton over top of a circle, square, and rectangle skeleton."
       src="../skeleton-style-types.svg"
       width="600"
       height="194">
</uxdot-example>

## Space

The space between text skeletons is `--rh-space-xs`. Otherwise, spacing should be based on the structure of the page or section.

<uxdot-example color-palette="lightest">
  <img alt="A stack of three text skeletons with four-pixel spacers in between each skeleton"
       src="../skeleton-style-space.svg"
       width="600"
       height="80">
</uxdot-example>

## Interaction states

A skeleton is intentionally not operable or navigable and has no interaction states.
