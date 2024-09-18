## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="456px">
  <img src="alert-overview.svg" alt="Two examples of the alert element" width="538px">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}

## Sample element

<rh-alert dismissable>
  <h3 slot="header">Title</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <rh-button slot="actions" variant="secondary" data-action="confirm">Confirm</rh-button>
  <rh-button slot="actions" variant="link" data-action="dismiss">Cancel</rh-button>
</rh-alert>

## When to use

  - Communicate essential information in a prominent way
  - Notify a user of a change in status
  - Communicate urgency using severity


{% repoStatusChecklist repoStatus=repoStatus %}
