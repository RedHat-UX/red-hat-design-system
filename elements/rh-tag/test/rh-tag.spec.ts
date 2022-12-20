import { expect, html } from '@open-wc/testing';
import { PfeIcon } from '@patternfly/pfe-icon';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { getColor, hexToRgb } from '@patternfly/pfe-tools/test/hex-to-rgb.js';
import { RhTag } from '../rh-tag.js';

const TEMPLATE = html`
  <rh-tag>Default</rh-tag>
`;

const SLOTTED_PFEICON = html`
  <rh-tag>
    Default
    <pfe-icon slot="icon" icon="info-cirle"></pfe-icon>
  </rh-tag>
`;

const SLOTTED_SVG = html`
  <rh-tag>
    Default
    <svg slot="icon" height="1em" width: "1em" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true" role="img"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
  </rh-tag>
`;

let element: RhTag;
let beforeStyles: CSSStyleDeclaration;
let container: HTMLElement;

function getBeforeStyles() {
  container = element.shadowRoot!.querySelector('#container')!;
  return getComputedStyle(container, '::before');
}

describe('<rh-tag>', async function() {
  beforeEach(async function() {
    element = await createFixture <RhTag>(TEMPLATE);
    await element.updateComplete;
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
});

describe('default', async function() {
  beforeEach(async function() {
    element = await createFixture <RhTag>(TEMPLATE);
    await element.updateComplete;
    beforeStyles = getBeforeStyles();
  });

  it('should have correct background color', async function() {
    expect(getColor(element, 'background-color')).to.deep.equal(hexToRgb('#f5f5f5'));
  });
  it('should have correct border color', async function() {
    expect(beforeStyles.getPropertyValue('border-color')).to.equal('rgb(210, 210, 210)');
  });
  it('should have correct text color', async function() {
    expect(getColor(element, 'color')).to.deep.equal(hexToRgb('#151515'));
  });
});

describe('red', async function() {
  beforeEach(async function() {
    element = await createFixture <RhTag>(TEMPLATE);
    element.color = 'red';
    await element.updateComplete;
    beforeStyles = getBeforeStyles();
  });

  it('should have correct background color', async function() {
    expect(getColor(element, 'background-color')).to.deep.equal(hexToRgb('#faeae8'));
  });
  it('should have correct border color', async function() {
    expect(beforeStyles.getPropertyValue('border-color')).to.equal('rgb(190, 0, 0)');
  });
  it('should have correct text color', async function() {
    expect(getColor(element, 'color')).to.deep.equal(hexToRgb('#5f0000'));
  });
});

describe('icon with attribute', async function() {
  beforeEach(async function() {
    element = await createFixture <RhTag>(TEMPLATE);
    element.icon = 'cirlce-info';
    await element.updateComplete;
    beforeStyles = getBeforeStyles();
  });

  it('should have icon class', async function() {
    expect(container.classList.contains('hasIcon')).to.be.true;
  });

  it('should have slotted icon', async function() {
    const icon = element.shadowRoot!.querySelector('pfe-icon') as PfeIcon;
    expect(icon).to.exist;
  });
});

describe('slotted icon', async function() {
  beforeEach(async function() {
    element = await createFixture <RhTag>(SLOTTED_PFEICON);
    await element.updateComplete;
    beforeStyles = getBeforeStyles();
  });

  it('should have icon class', async function() {
    expect(container.classList.contains('hasIcon')).to.be.true;
  });

  it('should have slotted pfe-icon', async function() {
    const slot = element.shadowRoot!.querySelector('slot[name="icon"]') as HTMLSlotElement;
    const [pfeIcon] = slot!.assignedElements();
    expect(pfeIcon.tagName).to.be.equal('PFE-ICON');
  });
});

describe('slotted svg', async function() {
  beforeEach(async function() {
    element = await createFixture <RhTag>(SLOTTED_SVG);
    await element.updateComplete;
    beforeStyles = getBeforeStyles();
  });

  it('should have icon class', async function() {
    expect(container.classList.contains('hasIcon')).to.be.true;
  });

  it('should have slotted pfe-icon', async function() {
    const slot = element.shadowRoot!.querySelector('slot[name="icon"]') as HTMLSlotElement;
    const [svg] = slot!.assignedElements();
    expect(svg.tagName).to.be.equal('svg');
  });
});
