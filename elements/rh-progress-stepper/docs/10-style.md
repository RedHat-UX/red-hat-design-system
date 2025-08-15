## Style

A progress stepper is a group of at least 3 sequential steps placed in the 
middle of a horizontal or vertical line.

<figure>
  <uxdot-example color-palette="lightest">
    <img src="../progress-stepper-style-anatomy.svg"
          alt="A progress stepper with annotations around the items listed below."
          width="663"
          height="80">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Status icon</li>
      <li>Title</li>
      <li>Optional description</li>
    </ol>
  </figcaption>
</figure>

### Status icons

A progress stepper uses icons to indicate the status of a process or task. These 
icons change as users move through each step.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-style-status-icons.svg"
        alt="Three compact progress steppers showing current step, warning, and error states."
        width="560"
        height="64">  
</uxdot-example>

### Custom icons

A progress stepper can also include custom icons. When a custom icon is used for a completed or a current step, the color will change, like a default status icon, but the custom icon will remain visible. If the step fails or has a warning, the custom icon will be replaced by the warning or error status icon.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-style-custom-icons.svg"
        alt="Horizontal progress stepper showing two green completed steps with default icons, a current step with a purple custom gear icon, and a not yet completed step without an icon."
        width="643"
        height="80">  
</uxdot-example>

## Color Scheme

A progress stepper is available in both light and dark color schemes.

### Light scheme

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-style-scheme-light.svg"
        alt="Light scheme progress stepper showing two completed steps, a current step, and a not yet completed last step."
        width="643"
        height="78">  
</uxdot-example>

### Dark scheme

<uxdot-example color-palette="darkest">
  <img src="../progress-stepper-style-scheme-dark.svg"
        alt="Dark scheme progress stepper showing two completed steps, a current step, and a not yet completed last step."
        width="643"
        height="78">  
</uxdot-example>

## Variants

### Orientation

A progress stepper is available in both horizontal and vertical orientations.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-style-orientation.svg"
        alt="Two progress steppers. One horizontal, one vertical. Each contain four steps."
        width="643"
        height="422">  
</uxdot-example>

### Size

A progress stepper is available in both default and compact sizes.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-style-size.svg"
        alt="Three progress steppers. One horizontal with descriptions. Two other compact progress steppers, one horizontal one vertical."
        width="643"
        height="326">  
</uxdot-example>

### Descriptions

If more description is needed, a progress stepper with descriptions can be used which allows for more context for each step.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-style-descriptions.svg"
        alt="Two horizontal progress steppers. One with and one without a description below each step's label."
        width="643"
        height="198">  
</uxdot-example>

### Space

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-style-space.svg"
        alt="Four progress steppers showing 32px space between each step's text. There's 16px space between the icon and the label for all variants except the default horizontal stepper. For the default, there's 8px of margin bottom between the icon and the label."
        width="643"
        height="422">  
</uxdot-example>

## Interaction states

When the titles in a progress stepper are linked, the interaction states use our <a href="/foundations/interactions/links/#inline-links">inline link</a> styling. Only the completed or current steps will be linked.

### Hover

Though it’s difficult to see in a static image, the dashed underline’s offset value increases by 1 pixel on hover.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-style-interaction-state-hover.svg"
        alt="A progress stepper with dashed underlines below two completed steps and one current step to indicate that they're linked. A cursor hovers over the first completed step."
        width="562"
        height="66">
</uxdot-example>

### Focus and active

The focus and active states of linked progress steps look similar to the hover state, but a focus ring is added around the link.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-style-interaction-state-focus-active.svg"
        alt="A progress stepper with dashed underlines below two completed steps and one current step to indicate that they're linked. A focus ring appears around the linked current step."
        width="562"
        height="66">
</uxdot-example>