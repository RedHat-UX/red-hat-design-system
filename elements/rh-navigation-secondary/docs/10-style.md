## Style

A secondary navigation is a group of links and menus placed in a bar container that spans the width of the browser window.
  
### Anatomy

A secondary navigation is divided into three slots, it is not required to use all three slots.

- Slot 1 - includes primary elements like product logo text
- Slot 2 - includes secondary elements like links and menus
- Slot 3 - includes tertiary elements like a call to action (optional)

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of a gray secondary navigation background with dotted line boxes that say slot 1, slot 2, and slot 3 from left to right"
       src="../nav-secondary-style-slots.png"
       width="872"
       height="98">
</uxdot-example>


### Using slots

Slots are defined areas where content can be inserted, each slot includes a specific type of content.

<rh-table>

| Slot number | Use case                                                                      |
|-------------|-------------------------------------------------------------------------------|
| Slot 1      | Includes a linked logo or text that directs users to a main page or home page |
| Slot 2      | Includes navigation elements like inline links, menus, and external links     |
| Slot 3      | May include interactive elements like a call to action                        |

</rh-table>


### Slots and breakpoints

On small breakpoints, navigation elements in Slot 2 will collapse into an accordion within a menu. Optional elements in Slot 3 will be placed below the accordion or hidden completely.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of four secondary navigations; two large ones and two small ones with dotted line boxes around each slot and labels that say slot 1, slot 2, and slot 3"
       src="../nav-secondary-style-slots-and-breakpoints.png"
       width="872"
       height="748">
</uxdot-example>

### Using the expandable menu

The expandable menu is an area where content can be placed like text, links, calls to action, and more. The menu requires a backdrop so it can separate itself from the page underneath, this helps users focus on the menu content.

<rh-table>

| Property             | Current value |
|----------------------|---------------|
| Color - backdrop     | \#151515      |
| Opacity - background | 50%           |

</rh-table>


## Color scheme
<a id="theme"></a>

A secondary navigation is available in `lightest`, `lighter`, and `dark` color palettes.
The lightest and lighter palettes includes a box shadow whereas the dark palette includes a gray bottom border.

### Light scheme

The light secondary navigation should be used in environments with a lighter look and feel.
The box shadow is always visible unless covered by an expanded menu.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of a light theme secondary navigation"
       src="../nav-secondary-style-theme-light.png"
       width="872"
       height="98">
</uxdot-example>

<rh-table>

| Property                           | Light theme                       |
|------------------------------------|-----------------------------------|
| Color - all text and chevron icons | \#151515                          |
| Color - bar background             | \#F2F2F2                          |
| Box shadow - bar background        | 0 2px 4px 0 rgba(21, 21, 21, 0.2) |

</rh-table>


### Dark theme

The dark theme secondary navigation should be used in environments with a darker look and feel. The gray bottom border is always visible unless covered by an expanded menu.

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of a dark theme secondary navigation"
       src="../nav-secondary-style-theme-dark.png"
       width="872"
       height="98">
</uxdot-example>

<rh-table>

| Property                           | Dark theme |
|------------------------------------|------------|
| Color - all text and chevron icons | \#FFFFFF   |
| Color - bar background             | \#383838   |
| Box shadow - bar background        | \#4D4D4D   |

</rh-table>


## Configuration

A secondary navigation spans the entire width of a browser window on all breakpoints. It has a fixed height of <code>86px</code> on large breakpoints and a fixed height of <code>80px</code> on small breakpoints even if Slot 1 text is only one line. Content in all slots is horizontally centered with the background.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of a secondary navigation construction; several examples showing details like spacing, alignment, height, width, and more"
       src="../nav-secondary-style-configuration.png"
       width="872"
       height="802">
</uxdot-example>

### Expandable menu styles

An expandable menu includes content like text, links, calls to action, and more. The menu tab, panel, and backdrop have the same styles on all breakpoints.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of two stacked secondary navigations with menus expanded; one for large breakpoints and the other for small breakpoints"
       src="../nav-secondary-style-expandable-menu-styles.png"
       width="872"
       height="1125">
</uxdot-example>

### Slot text labels

Slot 1 and Slot 2 text elements have specific styles applied to them.

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>Slot 3 usually includes a Call to action. To see Call to action styles, visit the <a href="/elements/call-to-action">Call to action</a> page.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of four stacked secondary navigations; two are light theme and two are dark theme, both with dotted line boxes and labels that say slot 1 and slot 2"
       src="../nav-secondary-style-text-labels.png"
       width="872"
       height="430">
</uxdot-example>

<rh-table>

| Property                | Large breakpoints | Small breakpoints |
|-------------------------|-------------------|-------------------|
| Slot 1 - font family    | Red Hat Display   | Red Hat Display   |
| Slot 1 - font size      | 18px<br>1.125rem  | 16px<br>1.0rem    |
| Slot 1 - font weight    | Medium            | Medium            |
| Slot 1 - line height    | 1.5 (27)          | 1.5 (24)          |
| Slot 1 - letter spacing | 0.4px<br>0.025rem | 0.4px<br>0.025rem |
| Slot 2 - font family    | Red Hat Text      | Red Hat Text      |
| Slot 2 - font size      | 16px<br>1.0rem    | 16px<br>1.0rem    |
| Slot 2 - font weight    | Regular           | Regular           |
| Slot 2 - line height    | 1.5 (24)          | 1.5 (24)          |

</rh-table>


## Space

The amount of space in a secondary navigation remains about the same on all breakpoints.

### Large breakpoints

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of secondary navigation spacing values on large breakpoints"
       src="../nav-secondary-space-breakpoints-large.png"
       width="1000"
       height="582">
</uxdot-example>


### Small breakpoints  

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of secondary navigation spacing values on small breakpoints"
       src="../nav-secondary-space-breakpoints-small.png"
       width="984"
       height="714">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, lg, 2xl"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of light theme secondary navigation hover states"
       src="../nav-secondary-interaction-state-hover-theme-light.png"
       width="872"
       height="238">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of dark theme secondary navigation hover states"
       src="../nav-secondary-interaction-state-hover-theme-dark.png"
       width="872"
       height="238">
</uxdot-example>



<rh-table>

| Property                         | Light theme | Dark theme |
|----------------------------------|-------------|------------|
| Color - Slot 1 text              | \#4D4D4D    | \#C7C7C7   |
| Color - Slot 2 top border        | \#EE0000    | \#FF542E   |
| Border width - Slot 2 top border | 4px         | 4px        |
| Color - call to action text      | \#004080    | \#BEE1F4   |
| Color - menu tab background      | \#FFFFFF    | \#151515   |

</rh-table>


### Focus

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p> 
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of light theme secondary navigation focus states"
       src="../nav-secondary-interaction-state-focus-theme-light.png"
       width="872"
       height="212">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of dark theme secondary navigation focus states"
       src="../nav-secondary-interaction-state-focus-theme-dark.png"
       width="872"
       height="212">
</uxdot-example>
  
<rh-table>

| Property           | Light theme | Dark theme |
|--------------------|-------------|------------|
| Color - focus ring | \#0066CC    | \#73BCF7   |

</rh-table>


### Active

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of light theme secondary navigation active states"
       src="../nav-secondary-interaction-state-active-theme-light.png"
       width="872"
       height="212">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of dark theme secondary navigation active states"
       src="../nav-secondary-interaction-state-active-theme-dark.png"
       width="872"
       height="212">
</uxdot-example>

<rh-table>

| Property           | Light theme | Dark theme |
|--------------------|-------------|------------|
| Color - focus ring | \#0066CC    | \#73BCF7   |

</rh-table>
