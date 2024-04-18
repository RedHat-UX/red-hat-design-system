---
"@rhds/elements": minor
---
`<rh-codeblock>`: added copy and wrap actions, with localizable slots for the button labels

```html
<rh-code-block actions="wrap copy">
  <span slot="action-label-copy">Copy to Clipboard</span>
  <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
  <span slot="action-label-wrap">Toggle word wrap</span>
  <span slot="action-label-wrap" hidden data-code-block-state="active">Toggle overflow</span>
<script type="text/css">:host {
  display: block;
}</script>
</rh-code-block>
```
