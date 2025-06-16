import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSchemeToggle } from '@rhds/elements/rh-scheme-toggle/rh-scheme-toggle.js';

describe('<rh-scheme-toggle>', function() {
  describe('simply instantiating', function() {
    let element: RhSchemeToggle;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-scheme-toggle')).to.be.an.instanceof(RhSchemeToggle);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhSchemeToggle>(html`<rh-scheme-toggle></rh-scheme-toggle>`);
      const klass = customElements.get('rh-scheme-toggle');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhSchemeToggle);
    });
  });
});
