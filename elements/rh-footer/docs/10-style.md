## Style

A footer is a stack of two containers that include a variety of elements or 
content, mostly links and text blocks. Elements in a footer are high in contrast 
so they grab the attention of users and meet accessibility guidelines. A footer 
is designed to look similar in style to the [primary 
navigation](/elements/navigation) to ensure a consistent user experience across 
websites.

### Anatomy

<figure>
  <uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
    <img src="../footer-anatomy.png"
        alt="Image of a footer showing lots of annotation numbers next to various styles and other elements"
        width="968"
        height="796">
  </uxdot-example>
  <figcaption>

1.  Website logo
2.  Social media links
3.  Divider line
4.  Navigation title
5.  Navigation link
6.  Body text
7.  Call to action
8.  Language selector
9.  Website-specific footer
10. redhat.com link
11. Universal footer

  </figcaption>
</figure>

### Grays

The website-specific footer background color is a slightly lighter gray than the 
universal footer background color. This variant creates separation and helps 
distinguish both footers from each other.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../footer-grays.png"
        alt="Image of a footer with no elements except for backgrounds; the top background is dark gray and the bottom is black"
        width="1000"
        height="480">
</uxdot-example>


## Theme

A footer only has one theme, but visually it could be considered in the dark 
theme.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../footer-theme.png"
        alt="Image of a large footer"
        width="968"
        height="796">
</uxdot-example>


### Website-specific footer 

<rh-table>

| Property                                 | Token or value                |
| ---------------------------------------- | ----------------------------- |
| Color - social media icons               | `--rh-color-gray-40`          |
| Color - divider lines                    | `--rh-color-gray-50`          |
| Border width - divider lines             | `--rh-border-width-sm`        |
| Color - titles and link text             | `--rh-color-white`            |
| Color - body text                        | `--rh-color-gray-30`          |
| Color - call to action                   | \#73BCF7                      |
| Color - language selector icons and text | `--rh-color-gray-30`          |
| Color - background                       | `--rh-color-surface-dark-alt` |

</rh-table>


### Universal footer 

<rh-table>

| Property                   | Current value                |
| -------------------------- | ---------------------------- |
| Color - social media icons | `--rh-color-gray-40`         |
| Color - link text          | `--rh-color-white`           |
| Color - body text          | `--rh-color-gray-30`         |
| Color - background         | `--rh-color-surface-darkest` |

</rh-table>


### Language selector 

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-language-selector.png"
        alt="Image of a footer with the language selector menu open"
        width="968"
        height="796">
</uxdot-example>

<rh-table>

| Property                     | Token or value               |
| ---------------------------- | ---------------------------- |
| Color - link text            | `--rh-color-white`           |
| Color - menu border          | `--rh-color-gray-50`         |
| Color - menu surface         | `--rh-color-surface-darkest` |
| Border radius - menu surface | 8px 0.5rem                   |

</rh-table>


## Configuration

A footer is a group of regions where various types of content can be organized. 
Within these regions, position and alignment are somewhat rigid in order to 
maintain consistency.

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-configuration.png"
        alt="Image of how a footer is architected showing lots of alignment examples"
        width="968"
        height="796">
</uxdot-example>


## Space 

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-space-desktop.png"
        alt="Image of a desktop footer showing space values in between elements"
        width="968"
        height="796">
</uxdot-example>

<uxdot-example width-adjustment="768px" variant="full" alignment="left" no-border>
  <img src="../footer-space-tablet.png"
        alt="Image of a tablet footer showing space values in between elements"
        width="768"
        height="1070">
</uxdot-example>

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="../footer-space-mobile.png"
        alt="Image of a mobile footer showing space values in between elements"
        width="360"
        height="1285">
</uxdot-example>

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-space-language-selector.png"
        alt="Image of a footer showing space values in the language selector menu"
        width="968"
        height="796">
</uxdot-example>

<rh-table>
{% spacerTokensTable 
  headline="Spacing tokens",
  caption='',
  headingLevel="4",
  tokens="--rh-space-md, --rh-space-lg, --rh-space-xl, --rh-space-2xl, --rh-space-3xl" %}
{% endspacerTokensTable %}
</rh-table>

## Interaction states 

### Hover 

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-interaction-state-hover.png"
        alt="Hover state examples within a footer"
        width="968"
        height="796">
</uxdot-example>

<rh-table>

| Property                                 | Token or value                             |
| ---------------------------------------- | ------------------------------------------ |
| Color - social media icons               | `--rh-color-interactive-secondary-default` |
| Text decoration - link text              | Underline                                  |
| Color - call to action                   | \#BEE1F4                                   |
| Color - language selector icons and text | `--rh-color-white`                         |
| Color - Red Hat fedora                   | `--rh-color-interactive-secondary-default` |

</rh-table>


### Hover - language selector 

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-ls-interaction-state-hover.png"
        alt="Hover state example within the language selector menu"
        width="968"
        height="796">
</uxdot-example>

<rh-table>

| Property                    | Light theme |
|-----------------------------|-------------|
| Text decoration - link text | Underline   |

</rh-table>


### Focus 

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-interaction-state-focus.png"
        alt="Focus state examples within a footer"
        width="968"
        height="796">
</uxdot-example>

<rh-table>

| Property           | Light theme |
|--------------------|-------------|
| Color - focus ring | \#73BCF7    |

</rh-table>

### Focus - language selector 

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-ls-interaction-state-focus.png"
        alt="Focus state example within the language selector menu"
        width="968"
        height="796">
</uxdot-example>

<rh-table>

| Property           | Light theme |
|--------------------|-------------|
| Color - focus ring | \#73BCF7    |

</rh-table>


### Active 

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-interaction-state-active.png"
        alt="Active state examples within a footer"
        width="968"
        height="796">
</uxdot-example>

<rh-table>

| Property           | Light theme |
|--------------------|-------------|
| Color - focus ring | \#73BCF7    |

</rh-table>

### Active - language selector 

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-ls-interaction-state-active.png"
        alt="Active state example within the language selector menu"
        width="968"
        height="796">
</uxdot-example>

<rh-table>

| Property           | Light theme |
|--------------------|-------------|
| Color - focus ring | \#73BCF7    |

</rh-table>
