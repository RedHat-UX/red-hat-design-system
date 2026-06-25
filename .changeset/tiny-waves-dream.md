---
"@rhds/elements": minor
---

`<rh-cta>`: refactor focus ring to use `outline` instead of a `::after` pseudo-element

- Outer focus ring moved from `#container` to `:host`, drawn with `outline`
- Inner focus/active ring replaced from `::after` border to `outline` with negative offset on `#container`
- Removed `#container::after` pseudo-element entirely
- Added `--rh-cta-hover-background-color` as a public override in the hover state rule, consistent with how focus and active already expose their background-color APIs
- No visual changes; both rings are now `outline`-based for forced-colors compatibility
  