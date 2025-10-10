---
"@rhds/elements": minor
---

✨ Added `<rh-menu-dropdown>`.

The menu dropdown is a UI component made up of two parts: a menu toggle and a menu list. The toggle is the element users interact with to open or close the dropdown. When opened, it reveals the menu list, a compact set of options that can trigger actions or navigate to different pages. It's a clean and efficient way to present multiple choices without taking up much space on the screen.

```html
<rh-menu-dropdown>
  <p slot='label'>Basic toggle</p>
  <rh-menu>
    <rh-menu-item>Action</rh-menu-item>
    <rh-menu-item href="#">Link</rh-menu-item>
    <rh-menu-item disabled>Disabled Action</rh-menu-item>
    <rh-menu-item disabled href="#">Disabled link</rh-menu-item>
    <rh-menu-item disabled>Aria-disabled link</rh-menu-item>
    <hr/>
    <rh-menu-item>Separated action</rh-menu-item>
    <rh-menu-item href="#">Separated link</rh-menu-item>
  </rh-menu>
</rh-menu-dropdown>
```
  