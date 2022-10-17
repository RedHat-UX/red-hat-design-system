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


describe('size attribute', function() {
  let element: RhSpinner;

  beforeEach(async function() {
    element = await createFixture<RhSpinner>(html`
      <rh-spinner></rh-spinner>
    `);
  });

  for (const [size, expected] of [
    ['sm', '16px'],
    ['md', '40px'],
    ['lg', '64px'],
  ] as const) {
    it(size, async function() {
      element.setAttribute('size', size);
      await element.updateComplete;
      const thesvg = element.shadowRoot.querySelector('svg').getBoundingClientRect();
      expect(`${thesvg.width}px`).to.equal(expected);
    });
  }
});
