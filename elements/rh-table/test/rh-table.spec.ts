import { expect, html, fixture } from '@open-wc/testing';
import { a11ySnapshot, type A11yTreeSnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { RhTable } from '@rhds/elements/rh-table/rh-table.js';
import { sendKeys } from '@web/test-runner-commands';

const takeProps = (props: string[]) => (obj: object) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k)));

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

describe('<rh-table>', async function() {
  let element: RhTable;

  /** create a simple test fixture */
  async function setupSimpleInstance() {
    element = await fixture<RhTable>(html`<rh-table></rh-table>`);
  }

  /** create a test fixture with a slotted table and sortable columns */
  async function setupInstanceWithSlottedTable() {
    element = await fixture<RhTable>(html`
      <rh-table>
        <table>
          <caption>
            The Jackson 5
          </caption>
          <thead>
            <tr>
              <th scope="col">Numbers</th>
              <th scope="col">Letters<rh-sort-button></rh-sort-button></th>
              <th scope="col">Words<rh-sort-button></rh-sort-button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>A</td>
              <td>You</td>
            </tr>
            <tr>
              <td>2</td>
              <td>B</td>
              <td>And</td>
            </tr>
            <tr>
              <td><span>3</span></td>
              <td><span>C</span></td>
              <td><span>Me</span></td>
            </tr>
          </tbody>
        </table>
      </rh-table>
    `);
  }

  /** Wait on the element's update cycle */
  async function updateComplete() {
    await element.updateComplete;
  }

  /** Asserts that an aXe audit on the page passes */
  async function expectA11yAxe() {
    await expect(element).to.be.accessible();
  }

  /**
   * Assert that the accessibility tree reports the expected snapshot
   * If the expected children snapshot is undefined, then assistive technology
   * reports nothing at all
   */
  function expectA11ySnapshot(expected?: Pick<A11yTreeSnapshot, 'name' | 'role'>[]) {
    return async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot.children?.map(takeProps(['name', 'role']))).to.deep.equal(expected);
    };
  }

  /**
   * Catch request sort event and prevent default
   */
  function preventDefaultOnSort() {
    element.querySelector('table').addEventListener('request-sort', (event: Event) => event.preventDefault());
  }

  describe('simply instantiating', function() {
    beforeEach(setupSimpleInstance);
    it('should upgrade', async function() {
      const klass = customElements.get('rh-table');
      expect(element).to.be.an.instanceOf(klass).and.to.be.an.instanceOf(RhTable);
    });
    it('should be accessible', expectA11yAxe);
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-table')).to.be.an.instanceof(RhTable);
    });
    it('should not report anything to assistive technology', expectA11ySnapshot());
  });

  describe('with sortable columns', async () => {
    /** Setup the a11y tree snapshot expected results for this suite */
    const snapshots = {
      default: [
        {
          name: 'The Jackson 5',
          role: 'text',
        },
        {
          name: 'Numbers',
          role: 'text',
        },
        {
          name: 'Letters',
          role: 'text',
        },
        {
          name: 'Sort',
          role: 'button',
        },
        {
          name: 'Words',
          role: 'text',
        },
        {
          name: 'Sort',
          role: 'button',
        },
        {
          name: '1',
          role: 'text',
        },
        {
          name: 'A',
          role: 'text',
        },
        {
          name: 'You',
          role: 'text',
        },
        {
          name: '2',
          role: 'text',
        },
        {
          name: 'B',
          role: 'text',
        },
        {
          name: 'And',
          role: 'text',
        },
        {
          name: '3',
          role: 'text',
        },
        {
          name: 'C',
          role: 'text',
        },
        {
          name: 'Me',
          role: 'text',
        },
      ],
      ['sort-by-words-asc']: [
        {
          name: 'The Jackson 5',
          role: 'text',
        },
        {
          name: 'Numbers',
          role: 'text',
        },
        {
          name: 'Letters',
          role: 'text',
        },
        {
          name: 'Sort',
          role: 'button',
        },
        {
          name: 'Words',
          role: 'text',
        },
        {
          name: 'Sort',
          role: 'button',
        },
        {
          name: '1',
          role: 'text',
        },
        {
          name: 'A',
          role: 'text',
        },
        {
          name: 'You',
          role: 'text',
        },
        {
          name: '3',
          role: 'text',
        },
        {
          name: 'C',
          role: 'text',
        },
        {
          name: 'Me',
          role: 'text',
        },
        {
          name: '2',
          role: 'text',
        },
        {
          name: 'B',
          role: 'text',
        },
        {
          name: 'And',
          role: 'text',
        },
      ],
      ['sort-by-words-desc']: [
        {
          name: 'The Jackson 5',
          role: 'text',
        },
        {
          name: 'Numbers',
          role: 'text',
        },
        {
          name: 'Letters',
          role: 'text',
        },
        {
          name: 'Sort',
          role: 'button',
        },
        {
          name: 'Words',
          role: 'text',
        },
        {
          name: 'Sort',
          role: 'button',
        },
        {
          name: '2',
          role: 'text',
        },
        {
          name: 'B',
          role: 'text',
        },
        {
          name: 'And',
          role: 'text',
        },
        {
          name: '3',
          role: 'text',
        },
        {
          name: 'C',
          role: 'text',
        },
        {
          name: 'Me',
          role: 'text',
        },
        {
          name: '1',
          role: 'text',
        },
        {
          name: 'A',
          role: 'text',
        },
        {
          name: 'You',
          role: 'text',
        },
      ],
    };
    beforeEach(setupInstanceWithSlottedTable);
    it('should be accessible', expectA11yAxe);
    describe('tabbing to the second sort button', function() {
      beforeEach(updateComplete);
      beforeEach(press('Tab'));
      beforeEach(press('Tab'));
      beforeEach(updateComplete);
      describe('when default not prevented', function() {
        describe('and pressing Enter', function() {
          beforeEach(updateComplete);
          beforeEach(press('Enter'));
          beforeEach(updateComplete);
          it('should sort by ascending order by default', expectA11ySnapshot(snapshots['sort-by-words-asc']));
          describe('and pressing Enter again', function() {
            beforeEach(press('Enter'));
            it('should sort by descending order', expectA11ySnapshot(snapshots['sort-by-words-desc']));
          });
        });
      });
      describe('when default prevented', async function() {
        beforeEach(updateComplete);
        beforeEach(preventDefaultOnSort);
        beforeEach(updateComplete);
        describe('and pressing Enter', function() {
          beforeEach(updateComplete);
          beforeEach(press('Enter'));
          beforeEach(updateComplete);
          it('should not sort', expectA11ySnapshot(snapshots.default));
        });
      });
    });
  });
});
