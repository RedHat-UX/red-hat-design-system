## Overview
{{ tagName | getElementDescription }}
{% example palette="light",
          width=143,
          alt="Two badges; from left to right, one badge has a light gray background with a dark gray counter number and the other badge has a blue background with a white counter number",
          src="./badge-sample-element.png" %}


## Sample component
<rh-badge number="1" aria-label="1 new message">1</rh-badge>
<rh-badge number="99" state="info" aria-label="99 details">99</rh-badge>
<rh-badge number="100" threshold="99" state="moderate" aria-label="99+ details">100</rh-badge>
<rh-badge number="11" threshold="10" state="success" aria-label="10+ items">11</rh-badge>
<rh-badge number="6" state="important" aria-label="6 overdue tasks">6</rh-badge>
<rh-badge number="2" state="critical" aria-label="2 errors">2</rh-badge>

## Demos
View a live version of this component and see how it can be customized.
{% playground tagName=tagName %}{% endplayground %}
{% cta href="./demo/", target="_blank" %}
  View the `<rh-badge>` demo in a new tab
{% endcta %}


## When to use
- When you need to reflect counts like number of objects, events, or unread items



{% repoStatus type="Element" %}

