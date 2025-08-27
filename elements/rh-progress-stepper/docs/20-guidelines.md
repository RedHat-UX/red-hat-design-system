## General usage

Use a progress stepper to communicate to users how many steps are required to 
complete a process or task. This reduces uncertainty for users as they complete 
each screen.

### Number of steps

A progress stepper should have as few steps as possible in order to reduce 
cognitive load. A best practice is displaying 3 - 5 steps maximum.

## Behavior

### Progression

A progress stepper is designed to complement standard previous/next navigation 
in a linear sequence, not to be a navigation of its own.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-guidelines-progression.svg"
        alt="A progress stepper above a box indicating extra content should appear there. Below this box are previous and next buttons."
        width="643"
        height="418">  
</uxdot-example>

### Error validation

If a user attempts to move to another step without resolving any errors first, 
an inline alert will appear.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-guidelines-error-validation.svg"
        alt="A progress stepper with the components listed above plus an rh-alert above the stepper indicating an error occurred."
        width="643"
        height="532">  
</uxdot-example>

### Completion

When a process or task is completed, users are **not** able to go back. They must 
start the process all over again.

<uxdot-example color-palette="lightest">
  <img src="../progress-stepper-guidelines-completion.svg"
        alt="A progress stepper with all completed steps, a box for placeholder content below it, and an rh-button that says 'Start over'."
        width="643"
        height="418">  
</uxdot-example>

## Writing content

When writing text, include minimal content by doing the following:

  - Keep the title and description short and specific
  - Use between 1 - 3 words for the title and around 40 characters (or a max of 2 lines at the 768px breakpoint) for the description
  - Use verbs that clearly communicate each step of the process
  - Do not punctuate the title or description because they are fragments and not full sentences

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Step">Step</th>
        <th scope="col" data-label="Verb tense">Verb tense</th>
        <th scope="col" data-label="Example">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Step">In progress</td>
        <td data-label="Verb tense">Present participle</td>
        <td data-label="Example">
          <ul>
            <li>Installing cluster</li>
            <li>Creating cache</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="Step">Error</td>
        <td data-label="Verb tense">Past</td>
        <td data-label="Example">
          <ul>
            <li>Could not install cluster</li>
            <li>Could not validate account credentials</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="Step">Cluster installed</td>
        <td data-label="Verb tense">Past</td>
        <td data-label="Example">
          <ul>
            <li>Cluster installed</li>
            <li>Account credentials validated</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Responsive design

A horizontal progress stepper can be a fixed width or stretch to fill a container.

<uxdot-example variant="full" color-palette="lightest" no-border>
  <img src="../progress-stepper-guidelines-responsive-1.svg"
        alt="Two progress steppers. One 50% width and one 100% width. Each has four steps."
        width="1140"
        height="188">  
</uxdot-example>

If space becomes an issue with the horizontal size, switch to the compact size or 
the vertical orientation.

<uxdot-example variant="full" color-palette="lightest" no-border>
  <img src="../progress-stepper-guidelines-responsive-2.svg"
        alt="Three progress steppers at varying viewport sizes. One horizontal, one compact horizontal, and one vertical."
        width="1156"
        height="450">
</uxdot-example>

The table below describes how a horizontal progress stepper changes based on the container size.

<rh-table>

  | Viewport range | Result                                                       |
  | -------------- | -------------------------------------------------------------|
  | `>992px`         | The padding between each step is set to `--rh-space-5xl`.  |
  | `≤992px`         | The padding between steps reduces to `--rh-space-2xl`.     |
  | `<768px`         | The orientation changes to vertical.                       |

</rh-table>

## Best practices

### No title or description

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../progress-stepper-guidelines-best-practice-1-do.svg"
        alt="A four step progress stepper where each step has a title and description."
        width="482"
        height="80">
    </uxdot-example>
    <p>Always include at least a title so users know what step they are on.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../progress-stepper-guidelines-best-practice-1-dont.svg"
        alt="A four step progress stepper without any text labels."
        width="482"
        height="80">
    </uxdot-example>
    <p>Never remove the title because it will be confusing for users.</p>
  </uxdot-best-practice>
</div>

## Stretching the compact size

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../progress-stepper-guidelines-best-practice-2-do.svg"
        alt="Two compact steppers. One horizontal and one vertical."
        width="482"
        height="296">
    </uxdot-example>
    <p>Maintain the compact size, it was designed to have less visual prominence.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../progress-stepper-guidelines-best-practice-2-dont.svg"
        alt="Two compact steppers like above; however, space has been added between each step's icon making it look more like a normal stepper without labels instead of a compact stepper."
        width="482"
        height="296">
    </uxdot-example>
    <p>Do not stretch the compact size. Switch back to the default size or use another orientation.</p>
  </uxdot-best-practice>
</div>
