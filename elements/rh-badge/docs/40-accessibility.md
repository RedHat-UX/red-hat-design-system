## Implementation 
- To provide context to your badge, it is encouraged to include an <code>aria-label</code> attribute in the markup
- Ensure the badge itself is not interactive and cannot have focus
- Ensure badge information is not conveyed by color only like a read or unread badge
- Ensure that surrounding content can convey the purpose of a badge to users via assistive technologies

{% set related = 'rh-avatar, rh-button, rh-tag' %}
{% include 'feedback.html' %}
