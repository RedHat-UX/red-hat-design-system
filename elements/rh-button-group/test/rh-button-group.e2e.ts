import { html } from 'lit';
import { expect } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhButtonGroup } from '@rhds/elements/rh-button-group/rh-button-group.js';

import '@rhds/elements/rh-button/rh-button.js';

describe('<rh-button-group> e2e', function() {
  it('should render correctly in DOM', async function() {
    const element = await createFixture<RhButtonGroup>(html`
      <rh-button-group>
        <rh-button>Save</rh-button>
        <rh-button>Cancel</rh-button>
        <rh-button>More</rh-button>
      </rh-button-group>
    `);

    await element.updateComplete;

    expect(element.querySelectorAll('rh-button')).to.have.length(3);
  });
});
