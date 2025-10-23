import { expect, fixture } from '@open-wc/testing';
import { html, LitElement } from 'lit';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { RhNavigationLink } from '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

class MockNav extends LitElement {
  render() {
    return `
      <div role="list">
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('mock-nav', MockNav);

let element: RhNavigationLink;
let list: MockNav;

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
      element = await fixture<RhNavigationLink>(`<rh-navigation-link href="#link">Link</rh-navigation-link>`);
      list = await fixture<MockNav>(`<mock-nav>${element}</mock-nav>`);
    });
    beforeEach(async () => {
      await list.updateComplete;
      await element.updateComplete;
    });

    it('is accessible', async function() {
      /* we ignore the aria-allowed-role as the rh-navigation-link applies listitem role in element internals */
      await Promise.resolve(expect(element).to.be.accessible({
        ignoredRules: ['aria-allowed-role'],
      }));
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
