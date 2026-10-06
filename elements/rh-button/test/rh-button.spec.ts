import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhButton } from '../rh-button.js';

const template = html`
  <rh-button></rh-button>
`;

describe('<rh-button>', function() {
  it('should upgrade', async function() {
    const element = await createFixture<RhButton>(template);
    const klass = customElements.get('rh-button');
    expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhButton);
  });

  it('uses accessible-label as the button accessible name', async function() {
    const element = await createFixture<RhButton>(html`
      <rh-button accessible-label="Search">Search</rh-button>
    `);
    const button = element.shadowRoot?.querySelector('button');
    const text = element.shadowRoot?.querySelector('#text')?.parentElement;

    expect(button?.getAttribute('aria-label')).to.equal('Search');
    expect(text?.getAttribute('aria-hidden')).to.equal('true');
  });

  it('does not use the deprecated label attribute', async function() {
    const element = await createFixture<RhButton>(html`
      <rh-button label="Search">Search</rh-button>
    `);
    const button = element.shadowRoot?.querySelector('button');
    const text = element.shadowRoot?.querySelector('#text')?.parentElement;

    expect(button?.hasAttribute('aria-label')).to.equal(false);
    expect(text?.getAttribute('aria-hidden')).to.equal('false');
  });
});
