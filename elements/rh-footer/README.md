# `<rh-footer>` - Red Hat Unified Footer

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
  <div slot="header-secondary">
    <label class="visually-hidden" for="select-language">Choose page language:</label>
    <rh-select id="select-language">
      <rh-option value="English" icon-set="ui" icon="language">English</rh-option>
      <rh-option value="French" icon-set="ui" icon="language">French</rh-option>
      <rh-option value="Spanish" icon-set="ui" icon="language">Spanish</rh-option>
    </rh-select>
  </div>
  <h3 slot="links" data-analytics-text="Platforms">Platforms</h3>
  <ul slot="links">
    <li><a href="https://redhat.com/en/technologies/cloud-computing/openshift/lightspeed" data-analytics-category="Footer|Platforms" data-analytics-text="Red Hat AI">Red Hat AI</a></li>
    <li><a href="https://redhat.com/en/technologies/linux-platforms/enterprise-linux" data-analytics-category="Footer|Platforms" data-analytics-text="Red Hat Enterprise Linux">Red Hat Enterprise Linux</a></li>
    <li><a href="https://redhat.com/en/technologies/cloud-computing/openshift" data-analytics-category="Footer|Platforms" data-analytics-text="Red Hat OpenShift">Red Hat OpenShift</a></li>
    <li><a href="https://redhat.com/en/technologies/management/ansible" data-analytics-category="Footer|Platforms" data-analytics-text="Red Hat Ansible Automation Platform">Red Hat Ansible Automation Platform</a></li>
    <li><a href="https://redhat.com/en/technologies/all-products" data-analytics-category="Footer|Platforms" data-analytics-text="See all products">See all products</a></li>
  </ul>
  <h3 slot="links" data-analytics-text="Tools">Tools</h3>
  <ul slot="links">
    <li><a href="https://redhat.com/en/services/training-and-certification" data-analytics-category="Footer|Tools" data-analytics-text="Training and certification">Training and certification</a></li>
    <li><a href="https://sso.redhat.com" data-analytics-category="Footer|Tools" data-analytics-text="My account">My account</a></li>
    <li><a href="https://access.redhat.com" data-analytics-category="Footer|Tools" data-analytics-text="Customer support">Customer support</a></li>
    <li><a href="https://developers.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Developer resources">Developer resources</a></li>
    <li><a href="http://redhat.force.com/finder/" data-analytics-category="Footer|Tools" data-analytics-text="Find a partner">Find a partner</a></li>
    <li><a href="https://catalog.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Red Hat Ecosystem Catalog">Red Hat Ecosystem Catalog</a></li>
    <li><a href="https://docs.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Documentation">Documentation</a></li>
  </ul>
  <h3 slot="links" data-analytics-text="Try buy sell">Try, buy, &amp; sell</h3>
  <ul slot="links">
    <li><a href="https://redhat.com/en/products/trials" data-analytics-category="Footer|Try buy sell" data-analytics-text="Product trial center">Product trial center</a></li>
    <li><a href="https://www.redhat.com/en/store" data-analytics-category="Footer|Try buy sell" data-analytics-text="Red Hat Store">Red Hat Store</a></li>
    <li><a href="https://cloud.redhat.com/" data-analytics-category="Footer|Try buy sell" data-analytics-text="Console">Console</a></li>
  </ul>
  <h3 slot="links" data-analytics-text="Communicate">Communicate</h3>
  <ul slot="links">
    <li><a href="https://redhat.com/en/contact" data-analytics-category="Footer|Communicate" data-analytics-text="Contact sales">Contact sales</a></li>
    <li><a href="https://redhat.com/en/services/support" data-analytics-category="Footer|Communicate" data-analytics-text="Contact customer service">Contact customer service</a></li>
    <li><a href="https://redhat.com/en/services/training-and-certification/contact-us" data-analytics-category="Footer|Communicate" data-analytics-text="Contact training">Contact training</a></li>
    <li><a href="https://redhat.com/en/about/social" data-analytics-category="Footer|Communicate" data-analytics-text="Social">Social</a></li>
  </ul>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header" data-analytics-text="About Red Hat">About Red Hat</h3>
    <p>Red Hat is an open hybrid cloud technology leader, delivering a consistent, comprehensive foundation for transformative IT and artificial intelligence (AI) applications in the enterprise.</p>
  </rh-footer-block>

  <!-- Universal Footer -->
  <rh-footer-universal slot="universal">
    <h3 slot="links-primary" data-analytics-text="Red Hat corporate links" hidden>Red Hat corporate links</h3>
    <ul slot="links-primary" data-analytics-region="page-footer-bottom-primary">
      <li><a href="https://redhat.com/en/about/company" data-analytics-category="Footer|Corporate" data-analytics-text="About Red Hat">About Red Hat</a></li>
      <li><a href="https://redhat.com/en/jobs" data-analytics-category="Footer|Corporate" data-analytics-text="Jobs">Jobs</a></li>
      <li><a href="https://redhat.com/en/events" data-analytics-category="Footer|Corporate" data-analytics-text="Events">Events</a></li>
      <li><a href="https://redhat.com/en/about/office-locations" data-analytics-category="Footer|Corporate" data-analytics-text="Locations">Locations</a></li>
      <li><a href="https://redhat.com/en/contact" data-analytics-category="Footer|Corporate" data-analytics-text="Contact Red Hat">Contact Red Hat</a></li>
      <li><a href="https://redhat.com/en/blog" data-analytics-category="Footer|Corporate" data-analytics-text="Red Hat Blog">Red Hat Blog</a></li>
      <li><a href="https://redhat.com/en/about/our-culture/diversity-equity-inclusion" data-analytics-category="Footer|Corporate" data-analytics-text="Diversity equity and inclusion">Diversity, equity, and inclusion</a></li>
      <li><a href="https://coolstuff.redhat.com/" data-analytics-category="Footer|Corporate" data-analytics-text="Cool Stuff Store">Cool Stuff Store</a></li>
      <li><a href="https://www.redhat.com/en/summit" data-analytics-category="Footer|Corporate" data-analytics-text="Red Hat Summit">Red Hat Summit</a></li>
    </ul>
    <h3 slot="links-secondary" data-analytics-text="Red Hat legal and privacy links" hidden>Red Hat legal and privacy links</h3>
    <ul slot="links-secondary" data-analytics-region="page-footer-bottom-secondary">
      <li><a href="https://redhat.com/en/about/privacy-policy" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Privacy statement">Privacy statement</a></li>
      <li><a href="https://redhat.com/en/about/terms-use" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Terms of use">Terms of use</a></li>
      <li><a href="https://redhat.com/en/about/all-policies-guidelines" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="All policies and guidelines">All policies and guidelines</a></li>
      <li><a href="https://redhat.com/en/about/digital-accessibility" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Digital accessibility">Digital accessibility</a></li>
      <li><a href="#" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Cookie preferences">Cookie preferences</a></li>
    </ul>
    <rh-footer-copyright slot="tertiary">&copy; 2026 Red Hat</rh-footer-copyright>
    <rh-footer-social-link slot="tertiary" icon="linkedin" href="https://www.linkedin.com/company/red-hat" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="LinkedIn" accessible-label="LinkedIn"></rh-footer-social-link>
    <rh-footer-social-link slot="tertiary" icon="youtube" href="https://www.youtube.com/user/RedHatVideos" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="YouTube" accessible-label="YouTube"></rh-footer-social-link>
    <rh-footer-social-link slot="tertiary" icon="facebook" href="https://www.facebook.com/redhatinc" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="Facebook" accessible-label="Facebook"></rh-footer-social-link>
    <rh-footer-social-link slot="tertiary" icon="x" href="https://twitter.com/RedHat" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="X/Twitter" accessible-label="X/Twitter"></rh-footer-social-link>
    <rh-footer-social-link slot="tertiary" icon="instagram" href="https://www.instagram.com/redhat" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="Instagram" accessible-label="Instagram"></rh-footer-social-link>
  </rh-footer-universal>
</rh-footer>
```

## Universal Footer

Pages which do not require the full footer, but do require the about links,
copyright, legal info, or privacy policy may use the `<rh-footer-universal>`.
Those pages can import the universal footer separately from the `<rh-footer>` to
improve page loading performance.

```js
import '@rhds/elements/rh-footer/rh-footer-universal.js';
```
```html
<link rel="stylesheet" href="node_modules/@rhds/elements/elements/rh-footer/rh-footer-lightdom.css">
```

```html
<rh-footer-universal>
  <h3 slot="links-primary" data-analytics-text="Red Hat corporate links" hidden>Red Hat corporate links</h3>
  <ul slot="links-primary" data-analytics-region="page-footer-bottom-primary">
    <li><a href="https://redhat.com/en/about/company" data-analytics-category="Footer|Corporate" data-analytics-text="About Red Hat">About Red Hat</a></li>
    <li><a href="https://redhat.com/en/jobs" data-analytics-category="Footer|Corporate" data-analytics-text="Jobs">Jobs</a></li>
    <li><a href="https://redhat.com/en/events" data-analytics-category="Footer|Corporate" data-analytics-text="Events">Events</a></li>
    <li><a href="https://redhat.com/en/about/office-locations" data-analytics-category="Footer|Corporate" data-analytics-text="Locations">Locations</a></li>
    <li><a href="https://redhat.com/en/contact" data-analytics-category="Footer|Corporate" data-analytics-text="Contact Red Hat">Contact Red Hat</a></li>
    <li><a href="https://redhat.com/en/blog" data-analytics-category="Footer|Corporate" data-analytics-text="Red Hat Blog">Red Hat Blog</a></li>
    <li><a href="https://redhat.com/en/about/our-culture/diversity-equity-inclusion" data-analytics-category="Footer|Corporate" data-analytics-text="Diversity equity and inclusion">Diversity, equity, and inclusion</a></li>
    <li><a href="https://coolstuff.redhat.com/" data-analytics-category="Footer|Corporate" data-analytics-text="Cool Stuff Store">Cool Stuff Store</a></li>
    <li><a href="https://www.redhat.com/en/summit" data-analytics-category="Footer|Corporate" data-analytics-text="Red Hat Summit">Red Hat Summit</a></li>
  </ul>
  <h3 slot="links-secondary" data-analytics-text="Red Hat legal and privacy links" hidden>Red Hat legal and privacy links</h3>
  <ul slot="links-secondary" data-analytics-region="page-footer-bottom-secondary">
    <li><a href="https://redhat.com/en/about/privacy-policy" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Privacy statement">Privacy statement</a></li>
    <li><a href="https://redhat.com/en/about/terms-use" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Terms of use">Terms of use</a></li>
    <li><a href="https://redhat.com/en/about/all-policies-guidelines" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="All policies and guidelines">All policies and guidelines</a></li>
    <li><a href="https://redhat.com/en/about/digital-accessibility" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Digital accessibility">Digital accessibility</a></li>
    <li><a href="#" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Cookie preferences">Cookie preferences</a></li>
  </ul>
  <rh-footer-copyright slot="tertiary">&copy; 2026 Red Hat</rh-footer-copyright>
  <rh-footer-social-link slot="tertiary" icon="linkedin" href="https://www.linkedin.com/company/red-hat" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="LinkedIn" accessible-label="LinkedIn"></rh-footer-social-link>
  <rh-footer-social-link slot="tertiary" icon="youtube" href="https://www.youtube.com/user/RedHatVideos" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="YouTube" accessible-label="YouTube"></rh-footer-social-link>
  <rh-footer-social-link slot="tertiary" icon="facebook" href="https://www.facebook.com/redhatinc" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="Facebook" accessible-label="Facebook"></rh-footer-social-link>
  <rh-footer-social-link slot="tertiary" icon="x" href="https://twitter.com/RedHat" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="X/Twitter" accessible-label="X/Twitter"></rh-footer-social-link>
  <rh-footer-social-link slot="tertiary" icon="instagram" href="https://www.instagram.com/redhat" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="Instagram" accessible-label="Instagram"></rh-footer-social-link>
</rh-footer-universal>
```

## Questions and Feedback

Questions? Comments? Feedback? Need help installing or implementing?
Please [open a discussion thread][qa] here on GitHub. The Design Systems team
will help.

[spec]: https://ux.redhat.com/elements/footer/
[qa]: https://github.com/orgs/RedHat-UX/discussions/categories/q-a
