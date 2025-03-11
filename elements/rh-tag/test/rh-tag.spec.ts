import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhTag } from '../rh-tag.js';
import { tokens } from '@rhds/tokens';

describe('<rh-tag>', async function() {
  let element: RhTag;
  let styles: CSSStyleDeclaration;
  let beforeStyles: CSSStyleDeclaration;
  let container: HTMLElement;

  function getStyles(element: HTMLElement) {
    return getComputedStyle(element);
  }

  function getBeforeStyles(element: HTMLElement) {
    return getComputedStyle(element, '::before');
  }

  describe('default', async function() {
    beforeEach(async function() {
      element = await createFixture <RhTag>(html`
        <rh-tag>Default</rh-tag>
      `);
      container = element.shadowRoot!.querySelector('#container')!;
      styles = getStyles(container);
      beforeStyles = getBeforeStyles(container);
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-tag');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhTag);
    });

    it('passes the a11y audit', async function() {
      await expect(element).to.be.accessible();
    });

    it('should have correct background color', function() {
      expect(styles.getPropertyValue('background-color'))
          .to.be.colored(tokens.get('--rh-color-surface-lighter') as string);
    });

    it('should have correct border color', function() {
      expect(beforeStyles.getPropertyValue('border-color'))
          .to.be.colored(tokens.get('--rh-color-gray-30') as string);
    });

    it('should have correct text color', function() {
      expect(styles.getPropertyValue('color'))
          .to.be.colored(tokens.get('--rh-color-gray-70') as string);
    });
  });

  describe('red', async function() {
    beforeEach(async function() {
      element = await createFixture <RhTag>(html`
        <rh-tag color="red">red</rh-tag>
      `);
      container = element.shadowRoot!.querySelector('#container')!;
      styles = getStyles(container);
      beforeStyles = getBeforeStyles(container);
    });

    it('should have correct background color', function() {
      expect(styles.getPropertyValue('background-color'))
          .to.be.colored(tokens.get('--rh-color-red-10') as string);
    });

    it('should have correct border color', function() {
      expect(beforeStyles.getPropertyValue('border-color'))
          .to.be.colored(tokens.get('--rh-color-red-30') as string);
    });

    it('should have correct text color', function() {
      expect(styles.getPropertyValue('color'))
          .to.be.colored(tokens.get('--rh-color-red-70') as string);
    });
  });

  describe('with icon attribute', async function() {
    let unslotted: RhTag;
    let containerWithIcon: HTMLElement;
    beforeEach(async function() {
      unslotted = await createFixture<RhTag>(html`<rh-tag>Default</rh-tag>`);
      element = await createFixture <RhTag>(html`
        <rh-tag icon="information">Default</rh-tag>
      `);
      container = unslotted.shadowRoot!.querySelector('#container')!;
      containerWithIcon = element.shadowRoot!.querySelector('#container')!;
    });

    it('should display the icon', function() {
      expect(containerWithIcon.getBoundingClientRect().width)
          .to.be
          .greaterThan(container.getBoundingClientRect().width);
    });
  });

  describe('slotted icon', async function() {
    let unslotted: RhTag;
    let containerWithIcon: HTMLElement;
    beforeEach(async function() {
      unslotted = await createFixture<RhTag>(html`<rh-tag>Default</rh-tag>`);
      element = await createFixture<RhTag>(html`
        <rh-tag>
          Default
          <rh-icon set="ui" icon="information"></rh-icon>
        </rh-tag>
      `);
      container = unslotted.shadowRoot!.querySelector('#container')!;
      containerWithIcon = element.shadowRoot!.querySelector('#container')!;
    });

    /* Skipping this test because of the rh-icon slotted can not be
     * tested currently given pfe-tools/test/config.js sets the
     * template and the importmap for tests.
     * https://github.com/patternfly/patternfly-elements/blob/bce98d265c205ad78b55f295ff7963ca3396f07e/tools/pfe-tools/test/config.ts#L19-L35
     */
    it.skip('should display the icon', function() {
      expect(containerWithIcon.getBoundingClientRect().width)
          .to.be
          .greaterThan(container.getBoundingClientRect().width);
    });
  });

  describe('slotted svg', async function() {
    let unslotted: RhTag;
    let containerWithIcon: HTMLElement;
    beforeEach(async function() {
      unslotted = await createFixture<RhTag>(html`<rh-tag>Default</rh-tag>`);
      element = await createFixture<RhTag>(html`
        <rh-tag>
          Default
          <svg slot="icon" viewBox="0 0 512 512">
            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/>
          </svg>
        </rh-tag>
      `);
      container = unslotted.shadowRoot!.querySelector('#container')!;
      containerWithIcon = element.shadowRoot!.querySelector('#container')!;
    });

    it('should display the icon', function() {
      expect(containerWithIcon.getBoundingClientRect().width)
          .to.be
          .greaterThan(container.getBoundingClientRect().width);
    });
  });
});
