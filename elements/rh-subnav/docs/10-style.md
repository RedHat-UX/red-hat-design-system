## Style

A subnavigation is visually similar to tabs, but the text labels are links 
instead. They are arranged horizontally on a thin bar with no other styling 
except for the active page accent.

### Anatomy

<figure>
  <uxdot-example width-adjustment="872px">
    <img src="../subnav-anatomy.png"
        alt="Anatomy image showing a subnavigation with various annotation numbers"
        width="872"
        height="178">
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
  <img src="../subnav-theme-light.png"
        alt="Image of light theme desktop and mobile subnavigations"
        width="872"
        height="178">
</uxdot-example>


## Configuration

Each link container is the same height as the bar.

<uxdot-example width-adjustment="872px">
  <img src="../subnav-configuration.png"
        alt="Image of desktop and mobile subnavigations with various specs like height, width, and more"
        width="872"
        height="203">
</uxdot-example>


## Space

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>To view inset spacing when a subnavigation is used below the primary navigation or a heading, go to the Guidelines page.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../subnav-space.png"
        alt="Image of desktop and mobile subnavigations with spacing values in between"
        width="872"
        height="176">
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
  <img src="../subnav-interaction-state-hover.png"
        alt="Image of light theme hover states"
        width="872"
        height="176">
</uxdot-example>


### Focus

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../subnav-interaction-state-focus.png"
        alt="Image of light theme focus states"
        width="872"
        height="176">
</uxdot-example>


### Active

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../subnav-interaction-state-active.png"
        alt="Image of light theme active states"
        width="872"
        height="176">
</uxdot-example>
