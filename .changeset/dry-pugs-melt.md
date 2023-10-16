---
"@rhds/elements": minor
---

Added `<rh-tile>`.

Tile creates a component that can be used in place of a link, checkbox, or radio button selection. 

```html
  <rh-tile-group radio>
    <rh-tile checked>
      <div slot="title">Title</div>
      <h2 slot="headline"><a href="#top">Link</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>

    <rh-tile>
      <div slot="title">Title</div>
      <h2 slot="headline"><a href="#top">Link</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>

    <rh-tile>
      <div slot="title">Title</div>
      <h2 slot="headline"><a href="#top">Link</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>
  </rh-tile-group>
```
