## Overview

{{ tagName | getElementDescription }}

<uxdot-example color-palette="darkest" width-adjustment="200px">
  <img src="./site-status-sample.svg"
        alt="Image of a site status element with a green checkmark and the text 'All systems operational'"
        width="200"
        height="53">
</uxdot-example>


{% repoStatusList repoStatus=repoStatus %}


## Sample element

<rh-site-status></rh-site-status>


## When to use

  - When you need to communicate the operational status of a website or domain
  - When you need to provide users with a link to a status page where they can learn more


{% repoStatusChecklist repoStatus=repoStatus %}
