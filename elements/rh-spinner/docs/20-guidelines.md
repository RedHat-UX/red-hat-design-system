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

### Placement

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="426px" slot="image">
      <img src="../spinner-best-practices-placement-do.svg"
            alt="spinner horizontally and vertically centered in a blank container"
            width="426"
            height="200">
    </uxdot-example>
    <p>Keep the spinner centered to help users understand that the whole area is loading.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="426px" slot="image">
      <img src="../spinner-best-practices-placement-dont.svg"
            alt="spinner in the top right quadrant of a blank container"
            width="426"
            height="200">
    </uxdot-example>
    <p>Do not align a spinner away from the horizontal and vertical center.</p>
  </uxdot-best-practice>
</div>

### Text orientation

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="224px" slot="image">
      <img src="../spinner-best-practices-text-orientation-do.svg"
            alt="Text label below the spinner"
            width="224"
            height="80">
    </uxdot-example>
    <p>Keep the spinner always positioned above the text label.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="280px" slot="image">
      <img src="../spinner-best-practices-text-orientation-dont.svg"
            alt="Text label to the right of the spinner"
            width="280"
            height="80">
    </uxdot-example>
    <p>Do not change the orientation of the text label relative to the spinner.</p>
  </uxdot-best-practice>
</div>

### Spinner size

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="426px" slot="image">
      <img src="../spinner-best-practices-spinner-size-do.svg"
            alt="Large spinner in the center of a desktop-sized screen"
            width="426"
            height="193">
    </uxdot-example>
    <p>Use a spinner size that’s proportional to the size of its container.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="426px" slot="image">
      <img src="../spinner-best-practices-spinner-size-dont.svg"
            alt="Small spinner in the center of a desktop-sized screen"
            width="426"
            height="193">
    </uxdot-example>
    <p>Avoid using a small spinner for large containers or large spinners for small containers.</p>
  </uxdot-best-practice>
</div>