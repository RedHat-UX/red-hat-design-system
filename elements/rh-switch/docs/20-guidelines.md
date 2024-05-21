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

<!-- add image 
{% example palette="light",
            alt="",
            src="../" %}
            -->

## Writing content

In general, users scan and do not read everything, so use keywords and avoid long phrases and questions.

### Clarity of language

Text labels describe what a Switch does when turned on or off, so they should be short and direct, not neutral or ambiguous. Ensure the message is clear when a Switch is toggled to the On or Off position.

<!-- add image 
{% example palette="light",
            alt="",
            src="../" %}
            -->

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
        <td scope="col" data-label="Element">Form status message</td>
        <td scope="col" data-label="Character count">30</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Layout

### Stacking

Use a stack of Switches for situations where multiple independent options need to be turned on or off.

<!-- add image 
{% example palette="light",
            alt="",
            src="../" %}
            -->

## Behavior

A Switch is successfully toggled when the handle slides to the other side of the track and the status message changes. When a user toggles a Switch, the effects should start immediately without needing to save. If immediate results are not achievable, another element should be used instead (see table above in Usage section).

<!-- add image 
{% example palette="light",
            alt="",
            src="../" %}
            -->

## Best practices

### No status messages

To avoid confusion as to what a Switch will do, always include some kind of status message.

<div class="best-practices-grid">
    <div>
        <!-- add image 
        <img slot="header" src="" alt="">
        <h4 class="correct">Do</h4>
        <p>Use the color variants already available for elements and patterns.</p>
        -->
    </div>
    <div>
        <!-- add image 
        <img slot="header" src="" alt="">
        <h4 class="wrong">Don't</h4>
        <p>Do not make it unknown to users what a Switch will do when toggled.</p>
        -->
    </div>
</div>

<!-- Should this be added once we have toggle group available? -->
### Binary vs. opposing options

A Switch controls binary options, not opposing ones. A binary option represents a single selection that is either on or off.

<div class="best-practices-grid">
    <div>
        <!-- add image 
        <img slot="header" src="" alt="">
        <h4 class="correct">Do</h4>
        <p>Use a Toggle group to choose between opposing options.</p>
        -->
    </div>
    <div>
        <!-- add image 
        <img slot="header" src="" alt="">
        <h4 class="wrong">Don't</h4>
        <p>Do not use a Switch to control opposing options.</p>
        -->
    </div>
</div>

### Controlling multiple options

Switches can be used in a list to toggle multiple independent options.

<div class="best-practices-grid">
    <div>
        <!-- add image 
        <img slot="header" src="" alt="">
        <h4 class="correct">Do</h4>
        <p>Use Switches in a list only if the effects from toggling each Switch are immediate.</p>
        -->
    </div>
    <div>
        <!-- add image 
        <img slot="header" src="" alt="">
        <h4 class="wrong">Don't</h4>
        <p>Do not use Switches in a list if a user has to save to see the effects.</p>
        -->
    </div>
</div>