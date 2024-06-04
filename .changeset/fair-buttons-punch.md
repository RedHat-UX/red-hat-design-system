---
"@rhds/elements": minor
---

`<rh-card>`: ✨ Added Inline Promo variant

The Inline Promo card variant allows users to easily display text and optionally an image side by side. 

```html
<rh-card variant="inline-promo">
  <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 190">
    <title>A placeholder image in rh-card in the "image" slot</title>
    <rect x="0" y="0" width="320" height="190" fill="#e7f0f9"/>
    <line x1="0" y1="0" x2="320" y2="190" stroke="#d6e7f5"/>
    <line x1="320" y1="0" x2="0" y2="190" stroke="#d6e7f5"/>
  </svg>

  <h2>Featured: left aligned with image</h2>
  <p>You can customize the <code>#body</code> by using the <code>::part</code> selector. Using this technique, you can have padding on the top, bottom, left, right, or none at all.</p>
  <rh-cta>
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>
```
