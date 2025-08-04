import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { RhProgressStepper, RhProgressStep } from '@rhds/elements/rh-progress-stepper/rh-progress-stepper.js';

describe('<rh-progress-stepper>', function() {
  describe('simply instantiating', function() {
    let element: RhProgressStepper;

    it('imperatively instantiates', function() {
      expect(document.createElement('rh-progress-stepper')).to.be.an.instanceof(RhProgressStepper);
      expect(document.createElement('rh-progress-step')).to.be.an.instanceof(RhProgressStep);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhProgressStepper>(html`<rh-progress-stepper></rh-progress-stepper>`);
      const klass = customElements.get('rh-progress-stepper');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhProgressStepper);
    });
  });
  describe('with first step active', function() {
    let element: RhProgressStepper;
    beforeEach(async function() {
      element = await createFixture(html`
        <rh-progress-stepper>
          <rh-progress-step state="active">1</rh-progress-step>
          <rh-progress-step>2</rh-progress-step>
          <rh-progress-step>3</rh-progress-step>
          <rh-progress-step>4</rh-progress-step>
          <rh-progress-step>5</rh-progress-step>
        </rh-progress-stepper>
      `);
    });
  });
  describe('with more than one step marked as active', function() {
    let element: RhProgressStepper;
    beforeEach(async function() {
      element = await createFixture(html`
        <rh-progress-stepper>
          <rh-progress-step href="#" state="active">1</rh-progress-step>
          <rh-progress-step href="#" state="active">2</rh-progress-step>
          <rh-progress-step href="#">3</rh-progress-step>
          <rh-progress-step href="#">4</rh-progress-step>
          <rh-progress-step href="#">5</rh-progress-step>
        </rh-progress-stepper>
      `);
    });
    it('sets the last active step as aria-current', async function() {
      // note: this test may break if we ever move to element internals for aria-current
      // playwright a11ySnapshot does not yet support aria-current
      // see https://github.com/microsoft/playwright/issues/36913
      const [hasAriaCurrent] = Array.from(element.querySelectorAll('rh-progress-step'), x => x.shadowRoot?.querySelector('[aria-current]'))
          .filter(x => !!x);
      // super brittle: much better if we could assert on the AT tree
      const [assignedNode] = hasAriaCurrent?.querySelector('slot')?.assignedNodes() ?? [];
      expect((assignedNode as Text).data).to.equal('2');
    });
    it('does not expose the first step to AT as current', function() {
      // note: this test may break if we ever move to element internals for aria-current
      // playwright a11ySnapshot does not yet support aria-current
      // see https://github.com/microsoft/playwright/issues/36913
      const hasAriaCurrent = Array.from(element.querySelectorAll('rh-progress-step'), x => x.shadowRoot?.querySelector('[aria-current]'))
          .filter(x => !!x);
      expect(hasAriaCurrent.length).to.be.lessThan(2);
    });
  });
});
