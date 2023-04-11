## Style

### Anatomy

{% example palette="light",
           width=538,
           alt="Alert component blueprint",
           src="../alert-blueprint.svg" %}

### Inline

The required elements of an Inline alert are a thin top bar or thin border, icon, title, close button, and a container background. Supporting text and buttons may or may not be included below the title to add clarity or optional actions.

{% example palette="light",
           width=510,
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


[color]: https://ux.redhat.com/foundations/color/
[dialog]: https://ux.redhat.com/elements/dialog/

[img-inline-global]: {{ '../alert-positioning-inline-global.svg' | url }}
[img-inline-local]: {{ '../alert-positioning-inline-local.svg' | url }}
[img-persistent]: {{ '../alert-positioning-toast-persistent.svg' | url }}
[img-temporary]: {{ '../alert-positioning-toast-temporary.svg' | url }}


## Spacing

Both Alert variants use [PatternFly 4 spacers][spacers] to define spacing values 
between elements.

Both Alert variants use [spacing] tokens to define the amount of space between elements.

### Inline

{% example palette="light",
           alt="Alert component spacing, inline",
           src="../alert-spacing-inline.svg" %}

### Toast

{% example palette="light",
           width=538,
           alt="Alert component spacing, toast",
           src="../alert-spacing-toast.svg" %}

### Toast (stacked in layout)

{% example palette="light",
           width=1000,
           alt="Alert component spacing in layout, toast",
           src="../alert-spacing-toast-layout.svg" %}

[spacers]: https://www.patternfly.org/v4/guidelines/spacers
[img-large-screens]: {{ '../alert-responsive-large-screens.svg' | url }}
[img-small-screens]: {{ '../alert-responsive-small-screens.svg' | url }}
