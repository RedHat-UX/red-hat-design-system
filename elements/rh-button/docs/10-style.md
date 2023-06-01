## Style

A button is clickable text or an icon that triggers an action on the page or in 
the background. Depending on the action, content, and hierarchy, a button can be 
used on its own or grouped with other buttons.

### Anatomy

{% example palette="light",
          alt=" Anatomy image of buttons with numbered annotations",
          src="../button-anatomy.png" %}

1) Text
2) Container
3) Border
4) Text only
5) Icon
6) Icon background
7) Icon only

{.example-notes}

## Theme

Buttons are available in both light and dark themes.

### Light and dark themes

{% example palette="light",
      alt=" Image of light theme Danger, Primary, Secondary, Tertiary, Link, Play, and Close buttons",
      src="../button-theme-light.png" %}


{% example palette="dark",
      alt=" Image of dark theme Danger, Primary, Secondary, Tertiary, Link, Play, and Close buttons",
      src="../button-theme-dark.png" %}

| Property                                 | Light theme | Dark theme |
| ---------------------------------------- | ----------- | ---------- |
| Color - Danger button text               | `#FFFFFF`   | `#151515`  |
| Color - Danger button surface            | `#C9190B`   | `#FF542E`  |
| Color - Primary button text              | `#FFFFFF`   | `#FFFFFF`  |
| Color - Primary button surface           | `#0066CC`   | `#0066CC`  |
| Color - Secondary button text and border | `#0066CC`   | `#2B9AF3`  |
| Border width - Secondary button          | `1px`       | `1px`      |
| Color - Tertiary button text and border  | `#151515`   | `#FFFFFF`  |
| Border width - Tertiary button           | `1px`       | `1px`      |
| Color - Link button tex                  | `#0066CC`   | `#2B9AF3`  |
| Color - Play button background           | `#151515`   | `#FFFFFF`  |
| Opacity - Play button background         | `50%`       | `25%`      |
| Color - Close button                     | `#4D4D4D`   | `#C7C7C7`  |

## Configuration

All buttons with a container have the same height and border radius, but the 
width varies based on the amount of content. Buttons in a row are all 
horizontally centered. When a Play button is placed on an image, it is both 
horizontally and vertically centered and stays the same size no matter how big 
or small the image gets.

{% example palette="light",
          alt=" Image of buttons and various specs like border radius, height, icon size, width, alignment, placement, and more",
          src="../button-configuration.png" %}


## Space

Space values are the same on all breakpoints for the following buttons. To see 
space values when buttons are grouped, go to the Guidelines page.

{% alert title="Helpful tip" %}
Buttons include a custom `6px` spacer, do not use it anywhere else.
{% endalert %}

{% example palette="light",
          alt=" Image of Danger, Primary, Secondary, Tertiary, Link, and Close buttons with spacing values in between",
          src="../button-space.png" %}

| Spacer                         | Current value  |
| ------------------------------ | -------------- |
| ![6px spacer][6px]{width=6}    | `6px 0.375rem` |
| ![8px spacer][8px]{width=8}    | `8px 0.5rem`   |
| ![16px spacer][16px]{width=16} | `16px 1.0rem`  |


## Interaction states

Interaction states are visual representations used to communicate the status of 
an element or pattern.

### Hover

{% example palette="light",
          alt=" Image of light theme button hover states",
          src="../button-interaction-state-hover-theme-light.png" %}

{% example palette="dark",
          alt=" Image of dark theme button hover states",
          src="../button-interaction-state-hover-theme-dark.png" %}

| Property                           | Light theme | Dark theme  |
| ---------------------------------- | ----------- | ----------- |
| Color - Danger button surface      | `#A30000`   | `#FF8266`   |
| Color - Primary button surface     | `#004080`   | `#004080`   |
| Border width - Secondary button    | `2px`       | `2px`       |
| Border width - Tertiary button     | `2px`       | `2px`       |
| Color - Link button text           | `#004080`   | `#73BCF7`   |
| Text decoration - Link button text | `Underline` | `Underline` |
| Opacity - Play button background   | `75%`       | `50%`       |
| Color - Close button               | `#151515`   | `#FFFFFF`   |

### Focus

{% alert title="Helpful tip" %}
The Focus state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
          class="inline-flex centered",
          alt=" Image of light theme button focus states",
          src="../button-interaction-state-focus-theme-light.png" %}

{% example palette="dark",
          class="inline-flex centered",
          alt=" Image of dark theme button focus states",
          src="../button-interaction-state-focus-theme-dark.png" %}

| Property           | Light theme | Dark theme |
| ------------------ | ----------- | ---------- |
| Color - focus ring | `#0066CC`   | `#73BCF7`  |


### Active

{% alert title="Helpful tip" %}
The Active state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
          class="inline-flex centered",
          alt=" Image of light theme button active states",
          src="../button-interaction-state-active-theme-light.png" %}


{% example palette="light",
          class="inline-flex centered",
          alt=" Image of dark theme button active states",
          src="../button-interaction-state-active-theme-dark.png" %}

| Property           | Light theme | Dark theme |
| ------------------ | ----------- | ---------- |
| Color - focus ring | `#0066CC`   | `#73BCF7`  |

[6px]: {{ '../button-6px-spacer.png' | url }}
[8px]: {{ '../button-8px-spacer.png' | url }}
[16px]: {{ '../button-16px-spacer.png' | url }}
