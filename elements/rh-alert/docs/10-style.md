## Style

An alert contains title text with an icon, body text, and a close button. They
may also include action buttons below the text or inline links. There are two
variants, toast and inline, which serve different purposes.

### Anatomy

<uxdot-example width-adjustment="538px">
  <img alt="Alert with numbers pointing to parts of the element"
       src="../alert-anatomy.svg"
       width="538px">
</uxdot-example>

1. Severity indicator
2. Severity icon
3. Title
4. Body
5. Actions
6. Close button
{.example-notes}

## Variants

### Inline

The required elements of an Inline alert are a thin top bar or thin border,
icon, title, close button, and a container background. Supporting text and
buttons may or may not be included below the title to add clarity or optional
actions.

<uxdot-example width-adjustment="538px">
  <img alt="Two examples of an inline alert"
       src="../alert-style-inline.svg">
</uxdot-example>

### Inline, alternate

The alternate Inline alert style includes a border instead of a line which can
be used to express more urgency or better grab the attention of a user.

<uxdot-example width-adjustment="538px">
  <img alt="Two examples of an alternate design for inline alerts"
       src="../alert-style-inline-alt.svg">
</uxdot-example>

### Toast

The required elements of a Toast alert are a thin top bar, icon, title, close
button, and a white container with a subtle drop shadow. Supporting text and
buttons may or may not be included below the title to add clarity or optional
actions.

<uxdot-example width-adjustment="538px">
  <img alt="Two examples of a toast alert"
       src="../alert-style-toast.svg">
</uxdot-example>

## Interaction states

Interaction states are visual representations used to communicate the status of
a component or element. The close button and any linked content are the only
interactive elements in both alert variants.

### Hover

<uxdot-example width-adjustment="538px">
  <img alt="Examples showing hover state"
       src="../alert-interaction-states-hover.svg">
</uxdot-example>

### Focus

<uxdot-example width-adjustment="538px">
  <img alt="Examples showing focus state"
       src="../alert-interaction-states-focus.svg">
</uxdot-example>

### Active

<uxdot-example width-adjustment="538px">
  <img alt="Examples showing active state"
       src="../alert-interaction-states-active.svg">
</uxdot-example>

## Spacing

### Inline

<uxdot-example width-adjustment="538px">
  <img alt="Diagram of spacing for inline alerts"
       src="../alert-spacing-inline.svg">
</uxdot-example>

### Toast

<uxdot-example width-adjustment="538px">
  <img alt="Diagram of spacing for toast alerts"
       src="../alert-spacing-toast.svg">
</uxdot-example>

<rh-table>
{% spacerTokensTable 
    headingLevel="4",
    tokens="--rh-space-md, --rh-space-lg, --rh-space-xl" %}
{% endspacerTokensTable %}
</rh-table>

### Toast (stacked)

<uxdot-example variant="full" no-border>
  <img alt="Diagram of spacing between stacked toast alerts"
       src="../alert-spacing-toast-layout.svg">
</uxdot-example>

