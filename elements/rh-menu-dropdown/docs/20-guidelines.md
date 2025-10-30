## Guidelines

A menu dropdown expands to show a list of menu items, which are typically actions that a user can take.

### Menu dropdowns vs. select lists

Though they may be visually similar, understanding the difference between a menu dropdown and a select list is crucial for proper semantic implementation and accessibility.

An action in a menu dropdown performs a command, and its toggle functions like a button. It does not update a form field value, which would result in a change to what the toggle displays.

A select list is a form control that allows a user to choose one or more options as inputs. The value in a select list’s toggle does change to show a user’s selection(s).

<rh-alert state="info">
    <h4 slot="header">Note</h4>
    <p>Red Hat Design System does not yet include a select list element. <a href="/support/">Contact the team</a> with any questions.</p>
</rh-alert>

<div class="grid sm-two-columns">
    <figure>
        <uxdot-example color-palette="lightest">
            <img alt="A menu toggle labeled, 'Share,' with menu items showing related actions."
                src="../menu-dropdown-guidelines-dropdown-example.svg"
                width="482"
                height="176">
        </uxdot-example>
        <figcaption>
            <p>Menu dropdown</p>
        </figcaption>
    </figure>
    <figure>
        <uxdot-example color-palette="lightest">
            <img alt="A select list labeled 'Select a state' that includes related choices."
                src="../menu-dropdown-guidelines-select-example.svg"
                width="482"
                height="176">
        </uxdot-example>
        <figcaption>
            <p>Select list (example only)</p>
        </figcaption>
    </figure>
</div>

### Using menu item types

Menu dropdowns can show actions or links. If possible, avoid mixing the two types.

<rh-alert state="warning">
    <h4 slot="header">Warning</h4>
    <p>Do not change the style of a linked menu item. Doing so may  remove the affordances that help 
users know they will be navigating away from their current view.</p>
</rh-alert>

<uxdot-example color-palette="lightest">
  <img alt="An expanded menu dropdown with actions only and another with links only."
       src="../menu-dropdown-style-menu-item-types.svg"
       width="477"
       height="272">
</uxdot-example>

## Variants

### Basic menu toggle

The basic menu toggle is the default and clearly communicates the menu’s purpose. It is best used when: 

- the contents of the dropdown are not easily inferred
- there is enough space to include text
- more than one toggle is present in a section

<uxdot-example color-palette="lightest">
  <img alt="A basic menu toggle with visible text that says, 'Actions'."
       src="../menu-dropdown-guidelines-variants-basic-menu-toggle.svg"
       width="106"
       height="36">
</uxdot-example>

### Compact menu toggle

The compact menu toggle conserves space, but it does not include a visible label. This variant works well when:

- the menu dropdown is related to specific items, like cards or rows in a table
- there is limited space for a dropdown toggle

<uxdot-example color-palette="lightest">
  <img alt="Compact toggles without a border and with a subtle border."
       src="../menu-dropdown-style-light-scheme-icon-toggle.svg"
       width="482"
       height="176">
</uxdot-example>

## Writing content

The content within the menu dropdown must be clear, concise, and action-oriented.

### Menu toggle label

For a basic menu toggle, the label should be descriptive (e.g., "Actions," "More options”). Menu toggle labels should aim to be 1-3 words long and should not wrap when viewed at the smallest breakpoint.

For a compact menu toggle, you must use a descriptive aria-label (e.g., "Account settings") for accessibility, as there is no visible text.

### Menu items

Use verb-noun format whenever possible (e.g., "Create user," "View details") for both actions and links. Menu items that are links should still describe where the link will take a user. 

Aim for menu item labels that are 1-3 words. If an item requires more context, consider adding a description.

### Group headings

Headings should be used sparingly to categorize groups of items and improve scannability. They are helpful for dropdown menus with many items.

### Menu item descriptions

Menu item descriptions should be used if a menu item requires additional explanation.

## Responsive design

A menu dropdown’s layout should not change much at different screen or container sizes. Both toggle variants can be used on mobile or desktop, depending on the context.

## Best practices

### Nesting

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded menu dropdown with a single level of menu items."
           src="../menu-dropdown-guidelines-best-practices-1-do.svg"
           width="199"
           height="235">
    </uxdot-example>
    <p>Do use only a single level of menu items for a menu dropdown.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded menu dropdown with a nested and expanded menu item."
           src="../menu-dropdown-guidelines-best-practices-1-dont.svg"
           width="409"
           height="235">
    </uxdot-example>
    <p>Do not create multi-level menu dropdowns.</p>
  </uxdot-best-practice>
</div>

### Grouping menu items

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Menu dropdown with three groups. One group has five menu items."
           src="../menu-dropdown-guidelines-best-practices-2-do.svg"
           width="148"
           height="408">
    </uxdot-example>
    <p>Do limit the number of items to 7 or fewer per group to make the options easy to scan.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="caution">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="An expanded menu dropdown with eight, ungrouped menu items."
           src="../menu-dropdown-guidelines-best-practices-2-caution.svg"
           width="148"
           height="408">
    </uxdot-example>
    <p>Reconsider having more than 7 menu items if you are not categorizing the items into groups.</p>
  </uxdot-best-practice>
</div>

### Destructive actions

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded menu dropdown with 'Delete' menu item in a separate group."
           src="../menu-dropdown-guidelines-best-practices-destructive-actions-do.svg"
           width="101"
           height="285">
    </uxdot-example>
    <p>Do find a way to differentiate or separate destructive actions.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded menu dropdown with 'Delete' action mixed with non-destructive items"
           src="../menu-dropdown-guidelines-best-practices-destructive-actions-dont.svg"
           width="101"
           height="285">
    </uxdot-example>
    <p>Avoid mixing destructive actions with non-destructive actions, especially if additional visual clues, like status icons, are not used.</p>
  </uxdot-best-practice>
</div>

### Element purpose

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded 'Edit' menu dropdown with actions."
           src="../menu-dropdown-guidelines-best-practices-element-purpose-do.svg"
           width="115"
           height="285">
    </uxdot-example>
    <p>Do add menu items that allow users to perform actions without changing any labels in the menu dropdown.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Expanded menu dropdown labeled 'Choose a product platform'."
           src="../menu-dropdown-guidelines-best-practices-element-purpose-dont.svg"
           width="314"
           height="285">
    </uxdot-example>
    <p>Do not use a menu dropdown for navigation or for form options that should be used in a select list.</p>
  </uxdot-best-practice>
</div>

### Types of menu items

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Menu dropdown that contains actions to edit something."
           src="../menu-dropdown-guidelines-best-practices-menu-item-types-do.svg"
           width="115"
           height="285">
    </uxdot-example>
    <p>Menu items in a single menu dropdown should usually be actions or functions.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="caution">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Menu dropdown with two actions and a link."
           src="../menu-dropdown-guidelines-best-practices-menu-item-types-caution.svg"
           width="209"
           height="285">
    </uxdot-example>
    <p>Avoid mixing actions and links whenever possible. If those two types of menu items must be included, do not replace the link styling that’s built into the menu dropdown.</p>
  </uxdot-best-practice>
</div>
