## Implementation

Most accessibility concerns should be covered by implementing health index per 
our guidelines. You can double-check your implementation by ensuring the 
following:

- Health index should not be interactive or keyboard-focusable
- Health index should be placed in a context that makes its purpose clear to all 
users—with and without assistive technologies
- Health index should communicate its grade both visually and to assistive tech

Test your experience with a keyboard and [screen reader][sr] to help verify 
these accessibility conformance checks. `<rh-health-index>` should present to 
assistive technology using the [meter role][meter] and corresponding ARIA 
attributes to communicate to assistive technology. Inspect this element using 
the [DevTools Accessibility Tree][chrome-a11y-dev] to see each value.

## ARIA Authoring Practices Guide (APG)

Learn to use the accessibility semantics defined by the [Accessible Rich
Internet Application][aria] (ARIA) specification to create accessible web 
experiences.

<rh-cta href="https://www.w3.org/WAI/fundamentals/">View APG resources</rh-cta>

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/1.1.1-A.md' %}
{% include 'partials/accessibility/1.4.1-A.md' %}

[sr]: /accessibility/qa-testing/#screen-readers
[meter]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role
[chrome-a11y-dev]: https://developer.chrome.com/docs/devtools/accessibility/reference#pane
[aria]: https://www.w3.org/WAI/
