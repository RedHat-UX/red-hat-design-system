## Style

A tag is text on a pill-shaped background. It comes in a variety of colors, styles, and sizes.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="222px">
    <img alt="3 tags with annotated anatomy features; annotation number 1 is pointing to the Text, annotation number 2 is pointing to the Decorative icon, and annotation number 3 is pointing to the Linked text of a Linked Tag"
         src="../tag-style-anatomy.svg"
         width="222"
         height="60">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Text</li>
      <li>Decorative icon</li>
      <li>Linked text</li>
    </ol>
  </figcaption>
</figure>

## Variants

### Style

There are three available tag styles: `Filled`, `Outlined`, and `Desaturated`.

<uxdot-example color-palette="lightest" width-adjustment="231px">
  <img alt="3 tags, a filled variant with a red background and red border, an outlined variant with a white background and red border, and a desaturated variant with a white background and dark gray border"
       src="../tag-style-variants-style.svg"
       width="231"
       height="29">
</uxdot-example>

### Color

There are nine available tag colors. The Desaturated style uses only one color 
for both the border and text.

<uxdot-example color-palette="lightest" width-adjustment="558px">
  <img alt="A collection of all the variations of tag, 9 filled, 9 outlined, and 9 desaturated"
       src="../tag-style-variants-color.svg"
       width="558"
       height="151">
</uxdot-example>

### Size

There are two available tag sizes. Each style and color has `Default` and 
`Compact` sizes.

<uxdot-example color-palette="lightest" width-adjustment="539px">
  <img alt="A collection of all the variations of tag, 2 filled one normal sized and one compact, 2 outlined one normal sized and one compact and 2 desaturated one normal sized and one compact"
       src="../tag-style-variants-size.svg"
       width="539"
       height="29">
</uxdot-example>

<rh-table>

| Tag size | Text size token               |
| -------- | ----------------------------- |
| Default  | `--rh-font-size-body-text-sm` |
| Compact  | `--rh-font-size-body-text-xs` |

</rh-table>

### Decorative icon

Each tag style, color, and size includes an optional decorative icon.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Browse our <a href="/icons/">UI Icons</a> to see what icons are available to use.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="614px">
  <img alt="A collection of the variations of tag, 2 filled one normal sized and one compact with a check mark icon, 2 outlined one normal sized and one compact with a check mark icon,  and 2 desaturated  one normal sized and one compact with a check mark icon"
       src="../tag-style-variants-decorative-icon.svg"
       width="614"
       height="29">
</uxdot-example>

## Color scheme
<a id="theme"></a>

Each tag style, color, and size is available for both light and dark color schemes.

### Light scheme
<a id="light-theme"></a>

<uxdot-example color-palette="lightest" width-adjustment="738px">
  <img alt="A collection light theme variant tags. 6 rows of 9 tags in every variation, filled, outlined, desaturated, with alternating rows the compact size."
       src="../tag-style-theme-light.svg"
       width="738"
       height="253">
</uxdot-example>

### Dark scheme
<a id="dark-theme"></a>

<uxdot-example color-palette="darkest" width-adjustment="738px">
  <img alt="A collection dark theme variant tags. 6 rows of 9 tags in every variation, filled, outlined, desaturated, with alternating rows the compact size."
       src="../tag-style-theme-dark.svg"
       width="738"
       height="253">
</uxdot-example>


## Space

Tags have 8px of space in between each other in a row or when stacked.

<uxdot-example color-palette="lightest" width-adjustment="663px">
  <img alt="Tags with spacer blocks displayed as annotations"
       src="../tag-style-space.svg"
       width="663"
       height="214">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="376px">
  <img alt="A tag with an open popover above the tag."
       src="../tag-style-space-b.svg"
       width="376"
       height="194">
</uxdot-example>

## Interaction states

### Hover

Styles will change on hover depending on how a tag is used.

  - The dashed underline is the same color as the text it is applied to
  - If a tag has linked text, the underline will disappear on hover
  - If a tag is a button, the border width changes to `--rh-border-width-md` on hover
  - A disabled tag has no states

<uxdot-example color-palette="lightest" width-adjustment="950px">
  <img alt="A collection of six light scheme tags, two to each group. There are three variants: linked, button, and disabled. The linked tag shows the underline disapearing on hover. The button tag shows a thicker border on hover. The disabled tag has no hover state."
       src="../tag-style-interaction-states-hover-scheme-light.svg"
       width="950"
       height="125">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="950px">
  <img alt="The same arrangement as the previous image, but using a dark color scheme."
       src="../tag-style-interaction-states-hover-scheme-dark.svg"
       width="950"
       height="125">
</uxdot-example>

### Focus and Active

A focus ring wraps around the text and icon in both focus and active states. Hover state styles remain the same.

<uxdot-example color-palette="lightest" width-adjustment="952px">
  <img alt="A collection of four sets of two tags each. The right tag in each set has a blue focus ring denoting the focus state around the tag text and optional icon."
       src="../tag-style-interaction-states-focus-active-scheme-light.svg"
       width="952"
       height="29">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="952px">
  <img alt="Same setup as above, but on a dark scheme background."
       src="../tag-style-interaction-states-focus-active-scheme-dark.svg"
       width="952"
       height="29">
</uxdot-example>
