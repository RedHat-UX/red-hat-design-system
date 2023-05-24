# `<rh-card> ` - Red Hat Card Element

Please see the [design specs][spec] for this element.

Cards are used to group related information and actions. They are used to display a collection of related information, such as a product, a set of related links, or a collection of related files.

## Installation

If using npm/bundlers:

```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-card/rh-card.js';
```

## Usage

Add `<rh-card>` to the page. 

A card consists of the following slots:

`header`
- If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).  An icon, svg, or use of the icon component are also valid in this region.

`footer`
- Use this slot for anything that you want to be stuck to the base of the card.

`Anonymous Slot`
- Any content that is not designated for the header or footer slot, will go to this slot.

### Basic Card

```html
<rh-card>
  <h2 slot="header">Card Title</h2>
  <p>Card content</p>
  <a href="#" slot="footer">Card link</a>
</rh-card>
```

### Card with Icon

```html
<rh-card>
    <img slot="header" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg" alt="icon" />
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a
        sollicitudin mauris tincidunt. Pellentesque vel dapibus risus. Nullam aliquam felis orci, eget 
        cursus mi lacinia quis. Vivamus at felis sem.
    </p>
    <a href="#" slot="footer">Call to Action</a>
</rh-card>
```

### Card with Title Bar

```html
<rh-card bar>
    <h2 slot="header">Card Title</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a
        sollicitudin mauris tincidunt. Pellentesque vel dapibus risus. Nullam aliquam felis orci, eget 
        cursus mi lacinia quis. Vivamus at felis sem.
    </p>
    <a href="#" slot="footer">Call to Action</a>
</rh-card>
```

[spec]: https://ux.redhat.com/elements/card