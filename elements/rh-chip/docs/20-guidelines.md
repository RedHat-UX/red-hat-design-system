## General usage

In general, use a chip when you want to filter information on a page or indicate that a user made a selection.

### Chip vs. Badge vs. Tag

Although these elements look very similar, the following guidance should help clarify when to use each.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Use Cases">Use Cases</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Chip</td>
        <td data-label="Use Cases">
          <ul>
            <li>Almost the same as a checkbox</li>
            <li>Required to use more than one in a Chip group</li>
            <li>Filter information on a page, categorize content, or indicate that a user made a selection</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="Element">Badge</td>
        <td data-label="Use Cases">
          <ul>
            <li>Reflect counts like number of objects, events, or unread items</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="Element">Tag</td>
        <td data-label="Use Cases">
          <ul>
            <li>Can be used on its own</li>
            <li>Highlight an element on a page in order to draw attention to it</li>
            <li>Make it more searchable</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Chip groups

There should be at least two chips in every chip group.

### Small vs. Large sizes

The Large size chip group works well in areas that have more space like page layouts. The Small size chip group works well in compact areas like components or UI.

### Order

When ordering chips in a chip group, use a logical order like alphabetical, numerical, etc. The Clear all button should always be last.

## Writing content

Chip text displays exactly what is being filtered without truncation. This means that chip text has the potential to be very long.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Chip and legend text should always be sentence case except for product names, abbreviations, and acronyms.</p>
</rh-alert>

<uxdot-example>
  <img src="../chip-guidelines-writing-content.svg"
      alt="Two rows of chips. The first row has short chip text except for one that is slightly longer with a warning icon above it. The second row has a legend that is too long with an error icon above it."
      width="808"
      height="186">
</uxdot-example>

### Character count

<rh-table>

| Element                       | Character count |
|-------------------------------|-----------------|
| Legend                        | 25 (maximum)    |
| Number of characters per chip | 2 (minimum)     |

</rh-table>

## Interactivity

To see chip interaction states, go to the [Style](/elements/chip/style) page.

### Clickable areas

The entire container of a chip is clickable except if a chip is disabled.

<uxdot-example>
  <img src="../chip-guidelines-interactivity-clickable-areas.svg"
      alt="Two chips, a legend that says 'Filter by topic:' and a clear all button on the right."
      width="441"
      height="29">
</uxdot-example>

### Selecting

There should not be any chips selected when the page loads. A user can select only one chip at a time.

<uxdot-example>
  <img src="../chip-guidelines-interactivity-selecting.svg"
      alt="Three rows of four chips. No chips selected in the first row. Second row shows a cursor hovering over a chip with a thicker border. Fourth row shows the second chip selected with a blue background."
      width="696"
      height="151">
</uxdot-example>

### Clear all

The Clear all button is always present and is always the last chip in the chip group order. When selected, all chips return to the Default state. However, it has no impact on disabled chips.

<uxdot-example>
  <img src="../chip-guidelines-interactivity-clear-all.svg"
      alt="Three rows of four chips. No chips selected in the first row. Second row has the second chip selected. The third row has all chips selected."
      width="937"
      height="151">
</uxdot-example>

## Responsive design

### Small screen sizes

Chips in a chip group will shuffle and break to multiple lines as screen sizes get smaller.

<uxdot-example variant="full" no-border>
  <img src="../chip-guidelines-responsive-design-small-screen-sizes.svg"
      alt="Four groups of chips. Each group is shown at progressively smaller viewports from desktop to mobile."
      width="1140"
      height="783">
</uxdot-example>

### Long chip text

If a chip has a long string of text, it will break to two lines inside of the chip container.

<uxdot-example>
  <img src="../chip-guidelines-responsive-design-long-chip-text.svg"
      alt="Two columns with several chips. The left column shows a chip with long text not wrapping. The right column shows the fourth chip with the same long text wrapping properly."
      width="863"
      height="228">
</uxdot-example>

## Best Practices

### Size of chips

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image">
      <img src="../chip-guidelines-best-practice-1-do.svg"
        alt="Two rows of chips. Top row is all normal/large chips. Bottom is all small chips."
        width="482"
        height="151">
    </uxdot-example>
    <p>Use a consistent chip size in every chip group.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image">
      <img src="../chip-guidelines-best-practice-1-dont.svg"
        alt="Chips with mixed text sizes on one row."
        width="482"
        height="151">
    </uxdot-example>
    <p>Do not mix chip sizes in any chip group.</p>
  </uxdot-best-practice>
</div>

### Number of chips

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image">
      <img src="../chip-guidelines-best-practice-2-do.svg"
        alt="Two chips with a legend and the clear all button"
        width="482"
        height="93">
    </uxdot-example>
    <p>Use at least two chips and the Clear all button in a chip group.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image">
      <img src="../chip-guidelines-best-practice-2-dont.svg"
        alt="A lone chip with a legend"
        width="482"
        height="93">
    </uxdot-example>
    <p>Do not use one chip and no Clear all button in a chip group. Use a <a href="/elements/button/">Button</a> or <a href="/patterns/link/">Link</a> instead if needed.</p>
  </uxdot-best-practice>
</div>

### Clear all button

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image">
      <img src="../chip-guidelines-best-practice-3-do.svg"
        alt="Like above, two chips with a legend and the clear all button"
        width="482"
        height="93">
    </uxdot-example>
    <p>Always include the Clear all button even if no chips are selected.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image">
      <img src="../chip-guidelines-best-practice-3-dont.svg"
        alt="Two chips with a legend, but no clear all button"
        width="482"
        height="93">
    </uxdot-example>
    <p>Do not omit the Clear all button otherwise users cannot clear chip selections they have made.</p>
  </uxdot-best-practice>
</div>

### Selected state icon

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image">
      <img src="../chip-guidelines-best-practice-4-do.svg"
        alt="Two normal, selected chips with a legend and the clear all button"
        width="482"
        height="93">
    </uxdot-example>
    <p>Use the selected state icons consistently.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image">
      <img src="../chip-guidelines-best-practice-4-dont.svg"
        alt="Three selected chips with different icons and icon positioning and a clear all button."
        width="482"
        height="93">
    </uxdot-example>
    <p>Do not change the selected state icon, its styling, or its position.</p>
  </uxdot-best-practice>
</div>
