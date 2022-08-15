# Tooltip
A tooltip is a floating text area triggered by a user that provides helpful or contextual information.

## Usage
A tooltip is used by wrapping an html element in the rh-tooltip element along with contextual information to be displayed alongside of the element.  

##  Installation

If using npm/bundlers:
```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
```
## Usage


### Basic Tooltip 
```html
<rh-tooltip>
    <div>
        This is An Element 
    </div>
    <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.
    </div>
</rh-tooltip>
```

### Tooltip With Left Positioning (also available: top, right, bottom)
```html
<rh-tooltip position="left">
    <div>
        This is An Element 
    </div>
    <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.
    </div>
</rh-tooltip>
```

### Tooltip With Left Positioning And Offset
```html
<rh-tooltip position="left" offset="10, 10">
    <div>
        This is An Element 
    </div>
    <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.
    </div>
</rh-tooltip>
```
