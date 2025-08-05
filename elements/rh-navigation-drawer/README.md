# Navigation Drawer
Navigation Drawer is a component that displays a navigation menu in a vertical drawer in wide viewports and a disclosure in narrow viewports.

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
