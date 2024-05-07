## Style

A back to top is a pill-shaped button that is anchored to the bottom right corner of a page.

###  Anatomy

{% example palette="light",
            alt="A back to top button with numerical annotations",
            src="../back-to-top-anatomy.svg" %}

1. Container
2. Text
3. Icon
{.example-notes}

## Theme

The back to top button looks the same in light and dark themes.

<div class="multi-column--min-400-wide">
{% example palette="light",
           class="centered",
           alt="Back to top button with a blue background and white text against a white surface color",
           src="../back-to-top.svg" %}

{% example palette="darkest",
           class="centered",
           alt="Back to top buttons that have a blue background and white text against a black surface color",
           src="../back-to-top.svg" %}
</div>


## Space

A back to top button has 4px of padding on the left and right, 8px of padding on the top and bottom, and a 4px gap between text and icon. The amount of space remains the same on all breakpoints.

{% example palette="light",
          class="centered",
          alt="A back to top button with block padding of 4px, inline padding of 8px, and a 4px gap between text and icon",
          src="../back-to-top-space.svg" %}

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

The background color of the button turns to a darker blue on hover. It also has a white border adjacent to the button and a dark blue outline adjacent to the border. This ensures contrast against all surface colors.

{% example palette="light",
          alt="A back to top button with a dark blue background when a cursor hovers over it",
          src="../back-to-top-focus-hover-active.svg" %}

### Focus

{% alert title="Helpful tip" %}
The Focus state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
          alt="A back to top button with a dark blue background and a blue focus ring around it",
          src="../back-to-top-focus-hover-active.svg" %}

### Active

{% alert title="Helpful tip" %}
The Active state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
          alt="A back to top button with a dark blue background and a blue focus ring around it",
          src="../back-to-top-focus-hover-active.svg" %}
