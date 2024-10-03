## Usage

Use a Switch to adjust settings or make a binary selection like on or off and true or false.


### Switch vs. other selection controls

Deciding whether to use a Switch vs. other selection controls can be confusing. The table below summarizes questions and answers about these frequently used elements.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Question">Question</th>
        <th scope="col" data-label="Radio button">Radio button</th>
        <th scope="col" data-label="Single checkbox">Single checkbox</th>
        <th scope="col" data-label="Multiple checkboxes">Multiple checkboxes</th>
        <th scope="col" data-label="Switch">Switch</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="col" data-label="Question">How many options are available?</td>
        <td scope="col" data-label="Radio button">Multiple</td>
        <td scope="col" data-label="Single checkbox">1</td>
        <td scope="col" data-label="Multiple checkboxes">Multiple</td>
        <td scope="col" data-label="Switch">1</td>
      </tr>
      <tr>
        <td scope="col" data-label="Question">How many selections can a user make?</td>
        <td scope="col" data-label="Radio button">1</td>
        <td scope="col" data-label="Single checkbox">2 (on/off)</td>
        <td scope="col" data-label="Multiple checkboxes">0 - all</td>
        <td scope="col" data-label="Switch">2 (on/off)</td>
      </tr>
      <tr>
        <td scope="col" data-label="Question">Is there a default option?</td>
        <td scope="col" data-label="Radio button">Yes</td>
        <td scope="col" data-label="Single checkbox">Yes</td>
        <td scope="col" data-label="Multiple checkboxes">No</td>
        <td scope="col" data-label="Switch">Yes</td>
      </tr>
      <tr>
        <td scope="col" data-label="Question">How would you describe the choices?</td>
        <td scope="col" data-label="Radio button">Mutually exclusive</td>
        <td scope="col" data-label="Single checkbox">Mutually exclusive</td>
        <td scope="col" data-label="Multiple checkboxes">Independent of each other</td>
        <td scope="col" data-label="Switch">Mutually exclusive</td>
      </tr>
      <tr>
        <td scope="col" data-label="Question">When does the selection take effect?</td>
        <td scope="col" data-label="Radio button">After a user selects a submit button</td>
        <td scope="col" data-label="Single checkbox">After a user selects a submit button</td>
        <td scope="col" data-label="Multiple checkboxes">After a user selects a submit button</td>
        <td scope="col" data-label="Switch">Immediately</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Variants

A Switch displays a state through different methods and locations.

- The Switch status message indicates if the Switch is on or off
- The form status message indicates what the Switch turns on or off
- The check icon is used in place of the Switch status message if space is limited
- The Switch status message is used with a check icon to add clarity if necessary

<uxdot-example width-adjustment="783px">
  <img src="../switch-variants.svg"
        alt="four variants of switch"
        width="783"
        height="24">
</uxdot-example>


## Using status messages

Adding a custom status message is *not* a requirement. By default, switches already indicate their state both graphically and to assistive tech (e.g., announcing “on” and “off” to screen readers when receiving focus or being toggled).

If you would like to add a status message, you can do so via following method:

1. Add a `<div>` with an id value within `<rh-switch>`.
2. Within the `<div>`, add two `<span>` elements—one for each state of the switch.
3. For the “on” `<span>`, add a `data-state="on"` attribute and add your desired status text within the `<span>`.
4. For the “off” `<span>`, add a `data-state="off"` attribute and add your desired status text within the `<span>`.
5. Add an `aria-describedby` attribute to `<rh-switch>` pointing to the status `<div>`’s id.

Here's an example of a status message from a <a href="../demo/rh-switch.html">Switch demo</a>:

<rh-code-block>
  <script type="text/sample-html">
    <rh-switch id="switch-a" aria-describedby="messages-a" accessible-label="Switch A" checked>
      <div id="messages-a">
        <span data-state="on">Message when on</span>
        <span data-state="off" hidden>Message when off</span>
      </div>
    </rh-switch>
  </script>
</rh-code-block>


### Implementation notes:
- If you are not adding a custom status message `<div>`, do not include an `aria-describedby` attribute, as it will have no `id` to which it can point.
- You can also add static messages by placing text directly in the status `<div>`, rather than within the dynamic “on” and “off” `<span>` elements.
- You may need to style the status `<div>` to place it where you want in relation to the switch.


### Status messages vs. form labels

Unlike a status message, a form label is required whenever Switch is used. A form label describes a Switch's purpose. There is no slot for a form label within the web component and has to be added separately.

<rh-cta>
  <a href="../accessibility/#using-form-labels">Learn how to use form labels with Switch</a>
</rh-cta>


## Writing content

In general, users scan and do not read everything, so use keywords and avoid long phrases and questions.


### Clarity of language

The status message and form label should be short and direct, not neutral or ambiguous.


<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" alignment="left" width-adjustment="241px">
      <img src="../switch-language-clarity-do.svg"
        alt="Magenta button, brand red default call to action, green tooltip, and dark orange switch"
        width="241"
        height="24">
    </uxdot-example>
    <p>Ensure the message is clear when a Switch is toggled to the On or Off position and that the form label explains the switch's purpose.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" alignment="left"  width-adjustment="254px">
      <img src="../switch-language-clarity-do-not.svg"
        alt="Magenta button, brand red default call to action, green tooltip, and dark orange switch"
        width="254"
        height="24">
    </uxdot-example>
    <p>Do not use a status message that does not make the switch state clear, especially if the form label is hidden.</p>
  </uxdot-best-practice>
</div>


### Character count

The recommended maximum character count is listed below and includes spaces.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="col" data-label="Element">Switch status message</td>
        <td scope="col" data-label="Character count">20</td>
      </tr>
      <tr>
        <td scope="col" data-label="Element">Form label</td>
        <td scope="col" data-label="Character count">30</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Layout

### Stacking

Use a stack of Switches for situations where multiple independent options need to be turned on or off.

<uxdot-example width-adjustment="193px">
  <img src="../switch-layout-stacking.svg"
        alt="four switches, half of which are on, stacked in a column"
        width="193"
        height="168">
</uxdot-example>


## Behavior

A Switch is successfully toggled when the handle slides to the other side of the track and the status message changes. When a user toggles a Switch, the effects should start immediately without needing to save. If immediate results are not achievable, another element should be used instead (see table above in Usage section).

<uxdot-example width-adjustment="319px">
  <img src="../switch-behavior.svg"
        alt="One switch that is on, next to one that is off"
        width="319"
        height="24">
</uxdot-example>


## Best practices

### No status message or form label

To avoid confusion as to what a Switch will do, always include some kind of status message or a form label.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="160px">
      <img src="../switch-best-practice-no-status-message-do.svg"
        alt="Switches with Bluetooth as a form label and/or a status message"
        width="160"
        height="72">
    </uxdot-example>
    <p>Ensure the message is clear when a Switch is toggled to the On or Off position and that the form label explains the switch's purpose.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image"  width-adjustment="160px">
      <img src="../switch-best-practice-no-status-message-do-not.svg"
        alt="Two switches without a form label or status message"
        width="160"
        height="24">
    </uxdot-example>
    <p>Do not make it unknown to users what a Switch will do when toggled.</p>
  </uxdot-best-practice>
</div>


<!-- Should this be added once we have toggle group available? -->
### Binary vs. opposing options

A Switch controls binary options, not opposing ones. A binary option represents a single selection that is either on or off.

<!-- add images
<div class="best-practices-grid">
    <div>
        <img slot="header" src="" alt="">
        <h4 class="correct">Do</h4>
        <p>Use a Toggle group to choose between opposing options.</p>
        
    </div>
    <div>
        <img slot="header" src="" alt="">
        <h4 class="wrong">Don't</h4>
        <p>Do not use a Switch to control opposing options.</p>
        
    </div>
</div>
-->

### Controlling multiple options

Switches can be used in a list to toggle multiple independent options.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="193px">
      <img src="../switch-best-practice-multiple-options-do.svg"
        alt="Four switches stacked vertically with half of them turned on"
        width="193"
        height="168">
    </uxdot-example>
    <p>Use Switches in a list only if the effects from toggling each Switch are immediate.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" width-adjustment="193px">
      <img src="../switch-best-practice-multiple-options-do-not.svg"
        alt="Four switches stacked vertically with a save button below them"
        width="193"
        height="236">
    </uxdot-example>
    <p>Do not use Switches in a list if a user has to save to see the effects</p>
  </uxdot-best-practice>
</div>
