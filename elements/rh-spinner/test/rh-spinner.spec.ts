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
    <rh-spinner>Loading...</rh-spinner>
  `);

  expect(element.getAttribute('size')).to.equal('xl');
});

describe('size attribute', function() {
  let element: RhSpinner;

  function convertRemToPixels(rem: `${number}rem`) {
    const { fontSize } = getComputedStyle(document.documentElement);
    return parseFloat(rem) * parseFloat(fontSize);
  }

  beforeEach(async function() {
    element = await createFixture<RhSpinner>(html`
      <rh-spinner>Loading...</rh-spinner>
    `);
  });

  for (const [size, expected] of [
    ['sm', '0.625rem'],
    ['md', '1.125rem'],
    ['lg', '1.5rem'],
    ['xl', '3.375rem'],
  ] as const) {
    it(size, async function() {
      element.size = size;
      await element.updateComplete;
      expect(element.offsetWidth).to.equal(convertRemToPixels(expected));
    });
  }
});
