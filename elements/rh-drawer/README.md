# Drawer

A collapsible side panel for supplementary content or navigation.

## Installation

Follow the RHDS [installation instructions](https://ux.redhat.com/get-started/developers/installation/), then paste the following into your project:

```js
import '@rhds/elements/rh-drawer/rh-drawer.js';
```

## Usage

Paste the following HTML into your project:

```html
<rh-drawer open>
  <h3 slot="header">Panel Header</h3>
  <nav slot="body">Panel Body</nav>
  <p slot="footer">Panel Footer</p>
  <div>Page content alongside the drawer.</div>
</rh-drawer>
```

Full documentation for `<rh-drawer>` can be found on its [Code](https://ux.redhat.com/elements/drawer/code/) page.
