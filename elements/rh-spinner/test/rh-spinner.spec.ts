import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSpinner } from '@rhds/elements/rh-spinner/rh-spinner.js';


const element = html`
  <rh-spinner></rh-spinner>
`;

describe('<rh-spinner>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhSpinner>(element);
    const klass = customElements.get('rh-spinner');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhSpinner);
  });
});

it('should properly initialize the component', async function() {
  const element = await createFixture<RhSpinner>(html`
    <rh-spinner></rh-spinner>
  `);
  expect(element.getAttribute('size')).to.equal('lg');
});

it('should be 16px wide with \'sm\' size attribute ', async function() {
  const element = await createFixture<RhSpinner>(html`
    <rh-spinner size="sm"></rh-spinner>
  `);
  expect(element.offsetWidth).to.equal(16);
});

it('should be 40px wide with \'sm\' size attribute ', async function() {
  const element = await createFixture<RhSpinner>(html`
    <rh-spinner size="md"></rh-spinner>
  `);
  expect(element.offsetWidth).to.equal(40);
});

it('should be 40px wide with \'lg\' size attribute ', async function() {
  const element = await createFixture<RhSpinner>(html`
    <rh-spinner size="lg"></rh-spinner>
  `);
  expect(element.offsetWidth).to.equal(64);
});
