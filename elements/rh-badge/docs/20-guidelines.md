## Usage 
Use a badge to reflect counts like number of objects, events, or unread items.

## Variants

A badge includes various status colors that communicate different semantic 
meanings.

<rh-alert state="warning">
  <h3 slot="header">Warning</h3>
  <p>Relying on color alone to communicate information causes barriers to access 
  for many readers. Go to the <a href="../accessibility/">Accessibility</a> page to learn more.</p>
</rh-alert>

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
        <td data-label="Badge"><rh-badge state="warning">17<rh-badge></td>
        <td data-label="Name">Warning</td>
        <td data-label="Use case">Indicates a warning</td>
      </tr>
      <tr>
        <td data-label="Badge"><rh-badge state="caution">17<rh-badge></td>
        <td data-label="Name">Caution</td>
        <td data-label="Use case">Indicates an increased need for caution or attention</td>
      </tr>
      <tr>
        <td data-label="Badge"><rh-badge state="danger">17<rh-badge></td>
        <td data-label="Name">Danger</td>
        <td data-label="Use case">Indicates an error</td>
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

<uxdot-example width-adjustment="198px">
  <img src="../badge-counter-number.svg" 
      alt="Badges with various counter numbers; from left to right, a badge with 1, a badge with 50, a badge with 500, and a badge with 999+"
      width="198"
      height="18">
</uxdot-example>


## Behavior

### Filtering
A badge is often found in filter toggles to indicate the number of selections 
that are made in a toolbar filter or select list.

<uxdot-example width-adjustment="336px">
  <img src="../badge-filtering.png" 
      alt="A badge used in a filter dropdown and counting three selected checkboxes within a menu"
      width="336"
      height="184">
</uxdot-example>

## Best practices

### Large number

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="46px" slot="image">
      <img src="../badge-best-practices-large-number-do.svg"
            alt="999+ in a gray badge"
            width="46"
            height="18">
    </uxdot-example>
    <p>A value threshold for the number displayed in a badge should be established, and any number that’s larger should be shown as the threshold value with a plus sign.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="74px" slot="image">
      <img src="../badge-best-practices-large-number-dont.svg"
            alt="1,000,000 in a gray badge"
            width="74"
            height="18">
    </uxdot-example>
    <p>Do not allow a badge to display a value over 999.</p>
  </uxdot-best-practice>
</div>

### Two badges

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="171px" slot="image">
      <img src="../badge-best-practices-two-badges-do.svg"
            alt="Gray badge labeled as 'Unread' and yellow badge labeled as 'Flagged'"
            width="171"
            height="18">
    </uxdot-example>
    <p>Use at least one visual cue other than color when using two badges side by side.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="85px" slot="image">
      <img src="../badge-best-practices-two-badges-dont.svg"
            alt="Gray badge next to yellow badge"
            width="85"
            height="18">
    </uxdot-example>
    <p>Do not use only color to associate two consecutive badges with two different meanings.</p>
  </uxdot-best-practice>
</div>

