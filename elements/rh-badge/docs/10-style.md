## Style 
A badge is number text on a pill background used to reflect the count of something.

### Anatomy 
{% example palette="light",
          alt="Anatomy of a badge with annotations; number 1 is pointing to the container and number 2 is pointing to the counter number",
          src="../badge-anatomy.png" %}

1. Container
2. Counter number
{.example-notes}

## Theme 
A badge is available in the light theme only.

{% example palette="light",
          alt="Light theme badges",
          src="../badge-theme-light.png" %}

## Configuration 
All badges have the same height and border radius.

{% example palette="light",
          alt="How a badge is constructed showing border radius and height details",
          src="../badge-configuration.png" %}

## Space and width 
{% example palette="light",
          alt="Badge spacing and minimum width",
          src="../badge-space-and-width.png" %}

{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-md" %}
{% endspacerTokensTable %}

| Property {style="width: 50%" }  | Current value     |
| ------------------------------- | ----------------- |
| Minimum width                   | `32p`<br>`2.0rem` |

## Interaction states 
A badge contains only text and is not interactive.