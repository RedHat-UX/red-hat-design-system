# Style Guide

## Colors

<<<<<<< HEAD
The Progress Steps component uses the following color variables for different states:
=======
The Progress Stepper component uses the following color variables for different states:
>>>>>>> 50061e12 (Restructured Stepper)

| State | Color Variable | Description |
|-------|----------------|-------------|
| Inactive | `--rh-color-gray-30` | Default state color |
| Active | `--rh-color-status-note` | Current step color |
| Complete | `--rh-color-status-success` | Success state color |
| Warning | `--rh-color-yellow-50` | Warning state color |
| Fail | `--rh-color-status-danger` | Error state color |

## Typography

The component uses the following typography variables:

| Element | Variable | Default |
|---------|----------|---------|
| Label | `--rh-font-weight-heading-medium` | 500 |
| Description | `--rh-font-size-body-text-sm` | 0.875rem |

## Spacing

The component uses the following spacing variables:

| Element | Variable | Default |
|---------|----------|---------|
| Steps gap | `--rh-space-lg` | 1rem |
| Step elements gap | `--rh-space-md` | 0.5rem |
| Description margin | `--rh-space-xs` | 0.25rem |

## Icons

The component uses the following default icons from the UI set:

| State | Icon Name |
|-------|-----------|
| Inactive | `harvey-ball-0` |
| Active | `resources-full` |
| Complete | `check-circle-fill` |
| Warning | `error-fill` |
| Fail | `ban-fill` |

Icon size is controlled by:
- Width: `--rh-space-xl` (1.5rem)
- Height: `--rh-space-xl` (1.5rem)

## CSS Custom Properties

You can customize the appearance of the Progress Steps component using the following CSS custom properties:

```css
<<<<<<< HEAD
rh-progress-steps {
=======
rh-progress-stepper {
>>>>>>> 50061e12 (Restructured Stepper)
  /* Container styles */
  --rh-space-lg: 1rem; /* Gap between steps */
}

rh-progress-step {
  /* Step styles */
  --rh-space-md: 0.5rem; /* Gap between step elements */
  --rh-space-xl: 1.5rem; /* Icon size */
  --rh-space-xs: 0.25rem; /* Description margin */
  
  /* Typography */
  --rh-font-weight-heading-medium: 500;
  --rh-font-size-body-text-sm: 0.875rem;
  
  /* Colors */
  --rh-color-text-primary-on-light: #151515;
  --rh-color-text-secondary-on-light: #4a4a4a;
  --rh-color-text-disabled-on-light: #6a6e73;
}
```

## Style

Progress steps contain **at least three** step indicators. They are positioned
on a thin horizontal or vertical line and organized sequentially from left to
right or top to bottom.

<uxdot-example width-adjustment="699px" color-palette="lightest">
  <img src="../progress-steps-blueprint.svg"
        alt="Progress steps component blueprint"
        width="699"
        height="298">
</uxdot-example>


### Visual elements

Progress steps display circles or icons that indicate where a user is in the
completion process. The appearance of these states change as a user moves
through each step of the task.

- **Finished step** - A green circle with a check mark indicates a user has
  completed a previous step.
<<<<<<< HEAD
- **Current step** - A bright red circle with a pink border indicates a user
=======
- **Current step** - A solid purple circle inside a larger purple circle indicates a user
>>>>>>> 50061e12 (Restructured Stepper)
  is viewing or completing the current step.
- **Error step** - A dark red circle with an exclamation mark indicates there
  is an issue a user should be aware of.
- **Next or Final step** - A white circle with a light gray border indicates
  the next or final step has not been visited yet.
- **Progress bar** - A dark gray bar in between Finished and Current steps
  indicates how much progress a user has made.

<uxdot-example width-adjustment="385px" color-palette="lightest">
  <img src="../progress-steps-visual-elements.svg"
        alt="Progress steps component visual elements"
        width="385"
        height="64">  
</uxdot-example>


### Text labels

Every step must have a text label indicating what a user has and will
accomplish. Each text label should be written clearly and use ideally
**one word** to avoid crowding. If two words need to be used, set
them in **Sentence case** only.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Always try to write text labels as short as possible. If there are more than
  three steps, reduce the amount of characters.</p>
</rh-alert>

<uxdot-example width-adjustment="687px" color-palette="lightest">
  <img src="../progress-steps-text-labels.svg"
        alt="Progress steps component text labels"
        width="687"
        height="64">
</uxdot-example>


## Orientation

### Horizontal

The Horizontal orientation can be stretched or squeezed to fit different
desktop or tablet layouts, it can also be used on mobile if there are fewer
steps with short text labels.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Do not write text labels with <strong>more than two words</strong> as space
  can become crowded when breakpoints get smaller or when text is translated.</p>
</rh-alert>

<uxdot-example width-adjustment="687px" color-palette="lightest">
  <img src="../progress-steps-horizontal-orientation.svg"
        alt="Progress steps component horizontal orientation"
        width="687"
        height="592">
</uxdot-example>


### Vertical

The Vertical orientation can be used on desktop or tablet if the content
within needs to be positioned on the right instead of underneath. It can also
be used on mobile if the horizontal orientation has more steps or text labels
with more words.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Do not write text labels with <strong>more than two words</strong> as space
  can become crowded when breakpoints get smaller or when text is translated.</p>
</rh-alert>

<uxdot-example width-adjustment="872px" color-palette="lightest">
  <img src="../progress-steps-vertical-orientation.svg"
        alt="Progress steps component vertical orientation"
        width="872"
        height="641">
</uxdot-example>


## Responsive design

Progress steps mostly remain the same on large and small screens. When the
horizontal orientation becomes crowded, it will switch to the vertical
orientation.

### Desktop

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border color-palette="lightest">
  <img src="../progress-steps-responsive-desktop.svg"
        alt="Progress steps component responsive design, desktop"
        width="1000"
        height="536">
</uxdot-example>


### Tablet

<uxdot-example width-adjustment="768px"  variant="full" alignment="left" no-border color-palette="lightest">
  <img src="../progress-steps-responsive-tablet.svg"
        alt="Progress steps component responsive design, tablet"
        width="768"
        height="536">
</uxdot-example>


### Mobile

<uxdot-example width-adjustment="375px" variant="full" alignment="left" no-border color-palette="lightest">
  <img src="../progress-steps-responsive-mobile.svg"
        alt="Progress steps component responsive design, mobile"
        width="360"
        height="648">
</uxdot-example>


## Spacing

<uxdot-example width-adjustment="687px" color-palette="lightest">
  <img src="../progress-steps-spacing.svg"
        alt="Progress steps component spacing"
        width="687"
        height="272">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="xl"></uxdot-spacer-tokens-table>
