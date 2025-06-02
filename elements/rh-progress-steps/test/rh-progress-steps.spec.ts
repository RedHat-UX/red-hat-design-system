import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhProgressSteps } from '@rhds/elements/rh-progress-steps/rh-progress-steps.js';

describe('<rh-progress-steps>', function() {
  describe('simply instantiating', function() {
    let element: RhProgressSteps;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-progress-steps')).to.be.an.instanceof(RhProgressSteps);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhProgressSteps>(html`<rh-progress-steps></rh-progress-steps>`);
      const klass = customElements.get('rh-progress-steps');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhProgressSteps);
    });
  })
});
