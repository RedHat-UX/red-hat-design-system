{% section %}

## Usage

Use pagination to allow users to navigate through large amounts of data or content divided across multiple pages. Pagination should be used if there are `10 - 20` items in one view. However, the default number varies depending on context.

### Other options

If you need to use a more simple pagination element within a table or toolbar, the [PatternFly](https://www.patternfly.org/v4/components/pagination/design-guidelines/) pagination component has a less prominent design.
{% endsection %}

{% section %}

## Sizes

Use the Full size for all applications and the Compact size for when breakpoints get smaller. You must include the page input field according to these guidelines:

- If there are more than seven pages
- If the page amount is not known or cannot be determined
- If using the Compact size

{% example palette="light",
           width=794,
           alt="Image of pagination sizes and how to use them",
           src="../pagination-usage-sizes.png" %}

### Compact size

The page input field must **always** be visible if using the Compact size so that users can access every page.

{% example palette="light",
           width=716,
           alt="Image of compact size paginations with page input field on the right and below",
           src="../pagination-compact-size.png" %}

### Page input field orientation

The page input field can be oriented on the right or below pagination. If used below, it is horizontally centered by default.

{% example palette="light",
           width=794,
           alt="Image of two full size paginations; one has a page input field on the right and the other has one below",
           src="../pagination-pif-orientation-a.png" %}

{% example palette="light",
           width=570,
           alt="Image of full size and compact size pagination; one has a page input field on the right and the other has one below",
           src="../pagination-pif-orientation-b.png" %}  
{% endsection %}

{% section %}

## Behavior

### Page input field

The page input field allows users to type their desired page number, this helps avoid clicking the control buttons too much. Users can press the `Enter` key to jump to that page.

{% alert title="Warning", state="warning" %}
If there are more than seven pages, the page input field must be visible.
{% endalert %}

{% example palette="light",
           width=794,
           alt="Image of two groups of pagination; one group shows full sizes with different page locations and the other group shows compact sizes with different page locations",
           src="../pagination-behavior-pif.png" %}

### Low page count

In some edge cases, pagination may need to display a very low page count like one.

{% alert title="Helpful tip" %}
Pagination will not be displayed if a search returns zero results or if there is no data or content to list.
{% endalert %}

{% example palette="light",
           width=575,
           alt="Image of groups of paginations with low page counts; first pagination group shows only 1 page and the second group shows only 3 pages",
           src="../pagination-behavior-low-page-count.png" %}

### Disabled butons

When the beginning or end of the pagination range is reached, certain control buttons are disabled.

{% example palette="light",
           width=794,
           alt="Image of paginations with a variety of disabled control buttons",
           src="../pagination-behavior-disabled-buttons.png" %}

### Truncation

If there are more than seven pages, single or double truncation is displayed based on your location.

{% alert title="Helpful tip" %}
Truncation does not apply to the Compact size because it does not display page numbers.
{% endalert %}

{% example palette="light",
           width=794,
           alt="Image of paginations with a variety of truncation examples",
           src="../pagination-behavior-truncation.png" %}

{% endsection %}

{% section %}

## Layout

### Alignment

Both pagination sizes and orientations are horizontally centered below content by default.

![Image of full size pagination with the page input field on the right]({{ '../pagination-alignment-pif-right-a.png' | url }}){style="--inline-img-max-width:1000px;"}

![Image of compact size pagination with the page input field on the right]({{ '../pagination-alignment-pif-right-b.png ' | url }}){style="--inline-img-max-width:576px;"}

![Image of full size pagination with the page input field below]({{ '../pagination-alignment-pif-below-a.png' | url }}){style="--inline-img-max-width:1000px;"}

![Image of compact size pagination with the page input field below]({{ '../pagination-alignment-pif-below-b.png' | url }}){style="--inline-img-max-width:576px;"}

{% endsection %}
{% section %}

## Responsive design

### With page input field

As breakpoints get smaller, pagination will switch sizes to accommodate the page input field if used on the right.

![Image of pagination with the page input field on the right for desktop]({{ '../pagination-responsive-pif-right-desktop.png' | url }}){style="--inline-img-max-width:1000px;"}

Desktop
{.example-notes}

![Image of pagination with the page input field on the right for tablet]({{ '../pagination-responsive-pif-right-tablet.png' | url }}){style="--inline-img-max-width:768px;"}

Tablet
{.example-notes}

![Image of pagination with the page input field on the right for large mobile screens]({{ '../pagination-responsive-pif-right-mobile-large.png' | url }}){style="--inline-img-max-width:576px;"}

Mobile, large
{.example-notes}

![Image of pagination with the page input field below for small mobile screens]({{ '../pagination-responsive-pif-right-mobile-small.png' | url }}){style="--inline-img-max-width:360px;"}

Mobile, small
{.example-notes}

If the page input field is used below, pagination will not switch sizes as quickly.

![Image of pagination without page input field for desktop]({{ '../pagination-responsive-pif-below-desktop.png' | url }}){style="--inline-img-max-width:1000px;"}

Desktop
{.example-notes}

![Image of pagination with the page input field below for tablet]({{ '../pagination-responsive-pif-below-tablet.png' | url }}){style="--inline-img-max-width:768px;"}

Tablet
{.example-notes}

![Image of pagination with the page input field below for large mobile screens]({{ '../pagination-responsive-pif-below-mobile-large.png' | url }}){style="--inline-img-max-width:576px;"}

Mobile, large
{.example-notes}

![Image of pagination with the page input field below for small mobile screens]({{ '../pagination-responsive-pif-below-mobile-small.png' | url }}){style="--inline-img-max-width:360px;"}

Mobile, small
{.example-notes}

### Without page input field

When the page input field is not visible, it will become visible when the Full size switches to the Compact size.

![Image of pagination without page input field for desktop]({{ '../pagination-responsive-no-pif-desktop.png' | url }}){style="--inline-img-max-width:1000px;"}

Desktop
{.example-notes}

![Image of pagination without page input field for tablet]({{ '../pagination-responsive-no-pif-tablet.png' | url }}){style="--inline-img-max-width:768px;"}

Tablet
{.example-notes}

![Image of pagination without page input field for large mobile screens]({{ '../pagination-responsive-no-pif-mobile-large.png' | url }}){style="--inline-img-max-width:576px;"}

Mobile, large
{.example-notes}

![Image of pagination without page input field for small mobile screens]({{ '../pagination-responsive-no-pif-mobile-small.pngg' | url }}){style="--inline-img-max-width:360px;"}

Mobile, small
{.example-notes}

{% endsection %}
{% section %}

## Best practices

### Compact size

Do not use the Compact size without including the page input field.

{% example palette="wrong",
           width=206,
           alt="Image of compact size pagination with no page input field is incorrect usage",
           src="../pagination-best-practice-1.png" %}

### No input field

The page input field needs to be visible if there is truncation.

{% example palette="wrong",
           width=570,
           alt="Image of pagination with truncation but no page input field is incorrect usage",
           src="../pagination-best-practice-2.png" %}

### Truncation

Do not truncate pagination if there is less than seven pages.

{% example palette="wrong",
           width=414,
           alt="Image of pagination that is truncating only four pages is incorrect usage",
           src="../pagination-best-practice-3.png" %}

### Order or alignment

Do not change the order or alignment of the page input field.

{% example palette="wrong",
           width=794,
           alt="Image of paginations with page input fields; one group shows incorrect order and the other group shows incorrect alignment",
           src="../pagination-best-practice-4.png" %}
{% endsection %}
