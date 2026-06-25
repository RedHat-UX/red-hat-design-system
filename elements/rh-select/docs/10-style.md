## Style

A select is composed of a toggle, which opens a container with options. Options allow the addition of icons, descriptions, and organizational elements like group headings and separators.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="An expanded select element with its toggle appearing above a dropdown that contains a placeholder option and selectable options organized into two option groups."
         src="../select-style-anatomy.svg"
         width="396"
         height="295">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Toggle</li>
      <li>Placeholder option</li>
      <li>Option</li>
      <li>Option group</li>
    </ol>
  </figcaption>
</figure>

## Color scheme

Select is available in both light and dark schemes.

### Light scheme

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="A collapsed select with 'Select a platform' as the placeholder text, next to the same select expanded in light scheme"
         src="../select-style-scheme-light.svg"
         width="664"
         height="242">
  </uxdot-example>
  <figcaption>
    <p>Select - collapsed and expanded</p>
  </figcaption>
</figure>

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="In light scheme: Success select has green border and green checkmark icon. Warning select has bright yellow border and bright yellow warning icon. Danger select has dark red orange border with dark red orange icon."
         src="../select-style-scheme-light-status.svg"
         width="1012"
         height="37">
  </uxdot-example>
  <figcaption>
    <p>Select elements with status</p>
  </figcaption>
</figure>

### Dark scheme

<figure>
  <uxdot-example color-palette="darkest">
    <img alt="A collapsed select with 'Select a platform' as the placeholder text, next to the same select expanded in dark scheme"
         src="../select-style-scheme-dark.svg"
         width="664"
         height="242">
  </uxdot-example>
  <figcaption>
    <p>Select - collapsed and expanded</p>
  </figcaption>
</figure>

<figure>
  <uxdot-example color-palette="darkest">
    <img alt="In dark scheme: Success select has green border and green checkmark icon. Warning select has bright yellow border and bright yellow warning icon. Danger select has red orange border with red orange icon."
         src="../select-style-scheme-dark-status.svg"
         width="1012"
         height="37">
  </uxdot-example>
  <figcaption>
    <p>Select elements with status</p>
  </figcaption>
</figure>

## Configuration

### Optional additions

Options can include a decorative icon and a description. The icon of a selected option should persist in the toggle, but the description should not.

<uxdot-example color-palette="lightest">
  <img alt="One expanded select has options with descriptions that use a smaller font size. Second expanded select shows options with icons on the left."
       src="../select-style-configuration-optional-additions.svg"
       width="736"
       height="350">
</uxdot-example>

### Groups

Options can also be grouped together, with non-interactive group headings if necessary.

<uxdot-example color-palette="lightest">
  <img alt="Expanded select with options for Red Hat OpenShift editions that are grouped into 'Cloud services editions' and 'Red Hat OpenShift Container Platform'"
       src="../select-style-configuration-groups.svg"
       width="320"
       height="363">
</uxdot-example>

### Space

Space values are the same for all viewport sizes.

<uxdot-example color-palette="lightest">
  <img alt="A select has 16px padding on the left and right and 8px padding on the top and bottom. There's also an 8px gap between the select's text, caret icon and status icon. Each rh-option element has similar vertical and horizontal padding."
       src="../select-style-space.svg"
       width="753"
       height="314">
</uxdot-example>

## Interaction states

The images below show interaction states for both the select toggle and its options when the element is expanded. When the select element is expanded, focus moves to the selected option, and this is reflected in all of the images.

### Hover

<uxdot-example color-palette="lightest">
  <img alt="In light scheme, when the mouse hovers over the collapsed select toggle, the border color turns blue. When the list is expanded, hovering over an option changes its background color to a light gray."
       src="../select-style-interaction-states-hover-light.svg"
       width="736"
       height="242">
</uxdot-example>

<uxdot-example color-palette="darkest">
  <img alt="In dark scheme, when the mouse hovers over collapsed select toggle, the border color turns light blue. When the list is expanded, hovering over an option changes its background color to a lighter gray."
       src="../select-style-interaction-states-hover-dark.svg"
       width="736"
       height="242">
</uxdot-example>

### Focus

<uxdot-example color-palette="lightest">
  <img alt="When light scheme select toggle is in focus, a solid, blue focus ring appears around entire element. When expanded, the focus ring is around the currently selected option or the placeholder option."
       src="../select-style-interaction-states-focus-light.svg"
       width="736"
       height="242">
</uxdot-example>

<uxdot-example color-palette="darkest">
  <img alt="When dark scheme select toggle is in focus, a solid, light blue focus ring appears around entire element. When expanded, focus ring is around the currently selected option or the placeholder option."
       src="../select-style-interaction-states-focus-dark.svg"
       width="736"
       height="242">
</uxdot-example>

### Active

<uxdot-example color-palette="lightest">
  <img alt="In active state, the light scheme toggle's border color darkens and its border width increases. An active option receives the focus state style."
       src="../select-style-interaction-states-active-light.svg"
       width="736"
       height="242">
</uxdot-example>

<uxdot-example color-palette="darkest">
  <img alt="Just like the light version, in the active state, dark scheme toggle's border color lightens and its border width increases. An active option receives the focus state style."
       src="../select-style-interaction-states-active-dark.svg"
       width="736"
       height="242">
</uxdot-example>

### Disabled

<uxdot-example color-palette="lightest">
  <img alt="In light scheme, disabled select element changes its text color to have a faded appearance."
       src="../select-style-interaction-states-disabled-light.svg"
       width="736"
       height="279">
</uxdot-example>

<uxdot-example color-palette="darkest">
  <img alt="In dark scheme, disabled select element changes its text color to have a faded appearance."
       src="../select-style-interaction-states-disabled-dark.svg"
       width="736"
       height="279">
</uxdot-example>
