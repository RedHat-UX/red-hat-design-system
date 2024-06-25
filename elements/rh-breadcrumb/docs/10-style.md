## Style

Breadcrumb navigation is composed of links, text, and caret icons as separators. There are two variants, default and subtle, which differ in text and icon color.

### Anatomy

<uxdot-example width-adjustment="295x">
    <img src="{{ '../breadcrumbs-anatomy.svg'  | url }}" alt="Anatomy of breadcrumbs with numbered annotations pointing to various parts">
  </uxdot-example>

1) Parent page
2) Separator
3) Current page
   {.example-notes}

## Theme

Breadcrumbs are available in both light and dark themes.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="40px">
    <img src="{{ '../breadcrumb-theme-light.svg'  | url }}" alt="Light theme breadcrumb with blue links and black text and separators">
  </uxdot-example>

  <uxdot-example width-adjustment="40px">
    <img src="{{ '../breadcrumb-theme-dark.svg'  | url }}" alt="Dark theme breadcrumb with light blue links and white text and separators">
  </uxdot-example>
</div>

## Placement

Breadcrumbs typically appear above the title of a page and below primary and/or secondary navigation.

<!--ADD IMAGE-->

## Space

The space between parent pages or current pages and the separators is 16px. If a row of breadcrumbs has to wrap, the space between the lines is 8px. This remains the same across all breakpoints.

{% example palette="light",
           alt="Diagram of spacing for breadcrumbs",
           src="../breadcrumb-space.svg" %}

## Interaction States

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

A breadcrumb link turns a darker or lighter shade of the default state’s blue and becomes underlined on hover.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="40px">
    <img src="{{ '../breadcrumb-hover-light.svg'  | url }}" alt="Light theme breadcrumbs with dark blue, underlined links on hover and black text and separators">
  </uxdot-example>

  <uxdot-example width-adjustment="40px">
    <img src="{{ '../breadcrumb-hover-dark.svg'  | url }}" alt="Dark theme breadcrumbs with light blue, underlined links on hover and white text and separators">
  </uxdot-example>
</div>

### Focus

The focus state of a breadcrumb link looks similar to the hover state, but it adds a focus ring around the link.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="40px">
    <img src="{{ '../breadcrumb-focus-light.svg'  | url }}" alt="Light theme breadcrumbs with one dark blue, underlined link in a focus ring">
  </uxdot-example>

  <uxdot-example width-adjustment="40px">
    <img src="{{ '../breadcrumb-focus-dark.svg'  | url }}" alt="Dark theme breadcrumbs with one light blue, underlined link in a focus ring">
  </uxdot-example>
</div>

### Active

{% alert title="Helpful tip", state="info" %}
The Active state has the same styles as the Focus state.
{% endalert %}

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="40px">
    <img src="{{ '../breadcrumb-active-light.svg'  | url }}" alt="Light theme breadcrumbs with one dark blue, underlined link in a focus ring">
  </uxdot-example>

  <uxdot-example width-adjustment="40px">
    <img src="{{ '../breadcrumb-active-dark.svg'  | url }}" alt="Dark theme breadcrumbs with one light blue, underlined link in a focus ring">
  </uxdot-example>
</div>



