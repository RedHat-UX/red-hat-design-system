## Usage

Progress steps are best used when displaying content that must be completed in 
a particular order.

### Mobile

If a task has fewer steps and short text labels, the horizontal orientation 
can be used on mobile. Otherwise, if a task has more steps and longer text 
labels, the vertical orientation should be used instead.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Do not use <strong>more than four steps</strong> because the layout will 
  become crowded and a user might feel overwhelmed by the number of steps.</p>
</rh-alert>

<uxdot-example width-adjustment="360px" color-palette="lightest">
  <img src="../progress-steps-mobile-usage.svg"
        alt="Progress steps component mobile usage"
        width="360"
        height="704">
</uxdot-example>


### Progression

Steps are organized from left to right or top to bottom to demonstrate a user 
completing a task by moving through a linear multi-step process. A user should 
be able to return to any previously completed step in order to review data 
before finishing and submitting.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>If a user needs to return to a previously completed step, they should be 
  able to unless the task is complete.</p>
</rh-alert>

<uxdot-example width-adjustment="687px" color-palette="lightest">
  <img src="../progress-steps-progression-1.svg"
        alt="Progress steps component progression, part 1"
        width="691"
        height="349">
</uxdot-example>

<uxdot-example width-adjustment="687px" color-palette="lightest">
  <img src="../progress-steps-progression-2.svg"
        alt="Progress steps component progression, part 2"
        width="687"
        height="345">
</uxdot-example>


### Error validation

Error validation is a state that displays if there is an error that needs to 
be resolved first before a user can proceed. If a user tries to continue to 
the next step without inputting the required data, a [Danger severity 
alert](https://ux.redhat.com/elements/alert/){target="_blank"} is displayed to 
inform them of what they should do.

<uxdot-example width-adjustment="687px" color-palette="lightest">
  <img src="../progress-steps-validation.svg"
        alt="Progress steps component validation"
        width="687"
        height="393">
</uxdot-example>


### Completion

At any time before a task is completed, a user **is able** to 
return to any previous steps. When all data in the final step is submitted, a 
user **is not able** to go back to review or change anything.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>When a user reaches the Finished state, they <strong>cannot go back to any 
  previous steps</strong> without starting the task all over again.</p>
</rh-alert>

<uxdot-example width-adjustment="702px" color-palette="lightest">
  <img src="../progress-steps-completion.svg"
        alt="Progress steps component completion"
        width="702"
        height="186">
</uxdot-example>


### Character and word counts

Each step indicator text label should be written clearly and use ideally one word to avoid crowding. The recommended maximum character and word counts count for the elements of progress steps are listed below and include spaces.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
        <th scope="col" data-label="Word count">Word count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Label</td>
        <td data-label="Character count">20</td>
        <td data-label="Word count">2</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Behavior

When a user navigates through steps, each step should present content relevant 
to the step text label. For example, if the current step text label states 
**Choose trial**, a user should be presented with the opportunity 
to choose a trial. Displaying relevant content and being clear about where a 
user is in the process will make them feel in control and encourage them to 
finish the task.

<uxdot-example width-adjustment="728px" color-palette="lightest">
  <img src="../progress-steps-behavior.svg"
        alt="Progress steps component behavior"
        width="728"
        height="421">
</uxdot-example>


## Interaction states

The interaction states within both orientations are the same.

### Link

<uxdot-example width-adjustment="738px" color-palette="lightest">
  <img src="../progress-steps-interaction-states-link.svg"
        alt="Progress steps component interaction state, link"
        width="738"
        height="200">
</uxdot-example>


### Hover

<uxdot-example width-adjustment="738px" color-palette="lightest">
  <img src="../progress-steps-interaction-states-hover.svg"
        alt="Progress steps component interaction state, hover"
        width="738"
        height="213">
</uxdot-example>


### Focus

<uxdot-example width-adjustment="738px" color-palette="lightest">
  <img src="../progress-steps-interaction-states-focus.svg"
        alt="Progress steps component interaction state, focus"
        width="738"
        height="232">
</uxdot-example>


### Active

<uxdot-example width-adjustment="738px" color-palette="lightest">
  <img src="../progress-steps-interaction-states-active.svg"
        alt="Progress steps component interaction state, active"
        width="738"
        height="232">
</uxdot-example>


### Tab order

When the Tab key is pressed repeatedly, the focus highlights each step icon 
and text label in order, from left to right in the horizontal component or 
from top to bottom in the vertical component.

<uxdot-example width-adjustment="738px" color-palette="lightest">
  <img src="../progress-steps-tab-order.svg"
        alt="Progress steps component tab order"
        width="738"
        height="381">
</uxdot-example>


## Accessibility

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Key">Key</th>
        <th scope="col" data-label="Action">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Key"><kbd>Tab</kbd></td>
        <td data-label="Action">Moves the focus to the next step.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift + Tab</kbd></td>
        <td data-label="Action">Moves the focus to the previous step.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Action">Selects the step with focus.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Left arrow</kbd></td>
        <td data-label="Action">Moves the focus and selects the previous step.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Right arrow</kbd></td>
        <td data-label="Action">Moves the focus and selects the next step.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Home</kbd></td>
        <td data-label="Action">Moves the focus and selects the first step.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>End</kbd></td>
        <td data-label="Action">Moves the focus and selects the current or final step.</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Best practices

### Too many or too few steps

Do not use too many or too few steps, there should be between three and five 
steps visible.

<uxdot-example width-adjustment="698px" danger color-palette="lightest">
  <img src="../progress-steps-best-practice-1.svg"
        alt="Progress steps component best practice 1"
        width="698"
        height="192">
</uxdot-example>


### Usage on mobile

Avoid using the horizontal orientation on mobile if there are too many steps 
present or if text labels are too long, switch to the vertical orientation 
instead.

<uxdot-example width-adjustment="360px" danger color-palette="lightest">
  <img src="../progress-steps-best-practice-2.svg"
        alt="Progress steps component best practice 2"
        width="360"
        height="192">
</uxdot-example>


### Validation

Do not use the Error step icon for any **previous steps**, a user cannot 
proceed to the next step without resolving any errors first nor can they go 
back to resolve any errors and then continue.

<uxdot-example width-adjustment="687px" danger color-palette="lightest">
  <img src="../progress-steps-best-practice-3.svg"
        alt="Progress steps component best practice 3"
        width="687"
        height="64">
</uxdot-example>


### Text labels

Do not use Progress steps without text labels, color or icons alone cannot be 
used to represent step position or validation if a user is colorblind or uses 
assistive technologies like a screen reader.

<uxdot-example width-adjustment="687px" danger color-palette="lightest">
  <img src="../progress-steps-best-practice-4.svg"
        alt="Progress steps component best practice 4"
        width="687"
        height="32">
</uxdot-example>


### Carousel

Do not use Progress steps as an image carousel without including text labels 
and other types of content.

<uxdot-example width-adjustment="687px" danger color-palette="lightest">
  <img src="../progress-steps-best-practice-5.svg"
        alt="Progress steps component best practice 5"
        width="687"
        height="384">
</uxdot-example>


### Tabs

Do not use Progress steps as Tabs. Progress steps are used for guiding a user 
through a task by displaying sequential steps and instructional content.

<uxdot-example width-adjustment="687px" danger color-palette="lightest">
  <img src="../progress-steps-best-practice-6.svg"
        alt="Progress steps component best practice 6"
        width="687"
        height="88">
</uxdot-example>
