<style data-helmet>
  .example {
    width: 100%;
  }

  .example + .example {
    margin-top: unset;
    margin-block-start: unset;
  }

  .icons .example {
    margin-block-end: var(--rh-space-xl, 24px);
  }

  .do {
    color: var(--rh-color-green-60, #3D7317);
  }

  .dont {
    color: var(--rh-color-red-orange-60, #B1380B)
  }
</style>


## Usage

Use Website status to inform users about the operational status of a website or domain and provide them with a link to a status page where they can learn more.

## Writing Content

The severity of a status should be communicated in as few words as possible. Remove extra words if necessary so the component does not become too wide.


## Character count

The recommended maximum character count is listed below and includes spaces.

<rh-table>

| Element   | Character count |
|-----------|-----------------|
| Link Text | 30              |

</rh-table>

## Layout

### Heirarchy

Website status can be placed higher or lower on a page, it just depends on the type of website.

### Placement

Website status is usually placed in the [Footer](../../footer/) component, but it may be placed somewhere else if it makes sense to do so.

<uxdot-example variant="full" width-adjustment="1000px" alignment="left" no-border>
  <img src="../site-status-footer-placement.svg"
        alt="Image of a site status element with a green checkmark and the text 'All systems operational' in a footer element."
        width="992"
        height="789">
</uxdot-example>


## Best Practices

### Pairing icons with text

To avoid confusion, write link text with the same severity as the status icon.

<div class="grid icons">
  <div>
    <uxdot-example color-palette="darkest" width-adjustment="200px">
      <img src="../site-status-icons-do.svg"
        alt="Image of a site status element with a correct usage of a green checkmark icon and the text 'All systems operational'."
        width="200"
        height="53">
    </uxdot-example>
    <h4 class="do"><img src="../do.svg" alt="" /> Do</h4>
    <p>Write link text with the same severity as the status icon and vice versa.</p>
  </div>

  <div>
    <uxdot-example color-palette="darkest" width-adjustment="200px">
      <img src="../site-status-icons-dont.svg"
        alt="Image of a site status element with an incorrect usage of an orange red exclamation point icon and the text 'All systems operational'."
        width="200"
        height="53">
    </uxdot-example>
    <h4 class="dont"><img src="../dont.svg" alt="" /> Don't</h4>
    <p>Do not make it confusing to understand what the status or severity is.</p>
  </div>
</div>

## Removing icons

Always include a status icon, it helps communicate severity visually.

<div class="grid sm-two-columns icons">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="darkest" width-adjustment="200px" slot="image">
      <img src="../site-status-icons-do.svg"
        alt="Image of a site status element with a correct usage of a green checkmark icon and the text 'All systems operational'."
        width="200"
        height="53">
    </uxdot-example>
    <p>Include an icon to make it easier for users to understand.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="darkest" width-adjustment="176px" slot="image">
      <img src="../site-status-icons-dont-no-icon.svg"
        alt="Image of a site status element with an incorrect usage of an orange red exclamation point icon and the text 'All systems operational'."
        width="176"
        height="53">
    </uxdot-example>
    <p>Do not remove the status icon.</p>
  </uxdot-best-practice>
</div>

## Writing link text too long

Do not write link text that is too long, it will take users longer to read and make the component wider.

<div class="grid sm-two-columns icons">
  <div>
    <uxdot-example color-palette="darkest" width-adjustment="200px">
      <img src="../site-status-icons-do.svg"
        alt="Image of a site status element with a correct usage of a green checkmark icon and the text 'All systems operational'."
        width="200"
        height="53">
    </uxdot-example>
    <h4 class="do"><img src="../do.svg" alt="" /> Do</h4>
    <p>Write link text using as few words as possible.</p>
  </div>

  <div>
    <uxdot-example color-palette="darkest" width-adjustment="337px">
      <img src="../site-status-icons-dont-long-text.svg"
        alt="Image of a site status element with an incorrect usage of an orange red exclamation point icon and the text 'All systems operational'."
        width="337"
        height="53">
    </uxdot-example>
    <h4 class="dont"><img src="../dont.svg" alt="" /> Don't</h4>
    <p>Do not include unnecessary words or punctuation.</p>
  </div>  
</div>
