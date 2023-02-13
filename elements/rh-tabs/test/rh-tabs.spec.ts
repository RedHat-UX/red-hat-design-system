import { expect, html, nextFrame, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { setViewport, sendKeys } from '@web/test-runner-commands';

import { RhTabs } from '@rhds/elements/rh-tabs/rh-tabs.js';
import { RhTab } from '@rhds/elements/rh-tabs/rh-tab.js';
import { tokens } from '@rhds/tokens';

import Color from 'colorjs.io';

function normalizeColor(color?: string|number) {
  return new Color(color as string).toString();
}

async function allUpdates(element: ReactiveElement) {
  let count = 0;
  do {
    if (count > 100) {
      throw new Error('Too Many Updates');
    }
    await element.updateComplete;
    count++;
  } while (!await element.updateComplete);
}

describe('<rh-tabs>', function() {
  let element: RhTabs;

  beforeEach(async function() {
    element = await createFixture<RhTabs>(html`
      <rh-tabs>
        <rh-tab id="users" slot="tab" active>Users</rh-tab>
        <rh-tab-panel>Users</rh-tab-panel>
        <rh-tab slot="tab">Containers</rh-tab>
        <rh-tab-panel>Containers <a href="#">Focusable element</a></rh-tab-panel>
        <rh-tab slot="tab">Database</rh-tab>
        <rh-tab-panel>Database</rh-tab-panel>
        <rh-tab slot="tab">Servers</rh-tab>
        <rh-tab-panel>Servers</rh-tab-panel>
        <rh-tab slot="tab">Cloud</rh-tab>
        <rh-tab-panel>Cloud</rh-tab-panel>
      </rh-tabs>
    `);
    await allUpdates(element);
  });

  it('should upgrade', async function() {
    const klass = customElements.get('rh-tabs');
    expect(element)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhTabs);
  });

  describe('vertical tabs', function() {
    it('should have vertical styles', async function() {
      element.setAttribute('vertical', '');
      await nextFrame();
      const tabs = element.shadowRoot!.querySelector('[part="tabs"]')!;
      const tabsVerticalStyles = getComputedStyle(tabs).flexDirection;
      expect(tabsVerticalStyles).to.be.equal('column');
    });
  });

  describe('box tabs', function() {
    it('should have box styles', async function() {
      element.setAttribute('box', '');
      await nextFrame();
      const tab = element.querySelector('rh-tab');
      const button = tab.shadowRoot!.querySelector('button')!;
      const buttonBeforeStyles = getComputedStyle(button, '::before').borderInlineStartWidth;
      expect(buttonBeforeStyles).to.be.equal(tokens.get('--rh-border-width-sm'));
    });
  });

  describe('inset tabs', function() {
    it('should have inset styles', async function() {
      element.setAttribute('box', 'inset');
      await nextFrame();
      const insetEl = element.shadowRoot!.querySelector(`[part="tabs"]`)!;
      const insetStyles = getComputedStyle(insetEl).marginInline;
      expect(insetStyles).to.be.equal(tokens.get(`--rh-space-2xl`));
    });
  });

  describe('keyboard navigation', function() {
    let firstItem: RhTab;
    let secondItem: RhTab;
    let lastItem: RhTab;
    let initialActiveElement: Element|null;

    beforeEach(async function() {
      [firstItem, secondItem] = element.querySelectorAll<RhTab>('rh-tab');
      lastItem = [...element.querySelectorAll<RhTab>('rh-tab')].pop();
      await sendKeys({ press: 'Tab' });
      initialActiveElement = document.activeElement;
    });

    it('should focus a this first jump-links-item', function() {
      expect(document.activeElement).to.equal(firstItem);
    });

    describe('pressing right arrow key', function() {
      beforeEach(async function() {
        await sendKeys({ press: 'ArrowRight' });
        await allUpdates(element);
        await nextFrame();
      });

      it('should focus a rh-tab button', function() {
        expect(document.activeElement).to.be.an.instanceof(RhTab);
      });

      it('should change focus when keyboard navigation is used', function() {
        expect(document.activeElement).to.not.equal(initialActiveElement);
      });

      it('should focus the second rh-tab item', function() {
        expect(document.activeElement).to.equal(secondItem);
      });
    });

    describe('pressing left arrow key', function() {
      beforeEach(async function() {
        await sendKeys({ press: 'ArrowLeft' });
        await allUpdates(element);
        await nextFrame();
      });

      it('should focus a rh-tab button', function() {
        expect(document.activeElement).to.be.an.instanceof(RhTab);
      });

      it('should change focus when keyboard navigation is used', function() {
        expect(document.activeElement).to.not.equal(initialActiveElement);
      });

      it('should focus the last rh-tab item', function() {
        expect(document.activeElement).to.equal(lastItem);
      });
    });
  });

  describe('on small screen', function() {
    beforeEach(async function() {
      await setViewport({ width: 320, height: 640 });
      await allUpdates(element);
    });

    it('should overflow if too wide', async function() {
      const tabs = element.shadowRoot!.querySelector('[part="tabs"]')!;
      const tabsOverflow = getComputedStyle(tabs).overflowX === 'auto';
      expect(tabsOverflow).to.be.equal(true);
    });

    it('should have visible scroll buttons if overflowed', async function() {
      await aTimeout(150);
      const previousTab = element.shadowRoot!.querySelector('#previousTab')!;
      const nextTab = element.shadowRoot!.querySelector('#nextTab')!;
      const prevDisplayStyle = getComputedStyle(previousTab).display;
      const nextDisplayStyle = getComputedStyle(nextTab).display;
      expect(prevDisplayStyle ).to.not.equal('none');
      expect(nextDisplayStyle).to.not.equal('none');
    });
  });
});
