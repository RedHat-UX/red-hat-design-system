
## Style

Tabs are used to group related content allowing users to navigate a view without leaving the page) Each tab is a text label placed in a visible or invisible container. There are two variants in two orientations and some of the styles and padding shift slightly depending on which variant is used.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="872px">
    <img alt="Image of tabs anatomy showing horizontal and vertical open tabs and box tabs with lots of annotations"
         src="../tabs-anatomy.png"
         width="872"
         height="1093">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Active tab</li>
      <li>Active tab accent</li>
      <li>Inactive tab</li>
      <li>Divider line</li>
      <li>Content area</li>
      <li>Overflow button - left</li>
      <li>Overflow button - right</li>
      <li>Inactive tab surface</li>
    </ol>
  </figcaption>
</figure>

### Variants

There are two available variants. Open tabs has a more understated style whereas Box tabs has a more traditional style.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs on top and box tabs below"
       src="../tabs-variations.png">
</uxdot-example>


### Orientations

There are two available orientations and the only difference is padding.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of horizontal, vertical, and tabs with overflow buttons showing padding spacers"
       src="../tabs-orientation.png"
       width="872"
       height="712">
</uxdot-example>


## Color scheme
<a id="theme"></a>

Both variants and orientations are available for both light and dark schemes.

### Light theme

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of light theme tabs"
       src="../tabs-theme-light.png"
       width="872"
       height="709">
</uxdot-example>

<rh-table>

| Property                                            | Light theme |
|-----------------------------------------------------|-------------|
| Color - active tab text                             | \#151515    |
| Color - active tab accent                           | \#EE0000    |
| Color - active tab surface (Box tabs only)          | \#FFFFFF    |
| Color - inactive tab text                           | \#4D4D4D    |
| Color - inactive tab surface (Box tabs only)        | \#F2F2F2    |
| Color - disabled chevron icon                       | \#C7C7C7    |
| Color - active chevron icon                         | \#151515    |
| Color - chevron button surface                      | \#FFFFFF    |
| Border width - active tab and chevron button accent | 4px         |
| Border width - divider line and borders             | 1px         |

</rh-table>


### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of dark theme tabs"
       src="../tabs-theme-dark.png"
       width="872"
       height="709">
</uxdot-example>

<rh-table>

| Property                                            | Dark theme |
|-----------------------------------------------------|------------|
| Color - active tab text                             | \#FFFFFF   |
| Color - active tab accent                           | \#FF542E   |
| Color - active tab surface (Box tabs only)          | \#151515   |
| Color - inactive tab text                           | \#C7C7C7   |
| Color - inactive tab surface (Box tabs only)        | \#292929   |
| Color - disabled chevron icon                       | \#707070   |
| Color - active chevron icon                         | \#FFFFFF   |
| Color - chevron button surface                      | \#151515   |
| Border width - active tab and chevron button accent | 4px        |
| Border width - divider line and borders             | 1px        |

</rh-table>


## Configuration

The panel for both orientations of tabs does not have a maximum height and should not scroll.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of horizontal and vertical tabs construction; several examples showing details like alignment, height, width, and more"
       src="../tabs-configuration.png"
       width="872"
       height="668">
</uxdot-example>


### Overflow buttons

Overflow buttons are containers with chevron icons that are added to tabs on small breakpoints.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of horizontal and vertical tabs with overflow buttons showing padding spacers"
       src="../tabs-configuration-overflow-buttons.png"
       width="544"
       height="232">
</uxdot-example>


## Space

Box tabs are separated by a 1px divider.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs spacing for all sizes and orientations"
       src="../tabs-space-open.png"
       width="872"
       height="289">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of box tabs spacing for all sizes and orientations"
       src="../tabs-space-box.png"
       width="872"
       height="388">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, lg, 2xl"></uxdot-spacer-tokens-table>

## Interaction states

Interactive elements include inactive tabs and overflow buttons.


### Hover - Open tabs

Inactive tabs and overflow buttons have the same hover state.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of light theme open tabs hover states"
       src="../tabs-open-interaction-state-hover-theme-light.png"
       width="872"
       height="289">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of dark theme open tabs hover states"
       src="../tabs-open-interaction-state-hover-theme-dark.png"
       width="872"
       height="289">
</uxdot-example>


### Hover - Box tabs

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of light theme box tabs hover states"
       src="../tabs-box-interaction-state-hover-theme-light.png"
       width="872"
       height="356">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of dark theme box tabs hover states"
       src="../tabs-box-interaction-state-hover-theme-dark.png"
       width="872"
       height="356">
</uxdot-example>

<rh-table>

| Property                      | Light theme | Dark theme |
|-------------------------------|-------------|------------|
| Color - accent                | \#707070    | \#C7C7C7   |
| Color - text and chevron icon | \#FFFFFF    | \#151515   |

</rh-table>


### Focus - Open tabs

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of light theme open tabs focus states"
       src="../tabs-open-interaction-state-focus-theme-light.png"
       width="872"
       height="289">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of dark theme open tabs focus states"
       src="../tabs-open-interaction-state-focus-theme-dark.png"
       width="872"
       height="289">
</uxdot-example>


### Focus - Box tabs

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of light theme box tabs focus states"
       src="../tabs-box-interaction-state-focus-theme-light.png"
       width="872"
       height="356">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of dark theme box tabs focus states"
       src="../tabs-box-interaction-state-focus-theme-dark.png"
       width="872"
       height="356">
</uxdot-example>

<rh-table>

| Property           | Light theme | Dark theme |
|--------------------|-------------|------------|
| Color - focus ring | \#0066CC    | \#73BCF7   |

</rh-table>


### Active - Open tabs
<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of light theme open tabs active states"
       src="../tabs-open-interaction-state-active-theme-light.png"
       width="872"
       height="289">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of dark theme open tabs active states"
       src="../tabs-open-interaction-state-active-theme-dark.png"
       width="872"
       height="289">
</uxdot-example>


### Active - Box tabs

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Active state has the same styles as the Hover state.</p> 
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of light theme box tabs active states"
       src="../tabs-box-interaction-state-active-theme-light.png"
       width="872"
       height="356">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of dark theme box tabs active states"
       src="../tabs-box-interaction-state-active-theme-dark.png"
       width="872"
       height="356">
</uxdot-example>

<rh-table>

| Property           | Light theme | Dark theme |
|--------------------|-------------|------------|
| Color - focus ring | \#0066CC    | \#73BCF7   |

</rh-table>
