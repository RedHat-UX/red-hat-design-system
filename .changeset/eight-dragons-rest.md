---
"@rhds/elements": major
---
Removed the `rhds.min.js` entrypoint and replaced it with a module that reexports all our element modules.

Before:

```js
import '@rhds/elements'; // get the minified bundle
import '@rhds/elements/rh-cta/rh-cta.js';
// => DOMException: 'rh-cta' has already been defined as a custom element
```

After:

```js
import '@rhds/elements'; // get the entrypoint module
import '@rhds/elements/rh-cta/rh-cta.js';
// => get the same module referenced in the entry point
```

