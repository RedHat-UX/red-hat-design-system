<style>uxdot-code-sample rh-alert { max-width: 550px; }</style>

## Overview
{{ tagName | getElementDescription }}


## Sample element
{% sample code="hidden" %}

<rh-alert state="success" dismissable>
  <h2 slot="header">Success</h2>
  <p>Your information has been submitted successfully.</p>
  <rh-button slot="actions" variant="link" data-action="dismiss">Go back</rh-button>
  <rh-button slot="actions" variant="link" data-action="confirm">Continue</rh-button>
</rh-alert>

<rh-alert state="warning" variant="toast" dismissable>
  <h2 slot="header">Download complete with errors</h2>
  <p>From the <strong>Settings</strong> tab, select <a href="#">View logs</a>.</p>
</rh-alert>

{% endsample %}


## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-alert>` demo in a new tab
  {% endcta %}


## When to use
  - When additional information needs to be emphasized 
  - When a user needs to be notified after performing an action
  - When the severity of a message needs to be indicated


{% repoStatus type="Element" %}


[img-sample]: {{ './alert-sample.svg' | url }}

