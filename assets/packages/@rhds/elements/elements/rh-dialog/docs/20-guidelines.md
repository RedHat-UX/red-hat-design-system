## Usage

Use a dialog to communicate critical information that requires input or action. 
A dialog can be used to validate user decisions, confirm non-destructive or 
destructive actions, report errors, share task results and statuses, and prompt 
required user input. A dialog is also interruptive by design. When active, users 
are blocked from viewing page content and cannot return to their workflow until 
the dialog task is complete or the dialog is dismissed. A dialog can be 
effective when used correctly, but it should be used sparingly to limit 
disruption.


### When to use a dialog

A dialog is commonly used for short tasks. If users need to perform a task 
several times on the same page, consider moving it to the main page instead. Do 
not use a dialog unless the information or task within is vital to user success 
and worth disrupting their workflow.


## Sizes

There are two dialog container sizes. Choose a size that works best for the 
amount of available content.


### Fixed-width

The fixed-width dialog container works well for environments with a fixed grid, 
like marketing pages.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-width-fixed.png"
        alt="A dialog container spanning a 12-column grid that is fixed in the center of the page"
        width="1000"
        height="640">
</uxdot-example>


### Full-width

The full-width dialog container works well for environments with a more fluid 
grid like apps or dashboards.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-width-full.png"
        alt="A dialog container spanning a 6-column fluid grid that takes up the whole screen"
        width="1000"
        height="640">
</uxdot-example>


## Variants

There are three available dialog variants depending on the intended function.

### Confirmation

Use a confirmation dialog to validate user decisions and communicate their 
consequences. Confirmation dialogs can confirm non-destructive and destructive 
actions. When confirming a non-destructive action, do the following:

- Use a [primary button](https://ux.redhat.com/elements/button/) to confirm a 
  non-destructive action
- Be specific about what will happen when an action is confirmed

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-confirmation-non-destructive.png"
        alt="Non-destructive confirmation dialog example with a blue primary button"
        width="1000"
        height="322">
</uxdot-example>


When confirming a destructive action, do the following.

- Use a primary button again or if the action carries serious consequences, use 
  a [danger button](https://ux.redhat.com/elements/button/) instead

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-confirmation-destructive.png"
        alt="Destructive confirmation dialog example with a red primary button"
        width="1000"
        height="322">
</uxdot-example>


### Error

Use an error dialog to inform users of problems that interrupt normal or 
expected behavior. Briefly contextualize the problem, explain why it happened, 
and then provide actionable steps toward a solution.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-error.png"
        alt="Error dialog example with a blue primary button"
        width="1000"
        height="349">
</uxdot-example>

### Passive

Use a passive dialog to communicate critical and immediately relevant 
information like the status of an application or the result of an action. When 
using a passive dialog, consider the following:

- Passive dialog content should require or lead to user action
- A passive dialog can also notify users about the status or duration of a 
  critical process
- Never use a passive dialog for non-critical information, use an [inline 
  alert](https://ux.redhat.com/elements/alert/) or [toast 
  alert](https://ux.redhat.com/elements/alert/) instead

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-passive.png"
        alt="Passive dialog example with a blue primary button"
        width="1000"
        height="322">
</uxdot-example>


### Video player dialog

A video can replace a fixed-width dialog container, it should have the same 
width and include a close button.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-video-player.png"
        alt="A dialog video player spanning a 12-column grid with a white close button"
        width="1000"
        height="640">
</uxdot-example>


## Writing content

Dialog content should be descriptive and specific so users can scan, understand 
the context of an action, and make a quick decision. A dialog includes three 
main content sections.

### Headline

A headline introduces the purpose of a dialog, sometimes as a question. Use 
important key words like **permanently** to describe an action and its 
consequences.

### Body text

Body text provides additional information about the consequence of an action in 
three lines or less, typically concerning changes to a workflow or access to 
information. Be mindful of adding interactive elements that would navigate users 
away from a dialog unless they are crucial yet helpful resources like 
documentation.

### Buttons

Buttons allow users to answer the headline prompt. Write button text labels as 
verbs to communicate their function and consequence. Button verbs can be pulled 
from the headline for better scannability.

### Character and line counts

The recommended maximum character and line counts for the elements of a dialog are listed below and include spaces.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element" style="width: 50%">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
        <th scope="col" data-label="Line count">Line count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Title text</td>
        <td data-label="Character count">40</td>
        <td data-label="Line count">1</td>
      </tr>
      <tr>
        <td data-label="Element">Body text</td>
        <td data-label="Character count">175</td>
        <td data-label="Line count">2</td>
      </tr>
      <tr>
        <td data-label="Element">Button text</td>
        <td data-label="Character count">30</td>
        <td data-label="Line count">1</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Overflow content

When dialog content is taller than the dialog container height, the body section 
should scroll vertically with the header and footer remaining fixed in place. 
The content should visibly fade at the end of the dialog body section to 
indicate there is additional content out of view. Dialog content should never 
scroll horizontally.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-overflow.png"
        alt="Dialog with a long amount of content showing visible gradient at the bottom of the body text section"
        width="1000"
        height="586">
</uxdot-example>


## Layout

### Placement

By default, a dialog container is horizontally and vertically centered on top of 
the backdrop and viewport.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-placement-center.png"
        alt="Dialog with container horizontally and vertically centered"
        width="1000"
        height="640">
</uxdot-example>

By default, a dialog container is horizontally and vertically centered on top of 
the backdrop and viewport.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-placement-top.png"
        alt="Dialog with container horizontally centered, but positioned at the top of the page"
        width="1000"
        height="640">
</uxdot-example>


## Responsive design

### Large breakpoints

Both the fixed-width and full-width dialog containers can be used on large 
breakpoints.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-breakpoint-large.png"
        alt="A dialog container on a large breakpoint"
        width="1000"
        height="640">
</uxdot-example>

### Small breakpoints

As breakpoints get smaller, the fixed-width dialog container will change to 
full-width and become taller.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-breakpoint-small.png"
        alt="Two dialog containers on small breakpoints, one tablet size and one mobile size"
        width="968"
        height="640">
</uxdot-example>


## Best practices

### Adding to read time

Do not add elements that will make users spend more time reading a dialog, move 
them to the main page instead. A dialog is disruptive, so it is important to 
bring users back to their original workflow as quickly as possible.

<uxdot-example width-adjustment="872px" danger>
  <img src="../dialog-best-practice-1.png"
        alt="A dialog container with a three-panel accordion which is incorrect usage"
        width="872"
        height="543">
</uxdot-example>


### Unclear context

Make sure to write clearly about what will happen when users confirm a specific 
action.

<uxdot-example width-adjustment="872px" danger>
  <img src="../dialog-best-practice-2.png"
        alt="A dialog container with vague text which is incorrect usage"
        width="872"
        height="357">
</uxdot-example>


### Two many buttons

Do not use more than two buttons in a dialog and do not add or change button 
variants.

<uxdot-example width-adjustment="872px" danger>
  <img src="../dialog-best-practice-3.png"
        alt="A dialog container with three buttons which is incorrect usage"
        width="872"
        height="322">
</uxdot-example>
