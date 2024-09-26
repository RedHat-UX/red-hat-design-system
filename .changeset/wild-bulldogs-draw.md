---
"@rhds/elements": minor
---

Theming: Added [theming tokens][theming] to most elements

Theming tokens let authors respond to the currently-active colour palette, and
are especially useful when implementing [patterns][patterns] using themeable 
elements.

```html
<rh-card class="example-logo-text-and-cta">
  <p>Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>.</p>
  <rh-cta slot="footer" href="#">Call to action</rh-cta>
</rh-card>

<style>
  .example-logo-text-and-cta {
    width: 360px;
    & em {
      color: var(--rh-color-accent-base);
    }
  }
</style>
```

[theming]: ux.redhat.com/theming
[patterns]: https://ux.redhat.com/patterns/
