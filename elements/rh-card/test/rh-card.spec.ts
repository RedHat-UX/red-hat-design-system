import { expect, html, fixture } from '@open-wc/testing';
import { RhCard } from '../rh-card.js';

const defaultTemplate = html`
  <rh-card>
    <h3 slot="header">Default</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est</p>
    <a href="#" slot="footer">Link</a>
  </rh-card>
`;

const noSlottedHeaderTemplate = html`
  <rh-card>
    <h3>Default</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est</p>
    <a href="#" slot="footer">Link</a>
  </rh-card>
`;

const titleBarTemplate = html`
  <rh-card bar>
    <h3 slot="header">Title Bar</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est</p>
    <a href="#" slot="footer">Link</a>
  </rh-card>
`;

const altTitleBarTemplate = html`
  <rh-card bar alt>
    <h3 slot="header">Title Bar</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est</p>
    <a href="#" slot="footer">Link</a>
  </rh-card>
`;

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
      element = await fixture<RhCard>(defaultTemplate);
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
      noSlottedHeaderElement = await fixture<RhCard>(noSlottedHeaderTemplate);
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

  describe('title bar element', function() {
    let titleBarElement: RhCard;

    beforeEach(async function() {
      titleBarElement = await fixture<RhCard>(titleBarTemplate);
    });

    it('should upgrade', async function() {
      shouldUpgrade(titleBarElement);
    });

    describe('header', function() {
      it('should default to a font-size of 16px', async function() {
        checkFontSize(titleBarElement.querySelector('h3') as HTMLElement, '16px');
      });
    });

    describe('body', function() {
      it('should default to a font-size of 16px', async function() {
        checkFontSize(titleBarElement.querySelector('p') as HTMLElement, '16px');
      });
    });
  });

  describe('alt title bar element', function() {
    let altTitleBarElement: RhCard;

    beforeEach(async function() {
      altTitleBarElement = await fixture<RhCard>(altTitleBarTemplate);
    });

    it('should upgrade', async function() {
      shouldUpgrade(altTitleBarElement);
    });

    describe('header', function() {
      it('should default to a font-size of 16px', async function() {
        checkFontSize(altTitleBarElement.querySelector('h3') as HTMLElement, '16px');
      });
    });

    describe('body', function() {
      it('should default to a font-size of 16px', async function() {
        checkFontSize(altTitleBarElement.querySelector('p') as HTMLElement, '16px');
      });
    });
  });
});
