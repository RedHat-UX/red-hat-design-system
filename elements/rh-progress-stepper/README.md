# Progress Stepper
A progress stepper represents a sequence of steps and their details, in a horizontal or vertical layout. Use progress steppers to show users their progress through a multi-step process or workflow.

## Installation

If using npm/bundlers:

```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-progress-stepper/rh-progress-stepper.js';
import '@rhds/elements/rh-progress-stepper/rh-progress-step.js';
```

## Usage

A progress stepper consists of multiple `<rh-progress-step>` elements placed inside a `<rh-progress-stepper>` container. Each step can have different states and may include labels, descriptions, and links.

### Basic Horizontal Stepper

```html
<rh-progress-stepper>
  <rh-progress-step state="complete">
    Complete Step
  </rh-progress-step>
  
  <rh-progress-step state="active" aria-current="step">
    Active Step
  </rh-progress-step>
  
  <rh-progress-step state="inactive">
    Inactive Step
  </rh-progress-step>
</rh-progress-stepper>
```

### Vertical Stepper

```html
<rh-progress-stepper orientation="vertical">
  <rh-progress-step 
    state="complete" 
    label="Setup Account"
    description="Create your user account and verify email">
  </rh-progress-step>
  
  <rh-progress-step 
    state="active" 
    label="Configure Settings"
    description="Set up your preferences and notifications"
    aria-current="step">
  </rh-progress-step>
  
  <rh-progress-step 
    state="inactive" 
    label="Complete Profile"
    description="Add additional profile information">
  </rh-progress-step>
</rh-progress-stepper>
```

### Steps with Links

```html
<rh-progress-stepper>
  <rh-progress-step 
    state="complete" 
    href="/step1"
    label="Completed Step"
    description="Click to review this step">
  </rh-progress-step>
  
  <rh-progress-step 
    state="active" 
    label="Current Step">
  </rh-progress-step>
</rh-progress-stepper>
```

### Different Step States

```html
<rh-progress-stepper>
  <rh-progress-step state="complete">Complete</rh-progress-step>
  <rh-progress-step state="active">Active</rh-progress-step>
  <rh-progress-step state="warn">Warning</rh-progress-step>
  <rh-progress-step state="fail">Failed</rh-progress-step>
  <rh-progress-step state="inactive">Inactive</rh-progress-step>
</rh-progress-stepper>
```

### Custom Icons

```html
<rh-progress-stepper>
  <rh-progress-step 
    state="custom" 
    custom-icon="user-check" 
    custom-icon-set="ui">
    Custom Step
  </rh-progress-step>
</rh-progress-stepper>
```

## Accessibility

- Use `aria-current="step"` on the currently active step
- The stepper automatically sets `role="list"` and steps set `role="listitem"`
- Ensure meaningful labels and descriptions for screen readers
- When using links, ensure the link purpose is clear from the label or description
