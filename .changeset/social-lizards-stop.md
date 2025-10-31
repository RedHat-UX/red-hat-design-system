---
"@rhds/elements": minor
---

✨ Added `<rh-menu-dropdown>`.

`<rh-menu-dropdown>` is a UI component designed for presenting a set of related actions or commands. It consists of two parts: a menu toggle, which users interact with to open or close the menu, and a menu list that contains actionable items. When opened, it behaves similarly to menus found in desktop applications—offering users a compact, keyboard-accessible way to perform tasks or invoke functions without occupying significant screen space.

```html
<rh-menu-dropdown>
  <span slot="toggle-label">Basic toggle</span>
  <rh-menu-item>Action one</rh-menu-item>
  <rh-menu-item>Action two</rh-menu-item>
  <rh-menu-item>Action three</rh-menu-item>
  <rh-menu-item disabled>Disabled Action</rh-menu-item>
  <hr>
  <rh-menu-item>Separated action</rh-menu-item>
</rh-menu-dropdown>
```
  