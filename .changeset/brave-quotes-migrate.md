---
"@rhds/elements": major
---

`<rh-blockquote>`: removed the deprecated `title` property and `title` slot. Use the `subtitle` property or `subtitle` slot instead.

Before:

```html
<rh-blockquote>
  <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>
  <span slot="author">Linus Torvalds</span>
  <span slot="title">Software Engineer</span>
</rh-blockquote>
```

After:

```html
<rh-blockquote>
  <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>
  <span slot="author">Linus Torvalds</span>
  <span slot="subtitle">Software Engineer</span>
</rh-blockquote>
```
