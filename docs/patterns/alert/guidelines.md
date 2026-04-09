---
title: Guidelines
heading: Alert
sidenavTitle: Alert
layout: layouts/pages/pattern.njk
order: 20
tags:
  - alertPatterns
subnav:
  collection: alertPatterns
  order: 3
---

## Guidelines

### Stacking

When several toasts appear in sequence, the newest sits on top and earlier ones
shift down. When one closes, the rest reflow.

<uxdot-example color-palette="lightest" alignment="left" variant="full" no-border>
  <img alt="Three toast alerts are stacked in the top left corner of a layout"
       src="../alert-guidelines-behavior-1.svg"
       width="1440"
       height="449">
</uxdot-example>

<uxdot-example color-palette="lightest" alignment="left" variant="full" no-border>
  <img alt="Only one toast alert in the stack from the previous image is left"
       src="../alert-guidelines-behavior-2.svg"
       width="1440"
       height="449">
</uxdot-example>

## Responsive design

On large screens, height follows content; max width is 480px. On small
screens, toasts span the column and continue to stack.

<uxdot-example color-palette="lightest" alignment="left" variant="full" no-border>
  <img alt="Example of a toast alert at content width"
       src="../alert-guidelines-responsive-large-screens-2.svg"
       width="1440"
       height="257">
</uxdot-example>

<uxdot-example color-palette="lightest" alignment="left" variant="full" no-border>
  <img alt="Example of toast and inline alerts span full column of small screen layout"
       src="../alert-guidelines-responsive-small-screens.svg"
       width="1440"
       height="730">
</uxdot-example>
