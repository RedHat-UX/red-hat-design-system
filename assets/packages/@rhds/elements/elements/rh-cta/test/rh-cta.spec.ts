import { expect, html } from '@open-wc/testing';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { clickElementAtCenter, clickElementAtOffset } from '@patternfly/pfe-tools/test/utils.js';
import { RhCta } from '../rh-cta.js';

import { tokens } from '@rhds/tokens';

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

  it('instanciates imperatively', function() {
    expect(document.createElement('rh-cta'))
        .to.be.an.instanceof(RhCta);
  });

  describe('on default context', function() {
    let element: RhCta;
    for (const variant of [
      undefined,
      'primary',
      'secondary',
      'brick',
    ]) {
      describe(`${variant ?? 'default'} variant with slotted link`, function() {
        beforeEach(async function() {
          element = await createFixture<RhCta>(html`
            <rh-cta variant="${ifDefined(variant)}">
              <a href="#${variant ?? 'default'}-cta">CTA</a>
            </rh-cta>
          `);
        });
        afterEach(function() {
          location.hash = '';
        });
        it('is accessible', async function() {
          await expect(element).to.be.accessible();
        });
        describe('clicking the center of the cta', function() {
          beforeEach(async function() {
            await clickElementAtCenter(element);
          });
          it('navigates', function() {
            expect(element.querySelector('a')!.href).to.be.ok;
            const { hash } = new URL(element.querySelector('a')!.href);
            expect(location.hash).to.equal(hash);
          });
        });
        describe('clicking the margins of the cta', function() {
          beforeEach(async function() {
            if (variant) {
              const rhSpace2xl = parseInt(tokens.get('--rh-space-2xl'));
              const rhSpaceLg = parseInt(tokens.get('--rh-space-lg'));
              if (Number.isNaN(rhSpaceLg) || Number.isNaN(rhSpace2xl)) {
                throw new Error('space tokens not found');
              }
              await clickElementAtOffset(element, [rhSpace2xl / 2, rhSpaceLg / 2]);
            } else {
              await clickElementAtOffset(element, [-5, 10]);
            }
          });
          it('navigates', function() {
            expect(element.querySelector('a')!.href).to.be.ok;
            const { hash } = new URL(element.querySelector('a')!.href);
            expect(location.hash).to.equal(hash);
          });
        });
      });
    }
  });
});
