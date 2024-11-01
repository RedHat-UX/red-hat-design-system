import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { RhNavigationUniversal } from '@rhds/elements/rh-navigation-universal/rh-navigation-universal.js';

describe('<rh-navigation-universal>', function() {
  before(function() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/elements/rh-navigation-universal/rh-navigation-universal-lightdom.css';
    document.head.append(link);
  });

  describe('simply instantiating', function() {
    let element: RhNavigationUniversal;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-universal')).to.be.an.instanceof(RhNavigationUniversal);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhNavigationUniversal>(html`<rh-navigation-universal></rh-navigation-universal>`);
      const klass = customElements.get('rh-navigation-universal');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhNavigationUniversal);
    });
  });

  describe('when the element loads', function() {
    let element: RhNavigationUniversal;
    beforeEach(async function() {
      element = await createFixture<RhNavigationUniversal>(html`
        <rh-navigation-universal variant="bordered" accessible-label="Global Nav">
          <ul>
            <li><a href="https://access.redhat.com/">Support</a></li>
            <li><a href="https://docs.redhat.com/en">Documentation</a></li>
            <li>
              <rh-navigation-universal-dropdown>
                <p>Everything you want is on the other side of fear. <a href="#">Jack Canfield</a></p>
              </rh-navigation-universal-dropdown>
            </li>
          </ul>
        </rh-navigation-universal>
      `);
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('should have a custom aria-label on the nav tag in the shadowroot', async function() {
      const shadowRootNavTag = element.shadowRoot?.querySelector('nav');
      expect(shadowRootNavTag?.getAttribute('aria-label')).to.equal('Global Nav');
    });
  });
});
