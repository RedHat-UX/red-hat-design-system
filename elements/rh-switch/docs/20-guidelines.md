## Usage

Use a Switch to adjust settings or make a binary selection like on or off and true or false.

### Switch vs. other selection controls

Deciding whether to use a Switch vs. other selection controls can be confusing. The table below summarizes questions and answers about these frequently used elements.

<rh-table>

| Question                             | Radio button                         | Single checkbox                      | Multiple checkboxes                  | Switch             |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------ |
| How many options are available?      | Multiple                             | 1                                    | Multiple                             | 1                  |
| How many selections can a user make? | 1                                    | 2 (on/off)                           | 0 - all                              | 2 (on/off)         |
| Is there a default option?           | Yes                                  | Yes                                  | No                                   | Yes                |
| How would you describe the choices?  | Mutually exclusive                   | Mutually exclusive                   | Independent of each other            | Mutually exclusive |
| When does the selection take effect? | After a user selects a submit button | After a user selects a submit button | After a user selects a submit button | Immediately        |

</rh-table>

## Variants

A Switch displays a state through different methods and locations.

- The Switch status message indicates if the Switch is on or off
- The form status message indicates what the Switch turns on or off
- The check icon is used in place of the Switch status message if space is limited
- The Switch status message is used with a check icon to add clarity if necessary

<uxdot-example color-palette="lightest" width-adjustment="783px">
  <img alt="four variants of switch"
       src="../switch-variants.svg"
       width="783"
       height="24">
</uxdot-example>

## Using status messages

Adding a custom status message is _not_ a requirement. By default, switches already indicate their state both graphically and to assistive tech (e.g., announcing “on” and “off” to screen readers when receiving focus or being toggled).

If you would like to add a status message, you can do so with the `message-on` and `message-off` attributes:

Here's an example of a status message from a <a href="../demo/">Switch demo</a>:

```html rhcodeblock
<rh-switch
  id="switch-a"
  accessible-label="Switch A"
  message-on="Message when on"
  message-off="Message when off"
></rh-switch>
```

If your status messages contain rich text, you may use the `message-on` and `message-off` slots instead:

```html rhcodeblock
<rh-switch id="switch-a" accessible-label="Switch A" checked>
  <span slot="message-on">Message when <strong>on</strong></span>
  <span slot="message-off">Message when <strong>off</strong></span>
</rh-switch>
```

### Status messages vs. form labels

Unlike a status message, a form label is required whenever Switch is used. A form label describes a Switch's purpose. There is no slot for a form label within the Web Component and has to be added separately.

<rh-cta href="../accessibility/#using-form-labels">Learn how to use form labels with Switch</rh-cta>

## Writing content

In general, users scan and do not read everything, so use keywords and avoid long phrases and questions.

### Clarity of language

The status message and form label should be short and direct, not neutral or ambiguous.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image" alignment="left" width-adjustment="241px">
      <img alt="Magenta button, brand red default call to action, green tooltip, and dark orange switch"
           src="../switch-language-clarity-do.svg"
           width="241"
           height="24">
    </uxdot-example>
    <p>Ensure the message is clear when a Switch is toggled to the On or Off position and that the form label explains the switch's purpose.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image" alignment="left"  width-adjustment="254px">
      <img alt="Magenta button, brand red default call to action, green tooltip, and dark orange switch"
           src="../switch-language-clarity-do-not.svg"
           width="254"
           height="24">
    </uxdot-example>
    <p>Do not use a status message that does not make the switch state clear, especially if the form label is hidden.</p>
  </uxdot-best-practice>
</div>

### Character count

The recommended maximum character count is listed below and includes spaces.

<rh-table>

| Element               | Character count |
| --------------------- | --------------- |
| Switch status message | 20              |
| Form label            | 30              |

</rh-table>

## Layout

### Stacking

Use a stack of Switches for situations where multiple independent options need to be turned on or off.

<uxdot-example color-palette="lightest" width-adjustment="193px">
  <img alt="four switches, half of which are on, stacked in a column"
       src="../switch-layout-stacking.svg"
       width="193"
       height="168">
</uxdot-example>

## Behavior

A Switch is successfully toggled when the handle slides to the other side of the track and the status message changes. When a user toggles a Switch, the effects should start immediately without needing to save. If immediate results are not achievable, another element should be used instead (see table above in Usage section).

<uxdot-example color-palette="lightest" width-adjustment="319px">
  <img alt="One switch that is on, next to one that is off"
       src="../switch-behavior.svg"
       width="319"
       height="24">
</uxdot-example>

## Best practices

### No status message or form label

To avoid confusion as to what a Switch will do, always include some kind of status message or a form label.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image" width-adjustment="160px">
      <img alt="Switches with Bluetooth as a form label and/or a status message"
           src="../switch-best-practice-no-status-message-do.svg"
           width="160"
           height="72">
    </uxdot-example>
    <p>Ensure the message is clear when a Switch is toggled to the On or Off position and that the form label explains the switch's purpose.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image"  width-adjustment="160px">
      <img alt="Two switches without a form label or status message"
           src="../switch-best-practice-no-status-message-do-not.svg"
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
    <uxdot-example color-palette="lightest" slot="image" width-adjustment="193px">
      <img alt="Four switches stacked vertically with half of them turned on"
           src="../switch-best-practice-multiple-options-do.svg"
           width="193"
           height="168">
    </uxdot-example>
    <p>Use Switches in a list only if the effects from toggling each Switch are immediate.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image" width-adjustment="193px">
      <img alt="Four switches stacked vertically with a save button below them"
           src="../switch-best-practice-multiple-options-do-not.svg"
           width="193"
           height="236">
    </uxdot-example>
    <p>Do not use Switches in a list if a user has to save to see the effects</p>
  </uxdot-best-practice>
</div>
