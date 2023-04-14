{% section %}
## Style

The spinner is composed of three parts. The track outlines the trajectory of the spinner animation, and the indicator is the animated segment. A spinner can also include a text label, but this piece is not required.

### Anatomy

{% example palette="light",
           width=498,
           alt="Alert with numbers pointing to parts of the element",
           src="../alert-anatomy.svg",
           %}

<ol style="font-size: var(--rh-font-size-body-text-sm, 0.875rem); 
    color: var(--rh-color-text-secondary-on-light, #4d4d4d); 
    line-height: var(--rh-line-height-body-text, 1.5);">
        <li>Severity indicator</li>
        <li>Severity icon</li>
        <li>Title</li>
        <li>Body</li>
        <li>Actions</li>
        <li>Close button</li>
</ol>
{% endsection %}

{% section %}
## Theme

### Light theme
{% example palette="light",
           width=251,
           alt="Spinner against a white background",
           src="../spinner-light-theme.svg",
           %}

### Dark theme
{% example palette="dark",
           width=251,
           alt="Spinner against the darkest gray background",
           src="../spinner-dark-theme.svg",
           %}
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