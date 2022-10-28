# Accordion
Accordions toggle the visibility of sections of content. They feature panels that consist of a section text label and a caret icon that collapses or expands to reveal more information.

## Usage
An is used by using an `rh-accordion` element and using `rh-accordion-header` / `rh-accordion-panel` to create toggle / content pairs inside of the accordion.  

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


### Basic Accordion 
```html
<rh-accordion>
    <rh-accordion-header>
        <h2>Item One</h2>
    </rh-accordion-header>
    <rh-accordion-panel>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna
        aliqua.
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna
        aliqua.
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna
        aliqua.
    </rh-accordion-panel>
</rh-accordion>
```