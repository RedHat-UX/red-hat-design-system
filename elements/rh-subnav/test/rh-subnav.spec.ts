import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSubnav } from '@rhds/elements/rh-subnav/rh-subnav.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

const element = html`
  <rh-subnav>
    <rh-navigation-link href="#">Users</rh-navigation-link>
    <rh-navigation-link href="#">Containers</rh-navigation-link>
    <rh-navigation-link href="#">Databases</rh-navigation-link>
    <rh-navigation-link href="#" current-page>Servers</rh-navigation-link>
    <rh-navigation-link href="#">System</rh-navigation-link>
    <rh-navigation-link href="#">Network</rh-navigation-link>
    <rh-navigation-link href="#">Cloud</rh-navigation-link>
  </rh-subnav>
`;

describe('<rh-subnav>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhSubnav>(element);
    const klass = customElements.get('rh-subnav');
    expect(el)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhSubnav);
  });
});
