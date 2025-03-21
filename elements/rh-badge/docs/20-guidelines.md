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

| Badge                                   | Name    | Use case                                             |
| --------------------------------------- | ------- | ---------------------------------------------------- |
| <rh-badge>17</rh-badge>                 | Neutral | Indicates neutrality or no impact                    |
| <rh-badge state="info">17</rh-badge>    | Info    | Indicates informative or low impact                  |
| <rh-badge state="success">17</rh-badge> | Success | Indicates stability or completion                    |
| <rh-badge state="warning">17</rh-badge> | Warning | Indicates a warning                                  |
| <rh-badge state="caution">17</rh-badge> | Caution | Indicates an increased need for caution or attention |
| <rh-badge state="danger">17</rh-badge>  | Danger  | Indicates an error                                   |

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
  <img alt="Badges with various counter numbers; from left to right, a badge with 1, a badge with 50, a badge with 500, and a badge with 999+"
       src="../badge-counter-number.svg"
       width="198"
       height="18">
</uxdot-example>


## Behavior

### Filtering
A badge is often found in filter toggles to indicate the number of selections 
that are made in a toolbar filter or select list.

<uxdot-example color-palette="lightest" width-adjustment="336px">
  <img alt="A badge used in a filter dropdown and counting three selected checkboxes within a menu"
       src="../badge-filtering.png"
       width="336"
       height="184">
</uxdot-example>

## Best practices

### Large number

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="46px" slot="image">
      <img alt="999+ in a gray badge"
           src="../badge-best-practices-large-number-do.svg"
           width="46"
           height="18">
    </uxdot-example>
    <p>A value threshold for the number displayed in a badge should be established, and any number that’s larger should be shown as the threshold value with a plus sign.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="74px" slot="image">
      <img alt="1,000,000 in a gray badge"
           src="../badge-best-practices-large-number-dont.svg"
           width="74"
           height="18">
    </uxdot-example>
    <p>Do not allow a badge to display a value over 999.</p>
  </uxdot-best-practice>
</div>

### Two badges

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="171px" slot="image">
      <img alt="Gray badge labeled as 'Unread' and yellow badge labeled as 'Flagged'"
           src="../badge-best-practices-two-badges-do.svg"
           width="171"
           height="18">
    </uxdot-example>
    <p>Use at least one visual cue other than color when using two badges side by side.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="85px" slot="image">
      <img alt="Gray badge next to yellow badge"
           src="../badge-best-practices-two-badges-dont.svg"
           width="85"
           height="18">
    </uxdot-example>
    <p>Do not use only color to associate two consecutive badges with two different meanings.</p>
  </uxdot-best-practice>
</div>

