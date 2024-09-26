## Usage

Use pagination to allow users to navigate through large amounts of data or content divided across multiple pages. Pagination should be used if there are 10 - 20 items in one view. However, the default number varies depending on context.

### Other options

If you need to use a more simple pagination element within a table or toolbar, the [PatternFly](https://www.patternfly.org/v4/components/pagination/design-guidelines/) pagination component has a less prominent design.


## Sizes and style variants

### Sizes

While the [default size](/elements/pagination/style/#default/) works better in most contexts, the [small size](/elements/pagination/style/#small/) can be used for areas with more densely packed content. Include the page input field according to these guidelines:

- If there are more than seven pages
- If the page amount is not known or cannot be determined
- If pagination is used on mobile to ensure that users can access every page without page numbers

### Box vs. open

The [box variant](/elements/pagination/style/#box-variant) is the default and button backgrounds help users see the touch targets clearly. The [open variant](/elements/pagination/style/#open-variant) can be used for situations that require a more minimal design.

## Behavior

### Page input field

The page input field allows users to type their desired page number, this helps avoid clicking the control buttons too much. Users can press the <kbd>Enter</kbd> key to jump to that page.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>If there are more than seven pages, the page input field must be visible.</p>
</rh-alert>

<uxdot-example width-adjustment="736px">
  <img src="../pagination-guidelines-page-input-field.svg" alt="Two groups of pagination; one group shows full sizes with 8 pages and 50 pages of pagination and the other group shows compact sizes with the same amount of pages.">
</uxdot-example>

### Low page count

In some edge cases, pagination may need to display a very low page count like one.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Pagination will not be displayed if a search returns zero results or if there is no data or content to list.</p>
</rh-alert>

<uxdot-example width-adjustment="736px">
  <img src="../pagination-guidelines-low-page-count.svg" alt="Groups of paginations with low page counts; first pagination group shows only 1 page and the second group shows only 3 pages">
</uxdot-example>

### Disabled butons

When the beginning or end of the pagination range is reached, certain control buttons are disabled.

<uxdot-example width-adjustment="736px">
  <img src="../pagination-guidelines-disabled-buttons-1.svg" alt="Paginations with a variety of disabled control buttons">
</uxdot-example>

The arrow icon color for disabled buttons in both variants is the same.

<uxdot-example width-adjustment="736px">
  <img src="../pagination-guidelines-disabled-buttons-2.svg" alt="Paginations disabled stepper/arrow icons">
</uxdot-example>

### Truncation

If there are more than seven pages, single or double truncation is displayed based on your location.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Truncation does not apply to the mobile version because it does not display page numbers.</p>
</rh-alert>

<uxdot-example width-adjustment="736px">
  <img src="../pagination-guidelines-truncation.svg" alt="Paginations with a variety of truncation examples">
</uxdot-example>


## Layout

### Alignment

All of the pagination variants are horizontally centered below content by default.

<uxdot-example width-adjustment="800px">
  <img src="../pagination-layout-alignment.svg" alt="Four different versions of paginations center aligned to content above.">
</uxdot-example>

## Responsive design

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The compact configuration appears the same across all screen sizes.</p>
</rh-alert>

### With page input field

As viewport sizes get smaller, pagination will switch sizes to accommodate the page input field if used on the right. All of the variants behave similarly. If the page input field is used below, pagination will not switch sizes as quickly. This works similarly for the box and open variants at both sizes.

<uxdot-example width-adjustment="1140px" variant="full" alignment="left" no-border>
  <img src="../pagination-guidelines-responsive-with-pif-desktop.svg" alt="Pagination with the page input field on the right">
</uxdot-example>

Container widths greater than 768px

<uxdot-example width-adjustment="576px" variant="full" alignment="left" no-border>
  <img src="../pagination-guidelines-responsive-with-pif-tablet.svg" alt="Tablet / compact pagination with the page input field on the right">
</uxdot-example>

Container widths of 375px - 768px

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="../pagination-guidelines-responsive-with-pif-mobile.svg" alt="Mobile / compact pagination with the page input field on the bottom">
</uxdot-example>

Container widths less than 375px

### Without page input field

When the page input field is not visible, the field will become visible when the default size switches to the mobile version. This works the same for the box and open variants.

<uxdot-example width-adjustment="1140px" variant="full" alignment="left" no-border>
  <img src="../pagination-guidelines-responsive-no-pif-desktop.svg" alt="Pagination on desktop without the page input field">
</uxdot-example>

Container widths greater than 768px

<uxdot-example width-adjustment="576px" variant="full" alignment="left" no-border>
  <img src="../pagination-guidelines-responsive-no-pif-tablet.svg" alt="Tablet / compact pagination with the page input field on the right">
</uxdot-example>

Container widths of 375px - 768px

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="../pagination-guidelines-responsive-no-pif-mobile.svg" alt="Mobile / compact pagination with the page input field on the bottom">
</uxdot-example>


## Best practices

### No input field

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="372px">
      <img src="../pagination-guidelines-best-practices-1-do.svg" alt="Size SM truncated pagination with input below pages.">
    </uxdot-example>
    <p>The page input field needs to be visible when there is truncation or when only the navigation controls are available.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" width-adjustment="372px">
      <img src="../pagination-guidelines-best-practices-1-dont.svg" alt="Size SM truncated pagination without an input.">
    </uxdot-example>
    <p>Do not omit the page input field when users do not have the ability to navigate to every page quickly.</p>
  </uxdot-best-practice>
</div>

### Truncation

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="372px">
      <img src="../pagination-guidelines-best-practices-2-do.svg" alt="Size SM truncated pagination with eight pages.">
    </uxdot-example>
    <p>Truncation occurs automatically when there are more than seven pages.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" width-adjustment="270px">
      <img src="../pagination-guidelines-best-practices-2-dont.svg" alt="Pagination that is truncating only four pages is incorrect usage">
    </uxdot-example>
    <p>Do not truncate pagination if there are fewer than seven pages.</p>
  </uxdot-best-practice>
</div>


### Order or alignment

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="372px">
      <img src="../pagination-guidelines-best-practices-3-do.svg" alt="Pagination with input field center aligned below pagination">
    </uxdot-example>
    <p>Use the built-in alignment options for the page input field. If your language is read right to left, view the “Right to left” pagination demo.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" width-adjustment="372px">
      <img src="../pagination-guidelines-best-practices-3-dont.svg" alt="Truncated pagination with the input field on top and right aligned.">
    </uxdot-example>
    <p>Do not change the order or alignment of the page input field.</p>
  </uxdot-best-practice>
</div>


### Compact vs. mobile

<div class="grid sm-two-columns compact-vs-mobile">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="393px">
      <img src="../pagination-guidelines-best-practices-4-do.svg" alt="Pagination shown on a mobile device with arrows on top and an input field below.">
    </uxdot-example>
    <p>Use the default mobile style that comes with each variant.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" width-adjustment="393px">
      <img src="../pagination-guidelines-best-practices-4-dont.svg" alt="Pagination shown on a mobile device with input field in between arrows.">
    </uxdot-example>
    <p>Do not use the compact configuration in place of the default mobile style of another variant.</p>
  </uxdot-best-practice>
</div>

<style>
  .compact-vs-mobile ::part(container) {
    padding-block-start: 0;
  }
</style>