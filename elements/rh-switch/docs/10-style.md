## Style

A Switch resembles a slider and includes a status message. When activated, the track background changes color and the handle changes position. If a user needs to toggle multiple Switches, they can be stacked on top of each other.

### Anatomy

{% example palette="light",
            alt="with numbers labeling the track, handle, and status message",
            src="../switch-anatomy.svg" %}

1. Track
2. Handle
3. Status message
{.example-notes}

## Theme

A Switch is available in both light and dark themes.

<div class="multi-column--min-400-wide">
{% example palette="light",
            alt="Light theme switch with blue track, white handle, and black text",
            src="../switch-theme-light.svg" %}

{% example palette="darkest",
            alt="Dark theme switch with light blue track, black handle, and white text",
            src="../switch-theme-dark.svg" %}
</div>


## Configuration

A Switch is the same height as the status message and both are horizontally aligned as well.

{% example palette="light",
            alt="Switch and status message are 24px tall. Switch is 40px wide.",
            src="../switch-configuration-height.svg" %}

{% example palette="light",
            alt="Horizontally aligned switch and status message",
            src="../switch-configuration-alignment.svg" %}

### Status messages

A status message can be positioned to the right or left of a Switch.

{% example palette="light",
            alt="One switch with status message on the left and another with status message on the right",
            src="../switch-status-message" %}

## Space

Space values remain the same at all viewport sizes.

{% example palette="light",
            alt="16px spacer between the switch and status message",
            src="../switch-space-individual.svg" %}

{% example palette="light",
            alt="24px spacer between stacked switches with status messages",
            src="../switch-space-stack.svg" %}

## States

A Switch and the status message cx count as the same selectable object.

{% alert title="Helpful tip", state="info" %}
The visual appearance of a Switch does not change unless toggled.
{% endalert %}

{% example palette="light",
            alt="Switches that are on, off, disabled, hovered, active, and in focus",
            src="../switch-states" %}

1. On
2. On with check
3. Off
4. Disabled
5. Hover
6. Focus
7. Active
{.example-notes}