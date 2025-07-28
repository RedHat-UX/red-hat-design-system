# Red Hat Navigation Item (`<rh-navigation-item>`)

A generic, single item for use in Red Hat Design System navigation components. It is designed to be context-aware and styled by a parent navigation container.

## Usage

`<rh-navigation-item>` is not intended to be used as a standalone component. It should always be a child of a navigation container component, such as `<rh-navigation-vertical>`. The parent container is responsible for applying the appropriate styles and context.

### Example with Vertical Navigation

```html
<rh-navigation-vertical>
  <rh-navigation-item href="/products/ansible">Ansible</rh-navigation-item>
  <rh-navigation-item href="/products/openshift" active>OpenShift</rh-navigation-item>
  <rh-navigation-vertical-group>
    <span slot="summary">Cloud Services</span>
    <rh-navigation-item href="/services/hybrid-cloud">Hybrid Cloud</rh-navigation-item>
    <rh-navigation-item href="/services/managed-openshift">Managed OpenShift</rh-navigation-item>
  </rh-navigation-vertical-group>
</rh-navigation-vertical>
```

## Slots

- `icon`: Optional slot for an icon, placed before the item's text content.
- `(default)`: The content of the navigation item, typically a text label.

## Attributes

- `href`: If provided, the item will be rendered as an `<a>` tag.
- `active`: A boolean attribute that marks the item as the current page. This applies `aria-current="page"` to the underlying link for accessibility.

## CSS Parts

- `link`: The `<a>` tag rendered when the `href` attribute is set. This allows for direct styling of the link element from a parent component's CSS.

## Contextual Awareness

This component is designed to be highly generic and reusable. Its appearance and behavior are determined by context provided by its parent navigation container.

- **Depth Level**: The component automatically determines its nesting level (e.g., whether it's a top-level item or nested within a group) via a `depth` context. It reflects this as a `depth` attribute, which the parent navigator can use as a CSS hook (e.g., `rh-navigation-item[depth="2"]`).
- **Bordered**: The component receives a `bordered` context from its parent, which it reflects as a `bordered` attribute. This allows the parent to control whether items at certain depths should have a visible border.

By using this contextual system, the `<rh-navigation-item>` itself remains simple, while allowing for complex and varied navigation structures to be built.
