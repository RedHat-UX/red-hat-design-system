{% renderInstallation %}
~~~html
<link rel="stylesheet" href="/path/to/rhds/elements/rh-navigation-secondary/rh-navigation-secondary-lightdom.css">
~~~
<sup>**</sup>Required LightDOM CSS
{% endrenderInstallation %}

{% section headline="Usage", headingLevel="2" -%}

{% htmlexample %}
<rh-navigation-secondary role="navigation">
  <a href="#" slot="logo" id="logo-id">
    Logo/Title
  </a>
  <ul slot="nav" aria-labelledby="logo-id">
    <li>
      <rh-navigation-secondary-dropdown>
        <a href="#dropdown-fallback-url" slot="link">Dropdown</a>
        <rh-navigation-secondary-menu slot="menu">
          <rh-navigation-secondary-menu-section>
            <h3 slot="header">Section</h3>
            <ul slot="links">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
            <rh-cta slot="cta">
              <a href="#">Section CTA</a>
            </rh-cta>
          </rh-navigation-secondary-menu-section>
          <rh-navigation-secondary-menu-section>
            <h3 slot="header">Section</h3>
            <ul slot="links">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
            <rh-cta slot="cta">
              <a href="#">Section CTA</a>
            </rh-cta>
          </rh-navigation-secondary-menu-section>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
    </li>
    <li>
      <rh-navigation-secondary-dropdown>
        <a href="#dropdown-fallback-url" slot="link">Dropdown</a>
        <rh-navigation-secondary-menu slot="menu">
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
    </li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
  <rh-cta slot="cta">
    <a href="#">Call to Action</a>
  </rh-cta>
</rh-navigation-secondary>
{% endhtmlexample %}

{% endsection %}

{% section headline="&lt;rh-navigation-secondary&gt;", headingLevel="2" -%}  

    {% renderSlots for='rh-navigation-secondary', level=3 %}{% endrenderSlots %}

    {% renderAttributes for='rh-navigation-secondary', level=3 %}{% endrenderAttributes %}

    {% renderMethods for='rh-navigation-secondary', level=3 %}{% endrenderMethods %}

    {% renderEvents for='rh-navigation-secondary', level=3 %}{% endrenderEvents %}

    {% renderCssParts for='rh-navigation-secondary', level=3 %}{% endrenderCssParts %}

    {% renderCssCustomProperties for='rh-navigation-secondary', level=3 %}{% endrenderCssCustomProperties %}
     
{% endsection %}

{% section headline="&lt;rh-navigation-secondary-dropdown&gt;", headingLevel="2" -%}  
  
    {% renderSlots for='rh-navigation-secondary-dropdown', level=3 %}{% endrenderSlots %}
  
    {% renderAttributes for='rh-navigation-secondary-dropdown', level=3 %}{% endrenderAttributes %}
  
    {% renderMethods for='rh-navigation-secondary-dropdown', level=3 %}{% endrenderMethods %}

    {% renderEvents for='rh-navigation-secondary-dropdown', level=3 %}{% endrenderEvents %}

    {% renderCssParts for='rh-navigation-secondary-dropdown', level=3 %}{% endrenderCssParts %}

    {% renderCssCustomProperties for='rh-navigation-secondary-dropdown', level=3 %}{% endrenderCssCustomProperties %}
    
{% endsection %}

{% section headline="&lt;rh-navigation-secondary-menu&gt;", headingLevel="2" -%}  
  
    {% renderSlots for='rh-navigation-secondary-menu', level=3 %}{% endrenderSlots %}

    {% renderAttributes for='rh-navigation-secondary-menu', level=3 %}{% endrenderAttributes %}

    {% renderMethods for='rh-navigation-secondary-menu', level=3 %}{% endrenderMethods %}

    {% renderEvents for='rh-navigation-secondary-menu', level=3 %}{% endrenderEvents %}

    {% renderCssParts for='rh-navigation-secondary-menu', level=3 %}{% endrenderCssParts %}
  
    {% renderCssCustomProperties for='rh-navigation-secondary-menu', level=3 %}{% endrenderCssCustomProperties %}
    
{% endsection %}

{% section headline="&lt;rh-navigation-secondary-menu-section&gt;", headingLevel="2" -%}  
  
    {% renderSlots for='rh-navigation-secondary-menu-section', level=3 %}{% endrenderSlots %}

    {% renderAttributes for='rh-navigation-secondary-menu-section', level=3 %}{% endrenderAttributes %}

    {% renderMethods for='rh-navigation-secondary-menu-section', level=3 %}{% endrenderMethods %}
   
    {% renderEvents for='rh-navigation-secondary-menu-section', level=3 %}{% endrenderEvents %}

    {% renderCssParts for='rh-navigation-secondary-menu-section', level=3 %}{% endrenderCssParts %}

    {% renderCssCustomProperties for='rh-navigation-secondary-menu-section', level=3 %}{% endrenderCssCustomProperties %}
    
{% endsection %}
