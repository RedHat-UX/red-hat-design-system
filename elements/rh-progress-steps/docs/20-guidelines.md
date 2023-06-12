
## Usage

  Progress steps are best used when displaying content that must be completed in 
  a particular order.

### Mobile

  If a task has fewer steps and short text labels, the horizontal orientation 
  can be used on mobile. Otherwise, if a task has more steps and longer text 
  labels, the vertical orientation should be used instead.

  {% alert state="warning", title="Warning" %}
    Do not use **more than four steps** because the layout will 
    become crowded and a user might feel overwhelmed by the number of steps.
  {% endalert %}

  {% example palette="lightest",
             width=360,
             alt="Progress steps component mobile usage",
             src="../progress-steps-mobile-usage.svg" %}

### Progression

  Steps are organized from left to right or top to bottom to demonstrate a user 
  completing a task by moving through a linear multi-step process. A user should 
  be able to return to any previously completed step in order to review data 
  before finishing and submitting.

  {% alert title="Helpful tip" %}
    If a user needs to return to a previously completed step, they should be 
    able to unless the task is complete.
  {% endalert %}

  {% example palette="lightest",
             width=691,
             alt="Progress steps component progression, part 1",
             src="../progress-steps-progression-1.svg" %}

  {% example palette="lightest",
             width=687,
             alt="Progress steps component progression, part 2",
             src="../progress-steps-progression-2.svg" %}

### Error validation

  Error validation is a state that displays if there is an error that needs to 
  be resolved first before a user can proceed. If a user tries to continue to 
  the next step without inputting the required data, a [Danger severity 
  alert](https://ux.redhat.com/elements/alert/){target="_blank"} is displayed to 
  inform them of what they should do.

  {% example palette="lightest",
             width=687,
             alt="Progress steps component validation",
             src="../progress-steps-validation.svg" %}

### Completion

  At any time before a task is completed, a user **is able** to 
  return to any previous steps. When all data in the final step is submitted, a 
  user **is not able** to go back to review or change anything.

  {% alert title="Helpful tip" %}
    When a user reaches the Finished state, they **cannot go back to any 
    previous steps** without starting the task all over again.
  {% endalert %}

  {% example palette="lightest",
             width=702,
             alt="Progress steps component completion",
             src="../progress-steps-completion.svg" %}


## Behavior

  When a user navigates through steps, each step should present content relevant 
  to the step text label. For example, if the current step text label states 
  **Choose trial**, a user should be presented with the opportunity 
  to choose a trial. Displaying relevant content and being clear about where a 
  user is in the process will make them feel in control and encourage them to 
  finish the task.

  {% example palette="lightest",
             width=728,
             alt="Progress steps component behavior",
             src="../progress-steps-behavior.svg" %}


## Interaction states

  The interaction states within both orientations are the same.

### Link

  {% example palette="lightest",
             width=738,
             alt="Progress steps component interaction state, link",
             src="../progress-steps-interaction-states-link.svg" %}

### Hover

  {% example palette="lightest",
             width=738,
             alt="Progress steps component interaction state, hover",
             src="../progress-steps-interaction-states-hover.svg" %}

### Focus

  {% example palette="lightest",
             width=738,
             alt="Progress steps component interaction state, focus",
             src="../progress-steps-interaction-states-focus.svg" %}

### Active

  {% example palette="lightest",
             width=738,
             alt="Progress steps component interaction state, active",
             src="../progress-steps-interaction-states-active.svg" %}

### Tab order

  When the Tab key is pressed repeatedly, the focus highlights each step icon 
  and text label in order, from left to right in the horizontal component or 
  from top to bottom in the vertical component.

  {% example palette="lightest",
             width=738,
             alt="Progress steps component tab order",
             src="../progress-steps-tab-order.svg" %}



## Accessibility

  | Key         | Action                                                 |
  |-------------|--------------------------------------------------------|
  | Tab         | Moves the focus to the next step.                      |
  | Shift + Tab | Moves the focus to the previous step.                  |
  | Enter       | Selects the step with focus.                           |
  | Left arrow  | Moves the focus and selects the previous step.         |
  | Right arrow | Moves the focus and selects the next step.             |
  | Home        | Moves the focus and selects the first step.            |
  | End         | Moves the focus and selects the current or final step. |


## Best practices

### Too many or too few steps

  Do not use too many or too few steps, there should be between three and five 
  steps visible.

  {% example palette="wrong",
             width=698,
             alt="Progress steps component best practice 1",
             src="../progress-steps-best-practice-1.svg" %}

### Usage on mobile

  Avoid using the horizontal orientation on mobile if there are too many steps 
  present or if text labels are too long, switch to the vertical orientation 
  instead.

  {% example palette="wrong",
             width=360,
             alt="Progress steps component best practice 2",
             src="../progress-steps-best-practice-2.svg" %}

### Validation

  Do not use the Error step icon for any **previous steps**, a user cannot 
  proceed to the next step without resolving any errors first nor can they go 
  back to resolve any errors and then continue.

  {% example palette="wrong",
             width=687,
             alt="Progress steps component best practice 3",
             src="../progress-steps-best-practice-3.svg" %}

### Text labels

  Do not use Progress steps without text labels, color or icons alone cannot be 
  used to represent step position or validation if a user is colorblind or uses 
  assistive technologies like a screen reader.

  {% example palette="wrong",
             width=687,
             alt="Progress steps component best practice 4",
             src="../progress-steps-best-practice-4.svg" %}

### Carousel

  Do not use Progress steps as an image carousel without including text labels 
  and other types of content.

  {% example palette="wrong",
             width=687,
             alt="Progress steps component best practice 5",
             src="../progress-steps-best-practice-5.svg" %}

### Tabs

  Do not use Progress steps as Tabs. Progress steps are used for guiding a user 
  through a task by displaying sequential steps and instructional content.

  {% example palette="wrong",
             width=687,
             alt="Progress steps component best practice 6",
             src="../progress-steps-best-practice-6.svg" %}

