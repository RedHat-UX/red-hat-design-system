## Usage
Use a code block to highlight code text only, no other styles should be 
included.

### When to use a code block

If a block of code text needs to be highlighted separate from paragraphs or 
other elements, use a code block.

## Sizes

A code block container can adhere to the width of content within or be fixed 
width.

<uxdot-example width-adjustment="872px">
  <img src="../code-block-sizes.png"
        alt="Image of fluid width and fixed width code block sizes with text labels below"
        width="872"
        height="702">
</uxdot-example>

## Content

The length of code text and the number of lines can change the width and height 
of a code block.

<uxdot-example width-adjustment="872px">
  <img src="../code-block-content.png"
        alt="Image of two code blocks; one code block is fluid width showing only one line and the other code block is fixed width showing 10 lines"
        width="872"
        height="486">
</uxdot-example>


## Responsive design

### Large breakpoints

<uxdot-example width-adjustment="1000px" variant="full" no-border alignment="left">
  <img src="../code-block-breakpoints-large.png"
        alt="Image of code blocks on desktop and tablet breakpoints"
        width="1000"
        height="602">
</uxdot-example>

### Small breakpoints

Container spacing and code text size reduces as breakpoints get smaller.

<uxdot-example width-adjustment="576px" variant="full" no-border alignment="left">
  <img src="../code-block-breakpoints-small.png"
        alt="Image of code blocks on large and small mobile breakpoints"
        width="576"
        height="573">
</uxdot-example>


## Best practices

### Font family

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment="768px">
    <img src="../code-block-best-practices-font-family-do.svg" 
        alt="Code block text using Red Hat Mono"
        width="768"
        height="192">
  </uxdot-example>

  <p>Use <code>--rh-font-family-code</code>.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="768px">
    <img  src="../code-block-best-practices-font-family-dont.svg" 
        alt="Code block text using Red Hat Text"
        width="768"
        height="192">
  </uxdot-example>

  <p>Do not use a different font family token than <code>--rh-font-family-code</code>.</p>
</uxdot-best-practice>

### Customizing

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment="768px">
    <img src="../code-block-best-practices-customizing-do.svg" 
        alt="Code block using default styling"
        width="768"
        height="192">
  </uxdot-example>

  <p>Use the available options for customizing code block. (Adjusting syntax highlighting is ok.)</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="768px">
    <img  src="../code-block-best-practices-customizing-dont.svg" 
        alt="Code block with white background and black border"
        width="768"
        height="192">
  </uxdot-example>

  <p>Do not change the code block styling, especially if it will look like other text containers on the same page.</p>
</uxdot-best-practice>
