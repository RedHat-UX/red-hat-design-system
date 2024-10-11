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
  import '/assets/javascript/elements/uxdot-best-practice.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-table/rh-table.js';
</script>

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>

## Using color

Our color palette is designed to work across all digital properties, from 
websites to applications to ads and more. To view our colors as design tokens, 
go to the [Tokens][tokens] section. If you have questions about how to apply the 
color palette, [contact us][contactus].

### Brand red

Our primary brand color is red. It is important to use it consistently and 
thoughtfully to maximize accessibility and build brand recognition. Red is a 
strong color; use it as an accent instead of filling large areas. If you need a 
color for danger or error states, use red-orange. To learn more about our Red 
Hat red color, go to the [Brand standards][brandstandards] website.

<rh-alert state="warning">
 <h4 slot="header">Usage warning</h4>
 <p>Do not apply the Red Hat red color to text in dark environments unless
   it meets <a href="https://www.w3.org/WAI/WCAG21/Understanding/">WCAG 2.1 AA</a>
   requirements.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img alt="spectrum of brand red shades with examples of brand red being used"
       src="/assets/color/brand-red.png"
       width="872"
       height="266">
</uxdot-example>

### Canvas

A canvas is a background color and it determines what theme is used. The
default canvas colors are white and black, but there might be situations
where grays or even custom colors are needed. It is acceptable to use
other colors as long as contrast is maintained throughout the entire
design. If a custom canvas color is lighter or darker than the defaults,
white or black may be used as surface colors.

<uxdot-example width-adjustment="872px">
  <img alt="swatches of the default canvas colors for dark and light theme and examples of custom canvas colors"
       src="/assets/color/canvas.png"
       width="872"
       height="248">
</uxdot-example>

### Surface

A surface is a container background color that sits on top of a canvas.
Surface colors are used as backgrounds for elements, patterns, and large
sections. For example, a card (white surface) can be placed in a section
(light gray surface) on a canvas (white).

<uxdot-example variant="full" no-border>
  <img alt="swatches of the default surface colors for dark and light theme and examples of a card in a section with a card"
       src="/assets/color/surface.png"
       width="1000"
       height="682">
</uxdot-example>

### Layering <rh-tag color="purple">Beta</rh-tag>

Layering is the relationship between the canvas color and surface colors
as well as how they stack to create depth and separate content.

<rh-alert state="info">
  <h4 slot="header">Update from the team</h4>
  <p>The design system team is working on creating best practices for layering in the near future. <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">Contact us</a> if you would like to contribute.</p>
</rh-alert>

#### Light theme

In the light theme, white and gray values alternate when stacked.

<uxdot-example variant="full" no-border>
  <img alt="A light gray card in a larger, white card, which sits in a light gray section"
       src="/assets/color/layering-light-theme.png"
       width="1000"
       height="560">
</uxdot-example>


#### Dark theme

In the dark theme, gray values should get one step lighter when stacked.

<uxdot-example variant="full" no-border>
  <img alt="A dark gray card in a larger, darker gray card, which sits in an even dark gray section"
       src="/assets/color/layering-dark-theme.png"
       width="1000"
       height="560">
</uxdot-example>


### Text

Text may be different colors depending on content, hierarchy, and theme.
Our accessible colors help promote text legibility and readability.
These are general usage guidelines; there may be other situations not
represented.

1.  **Custom** - use to represent a temporary campaign or custom design
2.  **Brand** - use to communicate our brand or add a brand accent
3.  **Primary** - use for large text including headlines and body text
    as well as small link text in dark environments (white)
4.  **Secondary** - use for small text including annotations, captions,
    and footnotes
5.  **Links** - use for small or large text that is linked
6.  **Interactive** - use for styled text within calls to action,
    buttons, or other interactive elements
7.  **Status** - use for text that needs to communicate a particular
    status

<rh-alert state="warning">
  <h4 slot="header">Usage Warning</h4>
  <p>Do not apply the Red Hat red color to text in dark environments unless it meets <a href="https://www.w3.org/WAI/WCAG21/Understanding/">WCAG 2.1 AA</a> requirements.</p>
</rh-alert>

<uxdot-example variant="full" no-border>
  <img alt="Dark and light theme examples of the seven types of semantic colors used by text"
       src="/assets/color/text.png"
       width="1000"
       height="851">
</uxdot-example>

### Icons

Icons may be different colors depending on usage and theme. There are
three categories of icons: Brand, Technology, and UI.

1.  **Brand** - monochromatic and usually red, black, or white
2.  **Technology** - always black, gray, red, and white
3.  **UI** - may be different colors depending on how they are used
    within an element or pattern

To learn more about icons, go to the [Brand standards][brandstandards] website.

<uxdot-example variant="full" no-border>
  <img alt="Examples of the three icon categories"
       src="/assets/color/icons.png"
       width="1000"
       height="462">
</uxdot-example>

### Interactivity

Certain colors are used to indicate that something is interactive.

1.  **Blue** - use for inline links, Default calls to action, or Primary
    button surfaces
2.  **Purple** - use for visited inline links
3.  **Gray** - use for secondary or small links (using white is also
    acceptable in dark environments)
4.  **Red-orange** - use for destructive actions (and errors)
5.  **Red** - use sparingly for Primary calls to action only

<uxdot-example variant="full" no-border>
  <img alt="Examples of elements using the five colors that denote interactivity"
       src="/assets/color/interactivity.png"
       width="1000"
       height="593">
</uxdot-example>

### Status

Status colors have assigned meanings and communicate information, states, or 
actions. Status colors are commonly used in elements and patterns like 
[alerts][alerts], [badges](/elements/badge), [buttons][buttons], [forms][forms], 
and [toasts][toasts].


<rh-alert state="warning">
  <h4 slot="header">Usage Warning</h4>
  <p>The red-orange color is reserved for danger or error states. Do not use it anywhere else.</p>
</rh-alert>

<rh-table>

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
