## Usage 

Description goes here.

## Writing Content

### Character Count

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
          <td data-label="Element">Body copy</td>
          <td data-label="Character count">150</td>
        </tr>
    </tbody>
  </table>
</rh-table>

## Responsive Design

The announcement’s width will dynamically adjust with its parent container.

### Large Viewport Sizes

<img src="../announcement-grid-lg-viewports.svg" alt="Announcement element with a semitransparent grid in the background. The announcement spans all columns on large viewports.">

### Small Viewport sizes

<img src="../announcement-grid-sm-viewports.svg" alt="Announcement element with a semitransparent grid background on mobile. The announcement spans all columns on small viewports.">

## Best Practices

### Copy length

Only include copy up to 150 characters in the main slot of the announcement component.

<div class="grid xs-two-columns">
  <uxdot-best-practice do>
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img src="../guidelines-best-practice-1-do.svg" alt="rh-announcement with the appropriate amount of body text">
    </uxdot-example>
    <p>Body copy with up to 150 characters.</p>
  </uxdot-best-practice>

  <uxdot-best-practice dont>
    <uxdot-example color-palette="lightest" width-adjustment="420px" slot="image">
      <img src="../guidelines-best-practice-1-dont.svg" alt="rh-announcement with too much body text">
    </uxdot-example>
    <p>Do not put more than 150 characters into the main slot.</p>
  </uxdot-best-practice>
</div>
