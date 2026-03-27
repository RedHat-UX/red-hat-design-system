---
title: Examples
heading: Alert
sidenavTitle: Alert
layout: layouts/pages/pattern.njk
order: 20
tags:
  - alertPatterns
subnav:
  collection: alertPatterns
  order: 4
---

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-best-practice.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-table/rh-table.js';
</script>

<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
<link rel="stylesheet" data-helmet href="/styles/samp.css">

Toasts can be easy to miss when they time out or sit outside a magnified region.
Before shipping this in production, review
[toast's accessibility guidelines](/patterns/alert/guidelines/#accessibility) and
[Accessible notifications and messages](https://primer.style/accessibility/patterns/accessible-notifications-and-messages/)
in Github's design system: Primer.

## Authoring

<div class="grid sm-two-columns">

  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" alignment="left" variant="full" no-border>

  ```js rhcodeblock
  import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';

  RhAlert.toast({
    state: 'caution',
    message: 'Toast alerts using JavaScript',
  });
  ```

    </uxdot-example>

  Use the JavaScript API to toast alerts.

  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" alignment="left" no-border>

  ```html rhcodeblock
  <rh-alert variant="toast">
    <p>Writing toasted alerts explicitly in HTML</p>
  </rh-alert>
  ```

    </uxdot-example>

  Write toast variant alerts in HTML.

  </uxdot-best-practice>

</div>

View the [toast demo](/elements/alert/demos/#demo-toast) on the `<rh-alert>`
Demos page to see a full-featured toast demo.

## Implementation

The toast variant is only for toasts created through the API. Call the static
`toast()` method on `RhAlert`. Avoid hand-authored `<rh-alert variant="toast">`
in HTML. The argument is an object with at least `message`, plus optional
fields below.

```js rhcodeblock
import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';

RhAlert.toast({ state: 'success', message: 'Saved!' });
```

The full list of options for the `toast` method is:

<rh-table>

| Option               | Type                                | Description                                                                                   |
| -------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| `message` (required) | lit-html renderable value           | Alert body content. Can be any value which lit-html can render. Simple strings are preferable |
| `heading`            | `string`                            | Alert heading content. Must be a simple string.                                               |
| `state`              | See alert's `state` attribute       | Alert `state` attribute                                                                       |
| `persistent`         | `boolean`                           | Whether the alert should remain on screen until the user explicitly dismisses it              |
| `actions`            | Array of one or two actions objects | One or more optional body actions. See [actions options](#toast-action-options) info below.   |

</rh-table>

### Toast action options

Actions objects have two keys, `text` for the action button text, and `action`
e.g. `dismiss` or `confirm`, which is applied to the `close` event as the
`action` property.

<rh-table>

| Option   | type   | Description                                            |
| -------- | ------ | ------------------------------------------------------ |
| `text`   | string | Button label text, e.g. "Confirm"                      |
| `action` | string | `close` event `event.action` property e.g. `'confirm'` |

</rh-table>

### Toasted alert content

When toasting, you must provide body content for the alert. This content can
either be a string, a DOM node, a lit-html `TemplateResult`, or an array of the
same.

#### Toasting a string

```js rhcodeblock
await RhAlert.toast({
  message: 'Your request was submitted',
});
```

#### Toasting a DOM Node

```js rhcodeblock
const message = document.createElement('strong');
      message.textContent = 'Your request was submitted';
await RhAlert.toast({ message });
```

#### Toasting a lit-html template:

```js rhcodeblock
import { html } from 'lit';
await RhAlert.toast({
  message: html`Your request was <em>submitted</em>`,
});
```

#### Toasting an array of renderables

```js rhcodeblock
import { html } from 'lit';
await RhAlert.toast({
  message: [
    'Your request was',
    html`<em>successfully</em>`,
    new Text('submitted'),
  ],
});
```

You may, for example, use the `<template>` element to define alert content

```html rhcodeblock
<template id="success-alert-content-template">
  <p>Your subscription has been successfully renewed.</p>
  <p>Contact <a href="#">Customer support</a> for more information.</p>
</template>
```

```js rhcodeblock
const template = document.getElementById('success-alert-content-template');
const { childNodes } = template.content.cloneNode(true);
const message = Array.from(childNodes);
await RhAlert.toast({ message });
```

#### Alert headings
You can provide an optional string for the alert's heading, which will
become the text content of the alert's slotted heading (`h3`).

```js rhcodeblock
import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';

await RhAlert.toast({
  state: 'success',
  heading: 'Subscription renewed',
  message: 'Your subscription was successfully renewed',
});
```

### Persistent toasted alerts

Toasted alerts can be timed or persistent. Timed alerts remain on screen for
eight seconds before disappearing. Persistent alerts remain on screen until the
user explicitly dismisses them. To make your toasted alert persistent, use the
`persistent: true` option.

```js rhcodeblock
import { html } from 'lit';

await RhAlert.toast({
  state: 'warning',
  persistent: true,
  message: html`Your subscription will expire in <time>two days</time>`,
});
```

### Toasted alert actions

Like inline alerts, toasted alerts may include one or two actions. When there
are two actions, the first will be a secondary variant button, and the second
a link variant button. If there is only one action, it will be a link button.

#### Responding to actions

Actions have a button text and an action string, which identifies which button
was pressed. You can listen for the `close` event, and if it is an
`AlertCloseEvent` object, it will have an `action` property.

```js rhcodeblock
import { AlertCloseEvent } from '@rhds/elements/rh-alert/rh-alert.js';

document.addEventListener('close', function(event) {
  if (event instanceof AlertCloseEvent) {
    switch (event.action) {
      case 'renew':
        // renew subscription
        break;
    }
  }
});

await RhAlert.toast({
  state: 'warning',
  message: 'Your subscription is about to expire',
  actions: [
    { text: 'Renew', action: 'renew' },
    { text: 'Dismiss', action: 'dismiss' },
  ]
});
```

By default, clicking on an action button will remove the alert. If you would
like to keep the alert on screen, prevent the default action:

```js rhcodeblock
document.addEventListener('close', function(event) {
  if (event instanceof AlertCloseEvent) {
    switch (event.action) {
      case 'prevent':
        // prevent alert from closing
        event.preventDefault();
        // ... do something with event
        break;
    }
  }
});
```

<style data-helmet>
rh-code-block + rh-code-block { margin-block-start: var(--rh-space-xl); }
</style>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
