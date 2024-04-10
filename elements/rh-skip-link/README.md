# Skip Link

A skip link is a link that allows the user to skip to a different
section on the same page. It allows assistive technology users to 
skip repetitive content listed on every page.

## Installation

If using npm/bundlers:

```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-skip-link/rh-skip-link.js';
```

## Usage

Generally, a skip link is placed as the first focusable item on a 
page and targets the main content of a page. 

```html
<rh-skip-link>
  <a href="#main-content">Skip to main content</a>
</rh-skip-link>
```
