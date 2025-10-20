## Style

Pagination is a horizontal row of square containers that include a control button or page number in the middle. A maximum of seven pages can be displayed before truncation and the appearance of the page input field. The page input field includes a text label, field, and link to the last page. Pagination with truncation must include a page input field so users can access hidden pages.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="736px">
    <img alt="Pagination anatomy with lots of annotations"
         src="../pagination-anatomy.svg"
         width="736"
         height="384">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>First page</li>
      <li>Previous page</li>
      <li>Inactive page</li>
      <li>Active page</li>
      <li>Next page</li>
      <li>Last page</li>
      <li>Navigation controls</li>
      <li>Truncation</li>
      <li>Page input field</li>
      <li>Page numbers</li>
    </ol>
  </figcaption>
</figure>

## Variants

### Box variant

The box variant shows a background color for each page number and navigation control. When a page is active, a blue border appears at the top of the button.

<uxdot-example color-palette="lightest" width-adjustment="736px">
  <img alt="Truncated pagination with 50 pages and an input on the right hand side."
       src="../pagination-style-box-variant.svg"
       width="736"
       height="48">
</uxdot-example>

### Borderless variant

The borderless variant has transparent backgrounds for all buttons. The active state for a page number shows a blue border on the bottom.

{% alert "info" %}
**Note:** Use `variant="borderless"` in your code. The old `variant="open"` is deprecated but still works for backward compatibility.
{% endalert %}

<uxdot-example color-palette="lightest" width-adjustment="736px">
  <img alt="Truncated pagination with 50 pages and an input on the right hand side. This version is 'borderless' where there is no background color to denote a box to click on."
       src="../pagination-style-open-variant.svg"
       width="736"
       height="48">
</uxdot-example>

## Sizes

There are two available sizes: Default and Small.

### Default

The default pagination button size is `--rh-size-icon-4.1`.

<uxdot-example color-palette="lightest" width-adjustment="548px">
  <img alt="A truncated pagination with 50 pages and an input below the pagination."
       src="../pagination-style-size-default.svg"
       width="548"
       height="116">
</uxdot-example>


### Small

The small pagination button size is `--rh-size-icon-03`. The page input field size does not change.

<uxdot-example color-palette="lightest" width-adjustment="560px">
 <img alt="A small sized truncated pagination with 50 pages and an input to the right of the pagination."
      src="../pagination-style-size-small.svg"
      width="560"
      height="36">
</uxdot-example>

## Color scheme
<a id="theme"></a>

Pagination is available in both light and dark color schemes.
Consumers should strive to place Pagination only on lightest and darkest surface
colors to prevent background colors of the box variant from bleeding into the surface background color.

### Light scheme

<div class="grid sm-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="348px">
    <img alt="Light theme pagination"
         src="../pagination-style-theme-lightest-box.svg"
         width="348"
         height="116">
  </uxdot-example>

  <uxdot-example color-palette="lightest" width-adjustment="348px">
    <img alt="Light theme pagination borderless variant"
         src="../pagination-style-theme-lightest-open.svg"
         width="348"
         height="116">
  </uxdot-example>
</div>

### Dark scheme

<div class="grid sm-two-columns">
  <uxdot-example color-palette="darkest" width-adjustment="348px">
    <img alt="Darkest theme pagination"
         src="../pagination-style-theme-darkest-box.svg"
         width="348"
         height="116">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="348px">
    <img alt="Darkest theme pagination borderless variant"
         src="../pagination-style-theme-darkest-open.svg"
         width="348"
         height="116">
  </uxdot-example>
</div>

## Configuration

The page input field can be horizontally or vertically centered with pagination.

<uxdot-example color-palette="lightest" width-adjustment="736px">
  <img alt="Pagination construction showing horizontal and vertical alignment"
       src="../pagination-style-configuration-1.svg"
       width="736"
       height="212">
</uxdot-example>

The width of page number buttons, navigation control buttons, and truncation stays the same.

<uxdot-example color-palette="lightest" width-adjustment="736px">
  <img alt="Pagination construction showing button widths for normal and size SM versions."
       src="../pagination-style-configuration-2.svg"
       width="736"
       height="343">
</uxdot-example>

### Compact Configuration

Compact pagination omits the page numbers and moves the page input field between the navigation controls. This should be used occasionally and only in layouts with very little space for a pagination element.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>If you have enough space, the <a href="/elements/pagination/guidelines/#responsive-design">mobile version</a>, which has the full page input field to the right or below, is preferred.</p>
</rh-alert>

The compact configuration comes in both the box and borderless variant styles. It's also available in the default and small sizes.

<uxdot-example color-palette="lightest" width-adjustment="720px">
  <img alt="Four paginations. All compact. Two normal sized and two small sized. Box and borderless."
       src="../pagination-style-compact-light.svg"
       width="720"
       height="148">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="720px">
  <img alt="Same as above but dark color palette."
       src="../pagination-style-compact-dark.svg"
       width="1140"
       height="276">
</uxdot-example>

### Active page

Styles for the active page are different from inactive pages so users can see their location. In the box and borderless variants, active pages show a blue border either at the top or bottom. Active page styles do not apply to control buttons because they are not page numbers.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Active page styles are not visible in the compact configuration because there are no page numbers.</p>
</rh-alert>

The examples below show active page styles for page 4.

<uxdot-example color-palette="lightest" width-adjustment="548px">
  <img alt="Two light theme paginations; both are showing an active page of 4. Normal and borderless variants."
       src="../pagination-active-page-theme-light.svg"
       width="548"
       height="144">
</uxdot-example>

<uxdot-example no-border variant="full">
  <img alt="Two dark theme paginations; both are showing an active page of 4. Normal and borderless variants."
       src="../pagination-active-page-theme-dark.svg"
       width="1140"
       height="272">
</uxdot-example>


## Space

Space values are the same for both sizes, both variants, and on all viewport sizes.

<uxdot-example color-palette="lightest" width-adjustment="548px">
  <img alt="Pagination spacing for both sizes and variants."
       src="../pagination-style-space-1.svg"
       width="548"
       height="400">
</uxdot-example>

Spacing between buttons and the page input field stays the same, whether the input field is to the right or below.

<uxdot-example color-palette="lightest" width-adjustment="736px">
  <img alt="Pagination spacing between the numbers and input field."
       src="../pagination-style-space-2.svg"
       width="736"
       height="252">
</uxdot-example>

The compact configuration maintains the 2px spacing between the navigation controls, and the spacing for the page input field remains the same as well. There is a large space (`var(--rh-space-lg, 16px)`) on either side of the page input field.

<uxdot-example color-palette="lightest" width-adjustment="328px">
  <img alt="Pagination spacing for the compact version with stepper buttons and input in the middle."
       src="../pagination-style-space-compact.svg"
       width="328"
       height="171">
</uxdot-example>

## Interaction states

Interactive elements include control and inactive page buttons, the page input field, and last page link.

### Hover

Control and inactive page number buttons have the same hover state. Truncation is not interactive so it has no hover state.

<uxdot-example color-palette="lightest" width-adjustment="736px">
  <img alt="Light theme pagination hover states"
       src="../pagination-style-int-states-hover-theme-light.svg"
       width="736"
       height="611">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="736px">
  <img alt="Dark theme pagination hover states"
       src="../pagination-style-int-states-hover-theme-dark.svg"
       width="736"
       height="611">
</uxdot-example>

### Focus

<uxdot-example color-palette="lightest" width-adjustment="736px">
  <img alt="Light theme pagination focus states"
       src="../pagination-style-int-states-focus-theme-light.svg"
       width="736"
       height="608">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="736px">
  <img alt="Dark theme pagination focus states"
       src="../pagination-style-int-states-focus-theme-dark.svg"
       width="736"
       height="608">
</uxdot-example>

### Active

<uxdot-example color-palette="lightest" width-adjustment="736px">
  <img alt="Light theme pagination active states"
       src="../pagination-style-int-states-active-theme-light.svg"
       width="736"
       height="611">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="736px">
  <img alt="Dark theme pagination active states"
       src="../pagination-style-int-states-active-theme-dark.svg"
       width="736"
       height="611">
</uxdot-example>
