import{nothing as D}from"../lit-html.js";import{directive as e,Directive as i}from"../directive.js";import{setCommittedValue as dt}from"../directive-helpers.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=e(class extends i{constructor(){super(...arguments),this.key=D}render(r,t){return this.key=r,t}update(r,[t,e]){return t!==this.key&&(dt(r),this.key=t),e}});export{Bt as keyed};
//# sourceMappingURL=keyed.js.map
