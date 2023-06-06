{% section %}
## Usage

Use a tag to highlight an element on a page to draw attention to it or make it 
more searchable.

### Tag vs. badge

If you need to reflect counts like number of objects, events, or unread items, 
use a Badge instead.

## Variations
Both variations come in `red`, `orange`, `green`, `cyan`, 
`blue`, `purple`, and `gray` colors. The white 
variation is for the dark theme only. A filled tag can be used to add more 
visual prominence whereas an unfilled tag can be used for grouping. You can use 
both variations in the same layout or user interface, just not in the same area 
or container. Whatever you choose, be sure to maintain consistency as best as 
possible.

{% alert state='warning', title='Warning' %}
Relying on color alone to communicate information causes barriers to access for 
many users. Learn more in the [Accessibility](/accessibility) section.
{% endalert %}

{% example palette="light",
        alt="A row of filled tags with text ‘Filled tags’ underneath and a row of unfilled tags with text ‘Unfilled tags’ underneath",
        src="../tag-variations-colors.png" %}

## Icons

Add an icon when additional visual information is helpful or to distinguish tags 
of the same color.

{% alert title="Helpful tip" %}
Add an icon when additional visual information is helpful or to distinguish 
tags of the same color.
{% endalert %}

{% example palette="light",
        alt="A row of tags showing examples of optional icons",
        src="../tag-icons.png" %}

## White tag

The unfilled white tag should be used in the dark theme or on dark backgrounds. 
It should also be used on its own and not be grouped. The text should not 
indicate a status, it should be written to be a descriptive caption to elements 
nearby.

![A white tag used on top of two blocks of various text styles](../tag-white-tag.png){style="--inline-img-max-width:1000px;"}

## Status
### Color

Colors may be used to indicate status if desired. Regardless of what the text 
says, it is recommended **not** to use a red tag unless it is 
communicating a danger or error state.

{% alert title="Helpful tip" %}
Filled tags may communicate a status or message more effectively than unfilled 
tags because they are more visually prominent.
{% endalert %}

{% example palette="light",
        alt="A row of filled tags with examples of unique status text labels per each color",
        src="../tag-status-color.png" %}

### Text

The text you write can communicate a status as well, so choose a corresponding 
color that makes sense.

{% example palette="light",
        alt="Two groups of two tags with examples of correct status text labels",
        src="../tag-status-text.png" %}



{% endsection %}

{% section %}
## Writing content

### Text labels

Text labels should be written to add context or clarity using as few words as 
possible. If text needs to be longer, use a caption or another text style 
instead.

{% example palette="light",
        alt="Two groups of two tags with examples of correct and incorrect text labels",
        src="../tag-text-labels.png" %}

| Element    | Character count |
| ---------- | --------------- |
| Text label | 20              |

{style="width:100%"}

## Grouping

A tag can be used on its own or grouped in a row. When there are too many tags 
in one row, a new row will appear.

{% example palette="light",
        alt="Two groups of two tags, one group is three tags in one row and the other group is two tags in one row and one tag in a second row",
        src="../tag-grouping.png" %}

## Best practices

### Mixing variations

Do not mix variations or tags with and without icons in the same area or 
container.

{% example palette="light",
        alt="Two rows of tags; the first row shows a mix of variations and the second row shows a mix of tags with and without icons, both are incorrect usage",
        src="../tag-best-practice-1.png" %}

### Dark theme tags

Do not use light theme tags in the dark theme, [contact us][contact] if you need 
dark theme tags.

{% example palette="darkest",
        alt="Light theme tags used on a dark background which is incorrect usage",
        src="../tag-best-practice-2.png" %}


### Custom tags

Do not make your own custom tags. If you need a custom set of tags designed, 
[contact us][contact].

{% example palette="light",
        alt="Three tags with custom colors which is incorrect usage",
        src="../tag-best-practice-3.png" %}


{% endsection %}

[contact]: https://github.com/RedHat-UX/red-hat-design-system/discussions
