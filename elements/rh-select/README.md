# Select

A select list enables users to select one or more items from a list. It functions as a branded `<select>` element.

## Installation

Follow the RHDS [installation instructions](https://ux.redhat.com/get-started/developers/installation/), then paste the following into your project:

```js
import '@rhds/elements/rh-select/rh-select.js';
```

## Usage

Paste the following HTML into your project:

```html
<label for="select-1">Select an item</label>
<rh-select id="select-1" placeholder="Select an item">
  <rh-option>Item 1</rh-option>
  <rh-option>Item 2</rh-option>
  <rh-option>Item 3</rh-option>
  <rh-option>Item 4</rh-option>
</rh-select>
```

Full documentation for `<rh-select>` can be found on its [Code](https://ux.redhat.com/elements/select/code/) page.
