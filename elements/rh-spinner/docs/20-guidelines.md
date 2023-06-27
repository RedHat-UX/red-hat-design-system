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

## Sizes

Depending on what data is being retrieved and loaded and how much space it 
occupies, use a spinner size that matches.

- The large size is the default, it can be used for whole pages or large containers
- The medium size is recommended for smaller pages or containers
- If you use the small size with a text label, it can be used in very small containers like a card
- If you use the small size without a text label, it should only be used in buttons or other containers of equal size

{% example palette="none",
          alt="Spinner usage examples; from top to bottom, an app, a dialog, a card, and a 
button showing spinners of various sizes with and without text labels",
          src="../spinner-examples.png" %}

## Orientation

A spinner is always oriented above the optional text label, if visible.

{% example palette="light",
          alt=" Two spinners; one showing the correct orientation and the other showing an incorrect orientation",
          src="../spinner-orientation.png" %}

## Text label

The text label should be as brief and general as possible in order to give users 
enough time to read it.

{% example palette="light",
          alt=" Two spinners; one with a short text label, which is acceptable, and one with a very long text label which is not acceptable",
          src="../spinner-text-label.png" %}

## Animation

The spinner animation will loop until the data is retrieved and disappears when 
it loads.

## Best practices

### Bad placement

Do not align a spinner away from the horizontal and vertical center. Keeping it 
centered helps users understand that the whole area is loading instead of one 
specific part.

{% example palette="wrong",
          alt=" A spinner not horizontally or vertically centered in a container which is incorrect usage",
          src="../spinner-best-practice-1.png" %}

### Cut off by browser window

A tooltip should not be cut off by the browser window. Change the orientation if 
it does.

{% example palette="wrong",
          alt=" A small spinner used in a large container which is incorrect usage",
          src="../spinner-best-practice-2.png" %}

### Wrong orientation

Do not change the orientation, the spinner is always positioned on top of the 
text label.

{% example palette="wrong",
          alt=" Two spinners with different orientations which is incorrect usage",
          src="../spinner-best-practice-3.png" %}

