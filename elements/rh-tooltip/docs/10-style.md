## Style 
A tooltip is a container with text that includes an arrow and sometimes a drop shadow. It can be anchored to various elements like buttons, icons, etc.
### Anatomy 
{% example palette="light",
          alt="Anatomy of a tooltip with annotations; number 1 is pointing to the container, number 2 is pointing to the text, number 3 is pointing to the arrow, and number 4 is pointing to the trigger",
          src="../tooltip-anatomy.png" %}

1) Container
2) Text
3) Arrow
4) Trigger
{.example-notes}

## Theme 
A tooltip is available in both light and dark themes. The dark theme tooltip container does not include a drop shadow.
### Light theme 
{% example palette="light",
          alt="Light theme tooltip which is black",
          src="../tooltip-theme-light.png" %}

### Dark theme 
{% example palette="darkest",
          alt="Dark theme tooltip which is white",
          src="../tooltip-theme-dark.png" %}

## Configuration 
All badges have the same height and border radius.

{% example palette="light",
          alt="How a tooltip is constructed showing alignment, border radius, and arrow details",
          src="../tooltip-configuration.png" %}

## Space 
{% example palette="light",
          alt="Tooltip spacing both within the element and in between the element and trigger",
          src="../tooltip-space.png" %}

{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-md, --rh-space-lg" %}
{% endspacerTokensTable %}

## Animation 
A tooltip has a `300ms` entry delay on hover by default, but this can be customized. For example, if you would like it to appear immediately, set the delay to `0ms`.
## Interaction states 
A tooltip appears near an icon or element on hover, focus, or when tapped. A tooltip contains only text and is not interactive.

{% example palette="light",
          alt="Tooltip trigger interaction states",
          src="../tooltip-interaction-states.png" %}

[6px]: {{ '../tooltip-6px-spacer.png' | url }}
[8px]: {{ '../tooltip-8px-spacer.png' | url }}
[16px]: {{ '../tooltip-16px-spacer.png' | url }}