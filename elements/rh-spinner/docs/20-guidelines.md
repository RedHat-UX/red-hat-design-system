{% section %}
## Guidelines

The spinner is used to show that a page or section is loading after a user takes action. A spinner should be used when:

- loading is expected to take fewer than ten seconds or
- the structure or amount of content that’s loading is unknown.

### Adding a text label

Keep the text label brief to give users enough time to read it. A maximum character count of about 30 characters should meet this requirement.

### Sizing

The spinner comes in large, medium, and small.

- The **large spinner** is the default size. This works well for whole pages or containers that are wider than 768px.
- The **medium spinner** is recommended for containers that are smaller than 768px.
- The **small spinner** without a text label should be used only in buttons or other elements of a similar size. If the small spinner will include a text label, it can be used in containers that are up to 360px wide, like a card.
{% endsection %}

{% section %}
## Behavior

### Animation

The spinner animation will loop for as long as the content takes to load. The spinner will disappear once content begins to load.
{% endsection %}

{% section %}
## Best practices

### Placement

Do not position a spinner anywhere other than vertically and horizontally centered. Keeping it centered should help the user understand that the whole area needs to load.

{% example palette="wrong",
           width=360,
           alt="Spinner is centered horizontally but not vertically in blank card",
           src="../spinner-best-practices-placement.png" %}

### Using the small spinner

Do not use a small spinner, especially without a text label, in large containers or for full pages. Doing this may make it harder for the user to spot.

{% example palette="wrong",
           width=871,
           alt="Small spinner in the middle of a blank page",
           src="../spinner-best-practices-small-spinner.png" %}
{% endsection %}

{% include 'feedback.html' %}