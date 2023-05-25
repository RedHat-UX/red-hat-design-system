{% section %}

## Style

Pagination is a horizontal row of square containers that include a control button or page number in the middle. A maximum of seven pages can be displayed before truncation and the appearance of the **page input field**. The page input field includes a text label, field, and link to the last page. Pagination with truncation **must** include a page input field so users can access hidden pages.

### Anatomy

{% example palette="light",
           alt="Image of pagination anatomy with lots of annotations",
           src="../pagination-anatomy.png" %}

1. First page
2. Previous page
3. Inactive page
4. Active page
5. Next page
6. Last page
7. Navigation controls
8. Truncation
9. Page input field
10. Page numbers
    {.example-notes}

{% endsection %}

{% section %}

## Sizes

There are two available sizes and the only difference is the Compact size does not display page numbers.

{% alert title="Helpful tip" %}
The Compact size always includes the page input field.
{% endalert %}

{% example palette="light",
           alt="Image of three paginations; full size, full size with page input field, and compact size",
           src="../pagination-style-sizes.png" %}

{% endsection %}

{% section %}

## Theme

Pagination is available in both light and dark themes.

## Light theme

{% example palette="light",
           alt="Image of light theme pagination",
           src="../pagination-theme-light.png" %}

## Dark theme

{% example palette="darkest",
           alt="Image of dark theme pagination",
           src="../pagination-theme-dark.png" %}

{% endsection %}

{% section %}

## Configuration

Pagination is a collection of navigation elements including controls, page numbers, and a page input field. The page input field can be horizontally or vertically centered with pagination. The amount and width of square containers is always the same. Each container is `50px x 50px`. In Full size pagination, there are 11 squares at `570px` combined width and in the Compact size, there are four squares at `206px` combined width.

{% example palette="light",
           alt="Image of pagination construction; several pagination examples showing details like alignment, height, width, and more",
           src="../pagination-configuration.png" %}

### Active page

Styles for the active page are different from inactive pages so users can see their location. Active page styles do not apply to control buttons either because they are not page numbers.

{% alert title="Helpful tip" %}
Active page styles do not apply to the Compact size because there are no page numbers visible.
{% endalert %}

{% example palette="light",
           alt="Image of two light theme paginations; one is showing an active page of 4 and the other one is showing an active page of 25",
           src="../pagination-active-page-theme-light.png" %}

{% example palette="darkest",
           alt="Image of two dark theme paginations; one is showing an active page of 4 and the other one is showing an active page of 25",
           src="../pagination-active-page-theme-dark.png" %}

{% endsection %}

{% section %}

## Space

Space values between elements are the same for both sizes and on all breakpoints.

{% example palette="light",
           alt="Image of pagination spacing for all sizes and orientations",
           src="../pagination-space.png" %}

| Spacer                                                            | Current value |
| ----------------------------------------------------------------- | ------------- |
| ![4px spacer]({{ '../pagination-4px-spacer.png'   | url }})       | 4px 0.25rem   |
| ![6px spacer]({{ '../pagination-6px-spacer.png'   | url }})       | 6px 0.375rem  |
| ![8px spacer]({{ '../pagination-8px-spacer.png'   | url }})       | 8px 0.5rem    |
| ![24px spacer]({{ '../pagination-24px-spacer.png' | url }})       | 24px 1.5rem   |
| ![32px spacer]({{ '../pagination-32px-spacer.png' | url }})       | 32px 2.0rem   |

{% endsection %}

{% section %}

## Interaction states

Interactive elements include control and inactive page buttons, the page input field, and last page link.

### Hover

Control and inactive page number buttons have the same hover state. Truncation is not interactive so it has no hover state.

{% example palette="light",
           alt="Image of light theme pagination hover states",
           src="../pagination-interaction-state-hover-theme-light.png" %}

{% example palette="darkest",
           alt="Image of dark theme pagination hover states",
           src="../pagination-interaction-state-hover-theme-dark.png" %}

| Property                           | Light theme | Dark theme |
| ---------------------------------- | :---------: | :--------: |
| Color - control - top border       |   #4D4D4D   |  #C7C7C7   |
| Color - inactive page - top border |   #4D4D4D   |  #C7C7C7   |
| Color - field - bottom border      |   #0066CC   |  #73BCF7   |
| Color - last number link           |   #004080   |  #BEE1F4   |
| Text decoration - last number      |  Underline  | Underline  |

### Focus

{% example palette="light",
           alt="Image of light theme pagination focus states",
           src="../pagination-interaction-state-focus-theme-light.png" %}

{% example palette="darkest",
           alt="Image of dark theme pagination focus states",
           src="../pagination-interaction-state-focus-theme-dark.png" %}

| Property                           | Light theme | Dark theme |
| ---------------------------------- | :---------: | :--------: |
| Color - control - top border       |   #4D4D4D   |  #C7C7C7   |
| Color - inactive page - top border |   #4D4D4D   |  #C7C7C7   |
| Color - field - bottom border      |   #0066CC   |  #73BCF7   |
| Color - last number link           |   #004080   |  #BEE1F4   |
| Text decoration - last number      |  Underline  | Underline  |
| Color - focus ring                 |   #0066CC   |  #73BCF7   |

### Active

{% example palette="light",
           alt="Image of light theme pagination active states",
           src="../pagination-interaction-state-active-theme-light.png" %}

{% example palette="darkest",
           alt="Image of dark theme pagination active states",
           src="../pagination-interaction-state-active-theme-dark.png" %}

| Property                           | Light theme | Dark theme |
| ---------------------------------- | :---------: | :--------: |
| Color - control - top border       |   #4D4D4D   |  #C7C7C7   |
| Color - inactive page - top border |   #4D4D4D   |  #C7C7C7   |
| Color - field - bottom border      |   #0066CC   |  #73BCF7   |
| Color - last number link           |   #004080   |  #BEE1F4   |
| Text decoration - last number      |  Underline  | Underline  |
| Color - focus ring                 |   #0066CC   |  #73BCF7   |

{% endsection %}
