## Style 
A badge is number text on a pill background used to reflect the count of something.

### Anatomy 
{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Badge anatomy",
          src="../badge-anatomy.png" %}

1. Container
2. Counter number

## Theme 
A badge is available in the light theme only.

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Badge light theme",
          src="../badge-theme-light.png" %}

## Configuration 
All badges have the same height and border radius.

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Badge configuration",
          src="../badge-configuration.png" %}

## Space and width 
{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Badge space and width",
          src="../badge-space-and-width.png" %}

<br>
| Property | Current value |
| -------- | ------------- |
| ![Badge 8px spacer]({{ '../badge-8px-spacer.png' | url }}) | 8px 0.5rem |
| Minimum width | 32px | 2.0rem |

## Interaction states 
A badge contains only text and is not interactive.

{% set related = 'rh-avatar, rh-button, rh-tag' %}
{% include 'feedback.html' %}