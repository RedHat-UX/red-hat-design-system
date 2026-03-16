## Guidelines

Use a code block to visually separate code text from other content on the page.

## Writing content

The length of code and number of lines will change the width and height of a code block.

<rh-alert state="warning">
  <h3 slot="header">Warning</h3>
  <p>The toggle overflow/toggle word wrapping and expand/collapse buttons are not visible when there is minimal amounts of code text.</p>
</rh-alert>

<uxdot-example width-adjustment="1012px">
  <img alt="Two code blocks; one code block is fluid width showing only one line and the other code block is fixed width with seven lines showing as an expanded code block."
       src="../code-block-guidelines-writing-content.svg"
       width="1012"
       height="376">
</uxdot-example>

## Behavior

### Expanding/collapsing

When the expand/collapse button is selected, a code block expands to reveal the **rest of the code text in its entirety**. A code block must include at least 5 lines of code text in order for this feature to be activated.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>A code block is collapsed by default when the expand/collapse button becomes visible.</p>
</rh-alert>

<uxdot-example width-adjustment="1012px">
  <img alt="Two code blocks. One showing four lines and is collapsed. The other expanded showing 1-100 lines, with middle lines omitted so the image isn't huge."
       src="../code-block-guidelines-behavior.svg"
       width="1012"
       height="504">
</uxdot-example>

## Responsive design

A code block switches to the Compact size on mobile breakpoints.

<uxdot-example width-adjustment="1140px" variant="full" no-border alignment="left">
  <img alt="Code blocks on desktop, tablet, and mobile breakpoints"
       src="../code-block-guidelines-responsive-design.svg"
       width="1140"
       height="1092">
</uxdot-example>

## Best practices

### Customizing code text

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image">
      <img src="../code-block-guidelines-best-practice-1-do.svg"
        alt="A code block with the default syntax highlighting."
        width="482"
        height="232">
    </uxdot-example>
    <p>Customize code text using syntax highlighting only.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image">
      <img src="../code-block-guidelines-best-practice-1-dont.svg"
        alt="A black and white code block with no background color, no syntax highlighting, and a solid black border."
        width="482"
        height="232">
    </uxdot-example>
    <p>Do not change other code block styles.</p>
  </uxdot-best-practice>
</div>
