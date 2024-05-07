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
        <rh-switch aria-describedby="switch-message" accessible-label="Dark Mode" checked>
          <div id="switch-message">
            <span data-state="on">Message when on</span>
            <span data-state="off" hidden>Message when off</span>
          </div>
        </rh-switch>
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

  describe('with slotted data-state messages for on and off state announcement', function() {
    let element: RhSwitch;
    let snapshot: A11yTreeSnapshot;
    beforeEach(async function() {
      element = await createFixture<RhSwitch>(html`
        <rh-switch aria-describedby="switch-message" accessible-label="Dark Mode">
          <div id="switch-message">
            <span data-state="on">Message when on</span>
            <span data-state="off" hidden>Message when off</span>
          </div>
        </rh-switch>
      `);
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
        <rh-switch checked aria-describedby="switch-message" accessible-label="Change Message">
          <div id="switch-message">
            <span data-state="on">Message when on</span>
            <span data-state="off" hidden>Message when off</span>
          </div>
        </rh-switch>
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
        <rh-switch aria-describedby="switch-message" accessible-label="Change Message">
          <div id="switch-message">
            <span data-state="on">Message when on</span>
            <span data-state="off" hidden>Message when off</span>
          </div>
        </rh-switch>
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
        <rh-switch checked show-check-icon aria-describedby="switch-message" accessible-label="Change Message" >
          <div id="switch-message">
            <span data-state="on">Message when on</span>
            <span data-state="off" hidden>Message when off</span>
          </div>
        </rh-switch>
      `);
    });
    it('should display a check icon', async function() {
      // TODO: can we test this without inspecting the private shadowRoot?
      const svg = element.shadowRoot.querySelector('svg');
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
          <rh-switch id="with-label" aria-describedby="switch-messages">
            <div id="switch-messages">
              <span data-state="on">Message when on</span>
              <span data-state="off" hidden>Message when off</span>
            </div>
          </rh-switch>
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
            <rh-switch aria-describedby="switch-messages">
              <div id="switch-messages">
                <span data-state="on">Message when on</span>
                <span data-state="off" hidden>Message when off</span>
              </div>
            </rh-switch>
          </label>
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

  // TODO: test keyboard a11y with wtr sendKeys
});
