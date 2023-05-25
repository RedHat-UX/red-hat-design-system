{% section %}
## Style

A tag is colored text on a pill background which may include an optional icon. A 
tag background can be colored, white, or transparent and it always includes a 
border.

{% endsection %}

{% section %} 

### Anatomy
{% example palette="light",
           alt="Anatomy of a tag with annotations; number 1 is pointing to the container, number 2 is pointing to the text label, and number 3 is pointing to an optional icon",
           src="../tag-anatomy.png" %}
 
1. Container and border
1. Text label
1. Optional icon

### Variations

There are two available variations and the only difference is the background 
colors. Both variations include an optional slot for displaying a small icon to 
the left of the text label.

{% example palette="light",
           alt="Tags with text describing each variation",
           src="../tag-variations.png" %}

### Theme

Both variations are available in the light theme. There is an unfilled white tag 
available in the dark theme if necessary.

#### Light Theme
    
{% example palette="light",
        alt="Light theme tag examples",
        src="../tag-theme-light.png" %}

#### Dark Theme
{% example palette="darkest",
        alt="Dark theme tag examples",
        src="../tag-theme-dark.png" %}

### Configuration

Both variations have the same height and border radius.

{% example palette="light",
        alt="How a tag is constructed showing border radius, icon, and height details",
        src="../tag-configuration.png" %}

### Space

{% example palette="light",
        alt="Light theme tag spacing within the element and when grouped",
        src="../tag-space-theme-light.png" %}

{% example palette="darkest",
        alt="Light theme tag spacing within the element",
        src="../tag-space-theme-dark.png" %}

| Property                                 | Current value  |
| ---------------------------------------- | -------------- |
| ![4 pixel spacer](../tag-4px-spacer.png) | 4px<br>0.25rem |
| ![8 pixel spacer](../tag-8px-spacer.png) | 8px<br>0.5rem  |

{style="width:100%"}

### Interaction states

A tag includes only text and an optional icon and is not interactive right now.

{% endsection %}
