import{ContextProvider as t}from"../controllers/context-provider.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e({context:e}){return(n,r)=>{const i=new WeakMap;if("object"==typeof r)return r.addInitializer((function(){i.set(this,new t(this,{context:e}))})),{get(){return n.get.call(this)},set(t){return i.get(this)?.setValue(t),n.set.call(this,t)},init(t){return i.get(this)?.setValue(t),t}};{n.constructor.addInitializer((n=>{i.set(n,new t(n,{context:e}))}));const o=Object.getOwnPropertyDescriptor(n,r);let s;if(void 0===o){const t=new WeakMap;s={get(){return t.get(this)},set(e){i.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=o.set;s={...o,set(e){i.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(n,r,s)}}}export{e as provide};
//# sourceMappingURL=provide.js.map
