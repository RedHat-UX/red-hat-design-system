---
"@rhds/elements": minor
---

✨ Added `<rh-drawer>`

A collapsible side panel for supplementary content or navigation. Supports four layout variants (`auto`, `overlay`, `fixed`, `flow`), configurable breakpoints via `overlay-threshold`, and panel styles with `collapsible`, `resizable` and `none`. Fires `mode-change` events so consumers can respond to layout switches. Set `storage-key` to persist open state, panel mode, and panel width across page navigation via `sessionStorage`.

```html
<rh-drawer open>
  <div slot="header">Panel Header</div>
  <div slot="body">Panel Body</div>
  <div slot="footer">Panel Footer</div>
  <div>Drawer content<div>
</rh-drawer>