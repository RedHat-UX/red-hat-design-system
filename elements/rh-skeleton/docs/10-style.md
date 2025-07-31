## Style

A skeleton uses basic shapes to provide a low-fidelity representation of loading content. A gradient animation overlays the shapes to  indicate activity.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="A stack of long bars represent a skeleton group, with both a heading skeleton and three body skeletons. A shape skeleton can be a circle, square, or rectangle."
         src="../skeleton-style-anatomy.svg"
         width="818"
         height="132">
  </uxdot-example>
  <figcaption>
    <ol style="font-size: var(--rh-font-size-body-text-sm, 0.875rem);">
      <li>Heading skeleton</li>
      <li>Body text skeleton group</li>
      <li>Skeleton group</li>
      <li>Shape skeleton</li>
    </ol>
  </figcaption>
</figure>

## Color scheme

Skeletons are available in both light and dark schemes. The shapes use varying opacities of `--rh-color-black` and `--rh-color-white` to make them visible against different background colors.

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

### Types

There are five types of skeletons: body text, heading, circle, square, and rectangle.

<uxdot-example color-palette="lightest">
  <img alt="Body text, heading, circle, square, and rectangle skeletons."
       src="../skeleton-style-types.svg"
       width="600"
       height="308">
</uxdot-example>

### Sizes

Body text and heading skeleton sizes are named based on their corresponding font size tokens, and the sizes range from `xs` to` 2xl`.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>These are the sizes built into the element. However, the sizes can be customized with CSS, as the skeleton is primarily lightDOM-based.</p>
</rh-alert>

<uxdot-example color-palette="lightest">
  <img alt="Site status table shows websites and statuses. Body text skeletons appear in the status column."
       src="../skeleton-style-sizes-text.svg"
       width="664"
       height="595">
</uxdot-example>

The default and only built-in size for shape skeletons sets its height to the value of `--rh-length-4xl`. However, most shape skeletons will need to use a custom size, and any length token or pixel value can be used to change their dimensions.

<uxdot-example color-palette="lightest">
  <img alt="A square skeleton in the default size and one in a larger custom size."
       src="../skeleton-style-sizes-shapes.svg"
       width="302"
       height="178">
</uxdot-example>

## Space

The space between body text skeletons is `--rh-space-xs`. Otherwise, spacing should be based on the structure of the page or section.

<uxdot-example color-palette="lightest">
  <img alt="A stack of three text skeletons with four-pixel spacers in between each skeleton"
       src="../skeleton-style-space.svg"
       width="600"
       height="80">
</uxdot-example>

## Interaction states

A skeleton is intentionally not operable or navigable and has no interaction states.
