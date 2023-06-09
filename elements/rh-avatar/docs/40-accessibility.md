
## Implementation

  - If you are using an SVG for the avatar, make sure it is accessible
    - See [How to create accessible SVGs][svg] and reference the different SVG 
      patterns
  - If you are combining an avatar with another element, check accessibility 
    guidelines for that element as well



## Additional guidelines

  - Ensure users can navigate to the avatar via screen reader
  - Ensure the avatar image has alternative text
  - Ensure keyboard users should not be able to interact with the avatar on its 
    own via `Tab` and `Shift+Tab`


{% include 'accessibility/ariaguide.md' %}

  {% include 'accessibility/wcag.md' %}
  {% include 'accessibility/2.1.1-A.md' %}
  {% include 'accessibility/2.1.3-AAA.md' %}
  {% include 'accessibility/2.4.3-A.md' %}
  {% include 'accessibility/2.5.5-AAA.md' %}

[svg]: https://www.deque.com/blog/creating-accessible-svgs/
