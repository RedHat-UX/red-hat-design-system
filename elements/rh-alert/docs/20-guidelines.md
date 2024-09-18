
## Guidelines

In general, use an alert to communicate essential information to a user in a prominent way.

### When to use an inline alert

Use an inline alert to communicate a short message about a specific user action within a component or layout. An inline alert appears in a content area and disappears when a user closes it or navigates away from the page. For example, use an inline alert to inform a user their form was submitted with errors.

### When to use a toast alert

Use a toast alert to communicate a time-based update, confirmation, or other short message to a user without blocking their workflow. A toast alert overlays content in the top right corner of a page and disappears when a user closes it or when it times out. For example, use a toast alert to inform a user their information was submitted successfully.

### Communicating severity

The five severity levels for alerts are Default, Info, Success, Warning, and Danger. Each level communicates a specific urgency.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Visit the <a href="/foundations/color">Color</a> page to learn more about using severity colors.</p>
</rh-alert>

<uxdot-example width-adjustment="928px">
  <img src="../alert-guidelines-severity.svg" alt="Examples of the different colors indicating alert severity" width="728px">
</uxdot-example>

### Dismissal

Depending on the message, an inline alert can be dismissible or not dismissible. The close button should not be included if it is critical that a user read or interact with the alert. A toast alert is always dismissible.

<uxdot-example width-adjustment="880px">
  <img src="../alert-guidelines-dismissible-inline.svg" alt="Alert element dismissal inline examples" width="538px">
</uxdot-example>

<uxdot-example width-adjustment="456px">
  <img src="../alert-guidelines-dismissible-toast.svg" alt="Alert element dismissal toast examples" width="538px">
</uxdot-example>

## Writing content

Both alert variants have limited space therefore content should be short and concise. A user should be able to quickly scan the content and know what steps to take next.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
        <th scope="col" data-label="How to write">How to write</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Title text</td>
        <td data-label="Character count">60</td>
        <td data-label="How to write">
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
        <td data-label="Element">Body text</td>
        <td data-label="Character count">150</td>
        <td data-label="How to write">
          <ul>
            <li>Write 1 - 2 concise sentences and include links if necessary</li>
            <li>Be concise and explain how to resolve an issue</li>
            <li>Optional if title text accurately communicates the message</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="Element">Action text</td>
        <td data-label="Character count">20 per button</td>
        <td data-label="How to write">
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

Actions enable a user to perform a specific action in relation to the alert message. Both alert variants may include actions, but no more than two. Actions require using specific elements, however including actions is optional.

- Primary action - use the Secondary button element
- Secondary action - use the Link button element

<uxdot-example width-adjustment="928px">
  <img src="../alert-guidelines-actions.svg" alt="Example of button action text">
</uxdot-example>

## Layout

### Inline

An inline alert appears at the top of a content area or close to an item needing attention. The width varies based on content and layout. They can expand to fill a container or related content area.

<uxdot-example variant="full" no-border>
  <img src="../alert-guidelines-layout-inline-1.svg" alt="Example of an inline alert at the top of a layout">
</uxdot-example>

<uxdot-example variant="full" no-border>
  <img src="../alert-guidelines-layout-inline-2.svg" alt="Example of an inline alert inside a form">
</uxdot-example>

### Toast

A toast alert slides in from the top right corner of a page and then disappears when a user closes it or when it times out. A toast alert can be set as persistent or temporary depending on the message.

- Persistent - does not disappear unless dismissed by a user
- Temporary - disappears after eight seconds unless dismissed by a user first

<uxdot-example variant="full" no-border>
  <img src="../alert-guidelines-layout-toast.svg" alt="Toast alert with a link in the body text includes a close button">
</uxdot-example>


## Behavior

### Stacking

When multiple toast alerts appear one after the other, they stack. The most recent alert appears at the top and pushes the rest down. When an alert disappears, the rest will fill the empty space.

<uxdot-example variant="full" no-border>
  <img src="../alert-guidelines-behavior-1.svg" alt="Three toast alerts are stacked in the top left corner of a layout">
</uxdot-example>

<uxdot-example variant="full" no-border>
  <img src="../alert-guidelines-behavior-2.svg" alt="Only one toast alert in the stack from the previous image is left">
</uxdot-example>

## Responsive design

### Large screens

On large screens, inline alert height is determined by the amount of content included. Inline alert width is determined by the width of its container or related content area. Toast alert height is also determined by content, but its max width is 480px.

<uxdot-example variant="full" no-border>
  <img src="../alert-guidelines-responsive-large-screens-1.svg" alt="Example of inline alert spanning content column width">
</uxdot-example>


<uxdot-example variant="full" no-border>
  <img  src="../alert-guidelines-responsive-large-screens-2.svg" alt="Example of a toast alert at content width">
</uxdot-example>

### Small screens

On small screens, both alert variants will span one column and toast alerts will continue to stack.

<uxdot-example>
  <img src="../alert-guidelines-responsive-small-screens.svg" alt="Example of toast and inline alerts span full column of small screen layout">
</uxdot-example>

## Best practices

### Mixing use cases

<uxdot-best-practice variant="do">
  <img slot="image" src="../alert-guidelines-best-practice-do.svg" alt="Example of using correct variants">
  <p>Use the correct alert variants for the correct use cases.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <img slot="image" src="../alert-guidelines-best-practice-dont.svg" alt="Example of using incorrect variants">
  <p>Do not use an inline alert for toast alert use cases and vice versa.</p>
</uxdot-best-practice>

