## Style

A tag is text on a pill-shaped background. It comes in a variety of colors, 
styles, and sizes. The text may be linked or include an optional decorative 
icon.

### Anatomy

<figure>
  <uxdot-example width-adjustment="311px">
    <img src="../tag-style-anatomy.svg"
        alt="Image of 4 tags, 3 of which are annotated with anatomy features; annotation number 1 is pointing to the Text, annotation number 2 is pointing to the Decorative icon, and annotation number 3 is pointing to the Linked text of a Linked Tag"
        width="311"
        height="59">
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

<uxdot-example width-adjustment="231px">
  <img src="../tag-style-variants-style.svg"
        alt="Image of 3 tags, a filled variant with a red background and red border, an outlined variant with a white background and red border, and a desaturated variant with a white background and dark grey border"
        width="231"
        height="29">
</uxdot-example>

### Color

There are nine available tag colors. The Desaturated style uses only one color 
for both the border and text.

<uxdot-example width-adjustment="558px">
  <img src="../tag-style-variants-color.svg"
        alt="Image of a collection of all the variations of tag, 9 filled, 9 outlined, and 9 desaturated"
        width="558"
        height="151">
</uxdot-example>

### Size

There are two available tag sizes. Each style and color has `Default` and 
`Compact` sizes.

<uxdot-example width-adjustment="539px">
  <img src="../tag-style-variants-size.svg"
        alt="Image of a collection of all the variations of tag, 2 filled one normal sized and one compact, 2 outlined one normal sized and one compact and 2 desaturated one normal sized and one compact"
        width="539"
        height="29">
</uxdot-example>

<rh-table>

| Tag size | Text size token             |
| -------- | --------------------------- |
| Default  | --rh-font-size-body-text-sm |
| Compact  | --rh-font-size-body-text-xs |

</rh-table>

### Decorative icon

Each tag style, color, and size includes an optional decorative icon.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p><a href="/icons/">Browse the UI Icons</a> to see more options</p>
</rh-alert>

<uxdot-example width-adjustment="614px">
  <img src="../tag-style-variants-decorative-icon.svg"
        alt="Image of a collection of the variations of tag, 2 filled one normal sized and one compact with a check mark icon, 2 outlined one normal sized and one compact with a check mark icon,  and 2 desaturated  one normal sized and one compact with a check mark icon"
        width="614"
        height="29">
</uxdot-example>

### Interactivity

Each tag style, color, and size can be text only or linked.

<uxdot-example width-adjustment="760px">
  <img src="../tag-style-variants-interactivity.svg"
        alt="Image of a collection tags, 3 rows of 4 pairs of icons each pair contains a tag that is normal size and compact.  2nd and 4th column contains a padlock icon.  3rd and 4th column contain links.  First row are all filled, second row is outlined variants, and third row is desaturated."
        width="760"
        height="151">
</uxdot-example>

## Theme

Each tag style, color, and size is available in both light and dark themes.

### Light theme

<uxdot-example width-adjustment="738px">
  <img src="../tag-style-theme-light.svg"
        alt="Image of a collection light theme variant tags. 6 rows of 9 tags in every variation, filled, outlined, desaturated, with alternating rows the compact size."
        width="738"
        height="253">
</uxdot-example>

### Dark theme

<uxdot-example width-adjustment="738px" color-palette="darkest">
  <img src="../tag-style-theme-dark.svg"
        alt="Image of a collection dark theme variant tags. 6 rows of 9 tags in every variation, filled, outlined, desaturated, with alternating rows the compact size."
        width="738"
        height="253">
</uxdot-example>


## Space

Tags have 8px of space in between each other in a row or when stacked.

<uxdot-example width-adjustment="663px">
  <img src="../tag-style-space.svg"
        alt="Image of the tags with spacer blocks displayed as annotations"
        width="663"
        height="214">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="xs, md"></uxdot-spacer-tokens-table>

## Interaction states

Only tags with linked text have interaction states.

### Hover

The tag border width increases to `--rh-border-width-md` on hover.

<uxdot-example width-adjustment="555px">
  <img src="../tag-style-interaction-states-hover.svg"
        alt="Image of a collection of tags, 4 rows, odd rows normal sized, even rows compact, all tags contain links showing hover state with with bigger border.  First column of tag are filled, second are outlined and third are desaturated.  Last two rows also contain timer icons."
        width="555"
        height="264">
</uxdot-example>

### Focus and Active

A focus ring wraps text or the icon and text in both focus and active states. The border also changes as seen in the hover state.

<uxdot-example width-adjustment="555px">
  <img src="../tag-style-interaction-states-focus-active.svg"
        alt="Image of a collection of tags, 4 rows, odd rows are normal sized, even rows are compact, all tags contain links.  Each tag is displaying focus style with a focus outline and the bigger border included in the hover state.  First column of tags are filled, second are outlined and third are desaturated.  Last two rows also contain timer icons."
        width="555"
        height="240">
</uxdot-example>
