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
  <img src="../tooltip-content.png" alt="Various text examples; from left to right, the text length starts very short, but gets longer and longer">
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
  <img src="../tooltip-orientation.png" alt="Various orientation examples; from left to right and top to bottom, top, right, bottom, and left">
</uxdot-example>


## Behavior 

When a cursor or focus is moved, the tooltip disappears. On mobile devices, users must tap to trigger a tooltip and then tap again to make it disappear.

<uxdot-example width-adjustment="315px">
  <img src="../tooltip-behavior.png" alt="Various behavior examples; from top to bottom, how a tooltip behaves when the trigger is hovered, focused, and tapped">
</uxdot-example>


## Responsive design 

A tooltip can generally be used on both large and small breakpoints if the content is not too long.

<uxdot-example width-adjustment="992px" variant="full" alignment="left" no-border>
  <img src="../tooltip-responsive-design.png" alt="Examples of a tooltip used on large and small breakpoints">
</uxdot-example>


## Best practices 

### White on white 

Do not use a dark theme tooltip in light theme environments.

<uxdot-example width-adjustment="199px" danger>
  <img src="../tooltip-best-practice-1.png" alt="A dark theme or white tooltip used on a white background is incorrect usage">
</uxdot-example>


### Cut off by browser window 

A tooltip should not be cut off by the browser window. Change the orientation if it does.

<uxdot-example width-adjustment="360px" danger>
  <img src="../tooltip-best-practice-2.png" alt="If using the top orientation will cause the tooltip to get cut off, that is incorrect usage">
</uxdot-example>


### Unnecessary pairing 

Do not add a tooltip to interface elements or actions that do not require further explanation.

<uxdot-example width-adjustment="205px" danger>
  <img src="../tooltip-best-practice-3.png" alt="Pairing a tooltip with an element that already has adequate descriptive text is incorrect usage">
</uxdot-example>
