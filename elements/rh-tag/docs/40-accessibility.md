## Implementation

- Ensure any interactive elements can be navigated to and interacted with via 
  keyboard and other assistive technologies such as a screen reader
- Provide an aria-label if a tag group does not have a visible text category 
  name
- Ensure a tag that contains a link has descriptive text content

## Using color
As a caution, relying on color alone to communicate information causes barriers 
to access for many readers. Color vision deficient and low vision users may not 
be able to perceive color differences, and screen readers do not announce colors 
to non-sighted users.

Since a tag does not get an accessible name and is not focusable by default, 
each tag must have adequate contextual information provided in the surrounding 
layout or UI to convey the same information that color alone would convey. 
Designers and developers should consider using tags with icons instead of color 
alone or be sure that text within a tag is as descriptive as possible.

Compare Figure 1 to Figure 2. Both examples include blue, red, and green tags. 
In Figure 1, note how difficult it is to determine the differences between tags 
due to a lack of visual cues. In Figure 2, including icons and more descriptive 
text increases the amount of helpful information available without relying on 
color alone.

<div class="grid xs-two-columns">
  <figure>
    <uxdot-example width-adjustment="418px">
      <img src="../tag-a11y-using-color-fig-1.svg"
        alt="An image of 3 tags, first tag is outline variant with a white background and blue colored text which reads Tag 1.  The second tag is outline variant with white background and red colored text which reads Tag 2. The third tag is an outline variant with white background and green colored text which reads Tag 3."
        width="418"
        height="29">
    </uxdot-example>
    <figcaption><h3>Figure 1</h3></figcaption>
  </figure>
  <figure>
    <uxdot-example width-adjustment="418px">
      <img src="../tag-a11y-using-color-fig-2.svg"
        alt="An image of 3 tags, first tag is outline variant with a white background and blue colored text which reads Secure server and has a blue padlock icon.  The second tag is outline variant with white background and red colored text which reads critical error and has a red circle with an exclamation point icon The third tag is an outline variant with white background and green colored text which reads signed successfully and has a green circle icon with a check mark."
        width="418"
        height="29">
    </uxdot-example>
    <figcaption><h3>Figure 2</h3></figcaption>
  </figure>
</div>

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}

