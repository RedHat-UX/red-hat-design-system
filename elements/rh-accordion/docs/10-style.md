<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-spacer-tokens-table.js';
</script>

## Style

Accordion panels include title text, a chevron icon, body text, and other 
content. When a panel is collapsed, only the top and bottom borders are visible. 
When a panel is expanded, all borders are visible including a thicker left 
border for emphasis.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="Anatomy of an accordion with lots of annotations pointing to various parts"
         src="../accordion-anatomy.png"
         width="872"
         height="755">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Collapsed panel</li>
      <li>Expanded panel</li>
      <li>Title</li>
      <li>Panel header region</li>
      <li>Caret</li>
      <li>Emphasis</li>
      <li>Content</li>
      <li>Panel body region</li>
      <li>Accent slot</li>
    </ol>
  </figcaption>
</figure>

### Sizes

There are two available sizes and the only difference is the title text size. 
You can use the Small size on large breakpoints, but not the Large size on small 
breakpoints due to the potential of long title text wrapping to more than two 
lines.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="A large size accordion with text underneath saying ‘Large size’ and a small size accordion with text underneath saying ‘Small size’"
       src="../accordion-sizes.png"
       width="872"
       height="536">
</uxdot-example>

## Color scheme
<a id="theme"></a>

An accordion is available for both light and dark schemes. The light scheme 
expanded panel includes a box shadow, but the dark scheme does not.

### Light theme

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Light theme accordion with an expanded panel"
       src="../accordion-theme-light.png"
       width="872"
       height="213">
</uxdot-example>

### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Dark theme accordion with an expanded panel"
       src="../accordion-theme-dark.png"
       width="872"
       height="213">
</uxdot-example>

## Configuration

An expanded panel does not have a maximum height, but it may scroll if 
constrained by vertical space. The width of an accordion varies based on content 
and page layout. Title text and icons are horizontally aligned.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="How an accordion is constructed showing alignment, space, scrolling, and width details"
       src="../accordion-configuration.png"
       width="872"
       height="356">
</uxdot-example>

### Accent slot

The accent slot can be positioned inline or below the panel's title. This can 
contain tags, badges, or other small elements with secondary information.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Accordion panel with two tags in inline accent slot and an accordion with two tags below the title"
       src="../accordion-accent-slot.png"
       width="872"
       height="221">
</uxdot-example>

### Nested panels

Panels can be nested to help organize complex or granular sections of content.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="An accordion with an expanded panel and a nested expanded panel"
       src="../accordion-nested-panels.png"
       width="872"
       height="442">
</uxdot-example>

### Stacked panels

Multiple panels can be expanded simultaneously even when nested.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="An accordion with one collapsed panel on top and two stacked expanded panels below"
       src="../accordion-stacked-panels.png"
       width="872"
       height="999">
</uxdot-example>

## Space

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Accordion spacing within panels and in between elements like titles, body text, rules, and icons"
       src="../accordion-space.png"
       width="872"
       height="1336">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg, xl, 3xl"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of 
an element or pattern.

### Hover

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Light theme accordion with a hover state"
       src="../accordion-hover-theme-light.png"
       width="872"
       height="213">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Dark theme accordion with a hover state"
       src="../accordion-hover-theme-dark.png"
       width="872"
       height="213">
</uxdot-example>


<rh-table>

| Property             | Light theme                       | Dark theme                         |
| -------------------- | --------------------------------- | ---------------------------------- |
| Color - panel header | `--rh-color-surface-dark-lighter` | darkened `--rh-color-surface-dark` |

</rh-table>

### Focus

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Light theme accordion with a focus state"
       src="../accordion-focus-theme-light.png"
       width="872"
       height="213">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Dark theme accordion with a focus state"
       src="../accordion-focus-theme-dark.png"
       width="872"
       height="213">
</uxdot-example>

<rh-table>

| Property             | Light theme                           | Dark theme                            |
| -------------------- | ------------------------------------- | ------------------------------------- |
| Color - panel header | `--rh-color-surface-dark-lighter`     | darkened `--rh-color-surface-dark`    |
| Color - focus ring   | `--rh-color-interative-primary-focus` | `--rh-color-interative-primary-focus` |

</rh-table>

### Active

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Light theme accordion with an active state"
       src="../accordion-active-theme-light.png"
       width="872"
       height="213">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Dark theme accordion with an active state"
       src="../accordion-active-theme-dark.png"
       width="872"
       height="213">
</uxdot-example>

<rh-table>

| Property             | Light theme                       | Dark theme                         |
| -------------------- | --------------------------------- | ---------------------------------- |
| Color - panel header | `--rh-color-surface-dark-lighter` | darkened `--rh-color-surface-dark` |

</rh-table>
