{% section %}
## Implementation

- If you are using an SVG for the avatar, make sure it is accessible
    - See [How to create accessible SVGs](https://www.deque.com/blog/creating-accessible-svgs/) and reference the different SVG patterns
- If you are combining an avatar with another element, check accessibility guidelines for that element as well

{% endsection %}

{% section %}
## Additional guidelines

- Ensure users can navigate to the avatar via screen reader
- Ensure the avatar image has alternative text
- Ensure keyboard users should not be able to interact with the avatar on its own via <code>Tab</code> and <code>Shift+Tab</code>

{% endsection %}

{% include 'accessibility/ariaguide.md' %}

{% section %}
{% include 'accessibility/wcag.md' %}
{% include 'accessibility/2.1.1-A.md' %}
{% include 'accessibility/2.1.3-AAA.md' %}
{% include 'accessibility/2.4.3-A.md' %}
{% include 'accessibility/2.5.5-AAA.md' %}

{% endsection %}