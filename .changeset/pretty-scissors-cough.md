---
"@rhds/elements": major
---

`<rh-table>`: removed deprecated CSS custom properties

**Before:**

```css
rh-table.custom-table {
  --rh-table-row-background-color: crimson;
  --rh-table-column-background-color: royalblue;
}
```

**After:**

```css
rh-table.custom-table {
  --rh-table-row-background-hover-color: crimson;
  --rh-table-column-background-hover-color: royalblue;
}
```
