## Usage

Use a scheme dropdown to quickly switch between color schemes.

## Layout

### Placement

A scheme dropdown can change the look of a page or interface in one click, so it should be placed somewhere highly-visible. It is also recommended to place a scheme dropdown in an element or pattern that scrolls with the user, so they always have access to it.

<uxdot-example color-palette="light" layout="full" no-border>
  <img alt="Two expanded scheme dropdowns in a main navigation, right aligned on light and dark color schemes"
       src="../scheme-dropdown-guidelines-layout-1.svg"
       width="1012"
       height="474">
</uxdot-example>

<uxdot-example color-palette="light" layout="full" no-border>
  <img alt="Two expanded scheme dropdowns on light and dark color schemes in a bar below a main navigation"
       src="../scheme-dropdown-guidelines-layout-2.svg"
       width="1012"
       height="474">
</uxdot-example>

<uxdot-example color-palette="light" layout="full" no-border>
  <img alt="Two expanded scheme dropdowns on light and dark color schemes in a bar below a main navigation but shown in a mobile viewport"
       src="../scheme-dropdown-guidelines-layout-3.svg"
       width="1012"
       height="272">
</uxdot-example>

## Behavior

### Light and dark color schemes

When users interact with either light or dark color schemes, the following should happen:

- Available color schemes are displayed
- The color scheme changes immediately (if the color scheme that is being toggled is different)
- Their selected color scheme is saved so it persists across browser sessions
- Their saved preference is restored on page load

### System default color scheme

When users select the System default color scheme, the following should happen:

- The browser or operating system determines the appropriate color scheme
- The color scheme updates automatically if system preferences change

## Best practices

### Other icons

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../scheme-dropdown-guidelines-best-practice-1-do.svg"
        alt="A collapsed and expanded scheme dropdown showing the default included icons"
        width="418"
        height="186">
    </uxdot-example>
    <p>Maintain the same icons that are included.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../scheme-dropdown-guidelines-best-practice-1-dont.svg"
        alt="A collapsed and expanded scheme dropdown showing a location icon for the currently selected item, then a microphone, atom symbol, and wrench for the various options."
        width="418"
        height="186">
    </uxdot-example>
    <p>Do not change the icons, it will cause confusion about what will happen when each color scheme is selected.</p>
  </uxdot-best-practice>
</div>
