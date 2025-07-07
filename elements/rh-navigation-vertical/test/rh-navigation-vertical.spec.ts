import { expect, html, nextFrame } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { RhNavigationVertical } from '@rhds/elements/rh-navigation-vertical/rh-navigation-vertical.js';

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

const NAV = html`
  <rh-navigation-vertical>
    <rh-navigation-vertical-item href="/">Home</rh-navigation-vertical-item>
    <rh-navigation-vertical-group summary="Group 1">
      <rh-navigation-vertical-item href="/group-1/">Group 1 Index</rh-navigation-vertical-item>
      <rh-navigation-vertical-item href="/group-1/item-1/">Group 1 Item 1</rh-navigation-vertical-item>
      <rh-navigation-vertical-item href="/group-1/item-2/">Group 1 Item 2</rh-navigation-vertical-item> 
    </rh-navigation-vertical-group>

    <rh-navigation-vertical-group summary="Group 2">
      <rh-navigation-vertical-item href="/group-2/">Group 2 Index</rh-navigation-vertical-item>
      <rh-navigation-vertical-item href="/group-2/item-1/">Group 2 Item 1</rh-navigation-vertical-item>
      <rh-navigation-vertical-item href="/group-2/item-2/">Group 2 Item 2</rh-navigation-vertical-item>
    </rh-navigation-vertical-group>
  </rh-navigation-vertical>
`;

describe('<rh-navigation-vertical>', function() {
  describe('simply instantiating', function() {
    let element: RhNavigationVertical;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-vertical')).to.be.an.instanceof(RhNavigationVertical);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhNavigationVertical>(NAV);
      const klass = customElements.get('rh-navigation-vertical');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhNavigationVertical);
    });
  });

  describe('accessibility', function() {
    let element: RhNavigationVertical;
    beforeEach(async function() {
      element = await createFixture<RhNavigationVertical>(NAV);
    });
    beforeEach(async () => await element.updateComplete);

    it('is accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('should have internals role of navigation', async function() {
      expect(element.role).to.equal('navigation');
    });
  });

  describe('keyboard navigation', function() {
    let element: RhNavigationVertical;
    beforeEach(async function() {
      element = await createFixture<RhNavigationVertical>(NAV);
    });
    beforeEach(async () => await element.updateComplete);
    beforeEach(async () => await nextFrame());

    it('should initialize with all dropdowns closed', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.have.axQuery({ expanded: true });
    });

    describe('Tab', function() {
      beforeEach(press('Tab'));

      it('should have focus on the first item', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ role: 'link', name: 'Home', focused: true });
      });

      describe('Tab', function() {
        beforeEach(press('Tab'));

        it('should have focus on the second item', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ role: 'DisclosureTriangle', name: 'Group 1', focused: true });
        });

        describe('Enter', function() {
          beforeEach(press('Enter'));

          it('should open the first group', async function() {
            const snapshot = await a11ySnapshot();
            expect(snapshot).to.have.axQuery({ role: 'DisclosureTriangle', name: 'Group 1', focused: true, expanded: true });
          });

          it('should expose the children of the first group', async function() {
            const snapshot = await a11ySnapshot();
            expect(snapshot).to.have.axQuery({ role: 'link', name: 'Group 1 Index' });
            expect(snapshot).to.have.axQuery({ role: 'link', name: 'Group 1 Item 1' });
            expect(snapshot).to.have.axQuery({ role: 'link', name: 'Group 1 Item 2' });
          });

          describe('Escape', function() {
            beforeEach(press('Escape'));

            it('should close the first group', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.have.axQuery({ role: 'DisclosureTriangle', name: 'Group 1', focused: true });
            });

            it('should not have open attribute on the first group', async function() {
              const [firstGroup] = element.querySelectorAll('rh-navigation-vertical-group');
              expect(firstGroup.open).to.be.false;
            });

            it('should hide the children of the first group', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.not.have.axQuery({ role: 'link', name: 'Group 1 Index' });
              expect(snapshot).to.not.have.axQuery({ role: 'link', name: 'Group 1 Item 1' });
              expect(snapshot).to.not.have.axQuery({ role: 'link', name: 'Group 1 Item 2' });
            });

            describe('Tab', function() {
              beforeEach(press('Tab'));

              it('should have focus on the second group', async function() {
                const snapshot = await a11ySnapshot();
                expect(snapshot).to.have.axQuery({ role: 'DisclosureTriangle', name: 'Group 2', focused: true });
              });

              describe('Enter', function() {
                beforeEach(press('Enter'));

                it('should open the second group', async function() {
                  const snapshot = await a11ySnapshot();
                  expect(snapshot).to.have.axQuery({ role: 'DisclosureTriangle', name: 'Group 2', focused: true, expanded: true });
                });

                it('should have open attribute on the second group', async function() {
                  const secondGroup = Array.from(element.querySelectorAll('rh-navigation-vertical-group')).at(-1);
                  expect(secondGroup!.open).to.be.true;
                });

                it('should expose the children of the second group', async function() {
                  const snapshot = await a11ySnapshot();
                  expect(snapshot).to.have.axQuery({ role: 'link', name: 'Group 2 Index' });
                  expect(snapshot).to.have.axQuery({ role: 'link', name: 'Group 2 Item 1' });
                  expect(snapshot).to.have.axQuery({ role: 'link', name: 'Group 2 Item 2' });
                });

                describe('Tab', function() {
                  beforeEach(press('Tab'));

                  it('should have focus on first child of the second group', async function() {
                    const snapshot = await a11ySnapshot();
                    expect(snapshot).to.have.axQuery({ role: 'link', name: 'Group 2 Index', focused: true });
                  });

                  describe('Escape', function() {
                    beforeEach(press('Escape'));

                    it('should close the second group', async function() {
                      const snapshot = await a11ySnapshot();
                      expect(snapshot).to.have.axQuery({ role: 'DisclosureTriangle', name: 'Group 2', focused: true });
                    });

                    it('should not have open attribute on the second group', async function() {
                      const secondGroup = Array.from(element.querySelectorAll('rh-navigation-vertical-group')).at(-1);
                      expect(secondGroup!.open).to.be.false;
                    });

                    it('should hide the children of the second group', async function() {
                      const snapshot = await a11ySnapshot();
                      expect(snapshot).to.not.have.axQuery({ role: 'link', name: 'Group 2 Index' });
                      expect(snapshot).to.not.have.axQuery({ role: 'link', name: 'Group 2 Item 1' });
                      expect(snapshot).to.not.have.axQuery({ role: 'link', name: 'Group 2 Item 2' });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
