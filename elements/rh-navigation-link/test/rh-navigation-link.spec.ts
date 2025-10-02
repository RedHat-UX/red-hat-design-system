import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

import { RhNavigationLink } from '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

let element: RhNavigationLink;
let list: HTMLUListElement;

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

    it('is accessible', async function() {
      await expect(list).to.be.accessible();
    });

    it('should have internals role of listitem', async function() {
      expect(element.role).to.equal('listitem');
    });
  });
});
