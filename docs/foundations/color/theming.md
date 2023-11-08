---
layout: layout-foundations.njk
title: Theming
heading: Color
tags:
  - color
permalink: /foundations/color/theming/index.html
order: 10
bodyClasses: element-docs
---

## Theming

There are various themes within our design system. The themes you will use the most for the majority of your projects are the light and dark themes.

### How themes work

Themes allow for the creation of different experiences using the same design system. When a theme is changed, elements change including color, space, text, and more. Layouts, content, and imagery usually stay the same.

## Choosing a theme

How you choose a theme is based on content, user experience, and accessibility needs.

### Light theme

The light theme is the default theme and has lots of use cases.

{% example palette="light",
          alt="examples of several elements against a white surface",
          src="/assets/color/light-theme.png" %}

### Dark theme

The dark theme can be used for highlighting content with dark colors or if a brighter interface would otherwise disrupt the user experience. Most light theme components have dark theme counterparts.

{% alert title="Brand red and accessibility",
            state="warning" %}
Do not apply the Red Hat red color to text in dark environments unless it meets <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1 AA</a> requirements.
{% endalert %}

{% example palette="darkest",
          alt="examples of several elements against a dark gray surface",
          src="/assets/color/dark-theme.png" %}

### Desaturated theme <!-- add purple Beta tag -->

The desaturated theme can be used when components need to be placed on large areas of color or some of the surface gray values.

{% alert title="Update from the team" %}
The design system team is working on creating desaturated theme best practices in the near future. <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">Contact us</a> if you would like to contribute.
{% endalert %}

{% example palette="light",
          alt="examples of white call to action variants against dark blue and dark gray surfaces",
          src="/assets/color/desaturated-theme.png" %}

### Custom theme

A custom theme may be used for very specific brand projects like campaigns. However, the light and dark themes are fine for the majority of other projects. If your project does need a custom theme, contact the Brand team and <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">Design system</a> team for guidance. A custom theme may feature a bespoke color palette, but try to use other styles and components from the design system if possible.

{% alert title="Choosing a theme",
            state="warning" %}
For most projects, the light and dark themes are good enough. Evaluate your project thoroughly before creating a custom theme.
{% endalert %}

{% example palette="light",
          alt="Example of a hero that uses light blue tags against a background image",
          src="/assets/color/custom-theme.png" %}

### Inline theming <!-- add purple Beta tag -->

Inline theming is when a section switches themes and looks different than the rest of the page or interface. Some use cases include highlighting an important section on a page or adding a sidebar to an interface. Use inline theming only for major shifts in color. For minor shifts, use a different surface color from the same theme.

{% alert title="Update from the team" %}
The design system team is working on creating inline theming best practices in the near future. <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">Contact us</a> if you would like to contribute.
{% endalert %}

{% example palette="medium",
          alt="wireframe of a dark theme section sandwiched by two light theme sections",
          src="/assets/color/inline-theming-1.png" %}

{% example palette="medium",
          alt="wireframe of cards in a dark theme section extending into a light theme section",
          src="/assets/color/inline-theming-2.png" %}

{% example palette="medium",
          alt="wireframe of dark theme navigation framing the top and left sides of a light theme content area",
          src="/assets/color/inline-theming-3.png" %}

### Illustrations and imagery

Illustrations and imagery should align to the theme. The light theme should feature imagery with light colors and vice versa. Imagery with high contrast is only acceptable if it has a transparent background. If you cannot find theme-specific imagery, contact the Brand team.

{% alert title="More information" %}
High contrast is using bright components or images in dark environments and vice versa. This is useful to focus attention or create visual tension.
{% endalert %}

{% example palette="light",
          alt="correct uses of an illustration with a transparent background and one illustration incorrectly using a white background in a dark theme area",
          src="/assets/color/illustrations-and-imagery.png" %}

{% feedback %}
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
{% endfeedback %}