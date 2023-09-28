---
"@rhds/elements": minor
---

Added `<rh-tile>`.

A form of selection that can be used in place of a link, checkbox, or radio button. 

```html
  <rh-tile>
    <img slot="image" src="//fakeimg.pl/296x50" alt="296 X 50 placeholder image">
    <div slot="title">Title</div>
    <h2 slot="headline"><a href="#top">Link</a></h2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <div slot="footer">Suspendisse eu turpis elementum</div>
  </rh-tile>
```

Added `<rh-tile-group>`.

A group of `<rh-tile>` elements which handles radio selection.

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
