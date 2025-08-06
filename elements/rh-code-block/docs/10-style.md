## Style

A code block displays read-only code-formatted text within a flexible container.

### Anatomy

<figure>
  <uxdot-example width-adjustment="503px">
    <img src="../code-block-style-anatomy.svg"
         alt="Code block anatomy showing six annotations. See figcaption below for more information."
         width="503"
         height="192">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Line numbers</li>
      <li>Code text</li>
      <li>Copy button</li>
      <li>Wrap button</li>
      <li>Expand/collapse</li>
      <li>Container</li>
    </ol>
  </figcaption>
</figure>

## Color scheme

Code block is available for both light and dark color schemes.

### Light scheme

<uxdot-example color-palette="lightest" width-adjustment="503px">
  <img src="../code-block-style-scheme-light.svg"
       alt="Light scheme code block has a gray background and black text"
       width="503"
       height="192">
</uxdot-example>


### Dark scheme

<uxdot-example color-palette="darkest" width-adjustment="503px">
  <img src="../code-block-style-scheme-dark.svg"
       alt="Dark scheme code block has a dark gray background thats slightly lighter than black and white text"
       width="503"
       height="192">
</uxdot-example>

## Variants

### Line numbers

A code block may or may not show line numbers.

<uxdot-example width-adjustment="495px">
  <img src="../code-block-style-variants-line-numbers.svg"
       alt="Two code blocks. One with and one without line numbers."
       width="495"
       height="416">
</uxdot-example>

<rh-table>

| Property                | Light scheme                | Dark scheme                 |
|-------------------------|-----------------------------|-----------------------------|
| Line numbers text color | `--rh-color-text-secondary` | `--rh-color-text-secondary` |
| Line numbers border     | `--rh-color-border-subtle`  | `--rh-color-border-subtle`  |

</rh-table>

### Configuration

### Line numbers

A code block may or may not show line numbers.

<uxdot-example width-adjustment="503px">
  <img src="../code-block-style-variants-line-numbers.svg"
       alt="Two code blocks, one with line numbers and one without"
       width="503"
       height="416">
</uxdot-example>

<rh-table>

| Property                | Light Scheme                | Dark Scheme                 |
|-------------------------|-----------------------------|-----------------------------|
| Line numbers text color | `--rh-color-text-secondary` | `--rh-color-text-secondary` |
| Line numbers border     | `--rh-color-border-subtle`  | `--rh-color-border-subtle`  |

</rh-table>

### Expand or collapse

A code block may expand or collapse to display more or less code. There must be at least 5 lines of code in order to display this feature.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>A code block is always collapsed by default if there are at least 5 lines of code.</p>
</rh-alert>

<uxdot-example width-adjustment="599px">
  <img src="../code-block-style-variants-expand-collapse.svg"
       alt="Three code blocks. One short, 3 line code block without an expand button. The next is a collapsed code block that has more than 5 lines with an expand/collapse button. The third is an expanded code block."
       width="599"
       height="680">
</uxdot-example>

## Space

<uxdot-example width-adjustment="599px">
  <img src="../code-block-style-space.svg"
       alt="Code block has 24px padding around the outer edges, 16px between the line numbers and the code excerpt, 8px around the show more button, and 16px margin top between the code and the show more button."
       width="599"
       height="688">
</uxdot-example>
