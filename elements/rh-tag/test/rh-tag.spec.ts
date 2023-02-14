import { expect, html, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhTag } from '../rh-tag.js';
import { tokens } from '@rhds/tokens';

import Color from 'colorjs.io';

describe('<rh-tag>', async function() {
  let element: RhTag;
  let styles: CSSStyleDeclaration;
  let beforeStyles: CSSStyleDeclaration;
  let container: HTMLElement;

  function getStyles(element) {
    return getComputedStyle(element);
  }

  function getBeforeStyles(element) {
    return getComputedStyle(element, '::before');
  }

  function normalizeColor(color?: string|number) {
    return new Color(color as string).toString();
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
      expect(normalizeColor(styles.getPropertyValue('background-color')))
        .to.equal(normalizeColor(tokens.get('--rh-color-surface-lighter')));
    });

    it('should have correct border color', function() {
      expect(normalizeColor(beforeStyles.getPropertyValue('border-color')))
        .to.equal(normalizeColor(tokens.get('--rh-color-black-300')));
    });

    it('should have correct text color', function() {
      expect(normalizeColor(styles.getPropertyValue('color')))
        .to.equal(normalizeColor(tokens.get('--rh-color-black-900')));
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
      expect(normalizeColor(styles.getPropertyValue('background-color')))
        .to.equal(normalizeColor(tokens.get('--rh-color-red-50')));
    });

    it('should have correct border color', function() {
      expect(normalizeColor(beforeStyles.getPropertyValue('border-color')))
        .to.equal(normalizeColor(tokens.get('--rh-color-red-600')));
    });

    it('should have correct text color', function() {
      expect(normalizeColor(styles.getPropertyValue('color')))
        .to.equal(normalizeColor(tokens.get('--rh-color-red-800')));
    });
  });

  describe('with icon attribute', async function() {
    let unslotted: RhTag;
    let containerWithIcon: HTMLElement;
    beforeEach(async function() {
      unslotted = await createFixture<RhTag>(html`<rh-tag>Default</rh-tag>`);
      element = await createFixture <RhTag>(html`
        <rh-tag icon="info-circle">Default</rh-tag>
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
          <pf-icon slot="icon" icon="info-circle"></pf-icon>
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
