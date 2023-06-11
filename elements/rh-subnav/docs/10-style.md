## Style

A subnavigation is visually similar to tabs, but the text labels are links 
instead. They are arranged horizontally on a thin bar with no other styling 
except for the active page accent.

### Anatomy

{% example palette="lightest",
           alt="",
           src="../subnav-anatomy.png" %}

1. Active page
1. Active page accent
1. Inactive page
1. Surface
1. Overflow button - left
1. Overflow button - right
{.example-notes}

## Theme

A subnavigation is available in the light theme only right now.

{% example palette="lightest",
           alt="",
           src="../subnav-anatomy.png" %}

| Property | Current value               |
| -------- | --------------------------- |
| tbd      | [see discussion][discussion]|


## Configuration

Each link container is the same height as the bar.

{% example palette="lightest",
           alt="",
           src="../subnav-anatomy.png" %}

## Space

{% alert title="Helpful tip" %}
To view inset spacing when a subnavigation is used below the primary navigation 
or a heading, go to the Guidelines page.
{% endalert %}

{% example palette="lightest",
           alt="",
           src="../subnav-space.png" %}

{% spacerTokensTable headline="",
                    caption='',
                    headingLevel="4",
                    tokens="--rh-space-lg, --rh-space-2xl" %}
{% endspacerTokensTable %}

## Interaction states

Interactive elements include inactive links and overflow buttons.

### Hover

Inactive links and overflow buttons have the same hover state.

{% example palette="lightest",
           alt="",
           src="../subnav-interaction-state-hover.png" %}

| Property | Current value                |
| -------- | ---------------------------- |
| tbd      | [see discussion][discussion] |

### Focus

{% alert title="Helpful tip" %}
The Focus state has the same styles as the Hover state.
{% endalert %}

{% example palette="lightest",
           alt="",
           src="../subnav-interaction-state-focus.png" %}

| Property | Current value                |
| -------- | ---------------------------- |
| tbd      | [see discussion][discussion] |

### Active

{% alert title="Helpful tip" %}
The Active state has the same styles as the Hover state.
{% endalert %}

{% example palette="lightest",
           alt="",
           src="../subnav-interaction-state-active.png" %}

| Property | Current value                |
| -------- | ---------------------------- |
| tbd      | [see discussion][discussion] |

[discussion]: https://github.com/orgs/RedHat-UX/discussions/1059
