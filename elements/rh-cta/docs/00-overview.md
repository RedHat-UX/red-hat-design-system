{% section %}
## Overview
{{tagName | getElementDescription}}

{% example palette="light",
            alt="Image of variants including Primary (red background and white text), Secondary (black border and black text), Brick (light gray border and blue text), and Default (blue text and blue icon)",
            src="../cta-sample.png" %}
{% endsection %}

{% section %}
## Sample Element
<rh-cta variant="primary">
  <a href="#primary">Primary</a>
</rh-cta>
{% endsection %}

{% section %}
## Demo
View a live version of this element to see how it can be customized.

{% playground tagName=tagName %}{% endplayground %}

{% cta href="./demo/", target="_blank" %}
  View the demo
{% endcta %}
{% endsection %}

{% section %}
## When to use 
- When you need users to navigate to a different page or domain
- When you need to arrange links in different arrangements like in a row or grid
- When you need to hide or reveal content
{% endsection %}

{% section %}
{% repoStatus type="Element" %}
{% endsection %}