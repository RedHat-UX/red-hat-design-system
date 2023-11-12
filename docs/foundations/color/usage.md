---
layout: layout-foundations.njk
title: Usage
heading: Color
tags:
  - color
permalink: /foundations/color/usage/index.html
order: 20
bodyClasses: element-docs
---

## Using color

Our color palette is designed to work across all digital properties,
from websites to applications to ads and more. To view our colors as
design tokens, go to the [Tokens](/tokens) section. If you have
questions about how to apply the color palette, [contact
us](https://github.com/RedHat-UX/red-hat-design-system/discussions).

### Brand red

Our primary brand color is red. It is important to use it consistently
and thoughtfully to maximize accessibility and build brand recognition.
Red is a strong color; use it as an accent instead of filling large
areas. If you need a color for danger or error states, use red-orange.
To learn more about our Red Hat red color, go to the [Brand
standards](https://www.redhat.com/en/about/brand/standards) website.

{% alert title="Usage warning",
          state="warning" %}
Do not apply the Red Hat red color to text in dark environments unless
it meets [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/Understanding/)
requirements.
{% endalert %}

{% example palette="light",
          alt="spectrum of brand red shades with examples of brand red being used",
          src="/assets/color/brand-red.png" %}

### Canvas

A canvas is a background color and it determines what theme is used. The
default canvas colors are white and black, but there might be situations
where grays or even custom colors are needed. It is acceptable to use
other colors as long as contrast is maintained throughout the entire
design. If a custom canvas color is lighter or darker than the defaults,
white or black may be used as surface colors.

{% example palette="light",
          alt="swatches of the default canvas colors for dark and light theme and examples of custom canvas colors",
          src="/assets/color/canvas.png" %}

### Surface

A surface is a container background color that sits on top of a canvas.
Surface colors are used as backgrounds for elements, patterns, and large
sections. For example, a card (white surface) can be placed in a section
(light gray surface) on a canvas (white).

{% example palette="none",
          alt="Annotations pointing to canvas and surface colors in a section with a card",
          src="/assets/color/surface.png" %}

### Layering {% tag color="purple" %}Beta{% endtag %}

Layering is the relationship between the canvas color and surface colors
as well as how they stack to create depth and separate content.

{% alert title="Update from the team" %}
The design system team is working on creating best practices for
layering in the near future. [Contact
us](https://github.com/RedHat-UX/red-hat-design-system/discussions) if
you would like to contribute.
{% endalert %}

#### Light theme

In the light theme, white and gray values alternate when stacked.

{% example palette="none",
          alt="A light gray card in a larger, white card, which sits in a light gray section",
          src="/assets/color/layering-light-theme.png" %}

#### Dark theme

In the dark theme, gray values should get one step lighter when stacked.

{% example palette="none",
          alt="A dark gray card in a larger, darker gray card, which sits in an even dark gray section",
          src="/assets/color/layering-dark-theme.png" %}

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

{% alert title="Usage warning",
          state="warning" %}
Do not apply the Red Hat red color to text in dark environments unless
it meets [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/Understanding/)
requirements.
{% endalert %}

{% example palette="none",
          alt="Dark and light theme examples of the seven types of semantic colors used by text",
          src="/assets/color/text.png" %}

### Icons

Icons may be different colors depending on usage and theme. There are
three categories of icons: Brand, Technology, and UI.

1.  **Brand** - monochromatic and usually red, black, or white
2.  **Technology** - always black, gray, red, and white
3.  **UI** - may be different colors depending on how they are used
    within an element or pattern

To learn more about icons, go to the [Brand
standards](https://www.redhat.com/en/about/brand/standards) website.

{% example palette="none",
          alt="Examples of the three icon categories",
          src="/assets/color/icons.png" %}

### Interactivity

Certain colors are used to indicate that something is interactive.

1.  **Blue** - use for inline links, Default calls to action, or Primary
    button surfaces
2.  **Purple** - use for visited inline links
3.  **Gray** - use for secondary or small links (using white is also
    acceptable in dark environments)
4.  **Red-orange** - use for destructive actions (and errors)
5.  **Red** - use sparingly for Primary calls to action only

{% example palette="none",
          alt="Examples of elements using the five colors that denote interactivity",
          src="/assets/color/interactivity.png" %}

### Status

Status colors have assigned meanings and communicate information,
states, or actions. Status colors are commonly used in elements and
patterns like [alerts](/elements/alert), [badges](/elements/badge),
[buttons](/elements/button), [forms](/patterns/form), and
[toasts](/elements/alert/style/#toast).

{% alert title="Usage warning",
          state="warning" %}
The red-orange color is reserved for danger or error states, do not use it anywhere else.
{% endalert %}

<section class="section">

| Status         | Use case                                                                                     |
|----------------|----------------------------------------------------------------------------------------------|
| `Note/Tip`     | Use purple to communicate helpful or important information.                                  |
| `Neutral`      | Use gray to communicate information that will have no impact on a user.                      |
| `Success`      | Use green to communicate a success state.                                                    |
| `Caution`      | Use yellow to communicate that an issue can be avoided.                                      |
| `Warning`      | Use orange to communicate that a destructive action might occur if an issue is not resolved. |
| `Danger/Error` | Use red-orange to communicate a destructive action or critical error.                        |

</section>

{% example palette="light",
          alt="Alerts, a form field, and tags that use status colors",
          src="/assets/color/status.png" %}

## Best practices

The design system's guidelines and best practices are more than just 
suggestions. By following them scrupulously, you will ensure that your project 
aligns with branding and accessibility guidelines. Diverge from the guidelines 
only after significant planning and consideration.

### Custom themes

Most projects do not need elements and patterns in a custom theme. If
you need a custom theme for a campaign or special project, contact the
Brand team first. If you need one or more custom design tokens, [contact
the Design system
team](https://github.com/RedHat-UX/red-hat-design-system/discussions)
first. Do not create your own colors, design tokens, or change the
colors of existing elements and patterns.

{% example palette="wrong",
          alt="Magenta button, brand red default call to action, green tooltip, dark orange switch, and light purple checkbox",
          src="/assets/color/best-practices-custom-themes.png" %}

### Sufficient contrast

Using colors with the same hue, saturation, and lightness is acceptable,
but do not put them near or on top of each other as doing so will cause
vibration resulting in a poor user experience. If you have a large
section of color or an image background with low contrast, consider
using elements and patterns from the desaturated theme instead.

{% example palette="wrong",
          alt="Examples of a blue button against a red background and a red CTA against a blue background",
          src="/assets/color/best-practices-sufficient-contrast.png" %}

## Resources

- [Brand standards](https://www.redhat.com/en/about/brand/standards)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/)
- [WebAIM: Contrast and Color
    Accessibility](https://webaim.org/articles/contrast/)
