## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="538px">
  <img src="alert-sample.svg" alt="Two examples of the alert element" width="538px">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}

## Sample element

<rh-alert state="success" dismissable>
  <h3 slot="header">Success</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est
    egestas, a sollicitudin mauris tincidunt.</p>
  <rh-button slot="actions" variant="secondary" data-action="confirm">Confirm</rh-button>
  <rh-button slot="actions" variant="link" data-action="dismiss">Cancel</rh-button>
</rh-alert>

## When to use

  - When additional information needs to be emphasized 
  - When a user needs to be notified after performing an action
  - When the severity of a message needs to be indicated


{% repoStatusChecklist repoStatus=repoStatus %}
