---
"@rhds/elements": minor
---

`<rh-tooltip>`: add the `silent` attribute to hide tooltip content from screen readers.

```html
<rh-tooltip silent>
  <rh-button variant="secondary">
    <rh-icon set="ui" icon="copy" accessible-label="Copy to Clipboard"></rh-icon>
  </rh-button>
  <span slot="content">Copy to Clipboard</span>
</rh-tooltip>
```
