import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhAvatar } from 'rh-avatar';

const element = html`
  <rh-avatar name="foobar"></rh-avatar>
`;

it(`should default to pattern: "squares"`, async function() {
  const el = await createFixture<RhAvatar>(element);
  expect(el.pattern).to.equal('squares');
});

describe('<rh-avatar>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhAvatar>(element);
    const klass = customElements.get('rh-avatar');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhAvatar);
  });
});
