## Style 
A timestamp is a simple line of text that displays date and time values.

### Anatomy 
{% example palette="light",
          alt="Anatomy of a timestamp which is a simple line of text showing the date first and then the time after",
          src="../timestamp-anatomy.png" %}{% endexample %}

1. Date
2. Time
{.example-notes}

## Size 
The size of a timestamp is determined by the text size it is applied to.

{% example palette="light",
          alt="Two lines of text of various sizes with timestamps applied, one is 18px and the other is 24px",
          src="../timestamp-size.png" %}{% endexample %}

## Tooltip
Two lines of text with timestamps applied, one is showing no styling and the other is showing a dashed underline.

{% example palette="light",
          alt="Light theme badges",
          src="../timestamp-style-tooltip.png" %}{% endexample %}

## Theme
A timestamp can be used in the same themes as text.

### Light theme
{% example palette="lightest", wrapperClass="example--component" %}
    <rh-timestamp></rh-timestamp>
{% endexample %}


### Dark theme
{% example palette="darkest", wrapperClass="example--component" %}
    <rh-timestamp></rh-timestamp>
{% endexample %}

## Interaction states 
If a timestamp is linked, the interaction states are the same as a link. Go to the [Link](https://ux.redhat.com/patterns/link/) page to see the interaction states.