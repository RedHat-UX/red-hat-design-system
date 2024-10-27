---
"@rhds/elements": patch
---

`<rh-alert>`: change heading color for all states of alert to make them all the same

**Before:**
```css
#container.caution {
    --_header-color: var(--rh-color-orange-70);
}

#container.danger {
    --_header-color: var(--rh-color-red-orange-70);
}
```

**After:**
```css
#container {
    --_header-color: var(--rh-color-text-primary-on-light, #151515);
}
```