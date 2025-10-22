import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { RhNavigationLink } from '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

let element: RhNavigationLink;
let list: HTMLElement;

describe('<rh-navigation-link>', function() {
  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-link')).to.be.an.instanceof(RhNavigationLink);
    });

    it('should upgrade', async function() {
      element = await fixture<RhNavigationLink>(`<rh-navigation-link href="#link">Link</rh-navigation-link>`);
      const klass = customElements.get('rh-navigation-link');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhNavigationLink);
    });
  });

  describe('accessibility', function() {
    beforeEach(async function() {
      /* navigation links must be part of a list to be accessible, as of 2025-10-02 */
      element = await fixture<RhNavigationLink>(`<rh-navigation-link href="#link">Link</rh-navigation-link>`);
      list = await fixture(html`<ul>${element}</ul>`);
    });
    beforeEach(async () => await element.updateComplete);

    /* Unfortunately snapshot does not include element internals set role, so this test is skipped */
    /* It does not accept a ul with a child of a navigation link which has a role of listitem */
    it.skip('is accessible', async function() {
      await expect(list).to.be.accessible();
    });

    /* Unfortunately snapshot does not include element internals set role, so this test is skipped */
    it.skip('should have internals role of listitem', async function() {
      expect(element.role).to.equal('listitem');
    });

    describe('adding the current-page attribute', function() {
      beforeEach(async function() {
        element.currentPage = true;
        await element.updateComplete;
      });

      it('should set the aria-current attribute to page on the anchor element', async function() {
        const currentpage = element.shadowRoot?.querySelector('a')?.getAttribute('aria-current');
        expect(currentpage).to.equal('page');
      });
    });
  });
});
