
{% section  %}
## Keyboard accessibility

![Keyboard command for button]({{ './button-keyboard.svg' | url }}) {style="--inline-img-max-width: 604px;"}

| Key | Result |
| --- | ------ |
| Tab | Moves moves focus to/from the button group |
| Arrow keys | Moves moves focus from one button to another in the group |

{% endsection %}
{% section  %}
## Focus order
A logical focus order helps keyboard users operate our websites. Elements need to receive focus in an order that preserves meaning, therefore the focus order should make sense and not jump around randomly. Interactive elements within expanded sections are automatically added to the focus order.

![Focus order for button]({{ './button-focus-order.svg' | url }}) {style="--inline-img-max-width: 604px;"}

{% endsection %}
{% section  %}
## Touch targets

![Touch targets for button]({{ './button-touch-targets.svg' | url }}) {style="--inline-img-max-width: 604px;"}

{% endsection %}
{% section  %}
## Additional guidelines

- guideline
- guideline

{% endsection %}
{% section  %}
## Resources
[W3C WAI-ARIA Tab Design Pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel) covers the usage of ARIA names, state and roles, as well as the expected keyboard interactions.
- Keyboard interactions ([2.1.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html), Level A and [2.1.3](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html), Level AAA)
- Focus order ([2.4.3](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html), Level A) 
- Touch targets ([2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html), Level AAA)

{% endsection %}