## Usage

Use a spinner to show that something is loading after a user takes action.

### When to use a spinner

When users advance to a new page and the structure is unknown both in quantity 
and shape, use a spinner. If users expect to see components on a new screen 
after they perform an action, a Skeleton should be used instead in order to 
reflect the structure. If the wait time after performing an action is less than 
a few seconds, a spinner should be used. For experiences that need longer than a 
few seconds to load, use a Progress bar instead. Lastly, when the result of an 
experience has no data or the screen is empty, use an Empty state instead.

### Character count

The text label should be as brief and general as possible in order to give users 
enough time to read it.

<uxdot-example width-adjustment="721px">
  <img src="../spinner-text-label.png"
        alt="Two spinners; one with a short text label, which is acceptable, and one with a very long text label which is not acceptable"
        width="721"
        height="133">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Text label</td>
        <td data-label="Character count">30</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Sizes

Depending on what data is being retrieved and loaded and how much space it 
occupies, use a spinner size that matches.

- The large size is the default, it can be used for whole pages or large containers
- The medium size is recommended for smaller pages or containers
- If you use the small size with a text label, it can be used in very small containers like a card
- If you use the small size without a text label, it should only be used in buttons or other containers of equal size

<uxdot-example width-adjustment="992px" variant="full" alignment="left" no-border>
  <img src="../spinner-examples.png"
        alt="Spinner usage examples; from top to bottom, an app, a dialog, a card, and a 
button showing spinners of various sizes with and without text labels"
        width="992"
        height="992">
</uxdot-example>


## Orientation

A spinner is always oriented above the optional text label, if visible.

<uxdot-example width-adjustment="583px">
  <img src="../spinner-orientation.png"
        alt="Two spinners; one showing the correct orientation and the other showing an incorrect orientation"
        width="583"
        height="133">
</uxdot-example>


## Animation

The spinner animation will loop until the data is retrieved and disappears when 
it loads.

## Best practices

### Bad placement

Do not align a spinner away from the horizontal and vertical center. Keeping it 
centered helps users understand that the whole area is loading instead of one 
specific part.

<uxdot-example width-adjustment="360px" danger>
  <img src="../spinner-best-practice-1.png"
        alt="A spinner not horizontally or vertically centered in a container which is incorrect usage"
        width="360"
        height="360">
</uxdot-example>


### Cut off by browser window

A tooltip should not be cut off by the browser window. Change the orientation if 
it does.

<uxdot-example width-adjustment="768px" danger>
  <img src="../spinner-best-practice-2.png"
        alt="A small spinner used in a large container which is incorrect usage"
        width="768"
        height="480">
</uxdot-example>


### Wrong orientation

Do not change the orientation, the spinner is always positioned on top of the 
text label.

<uxdot-example width-adjustment="583px" danger>
  <img src="../spinner-best-practice-3.png"
        alt="Two spinners with different orientations which is incorrect usage"
        width="583"
        height="77">
</uxdot-example>
