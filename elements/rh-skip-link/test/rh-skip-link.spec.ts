import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { RhSkipLink } from '@rhds/elements/rh-skip-link/rh-skip-link.js';

describe('<rh-skip-link>', function() {
  describe('simply instantiating', function() {
    let element: RhSkipLink;
    it('should upgrade', async function() {
      element = await createFixture<RhSkipLink>(html`<rh-skip-link></rh-skip-link>`);
      const klass = customElements.get('rh-skip-link');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhSkipLink);
    });
  });

  describe('when the element loads', function() {
    let element: RhSkipLink;
    beforeEach(async function() {
      element = await createFixture<RhSkipLink>(html`
        <rh-skip-link>
          <a href="#main-content">
            Skip to main content
          </a>
        </rh-skip-link>
      `);
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.deep.equal({
        role: 'WebArea',
        name: '',
        children: [{ role: 'link', name: 'Skip to main content' }]
      });
    });

    describe('when element receives focus', function() {
      it('should be visible', async function() {
        element.focus();
        const elStyles = getComputedStyle(element);
        expect(elStyles.getPropertyValue('clip')).to.equal('auto');
        expect(elStyles.getPropertyValue('text-decoration')).to.not.equal('underline');
        expect(elStyles.getPropertyValue('top')).to.equal('0px');
      });
    });
  });
});
