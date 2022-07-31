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

```html
<link rel="stylesheet" href="https://unpkg.com/@rhds/elements/elements/rh-footer/rh-footer-lightdom.css" />
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
    "@rhds/elements": "https://ga.jspm.io/npm:@rhds/elements@1.0.0-beta.15/rhds.min.js",
    "@rhds/elements/rh-footer/rh-footer.js": "https://ga.jspm.io/npm:@rhds/elements@1.0.0-beta.9/elements/rh-footer/rh-footer.js"
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
  import 'https://jspm.dev/@rhds/elements@1.0.0-beta.9/rh-footer/rh-footer.js';
  await customElements.whenDefined('rh-footer');
  console.log('Footer is now available and upgraded');
</script>
````

## Questions and Feedback
Questions? Comments? Feedback? Need help installing or implementing?
Please [open a discussion thread](https://github.com/orgs/RedHat-UX/discussions/categories/q-a) here on GitHub. The Design Systems team will help 

## Example

```html
<rh-footer data-analytics-region="page-footer">
  <a slot="logo" href="/en"
    data-analytics-category="Footer"
    data-analytics-text="Logo">
    <img src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"
         alt="Red Hat logo"
         loading="lazy" />
  </a>
  <rh-footer-social-link slot="social-links" icon="web-icon-linkedin">
    <a href="http://www.linkedin.com/company/red-hat"
    data-analytics-region="social-links-exit"
    data-analytics-category="Footer|social-links"
    data-analytics-text="LinkedIn"
    >LinkedIn</a>
  </rh-footer-social-link>
  <rh-footer-social-link slot="social-links" icon="web-icon-youtube">
    <a href="http://www.youtube.com/user/RedHatVideos"
    data-analytics-region="social-links-exit"
    data-analytics-category="Footer|social-links"
    data-analytics-text="Youtube"
    >Youtube</a>
  </rh-footer-social-link>
  <rh-footer-social-link slot="social-links" icon="web-icon-facebook">
    <a href="https://www.facebook.com/redhatinc"
    data-analytics-region="social-links-exit"
    data-analytics-category="Footer|social-links"
    data-analytics-text="Facebook"
    >Facebook</a>
  </rh-footer-social-link>
  <rh-footer-social-link slot="social-links" icon="web-icon-twitter">
    <a href="https://twitter.com/RedHat"
    data-analytics-region="social-links-exit"
    data-analytics-category="Footer|social-links"
    data-analytics-text="Twitter"
    >Twitter</a>
  </rh-footer-social-link>
  <rh-footer-social-link slot="social-links" icon="web-icon-github">
    <a href="#github"
    data-analytics-region="social-links-exit"
    data-analytics-category="Footer|social-links"
    data-analytics-text="GitHub"
    >GitHub</a>
  </rh-footer-social-link>
  <h3 slot="links" data-analytics-text="Products">Products</h3>
  <ul slot="links">
    <li><a href="https://www.redhat.com/en/technologies/management/ansible"
        data-analytics-category="Footer|Products"
        data-analytics-text="Red Hat Ansible Automation Platform"
        >Red Hat Ansible Automation Platform</a></li>
    <li><a href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
        data-analytics-category="Footer|Products"
        data-analytics-text="Red Hat Enterprise Linux"
        >Red Hat Enterprise Linux</a></li>
    <li><a href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
        data-analytics-category="Footer|Products"
        data-analytics-text="Red Hat OpenShift"
        >Red Hat OpenShift</a></li>
    <li><a href="https://www.redhat.com/en/technologies/cloud-computing/openshift-data-foundation"
      data-analytics-category="Footer|Products"
      data-analytics-text="Red Hat OpenShift Data Foundation"
      >Red Hat OpenShift Data Foundation</a></li>
    <li><a href="https://www.redhat.com/en/technologies/linux-platforms/openstack-platform"
      data-analytics-category="Footer|Products"
      data-analytics-text="Red Hat OpenStack Platform"
      >Red Hat OpenStack Platform</a></li>
    <li><a href="https://www.redhat.com/en/technologies/all-products"
      data-analytics-category="Footer|Products"
      data-analytics-text="See all products"
      >See all products</a></li>
  </ul>
  <h3 slot="links" data-analytics-text="Tools">Tools</h3>
  <ul slot="links">
    <li><a href="https://sso.redhat.com/"
      data-analytics-category="Footer|Tools"
      data-analytics-text="My account"
      >My account</a></li>
    <li><a href="https://access.redhat.com/"
      data-analytics-category="Footer|Tools"
      data-analytics-text="Customer support"
      >Customer support</a></li>
    <li><a href="https://connect.redhat.com/"
      data-analytics-category="Footer|Tools"
      data-analytics-text="Partner resources"
      >Partner resources</a></li>
    <li><a href="https://developers.redhat.com/"
      data-analytics-category="Footer|Tools"
      data-analytics-text="Developer resources"
      >Developer resources</a></li>
    <li><a href="https://www.redhat.com/en/services/training-and-certification"
      data-analytics-category="Footer|Tools"
      data-analytics-text="Training and certification"
      >Training and certification</a></li>
    <li><a href="https://learn.redhat.com/"
      data-analytics-category="Footer|Tools"
      data-analytics-text="Learning community"
      >Learning community</a></li>
    <li><a href="https://catalog.redhat.com/"
      data-analytics-category="Footer|Tools"
      data-analytics-text="Red Hat Ecosystem Catalog"
      >Red Hat Ecosystem Catalog</a></li>
    <li><a href="https://www.redhat.com/en/resources"
      data-analytics-category="Footer|Tools"
      data-analytics-text="Resource library"
      >Resource library</a></li>
  </ul>
  <h3 slot="links" data-analytics-text="Try buy sell">Try, buy, sell</h3>
  <ul slot="links">
    <li><a href="https://www.redhat.com/en/products/trials"
      data-analytics-category="Footer|Try buy sell"
      data-analytics-text="Product trial center"
      >Product trial center</a></li>
    <li><a href="https://www.redhat.com/en/store"
      data-analytics-category="Footer|Try buy sell"
      data-analytics-text="Red Hat Store"
      >Red Hat Store</a></li>
    <li><a href="https://marketplace.redhat.com/"
      data-analytics-category="Footer|Try buy sell"
      data-analytics-text="Red Hat Marketplace"
      >Red Hat Marketplace</a></li>
    <li><a href="https://www.redhat.com/en/about/japan-buy"
      data-analytics-category="Footer|Try buy sell"
      data-analytics-text="Buy online (Japan)"
      >Buy online (Japan)</a></li>
    <li><a href="http://redhat.force.com/finder/"
      data-analytics-category="Footer|Try buy sell"
      data-analytics-text="Find a partner"
      >Find a partner</a></li>
    <li><a href="https://www.redhat.com/en/contact"
      data-analytics-category="Footer|Try buy sell"
      data-analytics-text="Contact sales"
      >Contact sales</a></li>
    <li><a href="https://www.redhat.com/en/services/training-and-certification/contact-us"
      data-analytics-category="Footer|Try buy sell"
      data-analytics-text="Contact training"
      >Contact training</a></li>
    <li><a href="https://www.redhat.com/en/services/consulting-overview#contact-us"
      data-analytics-category="Footer|Try buy sell"
      data-analytics-text="Contact consulting"
      >Contact consulting</a></li>
  </ul>
  <h3 id="communicate" slot="links" data-analytics-text="Communicate">Communicate</h3>
  <ul slot="links">
    <li><a href="https://www.redhat.com/en/contact"
      data-analytics-category="Footer|Communicate"
      data-analytics-text="Contact us"
      >Contact us</a></li>
    <li><a href="https://www.redhat.com/en/about/feedback"
      data-analytics-category="Footer|Communicate"
      data-analytics-text="Feedback"
      >Feedback</a></li>
    <li><a href="https://www.redhat.com/en/about/social"
      data-analytics-category="Footer|Communicate"
      data-analytics-text="Social"
      >Social</a></li>
    <li><a href="https://engage.redhat.com/Global-Preference-Center?newsletter=RH-Shares&intcmp=7016000000154xCAAQ"
      data-analytics-category="Footer|Communicate"
      data-analytics-text="Red Hat newsletter"
      >Red Hat newsletter</a></li>
  </ul>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header" data-analytics-text="About Red Hat">About Red Hat</h3>
    <p>We’re the world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies. We help you standardize across environments, develop cloud-native applications, and integrate, automate, secure, and manage complex environments with award-winning support, training, and consulting services.</p>
  </rh-footer-block>
  <rh-footer-block slot="main-secondary">
<<<<<<< HEAD
    <h3 slot="header" data-analytics-text="Subscribe to our free newsletter">Subscribe to our free newsletter, Red Hat Shares</h3>
    <pfe-cta><a href="#blocks"
              data-analytics-category="Footer|About Red Hat"
              data-analytics-text="Sign up now"
              >Sign up now</a></pfe-cta>
||||||| parent of 94c11247 (docs(footer): use rh-cta)
    <h3 slot="header">Subscribe to our free newsletter, Red Hat Shares</h3>
    <pfe-cta><a href="#blocks">Sign up now</a></pfe-cta>
  </rh-footer-block>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">Select a language</h3>
    <p>insert language switcher here...</p>
=======
    <h3 slot="header">Subscribe to our free newsletter, Red Hat Shares</h3>
    <rh-cta><a href="#blocks">Sign up now</a></rh-cta>
  </rh-footer-block>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">Select a language</h3>
    <p>insert language switcher here...</p>
>>>>>>> 94c11247 (docs(footer): use rh-cta)
  </rh-footer-block>
  <rh-global-footer slot="global">
    <h3 slot="links-primary" hidden data-analytics-text="Red Hat legal and privacy links">Red Hat legal and privacy links</h3>
    <ul slot="links-primary" data-analytics-region="page-footer-bottom-primary">
      <li><a href="https://www.redhat.com/en/about/company"
        data-analytics-category="Footer|Corporate"
        data-analytics-text="About Red Hat"
        >About Red Hat</a></li>
      <li><a href="https://www.redhat.com/en/jobs-overview"
        data-analytics-category="Footer|Corporate"
        data-analytics-text="Jobs"
        >Jobs</a></li>
      <li><a href="https://www.redhat.com/en/events"
        data-analytics-category="Footer|Corporate"
        data-analytics-text="Events"
        >Events</a></li>
      <li><a href="https://www.redhat.com/en/about/office-locations"
        data-analytics-category="Footer|Corporate"
        data-analytics-text="Locations"
        >Locations</a></li>
      <li><a href="https://www.redhat.com/en/blog"
        data-analytics-category="Footer|Corporate"
        data-analytics-text="Red Hat Blog"
        >Red Hat Blog</a></li>
      <li><a href="https://coolstuff.redhat.com/"
        data-analytics-category="Footer|Corporate"
        data-analytics-text="Cool Stuff Store"
        >Cool Stuff Store</a></li>
      <li><a href="https://www.redhat.com/en/about/our-culture/diversity-equity-inclusion/statement"
        data-analytics-category="Footer|Corporate"
        data-analytics-text="Diversity, equity, and inclusion"
        >Diversity, equity, and inclusion</a></li>
    </ul>
    <rh-footer-copyright slot="links-secondary"></rh-footer-copyright>
    <h3 slot="links-secondary" hidden data-analytics-text="Red Hat legal and privacy links">Red Hat legal and privacy links</h3>
    <ul slot="links-secondary"  data-analytics-region="page-footer-bottom-secondary">
      <li><a href="https://www.redhat.com/en/about/privacy-policy"
        data-analytics-category="Footer|Red Hat legal and privacy links"
        data-analytics-text="Privacy statement"
        >Privacy statement</a></li>
      <li><a href="https://www.redhat.com/en/about/terms-use"
        data-analytics-category="Footer|Red Hat legal and privacy links"
        data-analytics-text="Terms of use"
        >Terms of use</a></li>
      <li><a href="https://www.redhat.com/en/about/all-policies-guidelines"
        data-analytics-category="Footer|Red Hat legal and privacy links"
        data-analytics-text="All policies and guidelines"
        >All policies and guidelines</a></li>
      <li><a href="https://www.redhat.com/en/about/digital-accessibility"
        data-analytics-category="Footer|Red Hat legal and privacy links"
        data-analytics-text="Digital accessibility"
        >Digital accessibility</a></li>
      <li><a href="#">Cookie preferences</a></li>
    </ul>
    <div slot="secondary-end">
      <a href="#">*We’ve updated our privacy statement effective December 30, 202X.</a>
    </div>
    <a href="https://www.redhat.com/en/summit" slot="footer-tertiary"
    data-analytics-category="Footer|Summit"
    data-analytics-text="Summit Logo"
    >
      <img src="https://access.redhat.com/chrome_themes/nimbus/img/rh-summit-red-a.svg"
           alt="Red Hat Summit"
           loading="lazy"
           width="73px" />
    </a>
  </rh-global-footer>
</rh-footer>
```
## Global Footer

Pages which do not require the full footer, but do require the about links, copyright, legal info,
or privacy policy may use the `<rh-global-footer>`. Those pages can import the global footer separately
from the `<rh-footer>` to improve page loading performance.

```js
import '@rhds/elements@1.0.0-beta.15/rh-footer/rh-global-footer.js';
```
```html
<link rel="stylesheet" href="https://unpkg.com/@rhds/elements@1.0.0-beta.15/elements/rh-footer/rh-footer-lightdom.css" />
```

```html
<rh-global-footer data-analytics-region="page-footer">
  <h3 slot="links-primary" hidden data-analytics-text="Red Hat legal and privacy links">Red Hat legal and privacy links</h3>
  <ul slot="links-primary" data-analytics-region="page-footer-bottom-primary">
    <li><a href="https://www.redhat.com/en/about/company"
      data-analytics-category="Footer|Corporate"
      data-analytics-text="About Red Hat"
      >About Red Hat</a></li>
    <li><a href="https://www.redhat.com/en/jobs-overview"
      data-analytics-category="Footer|Corporate"
      data-analytics-text="Jobs"
      >Jobs</a></li>
    <li><a href="https://www.redhat.com/en/events"
      data-analytics-category="Footer|Corporate"
      data-analytics-text="Events"
      >Events</a></li>
    <li><a href="https://www.redhat.com/en/about/office-locations"
      data-analytics-category="Footer|Corporate"
      data-analytics-text="Locations"
      >Locations</a></li>
    <li><a href="https://www.redhat.com/en/blog"
      data-analytics-category="Footer|Corporate"
      data-analytics-text="Red Hat Blog"
      >Red Hat Blog</a></li>
    <li><a href="https://coolstuff.redhat.com/"
      data-analytics-category="Footer|Corporate"
      data-analytics-text="Cool Stuff Store"
      >Cool Stuff Store</a></li>
    <li><a href="https://www.redhat.com/en/about/our-culture/diversity-equity-inclusion/statement"
      data-analytics-category="Footer|Corporate"
      data-analytics-text="Diversity, equity, and inclusion"
      >Diversity, equity, and inclusion</a></li>
  </ul>
  <rh-footer-copyright slot="links-secondary"></rh-footer-copyright>
  <h3 slot="links-secondary" hidden data-analytics-text="Red Hat legal and privacy links">Red Hat legal and privacy links</h3>
  <ul slot="links-secondary"  data-analytics-region="page-footer-bottom-secondary">
    <li><a href="https://www.redhat.com/en/about/privacy-policy"
      data-analytics-category="Footer|Red Hat legal and privacy links"
      data-analytics-text="Privacy statement"
      >Privacy statement</a></li>
    <li><a href="https://www.redhat.com/en/about/terms-use"
      data-analytics-category="Footer|Red Hat legal and privacy links"
      data-analytics-text="Terms of use"
      >Terms of use</a></li>
    <li><a href="https://www.redhat.com/en/about/all-policies-guidelines"
      data-analytics-category="Footer|Red Hat legal and privacy links"
      data-analytics-text="All policies and guidelines"
      >All policies and guidelines</a></li>
    <li><a href="https://www.redhat.com/en/about/digital-accessibility"
      data-analytics-category="Footer|Red Hat legal and privacy links"
      data-analytics-text="Digital accessibility"
      >Digital accessibility</a></li>
    <li><a href="#">Cookie preferences</a></li>
  </ul>
  <div slot="secondary-end">
    <a href="#">*We’ve updated our privacy statement effective December 30, 202X.</a>
  </div>
  <a href="https://www.redhat.com/en/summit" slot="footer-tertiary"
  data-analytics-category="Footer|Summit"
  data-analytics-text="Summit Logo"
  >
    <img src="https://access.redhat.com/chrome_themes/nimbus/img/rh-summit-red-a.svg"
         alt="Red Hat Summit"
         loading="lazy"
         width="73px" />
  </a>
</rh-global-footer>
```
