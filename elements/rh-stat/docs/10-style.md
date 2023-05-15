## Style
A statistic is a stacked combination of elements used to visualize a data point. By default, a statistic includes data text and body text <strong>at a minimum</strong>. Optional elements include an icon, title text, and a call to action for additional emphasis or context.

### Anatomy
{% example palette="light",
           width=388,
           alt="Anatomy of a statistic with annotations; number 1 is pointing to an optional icon, number 2 is pointing to optional title text, number 3 is pointing to data text, number 4 is pointing to body text, and number 5 is pointing to an optional call to action",
           src="../stat-anatomy.png" %}

1) Optional icon
2) Optional title text
3) Data text
4) Body text
5) Optional call to action

## Sizes
There are two available sizes and the only difference is the size of some elements.

[stat-sizes.png / max-width: 772px;]
Alt text: Default size and Large size statistics both with icons and body text; text under the default size says ‘Default size’ and text under the large size says ‘Large size’

{% example palette="light",
           width=772,
           alt="Default size and Large size statistics both with icons and body text; text under the default size says ‘Default size’ and text under the large size says ‘Large size’",
           src="../stat-sizes.png" %}

<table>
  <thead>
    <tr>
      <th>Size</th>
      <th>Element</th>
      <th>Current Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Default</td>
      <td>Icon size</td>
      <td>40px</td>
    </tr>
    <tr>
      <td>Default</td>
      <td>Data text size</td>
      <td>36px / 2.25rem</td>
    </tr>
    <tr>
      <td>Large</td>
      <td>Icon size</td>
      <td>64px</td>
    </tr>
    <tr>
      <td>Large</td>
      <td>Data text size</td>
      <td>48px / 3.0rem</td>
    </tr>
  </tbody>
</table>

## Theme

A statistic is available in both light and dark themes. The icon, title text, and data text for light theme are red whereas elements and text for dark theme (not including the call to action) are white to meet accessibility contrast requirements.

### Light theme 

{% example 
  palette="light",
  width=346,
  alt="Light theme statistic with a red icon, red data text, and black body text",
  src="../stat-theme-light.png" %}


### Dark theme 

{% example 
  palette="darkest",
  width=346,
  alt="Dark theme statistic with a white icon and white text styles to meet accessibility contrast requirements",
  src="../stat-theme-dark.png" %}


## Configuration 
### Container 

By default, all elements in a statistic, no matter how many, are all stacked and vertically aligned. In some situations, it is acceptable to align elements to the left, for example if grouped statistics are used in several rows or if surrounding content is all left aligned.

{% example 
  palette="light",
  width=346,
  alt="Statistic with a dotted vertical line through it",
  src="../stat-configuration.png" %}


### Order 
A statistic was designed to be read from top to bottom. If certain optional elements are included, the order will change.

{% example 
  palette="light",
  width=416,
  alt="Statistic with boxes around each element slot, there are also numbers next to each box arranged 1 to 4 from top to bottom",
  src="../stat-configuration-order.png" 
%}

1) Icon (always ordered first if included)
2) Title text and data text (ordered first if there is no icon)
3) Body text (ordered last if there is no call to action)
4) Call to action (always ordered last if included)

## Space 
Space values are the same in both default and large sizes and on all breakpoints. To see padding values when statistics are used in a layout, go to the Guidelines page.

{% example 
  palette="light",
  width=800,
  alt="Default and Large size spacing between all elements",
  src="../stat-space.png"
%}

<table>
  <thead>
    <tr>
      <th>Spacer</th>
      <th>Current value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      <img src="../stat-8px-spacer.png" alt="8px spacer" width="17">
      </td>
      <td>8px</td>
    </tr>
    <tr>
      <td>
      <img src="../stat-24px-spacer.png" alt="24px spacer" width="24">
      </td>
      <td>24px</td>
    </tr>
  </tbody>
</table>

## Interaction states
The optional call to action is the only interactive element. Go to the <a href="../../call-to-action">Call to action</a> page to view its interaction states.
  
