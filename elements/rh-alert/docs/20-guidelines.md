## General guidelines

In general, use an alert to communicate essential information to a user in a prominent way.

### When to use an inline alert

Use an inline alert to communicate a short message about a specific user action within a component or layout. An inline alert appears in a content area and disappears when a user closes it or navigates away from the page. For example, use an inline alert to inform a user their form was submitted with errors.

### Toast alerts

For time-based updates and non-blocking confirmations, use a toast via the
`RhAlert.toast()` API. When to use toasts, accessibility considerations,
layout, stacking, responsive behavior, and the full API are documented on the
[Alert pattern](/patterns/alert/) page.

## Status levels

The status levels for alerts are Neutral, Info, Success, Warning, Caution, and Error. Each level communicates a specific message or severity.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Go to the <a href="/foundations/color">Color</a> page to learn more about using status levels.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="928px">
  <img alt="Examples of the different colors indicating alert status"
       src="../alert-guidelines-severity.svg"
       width="928"
       height="704">
</uxdot-example>

### Dismissal

Depending on the message, an inline alert can be dismissible or not dismissible. The close button should not be included if it is critical that a user read or interact with the alert. Toast alerts are always dismissible; see the [Alert pattern](/patterns/alert/).

<uxdot-example color-palette="lightest" width-adjustment="880px">
  <img alt="Alert element dismissal inline examples"
       src="../alert-guidelines-dismissible-inline.svg"
       width="880"
       height="381">
</uxdot-example>

## Writing content

Inline and toast alerts have limited space (see the [Alert pattern](/patterns/alert/) for toast-specific guidance). Therefore content should be short and concise. A user should be able to quickly scan the content and know what steps to take next.

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
            <li>Try to communicate the primary message using only title text</li>
            <li>Must communicate severity</li>
            <li>Write fewer words if there is body text</li>
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

Actions enable a user to perform a specific action in relation to the alert message. Inline and toast alerts may include actions, but no more than two. Actions require using specific elements, however including actions is optional.

- Primary action - use the [Secondary button](/elements/button/guidelines/#variants) element
- Secondary action - use the [Link button](/elements/button/guidelines/#variants) element

<uxdot-example color-palette="lightest"  width-adjustment="928px">
  <img alt="Example of button action text"
       src="../alert-guidelines-actions.svg"
       width="928"
       height="336">
</uxdot-example>

## Layout

### Inline

An inline alert appears at the top of a content area or close to an item needing attention. The width varies based on content and layout. They can expand to fill a container or related content area.

<uxdot-example color-palette="lightest"  alignment="left" variant="full" no-border>
  <img alt="Example of an inline alert at the top of a layout"
       src="../alert-guidelines-layout-inline-1.svg"
       width="1140"
       height="469">
</uxdot-example>

<uxdot-example color-palette="lightest"  alignment="left" variant="full" no-border>
  <img src="../alert-guidelines-layout-inline-2.svg" 
      alt="Example of an inline alert inside a form" 
      width="1140"
      height="969">
</uxdot-example>

Toast layout, persistence, stacking, and responsive behavior are documented on
the [Alert pattern](/patterns/alert/) page.

## Responsive design

### Large screens

On large screens, inline alert height is determined by the amount of content included. Inline alert width is determined by the width of its container or related content area.

<uxdot-example color-palette="lightest"  alignment="left" variant="full" no-border>
  <img alt="Example of inline alert spanning content column width"
       src="../alert-guidelines-responsive-large-screens-1.svg"
       width="1440"
       height="802">
</uxdot-example>

### Small screens

On small screens, inline alerts span one column. Toast sizing and stacking on
small screens are described on the [Alert pattern](/patterns/alert/) page.

## Best practices

### Mixing use cases

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image" alignment="left" variant="full" no-border>
    <img alt="Example of using correct variants"
         src="../alert-guidelines-best-practice-do.svg"
         width="1440"
         height="257">
  </uxdot-example>

  <p>Use the correct alert variants for the correct use cases.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest"  slot="image" alignment="left" variant="full" no-border>
    <img alt="Example of using incorrect variants"
         src="../alert-guidelines-best-practice-dont.svg"
         width="1440"
         height="257">
  </uxdot-example>

  <p>Do not use an inline alert for toast alert use cases and vice versa. See the <a href="/patterns/alert/">Alert pattern</a> for toast guidance.</p>
</uxdot-best-practice>
