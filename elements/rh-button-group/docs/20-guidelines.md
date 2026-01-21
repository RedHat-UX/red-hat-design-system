## Usage

Use a button group to arrange each button as a separate element with a gap between them. On small screens, buttons are arranged vertically.

### Number of buttons
To reduce [cognitive load](https://www.nngroup.com/articles/minimize-cognitive-load/) and avoid visual clutter, use three buttons maximum.

<uxdot-example color-palette="lightest" width-adjustment="680px">
  <img alt="Examples of button group usage showing correct and incorrect number of buttons." 
    src="../button-group-usage-number-of-buttons.svg" width="680" 
    height="211" />
</uxdot-example>

## Writing content

For help with writing button content and character count guidance, go to the [Writing content](/elements/button/guidelines/#writing-content) section on the Buttons page.

## Layout

### Placement
Button groups can be placed in dialogs, forms, wizards, and more. Button groups in these elements should always be aligned left.

### Hierarchy
It is important to establish visual hierarchy between buttons in your designs. Buttons in groups are most often ordered from left to right with the primary action on the left.

<uxdot-example color-palette="lightest" width-adjustment="680px">
  <img alt="Diagram showing button hierarchy in groups." 
    src="../button-group-layout-hierarchy-1.svg" width="680" 
    height="211" />
</uxdot-example>

When it comes to wizards and other similar elements, the primary action is the **Next** button in the middle of the group.

<uxdot-example color-palette="lightest" width-adjustment="680px">
  <img alt="Example of a button group in a wizard."
    src="../button-group-layout-hierarchy-2.svg" width="680" 
    height="211" />
</uxdot-example>

## Best practices

### Too many buttons

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="454px" slot="image">
      <img alt="A group with three buttons." 
        src="../button-group-best-practice-1-do.svg"
        width="454"
        height="135">
    </uxdot-example>
    <p>Use three buttons max per group.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="454px" slot="image">
      <img alt="A group with six buttons, which is too many." 
        src="../button-group-best-practice-1-dont.svg"
        width="454"
        height="135">
    </uxdot-example>
    <p>Do not use more than three buttons in a group.</p>
  </uxdot-best-practice>
</div>

### Too many variants

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="454px" slot="image">
      <img alt="A button group with one primary button and two secondary buttons." 
        src="../button-group-best-practice-2-do.svg"
        width="454"
        height="135">
    </uxdot-example>
    <p>Use one primary variant only mixed with other variants.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="454px" slot="image">
      <img alt="A button group with two primary buttons, which is incorrect." 
        src="../button-group-best-practice-2-dont.svg"
        width="454"
        height="135">
    </uxdot-example>
    <p>Do not use more than one primary variant in a button group.</p>
  </uxdot-best-practice>
</div>
