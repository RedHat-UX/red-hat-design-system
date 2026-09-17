---
"@rhds/elements": major
---

`<rh-footer>` and `<rh-footer-universal>`: changed the `logo` slot to accept an inline SVG, `<img>`, `<picture>`, or text instead of an anchor wrapping the logo. Use `logo-href` to set the logo link destination. Use optional `logo-label` to override the accessible name. See #3240.

This change does not affect implementations that already used the default logo and did not override the slot.

The previously slotted `<a>` now nests inside the component's logo link and must be removed or risk of becoming invalid HTML. Use `logo-href` plus a mark or text instead. Data analytics will need to be moved to composed event capturing the click event retargeting.

Before:

```html
<rh-footer>
  <a slot="logo" href="/" data-analytics-category="Footer" data-analytics-text="Logo">
    <img src="red-hat-logo.svg" alt="Red Hat">
  </a>
  <!-- ... -->
</rh-footer>
```

After:

```html
<rh-footer logo-href="/">
  <img slot="logo" src="red-hat-logo.svg" alt="Red Hat">
  <!-- ... -->
</rh-footer>
```

Universal footer, before:

```html
<rh-footer-universal>
  <a slot="logo" href="https://www.redhat.com/ja">
    <svg><!-- fedora --></svg>
  </a>
</rh-footer-universal>
```

After:

```html
<rh-footer-universal logo-href="https://www.redhat.com/ja">
  <svg slot="logo" role="img"><title>Red Hat</title><!-- fedora --></svg>
</rh-footer-universal>
```

Text logo:

```html
<rh-footer logo-href="https://docs.redhat.com">
  <span slot="logo">Docs</span>
</rh-footer>
```
