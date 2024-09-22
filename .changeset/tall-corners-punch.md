---
"@rhds/elements": minor
---
`<rh-skip-link>`: added optional `href` attribute:

```html
<rh-skip-link href="#main-content">Skip to main content</rh-skip-link>
```

is equivalent to:

```html
<rh-skip-link>
  <a href="#main-content">Skip to main content</a>
</rh-skip-link>
```

