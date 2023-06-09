## Style

A footer is a stack of two containers that include a variety of elements or 
content, mostly links and text blocks. Elements in a footer are high in contrast 
so they grab the attention of users and meet accessibility guidelines. A footer 
is designed to look similar in style to the [primary 
navigation](/elements/navigation) to ensure a consistent user experience across 
websites.

### Anatomy

{% example palette="none",
          alt="Image of a footer showing lots of annotation numbers next to various styles and other elements",
          src="../footer-anatomy.png" %}

1) Website logo
2) Social media links
3) Divider line
4) Navigation title
5) Navigation link
6) Body text
7) Call to action
8) Language selector
9) Website-specific footer
10) redhat.com link
11) Universal footer
{.example-notes}

### Grays

The website-specific footer background color is a slightly lighter gray than the 
universal footer background color. This variant creates separation and helps 
distinguish both footers from each other.

{% example palette="none",
          alt="Image of a footer with no elements except for backgrounds; the top background is dark gray and the bottom is black",
          src="../footer-grays.png" %}

## Theme

A footer only has one theme, but visually it could be considered in the dark 
theme.

{% example palette="none",
          alt="Image of a large footer",
          src="../footer-theme.png" %}

### Website-specific footer 

| Property {style="width: 50%" }           | Current value                                                   |
| ---------------------------------------- | --------------------------------------------------------------- |
| Color - social media icons               | `{% tokenValue token="--rh-color-icon-subtle-hover" %} `        |
| Color - divider lines                    | `{% tokenValue token="--rh-color-border-subtle-on-dark" %} `    |
| Border width - divider lines             | `{% tokenValue token="--rh-border-width-sm" %} `                |
| Color - titles and link text             | `{% tokenValue token="--rh-color-text-primary-on-dark" %} `     |
| Color - body text                        | `{% tokenValue token="--rh-color-text-secondary-on-dark" %} `   |
| Color - call to action                   | `{% tokenValue token="--rh-color-interactive-blue-lighter" %} ` |
| Color - language selector icons and text | `{% tokenValue token="--rh-color-text-secondary-on-dark" %} `   |
| Color - background                       | `{% tokenValue token="--rh-color-surface-dark-alt" %} `         |

### Universal footer 

| Property {style="width: 50%" } | Current value                                                |
| ------------------------------ | ------------------------------------------------------------ |
| Color - Red Hat fedora         | `{% tokenValue token="--rh-color-icon-subtle-hover" %} ` `     |
| Color - link text              | `{% tokenValue token="--rh-color-text-primary-on-dark" %}`   |
| Color - body text              | `{% tokenValue token="--rh-color-text-secondary-on-dark" %}` |
| Color - background             | `{% tokenValue token="--rh-color-surface-darkest" %}`        |

### Language selector 

{% example palette="none",
          alt="Image of a footer with the language selector menu open",
          src="../footer-language selector.png" %}

| Property {style="width: 50%" } | Current value                                               |
| ------------------------------ | ----------------------------------------------------------- |
| Color - link text              | `{% tokenValue token="--rh-color-text-primary-on-dark" %}`  |
| Color - menu border            | `{% tokenValue token="--rh-color-border-subtle-on-dark" %}` |
| Color - menu surface           | `{% tokenValue token="--rh-color-surface-darkest" %}`       |
| Border radius - menu surface   | `8px`                                                       |

## Configuration

A footer is a group of regions where various types of content can be organized. 
Within these regions, position and alignment are somewhat rigid in order to 
maintain consistency.

{% example palette="none",
          alt="Image of how a footer is architected showing lots of alignment examples",
          src="../footer-configuration.png" %}

## Space 

{% example palette="none",
          alt="Image of a desktop footer showing space values in between elements",
          src="../footer-space-desktop.png" %}

{% example palette="none",
          alt="Image of a tablet footer showing space values in between elements",
          src="../footer-space-tablet.png" %}

{% example palette="none",
          alt="Image of a mobile footer showing space values in between elements",
          src="../footer-space-mobile.png" %}

{% example palette="none",
          alt="Image of a footer showing space values in the language selector menu",
          src="../footer-space-language-selector.png" %}

{% spacerTokensTable 
  headline="Spacing tokens",
  caption='',
  headingLevel="4",
  tokens="--rh-space-md, --rh-space-lg, --rh-space-xl, --rh-space-2xl, --rh-space-3xl" %}
{% endspacerTokensTable %}

## Interaction states 

### Hover 

{% example palette="none",
          alt="Hover state examples within a footer",
          src="../footer-interaction-state-hover.png" %}

| Property {style="width: 50%" }           | Light theme                                                     |
| ---------------------------------------- | --------------------------------------------------------------- |
| Color - social media icons               | `{% tokenValue token="--rh-color-text-secondary-on-dark" %}`    |
| Text decoration - link text              | `Underline`                                                     |
| Color - call to action                   | `{% tokenValue token="--rh-color-interactive-blue-lightest" %}` |
| Color - language selector icons and text | `{% tokenValue token="--rh-color-text-primary-on-dark" %}`      |
| Color - Red Hat fedora                   | `{% tokenValue token="--rh-color-text-secondary-on-dark" %}`    |

### Hover - language selector 

{% example palette="none",
          alt="Hover state example within the language selector menu",
          src="../footer-ls-interaction-state-hover.png" %}

| Property {style="width: 50%" } | Light theme |
| ------------------------------ | ----------- |
| Text decoration - link text    | `Underline` |

### Focus 

{% alert title="Helpful tip" %}
The Focus state has the same styles as the Hover state.
{% endalert %}

{% example palette="none",
          alt="Focus state examples within a footer",
          src="../footer-interaction-state-focus.png" %}

| Property {style="width: 50%" } | Light theme                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| Color - focus ring             | `{% tokenValue token="--rh-color-border-interactive-on-dark" %}` |

### Focus - language selector 

{% alert title="Helpful tip" %}
The Focus state has the same styles as the Hover state.
{% endalert %}


{% example palette="none",
          alt="Focus state example within the language selector menu",
          src="../footer-ls-interaction-state-focus.png" %}

| Property {style="width: 50%" } | Light theme                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| Color - focus ring             | `{% tokenValue token="--rh-color-border-interactive-on-dark" %}` |


### Active 

{% alert title="Helpful tip" %}
The Active state has the same styles as the Hover state.
{% endalert %}


{% example palette="none",
          alt="Active state examples within a footer",
          src="../footer-interaction-state-active.png" %}

| Property {style="width: 50%" } | Light theme                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| Color - focus ring             | `{% tokenValue token="--rh-color-border-interactive-on-dark" %}` |


### Active - language selector 

{% alert title="Helpful tip" %}
The Active state has the same styles as the Hover state.
{% endalert %}


{% example palette="none",
          alt="Active state example within the language selector menu",
          src="../footer-ls-interaction-state-active.png" %}

| Property {style="width: 50%" } | Light theme                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| Color - focus ring             | `{% tokenValue token="--rh-color-border-interactive-on-dark" %}` |
