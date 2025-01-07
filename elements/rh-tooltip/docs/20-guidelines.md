## Usage 

Use a tooltip as a way for users to see more information before they select an element, go to a new page, or trigger an action on the page.


### Tooltip vs. popover 

A tooltip and [Popover](/elements/popover) provide more information in context for users. However, they are different in the following ways.

- A tooltip is used for simple communication purposes while a popover is more descriptive
- Content in a tooltip is generally shorter while content in a popover can be longer and include a heading, images, or links
- A tooltip is triggered on hover (or a tap on mobile devices) while a popover is triggered by a click


## Content 

Content in a tooltip is limited to text only. Consider the following when writing tooltip content.

<uxdot-example width-adjustment="725px">
  <img src="../tooltip-content.png"
        alt="Various text examples; from left to right, the text length starts very short, but gets longer and longer"
        width="725"
        height="173">
</uxdot-example>


### Character count

A tooltip's body text should be short and descriptive.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Body</td>
        <td data-label="Character count">60</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Orientation 

The correct orientation of a tooltip depends on the amount of content and browser window. If a tooltip covers up important information or gets cut off, choose a different orientation.

<uxdot-example width-adjustment="546px">
  <img src="../tooltip-orientation.png"
        alt="Various orientation examples; from left to right and top to bottom, top, right, bottom, and left"
        width="546"
        height="253">
</uxdot-example>


## Behavior 

When a cursor or focus is moved, the tooltip disappears. On mobile devices, users must tap to trigger a tooltip and then tap again to make it disappear.

<uxdot-example width-adjustment="315px">
  <img src="../tooltip-behavior.png"
        alt="Various behavior examples; from top to bottom, how a tooltip behaves when the trigger is hovered, focused, and tapped"
        width="315"
        height="405">
</uxdot-example>


## Responsive design 

A tooltip can generally be used on both large and small breakpoints if the content is not too long.

<uxdot-example width-adjustment="992px" variant="full" alignment="left" no-border>
  <img src="../tooltip-responsive-design.png"
        alt="Examples of a tooltip used on large and small breakpoints"
        width="992"
        height="502">
</uxdot-example>


## Best practices 

### White on white 

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="202px" slot="image">
      <img src="../tooltip-best-practices-white-on-white-do.svg"
            alt="Light theme tooltip against a light background"
            width="202"
            height="87">
    </uxdot-example>
    <p>Use the tooltip that corresponds with the theme of the container it’s in.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="202px" slot="image">
      <img src="../tooltip-best-practices-white-on-white-dont.svg"
            alt="Dark theme tooltip against a light background"
            width="202"
            height="87">
    </uxdot-example>
    <p>Do not use a dark theme tooltip in light theme environments and vice versa.</p>
  </uxdot-best-practice>
</div>


### Cut off by browser window 

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="360px" slot="image">
      <img src="../tooltip-best-practice-position-do.svg"
            alt="Tooltip fits in the bounds of a form container"
            width="360"
            height="308">
    </uxdot-example>
    <p>Place the tooltip so that the whole element is visible.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="360px" slot="image">
      <img src="../tooltip-best-practice-position-dont.svg"
            alt="Tooltip is cut off by the edge of a form container"
            width="360"
            height="308">
    </uxdot-example>
    <p>A tooltip should not be cut off by the browser window. Change the orientation if it does.</p>
  </uxdot-best-practice>
</div>


### Unnecessary pairing 

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="85px" slot="image">
      <img src="../tooltip-best-practice-pairing-do.svg"
            alt="Tooltip that says 'Settings' above an icon"
            width="85"
            height="127">
    </uxdot-example>
    <p>Tooltips should be used if a user might need to know more information to understand the page or to complete an action.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="186px" slot="image">
      <img src="../tooltip-best-practice-pairing-dont.svg"
            alt="Tooltip that says 'Click here to get started' above a call to action that says 'Get started'"
            width="186"
            height="127">
    </uxdot-example>
    <p>Do not add a tooltip to interface elements or actions that do not require further explanation.</p>
  </uxdot-best-practice>
</div>
