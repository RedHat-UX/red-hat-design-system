import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhBlockquote } from 'rh-blockquote';

const element = html`
  <rh-blockquote></rh-blockquote>
`;

describe('<rh-blockquote>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhBlockquote>(element);
    const klass = customElements.get('rh-blockquote');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhBlockquote);
  });
});
