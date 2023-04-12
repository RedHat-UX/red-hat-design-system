{% section %}
## Style

An alert contains title text with an icon, body text, and a close button. They may also include action buttons below the text or inline links. There are two variants, toast and inline, which serve different purposes.

### Anatomy

{% example palette="light",
           width=498,
           alt="Alert with numbers pointing to parts of the element",
           src="../alert-anatomy.svg",
           style="margin-bottom: var(--rh-space-lg, 16px)"
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

### Inline

The required elements of an Inline alert are a thin top bar or thin border, icon, title, close button, and a container background. Supporting text and buttons may or may not be included below the title to add clarity or optional actions.

{% example palette="light",
           width=538,
           alt="Two examples of an inline alert",
           src="../alert-style-inline.svg" %}

### Inline, alternate

The alternate Inline alert style includes a border instead of a line which can be used to express more urgency or better grab the attention of a user.

{% example palette="light",
           width=538,
           alt="Two examples of an alternate design for inline alerts",
           src="../alert-style-inline-alt.svg" %}

### Toast

The required elements of a Toast alert are a thin top bar, icon, title, close button, and a white container with a subtle drop shadow. Supporting text and buttons may or may not be included below the title to add clarity or optional actions.

{% example palette="light",
           width=538,
           alt="Two examples of a toast alert",
           src="../alert-style-toast.svg" %}
{% endsection %}

{% section %}
## Interaction States

Interaction states are visual representations used to communicate the status of a component or element.

The close button and any linked content are the only interactive elements in both alert variants.

### Hover

{% example palette="light",
           width=538,
           alt="Examples showing hover state",
           src="../alert-interaction-states-hover.svg" %}

### Focus

{% example palette="light",
           width=538,
           alt="Examples showing focus state",
           src="../alert-interaction-states-focus.svg" %}

### Active

{% example palette="light",
           width=538,
           alt="Examples showing active state",
           src="../alert-interaction-states-active.svg" %}
{% endsection %}

{% section %}
## Spacing

Both Alert variants use [spacing](/foundations/spacing/) tokens to define the amount of space between elements.

### Inline

{% example palette="light",
           width=538,
           alt="Diagram of spacing for inline alerts",
           src="../alert-spacing-inline.svg" %}

### Toast

{% example palette="light",
           width=538,
           alt="Diagram of spacing for toast alerts",
           src="../alert-spacing-toast.svg" %}

### Toast (stacked in layout)
![Diagram of spacing between stacked toast alerts](../alert-spacing-toast-layout.svg){style="--inline-img-max-width:1000px;"}

<table style="width:100%">
    <tr>
        <th>Spacer</th>
        <th>Current value</th>
        <th>Token name</th>
    </tr>
    <tr>
        <td><img src="/assets/spacing/8px-with-number.svg" alt="8 pixel spacer"></td>
        <td>0.5rem<br>8px</td>
        <td>`--rh-space-md`</td>
    </tr>
    <tr>
        <td><img src="/assets/spacing/16px-with-number.svg" alt="16 pixel spacer"></td>
        <td>1.0rem<br>16px</td>
        <td>`--rh-space-lg`</td>
    </tr>
    <tr>
        <td><img src="/assets/spacing/24px-with-number.svg" alt="24 pixel spacer"></td>
        <td>1.5rem<br>24px</td>
        <td>`--rh-space-xl`</td>
    </tr>
</table>
{% endsection %}

{% section %}
{% include 'feedback.html' %}
{% endsection %}