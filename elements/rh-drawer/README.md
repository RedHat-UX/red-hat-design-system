# Drawer

A collapsible side panel for supplementary content or navigation.

## Installation

Follow the RHDS [installation instructions](https://ux.redhat.com/get-started/developers/installation/), then paste the following into your project:

```js
import '@rhds/elements/rh-drawer/rh-drawer.js';
```

## Usage

### Overlay (default)

A dialog panel that slides over page content with a close button:

```html
<button id="trigger" aria-controls="drawer">Toggle Drawer</button>
<rh-drawer id="drawer" variant="overlay" trigger-id="trigger">
  <h3>Panel Header</h3>
  <nav>Panel navigation content</nav>
</rh-drawer>
```

### Inline

A complementary panel with a collapse toggle, always visible on the edge:

```html
<rh-drawer variant="inline" open>
  <h3>Panel Header</h3>
  <nav>Panel navigation content</nav>
</rh-drawer>
```

Full documentation for `<rh-drawer>` can be found on its [Code](https://ux.redhat.com/elements/drawer/code/) page.
