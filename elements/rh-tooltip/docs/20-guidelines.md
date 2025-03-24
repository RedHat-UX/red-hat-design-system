## Usage

Use a tooltip as a way for users to see more information before they select an element, go to a new page, or trigger an action on the page.

### Tooltip vs. popover

Both tooltips and [popovers](/elements/popover) provide contextual information for users. However, they differ in a few ways.

#### Tooltip

- Used for brief messages (one or two lines of text)
- Contains only plain text.
- Appears when triggering element receives mouse hover, keyboard focus, or is tapped.
- Has no internal means of dismissal (e.g., a close button).
- Dismissed when triggering element loses hover/focus, or when a touchscreen user taps elsewhere.

#### Popover

- Can be more descriptive than a tooltip.
- Can contain headings, images, and interactive content.
- Appears when triggering button is clicked.
- Has a close button.
- Dismissed when user clicks close button, presses <kbd>esc</kbd>, or clicks/taps outside the popover.

## Content

Content in a tooltip is limited to text only. Consider the following when writing tooltip content.

<uxdot-example color-palette="lightest" width-adjustment="725px">
  <img alt="Various text examples; from left to right, the text length starts very short, but gets longer and longer"
       src="../tooltip-content.png"
       width="725"
       height="173">
</uxdot-example>

### Character count

A tooltip's body text should be short and descriptive.

<rh-table>

| Element | Character count |
|---------|-----------------|
| Body    | 60              |

</rh-table>

## Orientation

The correct orientation of a tooltip depends on the amount of content and browser window. If a tooltip covers up important information or gets cut off, choose a different orientation.

<uxdot-example color-palette="lightest" width-adjustment="546px">
  <img alt="Various orientation examples; from left to right and top to bottom, top, right, bottom, and left"
       src="../tooltip-orientation.png"
       width="546"
       height="253">
</uxdot-example>

## Behavior

When a cursor or focus is moved, the tooltip disappears. On mobile devices, users must tap to trigger a tooltip and then tap again to make it disappear.

<uxdot-example color-palette="lightest" width-adjustment="315px">
  <img alt="Various behavior examples; from top to bottom, how a tooltip behaves when the trigger is hovered, focused, and tapped"
       src="../tooltip-behavior.png"
       width="315"
       height="405">
</uxdot-example>

## Responsive design

A tooltip can generally be used on both large and small breakpoints if the content is not too long.

<uxdot-example color-palette="lightest" width-adjustment="992px" variant="full" alignment="left" no-border>
  <img alt="Examples of a tooltip used on large and small breakpoints"
       src="../tooltip-responsive-design.png"
       width="992"
       height="502">
</uxdot-example>

## Best practices

### White on white

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="202px" slot="image">
      <img alt="Light theme tooltip against a light background"
           src="../tooltip-best-practices-white-on-white-do.svg"
           width="202"
           height="87">
    </uxdot-example>
    <p>Use the tooltip that corresponds with the theme of the container it’s in.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="202px" slot="image">
      <img alt="Dark theme tooltip against a light background"
           src="../tooltip-best-practices-white-on-white-dont.svg"
           width="202"
           height="87">
    </uxdot-example>
    <p>Do not use a dark theme tooltip in light theme environments and vice versa.</p>
  </uxdot-best-practice>
</div>

### Cut off by browser window

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="360px" slot="image">
      <img alt="Tooltip fits in the bounds of a form container"
           src="../tooltip-best-practice-position-do.svg"
           width="360"
           height="308">
    </uxdot-example>
    <p>Place the tooltip so that the whole element is visible.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="360px" slot="image">
      <img alt="Tooltip is cut off by the edge of a form container"
           src="../tooltip-best-practice-position-dont.svg"
           width="360"
           height="308">
    </uxdot-example>
    <p>A tooltip should not be cut off by the browser window. Change the orientation if it does.</p>
  </uxdot-best-practice>
</div>

### Unnecessary pairing

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="85px" slot="image">
      <img alt="Tooltip that says 'Settings' above an icon"
           src="../tooltip-best-practice-pairing-do.svg"
           width="85"
           height="127">
    </uxdot-example>
    <p>Tooltips should be used if a user might need to know more information to understand the page or to complete an action.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="186px" slot="image">
      <img alt="Tooltip that says 'Click here to get started' above a call to action that says 'Get started'"
           src="../tooltip-best-practice-pairing-dont.svg"
           width="186"
           height="127">
    </uxdot-example>
    <p>Do not add a tooltip to interface elements or actions that do not require further explanation.</p>
  </uxdot-best-practice>
</div>
