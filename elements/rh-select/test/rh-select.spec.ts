import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
import { clickElementAtCenter } from '@patternfly/pfe-tools/test/utils.js';
import { a11ySnapshot, querySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

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

async function create3OptionFixture() {
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
  const element = container.querySelector('rh-select')!;
  await element.updateComplete;
  return { container, element };
}

async function create5OptionFixture() {
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
  const element = container.querySelector('rh-select')!;
  await element.updateComplete;
  return { container, element };
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
      ({ element } = await create5OptionFixture());
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
      ({ element } = await create3OptionFixture());
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
      ({ element } = await create5OptionFixture());
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
          expect(snapshot).axTreeFocusedNode.to.have.axName('one');
        });

        describe('ArrowDown again', function() {
          beforeEach(press('ArrowDown'));
          beforeEach(updateComplete);

          it('moves focus to next option', async function() {
            const snapshot = await a11ySnapshot();
            expect(snapshot).axTreeFocusedNode.to.have.axName('two');
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
          expect(snapshot).axTreeFocusedNode.to.have.axName('one');
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
          expect(snapshot).axTreeFocusedNode.to.have.axName('five');
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
      ({ element } = await create3OptionFixture());
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
      ({ element } = await create3OptionFixture());
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
      expect(snapshot).axTreeFocusedNode.to.have.axName('two');
    });
  });

  describe('events', function() {
    let element: RhSelect;

    beforeEach(async function() {
      ({ element } = await create3OptionFixture());
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

  describe('type-ahead', function() {
    let element: RhSelect;
    const updateComplete = () => element.updateComplete;
    const focus = () => element.focus();

    beforeEach(async function() {
      ({ element } = await create3OptionFixture());
    });

    it('focuses matching option when typing characters', async function() {
      focus();
      await updateComplete();
      await sendKeys({ type: 'on' });
      await updateComplete();

      expect(element.expanded).to.be.true;
      const snapshot = await a11ySnapshot();
      expect(snapshot).axTreeFocusedNode.to.have.axName('one');
    });

    it('selects the focused option when pressing Enter after type-ahead', async function() {
      focus();
      await updateComplete();
      await sendKeys({ type: 'on' });
      await updateComplete();
      await sendKeys({ press: 'Enter' });
      await updateComplete();
      await nextFrame();

      expect(element.value).to.equal('one');
      expect(element.expanded).to.be.false;
    });
  });

  describe('form association', function() {
    let form: HTMLFormElement;
    let element: RhSelect;

    beforeEach(async function() {
      form = await createFixture<HTMLFormElement>(html`
        <form>
          <label for="select">label</label>
          <rh-select id="select" name="color" placeholder="placeholder">
            <rh-option value="red">Red</rh-option>
            <rh-option value="green">Green</rh-option>
            <rh-option value="blue">Blue</rh-option>
            <rh-option value="orange"></rh-option>
            <rh-option>Yellow</rh-option>
          </rh-select>
        </form>
      `);
      element = form.querySelector('rh-select')!;
      await element.updateComplete;
    });

    it('includes selected value in form data', async function() {
      await element.show();
      await element.updateComplete;
      const option = element.querySelectorAll('rh-option')[1] as RhOption;
      await clickElementAtCenter(option);
      await element.updateComplete;
      await nextFrame();

      const formData = new FormData(form);
      expect(formData.get('color')).to.equal('green');
    });

    it('includes value attribute in form data when option has value (orange)', async function() {
      await element.show();
      await element.updateComplete;
      const options = element.querySelectorAll('rh-option');
      const orangeOption = options[3] as RhOption;
      await clickElementAtCenter(orangeOption);
      await element.updateComplete;
      await nextFrame();

      const formData = new FormData(form);
      expect(formData.get('color')).to.equal('orange');
    });

    it('includes display label in form data when option has no value (Yellow)', async function() {
      await element.show();
      await element.updateComplete;
      const options = element.querySelectorAll('rh-option');
      const yellowOption = options[4] as RhOption;
      await clickElementAtCenter(yellowOption);
      await element.updateComplete;
      await nextFrame();

      const formData = new FormData(form);
      expect(formData.get('color')).to.equal('Yellow');
    });

    it('clears value on form reset', async function() {
      await element.show();
      await element.updateComplete;
      const option = element.querySelectorAll('rh-option')[0] as RhOption;
      await clickElementAtCenter(option);
      await element.updateComplete;
      await nextFrame();

      expect(element.value).to.equal('red');

      form.reset();
      await element.updateComplete;
      await nextFrame();

      expect(element.value).to.equal('');
    });
  });

  describe('required', function() {
    let form: HTMLFormElement;
    let element: RhSelect;

    beforeEach(async function() {
      form = await createFixture<HTMLFormElement>(html`
        <form>
          <label for="select">label</label>
          <rh-select id="select" name="choice" required placeholder="placeholder">
            <rh-option value="a">Option A</rh-option>
            <rh-option value="b">Option B</rh-option>
            <rh-option value="c">Option C</rh-option>
          </rh-select>
        </form>
      `);
      element = form.querySelector('rh-select')!;
      await element.updateComplete;
    });

    it('reflects required attribute to property', function() {
      expect(element.required).to.be.true;
      expect(element.hasAttribute('required')).to.be.true;
    });

    it('reflects required false when attribute removed', async function() {
      element.removeAttribute('required');
      await element.updateComplete;
      expect(element.required).to.be.false;
      expect(element.hasAttribute('required')).to.be.false;
    });

    it('checkValidity returns false when required and empty', function() {
      expect(element.checkValidity()).to.be.false;
    });

    it('checkValidity returns true when required and value set', async function() {
      element.value = 'a';
      await element.updateComplete;
      await nextFrame();
      expect(element.checkValidity()).to.be.true;
    });

    it('checkValidity returns true when not required and empty', async function() {
      element.required = false;
      await element.updateComplete;
      expect(element.checkValidity()).to.be.true;
    });

    it('reportValidity returns false when required and empty', function() {
      expect(element.reportValidity()).to.be.false;
    });

    it('reportValidity returns true when required and value set', async function() {
      element.value = 'b';
      await element.updateComplete;
      await nextFrame();
      expect(element.reportValidity()).to.be.true;
    });

    it('form reportValidity returns false when required and empty, then true after selection', async function() {
      expect(form.reportValidity()).to.be.false;

      await element.show();
      await element.updateComplete;
      const option = element.querySelectorAll('rh-option')[1] as RhOption;
      await clickElementAtCenter(option);
      await element.updateComplete;
      await nextFrame();

      expect(form.reportValidity()).to.be.true;
    });

    it('validity updates when value changes', async function() {
      expect(element.checkValidity()).to.be.false;

      element.value = 'c';
      await element.updateComplete;
      await nextFrame();
      expect(element.checkValidity()).to.be.true;

      element.value = '';
      await element.updateComplete;
      await nextFrame();
      expect(element.checkValidity()).to.be.false;
    });
  });

  describe('name', function() {
    it('reflects name attribute to property', async function() {
      const form = await createFixture<HTMLFormElement>(html`
        <form>
          <rh-select id="select" name="foo" placeholder="Pick">
            <rh-option value="x">X</rh-option>
          </rh-select>
        </form>
      `);
      const element = form.querySelector('rh-select')!;
      await element.updateComplete;

      expect(element.name).to.equal('foo');
      expect(element.getAttribute('name')).to.equal('foo');
    });

    it('reflects name property to attribute', async function() {
      const form = await createFixture<HTMLFormElement>(html`
        <form>
          <rh-select id="select" placeholder="Pick">
            <rh-option value="x">X</rh-option>
          </rh-select>
        </form>
      `);
      const element = form.querySelector('rh-select')!;
      await element.updateComplete;

      element.name = 'bar';
      await element.updateComplete;
      expect(element.getAttribute('name')).to.equal('bar');
    });

    it('FormData uses name from attribute', async function() {
      const form = await createFixture<HTMLFormElement>(html`
        <form>
          <label for="select">label</label>
          <rh-select id="select" name="field" placeholder="Pick">
            <rh-option value="one">One</rh-option>
            <rh-option value="two">Two</rh-option>
          </rh-select>
        </form>
      `);
      const element = form.querySelector('rh-select')!;
      await element.updateComplete;

      await element.show();
      await element.updateComplete;
      const option = element.querySelectorAll('rh-option')[1] as RhOption;
      await clickElementAtCenter(option);
      await element.updateComplete;
      await nextFrame();

      const formData = new FormData(form);
      expect(formData.get('field')).to.equal('two');
    });

    it('FormData uses name when set via property', async function() {
      const form = await createFixture<HTMLFormElement>(html`
        <form>
          <label for="select">label</label>
          <rh-select id="select" placeholder="Pick">
            <rh-option value="one">One</rh-option>
            <rh-option value="two">Two</rh-option>
          </rh-select>
        </form>
      `);
      const element = form.querySelector('rh-select')!;
      await element.updateComplete;

      element.name = 'programmatic';
      await element.updateComplete;

      await element.show();
      await element.updateComplete;
      const option = element.querySelectorAll('rh-option')[0] as RhOption;
      await clickElementAtCenter(option);
      await element.updateComplete;
      await nextFrame();

      const formData = new FormData(form);
      expect(formData.get('programmatic')).to.equal('one');
    });
  });

  describe('accessible label sources', function() {
    it('uses associated label (for/id) as combobox name', async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="select-products">Products</label>
          <rh-select id="select-products" placeholder="Select an item">
            <rh-option>One</rh-option>
            <rh-option>Two</rh-option>
          </rh-select>
        </div>
      `);
      const element = container.querySelector('rh-select')!;
      await element.updateComplete;

      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({
        role: 'combobox',
        name: 'Products',
      });
    });

    it('uses wrapping label as combobox name', async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label>
            Country
            <rh-select id="sel-wrap" placeholder="Choose">
              <rh-option>Canada</rh-option>
              <rh-option>USA</rh-option>
            </rh-select>
          </label>
        </div>
      `);
      const element = container.querySelector('rh-select')!;
      await element.updateComplete;

      const snapshot = await a11ySnapshot();
      const comboboxNode = querySnapshot(snapshot, { role: 'combobox' });
      expect(comboboxNode?.name?.trim()).to.equal('Country');
    });

    it('uses accessible-label attribute', async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-select accessible-label="Choose a color">
            <rh-option>red</rh-option>
            <rh-option>green</rh-option>
          </rh-select>
        </div>
      `);
      const element = container.querySelector('rh-select')!;
      await element.updateComplete;

      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({
        role: 'combobox',
        name: 'Choose a color',
      });
    });

    it('uses placeholder as fallback label', async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-select placeholder="Select something">
            <rh-option>red</rh-option>
            <rh-option>green</rh-option>
          </rh-select>
        </div>
      `);
      const element = container.querySelector('rh-select')!;
      await element.updateComplete;

      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({
        role: 'combobox',
        name: 'Select something',
      });
    });

    it('uses fallback "Select a value" when no label or placeholder', async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-select>
            <rh-option>Alpha</rh-option>
            <rh-option>Beta</rh-option>
          </rh-select>
        </div>
      `);
      const element = container.querySelector('rh-select')!;
      await element.updateComplete;

      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({
        role: 'combobox',
        name: 'Select a value',
      });
    });

    it('uses author aria-label when set on host', async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="sel-aria">Visible label</label>
          <rh-select id="sel-aria" aria-label="Custom label" placeholder="Select">
            <rh-option>First</rh-option>
            <rh-option>Second</rh-option>
          </rh-select>
        </div>
      `);
      const element = container.querySelector('rh-select')!;
      await element.updateComplete;

      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({
        role: 'combobox',
        name: 'Custom label',
      });
    });
  });

  describe('help-text and ARIA via ElementInternals', function() {
    // Skipped: in wtr/Chromium the a11y snapshot does not include `description` on the node
    // when set via ElementInternals.ariaDescription (same as internals-set role in nav-vertical).
    // Unskip when snapshot support improves or when running in an environment that exposes it.

    it.skip('help-text attribute exposes description in a11y tree', async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-select help-text="MyHelpText" placeholder="Select">
            <rh-option>one</rh-option>
          </rh-select>
        </div>
      `);
      const element = container.querySelector('rh-select')!;
      await element.updateComplete;
      await nextFrame();

      const snapshot = await a11ySnapshot();
      const comboboxNode = querySnapshot(snapshot, { role: 'combobox', name: 'Select' });
      expect(comboboxNode?.description).to.equal('MyHelpText');
    });

    it.skip('slotted help-text exposes description in a11y tree', async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-select placeholder="Select">
            <rh-option>one</rh-option>
            <p slot="help-text">MySlottedHelpText</p>
          </rh-select>
        </div>
      `);
      const element = container.querySelector('rh-select')!;
      await element.updateComplete;
      await nextFrame();

      const snapshot = await a11ySnapshot();
      const comboboxNode = querySnapshot(snapshot, { role: 'combobox', name: 'Select' });
      expect(comboboxNode?.description).to.equal('MySlottedHelpText');
    });
  });
});
