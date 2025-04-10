## Style

A statistic is a stacked combination of elements used to visualize a data point. 
By default, a statistic includes data text and body text **at a minimum**. 
Optional elements include an icon, title text, and a call to action for 
additional emphasis or context.


### Anatomy

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="388px">
    <img alt="Anatomy of a statistic with annotations; number 1 is pointing to an optional icon, number 2 is pointing to optional title text, number 3 is pointing to data text, number 4 is pointing to body text, and number 5 is pointing to an optional call to action"
         src="../stat-anatomy.png"
         width="388"
         height="271">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Icon</li>
      <li>Title text</li>
      <li>Data text</li>
      <li>Body text</li>
      <li>Call to action</li>
    </ol>
  </figcaption>
</figure>


## Sizes
There are two available sizes and the only difference is the size of some 
elements.

<uxdot-example color-palette="lightest" width-adjustment="772px">
  <img alt="Default size and Large size statistics both with icons and body text; text under the default size says ‘Default size’ and text under the large size says ‘Large size’"
       src="../stat-sizes.png"
       width="772"
       height="228">
</uxdot-example>

<rh-table>

| Size    | Element | Current value   |
|---------|---------|-----------------|
| Default | 40px    | 36px<br>2.25rem |
| Large   | 64px    | 48px<br>3.0rem  |

</rh-table>


## Color scheme
<a id="theme"></a>

A statistic is available in both light and dark color schemes. The icon, title text, 
and data text for light scheme are red whereas elements and text for dark scheme 
(not including the call to action) are white to meet accessibility contrast 
requirements.


### Light scheme

<uxdot-example color-palette="lightest" width-adjustment="346px">
  <img alt="Light scheme statistic with a red icon, red data text, and black body text"
       src="../stat-theme-light.png"
       width="346"
       height="154">
</uxdot-example>


### Dark scheme

<uxdot-example color-palette="darkest" width-adjustment="346px">
  <img alt="Dark scheme statistic with a white icon and white text styles to meet accessibility contrast requirements"
       src="../stat-theme-dark.png"
       width="346"
       height="154">
</uxdot-example>


## Configuration

### Container

By default, all elements in a statistic, no matter how many, are all stacked and 
vertically aligned. In some situations, it is acceptable to align elements to 
the left, for example if grouped statistics are used in several rows or if 
surrounding content is all left aligned.

<uxdot-example color-palette="lightest" width-adjustment="346px">
  <img alt="Statistic with a dotted vertical line through it"
       src="../stat-configuration.png"
       width="346"
       height="154">
</uxdot-example>


### Order
A statistic was designed to be read from top to bottom. If certain optional 
elements are included, the order will change.

<figure>
  <uxdot-example color-palette="lightest" width-adjustment="346px">
    <img alt="Statistic with boxes around each element slot, there are also numbers next to each box arranged 1 to 4 from top to bottom"
         src="../stat-configuration-order.png"
         width="416"
         height="271">
  </uxdot-example>
  <figcaption>
  <ol>
      <li> Icon (always ordered first if included)</li>
      <li> Title text and data text (ordered first if there is no icon)</li>
      <li> Body text (ordered last if there is no call to action)</li>
      <li> Call to action (always ordered last if included)</li>
    </ol>
  </figcaption>
</figure>


## Space

Space values are the same for both Default and Large sizes and on all
breakpoints. To see space values when statistics are used in a layout,
go to the [Guidelines](/elements/statistic/guidelines/) page.

<uxdot-example color-palette="lightest" width-adjustment="800px">
  <img alt="Default and Large size spacing between all elements"
       src="../stat-space.png"
       width="800"
       height="271">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, xl"></uxdot-spacer-tokens-table>

## Interaction states

The optional call to action is the only interactive element. Go to the
[Call to action](/elements/call-to-action/) page to view the interaction
states.

