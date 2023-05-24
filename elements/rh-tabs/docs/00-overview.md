Tabs are used to organize and navigate between sections of content. They feature 
a horizontal or a vertical list of section text labels with a content panel 
below or to the right of the component.

{% section %}
  ## Sample component

  ### Open tabs

  <rh-tabs>
    <rh-tab slot="tab">Consequat nisi</rh-tab>
    <rh-tab-panel>
      <h4>Tab heading 1</h4>
      <p>Mi ut adipiscing nec porttitor a dis tempor mauris maecenas ullamcorper 
      nisi vulputate mus massa augue et parturient felis luctus 
      adipiscing.Vivamus suspendisse fringilla a dictum justo diam vestibulum et 
      mollis magna mus natoque a potenti nam.</p>
      <rh-cta>
        <a href="#">Learn more</a>
      </rh-cta>
    </rh-tab-panel>
    <rh-tab slot="tab">Minim elit</rh-tab>
    <rh-tab-panel>
        <h4>Tab heading 2</h4>
        <p>Fugiat ullamco qui occaecat Lorem qui pariatur quis cillum. Duis 
        commodo dolor ad anim cillum. Incididunt elit ullamco in laborum in. 
        Dolor ipsum laborum nisi exercitation do aute velit. Elit veniam velit 
        qui ex ullamco.</p>
        <rh-cta>
          <a href="#">Get started</a>
        </rh-cta>
    </rh-tab-panel>
    <rh-tab slot="tab">Officia duis</rh-tab>
    <rh-tab-panel>
      <h4>Tab heading 3</h4>
      <p>Erat malesuada a nisl ornare nam per urna in nam conubia vulputate 
      ullamcorper felis vestibulum leo massa massa tincidunt adipiscing 
      porttitor cubilia mattis semper ultrices felis habitasse a semper 
      a.Condimentum ridiculus nisl ullamcorper adipiscing natoque adipiscing 
      quam litora a suspendisse a torquent tincidunt diam ornare at.</p>
      <rh-cta>
        <a href="#">View the info</a>
      </rh-cta>
    </rh-tab-panel>
  </rh-tabs>

  ### Box tabs

  <rh-tabs box="inset">
    <rh-tab slot="tab">Consequat nisi</rh-tab>
    <rh-tab-panel>
      <h4>Tab heading 1</h4>
      <p>Mi ut adipiscing nec porttitor a dis tempor mauris maecenas 
      ullamcorper nisi vulputate mus massa augue et parturient felis luctus 
      adipiscing.Vivamus suspendisse fringilla a dictum justo diam vestibulum 
      et mollis magna mus natoque a potenti nam.</p>
      <rh-cta>
        <a href="#">Learn more</a>
      </rh-cta>
    </rh-tab-panel>
    <rh-tab slot="tab">Minim elit</rh-tab>
    <rh-tab-panel>
      <h4>Tab heading 2</h4>
      <p>Fugiat ullamco qui occaecat Lorem qui pariatur quis cillum. Duis 
      commodo dolor ad anim cillum. Incididunt elit ullamco in laborum in. 
      Dolor ipsum laborum nisi exercitation do aute velit. Elit veniam velit 
      qui ex ullamco.</p>
      <rh-cta>
        <a href="#">Get started</a>
      </rh-cta>
    </rh-tab-panel>
    <rh-tab slot="tab">Officia duis</rh-tab>
    <rh-tab-panel>
      <h4>Tab heading 3</h4>
      <p>Erat malesuada a nisl ornare nam per urna in nam conubia vulputate 
      ullamcorper felis vestibulum leo massa massa tincidunt adipiscing 
      porttitor cubilia mattis semper ultrices felis habitasse a semper 
      a.Condimentum ridiculus nisl ullamcorper adipiscing natoque adipiscing 
      quam litora a suspendisse a torquent tincidunt diam ornare at.</p>
      <rh-cta>
        <a href="#">View the info</a>
      </rh-cta>
    </rh-tab-panel>
  </rh-tabs>


  {% repoStatus %}

  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-tabs>` demo in a new tab
  {% endcta %}
{% endsection %}


<!-- TODO: when tokens docs lands, move this to 'imports' frontmatter key -->
<script type="importmap">{{ importMap | dump | safe }}</script>
<script async src="https://ga.jspm.io/npm:es-module-shims@1.6.1/dist/es-module-shims.js"></script>
<script type="module">
import '@patternfly/elements/pf-tabs/pf-tabs.js';
</script>

