# Pagination
Red Hat Pagination web component. A responsive, dynamic, and flexible paginator.

## Usage
Pagination is the practice of separating content into individual numbered pages. The pagination web
component provides a user-friendly and accessible means of navigating between those pages.

```html
<rh-pagination>
  <ol>
    <li><a href="#">1</a></li>
    <li><a href="#2">2</a></li>
    <li><a href="#3">3</a></li>
    <li><a href="#4">4</a></li>
    <li><a href="#5">5</a></li>
  </ol>
</rh-pagination>
```

For best results, navigation link text should be numbers only, as shown above.

## Accessibility

By default, `rh-pagination` comes with accessible English labels for its internal components. When 
using the component on internationalized pages, use the `label-` attributes to ensure that users of
assistive technology receive an accessible experience.

```html
<rh-pagination label="navigation des pages"
               label-first="première page"
               label-previous="page précédente"
               label-next="page suivante"
               label-last="dernière page">
  <ol>
    <li><a href="#">1</a></li>
    <li><a href="#2">2</a></li>
    <li><a href="#3">3</a></li>
    <li><a href="#4">4</a></li>
    <li><a href="#5">5</a></li>
  </ol>
</rh-pagination>
```

## Use with Client-Side Routing
In a single-page application or other situation utilizing client-side routing, call the
`requestUpdate()` method to synchronize the paginator with the location state.

In this example, a hypothetical SPA router object emits a `navigation` event whenever the user
navigates.
 
```js
import { router } from '#app/router';
const paginator = document.querySelector('rh-pagination');
router.addEventListener('navigation', function() {
  paginator.requestUpdate();
});
```

Calling `requestUpdate()` causes the paginator to check `window.location` (i.e. the url bar) and
update its own state in accordance. Therefore, for best results, ensure that your SPA uses URLs,
and the browser's [`Location`](https://developer.mozilla.org/en-US/docs/Web/API/Location) and
[`history`](https://developer.mozilla.org/en-US/docs/Web/API/History_API) APIs in a standard way.

