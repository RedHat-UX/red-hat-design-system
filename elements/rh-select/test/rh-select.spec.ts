import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
import { clickElementAtCenter } from '@patternfly/pfe-tools/test/utils.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { RhSelect } from '@rhds/elements/rh-select/rh-select.js';
import type { RhOption } from '@rhds/elements/rh-select/rh-option.js';
import type { RhOptionGroup } from '@rhds/elements/rh-select/rh-option-group.js';

const RhOptionClass = customElements.get('rh-option')!;
const RhOptionGroupClass = customElements.get('rh-option-group')!;

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

describe('<rh-select>', function() {
  describe('simply instantiating', function() {
    let element: RhSelect;

    it('imperatively instantiates', function() {
      expect(document.createElement('rh-select')).to.be.an.instanceof(RhSelect);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhSelect>(html`<rh-select></rh-select>`);
      const klass = customElements.get('rh-select');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhSelect);
    });
  });

  describe('<rh-option>', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-option')).to.be.an.instanceof(RhOptionClass);
    });

    it('should upgrade', async function() {
      const element = await createFixture<RhOption>(html`<rh-option>Test</rh-option>`);
      const klass = customElements.get('rh-option');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhOptionClass);
    });
  });

  describe('<rh-option-group>', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-option-group')).to.be.an.instanceof(RhOptionGroupClass);
    });

    it('should upgrade', async function() {
      const element = await createFixture<RhOptionGroup>(html`
        <rh-option-group label="Group">
          <rh-option>Test</rh-option>
        </rh-option-group>
      `);
      const klass = customElements.get('rh-option-group');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhOptionGroupClass);
    });
  });

  describe('<rh-select> with label and options', function() {
    let element: RhSelect;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="placeholder">
            <rh-option>one</rh-option>
            <rh-option>two</rh-option>
            <rh-option>three</rh-option>
            <rh-option>four</rh-option>
            <rh-option>five</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });

  describe('<rh-select> with <rh-option-group>', function() {
    let element: RhSelect;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="placeholder">
            <rh-option>one</rh-option>
            <rh-option-group label="group">
              <rh-option>two</rh-option>
              <rh-option>three</rh-option>
              <rh-option>four</rh-option>
            </rh-option-group>
            <rh-option>five</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });

  describe('placeholder attribute', function() {
    let element: RhSelect;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="Select an option">
            <rh-option>one</rh-option>
            <rh-option>two</rh-option>
            <rh-option>three</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      await element.updateComplete;
    });

    it('displays placeholder text in toggle button when nothing is selected', function() {
      const toggleButton = element.shadowRoot?.querySelector('#toggle-button');
      expect(toggleButton?.textContent?.trim()).to.include('Select an option');
    });
  });

  describe('expanded property', function() {
    let element: RhSelect;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="placeholder">
            <rh-option>one</rh-option>
            <rh-option>two</rh-option>
            <rh-option>three</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      await element.updateComplete;
    });

    it('is false initially', function() {
      expect(element.expanded).to.be.false;
    });

    it('is true after calling show()', async function() {
      await element.show();
      expect(element.expanded).to.be.true;
    });

    it('is false after calling hide()', async function() {
      await element.show();
      expect(element.expanded).to.be.true;
      await element.hide();
      expect(element.expanded).to.be.false;
    });
  });

  describe('<rh-option disabled>', function() {
    let element: RhSelect;
    let disabledOption: RhOption;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="placeholder">
            <rh-option>one</rh-option>
            <rh-option disabled>two (disabled)</rh-option>
            <rh-option>three</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      disabledOption = element.querySelectorAll('rh-option')[1] as RhOption;
      await element.updateComplete;
    });

    it('cannot be selected via keyboard', async function() {
      await element.show();
      await element.updateComplete;
      disabledOption.focus();
      await sendKeys({ press: 'Enter' });
      await element.updateComplete;
      expect(element.selected).to.not.include(disabledOption);
      expect(element.value).to.not.equal('two (disabled)');
    });

    it('cannot be selected via mouse click', async function() {
      await element.show();
      await element.updateComplete;
      await clickElementAtCenter(disabledOption);
      await element.updateComplete;
      expect(element.selected).to.not.include(disabledOption);
      expect(element.value).to.not.equal('two (disabled)');
    });
  });

  describe('keyboard navigation', function() {
    let element: RhSelect;
    const updateComplete = () => element.updateComplete;
    const focus = () => element.focus();

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="placeholder">
            <rh-option>one</rh-option>
            <rh-option>two</rh-option>
            <rh-option>three</rh-option>
            <rh-option>four</rh-option>
            <rh-option>five</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      await element.updateComplete;
    });

    describe('opening the listbox', function() {
      beforeEach(focus);
      beforeEach(updateComplete);

      describe('ArrowDown', function() {
        beforeEach(press('ArrowDown'));
        beforeEach(updateComplete);

        it('opens the listbox', function() {
          expect(element.expanded).to.be.true;
        });

        it('focuses the first option (placeholder)', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).axTreeFocusedNode.to.have.axName('placeholder');
        });
      });

      describe('ArrowUp', function() {
        beforeEach(press('ArrowUp'));
        beforeEach(updateComplete);

        it('opens the listbox', function() {
          expect(element.expanded).to.be.true;
        });

        it('focuses the first option', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).axTreeFocusedNode.to.have.axName('placeholder');
        });
      });

      describe('Enter', function() {
        beforeEach(press('Enter'));
        beforeEach(updateComplete);

        it('opens the listbox', function() {
          expect(element.expanded).to.be.true;
        });
      });

      describe('Space', function() {
        beforeEach(press(' '));
        beforeEach(updateComplete);

        it('opens the listbox', function() {
          expect(element.expanded).to.be.true;
        });
      });
    });

    describe('navigation within open listbox', function() {
      beforeEach(focus);
      beforeEach(updateComplete);
      beforeEach(press('ArrowDown'));
      beforeEach(updateComplete);

      describe('ArrowDown', function() {
        beforeEach(press('ArrowDown'));
        beforeEach(updateComplete);

        it('moves focus to next option', async function() {
          const snapshot = await a11ySnapshot();
          // a11y tree reports "one one" due to hidden slot + displayLabel in rh-option template
          expect(snapshot).axTreeFocusedNode.to.have.axName('one one');
        });

        describe('ArrowDown again', function() {
          beforeEach(press('ArrowDown'));
          beforeEach(updateComplete);

          it('moves focus to next option', async function() {
            const snapshot = await a11ySnapshot();
            expect(snapshot).axTreeFocusedNode.to.have.axName('two two');
          });
        });
      });

      describe('ArrowUp', function() {
        beforeEach(press('ArrowDown'));
        beforeEach(updateComplete);
        beforeEach(press('ArrowDown'));
        beforeEach(updateComplete);
        beforeEach(press('ArrowUp'));
        beforeEach(updateComplete);

        it('moves focus to previous option', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).axTreeFocusedNode.to.have.axName('one one');
        });
      });

      describe('Home', function() {
        beforeEach(press('ArrowDown'));
        beforeEach(updateComplete);
        beforeEach(press('ArrowDown'));
        beforeEach(updateComplete);
        beforeEach(press('Home'));
        beforeEach(updateComplete);

        it('moves focus to first option', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).axTreeFocusedNode.to.have.axName('placeholder');
        });
      });

      describe('End', function() {
        beforeEach(press('End'));
        beforeEach(updateComplete);

        it('moves focus to last option', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).axTreeFocusedNode.to.have.axName('five five');
        });
      });
    });

    describe('selection', function() {
      beforeEach(focus);
      beforeEach(updateComplete);
      beforeEach(press('ArrowDown'));
      beforeEach(updateComplete);
      beforeEach(press('ArrowDown'));
      beforeEach(updateComplete);

      describe('Enter', function() {
        beforeEach(press('Enter'));
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('selects the focused option', function() {
          expect(element.value).to.equal('one');
        });

        it('closes the listbox', function() {
          expect(element.expanded).to.be.false;
        });

        it('updates selected array', function() {
          expect(element.selected.length).to.equal(1);
          expect(element.selected[0].value).to.equal('one');
        });

        it('displays selected option in toggle button', function() {
          const toggleButton = element.shadowRoot?.querySelector('#toggle-button');
          expect(toggleButton?.textContent?.trim()).to.include('one');
        });
      });

      describe('Space', function() {
        beforeEach(press(' '));
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('selects the focused option', function() {
          expect(element.value).to.equal('one');
        });

        it('closes the listbox', function() {
          expect(element.expanded).to.be.false;
        });
      });
    });

    describe('closing without selection', function() {
      beforeEach(focus);
      beforeEach(updateComplete);
      beforeEach(press('ArrowDown'));
      beforeEach(updateComplete);

      describe('Escape', function() {
        beforeEach(press('Escape'));
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('closes the listbox', function() {
          expect(element.expanded).to.be.false;
        });

        it('does not select anything', function() {
          expect(element.value).to.equal('');
          expect(element.selected.length).to.equal(0);
        });

        it('returns focus to toggle button', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).axTreeFocusedNode.to.have.axRole('combobox');
        });
      });

      describe('Tab', function() {
        beforeEach(press('Tab'));
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('closes the listbox', function() {
          expect(element.expanded).to.be.false;
        });
      });
    });
  });

  describe('mouse interaction', function() {
    let element: RhSelect;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="placeholder">
            <rh-option>one</rh-option>
            <rh-option>two</rh-option>
            <rh-option>three</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      await element.updateComplete;
    });

    describe('clicking toggle button', function() {
      it('opens the listbox', async function() {
        const toggleButton = element.shadowRoot!.querySelector('#toggle-button') as HTMLElement;
        await clickElementAtCenter(toggleButton);
        await element.updateComplete;
        expect(element.expanded).to.be.true;
      });

      it('closes the listbox when clicked again', async function() {
        const toggleButton = element.shadowRoot!.querySelector('#toggle-button') as HTMLElement;
        await clickElementAtCenter(toggleButton);
        await element.updateComplete;
        expect(element.expanded).to.be.true;
        await clickElementAtCenter(toggleButton);
        await element.updateComplete;
        expect(element.expanded).to.be.false;
      });
    });

    describe('clicking an option', function() {
      it('selects the option and closes the listbox', async function() {
        await element.show();
        await element.updateComplete;
        const option = element.querySelectorAll('rh-option')[1] as RhOption;
        await clickElementAtCenter(option);
        await element.updateComplete;
        await nextFrame();

        expect(element.value).to.equal('two');
        expect(element.selected.length).to.equal(1);
        expect(element.selected[0].value).to.equal('two');
        expect(element.expanded).to.be.false;

        const toggleButton = element.shadowRoot?.querySelector('#toggle-button');
        expect(toggleButton?.textContent?.trim()).to.include('two');
      });
    });
  });

  describe('toggle() method', function() {
    let element: RhSelect;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="placeholder">
            <rh-option>one</rh-option>
            <rh-option>two</rh-option>
            <rh-option>three</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      await element.updateComplete;
    });

    it('opens the listbox when closed', async function() {
      expect(element.expanded).to.be.false;
      await element.toggle();
      expect(element.expanded).to.be.true;
    });

    it('closes the listbox when open', async function() {
      await element.toggle();
      expect(element.expanded).to.be.true;
      await element.toggle();
      expect(element.expanded).to.be.false;
    });
  });

  describe('<rh-option-group disabled>', function() {
    let element: RhSelect;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="placeholder">
            <rh-option>one</rh-option>
            <rh-option-group label="group" disabled>
              <rh-option>two</rh-option>
              <rh-option>three</rh-option>
            </rh-option-group>
            <rh-option>four</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      await element.updateComplete;
    });

    it('prevents selection of child options via keyboard', async function() {
      await element.show();
      await element.updateComplete;
      const disabledOption = element.querySelector('rh-option-group rh-option') as RhOption;
      disabledOption.focus();
      await sendKeys({ press: 'Enter' });
      await element.updateComplete;
      expect(element.selected).to.not.include(disabledOption);
      expect(element.value).to.not.equal('two');
    });
  });

  describe('<rh-option-group> navigation', function() {
    let element: RhSelect;
    const updateComplete = () => element.updateComplete;
    const focus = () => element.focus();

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="placeholder">
            <rh-option>one</rh-option>
            <rh-option-group label="group">
              <rh-option>two</rh-option>
              <rh-option>three</rh-option>
            </rh-option-group>
            <rh-option>four</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      await element.updateComplete;
    });

    it('can navigate to options inside the group', async function() {
      focus();
      await updateComplete();
      await sendKeys({ press: 'ArrowDown' });
      await updateComplete();
      // Navigate: placeholder -> one -> two (inside group)
      await sendKeys({ press: 'ArrowDown' });
      await updateComplete();
      await sendKeys({ press: 'ArrowDown' });
      await updateComplete();

      const snapshot = await a11ySnapshot();
      expect(snapshot).axTreeFocusedNode.to.have.axName('two two');
    });
  });

  describe('events', function() {
    let element: RhSelect;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select">label</label>
          <rh-select id="select" placeholder="placeholder">
            <rh-option>one</rh-option>
            <rh-option>two</rh-option>
            <rh-option>three</rh-option>
          </rh-select>
        </div>
      `);
      element = container.querySelector('rh-select')!;
      await element.updateComplete;
    });

    it('fires "open" event when listbox opens', async function() {
      let fired = false;
      element.addEventListener('open', () => fired = true);
      await element.show();
      expect(fired).to.be.true;
    });

    it('fires "close" event when listbox closes', async function() {
      await element.show();
      let fired = false;
      element.addEventListener('close', () => fired = true);
      await element.hide();
      expect(fired).to.be.true;
    });

    it('fires "change" event when selection changes', async function() {
      let fired = false;
      element.addEventListener('change', () => fired = true);
      await element.show();
      await element.updateComplete;
      const option = element.querySelectorAll('rh-option')[0] as RhOption;
      await clickElementAtCenter(option);
      await element.updateComplete;
      expect(fired).to.be.true;
    });
  });
});
