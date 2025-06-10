## Guidelines

Use a code block to visually separate code text from other content on the page.

## Sizes

A code block can adhere to the width of code text or be a fixed width.

<uxdot-example width-adjustment="800px">
  <img alt="One horizontally shorter and one horizontally longer code block. Both have identical content."
       src="../code-block-guidelines-sizes.svg"
       width="800"
       height="416">
</uxdot-example>

## Writing content

The length of code and number of lines will change the width and height of a code block.

<uxdot-example width-adjustment="800px">
  <img alt="two code blocks; one code block is fluid width showing only one line and the other code block is fixed width showing 10 lines"
       src="../code-block-guidelines-writing-content.svg"
       width="800"
       height="416">
</uxdot-example>

## Responsive design

A code block does not change much as screens get smaller.

<uxdot-example width-adjustment="1140px" variant="full" no-border alignment="left">
  <img alt="Code blocks on desktop, tablet, and mobile breakpoints"
       src="../code-block-guidelines-responsive-design.svg"
       width="1140"
       height="640">
</uxdot-example>

## Best practices

### Font family

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image">
      <img src="../code-block-guidelines-best-practice-1-do.svg"
        alt="A code block with the default red hat code font family"
        width="418"
        height="256">
    </uxdot-example>
    <p>Always use the <code>--rh-font-family-code</code> token.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image">
      <img src="../code-block-guidelines-best-practice-1-dont.svg"
        alt="A code block with a non-monospaced font with tighter letter spacing"
        width="418"
        height="256">
    </uxdot-example>
    <p>Do not use a different font family.</p>
  </uxdot-best-practice>
</div>

### Customizing

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image">
      <img src="../code-block-guidelines-best-practice-2-do.svg"
        alt="A code block with a block of HTML that is syntax highlighted"
        width="418"
        height="256">
    </uxdot-example>
    <p>Customize code text using syntax highlighting only.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image">
      <img src="../code-block-guidelines-best-practice-2-dont.svg"
        alt="A code block with a white background and black borders."
        width="418"
        height="256">
    </uxdot-example>
    <p>Do not change other code block styles.</p>
  </uxdot-best-practice>
</div>
