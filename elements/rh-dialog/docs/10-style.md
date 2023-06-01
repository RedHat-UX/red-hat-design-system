{% section %}

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

{% endsection %}
{% section %}

## Theme

A dialog is available in the light theme only.

![Light theme dialog]({{ '../dialog-theme-light.png' | url }})

{% endsection %}
{% section %}

## Configuration

The dialog container does not have a maximum height, but too much content in the body text section will cause scrolling.

![How a dialog container is constructed showing border radius, region, and scrolling details]({{ '../dialog-configuration.png' | url }})

{% endsection %}
{% section %}

## Space

The amount of space in a dialog reduces as breakpoints get smaller.
### Large breakpoints

![A dialog container on a large breakpoint with spacing between all elements]({{ '../dialog-space-breakpoint-large.png' | url }})  

### Small breakpoints

![A dialog container on a small breakpoint with spacing between all elements]({{ '../dialog-space-breakpoint-small.png' | url }})

| Spacer                                                        | Current value | 
| ------------------------------------------------------------- | ------------- |
| ![8px spacer]({{ '../dialog-8px-spacer.png'   | url }})       | 8px 0.5rem    |
| ![16px spacer]({{ '../dialog-16px-spacer.png'   | url }})     | 16px 1rem     |
| ![24px spacer]({{ '../dialog-24px-spacer.png' | url }})       | 24px 1.5rem   |
| ![32px spacer]({{ '../dialog-32px-spacer.png' | url }})       | 32px 2.0rem   |

{% endsection %}
{% section %}

## Interaction states

Interactive elements may be added to a dialog container, but very sparingly. If interactive elements are added, go to their element or pattern pages to view the interaction states.

### Hover

Control and inactive page number buttons have the same hover state. Truncation is not interactive so it has no hover state.

![Light theme dialog hover state example]({{ '../dialog-interaction-state-hover.png' | url }})

| Property             | Light theme |
| -------------------- | :---------: |
| Color - close button |   #151515   |

### Focus

![Light theme dialog focus state example]({{ '../dialog-interaction-state-focus.png' | url }})

| Property             | Light theme |
| -------------------- | :---------: |
| Color - close button |   #151515   |
| Color - focus ring   |   #0066cc   |

### Active

![Light theme dialog active state example]({{ '../dialog-interaction-state-active.png' | url }})  

| Property             | Light theme |
| -------------------- | :---------: |
| Color - close button |   #151515   |
| Color - focus ring   |   #0066cc   |

{% endsection %}
