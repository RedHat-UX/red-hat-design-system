{% section %}
## Style

A tag is colored text on a pill background which may include an optional icon. A tag background can be colored, white, or transparent and it always includes a border.

{% endsection %}

{% section %} 

### Anatomy
{% example palette="light",
           width=554,
           alt="Anatomy of a tag with annotations; number 1 is pointing to the container, number 2 is pointing to the text label, and number 3 is pointing to an optional icon",
           src="../tag-anatomy.png" %}
           
<ol>
        <li>Container and border</li>
        <li>Text label</li>
        <li>Optional icon</li>
</ol>

### Variations

There are two available variations and the only difference is the background colors. Both variations include an optional slot for displaying a small icon to the left of the text label.
{% example palette="light",
           width=584,
           alt="Tags with text describing each variation",
           src="../tag-variations.png" %}

### Theme

Both variations are available in the light theme. There is an unfilled white tag available in the dark theme if necessary.

#### Light Theme
    
{% example palette="light",
        width=404,
        alt="Light theme tag examples",
        src="../tag-theme-light.png" %}

#### Dark Theme
{% example palette="darkest",
        width=53,
        alt="Dark theme tag examples",
        src="../tag-theme-dark.png" %}

### Configuration

Both variations have the same height and border radius.

{% example palette="light",
        width=473,
        alt="How a tag is constructed showing border radius, icon, and height details",
        src="../tag-configuration.png" %}

### Space

{% example palette="light",
        width=528,
        alt="Light theme tag spacing within the element and when grouped",
        src="../tag-space-theme-light.png" %}

{% example palette="darkest",
        width=71,
        alt="Light theme tag spacing within the element",
        src="../tag-space-theme-dark.png" %}

<table style="width:100%">
    <tr>
        <th>Property</th>
        <th>Current value</th>
    </tr>
    <tr>
        <td><img src="../tag-4px-spacer.png" alt="4 pixel spacer"></td>
        <td>4px<br>0.25rem</td>
    </tr>
    <tr>
         <td><img src="../tag-8px-spacer.png" alt="8 pixel spacer"></td>
        <td>8px<br>0.5rem</td>
    </tr>
</table>

### Interaction states

A tag includes only text and an optional icon and is not interactive right now.

{% endsection %}