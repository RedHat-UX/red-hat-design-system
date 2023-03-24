import { html } from 'lit';
import { fixture, expect, aTimeout, nextFrame, oneEvent } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { tokens } from '@rhds/tokens';
import { RhFooter, RhFooterUniversal } from '@rhds/elements/rh-footer/rh-footer.js';

import '@patternfly/pfe-tools/test/stub-logger.js';

const KITCHEN_SINK_TEMPLATE = html`
  <rh-footer>
    <a slot="logo" href="/">
      <img src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg" alt="Red Hat logo"
        loading="lazy" />
    </a>
    <rh-footer-social-link slot="social-links" icon="linkedin">
      <a href="http://www.linkedin.com/company/red-hat">LinkedIn</a>
    </rh-footer-social-link>
    <rh-footer-social-link slot="social-links" icon="youtube">
      <a href="http://www.youtube.com/user/RedHatVideos">Youtube</a>
    </rh-footer-social-link>
    <rh-footer-social-link slot="social-links" icon="facebook">
      <a href="https://www.facebook.com/redhatinc">Facebook</a>
    </rh-footer-social-link>
    <rh-footer-social-link slot="social-links" icon="twitter">
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
    <h3 id="lorem" slot="links">Lorem ipsum</h3>
    <ul slot="links">
      <li><a href="#">Lorem ipsum</a></li>
      <li><a href="#">Lorem ipsum</a></li>
      <li><a href="#">Lorem ipsum</a></li>
      <li><a href="#">Lorem ipsum</a></li>
      <li><a href="#">Lorem ipsum</a></li>
    </ul>
    <h3 id="ipsum" slot="links">Lorem ipsum</h3>
    <ul slot="links">
      <li><a href="#">Lorem ipsum</a></li>
      <li><a href="#">Lorem ipsum</a></li>
      <li><a href="#">Lorem ipsum</a></li>
      <li><a href="#">Lorem ipsum</a></li>
      <li><a href="#">Lorem ipsum</a></li>
    </ul>
    <rh-footer-block slot="main-secondary">
      <h3 slot="header">About Red Hat</h3>
      <p>We’re the world’s leading provider of enterprise open source solutions―including Linux, cloud, container, and Kubernetes. We deliver hardened solutions that make it easier for enterprises to work across platforms and environments, from the core datacenter to the network edge.</p>
    </rh-footer-block>
    <rh-footer-block slot="main-secondary">
      <h3 slot="header">Subscribe to our free newsletter, Red Hat Shares</h3>
      <rh-cta><a href="#blocks">Sign up now</a></rh-cta>
    </rh-footer-block>
    <rh-footer-block slot="main-secondary">
      <h3 slot="header">Select a language</h3>
      <p>insert language switcher here...</p>
    </rh-footer-block>
    <rh-footer-universal slot="universal">
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
    </rh-footer-universal>
  </rh-footer>
  <link rel="stylesheet" href="/elements/rh-footer/rh-footer-lightdom.css">
`;

const UNIVERSAL_FOOTER_TEMPLATE = html`
  <rh-footer-universal>
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
  </rh-footer-universal>
  <link rel="stylesheet" href="/elements/rh-footer/rh-footer-lightdom.css">
`;

describe('<rh-footer>', function() {
  let element: RhFooter;
  let universalFooter: RhFooterUniversal;

  describe('simply instantiating', function() {
    beforeEach(async function() {
      element = await fixture<RhFooter>(KITCHEN_SINK_TEMPLATE);
      universalFooter = await fixture<RhFooterUniversal>(UNIVERSAL_FOOTER_TEMPLATE);
      await aTimeout(200);
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-footer');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhFooter);
    });

    it('universal should upgrade', async function() {
      const klass = customElements.get('rh-footer-universal');
      expect(universalFooter)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhFooterUniversal);
    });

    it('passes the a11y audit', function() {
      return expect(element).shadowDom.to.be.accessible();
    });

    it('universal passes the a11y audit', async function() {
      return expect(universalFooter).shadowDom.to.be.accessible();
    });
  });

  describe('adjusting window size', function() {
    beforeEach(async function() {
      element = await fixture<RhFooter>(KITCHEN_SINK_TEMPLATE);
      await aTimeout(200);
    });

    describe('wide screen', function() {
      beforeEach(async function() {
        await setViewport({ width: 1200, height: 800 });
        await element.updateComplete;
        await aTimeout(200);
      });

      it('does not use accordion', function() {
        expect(element.shadowRoot?.querySelectorAll('rh-accordion')?.length).to.equal(0);
      });

      it('is accessible', function() {
        return expect(element).to.be.accessible();
      });
    });

    describe('narrow screen', function() {
      beforeEach(async function() {
        await setViewport({ width: 300, height: 800 });
        await element.updateComplete;
        await aTimeout(500);
      });

      it('uses accordion', function() {
        expect(element.shadowRoot?.querySelectorAll('rh-accordion')?.length).to.equal(1);
      });

      it('is accessible', function() {
        return expect(element).to.be.accessible();
      });
    });

    describe('ensure primary links supports second row.', function() {
      let element: RhFooter;

      beforeEach(async function() {
        element = await fixture<RhFooter>(KITCHEN_SINK_TEMPLATE);
      });

      it('Tablet, landscape', async function() {
        await setViewport({ width: 992, height: 800 });
        await element.updateComplete;
        await nextFrame();

        const firstPrimaryLink = element.querySelector('ul[slot=links]:first-of-type');
        const secondPrimaryLink = element.querySelector('h3[slot=links]:nth-of-type(n+2)');
        const fifthPrimaryLink = element.querySelector('h3[slot=links]:nth-of-type(n+5)');
        // 32px between the link items
        expect(Math.abs(firstPrimaryLink.getBoundingClientRect().right - secondPrimaryLink.getBoundingClientRect().left)).to.equal(32);
        // 32px between the first and second row
        expect(Math.abs(firstPrimaryLink.getBoundingClientRect().bottom - fifthPrimaryLink.getBoundingClientRect().top)).to.equal(32);
      });
    });

    describe('footer-universal behaviors', function() {
      it('logo anchor tag should always link to redhat.com', async function() {
        const universalElement = await fixture<RhFooterUniversal>(UNIVERSAL_FOOTER_TEMPLATE);
        expect(universalElement.shadowRoot?.querySelector('slot[name="logo"] a')?.getAttribute('href')).to.equal('https://redhat.com');
      });
    });

    describe('footer-universal links stack correctly.', function() {
      let universalElement: HTMLElement;
      let primaryLinks: HTMLElement;
      let secondaryLinks: HTMLElement;

      beforeEach(async function() {
        universalElement = await fixture<RhFooterUniversal>(UNIVERSAL_FOOTER_TEMPLATE);
        primaryLinks = universalElement.shadowRoot!.querySelector('.global-links-primary')!;
        secondaryLinks = universalElement.shadowRoot!.querySelector('.global-links-secondary')!;
      });

      it('Mobile, portrait', async function() {
        await setViewport({ width: 360, height: 800 });
        await element.updateComplete;

        // primary, secondary links 2 columns
        expect(getComputedStyle(primaryLinks).getPropertyValue('grid-template-columns')?.split(' ')?.length).to.equal(2);
        expect(getComputedStyle(secondaryLinks).getPropertyValue('grid-template-columns')?.split(' ')?.length).to.equal(2);
      });

      it('Mobile, landscape', async function() {
        await setViewport({ width: 576, height: 800 });
        await element.updateComplete;

        // primary links 2 columns
        expect(getComputedStyle(primaryLinks).getPropertyValue('display')).to.equal('grid');
        expect(getComputedStyle(primaryLinks).getPropertyValue('grid-template-columns')?.split(' ')?.length).to.equal(2);
        // secondary links 2 columns
        expect(getComputedStyle(secondaryLinks).getPropertyValue('display')).to.equal('grid');
        expect(getComputedStyle(secondaryLinks).getPropertyValue('grid-template-columns')?.split(' ')?.length).to.equal(2);
      });

      it('Mobile, landscape', async function() {
        await setViewport({ width: 576, height: 800 });
        await element.updateComplete;

        // primary links 2 columns
        expect(getComputedStyle(primaryLinks).getPropertyValue('display')).to.equal('grid');
        expect(getComputedStyle(primaryLinks).getPropertyValue('grid-template-columns')?.split(' ')?.length).to.equal(2);
        // secondary links 2 columns
        expect(getComputedStyle(secondaryLinks).getPropertyValue('display')).to.equal('grid');
        expect(getComputedStyle(secondaryLinks).getPropertyValue('grid-template-columns')?.split(' ')?.length).to.equal(2);
      });

      it('Tablet, portrait', async function() {
        await setViewport({ width: 768, height: 800 });
        await element.updateComplete;

        // primary links 3 columns
        expect(getComputedStyle(primaryLinks).getPropertyValue('display')).to.equal('grid');
        expect(getComputedStyle(primaryLinks).getPropertyValue('grid-template-columns')?.split(' ')?.length).to.equal(3);
        // secondary links 3 columns
        expect(getComputedStyle(secondaryLinks).getPropertyValue('display')).to.equal('grid');
        expect(getComputedStyle(secondaryLinks).getPropertyValue('grid-template-columns')?.split(' ')?.length).to.equal(3);
      });

      it('Tablet, landscape', async function() {
        await setViewport({ width: 992, height: 800 });
        await element.updateComplete;

        // primary links 2 columns
        expect(getComputedStyle(secondaryLinks).getPropertyValue('display')).to.equal('flex');
        // secondary links 2 columns
        expect(getComputedStyle(secondaryLinks).getPropertyValue('display')).to.equal('flex');
      });
    });

    describe('Region spacing is correct', function() {
      let element: RhFooter;
      let universalFooter: RhFooterUniversal;
      let base: HTMLElement;
      let logo: HTMLElement;
      let primary: HTMLElement;
      let spacer: HTMLElement;
      let tertiary: HTMLElement;
      let secondaryContent: HTMLElement;

      beforeEach(async function() {
        element = await fixture<RhFooter>(KITCHEN_SINK_TEMPLATE);
        universalFooter = await fixture<RhFooterUniversal>(UNIVERSAL_FOOTER_TEMPLATE);
        base = universalFooter?.shadowRoot?.querySelector('.global-base');
        logo = universalFooter?.shadowRoot?.querySelector('.global-logo');
        primary = universalFooter?.shadowRoot?.querySelector('.global-primary');
        spacer = universalFooter?.shadowRoot?.querySelector('.spacer');
        secondaryContent = universalFooter?.querySelector('[slot*=secondary]');
        tertiary = universalFooter?.shadowRoot?.querySelector('.global-tertiary');
      });

      // Mockup: https://xd.adobe.com/view/835616bd-1374-483d-ab10-6ae92e0e343c-d605/screen/f04f89c1-3461-4ffb-a622-bb8654a19f03/
      it('Mobile, portrait', async function() {
        await setViewport({ width: 360, height: 800 });
        await element.updateComplete;

        // @todo: swap these with design tokens
        expect(Math.abs(base.getBoundingClientRect().top - logo.getBoundingClientRect().top)).to.equal(32);
        expect(Math.abs(logo.getBoundingClientRect().bottom - primary.getBoundingClientRect().top)).to.equal(32);
        expect(Math.abs(primary.getBoundingClientRect().bottom - spacer.getBoundingClientRect().top)).to.equal(32);
        expect(Math.abs(spacer.getBoundingClientRect().bottom - secondaryContent.getBoundingClientRect().top)).to.equal(32);
        expect(Math.abs(base.getBoundingClientRect().bottom - tertiary.getBoundingClientRect().bottom)).to.equal(32);

        // distance between main-secondary and footer-universal
        expect(Math.abs(element.shadowRoot.querySelector('.main-secondary').getBoundingClientRect().bottom - element.querySelector('rh-footer-universal').getBoundingClientRect().top)).to.equal(32);
      });

      it('Tablet, landscape', async function() {
        await setViewport({ width: 992, height: 800 });
        await element.updateComplete;

        expect(Math.abs(element.shadowRoot.querySelector('.main-secondary').getBoundingClientRect().bottom - element.querySelector('rh-footer-universal').getBoundingClientRect().top)).to.equal(64);
      });

      // Mockup: https://xd.adobe.com/view/835616bd-1374-483d-ab10-6ae92e0e343c-d605/screen/f41c9d96-9e28-4990-9380-86f4c908309f/
      it('Desktop, small', async function() {
        await setViewport({ width: 1200, height: 800 });
        await element.updateComplete;

        expect(Math.abs(base.getBoundingClientRect().top - logo.getBoundingClientRect().top)).to.equal(32);
        expect(Math.abs(logo.getBoundingClientRect().right - primary.getBoundingClientRect().left)).to.equal(32);
        expect(Math.abs(primary.getBoundingClientRect().bottom - secondaryContent.getBoundingClientRect().top)).to.equal(24);
        expect(Math.abs(base.getBoundingClientRect().bottom - tertiary.getBoundingClientRect().bottom)).to.equal(32);
      });
    });

    describe('rh-block', function() {
      let element;
      let block;
      let firstChild;
      let lastChild;

      beforeEach(async function() {
        element = await fixture<RhFooter>(KITCHEN_SINK_TEMPLATE);
        block = element.querySelector('rh-footer-block');
        firstChild = block.querySelector(':first-child');
        lastChild = block.querySelector(':last-child');
      });

      it('first and last child should be flush with the block', function() {
        // the top of the first child of the block should be flush with the top of the block itself
        expect(firstChild.getBoundingClientRect().top).to.equal(block.getBoundingClientRect().top);
        // the bottom of the last child of the block should be flush with the bottom of the block itself
        // @todo: give it a 5px variance because to account for line-height, that should be figured out why we have to do that
        expect(Math.abs(lastChild.getBoundingClientRect().bottom - block.getBoundingClientRect().bottom) < 5).to.be.true;
      });

      it('has a max-width for contents', async function() {
        const element = await fixture<RhFooter>(KITCHEN_SINK_TEMPLATE);
        const block = element.querySelector('rh-footer-block');
        expect(getComputedStyle(block.querySelector('p')).maxWidth).to.equal('650px');
      });
    });

    describe('rh-social-link', function() {
      it('should have an icon size of --rh-icon-size-02', async function() {
        const element = await fixture<RhFooter>(KITCHEN_SINK_TEMPLATE);
        const socialLink = element.querySelector('rh-footer-social-link');
        await oneEvent(element, 'load');
        // we need to reach into pf-icon to get the actual size of the svg.
        const icon = socialLink?.querySelector('pf-icon')?.shadowRoot?.querySelector('svg');
        if (icon) {
          expect(getComputedStyle(icon).height).to.equal(tokens.get('--rh-size-icon-02'));
        }
      });
    });
  });
});

