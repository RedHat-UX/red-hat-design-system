{% section %}
## Keyboard interactions
Only the call to action can receive focus if included.

{% example
    palette="light",
    alt="Statistic keyboard interactions; pressing Tab will focus the call to action if included and pressing Tab again will move focus to the next interactive element",
    src="../stat-keyboard-interactions.png" %}

| Key         | Result                                          |
| ----------- | ----------------------------------------------- |
| Tab         | Moves focus to the call to action (if included) |
| Enter/Space | Selects the call to action (if included)        |

{.full-width}

## Touch targets
Only the call to action is selectable if included.

{% example
    palette="light",
    alt="Statistic showing touch target size for call to action if included",
    src="../stat-a11y-touch-targets.png" %}

{% include 'accessibility/ariaguide.md' %}

{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}

{% endsection %}
