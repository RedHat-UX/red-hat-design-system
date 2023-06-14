

## Style

A dialog is a floating container on top of a transparent backdrop. The container requires a backdrop so it can separate itself from the page underneath, this helps users focus on the dialog content.

### Anatomy

{% example palette="light",
           alt="Anatomy of a dialog with lots of annotations pointing to various parts",
           src="../dialog-anatomy.png" %}

1. Backdrop
2. Container
3. Close button
4. Header section
5. Body text section
6. Footer section
7. Container shadow
   {.example-notes}



## Theme

A dialog is available in the light theme only.

{% example palette="none",
           alt="Light theme dialog",
           src="../dialog-theme-light.png" %}



## Configuration

The dialog container does not have a maximum height, but too much content in the body text section will cause scrolling.

{% example palette="none",
           alt="How a dialog container is constructed showing border radius, region, and scrolling details",
           src="../dialog-configuration.png" %}



## Space

The amount of space in a dialog reduces as breakpoints get smaller.
### Large breakpoints

{% example palette="none",
           alt="A dialog container on a large breakpoint with spacing between all elements",
           src="../dialog-space-breakpoint-large.png" %}

### Small breakpoints

{% example palette="none",
           alt="A dialog container on a small breakpoint with spacing between all elements",
           src="../dialog-space-breakpoint-small.png" %}

{% spacerTokensTable 
    headline="Breakpoint spacing tokens",
    caption='',
    headingLevel="4",
    tokens="--rh-space-md, --rh-space-lg,  --rh-space-xl, --rh-space-2xl" %}
{% endspacerTokensTable %}



## Interaction states

Interactive elements may be added to a dialog container, but very sparingly. If interactive elements are added, go to their element or pattern pages to view the interaction states.

### Hover

Control and inactive page number buttons have the same hover state. Truncation is not interactive so it has no hover state.

{% example palette="none",
           alt="Light theme dialog hover state example",
           src="../dialog-interaction-state-hover.png" %}

| Property             | Light theme |
| -------------------- | :---------: |
| Color - close button |#151515   |

### Focus

{% example palette="none",
           alt="Light theme dialog focus state example",
           src="../dialog-interaction-state-focus.png" %}

| Property             | Light theme |
| -------------------- | :---------: |
| Color - close button |#151515   |
| Color - focus ring   |#0066cc   |

### Active

{% example palette="none",
           alt="Light theme dialog active state example",
           src="../dialog-interaction-state-active.png" %}

| Property             | Light theme |
| -------------------- | :---------: |
| Color - close button |#151515   |
| Color - focus ring   |#0066cc   |

