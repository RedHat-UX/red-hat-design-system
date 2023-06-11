

## Style

A spinner is an animated line segment that follows a track and may include an 
optional text label.

### Anatomy
{% example palette="light",
          alt=" Anatomy of a spinner with annotations; number 1 is pointing to the track, number 2 is pointing to the indicator, and number 3 is pointing to the optional text label",
          src="../spinner-anatomy.png" %}

1) Track
2) Indicator
3) Optional text label

{.example-notes}



## Sizes

A spinner comes in large, medium, and small sizes. Each size includes an 
optional text label on the bottom.

{% example palette="light",
          alt=" Small size, medium size, and large size spinners with their text labels below",
          src="../spinner-sizes.png" %}

| Size   | Element         | Current value        |
| ------ | --------------- | -------------------- |
| Small  | Text label size | `14px`<br>`0.875rem` |
| Medium | Text label size | `16px`<br>`1.0rem`   |
| Large  | Text label size | `18px`<br>`1.125rem` |



## Theme

A spinner is available in both light and dark themes.

### Light theme

{% example palette="light",
          alt=" Light theme spinner",
          src="../spinner-theme-light.png" %}

### Dark theme

{% example palette="darkest",
          alt=" Dark theme spinner",
          src="../spinner-theme-dark.png" %}



## Configuration
### Container

A spinner is centered horizontally and vertically within a container and the 
viewport by default. This demonstrates that the whole container is loading 
rather than one specific area.

{% example palette="light",
          alt=" Diagram of how a spinner should be horizontally and vertically centered within a container no matter its size or if a text label is included or not",
          src="../spinner-configuration-container.png" %}

### Button

If a small size spinner is used within a button, it can be positioned to the 
left of the text as if it were an icon.

{% example palette="light",
          alt=" Button with a small size spinner icon to the left as if it were an icon",
          src="../spinner-configuration-button.png" %}

## Space

{% example palette="light",
          alt=" Spacing between all spinner sizes and their text labels",
          src="../spinner-space.png" %}

| Spacer                         | Current value |
| ------------------------------ | ------------- |
| ![16px spacer][16px]{width=16} | `16px`        |


## Interaction states

A spinner is intentionally not operable or navigable and has no interaction 
states.

[16px]: {{ '../spinner-16px-spacer.png' | url }}
