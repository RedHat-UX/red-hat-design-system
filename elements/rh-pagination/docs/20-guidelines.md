## Usage

Use pagination to allow users to navigate through large amounts of data or content divided across multiple pages. Pagination should be used if there are `10 - 20` items in one view. However, the default number varies depending on context.


### Other options

If you need to use a more simple pagination element within a table or toolbar, the [PatternFly](https://www.patternfly.org/v4/components/pagination/design-guidelines/) pagination component has a less prominent design.


## Sizes

Use the Full size for all applications and the Compact size for when breakpoints get smaller. You must include the page input field according to these guidelines:

- If there are more than seven pages
- If the page amount is not known or cannot be determined
- If using the Compact size

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-usage-sizes.png' | url }}" alt="Image of pagination sizes and how to use them">
</uxdot-example>


### Compact size

The page input field must **always** be visible if using the Compact size so that users can access every page.

<uxdot-example width-adjustment="716px">
  <img src="{{ '../pagination-compact-size.png' | url }}" alt="Image of compact size paginations with page input field on the right and below">
</uxdot-example>


### Page input field orientation

The page input field can be oriented on the right or below pagination. If used below, it is horizontally centered by default.

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-pif-orientation-a.png' | url }}" alt="Image of two full size paginations; one has a page input field on the right and the other has one below">
</uxdot-example>

<uxdot-example width-adjustment="570px">
  <img src="{{ '../pagination-pif-orientation-b.png' | url }}" alt="Image of full size and compact size pagination; one has a page input field on the right and the other has one below">
</uxdot-example>


## Behavior

### Page input field

The page input field allows users to type their desired page number, this helps avoid clicking the control buttons too much. Users can press the `Enter` key to jump to that page.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>If there are more than seven pages, the page input field must be visible.</p>
</rh-alert>

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-behavior-pif.png' | url }}" alt="Image of two groups of pagination; one group shows full sizes with different page locations and the other group shows compact sizes with different page locations">
</uxdot-example>


### Low page count

In some edge cases, pagination may need to display a very low page count like one.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Pagination will not be displayed if a search returns zero results or if there is no data or content to list.</p>
</rh-alert>

<uxdot-example width-adjustment="576px">
  <img src="{{ '../pagination-behavior-low-page-count.png' | url }}" alt="Image of groups of paginations with low page counts; first pagination group shows only 1 page and the second group shows only 3 pages">
</uxdot-example>


### Disabled butons

When the beginning or end of the pagination range is reached, certain control buttons are disabled.

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-behavior-disabled-buttons.png' | url }}" alt="Image of paginations with a variety of disabled control buttons">
</uxdot-example>


### Truncation

If there are more than seven pages, single or double truncation is displayed based on your location.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Truncation does not apply to the Compact size because it does not display page numbers.</p>
</rh-alert>

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-behavior-truncation.png' | url }}" alt="Image of paginations with a variety of truncation examples">
</uxdot-example>


## Layout

### Alignment

Both pagination sizes and orientations are horizontally centered below content by default.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '"../pagination-alignment-pif-right-a.png' | url }}" alt="Image of full size pagination with the page input field on the right">
</uxdot-example>

<uxdot-example width-adjustment="576px" variant="full" alignment="left" no-border>
  <img src="{{ '../pagination-alignment-pif-right-b.png' | url }}" alt="Image of compact size pagination with the page input field on the right">
</uxdot-example>

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../pagination-alignment-pif-below-a.png' | url }}" alt="Image of full size pagination with the page input field below">
</uxdot-example>

<uxdot-example width-adjustment="576px" variant="full" alignment="left" no-border>
  <img src="{{ '../pagination-alignment-pif-below-b.png' | url }}" alt="Image of compact size pagination with the page input field below">
</uxdot-example>


## Responsive design

### With page input field

As breakpoints get smaller, pagination will switch sizes to accommodate the page input field if used on the right.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../pagination-page-input-field-right.png' | url }}" alt="Images of pagination with the page input field on the right">
</uxdot-example>

If the page input field is used below, pagination will not switch sizes as quickly.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../pagination-page-input-field-below.png' | url }}" alt="Images of pagination with the page input field below">
</uxdot-example>


### Without page input field

When the page input field is not visible, it will become visible when the Full size switches to the Compact size.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../pagination-without-page-input-field.png' | url }}" alt="Image of pagination without page input field">
</uxdot-example>


## Best practices

### Compact size

Do not use the Compact size without including the page input field.

<uxdot-example width-adjustment="206px" danger>
  <img src="{{ '../pagination-best-practice-1.png' | url }}" alt="Image of compact size pagination with no page input field is incorrect usage">
</uxdot-example>


### No input field

The page input field needs to be visible if there is truncation.

<uxdot-example width-adjustment="570px" danger>
  <img src="{{ '../pagination-best-practice-2.png' | url }}" alt="Image of pagination with truncation but no page input field is incorrect usage">
</uxdot-example>


### Truncation

Do not truncate pagination if there is less than seven pages.

<uxdot-example width-adjustment="414px" danger>
  <img src="{{ '../pagination-best-practice-3.png' | url }}" alt="Image of pagination that is truncating only four pages is incorrect usage">
</uxdot-example>


### Order or alignment

Do not change the order or alignment of the page input field.

<uxdot-example width-adjustment="794px" danger>
  <img src="{{ '../pagination-best-practice-4.png' | url }}" alt="Image of paginations with page input fields; one group shows incorrect order and the other group shows incorrect alignment">
</uxdot-example>
