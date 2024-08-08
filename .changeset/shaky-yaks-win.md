---
"@rhds/elements": minor
---
`<rh-cta>`: added `href` attribute. When set, do not slot an anchor or button,
instead, slot in the link text.

These two are equivalent:

```html
<rh-cta>
  <a href="/elements">Elements</a>
</rh-cta>
```

```html
<rh-cta href="/elements">Elements</rh-cta>
```
