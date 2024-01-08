---
"@rhds/elements": minor
---
`<rh-tile>`: add `accessible-label` attribute to override form control label


Accessible labels are visually hidden labels for form controls. In the case of 
`<rh-tile>`, they are optional, so long as the text content of the tile is 
already an accessible label for the control.

Use `accessible-label` when you would like to label the form control with 
something other than the tile's text content, or when the tile has no text 
content.

```html
<form>
  <rh-tile-group radio>
    <rh-tile name="radio" value="1">Tile 1</rh-tile>
    <rh-tile name="radio" value="2">Tile 2</rh-tile>
    <rh-tile name="radio"
             value="3"
             accessible-label="Tile 3">
      <img slot="image"
           role="presentation"
           src="tile-3.webp">
    </rh-tile>
  </rh-tile-group>
</form>
```
