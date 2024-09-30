## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="538px">
  <img alt="Two examples of the alert element"
       src="alert-overview.svg"
       width="538px">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}

## Sample element

<rh-alert dismissable>
  <h3 slot="header">Title</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <rh-button slot="actions" data-action="dismiss" variant="secondary">Confirm</rh-button>
  <rh-button slot="actions" data-action="confirm" variant="link">Cancel</rh-button>
</rh-alert>

## When to use

  - To communicate essential information in a prominent way
  - To notify a user of a change in status
  - To communicate urgency using severity

{% repoStatusChecklist repoStatus=repoStatus %}
