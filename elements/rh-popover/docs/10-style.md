## Style

A popover should include text and interactive elements like a close button and
links.

<uxdot-example width-adjustment="538px">
  <img alt="Popover component blueprint"
       src="../popover-style.svg"
       width="538"
       height="252">
</uxdot-example>


### Variants

**Black and white** are the two popover variants available for use depending
on the content and color of the background.

<rh-alert state="warning">
 <h4 slot="header">Warning</h4>
  <p>A heading does not need to be included, but if links are not included either, use a <a href="/elements/tooltip">Tooltip</a> component instead.</p>
</rh-alert>

<div class="grid sm-two-columns">
  <figure>
    <figcaption>
      <h4>Black </h4>
      <p>Use on light background.</p>
    </figcaption>
    <uxdot-example width-adjustment="392px" variant="full" no-border>
      <img alt="Popover component, black variant"
           src="../popover-black.svg"
           width="405"
           height="214">
    </uxdot-example>
  </figure>
  <figure>
    <figcaption>
      <h4>White</h4>
      <p>Use on dark background.</p>
    </figcaption>
    <uxdot-example width-adjustment="392px" variant="full" no-border>
      <img alt="Popover component, white variant"
           src="../popover-white.svg"
           width="392"
           height="214">
    </uxdot-example>
  </figure>
  <figure>
    <figcaption><h4>With heading</h4></figcaption>
    <p>Use for messages that require a heading.</p>
    <uxdot-example width-adjustment="392px" variant="full" no-border>
      <img alt="Popover component, with heading variant"
           src="../popover-with-heading.svg"
           width="405"
           height="214">
    </uxdot-example>
  </figure>
  <figure>
    <figcaption>
      <h4>Without heading</h4>
      <p>Use for messages that do not require a heading.</p>
    </figcaption>
    <uxdot-example width-adjustment="392px" variant="full" no-border>
      <img alt="Popover component, without heading variant"
           src="../popover-without-heading.svg"
           width="405"
           height="180">
    </uxdot-example>
  </figure>
  <figure>
    <figcaption>
      <h4>With drop shadow</h4>
      <p>A drop shadow gives a popover subtle elevation above light backgrounds.</p>
    </figcaption>
    <uxdot-example width-adjustment="392px" variant="full" no-border>
      <img alt="Popover component, with drop shadow variant"
           src="../popover-with-drop-shadow.svg"
           width="405"
           height="124">
    </uxdot-example>
  </figure>
  <figure>
    <figcaption>
      <h4>Without drop shadow</h4>
      <p>A drop shadow cannot be seen on dark backgrounds, so it is not included.</p> 
    </figcaption>
    <uxdot-example width-adjustment="392px" variant="full" no-border>
      <img alt="Popover component, without drop shadow variant"
           src="../popover-without-drop-shadow.svg"
           width="392"
           height="124">
    </uxdot-example>
  </figure>
</div>


## Color scheme
<a id="theme"></a>

For popovers and [tooltips](/elements/tooltip),
the themes are inverted. For example, light scheme popovers are **black* and
should be used on light backgrounds; dark scheme popovers are **white** and
should be used on dark backgrounds.

### Black (light backgrounds)

<uxdot-example width-adjustment="392px">
  <img alt="Popover component, light theme"
       src="../popover-theme-light.svg"
       width="405"
       height="214">
</uxdot-example>


### White (dark backgrounds)

<uxdot-example color-palette="darkest" width-adjustment="392px">
  <img alt="Popover component, dark theme"
       src="../popover-theme-dark.svg"
       width="392"
       height="214">
</uxdot-example>


## Responsive design

A popover has the same proportions and spacing on both large and small
screens.

### Large screens

<uxdot-example width-adjustment="1000px" variant="full" no-border alignment="left">
  <img alt="Popover component responsive design, large screens"
       src="../popover-responsive-design-lg.svg"
       width="1000"
       height="268">
</uxdot-example>


### Small screens

<uxdot-example width-adjustment="360px" variant="full" no-border alignment="left">
  <img alt="Popover component responsive design, small screens"
       src="../popover-responsive-design-sm.svg"
       width="373"
       height="268">
</uxdot-example>


## Spacing

Each popover orientation contains the same amount of spacing in between the component and icon.

<uxdot-example palette="lightest" width-adjustment="392px">
  <img alt="Popover component spacing"
       src="../popover-spacing.svg"
       width="405"
       height="236">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg, xl"></uxdot-spacer-tokens-table>
