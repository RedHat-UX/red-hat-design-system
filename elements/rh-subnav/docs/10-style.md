## Style

A subnavigation is visually similar to tabs, but the text labels are links 
instead. They are arranged horizontally on a thin bar with no other styling 
except for the active page accent.

### Anatomy

<figure>
  <uxdot-example width-adjustment="872px">
    <img src="{{ '../subnav-anatomy.png' | url }}" alt="Anatomy image showing a subnavigation with various annotation numbers">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Active page</li>
      <li>Active page accent</li>
      <li>Inactive page</li>
      <li>Surface</li>
      <li>Overflow button - left</li>
      <li>Overflow button - right</li>
    </ol>
  </figcaption>
</figure>


## Theme

A subnavigation is available in the light theme only right now.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../subnav-theme-light.png' | url }}" alt="Image of light theme desktop and mobile subnavigations">
</uxdot-example>


## Configuration

Each link container is the same height as the bar.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../subnav-configuration.png' | url }}" alt="Image of desktop and mobile subnavigations with various specs like height, width, and more">
</uxdot-example>


## Space

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>To view inset spacing when a subnavigation is used below the primary navigation or a heading, go to the Guidelines page.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../subnav-space.png' | url }}" alt="Image of desktop and mobile subnavigations with spacing values in between">
</uxdot-example>

<rh-table>
{% spacerTokensTable headline="",
    caption='',
    headingLevel="4",
    tokens="--rh-space-lg, --rh-space-2xl" %}
{% endspacerTokensTable %}
</rh-table>


## Interaction states

Interactive elements include inactive links and overflow buttons.


### Hover

Inactive links and overflow buttons have the same hover state.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../subnav-interaction-state-hover.png' | url }}" alt="Image of light theme hover states">
</uxdot-example>


### Focus

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../subnav-interaction-state-focus.png' | url }}" alt="Image of light theme focus states">
</uxdot-example>


### Active

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../subnav-interaction-state-active.png' | url }}" alt="Image of light theme active states">
</uxdot-example>
