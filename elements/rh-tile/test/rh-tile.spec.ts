import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { clickElementAtCenter } from '@patternfly/pfe-tools/test/utils.js';
import { sendKeys } from '@web/test-runner-commands';
import { RhTile } from '@rhds/elements/rh-tile/rh-tile.js';

// https://fakeimg.pl/296x50
const dataurl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAAAyCAYAAADvPUZQAAAEqElEQVR4Xu2dV0tsSxBGa8w5KwbMCXNC//+TIibMIkbMImbM6L1fwQweDuj1zH1o+qwGkdnTu3fXqmZR3W4wMTs7+2E0CEAAAgESSCCoALPClCAAASeAoFgIEIBAsAQQVLCpYWIQgACCYg1AAALBEkBQwaaGiUEAAgiKNQABCARLAEEFmxomBgEIICjWAAQgECwBBBVsapgYBCCAoFgDEIBAsAQQVLCpYWIQgACCYg1AAALBEkBQwaaGiUEAAgiKNQABCARLAEEFmxomBgEIICjWAAQgECwBBBVsapgYBCCAoFgDEIBAsAQQVLCpYWIQgACCYg1AAALBEkBQwaaGiUEAAgiKNfBHBA4PD+3o6Mg+Pj5seHjY8vLy/mgcboLAVwQQFOvjFwJPT0/2/PzswsnNzfXvJCFd0+dEImF3d3e2tLRkLS0tfq2srMyysrK+JalxXl9fU/0yMzNNP7r+8vKSet63A9HhryGAoP6aVH8fqCqi3d1d7ygRjY6OujxWVlZSAlG1pOrp4eHB+vr6vh/0U4/Ly0tbW1tLXenq6rLS0lKXnQRYVFRkg4ODlpGR8aNx6RwvAQQVb25/HJmqp/f3d3t7e3NpdHZ22u3trVdMvb29tri4aK2trSbRPD4+urSys7Otv7/fcnJy/HlbW1t2fX3t8lpYWLChoSErLCz0705PT+34+NhGRkb8Oaqe9vf37ezszMX07/9otO7ubquurv7x3LkhTgIIKs68phWVRCLRqILSbwmmvb3dpVVeXm43NzcmmTU2Ntr29rY1NzdbQ0ODP1OV1fz8vPdT+1xlSUYHBwdeIVVWVrqMVFFJVpLc9PS01dXVWVNTU1rz5+Z4CCCoeHL5v0SiqkiCqaqqso6ODltdXXWBSCbLy8sulvv7eysoKLC2tjavknQGpcoq2XTP1dWVDQwM+BYu2bSN05ZRFdjOzo5LScJSJaUKbWZmxmpqalx4NAiIAIJiHfxCQHLR9k3bMInj4uLCNjY2/ExKlY+qJglK32kLODc351LR9WTTVlDbQgmutrb2N8IS3uTkpH8vWUlaqrSmpqa8ekpWY6QGAgiKNZAicH5+bpubm/7XOW3rdK6k3xKWBKXKSlLR9k7nRqqg1tfXXS7JLZ3OrCS54uJiP/geGxv7jXByG9jT0+Oy01h6pp6ts6iSkhKyAgEngKBYCCkCOg9SRZNs2mrV19f7x5OTEz/QnpiY8M/qK9FoK6hKKtl0XQfnFRUVLq/P2zyJTq8jaBzJcHx83G9TP42lw3GdddEgkCSAoFgLXxLY29vz1wrUdM6UzvZLB+46gFeTiHQgToPAVwQQFOvjSwJ65UDVTX5+vldG6TSdPWksvQT6X17sTOdZ3BsHAQQVRx6JAgJREkBQUaaVoCAQBwEEFUceiQICURJAUFGmlaAgEAcBBBVHHokCAlESQFBRppWgIBAHAQQVRx6JAgJREkBQUaaVoCAQBwEEFUceiQICURJAUFGmlaAgEAcBBBVHHokCAlESQFBRppWgIBAHAQQVRx6JAgJREkBQUaaVoCAQBwEEFUceiQICURJAUFGmlaAgEAcBBBVHHokCAlES+Ac9PhSngOTWVQAAAABJRU5ErkJggg==';

describe('<rh-tile>', function() {
  let element: RhTile;

  function press(press: string) {
    return async function() {
      await sendKeys({ press });
      await element.updateComplete;
    };
  }

  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-tile')).to.be.an.instanceof(RhTile);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhTile>(html`<rh-tile></rh-tile>`);
      const klass = customElements.get('rh-tile');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhTile);
    });
  });

  describe('default tile', function() {
    let element: RhTile;
    beforeEach(async function() {
      element = await createFixture<RhTile>(html`
        <rh-tile>
          <img slot="image" alt="296 X 50 placeholder" src="${dataurl}">
          <div slot="title">Title</div>
          <h2 slot="headline"><a href="#top">Link</a></h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div slot="footer">Suspendisse eu turpis elementum</div>
        </rh-tile>`);
    });

    it('is accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });
  });

  describe('checkable tile', function() {
    let element: RhTile;

    beforeEach(async function() {
      element = await createFixture<RhTile>(html`
        <rh-tile checkable>
          <img slot="image" alt="296 X 50 placeholder" src="${dataurl}">
          <div slot="title">Title</div>
          <h2 slot="headline"><a href="#top">Link</a></h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div slot="footer">Suspendisse eu turpis elementum</div>
        </rh-tile>`);
    });

    it('is accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });

    it('has a checkbox', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainRole('checkbox');
      expect(snapshot.children).to.have.length(1);
    });

    describe('pressing Enter', async function() {
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));

      it('is checked', function() {
        expect(element.checked)
            .to.equal(true);
      });

      describe('clicking', async function() {
        beforeEach(() => clickElementAtCenter(element));
        it('is unchecked', function() {
          expect(element.checked)
              .to.equal(false);
        });
      });
    });
  });
});
