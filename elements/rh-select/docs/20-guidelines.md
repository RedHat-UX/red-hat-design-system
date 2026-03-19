## Guidelines

Use a select element to allow a user to choose an option from a list. It is an ideal replacement for radio button groups when space is limited.

## Select vs. menu dropdown

The primary difference between a select and a [menu dropdown](/elements/menu-dropdown/) is their purpose:

- A select element is used for form input, where the user chooses one item from a list to define a value (e.g., choosing a country in a form).
- A menu dropdown is for actions or navigation (e.g., a "Settings" menu).

There are additional visual distinctions.

- A select element will show the selected option in the toggle, while a menu dropdown’s toggle text remains the same.
- A select element is often accompanied with a visible text label above or next to it. If a menu dropdown has a visible label, it will appear in the toggle.

<style>
  .menu-dropdown-example::part(container) {
    min-block-size: 245px;
  }

  .select-best-practice-2-dont::part(container) {
    min-block-size: 236px;
  }
</style>

<div class="grid sm-two-columns">
  <figure>
    <uxdot-example color-palette="lightest">
      <img alt="A select list labeled 'Select a state' that includes related options"
           src="../select-guidelines-select-example.svg" 
           width="482"
           height="234">
    </uxdot-example>
    <figcaption>
      <p>Select</p>
    </figcaption>
  </figure>

  <figure>
    <uxdot-example class="menu-dropdown-example" color-palette="lightest">
      <img alt="A menu toggle labeled 'Share' with menu items showing related actions"
           src="../select-guidelines-menu-dropdown-example.svg"
           width="482"
           height="176">
    </uxdot-example>
    <figcaption>
      <p>Menu dropdown</p>
    </figcaption>
  </figure>
</div>

## Variants

The select element’s toggle can display a success, warning, or danger status with helper text after an option is chosen. 

<uxdot-example color-palette="lightest">
  <img alt="Selects with success, warning, and danger statuses"
       src="../select-guidelines-variants-status.svg"
       width="1008"
       height="66">
</uxdot-example>


## Writing content

The recommended maximum character counts are listed below and includes spaces.

<rh-table>

| Element                                    | Character count |
|--------------------------------------------|-----------------|
| Default toggle text and placeholder option | 40              |
| Option text                                | 40              |
| Description                                | 65              |
| Group heading                              | 40              |

</rh-table>

## Behavior

When the user clicks the toggle, the list of options should appear directly below the toggle. The list remains open until an option is selected, the user clicks outside the list, or the user presses the Escape key. Upon selection, the chosen option replaces the previous text in the collapsed toggle.

## Responsive design

The select element is a block-level element and will expand to the full width of its container by default. The width of the expanded options list should always match the width of the collapsed toggle.

Other than a potential change in its width, a select element will not change based on screen or container sizes.

## Best practices

### Purpose

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded select with language options. Selected option is 'Francais.'"
           src="../select-guidelines-best-practice-1-do.svg"
           width="320"
           height="234">
    </uxdot-example>
    <p>Do use a select when users need to make a selection that remains visible once the element is collapsed.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded select labeled 'Navigate to:' and options with Red Hat site names"
           src="../select-guidelines-best-practice-1-dont.svg"
           width="320"
           height="234">
    </uxdot-example>
    <p>Do not use a select for navigation or for actions that would require a <a href="/elements/menu-dropdown/">menu dropdown</a>.</p>
  </uxdot-best-practice>
</div>

### Labels

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded select with visible label of 'Job role'"
           src="../select-guidelines-best-practice-2-do.svg"
           width="320"
           height="234">
    </uxdot-example>
    <p>Do include an accessible label for screen readers and a visible label when the select list’s content is not easily understood with context clues.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example class="select-best-practice-2-dont" color-palette="lightest" slot="image">
      <img alt="Expanded select list with no label and options listing different animals"
           src="../select-guidelines-best-practice-2-dont.svg"
           width="320"
           height="205">
    </uxdot-example>
    <p>Do not omit an accessible label for screen readers. Avoid omitting a visible label if the select’s purpose is not clear and if it appears in form with other input fields.</p>
  </uxdot-best-practice>
</div>

### Optional additions

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded select with decorative icons and descriptions for support options"
           src="../select-guidelines-best-practice-3-do.svg"
           width="320"
           height="288">
    </uxdot-example>
    <p>Do include decorative icons or descriptions if they might help the user make a selection more easily.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded select with options that list states and have the same icons and similar descriptions"
           src="../select-guidelines-best-practice-3-dont.svg"
           width="320"
           height="288">
    </uxdot-example>
    <p>Do not use decorative icons or descriptions if they do not include clarifying information or if they make the options harder to scan.</p>
  </uxdot-best-practice>
</div>
