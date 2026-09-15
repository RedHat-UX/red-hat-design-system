---
"@rhds/elements": major
---

`<rh-footer>` and `<rh-footer-universal>`: changed the `logo` slot to accept an inline SVG, `<img>`, `<picture>`, or text instead of an anchor wrapping the logo. Use `logo-href` to set the logo link destination. Use optional `logo-label` to override the accessible name. Use `logo-analytics-category` and `logo-analytics-text` to copy `data-analytics-*` onto the inner link. See #3240.

This change does not affect implementations that already used the default logo and did not override the slot.

A slotted `<a>` now nests inside the component's logo link and is invalid HTML. Use `logo-href` plus a mark or text instead.

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
<rh-footer logo-href="/"
           logo-analytics-category="Footer"
           logo-analytics-text="Logo">
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
