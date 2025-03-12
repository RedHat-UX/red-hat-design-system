# Chip

Chip creates a component that can be used in place of a checkbox.

## Usage

Individual `rh-chip`'s are wrapped by an `<rh-chip-group>` element. Be sure to include an accessible label for each group of chips.

```html
<rh-chip-group>
  <span slot="accessible-label">Filter by:</span>
  <rh-chip>Edge</rh-chip>
  <rh-chip>AI/ML</rh-chip>
  <rh-chip>DevOps</rh-chip>
</rh-chip-group>
```
