# Element Internals Polyfill

This package is a polyfill for the [`ElementInternals` standard](https://html.spec.whatwg.org/multipage/custom-elements.html#the-elementinternals-interface). The specification is supported by current releases of Chromium and Firefox.

## Use case

The primary use case for `ElementInternals` right now is allowing custom elements full participation in HTML forms. To do this, it provides any element designated as `formAssociated` access to a handful of utilities.

The `ElementInternals` API also offers users access to increased utilities for accessibility by exposing the [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) to the element.

## Installation

This package is available on `npm` under the name `element-internals-polyfill`
and can be installed with [npm](https://docs.npmjs.com/getting-started),
[yarn](https://yarnpkg.com/en/docs/getting-started), [unpkg](https://unpkg.com)
or however else you consume dependencies.

### Example commands: 

npm:
```bash
npm i element-internals-polyfill
```

yarn:
```bash
yarn add element-internals-polyfill
```

skypack:
```javascript
import 'https://cdn.skypack.dev/element-internals-polyfill';
```

unpkg:
```javascript
import 'https://unpkg.com/element-internals-polyfill';
```

## How it works

To do this, add the `static get formAssociated` to a custom element and call the `attachInternals` method to return a new instance of the `ElementInternals` interface:

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }
}
```

This works by doing several things under the hood. First, there is a feature check for the `ElementInternals` object on the window. If that does not exist, the polyfill wires up a global [`MutationObserver`](https://developer.mozilla.org/en/docs/Web/API/MutationObserver) on the document to watch for additions to the DOM that the polyfill might need.

It also monkey-patches `HTMLElement.prototype.attachShadow` to wire up a similar listener on any created shadow roots and to remove the watcher if the shadow root is removed.

The polyfill will also monkey-patch `window.FormData` to attach any custom elements to that feature as well.

The currently-supported features of the polyfill are:

### Form-associated custom elements

To create a form-associated custom element using `ElementInternals`, the element's class must have a static `formAssociated` member that returns `true`. 

```javascript
class MyFormControl extends HTMLElement {
  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.internals = this.attachInternals();
  }
}
```

In the above example, the form control will now have access to several unique APIs for participating in a form:

- Labels will be wired up properly as they would with any built-in input. The polyfill achieves this by applying an `aria-labelledby` attribute to the host element and referencing any labels with a `for` attribute corresponding to the host's `id`. A reference to these labels can be found under `this.internals.labels`.
- The internals interface will have access to the host element's form if one exists under `this.internals.form`.
- If the element has a name, a refernce to the host element will be saved on the form object.

In addition to the above the `ElementInternals` prototype has access to several form-specific methods including:

- `checkValidity`: Will return the validity state of the form control.
- `reportValidity`: Will trigger an `invalid` event if the form control is invalid. For the polyfill this method will not trigger the `validationMessage` to show to the user, that is a task left to the consumer.
- `setFormValue`: Sets the form control's value on the form. This value will be attached to the form's `FormData` method.
- `setValidity`: Takes two arguments, the first being a partial validity object that will update the control's validity object and the second being an optional validation message (required if the form is invalid). If this object is missing the method will throw an error. If the first argument is an object literal the form will be marked as valid.
- `validationMessage`: The element's validation message as set by callse to `ElementInternals.prototype.setValidity`.
- `validity`: The validity controller which is identical to the interface of `HTMLInputElement.prototype.validity`.
- `willValidate`: Will be `true` if the control is set to participate in a form.

### Accessibility controls

In addition to form controls, `ElementInternals` will also surface several accessibility methods for any element with internals attached. A list of supported properties (and their associated attributes) follows:

- `ariaAtomic`: 'aria-atomic'
- `ariaAutoComplete`: 'aria-autocomplete'
- `ariaBusy`: 'aria-busy'
- `ariaChecked`: 'aria-checked'
- `ariaColCount`: 'aria-colcount'
- `ariaConIndex`: 'aria-colindex'
- `ariaColSpan`: 'aria-colspan'
- `ariaCurrent`: 'aria-current'
- `ariaDisabled`: 'aria-disabled'
- `ariaExpanded`: 'aria-expanded'
- `ariaHasPopup`: 'aria-haspopup'
- `ariaHidden`: 'aria-hidden'
- `ariaKeyShortcuts`: 'aria-keyshortcuts'
- `ariaLabel`: 'aria-label'
- `ariaLevel`: 'aria-level'
- `ariaLive`: 'aria-live'
- `ariaModal`: 'aria-modal'
- `ariaMultiLine`: 'aria-multiline'
- `ariaMultiSelectable`: 'aria-multiselectable'
- `ariaOrientation`: 'aria-orientation'
- `ariaPlaceholder`: 'aria-placeholder'
- `ariaPosInSet`: 'aria-posinset'
- `ariaPressed`: 'aria-pressed'
- `ariaReadOnly`: 'aria-readonly'
- `ariaRelevant`: 'aria-relevant'
- `ariaRequired`: 'aria-required'
- `ariaRoleDescription`: 'aria-roledescription'
- `ariaRowCount`: 'aria-rowcount'
- `ariaRowIndex`: 'aria-rowindex'
- `ariaRowSpan`: 'aria-rowspan'
- `ariaSelected`: 'aria-selected'
- `ariaSort`: 'aria-sort'
- `ariaValueMax`: 'aria-valuemax'
- `ariaValueMin`: 'aria-valuemin'
- `ariaValueNow`: 'aria-valuenow'
- `ariaValueText`: 'aria-valuetext'

For example, if you are creating a control that has a checked property, you will likely could set the `internals.ariaChecked` property to `'true'`. In polyfilled browsers, this will result in adding `aria-checked="true"` to the host's attributes. In fully-supported browsers, this attribute will not be reflected although the checked property will be reflected in the accessibility object model.

```javascript
class CheckedControl extends HTMLElement {
  #checked = false;
  #internals = this.attachInternals();

  get checked() {
    return this.#checked;
  }

  set checked(isChecked) {
    this.#checked = isChecked;
    this.#internals.ariaChecked = isChecked.toString();
  }
}
```

### State API

`ElementInternals` exposes an API for creating custom states on an element. For instance if a developer wanted to signify to users that an element was in state `foo`, they could call `internals.states.add('--foo')`. This would make the element match the selector `:--foo`. Unfortunately in non-supporting browsers this is an invalid selector and will throw an error in JS and would cause the parsing of a CSS rule to fail. As a result, this polyfill will add states using the `state--foo` attribute to the host element, as well as a `state--foo` shadow part in supporting browsers.

In order to properly select these elements in CSS, you will need to duplicate your rule as follows:

```css
/** Supporting browsers */
:--foo { 
  color: rebeccapurple;
}

/** Polyfilled browsers */
[state--foo] {
  color: rebeccapurple;
}
```

The shadow part allows matching the custom state from _outside_ a shadow tree, with similarly duplicated rules:

```css
/** Supporting browsers */
::part(bar):--foo {
  color: rebeccapurple;
}

/** Polyfilled browsers (that however support shadow parts) */
::part(bar state--foo) {
  color: rebeccapurple;
}
```

Trying to combine selectors like `:--foo, [state--foo]` will cause the parsing of the rule to fail because `:--foo` is an invalid selector. As a potential optimization, you can use CSS `@supports` as follows:

```css
@supports selector(:--foo) {
  /** Native supporting code here */
}

@supports not selector([state--foo]) {
  /** Code for polyfilled browsers here */
}
```

Be sure to understand how your supported browsers work with CSS `@supports` before using the above strategy.

## Current limitations

- Right now providing a cross-browser compliant version of `ElementInternals.reportValidity` is not supported. The method essentially behaves as a proxy for `ElementInternals.checkValidity`.
- The polyfill does support the outcomes of the [Accessibility Object Model](https://wicg.github.io/aom/explainer.html#) for applying accessibility rules on the DOM object. However, the spec states that updates using AOM will not be reflected by DOM attributes, but only on the element's accesibility object. However, to emulate this behavior before it is fully supported, it is necessary to use the attributes. If you choose to use this feature, please note that behavior in polyfilled browsers and non-polyfilled browsers will be different; however, the outcome for users will be the same.
- It is currently impossible to set form states to `:invalid` and `:valid` so this polyfill replaces those with the `[internals-invalid]` and `[internals-valid]` attributes on the host element. The proper selector for invalid elements will be `:host(:invalid), :host([internals-invalid])`.
- Exposing custom states as shadow parts means that any element using custom states in a shadow tree can be matched using `::part(state--foo)` in polyfilled browsers, even if the author didn't intend to expose it. This was deemed an acceptable trade-off, compared to tracking explicitly exposed elements using a mutation observer.

## A note about versioning

This packages doesn't necessarily follow semantic versioning. As the spec is still under consideration and implementation by browser vendors, the features supported by this package will change (generally following Chrome's implementation).
