import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhButtonGroup } from '@rhds/elements/rh-button-group/rh-button-group.js';

import '@rhds/elements/rh-button/rh-button.js';

describe('<rh-button-group>', function() {
  describe('simply instantiating', function() {
    let element: RhButtonGroup;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-button-group')).to.be.an.instanceof(RhButtonGroup);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhButtonGroup>(html`<rh-button-group></rh-button-group>`);
      const klass = customElements.get('rh-button-group');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhButtonGroup);
    });

    it('renders slot correctly', async function() {
      element = await createFixture<RhButtonGroup>(html`<rh-button-group></rh-button-group>`);
      const slot = element.shadowRoot?.querySelector('slot');
      expect(slot).to.exist;
    });
  });

  describe('with buttons', function() {
    it('should render with buttons', async function() {
      const element = await createFixture<RhButtonGroup>(html`
        <rh-button-group>
          <rh-button>Save</rh-button>
          <rh-button>Cancel</rh-button>
        </rh-button-group>
      `);
      await element.updateComplete;

      const buttons = element.querySelectorAll('rh-button');
      expect(buttons).to.have.length(2);
    });

    it('should set tabindex=0 for group role', async function() {
      const element = await createFixture<RhButtonGroup>(html`
        <rh-button-group role="group">
          <rh-button>Save</rh-button>
          <rh-button>Cancel</rh-button>
        </rh-button-group>
      `);
      await element.updateComplete;

      const buttons = element.querySelectorAll('rh-button');
      buttons.forEach(button => {
        expect(button.getAttribute('tabindex')).to.equal('0');
      });
    });

    it('should handle role="toolbar" with roving tabindex', async function() {
      const element = await createFixture<RhButtonGroup>(html`
        <rh-button-group role="toolbar">
          <rh-button>Edit</rh-button>
          <rh-button>Copy</rh-button>
          <rh-button>Delete</rh-button>
        </rh-button-group>
      `);
      await element.updateComplete;

      const buttons = element.querySelectorAll('rh-button');
      expect(buttons[0].getAttribute('tabindex')).to.equal('0');
      expect(buttons[1].getAttribute('tabindex')).to.equal('-1');
      expect(buttons[2].getAttribute('tabindex')).to.equal('-1');
    });
  });
});
