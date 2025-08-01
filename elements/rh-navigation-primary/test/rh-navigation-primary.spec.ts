import { expect, fixture, nextFrame } from '@open-wc/testing';
import { setViewport, sendKeys } from '@web/test-runner-commands';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { html } from 'lit';

import { RhNavigationPrimary } from '@rhds/elements/rh-navigation-primary/rh-navigation-primary.js';
import { RhNavigationPrimaryItem } from '../rh-navigation-primary-item.js';

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

const [
  HamburgerItem1Name,
  HamburgerItem2Name,
  HamburgerItem3Name,
  HamburgerItem4Name,
  HamburgerItem5Name,
] = [
  'Ham 1',
  'Ham 2',
  'Ham 3',
  'Ham 4',
  'Ham 5',
];
const NAV = html`
  <rh-navigation-primary>
    <rh-navigation-primary-item variant="dropdown" summary="${HamburgerItem1Name}">
     ${HamburgerItem1Name} Content
    </rh-navigation-primary-item>

    <rh-navigation-primary-item variant="dropdown" summary="${HamburgerItem2Name}">
     ${HamburgerItem2Name} Content
    </rh-navigation-primary-item>

    <rh-navigation-primary-item variant="dropdown" summary="${HamburgerItem3Name}">
     ${HamburgerItem3Name} Content
    </rh-navigation-primary-item>

    <rh-navigation-primary-item variant="dropdown">
      <span slot="summary">${HamburgerItem4Name}</span>
      ${HamburgerItem4Name} Content
    </rh-navigation-primary-item>

    <rh-navigation-primary-item variant="dropdown">
      <span slot="summary">${HamburgerItem5Name}</span>
      ${HamburgerItem5Name} Content
    </rh-navigation-primary-item>

    <rh-navigation-primary-item slot="event">
      <a href="#summit">
        <svg width="64" height="35" viewBox="0 0 64 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Red Hat Summit logo</title>
          <path d="M61.9356 1.34412H2.06356C1.08623 1.34412 0.293945 2.1364 0.293945 3.11373V27.8382C0.293945 28.8156 1.08623 29.6079 2.06356 29.6079H26.4849C26.9543 29.6079 27.4044 29.7943 27.7363 30.1262L30.7477 33.1377C31.4388 33.8287 32.5591 33.8288 33.2502 33.1379L36.263 30.126C36.5948 29.7942 37.0449 29.6079 37.5141 29.6079H61.9356C62.913 29.6079 63.7053 28.8156 63.7053 27.8382V3.11373C63.7053 2.1364 62.913 1.34412 61.9356 1.34412Z" fill="#EE0000"/>
          <path d="M18.3535 12.4776V7.41943H20.9404C21.2873 7.41943 21.5955 7.48805 21.8654 7.62537C22.1351 7.76262 22.3459 7.953 22.4977 8.19616C22.6495 8.43947 22.7252 8.7177 22.7252 9.03079C22.7252 9.34876 22.6385 9.63305 22.4651 9.88348C22.2917 10.134 22.0628 10.3242 21.7787 10.4543L22.8842 12.4776H21.4969L20.5431 10.6349H19.5963V12.4776H18.3535ZM19.5963 9.62332H20.8248C21.0175 9.62332 21.1729 9.57039 21.2909 9.46433C21.4089 9.3584 21.4679 9.22117 21.4679 9.05245C21.4679 8.88388 21.4089 8.74657 21.2909 8.64057C21.1728 8.53465 21.0175 8.48159 20.8248 8.48159H19.5963V9.62332Z" fill="white"/>
          <path d="M24.8935 12.5499C24.5035 12.5499 24.1504 12.4621 23.835 12.2862C23.5193 12.1103 23.2702 11.8731 23.087 11.5744C22.9041 11.2758 22.8125 10.941 22.8125 10.57C22.8125 10.1989 22.9003 9.8643 23.0763 9.56556C23.252 9.26695 23.4917 9.02969 23.7952 8.85378C24.0988 8.67801 24.4358 8.59009 24.8068 8.59009C25.1827 8.59009 25.515 8.68038 25.8039 8.86105C26.0931 9.04171 26.3206 9.28862 26.4868 9.6017C26.653 9.91493 26.7363 10.2737 26.7363 10.6783V10.9674H24.0121C24.0648 11.0878 24.136 11.1939 24.2253 11.2853C24.3143 11.3769 24.4214 11.4479 24.5467 11.4985C24.672 11.5491 24.8068 11.5744 24.9514 11.5744C25.1103 11.5744 25.2549 11.5491 25.3848 11.4985C25.515 11.4479 25.6259 11.3769 25.7172 11.2853L26.4906 11.9718C26.2495 12.1741 26.0026 12.3212 25.7498 12.4126C25.4969 12.5041 25.2114 12.5499 24.8935 12.5499ZM23.9902 10.1509H25.5873C25.5487 10.0257 25.4897 9.91854 25.4102 9.82932C25.3307 9.74025 25.2379 9.67034 25.132 9.61978C25.026 9.56916 24.9105 9.5439 24.7852 9.5439C24.655 9.5439 24.5369 9.5681 24.4312 9.61619C24.3252 9.66436 24.2348 9.73298 24.1602 9.82213C24.0853 9.91127 24.0288 10.0208 23.9902 10.1509Z" fill="white"/>
          <path d="M28.997 12.5281C28.6355 12.5281 28.3069 12.4403 28.0105 12.2644C27.7144 12.0886 27.4794 11.8525 27.306 11.5563C27.1326 11.26 27.0459 10.9289 27.0459 10.5627C27.0459 10.1966 27.1337 9.86541 27.3097 9.56911C27.4854 9.27287 27.7239 9.03798 28.0249 8.86461C28.3262 8.69121 28.662 8.60444 29.033 8.60444C29.2113 8.60444 29.3823 8.62612 29.5459 8.66946C29.7098 8.71288 29.8639 8.77552 30.0085 8.8574V7.41943L31.179 7.23877V12.4776H30.0229V12.1957C29.7196 12.4174 29.3774 12.5281 28.997 12.5281ZM29.1992 11.531C29.3631 11.531 29.5122 11.5057 29.6473 11.4551C29.7821 11.4045 29.9025 11.3287 30.0085 11.2275V9.89069C29.9074 9.79435 29.787 9.7209 29.6473 9.67028C29.5074 9.61973 29.3582 9.59446 29.1992 9.59446C29.0114 9.59446 28.8414 9.63665 28.6899 9.7209C28.5382 9.80522 28.4175 9.92086 28.3285 10.0678C28.2392 10.2147 28.1948 10.3797 28.1948 10.5627C28.1948 10.7458 28.2392 10.9108 28.3285 11.0577C28.4175 11.2046 28.5382 11.3203 28.6899 11.4045C28.8414 11.4889 29.0114 11.531 29.1992 11.531Z" fill="white"/>
          <path d="M33.167 12.4776V7.41943H34.4098V9.36317H36.4911V7.41943H37.7339V12.4776H36.4911V10.4977H34.4098V12.4776H33.167Z" fill="white"/>
          <path d="M39.5612 12.5426C39.2914 12.5426 39.0517 12.492 38.8423 12.3908C38.6326 12.2897 38.4688 12.15 38.351 11.9717C38.2329 11.7936 38.1738 11.5888 38.1738 11.3575C38.1738 10.9915 38.3124 10.7084 38.5895 10.5085C38.8663 10.3087 39.2528 10.2086 39.749 10.2086C40.0477 10.2086 40.3369 10.2447 40.6163 10.317V10.1292C40.6163 9.93654 40.5549 9.79311 40.432 9.69922C40.3093 9.60525 40.1272 9.5583 39.8864 9.5583C39.7369 9.5583 39.5696 9.58242 39.3841 9.63051C39.1986 9.67875 38.9806 9.75587 38.7303 9.8618L38.3112 9.0019C38.6243 8.8622 38.9265 8.75744 39.2179 8.68753C39.5094 8.61776 39.802 8.58276 40.0961 8.58276C40.6258 8.58276 41.0377 8.7092 41.3317 8.96217C41.6255 9.21505 41.7724 9.5704 41.7724 10.028V12.4776H40.6163V12.2463C40.4619 12.3523 40.2995 12.4282 40.1284 12.474C39.9576 12.5197 39.7683 12.5426 39.5612 12.5426ZM39.2868 11.3358C39.2868 11.4563 39.3398 11.5503 39.4457 11.6176C39.5514 11.6852 39.6986 11.7188 39.8864 11.7188C40.0261 11.7188 40.1575 11.7043 40.2801 11.6755C40.4031 11.6466 40.5152 11.6008 40.6163 11.5381V11.0468C40.5054 11.0179 40.3922 10.9962 40.2767 10.9818C40.1609 10.9673 40.0428 10.9601 39.9224 10.9601C39.7202 10.9601 39.5636 10.9926 39.453 11.0576C39.3421 11.1227 39.2868 11.2155 39.2868 11.3358Z" fill="white"/>
          <path d="M44.1859 12.5281C43.7282 12.5281 43.3826 12.4258 43.149 12.2211C42.9154 12.0164 42.7984 11.7141 42.7984 11.3142V9.63051H42.0254V8.65506H42.7984V7.67231L43.9693 7.41943V8.65506H45.0387V9.63051H43.9693V11.0829C43.9693 11.2516 44.0064 11.3708 44.081 11.4406C44.1556 11.5105 44.287 11.5454 44.475 11.5454C44.5712 11.5454 44.6591 11.5394 44.7386 11.5274C44.8181 11.5154 44.9059 11.4948 45.0024 11.4659V12.4125C44.8964 12.4463 44.7616 12.4739 44.5978 12.4956C44.4339 12.5173 44.2968 12.5281 44.1859 12.5281Z" fill="white"/>
          <path d="M10.5566 23.3526C9.77899 23.3526 9.01039 23.2109 8.25101 22.9271C7.49134 22.6436 6.81435 22.2502 6.21973 21.7468L7.5373 20.0312C8.1227 20.507 8.66274 20.8478 9.15685 21.0537C9.65096 21.2595 10.1769 21.3625 10.7351 21.3625C11.101 21.3625 11.4121 21.326 11.6684 21.2527C11.9245 21.1796 12.1213 21.0721 12.2586 20.9302C12.3958 20.7884 12.4644 20.6214 12.4644 20.4293C12.4644 20.164 12.3637 19.9581 12.1625 19.8116C11.9612 19.6654 11.618 19.5508 11.1331 19.4686L9.0196 19.0979C8.2418 18.9606 7.64241 18.6634 7.22161 18.2059C6.80066 17.7485 6.59027 17.1675 6.59027 16.4628C6.59027 15.8407 6.7481 15.3054 7.06378 14.857C7.37945 14.4088 7.83237 14.0657 8.42253 13.8277C9.0127 13.5898 9.71475 13.4708 10.5293 13.4708C11.243 13.4708 11.9612 13.5922 12.684 13.8345C13.4068 14.077 14.0335 14.4133 14.5643 14.8433L13.3153 16.5863C12.3271 15.8269 11.3435 15.4472 10.3645 15.4472C10.0442 15.4472 9.76759 15.4815 9.53415 15.5501C9.30085 15.6187 9.12242 15.7148 8.999 15.8383C8.87544 15.9619 8.81366 16.1107 8.81366 16.2844C8.81366 16.5224 8.90295 16.7053 9.08124 16.8334C9.25968 16.9616 9.55015 17.0622 9.95281 17.1353L11.9429 17.4647C12.8669 17.6111 13.5692 17.9176 14.0497 18.3843C14.5299 18.8509 14.7701 19.4547 14.7701 20.196C14.7701 20.8457 14.6008 21.4061 14.2623 21.8772C13.9238 22.3485 13.4389 22.7123 12.8075 22.9683C12.1762 23.2244 11.4259 23.3526 10.5566 23.3526Z" fill="white"/>
          <path d="M18.393 23.3526C17.8255 23.3526 17.3246 23.229 16.8901 22.982C16.4555 22.7349 16.1146 22.3897 15.8676 21.9458C15.6206 21.5021 15.4971 20.9967 15.4971 20.4293V15.955H17.7205V20.1273C17.7205 20.5209 17.8416 20.8388 18.0841 21.0812C18.3265 21.3237 18.6444 21.4448 19.038 21.4448C19.3215 21.4448 19.5733 21.3947 19.7928 21.2939C20.0124 21.1933 20.1953 21.0515 20.3419 20.8684V15.955H22.5651V23.2153H20.3419V22.7212C19.7928 23.1422 19.143 23.3526 18.393 23.3526Z" fill="white"/>
          <path d="M23.7451 23.2153V15.955H25.9687V16.4217C26.4808 16.0191 27.0848 15.8177 27.7803 15.8177C28.2377 15.8177 28.6493 15.9049 29.0154 16.0786C29.3812 16.2525 29.6879 16.4995 29.9351 16.8196C30.2277 16.4995 30.5753 16.2525 30.978 16.0786C31.3807 15.9049 31.8199 15.8177 32.2957 15.8177C32.8447 15.8177 33.3294 15.9413 33.7505 16.1884C34.1713 16.4354 34.5031 16.7785 34.7456 17.2177C34.9878 17.6569 35.1091 18.1647 35.1091 18.7412V23.2154H32.8858V19.043C32.8858 18.6405 32.7781 18.3204 32.5632 18.0823C32.3481 17.8446 32.0624 17.7255 31.7055 17.7255C31.4584 17.7255 31.234 17.7714 31.033 17.8627C30.8317 17.9543 30.6577 18.0916 30.5114 18.2745C30.5206 18.3479 30.5272 18.4234 30.5321 18.501C30.5364 18.5788 30.539 18.6588 30.539 18.7412V23.2154H28.3155V19.043C28.3155 18.6405 28.2078 18.3204 27.9929 18.0823C27.778 17.8446 27.492 17.7255 27.1352 17.7255C26.888 17.7255 26.6663 17.769 26.4695 17.856C26.2728 17.943 26.1058 18.0733 25.9687 18.2471V23.2154L23.7451 23.2153Z" fill="white"/>
          <path d="M36.2354 23.2153V15.955H38.4589V16.4217C38.971 16.0191 39.575 15.8177 40.2706 15.8177C40.728 15.8177 41.1396 15.9049 41.5056 16.0786C41.8714 16.2525 42.1782 16.4995 42.4253 16.8196C42.7179 16.4995 43.0656 16.2525 43.4682 16.0786C43.8709 15.9049 44.3101 15.8177 44.7859 15.8177C45.3349 15.8177 45.8196 15.9413 46.2407 16.1884C46.6615 16.4354 46.9933 16.7785 47.2358 17.2177C47.4781 17.6569 47.5993 18.1647 47.5993 18.7412V23.2154H45.3761V19.043C45.3761 18.6405 45.2683 18.3204 45.0535 18.0823C44.8383 17.8446 44.5526 17.7255 44.1957 17.7255C43.9486 17.7255 43.7242 17.7714 43.5232 17.8627C43.3219 17.9543 43.1479 18.0916 43.0016 18.2745C43.0108 18.3479 43.0174 18.4234 43.0223 18.501C43.0267 18.5788 43.0293 18.6588 43.0293 18.7412V23.2154H40.8057V19.043C40.8057 18.6405 40.698 18.3204 40.4831 18.0823C40.2683 17.8446 39.9822 17.7255 39.6254 17.7255C39.3783 17.7255 39.1565 17.769 38.9598 17.856C38.763 17.943 38.596 18.0733 38.4589 18.2471V23.2154L36.2354 23.2153Z" fill="white"/>
          <path d="M49.8358 15.2825C49.497 15.2825 49.2087 15.1637 48.9711 14.9256C48.7329 14.6878 48.6143 14.3996 48.6143 14.061C48.6143 13.7226 48.7329 13.4344 48.9711 13.1963C49.2087 12.9585 49.497 12.8395 49.8358 12.8395C50.1739 12.8395 50.4622 12.9585 50.7004 13.1963C50.938 13.4344 51.057 13.7226 51.057 14.061C51.057 14.3996 50.9381 14.6878 50.7004 14.9256C50.4622 15.1637 50.1739 15.2825 49.8358 15.2825ZM48.724 23.2153V15.955H50.9473V23.2153H48.724Z" fill="white"/>
          <path d="M55.7923 23.3114C54.9227 23.3114 54.2663 23.1171 53.8227 22.7281C53.3786 22.3393 53.1571 21.7652 53.1571 21.0056V17.8078H51.6885V15.9549H53.1571V14.0884L55.3804 13.608V15.9549H57.4115V17.8078H55.3804V20.5665C55.3804 20.8868 55.4512 21.1133 55.5932 21.2458C55.7349 21.3786 55.9844 21.4448 56.3412 21.4448C56.5241 21.4448 56.6912 21.4334 56.8421 21.4105C56.993 21.3878 57.1598 21.3488 57.343 21.2939V23.0917C57.1417 23.1559 56.8853 23.2084 56.5745 23.2496C56.2632 23.2907 56.0025 23.3114 55.7923 23.3114Z" fill="white"/>
        </svg>
      </a>
    </rh-navigation-primary-item>

    <rh-navigation-primary-item slot="links">Link 1</rh-navigation-primary-item>
    <rh-navigation-primary-item slot="links">Link 2</rh-navigation-primary-item>
    <rh-navigation-primary-item slot="links">Link 3</rh-navigation-primary-item>

    <rh-navigation-primary-item slot="dropdowns" variant="dropdown" hide="sm" summary="Item 6">
      Item 6 Content
    </rh-navigation-primary-item>

    <rh-navigation-primary-item slot="dropdowns" variant="dropdown" hide="sm" summary="Item 7">
      Item 7 Content
    </rh-navigation-primary-item>

    <rh-navigation-primary-item slot="dropdowns" variant="dropdown" summary="Item 8">
      Item 8 Content
    </rh-navigation-primary-item>
  </rh-navigation-primary>
`;


function isCompact() {
  const { matches } = window.matchMedia('(min-width: 1200px)');
  return !matches;
}

let element: RhNavigationPrimary;

describe('<rh-navigation-primary>', function() {
  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-primary')).to.be.an.instanceof(RhNavigationPrimary);
    });

    it('should upgrade', async function() {
      element = await fixture<RhNavigationPrimary>(NAV);
      const klass = customElements.get('rh-navigation-primary');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhNavigationPrimary);
    });
  });

  describe('accessibility', function() {
    beforeEach(async function() {
      element = await fixture<RhNavigationPrimary>(NAV);
    });
    beforeEach(async () => await element.updateComplete);

    it('is accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('should have internals role of navigation', async function() {
      expect(element.role).to.equal('navigation');
    });
  });

  describe('resizing viewports', function() {
    beforeEach(async function() {
      element = await fixture<RhNavigationPrimary>(NAV);
    });
    beforeEach(async () => await element.updateComplete);

    describe('compact viewport', function() {
      beforeEach(async function() {
        await setViewport({ width: 1199, height: 800 });
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(nextFrame);

      it('should be in compact mode', function() {
        expect(isCompact()).to.be.true;
      });

      it('should have compact class', function() {
        expect(element.shadowRoot?.querySelector('#container')?.classList.contains('compact')).to.be.true;
      });

      it('menu should be closed', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).axQuery({ name: 'Menu' }).to.not.have.property('expanded', true);
      });

      it('should hide content behind hamburger menu', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.not.have.axQuery({ name: HamburgerItem1Name });
        expect(snapshot).to.not.have.axQuery({ name: HamburgerItem2Name });
        expect(snapshot).to.not.have.axQuery({ name: HamburgerItem3Name });
        expect(snapshot).to.not.have.axQuery({ name: HamburgerItem4Name });
        expect(snapshot).to.not.have.axQuery({ name: HamburgerItem5Name });
        expect(snapshot).to.not.have.axQuery({ name: 'Link 1' });
        expect(snapshot).to.not.have.axQuery({ name: 'Link 2' });
        expect(snapshot).to.not.have.axQuery({ name: 'Link 3' });
      });

      it('should not hide right-side content behind hamburger menu', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Item 6' });
        expect(snapshot).to.have.axQuery({ name: 'Item 7' });
        expect(snapshot).to.have.axQuery({ name: 'Item 8' });
      });

      describe('interactions', function() {
        describe('toggling hamburger menu', function() {
          beforeEach(press('Tab'));
          beforeEach(press('Tab'));
          beforeEach(press('Enter'));
          beforeEach(async () => await element.updateComplete);

          describe('toggle open', function() {
            it('should open the menu', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.have.axQuery({ name: 'Menu', expanded: true });
            });

            it('menu should have focus', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.have.axQuery({ name: 'Menu', focused: true });
            });

            it('should not hide content behind hamburger menu', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.have.axQuery({ name: HamburgerItem1Name });
              expect(snapshot).to.have.axQuery({ name: HamburgerItem2Name });
              expect(snapshot).to.have.axQuery({ name: HamburgerItem3Name });
              expect(snapshot).to.have.axQuery({ name: HamburgerItem4Name });
              expect(snapshot).to.have.axQuery({ name: HamburgerItem5Name });
            });

            it('should not hide right-side content behind hamburger menu', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.have.axQuery({ name: 'Item 6' });
              expect(snapshot).to.have.axQuery({ name: 'Item 7' });
              expect(snapshot).to.have.axQuery({ name: 'Item 8' });
            });

            describe('toggling a standalone dropdown', function() {
              beforeEach(async function() {
                /**
                 * We normally would not test by query and click but by tabbing to the standalone dropdown
                 * we are triggering the hamburger menu to close on keyup this is expected behavior
                 * so we need to click the standalone dropdown to open it which should close the hamburger menu
                 * the overlay should still remain open
                 */
                const item6 = element.querySelector('rh-navigation-primary-item[summary="Item 6"]');
                const details = item6?.shadowRoot?.querySelector('details');
                const summary = details?.querySelector('summary');
                summary?.click();
              });
              beforeEach(async () => await element.updateComplete);

              it('should open the standalone dropdown', async function() {
                const snapshot = await a11ySnapshot();
                expect(snapshot).to.have.axQuery({ name: 'Item 6', expanded: true });
                expect(snapshot).to.have.axQuery({ role: 'text', name: 'Item 6 Content' });
              });

              it('should close the hamburger menu', async function() {
                const snapshot = await a11ySnapshot();
                expect(snapshot).to.not.have.axQuery({ name: 'Menu', expanded: false });
                expect(snapshot).to.not.have.axQuery({ name: HamburgerItem1Name });
                expect(snapshot).to.not.have.axQuery({ name: HamburgerItem2Name });
                expect(snapshot).to.not.have.axQuery({ name: HamburgerItem3Name });
                expect(snapshot).to.not.have.axQuery({ name: HamburgerItem4Name });
                expect(snapshot).to.not.have.axQuery({ name: HamburgerItem5Name });
              });

              it('should still have an open overlay', async function() {
                // query the shadow root for the overlay
                const overlay = element.shadowRoot?.querySelector('rh-navigation-primary-overlay[open]');
                expect(overlay).to.exist;
              });
            });
          });

          describe('toggle closed', function() {
            beforeEach(press('Enter'));
            beforeEach(async () => await element.updateComplete);

            it('menu should be closed', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).axQuery({ name: 'Menu' }).to.not.have.property('expanded', true);
            });

            it('should hide content behind hamburger menu', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.not.have.axQuery({ name: HamburgerItem1Name });
              expect(snapshot).to.not.have.axQuery({ name: HamburgerItem2Name });
              expect(snapshot).to.not.have.axQuery({ name: HamburgerItem3Name });
              expect(snapshot).to.not.have.axQuery({ name: HamburgerItem4Name });
              expect(snapshot).to.not.have.axQuery({ name: HamburgerItem5Name });
            });
          });
        });
      });
    });

    describe('wide viewport', function() {
      beforeEach(async function() {
        await setViewport({ width: 1680, height: 800 });
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(nextFrame);

      it('should be in wide mode', function() {
        expect(isCompact()).to.be.false;
      });

      it('should not have compact class', function() {
        expect(element.shadowRoot?.querySelector('#container')?.classList.contains('compact')).to.be.false;
      });

      it('should not hide content behind hamburger menu', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: HamburgerItem1Name });
        expect(snapshot).to.have.axQuery({ name: HamburgerItem2Name });
        expect(snapshot).to.have.axQuery({ name: HamburgerItem3Name });
        expect(snapshot).to.have.axQuery({ name: HamburgerItem4Name });
        expect(snapshot).to.have.axQuery({ name: HamburgerItem5Name });
      });

      describe('interactions', function() {
        let navItem: RhNavigationPrimaryItem | null;
        let summary: HTMLElement | null | undefined;

        beforeEach(async function() {
          navItem = element.querySelector('rh-navigation-primary-item[variant="dropdown"]');
          const details = navItem?.shadowRoot?.querySelector('details');
          summary = details?.querySelector('summary');
          summary?.click();
        });
        beforeEach(async () => await element.updateComplete);

        describe('clicking a navigation dropdown', function() {
          it('should open the menu', async function() {
            const snapshot = await a11ySnapshot();
            expect(snapshot).to.have.axQuery({ name: HamburgerItem1Name, expanded: true });
          });

          describe('clicking a second time', function() {
            beforeEach(async function() {
              summary?.click();
            });
            beforeEach(async () => await element.updateComplete);

            it('should close the menu', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.not.have.axQuery({ name: HamburgerItem1Name, expanded: true });
            });
          });
        });

        describe('imperatively toggling a navigation dropdown', function() {
          describe('toggling open', function() {
            beforeEach(async function() {
              navItem!.show();
            });
            beforeEach(async () => await element.updateComplete);

            it('should open the dropdown', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.have.axQuery({ name: HamburgerItem1Name, expanded: true });
            });
          });

          describe('toggling closed', function() {
            beforeEach(async function() {
              navItem!.hide();
            });
            beforeEach(async () => await element.updateComplete);

            it('should close the dropdown', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.not.have.axQuery({ name: HamburgerItem1Name, expanded: true });
            });
          });
        });
      });
    });
  });

  describe('dark mode', function() {
    beforeEach(async function() {
      element = await fixture<RhNavigationPrimary>(NAV);
      element.colorPalette = 'darkest';
    });
    beforeEach(async () => await element.updateComplete);

    it('should have a dark themed menu bar', function() {
      const bar = element.shadowRoot?.querySelector('#bar') as HTMLElement | undefined;
      expect(getComputedStyle(bar!).getPropertyValue('background-color')).to.be.equal('rgb(21, 21, 21)'); /* rgb(21, 21, 21) equiv #151515 */
    });
  });
});
