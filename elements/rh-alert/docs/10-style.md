
## Style

An alert is a layout including an icon, title, text, actions, and a close button. It comes in a variety of colors depending on status. A toast is a variant of alert. Instead of having a background color, it has a white background with a drop shadow.

### Anatomy

<figure>
  <uxdot-example width-adjustment="456px">
    <img src="../alert-style-anatomy.svg" alt="Alert with numbers pointing to parts of the element" width="538px">
  </uxdot-example>    
  <figcaption>
    <ol>
      <li>Status icon</li>
      <li>Title</li>
      <li>Body text</li>
      <li>Action buttons</li>
      <li>Close button</li>
      <li>Color background</li>
      <li>White background with drop shadow</li>
    </ol>
  </figcaption>
</figure>


## Variants

### Inline

The default alert is inline. At minimum, the status icon and title needs to be visible.

<uxdot-example width-adjustment="408px">
  <img src="../alert-style-variant-inline.svg" alt="Two examples of an inline alert">
</uxdot-example>

### Inline alternate

There is an alternate inline alert where the border covers all sides.

<uxdot-example width-adjustment="408px">
  <img src="../alert-style-variant-inline-alt.svg" alt="Two examples of an alternate design for inline alerts">
</uxdot-example>

### Toast

Same as the inline alert, at minimum, the status icon and title needs to be visible.

<uxdot-example width-adjustment="456px">
  <img src="../alert-style-variant-toast.svg" 
        alt="Two examples of a toast alert"
        width="456px">
</uxdot-example>


## Interaction states

Refer to these documentation pages for interaction states.

- [Button](/elements/button/style/#interaction-states)

## Space

<uxdot-example width-adjustment="456px">
  <img src="../alert-style-spacing-1.svg" 
      alt="Diagram of spacing for inline alerts"
      width="456px">
</uxdot-example>

<uxdot-example variant="full" no-border>
  <img src="../alert-style-spacing-2.svg" 
      alt="Diagram of spacing for toast alerts"
      width="1140px"">
</uxdot-example>

<uxdot-example width-adjustment="752px"
               alignment="left"
               variant="full"
               no-border>
  <img src="../alert-style-spacing-3.svg" 
        alt="Diagram of spacing for alerts on mobile"
        width="752px">
</uxdot-example>

<rh-table>
{% spacerTokensTable 
    caption='',
    headingLevel="4",
    tokens="--rh-space-md, --rh-space-lg, --rh-space-xl" %}
{% endspacerTokensTable %}
</rh-table>


