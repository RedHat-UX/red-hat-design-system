---
"@rhds/elements": minor
---

`<rh-card>`: ✨ Added promo card variant

The promo card variant allows users to easily display text and optionally an image side by side. 

```html
<rh-card variant="promo">
  <img slot="image" alt="product illustration" src="/assets/images/new-product.png">
  <h2 slot="header">Try our new product</h2>
  <p>Our new product is the best in class.</p>
  <rh-cta slot="footer" href="#">Start a Free Trial</rh-cta>
</rh-card>
```
