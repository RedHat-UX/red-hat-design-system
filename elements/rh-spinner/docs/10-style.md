{% section %}
## Style

The spinner is composed of three parts. The track outlines the trajectory of the spinner animation, and the indicator is the animated segment. A spinner can also include a text label, but this piece is not required.

### Anatomy

{% example palette="light",
           width=280,
           alt="Spinner with numbers pointing to parts of the element",
           src="../spinner-anatomy.svg" %}

<ol style="font-size: var(--rh-font-size-body-text-sm, 0.875rem); 
    color: var(--rh-color-text-secondary-on-light, #4d4d4d); 
    line-height: var(--rh-line-height-body-text, 1.5);">
        <li>Indicator</li>
        <li>Track</li>
        <li>Text label</li>
</ol>
{% endsection %}

{% section %}
## Theme

### Light theme
{% example palette="light",
           width=251,
           alt="Spinner against a white background",
           src="../spinner-light-theme.svg" %}

### Dark theme
{% example palette="darkest",
           width=251,
           alt="Spinner against the darkest gray background",
           src="../spinner-dark-theme.svg" %}
{% endsection %}

{% section %}
### Alignment

The spinner should be centered horizontally and vertically in a container. This helps demonstrate that the whole container is loading, rather than only the top half, for example.

{% example palette="light",
           width=251,
           alt="Blank card with spinner centered horizontally and vertically",
           src="../spinner-alignment-centered.svg" %}

However, if a small spinner is being used within a button it can be positioned next to the text as if it were an icon.

{% example palette="light",
           width=251,
           alt="Button with spinner to the left of the text",
           src="../spinner-alignment-button.svg" %}

{% endsection %}

{% section %}
## Spacing

The Spinner uses [spacing](/foundations/spacing/) tokens to define the amount of space between elements.

![Diagram showing 16 pixels of space between any size of spinner and its text label](../spinner-spacing.svg){style="--inline-img-max-width:1000px;"}

<table style="width:100%">
    <tr>
        <th>Spacer</th>
        <th>Current value</th>
        <th>Token name</th>
    </tr>
    <tr>
        <td><img src="/assets/spacing/16px-with-number.svg" alt="16 pixel spacer"></td>
        <td>1.0rem<br>16px</td>
        <td>--rh-space-lg</td>
    </tr>
</table>
{% endsection %}

{% section %}
{% include 'feedback.html' %}
{% endsection %}