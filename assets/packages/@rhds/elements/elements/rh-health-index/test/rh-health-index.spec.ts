import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { allUpdates } from '@patternfly/pfe-tools/test/utils.js';
import { RhHealthIndex } from '@rhds/elements/rh-health-index/rh-health-index.js';
// import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import 'element-internals-polyfill';

describe('<rh-health-index>', function() {
  it('imperatively instantiates', function() {
    expect(document.createElement('rh-health-index')).to.be.an.instanceof(RhHealthIndex);
  });

  describe('simply instantiating', function() {
    let element: RhHealthIndex;
    beforeEach(async function() {
      element = await createFixture<RhHealthIndex>(html`<rh-health-index></rh-health-index>`);
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-health-index');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhHealthIndex);
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });

  describe('with a grade letter', function() {
    let element: RhHealthIndex;
    beforeEach(async function() {
      element = await createFixture<RhHealthIndex>(html`
        <rh-health-index grade="A" size="lg"></rh-health-index>
      `);
      await allUpdates(element);
    });

    it('should be accessible', async function() {
      // playwright is apparently not reading the aria IDL attrs from internals
      // const snapshot = await a11ySnapshot();
      // expect(snapshot.children?.find(x => x.role === 'meter')).to.be.ok;
      await expect(element).to.be.accessible();
    });
  });
});
