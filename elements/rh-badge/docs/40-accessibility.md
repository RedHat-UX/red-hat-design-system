## Using color
As a caution, relying on color alone to communicate information causes barriers to access for many readers. Color vision deficient and low vision users may not be able to perceive color differences, and screen readers do not announce colors to non-sighted users. Since a badge does not get an accessible name and is not focusable by default, each badge must have adequate contextual information provided in the surrounding layout or user interface to convey the same information that color alone is conveying.

In addition to indicating badge status via color, visible or visually-hidden text should be added manually for context.

## Additional guidelines
- Ensure the badge is not interactive and cannot receive focus
- Ensure badge information is not conveyed by color alone like a read or unread badge
- Ensure that surrounding content can convey the purpose of a badge via assistive technologies

{% include 'accessibility/ariaguide.md' %}
{% include 'accessibility/wcag.md' %}
{% include 'accessibility/1.4.1-A.md' %}