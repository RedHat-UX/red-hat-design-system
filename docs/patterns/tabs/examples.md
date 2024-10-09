<uxdot-pattern src="./patterns/link-to-tab.html">
  <h2 slot="heading">Link to tab</h2>
  <rh-alert state="warning">
    Use this pattern sparingly. If your tabs serve only as page navigation,
    use the <a href="/elements/subnavigation">Subnav</a> element instead.
  </rh-alert>
  <p>Use to activate a particular tab when the page's URL hash refers to an element
  within the tab panel, or to the tab itself.</p>
</uxdot-pattern>

<nav id="simulate-nav" aria-labelledby="simulate-nav-heading">
  <h3 id="simulate-nav-heading">Navigate to tab</h3>
  <ul>
    <li><a href="#north">North tab</a></li>
    <li><a href="#south">South tab</a></li>
    <li><a href="#east">East tab</a></li>
    <li><a href="#west">West tab</a></li>
    <li><a href="#best">Content inside the West tab</a></li>
  </ul>
</nav>

{% include './patterns/link-to-tab.html' %}

<uxdot-pattern src="./patterns/code-tabs.html">
  <h2 slot="heading">Code Tabs</h2>

  <p>Use this pattern to display highlighted code blocks of one or more
     languages, for example: the HTML, CSS, and JavaScript needed to implement a
     pattern.</p>

</uxdot-pattern>

