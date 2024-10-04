## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="404px">
  <img src="./tag-overview.svg"
        alt="A row of tags, a tag with the content: Warning that has a filled yellow background and a brighter yellow border and a triangle warning sign icon, a tag with the content: Signed, with a white background and green border, a tag with the content: Red Hat Openshift with a blue background and brighter blue border, and a tag with the content: Critical Error with a white background and redborder and exclamation mark icon. "
        width="420"
        height="29">
</uxdot-example>

{% repoStatusList repoStatus=repoStatus %}


## Sample element
<rh-tag color="red">Filled</span></rh-tag>
<rh-tag variant="outline" color="red">Outlined</rh-tag>
<rh-tag variant="desaturated">Desaturated</rh-tag>

## When to use
  - Categorize content
  - Add context or clarity to elements
  - Indicate status

{% repoStatusChecklist repoStatus=repoStatus %}
