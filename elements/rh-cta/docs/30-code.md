{% renderInstallation %}{% endrenderInstallation %}

{% band header="Usage" %}
  ```html
  <rh-cta>
      <a href="#default">Default</a>
  </rh-cta>
  ```
{% endband %}

{% band header="Custom Light DOM CSS" %}
The CSS `:defined` pseudo-class can be used to style the call to action component to prevent cumulative layout shift, to provide minimal styling in the event that JavaScript fails to load, or to approximate a preview in a WYSIWYG content authoring environment. 

(See the following [proof-of-concept](/elements/call-to-action/demo/no-javascript-customization) and [its CSS](/elements/call-to-action/demo/nojs.css).)
{% endband %}

{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}