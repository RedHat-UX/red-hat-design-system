import{ContextProvider as t}from"../controllers/context-provider.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e({context:e}){return(n,i)=>{const r=new WeakMap;if("object"==typeof i)return{get(){return n.get.call(this)},set(t){return r.get(this).setValue(t),n.set.call(this,t)},init(n){return r.set(this,new t(this,{context:e,initialValue:n})),n}};{n.constructor.addInitializer((n=>{r.set(n,new t(n,{context:e}))}));const o=Object.getOwnPropertyDescriptor(n,i);let s;if(void 0===o){const t=new WeakMap;s={get(){return t.get(this)},set(e){r.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=o.set;s={...o,set(e){r.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(n,i,s)}}}export{e as provide};
//# sourceMappingURL=provide.js.map
