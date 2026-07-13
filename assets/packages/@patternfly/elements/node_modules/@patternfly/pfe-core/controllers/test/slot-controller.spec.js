import { __decorate } from "tslib";
import { expect, fixture } from '@open-wc/testing';
import { customElement } from 'lit/decorators/custom-element.js';
import { LitElement, html } from 'lit';
import { SlotController } from '../slot-controller.js';
import { SlotController as SlotControllerServer } from '../slot-controller-server.js';
let TestSlotController = class TestSlotController extends LitElement {
    constructor() {
        super(...arguments);
        this.controller = new SlotController(this, 'a', null);
    }
    render() {
        return html `
      <slot name="a"></slot>
      <slot></slot>
    `;
    }
};
TestSlotController = __decorate([
    customElement('test-slot-controller')
], TestSlotController);
let TestSlotControllerServer = class TestSlotControllerServer extends LitElement {
    constructor() {
        super(...arguments);
        this.controller = new SlotControllerServer(this, 'a', null);
    }
    render() {
        return html `
      <slot name="a"></slot>
      <slot></slot>
    `;
    }
};
TestSlotControllerServer = __decorate([
    customElement('test-slot-controller-server')
], TestSlotControllerServer);
describe('SlotController', function () {
    describe('with named and anonymous slots', function () {
        describe('with no content', function () {
            let element;
            beforeEach(async function () {
                element = await fixture(html `
          <test-slot-controller></test-slot-controller>
        `);
            });
            it('reports empty named slots', function () {
                expect(element.controller.hasSlotted('a')).to.be.false;
                expect(element.controller.isEmpty('a')).to.be.true;
            });
            it('reports empty default slot', function () {
                expect(element.controller.hasSlotted(null)).to.be.false;
                expect(element.controller.isEmpty(null)).to.be.true;
            });
            it('reports empty default slot with no arguments', function () {
                expect(element.controller.hasSlotted()).to.be.false;
                expect(element.controller.isEmpty()).to.be.true;
            });
            it('returns empty list for getSlotted("a")', function () {
                expect(element.controller.getSlotted('a')).to.be.empty;
            });
            it('returns empty list for getSlotted(null)', function () {
                expect(element.controller.getSlotted(null)).to.be.empty;
            });
            it('returns empty list for getSlotted()', function () {
                expect(element.controller.getSlotted()).to.be.empty;
            });
        });
        describe('with element content in default slot', function () {
            let element;
            beforeEach(async function () {
                element = await fixture(html `
          <test-slot-controller>
            <p>element</p>
          </test-slot-controller>
        `);
            });
            it('reports empty named slots', function () {
                expect(element.controller.hasSlotted('a')).to.be.false;
                expect(element.controller.isEmpty('a')).to.be.true;
            });
            it('reports non-empty default slot', function () {
                expect(element.controller.hasSlotted(null)).to.be.true;
                expect(element.controller.isEmpty(null)).to.be.false;
            });
            it('reports non-empty default slot with no arguments', function () {
                expect(element.controller.hasSlotted()).to.be.true;
                expect(element.controller.isEmpty()).to.be.false;
            });
            it('returns empty list for getSlotted("a")', function () {
                expect(element.controller.getSlotted('a')).to.be.empty;
            });
            it('returns lengthy list for getSlotted(null)', function () {
                expect(element.controller.getSlotted(null)).to.not.be.empty;
            });
            it('returns lengthy list for getSlotted()', function () {
                expect(element.controller.getSlotted()).to.not.be.empty;
            });
        });
        describe('with element content in named slot', function () {
            let element;
            beforeEach(async function () {
                element = await fixture(html `
          <test-slot-controller>
            <p slot="a">element</p>
          </test-slot-controller>
        `);
            });
            it('reports non-empty named slots', function () {
                expect(element.controller.hasSlotted('a')).to.be.true;
                expect(element.controller.isEmpty('a')).to.be.false;
            });
            it('reports empty default slot', function () {
                expect(element.controller.hasSlotted(null)).to.be.false;
                expect(element.controller.isEmpty(null)).to.be.true;
            });
            it('reports empty default slot with no arguments', function () {
                expect(element.controller.hasSlotted()).to.be.false;
                expect(element.controller.isEmpty()).to.be.true;
            });
            it('returns lengthy list for getSlotted("a")', function () {
                expect(element.controller.getSlotted('a')).to.not.be.empty;
            });
            it('returns empty list for getSlotted(null)', function () {
                expect(element.controller.getSlotted(null)).to.be.empty;
            });
            it('returns empty list for getSlotted()', function () {
                expect(element.controller.getSlotted()).to.be.empty;
            });
        });
        describe('with text content in default slot', function () {
            let element;
            beforeEach(async function () {
                element = await fixture(html `
          <test-slot-controller>
            text
          </test-slot-controller>
        `);
            });
            it('reports empty named slots', function () {
                expect(element.controller.hasSlotted('a')).to.be.false;
                expect(element.controller.isEmpty('a')).to.be.true;
            });
            it('reports non-empty default slot', function () {
                expect(element.controller.hasSlotted(null)).to.be.true;
                expect(element.controller.isEmpty(null)).to.be.false;
            });
            it('reports non-empty default slot with no arguments', function () {
                expect(element.controller.hasSlotted()).to.be.true;
                expect(element.controller.isEmpty()).to.be.false;
            });
            it('returns empty list for getSlotted("a")', function () {
                expect(element.controller.getSlotted('a')).to.be.empty;
            });
            it('returns empty list for getSlotted(null)', function () {
                expect(element.controller.getSlotted(null)).to.be.empty;
            });
            it('returns empty list for getSlotted()', function () {
                expect(element.controller.getSlotted()).to.be.empty;
            });
        });
        describe('with white space in default slot', function () {
            let element;
            beforeEach(async function () {
                element = await fixture(html `
          <test-slot-controller-server>

          </test-slot-controller-server>
        `);
            });
            it('reports empty named slots', function () {
                expect(element.controller.hasSlotted('a')).to.be.false;
                expect(element.controller.isEmpty('a')).to.be.true;
            });
            it('reports empty default slot', function () {
                expect(element.controller.hasSlotted(null)).to.be.false;
                expect(element.controller.isEmpty(null)).to.be.true;
            });
            it('reports empty default slot with no arguments', function () {
                expect(element.controller.hasSlotted()).to.be.false;
                expect(element.controller.isEmpty()).to.be.true;
            });
            it('returns empty list for getSlotted("a")', function () {
                expect(element.controller.getSlotted('a')).to.be.empty;
            });
            it('returns empty list for getSlotted(null)', function () {
                expect(element.controller.getSlotted(null)).to.be.empty;
            });
            it('returns empty list for getSlotted()', function () {
                expect(element.controller.getSlotted()).to.be.empty;
            });
        });
    });
});
describe('SlotController (server)', function () {
    describe('with named and anonymous slots', function () {
        describe('with no ssr hint attrs', function () {
            let element;
            beforeEach(async function () {
                element = await fixture(html `
          <test-slot-controller-server></test-slot-controller-server>
        `);
            });
            it('reports empty named slots', function () {
                expect(element.controller.hasSlotted('a')).to.be.false;
                expect(element.controller.isEmpty('a')).to.be.true;
            });
            it('reports empty default slot', function () {
                expect(element.controller.hasSlotted(null)).to.be.false;
                expect(element.controller.isEmpty(null)).to.be.true;
            });
            it('reports empty default slot with no arguments', function () {
                expect(element.controller.hasSlotted()).to.be.false;
                expect(element.controller.isEmpty()).to.be.true;
            });
            it('returns empty list for getSlotted("a")', function () {
                expect(element.controller.getSlotted('a')).to.be.empty;
            });
            it('returns empty list for getSlotted(null)', function () {
                expect(element.controller.getSlotted(null)).to.be.empty;
            });
            it('returns empty list for getSlotted()', function () {
                expect(element.controller.getSlotted()).to.be.empty;
            });
        });
        describe('with ssr-hint-has-slotted-default attr', function () {
            let element;
            beforeEach(async function () {
                element = await fixture(html `
          <test-slot-controller-server ssr-hint-has-slotted-default>
            <p>element</p>
          </test-slot-controller-server>
        `);
            });
            it('reports empty named slots', function () {
                expect(element.controller.hasSlotted('a')).to.be.false;
                expect(element.controller.isEmpty('a')).to.be.true;
            });
            it('reports non-empty default slot', function () {
                expect(element.controller.hasSlotted(null)).to.be.true;
                expect(element.controller.isEmpty(null)).to.be.false;
            });
            it('reports non-empty default slot with no arguments', function () {
                expect(element.controller.hasSlotted()).to.be.true;
                expect(element.controller.isEmpty()).to.be.false;
            });
            it('returns empty list for getSlotted("a")', function () {
                expect(element.controller.getSlotted('a')).to.be.empty;
            });
            it('returns empty list for getSlotted(null)', function () {
                expect(element.controller.getSlotted(null)).to.be.empty;
            });
            it('returns empty list for getSlotted()', function () {
                expect(element.controller.getSlotted()).to.be.empty;
            });
        });
        describe('with ssr-hint-has-slotted="a" attr', function () {
            let element;
            beforeEach(async function () {
                element = await fixture(html `
          <test-slot-controller-server ssr-hint-has-slotted="a">
            <p slot="a">element</p>
          </test-slot-controller-server>
        `);
            });
            it('reports non-empty named slots', function () {
                expect(element.controller.hasSlotted('a')).to.be.true;
                expect(element.controller.isEmpty('a')).to.be.false;
            });
            it('reports empty default slot', function () {
                expect(element.controller.hasSlotted(null)).to.be.false;
                expect(element.controller.isEmpty(null)).to.be.true;
            });
            it('reports empty default slot with no arguments', function () {
                expect(element.controller.hasSlotted()).to.be.false;
                expect(element.controller.isEmpty()).to.be.true;
            });
            it('returns empty list for getSlotted("a")', function () {
                expect(element.controller.getSlotted('a')).to.be.empty;
            });
            it('returns empty list for getSlotted(null)', function () {
                expect(element.controller.getSlotted(null)).to.be.empty;
            });
            it('returns empty list for getSlotted()', function () {
                expect(element.controller.getSlotted()).to.be.empty;
            });
        });
        describe('with ssr-hint-has-slotted-default attr (text node)', function () {
            let element;
            beforeEach(async function () {
                element = await fixture(html `
          <test-slot-controller-server ssr-hint-has-slotted-default>
            text
          </test-slot-controller-server>
        `);
            });
            it('reports empty named slots', function () {
                expect(element.controller.hasSlotted('a')).to.be.false;
                expect(element.controller.isEmpty('a')).to.be.true;
            });
            it('reports non-empty default slot', function () {
                expect(element.controller.hasSlotted(null)).to.be.true;
                expect(element.controller.isEmpty(null)).to.be.false;
            });
            it('reports non-empty default slot with no arguments', function () {
                expect(element.controller.hasSlotted()).to.be.true;
                expect(element.controller.isEmpty()).to.be.false;
            });
            it('returns empty list for getSlotted("a")', function () {
                expect(element.controller.getSlotted('a')).to.be.empty;
            });
            it('returns empty list for getSlotted(null)', function () {
                expect(element.controller.getSlotted(null)).to.be.empty;
            });
            it('returns empty list for getSlotted()', function () {
                expect(element.controller.getSlotted()).to.be.empty;
            });
        });
        describe('with no ssr hint attrs (white space text node)', function () {
            let element;
            beforeEach(async function () {
                element = await fixture(html `
          <test-slot-controller-server>

          </test-slot-controller-server>
        `);
            });
            it('reports empty named slots', function () {
                expect(element.controller.hasSlotted('a')).to.be.false;
                expect(element.controller.isEmpty('a')).to.be.true;
            });
            it('reports empty default slot', function () {
                expect(element.controller.hasSlotted(null)).to.be.false;
                expect(element.controller.isEmpty(null)).to.be.true;
            });
            it('reports empty default slot with no arguments', function () {
                expect(element.controller.hasSlotted()).to.be.false;
                expect(element.controller.isEmpty()).to.be.true;
            });
            it('returns empty list for getSlotted("a")', function () {
                expect(element.controller.getSlotted('a')).to.be.empty;
            });
            it('returns empty list for getSlotted(null)', function () {
                expect(element.controller.getSlotted(null)).to.be.empty;
            });
            it('returns empty list for getSlotted()', function () {
                expect(element.controller.getSlotted()).to.be.empty;
            });
        });
    });
});
//# sourceMappingURL=slot-controller.spec.js.map