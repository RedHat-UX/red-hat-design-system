---
"@rhds/elements": patch
---
`<rh-card>`: collapses margins between header, body, and footer

NOTE that this changes the default styling of the `header`, `body`, and `footer`
CSS Shadow Parts. They previously used `padding` for layout, and now use `margin`.
If you modified their padding via the `::part` selector, you will need to update your CSS

Before:
```css
.special-card::part(header) {
  padding: var(--rh-space-sm);
}
```

After:

```css
.special-card::part(header) {
  margin-block-start: var(--rh-space-sm);
  margin-inline: var(--rh-space-sm);
}
```
