## Usage
Use a code block to highlight code text only, no other styles should be 
included.

### When to use a code block

If a block of code text needs to be highlighted separate from paragraphs or 
other elements, use a code block.

## Sizes

A code block container can adhere to the width of content within or be fixed 
width.

{% example palette="lightest",
           alt="Image of fluid width and fixed width code block sizes with text labels below",
           src="../code-block-sizes.png" %}{% endexample %}

## Content

The length of code text and the number of lines can change the width and height 
of a code block.

{% example palette="lightest",
           alt="Image of two code blocks; one code block is fluid width showing only one line and the other code block is fixed width showing 10 lines",
           src="../code-block-content.png" %}{% endexample %}

<hgroup>

  ## Responsive design
  ### Large breakpoints

</hgroup>

{% example palette="none",
           alt="Image of code blocks on desktop and tablet breakpoints",
           src="../code-block-breakpoints-large.png" %}{% endexample %}

### Small breakpoints

Container spacing and code text size reduces as breakpoints get smaller.

{% example palette="none",
           alt="Image of code blocks on large and small mobile breakpoints",
           src="../code-block-breakpoints-small.png" %}{% endexample %}

<hgroup>

  ## Best practices
  ### Different font

</hgroup>

Do not use a different font than `--rh-font-family-code`.

{% example palette="wrong",
           alt="Image of a code block showing the Red Hat Text font used for code text which is incorrect usage",
           src="../code-block-best-practice-1.png" %}{% endexample %}

### Different styling

Do not change any of the code block styling.

{% example palette="wrong",
           alt="Image of a code block showing different styles which is incorrect usage",
           src="../code-block-best-practice-2.png" %}{% endexample %}
