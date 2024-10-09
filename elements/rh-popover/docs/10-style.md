## Style

A popover should include text and interactive elements like a close button and
links.

<uxdot-example width-adjustment="538px">
  <img src="../popover-style.svg"
        alt="Popover component blueprint"
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
      <img src="../popover-black.svg"
        alt="Popover component, black variant"
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
      <img src="../popover-white.svg"
        alt="Popover component, white variant"
        width="392"
        height="214">
    </uxdot-example>
  </figure>
  <figure>
    <figcaption><h4>With heading</h4></figcaption>
    <p>Use for messages that require a heading.</p>
    <uxdot-example width-adjustment="392px" variant="full" no-border>
      <img src="../popover-with-heading.svg"
        alt="Popover component, with heading variant"
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
      <img src="../popover-without-heading.svg"
        alt="Popover component, without heading variant"
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
      <img src="../popover-with-drop-shadow.svg"
        alt="Popover component, with drop shadow variant"
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
      <img src="../popover-without-drop-shadow.svg"
        alt="Popover component, without drop shadow variant"
        width="392"
        height="124">
    </uxdot-example>
  </figure>
</div>


## Theme

For popovers and [tooltips](/elements/tooltip),
the themes are inverted. For example, light theme popovers are **black* and
should be used on light backgrounds; dark theme popovers are **white** and
should be used on dark backgrounds.

### Black (light backgrounds)

<uxdot-example width-adjustment="392px">
  <img src="../popover-theme-light.svg"
        alt="Popover component, light theme"
        width="405"
        height="214">
</uxdot-example>


### White (dark backgrounds)

<uxdot-example color-palette="darkest" width-adjustment="392px">
  <img src="../popover-theme-dark.svg"
        alt="Popover component, dark theme"
        width="392"
        height="214">
</uxdot-example>


## Responsive design

A popover has the same proportions and spacing on both large and small
screens.

### Large screens

<uxdot-example width-adjustment="1000px" variant="full" no-border alignment="left">
  <img src="../popover-responsive-design-lg.svg"
        alt="Popover component responsive design, large screens"
        width="1000"
        height="268">
</uxdot-example>


### Small screens

<uxdot-example width-adjustment="360px" variant="full" no-border alignment="left">
  <img src="../popover-responsive-design-sm.svg"
        alt="Popover component responsive design, small screens"
        width="373"
        height="268">
</uxdot-example>


## Spacing

Each popover orientation contains the same amount of spacing in between the component and icon.

<uxdot-example palette="lightest" width-adjustment="392px">
  <img src="../popover-spacing.svg"
        alt="Popover component spacing"
        width="405"
        height="236">
</uxdot-example>

<rh-table>
 {% spacerTokensTable
    caption='',
    headingLevel="3",
    tokens="--rh-space-lg, --rh-space-xl" %}
 {% endspacerTokensTable %}
</rh-table>
