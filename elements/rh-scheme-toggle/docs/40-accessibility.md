## Keyboard navigation

Users can navigate to and interact with the scheme toggle using standard keyboard controls:

<rh-table>

| Key                   | Result                                      |
| --------------------- | ------------------------------------------- |
| <kbd>Tab</kbd>        | Moves focus into or out of the toggle group |
| <kbd>Arrow keys</kbd> | Selects between scheme options              |

</rh-table>

## Focus order

The scheme toggle receives focus as a single group. Once focused, arrow keys select between the three options (light, dark, system) in logical order. The focus indicator clearly shows which option is currently selected.

## Touch targets

All interactive elements meet minimum touch target requirements:
- Each radio button option provides adequate touch area
- Icons labels are sized appropriately for touch interaction

## Screen reader guidelines

The scheme toggle communicates clearly to assistive technology:

### Semantic structure
- Uses `<fieldset>` and `<legend>` for proper grouping
- Radio buttons provide standard form control semantics
- Each option has both visible tooltips and visually-hidden labels, in addition 
  to the icon labels

### Information conveyed
- The purpose of the control (color scheme selection)
- Available options (light, dark, system)
- Current selection state
- Changes when selection is made

### Implementation details
- `legend-text` attribute provides the fieldset legend (default: "Color scheme")
- Each radio button has a `title` attribute for tooltips
- Visually-hidden spans provide accessible labels for each option
- Screen readers announce both the group purpose and individual option labels

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}
