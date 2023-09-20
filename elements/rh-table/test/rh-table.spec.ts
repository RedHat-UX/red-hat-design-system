import { expect, html, fixture } from '@open-wc/testing';
import { a11ySnapshot, type A11yTreeSnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { RhTable } from '@rhds/elements/rh-table/rh-table.js';

const takeProps = (props: string[]) => (obj: object) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k)));

describe('<rh-table>', async function() {
  function expectA11ySnapshot(expected?: Pick<A11yTreeSnapshot, 'name' | 'role'>[]) {
    return async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot.children?.map(takeProps(['name', 'role'])))
        .to.deep.equal(expected);
    };
  }

  const element = await fixture<RhTable>(html`
    <rh-table>
      <table>
        <caption>Concerts</caption>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Event<rh-sort-button></rh-sort-button></th>
            <th scope="col">Venue<rh-sort-button></rh-sort-button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>24 March</td>
            <td>The Obelisks</td>
            <td>West Wing</td>
          </tr>
          <tr>
            <td>14 April</td>
            <td>The What</td>
            <td>Main Hall</td>
          </tr>
        </tbody>
      </table>
    </rh-table>
  `);

  describe('simply instantiating', function() {
    it('should upgrade', async function() {
      const klass = customElements.get('rh-table');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhTable);
    });
  });
  it('should be accessible', async function() {
    await expect(element).to.be.accessible();
  });
  it('imperatively instantiates', function() {
    expect(document.createElement('rh-table'))
      .to.be.an.instanceof(RhTable);
  });
  it('should not report anything to assistive technology', expectA11ySnapshot());
  describe('with sortable columns', () => {
    //
  });
});
