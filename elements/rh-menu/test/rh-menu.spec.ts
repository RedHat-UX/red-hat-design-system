import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhMenu } from '@rhds/elements/rh-menu/rh-menu.js';

const element = html`
  <rh-menu>
      <rh-button slot="button">Toggle Menu</rh-button>
      <rh-button slot="menu">Menuitem1</rh-button>
      <rh-button slot="menu">Menuitem2</rh-button>
      <rh-button slot="menu">Menuitem3</rh-button>
      <rh-button slot="menu">Menuitem4</rh-button>
  </rh-menu>
`;

describe('<rh-menu>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhMenu>(element);
    const klass = customElements.get('rh-menu');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhMenu);
  });
});
