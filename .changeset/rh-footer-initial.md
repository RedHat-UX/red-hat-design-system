---
"@rhds/elements": minor
---

Adds `<rh-footer>`

```html
<rh-footer>
  <a slot="logo" href="/en">
    <img alt="Red Hat logo" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg" />
  </a>
  <rh-footer-social-link slot="social-links-end" icon="web-icon-github">
    <a aria-label="Github" href="#github">Github</a>
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
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">About Red Hat</h3>
    <p>We’re the world’s leading provider of enterprise open source solutions―including Linux, cloud, container, and Kubernetes. We deliver hardened solutions that make it easier for enterprises to work across platforms and environments, from the core datacenter to the network edge. </p>
  </rh-footer-block>
  <rh-footer-block slot="main-secondary">
    <h3 slot="header">Subscribe to our free newsletter, Red Hat Shares</h3>
    <rh-cta><a href="#blocks">Sign up now</a></rh-cta>
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
</rh-footer>
```
