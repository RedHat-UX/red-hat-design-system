## Style

A chip is a checkbox HTML input element. It is styled as text on a pill-shaped background. A close icon appears on the right when a chip is selected. Chips are commonly arranged horizontally in chip groups where a legend or text label is included at the beginning.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest">
    <img src="../chip-style-anatomy.svg"
        alt="Anatomy of chips with numbered annotations pointing to various parts"
        width="736"
        height="106">
  </uxdot-example>
  <figcaption>
     <ol>
       <li>Chip group</li>
       <li>Legend</li>
       <li>Chip text</li>
       <li>Selected icon</li>
       <li>Clear all button</li>
     </ol>
  </figcaption>
</figure>

## Variants

### Style

Each chip state has unique styling based on its function.

<uxdot-example color-palette="lightest">
    <img src="../chip-style-variants-style.svg"
        alt="Three chips and a clear all button. The second chip is selected, the third is disabled."
        width="355"
        height="29">
</uxdot-example>

### Size

There are two available chip sizes: Small and Large. The only difference is the text size. Chip groups also have two legend sizes depending on which chip is used.

<uxdot-example color-palette="lightest">
    <img src="../chip-style-variants-size.svg"
        alt="Two sets of chips in two columns and two rows. On the left, small chips. On the right, large chips."
        width="760"
        height="90">
</uxdot-example>

## Color scheme

Chips and chip groups are available in both light and dark color schemes.

### Light scheme

<uxdot-example color-palette="lightest">
    <img src="../chip-style-color-scheme-light.svg"
        alt="Four chips on a light color scheme displayed in their default format, horizontally across the image."
        width="720"
        height="29">
</uxdot-example>

### Dark scheme

<uxdot-example color-palette="darkest">
    <img src="../chip-style-color-scheme-dark.svg"
        alt="Four chips on a dark color scheme displayed in their default format, horizontally across the image."
        width="720"
        height="29">
</uxdot-example>


## Space

The space in each chip is the same for both sizes. The `--rh-space-md` token is used after the legend as well as in between each subsequent chip.

<uxdot-example color-palette="lightest">
    <img src="../chip-style-space-a.svg"
        alt="Chips have 8px of horizontal padding, 4px of vertical padding, 8px of margin on the right, and the icon is 16x16."
        width="745"
        height="294">
</uxdot-example>

The `--rh-space-lg` token is used when chips are stacked.

<uxdot-example color-palette="lightest">
    <img src="../chip-style-space-b.svg"
        alt="When chips wrap to more than one line, each item has 16px of margin on the bottom."
        width="900"
        height="209">
</uxdot-example>

## Interaction states

To see live interaction states, go to the [Demos](/elements/chip/demos/) page.
