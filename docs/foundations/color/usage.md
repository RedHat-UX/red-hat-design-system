---
layout: layout-foundations.njk
title: Usage
heading: Color
tags:
  - color
permalink: /foundations/color/usage/index.html
order: 20
---

## Using color

Our color palette is designed to work across all digital properties, from websites to applications to ads and more. To view our colors as design tokens, go to the <a href="/tokens">Tokens</a> section. If you have questions about how to apply the color palette, <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">contact us</a>.

### Brand red

Our primary brand color is red. It is important to use it consistently and thoughtfully to maximize accessibility and build brand recognition. Red is a strong color; use it as an accent instead of filling large areas. If you need a color for danger or error states, use red-orange.

To learn more about our Red Hat red color, go to the <a href="https://www.redhat.com/en/about/brand/standards">Brand standards</a> website.

<!-- yellow alert -->
{% alert title="Usage warning" %}
Do not apply the Red Hat red color to text in dark environments unless it meets <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1 AA</a> requirements.
{% endalert %}

<!-- brand-red.png -->

### Canvas

A canvas is a background color and it determines what theme is used. The default canvas colors are white and black, but there might be situations where grays or even custom colors are needed. It is acceptable to use other colors as long as contrast is maintained throughout the entire design. If a custom canvas color is lighter or darker than the defaults, white or black may be used as surface colors.

<!-- canvas.png -->

### Surface

A surface is a container background color that sits on top of a canvas. Surface colors are used as backgrounds for large sections or small components and everything in between. For example, a call to action (red surface) can be placed on a card (white surface) as part of a section (light gray surface) on a canvas (white).

<!-- surface.png (Don't put in container) -->

### Layering <!-- add purple Beta tag -->

Layering is the relationship between the canvas color and surface colors as well as how they stack to create depth and separate content.

<!-- blue alert -->
{% alert title="Update from the team" %}
The design system team is working on creating best practices for layering in the near future. <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">Contact us</a> if you would like to contribute.
{% endalert %}

#### Light theme

In the light theme, white and gray values alternate when stacked.

<!-- layering-light-theme.png -->

#### Dark theme

In the dark theme, gray values should get one step lighter when stacked.

<!-- layering-dark-theme.png -->

### Text

Text may be different colors depending on content, hierarchy, and theme. Our accessible colors help promote text legibility and readability. These are general usage guidelines; there may be other situations not represented.

<!--change font weight of first word -->
<ul>
<li>Custom - use to represent a temporary campaign or custom design</li>
<li>Brand - use to communicate our brand or add a brand accent</li>
<li>Primary - use for large text including headlines and body text as well as small link text in dark environments (white)</li>
<li>Secondary - use for small text including annotations, captions, and footnotes</li>
<li>Links - use for small or large text that is linked</li>
<li>Interactive - use for styled text within calls to action, buttons, or other interactive components</li>
<li>Status - use for text that needs to communicate a particular status</li>
</ul>

<!-- yellow alert -->
{% alert title="Usage warning" %}
Do not apply the Red Hat red color to text in dark environments unless it meets <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1 AA</a> requirements.
{% endalert %}

<!-- text.png -->

### Icons

Icons may be different colors depending on usage and theme. There are three categories of icons: Brand, Technology, and UI.

<!--change font weight of first word -->
<ul>
<li>Brand - monochromatic and usually red, black, or white</li>
<li>Technology - always black, gray, red, and white</li>
<li>UI - may be different colors depending on how they are used within a component</li>
</ul>

To learn more about icons, go to the <a href="https://www.redhat.com/en/about/brand/standards">Brand standards</a> website.

<!-- icons.png -->

### Interactivity

Certain colors are used to indicate that something is interactive.

<!--change font weight of first word -->
<ul>
<li>Blue - use for inline links, Default calls to action, or Primary button surfaces</li>
<li>Purple - use for visited inline links</li>
<li>Gray - use for secondary or small links (using white is also acceptable in dark environments)</li>
<li>Red-orange - use for destructive actions (and errors)</li>
<li>Red - use sparingly for Primary calls to action only</li>
</ul>

<!-- interactivity.png -->

### Status

Status colors have assigned meanings and communicate information, states, or actions. Status colors are commonly used in components and patterns like <a href="/elements/alert">alerts</a>, <a href="/elements/badge">badges</a>, <a href="/elements/buttons">buttons</a>, <a href="/elements/form">forms</a>, and <a href="/elements/alert/style/#toast">toasts</a>.

<!-- yellow alert -->
{% alert title="Usage warning" %}
The red-orange color is reserved for danger or error states, do not use it anywhere else.
{% endalert %}

<!-- use code font for status column. does this need <section>? -->
<section class="section">
  <table width="100%;">
    <thead>
      <tr>
        <th>Status</th>
        <th>Use case</td\h>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Note/Tip</td>
        <td>Use purple to communicate helpful or important information.</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>Use gray to communicate information that will have no impact on a user.</td>
      </tr>
      <tr>
        <td>Success</td>
        <td>Use green to communicate a success state.</td>
      </tr>
      <tr>
        <td>Caution</td>
        <td>Use yellow to communicate that an issue can be avoided.</td>
      </tr>
      <tr>
        <td>Warning</td>
        <td>Use orange to communicate that a destructive action might occur if an issue is not resolved.</td>
      </tr>
      <tr>
        <td>Danger/Error</td>
        <td>Use red-orange to communicate a destructive action or critical error.</td>
      </tr>
    </tbody>
  </table>
</section>

<!-- status.png -->

## Best practices

### Custom themes

Most projects do not need elements and patterns in a custom theme. If you need a custom theme for a campaign or special project, contact the Brand team first. If you need one or more custom design tokens, <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">contact the Design system team</a> first. Do not create your own colors, design tokens, or change the colors of existing components.

<!-- best-practices-custom-themes.png -->

### Sufficient contrast

Using colors with the same hue, saturation, and lightness is acceptable, but do not put them near or on top of each other as doing so will cause vibration resulting in a poor user experience. If you have a large section of color or an image background with low contrast, consider using components from the desaturated theme instead.

<!--best-practices-sufficient-contrast.png-->

## Resources

<ul>
<li><a href="https://www.redhat.com/en/about/brand/standards">Brand standards</a></li>
<li><a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a></li>
<li><a href="https://webaim.org/articles/contrast/">WebAIM: Contrast and Color Accessibility</a></li>
</ul>