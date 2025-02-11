## Usage

Use buttons to communicate and trigger actions like submitting a form, canceling 
a process, or creating a new object.

### When to use a button

Use buttons to communicate actions users can take. Each page should have only 
one Primary button and any remaining buttons should be represented as lower 
emphasis.

### Button vs. call to action

Do not use buttons as navigational elements. Instead, use a 
[link](/patterns/link/) or [call to action](/elements/call-to-action/) when the 
desired action is to take users to a new page. Consider using a checkbox, 
switch, or control when you need to capture two togglable states.

## Variants

Each button has a specific function and the design of each variant signals that 
function to users. Therefore, it is important that each variant is implemented 
consistently so they communicate the correct actions.

<uxdot-example width-adjustment="494px">
  <img src="../button-variants.png"
        alt="Image of the seven available button variant"
        width="494"
        height="124">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Variant">Variant</th>
        <th scope="col" data-label="Use case">Use case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Variant">Danger</td>
        <td data-label="Use case">The most prominent of all the button options. Use them for actions that are potentially destructive like deleting or removing data. These are mostly found in dialogs to emphasize a destructive action.</td>
      </tr>
      <tr>
        <td data-label="Variant">Primary</td>
        <td data-label="Use case">The most prominent button, use them for the most important action on a page. Try to limit their usage to one per page.</td>
      </tr>
      <tr>
        <td data-label="Variant">Secondary</td>
        <td data-label="Use case">Buttons with less visual prominence than Primary buttons. Use them for general actions that do not require as much emphasis as Primary button actions.</td>
      </tr>
      <tr>
        <td data-label="Variant">Tertiary</td>
        <td data-label="Use case">Buttons with the least visual prominence. Use them to be less striking while still retaining a classic button format. Tertiary buttons are flexible and can be used as needed.</td>
      </tr>
      <tr>
        <td data-label="Variant">Link</td>
        <td data-label="Use case">Labeled buttons with no background or border. Use them with an icon on the left or right of text to further emphasize an action or to create greater visual hierarchy between two buttons.</td>
      </tr>
      <tr>
        <td data-label="Variant">Play</td>
        <td data-label="Use case">Use on top of images or near text to play audio or video.</td>
      </tr>
      <tr>
        <td data-label="Variant">Close</td>
        <td data-label="Use case">Use to close a window.</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Play button

Use a Play button to indicate that audio or video will play when selected.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>The Play button is both horizontally and vertically centered when placed on an image or photo.</p>
</rh-alert>

<uxdot-example width-adjustment="806px">
  <img src="../button-usage-play.png"
        alt="Image of play button examples; a video thumbnail on the left and a text layout on the right"
        width="806"
        height="212">
</uxdot-example>

### Close button

Use a Close button to indicate that a window will close when selected.
Close buttons are mostly found in [dialogs](/elements/dialog/).

<uxdot-example width-adjustment="1000px" alignment="left" variant="full" no-border>
  <img src="../button-usage-close.png"
        alt="Image of a dialog with a close button in the top right corner"
        width="1000"
        height="322">
</uxdot-example>

### Other icons

When adding icons, prefer to use the [microns](/icons/#micron-icons) as they fit
the button layout better.

### Disabled

To indicate that an action is currently unavailable or if a task needs to be 
completed first, most buttons can become disabled. However, the Play and Close 
buttons do not include a disabled state.

<uxdot-example width-adjustment="494px">
  <img src="../button-usage-disabled.png"
        alt="Image of five disabled buttons not including play and close buttons, underneath is a dropdown with a disabled button"
        width="494"
        height="169">
</uxdot-example>

## Writing content

### Button text labels

Button text labels express what action will occur when users interact with it. 
When writing button labels, be specific and clearly communicate the action by 
doing the following:
- Make sure button text is unique and easily understood for when screen readers 
announce button text to users
- Use simple verbs or verb phrases
- Aim for short labels when possible
- Try not to use articles (for example, write *Add source* instead of 
*Add a source*)
- Do not use punctuation
- Use an icon within a button to add attention or clarify the action
- Do not create icons within buttons by using typed symbols (for example, a 
plus)

### Link button text labels

When writing link button text labels, use specific and action-focused language 
that matches what users will see when they arrive at their location.

<uxdot-example width-adjustment="525px">
  <img src="../button-link-text-labels.png"
        alt="Image of link button text labels"
        width="525"
        height="107">
</uxdot-example>

### Button vs. call to action text labels

Button text labels are written to be short and communicate an action whereas 
call to action text labels are written to entice users to select a link.

<uxdot-example width-adjustment="696px">
  <img src="../button-vs-cta-text-labels.png"
        alt="Image of two buttons on the left and two calls to action on the right"
        width="696"
        height="56">
</uxdot-example>

### Character and word count

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element" style="width: 33%">Element</th>
        <th scope="col" data-label="Character count" style="width: 33%">Character count</th>
        <th scope="col" data-label="Word count">Word count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Button text labels</td>
        <td data-label="Character count">30</td>
        <td data-label="Word count">3</td>
      </tr>
      <tr>
        <td data-label="Element">Link text labels</td>
        <td data-label="Character count">45</td>
        <td data-label="Word count">10</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Layout

### Placement

Buttons in dialogs, forms, etc. should always be left aligned in the container. 
This solves for the following:
- **Modularity and flexibility** - a standard alignment creates consistency in 
how objects appear
- **Accessibility** - buttons in a form are on the same scan line as the fields 
which benefits low vision users
Users who are blind can easily navigate form submit buttons because the order is 
consistent across all contexts
- **Responsiveness** - the most important actions are encountered first when 
elements are stacked vertically

<uxdot-example width-adjustment="1000px" variant="full" no-border alignment="left">
  <img src="../button-layout-placement.png"
        alt="Image of buttons used in a dialog and a form"
        width="1000"
        height="370">
</uxdot-example>

### Hierarchy

Buttons are ordered by hierarchy from left to right. Do not use multiple Danger, 
Primary, or Close buttons in the same area.

<uxdot-example width-adjustment="797px">
  <img src="../button-layout-hierarchy.png"
        alt="Image of buttons grouped by hierarchy from left to right"
        width="797"
        height="104">
</uxdot-example>

### Grouping

Grouping buttons is a useful way of aligning buttons that have a relationship. 
Group buttons logically into sets based on hierarchy and usage.

<uxdot-example width-adjustment="740px">
  <img src="../button-layout-grouping.png"
        alt="Image of button groups and their hierarchy from left to right"
        width="740"
        height="162">
</uxdot-example>

### Space in groups

The standard spacing between each button is `--rh-space-lg`, even for Danger 
buttons. If buttons are stacked vertically, the spacing between each button should be 
`--rh-space-md`.

<uxdot-example width-adjustment="508px">
  <img src="../button-layout-spacing.png"
        alt="Image of button groups and their horizontal and vertical spacing in between each button"
        width="508"
        height="80">
</uxdot-example>

## Best practices

### Lines of text

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="97px" slot="image">
      <img src="../button-best-practices-text-lines-do.svg"
            alt="Button with 'Add item' text on one line"
            width="97"
            height="60">
    </uxdot-example>
    <p>Keep the button’s text on one line.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="64px" slot="image">
      <img src="../button-best-practices-text-lines-dont.svg"
            alt="Button with 'Add item' text breaking to two lines"
            width="64"
            height="60">
    </uxdot-example>
    <p>Do not use more than one line of text.</p>
  </uxdot-best-practice>
</div>

### Variants in button groups

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../button-best-practices-variants-in-groups-do.svg"
            alt="Button group with a primary button and a secondary button and another button group with a danger button and a link button"
            width="482"
            height="104">
    </uxdot-example>
    <p>Use one primary or primary danger button per button group.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="240px" slot="image">
      <img src="../button-best-practices-variants-in-groups-dont.svg"
            alt="Button group with two primary buttons and a second button group with two primary danger buttons"
            width="240"
            height="104">
    </uxdot-example>
    <p>Do not use multiple primary or primary danger buttons in the same button group.</p>
  </uxdot-best-practice>
</div>

### Text labels

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="84px" slot="image">
      <img src="../button-best-practices-labels-do.svg"
            alt="Secondary button with 'Edit' text and primary button with `Submit` text"
            width="84"
            height="104">
    </uxdot-example>
    <p>Label buttons clearly and succinctly.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="120px" slot="image">
      <img src="../button-best-practices-labels-dont.svg"
            alt="Secondary button with 'Click here' text and primary button with 'Submit now!' text"
            width="120"
            height="104">
    </uxdot-example>
    <p>Do not write button text labels that are expressive or ambiguous.</p>
  </uxdot-best-practice>
</div>

### Danger button

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../button-best-practices-danger-do.svg"
            alt="Danger button labeld 'Reset layout' below explanatory copy and next to a 'Cancel' link button"
            width="482"
            height="143">
    </uxdot-example>
    <p>Use a danger button for destructive actions only.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../button-best-practices-danger-dont.svg"
            alt="Danger button labeled 'Search' next to a text input field"
            width="482"
            height="143">
    </uxdot-example>
    <p>Do not use a danger button for non-destructive actions.</p>
  </uxdot-best-practice>
</div>

### Buttons vs. calls to action

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../button-best-practices-buttons-vs-ctas-do.svg"
            alt="Blue primary button below supporting copy"
            width="482"
            height="197">
    </uxdot-example>
    <p>Use buttons for actions, and retain the primary button styling to make them look different from calls to action.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../button-best-practices-buttons-vs-ctas-dont.svg"
            alt="Brand red primary button below supporting copy"
            width="482"
            height="197">
    </uxdot-example>
    <p>Do not use buttons as links or change the style of a primary button to look more like a call to action.</p>
  </uxdot-best-practice>
</div>

### Button icons

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="121x" slot="image">
      <img src="../button-best-practices-icons-do.svg"
            alt="Button with one icon to the left of the text"
            width="121"
            height="36">
    </uxdot-example>
    <p>Use only one icon in a button.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="145px" slot="image">
      <img src="../button-best-practices-icons-dont.svg"
            alt="Button with icons to the left and right of the text"
            width="145"
            height="36">
    </uxdot-example>
    <p>Do not use more than one icon in a button.</p>
  </uxdot-best-practice>
</div>