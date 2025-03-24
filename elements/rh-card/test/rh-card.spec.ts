import { expect, html, fixture } from '@open-wc/testing';
import { RhCard } from '../rh-card.js';

import { tokens } from '@rhds/tokens/meta.js';

const shouldUpgrade = (element: unknown) => {
  const klass = customElements.get('rh-card');
  expect(element).to.be.an.instanceOf(klass).and.to.be.an.instanceOf(RhCard);
};

const remToPx = (remOrPx: string) => {
  if (remOrPx.endsWith('px')) {
    return remOrPx;
  } else {
    return `${parseFloat(remOrPx) * 16}px`;
  }
};

describe('<rh-card>', function() {
  describe('default element', function() {
    let element: RhCard;
    beforeEach(async function() {
      element = await fixture<RhCard>(html`
        <rh-card>
          <h3 slot="header">Default</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est</p>
          <a href="#" slot="footer">Link</a>
        </rh-card>
      `);
    });

    it('should upgrade', async function() {
      shouldUpgrade(element);
    });

    describe('heading', function() {
      it('should have font-size --rh-font-size-heading-sm', async function() {
        expect(getComputedStyle(element.querySelector('h3')!).getPropertyValue('font-size'))
            .to.equal(remToPx(tokens.get('--rh-font-size-heading-sm')?.$value));
      });
    });

    describe('body', function() {
      it('should have font-size --rh-font-size-body-text-md', async function() {
        expect(getComputedStyle(element.querySelector('p')!).getPropertyValue('font-size'))
            .to.equal(remToPx(tokens.get('--rh-font-size-body-text-md')?.$value));
      });
    });
  });

  describe('no slotted header element', function() {
    let element: RhCard;

    beforeEach(async function() {
      element = await fixture<RhCard>(html`
        <rh-card>
          <h3>Default</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est</p>
          <a href="#" slot="footer">Link</a>
        </rh-card>
      `);
    });

    it('should upgrade', async function() {
      shouldUpgrade(element);
    });

    describe('heading', function() {
      it('should have initial font-size', function() {
        expect(getComputedStyle(element.querySelector('h3')!).getPropertyValue('font-size'))
            .to.equal(remToPx(tokens.get('--rh-font-size-heading-sm')?.$value));
      });
    });

    describe('body', function() {
      it('should have font-size --rh-font-size-body-text-md', function() {
        expect(getComputedStyle(element.querySelector('p')!).getPropertyValue('font-size'))
            .to.equal(remToPx(tokens.get('--rh-font-size-body-text-md')?.$value));
      });
    });
  });
});
