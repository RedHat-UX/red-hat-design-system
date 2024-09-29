## Guidelines

In general, use an alert to communicate essential information to a user in a 
prominent way.

### When to use an inline alert

Use an inline alert to communicate a short message about a specific user action 
within a component or layout. An inline alert appears in a content area and 
disappears when a user closes it or navigates away from the page. For example, 
use an inline alert to inform a user their form was submitted with errors.

### When to use a toast alert

Use a toast alert to communicate a time-based update, confirmation, or other 
short message to a user without blocking their workflow. A toast alert overlays 
content in the top right corner of a page and disappears when a user closes it 
or when it times out. For example, use a toast alert to inform a user their 
information was submitted successfully.

### Communicating severity

The five severity levels for alerts are Default, Info, Success, Warning, and 
Danger. Each level communicates a specific urgency.

<rh-alert state="info">
  <h3 slot="header">Learn More</h3>
  <p>Visit the <a href="/foundations/color">Color</a>
     foundation page to learn more about how to use colors 
     for status and severity.</p>
</rh-alert>

<uxdot-example width-adjustment="928px">
  <img alt="Examples of the different colors indicating alert severity"
       src="../alert-guidelines-severity.svg"
       width="728px">
</uxdot-example>

### Dismissal

Depending on the message, an inline alert can be dismissible or not dismissible. 
The close button should not be included if it is critical that a user read or 
interact with the alert. A toast alert is always dismissible.

<uxdot-example width-adjustment="880px">
  <img alt="Alert element dismissal inline examples"
       src="../alert-guidelines-dismissible-inline.svg"
       width="538px">
</uxdot-example>

<rh-alert state="warning">
  <h3 slot="header">Warning</h3>
  <p>If an issue cannot be resolved on the current page or if a user needs to 
     correct a situation outside of the experience, use a
     <a href="/elements/dialog">Dialog</a> instead.</p>
</rh-alert>

<uxdot-example width-adjustment="456px">
  <img alt="Alert element dismissal toast examples"
       src="../alert-guidelines-dismissible-toast.svg"
       width="538px">
</uxdot-example>

## Writing content

Both alert variants have limited space therefore content should be short and 
concise. A user should be able to quickly scan the content and know what steps 
to take next.

<rh-table>

  <table>
    <thead>
      <tr>
        <th scope="col">Element</th>
        <th scope="col">Character count</th>
        <th scope="col">How to write</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Title text</td>
        <td>60</td>
        <td>
          <ul>
            <li>Short and descriptive</li>
            <li>Try and communicate the primary message using only title text</li>
            <li>Must communicate severity</li>
            <li>Write less words if there is body text</li>
            <li>Write more words if there is no body text</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Body text</td>
        <td>150</td>
        <td>
          <ul>
            <li>Write 1 - 2 concise sentences and include links if necessary</li>
            <li>Be concise and explain how to resolve an issue</li>
            <li>Optional if title text accurately communicates the message</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Action text</td>
        <td>20 per button</td>
        <td>
          <ul>
            <li>Write 1 - 3 short words</li>
            <li>Clearly write an action that a user can take</li>
            <li>No long words or phrases</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>

</rh-table>

## Actions

Actions enable a user to perform a specific action in relation to the alert 
message. Both alert variants may include actions, but no more than two. Actions 
require using specific elements, however including actions is optional.

- Primary action - use the Secondary button element
- Secondary action - use the Link button element

<uxdot-example width-adjustment="928px">
  <img alt="Example of button action text"
       src="../alert-guidelines-actions.svg">
</uxdot-example>

## Layout

### Inline

An inline alert appears at the top of a content area or close to an item needing 
attention. The width varies based on content and layout. They can expand to fill 
a container or related content area.

<uxdot-example variant="full" no-border>
  <img alt="Example of an inline alert at the top of a layout"
       src="../alert-guidelines-layout-inline-1.svg">
</uxdot-example>

<uxdot-example variant="full" no-border>
  <img alt="Example of an inline alert inside a form"
       src="../alert-guidelines-layout-inline-2.svg">
</uxdot-example>

### Toast

A toast alert slides in from the top right corner of a page and then disappears 
when a user closes it or when it times out. A toast alert can be set as 
persistent or temporary depending on the message.

- Persistent - does not disappear unless dismissed by a user
- Temporary - disappears after eight seconds unless dismissed by a user first

If a Toast alert is set to persistent, a close button needs to be included so a 
user can dismiss the alert if desired.

<uxdot-example variant="full">
  <img alt="Toast alert with a link in the body text includes a close button"
       src="../alert-positioning-toast-persistent.svg">
</uxdot-example>

If a Toast alert is set to be temporary or time out, the alert will disappear 
after **eight seconds**. A user might want to dismiss the alert before then, in 
which case a close button needs be included.

<uxdot-example>
  <img alt="Toast alert without actions or links includes a close button"
       src="../alert-positioning-toast-temporary.svg">
</uxdot-example>

## Behavior

### Stacking

When multiple toast alerts appear one after the other, they stack. The most 
recent alert appears at the top and pushes the rest down. When an alert 
disappears, the rest will fill the empty space.

<uxdot-example variant="full" no-border>
  <img alt="Three toast alerts are stacked in the top left corner of a layout"
       src="../alert-guidelines-behavior-1.svg">
</uxdot-example>

<uxdot-example variant="full" no-border>
  <img alt="Only one toast alert in the stack from the previous image is left"
       src="../alert-guidelines-behavior-2.svg">
</uxdot-example>

## Responsive design

### Large screens

On large screens, inline alert height is determined by the amount of content 
included. Inline alert width is determined by the width of its container or 
related content area. Toast alert height is also determined by content, but its 
max width is 480px.

<uxdot-example variant="full" no-border>
  <img alt="Example of inline alert spanning content column width"
       src="../alert-guidelines-responsive-large-screens-1.svg">
</uxdot-example>


<uxdot-example variant="full" no-border>
  <img alt="Example of a toast alert at content width"
       src="../alert-guidelines-responsive-large-screens-2.svg">
</uxdot-example>

### Small screens

On small screens, both alert variants will span one column and toast alerts will 
continue to stack.

<uxdot-example>
  <img alt="Example of toast and inline alerts span full column of small screen layout"
       src="../alert-guidelines-responsive-small-screens.svg">
</uxdot-example>

## Best practices

### Mixing use cases

<uxdot-best-practice variant="do">
  <img slot="image"
       alt="Example of using correct variants"
       src="../alert-guidelines-best-practice-do.svg">
  <p>Use the correct alert variants for the correct use cases.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <img slot="image"
       alt="Example of using incorrect variants"
       src="../alert-guidelines-best-practice-dont.svg">
  <p>Do not use an inline alert for toast alert use cases and vice versa.</p>
</uxdot-best-practice>

### Toast as Inline

Do not use a Toast alert to present simple information or inline messages.

<uxdot-example danger>
  <img alt="Toast alert incorrectly placed inline with a layout"
       src="../alert-bestpractice-2.svg">
</uxdot-example>

### Different variants

Do not use both variants when stacking.

<uxdot-example danger>
  <img alt="Toast and inline alerts incorrectly stacked in top left corner of page"
       src="../alert-bestpractice-3.svg">
</uxdot-example>
