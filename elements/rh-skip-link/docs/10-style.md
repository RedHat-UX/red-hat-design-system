## Style

A skip link is designed to be easily seen once a user navigates to it.

###  Anatomy

{% example palette="light",
            alt="Anatomy image showing calls to action with various annotation numbers",
            src="../skip-link-anatomy.svg" %}

1. Text label
2. Container
3. Border
{.example-notes}

## Theme

A skip link appears the same in both light and dark themes.

<div class="multi-column--min-400-wide">
{% example palette="light",
           class="centered",
           alt="Image of a skip link in a light theme section",
           src="../skip-link.svg" %}

{% example palette="darkest",
           class="centered",
           alt="Image of a skip link in a dark theme section",
           src="../skip-link.svg" %}
</div>

## Configuration

A skip link’s bottom corners have a border radius of 4px, which matches the border radius of the <a href="/elements/call-to-action/">call to action</a> element. The top corners have a border radius of 0px to keep the top edge flush with the top of the page.

## Placement

A skip link should be centered and aligned with the top edge at all viewport sizes. It also overlaps items at the top of the page.

{% example palette="none",
          alt="A skip link element at the top overlays the navigation header of redhat.com",
          src="../skip-link-placement.png" %}

## Space

{% example palette="light",
          class="centered",
          alt="A skip link element at the top overlays the navigation header of redhat.com",
          src="../skip-link-spacing.svg" %}

{% spacerTokensTable 
    caption='',
    headingLevel="3",
    tokens="--rh-space-lg, --rh-space-2xl" %}
{% endspacerTokensTable %}

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Focus

Because a skip link is in focus once it appears on the screen, the default and focus states are the same. The blue, 2px-wide border mimics the focus ring for other elements.

{% example palette="light",
          alt="A skip link with blue text and a blue border around three sides",
          src="../skip-link-focus.svg" %}

### Hover

{% example palette="light",
          alt="A skip link's text is underlined on hover",
          src="../skip-link-hover-and-active.svg" %}

### Active

{% alert title="Helpful tip" %}
The Active state has the same styles as the Hover state.
{% endalert %}

{% example palette="light",
          alt="A skip link's text is underlined when it's active",
          src="../skip-link-hover-and-active.svg" %}
