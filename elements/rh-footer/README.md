# `<rh-footer>` Red Hat Unified Global Footer

Docs pending, please see the [demo implementation](https://github.com/RedHat-UX/red-hat-design-system/blob/main/elements/rh-footer/demo/rh-footer.html)

## Installation
If using npm/bundlers:
```bash
npm install @rhds/elements
```
```js
import '@rhds/elements/rh-footer/rh-footer.js';
```

Via CDN with import maps (_recommended_):
```html
<!--
  JSPM Generator Import Map
  Edit URL: https://generator.jspm.io/#U2VjYGBiDs0rySzJSU1hcCjKSCnWT81JzU3NKyl2MNQz0DPQTUotSdQzxSenX5Shm5afX5JahGDpZRUDAFWmhHZdAA
-->
<script type="importmap">
{
  "imports": {
    "@rhds/elements": "https://ga.jspm.io/npm:@rhds/elements@1.0.0-beta.5/rhds.min.js",
    "@rhds/elements/rh-footer/rh-footer.js": "https://ga.jspm.io/npm:@rhds/elements@1.0.0-beta.5/elements/rh-footer/rh-footer.js"
  },
  "scopes": {
    "https://ga.jspm.io/": {
      "@lit/reactive-element": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/reactive-element.js",
      "@lit/reactive-element/decorators/custom-element.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/decorators/custom-element.js",
      "@lit/reactive-element/decorators/event-options.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/decorators/event-options.js",
      "@lit/reactive-element/decorators/property.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/decorators/property.js",
      "@lit/reactive-element/decorators/query-all.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/decorators/query-all.js",
      "@lit/reactive-element/decorators/query-assigned-elements.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/decorators/query-assigned-elements.js",
      "@lit/reactive-element/decorators/query-assigned-nodes.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/decorators/query-assigned-nodes.js",
      "@lit/reactive-element/decorators/query-async.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/decorators/query-async.js",
      "@lit/reactive-element/decorators/query.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/decorators/query.js",
      "@lit/reactive-element/decorators/state.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/decorators/state.js",
      "@lrnwebcomponents/code-sample": "https://ga.jspm.io/npm:@lrnwebcomponents/code-sample@4.0.24/code-sample.js",
      "@patternfly/pfe-accordion": "https://ga.jspm.io/npm:@patternfly/pfe-accordion@2.0.0-next.4/pfe-accordion.js",
      "@patternfly/pfe-collapse/pfe-collapse-panel.js": "https://ga.jspm.io/npm:@patternfly/pfe-collapse@2.0.0-next.2/pfe-collapse-panel.js",
      "@patternfly/pfe-core": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/core.js",
      "@patternfly/pfe-core/controllers/logger.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/controllers/logger.js",
      "@patternfly/pfe-core/controllers/slot-controller.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/controllers/slot-controller.js",
      "@patternfly/pfe-core/decorators.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/decorators.js",
      "@patternfly/pfe-core/decorators/bound.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/decorators/bound.js",
      "@patternfly/pfe-core/functions/deprecatedCustomEvent.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/functions/deprecatedCustomEvent.js",
      "@patternfly/pfe-core/functions/random.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/functions/random.js",
      "@patternfly/pfe-icon": "https://ga.jspm.io/npm:@patternfly/pfe-icon@2.0.0-next.2/pfe-icon.js",
      "lit": "https://ga.jspm.io/npm:lit@2.2.4/index.js",
      "lit-element/lit-element.js": "https://ga.jspm.io/npm:lit-element@3.2.0/development/lit-element.js",
      "lit-html": "https://ga.jspm.io/npm:lit-html@2.2.4/development/lit-html.js",
      "lit-html/directives/style-map.js": "https://ga.jspm.io/npm:lit-html@2.2.4/development/directives/style-map.js",
      "lit-html/static.js": "https://ga.jspm.io/npm:lit-html@2.2.4/development/static.js",
      "lit/decorators.js": "https://ga.jspm.io/npm:lit@2.2.4/decorators.js",
      "lit/directives/style-map.js": "https://ga.jspm.io/npm:lit@2.2.4/directives/style-map.js",
      "lit/static-html.js": "https://ga.jspm.io/npm:lit@2.2.4/static-html.js"
    }
  }
}
</script>

<!-- ES Module Shims: Import maps polyfill for modules browsers without import maps support (all except Chrome 89+) -->
<script async src="https://ga.jspm.io/npm:es-module-shims@1.5.1/dist/es-module-shims.js" crossorigin="anonymous"></script>
  
<script type="module">
  import '@rhds/elements/rh-footer/rh-footer.js';
  await customElements.whenDefined('rh-footer');
  console.log('Footer is now available and upgraded');
</script>
```

Via Module-transforming CDN:
```html
<script type="module">
  import 'https://jspm.dev/@rhds/elements@1.0.0-beta.5/rh-footer/rh-footer.js';
  await customElements.whenDefined('rh-footer');
  console.log('Footer is now available and upgraded');
</script>
````

## Questions and Feedback
Questions? Comments? Feedback? Need help installing or implementing?
Please [open a discussion thread](https://github.com/orgs/RedHat-UX/discussions/categories/q-a) here on GitHub. The Design Systems team will help 

## Example

```html
<rh-footer>
  <a slot="logo" href="/en">
    <img src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"
         alt="Red Hat logo"
         loading="lazy" />
  </a>
  <h3 slot="links">Products</h3>
  <ul slot="links">
    <li><a href="https://www.redhat.com/en/technologies/management/ansible">Red Hat Ansible Automation Platform</a></li>
    <li><a href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux">Red Hat Enterprise Linux</a></li>
    <li><a href="https://www.redhat.com/en/technologies/cloud-computing/openshift">Red Hat OpenShift</a></li>
    <li><a href="https://www.redhat.com/en/technologies/cloud-computing/openshift-data-foundation">Red Hat OpenShift Data Foundation</a></li>
    <li><a href="https://www.redhat.com/en/technologies/linux-platforms/openstack-platform">Red Hat OpenStack Platform</a></li>
    <li><a href="https://www.redhat.com/en/technologies/all-products">See all products</a></li>
  </ul>
  <h3 slot="links">Tools</h3>
  <ul slot="links">
    <li><a href="https://sso.redhat.com/">My account</a></li>
    <li><a href="https://access.redhat.com/">Customer support</a></li>
    <li><a href="https://connect.redhat.com/">Partner resources</a></li>
    <li><a href="https://developers.redhat.com/">Developer resources</a></li>
    <li><a href="https://www.redhat.com/en/services/training-and-certification">Training and certification</a></li>
    <li><a href="https://learn.redhat.com/">Learning community</a></li>
    <li><a href="https://catalog.redhat.com/">Red Hat Ecosystem Catalog</a></li>
    <li><a href="https://www.redhat.com/en/resources">Resource library</a></li>
  </ul>
  <h3 slot="links">Try, buy, sell</h3>
  <ul slot="links">
    <li><a href="https://www.redhat.com/en/products/trials">Product trial center</a></li>
    <li><a href="https://www.redhat.com/en/store">Red Hat Store</a></li>
    <li><a href="https://marketplace.redhat.com/">Red Hat Marketplace</a></li>
    <li><a href="https://www.redhat.com/en/about/japan-buy">Buy online (Japan)</a></li>
    <li><a href="http://redhat.force.com/finder/">Find a partner</a></li>
    <li><a href="https://www.redhat.com/en/contact">Contact sales</a></li>
    <li><a href="https://www.redhat.com/en/services/training-and-certification/contact-us">Contact training</a></li>
    <li><a href="https://www.redhat.com/en/services/consulting-overview#contact-us">Contact consulting</a></li>
  </ul>
  <h3 id="communicate" slot="links">Communicate</h3>
  <ul slot="links">
    <li><a href="https://www.redhat.com/en/contact">Contact us</a></li>
    <li><a href="https://www.redhat.com/en/about/feedback">Feedback</a></li>
    <li><a href="https://www.redhat.com/en/about/social">Social</a></li>
    <li><a href="https://engage.redhat.com/Global-Preference-Center?newsletter=RH-Shares&intcmp=7016000000154xCAAQ">Red Hat newsletter</a></li>
  </ul>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">About Red Hat</h3>
    <p>We’re the world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies. We help you standardize across environments, develop cloud-native applications, and integrate, automate, secure, and manage complex environments with award-winning support, training, and consulting services.</p>
  </rh-footer-block>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">Subscribe to our free newsletter, Red Hat Shares</h3>
    <pfe-cta><a href="#blocks">Sign up now</a></pfe-cta>
  </rh-footer-block>
  <h3 slot="footer-links-primary" hidden>Red Hat legal and privacy links</h3>
  <ul slot="footer-links-primary">
    <li><a href="https://www.redhat.com/en/about/company">About Red Hat</a></li>
    <li><a href="https://www.redhat.com/en/jobs-overview">Jobs</a></li>
    <li><a href="https://www.redhat.com/en/events">Events</a></li>
    <li><a href="https://www.redhat.com/en/about/office-locations">Locations</a></li>
    <li><a href="https://www.redhat.com/en/blog">Red Hat Blog</a></li>
    <li><a href="https://coolstuff.redhat.com/">Cool Stuff Store</a></li>
    <li><a href="https://www.redhat.com/en/about/our-culture/diversity-equity-inclusion/statement">Diversity, equity, and inclusion</a></li>
  </ul>
  <rh-footer-copyright slot="footer-links-secondary"></rh-footer-copyright>
  <h3 slot="footer-links-secondary" hidden>Red Hat legal and privacy links</h3>
  <ul slot="footer-links-secondary">
    <li><a href="https://www.redhat.com/en/about/privacy-policy">Privacy statement</a></li>
    <li><a href="https://www.redhat.com/en/about/terms-use">Terms of use</a></li>
    <li><a href="https://www.redhat.com/en/about/all-policies-guidelines">All policies and guidelines</a></li>
    <li><a href="https://www.redhat.com/en/about/digital-accessibility">Digital accessibility</a></li>
    <li><a href="#">Cookie preferences</a></li>
  </ul>
  <div slot="footer-secondary-end">
    <a href="#">*We’ve updated our privacy statement effective December 30, 202X.</a>
  </div>
  <a href="https://www.redhat.com/en/summit" slot="footer-tertiary">
    <img src="https://access.redhat.com/chrome_themes/nimbus/img/rh-summit-red-a.svg"
         alt="Red Hat Summit"
         loading="lazy"
         width="73px" />
  </a>
</rh-footer>
```
