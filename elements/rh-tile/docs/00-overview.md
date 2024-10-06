## Overview

{{ tagName | getElementDescription }}

<uxdot-example width-adjustment="752px">
  <img src="./tile-sample.png"
        alt="Example of a default link tile and a selectable tile"
        width="752"
        height="291">
</uxdot-example>


{% repoStatusList repoStatus=repoStatus %}

## Sample element

<rh-tile>
  <img slot="image" src="https://fakeimg.pl/296x50" alt="296 X 50 placeholder">
  <div slot="title">Title</div>
  <h2 slot="headline"><a href="#top">Link</a></h2>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <div slot="footer">Suspendisse eu turpis elementum</div>
</rh-tile>

## When to use

- When you need to group content in a linked container
- When you need an alternative to a group of cards with the same calls to action
- When you need to group content for a radio button or checkbox in a form

{% repoStatusChecklist repoStatus=repoStatus %}

