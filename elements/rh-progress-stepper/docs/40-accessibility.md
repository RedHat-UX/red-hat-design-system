# Accessibility

## ARIA Roles and Properties

The Progress Steps component implements the following ARIA attributes:

- `role="list"` on the container
- `role="listitem"` on each step
- `aria-current="step"` on the active step
- `aria-label` for each step's label
- `aria-describedby` for step descriptions

## Keyboard Navigation

The component supports the following keyboard interactions:

- `Tab` - Move focus between steps
- `Enter` or `Space` - No action (steps are not interactive)
- `Arrow Up/Down` - No action (steps are not interactive)

## Screen Reader Support

Screen readers will announce:
- The step's label
- The step's description (if provided)
- The current state of the step
- The active step as the current step

## Color Contrast

The component uses the following color contrast ratios:
- Text: 4.5:1 minimum contrast ratio
- Icons: 3:1 minimum contrast ratio
- State colors: 3:1 minimum contrast ratio

## Best Practices

1. Always provide meaningful labels
2. Include descriptive text for each step
3. Use appropriate state colors
4. Ensure sufficient color contrast
5. Test with screen readers
6. Verify keyboard navigation
7. Test with different zoom levels

## Example with ARIA Attributes

```html
<<<<<<< HEAD
<<<<<<< HEAD
<rh-progress-steps role="list">
=======
<rh-progress-stepper role="list">
>>>>>>> 50061e12 (Restructured Stepper)
=======
<rh-progress-stepper role="list">
>>>>>>> 50061e12d9d18651a6825147430c1778b71ad546
  <rh-progress-step
    role="listitem"
    state="complete"
    label="Step 1"
    description="This step is complete"
    aria-label="Step 1: Complete"
    aria-describedby="step1-desc"
  >
    <span id="step1-desc" class="visually-hidden">
      This step has been completed successfully
    </span>
  </rh-progress-step>
  
  <rh-progress-step
    role="listitem"
    state="active"
    label="Step 2"
    description="Currently working on this step"
    aria-current="step"
    aria-label="Step 2: Current"
    aria-describedby="step2-desc"
  >
    <span id="step2-desc" class="visually-hidden">
      This is the current step in the process
    </span>
  </rh-progress-step>
<<<<<<< HEAD
<<<<<<< HEAD
</rh-progress-steps>
=======
</rh-progress-stepper>
>>>>>>> 50061e12 (Restructured Stepper)
=======
</rh-progress-stepper>
>>>>>>> 50061e12d9d18651a6825147430c1778b71ad546
``` 