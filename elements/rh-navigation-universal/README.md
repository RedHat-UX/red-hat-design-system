# Universal Navigation

A universal navigation is a navigation above the primary navigation
that shows users links to highly trafficed Red Hat resources.

## Installation

If using npm/bundlers:

```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-navigation-universal/rh-navigation-universal.js';
```

## Usage

Generally, a universal navigation is placed directly after the page's
skip to main content link. Populate it with the appropriate links. 

```html
<rh-navigation-universal>
  <ul>
    <li><a href="https://access.redhat.com/management/">Subscriptions</a></li>
    <li><a href="https://access.redhat.com/downloads/">Downloads</a></li>
    <li><a href="https://console.redhat.com/">Red Hat Console</a></li>
    <li><a href="https://access.redhat.com/support/">Get Support</a></li>
  </ul>
</rh-navigation-universal>
```
