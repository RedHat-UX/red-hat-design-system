# `<rh-footer>` - Red Hat Unified Global Footer

Please see the [design specs][spec] for this element.

## Installation

If using npm/bundlers:

```bash
npm install @rhds/elements
```
```js
import '@rhds/elements/rh-footer/rh-footer.js';
```

```html
<link rel="stylesheet" href="node_modules/@rhds/elements/elements/rh-footer/rh-footer-lightdom.css" />
```

## Example

```html
<rh-footer data-analytics-region="page-footer">
  <a slot="logo" href="https://redhat.com/en" data-analytics-category="Footer" data-analytics-text="Logo">
    <img alt="Red Hat logo" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg" loading="lazy" />
  </a>
  <rh-footer-social-link slot="social-links" icon="linkedin"><a href="https://www.linkedin.com/company/red-hat" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="LinkedIn">LinkedIn</a></rh-footer-social-link>
  <rh-footer-social-link slot="social-links" icon="youtube"><a href="https://www.youtube.com/user/RedHatVideos" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="YouTube">YouTube</a></rh-footer-social-link>
  <rh-footer-social-link slot="social-links" icon="facebook"><a href="https://www.facebook.com/redhatinc" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="Facebook">Facebook</a></rh-footer-social-link>
  <rh-footer-social-link slot="social-links" icon="twitter"><a href="https://twitter.com/RedHat" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="Twitter">Twitter</a></rh-footer-social-link>
  <h3 slot="links" data-analytics-text="Products">Products</h3>
  <ul slot="links">
    <li><a href="https://redhat.com/en/technologies/linux-platforms/enterprise-linux" data-analytics-category="Footer|Products" data-analytics-text="Red Hat Enterprise Linux">Red Hat Enterprise Linux</a></li>
    <li><a href="https://redhat.com/en/technologies/cloud-computing/openshift" data-analytics-category="Footer|Products" data-analytics-text="Red Hat OpenShift">Red Hat OpenShift</a></li>
    <li><a href="https://redhat.com/en/technologies/management/ansible" data-analytics-category="Footer|Products" data-analytics-text="Red Hat Ansible Automation Platform">Red Hat Ansible Automation Platform</a></li>
    <li><a href="https://redhat.com/en/technologies/cloud-computing/openshift/cloud-services" data-analytics-category="Footer|Products" data-analytics-text="Cloud services">Cloud services</a></li>
    <li><a href="https://redhat.com/en/technologies/all-products" data-analytics-category="Footer|Products" data-analytics-text="See all products">See all products</a></li>
  </ul>
  <h3 slot="links" data-analytics-text="Tools">Tools</h3>
  <ul slot="links">
    <li><a href="https://sso.redhat.com" data-analytics-category="Footer|Tools" data-analytics-text="My account">My account</a></li>
    <li><a href="https://redhat.com/en/services/training-and-certification" data-analytics-category="Footer|Tools" data-analytics-text="Training and certification">Training and certification</a></li>
    <li><a href="https://access.redhat.com" data-analytics-category="Footer|Tools" data-analytics-text="Customer support">Customer support</a></li>
    <li><a href="https://developers.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Developer resources">Developer resources</a></li>
    <li><a href="https://learn.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Learning community">Learning community</a></li>
    <li><a href="https://connect.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Partner resources">Partner resources</a></li>
    <li><a href="https://redhat.com/en/resources" data-analytics-category="Footer|Tools" data-analytics-text="Resource library">Resource library</a></li>
  </ul>
  <h3 slot="links" data-analytics-text="Try buy sell">Try, buy & sell</h3>
  <ul slot="links">
    <li><a href="https://redhat.com/en/products/trials" data-analytics-category="Footer|Try buy sell" data-analytics-text="Product trial center">Product trial center</a></li>
    <li><a href="https://marketplace.redhat.com" data-analytics-category="Footer|Try buy sell" data-analytics-text="Red Hat Marketplace">Red Hat Marketplace</a></li>
    <li><a href="https://catalog.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Red Hat Ecosystem Catalog">Red Hat Ecosystem Catalog</a></li>
    <li><a href="http://redhat.force.com/finder/" data-analytics-category="Footer|Try buy sell" data-analytics-text="Find a partner">Find a partner</a></li>
    <li><a href="https://www.redhat.com/en/store" data-analytics-category="Footer|Try buy sell" data-analytics-text="Red Hat Store">Red Hat Store</a></li>
    <li><a href="https://cloud.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Console">Console</a></li>
  </ul>
  <h3 slot="links" data-analytics-text="Communicate">Communicate</h3>
  <ul slot="links">
    <li><a href="https://redhat.com/en/services/consulting-overview#contact-us" data-analytics-category="Footer|Communicate" data-analytics-text="Contact consulting">Contact consulting</a></li>
    <li><a href="https://redhat.com/en/contact" data-analytics-category="Footer|Communicate" data-analytics-text="Contact sales">Contact sales</a></li>
    <li><a href="https://redhat.com/en/services/training-and-certification/contact-us" data-analytics-category="Footer|Communicate" data-analytics-text="Contact training">Contact training</a></li>
    <li><a href="https://redhat.com/en/about/social" data-analytics-category="Footer|Communicate" data-analytics-text="Social">Social</a></li>
  </ul>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header" data-analytics-text="About Red Hat">About Red Hat</h3>
    <p> We’re the world’s leading provider of enterprise open source solutions—including Linux, cloud, container, and Kubernetes. We deliver hardened solutions that make it easier for enterprises to work across platforms and environments, from the core datacenter to the network edge.</p>
  </rh-footer-block>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header" data-analytics-text="Subscribe to our newsletter Red Hat Shares">Subscribe to our newsletter, Red Hat Shares</h3>
    <rh-cta><a href="https://www.redhat.com/en/email-preferences?newsletter=RH-Shares&intcmp=7016000000154xCAAQ" data-analytics-category="Footer|About Red Hat" data-analytics-text="Sign up now">Sign up now</a></rh-cta>
  </rh-footer-block>

  <!-- Global Footer -->
  <rh-global-footer slot="global">
    <h3 slot="links-primary" data-analytics-text="Red Hat legal and privacy links" hidden>Red Hat legal and privacy links</h3>
    <ul slot="links-primary" data-analytics-region="page-footer-bottom-primary">
      <li><a href="https://redhat.com/en/about/company" data-analytics-category="Footer|Corporate" data-analytics-text="About Red Hat">About Red Hat</a></li>
      <li><a href="https://redhat.com/en/jobs" data-analytics-category="Footer|Corporate" data-analytics-text="Jobs">Jobs</a></li>
      <li><a href="https://redhat.com/en/events" data-analytics-category="Footer|Corporate" data-analytics-text="Events">Events</a></li>
      <li><a href="https://redhat.com/en/about/office-locations" data-analytics-category="Footer|Corporate" data-analytics-text="Locations">Locations</a></li>
      <li><a href="https://redhat.com/en/contact" data-analytics-category="Footer|Corporate" data-analytics-text="Contact Red Hat">Contact Red Hat</a></li>
      <li><a href="https://redhat.com/en/blog" data-analytics-category="Footer|Corporate" data-analytics-text="Red Hat Blog">Red Hat Blog</a></li>
      <li><a href="https://redhat.com/en/about/our-culture/diversity-equity-inclusion/statement" data-analytics-category="Footer|Corporate" data-analytics-text="Diversity equity and inclusion">Diversity, equity, and inclusion</a></li>
      <li><a href="https://coolstuff.redhat.com/" data-analytics-category="Footer|Corporate" data-analytics-text="Cool Stuff Store">Cool Stuff Store</a></li>
      <li><a href="https://www.redhat.com/en/summit" data-analytics-category="Footer|Corporate" data-analytics-text="Red Hat Summit">Red Hat Summit</a></li>
    </ul>
    <rh-footer-copyright slot="links-secondary">© 2022 Red Hat, Inc.</rh-footer-copyright>
    <h3 slot="links-secondary" data-analytics-text="Red Hat legal and privacy links" hidden>Red Hat legal and privacy links</h3>
    <ul slot="links-secondary" data-analytics-region="page-footer-bottom-secondary">
      <li><a href="https://redhat.com/en/about/privacy-policy" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Privacy statement">Privacy statement</a></li>
      <li><a href="https://redhat.com/en/about/terms-use" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Terms of use">Terms of use</a></li>
      <li><a href="https://redhat.com/en/about/all-policies-guidelines" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="All policies and guidelines">All policies and guidelines</a></li>
      <li><a href="https://redhat.com/en/about/digital-accessibility" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Digital accessibility" class="active">Digital accessibility</a></li>
      <!-- If your website supports trustarc include this item to add Cookie Preferences to your site. -->
      <!-- <li><span id="teconsent"> </span></li> -->
    </ul>
  </rh-global-footer>
</rh-footer>
```
## Global Footer

Pages which do not require the full footer, but do require the about links, copyright, legal info,
or privacy policy may use the `<rh-global-footer>`. Those pages can import the global footer separately
from the `<rh-footer>` to improve page loading performance.

```js
import '@rhds/elements/rh-footer/rh-global-footer.js';
```
```html
<link rel="stylesheet" href="node_modules/@rhds/elements/elements/rh-footer/rh-footer-lightdom.css" />
```

```html
<rh-global-footer>
  <h3 slot="links-primary" data-analytics-text="Red Hat legal and privacy links" hidden>Red Hat legal and privacy links</h3>
  <ul slot="links-primary" data-analytics-region="page-footer-bottom-primary">
    <li><a href="https://redhat.com/en/about/company" data-analytics-category="Footer|Corporate" data-analytics-text="About Red Hat">About Red Hat</a></li>
    <li><a href="https://redhat.com/en/jobs" data-analytics-category="Footer|Corporate" data-analytics-text="Jobs">Jobs</a></li>
    <li><a href="https://redhat.com/en/events" data-analytics-category="Footer|Corporate" data-analytics-text="Events">Events</a></li>
    <li><a href="https://redhat.com/en/about/office-locations" data-analytics-category="Footer|Corporate" data-analytics-text="Locations">Locations</a></li>
    <li><a href="https://redhat.com/en/contact" data-analytics-category="Footer|Corporate" data-analytics-text="Contact Red Hat">Contact Red Hat</a></li>
    <li><a href="https://redhat.com/en/blog" data-analytics-category="Footer|Corporate" data-analytics-text="Red Hat Blog">Red Hat Blog</a></li>
    <li><a href="https://redhat.com/en/about/our-culture/diversity-equity-inclusion/statement" data-analytics-category="Footer|Corporate" data-analytics-text="Diversity equity and inclusion">Diversity, equity, and inclusion</a></li>
    <li><a href="https://coolstuff.redhat.com/" data-analytics-category="Footer|Corporate" data-analytics-text="Cool Stuff Store">Cool Stuff Store</a></li>
    <li><a href="https://www.redhat.com/en/summit" data-analytics-category="Footer|Corporate" data-analytics-text="Red Hat Summit">Red Hat Summit</a></li>
  </ul>
  <rh-footer-copyright slot="links-secondary">© 2022 Red Hat, Inc.</rh-footer-copyright>
  <h3 slot="links-secondary" data-analytics-text="Red Hat legal and privacy links" hidden>Red Hat legal and privacy links</h3>
  <ul slot="links-secondary" data-analytics-region="page-footer-bottom-secondary">
    <li><a href="https://redhat.com/en/about/privacy-policy" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Privacy statement">Privacy statement</a></li>
    <li><a href="https://redhat.com/en/about/terms-use" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Terms of use">Terms of use</a></li>
    <li><a href="https://redhat.com/en/about/all-policies-guidelines" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="All policies and guidelines">All policies and guidelines</a></li>
    <li><a href="https://redhat.com/en/about/digital-accessibility" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Digital accessibility" class="active">Digital accessibility</a></li>
    <!-- If your website supports trustarc include this item to add Cookie Preferences to your site. -->
    <!-- <li><span id="teconsent"> </span></li> -->
  </ul>
</rh-global-footer>
```

## Questions and Feedback

Questions? Comments? Feedback? Need help installing or implementing?
Please [open a discussion thread][qa] here on GitHub. The Design Systems team 
will help.

[spec]: https://ux.redhat.com/components/footer/
[qa]: https://github.com/orgs/RedHat-UX/discussions/categories/q-a
