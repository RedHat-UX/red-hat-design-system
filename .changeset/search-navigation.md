---
"@rhds/elements": minor
---

`<rh-navigation-primary>`: added a search region via the new `search` slot and `<rh-navigation-primary-item variant="search">`.

Below 992px the item renders a search toggle that opens the search content in a dropdown panel below the bar, full width up to 576px and sized to its slotted content on wider containers; the panel is closed by default. At 992px and above the content is displayed inline and open in the utility cluster and the toggle is hidden. When a search region is present, primary menu items collapse into the hamburger below 1440px. Set `summary` on the item to label the toggle, which is required for non-English locales. The item's `open` property, `show()`, and `hide()` methods apply to the search variant.

Non-hamburger dropdown panels — the utility dropdowns, the links menu, and the search panel below 992px — go full width below 576px and size to their content above it, aligned to the bar's inline end, with rounded bottom corners. The links menu is capped at 576px until it is displayed inline; the search panel sizes to its slotted content. When a search region is present, the links menu panel is anchored to its toggle so it stays attached once the search becomes inline at 992px (browsers without anchor positioning keep the inline-end alignment). Panels inside the hamburger keep their full-width presentation.

```html
<rh-navigation-primary>
  <rh-navigation-primary-item slot="search" variant="search" summary="Search">
    <!-- search pattern slotted here -->
  </rh-navigation-primary-item>
</rh-navigation-primary>
```
