---
title: Usage
heading: Color
sidenavTitle: Color
layout: layouts/pages/has-toc.njk
permalink: /foundations/color/usage/index.html
tags:
  - color
subnav:
  collection: sortedColor
  order: 2
---

<script data-helmet type="module">
  /*import '@uxdot/elements/uxdot-best-practice.js';*/
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-table/rh-table.js';
</script>

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>

<style>
  td ul {
    margin-block: 0;
  }
  figcaption { 
    margin-block-start: var(--rh-space-lg);
    color: var(--rh-color-text-secondary-on-light);
    font-size: var(--rh-font-size-body-text-sm);
  }
  figure uxdot-example {
    margin-block-start: var(--rh-space-2xl);
  }
</style>

## Our color palette

Our color palette was built to be extensive and flexible. Applying color 
thoughtfully and consistently helps us deliver accessible, cohesive, and 
recognizable experiences for our users.

[Contact us][contactus] if you have design system questions or visit the [Brand 
standards website][brandstandards] if you have brand questions.

## Brand red

Red is our primary brand color. Red is also a strong color, so **use it as an accent**, not to fill large areas.

<uxdot-example>{% include './color-usage-brand-red.svg' %}</uxdot-example>

### Red orange

For danger or error states, use `red orange`.

<uxdot-example width-adjustment="652px">
  {% include './color-usage-red-orange.svg' %}
</uxdot-example>

## Use of black

In the Red Hat Design System, we limit the use of [pure black](/tokens/color/#rh-color-black) (`#000000`) to our logo, graphics, and illustrations, since it can cause visual vibrations when used in large quantities or when set in contrast to pure white.

Therefore, where "black" is needed on all other UI elements (e.g., text, surfaces, background colors, etc.) please use our [darkest gray color](/tokens/color/#rh-color-gray-95) (`#151515`).

## Backgrounds

### Canvas

Canvas is the bottom-most infinite container that holds all containers, elements, etc. The default canvas colors for light and dark themes are white and black respectively, but some gray colors can also be used.

For more bespoke websites or interfaces, other colors may be used as long as color contrast and other accessibility requirements are maintained.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Elements like Card and other containers include more colors and can be placed on top of a canvas.</p>
</rh-alert>

<uxdot-example width-adjustment="1004px">
  {% include './color-usage-backgrounds-canvas.svg' %}
</uxdot-example>

### Surface

Surface is a container background that applies a theme to any child elements. If you need more control over the default theme in specific areas, go to the [Surface](/elements/surface/) element page to learn more.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>To learn more about theming, go to the <a href="/theming">Theming</a> section.</p>
</rh-alert>

<figure>
  <uxdot-example width-adjustment="1004px">
    {% include './color-usage-surface.svg' %}
  </uxdot-example>
  <figcaption>Examples of how Surface is theming child elements within a Card</figcaption>
</figure>

### Layering

Layering is stacking colors to establish hierarchy and separate content. Colors like white and black can stack if there is a gray border visible. Surface or container colors can stack if there is a layer of white or black in between.

<div class="grid sm-two-columns">
  <uxdot-example width-adjustment="418px">
    {% include './color-usage-layering-theme-light.svg' %}
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="418px">
    {% include './color-usage-layering-theme-dark.svg' %}
  </uxdot-example>
</div>

## Basic text

Color is applied to basic text depending on content, hierarchy, theme, and more. These are general guidelines, not all use cases are represented.

1. **Brand** - use sparingly to add a brand accent to text
2. **Primary** - use for headings and body text in most layouts, elements, and patterns
3. **Secondary** - use for small text like captions
4. **Custom** - use a variety of colors to advertise a campaign or bespoke experience

<uxdot-example variant="full" no-border width-adjustment="1140px">
  {% include './color-usage-basic-text.svg' %}
</uxdot-example>

## Icons

Color is applied to icons depending on category, status, theme, etc. Some icon colors will not change when switching themes. These are general guidelines, not all use cases are represented.

1.  **Standard** - monochromatic and usually red, black, or white
2.  **Technology** - always black, gray, red, and white
3.  **UI and microns** - may be different colors depending on how they are used within an element or pattern

<uxdot-example variant="full" no-border width-adjustment="1140px">
  {% include './color-usage-icons.svg' %}
</uxdot-example>

## Interactivity

Color can be used to indicate that something is interactive or selectable. All text links require an underline except in certain rare edge cases.

1. **Blue** - a common color used for inline links, buttons, and more
2. **Purple** - a common color used for the visited state or linked text in certain elements
3. **Red** - use sparingly for primary calls to action or linked text in certain elements
4. **Gray** - use for secondary text, the disabled state, or linked text in certain elements
5. **Black and white** - use for linked text in navigation elements or linked header text in navigation menus
6. **Other colors** - use for linked text in elements with a more broad color palette like Tag

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Most links have underlines for accessibility reasons, but some do not. To learn more about when to add underlines to links, <a href="/support">contact</a> the design system team.</p>
</rh-alert>

<uxdot-example variant="full" no-border width-adjustment="1140px">
  {% include './color-usage-interactivity.svg' %}
</uxdot-example>

## Status

Status has its own severity levels, color palettes, and meanings assigned to each.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>In general, when communicating status, red and red orange are considered danger or error state colors. It is not recommended to use those colors anywhere else.</p>
</rh-alert>

<rh-table>

| Status name | Severity level |  Status                                         | Use case                                                                                        |
| ----------- | :------------: | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Info        | 0              |  Purple         | <ul><li>Helpful information before an action</li><li>Positive</li></ul>                         |
| Success     | 0              |  Green           | <ul><li>Success state or an action was successful</li><li>Positive or healthy</li></ul>         |
| Neutral     | 0              |  Gray             | <ul><li>An action is not available or will have no impact</li><li>Disabled or neutral</li></ul> |
| Warning     | 1              |  Yellow         | <ul><li>How to avoid a destructive action or error</li><li>Negative</li></ul>                   |
| Caution     | 2              |  Orange         | <ul><li>Non-destructive action or fixable error</li><li>Negative</li></ul>                      |
| Danger      | 3              |  Red orange | <ul><li>Destructive action or critical errorr</li><li>Negative</li></ul>                        |

</rh-table>

<uxdot-example width-adjustment="816px">
  {% include './color-usage-status.svg' %}
</uxdot-example>

## Resources

- [Brand standards][brandstandards]
- [Theming][theming]
- [Iconography foundations][iconography]
- [Icon element][rhicon]
- [WCAG 2.1][wcag21]
- [WebAIM: Contrast and Color Accessibility][aimcc]

## Best practices

Follow these guidelines and best practices as best you can.

### Maintaining contrast

Ensure backgrounds have adequate contrast when other elements are placed on top.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image"
                   alignment="left"
                   variant="full"
                   no-border
                   width-adjustment="546px">{% include './color-usage-best-practice-2-do.svg' %}</uxdot-example>
    <p>Place foreground elements on background colors with enough contrast.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image"
                   alignment="left"
                   variant="full"
                   no-border
                   width-adjustment="546px">{% include './color-usage-best-practice-2-dont.svg' %}</uxdot-example>
    <p>Do not place foreground elements on background colors with insufficient contrast.</p>
  </uxdot-best-practice>
</div>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[alerts]: /elements/alert
[badges]: /elements/badge
[brandstandards]: https://www.redhat.com/en/about/brand/standards
[buttons]: /elements/button
[contactus]: https://github.com/RedHat-UX/red-hat-design-system/discussions
[designsystem]: https://github.com/RedHat-UX/red-hat-design-system/discussions
[forms]: /patterns/form
[toasts]: /elements/alert/style/#toast
[tokens]: /tokens
[wcag21]: https://www.w3.org/WAI/WCAG21/Understanding/
[aimcc]: https://webaim.org/articles/contrast/
[theming]: /theming/
[iconography]: /foundations/iconography/
[rhicon]: /elements/icon/
