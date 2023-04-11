{% section %}
## Style

An alert contains title text with an icon, body text, and a close button. They may also include action buttons below the text or inline links. There are two variants, toast and inline, which serve different purposes.

### Anatomy

{% example palette="light",
           width=490,
           alt="Alert component blueprint",
           src="../alert-anatomy.svg" %}

<ol>
    <li>Severity indicator</li>
    <li>Severity icon</li>
    <li>Title</li>
    <li>Body</li>
    <li>Actions</li>
    <li>Close button</li>
</ol>{style="font-size: 14px; color: var(--rh-color-text-secondary-on-light, #4d4d4d)"}

### Inline

The required elements of an Inline alert are a thin top bar or thin border, icon, title, close button, and a container background. Supporting text and buttons may or may not be included below the title to add clarity or optional actions.

{% example palette="light",
           width=538,
           alt="Alert component, inline",
           src="../alert-style-inline.svg" %}

### Inline, alternate

The alternate Inline alert style includes a border instead of a line which can be used to express more urgency or better grab the attention of a user.

{% example palette="light",
           width=538,
           alt="Alert component, inline alternate",
           src="../alert-style-inline-alt.svg" %}

### Toast

The required elements of a Toast alert are a thin top bar, icon, title, close button, and a white container with a subtle drop shadow. Supporting text and buttons may or may not be included below the title to add clarity or optional actions.

{% example palette="light",
           width=538,
           alt="Alert component, toast",
           src="../alert-style-toast.svg" %}
{% endsection %}

{% section %}
## Interaction States

Interaction states are visual representations used to communicate the status of a component or element.

The close button and any linked content are the only interactive elements in both alert variants.

### Hover

{% example palette="light",
           width=538,
           alt="Alert component interaction state, hover",
           src="../alert-interaction-states-hover.svg" %}

### Focus

{% example palette="light",
           width=538,
           alt="Alert component interaction state, focus",
           src="../alert-interaction-states-focus.svg" %}

### Active

{% example palette="light",
           width=538,
           alt="Alert component interaction state, active",
           src="../alert-interaction-states-active.svg" %}
{% endsection %}

{% section %}
## Spacing

Both Alert variants use [spacing](/foundations/spacing/) tokens to define the amount of space between elements.

### Inline

{% example palette="light",
           width=538,
           alt="Alert component spacing, inline",
           src="../alert-spacing-inline.svg" %}

### Toast

{% example palette="light",
           width=538,
           alt="Alert component spacing, toast",
           src="../alert-spacing-toast.svg" %}

### Toast (stacked in layout)
![Alert component spacing in layout, toast](../alert-spacing-toast-layout.svg){style="--inline-img-max-width:1000px;"}
{% endsection %}

{% section %}
{% include 'feedback.html' %}
{% endsection %}