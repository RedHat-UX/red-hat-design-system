{% section %}
## Usage

Use a tag to highlight an element on a page to draw attention to it or make it more searchable.

### Tag vs. Badge

If you need to reflect counts like number of objects, events, or unread items, use a Badge instead.

### Variations
Both variations come in <code>red</code>, <code>orange</code>, <code>green</code>, <code>cyan</code>, <code>blue</code>, <code>purple</code>, and <code>gray</code> colors. The white variation is for the dark theme only. A filled tag can be used to add more visual prominence whereas an unfilled tag can be used for grouping. You can use both variations in the same layout or user interface, just not in the same area or container. Whatever you choose, be sure to maintain consistency as best as possible.

<rh-alert state="warning">
<h3 slot="header">Warning</h3>
<p>Relying on color alone to communicate information causes barriers to access for many users. Learn more in the <a href="accessibility">Accessibility section</a>.</p>
</rh-alert>

{% example palette="light",
        width=404,
        alt="A row of filled tags with text ‘Filled tags’ underneath and a row of unfilled tags with text ‘Unfilled tags’ underneath",
        src="../tag-variations-colors.png" %}

### Icons

Add an icon when additional visual information is helpful or to distinguish tags of the same color.

<rh-alert state="info">
<h3 slot="header">Helpful tip</h3>
<p>Add an icon when additional visual information is helpful or to distinguish tags of the same color.</p>
</rh-alert>

{% example palette="light",
        width=475,
        alt="A row of tags showing examples of optional icons",
        src="../tag-icons.png" %}

### White Tag

The unfilled white tag should be used in the dark theme or on dark backgrounds. It should also be used on its own and not be grouped. The text should not indicate a status, it should be written to be a descriptive caption to elements nearby.

{% example palette="dark",
        width=1000,
        alt="A white tag used on top of two blocks of various text styles",
        src="../tag-white-tag.png" %}

### Status
#### Color

Colors may be used to indicate status if desired. Regardless of what the text says, it is recommended <strong>not</strong> to use a red tag unless it is communicating a danger or error state.

<rh-alert state="info">
<h3 slot="header">Helpful tip</h3>
<p>Filled tags may communicate a status or message more effectively than unfilled tags because they are more visually prominent.</p>
</rh-alert>

{% example palette="dark",
        width=503,
        alt="A row of filled tags with examples of unique status text labels per each color",
        src="../tag-status-color.png" %}



{% endsection %}

{% section %}
## Writing Content

### Content

### Character count
<table style="width:100%">
    <tr>
        <th>Element</th>
        <th>Character count</th>
    </tr>
    <tr>
        <td>Body</td>
        <td>20</td>
    </tr>
</table>

{% endsection %}

{% include 'feedback.html' %}
