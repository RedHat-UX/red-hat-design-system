import { html } from 'lit';
import { fixture, expect, nextFrame, aTimeout } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { RhFooter } from '../RhFooter.js';
import { RhGlobalFooter } from '../rh-global-footer.js';
import '../rh-footer.js';

const KITCHEN_SINK = html`
  <rh-footer>
    <a slot="logo" href="/en">
      <img alt="Red Hat logo" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg" />
    </a>
    <rh-footer-social-link slot="social-links" icon="web-icon-linkedin">
      <a href="http://www.linkedin.com/company/red-hat">LinkedIn</a>
    </rh-footer-social-link>
    <rh-footer-social-link slot="social-links" icon="web-icon-youtube">
      <a href="http://www.youtube.com/user/RedHatVideos">Youtube</a>
    </rh-footer-social-link>
    <rh-footer-social-link slot="social-links" icon="web-icon-facebook">
      <a href="https://www.facebook.com/redhatinc">Facebook</a>
    </rh-footer-social-link>
    <rh-footer-social-link slot="social-links" icon="web-icon-twitter">
      <a href="https://twitter.com/RedHat">Twitter</a>
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
    <rh-global-footer slot="global">
      <h3 slot="links-primary" hidden>Red Hat legal and privacy links</h3>
      <ul slot="links-primary">
        <li><a href="#">About Red Hat</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Locations</a></li>
        <li><a href="#">Contact Red Hat</a></li>
        <li><a href="#">Red Hat Blog</a></li>
        <li><a href="#">Cool Stuff Store</a></li>
        <li><a href="#">Diversity, equity, and inclusion</a></li>
      </ul>
      <rh-footer-copyright slot="links-secondary"></rh-footer-copyright>
      <h3 slot="links-secondary" hidden>Red Hat legal and privacy links</h3>
      <ul slot="links-secondary">
        <li><a href="#">Privacy statement</a></li>
        <li><a href="#">Terms of use</a></li>
        <li><a href="#">All policies and guidelines</a></li>
        <li><a href="#">Digital accessibility</a></li>
        <li><a href="#">Cookie preferences</a></li>
      </ul>
      <div slot="secondary-end">
        <a href="#">*We’ve updated our privacy statement effective December 30, 202X.</a>
      </div>
      <a href="https://www.redhat.com/en/summit" slot="tertiary">
        <img src="https://access.redhat.com/chrome_themes/nimbus/img/rh-summit-red-a.svg" alt="Red Hat Summit"
          width="73px">
      </a>
    </rh-global-footer>
  </rh-footer>
`;

const GLOBAL_FOOTER = html`
  <rh-global-footer>
    <h3 slot="links-primary" hidden>Red Hat legal and privacy links</h3>
    <ul slot="links-primary">
      <li><a href="#">About Red Hat</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Locations</a></li>
      <li><a href="#">Contact Red Hat</a></li>
      <li><a href="#">Red Hat Blog</a></li>
      <li><a href="#">Cool Stuff Store</a></li>
      <li><a href="#">Diversity, equity, and inclusion</a></li>
    </ul>
    <rh-footer-copyright slot="links-secondary"></rh-footer-copyright>
    <h3 slot="links-secondary" hidden>Red Hat legal and privacy links</h3>
    <ul slot="links-secondary">
      <li><a href="#">Privacy statement</a></li>
      <li><a href="#">Terms of use</a></li>
      <li><a href="#">All policies and guidelines</a></li>
      <li><a href="#">Digital accessibility</a></li>
      <li><a href="#">Cookie preferences</a></li>
    </ul>
    <div slot="secondary-end">
      <a href="#">*We’ve updated our privacy statement effective December 30, 202X.</a>
    </div>
    <a href="https://www.redhat.com/en/summit" slot="tertiary">
      <img src="https://access.redhat.com/chrome_themes/nimbus/img/rh-summit-red-a.svg" alt="Red Hat Summit"
        width="73px">
    </a>
  </rh-global-footer>
`;

describe('<rh-footer>', function() {
  // let globalErrorHandler: undefined | typeof window.onerror = undefined;
  // before(function() {
  //   // Save Mocha's handler.
  //   Mocha.process.removeListener('uncaughtException');
  //   globalErrorHandler = window.onerror;
  //   addEventListener('error', error => {
  //     if (error.message?.match?.(/ResizeObserver loop limit exceeded/)) {
  //       return;
  //     } else {
  //       globalErrorHandler?.(error);
  //     }
  //   });
  // });
  //
  // after(function() {
  //   window.onerror = globalErrorHandler;
  // })
  let element: RhFooter;
  let globalElement: RhGlobalFooter;

  describe('simply instantiating', function() {
    beforeEach(async function() {
      element = await fixture<RhFooter>(KITCHEN_SINK);
      globalElement = await fixture<RhGlobalFooter>(GLOBAL_FOOTER);
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-footer');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhFooter);
    });

    it('global should upgrade', async function() {
      const klass = customElements.get('rh-global-footer');
      expect(globalElement)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhGlobalFooter);
    });

    it('passes the a11y audit', async function() {
      expect(element).shadowDom.to.be.accessible();
    });

    it('global passes the a11y audit', async function() {
      expect(globalElement).shadowDom.to.be.accessible();
    });
  });

  describe('adjusting window size', function() {
    beforeEach(async function() {
      element = await fixture<RhFooter>(KITCHEN_SINK);
    });

    describe('wide screen', function() {
      beforeEach(async function() {
        await setViewport({ width: 1200, height: 800 });
        await element.updateComplete;
        await aTimeout(200);
      });

      it('does not use accordion', function() {
        expect(element.shadowRoot?.querySelectorAll('pfe-accordion')?.length).to.equal(0);
      });

      it.skip('is accessible', function() {
        return expect(element).to.be.accessible();
      });

      it.skip('global is accessible', function() {
        return expect(globalElement).to.be.accessible();
      });
    });

    describe('narrow screen', function() {
      beforeEach(async function() {
        await setViewport({ width: 300, height: 800 });
        await element.updateComplete;
        await aTimeout(500);
      });

      it('uses accordion', function() {
        expect(element.shadowRoot?.querySelectorAll('pfe-accordion')?.length).to.equal(1);
      });

      it.skip('is accessible', function() {
        return expect(element).to.be.accessible();
      });

      it.skip('global is accessible', function() {
        return expect(element).to.be.accessible();
      });
    });
  });
});
