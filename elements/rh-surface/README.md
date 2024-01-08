# Surface

Surface elements provide a background color as well as accessible font colors for their children.

## Installation

If using npm/bundlers:

```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-surface/rh-surface.js';
```

## Usage
Use the `<rh-surface>` element when you have child elements that need their background colors or text colors set by the parent context. Use surface only when other container elements like `<rh-card>` would
be inappropriate.

```html
<rh-surface color-palette="light">
  <rh-spinner>Loading...</rh-spinner>
</rh-surface>
```

An example would be a hero element or band which contain other elements such as headings, paragraphs, and call-to-action links.  `<rh-surface>` will automatically set the correct text color and alert child context consuming elements to update their colors to ensure accessibility. 


## Color Palette
The color palette attribute can be set to `darkest`, `darker`, `dark`, `light`, `lighter`, or `lightest` (default).  This will set the background color of the surface element as well as the text color

The `<rh-surface>` element has a single anonymous slot which accepts any content and does not provide additional layout styling.

### Basic Example

```html
<rh-surface color-palette="dark">
  <h2>Surface Title</h2>
  <p>Surface content</p>
  <rh-cta>
    <a href="#">Surface link</a>
  </rh-cta>
</rh-surface>
```

[spec]: https://ux.redhat.com/elements/surface/
