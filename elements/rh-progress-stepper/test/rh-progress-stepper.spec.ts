import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhProgressSteps } from '@rhds/elements/rh-progress-stepper/rh-progress-stepper.js';

describe('<rh-progress-stepper>', function() {
  describe('simply instantiating', function() {
    let element: RhProgressSteps;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-progress-stepper')).to.be.an.instanceof(RhProgressSteps);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhProgressSteps>(html`<rh-progress-stepper></rh-progress-stepper>`);
      const klass = customElements.get('rh-progress-stepper');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhProgressSteps);
    });
  })
});
