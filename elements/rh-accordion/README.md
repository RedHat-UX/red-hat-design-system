# `<rh-accordion>` - Red Hat Accordion Element

Please see the [design specs][spec] for this element.

Accordions toggle the visibility of sections of content. They feature panels 
that consist of a section text label and a caret icon that collapses or expands 
to reveal more information. 

##  Installation

If using npm/bundlers:

```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-accordion/rh-accordion.js';
```

## Usage

Add `<rh-accordion>` to the page, and write `<rh-accordion-header>` / 
`<rh-accordion-panel>` pairs as children of the accordion element.

### Basic Accordion

```html
<rh-accordion>
  <rh-accordion-header>
    <h2>Item One</h2>
  </rh-accordion-header>
  <rh-accordion-panel>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua.</p>
  </rh-accordion-panel>
</rh-accordion>
```

### Large Accordion

```html
<rh-accordion large>
  <rh-accordion-header>
    <h2>Item One</h2>
  </rh-accordion-header>
  <rh-accordion-panel>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </rh-accordion-panel>
</rh-accordion>
```

### Bordered Accordion

```html
<rh-accordion bordered>
  <rh-accordion-header>
    <h2>Item One</h2>
  </rh-accordion-header>
  <rh-accordion-panel>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua.</p>
  </rh-accordion-panel>
</rh-accordion>
```

## Questions and Feedback

Questions? Comments? Feedback? Need help installing or implementing?
Please [open a discussion thread][qa] here on GitHub. The Design Systems team 
will help.

[spec]: https://ux.redhat.com/elements/accordion/
[qa]: https://github.com/orgs/RedHat-UX/discussions/categories/q-a
