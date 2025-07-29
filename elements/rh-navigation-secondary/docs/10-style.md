## Style

A secondary navigation is a group of links and menus placed in a bar container that spans the width of the browser window.

### Anatomy

A secondary navigation is divided into three slots. It is not required to use all three slots.

- Logo (`logo`) - includes primary elements, like a linked logo or a product name
- Navigation (`nav`) - includes navigation elements, such as inline links, menus, and external links
- Call to action (`cta`)  - includes a call to action, typically the default variant (optional)

<uxdot-example color-palette="lightest" width-adjustment="992px">
  <img alt="A secondary navigation featuring a logo, menu nav item, link, an external link, and a default call to action"
       src="../nav-secondary-style-slots.avif"
       width="992"
       height="116">
</uxdot-example>

### Slots and breakpoints

On small breakpoints, elements in the `nav` slot will collapse into an accordion within a menu (also called the `mobile-menu` slot). Optional elements in the `cta` slot will be placed below the accordion or hidden completely.

<uxdot-example color-palette="lightest" width-adjustment="1012px">
  <img alt="Three diagrams illustrating the responsiveness of secondary nav. The first shows a logo slot, nav slot, and cta slot. The second shows the tablet view with only the logo and mobile-menu slots. The third shows the nav and cta slots in the expanded mobile menu."
       src="../nav-secondary-style-slots-and-breakpoints.avif"
       width="1012"
       height="692">
</uxdot-example>

### Using the expandable menu

The expandable menu is an area where content can be placed like text, links, calls to action, and more. The menu requires a backdrop so it can separate itself from the page underneath, this helps users focus on the menu content.

<rh-table>

| Property             | Current value |
|----------------------|---------------|
| Color - backdrop     | `--rh-color-gray-90`      |
| Opacity - background | `--rh-opacity-80`           |

</rh-table>


## Color scheme

A secondary navigation is available in both light and dark schemes. The light scheme background includes a box shadow whereas the dark scheme background includes a gray bottom border.

### Light scheme

The light scheme secondary navigation should be used in environments with a lighter look and feel. The box shadow is always visible unless covered by an expanded menu.

<uxdot-example color-palette="lightest" width-adjustment="837px">
  <img alt="A light scheme secondary navigation with black text, light gray background, and slight box shadow"
       src="../nav-secondary-style-scheme-light.avif"
       width="837"
       height="86">
</uxdot-example>

### Dark scheme

The dark scheme secondary navigation should be used in environments with a darker look and feel. The gray bottom border is always visible unless covered by an expanded menu.

<uxdot-example color-palette="darkest" width-adjustment="833px">
  <img alt="A dark scheme secondary navigation with white text, a dark gray background, and a light gray bottom border"
       src="../nav-secondary-style-scheme-dark.avif"
       width="833"
       height="86">
</uxdot-example>

## Configuration

A secondary navigation spans the entire width of a browser window on all breakpoints. It has a fixed height of `86px` on large breakpoints and a fixed height of `80px` on small breakpoints even if the logo slot’s text is only one line. Content in all slots is horizontally centered with the background.

<uxdot-example color-palette="lightest" width-adjustment="838px">
  <img alt="A responsive secondary navigation, transitioning from a full desktop view with multiple links to a collapsed mobile menu."
       src="../nav-secondary-style-configuration.avif"
       width="838"
       height="930">
</uxdot-example>

### Expandable menu styles

An expandable menu includes content like text, links, calls to action, and more. The menu tab, panel, and backdrop have the same styles on all breakpoints.

<uxdot-example color-palette="lightest" width-adjustment="837px">
  <img alt="Two diagrams: A desktop-size secondary nav with all nav items showing and a mobile menu view with nav items styled like accordions"
       src="../nav-secondary-style-expandable-menu-styles.avif"
       width="837"
       height="1105">
</uxdot-example>

## Space

The amount of space in a secondary navigation remains about the same on all breakpoints.

### Large breakpoints

<uxdot-example color-palette="lightest" width-adjustment="992px">
  <img alt="Image of secondary navigation spacing values on large breakpoints"
       src="../nav-secondary-space-breakpoints-large.avif"
       width="992"
       height="416">
</uxdot-example>


### Small breakpoints

<uxdot-example color-palette="lightest" width-adjustment="984px">
  <img alt="Image of secondary navigation spacing values on small breakpoints"
       src="../nav-secondary-space-breakpoints-small.avif"
       width="984"
       height="554">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, lg, 2xl"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

<uxdot-example color-palette="lightest" width-adjustment="992px">
  <img alt="Image of light scheme secondary navigation hover states"
       src="../nav-secondary-interaction-state-hover-scheme-light.avif"
       width="992"
       height="244">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="992px">
  <img alt="Image of dark scheme secondary navigation hover states"
       src="../nav-secondary-interaction-state-hover-scheme-dark.avif"
       width="992"
       height="245">
</uxdot-example>

### Focus

<uxdot-example color-palette="lightest" width-adjustment="992px">
  <img alt="Image of light scheme secondary navigation focus states"
       src="../nav-secondary-interaction-state-focus-scheme-light.avif"
       width="992"
       height="244">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="992px">
  <img alt="Image of dark scheme secondary navigation focus states"
       src="../nav-secondary-interaction-state-focus-scheme-dark.avif"
       width="992"
       height="245">
</uxdot-example>


### Active

<uxdot-example color-palette="lightest" width-adjustment="992px">
  <img alt="Image of light scheme secondary navigation active states"
       src="../nav-secondary-interaction-state-active-scheme-light.avif"
       width="992"
       height="244">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="992px">
  <img alt="Image of dark scheme secondary navigation active states"
       src="../nav-secondary-interaction-state-active-scheme-dark.avif"
       width="992"
       height="245">
</uxdot-example>