{% section %}
## Style

### Anatomy

The spinner is composed of three parts. The track outlines the trajectory of the spinner animation, and the indicator is the animated segment. A spinner can also include a text label, but this piece is not required.

{% example palette="light",
           width=280,
           alt="Spinner with numbers pointing to parts of the element",
           src="../spinner-anatomy.png" %}

1. Indicator
2. Track
3. Text label
{.example-notes}

{% endsection %}

{% section %}
## Theme

### Light theme
{% example palette="light",
           width=251,
           alt="Spinner against a white background",
           src="../spinner-light-theme.png" %}

### Dark theme
{% example palette="darkest",
           width=251,
           alt="Spinner against the darkest gray background",
           src="../spinner-dark-theme.png" %}
{% endsection %}

{% section %}
## Configuration

### Alignment

The spinner should be centered horizontally and vertically in a container. This helps demonstrate that the whole container is loading, rather than only the top half, for example.

{% example palette="light",
           width=360,
           alt="Blank card with spinner centered horizontally and vertically",
           src="../spinner-alignment-centered.png" %}

However, if a small spinner is being used within a button it can be positioned next to the text as if it were an icon.

{% example palette="light",
           width=133,
           alt="Button with spinner to the left of the text",
           src="../spinner-alignment-button.png" %}

{% endsection %}

{% section %}
## Spacing

The spinner uses [spacing](/foundations/spacing/) tokens to define the amount of space between elements.

{% example palette="light",
           width=872,
           alt="Diagram showing 16 pixels of space between any size of spinner and its text label",
           src="../spinner-spacing.png" %}

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

{% include 'feedback.html' %}