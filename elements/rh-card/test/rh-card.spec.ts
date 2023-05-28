import { expect, html, fixture } from '@open-wc/testing';
import { RhCard } from '../rh-card.js';

const shouldUpgrade = (element: unknown) => {
  const klass = customElements.get('rh-card');
  expect(element).to.be.an.instanceOf(klass).and.to.be.an.instanceOf(RhCard);
};

const checkFontSize = (element: HTMLElement, fontSize: string) => {
  const styles = getComputedStyle(element);
  expect(styles.getPropertyValue('font-size')).to.equal(fontSize);
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

    describe('header', function() {
      it('should default to a font-size of 24px', async function() {
        checkFontSize(element.querySelector('h3') as HTMLElement, '24px');
      });
    });

    describe('body', function() {
      it('should default to a font-size of 16px', async function() {
        checkFontSize(element.querySelector('p') as HTMLElement, '16px');
      });
    });
  });

  describe('no slotted header element', function() {
    let noSlottedHeaderElement: RhCard;

    beforeEach(async function() {
      noSlottedHeaderElement = await fixture<RhCard>(html`
        <rh-card>
          <h3>Default</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est</p>
          <a href="#" slot="footer">Link</a>
        </rh-card>
      `);
    });

    it('should upgrade', async function() {
      shouldUpgrade(noSlottedHeaderElement);
    });

    describe('header', function() {
      it('should default to a font-size of 16', async function() {
        checkFontSize(noSlottedHeaderElement.querySelector('h3') as HTMLElement, '16px');
      });
    });

    describe('body', function() {
      it('should default to a font-size of 16px', async function() {
        checkFontSize(noSlottedHeaderElement.querySelector('p') as HTMLElement, '16px');
      });
    });
  });
});
