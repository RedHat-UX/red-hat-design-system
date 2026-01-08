var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HTMLFormControlsCollection_elements;
export class HTMLFormControlsCollection {
    constructor(elements) {
        _HTMLFormControlsCollection_elements.set(this, void 0);
        __classPrivateFieldSet(this, _HTMLFormControlsCollection_elements, elements, "f");
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            this[i] = element;
            if (element.hasAttribute('name')) {
                this[element.getAttribute('name')] = element;
            }
        }
        Object.freeze(this);
    }
    get length() {
        return __classPrivateFieldGet(this, _HTMLFormControlsCollection_elements, "f").length;
    }
    [(_HTMLFormControlsCollection_elements = new WeakMap(), Symbol.iterator)]() {
        return __classPrivateFieldGet(this, _HTMLFormControlsCollection_elements, "f")[Symbol.iterator]();
    }
    item(i) {
        return this[i] == null ? null : this[i];
    }
    namedItem(name) {
        return this[name] == null ? null : this[name];
    }
}
