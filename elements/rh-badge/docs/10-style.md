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

| Property                        | Current value |
| ------------------------------- | ------------- |
| ![8 pixel spacer][8px]{width=8} | `8px 0.5rem`  |
| Minimum width                   | `32px 2.0rem` |

{# 
    Uncomment when css prop table PR is merged   
    {% spacerTokensTable 
      tokens="--rh-space-md" 
    %}
  #}

## Interaction states 
A badge contains only text and is not interactive.

[8px]: {{ '../button-8px-spacer.png' | url }}