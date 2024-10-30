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
  import '@uxdot/elements/uxdot-best-practice.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-table/rh-table.js';
</script>

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>

## Our color palette

Our color palette was built to be extensive and flexible. Applying color thoughtfully and consistently helps us deliver accessible, cohesive, and recognizable experiences for our users.

[Contact us](/standards) if you have design system questions or visit the [Brand standards](https://www.redhat.com/en/about/brand/standards) website if you have brand questions.

### Brand red

Red is our primary brand color. Red is also a strong color, **so use it as an accent**, not to fill large areas.

<uxdot-example width-adjustment="948px">
  <img alt="Examples of brand red being used in logos, illustrations, and text"
       src="/assets/color/color-usage-brand-red.svg">
</uxdot-example>

### Red orange

For danger or error states, use `red orange`.

<uxdot-example width-adjustment="652px">
  <img alt="Examples of red orange used in alert, buttons, tag, and site status"
       src="/assets/color/color-usage-red-orange.svg">
</uxdot-example>

## Backgrounds

### Canvas

Canvas is the bottom-most infinite container that holds all containers, elements, etc. The default canvas colors for light and dark themes are white and black respectively, but some gray colors can also be used.

For more bespoke websites or interfaces, other colors may be used as long as color contrast and other accessibility requirements are maintained.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Components like Card and other containers include more colors and can be placed on top of a canvas.</p>
</rh-alert>

<uxdot-example width-adjustment="1004px">
  <img alt="swatches of the default canvas colors for dark and light theme and examples of custom canvas colors"
       src="/assets/color/color-usage-backgrounds-canvas.svg">
</uxdot-example>

### Surface <rh-tag color="purple">Beta</rh-tag>

Surface is a container background that applies a theme to any child elements. If you need more control over the default theme in specific areas, go to the [Surface](/elements/surface/) element page to learn more.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>To learn more about theming, go to the <a href="/theming">Theming</a> section.</p>
</rh-alert>

<uxdot-example width-adjustment="1004px">
  <figure>
    <img alt="Examples of cards using each surface color"
        src="/assets/color/color-usage-surface.svg">
    <figcaption>Examples of how Surface is theming child elements within a Card component</figcaption>
  </figure>
</uxdot-example>

### Layering <rh-tag color="purple">Beta</rh-tag>

Layering is stacking colors to establish hierarchy and separate content. Colors like white and black can stack if there is a gray border visible. Surface or container colors can stack if there is a layer of white or black in between.

<!-- add layering images-->

## Basic text

Color is applied to basic text depending on content, hierarchy, theme, and more. These are general guidelines, not all use cases are represented.

1. **Brand** - use sparingly to add a brand accent to text
2. **Primary** - use for headings and body text in most layouts and components
3. **Secondary** - use for small text like captions
4. **Custom** - use a variety of colors to advertise a campaign or bespoke experience

<uxdot-example variant="full" no-border>
  <img alt="Dark and light theme examples of the four types of semantic colors used by text"
       src="/assets/color/color-usage-basic-text.svg"
       width="1000"
       height="560">
</uxdot-example>

## Icons

Color is applied to icons depending on category, status, theme, etc. Some icon colors will not change when switching themes. These are general guidelines, not all use cases are represented.

1.  **Standard** - monochromatic and usually red, black, or white
2.  **Technology** - always black, gray, red, and white
3.  **UI and microns** - may be different colors depending on how they are used within an element or pattern

<uxdot-example variant="full" no-border>
  <img alt="Examples of the icon categories"
       src="/assets/color/color-usage-icons.svg"
       width="1000"
       height="462">
</uxdot-example>

## Interactivity

Color can be used to indicate that something is interactive or selectable. All text links require an underline except in certain rare edge cases.

1. **Blue** - a common color used for inline links, buttons, and more
2. **Purple** - a common color used for the visited state or linked text in certain components
3. **Red** - use sparingly for primary calls to action or linked text in certain components
4. **Gray** - use for secondary text, the disabled state, or linked text in certain components
5. **Black and white** - use for linked text in navigation components or linked header text in navigation menus
6. **Other colors** - use for linked text in components with a more broad color palette like Tag

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Most links have underlines for accessibility reasons, but some do not. To learn more about when to add underlines to links, <a href="/support">contact</a> the design system team.</p>
</rh-alert>

<uxdot-example variant="full" no-border>
  <img alt="Examples of elements using the colors and styles that denote interactivity"
       src="/assets/color/color-usage-interactivity.svg"
       width="1000"
       height="593">
</uxdot-example>


### Status

Status has its own severity levels, color palettes, and meanings assigned to each.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>In general, when communicating status, red and red orange are considered danger or error state colors. It is not recommended to use those colors anywhere else.</p>
</rh-alert>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col">Status name</th>
        <th scope="col">Severity level</th>
        <th scope="col">Color palette</th>
        <th scope="col">Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Info</td>
        <td>0</td>
        <td>Purple</td>
        <td>
          <ul>
            <li>Helpful information before an action</li>
            <li>Positive</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Success</td>
        <td>0</td>
        <td>Green</td>
        <td>
          <ul>
            <li>Success state or an action was successful</li>
            <li>Positive or healthy</li>
          </ul>
        </td>
        
      </tr>
    </tbody>
  </table>

| Status                                     | Severity level | Use case                                                                         |
| ------------------------------------------ | :------------: | -------------------------------------------------------------------------------- |
| <rh-tag color="purple">Info</rh-tag>       | N/A            | Use `purple` to communicate helpful or important information.<br>*Note:* "Info" was previously called "note/tip." |
| <rh-tag color="green">Success</rh-tag>     | 0              | Use `green` to communicate a success state.                                      |
| <rh-tag color="gray">Neutral</rh-tag>      | 0              | Use `gray` to communicate information that will have no impact on a user.        |
| <rh-tag color="yellow">Warning</rh-tag>    | 1              | Use `yellow` to communicate that a destructive action might occur if an issue is not resolved. |
| <rh-tag color="orange">Caution</rh-tag>    | 2              | Use `orange` to communicate that an issue can be avoided.                        |
| <rh-tag color="red-orange">Danger</rh-tag> | 3              | Use `red-orange` to communicate a destructive action or critical error.          |

</rh-table>

<uxdot-example width-adjustment="648px">
  <img alt="Alerts, a form field, and tags that use status colors"
       src="/assets/color/status.png"
       width="648"
       height="489">
</uxdot-example>

<!--
## Best practices

The design system's guidelines and best practices are more than just 
suggestions. By following them scrupulously, you will ensure that your project 
aligns with branding and accessibility guidelines. Diverge from the guidelines 
only after significant planning and consideration.

### Custom themes

Most projects do not need elements and patterns in a custom theme. If
you need a custom theme for a campaign or special project, contact the
Brand team first. If you need one or more custom design tokens, contact
the [Design system][designsystem] team first. 

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img alt="Blue submit button, blue default call to action, black tooltip, and blue switch"
           src="/assets/color/best-practices-custom-themes-correct.svg"
           width="500"
           height="264">
    </uxdot-example>
    <p>Use the color variants already available for elements and patterns.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img alt="Magenta button, brand red default call to action, green tooltip, and dark orange switch"
           src="/assets/color/best-practices-custom-themes-wrong.svg"
           width="500"
           height="264">
    </uxdot-example>
    <p>Do not create your own colors, design tokens, or change the colors of existing elements and patterns.</p>
  </uxdot-best-practice>
</div>

### Sufficient contrast

Using colors with the same hue, saturation, and lightness is acceptable,
but do not put them near or on top of each other as doing so will cause
vibration resulting in a poor user experience. If you have a large
section of color or an image background with low contrast, consider
using elements and patterns from the desaturated theme instead.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img alt="Examples of a blue button against a light gray background and a red CTA against a black background"
           src="/assets/color/best-practices-sufficient-contrast-correct.svg"
           width="500"
           height="284">
    </uxdot-example>
    <p>Use a surface color token for background to ensure accessibility, or use a <a href="../accessibility/#tools">tool</a> to check proper contrast.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img alt="Examples of a blue button against a red background and a red CTA against a blue background"
           src="/assets/color/best-practices-sufficient-contrast-wrong.svg"
           width="500"
           height="284">
    </uxdot-example>
    <p>Do not use a background color that has a similar hue, saturation, or lightness to foreground elements.</p>
  </uxdot-best-practice>
</div>
-->

## Resources

- [Brand standards][brandstandards]
- [WCAG 2.1][wcag21]
- [WebAIM: Contrast and Color Accessibility][aimcc]

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
