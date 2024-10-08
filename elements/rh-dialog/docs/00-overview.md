## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="1000px">
  <img src="./dialog-sample.png"
        alt="A dialog container with a black headline, black body text, two blue buttons, and a dark gray close button all on a white background on top of a slightly transparent black background"
        width="1000"
        height="322">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}


## Sample element

<rh-dialog trigger="standard-trigger">
  <h2 slot="header">Leave page</h2>
  <p>If you leave the page, any unsaved information will be lost.</p>
  <rh-button slot="footer">Leave</rh-button>
  <rh-button slot="footer" variant="tertiary">Cancel</rh-button>
</rh-dialog>

<rh-button id="standard-trigger">Open dialog</rh-button>

## When to use

  - When you need to confirm user decisions
  - When you need an immediate response from users
  - When you need to notify users of urgent information concerning their current workflow

{% repoStatusChecklist repoStatus=repoStatus %}
