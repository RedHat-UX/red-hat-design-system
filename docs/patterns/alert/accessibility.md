---
title: Accessibility
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

<script type="module" data-helmet>
  import '@rhds/elements/rh-alert/rh-alert.js';
</script>

## Accessibility

Toast notifications often appear away from what triggered them, may time out
automatically, and can be hard to discover in linear reading order. That creates
accessibility and usability risk.

<rh-alert state="caution">
  <h3 slot="header">Industry guidance</h3>
  <p>GitHub’s Primer design system documentation states that toasts pose significant
    accessibility concerns and are <strong>not recommended for use</strong>. They recommend more
    established patterns when users must read, understand, or act on information.
    Read the full discussion in
    <a href="https://primer.style/accessibility/patterns/accessible-notifications-and-messages/">Accessible notifications and messages</a>.</p>
</rh-alert>

Toasts sit in tension with several WCAG success criteria, including:

  - [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html) - DOM order vs. the control that triggered the message
  - [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html) - Timed dismissal
  - [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) - Interactive controls in the toast
  - [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html) - How updates are exposed to assistive technology.

### Toasts in RHDS

`RhAlert.toast()` exposes toasts as polite status messages
(`role="status"`, `aria-live="polite"`), not as `role="alert"` interruptions.
Focus does not move into the toast when it opens; keyboard users tab to it
to use dismiss or actions. See [Alert accessibility](/elements/alert/accessibility/#toasts)
for details.

If you still use a toast in RHDS, follow these guidelines:

- Prefer `persistent: true` when the message matters or users need time to read
  or use controls.
    - Timed toasts clear after about eight seconds.
    - Offering a non-timer path (persistent or dismiss) aligns better with WCAG 2.2.1.
- Keep copy short.
    - Do not put critical errors only in a toast when the user must fix something.
    - Use an inline alert, banner, or dialog instead.
- Toasts are always dismissible in RHDS.
    - Any actions inside a toast must be keyboard-operable. For tab order and focus
    behavior shared with inline alerts, see [Alert accessibility](/elements/alert/accessibility/).

### When to use other patterns

Prefer other patterns when the user must read, understand, or act on
important information—for example:

- Critical or blocking errors: inline alert, banner, or dialog (persistent
  until addressed where appropriate).
- Complex or multi-step outcomes: summary banner or progressive disclosure, not
  a short auto-dismissing message alone.
- Long-running tasks: persistent notification, banner, email, or another channel
  the user can return to.
- Simple success that is already obvious in the UI: often no toast is needed.

### Usability

Corner placement can be easy to miss on large displays or under
screen magnification. Auto-dismiss and tab switching can cause users to lose the
message. Stacked toasts can obscure primary actions such as submit buttons; see
[Style — Stacking](/patterns/alert/style/#stacking). Toasts are visually separate
from what triggered them, which weakens proximity—reinforce important outcomes
in context when you can.

## Authoring

Do not author `<rh-alert variant="toast">` directly in HTML. Use
`RhAlert.toast()` so grouping, animation, and persistence stay consistent.

For do and don’t code comparisons, options tables, and implementation samples,
see [Examples](/patterns/alert/examples/#authoring).

## Stacking

When multiple toasts fire in sequence, they stack and reflow as each closes.
See [Style](/patterns/alert/style/#stacking) for annotated visuals.

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
