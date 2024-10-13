<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-spacer-tokens-table.js';
</script>

## Style

An alert is a layout including an icon, title, text, actions, and a close 
button. It comes in a variety of colors depending on status. A toast is a 
variant of alert. Instead of having a background color, it has a white 
background with a drop shadow.

### Anatomy

<figure>
  <uxdot-example width-adjustment="456px">
    <img alt="Alert with numbers pointing to parts of the element"
         src="../alert-style-anatomy.svg"
         width="538"
         height="276">
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
  <img alt="Two examples of an inline alert"
       src="../alert-style-variant-inline.svg"
       width="408"
       height="339">
</uxdot-example>

### Inline alternate

There is an alternate inline alert where the border covers all sides.

<uxdot-example width-adjustment="408px">
  <img alt="Two examples of an alternate design for inline alerts"
       src="../alert-style-variant-inline-alt.svg"
       width="408"
       height="339">
</uxdot-example>

### Toast

Same as the inline alert, at minimum, the status icon and title needs to be visible.

<uxdot-example width-adjustment="456px">
  <img alt="Two examples of a toast alert"
       src="../alert-style-variant-toast.svg"
       width="456"
       height="203">
</uxdot-example>

## Space

<uxdot-example width-adjustment="456px">
  <img alt="Diagram of spacing for inline alerts"
       src="../alert-style-spacing-1.svg"
       width="456"
       height="276">
</uxdot-example>

<uxdot-example variant="full" no-border>
  <img alt="Diagram of spacing for toast alerts"
       src="../alert-style-spacing-2.svg"
       width="1140"
       height="302">
</uxdot-example>

<uxdot-example width-adjustment="752px"
               alignment="left"
               variant="full"
               no-border>
  <img alt="Diagram of spacing for alerts on mobile"
       src="../alert-style-spacing-3.svg"
       width="752"
       height="640">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="--rh-space-md, --rh-space-lg, --rh-space-xl">
</uxdot-spacer-tokens-table>

## Interaction states

Refer to these documentation pages for interaction states.

- [Button](/elements/button/style/#interaction-states)
