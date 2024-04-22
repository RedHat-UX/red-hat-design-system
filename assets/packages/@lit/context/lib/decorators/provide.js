import{ContextProvider as t}from"../controllers/context-provider.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e({context:e}){return(n,i)=>{const o=new WeakMap;if("object"==typeof i)return i.addInitializer((function(){o.set(this,new t(this,{context:e}))})),{get(){return n.get.call(this)},set(t){return o.get(this)?.setValue(t),n.set.call(this,t)},init(t){return o.get(this)?.setValue(t),t}};{n.constructor.addInitializer((n=>{o.set(n,new t(n,{context:e}))}));const r=Object.getOwnPropertyDescriptor(n,i);let s;if(void 0===r){const t=new WeakMap;s={get:function(){return t.get(this)},set:function(e){o.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=r.set;s={...r,set:function(e){o.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(n,i,s)}}}export{e as provide};
//# sourceMappingURL=provide.js.map
