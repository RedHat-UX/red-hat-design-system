## Style

Breadcrumb navigation is composed of links, text, and caret icons as separators. There are two variants, default and subtle, which differ in text and icon color.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="295px">
    <img alt="Anatomy of breadcrumbs with numbered annotations pointing to various parts"
         src="../breadcrumbs-anatomy.svg"
         width="296"
         height="47">
  </uxdot-example>
  <figcaption>
     <ol>
       <li>Parent page</li>
       <li>Seperator</li>
       <li>Current page</li>
     </ol>
  </figcaption>
</figure>

## Color scheme
<a id="theme"></a>

Breadcrumbs are available for both light and dark color schemes.

<div class="grid xs-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="295px">
    <img src="../breadcrumb-theme-light.svg"
         alt="Light theme breadcrumb with blue links and black text and separators"
         width="296"
         height="21">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="295px">
    <img alt="Dark theme breadcrumb with light blue links and white text and separators"
         src="../breadcrumb-theme-dark.svg"
         width="296"
         height="21">
  </uxdot-example>
</div>

## Placement

Breadcrumbs typically appear above the title of a page and below primary and/or secondary navigation.

<uxdot-example variant="full" width-adjustment="1000px" alignment="left" no-border>
    <img alt="partial view of Red Hat's homepage with primary and secondary navigation above breadcrumb navigation"
         src="../breadcrumb-placement.svg"
         width="1000"
         height="445">
  </uxdot-example>

## Space

The space between parent pages or current pages and the separators is 16px. If a row of breadcrumbs has to wrap, the space between the lines is 8px. This remains the same across all breakpoints.

<uxdot-example color-palette="lightest" width-adjustment="162px">
  <img alt="Diagram of spacing for breadcrumbs"
       src="../breadcrumb-space.svg"
       width="162"
       height="50">
</uxdot-example>

## Interaction States

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

A breadcrumb link turns a darker or lighter shade of the default state’s blue and becomes underlined on hover.

<div class="grid xs-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="295px">
    <img alt="Light theme breadcrumbs with dark blue, underlined links on hover and black text and separators"
         src="../breadcrumb-hover-light.svg"
         width="296"
         height="44">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="295px">
    <img alt="Dark theme breadcrumbs with light blue, underlined links on hover and white text and separators"
         src="../breadcrumb-hover-dark.svg"
         width="296"
         height="44">
  </uxdot-example>
</div>

### Focus

The focus state of a breadcrumb link looks similar to the hover state, but it adds a focus ring around the link.

<div class="grid xs-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="295px">
    <img alt="Light theme breadcrumbs with one dark blue, underlined link in a focus ring"
         src="../breadcrumb-focus-light.svg"
         width="296"
         height="25">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="295px">
    <img alt="Dark theme breadcrumbs with one light blue, underlined link in a focus ring"
         src="../breadcrumb-focus-dark.svg"
         width="296"
         height="25">
  </uxdot-example>
</div>

### Active

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Focus state.</p>
</rh-alert>

<div class="grid xs-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="295px">
    <img alt="Light theme breadcrumbs with one dark blue, underlined link in a focus ring"
         src="../breadcrumb-active-light.svg"
         width="296"
         height="25">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="295px">
    <img alt="Dark theme breadcrumbs with one light blue, underlined link in a focus ring"
         src="../breadcrumb-active-dark.svg"
         width="296"
         height="25">
  </uxdot-example>
</div>



