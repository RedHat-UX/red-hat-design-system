{% section headline="Keyboard interactions" %}
A tooltip will appear when the trigger receives focus and disappear when moving focus away from the trigger.
{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Tooltip keyboard interaction",
          src="../tooltip-keyboard-interaction.png" %}

| Key | Result |
| --- | ------ |
| Tab | Moves moves focus to/from the tooltip |
| Esc | Closes tooltip |

{% endsection %}

{% section headline="Focus order" %}
{% include 'focusorder.md' %}

{% example palette="light",
          class="inline-flex centered",
          style="margin-block:var(--rh-space-2xl);",
          alt="Tooltip focus order",
          src="../tooltip-focus-order.png" %}
1. ...
2. ...
3. ...
{% endsection %}

{% include 'accessibility/ariaguide.md' %}

{% section %}
{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}
{% endsection %}