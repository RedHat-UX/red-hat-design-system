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
  Edit URL: https://generator.jspm.io/#U2VhYGBiDs0rySzJSU1hcCjKSCnWT81JzU3NKyl2MNQz0DPQTUotSdQzxCenX5Shm5iTWlQCZ+hlFQMA5uQ1lFsA
-->
<script type="importmap">
{
  "imports": {
    "@rhds/elements": "https://ga.jspm.io/npm:@rhds/elements@1.0.0-beta.2/rhds.min.js",
    "@rhds/elements/rh-footer/rh-footer.js": "https://ga.jspm.io/npm:@rhds/elements@1.0.0-beta.2/elements/rh-footer/rh-footer.js"
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
      "@patternfly/pfe-core/decorators.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/decorators.js",
      "lit": "https://ga.jspm.io/npm:lit@2.2.3/index.js",
      "lit-element/lit-element.js": "https://ga.jspm.io/npm:lit-element@3.2.0/development/lit-element.js",
      "lit-html": "https://ga.jspm.io/npm:lit-html@2.2.3/development/lit-html.js",
      "lit/decorators.js": "https://ga.jspm.io/npm:lit@2.2.3/decorators.js"
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
  import 'https://unpkg.com/@rhds/elements@1.0.0-beta.2/rh-footer/rh-footer.js?module';
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
  <rh-footer-social-link slot="social-links-end" icon="web-icon-github">
    <a href="#github">Github</a>
  </rh-footer-social-link>
  <h3 slot="links">Products</h3>
  <ul slot="links">
    <li><a href="#">Red Hat Ansible Automation Platform</a></li>
    <li><a href="#">Red Hat Enterprise Linux</a></li>
    <li><a href="#">Red Hat OpenShift</a></li>
    <li><a href="#">Red Hat OpenShift Container Storage</a></li>
    <li><a href="#">Red Hat OpenStack Platform</a></li>
    <li><a href="#">See all products</a></li>
  </ul>
  <h3 slot="links">Tools</h3>
  <ul slot="links">
    <li><a href="#">My account</a></li>
    <li><a href="#">Customer support</a></li>
    <li><a href="#">Red Hat OpenShift</a></li>
    <li><a href="#">Contact training</a></li>
    <li><a href="#">Red Hat OpenStack Platform</a></li>
    <li><a href="#">See all products</a></li>
  </ul>
  <h3 slot="links">Try, buy, sell</h3>
  <ul slot="links">
    <li><a href="#">Red Hat Store</a></li>
    <li><a href="#">Red Hat Enterprise Linux</a></li>
    <li><a href="#">Red Hat OpenShift</a></li>
    <li><a href="#">Contact training</a></li>
    <li><a href="#">Red Hat OpenStack Platform</a></li>
    <li><a href="#">See all products</a></li>
  </ul>
  <h3 id="communicate" slot="links">Communicate</h3>
  <ul slot="links">
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Feedback</a></li>
    <li><a href="#">Social</a></li>
    <li><a href="#">Red Hat newsletter</a></li>
    <li><a href="#">Email preferences</a></li>
  </ul>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">About Red Hat</h3>
    <p>We’re the world’s leading provider of enterprise open source solutions―including Linux, cloud, container,
      and
      Kubernetes. We deliver hardened solutions that make it easier for enterprises to work across platforms and
      environments, from the core datacenter to the network edge.
    </p>
    <p>Duis nulla esse ad id anim ipsum et magna amet laborum ex consectetur nulla. Est non ex ea ut ex laborum
      id
      aute eiusmod eu quis qui. <a href="#">Consequat consequat tempor elit nostrud non</a>.</p>
  </rh-footer-block>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">Subscribe to our free newsletter, Red Hat Shares</h3>
    <pfe-cta><a href="#blocks">Sign up now</a></pfe-cta>
  </rh-footer-block>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">Select a language</h3>
    <p>insert language switcher here...</p>
  </rh-footer-block>
  <h3 slot="footer-links-primary" hidden>Red Hat legal and privacy links</h3>
  <ul slot="footer-links-primary">
    <li><a href="#">About Red Hat</a></li>
    <li><a href="#">Jobs</a></li>
    <li><a href="#">Events</a></li>
    <li><a href="#">Locations</a></li>
    <li><a href="#">Contact Red Hat</a></li>
    <li><a href="#">Red Hat Blog</a></li>
    <li><a href="#">Cool Stuff Store</a></li>
    <li><a href="#">Diversity, equity, and inclusion</a></li>
  </ul>
  <rh-footer-copyright slot="footer-links-secondary"></rh-footer-copyright>
  <h3 slot="footer-links-secondary" hidden>Red Hat legal and privacy links</h3>
  <ul slot="footer-links-secondary">
    <li><a href="#">Privacy statement</a></li>
    <li><a href="#">Terms of use</a></li>
    <li><a href="#">All policies and guidelines</a></li>
    <li><a href="#">Digital accessibility</a></li>
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
