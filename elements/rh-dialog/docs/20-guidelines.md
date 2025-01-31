## Usage

Use a dialog to communicate critical information that requires input or action. A dialog can be used to validate user decisions, confirm non-destructive or destructive actions, report errors, share task results and statuses, and prompt required user input. 

A dialog is also interruptive by design. When active, users are blocked from viewing page content and cannot return to their workflow until the dialog task is complete or the dialog is dismissed. A dialog can be effective when used correctly, but it should be used sparingly to limit disruption.


### When to use a dialog

A dialog is commonly used for short tasks. If users need to perform a task several times on the same page, consider moving it to the main page instead. Do not use a dialog unless the information or task within is vital to user success and worth disrupting their workflow.

## Patterns

### Video player dialog

A video dialog should have the same aspect ratio as the video and include a close button.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-patterns-video-player.svg"
        alt="Dialog with an embedded video player spanning the entire container"
        width="1000"
        height="600">
</uxdot-example>

## Writing content

Dialog content should be descriptive and specific so users can scan, understand 
the context of an action, and make a quick decision. A dialog includes three 
main content sections.

### Headline

A headline introduces the purpose of a dialog, sometimes as a question. Use important key words, like ”permanently,” to describe an action and its consequences.

### Body text

Body text provides additional information about the consequence of an action in 
three lines or less, typically concerning changes to a workflow or access to 
information. Be mindful of adding interactive elements that would navigate users 
away from a dialog, unless they are crucial yet helpful resources like 
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

When dialog content is taller than the dialog container height, the default behavior keeps the header fixed while  the body and footer sections scroll vertically. To make both the header and footer fixed, refer to the <a href="../dialog/code/">“Code” subpage</a>. 

The content will visibly fade at the end of the scrolling section to indicate there is additional content out of view. Dialog content should never scroll horizontally.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-overflow.svg"
        alt="Dialog with a long amount of content showing that the body and footer sections have the potential to scroll"
        width="1000"
        height="565">
</uxdot-example>


## Layout

### Placement

By default, a dialog container is horizontally and vertically centered on top of the backdrop and viewport. There is also an option to position the dialog container at the top of the viewport.

### Fixed-width

The fixed-width dialog container works well for environments with a fixed grid, like marketing pages. There are three dialog container sizes: small, medium, and large. While large is the default, users should choose a size that works best for the amount of available content.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Size" style="width: 50%">Size</th>
        <th scope="col" data-label="Dialog width">Dialog width</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Size">Small</td>
        <td data-label="Dialog width">35 rem</td>
      </tr>
      <tr>
        <td data-label="Size">Medium</td>
        <td data-label="Dialog width">52.5 rem</td>
      </tr>
      <tr>
        <td data-label="Size">Large</td>
        <td data-label="Dialog width">70 rem</td>
      </tr>
    </tbody>
  </table>
</rh-table>

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-width-fixed.svg"
        alt="A dialog container spanning a 12-column grid that is fixed in the center of the page"
        width="1000"
        height="528">
</uxdot-example>

### Full-width

The full-width dialog container works well for environments with a fluid grid. It may also be helpful if a dialog contains a chart, a complex image, or other any content that should appear at a larger size.

This option is currently available only if the dialog is positioned at the top.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-width-full.svg"
        alt="A dialog container spanning a 6-column fluid grid that takes up the whole screen"
        width="1000"
        height="528">
</uxdot-example>

## Responsive design

### Large breakpoints

Both the fixed-width and full-width dialog containers can be used on large breakpoints.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-breakpoint-large.svg"
        alt="A dialog container on a large breakpoint"
        width="1000"
        height="528">
</uxdot-example>

### Small breakpoints

As breakpoints get smaller, the fixed-width dialog container will change to full-width and become taller.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../dialog-breakpoint-small.svg"
        alt="Two dialog containers on small breakpoints, one tablet size and one mobile size"
        width="1000"
        height="528">
</uxdot-example>


## Best practices

### Reading time

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../dialog-best-practice-reading-time-do.svg"
            alt="Dialog window with a brief paragraph and two options for scheduling a daily digest email"
            width="482"
            height="516">
    </uxdot-example>
    <p>Keep content in the dialog brief. If supplementary information is needed, move it to the main page and include a link in the dialog instead.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../dialog-best-practice-reading-time-dont.svg"
            alt="Dialog window with a brief paragraph, two options for scheduling a daily digest email, and two accordions with additional content"
            width="482"
            height="516">
    </uxdot-example>
    <p>Do not add elements that will make users spend too much time reading a dialog.</p>
  </uxdot-best-practice>
</div>

### Unclear context

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../dialog-best-practice-unclear-context-do.svg"
            alt="Dialog window asking user if they want to leave the page without saving and has buttons to leave or cancel"
            width="482"
            height="236">
    </uxdot-example>
    <p>Write clearly about what will happen when users confirm an action.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../dialog-best-practice-unclear-context-dont.svg"
            alt="Dialog window asking user if they want to cancel and presents 'leave' and 'cancel' buttons"
            width="482"
            height="236">
    </uxdot-example>
    <p>Avoid writing confusing or ambiguous content when a dialog confirms a user’s action.</p>
  </uxdot-best-practice>
</div>

### Number of buttons

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../dialog-best-practice-number-of-buttons-do.svg"
            alt="Dialog window with two buttons"
            width="482"
            height="263">
    </uxdot-example>
    <p>Use up to two buttons in a dialog.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../dialog-best-practice-number-of-buttons-dont.svg"
            alt="Didalog window with three buttons"
            width="482"
            height="263">
    </uxdot-example>
    <p>Do not use more than two buttons in a dialog.</p>
  </uxdot-best-practice>
</div>