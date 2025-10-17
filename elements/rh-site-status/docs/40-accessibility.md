## Keyboard navigation

Users should have the ability to move focus to the site status link in the footer or anywhere else.

<uxdot-example variant="full" no-border>
  <img src="../site-status-accessibility-footer.svg"
        alt="A site status element with a green checkmark and the text 'All systems operational' in a footer element with focus indicators letting users know that a site status component is a focusable element."
        width="1140"
        height="915">
</uxdot-example>

## Screen reader guidelines

Website status should communicate the following to users.

- What is the severity of the status icon
- What the text says
- That the text is also a link
- Where the link will take them if selected
- If the status is still loading


{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}
