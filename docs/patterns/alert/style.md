---
title: Style
heading: Alert
sidenavTitle: Alert
layout: layouts/pages/pattern.njk
order: 20
tags:
  - alertPatterns
subnav:
  collection: alertPatterns
  order: 2
---

## Style

Toasts use a similar layout to an alert, but they include a drop shadow and
are placed in the viewport corner. For anatomy, themes, and spacing tokens,
see [Alert element — Style](/elements/alert/style/) and the
[Toast](/elements/alert/style/#toast) subsection.

## Placement and persistence

A toast slides in from the top corner of the page. It can stay until dismissed
(persistent via `persistent: true` in the API) or disappear after about eight
seconds unless the user dismisses it first.

<uxdot-example color-palette="lightest" alignment="left" variant="full" no-border>
  <img alt="Toast alert with a link in the body text includes a close button"
       src="../alert-guidelines-layout-toast.svg"
       width="1440"
       height="291">
</uxdot-example>

## Dismissal

Toast alerts include a close button.

<uxdot-example color-palette="lightest" width-adjustment="456px">
  <img alt="Alert element dismissal toast examples"
       src="../alert-guidelines-dismissible-toast.svg"
       width="456"
       height="237">
</uxdot-example>

## Stacking

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
