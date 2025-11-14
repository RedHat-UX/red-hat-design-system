## Usage

Use a scheme toggle to quickly switch between color schemes.

## Writing content

The text label should be as short as possible, remove any extra words if necessary.

<rh-table>

| Element      | Character Count |
|--------------|-----------------|
| Text label   | 20              |

</rh-table>

## Layout

### Placement

A scheme toggle can change the look of a page or interface in one click, so it should be placed somewhere highly-visible. It is also recommended to place a scheme toggle in an element or pattern that scrolls with the user, so they always have access to it.

<uxdot-example color-palette="light" layout="full" no-border>
  <img alt="A light and dark scheme toggle on desktop viewports. The scheme toggle is on the far right and the logo is on the far left."
       src="../scheme-toggle-guidelines-layout-placement-1.svg"
       width="1012"
       height="192">
</uxdot-example>

<uxdot-example color-palette="light" layout="full" no-border>
  <img alt="A scheme toggle below a primary nav aligned to the right on both light and dark color schemes."
       src="../scheme-toggle-guidelines-layout-placement-2.svg"
       width="1012"
       height="390">
</uxdot-example>

<uxdot-example color-palette="light" layout="full" no-border>
  <img alt="A scheme toggle on light and dark mobile viewports seen inside the hamburger menu."
       src="../scheme-toggle-guidelines-layout-placement-3.svg"
       width="784"
       height="227">
</uxdot-example>

## Behavior

### User experience

When users interact with a scheme toggle, the following happens:

  - The color scheme changes immediately (if the color schemes that are being toggled are different)
  - Their selected color scheme is saved so it persists across browser sessions
  - Their saved preference is restored on page load

### System default scheme

When users select the `System default` color scheme, the following happens:

  - The browser or operating system determines the appropriate scheme
  - The color scheme updates automatically if system preferences change

## Best practices

### Long text label

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../scheme-toggle-guidelines-best-practice-1-do.svg"
        alt="A scheme toggle with the label 'Color scheme:'."
        width="482"
        height="96">
    </uxdot-example>
    <p>Write label text using as few words as possible.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../scheme-toggle-guidelines-best-practice-1-dont.svg"
        alt="A scheme toggle with the label, 'Choose your preferred color scheme:'."
        width="482"
        height="96">
    </uxdot-example>
    <p>Do not use unnecessary words that make the text label longer.</p>
  </uxdot-best-practice>
</div>

### No text label

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../scheme-toggle-guidelines-best-practice-2-do.svg"
        alt=""
        width="482"
        height="96">
    </uxdot-example>
    <p>Always use a text label next to or above the button group.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../scheme-toggle-guidelines-best-practice-2-dont.svg"
        alt=""
        width="482"
        height="96">
    </uxdot-example>
    <p>Do not remove the text label.</p>
  </uxdot-best-practice>
</div>

### Other icons

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../scheme-toggle-guidelines-best-practice-3-do.svg"
        alt="A scheme toggle with the standard sun, moon, and combo sun/moon icons."
        width="482"
        height="96">
    </uxdot-example>
    <p>Maintain the same icons that are included.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../scheme-toggle-guidelines-best-practice-3-dont.svg"
        alt="A scheme toggle with non-standard icons in buttons (water, reverse clock, and star)."
        width="482"
        height="96">
    </uxdot-example>
    <p>Do not change the icons, it causes confusion about what will happen when each button is selected.</p>
  </uxdot-best-practice>
</div>
