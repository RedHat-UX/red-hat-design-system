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
