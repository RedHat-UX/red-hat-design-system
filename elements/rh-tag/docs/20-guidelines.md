
## Usage

Use a tag to highlight an element on a page to draw attention to it or make it 
more searchable.


### Tag vs. badge

If you need to reflect counts like number of objects, events, or unread items, 
use a Badge instead.


## Variants

Both variants come in `red`, `orange`, `green`, `cyan`, `blue`, `purple`, and 
`gray` colors. The white variants is for the dark theme only. A filled tag can 
be used to add more visual prominence whereas an unfilled tag can be used for 
grouping. You can use both variants in the same layout or user interface, just 
not in the same area or container. Whatever you choose, be sure to maintain 
consistency as best as possible.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Relying on color alone to communicate information causes barriers to access for many users. Learn more in the <a href="/accessibility">Accessibility</a> section.</p>
</rh-alert>

<uxdot-example width-adjustment="404px">
  <img src="../tag-variants-colors.png" alt="A row of filled tags with text ‘Filled tags’ underneath and a row 
        of unfilled tags with text ‘Unfilled tags’ underneath">
</uxdot-example>


## Icons

Add an icon when additional visual information is helpful or to distinguish tags 
of the same color.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Add an icon when additional visual information is helpful or to distinguish tags of the same color.</p>
</rh-alert>

<uxdot-example width-adjustment="475px">
  <img src="../tag-icons.png" alt="A row of tags showing examples of optional icons">
</uxdot-example>


## White tag

The unfilled white tag should be used in the dark theme or on dark backgrounds. 
It should also be used on its own and not be grouped. The text should not 
indicate a status, it should be written to be a descriptive caption to elements 
nearby.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../tag-white-tag.png" alt="A white tag used on top of two blocks of various text styles">
</uxdot-example>


## Status

### Color

Colors may be used to indicate status if desired. Regardless of what the text 
says, it is recommended **not** to use a red tag unless it is 
communicating a danger or error state.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Filled tags may communicate a status or message more effectively than unfilled tags because they are more visually prominent.</p>
</rh-alert>

<uxdot-example width-adjustment="503px">
  <img src="../tag-status-color.png" alt="A row of filled tags with examples of unique status text labels per each color">
</uxdot-example>


### Text

The text you write can communicate a status as well, so choose a corresponding 
color that makes sense.

<uxdot-example width-adjustment="566px">
  <img src="../tag-status-text.png" alt="Two groups of two tags with examples of correct status text labels">
</uxdot-example>


## Writing content

### Text labels

Text labels should be written to add context or clarity using as few words as 
possible. If text needs to be longer, use a caption or another text style 
instead.

<uxdot-example width-adjustment="500px">
  <img src="../tag-text-labels.png" alt="Two groups of two tags with examples of correct and incorrect text labels">
</uxdot-example>


The recommended maximum character count for the elements of a tag are listed below and include spaces.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Text label</td>
        <td data-label="Character count">20</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Grouping

A tag can be used on its own or grouped in a row. When there are too many tags 
in one row, a new row will appear.

<uxdot-example width-adjustment="698px">
  <img src="../tag-grouping.png" alt="Two groups of two tags, one group is three tags in one row and the other group is two tags in one row and one tag in a second row">
</uxdot-example>


## Best practices

### Mixing variants

Do not mix variants or tags with and without icons in the same area or 
container.

<uxdot-example width-adjustment="458px" danger>
  <img src="../tag-best-practice-1.png" alt="Two rows of tags; the first row shows a mix of variants and the second row shows a mix of tags with and without icons, both are incorrect usage">
</uxdot-example>


### Dark theme tags

Do not use light theme tags in the dark theme, [contact us][contact] if you need 
dark theme tags.

<uxdot-example width-adjustment="522px" danger>
  <img src="../tag-best-practice-2.png" alt="Light theme tags used on a dark background which is incorrect usage">
</uxdot-example>


### Custom tags

Do not make your own custom tags. If you need a custom set of tags designed, 
[contact us][contact].

<uxdot-example width-adjustment="232px" danger>
  <img src="../tag-best-practice-3.png" alt="Three tags with custom colors which is incorrect usage">
</uxdot-example>


[contact]: https://github.com/RedHat-UX/red-hat-design-system/discussions
