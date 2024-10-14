import { expect, html, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { RhSkipLink } from '@rhds/elements/rh-skip-link/rh-skip-link.js';

const parseTransitionDuration = function(input) {
  let value = parseFloat(input);
  const unit = input.match(/[a-zA-Z]+/)[0].toLowerCase();

  if (unit === 's') {
    // If the unit is 's' (seconds), convert to milliseconds
    value = value * 1000;
  }
  // Adding 50ms to complete transition:
  value = value + 50;
  return value;
};

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
        children: [{ role: 'link', name: 'Skip to main content' }],
      });
    });

    describe('when element receives focus', function() {
      it('should be visible', async function() {
        const elStyles = getComputedStyle(element.querySelector('a'));
        // Calculate transition duration. Focus applies after the transition finishes.
        const transitionValue = parseTransitionDuration(elStyles.getPropertyValue('transition-duration'));
        element.focus();
        await aTimeout(transitionValue);
        expect(element).to.be.visible;
      });
    });
  });
});
