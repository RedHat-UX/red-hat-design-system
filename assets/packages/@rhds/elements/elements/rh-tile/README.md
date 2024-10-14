# Tile
A form of selection that can be used in place of a link, checkbox, or radio button. 

## Usage
If the tile is not checkable, a link slotted in the image or headline slots will become the link when the card is clicked. Be sure to include alt text for a slotted image especially if it is wrapped in a link.

```html
<rh-tile>
  <img slot="image" src="https://fakeimg.pl/296x50" alt="296 X 50 placeholder image">
  <div slot="title">Title</div>
  <h2 slot="headline"><a href="#top">Link</a></h2>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <div slot="footer">Suspendisse eu turpis elementum</div>
</rh-tile>
```

# Tile Group
A group of `<rh-tile>` elements which handles radio selection.

## Usage
A tile group should include more than one tile in its slot.

```html
<rh-tile-group radio>
  <rh-tile checked>
    <img slot="image" src="https://fakeimg.pl/296x50" alt="296 X 50 placeholder image">
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
