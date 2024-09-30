import type { A11yTreeSnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { RhSwitch } from '@rhds/elements/rh-switch/rh-switch.js';

describe('<rh-switch>', function() {
  it('imperatively instantiates', function() {
    expect(document.createElement('rh-switch')).to.be.an.instanceof(RhSwitch);
  });

  describe('simply instantiating', function() {
    let element: RhSwitch;
    let snapshot: A11yTreeSnapshot;
    beforeEach(async function() {
      element = await createFixture<RhSwitch>(html`
        <rh-switch accessible-label="Dark Mode"></rh-switch>
      `);
    });
    it('should upgrade', async function() {
      const klass = customElements.get('rh-switch');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhSwitch);
    });
    it('has accessible role', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      expect(snapshot.role).to.equal('switch');
    });
    it('has accessible checked field', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      expect(snapshot.role).to.equal('switch');
    });
    it('requires accessible name', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      expect(snapshot.name).to.not.be.empty.and.to.not.be.null;
      expect(snapshot.name).to.equal('Dark Mode');
    });
  });

  describe('with message attributes', function() {
    let element: RhSwitch;
    let snapshot: A11yTreeSnapshot;
    beforeEach(async function() {
      element = await createFixture<RhSwitch>(html`
        <rh-switch accessible-label="Dark Mode" message-on="Message when on" message-off="Message when off"></rh-switch>
      `);
      await element.updateComplete;
    });

    it('is accessible', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      expect(snapshot.role).to.equal('switch');
      expect(snapshot.name).to.be.ok;
      expect(snapshot.checked).to.be.false;
    });

    it('should show the message for the unchecked state', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      expect(snapshot.description).to.equal('Message when off');
    });

    describe('clicking the switch', function() {
      beforeEach(async function() {
        element.click();
        await element.updateComplete;
        await nextFrame();
      });
      it('should be checked', async function() {
        snapshot = await a11ySnapshot({ selector: 'rh-switch' });
        expect(element.checked).to.be.true;
        expect(snapshot.checked).to.be.true;
      });
      it('should show the label for the checked state', async function() {
        snapshot = await a11ySnapshot({ selector: 'rh-switch' });
        expect(snapshot.description).to.equal('Message when on');
      });
    });
  });

  describe('with slotted data-state messages for on and off state announcement', function() {
    let element: RhSwitch;
    let snapshot: A11yTreeSnapshot;
    beforeEach(async function() {
      element = await createFixture<RhSwitch>(html`
        <rh-switch accessible-label="Dark Mode">
          <span slot="message-on">Message when <strong>on</strong></span>
          <span slot="message-off">Message when <strong>off</strong></span>
        </rh-switch>
      `);
      await element.updateComplete;
    });

    it('is accessible', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      expect(snapshot.role).to.equal('switch');
      expect(snapshot.name).to.be.ok;
      expect(snapshot.checked).to.be.false;
    });

    it('should show the message for the unchecked state', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      expect(snapshot.description).to.equal('Message when off');
    });

    describe('clicking the switch', function() {
      beforeEach(async function() {
        element.click();
        await element.updateComplete;
        await nextFrame();
      });
      it('should be checked', async function() {
        snapshot = await a11ySnapshot({ selector: 'rh-switch' });
        expect(element.checked).to.be.true;
        expect(snapshot.checked).to.be.true;
      });
      it('should show the label for the checked state', async function() {
        snapshot = await a11ySnapshot({ selector: 'rh-switch' });
        expect(snapshot.description).to.equal('Message when on');
      });
    });
  });

  describe('when checked attr is present', function() {
    let element: RhSwitch;
    let snapshot: A11yTreeSnapshot;
    beforeEach(async function() {
      element = await createFixture<RhSwitch>(html`
        <rh-switch checked accessible-label="Change Message" message-on="Message when on" message-off="Message when off"></rh-switch>
      `);

      await element.updateComplete;
      await nextFrame();
    });

    it('should be checked', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      expect(element.checked).to.be.true;
      expect(snapshot.checked).to.be.true;
    });
  });

  describe('when checked attr is not present', function() {
    let element: RhSwitch;
    let snapshot: A11yTreeSnapshot;
    beforeEach(async function() {
      element = await createFixture<RhSwitch>(html`
        <rh-switch accessible-label="Change Message" message-on="Message when on" message-off="Message when off"></rh-switch>
      `);

      await element.updateComplete;
      await nextFrame();
    });

    it('should be checked', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      expect(element.checked).to.be.false;
      expect(snapshot.checked).to.be.false;
    });
  });


  describe('when checked and show-check-icon attrs are present', function() {
    let element: RhSwitch;
    beforeEach(async function() {
      element = await createFixture<RhSwitch>(html`
        <rh-switch checked show-check-icon accessible-label="Change Message" message-on="Message when on" message-off="Message when off"></rh-switch>
      `);
    });
    it('should display a check icon', async function() {
      // TODO: can we test this without inspecting the private shadowRoot?
      const svg = element.shadowRoot?.querySelector('rh-icon');
      expect(svg).to.be.ok;
      expect(svg?.hasAttribute('hidden')).to.be.false;
    });
  });


  describe('when used with a sibling label element', function() {
    let label: HTMLLabelElement;
    let element: RhSwitch;
    let snapshot: A11yTreeSnapshot;
    beforeEach(async function() {
      const container = await createFixture<HTMLLabelElement>(html`
        <fieldset>
          <label for="with-label">Dark Mode</label>
          <rh-switch id="with-label" message-on="Message when on" message-off="Message when off"></rh-switch>
        </fieldset>
      `);
      label = container.querySelector('label')!;
      element = container.querySelector('rh-switch')!;
    });
    it('has an accessible name', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      expect(snapshot.name).to.equal('Dark Mode');
    });
    describe('clicking the label', function() {
      beforeEach(async function() {
        label.click();
        await element.updateComplete;
        await nextFrame();
      });
      it('toggles the state', function() {
        expect(element.checked).to.be.true;
      });
    });
    describe('clicking the switch', function() {
      beforeEach(async function() {
        element.click();
        await element.updateComplete;
        await nextFrame();
      });
      it('toggles the state', function() {
        expect(element.checked).to.be.true;
      });
    });
  });

  describe('when used with a wrapping label element', function() {
    let label: HTMLLabelElement;
    let element: RhSwitch;
    let snapshot: A11yTreeSnapshot;
    beforeEach(async function() {
      const container = await createFixture<HTMLLabelElement>(html`
        <fieldset>
          <label>Dark Mode
            <rh-switch aria-describedby="switch-messages" message-on="Message when on" message-off="Message when off"></rh-switch>
          </label>
        </fieldset>
      `);
      label = container.querySelector('label')!;
      element = container.querySelector('rh-switch')!;
    });
    it('has an accessible name', async function() {
      snapshot = await a11ySnapshot({ selector: 'rh-switch' });
      /* name will have a extra space due to the label text being sibling to the switch */
      expect(snapshot.name).to.equal('Dark Mode ');
    });
    describe('clicking the label', function() {
      beforeEach(async function() {
        label.click();
        await element.updateComplete;
        await nextFrame();
      });
      it('toggles the state', function() {
        expect(element.checked).to.be.true;
      });
    });
    describe('clicking the switch', function() {
      beforeEach(async function() {
        element.click();
        await element.updateComplete;
        await nextFrame();
      });
      it('toggles the state', function() {
        expect(element.checked).to.be.true;
      });
    });
  });

  // TODO: test keyboard a11y with wtr sendKeys
});
