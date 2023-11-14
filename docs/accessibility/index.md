---
title: Accessibility
---

Making content accessible is an opportunity to be creative, challenge convention, and be ahead of the curve when it comes to making the web a less hostile place.

“The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.” — Tim Berners-Lee, W3C Director and inventor of the World Wide Web

When it comes to product experiences, no one should get left behind. That's why accessibility is so important in design and development. The goal of software accessibility is to remove barriers and create inclusive product experiences that work for everyone, regardless of ability.

Accessibility is best achieved when considered early in the design and development process. So if you contribute to Red Hat Design System or use it for your products, familiarize yourself with accessibility first.

## Understanding users’ needs
Great user experiences don’t just happen. They’re designed, tested, and refined with the user in mind. To develop inclusive products, it’s important to understand the varying needs of a wide range of users and consider the assistive tools and methods they use.

This section provides information to help you better understand and address the needs of these different user groups.

{% alert title="Note" %}
Some users might fall into multiple groups, and some might use tools created for a different group.
{% endalert %}

### Motor
Users with poor motor control can use a range of devices to access contents.

- Users who rely on a keyboard need elements that are keyboard accessible and highly visible when in focus.
- Users who rely on a mouse or touch need target areas that are large enough to be hit easily.

### No vision
Users with no vision rely on screen readers to access web sites and applications. Often, screen reader users will navigate a page by browsing specific elements, like headers, links, or form elements.

{% alert title="Tip" %}
Use semantic elements and check that labels are meaningful when pulled out of context.
{% endalert %}

### Low vision
Users with low vision can have different needs depending on the nature of their visual impairment. Users may have difficulty with color differentiation, blurriness, or lack of vision in central or peripheral areas.

{% alert title="Tip" %}
These needs mean that interfaces should not rely on color to communicate information, palettes need to have sufficient contrast, and layouts should be responsive when font sizes are increased.
{% endalert %}

### Cognitive
Users who have difficulty processing information benefit from well-written content.

- Information should be clear, concise, and easy to scan.
- Consider visual hierarchy, chunk content into short, related sections, and avoid long paragraphs.

These are some of the main user groups, but it is not an exhaustive list. Often “the Persona Spectrum”, coined by Microsoft, can be used to understand related mismatches and motivations across a spectrum of permanent, temporary, and situational scenarios.

While accessibility tends to focus on those with disabilities, everyone benefits from accessible products. For example:

- Accessible written content is easier to comprehend for people who aren’t fluent in the language and for people with low literacy levels.
- Alternative text (alt text) makes images accessible to users with low bandwidth connections or with older technologies that can’t load the images.
- Closed captioning benefits those in crowded areas, those teaching children how to read, or those learning a new language.

There are plenty more examples we could include. Essentially, accessibility takes _all users_ into account.

Accessibility spectrum example

| Type      | Situational | Temporary | Permanent |
| --------- | ----------- | --------- | --------- |
| Touch     | ...         | ...       | ...       |
| Sight     | ...         | ...       | ...       |
| Auditory  | ...         | ...       | ...       |
| Sppech    | ...         | ...       | ...       |
| Cognitive | ...         | ...       | ...       |

## Experience parity
The PatternFly community believes all abilities should be treated equally. In other words, there should be parity in the experience of all users—one user group shouldn't be prioritized over the other.

To help you achieve this, consider these guidelines:

- There should be parity among all input types: touch, mouse, and keyboard.
- Don’t optimize the experience for one input type at the expense of another.
- Contents that a user can interact with using a mouse should also be accessible using touch or keyboard.
- Don’t show interactive elements on hover. Interactive elements that can display in a pop-up must display on click/touch/Enter events.
- There should be parity between the screen reader contents and visibly rendered contents (refer to the first Note for aria-hidden.
- There should be parity between hover and focus events. Any information that’s available on hover for the mouse user should be available on focus for the keyboard-only user. It should also be available to the screen reader user using aria-describedby (refer to Tooltips & Toggletips example from Inclusive Components).
- When building accessible user experiences, solving for one can extend to many. Humans are diverse and unique, and inclusive design takes that into consideration to create truly incredible products.

<div class="multi-column--min-400-wide margin-top--10">
{%- for accessibility in collections.accessibility -%}\
  <div class="padding-stacked">
    <a href="{{ accessibility.url }}">accessibility.title</a>
  </div>
{% endfor %}
</div>