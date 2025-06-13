# Navigation Drawer

A navigation drawer is a vertical panel that provides a slottable area for navigation content. It is one part of the composable vertical navigation pattern, allowing users to access navigation items in a space-efficient way, collapsing to a disclosure pattern on narrow screens.

## Installation

If using npm/bundlers:

```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-navigation-drawer/rh-navigation-drawer.js';
```

## Usage

The navigation drawer can be toggled open and closed when the `collapsible` attribute is present. Content within the drawer should be navigation-focused and use one of the Red Hat Design System vertical navigation patterns.

### Basic Navigation Drawer

```html
<rh-navigation-drawer>
  <div slot="header">
    Header (optional)
  </div>
  Slotted content
  <div slot="footer">
    Footer (optional)
  </div>
</rh-navigation-drawer>
```
