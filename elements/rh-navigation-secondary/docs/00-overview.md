{% section %}
## Overview
{{ tagName | getElementDescription }}

  ## Sample component

  {% example palette="light",
      alt="Image of two stacked secondary navigations; one for large breakpoints and the other for small breakpoints",
      src="./nav-secondary-sample.png" %}

  ## Demo

  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}View the  demo{% endcta %}

  ## When to use
  
  - When you need to better organize a content structure
  - When you need to provide a more granular navigation that is specific to a topic
  - When you need to prevent other navigations from getting overloaded

  ## Repo status 
  Learn more about our various code repos by visiting this page.
  
  {% repoStatus type="Element" %}

{% endsection %}

[nav-secondary-sample]: {{ './nav-secondary-sample.png' | url }}