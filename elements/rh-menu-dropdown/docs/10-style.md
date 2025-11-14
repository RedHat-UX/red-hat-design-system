## Style

The menu dropdown is composed of a toggle, which opens a container with menu items. Menu items are versatile, with optional icons, descriptions, and organizational elements like group headings and separators.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="An expanded menu dropdown with a menu toggle annotated with #1, a menu item annotated with a #2, and a menu group annotated with #3."
         src="../menu-dropdown-style-anatomy.svg"
         width="211"
         height="272">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Menu toggle</li>
      <li>Menu item</li>
      <li>Menu group</li>
    </ol>
  </figcaption>
</figure>

## Color scheme

Menu dropdowns, including the different types of toggles, are available for both light and dark schemes.

### Light scheme

<div class="grid sm-two-columns">
  <figure>
    <uxdot-example color-palette="lightest">
      <img alt="A collapsed menu dropdown that says, 'View,' next to the same menu dropdown expanded in light scheme."
        src="../menu-dropdown-style-light-scheme-default-toggle.svg"
        width="482"
        height="176">
    </uxdot-example>
    <figcaption>
      <p>Basic (default) toggle - collapsed and expanded</p>
    </figcaption>
  </figure>
  <figure>
    <uxdot-example color-palette="lightest">
    <img alt="Collapsed menu dropdown toggles with the ellipsis-vertical-fill icon in light scheme. One is borderless, and the other has a subtle border."
        src="../menu-dropdown-style-light-scheme-icon-toggle.svg"
        width="482"
        height="176">
    </uxdot-example>
    <figcaption>
    <p>Compact toggle - borderless and box variants in the collapsed state</p>
    </figcaption>
  </figure>
</div>

### Dark scheme

<div class="grid sm-two-columns">
  <figure>
    <uxdot-example color-palette="darkest">
      <img alt="A collapsed menu dropdown that says, 'View,' next to the same menu dropdown expanded in dark scheme."
        src="../menu-dropdown-style-dark-scheme-default-toggle.svg"
        width="482"
        height="176">
    </uxdot-example>
    <figcaption>
      <p>Basic (default) toggle - collapsed and expanded</p>
    </figcaption>
  </figure>
  <figure>
    <uxdot-example color-palette="darkest">
      <img alt="Collapsed menu dropdown toggles with the ellipsis-vertical-fill icon in dark scheme. One is borderless, and the other has a subtle border."
        src="../menu-dropdown-style-dark-scheme-icon-toggle.svg"
        width="482"
        height="176">
    </uxdot-example>
    <figcaption>
      <p>Compact toggle - borderless and box variants in the collapsed state</p>
    </figcaption>
  </figure>
</div>

## Configuration

### Toggle variants and options

The element that triggers the menu can be displayed in two ways. The basic toggle is a standard, button-style trigger that includes both text (the toggle label) and a caret icon. The basic toggle can be the same width as the menu dropdown or shrink to fit its text. 

<uxdot-example color-palette="lightest">
  <img alt="Expanded menu dropdowns with one toggle that shrinks to fit its text and another that is the same width as the dropdown list."
       src="../menu-dropdown-style-configuration-toggle-variants-1.svg"
       width="358"
       height="272">
</uxdot-example>

The other option is to use a compact toggle, which omits a text label and displays only the ellipsis-vertical-fill icon. This dropdown toggle is available with or without a border. A compact toggle requires a descriptive aria-label to communicate its purpose to screen readers.

<uxdot-example color-palette="lightest">
  <img alt="Two examples of a compact toggle that's collapsed and expanded to show the borderless and box variants."
       src="../menu-dropdown-style-configuratoin-toggle-variants-2.svg"
       width="432"
       height="176">
</uxdot-example>

### Menu item types

Menu items are ideally actions. Those are shown in `--rh-color-text-primary` in the default state.

Some menu items may need to be links. In their default states, links will always use `--rh-color-interactive-primary-default` and show a dashed underline. If a menu item is a link that opens in a new window or tab, an external link icon is added automatically and aligned to the right.

<rh-cta href="/elements/menu-dropdown/guidelines/">View guidelines for using menu item types</rh-cta>

<uxdot-example color-palette="lightest">
  <img alt="An expanded menu dropdown with actions only and an expanded menu dropdown with links that are blue and have dashed underlines."
       src="../menu-dropdown-style-menu-item-types.svg"
       width="477"
       height="272">
</uxdot-example>

### Menu item options

Menu items can include an icon and a description.

<uxdot-example color-palette="lightest">
  <img alt="An expanded menu dropdown with small group headings and menu items that include an icon on the left and a description."
       src="../menu-dropdown-style-menu-item-options.svg"
       width="280"
       height="442">
</uxdot-example>

## Space

Space values all viewport sizes. The image below shows the spacing for a basic menu toggle and the container for menu item groups.

<uxdot-example color-palette="lightest">
  <img alt="Diagrams showing the spacing in a collapsed menu toggle and an expanded menu dropdown."
       src="../menu-dropdown-style-space-1.svg"
       width="519"
       height="454">
</uxdot-example>

The image below shows spacing within a menu item that functions as a group heading and a menu item that includes all of the slots.

<uxdot-example color-palette="lightest">
  <img alt="Diagrams that show spacing for a group heading and a menu item that has an icon and a description."
       src="../menu-dropdown-style-space-2.svg"
       width="656"
       height="110">
</uxdot-example>

A compact menu toggle’s height matches the height of a menu toggle with text, so spacing does not factor as much in its sizing.

## Interaction states

The images below show interaction states for both the menu toggle and menu items when the dropdown is expanded. When a menu dropdown is expanded, focus moves to the first menu item, and this state is reflected in all of the images.

### Hover

<uxdot-example color-palette="lightest">
  <img alt="Hover states for menu item types and variants of the collapsed and expanded menu toggles in light scheme."
       src="../menu-dropdown-style-interaction-states-hover-light.svg"
       width="945"
       height="272">
</uxdot-example>

<uxdot-example color-palette="darkest">
  <img alt="Hover states for menu item types and variants of the collapsed and expanded menu toggles in dark scheme."
       src="../menu-dropdown-style-interaction-states-hover-dark.svg"
       width="945"
       height="272">
</uxdot-example>

### Active

<uxdot-example color-palette="lightest">
  <img alt="Active states for menu item types and variants of the collapsed and expanded menu toggles in light scheme."
       src="../menu-dropdown-style-interaction-states-active-light.svg"
       width="947"
       height="272">
</uxdot-example>

<uxdot-example color-palette="darkest">
  <img alt="Active states for menu item types and variants of the collapsed and expanded menu toggles in dark scheme."
       src="../menu-dropdown-style-interaction-states-active-dark.svg"
       width="947"
       height="272">
</uxdot-example>

### Focus

<uxdot-example color-palette="lightest">
  <img alt="Focus states for menu item types and variants of the collapsed and expanded menu toggles in light scheme."
       src="../menu-dropdown-style-interaction-states-focus-light.svg"
       width="959"
       height="274">
</uxdot-example>

<uxdot-example color-palette="darkest">
  <img alt="Focus states for menu item types and variants of the collapsed and expanded menu toggles in dark scheme."
       src="../menu-dropdown-style-interaction-states-focus-dark.svg"
       width="959"
       height="274">
</uxdot-example>
