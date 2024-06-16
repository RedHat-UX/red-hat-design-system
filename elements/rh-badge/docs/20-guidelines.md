## Usage 
Use a badge to reflect counts like number of objects, events, or unread items.

## Variants

A badge includes various status colors that communicate different semantic 
meanings.

<rh-alert state="warning">
  <h3 slot="header">Warning</h3>
  <p>Relying on color alone to communicate information causes barriers to access 
  for many readers. Go to the <a href="{{ '../accessibility/' | url }}">Accessibility</a> page to learn more.</p>
</rh-alert>

<uxdot-example width-adjustment="202px">
  <img src="{{ '../badge-variants.png' | url }}" alt="Image of neutral, default, success, warning, error, and danger badges in a row">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Badge">Badge</th>
        <th scope="col" data-label="Name">Name</th>
        <th scope="col" data-label="Use case">Use case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Badge"><rh-badge>17<rh-badge></td>
        <td data-label="Name">Neutral</td>
        <td data-label="Use case">Indicates neutrality or no impact</td>
      </tr>
      <tr>
        <td data-label="Badge"><rh-badge state="info">17<rh-badge></td>
        <td data-label="Name">Info</td>
        <td data-label="Use case">Indicates informative or low impact</td>
      </tr>
      <tr>
        <td data-label="Badge"><rh-badge state="success">17<rh-badge></td>
        <td data-label="Name">Success</td>
        <td data-label="Use case">Indicates stability or completion</td>
      </tr>
      <tr>
        <td data-label="Badge"><rh-badge state="moderate">17<rh-badge></td>
        <td data-label="Name">Moderate</td>
        <td data-label="Use case">Indicates caution</td>
      </tr>
      <tr>
        <td data-label="Badge"><rh-badge state="important">17<rh-badge></td>
        <td data-label="Name">Important</td>
        <td data-label="Use case">Indicates an error</td>
      </tr>
      <tr>
        <td data-label="Badge"><rh-badge state="critical">17<rh-badge></td>
        <td data-label="Name">Critical</td>
        <td data-label="Use case">Indicates danger or something critical</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Badge vs. tag

If you need to add specific text captions to elements, consider using a 
[Tag](/elements/tag) instead.

## Writing content

### Counter number

The width of a badge varies based on the counter number. Using a number larger 
than the threshold will display a + at the end. For example, if `999` is the 
threshold, using `1,000` or larger will display `999+`.

<uxdot-example width-adjustment="174px">
  <img src="{{ '../badge-counter-number.png' | url }}" alt="Badges with various counter numbers; from left to right, a badge with 1, a badge with 50, a badge with 500, and a badge with 999+">
</uxdot-example>


## Behavior

### Filtering
A badge is often found in filter toggles to indicate the number of selections 
that are made in a toolbar filter or select list.

<uxdot-example width-adjustment="336px">
  <img src="{{ '../badge-filtering.png' | url }}" alt="A badge used in a filter dropdown and counting three selected checkboxes within a menu">
</uxdot-example>

## Best practices

### Large number

Do not allow a badge to display a count over 999.

<uxdot-example danger width-adjustment="75px">
  <img src="{{ '../badge-best-practice-1.png' | url }}" alt="A badge counting to 1,00,000 which is incorrect usage">
</uxdot-example>

### Two badges

Be careful using two badges. Using color only and the lack of other visual cues 
might make it difficult to differentiate unread or actionable items associated 
with the badges.

<uxdot-example danger width-adjustment="77px">
  <img src="{{ '../badge-best-practice-2.png' | url }}" alt="Two badges with the same counter number, but with different background colors and no other unique visual cues which is incorrect usage">
</uxdot-example>

