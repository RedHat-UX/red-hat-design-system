import type { ReactiveElement } from 'lit';

import { expect, html, nextFrame, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { setViewport, sendKeys } from '@web/test-runner-commands';

import { RhTabs, RhTab } from '@rhds/elements/rh-tabs/rh-tabs.js';
import { tokens } from '@rhds/tokens';

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

  const updateComplete = () => allUpdates(element);

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
  });

  beforeEach(updateComplete);
  beforeEach(nextFrame);

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
      await updateComplete();
      await nextFrame();
      const tabs = element.shadowRoot!.querySelector('[part="tabs"]')!;
      const tabsVerticalStyles = getComputedStyle(tabs).flexDirection;
      expect(tabsVerticalStyles).to.be.equal('column');
    });
  });

  describe('box tabs', function() {
    it('should have box styles', async function() {
      element.setAttribute('box', 'box');
      await element.updateComplete;
      for (const tab of element.tabs) {
        expect(tab.shadowRoot?.querySelector('.box')).to.be.ok;
      }
    });
  });

  describe('inset tabs', function() {
    it('should have inset styles', async function() {
      element.setAttribute('box', 'inset');
      await updateComplete();
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
    let initialActiveElement: Element | null;

    beforeEach(async function() {
      [firstItem, secondItem] = element.querySelectorAll<RhTab>('rh-tab');
      lastItem = [...element.querySelectorAll<RhTab>('rh-tab')].pop()!;
      await sendKeys({ press: 'Tab' });
      initialActiveElement = document.activeElement;
    });

    beforeEach(updateComplete);
    beforeEach(nextFrame);

    it('should focus first tab item', function() {
      expect(document.activeElement).to.equal(firstItem);
    });

    describe('pressing right arrow key', function() {
      beforeEach(async function() {
        await sendKeys({ press: 'ArrowRight' });
      });

      beforeEach(updateComplete);
      beforeEach(nextFrame);

      it('should focus a rh-tab button', function() {
        expect(document.activeElement).to.be.an.instanceof(RhTab);
      });

      it('should specify the selected tab to assistive technology', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot.children?.find(x => x.selected)?.name).to.equal(secondItem.textContent);
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
      });

      beforeEach(updateComplete);
      beforeEach(nextFrame);

      it('should focus a rh-tab button', function() {
        expect(document.activeElement).to.be.an.instanceof(RhTab);
      });

      it('should change focus when keyboard navigation is used', function() {
        expect(document.activeElement).to.not.equal(initialActiveElement);
      });

      it('should focus the last rh-tab item', function() {
        expect(document.activeElement).to.equal(lastItem);
      });

      it('should specify the selected tab to assistive technology as last item', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot.children?.find(x => x.selected)?.name).to.equal(lastItem.textContent);
      });
    });
  });

  describe('manual activation', function() {
    let firstItem: RhTab;
    let secondItem: RhTab;
    let lastItem: RhTab;
    let initialActiveElement: Element | null;

    beforeEach(async function() {
      element.setAttribute('manual', '');
      await updateComplete();
      await nextFrame();
      [firstItem, secondItem] = element.querySelectorAll<RhTab>('rh-tab');
      lastItem = [...element.querySelectorAll<RhTab>('rh-tab')].pop()!;
      await sendKeys({ press: 'Tab' });
      initialActiveElement = document.activeElement;
    });

    beforeEach(updateComplete);
    beforeEach(nextFrame);

    describe('pressing right arrow key', function() {
      beforeEach(async function() {
        await sendKeys({ press: 'ArrowRight' });
      });

      beforeEach(updateComplete);
      beforeEach(nextFrame);

      it('should focus a rh-tab button', function() {
        expect(document.activeElement).to.be.an.instanceof(RhTab);
      });

      it('should specify the focused tab to assistive technology as second tab', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot.children?.find(x => x.focused)?.name).to.equal(secondItem.textContent);
      });

      it('should specify the selected tab to assistive technology as first tab', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot.children?.find(x => x.selected)?.name).to.equal(firstItem.textContent);
      });

      it('should change focus when keyboard navigation is used', function() {
        expect(document.activeElement).to.not.equal(initialActiveElement);
      });

      it('should focus the second rh-tab item', function() {
        expect(document.activeElement).to.equal(secondItem);
      });

      describe('pressing enter key', function() {
        beforeEach(async function() {
          await sendKeys({ press: 'Enter' });
        });

        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('should activate second item', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot.children?.find(x => x.focused)?.name).to.equal(secondItem.textContent);
          expect(snapshot.children?.find(x => x.selected)?.name).to.equal(secondItem.textContent);
        });
      });
    });

    describe('pressing left arrow key', function() {
      beforeEach(async function() {
        await sendKeys({ press: 'ArrowLeft' });
      });

      beforeEach(updateComplete);
      beforeEach(nextFrame);

      it('should focus a rh-tab button', function() {
        expect(document.activeElement).to.be.an.instanceof(RhTab);
      });

      it('should change focus when keyboard navigation is used', function() {
        expect(document.activeElement).to.not.equal(initialActiveElement);
      });

      it('should focus the last rh-tab item', function() {
        expect(document.activeElement).to.equal(lastItem);
      });

      it('should specify the focused tab to assistive technology as last tab', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot.children?.find(x => x.focused)?.name).to.equal(lastItem.textContent);
      });

      it('should specify the selected tab to assistive technology as first tab', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot.children?.find(x => x.selected)?.name).to.equal(firstItem.textContent);
      });

      describe('pressing enter key', function() {
        beforeEach(async function() {
          await sendKeys({ press: 'Enter' });
        });

        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('should activate last item', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot.children?.find(x => x.focused)?.name).to.equal(lastItem.textContent);
          expect(snapshot.children?.find(x => x.selected)?.name).to.equal(lastItem.textContent);
        });
      });
    });
  });

  describe('on small screen', function() {
    beforeEach(async function() {
      await setViewport({ width: 320, height: 640 });
    });

    beforeEach(updateComplete);
    beforeEach(nextFrame);

    it('should overflow if too wide', async function() {
      const tabs = element.shadowRoot!.querySelector('[part="tabs"]')!;
      const tabsOverflow = getComputedStyle(tabs).overflowX === 'auto';
      expect(tabsOverflow).to.be.equal(true);
    });

    describe('reversed right to left language overflow actions', function() {
      let body: HTMLElement;
      let clone: RhTabs;
      beforeEach(async function() {
        body = document.querySelector('body')!;
        body.setAttribute('dir', 'rtl');
        element.connectedCallback();
      });

      beforeEach(updateComplete);
      beforeEach(nextFrame);

      it('previousTab should be disabled', async function() {
        const previousTab: HTMLButtonElement = element.shadowRoot!.querySelector('#previous-tab')!;
        expect(previousTab.disabled).to.be.equal(true);
      });

      it('click on nextTab should scroll Left', async function() {
        const nextTab: HTMLButtonElement = element.shadowRoot!.querySelector('#next-tab')!;
        const firstTab = element.querySelector('rh-tab')!;
        const preClickPosition = firstTab.getBoundingClientRect().x;
        nextTab?.click();
        await aTimeout(50);
        // get first tab and check its x position
        const afterClickPosition = firstTab.getBoundingClientRect().x;
        expect(afterClickPosition).to.be.greaterThan(preClickPosition);
      });
    });
  });
});
