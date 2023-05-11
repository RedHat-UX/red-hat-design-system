{% section %}
## Implementation

- To provide context, include an <code>aria-label</code> attribute in the markup
- Ensure the tag is not interactive and cannot have focus
- Ensure tag information is not conveyed by color alone
- Ensure that surrounding content can convey the purpose of a tag via assistive technologies

## Using color
As a caution, relying on color alone to communicate information causes barriers to access for many readers. Color vision deficient and low vision users may not be able to perceive color differences, and screen readers do not announce colors to non-sighted users.

Since a tag does not get an accessible name and is not focusable by default, each tag must have adequate contextual information provided in the surrounding layout or user interface to convey the same information the color alone is conveying. A designer or developer could consider using a tag with an icon to supplement using color alone or be sure the text within a tag is as descriptive as possible.

Compare Figure 1 to Figure 2. Both figures include a blue informational tag, a red danger tag , and a cyan link tag. In Figure 1, note how difficult it is to determine the differences between the tags due to the lack of visual cues. In Figure 2, including icons and more descriptive text have increased the amount of helpful information available without using color alone.

### Figure 1
{% example palette="darkest",
        width=164,
        alt="A row of three gray tags that all look the same",
        src="../tag-a11y-figure-1.png" %}

### Figure 2
{% example palette="darkest",
        width=467,
        alt="A row of three gray tags all with a unique icon and a unique text label",
        src="../tag-a11y-figure-2.png" %}

## ARIA Authoring Practices Guide (APG)
Learn to use the accessibility semantics defined by the <a href="https://www.w3.org/WAI/standards-guidelines/aria/">Accessible Rich Internet Application (ARIA) specification</a> to create accessible web experiences.

## Web Content Accessibility Guidelines
<em>Understanding documents</em> provide detailed explanations for <a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines</a> (WCAG) and success criteria.

<a href="https://www.w3.org/TR/WCAG21/#keyboard">Keyboard (Level A, 2.1.1)</a>

<a href="https://www.w3.org/TR/WCAG21/#keyboard-no-exception">Keyboard (No Exception) (Level AAA, 2.1.3)</a>

<a href="https://www.w3.org/TR/WCAG21/#focus-order">Focus Order (Level A, 2.4.3)</a>

<a href="https://www.w3.org/TR/WCAG21/#target-size">Target Size (Level AAA, 2.5.5)</a>

{% endsection %}