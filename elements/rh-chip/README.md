# Chip

Chip creates a component that can be used in place of a checkbox.

## Usage

Page authors can use `<rh-chip>` individually or alongside several standalone chips.

```html
<rh-chip>Edge</rh-chip>
```

## Chip group

The `<rh-chip-group>` element adds an accessible label for the group and a "clear all" button.

```html
<rh-chip-group>
  <rh-chip>Edge</rh-chip>
  <rh-chip>AI/ML</rh-chip>
  <rh-chip>DevOps</rh-chip>
</rh-chip-group>
```

If using chip group, users must modify the import to reference `rh-chip-group.js`.

See the [official documentation](https://ux.redhat.com/elements/chip/code/) for importing and customization options.
