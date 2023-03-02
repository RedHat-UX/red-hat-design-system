import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhCta } from '../rh-cta.js';

import '@patternfly/pfe-tools/test/stub-logger.js';

describe('<rh-cta>', function() {
  it('should upgrade', async function() {
    const element = await createFixture<RhCta>(html`<rh-cta></rh-cta>`);
    const klass = customElements.get('rh-cta');
    expect(element)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhCta);
  });

  describe('on default context', function() {
    let element: RhCta;
    describe('default variant', function() {
      beforeEach(async function() {
        element = await createFixture<RhCta>(html`<rh-cta></rh-cta>`);
      });
      it('is accessible', function() {
        expect(element).to.be.accessible();
      });
    });
    for (const variant of ['primary', 'secondary', 'brick']) {
      describe(`${variant} variant`, function() {
        beforeEach(async function() {
          element = await createFixture<RhCta>(html`<rh-cta variant="${variant}"></rh-cta>`);
        });
        it('is accessible', function() {
          expect(element).to.be.accessible();
        });
      });
    }
  });
});
