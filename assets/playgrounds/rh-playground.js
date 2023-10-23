/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4=window,e$a=t$4.ShadowRoot&&(void 0===t$4.ShadyCSS||t$4.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$4=Symbol(),n$6=new WeakMap;class o$7{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$a&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$6.set(s,t));}return t}toString(){return this.cssText}}const r$3=t=>new o$7("string"==typeof t?t:t+"",void 0,s$4),i$6=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$7(n,t,s$4)},S$1=(s,n)=>{e$a?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$4.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$3;const e$9=window,r$2=e$9.trustedTypes,h$1=r$2?r$2.emptyScript:"",o$6=e$9.reactiveElementPolyfillSupport,n$5={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$5={attribute:!0,type:String,converter:n$5,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$5){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$5}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$5){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$5).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$5;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$6||o$6({ReactiveElement:d$1}),(null!==(s$3=e$9.reactiveElementVersions)&&void 0!==s$3?s$3:e$9.reactiveElementVersions=[]).push("1.6.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$3;const i$5=window,s$2=i$5.trustedTypes,e$8=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$5="$lit$",n$4=`lit$${(Math.random()+"").slice(9)}$`,l$4="?"+n$4,h=`<${l$4}>`,r$1=document,d=()=>r$1.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r$1.createTreeWalker(r$1,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f$1;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$1?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f$1,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f$1:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f$1?s+h:v>=0?(l.push(e),s.slice(0,v)+o$5+s.slice(v)+n$4+w):s+n$4+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$8?e$8.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$5)||i.startsWith(n$4)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$5).split(n$4),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$4),i=t.length-1;if(i>0){h.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d());}}}else if(8===h.nodeType)if(h.data===l$4)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$4,t+1));)v.push({type:7,index:r}),t+=n$4.length-1;}r++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$1).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return C.currentNode=r$1,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$1.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$2?s$2.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i$5.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t$3=i$5.litHtmlVersions)&&void 0!==t$3?t$3:i$5.litHtmlVersions=[]).push("2.7.4");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$3,o$4;class s$1 extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$1.finalized=!0,s$1._$litElement$=!0,null===(l$3=globalThis.litElementHydrateSupport)||void 0===l$3||l$3.call(globalThis,{LitElement:s$1});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s$1});(null!==(o$4=globalThis.litElementVersions)&&void 0!==o$4?o$4:globalThis.litElementVersions=[]).push("3.3.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$7=t=>(...e)=>({_$litDirective$:t,values:e});class i$4{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$3=e$7(class extends i$4{constructor(t){var i;if(super(t),t.type!==t$2.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$6=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$3=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$5(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$3(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return e$5({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$2=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$4(e){return o$2({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$2(i,n){return o$2({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$3(e){return o$2({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$2;const e$2=null!=(null===(n$2=window.HTMLSlotElement)||void 0===n$2?void 0:n$2.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$2(n){const{slot:l,selector:t}=null!=n?n:{};return o$2({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$2(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o$1(o,n,r){let l,s=o;return "object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?l$2({slot:s,flatten:n,selector:r}):o$2({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}

/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const throwMarker = Symbol("Comlink.thrown");
const isObject$1 = (val) => (typeof val === "object" && val !== null) || typeof val === "function";
/**
 * Internal transfer handle to handle objects marked to proxy.
 */
const proxyTransferHandler = {
    canHandle: (val) => isObject$1(val) && val[proxyMarker],
    serialize(obj) {
        const { port1, port2 } = new MessageChannel();
        expose(obj, port1);
        return [port2, [port2]];
    },
    deserialize(port) {
        port.start();
        return wrap(port);
    },
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */
const throwTransferHandler = {
    canHandle: (value) => isObject$1(value) && throwMarker in value,
    serialize({ value }) {
        let serialized;
        if (value instanceof Error) {
            serialized = {
                isError: true,
                value: {
                    message: value.message,
                    name: value.name,
                    stack: value.stack,
                },
            };
        }
        else {
            serialized = { isError: false, value };
        }
        return [serialized, []];
    },
    deserialize(serialized) {
        if (serialized.isError) {
            throw Object.assign(new Error(serialized.value.message), serialized.value);
        }
        throw serialized.value;
    },
};
/**
 * Allows customizing the serialization of certain values.
 */
const transferHandlers = new Map([
    ["proxy", proxyTransferHandler],
    ["throw", throwTransferHandler],
]);
function expose(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) {
            return;
        }
        const { id, type, path } = Object.assign({ path: [] }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);
            const rawValue = path.reduce((obj, prop) => obj[prop], obj);
            switch (type) {
                case "GET" /* GET */:
                    {
                        returnValue = rawValue;
                    }
                    break;
                case "SET" /* SET */:
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;
                case "APPLY" /* APPLY */:
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;
                case "CONSTRUCT" /* CONSTRUCT */:
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;
                case "ENDPOINT" /* ENDPOINT */:
                    {
                        const { port1, port2 } = new MessageChannel();
                        expose(obj, port2);
                        returnValue = transfer(port1, [port1]);
                    }
                    break;
                case "RELEASE" /* RELEASE */:
                    {
                        returnValue = undefined;
                    }
                    break;
                default:
                    return;
            }
        }
        catch (value) {
            returnValue = { value, [throwMarker]: 0 };
        }
        Promise.resolve(returnValue)
            .catch((value) => {
            return { value, [throwMarker]: 0 };
        })
            .then((returnValue) => {
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
            if (type === "RELEASE" /* RELEASE */) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
            }
        });
    });
    if (ep.start) {
        ep.start();
    }
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint))
        endpoint.close();
}
function wrap(ep, target) {
    return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) {
        throw new Error("Proxy has been released and is not useable");
    }
}
function createProxy(ep, path = [], target = function () { }) {
    let isProxyReleased = false;
    const proxy = new Proxy(target, {
        get(_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) {
                return () => {
                    return requestResponseMessage(ep, {
                        type: "RELEASE" /* RELEASE */,
                        path: path.map((p) => p.toString()),
                    }).then(() => {
                        closeEndPoint(ep);
                        isProxyReleased = true;
                    });
                };
            }
            if (prop === "then") {
                if (path.length === 0) {
                    return { then: () => proxy };
                }
                const r = requestResponseMessage(ep, {
                    type: "GET" /* GET */,
                    path: path.map((p) => p.toString()),
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, [...path, prop]);
        },
        set(_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, {
                type: "SET" /* SET */,
                path: [...path, prop].map((p) => p.toString()),
                value,
            }, transferables).then(fromWireValue);
        },
        apply(_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) {
                return requestResponseMessage(ep, {
                    type: "ENDPOINT" /* ENDPOINT */,
                }).then(fromWireValue);
            }
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") {
                return createProxy(ep, path.slice(0, -1));
            }
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "APPLY" /* APPLY */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
        construct(_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "CONSTRUCT" /* CONSTRUCT */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
    });
    return proxy;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, { [proxyMarker]: true });
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers) {
        if (handler.canHandle(value)) {
            const [serializedValue, transferables] = handler.serialize(value);
            return [
                {
                    type: "HANDLER" /* HANDLER */,
                    name,
                    value: serializedValue,
                },
                transferables,
            ];
        }
    }
    return [
        {
            type: "RAW" /* RAW */,
            value,
        },
        transferCache.get(value) || [],
    ];
}
function fromWireValue(value) {
    switch (value.type) {
        case "HANDLER" /* HANDLER */:
            return transferHandlers.get(value.name).deserialize(value.value);
        case "RAW" /* RAW */:
            return value.value;
    }
}
function requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve) => {
        const id = generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) {
                return;
            }
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) {
            ep.start();
        }
        ep.postMessage(Object.assign({ id }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
        .join("-");
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Sent from the project to the proxy, with configuration and a port for further
 * messages.
 */
const CONFIGURE_PROXY = 1;
/**
 * Sent from the proxy to the project, with a port that will be connected to the
 * service worker.
 */
const CONNECT_PROJECT_TO_SW = 3;
/**
 * Sent from the service worker to the project, to confirm that the port was
 * received.
 */
const ACKNOWLEDGE_SW_CONNECTION = 4;
/**
 * Sent from the project to the service worker proxy when there is a version
 * mismatch to request a call to ServiceWorkerRegistration.update().
 */
const UPDATE_SERVICE_WORKER = 6;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const endWithSlash = (s) => (s.endsWith('/') ? s : s + '/');
const getRandomString = () => crypto.getRandomValues(new Uint32Array(1))[0].toString(32);
/**
 * If the given URL object is a Skypack URL, perform an in-place update that
 * switches from optimized mode to raw mode.
 *
 * See https://github.com/google/playground-elements/issues/107
 */
const forceSkypackRawMode = (url) => {
    if (url.hostname === 'cdn.skypack.dev') {
        url.pathname = url.pathname.replace(/mode=imports\/(un)?optimized/, 'mode=raw');
    }
    return url;
};

/**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      totalWeight += obj.weight;

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }

  return { path, id, weight, src, getFn }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(weight = 1, mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      // Default function is 1/sqrt(x), weight makes that variable
      const norm = 1 / Math.pow(numTokens, 0.5 * weight);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(
  keys,
  docs,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(
  data,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore$1(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE)
    }

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return []
        }
      }
      return res
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '6.6.2';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function sortCompletionItems(completions, searchWord) {
    if (!completions)
        return [];
    // If the user input a letter or a partial word, we want to offer
    // the closest matches first, and the weaker matches after. We will use
    // Fuse to score our completions by their fuzzy matches.
    // See https://fusejs.io/api/options.html
    const fuse = new Fuse(completions !== null && completions !== void 0 ? completions : [], {
        // Keep the threshold a bit lower than the default
        // so that the matching isn't too forgiving/confusing, but so
        // that a small typo doesn't delete all of the matches
        threshold: 0.3,
        shouldSort: true,
        isCaseSensitive: true,
        includeScore: true,
        includeMatches: true,
        keys: ['name'],
        // Match characters so that at least most of the word matches
        minMatchCharLength: Math.max(searchWord.length / 1.2, 1),
    });
    const relevantCompletions = fuse.search(searchWord);
    const editorCompletions = relevantCompletions
        // Map the relevant info from fuse scoring
        .map((item) => {
        var _a;
        return ({
            text: item.item.name,
            displayText: item.item.name,
            score: (_a = item.score) !== null && _a !== void 0 ? _a : 0,
            matches: item.matches,
            get details() {
                return item.item.details;
            },
        });
    })
        // Sort the completions by how well they matched the given keyword
        .sort((a, b) => {
        if (a.score === b.score) {
            return a.text.localeCompare(b.text);
        }
        return a.score - b.score;
    });
    return editorCompletions;
}
function completionEntriesAsEditorCompletions(completions, prefix = '') {
    var _a;
    return ((_a = completions === null || completions === void 0 ? void 0 : completions.map((comp) => ({
        // Since the completion engine will only append the word
        // given as the text property here, auto-completing from a period
        // would replace the period with the word. This is why we need
        // to append the period into the text property. This is not visible to the
        // user however, so no harm is done.
        text: prefix + comp.name,
        displayText: comp.name,
        score: Number.parseInt(comp.sortText),
        get details() {
            return comp.details;
        },
    }))) !== null && _a !== void 0 ? _a : []);
}
/**
 * Create a array of completion entries with a details fetching
 * function built in, so that the code editor can use it to fetch
 * the details when needed itself, instead of having to ask the project
 * layer for them.
 */
function populateCompletionInfoWithDetailGetters(completionInfo, filename, cursorIndex, getCompletionDetailsFunction) {
    const completionInfoWithDetails = completionInfo;
    completionInfoWithDetails.entries = completionInfo === null || completionInfo === void 0 ? void 0 : completionInfo.entries.map((entry) => ({
        ...entry,
        // Details are fetched using a proxy pattern, in which the details
        // are not instantiated until requested for. When asking for details
        // from the completion item, the getter is called, launching the
        // query if needed.
        _details: undefined,
        get details() {
            if (!this._details) {
                this._details = getCompletionDetailsFunction(filename, cursorIndex, entry.name);
            }
            return this._details;
        },
    }));
    return completionInfoWithDetails;
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// DO NOT UPDATE MANUALLY.
// This file is automatically generated by scripts/update-version-module.js
// before publishing.
const npmVersion = '0.18.1';
const serviceWorkerHash = '1dae6563';

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Deferred {
    constructor() {
        this.settled = false;
        this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    resolve(value) {
        this.settled = true;
        this._resolve(value);
    }
    reject(reason) {
        this.settled = true;
        this._reject(reason);
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const unreachable = (n) => n;
const errorNotFound = {
    status: /* Not Found */ 404,
    body: 'Playground file not found',
};
const errorCancelled = {
    status: /* Service Unavailable */ 503,
    body: 'Playground build cancelled',
};
/**
 * The results of a particular Playground build.
 */
class PlaygroundBuild {
    /**
     * @param diagnosticsCallback Function that will be invoked when one or more
     * new diagnostics have been received. Fires at most once per animation frame.
     */
    constructor(diagnosticsCallback) {
        this.diagnostics = new Map();
        this._state = 'active';
        this._stateChange = new Deferred();
        this._files = new Map();
        this._diagnosticsCallback = diagnosticsCallback;
    }
    /**
     * The current state of this build.
     */
    state() {
        // Note this could be a getter, but TypeScript optimistically preserves
        // type-narrowing on properties between awaits, which makes usage awkward in
        // this case (see https://github.com/microsoft/TypeScript/issues/31429).
        return this._state;
    }
    /**
     * Promise of the next state change.
     */
    get stateChange() {
        return this._stateChange.promise;
    }
    /**
     * Set this build's state to cancelled, ignore any future build results, and
     * fail any pending file gets.
     */
    cancel() {
        this._errorPendingFileRequests(errorCancelled);
        this._changeState('cancelled');
    }
    /**
     * Return a promise of a build output with the given name. If the file is not
     * received before the build is completed or cancelled, this promise will be
     * rejected.
     */
    async getFile(name) {
        let deferred = this._files.get(name);
        if (deferred === undefined) {
            if (this._state === 'done') {
                return errorNotFound;
            }
            else if (this._state === 'cancelled') {
                return errorCancelled;
            }
            deferred = new Deferred();
            this._files.set(name, deferred);
        }
        return deferred.promise;
    }
    /**
     * Handle a worker build output.
     */
    onOutput(output) {
        if (this._state !== 'active') {
            return;
        }
        if (output.kind === 'file') {
            this._onFile(output);
        }
        else if (output.kind === 'diagnostic') {
            this._onDiagnostic(output);
        }
        else if (output.kind === 'done') {
            this._onDone();
        }
        else {
            throw new Error(`Unexpected BuildOutput kind: ${unreachable(output).kind}`);
        }
    }
    _changeState(state) {
        this._state = state;
        this._stateChange.resolve();
        this._stateChange = new Deferred();
    }
    _onFile(output) {
        let deferred = this._files.get(output.file.name);
        if (deferred === undefined) {
            deferred = new Deferred();
            this._files.set(output.file.name, deferred);
        }
        deferred.resolve(output.file);
    }
    _onDiagnostic(output) {
        let arr = this.diagnostics.get(output.filename);
        if (arr === undefined) {
            arr = [];
            this.diagnostics.set(output.filename, arr);
        }
        arr.push(output.diagnostic);
        if (this._diagnosticsDebounceId === undefined) {
            this._diagnosticsDebounceId = requestAnimationFrame(() => {
                if (this._state !== 'cancelled') {
                    this._diagnosticsDebounceId = undefined;
                    this._diagnosticsCallback();
                }
            });
        }
    }
    _onDone() {
        this._errorPendingFileRequests(errorNotFound);
        this._changeState('done');
    }
    _errorPendingFileRequests(error) {
        for (const file of this._files.values()) {
            if (!file.settled) {
                file.resolve(error);
            }
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// Each <playground-project> has a unique session ID used to scope requests from
// the preview iframes.
const sessions = new Set();
const generateUniqueSessionId = () => {
    let sessionId;
    do {
        sessionId = getRandomString();
    } while (sessions.has(sessionId));
    sessions.add(sessionId);
    return sessionId;
};
class FilesChangedEvent extends Event {
    constructor(projectLoaded = false) {
        super('filesChanged');
        this.projectLoaded = projectLoaded;
    }
}
/**
 * Coordinates <playground-file-editor> and <playground-preview> elements.
 */
let PlaygroundProject = class PlaygroundProject extends s$1 {
    constructor() {
        super(...arguments);
        /**
         * This property is used to settle which of the multiple ways a project can be
         * specified was set most recently.
         */
        this._source = { type: 'none' };
        /**
         * Base URL for script execution sandbox.
         *
         * It is highly advised to change this property to a URL on a separate origin
         * which has no privileges to perform sensitive actions or access sensitive
         * data. This is because this element will execute arbitrary JavaScript, and
         * does not have the ability to sanitize or sandbox it.
         *
         * This URL must host the following files from the playground-elements
         * package:
         *   1. playground-service-worker.js
         *   2. playground-service-worker-proxy.html
         *
         * Defaults to the directory containing the script that defines this element
         * on the same origin (typically something like
         * "/node_modules/playground-elements/").
         */
        this.sandboxBaseUrl = `https://unpkg.com/playground-elements@${npmVersion}/`;
        /**
         * The service worker scope to register on
         */
        // TODO: generate this?
        this.sandboxScope = `__playground_swfs_${serviceWorkerHash}/`;
        /**
         * Cached value for the `modified` getter. When undefined, the modified state
         * is unknown and must be computed.
         */
        this._modified = false;
        /**
         * A unique identifier for this instance so the service worker can keep an
         * independent cache of files for it.
         */
        this._sessionId = generateUniqueSessionId();
        this._deferredTypeScriptWorkerApi = new Deferred();
        this._validImportMap = {};
        this.lastSave = Promise.resolve();
        this.savePending = false;
    }
    /**
     * A document-relative path to a project configuration file.
     *
     * When both `projectSrc` and `files` are set, the one set most recently wins.
     * Slotted children win only if both `projectSrc` and `files` are undefined
     */
    get projectSrc() {
        if (this._source.type === 'url') {
            return this._source.url;
        }
        return undefined;
    }
    set projectSrc(url) {
        if (url) {
            if (this._source.type !== 'url' || this._source.url !== url) {
                this._source = { type: 'url', url };
            }
        }
        else if (this._source.type === 'url') {
            this._source = { type: 'none' };
        }
    }
    /**
     * Get or set the project config.
     *
     * When both `projectSrc` and `config` are set, the one set most recently
     * wins. Slotted children win only if both `projectSrc` and `config` are
     * undefined.
     */
    get config() {
        var _a;
        // Note this is declared a @property only to capture properties set before
        // upgrade. Attribute reflection and update lifecycle disabled because they
        // are not needed in this case.
        return {
            files: Object.fromEntries(((_a = this._files) !== null && _a !== void 0 ? _a : []).map((file) => [
                file.name,
                {
                    ...file,
                    name: undefined,
                },
            ])),
            importMap: this._validImportMap,
        };
    }
    set config(config) {
        if (config) {
            this._source = { type: 'direct', config };
        }
        else if (this._source.type === 'direct') {
            this._source = { type: 'none' };
        }
    }
    get files() {
        return this._files;
    }
    /**
     * Map from filename to array of Language Server Protocol diagnostics
     * resulting from the latest compilation.
     */
    get diagnostics() {
        var _a;
        return (_a = this._build) === null || _a === void 0 ? void 0 : _a.diagnostics;
    }
    /**
     * Indicates whether the user has modified, added, or removed any project
     * files. Resets whenever a new project is loaded.
     */
    get modified() {
        if (this._modified === undefined) {
            if (this._files === undefined && this._pristineFiles === undefined) {
                this._modified = false;
            }
            else if (this._files === undefined ||
                this._pristineFiles === undefined) {
                this._modified = true;
            }
            else {
                this._modified = !playgroundFilesDeepEqual(this._files, this._pristineFiles);
            }
        }
        return this._modified;
    }
    set _importMap(importMap) {
        const errors = validateImportMap(importMap);
        if (errors.length > 0) {
            for (const error of errors) {
                console.error(error);
            }
            this._validImportMap = {};
        }
        else {
            this._validImportMap = importMap;
        }
    }
    get _importMap() {
        return this._validImportMap;
    }
    get _normalizedSandboxBaseUrl() {
        const url = new URL(this.sandboxBaseUrl, import.meta.url);
        url.pathname = endWithSlash(url.pathname);
        return url;
    }
    get baseUrl() {
        // Make sure that we've connected to the Service Worker and loaded the
        // project files before generating the preview URL. This ensures that there
        // are files to load when the iframe navigates to the URL.
        if (this._serviceWorkerAPI === undefined || this._files === undefined) {
            return undefined;
        }
        // TODO (justinfagnani): lookup URL to show from project config
        const indexUrl = new URL(`${endWithSlash(this.sandboxScope)}${this._sessionId}/`, this._normalizedSandboxBaseUrl);
        return indexUrl.href;
    }
    get _serviceWorkerProxyIframeUrl() {
        // We include the session ID as a query parameter so that the service worker
        // can figure out which proxy client goes with which session. We use an
        // #anchor instead of a ?queryParam because unpkg.com strips all
        // ?queryParams.
        return new URL(`playground-service-worker-proxy.html#playground-session-id=${this._sessionId}`, this._normalizedSandboxBaseUrl).href;
    }
    async update(changedProperties) {
        if (changedProperties.has('_source')) {
            /* eslint-disable @typescript-eslint/no-floating-promises */
            this._loadProjectFromSource();
            /* eslint-enable @typescript-eslint/no-floating-promises */
        }
        if (changedProperties.has('sandboxScope') ||
            changedProperties.has('sandboxBaseUrl') ||
            changedProperties.has('_serviceWorkerAPI')) {
            this.dispatchEvent(new CustomEvent('urlChanged'));
        }
        super.update(changedProperties);
    }
    async _loadProjectFromSource() {
        const source = this._source;
        switch (source.type) {
            case 'none':
                this._files = undefined;
                this._importMap = {};
                break;
            case 'direct':
                {
                    const { files, importMap } = await expandProjectConfig(source.config, document.baseURI);
                    // Note the source could have changed while fetching, hence the
                    // double-check here.
                    if (source !== this._source) {
                        return;
                    }
                    this._files = files;
                    this._importMap = importMap;
                }
                break;
            case 'slot':
                this._files = source.files;
                this._importMap = source.importMap;
                break;
            case 'url':
                {
                    const { files, importMap } = await fetchProjectConfig(new URL(source.url, document.baseURI).href);
                    // Note the source could have changed while fetching, hence the
                    // double-check here.
                    if (source !== this._source) {
                        return;
                    }
                    this._files = files;
                    this._importMap = importMap;
                }
                break;
        }
        this._pristineFiles =
            this._files && JSON.parse(JSON.stringify(this._files));
        this._modified = false;
        this.dispatchEvent(new FilesChangedEvent(true));
        /* eslint-disable @typescript-eslint/no-floating-promises */
        this.save();
        /* eslint-enable @typescript-eslint/no-floating-promises */
    }
    render() {
        return x `
      <slot @slotchange=${this._slotChange}></slot>
      <iframe
        src=${this._serviceWorkerProxyIframeUrl}
        @load=${this._onServiceWorkerProxyIframeLoad}
      ></iframe>
    `;
    }
    _slotChange() {
        var _a;
        const { type } = this._source;
        if (type !== 'none' && type !== 'slot') {
            // It's a little tricky to do "most recent wins" with slots, because the
            // slotchange event will always fire after the first render, giving the
            // illusion that it was set after the other methods. We could do some
            // extra book-keeping to make this work, but it doesn't seem worth the
            // complexity, because it should be very rare to [1] set a `projectSrc` or
            // `files`, and then [2] slot some new children.
            return;
        }
        const files = [];
        let importMap = undefined;
        for (const s of this._slot.assignedElements({ flatten: true })) {
            const typeAttr = s.getAttribute('type');
            if (!(typeAttr === null || typeAttr === void 0 ? void 0 : typeAttr.startsWith('sample/'))) {
                continue;
            }
            const fileType = typeAttr.substring('sample/'.length);
            let content = (_a = s.textContent) !== null && _a !== void 0 ? _a : '';
            if (fileType === 'html') {
                // Replace usages of `&lt;/script>` with `</script>`. Match against
                // `&lt;/` so that other usages of &lt; aren't replaced.
                content = content.replace(/&lt;\//g, '</');
            }
            if (!s.hasAttribute('preserve-whitespace')) {
                content = outdent(content);
            }
            if (fileType === 'importmap') {
                try {
                    importMap = JSON.parse(content);
                }
                catch {
                    console.error('Invalid import map JSON', s);
                }
            }
            else {
                const name = s.getAttribute('filename');
                if (!name) {
                    continue;
                }
                // Note "" is an invalid label.
                const label = s.getAttribute('label') || undefined;
                const selected = s.hasAttribute('selected');
                const contentType = typeEnumToMimeType(fileType);
                files.push({
                    name,
                    label,
                    hidden: s.hasAttribute('hidden'),
                    content,
                    contentType,
                    selected,
                });
            }
        }
        if (files.length > 0 || importMap !== undefined) {
            this._source = { type: 'slot', files, importMap: importMap !== null && importMap !== void 0 ? importMap : {} };
        }
    }
    async firstUpdated() {
        const typescriptWorkerScriptUrl = forceSkypackRawMode(new URL(new URL('assets/playground-typescript-worker-3d69e81a.js', import.meta.url).href, import.meta.url));
        let worker;
        if (typescriptWorkerScriptUrl.origin === window.location.origin) {
            // Easy case.
            worker = new Worker(typescriptWorkerScriptUrl);
        }
        else {
            // If the worker script is different-origin, we need to fetch it ourselves
            // and create a blob URL.
            const resp = await fetch(typescriptWorkerScriptUrl.href);
            const text = await resp.text();
            const blobUrl = URL.createObjectURL(new Blob([text], { type: 'application/javascript' }));
            worker = new Worker(blobUrl);
            URL.revokeObjectURL(blobUrl);
        }
        this._deferredTypeScriptWorkerApi.resolve(wrap(worker));
    }
    _onServiceWorkerProxyIframeLoad() {
        // This channel is persistent, and is only used to receive new service
        // worker channel ports from the proxy iframe. Note we can get new service
        // worker ports at any time from the proxy, when the service worker updates.
        const { port1, port2 } = new MessageChannel();
        port1.addEventListener('message', (event) => {
            if (event.data.type === CONNECT_PROJECT_TO_SW) {
                this._onNewServiceWorkerPort(event.data.port);
            }
        });
        port1.start();
        this._postMessageToServiceWorkerProxyIframe({
            type: CONFIGURE_PROXY,
            scope: this.sandboxScope,
            port: port2,
        }, [port2]);
    }
    _onNewServiceWorkerPort(port) {
        const onMessage = (e) => {
            if (e.data.type === ACKNOWLEDGE_SW_CONNECTION) {
                port.removeEventListener('message', onMessage);
                if (e.data.version === serviceWorkerHash) {
                    this._serviceWorkerAPI = wrap(port);
                    /* eslint-disable @typescript-eslint/no-floating-promises */
                    this._serviceWorkerAPI.setFileAPI(proxy({
                        getFile: (name) => this._getFile(name),
                    }), this._sessionId);
                    /* eslint-enable @typescript-eslint/no-floating-promises */
                }
                else {
                    // Version mismatch. Request the service worker be updated
                    // immediately. We'll get back here again after it updates via a
                    // CONNECT_PROJECT_TO_SW message from the proxy.
                    console.info(`Playground service worker is outdated. ` +
                        `Want ${serviceWorkerHash} but got ${e.data.version}. ` +
                        `Waiting for update.`);
                    this._postMessageToServiceWorkerProxyIframe({
                        type: UPDATE_SERVICE_WORKER,
                    });
                }
            }
        };
        port.addEventListener('message', onMessage);
        port.start();
    }
    _postMessageToServiceWorkerProxyIframe(message, transfer) {
        // This iframe exists to proxy messages between this project and the service
        // worker, because the service worker may be running on a different origin
        // for security.
        const iframeWindow = this._serviceWorkerProxyIframe.contentWindow;
        if (!iframeWindow) {
            throw new Error('Unexpected internal error: ' +
                '<playground-project> service worker proxy iframe had no contentWindow');
        }
        // We could constrain targetOrigin to
        // `this._normalizedSandboxBaseUrl.origin`, but unclear if that provides any
        // security benefit, and would add the limitation that the sandboxBaseUrl
        // can't redirect to another origin.
        iframeWindow.postMessage(message, '*', transfer);
    }
    async _getFile(name) {
        if (this._build === undefined) {
            return {
                status: /* Service Unavailable */ 503,
                body: 'Playground build not started',
            };
        }
        return this._build.getFile(name);
    }
    /**
     * Build this project immediately, cancelling any previous build.
     */
    async save() {
        var _a, _b;
        (_a = this._build) === null || _a === void 0 ? void 0 : _a.cancel();
        const build = new PlaygroundBuild(() => {
            this.dispatchEvent(new CustomEvent('diagnosticsChanged'));
        });
        this._build = build;
        this.dispatchEvent(new CustomEvent('compileStart'));
        const workerApi = await this._deferredTypeScriptWorkerApi.promise;
        if (build.state() !== 'active') {
            return;
        }
        /* eslint-disable @typescript-eslint/no-floating-promises */
        workerApi.compileProject((_b = this._files) !== null && _b !== void 0 ? _b : [], { importMap: this._importMap }, proxy((result) => build.onOutput(result)));
        /* eslint-enable @typescript-eslint/no-floating-promises */
        await build.stateChange;
        if (build.state() !== 'done') {
            return;
        }
        this.dispatchEvent(new CustomEvent('compileDone'));
    }
    async getCompletions(changeData) {
        var _a, _b, _c;
        const tokenUnderCursorAsString = changeData.tokenUnderCursor.trim();
        // If the user is starting a new word, we need to fetch relevant completion items
        // from the TypeScript Language Service. If we are however building on top of
        // a already fetched completions list, by narrowing keyword matches, we can
        // just work with what we have fetched earlier.
        if (!changeData.isRefinement) {
            const workerApi = await this._deferredTypeScriptWorkerApi.promise;
            const completionInfo = await workerApi.getCompletions(changeData.fileName, changeData.fileContent, tokenUnderCursorAsString, changeData.cursorIndex, { importMap: this._importMap });
            if (completionInfo) {
                const getCompletionDetailsFunction = this._getCompletionDetails.bind(this);
                // We pre-generate the getter for each completion item's details, so that
                // if neeeded, they can fetch their details themselves.
                this._completionInfo = populateCompletionInfoWithDetailGetters(completionInfo, changeData.fileName, changeData.cursorIndex, getCompletionDetailsFunction);
            }
        }
        const skipFuzzySearch = changeData.tokenUnderCursor === '.' || changeData.tokenUnderCursor === '';
        // In the case that the search word is a period or empty, we don't really
        // have any material to fuzzy find with, so we don't have need
        // for running the search results through a fuzzy search.
        // For this case, we just return the entries as completion items as is.
        let completions = [];
        if (skipFuzzySearch) {
            completions = completionEntriesAsEditorCompletions((_a = this._completionInfo) === null || _a === void 0 ? void 0 : _a.entries, changeData.tokenUnderCursor);
        }
        else {
            completions = sortCompletionItems((_b = this._completionInfo) === null || _b === void 0 ? void 0 : _b.entries, tokenUnderCursorAsString);
        }
        // We want to pre-fetch the first completion item, if it's present
        // so that when the data gets to the code-editor, the detail hopefully
        // is already loaded.
        //
        // Note invoking this getter actually triggers the fetch.
        void ((_c = completions[0]) === null || _c === void 0 ? void 0 : _c.details);
        return completions;
    }
    async _getCompletionDetails(filename, cursorIndex, completionWord) {
        const workerApi = await this._deferredTypeScriptWorkerApi.promise;
        const completionItemDetails = await workerApi.getCompletionItemDetails(filename, cursorIndex, { importMap: this._importMap }, completionWord);
        return completionItemDetails;
    }
    /**
     * A simple debouncer that aims for maximal responsiveness when compiles are fast.
     *
     * There is no meaning to when the returned promise resolves.
     */
    async saveDebounced() {
        if (this.savePending) {
            return;
        }
        this.savePending = true;
        await this.lastSave;
        this.savePending = false;
        this.lastSave = this.save();
    }
    isValidNewFilename(name) {
        var _a;
        if (!name) {
            return false;
        }
        const existing = (_a = this._files) === null || _a === void 0 ? void 0 : _a.find((file) => file.name === name);
        if (existing !== undefined) {
            return existing.hidden === true;
        }
        return true;
    }
    editFile(file, newContent) {
        // Note this method takes the file object itself rather than the name like
        // add/delete/rename, because edits happen at high frequency so we don't
        // want to be doing any searches.
        file.content = newContent;
        this._modified = undefined;
        /* eslint-disable @typescript-eslint/no-floating-promises */
        this.saveDebounced();
        /* eslint-enable @typescript-eslint/no-floating-promises */
    }
    addFile(name) {
        var _a;
        if (!this._files || !this.isValidNewFilename(name)) {
            return;
        }
        const existing = (_a = this._files) === null || _a === void 0 ? void 0 : _a.find((file) => file.name === name);
        if ((existing === null || existing === void 0 ? void 0 : existing.hidden) === true) {
            // If a file already exists but is hidden, then we allow the user to
            // "create" it, which is actually unhiding it.
            existing.hidden = false;
        }
        else {
            this._files.push({
                name,
                content: '',
                contentType: typeFromFilename(name),
            });
        }
        this._modified = undefined;
        this.requestUpdate();
        this.dispatchEvent(new FilesChangedEvent());
        /* eslint-disable @typescript-eslint/no-floating-promises */
        this.save();
        /* eslint-enable @typescript-eslint/no-floating-promises */
    }
    deleteFile(filename) {
        if (!this._files) {
            return;
        }
        const idx = this._files.findIndex((file) => file.name === filename);
        if (idx < 0) {
            return;
        }
        this._files = [...this._files.slice(0, idx), ...this._files.slice(idx + 1)];
        this._modified = undefined;
        this.dispatchEvent(new FilesChangedEvent());
        /* eslint-disable @typescript-eslint/no-floating-promises */
        this.save();
        /* eslint-enable @typescript-eslint/no-floating-promises */
    }
    renameFile(oldName, newName) {
        if (!oldName || !this._files) {
            return;
        }
        if (!this.isValidNewFilename(newName)) {
            return;
        }
        const file = this._files.find((file) => file.name === oldName);
        if (!file) {
            return;
        }
        // TODO(aomarks) Check name is unique;
        file.name = newName;
        file.contentType = typeFromFilename(newName);
        this._files = [...this._files];
        this._modified = undefined;
        this.dispatchEvent(new FilesChangedEvent());
        /* eslint-disable @typescript-eslint/no-floating-promises */
        this.save();
        /* eslint-enable @typescript-eslint/no-floating-promises */
    }
};
PlaygroundProject.styles = i$6 `
    iframe {
      display: none;
    }
  `;
__decorate([
    e$5({ attribute: 'project-src', hasChanged: () => false })
], PlaygroundProject.prototype, "projectSrc", null);
__decorate([
    e$5({ attribute: false, hasChanged: () => false })
], PlaygroundProject.prototype, "config", null);
__decorate([
    t$1()
], PlaygroundProject.prototype, "_source", void 0);
__decorate([
    e$5({ attribute: 'sandbox-base-url' })
], PlaygroundProject.prototype, "sandboxBaseUrl", void 0);
__decorate([
    e$5({ attribute: 'sandbox-scope' })
], PlaygroundProject.prototype, "sandboxScope", void 0);
__decorate([
    t$1()
], PlaygroundProject.prototype, "_serviceWorkerAPI", void 0);
__decorate([
    i$2('slot')
], PlaygroundProject.prototype, "_slot", void 0);
__decorate([
    i$2('iframe')
], PlaygroundProject.prototype, "_serviceWorkerProxyIframe", void 0);
PlaygroundProject = __decorate([
    e$6('playground-project')
], PlaygroundProject);
/**
 * Fetches and expands the given JSON project config URL.
 */
const fetchProjectConfig = async (url, alreadyFetchedFilenames = new Set(), alreadyFetchedConfigUrls = new Set()) => {
    if (alreadyFetchedConfigUrls.has(url)) {
        throw new Error(`Circular project config extends: ${[
            ...alreadyFetchedConfigUrls.values(),
            url,
        ].join(' extends ')}`);
    }
    alreadyFetchedConfigUrls.add(url);
    const resp = await fetch(url);
    if (resp.status !== 200) {
        throw new Error(`Error ${resp.status} fetching project config from ${url}: ${await resp.text()}`);
    }
    let config;
    try {
        config = await resp.json();
    }
    catch (e) {
        throw new Error(`Error parsing project config JSON from ${url}: ${e.message}`);
    }
    return await expandProjectConfig(config, url, alreadyFetchedFilenames, alreadyFetchedConfigUrls);
};
/**
 * Expands a partial project config by following its `extends` property, and
 * fetching the content for all files.
 */
const expandProjectConfig = async (config, baseUrl, alreadyFetchedFilenames = new Set(), alreadyFetchedConfigUrls = new Set()) => {
    var _a, _b, _c, _d, _e;
    const filePromises = [];
    for (const [filename, info] of Object.entries((_a = config.files) !== null && _a !== void 0 ? _a : {})) {
        // A higher precedence config is already handling this file.
        if (alreadyFetchedFilenames.has(filename)) {
            continue;
        }
        alreadyFetchedFilenames.add(filename);
        if (info.content === undefined) {
            filePromises.push((async () => {
                var _a, _b;
                const resp = await fetch(new URL(filename, baseUrl).href);
                return {
                    ...info,
                    name: filename,
                    content: await resp.text(),
                    contentType: (_b = (_a = resp.headers.get('Content-Type')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : 'text/plain',
                };
            })());
        }
        else {
            filePromises.push(Promise.resolve({
                ...info,
                name: filename,
                content: (_b = info.content) !== null && _b !== void 0 ? _b : '',
                contentType: (_c = typeFromFilename(filename)) !== null && _c !== void 0 ? _c : 'text/plain',
            }));
        }
    }
    // Start extends config fetch before we block on file fetches.
    const extendsConfigPromise = config.extends
        ? fetchProjectConfig(new URL(config.extends, baseUrl).href, alreadyFetchedFilenames, alreadyFetchedConfigUrls)
        : undefined;
    const files = await Promise.all(filePromises);
    const importMap = (_d = config.importMap) !== null && _d !== void 0 ? _d : {};
    if (extendsConfigPromise) {
        const extendsConfig = await extendsConfigPromise;
        // Parent files go after our own.
        files.push(...extendsConfig.files);
        importMap.imports = {
            ...(_e = extendsConfig.importMap) === null || _e === void 0 ? void 0 : _e.imports,
            // Our imports take precedence over our parents.
            ...importMap.imports,
        };
    }
    return { files, importMap };
};
const typeFromFilename = (filename) => {
    const idx = filename.lastIndexOf('.');
    if (idx === -1 || idx === filename.length - 1) {
        return undefined;
    }
    const extension = filename.slice(idx + 1);
    return typeEnumToMimeType(extension);
};
const typeEnumToMimeType = (type) => {
    if (type === undefined) {
        return;
    }
    switch (type) {
        // TypeScript
        case 'ts':
            return 'video/mp2t';
        case 'js':
            return 'application/javascript; charset=utf-8';
        case 'json':
            return 'application/json; charset=utf-8';
        case 'jsx':
            return 'text/jsx; charset=utf-8';
        case 'tsx':
            return 'text/typescript-jsx; charset=utf-8';
        case 'html':
            return 'text/html; charset=utf-8';
        case 'css':
            return 'text/css; charset=utf-8';
        // taken from MDN's common MIME types
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
        case 'svg':
            return 'image/svg+xml';
        case 'png':
            return 'image/png';
        case 'gif':
            return 'image/gif';
        case 'jpeg':
        case 'jpg':
            return 'image/jpeg';
        case 'ico':
            return 'image/vnd.microsoft.icon';
        case 'webp':
            return 'image/webp';
        case 'webm':
            return 'video/webm';
        case 'mid':
        case 'midi':
            return 'audio/midi';
        case 'mp3':
            return 'audio/mpeg';
        case 'weba':
            return 'audio/webm';
    }
    return undefined;
};
/**
 * Validate an import map configuration (https://wicg.github.io/import-maps/).
 * Returns an array of errors. If empty, the import map is valid.
 */
const validateImportMap = (importMap) => {
    const errors = [];
    if (typeof importMap !== 'object' || importMap === null) {
        errors.push(`Import map is invalid because it must be an object,` +
            ` but it was ${importMap === null ? 'null' : typeof importMap}.`);
        return errors;
    }
    const invalidKeys = Object.keys(importMap).filter((key) => key !== 'imports');
    if (invalidKeys.length > 0) {
        errors.push(`Invalid import map properties: ${[...invalidKeys].join(', ')}.` +
            ` Only "imports" are currently supported.`);
    }
    const imports = importMap.imports;
    if (imports === undefined) {
        return errors;
    }
    if (typeof imports !== 'object' || imports === null) {
        errors.push(`Import map "imports" property is invalid` +
            ` because it must be an object,` +
            ` but it was ${imports === null ? 'null' : typeof imports}.`);
        return errors;
    }
    for (const [specifierKey, resolutionResult] of Object.entries(imports)) {
        if (typeof resolutionResult !== 'string') {
            errors.push(`Import map key "${specifierKey}" is invalid because` +
                ` address must be a string, but was` +
                ` ${resolutionResult === null ? 'null' : typeof resolutionResult}`);
            continue;
        }
        if (specifierKey.endsWith('/') && !resolutionResult.endsWith('/')) {
            errors.push(`Import map key "${specifierKey}" is invalid because` +
                ` address "${resolutionResult}" must end in a forward-slash.`);
        }
        try {
            new URL(resolutionResult);
        }
        catch {
            errors.push(`Import map key "${specifierKey}" is invalid because` +
                ` address "${resolutionResult}" is not a valid URL.`);
        }
    }
    return errors;
};
/**
 * Trim shared leading whitespace from all lines, and remove empty
 * leading/trailing lines.
 */
const outdent = (str) => {
    // Remove leading/trailing empty lines (we don't use trim() because we don't
    // want to remove leading whitespace on the first content line).
    str = str.replace(/(^[\n\s]*\n)|(\n[\n\s]*$)/g, '');
    let shortestIndent;
    for (const line of str.split(/\n/g)) {
        const indent = line.match(/^\s*/)[0].length;
        if (shortestIndent === undefined || indent < shortestIndent) {
            shortestIndent = indent;
        }
    }
    return str.replace(RegExp(`^\\s{${shortestIndent !== null && shortestIndent !== void 0 ? shortestIndent : 0}}`, 'gm'), '');
};
/**
 * Test whether two lists of Playground files are deeply equal.
 */
const playgroundFilesDeepEqual = (filesA, filesB) => {
    if (filesA.length !== filesB.length) {
        return false;
    }
    for (let i = 0; i < filesA.length; i++) {
        const fileA = filesA[i];
        const fileB = filesB[i];
        if (fileA.name !== fileB.name ||
            fileA.contentType !== fileB.contentType ||
            fileA.hidden !== fileB.hidden ||
            fileA.label !== fileB.label) {
            return false;
        }
    }
    for (let i = 0; i < filesA.length; i++) {
        const fileA = filesA[i];
        const fileB = filesB[i];
        if (fileA.content !== fileB.content) {
            return false;
        }
    }
    return true;
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
/**
 * Determines whether a node is an element.
 *
 * @param node Node to check
 */
const isNodeElement = (node) => {
    return node.nodeType === Node.ELEMENT_NODE;
};
function addHasRemoveClass(element) {
    return {
        addClass: (className) => {
            element.classList.add(className);
        },
        removeClass: (className) => {
            element.classList.remove(className);
        },
        hasClass: (className) => element.classList.contains(className),
    };
}
const fn = () => { };
const optionsBlock = {
    get passive() {
        return false;
    }
};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
const deepActiveElementPath = (doc = window.document) => {
    let activeElement = doc.activeElement;
    const path = [];
    if (!activeElement) {
        return path;
    }
    while (activeElement) {
        path.push(activeElement);
        if (activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
        }
        else {
            break;
        }
    }
    return path;
};
const doesElementContainFocus = (element) => {
    const activePath = deepActiveElementPath();
    if (!activePath.length) {
        return false;
    }
    const deepActiveElement = activePath[activePath.length - 1];
    const focusEv = new Event('check-if-focused', { bubbles: true, composed: true });
    let composedPath = [];
    const listener = (ev) => {
        composedPath = ev.composedPath();
    };
    document.body.addEventListener('check-if-focused', listener);
    deepActiveElement.dispatchEvent(focusEv);
    document.body.removeEventListener('check-if-focused', listener);
    return composedPath.indexOf(element) !== -1;
};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class BaseElement extends s$1 {
    click() {
        if (this.mdcRoot) {
            this.mdcRoot.focus();
            this.mdcRoot.click();
            return;
        }
        super.click();
    }
    /**
     * Create and attach the MDC Foundation to the instance
     */
    createFoundation() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        if (this.mdcFoundationClass) {
            this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
            this.mdcFoundation.init();
        }
    }
    firstUpdated() {
        this.createFoundation();
    }
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$6 = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings$4 = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers$4 = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = '0';
        _this.frame = { width: 0, height: 0 };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = { left: 0, top: 0 };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function () {
            _this.activationAnimationHasEnded = true;
            _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function (e) {
            _this.activateImpl(e);
        };
        _this.deactivateHandler = function () {
            _this.deactivateImpl();
        };
        _this.focusHandler = function () {
            _this.handleFocus();
        };
        _this.blurHandler = function () {
            _this.handleBlur();
        };
        _this.resizeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses$6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return numbers$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple()) {
            if (this.activationTimer) {
                clearTimeout(this.activationTimer);
                this.activationTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer) {
                clearTimeout(this.fgDeactivationRemovalTimer);
                this.fgDeactivationRemovalTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars();
            });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activateImpl(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivateImpl();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame) {
            cancelAnimationFrame(this.layoutFrame);
        }
        this.layoutFrame = requestAnimationFrame(function () {
            _this.layoutInternal();
            _this.layoutFrame = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter.addClass(UNBOUNDED);
        }
        else {
            this.adapter.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
        var e_1, _a;
        if (supportsPressRipple) {
            try {
                for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this.adapter.isUnbounded()) {
                this.adapter.registerResizeHandler(this.resizeHandler);
            }
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler);
        this.adapter.registerInteractionHandler('blur', this.blurHandler);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
        var e_2, _a;
        if (evt.type === 'keydown') {
            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
        }
        else {
            try {
                for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
        var e_3, _a;
        try {
            for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
        if (this.adapter.isUnbounded()) {
            this.adapter.deregisterResizeHandler(this.resizeHandler);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
        var e_4, _a;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
        try {
            for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MDCRippleFoundation.prototype.removeCssVars = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activateImpl = function (evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined &&
            activatedTargets.length > 0 &&
            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState = _this.defaultActivationState();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ?
            this.adapter.isSurfaceActive() :
            true;
    };
    MDCRippleFoundation.prototype.animateActivation = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function () {
            _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame.width / 2,
                y: this.frame.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize / 2),
            y: startPoint.y - (this.initialSize / 2),
        };
        var endPoint = {
            x: (this.frame.width / 2) - (this.initialSize / 2),
            y: (this.frame.height / 2) - (this.initialSize / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
            this.rmBoundedActivationClasses();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer = setTimeout(function () {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, numbers$4.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState = function () {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivateImpl = function () {
        var _this = this;
        var activationState = this.activationState;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __assign({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
                _this.animateDeactivation(state);
            });
            this.resetActivationState();
        }
        else {
            this.deregisterDeactivationHandlers();
            requestAnimationFrame(function () {
                _this.activationState.hasDeactivationUXRun = true;
                _this.animateDeactivation(state);
                _this.resetActivationState();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal = function () {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize = initialSize - 1;
        }
        else {
            this.initialSize = initialSize;
        }
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords = {
                left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
                top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
    };
    return MDCRippleFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCRippleFoundation$1 = MDCRippleFoundation;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$1="important",n$1=" !"+i$1,o=e$7(class extends i$4{constructor(t){var e;if(super(t),t.type!==t$2.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut){this.ut=new Set;for(const t in r)this.ut.add(t);return this.render(r)}this.ut.forEach((t=>{null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];if(null!=e){this.ut.add(t);const r="string"==typeof e&&e.endsWith(n$1);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?i$1:""):s[t]=e;}}return T}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class RippleBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.primary = false;
        this.accent = false;
        this.unbounded = false;
        this.disabled = false;
        this.activated = false;
        this.selected = false;
        this.internalUseStateLayerCustomProperties = false;
        this.hovering = false;
        this.bgFocused = false;
        this.fgActivation = false;
        this.fgDeactivation = false;
        this.fgScale = '';
        this.fgSize = '';
        this.translateStart = '';
        this.translateEnd = '';
        this.leftPos = '';
        this.topPos = '';
        this.mdcFoundationClass = MDCRippleFoundation$1;
    }
    get isActive() {
        return matches(this.parentElement || this, ':active');
    }
    createAdapter() {
        return {
            browserSupportsCssVars: () => true,
            isUnbounded: () => this.unbounded,
            isSurfaceActive: () => this.isActive,
            isSurfaceDisabled: () => this.disabled,
            addClass: (className) => {
                switch (className) {
                    case 'mdc-ripple-upgraded--background-focused':
                        this.bgFocused = true;
                        break;
                    case 'mdc-ripple-upgraded--foreground-activation':
                        this.fgActivation = true;
                        break;
                    case 'mdc-ripple-upgraded--foreground-deactivation':
                        this.fgDeactivation = true;
                        break;
                }
            },
            removeClass: (className) => {
                switch (className) {
                    case 'mdc-ripple-upgraded--background-focused':
                        this.bgFocused = false;
                        break;
                    case 'mdc-ripple-upgraded--foreground-activation':
                        this.fgActivation = false;
                        break;
                    case 'mdc-ripple-upgraded--foreground-deactivation':
                        this.fgDeactivation = false;
                        break;
                }
            },
            containsEventTarget: () => true,
            registerInteractionHandler: () => undefined,
            deregisterInteractionHandler: () => undefined,
            registerDocumentInteractionHandler: () => undefined,
            deregisterDocumentInteractionHandler: () => undefined,
            registerResizeHandler: () => undefined,
            deregisterResizeHandler: () => undefined,
            updateCssVariable: (varName, value) => {
                switch (varName) {
                    case '--mdc-ripple-fg-scale':
                        this.fgScale = value;
                        break;
                    case '--mdc-ripple-fg-size':
                        this.fgSize = value;
                        break;
                    case '--mdc-ripple-fg-translate-end':
                        this.translateEnd = value;
                        break;
                    case '--mdc-ripple-fg-translate-start':
                        this.translateStart = value;
                        break;
                    case '--mdc-ripple-left':
                        this.leftPos = value;
                        break;
                    case '--mdc-ripple-top':
                        this.topPos = value;
                        break;
                }
            },
            computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
            getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        };
    }
    startPress(ev) {
        this.waitForFoundation(() => {
            this.mdcFoundation.activate(ev);
        });
    }
    endPress() {
        this.waitForFoundation(() => {
            this.mdcFoundation.deactivate();
        });
    }
    startFocus() {
        this.waitForFoundation(() => {
            this.mdcFoundation.handleFocus();
        });
    }
    endFocus() {
        this.waitForFoundation(() => {
            this.mdcFoundation.handleBlur();
        });
    }
    startHover() {
        this.hovering = true;
    }
    endHover() {
        this.hovering = false;
    }
    /**
     * Wait for the MDCFoundation to be created by `firstUpdated`
     */
    waitForFoundation(fn) {
        if (this.mdcFoundation) {
            fn();
        }
        else {
            this.updateComplete.then(fn);
        }
    }
    update(changedProperties) {
        if (changedProperties.has('disabled')) {
            // stop hovering when ripple is disabled to prevent a stuck "hover" state
            // When re-enabled, the outer component will get a `mouseenter` event on
            // the first movement, which will call `startHover()`
            if (this.disabled) {
                this.endHover();
            }
        }
        super.update(changedProperties);
    }
    /** @soyTemplate */
    render() {
        const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
        const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
        /** @classMap */
        const classes = {
            'mdc-ripple-surface--accent': this.accent,
            'mdc-ripple-surface--primary--activated': shouldActivateInPrimary,
            'mdc-ripple-surface--accent--activated': this.accent && this.activated,
            'mdc-ripple-surface--primary--selected': shouldSelectInPrimary,
            'mdc-ripple-surface--accent--selected': this.accent && this.selected,
            'mdc-ripple-surface--disabled': this.disabled,
            'mdc-ripple-surface--hover': this.hovering,
            'mdc-ripple-surface--primary': this.primary,
            'mdc-ripple-surface--selected': this.selected,
            'mdc-ripple-upgraded--background-focused': this.bgFocused,
            'mdc-ripple-upgraded--foreground-activation': this.fgActivation,
            'mdc-ripple-upgraded--foreground-deactivation': this.fgDeactivation,
            'mdc-ripple-upgraded--unbounded': this.unbounded,
            'mdc-ripple-surface--internal-use-state-layer-custom-properties': this.internalUseStateLayerCustomProperties,
        };
        return x `
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o$3(classes)}"
          style="${o({
            '--mdc-ripple-fg-scale': this.fgScale,
            '--mdc-ripple-fg-size': this.fgSize,
            '--mdc-ripple-fg-translate-end': this.translateEnd,
            '--mdc-ripple-fg-translate-start': this.translateStart,
            '--mdc-ripple-left': this.leftPos,
            '--mdc-ripple-top': this.topPos,
        })}"></div>`;
    }
}
__decorate([
    i$2('.mdc-ripple-surface')
], RippleBase.prototype, "mdcRoot", void 0);
__decorate([
    e$5({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
__decorate([
    e$5({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
__decorate([
    e$5({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
__decorate([
    e$5({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
__decorate([
    e$5({ type: Boolean })
], RippleBase.prototype, "activated", void 0);
__decorate([
    e$5({ type: Boolean })
], RippleBase.prototype, "selected", void 0);
__decorate([
    e$5({ type: Boolean })
], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "hovering", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "bgFocused", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgActivation", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgScale", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgSize", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "translateStart", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "translateEnd", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "leftPos", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "topPos", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$d = i$6 `.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Ripple = class Ripple extends RippleBase {
};
Ripple.styles = [styles$d];
Ripple = __decorate([
    e$6('mwc-ripple')
], Ripple);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TypeScript version of the decorator
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
 */
function tsDecorator(prototype, name, descriptor) {
    const constructor = prototype.constructor;
    if (!descriptor) {
        /**
         * lit uses internal properties with two leading underscores to
         * provide storage for accessors
         */
        const litInternalPropertyKey = `__${name}`;
        descriptor =
            constructor.getPropertyDescriptor(name, litInternalPropertyKey);
        if (!descriptor) {
            throw new Error('@ariaProperty must be used after a @property decorator');
        }
    }
    // descriptor must exist at this point, reassign so typescript understands
    const propDescriptor = descriptor;
    let attribute = '';
    if (!propDescriptor.set) {
        throw new Error(`@ariaProperty requires a setter for ${name}`);
    }
    // TODO(b/202853219): Remove this check when internal tooling is
    // compatible
    // tslint:disable-next-line:no-any bail if applied to internal generated class
    if (prototype.dispatchWizEvent) {
        return descriptor;
    }
    const wrappedDescriptor = {
        configurable: true,
        enumerable: true,
        set(value) {
            if (attribute === '') {
                const options = constructor.getPropertyOptions(name);
                // if attribute is not a string, use `name` instead
                attribute =
                    typeof options.attribute === 'string' ? options.attribute : name;
            }
            if (this.hasAttribute(attribute)) {
                this.removeAttribute(attribute);
            }
            propDescriptor.set.call(this, value);
        }
    };
    if (propDescriptor.get) {
        wrappedDescriptor.get = function () {
            return propDescriptor.get.call(this);
        };
    }
    return wrappedDescriptor;
}
/**
 * A property decorator proxies an aria attribute to an internal node
 *
 * This decorator is only intended for use with ARIA attributes, such as `role`
 * and `aria-label` due to screenreader needs.
 *
 * Upon first render, `@ariaProperty` will remove the attribute from the host
 * element to prevent screenreaders from reading the host instead of the
 * internal node.
 *
 * This decorator should only be used for non-Symbol public fields decorated
 * with `@property`, or on a setter with an optional getter.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @ariaProperty
 *   @property({ type: String, attribute: 'aria-label' })
 *   ariaLabel!: string;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function ariaProperty(protoOrDescriptor, name, 
// tslint:disable-next-line:no-any any is required as a return type from decorators
descriptor) {
    if (name !== undefined) {
        return tsDecorator(protoOrDescriptor, name, descriptor);
    }
    else {
        throw new Error('@ariaProperty only supports TypeScript Decorators');
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Class that encapsulates the events handlers for `mwc-ripple`
 *
 *
 * Example:
 * ```
 * class XFoo extends LitElement {
 *   async getRipple() {
 *     this.renderRipple = true;
 *     await this.updateComplete;
 *     return this.renderRoot.querySelector('mwc-ripple');
 *   }
 *   rippleHandlers = new RippleHandlers(() => this.getRipple());
 *
 *   render() {
 *     return html`
 *       <div @mousedown=${this.rippleHandlers.startPress}></div>
 *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
 *     `;
 *   }
 * }
 * ```
 */
class RippleHandlers {
    constructor(
    /** Function that returns a `mwc-ripple` */
    rippleFn) {
        this.startPress = (ev) => {
            rippleFn().then((r) => {
                r && r.startPress(ev);
            });
        };
        this.endPress = () => {
            rippleFn().then((r) => {
                r && r.endPress();
            });
        };
        this.startFocus = () => {
            rippleFn().then((r) => {
                r && r.startFocus();
            });
        };
        this.endFocus = () => {
            rippleFn().then((r) => {
                r && r.endFocus();
            });
        };
        this.startHover = () => {
            rippleFn().then((r) => {
                r && r.startHover();
            });
        };
        this.endHover = () => {
            rippleFn().then((r) => {
                r && r.endHover();
            });
        };
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$1=l=>null!=l?l:A;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class IconButtonBase extends s$1 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.icon = '';
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
    }
    /** @soyTemplate */
    renderRipple() {
        return this.shouldRenderRipple ? x `
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` :
            '';
    }
    focus() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.startFocus();
            buttonElement.focus();
        }
    }
    blur() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.endFocus();
            buttonElement.blur();
        }
    }
    /** @soyTemplate */
    render() {
        return x `<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${l$1(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon ? x `<i class="material-icons">${this.icon}</i>` : ''}
    <span
      ><slot></slot
    ></span>
  </button>`;
    }
    handleRippleMouseDown(event) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
        this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
}
__decorate([
    e$5({ type: Boolean, reflect: true })
], IconButtonBase.prototype, "disabled", void 0);
__decorate([
    e$5({ type: String })
], IconButtonBase.prototype, "icon", void 0);
__decorate([
    ariaProperty,
    e$5({ type: String, attribute: 'aria-label' })
], IconButtonBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$5({ type: String, attribute: 'aria-haspopup' })
], IconButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
    i$2('button')
], IconButtonBase.prototype, "buttonElement", void 0);
__decorate([
    e$3('mwc-ripple')
], IconButtonBase.prototype, "ripple", void 0);
__decorate([
    t$1()
], IconButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$4({ passive: true })
], IconButtonBase.prototype, "handleRippleMouseDown", null);
__decorate([
    e$4({ passive: true })
], IconButtonBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$c = i$6 `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let IconButton = class IconButton extends IconButtonBase {
};
IconButton.styles = [styles$c];
IconButton = __decorate([
    e$6('mwc-icon-button')
], IconButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * A horizontal bar of tabs.
 *
 * Slots:
 * - default: The <playground-internal-tab> tabs.
 */
let PlaygroundInternalTabBar = class PlaygroundInternalTabBar extends s$1 {
    constructor() {
        super(...arguments);
        this._tabs = [];
        this._active = undefined;
    }
    /**
     * Get or set the active tab.
     */
    get active() {
        return this._active;
    }
    set active(tab) {
        /**
         * Note the active tab can be set either by setting the bar's `active`
         * property to the tab, or by setting the tab's `active` property to
         * true. The two become synchronized according to the following flow:
         *
         *   bar click/keydown
         *           |
         *           v
         *   bar.active = tab ---> changed? ---> tab.active = true
         *           ^                                 |
         *           |                                 v
         *   bar tabchange listener        changed from false to true?
         *           ^                                 |
         *           |                                 |
         *           +--- tab dispatches tabchange <---+
         */
        const oldActive = this._active;
        if (tab === oldActive) {
            return;
        }
        this._active = tab;
        if (oldActive !== undefined) {
            oldActive.active = false;
        }
        if (tab !== undefined) {
            tab.active = true;
        }
        else {
            // Usually the tab itself emits the tabchange event, but we need to handle
            // the "no active tab" case here.
            this.dispatchEvent(new CustomEvent('tabchange', {
                detail: { tab: undefined },
                bubbles: true,
            }));
        }
    }
    render() {
        return x `
      <div role="tablist" aria-label=${l$1(this.label)}>
        <slot
          @slotchange=${this._onSlotchange}
          @click=${this._activateTab}
          @keydown=${this._onKeydown}
          @tabchange=${this._activateTab}
        ></slot>
      </div>
    `;
    }
    _onSlotchange(event) {
        this._tabs = event.target.assignedElements();
        let newActive;
        // Manage the idx and active properties on all tabs. The first tab that
        // asserts it is active wins.
        for (let i = 0; i < this._tabs.length; i++) {
            const tab = this._tabs[i];
            tab.index = i;
            if (newActive !== undefined) {
                tab.active = false;
            }
            else if (tab.active || tab.hasAttribute('active')) {
                // Check both the active property and the active attribute, because the
                // user could have set the initial active state either way, and it might
                // not have reflected to the other yet.
                newActive = tab;
            }
        }
        this.active = newActive;
    }
    _activateTab(event) {
        const tab = this._findEventTab(event);
        if (tab === undefined) {
            return;
        }
        this.active = tab;
        this._scrollTabIntoViewIfNeeded(tab);
    }
    /**
     * If the given tab is not visible, or if not enough of its adjacent tabs are
     * visible, scroll so that the tab is centered.
     */
    _scrollTabIntoViewIfNeeded(tab) {
        // Note we don't want to use tab.scrollIntoView() because that would also
        // scroll the viewport to show the tab bar.
        const barRect = this.getBoundingClientRect();
        const tabRect = tab.getBoundingClientRect();
        // Add a margin so that we'll also scroll if not enough of an adjacent tab
        // is visible, so that it's clickable. 48px is the recommended minimum touch
        // target size from the Material Accessibility guidelines
        // (https://material.io/design/usability/accessibility.html#layout-and-typography)
        const margin = 48;
        if (tabRect.left - margin < barRect.left ||
            tabRect.right + margin > barRect.right) {
            const centered = tabRect.left -
                barRect.left +
                this.scrollLeft -
                barRect.width / 2 +
                tabRect.width / 2;
            this.scroll({ left: centered, behavior: 'smooth' });
        }
    }
    async _onKeydown(event) {
        var _a, _b;
        const oldIdx = (_b = (_a = this.active) === null || _a === void 0 ? void 0 : _a.index) !== null && _b !== void 0 ? _b : 0;
        const endIdx = this._tabs.length - 1;
        let newIdx = oldIdx;
        switch (event.key) {
            case 'ArrowLeft': {
                if (oldIdx === 0) {
                    newIdx = endIdx; // Wrap around.
                }
                else {
                    newIdx--;
                }
                break;
            }
            case 'ArrowRight': {
                if (oldIdx === endIdx) {
                    newIdx = 0; // Wrap around.
                }
                else {
                    newIdx++;
                }
                break;
            }
            case 'Home': {
                newIdx = 0;
                break;
            }
            case 'End': {
                newIdx = endIdx;
                break;
            }
        }
        if (newIdx !== oldIdx) {
            // Prevent default scrolling behavior.
            event.preventDefault();
            const tab = this._tabs[newIdx];
            this.active = tab;
            // Wait for tabindex to update so we can call focus.
            await tab.updateComplete;
            tab.focus();
        }
    }
    _findEventTab(event) {
        const target = event.target;
        if ((target === null || target === void 0 ? void 0 : target.localName) === 'playground-internal-tab') {
            return event.target;
        }
        for (const el of event.composedPath()) {
            if ((el === null || el === void 0 ? void 0 : el.localName) === 'playground-internal-tab') {
                return el;
            }
        }
        return undefined;
    }
};
PlaygroundInternalTabBar.styles = i$6 `
    :host {
      display: flex;
      overflow-x: auto;
    }

    :host::-webkit-scrollbar {
      display: none;
    }

    div {
      display: flex;
    }
  `;
__decorate([
    e$5()
], PlaygroundInternalTabBar.prototype, "label", void 0);
PlaygroundInternalTabBar = __decorate([
    e$6('playground-internal-tab-bar')
], PlaygroundInternalTabBar);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * A tab in a <playground-internal-tab-bar>.
 *
 * Slots:
 * - default: Label or other contents of the tab.
 *
 * Parts:
 * - button: Button with tab role.
 */
let PlaygroundInternalTab = class PlaygroundInternalTab extends s$1 {
    constructor() {
        super(...arguments);
        /**
         * Whether this tab is currently active.
         */
        this.active = false;
        /**
         * The 0-indexed position of this tab within its <playground-internal-tab-bar>.
         *
         * Note this property is managed by the containing <playground-internal-tab-bar> and
         * should not be set directly.
         */
        this.index = 0;
    }
    render() {
        return x `<button
      role="tab"
      part="button"
      aria-selected=${this.active ? 'true' : 'false'}
      tabindex=${this.active ? '0' : '-1'}
    >
      <slot></slot>
    </button>`;
    }
    updated(changes) {
        if (changes.has('active') && this.active) {
            this.dispatchEvent(new CustomEvent('tabchange', {
                detail: { tab: this },
                bubbles: true,
            }));
        }
    }
    focus() {
        this._button.focus();
    }
};
PlaygroundInternalTab.styles = i$6 `
    :host {
      display: flex;
    }

    button {
      flex: 1;
      border: none;
      font-size: inherit;
      font-family: inherit;
      color: inherit;
      background: transparent;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      outline: none;
    }

    button::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: currentcolor;
      opacity: 0;
      transition: opacity 150ms;
    }

    button:focus::before,
    button:hover::before {
      opacity: 10%;
    }

    button:active::before {
      opacity: 20%;
    }

    :host([active]) > button::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: var(
        --playground-tab-bar-indicator-color,
        var(--playground-highlight-color, #6200ee)
      );
    }
  `;
__decorate([
    e$5({ type: Boolean, reflect: true })
], PlaygroundInternalTab.prototype, "active", void 0);
__decorate([
    i$2('button')
], PlaygroundInternalTab.prototype, "_button", void 0);
PlaygroundInternalTab = __decorate([
    e$6('playground-internal-tab')
], PlaygroundInternalTab);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Specifies an observer callback that is run when the decorated property
 * changes. The observer receives the current and old value as arguments.
 */
const observer = (observer) => 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto, propName) => {
    // if we haven't wrapped `updated` in this class, do so
    if (!proto.constructor
        ._observers) {
        proto.constructor._observers = new Map();
        const userUpdated = proto.updated;
        proto.updated = function (changedProperties) {
            userUpdated.call(this, changedProperties);
            changedProperties.forEach((v, k) => {
                const observers = this.constructor
                    ._observers;
                const observer = observers.get(k);
                if (observer !== undefined) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    observer.call(this, this[k], v);
                }
            });
        };
        // clone any existing observers (superclasses)
        // eslint-disable-next-line no-prototype-builtins
    }
    else if (!proto.constructor.hasOwnProperty('_observers')) {
        const observers = proto.constructor._observers;
        proto.constructor._observers = new Map();
        observers.forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (v, k) => proto.constructor._observers.set(k, v));
    }
    // set this method
    proto.constructor._observers.set(propName, observer);
};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires request-selected {RequestSelectedDetail}
 * @fires list-item-rendered
 */
class ListItemBase extends s$1 {
    constructor() {
        super(...arguments);
        this.value = '';
        this.group = null;
        this.tabindex = -1;
        this.disabled = false;
        this.twoline = false;
        this.activated = false;
        this.graphic = null;
        this.multipleGraphics = false;
        this.hasMeta = false;
        this.noninteractive = false;
        this.selected = false;
        this.shouldRenderRipple = false;
        this._managingList = null;
        this.boundOnClick = this.onClick.bind(this);
        this._firstChanged = true;
        this._skipPropRequest = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
        this.listeners = [
            {
                target: this,
                eventNames: ['click'],
                cb: () => {
                    this.onClick();
                },
            },
            {
                target: this,
                eventNames: ['mouseenter'],
                cb: this.rippleHandlers.startHover,
            },
            {
                target: this,
                eventNames: ['mouseleave'],
                cb: this.rippleHandlers.endHover,
            },
            {
                target: this,
                eventNames: ['focus'],
                cb: this.rippleHandlers.startFocus,
            },
            {
                target: this,
                eventNames: ['blur'],
                cb: this.rippleHandlers.endFocus,
            },
            {
                target: this,
                eventNames: ['mousedown', 'touchstart'],
                cb: (e) => {
                    const name = e.type;
                    this.onDown(name === 'mousedown' ? 'mouseup' : 'touchend', e);
                },
            },
        ];
    }
    get text() {
        const textContent = this.textContent;
        return textContent ? textContent.trim() : '';
    }
    render() {
        const text = this.renderText();
        const graphic = this.graphic ? this.renderGraphic() : x ``;
        const meta = this.hasMeta ? this.renderMeta() : x ``;
        return x `
      ${this.renderRipple()}
      ${graphic}
      ${text}
      ${meta}`;
    }
    renderRipple() {
        if (this.shouldRenderRipple) {
            return x `
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`;
        }
        else if (this.activated) {
            return x `<div class="fake-activated-ripple"></div>`;
        }
        else {
            return '';
        }
    }
    renderGraphic() {
        const graphicClasses = {
            multi: this.multipleGraphics,
        };
        return x `
      <span class="mdc-deprecated-list-item__graphic material-icons ${o$3(graphicClasses)}">
        <slot name="graphic"></slot>
      </span>`;
    }
    renderMeta() {
        return x `
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
    }
    renderText() {
        const inner = this.twoline ? this.renderTwoline() : this.renderSingleLine();
        return x `
      <span class="mdc-deprecated-list-item__text">
        ${inner}
      </span>`;
    }
    renderSingleLine() {
        return x `<slot></slot>`;
    }
    renderTwoline() {
        return x `
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
    }
    onClick() {
        this.fireRequestSelected(!this.selected, 'interaction');
    }
    onDown(upName, evt) {
        const onUp = () => {
            window.removeEventListener(upName, onUp);
            this.rippleHandlers.endPress();
        };
        window.addEventListener(upName, onUp);
        this.rippleHandlers.startPress(evt);
    }
    fireRequestSelected(selected, source) {
        if (this.noninteractive) {
            return;
        }
        const customEv = new CustomEvent('request-selected', { bubbles: true, composed: true, detail: { source, selected } });
        this.dispatchEvent(customEv);
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.noninteractive) {
            this.setAttribute('mwc-list-item', '');
        }
        for (const listener of this.listeners) {
            for (const eventName of listener.eventNames) {
                listener.target.addEventListener(eventName, listener.cb, { passive: true });
            }
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listener of this.listeners) {
            for (const eventName of listener.eventNames) {
                listener.target.removeEventListener(eventName, listener.cb);
            }
        }
        if (this._managingList) {
            this._managingList.debouncedLayout ?
                this._managingList.debouncedLayout(true) :
                this._managingList.layout(true);
        }
    }
    // composed flag, event fire through shadow root and up through composed tree
    firstUpdated() {
        const ev = new Event('list-item-rendered', { bubbles: true, composed: true });
        this.dispatchEvent(ev);
    }
}
__decorate([
    i$2('slot')
], ListItemBase.prototype, "slotElement", void 0);
__decorate([
    e$3('mwc-ripple')
], ListItemBase.prototype, "ripple", void 0);
__decorate([
    e$5({ type: String })
], ListItemBase.prototype, "value", void 0);
__decorate([
    e$5({ type: String, reflect: true })
], ListItemBase.prototype, "group", void 0);
__decorate([
    e$5({ type: Number, reflect: true })
], ListItemBase.prototype, "tabindex", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true }),
    observer(function (value) {
        if (value) {
            this.setAttribute('aria-disabled', 'true');
        }
        else {
            this.setAttribute('aria-disabled', 'false');
        }
    })
], ListItemBase.prototype, "disabled", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], ListItemBase.prototype, "twoline", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], ListItemBase.prototype, "activated", void 0);
__decorate([
    e$5({ type: String, reflect: true })
], ListItemBase.prototype, "graphic", void 0);
__decorate([
    e$5({ type: Boolean })
], ListItemBase.prototype, "multipleGraphics", void 0);
__decorate([
    e$5({ type: Boolean })
], ListItemBase.prototype, "hasMeta", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true }),
    observer(function (value) {
        if (value) {
            this.removeAttribute('aria-checked');
            this.removeAttribute('mwc-list-item');
            this.selected = false;
            this.activated = false;
            this.tabIndex = -1;
        }
        else {
            this.setAttribute('mwc-list-item', '');
        }
    })
], ListItemBase.prototype, "noninteractive", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true }),
    observer(function (value) {
        const role = this.getAttribute('role');
        const isAriaSelectable = role === 'gridcell' || role === 'option' ||
            role === 'row' || role === 'tab';
        if (isAriaSelectable && value) {
            this.setAttribute('aria-selected', 'true');
        }
        else if (isAriaSelectable) {
            this.setAttribute('aria-selected', 'false');
        }
        if (this._firstChanged) {
            this._firstChanged = false;
            return;
        }
        if (this._skipPropRequest) {
            return;
        }
        this.fireRequestSelected(value, 'property');
    })
], ListItemBase.prototype, "selected", void 0);
__decorate([
    t$1()
], ListItemBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    t$1()
], ListItemBase.prototype, "_managingList", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$b = i$6 `:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ListItem = class ListItem extends ListItemBase {
};
ListItem.styles = [styles$b];
ListItem = __decorate([
    e$6('mwc-list-item')
], ListItem);

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * KEY provides normalized string values for keys.
 */
var KEY = {
    UNKNOWN: 'Unknown',
    BACKSPACE: 'Backspace',
    ENTER: 'Enter',
    SPACEBAR: 'Spacebar',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    END: 'End',
    HOME: 'Home',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_UP: 'ArrowUp',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_DOWN: 'ArrowDown',
    DELETE: 'Delete',
    ESCAPE: 'Escape',
    TAB: 'Tab',
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9,
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
function normalizeKey(evt) {
    var key = evt.key;
    // If the event already has a normalized key, return it
    if (normalizedKeys.has(key)) {
        return key;
    }
    // tslint:disable-next-line:deprecation
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
        return mappedKey;
    }
    return KEY.UNKNOWN;
}

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _a$1, _b$1;
var cssClasses$5 = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
    LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
    ROOT: 'mdc-list',
};
(_a$1 = {},
    _a$1["" + cssClasses$5.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated',
    _a$1["" + cssClasses$5.LIST_ITEM_CLASS] = 'mdc-list-item',
    _a$1["" + cssClasses$5.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled',
    _a$1["" + cssClasses$5.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected',
    _a$1["" + cssClasses$5.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text',
    _a$1["" + cssClasses$5.ROOT] = 'mdc-list',
    _a$1);
var deprecatedClassNameMap = (_b$1 = {},
    _b$1["" + cssClasses$5.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated',
    _b$1["" + cssClasses$5.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item',
    _b$1["" + cssClasses$5.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled',
    _b$1["" + cssClasses$5.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected',
    _b$1["" + cssClasses$5.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text',
    _b$1["" + cssClasses$5.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text',
    _b$1["" + cssClasses$5.ROOT] = 'mdc-deprecated-list',
    _b$1);
var strings$3 = {
    ACTION_EVENT: 'MDCList:action',
    SELECTION_CHANGE_EVENT: 'MDCList:selectionChange',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$5.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$5.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: '.mdc-deprecated-list',
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$5.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$5.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$5.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$5.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
};
var numbers$3 = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const integerSort = (a, b) => {
    return a - b;
};
const findIndexDiff = (oldSet, newSet) => {
    const oldArr = Array.from(oldSet);
    const newArr = Array.from(newSet);
    const diff = { added: [], removed: [] };
    const oldSorted = oldArr.sort(integerSort);
    const newSorted = newArr.sort(integerSort);
    let i = 0;
    let j = 0;
    while (i < oldSorted.length || j < newSorted.length) {
        const oldVal = oldSorted[i];
        const newVal = newSorted[j];
        if (oldVal === newVal) {
            i++;
            j++;
            continue;
        }
        if (oldVal !== undefined && (newVal === undefined || oldVal < newVal)) {
            diff.removed.push(oldVal);
            i++;
            continue;
        }
        if (newVal !== undefined && (oldVal === undefined || newVal < oldVal)) {
            diff.added.push(newVal);
            j++;
            continue;
        }
    }
    return diff;
};
const ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
function isIndexSet(selectedIndex) {
    return selectedIndex instanceof Set;
}
const createSetFromIndex = (index) => {
    const entry = index === numbers$3.UNSET_INDEX ? new Set() : index;
    return isIndexSet(entry) ? new Set(entry) : new Set([entry]);
};
class MDCListFoundation extends MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, MDCListFoundation.defaultAdapter), adapter));
        this.isMulti_ = false;
        this.wrapFocus_ = false;
        this.isVertical_ = true;
        this.selectedIndex_ = numbers$3.UNSET_INDEX;
        this.focusedItemIndex_ = numbers$3.UNSET_INDEX;
        this.useActivatedClass_ = false;
        this.ariaCurrentAttrValue_ = null;
    }
    static get strings() {
        return strings$3;
    }
    static get numbers() {
        return numbers$3;
    }
    static get defaultAdapter() {
        return {
            focusItemAtIndex: () => undefined,
            getFocusedElementIndex: () => 0,
            getListItemCount: () => 0,
            isFocusInsideList: () => false,
            isRootFocused: () => false,
            notifyAction: () => undefined,
            notifySelected: () => undefined,
            getSelectedStateForElementIndex: () => false,
            setDisabledStateForElementIndex: () => undefined,
            getDisabledStateForElementIndex: () => false,
            setSelectedStateForElementIndex: () => undefined,
            setActivatedStateForElementIndex: () => undefined,
            setTabIndexForElementIndex: () => undefined,
            setAttributeForElementIndex: () => undefined,
            getAttributeForElementIndex: () => null,
        };
    }
    /**
     * Sets the private wrapFocus_ variable.
     */
    setWrapFocus(value) {
        this.wrapFocus_ = value;
    }
    /**
     * Sets the private wrapFocus_ variable.
     */
    setMulti(value) {
        this.isMulti_ = value;
        const currentIndex = this.selectedIndex_;
        if (value) {
            // number to set
            if (!isIndexSet(currentIndex)) {
                const isUnset = currentIndex === numbers$3.UNSET_INDEX;
                this.selectedIndex_ = isUnset ? new Set() : new Set([currentIndex]);
            }
        }
        else {
            // set to first sorted number in set
            if (isIndexSet(currentIndex)) {
                if (currentIndex.size) {
                    const vals = Array.from(currentIndex).sort(integerSort);
                    this.selectedIndex_ = vals[0];
                }
                else {
                    this.selectedIndex_ = numbers$3.UNSET_INDEX;
                }
            }
        }
    }
    /**
     * Sets the isVertical_ private variable.
     */
    setVerticalOrientation(value) {
        this.isVertical_ = value;
    }
    /**
     * Sets the useActivatedClass_ private variable.
     */
    setUseActivatedClass(useActivated) {
        this.useActivatedClass_ = useActivated;
    }
    getSelectedIndex() {
        return this.selectedIndex_;
    }
    setSelectedIndex(index) {
        if (!this.isIndexValid_(index)) {
            return;
        }
        if (this.isMulti_) {
            this.setMultiSelectionAtIndex_(createSetFromIndex(index));
        }
        else {
            this.setSingleSelectionAtIndex_(index);
        }
    }
    /**
     * Focus in handler for the list items.
     */
    handleFocusIn(_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter.setTabIndexForElementIndex(listItemIndex, 0);
        }
    }
    /**
     * Focus out handler for the list items.
     */
    handleFocusOut(_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter.setTabIndexForElementIndex(listItemIndex, -1);
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any
         * element. Setting a delay to wait till the focus is moved to next element.
         */
        setTimeout(() => {
            if (!this.adapter.isFocusInsideList()) {
                this.setTabindexToFirstSelectedItem_();
            }
        }, 0);
    }
    /**
     * Key handler for the list.
     */
    handleKeydown(event, isRootListItem, listItemIndex) {
        const isArrowLeft = normalizeKey(event) === 'ArrowLeft';
        const isArrowUp = normalizeKey(event) === 'ArrowUp';
        const isArrowRight = normalizeKey(event) === 'ArrowRight';
        const isArrowDown = normalizeKey(event) === 'ArrowDown';
        const isHome = normalizeKey(event) === 'Home';
        const isEnd = normalizeKey(event) === 'End';
        const isEnter = normalizeKey(event) === 'Enter';
        const isSpace = normalizeKey(event) === 'Spacebar';
        if (this.adapter.isRootFocused()) {
            if (isArrowUp || isEnd) {
                event.preventDefault();
                this.focusLastElement();
            }
            else if (isArrowDown || isHome) {
                event.preventDefault();
                this.focusFirstElement();
            }
            return;
        }
        let currentIndex = this.adapter.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-deprecated-list-item ancestor from
                // the current list (not from a sublist), return early.
                return;
            }
        }
        let nextIndex;
        if ((this.isVertical_ && isArrowDown) ||
            (!this.isVertical_ && isArrowRight)) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusNextElement(currentIndex);
        }
        else if ((this.isVertical_ && isArrowUp) || (!this.isVertical_ && isArrowLeft)) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusPrevElement(currentIndex);
        }
        else if (isHome) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusFirstElement();
        }
        else if (isEnd) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusLastElement();
        }
        else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers
                // synthetic MouseEvent event.
                const target = event.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                this.preventDefaultEvent(event);
                this.setSelectedIndexOnAction_(currentIndex, true);
            }
        }
        this.focusedItemIndex_ = currentIndex;
        if (nextIndex !== undefined) {
            this.setTabindexAtIndex_(nextIndex);
            this.focusedItemIndex_ = nextIndex;
        }
    }
    /**
     * Click handler for the list.
     */
    handleSingleSelection(index, isInteraction, force) {
        if (index === numbers$3.UNSET_INDEX) {
            return;
        }
        this.setSelectedIndexOnAction_(index, isInteraction, force);
        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
    }
    /**
     * Focuses the next element on the list.
     */
    focusNextElement(index) {
        const count = this.adapter.getListItemCount();
        let nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus_) {
                nextIndex = 0;
            }
            else {
                // Return early because last item is already focused.
                return index;
            }
        }
        this.adapter.focusItemAtIndex(nextIndex);
        return nextIndex;
    }
    /**
     * Focuses the previous element on the list.
     */
    focusPrevElement(index) {
        let prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus_) {
                prevIndex = this.adapter.getListItemCount() - 1;
            }
            else {
                // Return early because first item is already focused.
                return index;
            }
        }
        this.adapter.focusItemAtIndex(prevIndex);
        return prevIndex;
    }
    focusFirstElement() {
        this.adapter.focusItemAtIndex(0);
        return 0;
    }
    focusLastElement() {
        const lastIndex = this.adapter.getListItemCount() - 1;
        this.adapter.focusItemAtIndex(lastIndex);
        return lastIndex;
    }
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    setEnabled(itemIndex, isEnabled) {
        if (!this.isIndexValid_(itemIndex)) {
            return;
        }
        this.adapter.setDisabledStateForElementIndex(itemIndex, !isEnabled);
    }
    /**
     * Ensures that preventDefault is only called if the containing element
     * doesn't consume the event, and it will cause an unintended scroll.
     */
    preventDefaultEvent(evt) {
        const target = evt.target;
        const tagName = `${target.tagName}`.toLowerCase();
        if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
            evt.preventDefault();
        }
    }
    setSingleSelectionAtIndex_(index, isInteraction = true) {
        if (this.selectedIndex_ === index) {
            return;
        }
        // unset previous
        if (this.selectedIndex_ !== numbers$3.UNSET_INDEX) {
            this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, false);
            if (this.useActivatedClass_) {
                this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, false);
            }
        }
        // set new
        if (isInteraction) {
            this.adapter.setSelectedStateForElementIndex(index, true);
        }
        if (this.useActivatedClass_) {
            this.adapter.setActivatedStateForElementIndex(index, true);
        }
        this.setAriaForSingleSelectionAtIndex_(index);
        this.selectedIndex_ = index;
        this.adapter.notifySelected(index);
    }
    setMultiSelectionAtIndex_(newIndex, isInteraction = true) {
        const oldIndex = createSetFromIndex(this.selectedIndex_);
        const diff = findIndexDiff(oldIndex, newIndex);
        if (!diff.removed.length && !diff.added.length) {
            return;
        }
        for (const removed of diff.removed) {
            if (isInteraction) {
                this.adapter.setSelectedStateForElementIndex(removed, false);
            }
            if (this.useActivatedClass_) {
                this.adapter.setActivatedStateForElementIndex(removed, false);
            }
        }
        for (const added of diff.added) {
            if (isInteraction) {
                this.adapter.setSelectedStateForElementIndex(added, true);
            }
            if (this.useActivatedClass_) {
                this.adapter.setActivatedStateForElementIndex(added, true);
            }
        }
        this.selectedIndex_ = newIndex;
        this.adapter.notifySelected(newIndex, diff);
    }
    /**
     * Sets aria attribute for single selection at given index.
     */
    setAriaForSingleSelectionAtIndex_(index) {
        // Detect the presence of aria-current and get the value only during list
        // initialization when it is in unset state.
        if (this.selectedIndex_ === numbers$3.UNSET_INDEX) {
            this.ariaCurrentAttrValue_ =
                this.adapter.getAttributeForElementIndex(index, strings$3.ARIA_CURRENT);
        }
        const isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        const ariaAttribute = isAriaCurrent ? strings$3.ARIA_CURRENT : strings$3.ARIA_SELECTED;
        if (this.selectedIndex_ !== numbers$3.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
        }
        const ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
        this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    }
    setTabindexAtIndex_(index) {
        if (this.focusedItemIndex_ === numbers$3.UNSET_INDEX && index !== 0) {
            // If no list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no
            // preselected items.
            this.adapter.setTabIndexForElementIndex(0, -1);
        }
        else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
            this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1);
        }
        this.adapter.setTabIndexForElementIndex(index, 0);
    }
    setTabindexToFirstSelectedItem_() {
        let targetIndex = 0;
        if (typeof this.selectedIndex_ === 'number' &&
            this.selectedIndex_ !== numbers$3.UNSET_INDEX) {
            targetIndex = this.selectedIndex_;
        }
        else if (isIndexSet(this.selectedIndex_) && this.selectedIndex_.size > 0) {
            targetIndex = Math.min(...this.selectedIndex_);
        }
        this.setTabindexAtIndex_(targetIndex);
    }
    isIndexValid_(index) {
        if (index instanceof Set) {
            if (!this.isMulti_) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.size === 0) {
                return true;
            }
            else {
                let isOneInRange = false;
                for (const entry of index) {
                    isOneInRange = this.isIndexInRange_(entry);
                    if (isOneInRange) {
                        break;
                    }
                }
                return isOneInRange;
            }
        }
        else if (typeof index === 'number') {
            if (this.isMulti_) {
                throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' +
                    index);
            }
            return index === numbers$3.UNSET_INDEX || this.isIndexInRange_(index);
        }
        else {
            return false;
        }
    }
    isIndexInRange_(index) {
        const listSize = this.adapter.getListItemCount();
        return index >= 0 && index < listSize;
    }
    /**
     * Sets selected index on user action, toggles checkbox / radio based on
     * toggleCheckbox value. User interaction should not toggle list item(s) when
     * disabled.
     */
    setSelectedIndexOnAction_(index, isInteraction, force) {
        if (this.adapter.getDisabledStateForElementIndex(index)) {
            return;
        }
        let checkedIndex = index;
        if (this.isMulti_) {
            checkedIndex = new Set([index]);
        }
        if (!this.isIndexValid_(checkedIndex)) {
            return;
        }
        if (this.isMulti_) {
            this.toggleMultiAtIndex(index, force, isInteraction);
        }
        else {
            if (isInteraction || force) {
                this.setSingleSelectionAtIndex_(index, isInteraction);
            }
            else {
                const isDeselection = this.selectedIndex_ === index;
                if (isDeselection) {
                    this.setSingleSelectionAtIndex_(numbers$3.UNSET_INDEX);
                }
            }
        }
        if (isInteraction) {
            this.adapter.notifyAction(index);
        }
    }
    toggleMultiAtIndex(index, force, isInteraction = true) {
        let newSelectionValue = false;
        if (force === undefined) {
            newSelectionValue = !this.adapter.getSelectedStateForElementIndex(index);
        }
        else {
            newSelectionValue = force;
        }
        const newSet = createSetFromIndex(this.selectedIndex_);
        if (newSelectionValue) {
            newSet.add(index);
        }
        else {
            newSet.delete(index);
        }
        this.setMultiSelectionAtIndex_(newSet, isInteraction);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function debounceLayout(callback, waitInMS = 50) {
    let timeoutId;
    // tslint:disable-next-line
    return function (updateItems = true) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(updateItems);
        }, waitInMS);
    };
}
const isListItem = (element) => {
    return element.hasAttribute('mwc-list-item');
};
function clearAndCreateItemsReadyPromise() {
    const oldResolver = this.itemsReadyResolver;
    this.itemsReady = new Promise((res) => {
        // TODO(b/175626389): Type '(value: never[] | PromiseLike<never[]>) => void'
        // is not assignable to type '(value?: never[] | PromiseLike<never[]> |
        // undefined) => void'.
        return this.itemsReadyResolver = res;
    });
    oldResolver();
}
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 */
class ListBase extends BaseElement {
    constructor() {
        super();
        this.mdcAdapter = null;
        this.mdcFoundationClass = MDCListFoundation;
        this.activatable = false;
        this.multi = false;
        this.wrapFocus = false;
        this.itemRoles = null;
        this.innerRole = null;
        this.innerAriaLabel = null;
        this.rootTabbable = false;
        this.previousTabindex = null;
        this.noninteractive = false;
        this.itemsReadyResolver = (() => {
            //
        });
        this.itemsReady = Promise.resolve([]);
        // tslint:enable:ban-ts-ignore
        this.items_ = [];
        const debouncedFunction = debounceLayout(this.layout.bind(this));
        this.debouncedLayout = (updateItems = true) => {
            clearAndCreateItemsReadyPromise.call(this);
            debouncedFunction(updateItems);
        };
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
        // @ts-ignore
        const result = await super.getUpdateComplete();
        await this.itemsReady;
        return result;
    }
    get items() {
        return this.items_;
    }
    updateItems() {
        var _a;
        const nodes = (_a = this.assignedElements) !== null && _a !== void 0 ? _a : [];
        const listItems = [];
        for (const node of nodes) {
            if (isListItem(node)) {
                listItems.push(node);
                node._managingList = this;
            }
            if (node.hasAttribute('divider') && !node.hasAttribute('role')) {
                node.setAttribute('role', 'separator');
            }
        }
        this.items_ = listItems;
        const selectedIndices = new Set();
        this.items_.forEach((item, index) => {
            if (this.itemRoles) {
                item.setAttribute('role', this.itemRoles);
            }
            else {
                item.removeAttribute('role');
            }
            if (item.selected) {
                selectedIndices.add(index);
            }
        });
        if (this.multi) {
            this.select(selectedIndices);
        }
        else {
            const index = selectedIndices.size ? selectedIndices.entries().next().value[1] : -1;
            this.select(index);
        }
        const itemsUpdatedEv = new Event('items-updated', { bubbles: true, composed: true });
        this.dispatchEvent(itemsUpdatedEv);
    }
    get selected() {
        const index = this.index;
        if (!isIndexSet(index)) {
            if (index === -1) {
                return null;
            }
            return this.items[index];
        }
        const selected = [];
        for (const entry of index) {
            selected.push(this.items[entry]);
        }
        return selected;
    }
    get index() {
        if (this.mdcFoundation) {
            return this.mdcFoundation.getSelectedIndex();
        }
        return -1;
    }
    render() {
        const role = this.innerRole === null ? undefined : this.innerRole;
        const ariaLabel = this.innerAriaLabel === null ? undefined : this.innerAriaLabel;
        const tabindex = this.rootTabbable ? '0' : '-1';
        return x `
      <!-- @ts-ignore -->
      <ul
          tabindex=${tabindex}
          role="${l$1(role)}"
          aria-label="${l$1(ariaLabel)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
    }
    renderPlaceholder() {
        var _a;
        const nodes = (_a = this.assignedElements) !== null && _a !== void 0 ? _a : [];
        if (this.emptyMessage !== undefined && nodes.length === 0) {
            return x `
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `;
        }
        return null;
    }
    firstUpdated() {
        super.firstUpdated();
        if (!this.items.length) {
            // required because this is called before observers
            this.mdcFoundation.setMulti(this.multi);
            // for when children upgrade before list
            this.layout();
        }
    }
    onFocusIn(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            this.mdcFoundation.handleFocusIn(evt, index);
        }
    }
    onFocusOut(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            this.mdcFoundation.handleFocusOut(evt, index);
        }
    }
    onKeydown(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            const target = evt.target;
            const isRootListItem = isListItem(target);
            this.mdcFoundation.handleKeydown(evt, isRootListItem, index);
        }
    }
    onRequestSelected(evt) {
        if (this.mdcFoundation) {
            let index = this.getIndexOfTarget(evt);
            // might happen in shady dom slowness. Recalc children
            if (index === -1) {
                this.layout();
                index = this.getIndexOfTarget(evt);
                // still not found; may not be mwc-list-item. Unsupported case.
                if (index === -1) {
                    return;
                }
            }
            const element = this.items[index];
            if (element.disabled) {
                return;
            }
            const selected = evt.detail.selected;
            const source = evt.detail.source;
            this.mdcFoundation.handleSingleSelection(index, source === 'interaction', selected);
            evt.stopPropagation();
        }
    }
    getIndexOfTarget(evt) {
        const elements = this.items;
        const path = evt.composedPath();
        for (const pathItem of path) {
            let index = -1;
            if (isNodeElement(pathItem) && isListItem(pathItem)) {
                index = elements.indexOf(pathItem);
            }
            if (index !== -1) {
                return index;
            }
        }
        return -1;
    }
    createAdapter() {
        this.mdcAdapter = {
            getListItemCount: () => {
                if (this.mdcRoot) {
                    return this.items.length;
                }
                return 0;
            },
            getFocusedElementIndex: this.getFocusedItemIndex,
            getAttributeForElementIndex: (index, attr) => {
                const listElement = this.mdcRoot;
                if (!listElement) {
                    return '';
                }
                const element = this.items[index];
                return element ? element.getAttribute(attr) : '';
            },
            setAttributeForElementIndex: (index, attr, val) => {
                if (!this.mdcRoot) {
                    return;
                }
                const element = this.items[index];
                if (element) {
                    element.setAttribute(attr, val);
                }
            },
            focusItemAtIndex: (index) => {
                const element = this.items[index];
                if (element) {
                    element.focus();
                }
            },
            setTabIndexForElementIndex: (index, value) => {
                const item = this.items[index];
                if (item) {
                    item.tabindex = value;
                }
            },
            notifyAction: (index) => {
                const init = { bubbles: true, composed: true };
                init.detail = { index };
                const ev = new CustomEvent('action', init);
                this.dispatchEvent(ev);
            },
            notifySelected: (index, diff) => {
                const init = { bubbles: true, composed: true };
                init.detail = { index, diff };
                const ev = new CustomEvent('selected', init);
                this.dispatchEvent(ev);
            },
            isFocusInsideList: () => {
                return doesElementContainFocus(this);
            },
            isRootFocused: () => {
                const mdcRoot = this.mdcRoot;
                const root = mdcRoot.getRootNode();
                return root.activeElement === mdcRoot;
            },
            setDisabledStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.disabled = value;
            },
            getDisabledStateForElementIndex: (index) => {
                const item = this.items[index];
                if (!item) {
                    return false;
                }
                return item.disabled;
            },
            setSelectedStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.selected = value;
            },
            getSelectedStateForElementIndex: (index) => {
                const item = this.items[index];
                if (!item) {
                    return false;
                }
                return item.selected;
            },
            setActivatedStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.activated = value;
            },
        };
        return this.mdcAdapter;
    }
    selectUi(index, activate = false) {
        const item = this.items[index];
        if (item) {
            item.selected = true;
            item.activated = activate;
        }
    }
    deselectUi(index) {
        const item = this.items[index];
        if (item) {
            item.selected = false;
            item.activated = false;
        }
    }
    select(index) {
        if (!this.mdcFoundation) {
            return;
        }
        this.mdcFoundation.setSelectedIndex(index);
    }
    toggle(index, force) {
        if (this.multi) {
            this.mdcFoundation.toggleMultiAtIndex(index, force);
        }
    }
    onListItemConnected(e) {
        const target = e.target;
        this.layout(this.items.indexOf(target) === -1);
    }
    layout(updateItems = true) {
        if (updateItems) {
            this.updateItems();
        }
        const first = this.items[0];
        for (const item of this.items) {
            item.tabindex = -1;
        }
        if (first) {
            if (this.noninteractive) {
                if (!this.previousTabindex) {
                    this.previousTabindex = first;
                }
            }
            else {
                first.tabindex = 0;
            }
        }
        this.itemsReadyResolver();
    }
    getFocusedItemIndex() {
        if (!this.mdcRoot) {
            return -1;
        }
        if (!this.items.length) {
            return -1;
        }
        const activeElementPath = deepActiveElementPath();
        if (!activeElementPath.length) {
            return -1;
        }
        for (let i = activeElementPath.length - 1; i >= 0; i--) {
            const activeItem = activeElementPath[i];
            if (isListItem(activeItem)) {
                return this.items.indexOf(activeItem);
            }
        }
        return -1;
    }
    focusItemAtIndex(index) {
        for (const item of this.items) {
            if (item.tabindex === 0) {
                item.tabindex = -1;
                break;
            }
        }
        this.items[index].tabindex = 0;
        this.items[index].focus();
    }
    focus() {
        const root = this.mdcRoot;
        if (root) {
            root.focus();
        }
    }
    blur() {
        const root = this.mdcRoot;
        if (root) {
            root.blur();
        }
    }
}
__decorate([
    e$5({ type: String })
], ListBase.prototype, "emptyMessage", void 0);
__decorate([
    i$2('.mdc-deprecated-list')
], ListBase.prototype, "mdcRoot", void 0);
__decorate([
    o$1('', true, '*')
], ListBase.prototype, "assignedElements", void 0);
__decorate([
    o$1('', true, '[tabindex="0"]')
], ListBase.prototype, "tabbableElements", void 0);
__decorate([
    e$5({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setUseActivatedClass(value);
        }
    })
], ListBase.prototype, "activatable", void 0);
__decorate([
    e$5({ type: Boolean }),
    observer(function (newValue, oldValue) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setMulti(newValue);
        }
        if (oldValue !== undefined) {
            this.layout();
        }
    })
], ListBase.prototype, "multi", void 0);
__decorate([
    e$5({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setWrapFocus(value);
        }
    })
], ListBase.prototype, "wrapFocus", void 0);
__decorate([
    e$5({ type: String }),
    observer(function (_newValue, oldValue) {
        if (oldValue !== undefined) {
            this.updateItems();
        }
    })
], ListBase.prototype, "itemRoles", void 0);
__decorate([
    e$5({ type: String })
], ListBase.prototype, "innerRole", void 0);
__decorate([
    e$5({ type: String })
], ListBase.prototype, "innerAriaLabel", void 0);
__decorate([
    e$5({ type: Boolean })
], ListBase.prototype, "rootTabbable", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true }),
    observer(function (value) {
        var _a, _b;
        if (value) {
            const tabbable = (_b = (_a = this.tabbableElements) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
            this.previousTabindex = tabbable;
            if (tabbable) {
                tabbable.setAttribute('tabindex', '-1');
            }
        }
        else if (!value && this.previousTabindex) {
            this.previousTabindex.setAttribute('tabindex', '0');
            this.previousTabindex = null;
        }
    })
], ListBase.prototype, "noninteractive", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$a = i$6 `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let List = class List extends ListBase {
};
List.styles = [styles$a];
List = __decorate([
    e$6('mwc-list')
], List);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$9 = i$6 `:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Icon = class Icon extends s$1 {
    /** @soyTemplate */
    render() {
        return x `<span><slot></slot></span>`;
    }
};
Icon.styles = [styles$9];
Icon = __decorate([
    e$6('mwc-icon')
], Icon);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ButtonBase extends s$1 {
    constructor() {
        super(...arguments);
        this.raised = false;
        this.unelevated = false;
        this.outlined = false;
        this.dense = false;
        this.disabled = false;
        this.trailingIcon = false;
        this.fullwidth = false;
        this.icon = '';
        this.label = '';
        this.expandContent = false;
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
    }
    /** @soyTemplate */
    renderOverlay() {
        return x ``;
    }
    /** @soyTemplate */
    renderRipple() {
        const filled = this.raised || this.unelevated;
        return this.shouldRenderRipple ?
            x `<mwc-ripple class="ripple" .primary="${!filled}" .disabled="${this.disabled}"></mwc-ripple>` :
            '';
    }
    focus() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.startFocus();
            buttonElement.focus();
        }
    }
    blur() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.endFocus();
            buttonElement.blur();
        }
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'mdc-button--raised': this.raised,
            'mdc-button--unelevated': this.unelevated,
            'mdc-button--outlined': this.outlined,
            'mdc-button--dense': this.dense,
        };
    }
    /**
     * @soyTemplate
     * @soyAttributes buttonAttributes: #button
     * @soyClasses buttonClasses: #button
     */
    render() {
        return x `
      <button
          id="button"
          class="mdc-button ${o$3(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${l$1(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${o$3({
            flex: this.expandContent
        })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
      </button>`;
    }
    /** @soyTemplate */
    renderIcon() {
        return x `
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
    }
    handleRippleActivate(evt) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(evt);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
}
ButtonBase.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    ariaProperty,
    e$5({ type: String, attribute: 'aria-haspopup' })
], ButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], ButtonBase.prototype, "raised", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], ButtonBase.prototype, "unelevated", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], ButtonBase.prototype, "outlined", void 0);
__decorate([
    e$5({ type: Boolean })
], ButtonBase.prototype, "dense", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'trailingicon' })
], ButtonBase.prototype, "trailingIcon", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], ButtonBase.prototype, "fullwidth", void 0);
__decorate([
    e$5({ type: String })
], ButtonBase.prototype, "icon", void 0);
__decorate([
    e$5({ type: String })
], ButtonBase.prototype, "label", void 0);
__decorate([
    e$5({ type: Boolean })
], ButtonBase.prototype, "expandContent", void 0);
__decorate([
    i$2('#button')
], ButtonBase.prototype, "buttonElement", void 0);
__decorate([
    e$3('mwc-ripple')
], ButtonBase.prototype, "ripple", void 0);
__decorate([
    t$1()
], ButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$4({ passive: true })
], ButtonBase.prototype, "handleRippleActivate", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$8 = i$6 `.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Button = class Button extends ButtonBase {
};
Button.styles = [styles$8];
Button = __decorate([
    e$6('mwc-button')
], Button);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$2 = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers$2 = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses$4 = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    __extends(MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return strings$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return cssClasses$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return numbers$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += numbers$2.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class NotchedOutlineBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCNotchedOutlineFoundation;
        this.width = 0;
        this.open = false;
        this.lastOpen = this.open;
    }
    createAdapter() {
        return {
            addClass: (className) => this.mdcRoot.classList.add(className),
            removeClass: (className) => this.mdcRoot.classList.remove(className),
            setNotchWidthProperty: (width) => this.notchElement.style.setProperty('width', `${width}px`),
            removeNotchWidthProperty: () => this.notchElement.style.removeProperty('width'),
        };
    }
    openOrClose(shouldOpen, width) {
        if (!this.mdcFoundation) {
            return;
        }
        if (shouldOpen && width !== undefined) {
            this.mdcFoundation.notch(width);
        }
        else {
            this.mdcFoundation.closeNotch();
        }
    }
    render() {
        this.openOrClose(this.open, this.width);
        const classes = o$3({
            'mdc-notched-outline--notched': this.open,
        });
        return x `
      <span class="mdc-notched-outline ${classes}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
    }
}
__decorate([
    i$2('.mdc-notched-outline')
], NotchedOutlineBase.prototype, "mdcRoot", void 0);
__decorate([
    e$5({ type: Number })
], NotchedOutlineBase.prototype, "width", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], NotchedOutlineBase.prototype, "open", void 0);
__decorate([
    i$2('.mdc-notched-outline__notch')
], NotchedOutlineBase.prototype, "notchElement", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$7 = i$6 `.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let NotchedOutline = class NotchedOutline extends NotchedOutlineBase {
};
NotchedOutline.styles = [styles$7];
NotchedOutline = __decorate([
    e$6('mwc-notched-outline')
], NotchedOutline);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a, _b;
// ShadyDOM should submit <input> elements in component internals
const USING_SHADY_DOM = (_b = (_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) !== null && _b !== void 0 ? _b : false;
/** @soyCompatible */
class FormElement extends BaseElement {
    constructor() {
        super(...arguments);
        /**
         * Disabled state for the component. When `disabled` is set to `true`, the
         * component will not be added to form submission.
         */
        this.disabled = false;
        /**
         * Form element that contains this element
         */
        this.containingForm = null;
        this.formDataListener = (ev) => {
            if (!this.disabled) {
                this.setFormData(ev.formData);
            }
        };
    }
    findFormElement() {
        // If the component internals are not in Shadow DOM, subscribing to form
        // data events could lead to duplicated data, which may not work correctly
        // on the server side.
        if (!this.shadowRoot || USING_SHADY_DOM) {
            return null;
        }
        const root = this.getRootNode();
        const forms = root.querySelectorAll('form');
        for (const form of Array.from(forms)) {
            if (form.contains(this)) {
                return form;
            }
        }
        return null;
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.containingForm = this.findFormElement();
        (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.addEventListener('formdata', this.formDataListener);
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.removeEventListener('formdata', this.formDataListener);
        this.containingForm = null;
    }
    click() {
        if (this.formElement && !this.disabled) {
            this.formElement.focus();
            this.formElement.click();
        }
    }
    firstUpdated() {
        super.firstUpdated();
        if (this.shadowRoot) {
            this.mdcRoot.addEventListener('change', (e) => {
                this.dispatchEvent(new Event('change', e));
            });
        }
    }
}
FormElement.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    e$5({ type: Boolean })
], FormElement.prototype, "disabled", void 0);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$3 = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_REQUIRED: 'mdc-floating-label--required',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    __extends(MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler = function () {
            _this.handleShakeAnimationEnd();
        };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return cssClasses$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
        if (isRequired) {
            this.adapter.addClass(LABEL_REQUIRED);
        }
        else {
            this.adapter.removeClass(LABEL_REQUIRED);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const createAdapter$1 = (labelElement) => {
    return {
        addClass: (className) => labelElement.classList.add(className),
        removeClass: (className) => labelElement.classList.remove(className),
        getWidth: () => labelElement.scrollWidth,
        registerInteractionHandler: (evtType, handler) => {
            labelElement.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            labelElement.removeEventListener(evtType, handler);
        },
    };
};
class FloatingLabelDirective extends i$4 {
    constructor(partInfo) {
        super(partInfo);
        this.foundation = null;
        this.previousPart = null;
        switch (partInfo.type) {
            // Only allow Attribute and Part bindings
            case t$2.ATTRIBUTE:
            case t$2.PROPERTY:
                break;
            default:
                throw new Error('FloatingLabel directive only support attribute and property parts');
        }
    }
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part, [label]) {
        if (part !== this.previousPart) {
            if (this.foundation) {
                this.foundation.destroy();
            }
            this.previousPart = part;
            const labelElement = part.element;
            labelElement.classList.add('mdc-floating-label');
            const adapter = createAdapter$1(labelElement);
            this.foundation = new MDCFloatingLabelFoundation(adapter);
            this.foundation.init();
        }
        return this.render(label);
    }
    render(_label) {
        return this.foundation;
    }
}
const floatingLabel = e$7(FloatingLabelDirective);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$2 = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCLineRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler = function (evt) {
            _this.handleTransitionEnd(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(cssClasses$2.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter.addClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter.hasClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_ACTIVE);
                this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const createAdapter = (lineElement) => {
    return {
        addClass: (className) => lineElement.classList.add(className),
        removeClass: (className) => lineElement.classList.remove(className),
        hasClass: (className) => lineElement.classList.contains(className),
        setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
        registerEventHandler: (evtType, handler) => {
            lineElement.addEventListener(evtType, handler);
        },
        deregisterEventHandler: (evtType, handler) => {
            lineElement.removeEventListener(evtType, handler);
        },
    };
};
class LineRippleDirective extends i$4 {
    constructor(partInfo) {
        super(partInfo);
        this.previousPart = null;
        this.foundation = null;
        switch (partInfo.type) {
            case t$2.ATTRIBUTE:
            case t$2.PROPERTY:
                return;
            default:
                throw new Error('LineRipple only support attribute and property parts.');
        }
    }
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part, _params) {
        if (this.previousPart !== part) {
            if (this.foundation) {
                this.foundation.destroy();
            }
            this.previousPart = part;
            const lineElement = part.element;
            lineElement.classList.add('mdc-line-ripple');
            const adapter = createAdapter(lineElement);
            this.foundation = new MDCLineRippleFoundation(adapter);
            this.foundation.init();
        }
        return this.render();
    }
    render() {
        return this.foundation;
    }
}
const lineRipple = e$7(LineRippleDirective);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$1 = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_DESCRIBEDBY: 'aria-describedby',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
    SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
    TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
var cssClasses$1 = {
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    LABEL_FLOATING: 'mdc-text-field--label-floating',
    NO_LABEL: 'mdc-text-field--no-label',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
    WITH_INTERNAL_COUNTER: 'mdc-text-field--with-internal-counter',
};
var numbers$1 = {
    LABEL_SCALE: 0.75,
};
/**
 * Whitelist based off of
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */
var VALIDATION_ATTR_WHITELIST = [
    'pattern',
    'min',
    'max',
    'required',
    'step',
    'minlength',
    'maxlength',
];
/**
 * Label should always float for these types as they show some UI even if value
 * is empty.
 */
var ALWAYS_FLOAT_TYPES = [
    'color',
    'date',
    'datetime-local',
    'month',
    'range',
    'time',
    'week',
];

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldFoundation = /** @class */ (function (_super) {
    __extends(MDCTextFieldFoundation, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCTextFieldFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, __assign(__assign({}, MDCTextFieldFoundation.defaultAdapter), adapter)) || this;
        _this.isFocused = false;
        _this.receivedUserInput = false;
        _this.valid = true;
        _this.useNativeValidation = true;
        _this.validateOnValueChange = true;
        _this.helperText = foundationMap.helperText;
        _this.characterCounter = foundationMap.characterCounter;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.trailingIcon = foundationMap.trailingIcon;
        _this.inputFocusHandler = function () {
            _this.activateFocus();
        };
        _this.inputBlurHandler = function () {
            _this.deactivateFocus();
        };
        _this.inputInputHandler = function () {
            _this.handleInput();
        };
        _this.setPointerXOffset = function (evt) {
            _this.setTransformOrigin(evt);
        };
        _this.textFieldInteractionHandler = function () {
            _this.handleTextFieldInteraction();
        };
        _this.validationAttributeChangeHandler = function (attributesList) {
            _this.handleValidationAttributeChange(attributesList);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
        get: function () {
            return numbers$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat", {
        get: function () {
            var type = this.getNativeInput().type;
            return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
        get: function () {
            return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() ||
                this.isBadInput();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
        get: function () {
            return !this.isFocused && !this.isValid() && !!this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and
         * return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return true; },
                setInputAttr: function () { return undefined; },
                removeInputAttr: function () { return undefined; },
                registerTextFieldInteractionHandler: function () { return undefined; },
                deregisterTextFieldInteractionHandler: function () { return undefined; },
                registerInputInteractionHandler: function () { return undefined; },
                deregisterInputInteractionHandler: function () { return undefined; },
                registerValidationAttributeChangeHandler: function () {
                    return new MutationObserver(function () { return undefined; });
                },
                deregisterValidationAttributeChangeHandler: function () { return undefined; },
                getNativeInput: function () { return null; },
                isFocused: function () { return false; },
                activateLineRipple: function () { return undefined; },
                deactivateLineRipple: function () { return undefined; },
                setLineRippleTransformOrigin: function () { return undefined; },
                shakeLabel: function () { return undefined; },
                floatLabel: function () { return undefined; },
                setLabelRequired: function () { return undefined; },
                hasLabel: function () { return false; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldFoundation.prototype.init = function () {
        var e_1, _a, e_2, _b;
        if (this.adapter.hasLabel() && this.getNativeInput().required) {
            this.adapter.setLabelRequired(true);
        }
        if (this.adapter.isFocused()) {
            this.inputFocusHandler();
        }
        else if (this.adapter.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter.floatLabel(true);
            this.styleFloating(true);
        }
        this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.registerInputInteractionHandler('input', this.inputInputHandler);
        try {
            for (var POINTERDOWN_EVENTS_1 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
                var evtType = POINTERDOWN_EVENTS_1_1.value;
                this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a = POINTERDOWN_EVENTS_1.return)) _a.call(POINTERDOWN_EVENTS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var INTERACTION_EVENTS_1 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b = INTERACTION_EVENTS_1.return)) _b.call(INTERACTION_EVENTS_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.validationObserver =
            this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
        this.setcharacterCounter(this.getValue().length);
    };
    MDCTextFieldFoundation.prototype.destroy = function () {
        var e_3, _a, e_4, _b;
        this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler);
        try {
            for (var POINTERDOWN_EVENTS_2 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
                var evtType = POINTERDOWN_EVENTS_2_1.value;
                this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a = POINTERDOWN_EVENTS_2.return)) _a.call(POINTERDOWN_EVENTS_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var INTERACTION_EVENTS_2 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b = INTERACTION_EVENTS_2.return)) _b.call(INTERACTION_EVENTS_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    };
    /**
     * Handles user interactions with the Text Field.
     */
    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
        var nativeInput = this.adapter.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
            return;
        }
        this.receivedUserInput = true;
    };
    /**
     * Handles validation attribute changes
     */
    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
        var _this = this;
        attributesList.some(function (attributeName) {
            if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                _this.styleValidity(true);
                _this.adapter.setLabelRequired(_this.getNativeInput().required);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) {
            this.setcharacterCounter(this.getValue().length);
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
            return;
        }
        if (openNotch) {
            var labelWidth = this.adapter.getLabelWidth() * numbers$1.LABEL_SCALE;
            this.adapter.notchOutline(labelWidth);
        }
        else {
            this.adapter.closeOutline();
        }
    };
    /**
     * Activates the text field focus state.
     */
    MDCTextFieldFoundation.prototype.activateFocus = function () {
        this.isFocused = true;
        this.styleFocused(this.isFocused);
        this.adapter.activateLineRipple();
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (this.helperText &&
            (this.helperText.isPersistent() || !this.helperText.isValidation() ||
                !this.valid)) {
            this.helperText.showToScreenReader();
        }
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
        if (this.isDisabled() || this.adapter.hasOutline()) {
            return;
        }
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */
    MDCTextFieldFoundation.prototype.handleInput = function () {
        this.autoCompleteFocus();
        this.setcharacterCounter(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */
    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
        if (!this.receivedUserInput) {
            this.activateFocus();
        }
    };
    /**
     * Deactivates the Text Field's focus state.
     */
    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
        this.isFocused = false;
        this.adapter.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity(isValid);
        this.styleFocused(this.isFocused);
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
            this.receivedUserInput = false;
        }
    };
    MDCTextFieldFoundation.prototype.getValue = function () {
        return this.getNativeInput().value;
    };
    /**
     * @param value The value to set on the input Element.
     */
    MDCTextFieldFoundation.prototype.setValue = function (value) {
        // Prevent Safari from moving the caret to the end of the input when the
        // value has not changed.
        if (this.getValue() !== value) {
            this.getNativeInput().value = value;
        }
        this.setcharacterCounter(value.length);
        if (this.validateOnValueChange) {
            var isValid = this.isValid();
            this.styleValidity(isValid);
        }
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            if (this.validateOnValueChange) {
                this.adapter.shakeLabel(this.shouldShake);
            }
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a
     *     native validity check.
     */
    MDCTextFieldFoundation.prototype.isValid = function () {
        return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */
    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
        this.valid = isValid;
        this.styleValidity(isValid);
        var shouldShake = !isValid && !this.isFocused && !!this.getValue();
        if (this.adapter.hasLabel()) {
            this.adapter.shakeLabel(shouldShake);
        }
    };
    /**
     * @param shouldValidate Whether or not validity should be updated on
     *     value change.
     */
    MDCTextFieldFoundation.prototype.setValidateOnValueChange = function (shouldValidate) {
        this.validateOnValueChange = shouldValidate;
    };
    /**
     * @return Whether or not validity should be updated on value change. `true`
     *     by default.
     */
    MDCTextFieldFoundation.prototype.getValidateOnValueChange = function () {
        return this.validateOnValueChange;
    };
    /**
     * Enables or disables the use of native validation. Use this for custom
     * validation.
     * @param useNativeValidation Set this to false to ignore native input
     *     validation.
     */
    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
        this.useNativeValidation = useNativeValidation;
    };
    MDCTextFieldFoundation.prototype.isDisabled = function () {
        return this.getNativeInput().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */
    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
        this.getNativeInput().disabled = disabled;
        this.styleDisabled(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText) {
            this.helperText.setContent(content);
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon) {
            this.leadingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon) {
            this.leadingIcon.setContent(content);
        }
    };
    /**
     * Sets the aria label of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
        if (this.trailingIcon) {
            this.trailingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
        if (this.trailingIcon) {
            this.trailingIcon.setContent(content);
        }
    };
    /**
     * Sets character counter values that shows characters used and the total
     * character limit.
     */
    MDCTextFieldFoundation.prototype.setcharacterCounter = function (currentLength) {
        if (!this.characterCounter) {
            return;
        }
        var maxLength = this.getNativeInput().maxLength;
        if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        }
        this.characterCounter.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied
     *     value.
     */
    MDCTextFieldFoundation.prototype.isBadInput = function () {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */
    MDCTextFieldFoundation.prototype.isNativeInputValid = function () {
        return this.getNativeInput().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */
    MDCTextFieldFoundation.prototype.styleValidity = function (isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
        if (isValid) {
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.addClass(INVALID);
        }
        if (this.helperText) {
            this.helperText.setValidity(isValid);
            // We dynamically set or unset aria-describedby for validation helper text
            // only, based on whether the field is valid
            var helperTextValidation = this.helperText.isValidation();
            if (!helperTextValidation) {
                return;
            }
            var helperTextVisible = this.helperText.isVisible();
            var helperTextId = this.helperText.getId();
            if (helperTextVisible && helperTextId) {
                this.adapter.setInputAttr(strings$1.ARIA_DESCRIBEDBY, helperTextId);
            }
            else {
                this.adapter.removeInputAttr(strings$1.ARIA_DESCRIBEDBY);
            }
        }
    };
    /**
     * Styles the component based on the focused state.
     */
    MDCTextFieldFoundation.prototype.styleFocused = function (isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
        if (isFocused) {
            this.adapter.addClass(FOCUSED);
        }
        else {
            this.adapter.removeClass(FOCUSED);
        }
    };
    /**
     * Styles the component based on the disabled state.
     */
    MDCTextFieldFoundation.prototype.styleDisabled = function (isDisabled) {
        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter.addClass(DISABLED);
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.removeClass(DISABLED);
        }
        if (this.leadingIcon) {
            this.leadingIcon.setDisabled(isDisabled);
        }
        if (this.trailingIcon) {
            this.trailingIcon.setDisabled(isDisabled);
        }
    };
    /**
     * Styles the component based on the label floating state.
     */
    MDCTextFieldFoundation.prototype.styleFloating = function (isFloating) {
        var LABEL_FLOATING = MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;
        if (isFloating) {
            this.adapter.addClass(LABEL_FLOATING);
        }
        else {
            this.adapter.removeClass(LABEL_FLOATING);
        }
    };
    /**
     * @return The native text input element from the host environment, or an
     *     object with the same shape for unit tests.
     */
    MDCTextFieldFoundation.prototype.getNativeInput = function () {
        // this.adapter may be undefined in foundation unit tests. This happens when
        // testdouble is creating a mock object and invokes the
        // shouldShake/shouldFloat getters (which in turn call getValue(), which
        // calls this method) before init() has been called from the MDCTextField
        // constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            required: false,
            type: 'input',
            validity: {
                badInput: false,
                valid: true,
            },
            value: '',
        };
    };
    return MDCTextFieldFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCTextFieldFoundation$1 = MDCTextFieldFoundation;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=o=>void 0===o.strings,f={},s=(o,l=f)=>o._$AH=l;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$7(class extends i$4{constructor(r){if(super(r),r.type!==t$2.PROPERTY&&r.type!==t$2.ATTRIBUTE&&r.type!==t$2.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!e$1(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t]){if(t===T||t===A)return t;const o=i.element,l=i.name;if(i.type===t$2.PROPERTY){if(t===o[l])return T}else if(i.type===t$2.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(l))return T}else if(i.type===t$2.ATTRIBUTE&&o.getAttribute(l)===t+"")return T;return s(i),t}});

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const passiveEvents = ['touchstart', 'touchmove', 'scroll', 'mousewheel'];
const createValidityObj = (customValidity = {}) => {
    /*
     * We need to make ValidityState an object because it is readonly and
     * we cannot use the spread operator. Also, we don't export
     * `CustomValidityState` because it is a leaky implementation and the user
     * already has access to `ValidityState` in lib.dom.ts. Also an interface
     * {a: Type} can be casted to {readonly a: Type} so passing any object
     * should be fine.
     */
    const objectifiedCustomValidity = {};
    // eslint-disable-next-line guard-for-in
    for (const propName in customValidity) {
        /*
         * Casting is needed because ValidityState's props are all readonly and
         * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
         * interface is the same as ValidityState (but not readonly), but the
         * function signature casts the output to ValidityState (thus readonly).
         */
        objectifiedCustomValidity[propName] =
            customValidity[propName];
    }
    return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
};
/** @soyCompatible */
class TextFieldBase extends FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCTextFieldFoundation$1;
        this.value = '';
        this.type = 'text';
        this.placeholder = '';
        this.label = '';
        this.icon = '';
        this.iconTrailing = '';
        this.disabled = false;
        this.required = false;
        this.minLength = -1;
        this.maxLength = -1;
        this.outlined = false;
        this.helper = '';
        this.validateOnInitialRender = false;
        this.validationMessage = '';
        this.autoValidate = false;
        this.pattern = '';
        this.min = '';
        this.max = '';
        /**
         * step can be a number or the keyword "any".
         *
         * Use `String` typing to pass down the value as a string and let the native
         * input cast internally as needed.
         */
        this.step = null;
        this.size = null;
        this.helperPersistent = false;
        this.charCounter = false;
        this.endAligned = false;
        this.prefix = '';
        this.suffix = '';
        this.name = '';
        this.readOnly = false;
        this.autocapitalize = '';
        this.outlineOpen = false;
        this.outlineWidth = 0;
        this.isUiValid = true;
        this.focused = false;
        this._validity = createValidityObj();
        this.validityTransform = null;
    }
    get validity() {
        this._checkValidity(this.value);
        return this._validity;
    }
    get willValidate() {
        return this.formElement.willValidate;
    }
    get selectionStart() {
        return this.formElement.selectionStart;
    }
    get selectionEnd() {
        return this.formElement.selectionEnd;
    }
    focus() {
        const focusEvt = new CustomEvent('focus');
        this.formElement.dispatchEvent(focusEvt);
        this.formElement.focus();
    }
    blur() {
        const blurEvt = new CustomEvent('blur');
        this.formElement.dispatchEvent(blurEvt);
        this.formElement.blur();
    }
    select() {
        this.formElement.select();
    }
    setSelectionRange(selectionStart, selectionEnd, selectionDirection) {
        this.formElement.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    update(changedProperties) {
        if (changedProperties.has('autoValidate') && this.mdcFoundation) {
            this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
        }
        if (changedProperties.has('value') && typeof this.value !== 'string') {
            this.value = `${this.value}`;
        }
        super.update(changedProperties);
    }
    setFormData(formData) {
        if (this.name) {
            formData.append(this.name, this.value);
        }
    }
    /** @soyTemplate */
    render() {
        const shouldRenderCharCounter = this.charCounter && this.maxLength !== -1;
        const shouldRenderHelperText = !!this.helper || !!this.validationMessage || shouldRenderCharCounter;
        /** @classMap */
        const classes = {
            'mdc-text-field--disabled': this.disabled,
            'mdc-text-field--no-label': !this.label,
            'mdc-text-field--filled': !this.outlined,
            'mdc-text-field--outlined': this.outlined,
            'mdc-text-field--with-leading-icon': this.icon,
            'mdc-text-field--with-trailing-icon': this.iconTrailing,
            'mdc-text-field--end-aligned': this.endAligned,
        };
        return x `
      <label class="mdc-text-field ${o$3(classes)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(shouldRenderHelperText)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter)}
    `;
    }
    updated(changedProperties) {
        if (changedProperties.has('value') &&
            changedProperties.get('value') !== undefined) {
            this.mdcFoundation.setValue(this.value);
            if (this.autoValidate) {
                this.reportValidity();
            }
        }
    }
    /** @soyTemplate */
    renderRipple() {
        return this.outlined ? '' : x `
      <span class="mdc-text-field__ripple"></span>
    `;
    }
    /** @soyTemplate */
    renderOutline() {
        return !this.outlined ? '' : x `
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`;
    }
    /** @soyTemplate */
    renderLabel() {
        return !this.label ?
            '' :
            x `
      <span
          .floatingLabelFoundation=${floatingLabel(this.label)}
          id="label">${this.label}</span>
    `;
    }
    /** @soyTemplate */
    renderLeadingIcon() {
        return this.icon ? this.renderIcon(this.icon) : '';
    }
    /** @soyTemplate */
    renderTrailingIcon() {
        return this.iconTrailing ? this.renderIcon(this.iconTrailing, true) : '';
    }
    /** @soyTemplate */
    renderIcon(icon, isTrailingIcon = false) {
        /** @classMap */
        const classes = {
            'mdc-text-field__icon--leading': !isTrailingIcon,
            'mdc-text-field__icon--trailing': isTrailingIcon
        };
        return x `<i class="material-icons mdc-text-field__icon ${o$3(classes)}">${icon}</i>`;
    }
    /** @soyTemplate */
    renderPrefix() {
        return this.prefix ? this.renderAffix(this.prefix) : '';
    }
    /** @soyTemplate */
    renderSuffix() {
        return this.suffix ? this.renderAffix(this.suffix, true) : '';
    }
    /** @soyTemplate */
    renderAffix(content, isSuffix = false) {
        /** @classMap */
        const classes = {
            'mdc-text-field__affix--prefix': !isSuffix,
            'mdc-text-field__affix--suffix': isSuffix
        };
        return x `<span class="mdc-text-field__affix ${o$3(classes)}">
        ${content}</span>`;
    }
    /** @soyTemplate */
    renderInput(shouldRenderHelperText) {
        const minOrUndef = this.minLength === -1 ? undefined : this.minLength;
        const maxOrUndef = this.maxLength === -1 ? undefined : this.maxLength;
        const autocapitalizeOrUndef = this.autocapitalize ?
            this.autocapitalize :
            undefined;
        const showValidationMessage = this.validationMessage && !this.isUiValid;
        const ariaLabelledbyOrUndef = !!this.label ? 'label' : undefined;
        const ariaControlsOrUndef = shouldRenderHelperText ? 'helper-text' : undefined;
        const ariaDescribedbyOrUndef = this.focused || this.helperPersistent || showValidationMessage ?
            'helper-text' :
            undefined;
        // TODO: live() directive needs casting for lit-analyzer
        // https://github.com/runem/lit-analyzer/pull/91/files
        // TODO: lit-analyzer labels min/max as (number|string) instead of string
        return x `
      <input
          aria-labelledby=${l$1(ariaLabelledbyOrUndef)}
          aria-controls="${l$1(ariaControlsOrUndef)}"
          aria-describedby="${l$1(ariaDescribedbyOrUndef)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${l(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${l$1(minOrUndef)}"
          maxlength="${l$1(maxOrUndef)}"
          pattern="${l$1(this.pattern ? this.pattern : undefined)}"
          min="${l$1(this.min === '' ? undefined : this.min)}"
          max="${l$1(this.max === '' ? undefined : this.max)}"
          step="${l$1(this.step === null ? undefined : this.step)}"
          size="${l$1(this.size === null ? undefined : this.size)}"
          name="${l$1(this.name === '' ? undefined : this.name)}"
          inputmode="${l$1(this.inputMode)}"
          autocapitalize="${l$1(autocapitalizeOrUndef)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
    }
    /** @soyTemplate */
    renderLineRipple() {
        return this.outlined ?
            '' :
            x `
      <span .lineRippleFoundation=${lineRipple()}></span>
    `;
    }
    /** @soyTemplate */
    renderHelperText(shouldRenderHelperText, shouldRenderCharCounter) {
        const showValidationMessage = this.validationMessage && !this.isUiValid;
        /** @classMap */
        const classes = {
            'mdc-text-field-helper-text--persistent': this.helperPersistent,
            'mdc-text-field-helper-text--validation-msg': showValidationMessage,
        };
        const ariaHiddenOrUndef = this.focused || this.helperPersistent || showValidationMessage ?
            undefined :
            'true';
        const helperText = showValidationMessage ? this.validationMessage : this.helper;
        return !shouldRenderHelperText ? '' : x `
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${l$1(ariaHiddenOrUndef)}"
             class="mdc-text-field-helper-text ${o$3(classes)}"
             >${helperText}</div>
        ${this.renderCharCounter(shouldRenderCharCounter)}
      </div>`;
    }
    /** @soyTemplate */
    renderCharCounter(shouldRenderCharCounter) {
        const length = Math.min(this.value.length, this.maxLength);
        return !shouldRenderCharCounter ? '' : x `
      <span class="mdc-text-field-character-counter"
            >${length} / ${this.maxLength}</span>`;
    }
    onInputFocus() {
        this.focused = true;
    }
    onInputBlur() {
        this.focused = false;
        this.reportValidity();
    }
    checkValidity() {
        const isValid = this._checkValidity(this.value);
        if (!isValid) {
            const invalidEvent = new Event('invalid', { bubbles: false, cancelable: true });
            this.dispatchEvent(invalidEvent);
        }
        return isValid;
    }
    reportValidity() {
        const isValid = this.checkValidity();
        this.mdcFoundation.setValid(isValid);
        this.isUiValid = isValid;
        return isValid;
    }
    _checkValidity(value) {
        const nativeValidity = this.formElement.validity;
        let validity = createValidityObj(nativeValidity);
        if (this.validityTransform) {
            const customValidity = this.validityTransform(value, validity);
            validity = Object.assign(Object.assign({}, validity), customValidity);
            this.mdcFoundation.setUseNativeValidation(false);
        }
        else {
            this.mdcFoundation.setUseNativeValidation(true);
        }
        this._validity = validity;
        return this._validity.valid;
    }
    setCustomValidity(message) {
        this.validationMessage = message;
        this.formElement.setCustomValidity(message);
    }
    handleInputChange() {
        this.value = this.formElement.value;
    }
    createAdapter() {
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
    }
    getRootAdapterMethods() {
        return Object.assign({ registerTextFieldInteractionHandler: (evtType, handler) => this.addEventListener(evtType, handler), deregisterTextFieldInteractionHandler: (evtType, handler) => this.removeEventListener(evtType, handler), registerValidationAttributeChangeHandler: (handler) => {
                const getAttributesList = (mutationsList) => {
                    return mutationsList.map((mutation) => mutation.attributeName)
                        .filter((attributeName) => attributeName);
                };
                const observer = new MutationObserver((mutationsList) => {
                    handler(getAttributesList(mutationsList));
                });
                const config = { attributes: true };
                observer.observe(this.formElement, config);
                return observer;
            }, deregisterValidationAttributeChangeHandler: (observer) => observer.disconnect() }, addHasRemoveClass(this.mdcRoot));
    }
    getInputAdapterMethods() {
        return {
            getNativeInput: () => this.formElement,
            // since HelperTextFoundation is not used, aria-describedby a11y logic
            // is implemented in render method instead of these adapter methods
            setInputAttr: () => undefined,
            removeInputAttr: () => undefined,
            isFocused: () => this.shadowRoot ?
                this.shadowRoot.activeElement === this.formElement :
                false,
            registerInputInteractionHandler: (evtType, handler) => this.formElement.addEventListener(evtType, handler, { passive: evtType in passiveEvents }),
            deregisterInputInteractionHandler: (evtType, handler) => this.formElement.removeEventListener(evtType, handler),
        };
    }
    getLabelAdapterMethods() {
        return {
            floatLabel: (shouldFloat) => this.labelElement &&
                this.labelElement.floatingLabelFoundation.float(shouldFloat),
            getLabelWidth: () => {
                return this.labelElement ?
                    this.labelElement.floatingLabelFoundation.getWidth() :
                    0;
            },
            hasLabel: () => Boolean(this.labelElement),
            shakeLabel: (shouldShake) => this.labelElement &&
                this.labelElement.floatingLabelFoundation.shake(shouldShake),
            setLabelRequired: (isRequired) => {
                if (this.labelElement) {
                    this.labelElement.floatingLabelFoundation.setRequired(isRequired);
                }
            },
        };
    }
    getLineRippleAdapterMethods() {
        return {
            activateLineRipple: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.activate();
                }
            },
            deactivateLineRipple: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.deactivate();
                }
            },
            setLineRippleTransformOrigin: (normalizedX) => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.setRippleCenter(normalizedX);
                }
            },
        };
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
        var _a;
        // @ts-ignore
        const result = await super.getUpdateComplete();
        await ((_a = this.outlineElement) === null || _a === void 0 ? void 0 : _a.updateComplete);
        return result;
    }
    // tslint:enable:ban-ts-ignore
    firstUpdated() {
        var _a;
        super.firstUpdated();
        this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
        if (this.validateOnInitialRender) {
            this.reportValidity();
        }
        // wait for the outline element to render to update the notch width
        (_a = this.outlineElement) === null || _a === void 0 ? void 0 : _a.updateComplete.then(() => {
            var _a;
            // `foundation.notchOutline()` assumes the label isn't floating and
            // multiplies by a constant, but the label is already is floating at this
            // stage, therefore directly set the outline width to the label width
            this.outlineWidth =
                ((_a = this.labelElement) === null || _a === void 0 ? void 0 : _a.floatingLabelFoundation.getWidth()) || 0;
        });
    }
    getOutlineAdapterMethods() {
        return {
            closeOutline: () => this.outlineElement && (this.outlineOpen = false),
            hasOutline: () => Boolean(this.outlineElement),
            notchOutline: (labelWidth) => {
                const outlineElement = this.outlineElement;
                if (outlineElement && !this.outlineOpen) {
                    this.outlineWidth = labelWidth;
                    this.outlineOpen = true;
                }
            }
        };
    }
    async layout() {
        await this.updateComplete;
        const labelElement = this.labelElement;
        if (!labelElement) {
            this.outlineOpen = false;
            return;
        }
        const shouldFloat = !!this.label && !!this.value;
        labelElement.floatingLabelFoundation.float(shouldFloat);
        if (!this.outlined) {
            return;
        }
        this.outlineOpen = shouldFloat;
        await this.updateComplete;
        /* When the textfield automatically notches due to a value and label
         * being defined, the textfield may be set to `display: none` by the user.
         * this means that the notch is of size 0px. We provide this function so
         * that the user may manually resize the notch to the floated label's
         * width.
         */
        const labelWidth = labelElement.floatingLabelFoundation.getWidth();
        if (this.outlineOpen) {
            this.outlineWidth = labelWidth;
            await this.updateComplete;
        }
    }
}
__decorate([
    i$2('.mdc-text-field')
], TextFieldBase.prototype, "mdcRoot", void 0);
__decorate([
    i$2('input')
], TextFieldBase.prototype, "formElement", void 0);
__decorate([
    i$2('.mdc-floating-label')
], TextFieldBase.prototype, "labelElement", void 0);
__decorate([
    i$2('.mdc-line-ripple')
], TextFieldBase.prototype, "lineRippleElement", void 0);
__decorate([
    i$2('mwc-notched-outline')
], TextFieldBase.prototype, "outlineElement", void 0);
__decorate([
    i$2('.mdc-notched-outline__notch')
], TextFieldBase.prototype, "notchElement", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "value", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "type", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "placeholder", void 0);
__decorate([
    e$5({ type: String }),
    observer(function (_newVal, oldVal) {
        if (oldVal !== undefined && this.label !== oldVal) {
            this.layout();
        }
    })
], TextFieldBase.prototype, "label", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "icon", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "iconTrailing", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], TextFieldBase.prototype, "disabled", void 0);
__decorate([
    e$5({ type: Boolean })
], TextFieldBase.prototype, "required", void 0);
__decorate([
    e$5({ type: Number })
], TextFieldBase.prototype, "minLength", void 0);
__decorate([
    e$5({ type: Number })
], TextFieldBase.prototype, "maxLength", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true }),
    observer(function (_newVal, oldVal) {
        if (oldVal !== undefined && this.outlined !== oldVal) {
            this.layout();
        }
    })
], TextFieldBase.prototype, "outlined", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "helper", void 0);
__decorate([
    e$5({ type: Boolean })
], TextFieldBase.prototype, "validateOnInitialRender", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "validationMessage", void 0);
__decorate([
    e$5({ type: Boolean })
], TextFieldBase.prototype, "autoValidate", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "pattern", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "min", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "max", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "step", void 0);
__decorate([
    e$5({ type: Number })
], TextFieldBase.prototype, "size", void 0);
__decorate([
    e$5({ type: Boolean })
], TextFieldBase.prototype, "helperPersistent", void 0);
__decorate([
    e$5({ type: Boolean })
], TextFieldBase.prototype, "charCounter", void 0);
__decorate([
    e$5({ type: Boolean })
], TextFieldBase.prototype, "endAligned", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "prefix", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "suffix", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "name", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "inputMode", void 0);
__decorate([
    e$5({ type: Boolean })
], TextFieldBase.prototype, "readOnly", void 0);
__decorate([
    e$5({ type: String })
], TextFieldBase.prototype, "autocapitalize", void 0);
__decorate([
    t$1()
], TextFieldBase.prototype, "outlineOpen", void 0);
__decorate([
    t$1()
], TextFieldBase.prototype, "outlineWidth", void 0);
__decorate([
    t$1()
], TextFieldBase.prototype, "isUiValid", void 0);
__decorate([
    t$1()
], TextFieldBase.prototype, "focused", void 0);
__decorate([
    e$4({ passive: true })
], TextFieldBase.prototype, "handleInputChange", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$6 = i$6 `.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let TextField = class TextField extends TextFieldBase {
};
TextField.styles = [styles$6];
TextField = __decorate([
    e$6('mwc-textfield')
], TextField);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    IS_OPEN_BELOW: 'mdc-menu-surface--is-open-below',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface',
};
// tslint:disable:object-literal-sort-keys
var strings = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    CLOSING_EVENT: 'MDCMenuSurface:closing',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    OPENING_EVENT: 'MDCMenuSurface:opening',
    FOCUSABLE_ELEMENTS: [
        'button:not(:disabled)',
        '[href]:not([aria-disabled="true"])',
        'input:not(:disabled)',
        'select:not(:disabled)',
        'textarea:not(:disabled)',
        '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(', '),
};
// tslint:enable:object-literal-sort-keys
var numbers = {
    /** Total duration of menu-surface open animation. */
    TRANSITION_OPEN_DURATION: 120,
    /** Total duration of menu-surface close animation. */
    TRANSITION_CLOSE_DURATION: 75,
    /**
     * Margin left to the edge of the viewport when menu-surface is at maximum
     * possible height. Also used as a viewport margin.
     */
    MARGIN_TO_EDGE: 32,
    /**
     * Ratio of anchor width to menu-surface width for switching from corner
     * positioning to center positioning.
     */
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
    /**
     * Amount of time to wait before restoring focus when closing the menu
     * surface. This is important because if a touch event triggered the menu
     * close, and the subsequent mouse event occurs after focus is restored, then
     * the restored focus would be lost.
     */
    TOUCH_EVENT_WAIT_MS: 30,
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
var CornerBit;
(function (CornerBit) {
    CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
    CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
    CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
    CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner[Corner["TOP_START"] = 8] = "TOP_START";
    Corner[Corner["TOP_END"] = 12] = "TOP_END";
    Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuSurfaceFoundation = /** @class */ (function (_super) {
    __extends(MDCMenuSurfaceFoundation, _super);
    function MDCMenuSurfaceFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation.defaultAdapter), adapter)) || this;
        _this.isSurfaceOpen = false;
        _this.isQuickOpen = false;
        _this.isHoistedElement = false;
        _this.isFixedPosition = false;
        _this.isHorizontallyCenteredOnViewport = false;
        _this.maxHeight = 0;
        _this.openBottomBias = 0;
        _this.openAnimationEndTimerId = 0;
        _this.closeAnimationEndTimerId = 0;
        _this.animationRequestId = 0;
        _this.anchorCorner = Corner.TOP_START;
        /**
         * Corner of the menu surface to which menu surface is attached to anchor.
         *
         *  Anchor corner --->+----------+
         *                    |  ANCHOR  |
         *                    +----------+
         *  Origin corner --->+--------------+
         *                    |              |
         *                    |              |
         *                    | MENU SURFACE |
         *                    |              |
         *                    |              |
         *                    +--------------+
         */
        _this.originCorner = Corner.TOP_START;
        _this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
        _this.position = { x: 0, y: 0 };
        return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
        get: function () {
            return Corner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                hasAnchor: function () { return false; },
                isElementInContainer: function () { return false; },
                isFocused: function () { return false; },
                isRtl: function () { return false; },
                getInnerDimensions: function () { return ({ height: 0, width: 0 }); },
                getAnchorDimensions: function () { return null; },
                getWindowDimensions: function () { return ({ height: 0, width: 0 }); },
                getBodyDimensions: function () { return ({ height: 0, width: 0 }); },
                getWindowScroll: function () { return ({ x: 0, y: 0 }); },
                setPosition: function () { return undefined; },
                setMaxHeight: function () { return undefined; },
                setTransformOrigin: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                notifyClose: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpen: function () { return undefined; },
                notifyOpening: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCMenuSurfaceFoundation.prototype.init = function () {
        var _a = MDCMenuSurfaceFoundation.cssClasses, ROOT = _a.ROOT, OPEN = _a.OPEN;
        if (!this.adapter.hasClass(ROOT)) {
            throw new Error(ROOT + " class required in root element.");
        }
        if (this.adapter.hasClass(OPEN)) {
            this.isSurfaceOpen = true;
        }
    };
    MDCMenuSurfaceFoundation.prototype.destroy = function () {
        clearTimeout(this.openAnimationEndTimerId);
        clearTimeout(this.closeAnimationEndTimerId);
        // Cancel any currently running animations.
        cancelAnimationFrame(this.animationRequestId);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu surface
     *     corner.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
        this.anchorCorner = corner;
    };
    /**
     * Flip menu corner horizontally.
     */
    MDCMenuSurfaceFoundation.prototype.flipCornerHorizontally = function () {
        this.originCorner = this.originCorner ^ CornerBit.RIGHT;
    };
    /**
     * @param margin Set of margin values from anchor.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
        this.anchorMargin.top = margin.top || 0;
        this.anchorMargin.right = margin.right || 0;
        this.anchorMargin.bottom = margin.bottom || 0;
        this.anchorMargin.left = margin.left || 0;
    };
    /** Used to indicate if the menu-surface is hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
        this.isHoistedElement = isHoisted;
    };
    /**
     * Used to set the menu-surface calculations based on a fixed position menu.
     */
    MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
        this.isFixedPosition = isFixedPosition;
    };
    /**
     * @return Returns true if menu is in fixed (`position: fixed`) position.
     */
    MDCMenuSurfaceFoundation.prototype.isFixed = function () {
        return this.isFixedPosition;
    };
    /** Sets the menu-surface position on the page. */
    MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
        this.position.x = this.isFinite(x) ? x : 0;
        this.position.y = this.isFinite(y) ? y : 0;
    };
    /** Sets whether menu-surface should be horizontally centered to viewport. */
    MDCMenuSurfaceFoundation.prototype.setIsHorizontallyCenteredOnViewport = function (isCentered) {
        this.isHorizontallyCenteredOnViewport = isCentered;
    };
    MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
        this.isQuickOpen = quickOpen;
    };
    /**
     * Sets maximum menu-surface height on open.
     * @param maxHeight The desired max-height. Set to 0 (default) to
     *     automatically calculate max height based on available viewport space.
     */
    MDCMenuSurfaceFoundation.prototype.setMaxHeight = function (maxHeight) {
        this.maxHeight = maxHeight;
    };
    /**
     * Set to a positive integer to influence the menu to preferentially open
     * below the anchor instead of above.
     * @param bias A value of `x` simulates an extra `x` pixels of available space
     *     below the menu during positioning calculations.
     */
    MDCMenuSurfaceFoundation.prototype.setOpenBottomBias = function (bias) {
        this.openBottomBias = bias;
    };
    MDCMenuSurfaceFoundation.prototype.isOpen = function () {
        return this.isSurfaceOpen;
    };
    /**
     * Open the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.open = function () {
        var _this = this;
        if (this.isSurfaceOpen) {
            return;
        }
        this.adapter.notifyOpening();
        this.adapter.saveFocus();
        if (this.isQuickOpen) {
            this.isSurfaceOpen = true;
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.dimensions = this.adapter.getInnerDimensions();
            this.autoposition();
            this.adapter.notifyOpen();
        }
        else {
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
            this.animationRequestId = requestAnimationFrame(function () {
                _this.dimensions = _this.adapter.getInnerDimensions();
                _this.autoposition();
                _this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
                _this.openAnimationEndTimerId = setTimeout(function () {
                    _this.openAnimationEndTimerId = 0;
                    _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                    _this.adapter.notifyOpen();
                }, numbers.TRANSITION_OPEN_DURATION);
            });
            this.isSurfaceOpen = true;
        }
    };
    /**
     * Closes the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
        var _this = this;
        if (skipRestoreFocus === void 0) { skipRestoreFocus = false; }
        if (!this.isSurfaceOpen) {
            return;
        }
        this.adapter.notifyClosing();
        if (this.isQuickOpen) {
            this.isSurfaceOpen = false;
            if (!skipRestoreFocus) {
                this.maybeRestoreFocus();
            }
            this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
            this.adapter.notifyClose();
            return;
        }
        this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
        requestAnimationFrame(function () {
            _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
            _this.closeAnimationEndTimerId = setTimeout(function () {
                _this.closeAnimationEndTimerId = 0;
                _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                _this.adapter.notifyClose();
            }, numbers.TRANSITION_CLOSE_DURATION);
        });
        this.isSurfaceOpen = false;
        if (!skipRestoreFocus) {
            this.maybeRestoreFocus();
        }
    };
    /** Handle clicks and close if not within menu-surface element. */
    MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
        var el = evt.target;
        if (this.adapter.isElementInContainer(el)) {
            return;
        }
        this.close();
    };
    /** Handle keys that close the surface. */
    MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    MDCMenuSurfaceFoundation.prototype.autoposition = function () {
        var _a;
        // Compute measurements for autoposition methods reuse.
        this.measurements = this.getAutoLayoutmeasurements();
        var corner = this.getoriginCorner();
        var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
        var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
        var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? 'right' : 'left';
        var horizontalOffset = this.getHorizontalOriginOffset(corner);
        var verticalOffset = this.getVerticalOriginOffset(corner);
        var _b = this.measurements, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
        var position = (_a = {},
            _a[horizontalAlignment] = horizontalOffset,
            _a[verticalAlignment] = verticalOffset,
            _a);
        // Center align when anchor width is comparable or greater than menu
        // surface, otherwise keep corner.
        if (anchorSize.width / surfaceSize.width >
            numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
            horizontalAlignment = 'center';
        }
        // If the menu-surface has been hoisted to the body, it's no longer relative
        // to the anchor element
        if (this.isHoistedElement || this.isFixedPosition) {
            this.adjustPositionForHoistedElement(position);
        }
        this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
        this.adapter.setPosition(position);
        this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
        // If it is opened from the top then add is-open-below class
        if (!this.hasBit(corner, CornerBit.BOTTOM)) {
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
        }
    };
    /**
     * @return Measurements used to position menu surface popup.
     */
    MDCMenuSurfaceFoundation.prototype.getAutoLayoutmeasurements = function () {
        var anchorRect = this.adapter.getAnchorDimensions();
        var bodySize = this.adapter.getBodyDimensions();
        var viewportSize = this.adapter.getWindowDimensions();
        var windowScroll = this.adapter.getWindowScroll();
        if (!anchorRect) {
            // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
            anchorRect = {
                top: this.position.y,
                right: this.position.x,
                bottom: this.position.y,
                left: this.position.x,
                width: 0,
                height: 0,
            };
            // tslint:enable:object-literal-sort-keys
        }
        return {
            anchorSize: anchorRect,
            bodySize: bodySize,
            surfaceSize: this.dimensions,
            viewportDistance: {
                // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                top: anchorRect.top,
                right: viewportSize.width - anchorRect.right,
                bottom: viewportSize.height - anchorRect.bottom,
                left: anchorRect.left,
                // tslint:enable:object-literal-sort-keys
            },
            viewportSize: viewportSize,
            windowScroll: windowScroll,
        };
    };
    /**
     * Computes the corner of the anchor from which to animate and position the
     * menu surface.
     *
     * Only LEFT or RIGHT bit is used to position the menu surface ignoring RTL
     * context. E.g., menu surface will be positioned from right side on TOP_END.
     */
    MDCMenuSurfaceFoundation.prototype.getoriginCorner = function () {
        var corner = this.originCorner;
        var _a = this.measurements, viewportDistance = _a.viewportDistance, anchorSize = _a.anchorSize, surfaceSize = _a.surfaceSize;
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        var availableTop;
        var availableBottom;
        if (isAnchoredToBottom) {
            availableTop =
                viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
            availableBottom =
                viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
        }
        else {
            availableTop =
                viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
            availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE +
                anchorSize.height - this.anchorMargin.top;
        }
        var isAvailableBottom = availableBottom - surfaceSize.height > 0;
        if (!isAvailableBottom &&
            availableTop > availableBottom + this.openBottomBias) {
            // Attach bottom side of surface to the anchor.
            corner = this.setBit(corner, CornerBit.BOTTOM);
        }
        var isRtl = this.adapter.isRtl();
        var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
        var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) ||
            this.hasBit(corner, CornerBit.RIGHT);
        // Whether surface attached to right side of anchor element.
        var isAnchoredToRight = false;
        // Anchored to start
        if (isRtl && isFlipRtl) {
            isAnchoredToRight = !hasRightBit;
        }
        else {
            // Anchored to right
            isAnchoredToRight = hasRightBit;
        }
        var availableLeft;
        var availableRight;
        if (isAnchoredToRight) {
            availableLeft =
                viewportDistance.left + anchorSize.width + this.anchorMargin.right;
            availableRight = viewportDistance.right - this.anchorMargin.right;
        }
        else {
            availableLeft = viewportDistance.left + this.anchorMargin.left;
            availableRight =
                viewportDistance.right + anchorSize.width - this.anchorMargin.left;
        }
        var isAvailableLeft = availableLeft - surfaceSize.width > 0;
        var isAvailableRight = availableRight - surfaceSize.width > 0;
        var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) &&
            this.hasBit(corner, CornerBit.RIGHT);
        if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl ||
            !isAvailableLeft && isOriginCornerAlignedToEnd) {
            // Attach left side of surface to the anchor.
            corner = this.unsetBit(corner, CornerBit.RIGHT);
        }
        else if (isAvailableLeft && isAnchoredToRight && isRtl ||
            (isAvailableLeft && !isAnchoredToRight && hasRightBit) ||
            (!isAvailableRight && availableLeft >= availableRight)) {
            // Attach right side of surface to the anchor.
            corner = this.setBit(corner, CornerBit.RIGHT);
        }
        return corner;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Maximum height of the menu surface, based on available space. 0
     *     indicates should not be set.
     */
    MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight = function (corner) {
        if (this.maxHeight > 0) {
            return this.maxHeight;
        }
        var viewportDistance = this.measurements.viewportDistance;
        var maxHeight = 0;
        var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
        var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        // When maximum height is not specified, it is handled from CSS.
        if (isBottomAligned) {
            maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
            if (!isBottomAnchored) {
                maxHeight += this.measurements.anchorSize.height;
            }
        }
        else {
            maxHeight = viewportDistance.bottom - this.anchorMargin.bottom +
                this.measurements.anchorSize.height - MARGIN_TO_EDGE;
            if (isBottomAnchored) {
                maxHeight -= this.measurements.anchorSize.height;
            }
        }
        return maxHeight;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Horizontal offset of menu surface origin corner from corresponding
     *     anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset = function (corner) {
        var anchorSize = this.measurements.anchorSize;
        // isRightAligned corresponds to using the 'right' property on the surface.
        var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
        var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
        if (isRightAligned) {
            var rightOffset = avoidHorizontalOverlap ?
                anchorSize.width - this.anchorMargin.left :
                this.anchorMargin.right;
            // For hoisted or fixed elements, adjust the offset by the difference
            // between viewport width and body width so when we calculate the right
            // value (`adjustPositionForHoistedElement`) based on the element
            // position, the right property is correct.
            if (this.isHoistedElement || this.isFixedPosition) {
                return rightOffset -
                    (this.measurements.viewportSize.width -
                        this.measurements.bodySize.width);
            }
            return rightOffset;
        }
        return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right :
            this.anchorMargin.left;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Vertical offset of menu surface origin corner from corresponding
     *     anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset = function (corner) {
        var anchorSize = this.measurements.anchorSize;
        var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
        var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        var y = 0;
        if (isBottomAligned) {
            y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top :
                -this.anchorMargin.bottom;
        }
        else {
            y = avoidVerticalOverlap ?
                (anchorSize.height + this.anchorMargin.bottom) :
                this.anchorMargin.top;
        }
        return y;
    };
    /**
     * Calculates the offsets for positioning the menu-surface when the
     * menu-surface has been hoisted to the body.
     */
    MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement = function (position) {
        var e_1, _a;
        var _b = this.measurements, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance, surfaceSize = _b.surfaceSize, viewportSize = _b.viewportSize;
        var props = Object.keys(position);
        try {
            for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var prop = props_1_1.value;
                var value = position[prop] || 0;
                if (this.isHorizontallyCenteredOnViewport &&
                    (prop === 'left' || prop === 'right')) {
                    position[prop] = (viewportSize.width - surfaceSize.width) / 2;
                    continue;
                }
                // Hoisted surfaces need to have the anchor elements location on the page
                // added to the position properties for proper alignment on the body.
                value += viewportDistance[prop];
                // Surfaces that are absolutely positioned need to have additional
                // calculations for scroll and bottom positioning.
                if (!this.isFixedPosition) {
                    if (prop === 'top') {
                        value += windowScroll.y;
                    }
                    else if (prop === 'bottom') {
                        value -= windowScroll.y;
                    }
                    else if (prop === 'left') {
                        value += windowScroll.x;
                    }
                    else { // prop === 'right'
                        value -= windowScroll.x;
                    }
                }
                position[prop] = value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * The last focused element when the menu surface was opened should regain
     * focus, if the user is focused on or within the menu surface when it is
     * closed.
     */
    MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus = function () {
        var _this = this;
        var isRootFocused = this.adapter.isFocused();
        var ownerDocument = this.adapter.getOwnerDocument ?
            this.adapter.getOwnerDocument() :
            document;
        var childHasFocus = ownerDocument.activeElement &&
            this.adapter.isElementInContainer(ownerDocument.activeElement);
        if (isRootFocused || childHasFocus) {
            // Wait before restoring focus when closing the menu surface. This is
            // important because if a touch event triggered the menu close, and the
            // subsequent mouse event occurs after focus is restored, then the
            // restored focus would be lost.
            setTimeout(function () {
                _this.adapter.restoreFocus();
            }, numbers.TOUCH_EVENT_WAIT_MS);
        }
    };
    MDCMenuSurfaceFoundation.prototype.hasBit = function (corner, bit) {
        return Boolean(corner & bit); // tslint:disable-line:no-bitwise
    };
    MDCMenuSurfaceFoundation.prototype.setBit = function (corner, bit) {
        return corner | bit; // tslint:disable-line:no-bitwise
    };
    MDCMenuSurfaceFoundation.prototype.unsetBit = function (corner, bit) {
        return corner ^ bit;
    };
    /**
     * isFinite that doesn't force conversion to number type.
     * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
     */
    MDCMenuSurfaceFoundation.prototype.isFinite = function (num) {
        return typeof num === 'number' && isFinite(num);
    };
    return MDCMenuSurfaceFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCMenuSurfaceFoundation$1 = MDCMenuSurfaceFoundation;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable:no-bitwise
// required for closure compiler
const stringToCorner = {
    'TOP_LEFT': Corner.TOP_LEFT,
    'TOP_RIGHT': Corner.TOP_RIGHT,
    'BOTTOM_LEFT': Corner.BOTTOM_LEFT,
    'BOTTOM_RIGHT': Corner.BOTTOM_RIGHT,
    'TOP_START': Corner.TOP_START,
    'TOP_END': Corner.TOP_END,
    'BOTTOM_START': Corner.BOTTOM_START,
    'BOTTOM_END': Corner.BOTTOM_END,
};
/**
 * @fires opened
 * @fires closed
 */
class MenuSurfaceBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCMenuSurfaceFoundation$1;
        this.absolute = false;
        this.fullwidth = false;
        this.fixed = false;
        this.x = null;
        this.y = null;
        // must be defined before open or else race condition in foundation occurs.
        this.quick = false;
        this.open = false;
        this.stayOpenOnBodyClick = false;
        this.bitwiseCorner = Corner.TOP_START;
        this.previousMenuCorner = null;
        // must be defined before observer of anchor corner for initialization
        this.menuCorner = 'START';
        this.corner = 'TOP_START';
        this.styleTop = '';
        this.styleLeft = '';
        this.styleRight = '';
        this.styleBottom = '';
        this.styleMaxHeight = '';
        this.styleTransformOrigin = '';
        this.anchor = null;
        this.previouslyFocused = null;
        this.previousAnchor = null;
        this.onBodyClickBound = () => undefined;
    }
    render() {
        return this.renderSurface();
    }
    renderSurface() {
        const classes = this.getRootClasses();
        const styles = this.getRootStyles();
        return x `
      <div
          class=${o$3(classes)}
          style="${o(styles)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        ${this.renderContent()}
      </div>`;
    }
    getRootClasses() {
        return {
            'mdc-menu-surface': true,
            'mdc-menu-surface--fixed': this.fixed,
            'mdc-menu-surface--fullwidth': this.fullwidth,
        };
    }
    getRootStyles() {
        return {
            'top': this.styleTop,
            'left': this.styleLeft,
            'right': this.styleRight,
            'bottom': this.styleBottom,
            'max-height': this.styleMaxHeight,
            'transform-origin': this.styleTransformOrigin,
        };
    }
    renderContent() {
        return x `<slot></slot>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { hasAnchor: () => {
                return !!this.anchor;
            }, notifyClose: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('closed', init);
                this.open = false;
                this.mdcRoot.dispatchEvent(ev);
            }, notifyClosing: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('closing', init);
                this.mdcRoot.dispatchEvent(ev);
            }, notifyOpen: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('opened', init);
                this.open = true;
                this.mdcRoot.dispatchEvent(ev);
            }, notifyOpening: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('opening', init);
                this.mdcRoot.dispatchEvent(ev);
            }, isElementInContainer: () => false, isRtl: () => {
                if (this.mdcRoot) {
                    return getComputedStyle(this.mdcRoot).direction === 'rtl';
                }
                return false;
            }, setTransformOrigin: (origin) => {
                const root = this.mdcRoot;
                if (!root) {
                    return;
                }
                this.styleTransformOrigin = origin;
            }, isFocused: () => {
                return doesElementContainFocus(this);
            }, saveFocus: () => {
                const activeElementPath = deepActiveElementPath();
                const pathLength = activeElementPath.length;
                if (!pathLength) {
                    this.previouslyFocused = null;
                }
                this.previouslyFocused = activeElementPath[pathLength - 1];
            }, restoreFocus: () => {
                if (!this.previouslyFocused) {
                    return;
                }
                if ('focus' in this.previouslyFocused) {
                    this.previouslyFocused.focus();
                }
            }, getInnerDimensions: () => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return { width: 0, height: 0 };
                }
                return { width: mdcRoot.offsetWidth, height: mdcRoot.offsetHeight };
            }, getAnchorDimensions: () => {
                const anchorElement = this.anchor;
                return anchorElement ? anchorElement.getBoundingClientRect() : null;
            }, getBodyDimensions: () => {
                return {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight,
                };
            }, getWindowDimensions: () => {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            }, getWindowScroll: () => {
                return {
                    x: window.pageXOffset,
                    y: window.pageYOffset,
                };
            }, setPosition: (position) => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return;
                }
                this.styleLeft = 'left' in position ? `${position.left}px` : '';
                this.styleRight = 'right' in position ? `${position.right}px` : '';
                this.styleTop = 'top' in position ? `${position.top}px` : '';
                this.styleBottom = 'bottom' in position ? `${position.bottom}px` : '';
            }, setMaxHeight: async (height) => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return;
                }
                // must set both for IE support as IE will not set a var
                this.styleMaxHeight = height;
                await this.updateComplete;
                this.styleMaxHeight = `var(--mdc-menu-max-height, ${height})`;
            } });
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    onBodyClick(evt) {
        if (this.stayOpenOnBodyClick) {
            return;
        }
        const path = evt.composedPath();
        if (path.indexOf(this) === -1) {
            this.close();
        }
    }
    registerBodyClick() {
        this.onBodyClickBound = this.onBodyClick.bind(this);
        // capture otherwise listener closes menu after quick menu opens
        document.body.addEventListener('click', this.onBodyClickBound, { passive: true, capture: true });
    }
    deregisterBodyClick() {
        document.body.removeEventListener('click', this.onBodyClickBound, { capture: true });
    }
    onOpenChanged(isOpen, wasOpen) {
        if (this.mdcFoundation) {
            if (isOpen) {
                this.mdcFoundation.open();
                // wasOpen helps with first render (when it is `undefined`) perf
            }
            else if (wasOpen !== undefined) {
                this.mdcFoundation.close();
            }
        }
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}
__decorate([
    i$2('.mdc-menu-surface')
], MenuSurfaceBase.prototype, "mdcRoot", void 0);
__decorate([
    i$2('slot')
], MenuSurfaceBase.prototype, "slotElement", void 0);
__decorate([
    e$5({ type: Boolean }),
    observer(function (isAbsolute) {
        if (this.mdcFoundation && !this.fixed) {
            this.mdcFoundation.setIsHoisted(isAbsolute);
        }
    })
], MenuSurfaceBase.prototype, "absolute", void 0);
__decorate([
    e$5({ type: Boolean })
], MenuSurfaceBase.prototype, "fullwidth", void 0);
__decorate([
    e$5({ type: Boolean }),
    observer(function (isFixed) {
        if (this.mdcFoundation && !this.absolute) {
            this.mdcFoundation.setFixedPosition(isFixed);
        }
    })
], MenuSurfaceBase.prototype, "fixed", void 0);
__decorate([
    e$5({ type: Number }),
    observer(function (value) {
        if (this.mdcFoundation && this.y !== null && value !== null) {
            this.mdcFoundation.setAbsolutePosition(value, this.y);
            this.mdcFoundation.setAnchorMargin({ left: value, top: this.y, right: -value, bottom: this.y });
        }
    })
], MenuSurfaceBase.prototype, "x", void 0);
__decorate([
    e$5({ type: Number }),
    observer(function (value) {
        if (this.mdcFoundation && this.x !== null && value !== null) {
            this.mdcFoundation.setAbsolutePosition(this.x, value);
            this.mdcFoundation.setAnchorMargin({ left: this.x, top: value, right: -this.x, bottom: value });
        }
    })
], MenuSurfaceBase.prototype, "y", void 0);
__decorate([
    e$5({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setQuickOpen(value);
        }
    })
], MenuSurfaceBase.prototype, "quick", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true }),
    observer(function (isOpen, wasOpen) {
        this.onOpenChanged(isOpen, wasOpen);
    })
], MenuSurfaceBase.prototype, "open", void 0);
__decorate([
    e$5({ type: Boolean })
], MenuSurfaceBase.prototype, "stayOpenOnBodyClick", void 0);
__decorate([
    t$1(),
    observer(function (value) {
        if (this.mdcFoundation) {
            if (value) {
                this.mdcFoundation.setAnchorCorner(value);
            }
            else {
                this.mdcFoundation.setAnchorCorner(value);
            }
        }
    })
], MenuSurfaceBase.prototype, "bitwiseCorner", void 0);
__decorate([
    e$5({ type: String }),
    observer(function (value) {
        if (this.mdcFoundation) {
            const isValidValue = value === 'START' || value === 'END';
            const isFirstTimeSet = this.previousMenuCorner === null;
            const cornerChanged = !isFirstTimeSet && value !== this.previousMenuCorner;
            const initiallySetToEnd = isFirstTimeSet && value === 'END';
            if (isValidValue && (cornerChanged || initiallySetToEnd)) {
                this.bitwiseCorner = this.bitwiseCorner ^ CornerBit.RIGHT;
                this.mdcFoundation.flipCornerHorizontally();
                this.previousMenuCorner = value;
            }
        }
    })
], MenuSurfaceBase.prototype, "menuCorner", void 0);
__decorate([
    e$5({ type: String }),
    observer(function (value) {
        if (this.mdcFoundation) {
            if (value) {
                let newCorner = stringToCorner[value];
                if (this.menuCorner === 'END') {
                    newCorner = newCorner ^ CornerBit.RIGHT;
                }
                this.bitwiseCorner = newCorner;
            }
        }
    })
], MenuSurfaceBase.prototype, "corner", void 0);
__decorate([
    t$1()
], MenuSurfaceBase.prototype, "styleTop", void 0);
__decorate([
    t$1()
], MenuSurfaceBase.prototype, "styleLeft", void 0);
__decorate([
    t$1()
], MenuSurfaceBase.prototype, "styleRight", void 0);
__decorate([
    t$1()
], MenuSurfaceBase.prototype, "styleBottom", void 0);
__decorate([
    t$1()
], MenuSurfaceBase.prototype, "styleMaxHeight", void 0);
__decorate([
    t$1()
], MenuSurfaceBase.prototype, "styleTransformOrigin", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$5 = i$6 `.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MenuSurface = class MenuSurface extends MenuSurfaceBase {
};
MenuSurface.styles = [styles$5];
MenuSurface = __decorate([
    e$6('mwc-menu-surface')
], MenuSurface);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Base class that connects an element to a <playground-project>.
 */
class PlaygroundConnectedElement extends s$1 {
    /**
     * The project that this element is associated with. Either the
     * `<playground-project>` node itself, or its `id` in the host scope.
     */
    set project(elementOrId) {
        if (typeof elementOrId === 'string') {
            // Defer querying the host to a rAF because if the host renders this
            // element before the one we're querying for, it might not quite exist
            // yet.
            requestAnimationFrame(() => {
                var _a;
                const root = this.getRootNode();
                this._project =
                    (_a = root.getElementById(elementOrId)) !== null && _a !== void 0 ? _a : undefined;
            });
        }
        else {
            this._project = elementOrId;
        }
    }
}
__decorate([
    e$5()
], PlaygroundConnectedElement.prototype, "project", null);
__decorate([
    t$1()
], PlaygroundConnectedElement.prototype, "_project", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Floating controls for creating, deleting, and renaming files in playground
 * virtual file system.
 */
let PlaygroundFileSystemControls = class PlaygroundFileSystemControls extends PlaygroundConnectedElement {
    constructor() {
        super(...arguments);
        /**
         * The kind of control to display:
         *
         * -  closed: Hidden.
         * -    menu: Menu with "Rename" and "Delete" items.
         * -  rename: Control for renaming an existing file.
         * - newfile: Control for creating a new file.
         */
        this.state = 'closed';
        this._postStateChangeRenderDone = false;
    }
    update(changedProperties) {
        if (changedProperties.has('state')) {
            this._postStateChangeRenderDone = false;
        }
        super.update(changedProperties);
    }
    render() {
        var _a;
        return x `<mwc-menu-surface
      fixed
      quick
      .open=${this.state !== 'closed'}
      .anchor=${(_a = this.anchorElement) !== null && _a !== void 0 ? _a : null}
      corner="BOTTOM_START"
      class="${this.state}"
      @closed=${this._onSurfaceClosed}
      ><div class="wrapper">${this._surfaceContents}</div></mwc-menu-surface
    >`;
    }
    async updated() {
        if (this._postStateChangeRenderDone) {
            return;
        }
        if (this.state === 'menu') {
            // Focus the first item  so that keyboard controls work.
            const menuList = this._menuList;
            if (menuList) {
                await menuList.updateComplete;
                menuList.focusItemAtIndex(0);
            }
        }
        else if (this.state === 'rename' || this.state === 'newfile') {
            // Focus the filename input.
            const input = this._filenameInput;
            if (input) {
                await input.updateComplete;
                input.focus();
                if (this.state === 'rename') {
                    // Pre-select just the basename (e.g. "foo" in "foo.html"), since
                    // users typically don't want to edit the extension.
                    input.setSelectionRange(0, input.value.lastIndexOf('.'));
                }
            }
        }
        this._postStateChangeRenderDone = true;
    }
    get _surfaceContents() {
        switch (this.state) {
            case 'closed':
                return A;
            case 'menu':
                return this._menu;
            case 'rename':
                return this._rename;
            case 'newfile':
                return this._newFile;
        }
    }
    get _menu() {
        return x `
      <mwc-list class="menu-list" @action=${this._onMenuAction}>
        <mwc-list-item graphic="icon" id="renameButton">
          Rename
          <svg
            slot="graphic"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="currentcolor"
          >
            <path
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            />
          </svg>
        </mwc-list-item>
        <mwc-list-item graphic="icon" id="deleteButton">
          Delete
          <svg
            slot="graphic"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentcolor"
          >
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        </mwc-list-item>
      </mwc-list>
    `;
    }
    get _rename() {
        return x `
      <mwc-textfield
        class="filename-input"
        label="Filename"
        .value=${this.filename || ''}
        @input=${this._onFilenameInputChange}
        @keydown=${this._onFilenameInputKeydown}
      ></mwc-textfield>
      <div class="actions">
        <mwc-button outlined @click=${this._onClickCancel}>Cancel</mwc-button>
        <mwc-button
          raised
          class="submit-button"
          .disabled=${!this._filenameInputValid}
          @click=${this._onSubmitRename}
          >Rename</mwc-button
        >
      </div>
    `;
    }
    get _newFile() {
        return x `
      <mwc-textfield
        class="filename-input"
        label="Filename"
        @input=${this._onFilenameInputChange}
        @keydown=${this._onFilenameInputKeydown}
      ></mwc-textfield>
      <div class="actions">
        <mwc-button outlined @click=${this._onClickCancel}>Cancel</mwc-button>
        <mwc-button
          raised
          class="submit-button"
          .disabled=${!this._filenameInputValid}
          @click=${this._onSubmitNewFile}
          >Create</mwc-button
        >
      </div>
    `;
    }
    _onSurfaceClosed() {
        this.state = 'closed';
    }
    _onClickCancel() {
        this._surface.close();
    }
    _onMenuAction(event) {
        switch (event.detail.index) {
            case 0:
                return this._onMenuSelectRename();
            case 1:
                return this._onMenuSelectDelete();
        }
    }
    _onMenuSelectRename() {
        this.state = 'rename';
    }
    _onMenuSelectDelete() {
        this._surface.close();
        if (this._project && this.filename) {
            this._project.deleteFile(this.filename);
        }
    }
    _onFilenameInputChange() {
        // Force re-evaluation of the _filenameInputValid getter (instead of managing
        // an internal property).
        this.requestUpdate();
    }
    get _filenameInputValid() {
        return !!(this._project &&
            this._filenameInput &&
            this._project.isValidNewFilename(this._filenameInput.value));
    }
    _onFilenameInputKeydown(event) {
        var _a;
        // Slightly hacky... rather than needing to know which action to perform in
        // each context, we just click whatever submit button we're rendering.
        if (event.key === 'Enter' && ((_a = this._submitButton) === null || _a === void 0 ? void 0 : _a.disabled) === false) {
            event.preventDefault();
            this._submitButton.click();
        }
    }
    _onSubmitRename() {
        var _a;
        this._surface.close();
        const oldFilename = this.filename;
        const newFilename = (_a = this._filenameInput) === null || _a === void 0 ? void 0 : _a.value;
        if (this._project && oldFilename && newFilename) {
            this._project.renameFile(oldFilename, newFilename);
        }
    }
    _onSubmitNewFile() {
        var _a;
        this._surface.close();
        const filename = (_a = this._filenameInput) === null || _a === void 0 ? void 0 : _a.value;
        if (this._project && filename) {
            this._project.addFile(filename);
            this.dispatchEvent(new CustomEvent('newFile', {
                detail: { filename },
            }));
        }
    }
};
PlaygroundFileSystemControls.styles = i$6 `
    mwc-menu-surface {
      --mdc-theme-primary: var(
        --playground-floating-controls-color,
        var(--playground-highlight-color, #6200ee)
      );
    }

    mwc-menu-surface.menu {
      --mdc-typography-subtitle1-font-size: 13px;
      --mdc-list-item-graphic-margin: 14px;
    }

    mwc-list-item {
      min-width: 100px;
      height: 40px;
    }

    mwc-menu-surface.rename > .wrapper,
    mwc-menu-surface.newfile > .wrapper {
      padding: 18px;
    }

    .actions {
      margin-top: 18px;
      display: flex;
      justify-content: flex-end;
    }

    .actions > * {
      margin-left: 12px;
    }
  `;
__decorate([
    e$5({ attribute: false })
], PlaygroundFileSystemControls.prototype, "anchorElement", void 0);
__decorate([
    e$5()
], PlaygroundFileSystemControls.prototype, "state", void 0);
__decorate([
    e$5()
], PlaygroundFileSystemControls.prototype, "filename", void 0);
__decorate([
    i$2('mwc-menu-surface')
], PlaygroundFileSystemControls.prototype, "_surface", void 0);
__decorate([
    i$2('.menu-list')
], PlaygroundFileSystemControls.prototype, "_menuList", void 0);
__decorate([
    i$2('.filename-input')
], PlaygroundFileSystemControls.prototype, "_filenameInput", void 0);
__decorate([
    i$2('.submit-button')
], PlaygroundFileSystemControls.prototype, "_submitButton", void 0);
PlaygroundFileSystemControls = __decorate([
    e$6('playground-file-system-controls')
], PlaygroundFileSystemControls);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * A horizontal bar of tabs for switching between playground files, with
 * optional controls for create/delete/rename.
 */
let PlaygroundTabBar = class PlaygroundTabBar extends PlaygroundConnectedElement {
    constructor() {
        super(...arguments);
        /**
         * Allow the user to add, remove, and rename files in the project's virtual
         * filesystem. Disabled by default.
         */
        this.editableFileSystem = false;
        this._activeFileName = '';
        this._activeFileIndex = 0;
        this._onProjectFilesChanged = (event) => {
            this._handleFilesChanged(event.projectLoaded);
        };
    }
    /**
     * The editor that this tab bar controls. Either the
     * `<playground-file-editor>` node itself, or its `id` in the host scope.
     */
    set editor(elementOrId) {
        if (typeof elementOrId === 'string') {
            // Defer querying the host to a rAF because if the host renders this
            // element before the one we're querying for, it might not quite exist
            // yet.
            requestAnimationFrame(() => {
                var _a;
                const root = this.getRootNode();
                this._editor =
                    (_a = root.getElementById(elementOrId)) !== null && _a !== void 0 ? _a : undefined;
            });
        }
        else {
            this._editor = elementOrId;
        }
    }
    get _visibleFiles() {
        var _a, _b;
        return ((_b = (_a = this._project) === null || _a === void 0 ? void 0 : _a.files) !== null && _b !== void 0 ? _b : []).filter(({ hidden }) => !hidden);
    }
    update(changedProperties) {
        if (changedProperties.has('_project')) {
            const oldProject = changedProperties.get('_project');
            if (oldProject) {
                oldProject.removeEventListener('filesChanged', this._onProjectFilesChanged);
            }
            if (this._project) {
                this._handleFilesChanged(true);
                this._project.addEventListener('filesChanged', this._onProjectFilesChanged);
            }
        }
        if (changedProperties.has('_activeFileName') && this._editor) {
            this._editor.filename = this._activeFileName;
            this._setNewActiveFile();
        }
        super.update(changedProperties);
    }
    render() {
        return x `
      <playground-internal-tab-bar
        @tabchange=${this._onTabchange}
        label="File selector"
      >
        ${this._visibleFiles.map(({ name, label }) => x `<playground-internal-tab
              .active=${name === this._activeFileName}
              data-filename=${name}
            >
              ${label || name}
              ${this.editableFileSystem
            ? x `<mwc-icon-button
                    aria-label="File menu"
                    class="menu-button"
                    @click=${this._onOpenMenu}
                  >
                    <!-- Source: https://material.io/resources/icons/?icon=menu&style=baseline -->
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentcolor"
                    >
                      <path
                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                      />
                    </svg>
                  </mwc-icon-button>`
            : A}
            </playground-internal-tab>`)}
      </playground-internal-tab-bar>

      ${this.editableFileSystem
            ? x `
            <mwc-icon-button
              class="add-file-button"
              aria-label="New file"
              @click=${this._onClickAddFile}
            >
              <!-- Source: https://material.io/resources/icons/?icon=add&style=baseline -->
              <svg
                fill="currentcolor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                shape-rendering="crispEdges"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </mwc-icon-button>

            <playground-file-system-controls
              .project=${this._project}
              @newFile=${this._onNewFile}
            >
            </playground-file-system-controls>
          `
            : A}
    `;
    }
    _handleFilesChanged(newProjectLoaded = false) {
        var _a;
        if (newProjectLoaded) {
            const fileToSelect = (_a = this._visibleFiles.find((file) => file.selected)) === null || _a === void 0 ? void 0 : _a.name;
            if (fileToSelect !== undefined) {
                this._activeFileName = fileToSelect;
            }
        }
        this._setNewActiveFile();
        this.requestUpdate();
    }
    _onTabchange(event) {
        const tab = event.detail.tab;
        if (!tab) {
            return;
        }
        const name = tab.dataset['filename'];
        const index = tab.index;
        if (name !== this._activeFileName) {
            this._activeFileName = name;
            this._activeFileIndex = index;
        }
    }
    _onOpenMenu(event) {
        const controls = this._fileSystemControls;
        if (!controls) {
            return;
        }
        controls.state = 'menu';
        // Figure out which file the open menu should be associated with. It's not
        // necessarily the active tab, since you can click on the menu button for a
        // tab without activating that tab.
        //
        // We're looking for a "data-filename" attribute in the event path, which
        // should be on the <playground-internal-tab>.
        //
        // Note that we can't be sure what the target of the click event will be.
        // Between MWC v0.25.1 and v0.25.2, when clicking on an <mwc-icon-button>,
        // the target changed from the <mwc-icon-button> to its internal <svg>.
        for (const el of event.composedPath()) {
            if (el instanceof HTMLElement && el.dataset['filename']) {
                controls.filename = el.dataset['filename'];
                break;
            }
        }
        controls.anchorElement = event.target;
        event.stopPropagation();
    }
    _onClickAddFile(event) {
        const controls = this._fileSystemControls;
        if (!controls) {
            return;
        }
        controls.state = 'newfile';
        controls.anchorElement = event.target;
    }
    _onNewFile(event) {
        this._activeFileName = event.detail.filename;
        // TODO(aomarks) We should focus the editor here. However,
        // CodeMirror.focus() isn't working for some reason.
    }
    /**
     * Whenever a file is created, deleted, or renamed, figure out what the best
     * new active tab should be.
     */
    _setNewActiveFile() {
        // Stay on the same filename if it's still around, even though its index
        // might have changed.
        if (this._activeFileName) {
            const index = this._visibleFiles.findIndex((file) => file.name === this._activeFileName);
            if (index >= 0) {
                this._activeFileIndex = index;
                return;
            }
        }
        // Stay on the same index, or the nearest one to the left of where we were
        // before.
        for (let i = this._activeFileIndex; i >= 0; i--) {
            const file = this._visibleFiles[i];
            if (file && !file.hidden) {
                this._activeFileName = file.name;
                return;
            }
        }
        // No visible file to display.
        this._activeFileIndex = 0;
        this._activeFileName = '';
    }
};
PlaygroundTabBar.styles = i$6 `
    :host {
      display: flex;
      font-size: var(--playground-tab-bar-font-size, 14px);
      height: var(--playground-bar-height, 40px);
      background: var(--playground-tab-bar-background, #eaeaea);
      align-items: center;
    }

    playground-internal-tab-bar {
      height: var(--playground-bar-height, 40px);
    }

    playground-internal-tab::part(button) {
      box-sizing: border-box;
      padding: 2px 24px 0 24px;
    }

    playground-internal-tab {
      color: var(--playground-tab-bar-foreground-color, #000);
    }

    playground-internal-tab[active] {
      color: var(
        --playground-tab-bar-active-color,
        var(--playground-highlight-color, #6200ee)
      );
      background: var(--playground-tab-bar-active-background, transparent);
    }

    :host([editable-file-system]) playground-internal-tab::part(button) {
      /* The 24px menu button with opacity 0 now serves as padding-right. */
      padding-right: 0;
    }

    .menu-button {
      visibility: hidden;
      --mdc-icon-button-size: 24px;
      --mdc-icon-size: 16px;
    }

    playground-internal-tab:hover > .menu-button,
    playground-internal-tab:focus-within > .menu-button {
      visibility: visible;
    }

    mwc-icon-button {
      color: var(--playground-tab-bar-foreground-color);
    }

    .add-file-button {
      margin: 0 4px;
      opacity: 70%;
      --mdc-icon-button-size: 24px;
      --mdc-icon-size: 24px;
    }

    .add-file-button:hover {
      opacity: 1;
    }
  `;
__decorate([
    e$5({ type: Boolean, attribute: 'editable-file-system', reflect: true })
], PlaygroundTabBar.prototype, "editableFileSystem", void 0);
__decorate([
    t$1()
], PlaygroundTabBar.prototype, "_activeFileName", void 0);
__decorate([
    t$1()
], PlaygroundTabBar.prototype, "_activeFileIndex", void 0);
__decorate([
    i$2('playground-file-system-controls')
], PlaygroundTabBar.prototype, "_fileSystemControls", void 0);
__decorate([
    t$1()
], PlaygroundTabBar.prototype, "_editor", void 0);
__decorate([
    e$5()
], PlaygroundTabBar.prototype, "editor", null);
PlaygroundTabBar = __decorate([
    e$6('playground-tab-bar')
], PlaygroundTabBar);

/* @license CodeMirror, copyright (c) by Marijn Haverbeke and others
Distributed under an MIT license: https://codemirror.net/LICENSE */
var e;function t(e,t,r,n,i,o){this.name=e,this.tokenType=t,this.depth=r,this.parent=n,this.startLine=i,this.startPos=o;}function r(){this.stream=null,this.line=this.startPos=0,this.string=this.startLine="",this.copyInstance=null;}e=function(){var e=navigator.userAgent,t=navigator.platform,r=/gecko\/\d/i.test(e),n=/MSIE \d/.test(e),i=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),o=/Edge\/(\d+)/.exec(e),a=n||i||o,l=a&&(n?document.documentMode||6:+(o||i)[1]),s=!o&&/WebKit\//.test(e),c=s&&/Qt\/\d+\.\d+/.test(e),u=!o&&/Chrome\/(\d+)/.exec(e),d=u&&+u[1],f=/Opera\//.test(e),h=/Apple Computer/.test(navigator.vendor),p=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),m=/PhantomJS/.test(e),g=h&&(/Mobile\/\w+/.test(e)||navigator.maxTouchPoints>2),v=/Android/.test(e),y=g||v||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),b=g||/Mac/.test(t),w=/\bCrOS\b/.test(e),k=/win/i.test(t),x=f&&e.match(/Version\/(\d*\.\d*)/);x&&(x=Number(x[1])),x&&x>=15&&(f=!1,s=!0);var C=b&&(c||f&&(null==x||x<12.11)),S=r||a&&l>=9;function T(e){return RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var L,A=function(e,t){var r=e.className,n=T(t).exec(r);if(n){var i=r.slice(n.index+n[0].length);e.className=r.slice(0,n.index)+(i?n[1]+i:"");}};function M(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild);return e}function z(e,t){return M(e).appendChild(t)}function O(e,t,r,n){var i=document.createElement(e);if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t));else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o]);return i}function _(e,t,r,n){var i=O(e,t,r,n);return i.setAttribute("role","presentation"),i}function N(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t);do{if(11==t.nodeType&&(t=t.host),t==e)return !0}while(t=t.parentNode)}function P(e){var t;try{t=e.activeElement;}catch(r){t=e.body||null;}for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function E(e,t){var r=e.className;T(t).test(r)||(e.className+=(r?" ":"")+t);}function D(e,t){for(var r=e.split(" "),n=0;n<r.length;n++)r[n]&&!T(r[n]).test(t)&&(t+=" "+r[n]);return t}L=document.createRange?function(e,t,r,n){var i=document.createRange();return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange();try{n.moveToElementText(e.parentNode);}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n};var W=function(e){e.select();};function F(e){return e.display.wrapper.ownerDocument}function I(e){return F(e).defaultView}function H(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t)}}function B(e,t,r){for(var n in t||(t={}),e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n]);return t}function $(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length);for(var o=n||0,a=i||0;;){var l=e.indexOf("\t",o);if(l<0||l>=t)return a+(t-o);a+=l-o,a+=r-a%r,o=l+1;}}g?W=function(e){e.selectionStart=0,e.selectionEnd=e.value.length;}:a&&(W=function(e){try{e.select();}catch(e){}});var R=function(){this.id=null,this.f=null,this.time=0,this.handler=H(this.onTimeout,this);};function Z(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r;return -1}R.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date);},R.prototype.set=function(e,t){this.f=t;var r=+new Date+e;(!this.id||r<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=r);};var j={toString:function(){return "CodeMirror.Pass"}},U={scroll:!1},V={origin:"*mouse"},K={origin:"+move"};function G(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length);var a=o-n;if(o==e.length||i+a>=t)return n+Math.min(a,t-i);if(i+=o-n,n=o+1,(i+=r-i%r)>=t)return n}}var q=[""];function X(e){for(;q.length<=e;)q.push(Y(q)+" ");return q[e]}function Y(e){return e[e.length-1]}function Q(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n);return r}function J(){}function ee(e,t){var r;return Object.create?r=Object.create(e):(J.prototype=e,r=new J),t&&B(t,r),r}var te=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function re(e){return /\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||te.test(e))}function ne(e,t){return t?!!(t.source.indexOf("\\w")>-1&&re(e))||t.test(e):re(e)}function ie(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return !1;return !0}var oe=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function ae(e){return e.charCodeAt(0)>=768&&oe.test(e)}function le(e,t,r){for(;(r<0?t>0:t<e.length)&&ae(e.charAt(t));)t+=r;return t}function se(e,t,r){for(var n=t>r?-1:1;;){if(t==r)return t;var i=(t+r)/2,o=n<0?Math.ceil(i):Math.floor(i);if(o==t)return e(o)?t:r;e(o)?r=o:t=o+n;}}var ce=null;function ue(e,t,r){var n;ce=null;for(var i=0;i<e.length;++i){var o=e[i];if(o.from<t&&o.to>t)return i;o.to==t&&(o.from!=o.to&&"before"==r?n=i:ce=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:ce=i);}return null!=n?n:ce}var de=function(){var e=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,t=/[stwN]/,r=/[LRr]/,n=/[Lb1n]/,i=/[1n]/;function o(e,t,r){this.level=e,this.from=t,this.to=r;}return function(a,l){var s="ltr"==l?"L":"R";if(0==a.length||"ltr"==l&&!e.test(a))return !1;for(var c,u=a.length,d=[],f=0;f<u;++f)d.push((c=a.charCodeAt(f))<=247?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(c):1424<=c&&c<=1524?"R":1536<=c&&c<=1785?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(c-1536):1774<=c&&c<=2220?"r":8192<=c&&c<=8203?"w":8204==c?"b":"L");for(var h=0,p=s;h<u;++h){var m=d[h];"m"==m?d[h]=p:p=m;}for(var g=0,v=s;g<u;++g){var y=d[g];"1"==y&&"r"==v?d[g]="n":r.test(y)&&(v=y,"r"==y&&(d[g]="R"));}for(var b=1,w=d[0];b<u-1;++b){var k=d[b];"+"==k&&"1"==w&&"1"==d[b+1]?d[b]="1":","!=k||w!=d[b+1]||"1"!=w&&"n"!=w||(d[b]=w),w=k;}for(var x=0;x<u;++x){var C=d[x];if(","==C)d[x]="N";else if("%"==C){var S=void 0;for(S=x+1;S<u&&"%"==d[S];++S);for(var T=x&&"!"==d[x-1]||S<u&&"1"==d[S]?"1":"N",L=x;L<S;++L)d[L]=T;x=S-1;}}for(var A=0,M=s;A<u;++A){var z=d[A];"L"==M&&"1"==z?d[A]="L":r.test(z)&&(M=z);}for(var O=0;O<u;++O)if(t.test(d[O])){var _=void 0;for(_=O+1;_<u&&t.test(d[_]);++_);for(var N="L"==(O?d[O-1]:s),P=N==("L"==(_<u?d[_]:s))?N?"L":"R":s,E=O;E<_;++E)d[E]=P;O=_-1;}for(var D,W=[],F=0;F<u;)if(n.test(d[F])){var I=F;for(++F;F<u&&n.test(d[F]);++F);W.push(new o(0,I,F));}else {var H=F,B=W.length,$="rtl"==l?1:0;for(++F;F<u&&"L"!=d[F];++F);for(var R=H;R<F;)if(i.test(d[R])){H<R&&(W.splice(B,0,new o(1,H,R)),B+=$);var Z=R;for(++R;R<F&&i.test(d[R]);++R);W.splice(B,0,new o(2,Z,R)),B+=$,H=R;}else ++R;H<F&&W.splice(B,0,new o(1,H,F));}return "ltr"==l&&(1==W[0].level&&(D=a.match(/^\s+/))&&(W[0].from=D[0].length,W.unshift(new o(0,0,D[0].length))),1==Y(W).level&&(D=a.match(/\s+$/))&&(Y(W).to-=D[0].length,W.push(new o(0,u-D[0].length,u)))),"rtl"==l?W.reverse():W}}();function fe(e,t){var r=e.order;return null==r&&(r=e.order=de(e.text,t)),r}var he=[],pe=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1);else if(e.attachEvent)e.attachEvent("on"+t,r);else {var n=e._handlers||(e._handlers={});n[t]=(n[t]||he).concat(r);}};function me(e,t){return e._handlers&&e._handlers[t]||he}function ge(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1);else if(e.detachEvent)e.detachEvent("on"+t,r);else {var n=e._handlers,i=n&&n[t];if(i){var o=Z(i,r);o>-1&&(n[t]=i.slice(0,o).concat(i.slice(o+1)));}}}function ve(e,t){var r=me(e,t);if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n);}function ye(e,t,r){return "string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0;}}),ve(e,r||t.type,e,t),Se(t)||t.codemirrorIgnore}function be(e){var t=e._handlers&&e._handlers.cursorActivity;if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==Z(r,t[n])&&r.push(t[n]);}function we(e,t){return me(e,t).length>0}function ke(e){e.prototype.on=function(e,t){pe(this,e,t);},e.prototype.off=function(e,t){ge(this,e,t);};}function xe(e){e.preventDefault?e.preventDefault():e.returnValue=!1;}function Ce(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;}function Se(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Te(e){xe(e),Ce(e);}function Le(e){return e.target||e.srcElement}function Ae(e){var t=e.which;return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),b&&e.ctrlKey&&1==t&&(t=3),t}var Me,ze,Oe=function(){if(a&&l<9)return !1;var e=O("div");return "draggable"in e||"dragDrop"in e}();function _e(e){if(null==Me){var t=O("span","​");z(e,O("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Me=t.offsetWidth<=1&&t.offsetHeight>2&&!(a&&l<8));}var r=Me?O("span","​"):O("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return r.setAttribute("cm-text",""),r}function Ne(e){if(null!=ze)return ze;var t=z(e,document.createTextNode("AخA")),r=L(t,0,1).getBoundingClientRect(),n=L(t,1,2).getBoundingClientRect();return M(e),!(!r||r.left==r.right)&&(ze=n.right-r.right<3)}var Pe,Ee=function(e){return e.split(/\r\n?|\n/)},De=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return !1}}:function(e){var t;try{t=e.ownerDocument.selection.createRange();}catch(e){}return !(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},We="oncopy"in(Pe=O("div"))||(Pe.setAttribute("oncopy","return;"),"function"==typeof Pe.oncopy),Fe=null,Ie={},He={};function Be(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Ie[e]=t;}function $e(e){if("string"==typeof e&&He.hasOwnProperty(e))e=He[e];else if(e&&"string"==typeof e.name&&He.hasOwnProperty(e.name)){var t=He[e.name];"string"==typeof t&&(t={name:t}),(e=ee(t,e)).name=t.name;}else {if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return $e("application/xml");if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return $e("application/json")}return "string"==typeof e?{name:e}:e||{name:"null"}}function Re(e,t){t=$e(t);var r=Ie[t.name];if(!r)return Re(e,"text/plain");var n=r(e,t);if(Ze.hasOwnProperty(t.name)){var i=Ze[t.name];for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o]);}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)n[a]=t.modeProps[a];return n}var Ze={};function je(e,t){B(t,Ze.hasOwnProperty(e)?Ze[e]:Ze[e]={});}function Ue(e,t){if(!0===t)return t;if(e.copyState)return e.copyState(t);var r={};for(var n in t){var i=t[n];i instanceof Array&&(i=i.concat([])),r[n]=i;}return r}function Ve(e,t){for(var r;e.innerMode&&(r=e.innerMode(t))&&r.mode!=e;)t=r.state,e=r.mode;return r||{mode:e,state:t}}function Ke(e,t,r){return !e.startState||e.startState(t,r)}var Ge=function(e,t,r){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=r;};function qe(e,t){if((t-=e.first)<0||t>=e.size)throw Error("There is no line "+(t+e.first)+" in the document.");for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize();if(t<o){r=i;break}t-=o;}return r.lines[t]}function Xe(e,t,r){var n=[],i=t.line;return e.iter(t.line,r.line+1,(function(e){var o=e.text;i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i;})),n}function Ye(e,t,r){var n=[];return e.iter(t,r,(function(e){n.push(e.text);})),n}function Qe(e,t){var r=t-e.height;if(r)for(var n=e;n;n=n.parent)n.height+=r;}function Je(e){if(null==e.parent)return null;for(var t=e.parent,r=Z(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize();return r+t.first}function et(e,t){var r=e.first;e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height;if(t<o){e=i;continue e}t-=o,r+=i.chunkSize();}return r}while(!e.lines);for(var a=0;a<e.lines.length;++a){var l=e.lines[a].height;if(t<l)break;t-=l;}return r+a}function tt(e,t){return t>=e.first&&t<e.first+e.size}function rt(e,t){return e.lineNumberFormatter(t+e.firstLineNumber)+""}function nt(e,t,r){if(void 0===r&&(r=null),!(this instanceof nt))return new nt(e,t,r);this.line=e,this.ch=t,this.sticky=r;}function it(e,t){return e.line-t.line||e.ch-t.ch}function ot(e,t){return e.sticky==t.sticky&&0==it(e,t)}function at(e){return nt(e.line,e.ch)}function lt(e,t){return it(e,t)<0?t:e}function st(e,t){return it(e,t)<0?e:t}function ct(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function ut(e,t){if(t.line<e.first)return nt(e.first,0);var r=e.first+e.size-1;return t.line>r?nt(r,qe(e,r).text.length):function(e,t){var r=e.ch;return null==r||r>t?nt(e.line,t):r<0?nt(e.line,0):e}(t,qe(e,t.line).text.length)}function dt(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=ut(e,t[n]);return r}Ge.prototype.eol=function(){return this.pos>=this.string.length},Ge.prototype.sol=function(){return this.pos==this.lineStart},Ge.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Ge.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Ge.prototype.eat=function(e){var t=this.string.charAt(this.pos);if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return ++this.pos,t},Ge.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},Ge.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Ge.prototype.skipToEnd=function(){this.pos=this.string.length;},Ge.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos);if(t>-1)return this.pos=t,!0},Ge.prototype.backUp=function(e){this.pos-=e;},Ge.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=$(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?$(this.string,this.lineStart,this.tabSize):0)},Ge.prototype.indentation=function(){return $(this.string,null,this.tabSize)-(this.lineStart?$(this.string,this.lineStart,this.tabSize):0)},Ge.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e);return n&&n.index>0?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e};if(i(this.string.substr(this.pos,e.length))==i(e))return !1!==t&&(this.pos+=e.length),!0},Ge.prototype.current=function(){return this.string.slice(this.start,this.pos)},Ge.prototype.hideFirstChars=function(e,t){this.lineStart+=e;try{return t()}finally{this.lineStart-=e;}},Ge.prototype.lookAhead=function(e){var t=this.lineOracle;return t&&t.lookAhead(e)},Ge.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};var ft=function(e,t){this.state=e,this.lookAhead=t;},ht=function(e,t,r,n){this.state=t,this.doc=e,this.line=r,this.maxLookAhead=n||0,this.baseTokens=null,this.baseTokenPos=1;};function pt(e,t,r,n){var i=[e.state.modeGen],o={};Ct(e,t.text,e.doc.mode,r,(function(e,t){return i.push(e,t)}),o,n);for(var a=r.state,l=function(n){r.baseTokens=i;var l=e.state.overlays[n],s=1,c=0;r.state=!0,Ct(e,t.text,l.mode,r,(function(e,t){for(var r=s;c<e;){var n=i[s];n>e&&i.splice(s,1,e,i[s+1],n),s+=2,c=Math.min(e,n);}if(t)if(l.opaque)i.splice(r,s-r,e,"overlay "+t),s=r+2;else for(;r<s;r+=2){var o=i[r+1];i[r+1]=(o?o+" ":"")+"overlay "+t;}}),o),r.state=a,r.baseTokens=null,r.baseTokenPos=1;},s=0;s<e.state.overlays.length;++s)l(s);return {styles:i,classes:o.bgClass||o.textClass?o:null}}function mt(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=gt(e,Je(t)),i=t.text.length>e.options.maxHighlightLength&&Ue(e.doc.mode,n.state),o=pt(e,t,n);i&&(n.state=i),t.stateAfter=n.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier));}return t.styles}function gt(e,t,r){var n=e.doc,i=e.display;if(!n.mode.startState)return new ht(n,!0,t);var o=function(e,t,r){for(var n,i,o=e.doc,a=r?-1:t-(e.doc.mode.innerMode?1e3:100),l=t;l>a;--l){if(l<=o.first)return o.first;var s=qe(o,l-1),c=s.stateAfter;if(c&&(!r||l+(c instanceof ft?c.lookAhead:0)<=o.modeFrontier))return l;var u=$(s.text,null,e.options.tabSize);(null==i||n>u)&&(i=l-1,n=u);}return i}(e,t,r),a=o>n.first&&qe(n,o-1).stateAfter,l=a?ht.fromSaved(n,a,o):new ht(n,Ke(n.mode),o);return n.iter(o,t,(function(r){vt(e,r.text,l);var n=l.line;r.stateAfter=n==t-1||n%5==0||n>=i.viewFrom&&n<i.viewTo?l.save():null,l.nextLine();})),r&&(n.modeFrontier=l.line),l}function vt(e,t,r,n){var i=e.doc.mode,o=new Ge(t,e.options.tabSize,r);for(o.start=o.pos=n||0,""==t&&yt(i,r.state);!o.eol();)bt(i,o,r.state),o.start=o.pos;}function yt(e,t){if(e.blankLine)return e.blankLine(t);if(e.innerMode){var r=Ve(e,t);return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function bt(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=Ve(e,r).mode);var o=e.token(t,r);if(t.pos>t.start)return o}throw Error("Mode "+e.name+" failed to advance stream.")}ht.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e);return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},ht.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var t=this.baseTokens[this.baseTokenPos+1];return {type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},ht.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--;},ht.fromSaved=function(e,t,r){return t instanceof ft?new ht(e,Ue(e.mode,t.state),r,t.lookAhead):new ht(e,Ue(e.mode,t),r)},ht.prototype.save=function(e){var t=!1!==e?Ue(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new ft(t,this.maxLookAhead):t};var wt=function(e,t,r){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=r;};function kt(e,t,r,n){var i,o,a=e.doc,l=a.mode,s=qe(a,(t=ut(a,t)).line),c=gt(e,t.line,r),u=new Ge(s.text,e.options.tabSize,c);for(n&&(o=[]);(n||u.pos<t.ch)&&!u.eol();)u.start=u.pos,i=bt(l,u,c.state),n&&o.push(new wt(u,i,Ue(a.mode,c.state)));return n?o:new wt(u,i,c.state)}function xt(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!r)break;e=e.slice(0,r.index)+e.slice(r.index+r[0].length);var n=r[1]?"bgClass":"textClass";null==t[n]?t[n]=r[2]:RegExp("(?:^|\\s)"+r[2]+"(?:$|\\s)").test(t[n])||(t[n]+=" "+r[2]);}return e}function Ct(e,t,r,n,i,o,a){var l=r.flattenSpans;null==l&&(l=e.options.flattenSpans);var s,c=0,u=null,d=new Ge(t,e.options.tabSize,n),f=e.options.addModeClass&&[null];for(""==t&&xt(yt(r,n.state),o);!d.eol();){if(d.pos>e.options.maxHighlightLength?(l=!1,a&&vt(e,t,n,d.pos),d.pos=t.length,s=null):s=xt(bt(r,d,n.state,f),o),f){var h=f[0].name;h&&(s="m-"+(s?h+" "+s:h));}if(!l||u!=s){for(;c<d.start;)i(c=Math.min(d.start,c+5e3),u);u=s;}d.start=d.pos;}for(;c<d.pos;){var p=Math.min(d.pos,c+5e3);i(p,u),c=p;}}var St=!1,Tt=!1;function Lt(e,t,r){this.marker=e,this.from=t,this.to=r;}function At(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r];if(n.marker==t)return n}}function Mt(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n]);return r}function zt(e,t){if(t.full)return null;var r=tt(e,t.from.line)&&qe(e,t.from.line).markedSpans,n=tt(e,t.to.line)&&qe(e,t.to.line).markedSpans;if(!r&&!n)return null;var i=t.from.ch,o=t.to.ch,a=0==it(t.from,t.to),l=function(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker;if(null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==a.type&&(!r||!o.marker.insertLeft)){var l=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new Lt(a,o.from,l?null:o.to));}}return n}(r,i,a),s=function(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker;if(null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==a.type&&(!r||o.marker.insertLeft)){var l=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new Lt(a,l?null:o.from-t,null==o.to?null:o.to-t));}}return n}(n,o,a),c=1==t.text.length,u=Y(t.text).length+(c?i:0);if(l)for(var d=0;d<l.length;++d){var f=l[d];if(null==f.to){var h=At(s,f.marker);h?c&&(f.to=null==h.to?null:h.to+u):f.to=i;}}if(s)for(var p=0;p<s.length;++p){var m=s[p];null!=m.to&&(m.to+=u),null==m.from?At(l,m.marker)||(m.from=u,c&&(l||(l=[])).push(m)):(m.from+=u,c&&(l||(l=[])).push(m));}l&&(l=Ot(l)),s&&s!=l&&(s=Ot(s));var g=[l];if(!c){var v,y=t.text.length-2;if(y>0&&l)for(var b=0;b<l.length;++b)null==l[b].to&&(v||(v=[])).push(new Lt(l[b].marker,null,null));for(var w=0;w<y;++w)g.push(v);g.push(s);}return g}function Ot(e){for(var t=0;t<e.length;++t){var r=e[t];null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1);}return e.length?e:null}function _t(e){var t=e.markedSpans;if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e);e.markedSpans=null;}}function Nt(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e);e.markedSpans=t;}}function Pt(e){return e.inclusiveLeft?-1:0}function Et(e){return e.inclusiveRight?1:0}function Dt(e,t){var r=e.lines.length-t.lines.length;if(0!=r)return r;var n=e.find(),i=t.find(),o=it(n.from,i.from)||Pt(e)-Pt(t);return o?-o:it(n.to,i.to)||Et(e)-Et(t)||t.id-e.id}function Wt(e,t){var r,n=Tt&&e.markedSpans;if(n)for(var i=void 0,o=0;o<n.length;++o)(i=n[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!r||Dt(r,i.marker)<0)&&(r=i.marker);return r}function Ft(e){return Wt(e,!0)}function It(e){return Wt(e,!1)}function Ht(e,t){var r,n=Tt&&e.markedSpans;if(n)for(var i=0;i<n.length;++i){var o=n[i];o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!r||Dt(r,o.marker)<0)&&(r=o.marker);}return r}function Bt(e,t,r,n,i){var o=qe(e,t),a=Tt&&o.markedSpans;if(a)for(var l=0;l<a.length;++l){var s=a[l];if(s.marker.collapsed){var c=s.marker.find(0),u=it(c.from,r)||Pt(s.marker)-Pt(i),d=it(c.to,n)||Et(s.marker)-Et(i);if(!(u>=0&&d<=0||u<=0&&d>=0)&&(u<=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?it(c.to,r)>=0:it(c.to,r)>0)||u>=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?it(c.from,n)<=0:it(c.from,n)<0)))return !0}}}function $t(e){for(var t;t=Ft(e);)e=t.find(-1,!0).line;return e}function Rt(e,t){var r=qe(e,t),n=$t(r);return r==n?t:Je(n)}function Zt(e,t){if(t>e.lastLine())return t;var r,n=qe(e,t);if(!jt(e,n))return t;for(;r=It(n);)n=r.find(1,!0).line;return Je(n)+1}function jt(e,t){var r=Tt&&t.markedSpans;if(r)for(var n=void 0,i=0;i<r.length;++i)if((n=r[i]).marker.collapsed){if(null==n.from)return !0;if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&Ut(e,t,n))return !0}}function Ut(e,t,r){if(null==r.to){var n=r.marker.find(1,!0);return Ut(e,n.line,At(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return !0;for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&Ut(e,t,i))return !0}function Vt(e){for(var t=0,r=(e=$t(e)).parent,n=0;n<r.lines.length;++n){var i=r.lines[n];if(i==e)break;t+=i.height;}for(var o=r.parent;o;o=(r=o).parent)for(var a=0;a<o.children.length;++a){var l=o.children[a];if(l==r)break;t+=l.height;}return t}function Kt(e){if(0==e.height)return 0;for(var t,r=e.text.length,n=e;t=Ft(n);){var i=t.find(0,!0);n=i.from.line,r+=i.from.ch-i.to.ch;}for(n=e;t=It(n);){var o=t.find(0,!0);r-=n.text.length-o.from.ch,r+=(n=o.to.line).text.length-o.to.ch;}return r}function Gt(e){var t=e.display,r=e.doc;t.maxLine=qe(r,r.first),t.maxLineLength=Kt(t.maxLine),t.maxLineChanged=!0,r.iter((function(e){var r=Kt(e);r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e);}));}var qt=function(e,t,r){this.text=e,Nt(this,t),this.height=r?r(this):1;};function Xt(e){e.parent=null,_t(e);}qt.prototype.lineNo=function(){return Je(this)},ke(qt);var Yt={},Qt={};function Jt(e,t){if(!e||/^\s*$/.test(e))return null;var r=t.addModeClass?Qt:Yt;return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function er(e,t){var r=_("span",null,null,s?"padding-right: .1px":null),n={pre:_("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};t.measure={};for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o=i?t.rest[i-1]:t.line,a=void 0;n.pos=0,n.addToken=rr,Ne(e.display.measure)&&(a=fe(o,e.doc.direction))&&(n.addToken=nr(n.addToken,a)),n.map=[],or(o,n,mt(e,o,t!=e.display.externalMeasured&&Je(o))),o.styleClasses&&(o.styleClasses.bgClass&&(n.bgClass=D(o.styleClasses.bgClass,n.bgClass||"")),o.styleClasses.textClass&&(n.textClass=D(o.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(_e(e.display.measure))),0==i?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}));}if(s){var l=n.content.lastChild;(/\bcm-tab\b/.test(l.className)||l.querySelector&&l.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack");}return ve(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=D(n.pre.className,n.textClass||"")),n}function tr(e){var t=O("span","•","cm-invalidchar");return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function rr(e,t,r,n,i,o,s){if(t){var c,u=e.splitSpaces?function(e,t){if(e.length>1&&!/  /.test(e))return e;for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i);" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o;}return n}(t,e.trailingSpace):t,d=e.cm.state.specialChars,f=!1;if(d.test(t)){c=document.createDocumentFragment();for(var h=0;;){d.lastIndex=h;var p=d.exec(t),m=p?p.index-h:t.length-h;if(m){var g=document.createTextNode(u.slice(h,h+m));a&&l<9?c.appendChild(O("span",[g])):c.appendChild(g),e.map.push(e.pos,e.pos+m,g),e.col+=m,e.pos+=m;}if(!p)break;h+=m+1;var v=void 0;if("\t"==p[0]){var y=e.cm.options.tabSize,b=y-e.col%y;(v=c.appendChild(O("span",X(b),"cm-tab"))).setAttribute("role","presentation"),v.setAttribute("cm-text","\t"),e.col+=b;}else "\r"==p[0]||"\n"==p[0]?((v=c.appendChild(O("span","\r"==p[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",p[0]),e.col+=1):((v=e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text",p[0]),a&&l<9?c.appendChild(O("span",[v])):c.appendChild(v),e.col+=1);e.map.push(e.pos,e.pos+1,v),e.pos++;}}else e.col+=t.length,c=document.createTextNode(u),e.map.push(e.pos,e.pos+t.length,c),a&&l<9&&(f=!0),e.pos+=t.length;if(e.trailingSpace=32==u.charCodeAt(t.length-1),r||n||i||f||o||s){var w=r||"";n&&(w+=n),i&&(w+=i);var k=O("span",[c],w,o);if(s)for(var x in s)s.hasOwnProperty(x)&&"style"!=x&&"class"!=x&&k.setAttribute(x,s[x]);return e.content.appendChild(k)}e.content.appendChild(c);}}function nr(e,t){return function(r,n,i,o,a,l,s){i=i?i+" cm-force-border":"cm-force-border";for(var c=r.pos,u=c+n.length;;){for(var d=void 0,f=0;f<t.length&&!((d=t[f]).to>c&&d.from<=c);f++);if(d.to>=u)return e(r,n,i,o,a,l,s);e(r,n.slice(0,d.to-c),i,o,null,l,s),o=null,n=n.slice(d.to-c),c=d.to;}}}function ir(e,t,r,n){var i=!n&&r.widgetNode;i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1;}function or(e,t,r){var n=e.markedSpans,i=e.text,o=0;if(n)for(var a,l,s,c,u,d,f,h=i.length,p=0,m=1,g="",v=0;;){if(v==p){s=c=u=l="",f=null,d=null,v=1/0;for(var y=[],b=void 0,w=0;w<n.length;++w){var k=n[w],x=k.marker;if("bookmark"==x.type&&k.from==p&&x.widgetNode)y.push(x);else if(k.from<=p&&(null==k.to||k.to>p||x.collapsed&&k.to==p&&k.from==p)){if(null!=k.to&&k.to!=p&&v>k.to&&(v=k.to,c=""),x.className&&(s+=" "+x.className),x.css&&(l=(l?l+";":"")+x.css),x.startStyle&&k.from==p&&(u+=" "+x.startStyle),x.endStyle&&k.to==v&&(b||(b=[])).push(x.endStyle,k.to),x.title&&((f||(f={})).title=x.title),x.attributes)for(var C in x.attributes)(f||(f={}))[C]=x.attributes[C];x.collapsed&&(!d||Dt(d.marker,x)<0)&&(d=k);}else k.from>p&&v>k.from&&(v=k.from);}if(b)for(var S=0;S<b.length;S+=2)b[S+1]==v&&(c+=" "+b[S]);if(!d||d.from==p)for(var T=0;T<y.length;++T)ir(t,0,y[T]);if(d&&(d.from||0)==p){if(ir(t,(null==d.to?h+1:d.to)-p,d.marker,null==d.from),null==d.to)return;d.to==p&&(d=!1);}}if(p>=h)break;for(var L=Math.min(h,v);;){if(g){var A=p+g.length;if(!d){var M=A>L?g.slice(0,L-p):g;t.addToken(t,M,a?a+s:s,u,p+M.length==v?c:"",l,f);}if(A>=L){g=g.slice(L-p),p=L;break}p=A,u="";}g=i.slice(o,o=r[m++]),a=Jt(r[m++],t.cm.options);}}else for(var z=1;z<r.length;z+=2)t.addToken(t,i.slice(o,o=r[z]),Jt(r[z+1],t.cm.options));}function ar(e,t,r){this.line=t,this.rest=function(e){for(var t,r;t=It(e);)e=t.find(1,!0).line,(r||(r=[])).push(e);return r}(t),this.size=this.rest?Je(Y(this.rest))-r+1:1,this.node=this.text=null,this.hidden=jt(e,t);}function lr(e,t,r){for(var n,i=[],o=t;o<r;o=n){var a=new ar(e.doc,qe(e.doc,o),o);n=o+a.size,i.push(a);}return i}var sr=null,cr=null;function ur(e,t){var r=me(e,t);if(r.length){var n,i=Array.prototype.slice.call(arguments,2);sr?n=sr.delayedCallbacks:cr?n=cr:(n=cr=[],setTimeout(dr,0));for(var o=function(e){n.push((function(){return r[e].apply(null,i)}));},a=0;a<r.length;++a)o(a);}}function dr(){var e=cr;cr=null;for(var t=0;t<e.length;++t)e[t]();}function fr(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i];"text"==o?mr(e,t):"gutter"==o?vr(e,t,r,n):"class"==o?gr(e,t):"widget"==o&&yr(e,t,n);}t.changes=null;}function hr(e){return e.node==e.text&&(e.node=O("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),a&&l<8&&(e.node.style.zIndex=2)),e.node}function pr(e,t){var r=e.display.externalMeasured;return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):er(e,t)}function mr(e,t){var r=t.text.className,n=pr(e,t);t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,gr(e,t)):r&&(t.text.className=r);}function gr(e,t){!function(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass;if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null);else if(r){var n=hr(t);t.background=n.insertBefore(O("div",null,r),n.firstChild),e.display.input.setUneditable(t.background);}}(e,t),t.line.wrapClass?hr(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="");var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass;t.text.className=r||"";}function vr(e,t,r,n){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=hr(t);t.gutterBackground=O("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px; width: "+n.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),i.insertBefore(t.gutterBackground,t.text);}var o=t.line.gutterMarkers;if(e.options.lineNumbers||o){var a=hr(t),l=t.gutter=O("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px");if(l.setAttribute("aria-hidden","true"),e.display.input.setUneditable(l),a.insertBefore(l,t.text),t.line.gutterClass&&(l.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=l.appendChild(O("div",rt(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+n.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var s=0;s<e.display.gutterSpecs.length;++s){var c=e.display.gutterSpecs[s].className,u=o.hasOwnProperty(c)&&o[c];u&&l.appendChild(O("div",[u],"CodeMirror-gutter-elt","left: "+n.gutterLeft[c]+"px; width: "+n.gutterWidth[c]+"px"));}}}function yr(e,t,r){t.alignable&&(t.alignable=null);for(var n=T("CodeMirror-linewidget"),i=t.node.firstChild,o=void 0;i;i=o)o=i.nextSibling,n.test(i.className)&&t.node.removeChild(i);wr(e,t,r);}function br(e,t,r,n){var i=pr(e,t);return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),gr(e,t),vr(e,t,r,n),wr(e,t,n),t.node}function wr(e,t,r){if(kr(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)kr(e,t.rest[n],t,r,!1);}function kr(e,t,r,n,i){if(t.widgets)for(var o=hr(r),a=0,l=t.widgets;a<l.length;++a){var s=l[a],c=O("div",[s.node],"CodeMirror-linewidget"+(s.className?" "+s.className:""));s.handleMouseEvents||c.setAttribute("cm-ignore-events","true"),xr(s,c,r,n),e.display.input.setUneditable(c),i&&s.above?o.insertBefore(c,r.gutter||r.text):o.appendChild(c),ur(s,"redraw");}}function xr(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t);var i=n.wrapperWidth;t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px";}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"));}function Cr(e){if(null!=e.height)return e.height;var t=e.doc.cm;if(!t)return 0;if(!N(document.body,e.node)){var r="position: relative;";e.coverGutter&&(r+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(r+="width: "+t.display.wrapper.clientWidth+"px;"),z(t.display.measure,O("div",[e.node],null,r));}return e.height=e.node.parentNode.offsetHeight}function Sr(e,t){for(var r=Le(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return !0}function Tr(e){return e.lineSpace.offsetTop}function Lr(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Ar(e){if(e.cachedPaddingH)return e.cachedPaddingH;var t=z(e.measure,O("pre","x","CodeMirror-line-like")),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)};return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n}function Mr(e){return 50-e.display.nativeBarWidth}function zr(e){return e.display.scroller.clientWidth-Mr(e)-e.display.barWidth}function Or(e){return e.display.scroller.clientHeight-Mr(e)-e.display.barHeight}function _r(e,t,r){if(e.line==t)return {map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return {map:e.measure.maps[n],cache:e.measure.caches[n]};for(var i=0;i<e.rest.length;i++)if(Je(e.rest[i])>r)return {map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}}function Nr(e,t,r,n){return Dr(e,Er(e,t),r,n)}function Pr(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[hn(e,t)];var r=e.display.externalMeasured;return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function Er(e,t){var r=Je(t),n=Pr(e,r);n&&!n.text?n=null:n&&n.changes&&(fr(e,n,r,sn(e)),e.curOp.forceUpdate=!0),n||(n=function(e,t){var r=Je(t=$t(t)),n=e.display.externalMeasured=new ar(e.doc,t,r);n.lineN=r;var i=n.built=er(e,n);return n.text=i.pre,z(e.display.lineMeasure,i.pre),n}(e,t));var i=_r(n,t,r);return {line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Dr(e,t,r,n,i){t.before&&(r=-1);var o,s=r+(n||"");return t.cache.hasOwnProperty(s)?o=t.cache[s]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(function(e,t,r){var n=e.options.lineWrapping,i=n&&zr(e);if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[];if(n){t.measure.width=i;for(var a=t.text.firstChild.getClientRects(),l=0;l<a.length-1;l++){var s=a[l],c=a[l+1];Math.abs(s.bottom-c.bottom)>2&&o.push((s.bottom+c.top)/2-r.top);}}o.push(r.bottom-r.top);}}(e,t.view,t.rect),t.hasHeights=!0),o=function(e,t,r,n){var i,o=Ir(t.map,r,n),s=o.node,c=o.start,u=o.end,d=o.collapse;if(3==s.nodeType){for(var f=0;f<4;f++){for(;c&&ae(t.line.text.charAt(o.coverStart+c));)--c;for(;o.coverStart+u<o.coverEnd&&ae(t.line.text.charAt(o.coverStart+u));)++u;if((i=a&&l<9&&0==c&&u==o.coverEnd-o.coverStart?s.parentNode.getBoundingClientRect():Hr(L(s,c,u).getClientRects(),n)).left||i.right||0==c)break;u=c,c-=1,d="right";}a&&l<11&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=Fe)return Fe;var t=z(e,O("span","x")),r=t.getBoundingClientRect(),n=L(t,0,1).getBoundingClientRect();return Fe=Math.abs(r.left-n.left)>1}(e))return t;var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI;return {left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}(e.display.measure,i));}else {var h;c>0&&(d=n="right"),i=e.options.lineWrapping&&(h=s.getClientRects()).length>1?h["right"==n?h.length-1:0]:s.getBoundingClientRect();}if(a&&l<9&&!c&&(!i||!i.left&&!i.right)){var p=s.parentNode.getClientRects()[0];i=p?{left:p.left,right:p.left+ln(e.display),top:p.top,bottom:p.bottom}:Fr;}for(var m=i.top-t.rect.top,g=i.bottom-t.rect.top,v=(m+g)/2,y=t.view.measure.heights,b=0;b<y.length-1&&!(v<y[b]);b++);var w=b?y[b-1]:0,k=y[b],x={left:("right"==d?i.right:i.left)-t.rect.left,right:("left"==d?i.left:i.right)-t.rect.left,top:w,bottom:k};return i.left||i.right||(x.bogus=!0),e.options.singleCursorHeightPerLine||(x.rtop=m,x.rbottom=g),x}(e,t,r,n),o.bogus||(t.cache[s]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var Wr,Fr={left:0,right:0,top:0,bottom:0};function Ir(e,t,r){for(var n,i,o,a,l,s,c=0;c<e.length;c+=3)if(l=e[c],s=e[c+1],t<l?(i=0,o=1,a="left"):t<s?o=1+(i=t-l):(c==e.length-3||t==s&&e[c+3]>t)&&(i=(o=s-l)-1,t>=s&&(a="right")),null!=i){if(n=e[c+2],l==s&&r==(n.insertLeft?"left":"right")&&(a=r),"left"==r&&0==i)for(;c&&e[c-2]==e[c-3]&&e[c-1].insertLeft;)n=e[2+(c-=3)],a="left";if("right"==r&&i==s-l)for(;c<e.length-3&&e[c+3]==e[c+4]&&!e[c+5].insertLeft;)n=e[(c+=3)+2],a="right";break}return {node:n,start:i,end:o,collapse:a,coverStart:l,coverEnd:s}}function Hr(e,t){var r=Fr;if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;i>=0&&(r=e[i]).left==r.right;i--);return r}function Br(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={};}function $r(e){e.display.externalMeasure=null,M(e.display.lineMeasure);for(var t=0;t<e.display.view.length;t++)Br(e.display.view[t]);}function Rr(e){$r(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null;}function Zr(e){return u&&v?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function jr(e){return u&&v?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function Ur(e){var t=$t(e).widgets,r=0;if(t)for(var n=0;n<t.length;++n)t[n].above&&(r+=Cr(t[n]));return r}function Vr(e,t,r,n,i){if(!i){var o=Ur(t);r.top+=o,r.bottom+=o;}if("line"==n)return r;n||(n="local");var a=Vt(t);if("local"==n?a+=Tr(e.display):a-=e.display.viewOffset,"page"==n||"window"==n){var l=e.display.lineSpace.getBoundingClientRect();a+=l.top+("window"==n?0:jr(F(e)));var s=l.left+("window"==n?0:Zr(F(e)));r.left+=s,r.right+=s;}return r.top+=a,r.bottom+=a,r}function Kr(e,t,r){if("div"==r)return t;var n=t.left,i=t.top;if("page"==r)n-=Zr(F(e)),i-=jr(F(e));else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect();n+=o.left,i+=o.top;}var a=e.display.lineSpace.getBoundingClientRect();return {left:n-a.left,top:i-a.top}}function Gr(e,t,r,n,i){return n||(n=qe(e.doc,t.line)),Vr(e,n,Nr(e,n,t.ch,i),r)}function qr(e,t,r,n,i,o){function a(t,a){var l=Dr(e,i,t,a?"right":"left",o);return a?l.left=l.right:l.right=l.left,Vr(e,n,l,r)}n=n||qe(e.doc,t.line),i||(i=Er(e,n));var l=fe(n,e.doc.direction),s=t.ch,c=t.sticky;if(s>=n.text.length?(s=n.text.length,c="before"):s<=0&&(s=0,c="after"),!l)return a("before"==c?s-1:s,"before"==c);function u(e,t,r){return a(r?e-1:e,1==l[t].level!=r)}var d=ue(l,s,c),f=ce,h=u(s,d,"before"==c);return null!=f&&(h.other=u(s,f,"before"!=c)),h}function Xr(e,t){var r=0;t=ut(e.doc,t),e.options.lineWrapping||(r=ln(e.display)*t.ch);var n=qe(e.doc,t.line),i=Vt(n)+Tr(e.display);return {left:r,right:r,top:i,bottom:i+n.height}}function Yr(e,t,r,n,i){var o=nt(e,t,r);return o.xRel=i,n&&(o.outside=n),o}function Qr(e,t,r){var n=e.doc;if((r+=e.display.viewOffset)<0)return Yr(n.first,0,null,-1,-1);var i=et(n,r),o=n.first+n.size-1;if(i>o)return Yr(n.first+n.size-1,qe(n,o).text.length,null,1,1);t<0&&(t=0);for(var a=qe(n,i);;){var l=rn(e,a,i,t,r),s=Ht(a,l.ch+(l.xRel>0||l.outside>0?1:0));if(!s)return l;var c=s.find(1);if(c.line==i)return c;a=qe(n,i=c.line);}}function Jr(e,t,r,n){n-=Ur(t);var i=t.text.length,o=se((function(t){return Dr(e,r,t-1).bottom<=n}),i,0);return {begin:o,end:i=se((function(t){return Dr(e,r,t).top>n}),o,i)}}function en(e,t,r,n){return r||(r=Er(e,t)),Jr(e,t,r,Vr(e,t,Dr(e,r,n),"line").top)}function tn(e,t,r,n){return !(e.bottom<=r)&&(e.top>r||(n?e.left:e.right)>t)}function rn(e,t,r,n,i){i-=Vt(t);var o=Er(e,t),a=Ur(t),l=0,s=t.text.length,c=!0,u=fe(t,e.doc.direction);if(u){var d=(e.options.lineWrapping?on:nn)(e,t,r,o,u,n,i);l=(c=1!=d.level)?d.from:d.to-1,s=c?d.to:d.from-1;}var f,h,p=null,m=null,g=se((function(t){var r=Dr(e,o,t);return r.top+=a,r.bottom+=a,!!tn(r,n,i,!1)&&(r.top<=i&&r.left<=n&&(p=t,m=r),!0)}),l,s),v=!1;if(m){var y=n-m.left<m.right-n,b=y==c;g=p+(b?0:1),h=b?"after":"before",f=y?m.left:m.right;}else {c||g!=s&&g!=l||g++,h=0==g?"after":g==t.text.length?"before":Dr(e,o,g-(c?1:0)).bottom+a<=i==c?"after":"before";var w=qr(e,nt(r,g,h),"line",t,o);f=w.left,v=i<w.top?-1:i>=w.bottom?1:0;}return Yr(r,g=le(t.text,g,1),h,v,n-f)}function nn(e,t,r,n,i,o,a){var l=se((function(l){var s=i[l],c=1!=s.level;return tn(qr(e,nt(r,c?s.to:s.from,c?"before":"after"),"line",t,n),o,a,!0)}),0,i.length-1),s=i[l];if(l>0){var c=1!=s.level,u=qr(e,nt(r,c?s.from:s.to,c?"after":"before"),"line",t,n);tn(u,o,a,!0)&&u.top>a&&(s=i[l-1]);}return s}function on(e,t,r,n,i,o,a){var l=Jr(e,t,n,a),s=l.begin,c=l.end;/\s/.test(t.text.charAt(c-1))&&c--;for(var u=null,d=null,f=0;f<i.length;f++){var h=i[f];if(!(h.from>=c||h.to<=s)){var p=Dr(e,n,1!=h.level?Math.min(c,h.to)-1:Math.max(s,h.from)).right,m=p<o?o-p+1e9:p-o;(!u||d>m)&&(u=h,d=m);}}return u||(u=i[i.length-1]),u.from<s&&(u={from:s,to:u.to,level:u.level}),u.to>c&&(u={from:u.from,to:c,level:u.level}),u}function an(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight;if(null==Wr){Wr=O("pre",null,"CodeMirror-line-like");for(var t=0;t<49;++t)Wr.appendChild(document.createTextNode("x")),Wr.appendChild(O("br"));Wr.appendChild(document.createTextNode("x"));}z(e.measure,Wr);var r=Wr.offsetHeight/50;return r>3&&(e.cachedTextHeight=r),M(e.measure),r||1}function ln(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth;var t=O("span","xxxxxxxxxx"),r=O("pre",[t],"CodeMirror-line-like");z(e.measure,r);var n=t.getBoundingClientRect(),i=(n.right-n.left)/10;return i>2&&(e.cachedCharWidth=i),i||10}function sn(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a){var l=e.display.gutterSpecs[a].className;r[l]=o.offsetLeft+o.clientLeft+i,n[l]=o.clientWidth;}return {fixedPos:cn(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function cn(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function un(e){var t=an(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/ln(e.display)-3);return function(i){if(jt(e.doc,i))return 0;var o=0;if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height);return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function dn(e){var t=e.doc,r=un(e);t.iter((function(e){var t=r(e);t!=e.height&&Qe(e,t);}));}function fn(e,t,r,n){var i=e.display;if(!r&&"true"==Le(t).getAttribute("cm-not-content"))return null;var o,a,l=i.lineSpace.getBoundingClientRect();try{o=t.clientX-l.left,a=t.clientY-l.top;}catch(e){return null}var s,c=Qr(e,o,a);if(n&&c.xRel>0&&(s=qe(e.doc,c.line).text).length==c.ch){var u=$(s,s.length,e.options.tabSize)-s.length;c=nt(c.line,Math.max(0,Math.round((o-Ar(e.display).left)/ln(e.display))-u));}return c}function hn(e,t){if(t>=e.display.viewTo)return null;if((t-=e.display.viewFrom)<0)return null;for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function pn(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0);var i=e.display;if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)Tt&&Rt(e.doc,t)<i.viewTo&&gn(e);else if(r<=i.viewFrom)Tt&&Zt(e.doc,r+n)>i.viewFrom?gn(e):(i.viewFrom+=n,i.viewTo+=n);else if(t<=i.viewFrom&&r>=i.viewTo)gn(e);else if(t<=i.viewFrom){var o=vn(e,r,r+n,1);o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):gn(e);}else if(r>=i.viewTo){var a=vn(e,t,t,-1);a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):gn(e);}else {var l=vn(e,t,t,-1),s=vn(e,r,r+n,1);l&&s?(i.view=i.view.slice(0,l.index).concat(lr(e,l.lineN,s.lineN)).concat(i.view.slice(s.index)),i.viewTo+=n):gn(e);}var c=i.externalMeasured;c&&(r<c.lineN?c.lineN+=n:t<c.lineN+c.size&&(i.externalMeasured=null));}function mn(e,t,r){e.curOp.viewChanged=!0;var n=e.display,i=e.display.externalMeasured;if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[hn(e,t)];if(null!=o.node){var a=o.changes||(o.changes=[]);-1==Z(a,r)&&a.push(r);}}}function gn(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0;}function vn(e,t,r,n){var i,o=hn(e,t),a=e.display.view;if(!Tt||r==e.doc.first+e.doc.size)return {index:o,lineN:r};for(var l=e.display.viewFrom,s=0;s<o;s++)l+=a[s].size;if(l!=t){if(n>0){if(o==a.length-1)return null;i=l+a[o].size-t,o++;}else i=l-t;t+=i,r+=i;}for(;Rt(e.doc,r)!=r;){if(o==(n<0?0:a.length-1))return null;r+=n*a[o-(n<0?1:0)].size,o+=n;}return {index:o,lineN:r}}function yn(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n];i.hidden||i.node&&!i.changes||++r;}return r}function bn(e){e.display.input.showSelection(e.display.input.prepareSelection());}function wn(e,t){void 0===t&&(t=!0);var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),a=e.options.$customCursor;a&&(t=!0);for(var l=0;l<r.sel.ranges.length;l++)if(t||l!=r.sel.primIndex){var s=r.sel.ranges[l];if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var c=s.empty();if(a){var u=a(e,s);u&&kn(e,u,i);}else (c||e.options.showCursorWhenSelecting)&&kn(e,s.head,i);c||Cn(e,s,o);}}return n}function kn(e,t,r){var n=qr(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(O("div"," ","CodeMirror-cursor"));if(i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var o=Gr(e,t,"div",null,null),a=o.right-o.left;i.style.width=(a>0?a:e.defaultCharWidth())+"px";}if(n.other){var l=r.appendChild(O("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));l.style.display="",l.style.left=n.other.left+"px",l.style.top=n.other.top+"px",l.style.height=.85*(n.other.bottom-n.other.top)+"px";}}function xn(e,t){return e.top-t.top||e.left-t.left}function Cn(e,t,r){var n=e.display,i=e.doc,o=document.createDocumentFragment(),a=Ar(e.display),l=a.left,s=Math.max(n.sizerWidth,zr(e)-n.sizer.offsetLeft)-a.right,c="ltr"==i.direction;function u(e,t,r,n){t<0&&(t=0),t=Math.round(t),n=Math.round(n),o.appendChild(O("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?s-e:r)+"px;\n                             height: "+(n-t)+"px"));}function d(t,r,n){var o,a,d=qe(i,t),f=d.text.length;function h(r,n){return Gr(e,nt(t,r),"div",d,n)}function p(t,r,n){var i=en(e,d,null,t),o="ltr"==r==("after"==n)?"left":"right";return h("after"==n?i.begin:i.end-(/\s/.test(d.text.charAt(i.end-1))?2:1),o)[o]}var m=fe(d,i.direction);return function(e,t,r,n){if(!e)return n(t,r,"ltr",0);for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<r&&a.to>t||t==r&&a.to==t)&&(n(Math.max(a.from,t),Math.min(a.to,r),1==a.level?"rtl":"ltr",o),i=!0);}i||n(t,r,"ltr");}(m,r||0,null==n?f:n,(function(e,t,i,d){var g="ltr"==i,v=h(e,g?"left":"right"),y=h(t-1,g?"right":"left"),b=null==r&&0==e,w=null==n&&t==f,k=0==d,x=!m||d==m.length-1;if(y.top-v.top<=3){var C=(c?w:b)&&x,S=(c?b:w)&&k?l:(g?v:y).left,T=C?s:(g?y:v).right;u(S,v.top,T-S,v.bottom);}else {var L,A,M,z;g?(L=c&&b&&k?l:v.left,A=c?s:p(e,i,"before"),M=c?l:p(t,i,"after"),z=c&&w&&x?s:y.right):(L=c?p(e,i,"before"):l,A=!c&&b&&k?s:v.right,M=!c&&w&&x?l:y.left,z=c?p(t,i,"after"):s),u(L,v.top,A-L,v.bottom),v.bottom<y.top&&u(l,v.bottom,null,y.top),u(M,y.top,z-M,y.bottom);}(!o||xn(v,o)<0)&&(o=v),xn(y,o)<0&&(o=y),(!a||xn(v,a)<0)&&(a=v),xn(y,a)<0&&(a=y);})),{start:o,end:a}}var f=t.from(),h=t.to();if(f.line==h.line)d(f.line,f.ch,h.ch);else {var p=qe(i,f.line),m=qe(i,h.line),g=$t(p)==$t(m),v=d(f.line,f.ch,g?p.text.length+1:null).end,y=d(h.line,g?0:null,h.ch).start;g&&(v.top<y.top-2?(u(v.right,v.top,null,v.bottom),u(l,y.top,y.left,y.bottom)):u(v.right,v.top,y.left-v.right,v.bottom)),v.bottom<y.top&&u(l,v.bottom,null,y.top);}r.appendChild(o);}function Sn(e){if(e.state.focused){var t=e.display;clearInterval(t.blinker);var r=!0;t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval((function(){e.hasFocus()||Mn(e),t.cursorDiv.style.visibility=(r=!r)?"":"hidden";}),e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden");}}function Tn(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||An(e));}function Ln(e){e.state.delayingBlurEvent=!0,setTimeout((function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Mn(e));}),100);}function An(e,t){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(ve(e,"focus",e,t),e.state.focused=!0,E(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),s&&setTimeout((function(){return e.display.input.reset(!0)}),20)),e.display.input.receivedFocus()),Sn(e));}function Mn(e,t){e.state.delayingBlurEvent||(e.state.focused&&(ve(e,"blur",e,t),e.state.focused=!1,A(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout((function(){e.state.focused||(e.display.shift=!1);}),150));}function zn(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=Math.max(0,t.scroller.getBoundingClientRect().top),i=t.lineDiv.getBoundingClientRect().top,o=0,s=0;s<t.view.length;s++){var c=t.view[s],u=e.options.lineWrapping,d=void 0,f=0;if(!c.hidden){if(i+=c.line.height,a&&l<8){var h=c.node.offsetTop+c.node.offsetHeight;d=h-r,r=h;}else {var p=c.node.getBoundingClientRect();d=p.bottom-p.top,!u&&c.text.firstChild&&(f=c.text.firstChild.getBoundingClientRect().right-p.left-1);}var m=c.line.height-d;if((m>.005||m<-.005)&&(i<n&&(o-=m),Qe(c.line,d),On(c.line),c.rest))for(var g=0;g<c.rest.length;g++)On(c.rest[g]);if(f>e.display.sizerWidth){var v=Math.ceil(f/ln(e.display));v>e.display.maxLineLength&&(e.display.maxLineLength=v,e.display.maxLine=c.line,e.display.maxLineChanged=!0);}}}Math.abs(o)>2&&(t.scroller.scrollTop+=o);}function On(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var r=e.widgets[t],n=r.node.parentNode;n&&(r.height=n.offsetHeight);}}function _n(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop;n=Math.floor(n-Tr(e));var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=et(t,n),a=et(t,i);if(r&&r.ensure){var l=r.ensure.from.line,s=r.ensure.to.line;l<o?(o=l,a=et(t,Vt(qe(t,l))+e.wrapper.clientHeight)):Math.min(s,t.lastLine())>=a&&(o=et(t,Vt(qe(t,s))-e.wrapper.clientHeight),a=s);}return {from:o,to:Math.max(a,o+1)}}function Nn(e,t){var r=e.display,n=an(e.display);t.top<0&&(t.top=0);var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=Or(e),a={};t.bottom-t.top>o&&(t.bottom=t.top+o);var l=e.doc.height+Lr(r),s=t.top<n,c=t.bottom>l-n;if(t.top<i)a.scrollTop=s?0:t.top;else if(t.bottom>i+o){var u=Math.min(t.top,(c?l:t.bottom)-o);u!=i&&(a.scrollTop=u);}var d=e.options.fixedGutter?0:r.gutters.offsetWidth,f=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft-d,h=zr(e)-r.gutters.offsetWidth,p=t.right-t.left>h;return p&&(t.right=t.left+h),t.left<10?a.scrollLeft=0:t.left<f?a.scrollLeft=Math.max(0,t.left+d-(p?0:10)):t.right>h+f-3&&(a.scrollLeft=t.right+(p?0:10)-h),a}function Pn(e,t){null!=t&&(Wn(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t);}function En(e){Wn(e);var t=e.getCursor();e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin};}function Dn(e,t,r){null==t&&null==r||Wn(e),null!=t&&(e.curOp.scrollLeft=t),null!=r&&(e.curOp.scrollTop=r);}function Wn(e){var t=e.curOp.scrollToPos;t&&(e.curOp.scrollToPos=null,Fn(e,Xr(e,t.from),Xr(e,t.to),t.margin));}function Fn(e,t,r,n){var i=Nn(e,{left:Math.min(t.left,r.left),top:Math.min(t.top,r.top)-n,right:Math.max(t.right,r.right),bottom:Math.max(t.bottom,r.bottom)+n});Dn(e,i.scrollLeft,i.scrollTop);}function In(e,t){Math.abs(e.doc.scrollTop-t)<2||(r||fi(e,{top:t}),Hn(e,t,!0),r&&fi(e),ai(e,100));}function Hn(e,t,r){t=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t)),(e.display.scroller.scrollTop!=t||r)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t));}function Bn(e,t,r,n){t=Math.max(0,Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!n||(e.doc.scrollLeft=t,mi(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t));}function $n(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Lr(e.display));return {clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Mr(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}var Rn=function(e,t,r){this.cm=r;var n=this.vert=O("div",[O("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=O("div",[O("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");n.tabIndex=i.tabIndex=-1,e(n),e(i),pe(n,"scroll",(function(){n.clientHeight&&t(n.scrollTop,"vertical");})),pe(i,"scroll",(function(){i.clientWidth&&t(i.scrollLeft,"horizontal");})),this.checkedZeroWidth=!1,a&&l<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px");};Rn.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth;if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0";var i=e.viewHeight-(t?n:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px";}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px";var o=e.viewWidth-e.barLeft-(r?n:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px";}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return !this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},Rn.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz");},Rn.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert");},Rn.prototype.zeroWidthHack=function(){var e=b&&!p?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new R,this.disableVert=new R;},Rn.prototype.enableZeroWidthBar=function(e,t,r){e.style.visibility="",t.set(1e3,(function n(){var i=e.getBoundingClientRect();("vert"==r?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=e?e.style.visibility="hidden":t.set(1e3,n);}));},Rn.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert);};var Zn=function(){};function jn(e,t){t||(t=$n(e));var r=e.display.barWidth,n=e.display.barHeight;Un(e,t);for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&zn(e),Un(e,$n(e)),r=e.display.barWidth,n=e.display.barHeight;}function Un(e,t){var r=e.display,n=r.scrollbars.update(t);r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display="";}Zn.prototype.update=function(){return {bottom:0,right:0}},Zn.prototype.setScrollLeft=function(){},Zn.prototype.setScrollTop=function(){},Zn.prototype.clear=function(){};var Vn={native:Rn,null:Zn};function Kn(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&A(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Vn[e.options.scrollbarStyle]((function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),pe(t,"mousedown",(function(){e.state.focused&&setTimeout((function(){return e.display.input.focus()}),0);})),t.setAttribute("cm-not-content","true");}),(function(t,r){"horizontal"==r?Bn(e,t):In(e,t);}),e),e.display.scrollbars.addClass&&E(e.display.wrapper,e.display.scrollbars.addClass);}var Gn=0;function qn(e){var t;e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Gn,markArrays:null},t=e.curOp,sr?sr.ops.push(t):t.ownsGroup=sr={ops:[t],delayedCallbacks:[]};}function Xn(e){var t=e.curOp;t&&function(e,t){var r=e.ownsGroup;if(r)try{!function(e){var t=e.delayedCallbacks,r=0;do{for(;r<t.length;r++)t[r].call(null);for(var n=0;n<e.ops.length;n++){var i=e.ops[n];if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm);}}while(r<t.length)}(r);}finally{sr=null,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null;!function(e){for(var t=e.ops,r=0;r<t.length;r++)Yn(t[r]);for(var n=0;n<t.length;n++)Qn(t[n]);for(var i=0;i<t.length;i++)Jn(t[i]);for(var o=0;o<t.length;o++)ei(t[o]);for(var a=0;a<t.length;a++)ti(t[a]);}(e);}(r);}}(t);}function Yn(e){var t=e.cm,r=t.display;!function(e){var t=e.display;!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Mr(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Mr(e)+"px",t.scrollbarsClipped=!0);}(t),e.updateMaxLine&&Gt(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new si(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate);}function Qn(e){e.updatedDisplay=e.mustUpdate&&ui(e.cm,e.update);}function Jn(e){var t=e.cm,r=t.display;e.updatedDisplay&&zn(t),e.barMeasure=$n(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Nr(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Mr(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-zr(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection());}function ei(e){var t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Bn(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);var r=e.focus&&e.focus==P(F(t));e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&jn(t,e.barMeasure),e.updatedDisplay&&pi(t,e.barMeasure),e.selectionChanged&&Sn(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&Tn(e.cm);}function ti(e){var t=e.cm,r=t.display,n=t.doc;if(e.updatedDisplay&&di(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&Hn(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Bn(t,e.scrollLeft,!0,!0),e.scrollToPos){var i=function(e,t,r,n){var i;null==n&&(n=0),e.options.lineWrapping||t!=r||(r="before"==t.sticky?nt(t.line,t.ch+1,"before"):t,t=t.ch?nt(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t);for(var o=0;o<5;o++){var a=!1,l=qr(e,t),s=r&&r!=t?qr(e,r):l,c=Nn(e,i={left:Math.min(l.left,s.left),top:Math.min(l.top,s.top)-n,right:Math.max(l.left,s.left),bottom:Math.max(l.bottom,s.bottom)+n}),u=e.doc.scrollTop,d=e.doc.scrollLeft;if(null!=c.scrollTop&&(In(e,c.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(a=!0)),null!=c.scrollLeft&&(Bn(e,c.scrollLeft),Math.abs(e.doc.scrollLeft-d)>1&&(a=!0)),!a)break}return i}(t,ut(n,e.scrollToPos.from),ut(n,e.scrollToPos.to),e.scrollToPos.margin);!function(e,t){if(!ye(e,"scrollCursorIntoView")){var r=e.display,n=r.sizer.getBoundingClientRect(),i=null,o=r.wrapper.ownerDocument;if(t.top+n.top<0?i=!0:t.bottom+n.top>(o.defaultView.innerHeight||o.documentElement.clientHeight)&&(i=!1),null!=i&&!m){var a=O("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-Tr(e.display))+"px;\n                         height: "+(t.bottom-t.top+Mr(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;");e.display.lineSpace.appendChild(a),a.scrollIntoView(i),e.display.lineSpace.removeChild(a);}}}(t,i);}var o=e.maybeHiddenMarkers,a=e.maybeUnhiddenMarkers;if(o)for(var l=0;l<o.length;++l)o[l].lines.length||ve(o[l],"hide");if(a)for(var s=0;s<a.length;++s)a[s].lines.length&&ve(a[s],"unhide");r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&ve(t,"changes",t,e.changeObjs),e.update&&e.update.finish();}function ri(e,t){if(e.curOp)return t();qn(e);try{return t()}finally{Xn(e);}}function ni(e,t){return function(){if(e.curOp)return t.apply(e,arguments);qn(e);try{return t.apply(e,arguments)}finally{Xn(e);}}}function ii(e){return function(){if(this.curOp)return e.apply(this,arguments);qn(this);try{return e.apply(this,arguments)}finally{Xn(this);}}}function oi(e){return function(){var t=this.cm;if(!t||t.curOp)return e.apply(this,arguments);qn(t);try{return e.apply(this,arguments)}finally{Xn(t);}}}function ai(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,H(li,e));}function li(e){var t=e.doc;if(!(t.highlightFrontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=gt(e,t.highlightFrontier),i=[];t.iter(n.line,Math.min(t.first+t.size,e.display.viewTo+500),(function(o){if(n.line>=e.display.viewFrom){var a=o.styles,l=o.text.length>e.options.maxHighlightLength?Ue(t.mode,n.state):null,s=pt(e,o,n,!0);l&&(n.state=l),o.styles=s.styles;var c=o.styleClasses,u=s.classes;u?o.styleClasses=u:c&&(o.styleClasses=null);for(var d=!a||a.length!=o.styles.length||c!=u&&(!c||!u||c.bgClass!=u.bgClass||c.textClass!=u.textClass),f=0;!d&&f<a.length;++f)d=a[f]!=o.styles[f];d&&i.push(n.line),o.stateAfter=n.save(),n.nextLine();}else o.text.length<=e.options.maxHighlightLength&&vt(e,o.text,n),o.stateAfter=n.line%5==0?n.save():null,n.nextLine();if(+new Date>r)return ai(e,e.options.workDelay),!0})),t.highlightFrontier=n.line,t.modeFrontier=Math.max(t.modeFrontier,n.line),i.length&&ri(e,(function(){for(var t=0;t<i.length;t++)mn(e,i[t],"text");}));}}var si=function(e,t,r){var n=e.display;this.viewport=t,this.visible=_n(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=zr(e),this.force=r,this.dims=sn(e),this.events=[];};function ci(e){if(e.hasFocus())return null;var t=P(F(e));if(!t||!N(e.display.lineDiv,t))return null;var r={activeElt:t};if(window.getSelection){var n=I(e).getSelection();n.anchorNode&&n.extend&&N(e.display.lineDiv,n.anchorNode)&&(r.anchorNode=n.anchorNode,r.anchorOffset=n.anchorOffset,r.focusNode=n.focusNode,r.focusOffset=n.focusOffset);}return r}function ui(e,t){var r=e.display,n=e.doc;if(t.editorIsHidden)return gn(e),!1;if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==yn(e))return !1;gi(e)&&(gn(e),t.dims=sn(e));var i=n.first+n.size,o=Math.max(t.visible.from-e.options.viewportMargin,n.first),a=Math.min(i,t.visible.to+e.options.viewportMargin);r.viewFrom<o&&o-r.viewFrom<20&&(o=Math.max(n.first,r.viewFrom)),r.viewTo>a&&r.viewTo-a<20&&(a=Math.min(i,r.viewTo)),Tt&&(o=Rt(e.doc,o),a=Zt(e.doc,a));var l=o!=r.viewFrom||a!=r.viewTo||r.lastWrapHeight!=t.wrapperHeight||r.lastWrapWidth!=t.wrapperWidth;!function(e,t,r){var n=e.display;0==n.view.length||t>=n.viewTo||r<=n.viewFrom?(n.view=lr(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=lr(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(hn(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(lr(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,hn(e,r)))),n.viewTo=r;}(e,o,a),r.viewOffset=Vt(qe(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px";var c=yn(e);if(!l&&0==c&&!t.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return !1;var u=ci(e);return c>4&&(r.lineDiv.style.display="none"),function(e,t,r){var n=e.display,i=e.options.lineNumbers,o=n.lineDiv,a=o.firstChild;function l(t){var r=t.nextSibling;return s&&b&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var c=n.view,u=n.viewFrom,d=0;d<c.length;d++){var f=c[d];if(f.hidden);else if(f.node&&f.node.parentNode==o){for(;a!=f.node;)a=l(a);var h=i&&null!=t&&t<=u&&f.lineNumber;f.changes&&(Z(f.changes,"gutter")>-1&&(h=!1),fr(e,f,u,r)),h&&(M(f.lineNumber),f.lineNumber.appendChild(document.createTextNode(rt(e.options,u)))),a=f.node.nextSibling;}else {var p=br(e,f,u,r);o.insertBefore(p,a);}u+=f.size;}for(;a;)a=l(a);}(e,r.updateLineNumbers,t.dims),c>4&&(r.lineDiv.style.display=""),r.renderedView=r.view,function(e){if(e&&e.activeElt&&e.activeElt!=P(e.activeElt.ownerDocument)&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&N(document.body,e.anchorNode)&&N(document.body,e.focusNode))){var t=e.activeElt.ownerDocument,r=t.defaultView.getSelection(),n=t.createRange();n.setEnd(e.anchorNode,e.anchorOffset),n.collapse(!1),r.removeAllRanges(),r.addRange(n),r.extend(e.focusNode,e.focusOffset);}}(u),M(r.cursorDiv),M(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,l&&(r.lastWrapHeight=t.wrapperHeight,r.lastWrapWidth=t.wrapperWidth,ai(e,400)),r.updateLineNumbers=null,!0}function di(e,t){for(var r=t.viewport,n=!0;;n=!1){if(n&&e.options.lineWrapping&&t.oldDisplayWidth!=zr(e))n&&(t.visible=_n(e.display,e.doc,r));else if(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Lr(e.display)-Or(e),r.top)}),t.visible=_n(e.display,e.doc,r),t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)break;if(!ui(e,t))break;zn(e);var i=$n(e);bn(e),jn(e,i),pi(e,i),t.force=!1;}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo);}function fi(e,t){var r=new si(e,t);if(ui(e,r)){zn(e),di(e,r);var n=$n(e);bn(e),jn(e,n),pi(e,n),r.finish();}}function hi(e){var t=e.gutters.offsetWidth;e.sizer.style.marginLeft=t+"px",ur(e,"gutterChanged",e);}function pi(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Mr(e)+"px";}function mi(e){var t=e.display,r=t.view;if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=cn(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",a=0;a<r.length;a++)if(!r[a].hidden){e.options.fixedGutter&&(r[a].gutter&&(r[a].gutter.style.left=o),r[a].gutterBackground&&(r[a].gutterBackground.style.left=o));var l=r[a].alignable;if(l)for(var s=0;s<l.length;s++)l[s].style.left=o;}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px");}}function gi(e){if(!e.options.lineNumbers)return !1;var t=e.doc,r=rt(e.options,t.first+t.size-1),n=e.display;if(r.length!=n.lineNumChars){var i=n.measure.appendChild(O("div",[O("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,a=i.offsetWidth-o;return n.lineGutter.style.width="",n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-a)+1,n.lineNumWidth=n.lineNumInnerWidth+a,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+"px",hi(e.display),!0}return !1}function vi(e,t){for(var r=[],n=!1,i=0;i<e.length;i++){var o=e[i],a=null;if("string"!=typeof o&&(a=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!t)continue;n=!0;}r.push({className:o,style:a});}return t&&!n&&r.push({className:"CodeMirror-linenumbers",style:null}),r}function yi(e){var t=e.gutters,r=e.gutterSpecs;M(t),e.lineGutter=null;for(var n=0;n<r.length;++n){var i=r[n],o=i.className,a=i.style,l=t.appendChild(O("div",null,"CodeMirror-gutter "+o));a&&(l.style.cssText=a),"CodeMirror-linenumbers"==o&&(e.lineGutter=l,l.style.width=(e.lineNumWidth||1)+"px");}t.style.display=r.length?"":"none",hi(e);}function bi(e){yi(e.display),pn(e),mi(e);}function wi(e,t,n,i){var o=this;this.input=n,o.scrollbarFiller=O("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=O("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=_("div",null,"CodeMirror-code"),o.selectionDiv=O("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=O("div",null,"CodeMirror-cursors"),o.measure=O("div",null,"CodeMirror-measure"),o.lineMeasure=O("div",null,"CodeMirror-measure"),o.lineSpace=_("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var c=_("div",[o.lineSpace],"CodeMirror-lines");o.mover=O("div",[c],null,"position: relative"),o.sizer=O("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=O("div",null,null,"position: absolute; height: 50px; width: 1px;"),o.gutters=O("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=O("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=O("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),u&&d>=105&&(o.wrapper.style.clipPath="inset(0px)"),o.wrapper.setAttribute("translate","no"),a&&l<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),s||r&&y||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=vi(i.gutters,i.lineNumbers),yi(o),n.init(o);}si.prototype.signal=function(e,t){we(e,t)&&this.events.push(arguments);},si.prototype.finish=function(){for(var e=0;e<this.events.length;e++)ve.apply(null,this.events[e]);};var ki=0,xi=null;function Ci(e){var t=e.wheelDeltaX,r=e.wheelDeltaY;return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function Si(e){var t=Ci(e);return t.x*=xi,t.y*=xi,t}function Ti(e,t){u&&102==d&&(null==e.display.chromeScrollHack?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout((function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents="";}),100));var n=Ci(t),i=n.x,o=n.y,a=xi;0===t.deltaMode&&(i=t.deltaX,o=t.deltaY,a=1);var l=e.display,c=l.scroller,h=c.scrollWidth>c.clientWidth,p=c.scrollHeight>c.clientHeight;if(i&&h||o&&p){if(o&&b&&s)e:for(var m=t.target,g=l.view;m!=c;m=m.parentNode)for(var v=0;v<g.length;v++)if(g[v].node==m){e.display.currentWheelTarget=m;break e}if(i&&!r&&!f&&null!=a)return o&&p&&In(e,Math.max(0,c.scrollTop+o*a)),Bn(e,Math.max(0,c.scrollLeft+i*a)),(!o||o&&p)&&xe(t),void(l.wheelStartX=null);if(o&&null!=a){var y=o*a,w=e.doc.scrollTop,k=w+l.wrapper.clientHeight;y<0?w=Math.max(0,w+y-50):k=Math.min(e.doc.height,k+y+50),fi(e,{top:w,bottom:k});}ki<20&&0!==t.deltaMode&&(null==l.wheelStartX?(l.wheelStartX=c.scrollLeft,l.wheelStartY=c.scrollTop,l.wheelDX=i,l.wheelDY=o,setTimeout((function(){if(null!=l.wheelStartX){var e=c.scrollLeft-l.wheelStartX,t=c.scrollTop-l.wheelStartY,r=t&&l.wheelDY&&t/l.wheelDY||e&&l.wheelDX&&e/l.wheelDX;l.wheelStartX=l.wheelStartY=null,r&&(xi=(xi*ki+r)/(ki+1),++ki);}}),200)):(l.wheelDX+=i,l.wheelDY+=o));}}a?xi=-.53:r?xi=15:u?xi=-.7:h&&(xi=-1/3);var Li=function(e,t){this.ranges=e,this.primIndex=t;};Li.prototype.primary=function(){return this.ranges[this.primIndex]},Li.prototype.equals=function(e){if(e==this)return !0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return !1;for(var t=0;t<this.ranges.length;t++){var r=this.ranges[t],n=e.ranges[t];if(!ot(r.anchor,n.anchor)||!ot(r.head,n.head))return !1}return !0},Li.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new Ai(at(this.ranges[t].anchor),at(this.ranges[t].head));return new Li(e,this.primIndex)},Li.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return !0;return !1},Li.prototype.contains=function(e,t){t||(t=e);for(var r=0;r<this.ranges.length;r++){var n=this.ranges[r];if(it(t,n.from())>=0&&it(e,n.to())<=0)return r}return -1};var Ai=function(e,t){this.anchor=e,this.head=t;};function Mi(e,t,r){var n=e&&e.options.selectionsMayTouch,i=t[r];t.sort((function(e,t){return it(e.from(),t.from())})),r=Z(t,i);for(var o=1;o<t.length;o++){var a=t[o],l=t[o-1],s=it(l.to(),a.from());if(n&&!a.empty()?s>0:s>=0){var c=st(l.from(),a.from()),u=lt(l.to(),a.to()),d=l.empty()?a.from()==a.head:l.from()==l.head;o<=r&&--r,t.splice(--o,2,new Ai(d?u:c,d?c:u));}}return new Li(t,r)}function zi(e,t){return new Li([new Ai(e,t||e)],0)}function Oi(e){return e.text?nt(e.from.line+e.text.length-1,Y(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function _i(e,t){if(it(e,t.from)<0)return e;if(it(e,t.to)<=0)return Oi(t);var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch;return e.line==t.to.line&&(n+=Oi(t).ch-t.to.ch),nt(r,n)}function Ni(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n];r.push(new Ai(_i(i.anchor,t),_i(i.head,t)));}return Mi(e.cm,r,e.sel.primIndex)}function Pi(e,t,r){return e.line==t.line?nt(r.line,e.ch-t.ch+r.ch):nt(r.line+(e.line-t.line),e.ch)}function Ei(e){e.doc.mode=Re(e.options,e.doc.modeOption),Di(e);}function Di(e){e.doc.iter((function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null);})),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,ai(e,100),e.state.modeGen++,e.curOp&&pn(e);}function Wi(e,t){return 0==t.from.ch&&0==t.to.ch&&""==Y(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Fi(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){!function(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),_t(e),Nt(e,r);var i=n?n(e):1;i!=e.height&&Qe(e,i);}(e,r,i,n),ur(e,"change",e,t);}function a(e,t){for(var r=[],o=e;o<t;++o)r.push(new qt(c[o],i(o),n));return r}var l=t.from,s=t.to,c=t.text,u=qe(e,l.line),d=qe(e,s.line),f=Y(c),h=i(c.length-1),p=s.line-l.line;if(t.full)e.insert(0,a(0,c.length)),e.remove(c.length,e.size-c.length);else if(Wi(e,t)){var m=a(0,c.length-1);o(d,d.text,h),p&&e.remove(l.line,p),m.length&&e.insert(l.line,m);}else if(u==d)if(1==c.length)o(u,u.text.slice(0,l.ch)+f+u.text.slice(s.ch),h);else {var g=a(1,c.length-1);g.push(new qt(f+u.text.slice(s.ch),h,n)),o(u,u.text.slice(0,l.ch)+c[0],i(0)),e.insert(l.line+1,g);}else if(1==c.length)o(u,u.text.slice(0,l.ch)+c[0]+d.text.slice(s.ch),i(0)),e.remove(l.line+1,p);else {o(u,u.text.slice(0,l.ch)+c[0],i(0)),o(d,f+d.text.slice(s.ch),h);var v=a(1,c.length-1);p>1&&e.remove(l.line+1,p-1),e.insert(l.line+1,v);}ur(e,"change",e,t);}function Ii(e,t,r){!function e(n,i,o){if(n.linked)for(var a=0;a<n.linked.length;++a){var l=n.linked[a];if(l.doc!=i){var s=o&&l.sharedHist;r&&!s||(t(l.doc,s),e(l.doc,n,s));}}}(e,null,!0);}function Hi(e,t){if(t.cm)throw Error("This document is already in use.");e.doc=t,t.cm=e,dn(e),Ei(e),Bi(e),e.options.direction=t.direction,e.options.lineWrapping||Gt(e),e.options.mode=t.modeOption,pn(e);}function Bi(e){("rtl"==e.doc.direction?E:A)(e.display.lineDiv,"CodeMirror-rtl");}function $i(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1;}function Ri(e,t){var r={from:at(t.from),to:Oi(t),text:Xe(e,t.from,t.to)};return Vi(e,r,t.from.line,t.to.line+1),Ii(e,(function(e){return Vi(e,r,t.from.line,t.to.line+1)}),!0),r}function Zi(e){for(;e.length&&Y(e).ranges;)e.pop();}function ji(e,t,r,n){var i=e.history;i.undone.length=0;var o,a,l=+new Date;if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>l-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=function(e,t){return t?(Zi(e.done),Y(e.done)):e.done.length&&!Y(e.done).ranges?Y(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),Y(e.done)):void 0}(i,i.lastOp==n)))a=Y(o.changes),0==it(t.from,t.to)&&0==it(t.from,a.to)?a.to=Oi(t):o.changes.push(Ri(e,t));else {var s=Y(i.done);for(s&&s.ranges||Ui(e.sel,i.done),o={changes:[Ri(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift();}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=l,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,a||ve(e,"historyAdded");}function Ui(e,t){var r=Y(t);r&&r.ranges&&r.equals(e)||t.push(e);}function Vi(e,t,r,n){var i=t["spans_"+e.id],o=0;e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),(function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o;}));}function Ki(e){if(!e)return null;for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r]);return t?t.length?t:null:e}function Gi(e,t){var r=function(e,t){var r=t["spans_"+e.id];if(!r)return null;for(var n=[],i=0;i<t.text.length;++i)n.push(Ki(r[i]));return n}(e,t),n=zt(e,t);if(!r)return n;if(!n)return r;for(var i=0;i<r.length;++i){var o=r[i],a=n[i];if(o&&a)e:for(var l=0;l<a.length;++l){for(var s=a[l],c=0;c<o.length;++c)if(o[c].marker==s.marker)continue e;o.push(s);}else a&&(r[i]=a);}return r}function qi(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i];if(o.ranges)n.push(r?Li.prototype.deepCopy.call(o):o);else {var a=o.changes,l=[];n.push({changes:l});for(var s=0;s<a.length;++s){var c=a[s],u=void 0;if(l.push({from:c.from,to:c.to,text:c.text}),t)for(var d in c)(u=d.match(/^spans_(\d+)$/))&&Z(t,Number(u[1]))>-1&&(Y(l)[d]=c[d],delete c[d]);}}}return n}function Xi(e,t,r,n){if(n){var i=e.anchor;if(r){var o=it(t,i)<0;o!=it(r,i)<0?(i=t,t=r):o!=it(t,r)<0&&(t=r);}return new Ai(i,t)}return new Ai(r||t,t)}function Yi(e,t,r,n,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),ro(e,new Li([Xi(e.sel.primary(),t,r,i)],0),n);}function Qi(e,t,r){for(var n=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)n[o]=Xi(e.sel.ranges[o],t[o],null,i);ro(e,Mi(e.cm,n,e.sel.primIndex),r);}function Ji(e,t,r,n){var i=e.sel.ranges.slice(0);i[t]=r,ro(e,Mi(e.cm,i,e.sel.primIndex),n);}function eo(e,t,r,n){ro(e,zi(t,r),n);}function to(e,t,r){var n=e.history.done,i=Y(n);i&&i.ranges?(n[n.length-1]=t,no(e,t,r)):ro(e,t,r);}function ro(e,t,r){no(e,t,r),function(e,t,r,n){var i=e.history,o=n&&n.origin;r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||function(e,t,r,n){var i=t.charAt(0);return "*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}(e,o,Y(i.done),t))?i.done[i.done.length-1]=t:Ui(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&!1!==n.clearRedo&&Zi(i.undone);}(e,e.sel,e.cm?e.cm.curOp.id:NaN,r);}function no(e,t,r){(we(e,"beforeSelectionChange")||e.cm&&we(e.cm,"beforeSelectionChange"))&&(t=function(e,t,r){var n={ranges:t.ranges,update:function(t){this.ranges=[];for(var r=0;r<t.length;r++)this.ranges[r]=new Ai(ut(e,t[r].anchor),ut(e,t[r].head));},origin:r&&r.origin};return ve(e,"beforeSelectionChange",e,n),e.cm&&ve(e.cm,"beforeSelectionChange",e.cm,n),n.ranges!=t.ranges?Mi(e.cm,n.ranges,n.ranges.length-1):t}(e,t,r));var n=r&&r.bias||(it(t.primary().head,e.sel.primary().head)<0?-1:1);io(e,ao(e,t,n,!0)),r&&!1===r.scroll||!e.cm||"nocursor"==e.cm.getOption("readOnly")||En(e.cm);}function io(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,be(e.cm)),ur(e,"cursorActivity",e));}function oo(e){io(e,ao(e,e.sel,null,!1));}function ao(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],l=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],s=so(e,a.anchor,l&&l.anchor,r,n),c=a.head==a.anchor?s:so(e,a.head,l&&l.head,r,n);(i||s!=a.anchor||c!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new Ai(s,c));}return i?Mi(e.cm,i,t.primIndex):t}function lo(e,t,r,n,i){var o=qe(e,t.line);if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var l=o.markedSpans[a],s=l.marker,c="selectLeft"in s?!s.selectLeft:s.inclusiveLeft,u="selectRight"in s?!s.selectRight:s.inclusiveRight;if((null==l.from||(c?l.from<=t.ch:l.from<t.ch))&&(null==l.to||(u?l.to>=t.ch:l.to>t.ch))){if(i&&(ve(s,"beforeCursorEnter"),s.explicitlyCleared)){if(o.markedSpans){--a;continue}break}if(!s.atomic)continue;if(r){var d=s.find(n<0?1:-1),f=void 0;if((n<0?u:c)&&(d=co(e,d,-n,d&&d.line==t.line?o:null)),d&&d.line==t.line&&(f=it(d,r))&&(n<0?f<0:f>0))return lo(e,d,t,n,i)}var h=s.find(n<0?-1:1);return (n<0?c:u)&&(h=co(e,h,n,h.line==t.line?o:null)),h?lo(e,h,t,n,i):null}}return t}function so(e,t,r,n,i){var o=n||1;return lo(e,t,r,o,i)||!i&&lo(e,t,r,o,!0)||lo(e,t,r,-o,i)||!i&&lo(e,t,r,-o,!0)||(e.cantEdit=!0,nt(e.first,0))}function co(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?ut(e,nt(t.line-1)):null:r>0&&t.ch==(n||qe(e,t.line)).text.length?t.line<e.first+e.size-1?nt(t.line+1,0):null:new nt(t.line,t.ch+r)}function uo(e){e.setSelection(nt(e.firstLine(),0),nt(e.lastLine()),U);}function fo(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return n.canceled=!0}};return r&&(n.update=function(t,r,i,o){t&&(n.from=ut(e,t)),r&&(n.to=ut(e,r)),i&&(n.text=i),void 0!==o&&(n.origin=o);}),ve(e,"beforeChange",e,n),e.cm&&ve(e.cm,"beforeChange",e.cm,n),n.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:n.from,to:n.to,text:n.text,origin:n.origin}}function ho(e,t,r){if(e.cm){if(!e.cm.curOp)return ni(e.cm,ho)(e,t,r);if(e.cm.state.suppressEdits)return}if(!(we(e,"beforeChange")||e.cm&&we(e.cm,"beforeChange"))||(t=fo(e,t,!0))){var n=St&&!r&&function(e,t,r){var n=null;if(e.iter(t.line,r.line+1,(function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker;!r.readOnly||n&&-1!=Z(n,r)||(n||(n=[])).push(r);}})),!n)return null;for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var a=n[o],l=a.find(0),s=0;s<i.length;++s){var c=i[s];if(!(it(c.to,l.from)<0||it(c.from,l.to)>0)){var u=[s,1],d=it(c.from,l.from),f=it(c.to,l.to);(d<0||!a.inclusiveLeft&&!d)&&u.push({from:c.from,to:l.from}),(f>0||!a.inclusiveRight&&!f)&&u.push({from:l.to,to:c.to}),i.splice.apply(i,u),s+=u.length-3;}}return i}(e,t.from,t.to);if(n)for(var i=n.length-1;i>=0;--i)po(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text,origin:t.origin});else po(e,t);}}function po(e,t){if(1!=t.text.length||""!=t.text[0]||0!=it(t.from,t.to)){var r=Ni(e,t);ji(e,t,r,e.cm?e.cm.curOp.id:NaN),vo(e,t,r,zt(e,t));var n=[];Ii(e,(function(e,r){r||-1!=Z(n,e.history)||(ko(e.history,t),n.push(e.history)),vo(e,t,null,zt(e,t));}));}}function mo(e,t,r){var n=e.cm&&e.cm.state.suppressEdits;if(!n||r){for(var i,o=e.history,a=e.sel,l="undo"==t?o.done:o.undone,s="undo"==t?o.undone:o.done,c=0;c<l.length&&(i=l[c],r?!i.ranges||i.equals(e.sel):i.ranges);c++);if(c!=l.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(!(i=l.pop()).ranges){if(n)return void l.push(i);break}if(Ui(i,s),r&&!i.equals(e.sel))return void ro(e,i,{clearRedo:!1});a=i;}var u=[];Ui(a,s),s.push({changes:u,generation:o.generation}),o.generation=i.generation||++o.maxGeneration;for(var d=we(e,"beforeChange")||e.cm&&we(e.cm,"beforeChange"),f=function(r){var n=i.changes[r];if(n.origin=t,d&&!fo(e,n,!1))return l.length=0,{};u.push(Ri(e,n));var o=r?Ni(e,n):Y(l);vo(e,n,o,Gi(e,n)),!r&&e.cm&&e.cm.scrollIntoView({from:n.from,to:Oi(n)});var a=[];Ii(e,(function(e,t){t||-1!=Z(a,e.history)||(ko(e.history,n),a.push(e.history)),vo(e,n,null,Gi(e,n));}));},h=i.changes.length-1;h>=0;--h){var p=f(h);if(p)return p.v}}}}function go(e,t){if(0!=t&&(e.first+=t,e.sel=new Li(Q(e.sel.ranges,(function(e){return new Ai(nt(e.anchor.line+t,e.anchor.ch),nt(e.head.line+t,e.head.ch))})),e.sel.primIndex),e.cm)){pn(e.cm,e.first,e.first-t,t);for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)mn(e.cm,n,"gutter");}}function vo(e,t,r,n){if(e.cm&&!e.cm.curOp)return ni(e.cm,vo)(e,t,r,n);if(t.to.line<e.first)go(e,t.text.length-1-(t.to.line-t.from.line));else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line);go(e,i),t={from:nt(e.first,0),to:nt(t.to.line+i,t.to.ch),text:[Y(t.text)],origin:t.origin};}var o=e.lastLine();t.to.line>o&&(t={from:t.from,to:nt(o,qe(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=Xe(e,t.from,t.to),r||(r=Ni(e,t)),e.cm?function(e,t,r){var n=e.doc,i=e.display,o=t.from,a=t.to,l=!1,s=o.line;e.options.lineWrapping||(s=Je($t(qe(n,o.line))),n.iter(s,a.line+1,(function(e){if(e==i.maxLine)return l=!0,!0}))),n.sel.contains(t.from,t.to)>-1&&be(e),Fi(n,t,r,un(e)),e.options.lineWrapping||(n.iter(s,o.line+t.text.length,(function(e){var t=Kt(e);t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,l=!1);})),l&&(e.curOp.updateMaxLine=!0)),function(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var r=e.first,n=t-1;n>r;n--){var i=qe(e,n).stateAfter;if(i&&(!(i instanceof ft)||n+i.lookAhead<t)){r=n+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,r);}}(n,o.line),ai(e,400);var c=t.text.length-(a.line-o.line)-1;t.full?pn(e):o.line!=a.line||1!=t.text.length||Wi(e.doc,t)?pn(e,o.line,a.line+1,c):mn(e,o.line,"text");var u=we(e,"changes"),d=we(e,"change");if(d||u){var f={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin};d&&ur(e,"change",e,f),u&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f);}e.display.selForContextMenu=null;}(e.cm,t,n):Fi(e,t,n),no(e,r,U),e.cantEdit&&so(e,nt(e.firstLine(),0))&&(e.cantEdit=!1);}}function yo(e,t,r,n,i){var o;n||(n=r),it(n,r)<0&&(r=(o=[n,r])[0],n=o[1]),"string"==typeof t&&(t=e.splitLines(t)),ho(e,{from:r,to:n,text:t,origin:i});}function bo(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0);}function wo(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],a=!0;if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0);for(var l=0;l<o.ranges.length;l++)bo(o.ranges[l].anchor,t,r,n),bo(o.ranges[l].head,t,r,n);}else {for(var s=0;s<o.changes.length;++s){var c=o.changes[s];if(r<c.from.line)c.from=nt(c.from.line+n,c.from.ch),c.to=nt(c.to.line+n,c.to.ch);else if(t<=c.to.line){a=!1;break}}a||(e.splice(0,i+1),i=0);}}}function ko(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1;wo(e.done,r,n,i),wo(e.undone,r,n,i);}function xo(e,t,r,n){var i=t,o=t;return "number"==typeof t?o=qe(e,ct(e,t)):i=Je(t),null==i?null:(n(o,i)&&e.cm&&mn(e.cm,i,r),o)}function Co(e){this.lines=e,this.parent=null;for(var t=0,r=0;r<e.length;++r)e[r].parent=this,t+=e[r].height;this.height=t;}function So(e){this.children=e;for(var t=0,r=0,n=0;n<e.length;++n){var i=e[n];t+=i.chunkSize(),r+=i.height,i.parent=this;}this.size=t,this.height=r,this.parent=null;}Ai.prototype.from=function(){return st(this.anchor,this.head)},Ai.prototype.to=function(){return lt(this.anchor,this.head)},Ai.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},Co.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=e,n=e+t;r<n;++r){var i=this.lines[r];this.height-=i.height,Xt(i),ur(i,"delete");}this.lines.splice(e,t);},collapse:function(e){e.push.apply(e,this.lines);},insertInner:function(e,t,r){this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e));for(var n=0;n<t.length;++n)t[n].parent=this;},iterN:function(e,t,r){for(var n=e+t;e<n;++e)if(r(this.lines[e]))return !0}},So.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t;for(var r=0;r<this.children.length;++r){var n=this.children[r],i=n.chunkSize();if(e<i){var o=Math.min(t,i-e),a=n.height;if(n.removeInner(e,o),this.height-=a-n.height,i==o&&(this.children.splice(r--,1),n.parent=null),0==(t-=o))break;e=0;}else e-=i;}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof Co))){var l=[];this.collapse(l),this.children=[new Co(l)],this.children[0].parent=this;}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e);},insertInner:function(e,t,r){this.size+=t.length,this.height+=r;for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize();if(e<=o){if(i.insertInner(e,t,r),i.lines&&i.lines.length>50){for(var a=i.lines.length%25+25,l=a;l<i.lines.length;){var s=new Co(i.lines.slice(l,l+=25));i.height-=s.height,this.children.splice(++n,0,s),s.parent=this;}i.lines=i.lines.slice(0,a),this.maybeSpill();}break}e-=o;}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var t=new So(e.children.splice(e.children.length-5,5));if(e.parent){e.size-=t.size,e.height-=t.height;var r=Z(e.parent.children,e);e.parent.children.splice(r+1,0,t);}else {var n=new So(e.children);n.parent=e,e.children=[n,t],e=n;}t.parent=e.parent;}while(e.children.length>10);e.parent.maybeSpill();}},iterN:function(e,t,r){for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize();if(e<o){var a=Math.min(t,o-e);if(i.iterN(e,a,r))return !0;if(0==(t-=a))break;e=0;}else e-=o;}}};var To=function(e,t,r){if(r)for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n]);this.doc=e,this.node=t;};function Lo(e,t,r){Vt(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Pn(e,r);}To.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,r=this.line,n=Je(r);if(null!=n&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1);t.length||(r.widgets=null);var o=Cr(this);Qe(r,Math.max(0,r.height-o)),e&&(ri(e,(function(){Lo(e,r,-o),mn(e,n,"widget");})),ur(e,"lineWidgetCleared",e,this,n));}},To.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line;this.height=null;var i=Cr(this)-t;i&&(jt(this.doc,n)||Qe(n,n.height+i),r&&ri(r,(function(){r.curOp.forceUpdate=!0,Lo(r,n,i),ur(r,"lineWidgetChanged",r,e,Je(n));})));},ke(To);var Ao=0,Mo=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++Ao;};function zo(e,t,r,n,i){if(n&&n.shared)return function(e,t,r,n,i){(n=B(n)).shared=!1;var o=[zo(e,t,r,n,i)],a=o[0],l=n.widgetNode;return Ii(e,(function(e){l&&(n.widgetNode=l.cloneNode(!0)),o.push(zo(e,ut(e,t),ut(e,r),n,i));for(var s=0;s<e.linked.length;++s)if(e.linked[s].isParent)return;a=Y(o);})),new Oo(o,a)}(e,t,r,n,i);if(e.cm&&!e.cm.curOp)return ni(e.cm,zo)(e,t,r,n,i);var o=new Mo(e,i),a=it(t,r);if(n&&B(n,o,!1),a>0||0==a&&!1!==o.clearWhenEmpty)return o;if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=_("span",[o.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),n.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(Bt(e,t.line,t,r,o)||t.line!=r.line&&Bt(e,r.line,t,r,o))throw Error("Inserting collapsed marker partially overlapping an existing one");Tt=!0;}o.addToHistory&&ji(e,{from:t,to:r,origin:"markText"},e.sel,NaN);var l,s=t.line,c=e.cm;if(e.iter(s,r.line+1,(function(n){c&&o.collapsed&&!c.options.lineWrapping&&$t(n)==c.display.maxLine&&(l=!0),o.collapsed&&s!=t.line&&Qe(n,0),function(e,t,r){var n=r&&window.WeakSet&&(r.markedSpans||(r.markedSpans=new WeakSet));n&&e.markedSpans&&n.has(e.markedSpans)?e.markedSpans.push(t):(e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],n&&n.add(e.markedSpans)),t.marker.attachLine(e);}(n,new Lt(o,s==t.line?t.ch:null,s==r.line?r.ch:null),e.cm&&e.cm.curOp),++s;})),o.collapsed&&e.iter(t.line,r.line+1,(function(t){jt(e,t)&&Qe(t,0);})),o.clearOnEnter&&pe(o,"beforeCursorEnter",(function(){return o.clear()})),o.readOnly&&(St=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++Ao,o.atomic=!0),c){if(l&&(c.curOp.updateMaxLine=!0),o.collapsed)pn(c,t.line,r.line+1);else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var u=t.line;u<=r.line;u++)mn(c,u,"text");o.atomic&&oo(c.doc),ur(c,"markerAdded",c,o);}return o}Mo.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp;if(t&&qn(e),we(this,"clear")){var r=this.find();r&&ur(this,"clear",r.from,r.to);}for(var n=null,i=null,o=0;o<this.lines.length;++o){var a=this.lines[o],l=At(a.markedSpans,this);e&&!this.collapsed?mn(e,Je(a),"text"):e&&(null!=l.to&&(i=Je(a)),null!=l.from&&(n=Je(a))),a.markedSpans=Mt(a.markedSpans,l),null==l.from&&this.collapsed&&!jt(this.doc,a)&&e&&Qe(a,an(e.display));}if(e&&this.collapsed&&!e.options.lineWrapping)for(var s=0;s<this.lines.length;++s){var c=$t(this.lines[s]),u=Kt(c);u>e.display.maxLineLength&&(e.display.maxLine=c,e.display.maxLineLength=u,e.display.maxLineChanged=!0);}null!=n&&e&&this.collapsed&&pn(e,n,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&oo(e.doc)),e&&ur(e,"markerCleared",e,this,n,i),t&&Xn(e),this.parent&&this.parent.clear();}},Mo.prototype.find=function(e,t){var r,n;null==e&&"bookmark"==this.type&&(e=1);for(var i=0;i<this.lines.length;++i){var o=this.lines[i],a=At(o.markedSpans,this);if(null!=a.from&&(r=nt(t?o:Je(o),a.from),-1==e))return r;if(null!=a.to&&(n=nt(t?o:Je(o),a.to),1==e))return n}return r&&{from:r,to:n}},Mo.prototype.changed=function(){var e=this,t=this.find(-1,!0),r=this,n=this.doc.cm;t&&n&&ri(n,(function(){var i=t.line,o=Je(t.line),a=Pr(n,o);if(a&&(Br(a),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!jt(r.doc,i)&&null!=r.height){var l=r.height;r.height=null;var s=Cr(r)-l;s&&Qe(i,i.height+s);}ur(n,"markerChanged",n,e);}));},Mo.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;t.maybeHiddenMarkers&&-1!=Z(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this);}this.lines.push(e);},Mo.prototype.detachLine=function(e){if(this.lines.splice(Z(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this);}},ke(Mo);var Oo=function(e,t){this.markers=e,this.primary=t;for(var r=0;r<e.length;++r)e[r].parent=this;};function _o(e){return e.findMarks(nt(e.first,0),e.clipPos(nt(e.lastLine())),(function(e){return e.parent}))}function No(e){for(var t=function(t){var r=e[t],n=[r.primary.doc];Ii(r.primary.doc,(function(e){return n.push(e)}));for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==Z(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1));}},r=0;r<e.length;r++)t(r);}Oo.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();ur(this,"clear");}},Oo.prototype.find=function(e,t){return this.primary.find(e,t)},ke(Oo);var Po=0,Eo=function(e,t,r,n,i){if(!(this instanceof Eo))return new Eo(e,t,r,n,i);null==r&&(r=0),So.call(this,[new Co([new qt("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r;var o=nt(r,0);this.sel=zi(o),this.history=new $i(null),this.id=++Po,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Fi(this,{from:o,to:o,text:e}),ro(this,zi(o),U);};Eo.prototype=ee(So.prototype,{constructor:Eo,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e);},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height;this.insertInner(e-this.first,t,r);},remove:function(e,t){this.removeInner(e-this.first,t);},getValue:function(e){var t=Ye(this,this.first,this.first+this.size);return !1===e?t:t.join(e||this.lineSeparator())},setValue:oi((function(e){var t=nt(this.first,0),r=this.first+this.size-1;ho(this,{from:t,to:nt(r,qe(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Dn(this.cm,0,0),ro(this,zi(t),U);})),replaceRange:function(e,t,r,n){yo(this,e,t=ut(this,t),r=r?ut(this,r):t,n);},getRange:function(e,t,r){var n=Xe(this,ut(this,e),ut(this,t));return !1===r?n:""===r?n.join(""):n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e);return t&&t.text},getLineHandle:function(e){if(tt(this,e))return qe(this,e)},getLineNumber:function(e){return Je(e)},getLineHandleVisualStart:function(e){return "number"==typeof e&&(e=qe(this,e)),$t(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return ut(this,e)},getCursor:function(e){var t=this.sel.primary();return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:oi((function(e,t,r){eo(this,ut(this,"number"==typeof e?nt(e,t||0):e),null,r);})),setSelection:oi((function(e,t,r){eo(this,ut(this,e),ut(this,t||e),r);})),extendSelection:oi((function(e,t,r){Yi(this,ut(this,e),t&&ut(this,t),r);})),extendSelections:oi((function(e,t){Qi(this,dt(this,e),t);})),extendSelectionsBy:oi((function(e,t){Qi(this,dt(this,Q(this.sel.ranges,e)),t);})),setSelections:oi((function(e,t,r){if(e.length){for(var n=[],i=0;i<e.length;i++)n[i]=new Ai(ut(this,e[i].anchor),ut(this,e[i].head||e[i].anchor));null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),ro(this,Mi(this.cm,n,t),r);}})),addSelection:oi((function(e,t,r){var n=this.sel.ranges.slice(0);n.push(new Ai(ut(this,e),ut(this,t||e))),ro(this,Mi(this.cm,n,n.length-1),r);})),getSelection:function(e){for(var t,r=this.sel.ranges,n=0;n<r.length;n++){var i=Xe(this,r[n].from(),r[n].to());t=t?t.concat(i):i;}return !1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],r=this.sel.ranges,n=0;n<r.length;n++){var i=Xe(this,r[n].from(),r[n].to());!1!==e&&(i=i.join(e||this.lineSeparator())),t[n]=i;}return t},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e;this.replaceSelections(n,t,r||"+input");},replaceSelections:oi((function(e,t,r){for(var n=[],i=this.sel,o=0;o<i.ranges.length;o++){var a=i.ranges[o];n[o]={from:a.from(),to:a.to(),text:this.splitLines(e[o]),origin:r};}for(var l=t&&"end"!=t&&function(e,t,r){for(var n=[],i=nt(e.first,0),o=i,a=0;a<t.length;a++){var l=t[a],s=Pi(l.from,i,o),c=Pi(Oi(l),i,o);if(i=l.to,o=c,"around"==r){var u=e.sel.ranges[a],d=it(u.head,u.anchor)<0;n[a]=new Ai(d?c:s,d?s:c);}else n[a]=new Ai(s,s);}return new Li(n,e.sel.primIndex)}(this,n,t),s=n.length-1;s>=0;s--)ho(this,n[s]);l?to(this,l):this.cm&&En(this.cm);})),undo:oi((function(){mo(this,"undo");})),redo:oi((function(){mo(this,"redo");})),undoSelection:oi((function(){mo(this,"undo",!0);})),redoSelection:oi((function(){mo(this,"redo",!0);})),setExtending:function(e){this.extend=e;},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t;for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r;return {undo:t,redo:r}},clearHistory:function(){var e=this;this.history=new $i(this.history),Ii(this,(function(t){return t.history=e.history}),!0);},markClean:function(){this.cleanGeneration=this.changeGeneration(!0);},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return {done:qi(this.history.done),undone:qi(this.history.undone)}},setHistory:function(e){var t=this.history=new $i(this.history);t.done=qi(e.done.slice(0),null,!0),t.undone=qi(e.undone.slice(0),null,!0);},setGutterMarker:oi((function(e,t,r){return xo(this,e,"gutter",(function(e){var n=e.gutterMarkers||(e.gutterMarkers={});return n[t]=r,!r&&ie(n)&&(e.gutterMarkers=null),!0}))})),clearGutter:oi((function(e){var t=this;this.iter((function(r){r.gutterMarkers&&r.gutterMarkers[e]&&xo(t,r,"gutter",(function(){return r.gutterMarkers[e]=null,ie(r.gutterMarkers)&&(r.gutterMarkers=null),!0}));}));})),lineInfo:function(e){var t;if("number"==typeof e){if(!tt(this,e))return null;if(t=e,!(e=qe(this,e)))return null}else if(null==(t=Je(e)))return null;return {line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:oi((function(e,t,r){return xo(this,e,"gutter"==t?"gutter":"class",(function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass";if(e[n]){if(T(r).test(e[n]))return !1;e[n]+=" "+r;}else e[n]=r;return !0}))})),removeLineClass:oi((function(e,t,r){return xo(this,e,"gutter"==t?"gutter":"class",(function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[n];if(!i)return !1;if(null==r)e[n]=null;else {var o=i.match(T(r));if(!o)return !1;var a=o.index+o[0].length;e[n]=i.slice(0,o.index)+(o.index&&a!=i.length?" ":"")+i.slice(a)||null;}return !0}))})),addLineWidget:oi((function(e,t,r){return function(e,t,r,n){var i=new To(e,r,n),o=e.cm;return o&&i.noHScroll&&(o.display.alignWidgets=!0),xo(e,t,"widget",(function(t){var r=t.widgets||(t.widgets=[]);if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!jt(e,t)){var n=Vt(t)<e.scrollTop;Qe(t,t.height+Cr(i)),n&&Pn(o,i.height),o.curOp.forceUpdate=!0;}return !0})),o&&ur(o,"lineWidgetAdded",o,i,"number"==typeof t?t:Je(t)),i}(this,e,t,r)})),removeLineWidget:function(e){e.clear();},markText:function(e,t,r){return zo(this,ut(this,e),ut(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents};return zo(this,e=ut(this,e),e,r,"bookmark")},findMarksAt:function(e){var t=[],r=qe(this,(e=ut(this,e)).line).markedSpans;if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker);}return t},findMarks:function(e,t,r){e=ut(this,e),t=ut(this,t);var n=[],i=e.line;return this.iter(e.line,t.line+1,(function(o){var a=o.markedSpans;if(a)for(var l=0;l<a.length;l++){var s=a[l];null!=s.to&&i==e.line&&e.ch>=s.to||null==s.from&&i!=e.line||null!=s.from&&i==t.line&&s.from>=t.ch||r&&!r(s.marker)||n.push(s.marker.parent||s.marker);}++i;})),n},getAllMarks:function(){var e=[];return this.iter((function(t){var r=t.markedSpans;if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker);})),e},posFromIndex:function(e){var t,r=this.first,n=this.lineSeparator().length;return this.iter((function(i){var o=i.text.length+n;if(o>e)return t=e,!0;e-=o,++r;})),ut(this,nt(r,t))},indexFromPos:function(e){var t=(e=ut(this,e)).ch;if(e.line<this.first||e.ch<0)return 0;var r=this.lineSeparator().length;return this.iter(this.first,e.line,(function(e){t+=e.text.length+r;})),t},copy:function(e){var t=new Eo(Ye(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={});var t=this.first,r=this.first+this.size;null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to);var n=new Eo(Ye(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction);return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),a=e.clipPos(i.to);if(it(o,a)){var l=zo(e,o,a,n.primary,n.primary.type);n.markers.push(l),l.parent=n;}}}(n,_o(this)),n},unlinkDoc:function(e){if(e instanceof za&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t)if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),No(_o(this));break}if(e.history==this.history){var r=[e.id];Ii(e,(function(e){return r.push(e.id)}),!0),e.history=new $i(null),e.history.done=qi(this.history.done,r),e.history.undone=qi(this.history.undone,r);}},iterLinkedDocs:function(e){Ii(this,e);},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Ee(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:oi((function(e){var t;"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter((function(e){return e.order=null})),this.cm&&ri(t=this.cm,(function(){Bi(t),pn(t);})));}))}),Eo.prototype.eachLine=Eo.prototype.iter;var Do=0;function Wo(e){var t=this;if(Fo(t),!ye(t,e)&&!Sr(t.display,e)){xe(e),a&&(Do=+new Date);var r=fn(t,e,!0),n=e.dataTransfer.files;if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),l=0,s=function(){++l==i&&ni(t,(function(){var e={from:r=ut(t.doc,r),to:r,text:t.doc.splitLines(o.filter((function(e){return null!=e})).join(t.doc.lineSeparator())),origin:"paste"};ho(t.doc,e),to(t.doc,zi(ut(t.doc,r),ut(t.doc,Oi(e))));}))();},c=function(e,r){if(t.options.allowDropFileTypes&&-1==Z(t.options.allowDropFileTypes,e.type))s();else {var n=new FileReader;n.onerror=function(){return s()},n.onload=function(){var e=n.result;/[\x00-\x08\x0e-\x1f]{2}/.test(e)||(o[r]=e),s();},n.readAsText(e);}},u=0;u<n.length;u++)c(n[u],u);else {if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout((function(){return t.display.input.focus()}),20);try{var d=e.dataTransfer.getData("Text");if(d){var f;if(t.state.draggingText&&!t.state.draggingText.copy&&(f=t.listSelections()),no(t.doc,zi(r,r)),f)for(var h=0;h<f.length;++h)yo(t.doc,"",f[h].anchor,f[h].head,"drag");t.replaceSelection(d,"around","paste"),t.display.input.focus();}}catch(e){}}}}function Fo(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null);}function Io(e){if(document.getElementsByClassName){for(var t=document.getElementsByClassName("CodeMirror"),r=[],n=0;n<t.length;n++){var i=t[n].CodeMirror;i&&r.push(i);}r.length&&r[0].operation((function(){for(var t=0;t<r.length;t++)e(r[t]);}));}}var Ho=!1;function Bo(e){var t=e.display;t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize();}for(var $o={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Ro=0;Ro<10;Ro++)$o[Ro+48]=$o[Ro+96]=Ro+"";for(var Zo=65;Zo<=90;Zo++)$o[Zo]=String.fromCharCode(Zo);for(var jo=1;jo<=12;jo++)$o[jo+111]=$o[jo+63235]="F"+jo;var Uo={};function Vo(e){var t,r,n,i,o=e.split(/-(?!$)/);e=o[o.length-1];for(var a=0;a<o.length-1;a++){var l=o[a];if(/^(cmd|meta|m)$/i.test(l))i=!0;else if(/^a(lt)?$/i.test(l))t=!0;else if(/^(c|ctrl|control)$/i.test(l))r=!0;else {if(!/^s(hift)?$/i.test(l))throw Error("Unrecognized modifier name: "+l);n=!0;}}return t&&(e="Alt-"+e),r&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),n&&(e="Shift-"+e),e}function Ko(e){var t={};for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue;if("..."==n){delete e[r];continue}for(var i=Q(r.split(" "),Vo),o=0;o<i.length;o++){var a=void 0,l=void 0;o==i.length-1?(l=i.join(" "),a=n):(l=i.slice(0,o+1).join(" "),a="...");var s=t[l];if(s){if(s!=a)throw Error("Inconsistent bindings for "+l)}else t[l]=a;}delete e[r];}for(var c in t)e[c]=t[c];return e}function Go(e,t,r,n){var i=(t=Qo(t)).call?t.call(e,n):t[e];if(!1===i)return "nothing";if("..."===i)return "multi";if(null!=i&&r(i))return "handled";if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return Go(e,t.fallthrough,r,n);for(var o=0;o<t.fallthrough.length;o++){var a=Go(e,t.fallthrough[o],r,n);if(a)return a}}}function qo(e){var t="string"==typeof e?e:$o[e.keyCode];return "Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Xo(e,t,r){var n=e;return t.altKey&&"Alt"!=n&&(e="Alt-"+e),(C?t.metaKey:t.ctrlKey)&&"Ctrl"!=n&&(e="Ctrl-"+e),(C?t.ctrlKey:t.metaKey)&&"Mod"!=n&&(e="Cmd-"+e),!r&&t.shiftKey&&"Shift"!=n&&(e="Shift-"+e),e}function Yo(e,t){if(f&&34==e.keyCode&&e.char)return !1;var r=$o[e.keyCode];return null!=r&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(r=e.code),Xo(r,e,t))}function Qo(e){return "string"==typeof e?Uo[e]:e}function Jo(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&it(o.from,Y(n).to)<=0;){var a=n.pop();if(it(a.from,o.from)<0){o.from=a.from;break}}n.push(o);}ri(e,(function(){for(var t=n.length-1;t>=0;t--)yo(e.doc,"",n[t].from,n[t].to,"+delete");En(e);}));}function ea(e,t,r){var n=le(e.text,t+r,r);return n<0||n>e.text.length?null:n}function ta(e,t,r){var n=ea(e,t.ch,r);return null==n?null:new nt(t.line,n,r<0?"after":"before")}function ra(e,t,r,n,i){if(e){"rtl"==t.doc.direction&&(i=-i);var o=fe(r,t.doc.direction);if(o){var a,l=i<0?Y(o):o[0],s=i<0==(1==l.level)?"after":"before";if(l.level>0||"rtl"==t.doc.direction){var c=Er(t,r);a=i<0?r.text.length-1:0;var u=Dr(t,c,a).top;a=se((function(e){return Dr(t,c,e).top==u}),i<0==(1==l.level)?l.from:l.to-1,a),"before"==s&&(a=ea(r,a,1));}else a=i<0?l.to:l.from;return new nt(n,a,s)}}return new nt(n,i<0?r.text.length:0,i<0?"before":"after")}Uo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Uo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Uo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Uo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Uo.default=b?Uo.macDefault:Uo.pcDefault;var na={selectAll:uo,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),U)},killLine:function(e){return Jo(e,(function(t){if(t.empty()){var r=qe(e.doc,t.head.line).text.length;return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:nt(t.head.line+1,0)}:{from:t.head,to:nt(t.head.line,r)}}return {from:t.from(),to:t.to()}}))},deleteLine:function(e){return Jo(e,(function(t){return {from:nt(t.from().line,0),to:ut(e.doc,nt(t.to().line+1,0))}}))},delLineLeft:function(e){return Jo(e,(function(e){return {from:nt(e.from().line,0),to:e.from()}}))},delWrappedLineLeft:function(e){return Jo(e,(function(t){var r=e.charCoords(t.head,"div").top+5;return {from:e.coordsChar({left:0,top:r},"div"),to:t.from()}}))},delWrappedLineRight:function(e){return Jo(e,(function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div");return {from:t.from(),to:n}}))},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(nt(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(nt(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy((function(t){return ia(e,t.head.line)}),{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy((function(t){return oa(e,t.head)}),{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy((function(t){return function(e,t){var r=qe(e.doc,t),n=function(e){for(var t;t=It(e);)e=t.find(1,!0).line;return e}(r);return n!=r&&(t=Je(n)),ra(!0,e,r,t,-1)}(e,t.head.line)}),{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy((function(t){var r=e.cursorCoords(t.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")}),K)},goLineLeft:function(e){return e.extendSelectionsBy((function(t){var r=e.cursorCoords(t.head,"div").top+5;return e.coordsChar({left:0,top:r},"div")}),K)},goLineLeftSmart:function(e){return e.extendSelectionsBy((function(t){var r=e.cursorCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div");return n.ch<e.getLine(n.line).search(/\S/)?oa(e,t.head):n}),K)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),a=$(e.getLine(o.line),o.ch,n);t.push(X(n-a%n));}e.replaceSelections(t);},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab");},transposeChars:function(e){return ri(e,(function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++)if(t[n].empty()){var i=t[n].head,o=qe(e.doc,i.line).text;if(o)if(i.ch==o.length&&(i=new nt(i.line,i.ch-1)),i.ch>0)i=new nt(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),nt(i.line,i.ch-2),i,"+transpose");else if(i.line>e.doc.first){var a=qe(e.doc,i.line-1).text;a&&(i=new nt(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),nt(i.line-1,a.length-1),i,"+transpose"));}r.push(new Ai(i,i));}e.setSelections(r);}))},newlineAndIndent:function(e){return ri(e,(function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange(e.doc.lineSeparator(),t[r].anchor,t[r].head,"+input");t=e.listSelections();for(var n=0;n<t.length;n++)e.indentLine(t[n].from().line,null,!0);En(e);}))},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function ia(e,t){var r=qe(e.doc,t),n=$t(r);return n!=r&&(t=Je(n)),ra(!0,e,n,t,1)}function oa(e,t){var r=ia(e,t.line),n=qe(e.doc,r.line),i=fe(n,e.doc.direction);if(!i||0==i[0].level){var o=Math.max(r.ch,n.text.search(/\S/)),a=t.line==r.line&&t.ch<=o&&t.ch;return nt(r.line,a?0:o,r.sticky)}return r}function aa(e,t,r){if("string"==typeof t&&!(t=na[t]))return !1;e.display.input.ensurePolled();var n=e.display.shift,i=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=j;}finally{e.display.shift=n,e.state.suppressEdits=!1;}return i}var la=new R;function sa(e,t,r,n){var i=e.state.keySeq;if(i){if(qo(t))return "handled";if(/\'$/.test(t)?e.state.keySeq=null:la.set(50,(function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset());})),ca(e,i+" "+t,r,n))return !0}return ca(e,t,r,n)}function ca(e,t,r,n){var i=function(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=Go(t,e.state.keyMaps[n],r,e);if(i)return i}return e.options.extraKeys&&Go(t,e.options.extraKeys,r,e)||Go(t,e.options.keyMap,r,e)}(e,t,n);return "multi"==i&&(e.state.keySeq=t),"handled"==i&&ur(e,"keyHandled",e,t,r),"handled"!=i&&"multi"!=i||(xe(r),Sn(e)),!!i}function ua(e,t){var r=Yo(t,!0);return !!r&&(t.shiftKey&&!e.state.keySeq?sa(e,"Shift-"+r,t,(function(t){return aa(e,t,!0)}))||sa(e,r,t,(function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return aa(e,t)})):sa(e,r,t,(function(t){return aa(e,t)})))}var da=null;function fa(e){var t=this;if(!(e.target&&e.target!=t.display.input.getField()||(t.curOp.focus=P(F(t)),ye(t,e)))){a&&l<11&&27==e.keyCode&&(e.returnValue=!1);var n=e.keyCode;t.display.shift=16==n||e.shiftKey;var i=ua(t,e);f&&(da=i?n:null,i||88!=n||We||!(b?e.metaKey:e.ctrlKey)||t.replaceSelection("",null,"cut")),r&&!b&&!i&&46==n&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),18!=n||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){var t=e.display.lineDiv;function r(e){18!=e.keyCode&&e.altKey||(A(t,"CodeMirror-crosshair"),ge(document,"keyup",r),ge(document,"mouseover",r));}E(t,"CodeMirror-crosshair"),pe(document,"keyup",r),pe(document,"mouseover",r);}(t);}}function ha(e){16==e.keyCode&&(this.doc.sel.shift=!1),ye(this,e);}function pa(e){var t=this;if(!(e.target&&e.target!=t.display.input.getField()||Sr(t.display,e)||ye(t,e)||e.ctrlKey&&!e.altKey||b&&e.metaKey)){var r=e.keyCode,n=e.charCode;if(f&&r==da)return da=null,void xe(e);if(!f||e.which&&!(e.which<10)||!ua(t,e)){var i=String.fromCharCode(null==n?r:n);"\b"!=i&&(function(e,t,r){return sa(e,"'"+r+"'",t,(function(t){return aa(e,t,!0)}))}(t,e,i)||t.display.input.onKeyPress(e));}}}var ma,ga,va=function(e,t,r){this.time=e,this.pos=t,this.button=r;};function ya(e){var t=this,r=t.display;if(!(ye(t,e)||r.activeTouch&&r.input.supportsTouch()))if(r.input.ensurePolled(),r.shift=e.shiftKey,Sr(r,e))s||(r.scroller.draggable=!1,setTimeout((function(){return r.scroller.draggable=!0}),100));else if(!ka(t,e)){var n=fn(t,e),i=Ae(e),o=n?function(e,t){var r=+new Date;return ga&&ga.compare(r,e,t)?(ma=ga=null,"triple"):ma&&ma.compare(r,e,t)?(ga=new va(r,e,t),ma=null,"double"):(ma=new va(r,e,t),ga=null,"single")}(n,i):"single";I(t).focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),n&&function(e,t,r,n,i){var o="Click";return "double"==n?o="Double"+o:"triple"==n&&(o="Triple"+o),sa(e,Xo(o=(1==t?"Left":2==t?"Middle":"Right")+o,i),i,(function(t){if("string"==typeof t&&(t=na[t]),!t)return !1;var n=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),n=t(e,r)!=j;}finally{e.state.suppressEdits=!1;}return n}))}(t,i,n,o,e)||(1==i?n?function(e,t,r,n){a?setTimeout(H(Tn,e),0):e.curOp.focus=P(F(e));var i,o=function(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{};if(null==i.unit){var o=w?r.shiftKey&&r.metaKey:r.altKey;i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line";}return (null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||r.shiftKey),null==i.addNew&&(i.addNew=b?r.metaKey:r.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(b?r.altKey:r.ctrlKey)),i}(e,r,n),c=e.doc.sel;e.options.dragDrop&&Oe&&!e.isReadOnly()&&"single"==r&&(i=c.contains(t))>-1&&(it((i=c.ranges[i]).from(),t)<0||t.xRel>0)&&(it(i.to(),t)>0||t.xRel<0)?function(e,t,r,n){var i=e.display,o=!1,c=ni(e,(function(t){s&&(i.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:Ln(e)),ge(i.wrapper.ownerDocument,"mouseup",c),ge(i.wrapper.ownerDocument,"mousemove",u),ge(i.scroller,"dragstart",d),ge(i.scroller,"drop",c),o||(xe(t),n.addNew||Yi(e.doc,r,null,null,n.extend),s&&!h||a&&9==l?setTimeout((function(){i.wrapper.ownerDocument.body.focus({preventScroll:!0}),i.input.focus();}),20):i.input.focus());})),u=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10;},d=function(){return o=!0};s&&(i.scroller.draggable=!0),e.state.draggingText=c,c.copy=!n.moveOnDrag,pe(i.wrapper.ownerDocument,"mouseup",c),pe(i.wrapper.ownerDocument,"mousemove",u),pe(i.scroller,"dragstart",d),pe(i.scroller,"drop",c),e.state.delayingBlurEvent=!0,setTimeout((function(){return i.input.focus()}),20),i.scroller.dragDrop&&i.scroller.dragDrop();}(e,n,t,o):function(e,t,r,n){a&&Ln(e);var i=e.display,o=e.doc;xe(t);var l,s,c=o.sel,u=c.ranges;if(n.addNew&&!n.extend?(s=o.sel.contains(r),l=s>-1?u[s]:new Ai(r,r)):(l=o.sel.primary(),s=o.sel.primIndex),"rectangle"==n.unit)n.addNew||(l=new Ai(r,r)),r=fn(e,t,!0,!0),s=-1;else {var d=ba(e,r,n.unit);l=n.extend?Xi(l,d.anchor,d.head,n.extend):d;}n.addNew?-1==s?(s=u.length,ro(o,Mi(e,u.concat([l]),s),{scroll:!1,origin:"*mouse"})):u.length>1&&u[s].empty()&&"char"==n.unit&&!n.extend?(ro(o,Mi(e,u.slice(0,s).concat(u.slice(s+1)),0),{scroll:!1,origin:"*mouse"}),c=o.sel):Ji(o,s,l,V):(s=0,ro(o,new Li([l],0),V),c=o.sel);var f=r;var h=i.wrapper.getBoundingClientRect(),p=0;function m(t){var a=++p,u=fn(e,t,!0,"rectangle"==n.unit);if(u)if(0!=it(u,f)){e.curOp.focus=P(F(e)),function(t){if(0!=it(f,t))if(f=t,"rectangle"==n.unit){for(var i=[],a=e.options.tabSize,u=$(qe(o,r.line).text,r.ch,a),d=$(qe(o,t.line).text,t.ch,a),h=Math.min(u,d),p=Math.max(u,d),m=Math.min(r.line,t.line),g=Math.min(e.lastLine(),Math.max(r.line,t.line));m<=g;m++){var v=qe(o,m).text,y=G(v,h,a);h==p?i.push(new Ai(nt(m,y),nt(m,y))):v.length>y&&i.push(new Ai(nt(m,y),nt(m,G(v,p,a))));}i.length||i.push(new Ai(r,r)),ro(o,Mi(e,c.ranges.slice(0,s).concat(i),s),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t);}else {var b,w=l,k=ba(e,t,n.unit),x=w.anchor;it(k.anchor,x)>0?(b=k.head,x=st(w.from(),k.anchor)):(b=k.anchor,x=lt(w.to(),k.head));var C=c.ranges.slice(0);C[s]=function(e,t){var r=t.anchor,n=t.head,i=qe(e.doc,r.line);if(0==it(r,n)&&r.sticky==n.sticky)return t;var o=fe(i);if(!o)return t;var a=ue(o,r.ch,r.sticky),l=o[a];if(l.from!=r.ch&&l.to!=r.ch)return t;var s,c=a+(l.from==r.ch==(1!=l.level)?0:1);if(0==c||c==o.length)return t;if(n.line!=r.line)s=(n.line-r.line)*("ltr"==e.doc.direction?1:-1)>0;else {var u=ue(o,n.ch,n.sticky),d=u-a||(n.ch-r.ch)*(1==l.level?-1:1);s=u==c-1||u==c?d<0:d>0;}var f=o[c+(s?-1:0)],h=s==(1==f.level),p=h?f.from:f.to,m=h?"after":"before";return r.ch==p&&r.sticky==m?t:new Ai(new nt(r.line,p,m),n)}(e,new Ai(ut(o,x),b)),ro(o,Mi(e,C,s),V);}}(u);var d=_n(i,o);(u.line>=d.to||u.line<d.from)&&setTimeout(ni(e,(function(){p==a&&m(t);})),150);}else {var g=t.clientY<h.top?-20:t.clientY>h.bottom?20:0;g&&setTimeout(ni(e,(function(){p==a&&(i.scroller.scrollTop+=g,m(t));})),50);}}function g(t){e.state.selectingText=!1,p=1/0,t&&(xe(t),i.input.focus()),ge(i.wrapper.ownerDocument,"mousemove",v),ge(i.wrapper.ownerDocument,"mouseup",y),o.history.lastSelOrigin=null;}var v=ni(e,(function(e){0!==e.buttons&&Ae(e)?m(e):g(e);})),y=ni(e,g);e.state.selectingText=y,pe(i.wrapper.ownerDocument,"mousemove",v),pe(i.wrapper.ownerDocument,"mouseup",y);}(e,n,t,o);}(t,n,o,e):Le(e)==r.scroller&&xe(e):2==i?(n&&Yi(t.doc,n),setTimeout((function(){return r.input.focus()}),20)):3==i&&(S?t.display.input.onContextMenu(e):Ln(t)));}}function ba(e,t,r){if("char"==r)return new Ai(t,t);if("word"==r)return e.findWordAt(t);if("line"==r)return new Ai(nt(t.line,0),ut(e.doc,nt(t.line+1,0)));var n=r(e,t);return new Ai(n.from,n.to)}function wa(e,t,r,n){var i,o;if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY;else try{i=t.clientX,o=t.clientY;}catch(e){return !1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return !1;n&&xe(t);var a=e.display,l=a.lineDiv.getBoundingClientRect();if(o>l.bottom||!we(e,r))return Se(t);o-=l.top-a.viewOffset;for(var s=0;s<e.display.gutterSpecs.length;++s){var c=a.gutters.childNodes[s];if(c&&c.getBoundingClientRect().right>=i)return ve(e,r,e,et(e.doc,o),e.display.gutterSpecs[s].className,t),Se(t)}}function ka(e,t){return wa(e,t,"gutterClick",!0)}function xa(e,t){Sr(e.display,t)||function(e,t){return !!we(e,"gutterContextMenu")&&wa(e,t,"gutterContextMenu",!1)}(e,t)||ye(e,t,"contextmenu")||S||e.display.input.onContextMenu(t);}function Ca(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Rr(e);}va.prototype.compare=function(e,t,r){return this.time+400>e&&0==it(t,this.pos)&&r==this.button};var Sa={toString:function(){return "CodeMirror.Init"}},Ta={},La={};function Aa(e,t,r){if(!t!=!(r&&r!=Sa)){var n=e.display.dragFunctions,i=t?pe:ge;i(e.display.scroller,"dragstart",n.start),i(e.display.scroller,"dragenter",n.enter),i(e.display.scroller,"dragover",n.over),i(e.display.scroller,"dragleave",n.leave),i(e.display.scroller,"drop",n.drop);}}function Ma(e){e.options.lineWrapping?(E(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(A(e.display.wrapper,"CodeMirror-wrap"),Gt(e)),dn(e),pn(e),Rr(e),setTimeout((function(){return jn(e)}),100);}function za(e,t){var r=this;if(!(this instanceof za))return new za(e,t);this.options=t=t?B(t):{},B(Ta,t,!1);var n=t.value;"string"==typeof n?n=new Eo(n,t.mode,null,t.lineSeparator,t.direction):t.mode&&(n.modeOption=t.mode),this.doc=n;var i=new za.inputStyles[t.inputStyle](this),o=this.display=new wi(e,n,i,t);for(var c in o.wrapper.CodeMirror=this,Ca(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),Kn(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new R,keySeq:null,specialChars:null},t.autofocus&&!y&&o.input.focus(),a&&l<11&&setTimeout((function(){return r.display.input.reset(!0)}),20),function(e){var t=e.display;pe(t.scroller,"mousedown",ni(e,ya)),pe(t.scroller,"dblclick",a&&l<11?ni(e,(function(t){if(!ye(e,t)){var r=fn(e,t);if(r&&!ka(e,t)&&!Sr(e.display,t)){xe(t);var n=e.findWordAt(r);Yi(e.doc,n.anchor,n.head);}}})):function(t){return ye(e,t)||xe(t)}),pe(t.scroller,"contextmenu",(function(t){return xa(e,t)})),pe(t.input.getField(),"contextmenu",(function(r){t.scroller.contains(r.target)||xa(e,r);}));var r,n={end:0};function i(){t.activeTouch&&(r=setTimeout((function(){return t.activeTouch=null}),1e3),(n=t.activeTouch).end=+new Date);}function o(e,t){if(null==t.left)return !0;var r=t.left-e.left,n=t.top-e.top;return r*r+n*n>400}pe(t.scroller,"touchstart",(function(i){if(!ye(e,i)&&!function(e){if(1!=e.touches.length)return !1;var t=e.touches[0];return t.radiusX<=1&&t.radiusY<=1}(i)&&!ka(e,i)){t.input.ensurePolled(),clearTimeout(r);var o=+new Date;t.activeTouch={start:o,moved:!1,prev:o-n.end<=300?n:null},1==i.touches.length&&(t.activeTouch.left=i.touches[0].pageX,t.activeTouch.top=i.touches[0].pageY);}})),pe(t.scroller,"touchmove",(function(){t.activeTouch&&(t.activeTouch.moved=!0);})),pe(t.scroller,"touchend",(function(r){var n=t.activeTouch;if(n&&!Sr(t,r)&&null!=n.left&&!n.moved&&new Date-n.start<300){var a,l=e.coordsChar(t.activeTouch,"page");a=!n.prev||o(n,n.prev)?new Ai(l,l):!n.prev.prev||o(n,n.prev.prev)?e.findWordAt(l):new Ai(nt(l.line,0),ut(e.doc,nt(l.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),xe(r);}i();})),pe(t.scroller,"touchcancel",i),pe(t.scroller,"scroll",(function(){t.scroller.clientHeight&&(In(e,t.scroller.scrollTop),Bn(e,t.scroller.scrollLeft,!0),ve(e,"scroll",e));})),pe(t.scroller,"mousewheel",(function(t){return Ti(e,t)})),pe(t.scroller,"DOMMouseScroll",(function(t){return Ti(e,t)})),pe(t.wrapper,"scroll",(function(){return t.wrapper.scrollTop=t.wrapper.scrollLeft=0})),t.dragFunctions={enter:function(t){ye(e,t)||Te(t);},over:function(t){ye(e,t)||(function(e,t){var r=fn(e,t);if(r){var n=document.createDocumentFragment();kn(e,r,n),e.display.dragCursor||(e.display.dragCursor=O("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),z(e.display.dragCursor,n);}}(e,t),Te(t));},start:function(t){return function(e,t){if(a&&(!e.state.draggingText||+new Date-Do<100))Te(t);else if(!ye(e,t)&&!Sr(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!h)){var r=O("img",null,null,"position: fixed; left: 0; top: 0;");r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",f&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),f&&r.parentNode.removeChild(r);}}(e,t)},drop:ni(e,Wo),leave:function(t){ye(e,t)||Fo(e);}};var s=t.input.getField();pe(s,"keyup",(function(t){return ha.call(e,t)})),pe(s,"keydown",ni(e,fa)),pe(s,"keypress",ni(e,pa)),pe(s,"focus",(function(t){return An(e,t)})),pe(s,"blur",(function(t){return Mn(e,t)}));}(this),function(){var e;Ho||(pe(window,"resize",(function(){null==e&&(e=setTimeout((function(){e=null,Io(Bo);}),100));})),pe(window,"blur",(function(){return Io(Mn)})),Ho=!0);}(),qn(this),this.curOp.forceUpdate=!0,Hi(this,n),t.autofocus&&!y||this.hasFocus()?setTimeout((function(){r.hasFocus()&&!r.state.focused&&An(r);}),20):Mn(this),La)La.hasOwnProperty(c)&&La[c](this,t[c],Sa);gi(this),t.finishInit&&t.finishInit(this);for(var u=0;u<Oa.length;++u)Oa[u](this);Xn(this),s&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto");}za.defaults=Ta,za.optionHandlers=La;var Oa=[];function _a(e,t,r,n){var i,o=e.doc;null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=gt(e,t).state:r="prev");var a=e.options.tabSize,l=qe(o,t),s=$(l.text,null,a);l.stateAfter&&(l.stateAfter=null);var c,u=l.text.match(/^\s*/)[0];if(n||/\S/.test(l.text)){if("smart"==r&&((c=o.mode.indent(i,l.text.slice(u.length),l.text))==j||c>150)){if(!n)return;r="prev";}}else c=0,r="not";"prev"==r?c=t>o.first?$(qe(o,t-1).text,null,a):0:"add"==r?c=s+e.options.indentUnit:"subtract"==r?c=s-e.options.indentUnit:"number"==typeof r&&(c=s+r),c=Math.max(0,c);var d="",f=0;if(e.options.indentWithTabs)for(var h=Math.floor(c/a);h;--h)f+=a,d+="\t";if(f<c&&(d+=X(c-f)),d!=u)return yo(o,d,nt(t,0),nt(t,u.length),"+input"),l.stateAfter=null,!0;for(var p=0;p<o.sel.ranges.length;p++){var m=o.sel.ranges[p];if(m.head.line==t&&m.head.ch<u.length){var g=nt(t,u.length);Ji(o,p,new Ai(g,g));break}}}za.defineInitHook=function(e){return Oa.push(e)};var Na=null;function Pa(e){Na=e;}function Ea(e,t,r,n,i){var o=e.doc;e.display.shift=!1,n||(n=o.sel);var a=+new Date-200,l="paste"==i||e.state.pasteIncoming>a,s=Ee(t),c=null;if(l&&n.ranges.length>1)if(Na&&Na.text.join("\n")==t){if(n.ranges.length%Na.text.length==0){c=[];for(var u=0;u<Na.text.length;u++)c.push(o.splitLines(Na.text[u]));}}else s.length==n.ranges.length&&e.options.pasteLinesPerSelection&&(c=Q(s,(function(e){return [e]})));for(var d=e.curOp.updateInput,f=n.ranges.length-1;f>=0;f--){var h=n.ranges[f],p=h.from(),m=h.to();h.empty()&&(r&&r>0?p=nt(p.line,p.ch-r):e.state.overwrite&&!l?m=nt(m.line,Math.min(qe(o,m.line).text.length,m.ch+Y(s).length)):l&&Na&&Na.lineWise&&Na.text.join("\n")==s.join("\n")&&(p=m=nt(p.line,0)));var g={from:p,to:m,text:c?c[f%c.length]:s,origin:i||(l?"paste":e.state.cutIncoming>a?"cut":"+input")};ho(e.doc,g),ur(e,"inputRead",e,g);}t&&!l&&Wa(e,t),En(e),e.curOp.updateInput<2&&(e.curOp.updateInput=d),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1;}function Da(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text");if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||!t.hasFocus()||ri(t,(function(){return Ea(t,r,0,null,"paste")})),!0}function Wa(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n];if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1;if(o.electricChars){for(var l=0;l<o.electricChars.length;l++)if(t.indexOf(o.electricChars.charAt(l))>-1){a=_a(e,i.head.line,"smart");break}}else o.electricInput&&o.electricInput.test(qe(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=_a(e,i.head.line,"smart"));a&&ur(e,"electricInput",e,i.head.line);}}}function Fa(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:nt(i,0),head:nt(i+1,0)};r.push(o),t.push(e.getRange(o.anchor,o.head));}return {text:t,ranges:r}}function Ia(e,t,r,n){e.setAttribute("autocorrect",r?"":"off"),e.setAttribute("autocapitalize",n?"":"off"),e.setAttribute("spellcheck",!!t);}function Ha(){var e=O("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),t=O("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return s?e.style.width="1000px":e.setAttribute("wrap","off"),g&&(e.style.border="1px solid black"),Ia(e),t}function Ba(e,t,r,n,i){var o=t,a=r,l=qe(e,t.line),s=i&&"rtl"==e.direction?-r:r;function c(o){var a,c;if("codepoint"==n){var u=l.text.charCodeAt(t.ch+(r>0?0:-1));if(isNaN(u))a=null;else {var d=r>0?u>=55296&&u<56320:u>=56320&&u<57343;a=new nt(t.line,Math.max(0,Math.min(l.text.length,t.ch+r*(d?2:1))),-r);}}else a=i?function(e,t,r,n){var i=fe(t,e.doc.direction);if(!i)return ta(t,r,n);r.ch>=t.text.length?(r.ch=t.text.length,r.sticky="before"):r.ch<=0&&(r.ch=0,r.sticky="after");var o=ue(i,r.ch,r.sticky),a=i[o];if("ltr"==e.doc.direction&&a.level%2==0&&(n>0?a.to>r.ch:a.from<r.ch))return ta(t,r,n);var l,s=function(e,r){return ea(t,e instanceof nt?e.ch:e,r)},c=function(r){return e.options.lineWrapping?(l=l||Er(e,t),en(e,t,l,r)):{begin:0,end:t.text.length}},u=c("before"==r.sticky?s(r,-1):r.ch);if("rtl"==e.doc.direction||1==a.level){var d=1==a.level==n<0,f=s(r,d?1:-1);if(null!=f&&(d?f<=a.to&&f<=u.end:f>=a.from&&f>=u.begin)){var h=d?"before":"after";return new nt(r.line,f,h)}}var p=function(e,t,n){for(var o=function(e,t){return t?new nt(r.line,s(e,1),"before"):new nt(r.line,e,"after")};e>=0&&e<i.length;e+=t){var a=i[e],l=t>0==(1!=a.level),c=l?n.begin:s(n.end,-1);if(a.from<=c&&c<a.to)return o(c,l);if(c=l?a.from:s(a.to,-1),n.begin<=c&&c<n.end)return o(c,l)}},m=p(o+n,n,u);if(m)return m;var g=n>0?u.end:s(u.begin,-1);return null==g||n>0&&g==t.text.length||!(m=p(n>0?0:i.length-1,n,c(g)))?null:m}(e.cm,l,t,r):ta(l,t,r);if(null==a){if(o||(c=t.line+s)<e.first||c>=e.first+e.size||(t=new nt(c,t.ch,t.sticky),!(l=qe(e,c))))return !1;t=ra(i,e.cm,l,t.line,s);}else t=a;return !0}if("char"==n||"codepoint"==n)c();else if("column"==n)c(!0);else if("word"==n||"group"==n)for(var u=null,d="group"==n,f=e.cm&&e.cm.getHelper(t,"wordChars"),h=!0;!(r<0)||c(!h);h=!1){var p=l.text.charAt(t.ch)||"\n",m=ne(p,f)?"w":d&&"\n"==p?"n":!d||/\s/.test(p)?null:"p";if(!d||h||m||(m="s"),u&&u!=m){r<0&&(r=1,c(),t.sticky="after");break}if(m&&(u=m),r>0&&!c(!h))break}var g=so(e,t,o,a,!0);return ot(o,g)&&(g.hitSide=!0),g}function $a(e,t,r,n){var i,o,a=e.doc,l=t.left;if("page"==n){var s=Math.min(e.display.wrapper.clientHeight,I(e).innerHeight||a(e).documentElement.clientHeight),c=Math.max(s-.5*an(e.display),3);i=(r>0?t.bottom:t.top)+r*c;}else "line"==n&&(i=r>0?t.bottom+3:t.top-3);for(;(o=Qr(e,l,i)).outside;){if(r<0?i<=0:i>=a.height){o.hitSide=!0;break}i+=5*r;}return o}var Ra=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new R,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null;};function Za(e,t){var r=Pr(e,t.line);if(!r||r.hidden)return null;var n=qe(e.doc,t.line),i=_r(r,n,t.line),o=fe(n,e.doc.direction),a="left";o&&(a=ue(o,t.ch)%2?"right":"left");var l=Ir(i.map,t.ch,a);return l.offset="right"==l.collapse?l.end:l.start,l}function ja(e,t){return t&&(e.bad=!0),e}function Ua(e,t,r){var n;if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return ja(e.clipPos(nt(e.display.viewTo-1)),!0);t=null,r=0;}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null;if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i];if(o.node==n)return Va(o,t,r)}}function Va(e,t,r){var n=e.text.firstChild,i=!1;if(!t||!N(n,t))return ja(nt(Je(e.line),0),!0);if(t==n&&(i=!0,t=n.childNodes[r],r=0,!t)){var o=e.rest?Y(e.rest):e.line;return ja(nt(Je(o),o.text.length),i)}var a=3==t.nodeType?t:null,l=t;for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,r&&(r=a.nodeValue.length));l.parentNode!=n;)l=l.parentNode;var s=e.measure,c=s.maps;function u(t,r,n){for(var i=-1;i<(c?c.length:0);i++)for(var o=i<0?s.map:c[i],a=0;a<o.length;a+=3){var l=o[a+2];if(l==t||l==r){var u=Je(i<0?e.line:e.rest[i]),d=o[a]+n;return (n<0||l!=t)&&(d=o[a+(n?1:0)]),nt(u,d)}}}var d=u(a,l,r);if(d)return ja(d,i);for(var f=l.nextSibling,h=a?a.nodeValue.length-r:0;f;f=f.nextSibling){if(d=u(f,f.firstChild,0))return ja(nt(d.line,d.ch-h),i);h+=f.textContent.length;}for(var p=l.previousSibling,m=r;p;p=p.previousSibling){if(d=u(p,p.firstChild,-1))return ja(nt(d.line,d.ch+m),i);m+=p.textContent.length;}}Ra.prototype.init=function(e){var t=this,r=this,n=r.cm,i=r.div=e.lineDiv;function o(e){for(var t=e.target;t;t=t.parentNode){if(t==i)return !0;if(/\bCodeMirror-(?:line)?widget\b/.test(t.className))break}return !1}function a(e){if(o(e)&&!ye(n,e)){if(n.somethingSelected())Pa({lineWise:!1,text:n.getSelections()}),"cut"==e.type&&n.replaceSelection("",null,"cut");else {if(!n.options.lineWiseCopyCut)return;var t=Fa(n);Pa({lineWise:!0,text:t.text}),"cut"==e.type&&n.operation((function(){n.setSelections(t.ranges,0,U),n.replaceSelection("",null,"cut");}));}if(e.clipboardData){e.clipboardData.clearData();var a=Na.text.join("\n");if(e.clipboardData.setData("Text",a),e.clipboardData.getData("Text")==a)return void e.preventDefault()}var l=Ha(),s=l.firstChild;n.display.lineSpace.insertBefore(l,n.display.lineSpace.firstChild),s.value=Na.text.join("\n");var c=P(i.ownerDocument);W(s),setTimeout((function(){n.display.lineSpace.removeChild(l),c.focus(),c==i&&r.showPrimarySelection();}),50);}}i.contentEditable=!0,Ia(i,n.options.spellcheck,n.options.autocorrect,n.options.autocapitalize),pe(i,"paste",(function(e){!o(e)||ye(n,e)||Da(e,n)||l<=11&&setTimeout(ni(n,(function(){return t.updateFromDOM()})),20);})),pe(i,"compositionstart",(function(e){t.composing={data:e.data,done:!1};})),pe(i,"compositionupdate",(function(e){t.composing||(t.composing={data:e.data,done:!1});})),pe(i,"compositionend",(function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0);})),pe(i,"touchstart",(function(){return r.forceCompositionEnd()})),pe(i,"input",(function(){t.composing||t.readFromDOMSoon();})),pe(i,"copy",a),pe(i,"cut",a);},Ra.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label");},Ra.prototype.prepareSelection=function(){var e=wn(this.cm,!1);return e.focus=P(this.div.ownerDocument)==this.div,e},Ra.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e));},Ra.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Ra.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,n=t.doc.sel.primary(),i=n.from(),o=n.to();if(t.display.viewTo==t.display.viewFrom||i.line>=t.display.viewTo||o.line<t.display.viewFrom)e.removeAllRanges();else {var a=Ua(t,e.anchorNode,e.anchorOffset),l=Ua(t,e.focusNode,e.focusOffset);if(!a||a.bad||!l||l.bad||0!=it(st(a,l),i)||0!=it(lt(a,l),o)){var s=t.display.view,c=i.line>=t.display.viewFrom&&Za(t,i)||{node:s[0].measure.map[2],offset:0},u=o.line<t.display.viewTo&&Za(t,o);if(!u){var d=s[s.length-1].measure,f=d.maps?d.maps[d.maps.length-1]:d.map;u={node:f[f.length-1],offset:f[f.length-2]-f[f.length-3]};}if(c&&u){var h,p=e.rangeCount&&e.getRangeAt(0);try{h=L(c.node,c.offset,u.offset,u.node);}catch(e){}h&&(!r&&t.state.focused?(e.collapse(c.node,c.offset),h.collapsed||(e.removeAllRanges(),e.addRange(h))):(e.removeAllRanges(),e.addRange(h)),p&&null==e.anchorNode?e.addRange(p):r&&this.startGracePeriod()),this.rememberSelection();}else e.removeAllRanges();}}},Ra.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout((function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation((function(){return e.cm.curOp.selectionChanged=!0}));}),20);},Ra.prototype.showMultipleSelections=function(e){z(this.cm.display.cursorDiv,e.cursors),z(this.cm.display.selectionDiv,e.selection);},Ra.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset;},Ra.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return !1;var t=e.getRangeAt(0).commonAncestorContainer;return N(this.div,t)},Ra.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&P(this.div.ownerDocument)==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus());},Ra.prototype.blur=function(){this.div.blur();},Ra.prototype.getField=function(){return this.div},Ra.prototype.supportsTouch=function(){return !0},Ra.prototype.receivedFocus=function(){var e=this,t=this;this.selectionInEditor()?setTimeout((function(){return e.pollSelection()}),20):ri(this.cm,(function(){return t.cm.curOp.selectionChanged=!0})),this.polling.set(this.cm.options.pollInterval,(function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e));}));},Ra.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Ra.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm;if(v&&u&&this.cm.display.gutterSpecs.length&&function(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return !0;return !1}(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus();if(!this.composing){this.rememberSelection();var r=Ua(t,e.anchorNode,e.anchorOffset),n=Ua(t,e.focusNode,e.focusOffset);r&&n&&ri(t,(function(){ro(t.doc,zi(r,n),U),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0);}));}}},Ra.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e,t,r,n=this.cm,i=n.display,o=n.doc.sel.primary(),a=o.from(),l=o.to();if(0==a.ch&&a.line>n.firstLine()&&(a=nt(a.line-1,qe(n.doc,a.line-1).length)),l.ch==qe(n.doc,l.line).text.length&&l.line<n.lastLine()&&(l=nt(l.line+1,0)),a.line<i.viewFrom||l.line>i.viewTo-1)return !1;a.line==i.viewFrom||0==(e=hn(n,a.line))?(t=Je(i.view[0].line),r=i.view[0].node):(t=Je(i.view[e].line),r=i.view[e-1].node.nextSibling);var s,c,u=hn(n,l.line);if(u==i.view.length-1?(s=i.viewTo-1,c=i.lineDiv.lastChild):(s=Je(i.view[u+1].line)-1,c=i.view[u+1].node.previousSibling),!r)return !1;for(var d=n.doc.splitLines(function(e,t,r,n,i){var o="",a=!1,l=e.doc.lineSeparator(),s=!1;function c(){a&&(o+=l,s&&(o+=l),a=s=!1);}function u(e){e&&(c(),o+=e);}function d(t){if(1==t.nodeType){var r=t.getAttribute("cm-text");if(r)return void u(r);var o,f=t.getAttribute("cm-marker");if(f){var h=e.findMarks(nt(n,0),nt(i+1,0),(g=+f,function(e){return e.id==g}));return void(h.length&&(o=h[0].find(0))&&u(Xe(e.doc,o.from,o.to).join(l)))}if("false"==t.getAttribute("contenteditable"))return;var p=/^(pre|div|p|li|table|br)$/i.test(t.nodeName);if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return;p&&c();for(var m=0;m<t.childNodes.length;m++)d(t.childNodes[m]);/^(pre|p)$/i.test(t.nodeName)&&(s=!0),p&&(a=!0);}else 3==t.nodeType&&u(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "));var g;}for(;d(t),t!=r;)t=t.nextSibling,s=!1;return o}(n,r,c,t,s)),f=Xe(n.doc,nt(t,0),nt(s,qe(n.doc,s).text.length));d.length>1&&f.length>1;)if(Y(d)==Y(f))d.pop(),f.pop(),s--;else {if(d[0]!=f[0])break;d.shift(),f.shift(),t++;}for(var h=0,p=0,m=d[0],g=f[0],v=Math.min(m.length,g.length);h<v&&m.charCodeAt(h)==g.charCodeAt(h);)++h;for(var y=Y(d),b=Y(f),w=Math.min(y.length-(1==d.length?h:0),b.length-(1==f.length?h:0));p<w&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p;if(1==d.length&&1==f.length&&t==a.line)for(;h&&h>a.ch&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)h--,p++;d[d.length-1]=y.slice(0,y.length-p).replace(/^\u200b+/,""),d[0]=d[0].slice(h).replace(/\u200b+$/,"");var k=nt(t,h),x=nt(s,f.length?Y(f).length-p:0);return d.length>1||d[0]||it(k,x)?(yo(n.doc,d,k,x,"+input"),!0):void 0},Ra.prototype.ensurePolled=function(){this.forceCompositionEnd();},Ra.prototype.reset=function(){this.forceCompositionEnd();},Ra.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus());},Ra.prototype.readFromDOMSoon=function(){var e=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout((function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return;e.composing=null;}e.updateFromDOM();}),80));},Ra.prototype.updateFromDOM=function(){var e=this;!this.cm.isReadOnly()&&this.pollContent()||ri(this.cm,(function(){return pn(e.cm)}));},Ra.prototype.setUneditable=function(e){e.contentEditable="false";},Ra.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||ni(this.cm,Ea)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0));},Ra.prototype.readOnlyChanged=function(e){this.div.contentEditable=("nocursor"!=e)+"";},Ra.prototype.onContextMenu=function(){},Ra.prototype.resetPosition=function(){},Ra.prototype.needsContentAttribute=!0;var Ka=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new R,this.hasSelection=!1,this.composing=null,this.resetting=!1;};Ka.prototype.init=function(e){var t=this,r=this,n=this.cm;this.createField(e);var i=this.textarea;function o(e){if(!ye(n,e)){if(n.somethingSelected())Pa({lineWise:!1,text:n.getSelections()});else {if(!n.options.lineWiseCopyCut)return;var t=Fa(n);Pa({lineWise:!0,text:t.text}),"cut"==e.type?n.setSelections(t.ranges,null,U):(r.prevInput="",i.value=t.text.join("\n"),W(i));}"cut"==e.type&&(n.state.cutIncoming=+new Date);}}e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),g&&(i.style.width="0px"),pe(i,"input",(function(){a&&l>=9&&t.hasSelection&&(t.hasSelection=null),r.poll();})),pe(i,"paste",(function(e){ye(n,e)||Da(e,n)||(n.state.pasteIncoming=+new Date,r.fastPoll());})),pe(i,"cut",o),pe(i,"copy",o),pe(e.scroller,"paste",(function(t){if(!Sr(e,t)&&!ye(n,t)){if(!i.dispatchEvent)return n.state.pasteIncoming=+new Date,void r.focus();var o=new Event("paste");o.clipboardData=t.clipboardData,i.dispatchEvent(o);}})),pe(e.lineSpace,"selectstart",(function(t){Sr(e,t)||xe(t);})),pe(i,"compositionstart",(function(){var e=n.getCursor("from");r.composing&&r.composing.range.clear(),r.composing={start:e,range:n.markText(e,n.getCursor("to"),{className:"CodeMirror-composing"})};})),pe(i,"compositionend",(function(){r.composing&&(r.poll(),r.composing.range.clear(),r.composing=null);}));},Ka.prototype.createField=function(e){this.wrapper=Ha(),this.textarea=this.wrapper.firstChild;},Ka.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label");},Ka.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=wn(e);if(e.options.moveInputWithCursor){var i=qr(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect();n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left));}return n},Ka.prototype.showSelection=function(e){var t=this.cm.display;z(t.cursorDiv,e.cursors),z(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px");},Ka.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var t=this.cm;if(this.resetting=!0,t.somethingSelected()){this.prevInput="";var r=t.getSelection();this.textarea.value=r,t.state.focused&&W(this.textarea),a&&l>=9&&(this.hasSelection=r);}else e||(this.prevInput=this.textarea.value="",a&&l>=9&&(this.hasSelection=null));this.resetting=!1;}},Ka.prototype.getField=function(){return this.textarea},Ka.prototype.supportsTouch=function(){return !1},Ka.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!y||P(this.textarea.ownerDocument)!=this.textarea))try{this.textarea.focus();}catch(e){}},Ka.prototype.blur=function(){this.textarea.blur();},Ka.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0;},Ka.prototype.receivedFocus=function(){this.slowPoll();},Ka.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,(function(){e.poll(),e.cm.state.focused&&e.slowPoll();}));},Ka.prototype.fastPoll=function(){var e=!1,t=this;t.pollingFast=!0,t.polling.set(20,(function r(){t.poll()||e?(t.pollingFast=!1,t.slowPoll()):(e=!0,t.polling.set(60,r));}));},Ka.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput;if(this.contextMenuPending||this.resetting||!t.state.focused||De(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return !1;var i=r.value;if(i==n&&!t.somethingSelected())return !1;if(a&&l>=9&&this.hasSelection===i||b&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1;if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0);if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var s=0,c=Math.min(n.length,i.length);s<c&&n.charCodeAt(s)==i.charCodeAt(s);)++s;return ri(t,(function(){Ea(t,i.slice(s),n.length-s,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}));})),!0},Ka.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1);},Ka.prototype.onKeyPress=function(){a&&l>=9&&(this.hasSelection=null),this.fastPoll();},Ka.prototype.onContextMenu=function(e){var t=this,r=t.cm,n=r.display,i=t.textarea;t.contextMenuPending&&t.contextMenuPending();var o=fn(r,e),c=n.scroller.scrollTop;if(o&&!f){r.options.resetSelectionOnContextMenu&&-1==r.doc.sel.contains(o)&&ni(r,ro)(r.doc,zi(o),U);var u,d=i.style.cssText,h=t.wrapper.style.cssText,p=t.wrapper.offsetParent.getBoundingClientRect();if(t.wrapper.style.cssText="position: static",i.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-p.top-5)+"px; left: "+(e.clientX-p.left-5)+"px;\n      z-index: 1000; background: "+(a?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",s&&(u=i.ownerDocument.defaultView.scrollY),n.input.focus(),s&&i.ownerDocument.defaultView.scrollTo(null,u),n.input.reset(),r.somethingSelected()||(i.value=t.prevInput=" "),t.contextMenuPending=v,n.selForContextMenu=r.doc.sel,clearTimeout(n.detectingSelectAll),a&&l>=9&&g(),S){Te(e);var m=function(){ge(window,"mouseup",m),setTimeout(v,20);};pe(window,"mouseup",m);}else setTimeout(v,50);}function g(){if(null!=i.selectionStart){var e=r.somethingSelected(),o="​"+(e?i.value:"");i.value="⇚",i.value=o,t.prevInput=e?"":"​",i.selectionStart=1,i.selectionEnd=o.length,n.selForContextMenu=r.doc.sel;}}function v(){if(t.contextMenuPending==v&&(t.contextMenuPending=!1,t.wrapper.style.cssText=h,i.style.cssText=d,a&&l<9&&n.scrollbars.setScrollTop(n.scroller.scrollTop=c),null!=i.selectionStart)){(!a||a&&l<9)&&g();var e=0,o=function(){n.selForContextMenu==r.doc.sel&&0==i.selectionStart&&i.selectionEnd>0&&"​"==t.prevInput?ni(r,uo)(r):e++<10?n.detectingSelectAll=setTimeout(o,500):(n.selForContextMenu=null,n.input.reset());};n.detectingSelectAll=setTimeout(o,200);}}},Ka.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e,this.textarea.readOnly=!!e;},Ka.prototype.setUneditable=function(){},Ka.prototype.needsContentAttribute=!1,function(e){var t=e.optionHandlers;function r(r,n,i,o){e.defaults[r]=n,i&&(t[r]=o?function(e,t,r){r!=Sa&&i(e,t,r);}:i);}e.defineOption=r,e.Init=Sa,r("value","",(function(e,t){return e.setValue(t)}),!0),r("mode",null,(function(e,t){e.doc.modeOption=t,Ei(e);}),!0),r("indentUnit",2,Ei,!0),r("indentWithTabs",!1),r("smartIndent",!0),r("tabSize",4,(function(e){Di(e),Rr(e),pn(e);}),!0),r("lineSeparator",null,(function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first;e.doc.iter((function(e){for(var i=0;;){var o=e.text.indexOf(t,i);if(-1==o)break;i=o+t.length,r.push(nt(n,o));}n++;}));for(var i=r.length-1;i>=0;i--)yo(e.doc,t,r[i],nt(r[i].line,r[i].ch+t.length));}})),r("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,(function(e,t,r){e.state.specialChars=RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=Sa&&e.refresh();})),r("specialCharPlaceholder",tr,(function(e){return e.refresh()}),!0),r("electricChars",!0),r("inputStyle",y?"contenteditable":"textarea",(function(){throw Error("inputStyle can not (yet) be changed in a running editor")}),!0),r("spellcheck",!1,(function(e,t){return e.getInputField().spellcheck=t}),!0),r("autocorrect",!1,(function(e,t){return e.getInputField().autocorrect=t}),!0),r("autocapitalize",!1,(function(e,t){return e.getInputField().autocapitalize=t}),!0),r("rtlMoveVisually",!k),r("wholeLineUpdateBefore",!0),r("theme","default",(function(e){Ca(e),bi(e);}),!0),r("keyMap","default",(function(e,t,r){var n=Qo(t),i=r!=Sa&&Qo(r);i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null);})),r("extraKeys",null),r("configureMouse",null),r("lineWrapping",!1,Ma,!0),r("gutters",[],(function(e,t){e.display.gutterSpecs=vi(t,e.options.lineNumbers),bi(e);}),!0),r("fixedGutter",!0,(function(e,t){e.display.gutters.style.left=t?cn(e.display)+"px":"0",e.refresh();}),!0),r("coverGutterNextToScrollbar",!1,(function(e){return jn(e)}),!0),r("scrollbarStyle","native",(function(e){Kn(e),jn(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);}),!0),r("lineNumbers",!1,(function(e,t){e.display.gutterSpecs=vi(e.options.gutters,t),bi(e);}),!0),r("firstLineNumber",1,bi,!0),r("lineNumberFormatter",(function(e){return e}),bi,!0),r("showCursorWhenSelecting",!1,bn,!0),r("resetSelectionOnContextMenu",!0),r("lineWiseCopyCut",!0),r("pasteLinesPerSelection",!0),r("selectionsMayTouch",!1),r("readOnly",!1,(function(e,t){"nocursor"==t&&(Mn(e),e.display.input.blur()),e.display.input.readOnlyChanged(t);})),r("screenReaderLabel",null,(function(e,t){t=""===t?null:t,e.display.input.screenReaderLabelChanged(t);})),r("disableInput",!1,(function(e,t){t||e.display.input.reset();}),!0),r("dragDrop",!0,Aa),r("allowDropFileTypes",null),r("cursorBlinkRate",530),r("cursorScrollMargin",0),r("cursorHeight",1,bn,!0),r("singleCursorHeightPerLine",!0,bn,!0),r("workTime",100),r("workDelay",100),r("flattenSpans",!0,Di,!0),r("addModeClass",!1,Di,!0),r("pollInterval",100),r("undoDepth",200,(function(e,t){return e.doc.history.undoDepth=t})),r("historyEventDelay",1250),r("viewportMargin",10,(function(e){return e.refresh()}),!0),r("maxHighlightLength",1e4,Di,!0),r("moveInputWithCursor",!0,(function(e,t){t||e.display.input.resetPosition();})),r("tabindex",null,(function(e,t){return e.display.input.getField().tabIndex=t||""})),r("autofocus",null),r("direction","ltr",(function(e,t){return e.doc.setDirection(t)}),!0),r("phrases",null);}(za),function(e){var t=e.optionHandlers,r=e.helpers={};e.prototype={constructor:e,focus:function(){I(this).focus(),this.display.input.focus();},setOption:function(e,r){var n=this.options,i=n[e];n[e]==r&&"mode"!=e||(n[e]=r,t.hasOwnProperty(e)&&ni(this,t[e])(this,r,i),ve(this,"optionChange",this,e));},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](Qo(e));},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:ii((function(t,r){var n=t.token?t:e.getMode(this.options,t);if(n.startState)throw Error("Overlays may not be stateful.");!function(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++;e.splice(n,0,t);}(this.state.overlays,{mode:n,modeSpec:t,opaque:r&&r.opaque,priority:r&&r.priority||0},(function(e){return e.priority})),this.state.modeGen++,pn(this);})),removeOverlay:ii((function(e){for(var t=this.state.overlays,r=0;r<t.length;++r){var n=t[r].modeSpec;if(n==e||"string"==typeof e&&n.name==e)return t.splice(r,1),this.state.modeGen++,void pn(this)}})),indentLine:ii((function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),tt(this.doc,e)&&_a(this,e,t,r);})),indentSelection:ii((function(e){for(var t=this.doc.sel.ranges,r=-1,n=0;n<t.length;n++){var i=t[n];if(i.empty())i.head.line>r&&(_a(this,i.head.line,e,!0),r=i.head.line,n==this.doc.sel.primIndex&&En(this));else {var o=i.from(),a=i.to(),l=Math.max(r,o.line);r=Math.min(this.lastLine(),a.line-(a.ch?0:1))+1;for(var s=l;s<r;++s)_a(this,s,e);var c=this.doc.sel.ranges;0==o.ch&&t.length==c.length&&c[n].from().ch>0&&Ji(this.doc,n,new Ai(o,c[n].to()),U);}}})),getTokenAt:function(e,t){return kt(this,e,t)},getLineTokens:function(e,t){return kt(this,nt(e),t,!0)},getTokenTypeAt:function(e){e=ut(this.doc,e);var t,r=mt(this,qe(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch;if(0==o)t=r[2];else for(;;){var a=n+i>>1;if((a?r[2*a-1]:0)>=o)i=a;else {if(!(r[2*a+1]<o)){t=r[2*a+2];break}n=a+1;}}var l=t?t.indexOf("overlay "):-1;return l<0?t:0==l?null:t.slice(0,l-1)},getModeAt:function(t){var r=this.doc.mode;return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var n=[];if(!r.hasOwnProperty(t))return n;var i=r[t],o=this.getModeAt(e);if("string"==typeof o[t])i[o[t]]&&n.push(i[o[t]]);else if(o[t])for(var a=0;a<o[t].length;a++){var l=i[o[t][a]];l&&n.push(l);}else o.helperType&&i[o.helperType]?n.push(i[o.helperType]):i[o.name]&&n.push(i[o.name]);for(var s=0;s<i._global.length;s++){var c=i._global[s];c.pred(o,this)&&-1==Z(n,c.val)&&n.push(c.val);}return n},getStateAfter:function(e,t){var r=this.doc;return gt(this,(e=ct(r,null==e?r.first+r.size-1:e))+1,t).state},cursorCoords:function(e,t){var r=this.doc.sel.primary();return qr(this,null==e?r.head:"object"==typeof e?ut(this.doc,e):e?r.from():r.to(),t||"page")},charCoords:function(e,t){return Gr(this,ut(this.doc,e),t||"page")},coordsChar:function(e,t){return Qr(this,(e=Kr(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=Kr(this,{top:e,left:0},t||"page").top,et(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1;if("number"==typeof e){var o=this.doc.first+this.doc.size-1;e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),n=qe(this.doc,e);}else n=e;return Vr(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-Vt(n):0)},defaultTextHeight:function(){return an(this.display)},defaultCharWidth:function(){return ln(this.display)},getViewport:function(){return {from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o,a,l=this.display,s=(e=qr(this,ut(this.doc,e))).bottom,c=e.left;if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),l.sizer.appendChild(t),"over"==n)s=e.top;else if("above"==n||"near"==n){var u=Math.max(l.wrapper.clientHeight,this.doc.height),d=Math.max(l.sizer.clientWidth,l.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>u)&&e.top>t.offsetHeight?s=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=u&&(s=e.bottom),c+t.offsetWidth>d&&(c=d-t.offsetWidth);}t.style.top=s+"px",t.style.left=t.style.right="","right"==i?(c=l.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?c=0:"middle"==i&&(c=(l.sizer.clientWidth-t.offsetWidth)/2),t.style.left=c+"px"),r&&(null!=(a=Nn(o=this,{left:c,top:s,right:c+t.offsetWidth,bottom:s+t.offsetHeight})).scrollTop&&In(o,a.scrollTop),null!=a.scrollLeft&&Bn(o,a.scrollLeft));},triggerOnKeyDown:ii(fa),triggerOnKeyPress:ii(pa),triggerOnKeyUp:ha,triggerOnMouseDown:ii(ya),execCommand:function(e){if(na.hasOwnProperty(e))return na[e].call(null,this)},triggerElectric:ii((function(e){Wa(this,e);})),findPosH:function(e,t,r,n){var i=1;t<0&&(i=-1,t=-t);for(var o=ut(this.doc,e),a=0;a<t&&!(o=Ba(this.doc,o,i,r,n)).hitSide;++a);return o},moveH:ii((function(e,t){var r=this;this.extendSelectionsBy((function(n){return r.display.shift||r.doc.extend||n.empty()?Ba(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()}),K);})),deleteH:ii((function(e,t){var r=this.doc.sel,n=this.doc;r.somethingSelected()?n.replaceSelection("",null,"+delete"):Jo(this,(function(r){var i=Ba(n,r.head,e,t,!1);return e<0?{from:i,to:r.head}:{from:r.head,to:i}}));})),findPosV:function(e,t,r,n){var i=1,o=n;t<0&&(i=-1,t=-t);for(var a=ut(this.doc,e),l=0;l<t;++l){var s=qr(this,a,"div");if(null==o?o=s.left:s.left=o,(a=$a(this,s,i,r)).hitSide)break}return a},moveV:ii((function(e,t){var r=this,n=this.doc,i=[],o=!this.display.shift&&!n.extend&&n.sel.somethingSelected();if(n.extendSelectionsBy((function(a){if(o)return e<0?a.from():a.to();var l=qr(r,a.head,"div");null!=a.goalColumn&&(l.left=a.goalColumn),i.push(l.left);var s=$a(r,l,e,t);return "page"==t&&a==n.sel.primary()&&Pn(r,Gr(r,s,"div").top-l.top),s}),K),i.length)for(var a=0;a<n.sel.ranges.length;a++)n.sel.ranges[a].goalColumn=i[a];})),findWordAt:function(e){var t=qe(this.doc,e.line).text,r=e.ch,n=e.ch;if(t){var i=this.getHelper(e,"wordChars");"before"!=e.sticky&&n!=t.length||!r?++n:--r;for(var o=t.charAt(r),a=ne(o,i)?function(e){return ne(e,i)}:/\s/.test(o)?function(e){return /\s/.test(e)}:function(e){return !/\s/.test(e)&&!ne(e)};r>0&&a(t.charAt(r-1));)--r;for(;n<t.length&&a(t.charAt(n));)++n;}return new Ai(nt(e.line,r),nt(e.line,n))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?E(this.display.cursorDiv,"CodeMirror-overwrite"):A(this.display.cursorDiv,"CodeMirror-overwrite"),ve(this,"overwriteToggle",this,this.state.overwrite));},hasFocus:function(){return this.display.input.getField()==P(F(this))},isReadOnly:function(){return !(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:ii((function(e,t){Dn(this,e,t);})),getScrollInfo:function(){var e=this.display.scroller;return {left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Mr(this)-this.display.barHeight,width:e.scrollWidth-Mr(this)-this.display.barWidth,clientHeight:Or(this),clientWidth:zr(this)}},scrollIntoView:ii((function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:nt(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?function(e,t){Wn(e),e.curOp.scrollToPos=t;}(this,e):Fn(this,e.from,e.to,e.margin);})),setSize:ii((function(e,t){var r=this,n=function(e){return "number"==typeof e||/^\d+$/.test(e+"")?e+"px":e};null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&$r(this);var i=this.display.viewFrom;this.doc.iter(i,this.display.viewTo,(function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){mn(r,i,"widget");break}++i;})),this.curOp.forceUpdate=!0,ve(this,"refresh",this);})),operation:function(e){return ri(this,e)},startOperation:function(){return qn(this)},endOperation:function(){return Xn(this)},refresh:ii((function(){var e=this.display.cachedTextHeight;pn(this),this.curOp.forceUpdate=!0,Rr(this),Dn(this,this.doc.scrollLeft,this.doc.scrollTop),hi(this.display),(null==e||Math.abs(e-an(this.display))>.5||this.options.lineWrapping)&&dn(this),ve(this,"refresh",this);})),swapDoc:ii((function(e){var t=this.doc;return t.cm=null,this.state.selectingText&&this.state.selectingText(),Hi(this,e),Rr(this),this.display.input.reset(),Dn(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,ur(this,"swapDoc",this,t),t})),phrase:function(e){var t=this.options.phrases;return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},ke(e),e.registerHelper=function(t,n,i){r.hasOwnProperty(t)||(r[t]=e[t]={_global:[]}),r[t][n]=i;},e.registerGlobalHelper=function(t,n,i,o){e.registerHelper(t,n,o),r[t]._global.push({pred:i,val:o});};}(za);var Ga="iter insert remove copy getEditor constructor".split(" ");for(var qa in Eo.prototype)Eo.prototype.hasOwnProperty(qa)&&Z(Ga,qa)<0&&(za.prototype[qa]=function(e){return function(){return e.apply(this.doc,arguments)}}(Eo.prototype[qa]));return ke(Eo),za.inputStyles={textarea:Ka,contenteditable:Ra},za.defineMode=function(e){za.defaults.mode||"null"==e||(za.defaults.mode=e),Be.apply(this,arguments);},za.defineMIME=function(e,t){He[e]=t;},za.defineMode("null",(function(){return {token:function(e){return e.skipToEnd()}}})),za.defineMIME("text/plain","null"),za.defineExtension=function(e,t){za.prototype[e]=t;},za.defineDocExtension=function(e,t){Eo.prototype[e]=t;},za.fromTextArea=function(e,t){if((t=t?B(t):{}).value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var r=P(e.ownerDocument);t.autofocus=r==e||null!=e.getAttribute("autofocus")&&r==document.body;}function n(){e.value=l.getValue();}var i;if(e.form&&(pe(e.form,"submit",n),!t.leaveSubmitMethodAlone)){var o=e.form;i=o.submit;try{var a=o.submit=function(){n(),o.submit=i,o.submit(),o.submit=a;};}catch(e){}}t.finishInit=function(r){r.save=n,r.getTextArea=function(){return e},r.toTextArea=function(){r.toTextArea=isNaN,n(),e.parentNode.removeChild(r.getWrapperElement()),e.style.display="",e.form&&(ge(e.form,"submit",n),t.leaveSubmitMethodAlone||"function"!=typeof e.form.submit||(e.form.submit=i));};},e.style.display="none";var l=za((function(t){return e.parentNode.insertBefore(t,e.nextSibling)}),t);return l},function(e){e.off=ge,e.on=pe,e.wheelEventPixels=Si,e.Doc=Eo,e.splitLines=Ee,e.countColumn=$,e.findColumn=G,e.isWordChar=re,e.Pass=j,e.signal=ve,e.Line=qt,e.changeEnd=Oi,e.scrollbarModel=Vn,e.Pos=nt,e.cmpPos=it,e.modes=Ie,e.mimeModes=He,e.resolveMode=$e,e.getMode=Re,e.modeExtensions=Ze,e.extendMode=je,e.copyState=Ue,e.startState=Ke,e.innerMode=Ve,e.commands=na,e.keyMap=Uo,e.keyName=Yo,e.isModifierKey=qo,e.lookupKey=Go,e.normalizeKeyMap=Ko,e.StringStream=Ge,e.SharedTextMarker=Oo,e.TextMarker=Mo,e.LineWidget=To,e.e_preventDefault=xe,e.e_stopPropagation=Ce,e.e_stop=Te,e.addClass=E,e.contains=N,e.rmClass=A,e.keyNames=$o;}(za),za.version="5.65.9",za},(window||self).CodeMirror=e(),function(e){function t(e,t){if(this.cm=e,this.options=t,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var r=this;e.on("cursorActivity",this.activityFunc=function(){r.cursorActivity();});}}e.showHint=function(e,t,r){if(!t)return e.showHint(r);r&&r.async&&(t.async=!0);var n={hint:t};if(r)for(var i in r)n[i]=r[i];return e.showHint(n)},e.defineExtension("showHint",(function(r){r=function(e,t,r){var n=e.options.hintOptions,i={};for(var o in s)i[o]=s[o];if(n)for(var o in n)void 0!==n[o]&&(i[o]=n[o]);if(r)for(var o in r)void 0!==r[o]&&(i[o]=r[o]);return i.hint.resolve&&(i.hint=i.hint.resolve(e,t)),i}(this,this.getCursor("start"),r);var n=this.listSelections();if(!(n.length>1)){if(this.somethingSelected()){if(!r.hint.supportsSelection)return;for(var i=0;i<n.length;i++)if(n[i].head.line!=n[i].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var o=this.state.completionActive=new t(this,r);o.options.hint&&(e.signal(this,"startCompletion",this),o.update(!0));}})),e.defineExtension("closeHint",(function(){this.state.completionActive&&this.state.completionActive.close();}));var r=window.requestAnimationFrame||function(e){return setTimeout(e,1e3/60)},n=window.cancelAnimationFrame||clearTimeout;function i(e){return "string"==typeof e?e:e.text}function o(e,t){for(;t&&t!=e;){if("LI"===t.nodeName.toUpperCase()&&t.parentNode==e)return t;t=t.parentNode;}}function a(t,r){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=t,this.data=r,this.picked=!1;var n=this,a=t.cm,l=a.getInputField().ownerDocument,s=l.defaultView||l.parentWindow,c=this.hints=l.createElement("ul");c.setAttribute("role","listbox"),c.setAttribute("aria-expanded","true"),c.id=this.id;var u=t.cm.options.theme;c.className="CodeMirror-hints "+u,this.selectedHint=r.selectedHint||0;for(var d=r.list,f=0;f<d.length;++f){var h=c.appendChild(l.createElement("li")),p=d[f],m="CodeMirror-hint"+(f!=this.selectedHint?"":" CodeMirror-hint-active");null!=p.className&&(m=p.className+" "+m),h.className=m,f==this.selectedHint&&h.setAttribute("aria-selected","true"),h.id=this.id+"-"+f,h.setAttribute("role","option"),p.render?p.render(h,r,p):h.appendChild(l.createTextNode(p.displayText||i(p))),h.hintId=f;}var g=t.options.container||l.body,v=a.cursorCoords(t.options.alignWithWord?r.from:null),y=v.left,b=v.bottom,w=!0,k=0,x=0;if(g!==l.body){var C=-1!==["absolute","relative","fixed"].indexOf(s.getComputedStyle(g).position)?g:g.offsetParent,S=C.getBoundingClientRect(),T=l.body.getBoundingClientRect();k=S.left-T.left-C.scrollLeft,x=S.top-T.top-C.scrollTop;}c.style.left=y-k+"px",c.style.top=b-x+"px";var L=s.innerWidth||Math.max(l.body.offsetWidth,l.documentElement.offsetWidth),A=s.innerHeight||Math.max(l.body.offsetHeight,l.documentElement.offsetHeight);g.appendChild(c),a.getInputField().setAttribute("aria-autocomplete","list"),a.getInputField().setAttribute("aria-owns",this.id),a.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var M,z=t.options.moveOnOverlap?c.getBoundingClientRect():new DOMRect,O=!!t.options.paddingForScrollbar&&c.scrollHeight>c.clientHeight+1;if(setTimeout((function(){M=a.getScrollInfo();})),z.bottom-A>0){var _=z.bottom-z.top,N=z.top-(v.bottom-v.top)-2;A-z.top<N?(_>N&&(c.style.height=(_=N)+"px"),c.style.top=(b=v.top-_)+x+"px",w=!1):c.style.height=A-z.top-2+"px";}var P,E=z.right-L;if(O&&(E+=a.display.nativeBarWidth),E>0&&(z.right-z.left>L&&(c.style.width=L-5+"px",E-=z.right-z.left-L),c.style.left=(y=Math.max(v.left-E-k,0))+"px"),O)for(var D=c.firstChild;D;D=D.nextSibling)D.style.paddingRight=a.display.nativeBarWidth+"px";a.addKeyMap(this.keyMap=function(e,t){var r={Up:function(){t.moveFocus(-1);},Down:function(){t.moveFocus(1);},PageUp:function(){t.moveFocus(1-t.menuSize(),!0);},PageDown:function(){t.moveFocus(t.menuSize()-1,!0);},Home:function(){t.setFocus(0);},End:function(){t.setFocus(t.length-1);},Enter:t.pick,Tab:t.pick,Esc:t.close};/Mac/.test(navigator.platform)&&(r["Ctrl-P"]=function(){t.moveFocus(-1);},r["Ctrl-N"]=function(){t.moveFocus(1);});var n=e.options.customKeys,i=n?{}:r;function o(e,n){var o;o="string"!=typeof n?function(e){return n(e,t)}:r.hasOwnProperty(n)?r[n]:n,i[e]=o;}if(n)for(var a in n)n.hasOwnProperty(a)&&o(a,n[a]);var l=e.options.extraKeys;if(l)for(var a in l)l.hasOwnProperty(a)&&o(a,l[a]);return i}(t,{moveFocus:function(e,t){n.changeActive(n.selectedHint+e,t);},setFocus:function(e){n.changeActive(e);},menuSize:function(){return n.screenAmount()},length:d.length,close:function(){t.close();},pick:function(){n.pick();},data:r})),t.options.closeOnUnfocus&&(a.on("blur",this.onBlur=function(){P=setTimeout((function(){t.close();}),100);}),a.on("focus",this.onFocus=function(){clearTimeout(P);})),a.on("scroll",this.onScroll=function(){var e=a.getScrollInfo(),r=a.getWrapperElement().getBoundingClientRect();M||(M=a.getScrollInfo());var n=b+M.top-e.top,i=n-(s.pageYOffset||(l.documentElement||l.body).scrollTop);if(w||(i+=c.offsetHeight),i<=r.top||i>=r.bottom)return t.close();c.style.top=n+"px",c.style.left=y+M.left-e.left+"px";}),e.on(c,"dblclick",(function(e){var t=o(c,e.target||e.srcElement);t&&null!=t.hintId&&(n.changeActive(t.hintId),n.pick());})),e.on(c,"click",(function(e){var r=o(c,e.target||e.srcElement);r&&null!=r.hintId&&(n.changeActive(r.hintId),t.options.completeOnSingleClick&&n.pick());})),e.on(c,"mousedown",(function(){setTimeout((function(){a.focus();}),20);}));var W=this.getSelectedHintRange();return 0===W.from&&0===W.to||this.scrollToActive(),e.signal(r,"select",d[this.selectedHint],c.childNodes[this.selectedHint]),!0}function l(e,t,r,n){if(e.async)e(t,n,r);else {var i=e(t,r);i&&i.then?i.then(n):n(i);}}t.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&e.signal(this.data,"close"),this.widget&&this.widget.close(),e.signal(this.cm,"endCompletion",this.cm));},active:function(){return this.cm.state.completionActive==this},pick:function(t,r){var n=t.list[r],o=this;this.cm.operation((function(){n.hint?n.hint(o.cm,t,n):o.cm.replaceRange(i(n),n.from||t.from,n.to||t.to,"complete"),e.signal(t,"pick",n),o.cm.scrollIntoView();})),this.options.closeOnPick&&this.close();},cursorActivity:function(){this.debounce&&(n(this.debounce),this.debounce=0);var e=this.startPos;this.data&&(e=this.data.from);var t=this.cm.getCursor(),i=this.cm.getLine(t.line);if(t.line!=this.startPos.line||i.length-t.ch!=this.startLen-this.startPos.ch||t.ch<e.ch||this.cm.somethingSelected()||!t.ch||this.options.closeCharacters.test(i.charAt(t.ch-1)))this.close();else {var o=this;this.debounce=r((function(){o.update();})),this.widget&&this.widget.disable();}},update:function(e){if(null!=this.tick){var t=this,r=++this.tick;l(this.options.hint,this.cm,this.options,(function(n){t.tick==r&&t.finishUpdate(n,e);}));}},finishUpdate:function(t,r){this.data&&e.signal(this.data,"update");var n=this.widget&&this.widget.picked||r&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=t,t&&t.list.length&&(n&&1==t.list.length?this.pick(t,0):(this.widget=new a(this,t),e.signal(t,"shown")));}},a.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var e=this.completion.cm.getInputField();e.removeAttribute("aria-activedescendant"),e.removeAttribute("aria-owns");var t=this.completion.cm;this.completion.options.closeOnUnfocus&&(t.off("blur",this.onBlur),t.off("focus",this.onFocus)),t.off("scroll",this.onScroll);}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var e=this;this.keyMap={Enter:function(){e.picked=!0;}},this.completion.cm.addKeyMap(this.keyMap);},pick:function(){this.completion.pick(this.data,this.selectedHint);},changeActive:function(t,r){if(t>=this.data.list.length?t=r?this.data.list.length-1:0:t<0&&(t=r?0:this.data.list.length-1),this.selectedHint!=t){var n=this.hints.childNodes[this.selectedHint];n&&(n.className=n.className.replace(" CodeMirror-hint-active",""),n.removeAttribute("aria-selected")),(n=this.hints.childNodes[this.selectedHint=t]).className+=" CodeMirror-hint-active",n.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",n.id),this.scrollToActive(),e.signal(this.data,"select",this.data.list[this.selectedHint],n);}},scrollToActive:function(){var e=this.getSelectedHintRange(),t=this.hints.childNodes[e.from],r=this.hints.childNodes[e.to],n=this.hints.firstChild;t.offsetTop<this.hints.scrollTop?this.hints.scrollTop=t.offsetTop-n.offsetTop:r.offsetTop+r.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=r.offsetTop+r.offsetHeight-this.hints.clientHeight+n.offsetTop);},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var e=this.completion.options.scrollMargin||0;return {from:Math.max(0,this.selectedHint-e),to:Math.min(this.data.list.length-1,this.selectedHint+e)}}},e.registerHelper("hint","auto",{resolve:function(t,r){var n,i=t.getHelpers(r,"hint");if(i.length){var o=function(e,t,r){var n=function(e,t){if(!e.somethingSelected())return t;for(var r=[],n=0;n<t.length;n++)t[n].supportsSelection&&r.push(t[n]);return r}(e,i);!function i(o){if(o==n.length)return t(null);l(n[o],e,r,(function(e){e&&e.list.length>0?t(e):i(o+1);}));}(0);};return o.async=!0,o.supportsSelection=!0,o}return (n=t.getHelper(t.getCursor(),"hintWords"))?function(t){return e.hint.fromList(t,{words:n})}:e.hint.anyword?function(t,r){return e.hint.anyword(t,r)}:function(){}}}),e.registerHelper("hint","fromList",(function(t,r){var n,i=t.getCursor(),o=t.getTokenAt(i),a=e.Pos(i.line,o.start),l=i;o.start<i.ch&&/\w/.test(o.string.charAt(i.ch-o.start-1))?n=o.string.substr(0,i.ch-o.start):(n="",a=i);for(var s=[],c=0;c<r.words.length;c++){var u=r.words[c];u.slice(0,n.length)==n&&s.push(u);}if(s.length)return {list:s,from:a,to:l}})),e.commands.autocomplete=e.showHint;var s={hint:e.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};e.defineOption("hintOptions",null);}(CodeMirror),function(e){function t(t,r,i,o){if(i&&i.call){var a=i;i=null;}else a=n(t,i,"rangeFinder");"number"==typeof r&&(r=e.Pos(r,0));var l=n(t,i,"minFoldSize");function s(e){var n=a(t,r);if(!n||n.to.line-n.from.line<l)return null;if("fold"===o)return n;for(var i=t.findMarksAt(n.from),s=0;s<i.length;++s)if(i[s].__isFold){if(!e)return null;n.cleared=!0,i[s].clear();}return n}var c=s(!0);if(n(t,i,"scanUp"))for(;!c&&r.line>t.firstLine();)r=e.Pos(r.line-1,0),c=s(!1);if(c&&!c.cleared&&"unfold"!==o){var u=function(e,t,r){var i=n(e,t,"widget");if("function"==typeof i&&(i=i(r.from,r.to)),"string"==typeof i){var o=document.createTextNode(i);(i=document.createElement("span")).appendChild(o),i.className="CodeMirror-foldmarker";}else i&&(i=i.cloneNode(!0));return i}(t,i,c);e.on(u,"mousedown",(function(t){d.clear(),e.e_preventDefault(t);}));var d=t.markText(c.from,c.to,{replacedWith:u,clearOnEnter:n(t,i,"clearOnEnter"),__isFold:!0});d.on("clear",(function(r,n){e.signal(t,"unfold",t,r,n);})),e.signal(t,"fold",t,c.from,c.to);}}e.newFoldFunction=function(e,r){return function(n,i){t(n,i,{rangeFinder:e,widget:r});}},e.defineExtension("foldCode",(function(e,r,n){t(this,e,r,n);})),e.defineExtension("isFolded",(function(e){for(var t=this.findMarksAt(e),r=0;r<t.length;++r)if(t[r].__isFold)return !0})),e.commands.toggleFold=function(e){e.foldCode(e.getCursor());},e.commands.fold=function(e){e.foldCode(e.getCursor(),null,"fold");},e.commands.unfold=function(e){e.foldCode(e.getCursor(),{scanUp:!1},"unfold");},e.commands.foldAll=function(t){t.operation((function(){for(var r=t.firstLine(),n=t.lastLine();r<=n;r++)t.foldCode(e.Pos(r,0),{scanUp:!1},"fold");}));},e.commands.unfoldAll=function(t){t.operation((function(){for(var r=t.firstLine(),n=t.lastLine();r<=n;r++)t.foldCode(e.Pos(r,0),{scanUp:!1},"unfold");}));},e.registerHelper("fold","combine",(function(){var e=Array.prototype.slice.call(arguments,0);return function(t,r){for(var n=0;n<e.length;++n){var i=e[n](t,r);if(i)return i}}})),e.registerHelper("fold","auto",(function(e,t){for(var r=e.getHelpers(t,"fold"),n=0;n<r.length;n++){var i=r[n](e,t);if(i)return i}}));var r={rangeFinder:e.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0};function n(e,t,n){if(t&&void 0!==t[n])return t[n];var i=e.options.foldOptions;return i&&void 0!==i[n]?i[n]:r[n]}e.defineOption("foldOptions",null),e.defineExtension("foldOption",(function(e,t){return n(this,e,t)}));}(CodeMirror),function(e){var t={},r=/[^\s\u00a0]/,n=e.Pos,i=e.cmpPos;function o(e){var t=e.search(r);return -1==t?0:t}function a(e,t){var r=e.getMode();return !1!==r.useInnerComments&&r.innerMode?e.getModeAt(t):r}e.commands.toggleComment=function(e){e.toggleComment();},e.defineExtension("toggleComment",(function(e){e||(e=t);for(var r=this,i=1/0,o=this.listSelections(),a=null,l=o.length-1;l>=0;l--){var s=o[l].from(),c=o[l].to();s.line>=i||(c.line>=i&&(c=n(i,0)),i=s.line,null==a?r.uncomment(s,c,e)?a="un":(r.lineComment(s,c,e),a="line"):"un"==a?r.uncomment(s,c,e):r.lineComment(s,c,e));}})),e.defineExtension("lineComment",(function(e,i,l){l||(l=t);var s=this,c=a(s,e),u=s.getLine(e.line);if(null!=u&&(d=e,f=u,!/\bstring\b/.test(s.getTokenTypeAt(n(d.line,0)))||/^[\'\"\`]/.test(f))){var d,f,h=l.lineComment||c.lineComment;if(h){var p=Math.min(0!=i.ch||i.line==e.line?i.line+1:i.line,s.lastLine()+1),m=null==l.padding?" ":l.padding,g=l.commentBlankLines||e.line==i.line;s.operation((function(){if(l.indent){for(var t=null,i=e.line;i<p;++i){var a=-1===(c=s.getLine(i)).search(r)?c:c.slice(0,o(c));(null==t||t.length>a.length)&&(t=a);}for(i=e.line;i<p;++i){var c=s.getLine(i),u=t.length;(g||r.test(c))&&(c.slice(0,u)!=t&&(u=o(c)),s.replaceRange(t+h+m,n(i,0),n(i,u)));}}else for(i=e.line;i<p;++i)(g||r.test(s.getLine(i)))&&s.replaceRange(h+m,n(i,0));}));}else (l.blockCommentStart||c.blockCommentStart)&&(l.fullLines=!0,s.blockComment(e,i,l));}})),e.defineExtension("blockComment",(function(e,o,l){l||(l=t);var s=this,c=a(s,e),u=l.blockCommentStart||c.blockCommentStart,d=l.blockCommentEnd||c.blockCommentEnd;if(u&&d){if(!/\bcomment\b/.test(s.getTokenTypeAt(n(e.line,0)))){var f=Math.min(o.line,s.lastLine());f!=e.line&&0==o.ch&&r.test(s.getLine(f))&&--f;var h=null==l.padding?" ":l.padding;e.line>f||s.operation((function(){if(0!=l.fullLines){var t=r.test(s.getLine(f));s.replaceRange(h+d,n(f)),s.replaceRange(u+h,n(e.line,0));var a=l.blockCommentLead||c.blockCommentLead;if(null!=a)for(var p=e.line+1;p<=f;++p)(p!=f||t)&&s.replaceRange(a+h,n(p,0));}else {var m=0==i(s.getCursor("to"),o),g=!s.somethingSelected();s.replaceRange(d,o),m&&s.setSelection(g?o:s.getCursor("from"),o),s.replaceRange(u,e);}}));}}else (l.lineComment||c.lineComment)&&0!=l.fullLines&&s.lineComment(e,o,l);})),e.defineExtension("uncomment",(function(e,i,o){o||(o=t);var l,s=this,c=a(s,e),u=Math.min(0!=i.ch||i.line==e.line?i.line:i.line-1,s.lastLine()),d=Math.min(e.line,u),f=o.lineComment||c.lineComment,h=[],p=null==o.padding?" ":o.padding;e:if(f){for(var m=d;m<=u;++m){var g=s.getLine(m),v=g.indexOf(f);if(v>-1&&!/comment/.test(s.getTokenTypeAt(n(m,v+1)))&&(v=-1),-1==v&&r.test(g))break e;if(v>-1&&r.test(g.slice(0,v)))break e;h.push(g);}if(s.operation((function(){for(var e=d;e<=u;++e){var t=h[e-d],r=t.indexOf(f),i=r+f.length;r<0||(t.slice(i,i+p.length)==p&&(i+=p.length),l=!0,s.replaceRange("",n(e,r),n(e,i)));}})),l)return !0}var y=o.blockCommentStart||c.blockCommentStart,b=o.blockCommentEnd||c.blockCommentEnd;if(!y||!b)return !1;var w=o.blockCommentLead||c.blockCommentLead,k=s.getLine(d),x=k.indexOf(y);if(-1==x)return !1;var C=u==d?k:s.getLine(u),S=C.indexOf(b,u==d?x+y.length:0),T=n(d,x+1),L=n(u,S+1);if(-1==S||!/comment/.test(s.getTokenTypeAt(T))||!/comment/.test(s.getTokenTypeAt(L))||s.getRange(T,L,"\n").indexOf(b)>-1)return !1;var A=k.lastIndexOf(y,e.ch),M=-1==A?-1:k.slice(0,e.ch).indexOf(b,A+y.length);if(-1!=A&&-1!=M&&M+b.length!=e.ch)return !1;M=C.indexOf(b,i.ch);var z=C.slice(i.ch).lastIndexOf(y,M-i.ch);return A=-1==M||-1==z?-1:i.ch+z,(-1==M||-1==A||A==i.ch)&&(s.operation((function(){s.replaceRange("",n(u,S-(p&&C.slice(S-p.length,S)==p?p.length:0)),n(u,S+b.length));var e=x+y.length;if(p&&k.slice(e,e+p.length)==p&&(e+=p.length),s.replaceRange("",n(d,x),n(d,e)),w)for(var t=d+1;t<=u;++t){var i=s.getLine(t),o=i.indexOf(w);if(-1!=o&&!r.test(i.slice(0,o))){var a=o+w.length;p&&i.slice(a,a+p.length)==p&&(a+=p.length),s.replaceRange("",n(t,o),n(t,a));}}})),!0)}));}(CodeMirror),r.prototype.start=function(e){return this.stream=e,this.line=0,this.string=e.string.slice(e.start),this.startLine=e.string,this.startPos=e.start,this},r.prototype.startLinebreak=function(){return this.stream=null,this.line=this.startPos=0,this.string="\n",this.startLine="",this},r.prototype.copy=function(){var e=this.copyInstance||(this.copyInstance=new r);return e.stream=this.stream,e.startPos=this.startPos,e.line=this.line,e.startLine=this.startLine,e.string=this.string,e},r.prototype.updateStart=function(){this.startLine=this.stream?0==this.line?this.stream.string:this.stream.lookAhead(this.line):"",this.startPos=this.startLine.length-(this.string.length-1);},r.prototype.ahead=function(e){for(;;){if(e<=this.string.length)return !0;if(10!==this.string.charCodeAt(this.string.length-1))this.string+="\n";else {if(3===this.line||!this.stream||!this.stream.lookAhead)return !1;var t=this.stream.lookAhead(this.line+1);if(null==t)return !1;this.string+=t+"\n",this.line++;}}};var n=null;function i(e,i){this.State=function(e,i){function o(e,t){this.stack=e,this.context=t;}function a(){return null}return o.prototype.matchNext=function(r,i,o,a){for(var l=this.stack.length-1,s=this.stack[l],c=e.nodes[s],u=0;u<c.length;u++){var d,f,h=c[u];if(0===h)d=i,f=c[++u];else {if(1===h||2===h){var p=c[++u],m=c[++u];this.go(m);var g=this.context;if(2===h){var v=c[++u];this.context=new t(v.name,v.token,this.stack.length,this.context,r.startLine,r.startPos);}this.stack.push(p);var y=this.matchNext(r,i,0,!1);if(y===i&&(y=this.matchNext(r,i,u==c.length-1?o:0,a)),y<0){this.stack.length=l+1,this.stack[l]=s,this.context=g;continue}return y}if(3===h){var b=c[++u];d=this.matchExpr(c[++u],r,i),f=c[++u],d>i&&(n=b);}else d=this.matchExpr(h,r,i),f=c[++u];}if(d<0){if(!(o>0&&u==c.length-1))continue;o--,d=i;}if(this.go(f),!a&&-1===f||0===this.stack.length)return d;if(d>i)return d;if((d=this.matchNext(r,i,u==c.length-1?o:0,a))>=0)return d;this.stack.length=l+1,this.stack[l]=s;}return -1},o.prototype.go=function(e){for(this.stack.pop();this.context&&this.context.depth>this.stack.length;)this.context=this.context.parent;-1!==e&&this.stack.push(e);},o.prototype.runMaybe=function(e,t,r){return n=null,this.matchNext(e,t,r,!0)},o.prototype.forward=function(t,r){var n=this.runMaybe(t,r,2);return n<0&&(this.stack.push(e.token),n=this.runMaybe(t,r,0)),n},o.prototype.lookahead=function(e,t,r){var i=n,o=new this.constructor([r],null);for(e=e.copy();;){e.updateStart();var a=o.runMaybe(e,t,0);if(a<0)return n=i,!1;if(0===o.stack.length)return n=i,!0;t=a;}},o.prototype.matchExpr=function(e,t,r){if("string"==typeof e){var n=r+e.length;return t.ahead(n)&&t.string.slice(r,n)===e?n:-1}if(e.exec){var o=t.ahead(r+1)&&e.exec(r>0?t.string.slice(r):t.string);return o?r+o[0].length:-1}var l,s=e[0];if(0===s){for(var c=1;c<e.length;c++)if((r=this.matchExpr(e[c],t,r))<0)return -1;return r}if(1===s){c=1;for(var u=e.length-1;;c++){var d=this.matchExpr(e[c],t,r);if(c===u||d>-1)return d}return -1}if(2!==s&&3!==s){if(4===s)return Math.max(this.matchExpr(e[1],t,r),r);if(5===s)return this.lookahead(t,r,e[1])?r:-1;if(6===s)return this.lookahead(t,r,e[1])?-1:r;if(7===s){var f,h,p=r?t.string.lastIndexOf("\n",r-1):-1;if(t.stream&&p<0)f=t.stream.string,h=r+t.stream.start;else {var m=t.string.indexOf("\n",r);f=t.string.slice(p+1,m<0?t.string.length:m),h=r-(p+1);}return i.predicates[e[1]](f,h,this.context,t.stream?(l=t.stream,function(e){return l.lookAhead(e)}):a)?r:-1}throw Error("Unknown match type "+e)}if(3===s&&(r=this.matchExpr(e[1],t,r))<0)return -1;for(;;){var g=this.matchExpr(e[1],t,r);if(-1==g)return r;r=g;}},o.prototype.contextAt=function(e,t){var n=this.copy(),i=new r,o=0,a=this.context;for(i.string=e+"\n",i.startLine=e;;){var l=n.runMaybe(i,o,0);if(-1==l)return n.context;if(l>t){var s=n.context;if(o==t)e:for(;s;){for(var c=a;c;c=c.parent)if(c===s)break e;s=s.parent;}return s}o=l,a=n.context;}},o.prototype.copy=function(){return new this.constructor(this.stack.slice(),this.context)},o.start=function(){return new this([e.start],null)},o}(e,i||{}),this.mcx=new r;}CodeMirror.GrammarMode=i,i.prototype.startState=function(){return this.State.start()},i.prototype.copyState=function(e){return e.copy()},i.prototype.token=function(e,t){e.pos+=t.forward(this.mcx.start(e),0);for(var r=n,i=t.context;i;i=i.parent)i.tokenType&&(r=i.tokenType+(r?" "+r:""));return e.eol()&&t.forward(this.mcx,e.pos-e.start),r},i.prototype.blankLine=function(e){e.forward(this.mcx.startLinebreak(),0);},function(e,t){!function(e){function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}});}})),t.default=e,Object.freeze(t)}var r=t(e),n=[/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/,/^while(?![a-zA-Z¡-￿_0-9_\$])/,/^with(?![a-zA-Z¡-￿_0-9_\$])/,/^do(?![a-zA-Z¡-￿_0-9_\$])/,/^debugger(?![a-zA-Z¡-￿_0-9_\$])/,/^if(?![a-zA-Z¡-￿_0-9_\$])/,/^function(?![a-zA-Z¡-￿_0-9_\$])/,/^for(?![a-zA-Z¡-￿_0-9_\$])/,/^default(?![a-zA-Z¡-￿_0-9_\$])/,/^case(?![a-zA-Z¡-￿_0-9_\$])/,/^return(?![a-zA-Z¡-￿_0-9_\$])/,/^throw(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/,/^switch(?![a-zA-Z¡-￿_0-9_\$])/,/^try(?![a-zA-Z¡-￿_0-9_\$])/,/^class(?![a-zA-Z¡-￿_0-9_\$])/,/^export(?![a-zA-Z¡-￿_0-9_\$])/,/^import(?![a-zA-Z¡-￿_0-9_\$])/,[0,"async",/^(?![a-zA-Z¡-￿_0-9_\$])/,[5,114]],[1,";",/^(?=\})/,[7,"canInsertSemi"]],/^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/,/^extends(?![a-zA-Z¡-￿_0-9_\$])/,/^from(?![a-zA-Z¡-￿_0-9_\$])/,/^else(?![a-zA-Z¡-￿_0-9_\$])/,/^catch(?![a-zA-Z¡-￿_0-9_\$])/,/^finally(?![a-zA-Z¡-￿_0-9_\$])/,/^as(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:delete|typeof|yield|await|void)(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:\.\.\.|\!|\+\+?|\-\-?)/,/^(?:0x[0-9a-fA-F_]+|0o[0-7_]+|0b[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)/,/^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/,/^(?:\+\+|\-\-)/,/^(?:(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?|\?\?)/,/^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/,/^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/,/^(?:\.|\?\.)/,[1,"\n","\t"," "],/^new(?![a-zA-Z¡-￿_0-9_\$])/],i=Object.freeze({__proto__:null,nodes:[[1,6,2],[/^[^]/,0],[1,6,3],[2,7,4,{name:"Statement"},0,1],[1,6,3],[3,"keyword",n[0],-1,3,"keyword",n[1],-1,3,"keyword",n[2],-1,3,"keyword",n[23],-1,3,"keyword",n[3],-1,3,"keyword",n[14],-1,3,"keyword",n[25],-1,3,"keyword",n[10],-1,3,"keyword",n[11],-1,3,"keyword",n[12],-1,3,"keyword",n[4],-1,3,"keyword",n[9],-1,3,"keyword",n[8],-1,3,"keyword",n[6],-1,3,"keyword",n[5],-1,3,"keyword",n[24],-1,3,"keyword",n[7],-1,3,"keyword",n[13],-1,3,"keyword",n[15],-1,3,"keyword",n[16],-1,3,"keyword",n[17],-1,3,"keyword",n[21],-1,3,"keyword",n[18],-1,3,"keyword",n[39],-1,3,"keyword",n[35],-1,3,"keyword",n[29],-1,3,"keyword",n[28],-1,3,"atom",n[27],-1,3,"variable",n[20],-1,3,"operator",n[30],-1,3,"operator",n[34],-1,3,"operator",n[33],-1,2,116,-1,{name:"string",token:"string"},3,"number",n[31],-1,2,121,-1,{name:"comment",token:"comment"},3,"string-2",n[32],-1,1,125,-1,/^[^]/,-1],[n[38],6,2,121,6,{name:"comment",token:"comment"},0,-1],[3,"keyword",n[0],8,3,"keyword",n[1],23,3,"keyword",n[2],23,3,"keyword",n[3],27,2,129,-1,{name:"Block"},";",-1,3,"keyword",n[4],-1,3,"keyword",n[5],35,3,"keyword",n[6],40,3,"keyword",n[7],46,3,"keyword",n[8],48,/^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/,48,3,"keyword",n[9],49,3,"keyword",n[10],52,3,"keyword",n[11],56,3,"keyword",n[12],60,3,"keyword",n[13],64,3,"keyword",n[14],68,3,"keyword",n[15],72,3,"keyword",n[16],80,3,"keyword",n[17],92,3,"keyword",n[18],108,"@",110,1,133,112],[1,6,9],[1,139,10],[1,6,11],[3,"operator","=",12,0,13],[1,6,14],[1,6,15],[1,142,13],[",",16,n[19],-1],[1,6,17],[1,139,18],[1,6,19],[3,"operator","=",20,0,21],[1,6,22],[1,6,15],[1,142,21],[1,6,24],[2,146,25,{name:"CondExpr"}],[1,6,26],[2,7,-1,{name:"Statement"}],[1,6,28],[2,7,29,{name:"Statement"}],[1,6,30],[3,"keyword",n[1],31,0,-1],[1,6,32],[2,146,33,{name:"CondExpr"}],[1,6,34],[n[19],-1],[1,6,36],[2,146,37,{name:"CondExpr"}],[1,6,38],[2,7,39,{name:"Statement"}],[2,151,-1,{name:"Alternative"}],[1,6,41],[3,"keyword","*",42,0,42],[1,6,43],[3,"def",n[20],44],[1,6,45],[2,155,-1,{name:"FunctionDef"}],[1,6,47],[2,158,-1,{name:"ForStatement"}],[1,6,50],[1,6,51],[":",-1],[1,133,48],[1,6,53],[n[19],-1,1,133,54],[1,6,55],[n[19],-1],[1,6,57],[1,133,58],[1,6,59],[n[19],-1],[1,6,61],[/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/,62],[1,6,63],[n[19],-1],[1,6,65],[2,146,66,{name:"CondExpr"}],[1,6,67],[2,129,-1,{name:"Block"}],[1,6,69],[2,129,70,{name:"Block"}],[1,6,71],[2,161,-1,{name:"CatchFinally"}],[1,6,73],[3,"type def",n[20],74],[1,6,75],[3,"keyword",n[21],76,0,77],[1,6,78],[1,6,79],[1,133,77],[2,174,-1,{name:"ClassBody"}],[1,6,81],["*",82,3,"keyword",n[8],82,"{",83,2,7,-1,{name:"Statement"}],[1,6,84],[1,6,85],[3,"keyword",n[22],86,0,87],[1,182,88],[1,6,89],[1,6,90],[1,6,91],[2,116,87,{name:"string",token:"string"}],[n[19],-1],["}",82],[1,6,93],[2,116,94,{name:"string",token:"string"},3,"keyword","*",95,1,188,96,"{",97],[1,6,98],[1,6,99],[1,6,100],[1,6,101],[n[19],-1],[3,"keyword",n[26],102,0,96],[3,"keyword",n[22],103,0,94],[1,182,104],[1,6,105],[1,6,106],[1,6,107],[3,"def",n[20],96],[2,116,94,{name:"string",token:"string"}],["}",96],[1,6,109],[2,7,-1,{name:"Statement"}],[1,6,111],[1,133,-1],[1,6,113],[n[19],-1],[1,6,115],[3,"keyword",n[6],-1,/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/,-1],["'",117,'"',119],["\\",118,/^(?!\')./,117,"'",-1],[/^[^]/,117],["\\",120,/^(?!\")./,119,'"',-1],[/^[^]/,119],[/^\/\*\*(?!\/)/,122,"/*",124,/^\/\/.*/,-1],[1,193,122,0,123],[2,196,123,{name:"doccomment.tagGroup"},"*/",-1],[[0,/^(?!\*\/)/,/^[^]/],124,"*/",-1],[3,"string-2","`",126],[3,"string-2","${",127,2,198,126,{name:"str2",token:"string-2"},3,"string-2",/^(?:(?!\`|\$\{|\\).)+/,126,3,"string-2","`",-1],[1,133,128],[3,"string-2","}",126],["{",130],[1,6,131],[2,7,132,{name:"Statement"},"}",-1],[1,6,131],[1,200,134],[1,6,135],[",",136,1,218,137,0,-1],[1,6,138],[1,6,135],[1,142,137],[3,"operator","...",140,0,140],[1,6,141],[3,"def",n[20],-1,2,233,-1,{name:"ArrayPattern"},2,238,-1,{name:"ObjectPattern"}],[1,200,143],[1,6,144],[1,243,145,0,-1],[1,6,144],["(",147],[1,6,148],[1,133,149],[1,6,150],[")",-1],[1,6,152],[3,"keyword",n[23],153,0,-1],[1,6,154],[2,7,-1,{name:"Statement"}],[2,258,156,{name:"ParamList"}],[1,6,157],[2,129,-1,{name:"Block"}],[2,263,159,{name:"ForSpec"}],[1,6,160],[2,7,-1,{name:"Statement"}],[3,"keyword",n[24],162,0,170],[1,6,163],["(",164,0,165],[1,6,166],[1,6,167],[1,139,168],[2,129,170,{name:"Block"}],[1,6,169],[")",165],[1,6,171],[3,"keyword",n[25],172,0,-1],[1,6,173],[2,129,-1,{name:"Block"}],["{",175],[1,6,176],[3,"keyword",/^static(?![a-zA-Z¡-￿_0-9_\$])/,177,0,177,"@",178,"}",-1],[1,6,179],[1,6,180],[2,274,181,{name:"ObjectMember"}],[1,133,181],[1,6,176],[1,188,183,0,-1],[1,6,184],[",",185,0,-1],[1,6,186],[1,188,187,0,187],[1,6,184],[3,"variable",/^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/,189,3,"def",n[20],-1],[1,6,190],[3,"keyword",n[26],191],[1,6,192],[3,"def",n[20],-1],[0,194,2,289,-1,{name:"doccomment.braced"}],[[0,/^(?!\*\/|\@[a-zA-Z¡-￿_0-9]|\{)/,/^[^]/],195],[0,194,0,-1],[1,293,197],[1,193,197,0,-1],["\\",199,"\n",-1],[/^[^]/,-1],[3,"atom",n[27],-1,3,"keyword",n[28],-1,3,"keyword",n[29],201,3,"operator",n[30],201,3,"keyword",n[18],201,2,299,-1,{name:"NewExpression"},3,"keyword",n[6],203,3,"keyword",n[15],209,2,309,-1,{name:"ArrowFunc"},3,"variable callee",n[36],-1,3,"variable",n[20],-1,3,"number",n[31],-1,2,116,-1,{name:"string",token:"string"},3,"string-2",n[32],-1,1,125,-1,2,313,-1,{name:"ArrayLiteral"},2,318,-1,{name:"ObjectLiteral"},2,323,-1,{name:"ParenExpr"}],[1,6,202],[1,200,-1],[1,6,204],[3,"keyword","*",205,0,205],[1,6,206],[3,"def",n[20],207,0,207],[1,6,208],[2,155,-1,{name:"FunctionDef"}],[1,6,210],[[6,328],211,0,212],[3,"type def",n[20],212],[1,6,213],[3,"keyword",n[21],214,0,215],[1,6,216],[1,6,217],[1,133,215],[2,174,-1,{name:"ClassBody"}],[3,"operator",n[33],-1,3,"operator",n[34],219,3,"keyword",n[35],219,2,329,-1,{name:"ArgList"},1,125,-1,n[37],221,"[",223,3,"operator","?",227],[1,6,220],[1,133,-1],[1,6,222],[3,"property callee",n[36],-1,3,"property",n[20],-1],[1,6,224],[1,133,225],[1,6,226],["]",-1],[1,6,228],[1,133,229],[1,6,230],[3,"operator",":",231],[1,6,232],[1,133,-1],["[",234],[1,6,235],[1,334,236],[1,6,237],["]",-1],["{",239],[1,6,240],[1,340,241],[1,6,242],["}",-1],[3,"operator",n[33],-1,3,"operator",n[34],244,3,"keyword",n[35],244,2,329,-1,{name:"ArgList"},1,125,-1,n[37],246,"[",248,3,"operator","?",252],[1,6,245],[1,142,-1],[1,6,247],[3,"property callee",n[36],-1,3,"property",n[20],-1],[1,6,249],[1,133,250],[1,6,251],["]",-1],[1,6,253],[1,133,254],[1,6,255],[3,"operator",":",256],[1,6,257],[1,142,-1],["(",259],[1,6,260],[1,346,261],[1,6,262],[")",-1],["(",264],[1,6,265],[2,352,266,{name:"StatementMaybeOf"}],[1,6,267],[1,133,268,0,268,0,272],[1,6,269],[";",270],[1,6,271],[1,133,272,0,272],[1,6,273],[")",-1],[3,"keyword",/^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/,275,0,275],[1,6,276],[3,"keyword","*",277,0,277],[1,6,278],[3,"def property",n[20],279,"[",280,3,"number",n[31],279,2,116,279,{name:"string",token:"string"},3,"operator","...",281],[1,6,282],[1,6,283],[1,6,284],[2,155,-1,{name:"FunctionDef"},":",285,0,-1],[1,133,286],[1,142,-1],[1,6,287],[1,6,288],[1,142,-1],["]",279],["{",290],[1,293,291,1,193,292],[[0,/^(?!\}|\*\/)/,/^[^]/],291,0,292],[/^(?:\}|(?=\*\/))/,-1],[3,"tag",/^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_0-9])/,294,3,"tag",/^\@[a-zA-Z¡-￿_0-9]+/,-1],[n[38],294,"{",295,0,296,0,-1],[2,357,297,{name:"doccomment.type"}],[3,"def",/^[a-zA-Z¡-￿_0-9]+/,-1,0,-1],["}",298],[[1,"\n","\t"," ",/^\*(?!\/)/],298,0,296],[3,"keyword",n[39],300],[1,6,301],[".",302,1,200,303],[1,6,304],[1,6,305],[3,"keyword",/^target(?![a-zA-Z¡-￿_0-9_\$])/,-1],[2,329,306,{name:"ArgList"},".",307,0,-1],[1,6,305],[1,6,308],[3,"property callee",n[36],306,3,"property",n[20],306],[3,"def",[0,/^[a-zA-Z¡-￿__\$]/,/^[a-zA-Z¡-￿_0-9_\$]*/,[5,361]],311,[5,363],310],[2,258,311,{name:"ParamList"}],[1,6,312],[2,366,-1,{name:"ArrowRest"}],["[",314],[1,6,315],[1,369,316],[1,6,317],["]",-1],["{",319],[1,6,320],[1,375,321],[1,6,322],["}",-1],["(",324],[1,6,325],[1,133,326],[1,6,327],[")",-1],[3,"keyword",n[21],-1],["(",330],[1,6,331],[1,369,332],[1,6,333],[")",-1],[1,381,335,0,335,0,-1],[1,6,336],[",",337,0,-1],[1,6,338],[1,381,339,0,339,0,339],[1,6,336],[1,386,341,0,-1],[1,6,342],[",",343,0,-1],[1,6,344],[1,386,345,0,345],[1,6,342],[1,381,347,0,-1],[1,6,348],[",",349,0,-1],[1,6,350],[1,381,351,0,351],[1,6,348],[2,7,353,{name:"Statement"}],[1,6,354],[3,"keyword",/^of(?![a-zA-Z¡-￿_0-9_\$])/,355,0,-1],[1,6,356],[1,133,-1],[3,"type","{",358,3,"type",/^(?:(?!\{|\}|\*\/).)+/,357,"\n",359,0,-1],[2,357,360,{name:"doccomment.type"}],[/^[\t ]*(?:\*(?!\/)[\t ]*)?/,357],[/^(?=\*\/)/,357,3,"type","}",357],[1,6,362],["=>",-1],[2,258,364,{name:"ParamList"}],[1,6,365],["=>",-1],[3,"operator","=>",367],[1,6,368],[2,129,-1,{name:"Block"},1,142,-1],[1,142,370,0,-1],[1,6,371],[",",372,0,-1],[1,6,373],[1,142,374,0,374],[1,6,371],[2,274,376,{name:"ObjectMember"},0,-1],[1,6,377],[",",378,0,-1],[1,6,379],[2,274,380,{name:"ObjectMember"},0,380],[1,6,377],[1,139,382],[1,6,383],[3,"operator","=",384,0,-1],[1,6,385],[1,142,-1],[3,"def",/^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/,387,3,"property",n[20],391,3,"number",n[31],391,2,116,391,{name:"string",token:"string"},3,"operator","...",395],[1,6,388],[3,"operator","=",389,0,-1],[1,6,390],[1,142,-1],[1,6,392],[":",393],[1,6,394],[1,381,-1],[1,6,396],[1,381,-1]],start:0,token:5}),o=/(^|\s)variable($|\s)/;function a(e){var t=/^(if|for|do|while|try)\b/.exec(e.startLine.slice(e.startPos));return t&&t[1]}var l={Block:"}",BlockOf:"}",ClassBody:"}",AnnotationTypeBody:"}",ObjectLiteral:"}",ObjectPattern:"}",EnumBody:"}",LambdaBlock:"}",WhenBody:"}",ObjType:"}",ArrayInitializer:"}",NamespaceBlock:"}",BraceTokens:"}",ArrayLiteral:"]",BracketTokens:"]",TupleType:"]",ParamList:")",SimpleParamList:")",ArgList:")",ParenExpr:")",CondExpr:")",ForSpec:")",ParenTokens:")",ParenthesizedExpression:")",ConstructorParamList:")",TypeParams:">",TypeArgs:">",TemplateArgs:">",TemplateParams:">"},s=["Block","NamespaceBlock","ClassBody","AnnotationTypeBody","BlockOf","EnumBody"],c=["Statement","ObjectMember","ClassItem","EnumConstant","AnnotationTypeItem","ArgExpr","StatementMaybeOf","NewExpr"];function u(e,t){for(var n=e.startLine;;e=e.parent){if("CondExpr"==e.name)return r.countColumn(e.startLine,e.startPos+1,t.tabSize);if(c.indexOf(e.name)>-1&&/(^\s*|[\(\{\[])$/.test(e.startLine.slice(0,e.startPos)))return r.countColumn(e.startLine,e.startPos,t.tabSize);if(!e.parent||e.parent.startLine!=n)return r.countColumn(e.startLine,null,t.tabSize)}}function d(e,t,n){if(!e)return 0;if("string"==e.name||"comment"==e.name)return r.Pass;var i,o,h=l[e.name],p=t&&t.charAt(0)==h;if(h&&!1!==n.align&&(!n.dontAlign||n.dontAlign.indexOf(e.name)<0)&&function(e){return !/^\s*((\/\/.*)?$|.*=>)/.test(e.startLine.slice(e.startPos+1))}(e))return r.countColumn(e.startLine,e.startPos,n.tabSize)+(p?0:1);if(h&&s.indexOf(e.name)>-1){var m=e.parent;m&&"Statement"==m.name&&m.parent&&"Statement"==m.parent.name&&a(m.parent)&&!a(m)&&(m=m.parent);var g=f(m,n);return p||"NamespaceBlock"==e.name?g:/^(public|private|protected)\s*:/.test(t)?g+1:!(o=e.parent)||"Statement"!=o.name||!/^switch\b/.test(o.startLine.slice(o.startPos))||(i=t)&&/^\s*(case|default)\b/.test(i)?g+n.indentUnit:g+2*n.indentUnit}var v=u(e,n);return h?p&&(n.dontCloseBrackets||"").indexOf(h)<0?v:v+n.indentUnit*((n.doubleIndentBrackets||"").indexOf(h)<0?1:2):c.indexOf(e.name)>-1?a(e)?v+n.indentUnit:v+2*n.indentUnit:"Alternative"==e.name||"CatchFinally"==e.name?(v=u(e.parent,n),!t||/^((else|catch|finally)\b|\/[\/\*])/.test(t)?v:v+n.indentUnit):"ArrowRest"==e.name?v+n.indentUnit:"NewExpression"==e.name&&e.startLine.length>e.startPos+5?r.countColumn(e.startLine,e.startPos,n.tabSize)+2*n.indentUnit:"InitializerList"==e.name?v+2:"ThrowsClause"!=e.name||/throws\s*$/.test(e.startLine.slice(e.startPos))?d(e.parent,t,n):v+2*n.indentUnit}function f(e,t){for(;;e=e.parent){if(!e)return 0;if(c.indexOf(e.name)>-1||e.parent&&l[e.parent.name])return r.countColumn(e.startLine,null,t.tabSize)}}function h(e,t,n,i){var o=e.context&&e.context.name;if("DeclType"==o||"BeforeStatement"==o||"AnnotationHead"==o||"Template"==o||"str"==o)return f(e.context,i);if(("doccomment.braced"==o||"doccomment.tagGroup"==o)&&!/^[@*]/.test(t))return r.countColumn(e.context.startLine,null,i.tabSize)+2*i.indentUnit;var a=i.forceContent&&/^\s*(\/\/.*)?$/.test(n)?"x":n;return d(e.contextAt(a,n.length-t.length),t,i)}function p(e,t){for(var r=t-1;r>=0;r--){var n=e.charCodeAt(r);if(10===n)break;if(32!==n&&9!==n)return !1}return !0}var m=function(e){this.config=e;};m.prototype.startState=function(){return new g},m.prototype.copyState=function(e){return e.copy()},m.prototype.shouldInterceptTokenizing=function(e){var t=e.currentTemplateState;return void 0!==t&&null!==t.mode},m.prototype.interceptTokenizing=function(e,t){if(e.match("${")&&(e.backUp(2),!this.isEscaped(e,e.pos-2)))return {handled:!1};if("`"===e.peek()&&!this.isEscaped(e,e.pos))return {handled:!1};var r=t.currentTemplateState,n=r.mode,i=r.state,o=n.token(e,i);return this.backupIfEmbeddedTokenizerOvershot(e),{handled:!0,style:o}},m.prototype.trackState=function(e,t,r){if(e){var n=r.currentTemplateState;n&&"inline-expression"!==n.kind?this.trackStateInTemplate(e,t,r,n):this.trackStateNotInTemplate(e,t,r,n),r.previousVariable="variable"===e?t.current():null;}},m.prototype.trackStateNotInTemplate=function(e,t,r,n){if(n&&"string-2"===e&&t.current().startsWith("}"))return r.templateStack.pop(),void t.backUp(t.current().length-1);if("string-2"===e&&t.current().startsWith("`")){var i=this.getModeForTemplateTag(r.previousVariable),o="template";i?(t.backUp(t.current().length-1),r.templateStack.push(new y(o,i,CodeMirror.startState(i)))):r.templateStack.push(new y(o,null,null));}},m.prototype.trackStateInTemplate=function(e,t,r,n){"string-2"!==e||!t.current().endsWith("`")||this.isEscaped(t.pos-1)?"string-2"!==e||!t.current().endsWith("${")||this.isEscaped(t.pos-2)||r.templateStack.push(new y("inline-expression",null,null)):r.templateStack.pop();},m.prototype.backupIfEmbeddedTokenizerOvershot=function(e){for(var t=e.current(),r=0;;){var n=t.slice(r).search(/`|\$\{/);if(-1===n)return;n+=r;var i=t.length-n,o=e.pos-i;if(!this.isEscaped(e,o))return void e.backUp(t.length-n);r=n+1;}},m.prototype.isEscaped=function(e,t){for(var r=!1,n=t;n>0&&"\\"===e.string[n-1];)r=!r,n--;return r},m.prototype.getModeForTemplateTag=function(e){if(!e)return null;"htm"===e&&(e="html");for(var t=["google-"+e,""+e],r=0;r<t.length;r++){var n=CodeMirror.getMode(this.config,t[r]);if(n&&"null"!==n.name)return n}return null};var g=function(e,t){void 0===e&&(e=[]),void 0===t&&(t=null),this.templateStack=e,this.previousVariable=t;},v={currentTemplateState:{configurable:!0}};g.prototype.copy=function(){return new g(this.templateStack.map((function(e){return e.copy()})),this.previousVariable)},v.currentTemplateState.get=function(){return this.templateStack[this.templateStack.length-1]},Object.defineProperties(g.prototype,v);var y=function(e,t,r){this.kind=e,this.mode=t,this.state=r;};y.prototype.copy=function(){return this.mode?new y(this.kind,this.mode,CodeMirror.copyState(this.mode,this.state)):new y(this.kind,null,null)};var b=["Block","FunctionDef","ArrowFunc","ForStatement"],w=function(e){function t(t,r){e.call(this,i,{predicates:{canInsertSemi:!1===r.requireSemicolons?p:function(){return !1}}}),this.embeddedParser=new m(t),this.indentConf={doubleIndentBrackets:">)",dontCloseBrackets:")",tabSize:t.tabSize,indentUnit:t.indentUnit,forceContent:!0};}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.startState=function(){var t=e.prototype.startState.call(this);return t.embeddedParserState=this.embeddedParser.startState(),t},t.prototype.copyState=function(t){var r=e.prototype.copyState.call(this,t);return r.embeddedParserState=this.embeddedParser.copyState(t.embeddedParserState),r},t.prototype.token=function(t,r){var n=r.embeddedParserState;if(this.embeddedParser.shouldInterceptTokenizing(n)){var i=this.embeddedParser.interceptTokenizing(t,n),a=i.handled,l=i.style;if(a)return l}var s=e.prototype.token.call(this,t,r);return this.embeddedParser.trackState(s,t,n),function(e,t,r,n){if("def"==e){var i=function(e,t){for(var r=e;r;r=r.parent)if(t.indexOf(r.name)>-1)return r}(n.context,t),a=r.current();if(i&&(i.locals||(i.locals=[]),-1==i.locals.indexOf(a)&&i.locals.push(a),"funcName"!=n.context.name))return "def local"}else o.test(e)&&!/qualified/.test(e)&&function(e,t){for(var r=e;r;r=r.parent)if(r.locals&&r.locals.indexOf(t)>-1)return !0;return !1}(n.context,r.current())&&(e=e.replace(o,"$1variable-2$2"));return e}(s,b,t,r)},t.prototype.indent=function(e,t,r){return t||(t=r="x"),h(e,t,r,this.indentConf)},t}(r.GrammarMode),k={electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``"};for(var x in k)w.prototype[x]=k[x];r.registerHelper("wordChars","google-javascript",/[\w$]/),r.defineMode("google-javascript",(function(e,t){return new w(e,t)}));}((e="undefined"!=typeof globalThis?globalThis:e||self).CodeMirror);}(window),function(e,t){!function(e){function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}});}})),t.default=e,Object.freeze(t)}var r=t(e),n=[/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/,/^while(?![a-zA-Z¡-￿_0-9_\$])/,/^with(?![a-zA-Z¡-￿_0-9_\$])/,/^do(?![a-zA-Z¡-￿_0-9_\$])/,/^debugger(?![a-zA-Z¡-￿_0-9_\$])/,/^if(?![a-zA-Z¡-￿_0-9_\$])/,/^function(?![a-zA-Z¡-￿_0-9_\$])/,/^for(?![a-zA-Z¡-￿_0-9_\$])/,/^default(?![a-zA-Z¡-￿_0-9_\$])/,/^case(?![a-zA-Z¡-￿_0-9_\$])/,/^return(?![a-zA-Z¡-￿_0-9_\$])/,/^throw(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/,/^switch(?![a-zA-Z¡-￿_0-9_\$])/,/^try(?![a-zA-Z¡-￿_0-9_\$])/,/^class(?![a-zA-Z¡-￿_0-9_\$])/,/^export(?![a-zA-Z¡-￿_0-9_\$])/,/^import(?![a-zA-Z¡-￿_0-9_\$])/,[0,"async",/^(?![a-zA-Z¡-￿_0-9_\$])/,[5,139]],/^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/,/^extends(?![a-zA-Z¡-￿_0-9_\$])/,/^enum(?![a-zA-Z¡-￿_0-9_\$])/,[1,";",/^(?=\})/,[7,"canInsertSemi"]],/^from(?![a-zA-Z¡-￿_0-9_\$])/,[1,"\n","\t"," "],/^[a-zA-Z¡-￿__\$]/,/^const(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/,/^new(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:0x[0-9a-fA-F_]+|0o[0-7_]+|0b[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)/,/^else(?![a-zA-Z¡-￿_0-9_\$])/,/^catch(?![a-zA-Z¡-￿_0-9_\$])/,/^finally(?![a-zA-Z¡-￿_0-9_\$])/,/^as(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:delete|typeof|yield|await|void)(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:\.\.\.|\!|\+\+?|\-\-?)/,/^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/,[0,/^[a-zA-Z¡-￿__\$]/,/^[a-zA-Z¡-￿_0-9_\$]*/,[5,508]],/^(?:\+\+|\-\-)/,/^(?:(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?|\?\?)/,/^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:public|private|protected|readonly|abstract|static)(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:\.|\?\.)/,[0,/^[a-zA-Z¡-￿__\$]/,/^[a-zA-Z¡-￿_0-9_\$]*/,[5,533]],/^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/,/^is(?![a-zA-Z¡-￿_0-9_\$])/,/^(?:\.\.\.)?/,/^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(\<])/],i=Object.freeze({__proto__:null,nodes:[[1,6,2],[/^[^]/,0],[1,6,3],[2,7,4,{name:"Statement"},0,1],[1,6,3],[3,"keyword",n[0],-1,3,"keyword",n[1],-1,3,"keyword",n[2],-1,3,"keyword",n[30],-1,3,"keyword",n[3],-1,3,"keyword",n[14],-1,3,"keyword",n[32],-1,3,"keyword",n[10],-1,3,"keyword",n[11],-1,3,"keyword",n[12],-1,3,"keyword",n[4],-1,3,"keyword",n[9],-1,3,"keyword",n[8],-1,3,"keyword",n[6],-1,3,"keyword",n[5],-1,3,"keyword",n[31],-1,3,"keyword",n[7],-1,3,"keyword",n[13],-1,3,"keyword",n[15],-1,3,"keyword",n[16],-1,3,"keyword",n[17],-1,3,"keyword",n[20],-1,3,"keyword",n[18],-1,3,"keyword",n[28],-1,3,"keyword",n[41],-1,3,"keyword",n[35],-1,3,"keyword",n[34],-1,3,"atom",n[27],-1,3,"variable",n[19],-1,3,"operator",n[36],-1,3,"operator",n[40],-1,3,"operator",n[39],-1,2,141,-1,{name:"string",token:"string"},3,"number",n[29],-1,2,146,-1,{name:"comment",token:"comment"},3,"string-2",n[37],-1,1,150,-1,/^[^]/,-1],[n[24],6,2,146,6,{name:"comment",token:"comment"},0,-1],[3,"keyword",[0,"type",/^(?![a-zA-Z¡-￿_0-9_\$])/,[5,154]],8,3,"keyword",[0,"namespace",/^(?![a-zA-Z¡-￿_0-9_\$])/,[5,155]],18,3,"keyword",[0,"interface",/^(?![a-zA-Z¡-￿_0-9_\$])/,[5,156]],26,[5,157],36,3,"keyword",n[21],37,3,"keyword",[0,"declare",/^(?![a-zA-Z¡-￿_0-9_\$])/,[5,160]],43,3,"keyword",/^abstract(?![a-zA-Z¡-￿_0-9_\$])/,43,3,"keyword",n[0],45,3,"keyword",n[1],52,3,"keyword",n[2],52,3,"keyword",n[3],56,2,161,-1,{name:"Block"},";",-1,3,"keyword",n[4],-1,3,"keyword",n[5],64,3,"keyword",n[6],69,3,"keyword",n[7],75,3,"keyword",n[8],77,n[45],77,3,"keyword",n[9],78,3,"keyword",n[10],81,3,"keyword",n[11],85,3,"keyword",n[12],89,3,"keyword",n[13],93,3,"keyword",n[14],97,3,"keyword",n[15],101,3,"keyword",n[16],105,3,"keyword",n[17],117,3,"keyword",n[18],133,"@",135,1,165,137],[1,6,9],[3,"def type",n[19],10],[1,6,11],[2,171,12,{name:"TypeParams"},0,12],[1,6,13],[3,"operator","=",14],[1,6,15],[1,176,16],[1,6,17],[n[22],-1],[1,6,19],[[5,224],20,3,"def",n[19],21],[3,"variable",n[19],22],[1,6,23],[1,6,24],[2,161,-1,{name:"Block"}],[".",25],[1,6,19],[1,6,27],[3,"def type",n[19],28],[1,6,29],[2,171,30,{name:"TypeParams"},0,30],[1,6,31],[3,"keyword",n[20],32,0,33],[1,6,34],[1,6,35],[1,227,33],[2,233,-1,{name:"ObjType"}],[3,"keyword",n[26],38],[1,6,39],[1,6,40],[3,"def type",n[19],41],[3,"keyword",n[21],37],[1,6,42],[2,241,-1,{name:"EnumBody"}],[1,6,44],[2,7,-1,{name:"Statement"}],[1,6,46],[1,246,47],[1,6,48],[",",49,n[22],-1],[1,6,50],[1,246,51],[1,6,48],[1,6,53],[2,257,54,{name:"CondExpr"}],[1,6,55],[2,7,-1,{name:"Statement"}],[1,6,57],[2,7,58,{name:"Statement"}],[1,6,59],[3,"keyword",n[1],60,0,-1],[1,6,61],[2,257,62,{name:"CondExpr"}],[1,6,63],[n[22],-1],[1,6,65],[2,257,66,{name:"CondExpr"}],[1,6,67],[2,7,68,{name:"Statement"}],[2,262,-1,{name:"Alternative"}],[1,6,70],[3,"keyword","*",71,0,71],[1,6,72],[3,"def",n[19],73],[1,6,74],[2,266,-1,{name:"FunctionDef"}],[1,6,76],[2,275,-1,{name:"ForStatement"}],[1,6,79],[1,6,80],[":",-1],[1,165,77],[1,6,82],[n[22],-1,1,165,83],[1,6,84],[n[22],-1],[1,6,86],[1,165,87],[1,6,88],[n[22],-1],[1,6,90],[/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/,91],[1,6,92],[n[22],-1],[1,6,94],[2,257,95,{name:"CondExpr"}],[1,6,96],[2,161,-1,{name:"Block"}],[1,6,98],[2,161,99,{name:"Block"}],[1,6,100],[2,278,-1,{name:"CatchFinally"}],[1,6,102],[3,"def type",n[19],103],[1,6,104],[1,291,-1],[1,6,106],["*",107,3,"keyword",n[8],107,"{",108,2,7,-1,{name:"Statement"}],[1,6,109],[1,6,110],[3,"keyword",n[23],111,0,112],[1,302,113],[1,6,114],[1,6,115],[1,6,116],[2,141,112,{name:"string",token:"string"}],[n[22],-1],["}",107],[1,6,118],[2,141,119,{name:"string",token:"string"},3,"keyword","*",120,1,308,121,"{",122],[1,6,123],[1,6,124],[1,6,125],[1,6,126],[n[22],-1],[3,"keyword",n[33],127,0,121],[3,"keyword",n[23],128,0,119],[1,302,129],[1,6,130],[1,6,131],[1,6,132],[3,"def",n[19],121],[2,141,119,{name:"string",token:"string"}],["}",121],[1,6,134],[2,7,-1,{name:"Statement"}],[1,6,136],[1,165,-1],[1,6,138],[n[22],-1],[1,6,140],[3,"keyword",n[6],-1,/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/,-1],["'",142,'"',144],["\\",143,/^(?!\')./,142,"'",-1],[/^[^]/,142],["\\",145,/^(?!\")./,144,'"',-1],[/^[^]/,144],[/^\/\*\*(?!\/)/,147,"/*",149,/^\/\/.*/,-1],[1,313,147,0,148],[2,316,148,{name:"doccomment.tagGroup"},"*/",-1],[[0,/^(?!\*\/)/,/^[^]/],149,"*/",-1],[3,"string-2","`",151],[3,"string-2","${",152,2,318,151,{name:"str2",token:"string-2"},3,"string-2",/^(?:(?!\`|\$\{|\\).)+/,151,3,"string-2","`",-1],[1,165,153],[3,"string-2","}",151],[n[24],154,n[25],-1],[n[24],155,n[25],-1],[n[24],156,n[25],-1],[3,"keyword",n[26],158],[1,6,159],[3,"keyword",n[21],-1],[n[24],160,n[25],-1],["{",162],[1,6,163],[2,7,164,{name:"Statement"},"}",-1],[1,6,163],[1,320,166],[1,6,167],[",",168,1,348,169,0,-1],[1,6,170],[1,6,167],[1,367,169],["<",172],[1,6,173],[1,371,174],[1,6,175],[">",-1],[3,"keyword",/^this(?![a-zA-Z¡-￿_0-9_\$])/,209,3,"atom",n[27],209,3,"keyword",/^typeof(?![a-zA-Z¡-￿_0-9_\$])/,177,3,"keyword",/^(?:keyof|readonly|unique)(?![a-zA-Z¡-￿_0-9_\$])/,178,[0,[5,393],"("],179,3,"keyword",n[28],180,0,180,0,181,2,396,209,{name:"TupleType"},2,233,209,{name:"ObjType"},2,141,209,{name:"string",token:"string"},3,"number",n[29],209],[1,6,182],[1,6,183],[1,6,184],[1,6,185],[[5,401],186,3,"type",n[19],187],[3,"variable",n[19],188],[1,176,209],[1,176,189],[2,171,190,{name:"TypeParams"},0,190],[3,"variable",n[19],191],[1,6,192],[1,6,193],[1,6,194],[1,6,195],[1,6,196],[2,404,209,{name:"TypeArgs"},0,209],[".",197,"[",198,0,209],[")",209],[2,409,199,{name:"ParamListSpec"}],[".",200],[1,6,201],[1,6,202],[1,6,203],[1,6,181],[3,"property",n[19],204],[1,165,205],[3,"operator","=>",206],[1,6,193],[1,6,207],[1,6,208],["]",204],[1,410,209],[1,6,210],[3,"operator",/^[\&\|]/,211,3,"keyword",n[20],211,"[",212,3,"operator","?",213,0,-1],[1,6,214],[1,6,215],[1,6,216],[1,176,217],[1,176,218,0,218],[1,176,219],[1,6,210],[1,6,220],[1,6,221],["]",217],[3,"operator",":",222],[1,6,223],[1,176,217],[n[19],225],[1,6,226],[".",-1],[1,176,228,0,-1],[1,6,229],[",",230,0,-1],[1,6,231],[1,176,232,0,232],[1,6,229],["{",234],[1,6,235],[1,416,236,0,236],[1,6,237],[/^[\,\;]/,238,"}",-1],[1,6,239],[1,416,240,0,240],[1,6,237],["{",242],[1,6,243],[1,449,244],[1,6,245],["}",-1],[1,463,247],[1,6,248],[3,"operator","!",249,0,249],[1,6,250],[":",251,0,253],[1,6,252],[1,176,253],[1,6,254],[3,"operator","=",255,0,-1],[1,6,256],[1,367,-1],["(",258],[1,6,259],[1,165,260],[1,6,261],[")",-1],[1,6,263],[3,"keyword",n[30],264,0,-1],[1,6,265],[2,7,-1,{name:"Statement"}],[2,171,267,{name:"TypeParams"},0,267],[1,6,268],[2,466,269,{name:"ParamList"}],[1,6,270],[":",271,0,273],[1,6,272],[1,410,273],[1,6,274],[2,161,-1,{name:"Block"},n[22],-1],[2,471,276,{name:"ForSpec"}],[1,6,277],[2,7,-1,{name:"Statement"}],[3,"keyword",n[31],279,0,287],[1,6,280],["(",281,0,282],[1,6,283],[1,6,284],[1,463,285],[2,161,287,{name:"Block"}],[1,6,286],[")",282],[1,6,288],[3,"keyword",n[32],289,0,-1],[1,6,290],[2,161,-1,{name:"Block"}],[2,171,292,{name:"TypeParams"},0,292],[1,6,293],[3,"keyword",n[20],294,0,296],[1,6,295],[1,176,296],[1,6,297],[3,"keyword",/^implements(?![a-zA-Z¡-￿_0-9_\$])/,298,0,300],[1,6,299],[1,227,300],[1,6,301],[2,482,-1,{name:"ClassBody"}],[1,308,303,0,-1],[1,6,304],[",",305,0,-1],[1,6,306],[1,308,307,0,307],[1,6,304],[3,"variable",/^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/,309,3,"def",n[19],-1],[1,6,310],[3,"keyword",n[33],311],[1,6,312],[3,"def",n[19],-1],[0,314,2,490,-1,{name:"doccomment.braced"}],[[0,/^(?!\*\/|\@[a-zA-Z¡-￿_0-9]|\{)/,/^[^]/],315],[0,314,0,-1],[1,494,317],[1,313,317,0,-1],["\\",319,"\n",-1],[/^[^]/,-1],["<",321,3,"atom",n[27],-1,3,"keyword",n[34],-1,3,"keyword",n[35],327,3,"operator",n[36],327,3,"keyword",n[18],327,3,"keyword",n[28],329,3,"keyword",n[6],335,3,"keyword",n[15],341,2,500,-1,{name:"ArrowFunc"},3,"variable callee",n[38],346,3,"variable",n[19],-1,3,"number",n[29],-1,2,141,-1,{name:"string",token:"string"},3,"string-2",n[37],-1,1,150,-1,2,512,-1,{name:"ArrayLiteral"},2,517,-1,{name:"ObjectLiteral"},2,522,-1,{name:"ParenExpr"}],[1,6,322],[1,176,323],[1,6,324],[">",325],[1,6,326],[1,320,-1],[1,6,328],[1,320,-1],[1,6,330],[".",331,3,"variable callee",n[38],332,1,320,-1],[1,6,333],[1,6,334],[3,"keyword",/^target(?![a-zA-Z¡-￿_0-9_\$])/,-1],[2,404,-1,{name:"TypeArgs"},0,-1],[1,6,336],[3,"keyword","*",337,0,337],[1,6,338],[3,"def",n[19],339,0,339],[1,6,340],[2,266,-1,{name:"FunctionDef"}],[1,6,342],[[6,527],343,0,344],[3,"def type",n[19],344],[1,6,345],[1,291,-1],[1,6,347],[2,404,-1,{name:"TypeArgs"},0,-1],[3,"keyword",n[33],349,3,"operator","!",-1,3,"operator",n[39],-1,3,"operator",n[40],351,3,"keyword",n[41],351,2,528,-1,{name:"ArgList"},1,150,-1,n[43],353,"[",357,3,"operator","?",361],[1,6,350],[1,176,-1],[1,6,352],[1,165,-1],[1,6,354],[3,"property callee",n[44],355,3,"property",n[19],-1],[1,6,356],[2,404,-1,{name:"TypeArgs"},0,-1],[1,6,358],[1,165,359],[1,6,360],["]",-1],[1,6,362],[1,165,363],[1,6,364],[3,"operator",":",365],[1,6,366],[1,165,-1],[1,320,368],[1,6,369],[1,537,370,0,-1],[1,6,369],[3,"def type",n[19],372,0,-1],[1,6,373],[3,"keyword",n[20],374,0,375],[1,6,376],[1,6,377],[1,176,375],[3,"operator","=",378,0,379],[1,6,380],[1,6,381],[1,176,379],[",",382,0,-1],[1,6,383],[3,"def type",n[19],384,0,385],[1,6,386],[1,6,381],[3,"keyword",n[20],387,0,388],[1,6,389],[1,6,390],[1,176,388],[3,"operator","=",391,0,385],[1,6,392],[1,176,385],["(",394],[1,6,395],[[6,556],-1],["[",397],[1,6,398],[1,559,399],[1,6,400],["]",-1],[n[19],402],[1,6,403],[".",-1],["<",405],[1,6,406],[1,227,407],[1,6,408],[">",-1],[2,466,-1,{name:"ParamList"}],[[5,573],411,0,414],[3,"variable",n[19],412],[1,6,413],[3,"keyword",n[46],414],[1,6,415],[1,176,-1],[3,"keyword",n[28],417,0,417,0,425],[1,6,418],[2,171,419,{name:"TypeParams"},0,419],[1,6,420],[2,466,421,{name:"ParamList"}],[1,6,422],[":",423,0,-1],[1,6,424],[1,410,-1],[3,"keyword",n[42],426,"[",427,3,"def property",n[19],428,2,141,428,{name:"string",token:"string"},3,"number",n[29],428],[1,6,425],[1,6,429],[1,6,430],[[0,[5,576],/^[a-zA-Z¡-￿__\$]/,/^[a-zA-Z¡-￿_0-9_\$]*/],431,1,165,432],[/^\??/,433],[1,6,434],[1,6,435],[1,6,436],[":",437,3,"keyword",/^in(?![a-zA-Z¡-￿_0-9_\$])/,437],["]",438],[2,171,439,{name:"TypeParams"},0,439,0,440],[1,6,441],[1,6,442],[1,6,443],[1,6,444],[1,176,432],[":",445],[2,466,440,{name:"ParamList"}],[":",446,0,-1],[1,6,447],[1,6,448],[1,176,-1],[1,410,-1],[3,"def property",n[19],450,0,-1],[1,6,451],[3,"operator","=",452,0,453],[1,6,454],[1,6,455],[1,367,453],[",",456,0,-1],[1,6,457],[3,"def property",n[19],458,0,459],[1,6,460],[1,6,455],[3,"operator","=",461,0,459],[1,6,462],[1,367,459],[3,"operator","...",464,0,464],[1,6,465],[3,"def",n[19],-1,2,579,-1,{name:"ArrayPattern"},2,584,-1,{name:"ObjectPattern"}],["(",467],[1,6,468],[1,589,469],[1,6,470],[")",-1],["(",472],[1,6,473],[2,629,474,{name:"StatementMaybeOf"}],[1,6,475],[1,165,476,0,476,0,480],[1,6,477],[";",478],[1,6,479],[1,165,480,0,480],[1,6,481],[")",-1],["{",483],[1,6,484],[0,485,"@",486,"}",-1],[3,"keyword",n[42],487,3,"keyword",[0,"override",/^(?![a-zA-Z¡-￿_0-9_\$])/,[5,634]],487,2,635,488,{name:"ClassItem"}],[1,6,489],[1,6,485],[1,6,484],[1,165,488],["{",491],[1,494,492,1,313,493],[[0,/^(?!\}|\*\/)/,/^[^]/],492,0,493],[/^(?:\}|(?=\*\/))/,-1],[3,"tag",/^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_0-9])/,495,3,"tag",/^\@[a-zA-Z¡-￿_0-9]+/,-1],[n[24],495,"{",496,0,497,0,-1],[2,656,498,{name:"doccomment.type"}],[3,"def",/^[a-zA-Z¡-￿_0-9]+/,-1,0,-1],["}",499],[[1,"\n","\t"," ",/^\*(?!\/)/],499,0,497],[3,"def",[0,/^[a-zA-Z¡-￿__\$]/,/^[a-zA-Z¡-￿_0-9_\$]*/,[5,660]],506,[5,666],501],[2,466,502,{name:"ParamList"}],[1,6,503],[":",504,0,506],[1,6,505],[1,410,506],[1,6,507],[2,673,-1,{name:"ArrowRest"}],[/^\<(?! )/,-1,/^ */,509],[1,678,510,0,511],[/^ */,511],["(",-1],["[",513],[1,6,514],[1,680,515],[1,6,516],["]",-1],["{",518],[1,6,519],[1,686,520],[1,6,521],["}",-1],["(",523],[1,6,524],[1,165,525],[1,6,526],[")",-1],[3,"keyword",n[20],-1],["(",529],[1,6,530],[1,680,531],[1,6,532],[")",-1],[/^ */,534],[1,678,535,0,536],[/^ */,536],["(",-1],[3,"keyword",n[33],538,3,"operator","!",-1,3,"operator",n[39],-1,3,"operator",n[40],540,3,"keyword",n[41],540,2,528,-1,{name:"ArgList"},1,150,-1,n[43],542,"[",546,3,"operator","?",550],[1,6,539],[1,176,-1],[1,6,541],[1,367,-1],[1,6,543],[3,"property callee",n[44],544,3,"property",n[19],-1],[1,6,545],[2,404,-1,{name:"TypeArgs"},0,-1],[1,6,547],[1,165,548],[1,6,549],["]",-1],[1,6,551],[1,165,552],[1,6,553],[3,"operator",":",554],[1,6,555],[1,367,-1],[/^(?:\)|\.\.\.)/,-1,n[19],557],[1,6,558],[/^[\?\:]/,-1],[n[45],560,0,561,0,-1],[1,6,562],[1,6,563],[":",561],[1,176,564],[1,6,565],[",",566,0,-1],[1,6,567],[n[45],568,0,569,0,570],[1,6,571],[1,6,572],[1,6,565],[":",569],[1,176,570],[n[19],574],[1,6,575],[3,"keyword",n[46],-1],[n[19],577],[1,6,578],[/^(?:\:|in)/,-1],["[",580],[1,6,581],[1,692,582],[1,6,583],["]",-1],["{",585],[1,6,586],[1,698,587],[1,6,588],["}",-1],["@",590,0,591,0,-1],[1,6,592],[3,"keyword",n[42],593,n[47],594],[1,165,595],[1,6,591],[1,6,596],[1,6,589],[1,463,597],[1,6,598],[/^\??/,599],[1,6,600],[":",601,0,602],[1,6,603],[1,6,604],[1,176,602],[3,"operator","=",605,0,606],[1,6,607],[1,6,608],[1,367,606],[",",609,0,-1],[1,6,610],["@",611,0,612,0,613],[1,6,614],[3,"keyword",n[42],615,n[47],616],[1,6,608],[1,165,617],[1,6,612],[1,6,618],[1,6,610],[1,463,619],[1,6,620],[/^\??/,621],[1,6,622],[":",623,0,624],[1,6,625],[1,6,626],[1,176,624],[3,"operator","=",627,0,613],[1,6,628],[1,367,613],[2,7,630,{name:"Statement"}],[1,6,631],[3,"keyword",/^of(?![a-zA-Z¡-￿_0-9_\$])/,632,0,-1],[1,6,633],[1,165,-1],[n[24],634,n[25],-1],[3,"keyword",n[48],636,0,636],[1,6,637],[3,"def property",n[19],642,"[",638,3,"number",n[29],642,2,141,642,{name:"string",token:"string"}],[1,6,639],[1,165,640],[1,6,641],["]",642],[1,6,643],[3,"keyword","*",644,0,644,/^[\!\?]?/,645],[1,6,646],[1,6,647],[2,266,-1,{name:"FunctionDef"}],[":",648,0,649],[1,6,650],[1,6,651],[1,176,649],[3,"operator","=",652,0,653],[1,6,654],[1,6,655],[1,165,653],[n[22],-1],[3,"type","{",657,3,"type",/^(?:(?!\{|\}|\*\/).)+/,656,"\n",658,0,-1],[2,656,659,{name:"doccomment.type"}],[/^[\t ]*(?:\*(?!\/)[\t ]*)?/,656],[/^(?=\*\/)/,656,3,"type","}",656],[1,6,661],[":",662,0,665],[1,6,663],[1,176,664],[1,6,665],["=>",-1],[2,466,667,{name:"ParamList"}],[1,6,668],[":",669,0,671],[1,6,670],[1,410,671],[1,6,672],["=>",-1],[3,"operator","=>",674],[1,6,675],[2,171,676,{name:"TypeParams"},0,676],[1,6,677],[2,161,-1,{name:"Block"},1,367,-1],["<",679],[1,678,679,[1,"=>",[0,/^(?!\>)/,/^[^]/]],679,">",-1],[1,367,681,0,-1],[1,6,682],[",",683,0,-1],[1,6,684],[1,367,685,0,685],[1,6,682],[2,704,687,{name:"ObjectMember"},0,-1],[1,6,688],[",",689,0,-1],[1,6,690],[2,704,691,{name:"ObjectMember"},0,691],[1,6,688],[1,719,693,0,693,0,-1],[1,6,694],[",",695,0,-1],[1,6,696],[1,719,697,0,697,0,697],[1,6,694],[1,724,699,0,-1],[1,6,700],[",",701,0,-1],[1,6,702],[1,724,703,0,703],[1,6,700],[3,"keyword",n[48],705,0,705],[1,6,706],[3,"keyword","*",707,0,707],[1,6,708],[3,"def property",n[19],709,"[",710,3,"number",n[29],709,2,141,709,{name:"string",token:"string"},3,"operator","...",711],[1,6,712],[1,6,713],[1,6,714],[2,266,-1,{name:"FunctionDef"},":",715,0,-1],[1,165,716],[1,367,-1],[1,6,717],[1,6,718],[1,367,-1],["]",709],[1,463,720],[1,6,721],[3,"operator","=",722,0,-1],[1,6,723],[1,367,-1],[3,"def",/^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/,725,3,"property",n[19],729,3,"number",n[29],729,2,141,729,{name:"string",token:"string"},3,"operator","...",733],[1,6,726],[3,"operator","=",727,0,-1],[1,6,728],[1,367,-1],[1,6,730],[":",731],[1,6,732],[1,719,-1],[1,6,734],[1,719,-1]],start:0,token:5}),o=/(^|\s)variable($|\s)/;function a(e){var t=/^(if|for|do|while|try)\b/.exec(e.startLine.slice(e.startPos));return t&&t[1]}var l={Block:"}",BlockOf:"}",ClassBody:"}",AnnotationTypeBody:"}",ObjectLiteral:"}",ObjectPattern:"}",EnumBody:"}",LambdaBlock:"}",WhenBody:"}",ObjType:"}",ArrayInitializer:"}",NamespaceBlock:"}",BraceTokens:"}",ArrayLiteral:"]",BracketTokens:"]",TupleType:"]",ParamList:")",SimpleParamList:")",ArgList:")",ParenExpr:")",CondExpr:")",ForSpec:")",ParenTokens:")",ParenthesizedExpression:")",ConstructorParamList:")",TypeParams:">",TypeArgs:">",TemplateArgs:">",TemplateParams:">"},s=["Block","NamespaceBlock","ClassBody","AnnotationTypeBody","BlockOf","EnumBody"],c=["Statement","ObjectMember","ClassItem","EnumConstant","AnnotationTypeItem","ArgExpr","StatementMaybeOf","NewExpr"];function u(e,t){for(var n=e.startLine;;e=e.parent){if("CondExpr"==e.name)return r.countColumn(e.startLine,e.startPos+1,t.tabSize);if(c.indexOf(e.name)>-1&&/(^\s*|[\(\{\[])$/.test(e.startLine.slice(0,e.startPos)))return r.countColumn(e.startLine,e.startPos,t.tabSize);if(!e.parent||e.parent.startLine!=n)return r.countColumn(e.startLine,null,t.tabSize)}}function d(e,t,n){if(!e)return 0;if("string"==e.name||"comment"==e.name)return r.Pass;var i,o,h=l[e.name],p=t&&t.charAt(0)==h;if(h&&!1!==n.align&&(!n.dontAlign||n.dontAlign.indexOf(e.name)<0)&&function(e){return !/^\s*((\/\/.*)?$|.*=>)/.test(e.startLine.slice(e.startPos+1))}(e))return r.countColumn(e.startLine,e.startPos,n.tabSize)+(p?0:1);if(h&&s.indexOf(e.name)>-1){var m=e.parent;m&&"Statement"==m.name&&m.parent&&"Statement"==m.parent.name&&a(m.parent)&&!a(m)&&(m=m.parent);var g=f(m,n);return p||"NamespaceBlock"==e.name?g:/^(public|private|protected)\s*:/.test(t)?g+1:!(o=e.parent)||"Statement"!=o.name||!/^switch\b/.test(o.startLine.slice(o.startPos))||(i=t)&&/^\s*(case|default)\b/.test(i)?g+n.indentUnit:g+2*n.indentUnit}var v=u(e,n);return h?p&&(n.dontCloseBrackets||"").indexOf(h)<0?v:v+n.indentUnit*((n.doubleIndentBrackets||"").indexOf(h)<0?1:2):c.indexOf(e.name)>-1?a(e)?v+n.indentUnit:v+2*n.indentUnit:"Alternative"==e.name||"CatchFinally"==e.name?(v=u(e.parent,n),!t||/^((else|catch|finally)\b|\/[\/\*])/.test(t)?v:v+n.indentUnit):"ArrowRest"==e.name?v+n.indentUnit:"NewExpression"==e.name&&e.startLine.length>e.startPos+5?r.countColumn(e.startLine,e.startPos,n.tabSize)+2*n.indentUnit:"InitializerList"==e.name?v+2:"ThrowsClause"!=e.name||/throws\s*$/.test(e.startLine.slice(e.startPos))?d(e.parent,t,n):v+2*n.indentUnit}function f(e,t){for(;;e=e.parent){if(!e)return 0;if(c.indexOf(e.name)>-1||e.parent&&l[e.parent.name])return r.countColumn(e.startLine,null,t.tabSize)}}function h(e,t,n,i){var o=e.context&&e.context.name;if("DeclType"==o||"BeforeStatement"==o||"AnnotationHead"==o||"Template"==o||"str"==o)return f(e.context,i);if(("doccomment.braced"==o||"doccomment.tagGroup"==o)&&!/^[@*]/.test(t))return r.countColumn(e.context.startLine,null,i.tabSize)+2*i.indentUnit;var a=i.forceContent&&/^\s*(\/\/.*)?$/.test(n)?"x":n;return d(e.contextAt(a,n.length-t.length),t,i)}function p(e,t){for(var r=t-1;r>=0;r--){var n=e.charCodeAt(r);if(10===n)break;if(32!==n&&9!==n)return !1}return !0}var m=function(e){this.config=e;};m.prototype.startState=function(){return new g},m.prototype.copyState=function(e){return e.copy()},m.prototype.shouldInterceptTokenizing=function(e){var t=e.currentTemplateState;return void 0!==t&&null!==t.mode},m.prototype.interceptTokenizing=function(e,t){if(e.match("${")&&(e.backUp(2),!this.isEscaped(e,e.pos-2)))return {handled:!1};if("`"===e.peek()&&!this.isEscaped(e,e.pos))return {handled:!1};var r=t.currentTemplateState,n=r.mode,i=r.state,o=n.token(e,i);return this.backupIfEmbeddedTokenizerOvershot(e),{handled:!0,style:o}},m.prototype.trackState=function(e,t,r){if(e){var n=r.currentTemplateState;n&&"inline-expression"!==n.kind?this.trackStateInTemplate(e,t,r,n):this.trackStateNotInTemplate(e,t,r,n),r.previousVariable="variable"===e?t.current():null;}},m.prototype.trackStateNotInTemplate=function(e,t,r,n){if(n&&"string-2"===e&&t.current().startsWith("}"))return r.templateStack.pop(),void t.backUp(t.current().length-1);if("string-2"===e&&t.current().startsWith("`")){var i=this.getModeForTemplateTag(r.previousVariable),o="template";i?(t.backUp(t.current().length-1),r.templateStack.push(new y(o,i,CodeMirror.startState(i)))):r.templateStack.push(new y(o,null,null));}},m.prototype.trackStateInTemplate=function(e,t,r,n){"string-2"!==e||!t.current().endsWith("`")||this.isEscaped(t.pos-1)?"string-2"!==e||!t.current().endsWith("${")||this.isEscaped(t.pos-2)||r.templateStack.push(new y("inline-expression",null,null)):r.templateStack.pop();},m.prototype.backupIfEmbeddedTokenizerOvershot=function(e){for(var t=e.current(),r=0;;){var n=t.slice(r).search(/`|\$\{/);if(-1===n)return;n+=r;var i=t.length-n,o=e.pos-i;if(!this.isEscaped(e,o))return void e.backUp(t.length-n);r=n+1;}},m.prototype.isEscaped=function(e,t){for(var r=!1,n=t;n>0&&"\\"===e.string[n-1];)r=!r,n--;return r},m.prototype.getModeForTemplateTag=function(e){if(!e)return null;"htm"===e&&(e="html");for(var t=["google-"+e,""+e],r=0;r<t.length;r++){var n=CodeMirror.getMode(this.config,t[r]);if(n&&"null"!==n.name)return n}return null};var g=function(e,t){void 0===e&&(e=[]),void 0===t&&(t=null),this.templateStack=e,this.previousVariable=t;},v={currentTemplateState:{configurable:!0}};g.prototype.copy=function(){return new g(this.templateStack.map((function(e){return e.copy()})),this.previousVariable)},v.currentTemplateState.get=function(){return this.templateStack[this.templateStack.length-1]},Object.defineProperties(g.prototype,v);var y=function(e,t,r){this.kind=e,this.mode=t,this.state=r;};y.prototype.copy=function(){return this.mode?new y(this.kind,this.mode,CodeMirror.copyState(this.mode,this.state)):new y(this.kind,null,null)};var b=["Block","FunctionDef","ArrowFunc","ForStatement","ParamListSpec"],w=function(e){function t(t,r){e.call(this,i,{predicates:{canInsertSemi:!1===r.requireSemicolons?p:function(){return !1}}}),this.templateTokenizer=new m(t),this.indentConf={doubleIndentBrackets:">)",dontCloseBrackets:")",tabSize:t.tabSize,indentUnit:t.indentUnit,forceContent:!0};}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.startState=function(){var t=e.prototype.startState.call(this);return t.embeddedParserState=this.templateTokenizer.startState(),t},t.prototype.copyState=function(t){var r=e.prototype.copyState.call(this,t);return r.embeddedParserState=this.templateTokenizer.copyState(t.embeddedParserState),r},t.prototype.token=function(t,r){var n=r.embeddedParserState;if(this.templateTokenizer.shouldInterceptTokenizing(n)){var i=this.templateTokenizer.interceptTokenizing(t,n),a=i.handled,l=i.style;if(a)return l}var s=e.prototype.token.call(this,t,r);return this.templateTokenizer.trackState(s,t,n),function(e,t,r,n){if("def"==e){var i=function(e,t){for(var r=e;r;r=r.parent)if(t.indexOf(r.name)>-1)return r}(n.context,t),a=r.current();if(i&&(i.locals||(i.locals=[]),-1==i.locals.indexOf(a)&&i.locals.push(a),"funcName"!=n.context.name))return "def local"}else o.test(e)&&!/qualified/.test(e)&&function(e,t){for(var r=e;r;r=r.parent)if(r.locals&&r.locals.indexOf(t)>-1)return !0;return !1}(n.context,r.current())&&(e=e.replace(o,"$1variable-2$2"));return e}(s,b,t,r)},t.prototype.indent=function(e,t,r){return t||(t=r="x"),h(e,t,r,this.indentConf)},t}(r.GrammarMode),k={electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``"};for(var x in k)w.prototype[x]=k[x];r.registerHelper("wordChars","google-typescript",/[\w$]/),r.defineMode("google-typescript",(function(e,t){return new w(e,t)}));}((e="undefined"!=typeof globalThis?globalThis:e||self).CodeMirror);}(window),function(e,t){!function(e){function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}});}})),t.default=e,Object.freeze(t)}var r=t(e),n=[[1,"\n","\t"," "],/^[a-zA-Z\-\.0-9_]+/],i=Object.freeze({__proto__:null,nodes:[[1,3,0,0,1],[/^[^]/,0],[/^[^]/,-1],[2,4,-1,{name:"comment",token:"comment"},2,6,-1,{name:"doctype",token:"meta"},2,8,-1,{name:"tag"},3,"atom",/^\&(?:(?![\;\n\t ]).)*\;/,-1,[1,"\n",/^(?:(?![\&\<]).)+/],-1],["<!--",5],[[0,/^(?!\-\-\>)/,/^[^]/],5,"-->",-1],[/^(?:\<\!doctype|\<\!DOCTYPE)(?![a-zA-Z\-\.0-9_])/,7],[[0,/^(?!\>)/,/^[^]/],7,">",-1],[2,14,9,{name:"openTag"}],[3,"tag","/>",-1,[7,"selfClosing"],10,3,"tag",">",11],[3,"tag",">",-1],[1,3,11,/^(?=\<\/)/,12],[[7,"matchingTag"],13,0,-1],[2,21,-1,{name:"closeTag"}],[3,"tag",[0,"<",[6,24]],15],[n[0],15,3,"tag",n[1],16],[n[0],16,0,17],[3,"attribute",n[1],18,0,-1],[n[0],18,"=",19,0,20],[n[0],19,2,25,20,{name:"attributeValue",token:"string"}],[n[0],20,0,17],[3,"tag","</",22],[n[0],22,3,"tag",n[1],23],[3,"tag",">",-1],[n[0],24,"/",-1],['"',26,"'",27,/^(?:(?![\n\t \>]).)*/,-1],[[0,/^(?!\")/,/^[^]/],26,'"',-1],[[0,/^(?!\')/,/^[^]/],27,"'",-1]],start:0,token:2});function o(e){var t=/^\s*([\w_\.-]+)/.exec(e);return t?t[1].toLowerCase():"x"}function a(e){return o(e.startLine.slice(e.startPos+1))}var l="area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" "),s={selfClosing:function(e,t,r){return l.indexOf(a(r))>-1},matchingTag:function(e,t,r){return o(e.slice(t+2))==a(r)}},c=function(e){function t(t,r){e.call(this,i,{predicates:s}),this.conf=t;}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.indent=function(e,t,r){return function(e,t,r,n){for(var i=e.contextAt(r,r.length-t.length),o=/^\s*<\/\s*([\w_\.-]+)/.exec(t);i;){if("tag"==i.name){var l=CodeMirror.countColumn(i.startLine,null,n.tabSize);return o&&o[1].toLowerCase()==a(i)?l:l+n.indentUnit}if("openTag"==i.name)return CodeMirror.countColumn(i.startLine,null,n.tabSize)+2*n.indentUnit;i=i.parent;}return 0}(e,t,r,this.conf)},t}(r.GrammarMode),u=c.prototype;u.electricInput=/^\s*<\/.*?>/,u.blockCommentStart="<!--",u.blockCommentEnd="-->",u.fold="xml",function(e){e.xmlCurrentTag=function(e){var t=e.context;if(!t||"openTag"!=t.name&&"closeTag"!=t.name)return null;var r=/^<\/?\s*([\w\-\.]+)/.exec(t.startLine.slice(t.startPos));return r?{name:r[1],close:"closeTag"==t.name}:null},e.xmlCurrentContext=function(e){for(var t=[],r=e.context;r;r=r.parent)if("tag"==r.name){var n=/^<\s*([\w\-\.]+)/.exec(r.startLine.slice(r.startPos));n&&t.push(n[1]);}return t.reverse()};}(u),r.defineMode("google-html",(function(e,t){return new c(e,t)}));}((e="undefined"!=typeof globalThis?globalThis:e||self).CodeMirror);}(window),function(e){function t(e){for(var t={},r=0;r<e.length;++r)t[e[r].toLowerCase()]=!0;return t}e.defineMode("css",(function(t,r){var n=r.inline;r.propertyKeywords||(r=e.resolveMode("text/css"));var i,o,a=t.indentUnit,l=r.tokenHooks,s=r.documentTypes||{},c=r.mediaTypes||{},u=r.mediaFeatures||{},d=r.mediaValueKeywords||{},f=r.propertyKeywords||{},h=r.nonStandardPropertyKeywords||{},p=r.fontProperties||{},m=r.counterDescriptors||{},g=r.colorKeywords||{},v=r.valueKeywords||{},y=r.allowNested,b=r.lineComment,w=!0===r.supportsAtComponent,k=!1!==t.highlightNonStandardPropertyKeywords;function x(e,t){return i=t,e}function C(e,t){var r=e.next();if(l[r]){var n=l[r](e,t);if(!1!==n)return n}return "@"==r?(e.eatWhile(/[\w\\\-]/),x("def",e.current())):"="==r||("~"==r||"|"==r)&&e.eat("=")?x(null,"compare"):'"'==r||"'"==r?(t.tokenize=S(r),t.tokenize(e,t)):"#"==r?(e.eatWhile(/[\w\\\-]/),x("atom","hash")):"!"==r?(e.match(/^\s*\w*/),x("keyword","important")):/\d/.test(r)||"."==r&&e.eat(/\d/)?(e.eatWhile(/[\w.%]/),x("number","unit")):"-"!==r?/[,+>*\/]/.test(r)?x(null,"select-op"):"."==r&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?x("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(r)?x(null,r):e.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(e.current())&&(t.tokenize=T),x("variable callee","variable")):/[\w\\\-]/.test(r)?(e.eatWhile(/[\w\\\-]/),x("property","word")):x(null,null):/[\d.]/.test(e.peek())?(e.eatWhile(/[\w.%]/),x("number","unit")):e.match(/^-[\w\\\-]*/)?(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?x("variable-2","variable-definition"):x("variable-2","variable")):e.match(/^\w+-/)?x("meta","meta"):void 0}function S(e){return function(t,r){for(var n,i=!1;null!=(n=t.next());){if(n==e&&!i){")"==e&&t.backUp(1);break}i=!i&&"\\"==n;}return (n==e||!i&&")"!=e)&&(r.tokenize=null),x("string","string")}}function T(e,t){return e.next(),e.match(/^\s*[\"\')]/,!1)?t.tokenize=null:t.tokenize=S(")"),x(null,"(")}function L(e,t,r){this.type=e,this.indent=t,this.prev=r;}function A(e,t,r,n){return e.context=new L(r,t.indentation()+(!1===n?0:a),e.context),r}function M(e){return e.context.prev&&(e.context=e.context.prev),e.context.type}function z(e,t,r){return N[r.context.type](e,t,r)}function O(e,t,r,n){for(var i=n||1;i>0;i--)r.context=r.context.prev;return z(e,t,r)}function _(e){var t=e.current().toLowerCase();o=v.hasOwnProperty(t)?"atom":g.hasOwnProperty(t)?"keyword":"variable";}var N={top:function(e,t,r){if("{"==e)return A(r,t,"block");if("}"==e&&r.context.prev)return M(r);if(w&&/@component/i.test(e))return A(r,t,"atComponentBlock");if(/^@(-moz-)?document$/i.test(e))return A(r,t,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(e))return A(r,t,"atBlock");if(/^@(font-face|counter-style)/i.test(e))return r.stateArg=e,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))return "keyframes";if(e&&"@"==e.charAt(0))return A(r,t,"at");if("hash"==e)o="builtin";else if("word"==e)o="tag";else {if("variable-definition"==e)return "maybeprop";if("interpolation"==e)return A(r,t,"interpolation");if(":"==e)return "pseudo";if(y&&"("==e)return A(r,t,"parens")}return r.context.type},block:function(e,t,r){if("word"==e){var n=t.current().toLowerCase();return f.hasOwnProperty(n)?(o="property","maybeprop"):h.hasOwnProperty(n)?(o=k?"string-2":"property","maybeprop"):y?(o=t.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(o+=" error","maybeprop")}return "meta"==e?"block":y||"hash"!=e&&"qualifier"!=e?N.top(e,t,r):(o="error","block")},maybeprop:function(e,t,r){return ":"==e?A(r,t,"prop"):z(e,t,r)},prop:function(e,t,r){if(";"==e)return M(r);if("{"==e&&y)return A(r,t,"propBlock");if("}"==e||"{"==e)return O(e,t,r);if("("==e)return A(r,t,"parens");if("hash"!=e||/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(t.current())){if("word"==e)_(t);else if("interpolation"==e)return A(r,t,"interpolation")}else o+=" error";return "prop"},propBlock:function(e,t,r){return "}"==e?M(r):"word"==e?(o="property","maybeprop"):r.context.type},parens:function(e,t,r){return "{"==e||"}"==e?O(e,t,r):")"==e?M(r):"("==e?A(r,t,"parens"):"interpolation"==e?A(r,t,"interpolation"):("word"==e&&_(t),"parens")},pseudo:function(e,t,r){return "meta"==e?"pseudo":"word"==e?(o="variable-3",r.context.type):z(e,t,r)},documentTypes:function(e,t,r){return "word"==e&&s.hasOwnProperty(t.current())?(o="tag",r.context.type):N.atBlock(e,t,r)},atBlock:function(e,t,r){if("("==e)return A(r,t,"atBlock_parens");if("}"==e||";"==e)return O(e,t,r);if("{"==e)return M(r)&&A(r,t,y?"block":"top");if("interpolation"==e)return A(r,t,"interpolation");if("word"==e){var n=t.current().toLowerCase();o="only"==n||"not"==n||"and"==n||"or"==n?"keyword":c.hasOwnProperty(n)?"attribute":u.hasOwnProperty(n)?"property":d.hasOwnProperty(n)?"keyword":f.hasOwnProperty(n)?"property":h.hasOwnProperty(n)?k?"string-2":"property":v.hasOwnProperty(n)?"atom":g.hasOwnProperty(n)?"keyword":"error";}return r.context.type},atComponentBlock:function(e,t,r){return "}"==e?O(e,t,r):"{"==e?M(r)&&A(r,t,y?"block":"top",!1):("word"==e&&(o="error"),r.context.type)},atBlock_parens:function(e,t,r){return ")"==e?M(r):"{"==e||"}"==e?O(e,t,r,2):N.atBlock(e,t,r)},restricted_atBlock_before:function(e,t,r){return "{"==e?A(r,t,"restricted_atBlock"):"word"==e&&"@counter-style"==r.stateArg?(o="variable","restricted_atBlock_before"):z(e,t,r)},restricted_atBlock:function(e,t,r){return "}"==e?(r.stateArg=null,M(r)):"word"==e?(o="@font-face"==r.stateArg&&!p.hasOwnProperty(t.current().toLowerCase())||"@counter-style"==r.stateArg&&!m.hasOwnProperty(t.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},keyframes:function(e,t,r){return "word"==e?(o="variable","keyframes"):"{"==e?A(r,t,"top"):z(e,t,r)},at:function(e,t,r){return ";"==e?M(r):"{"==e||"}"==e?O(e,t,r):("word"==e?o="tag":"hash"==e&&(o="builtin"),"at")},interpolation:function(e,t,r){return "}"==e?M(r):"{"==e||";"==e?O(e,t,r):("word"==e?o="variable":"variable"!=e&&"("!=e&&")"!=e&&(o="error"),"interpolation")}};return {startState:function(e){return {tokenize:null,state:n?"block":"top",stateArg:null,context:new L(n?"block":"top",e||0,null)}},token:function(e,t){if(!t.tokenize&&e.eatSpace())return null;var r=(t.tokenize||C)(e,t);return r&&"object"==typeof r&&(i=r[1],r=r[0]),o=r,"comment"!=i&&(t.state=N[t.state](i,e,t)),o},indent:function(e,t){var r=e.context,n=t&&t.charAt(0),i=r.indent;return "prop"!=r.type||"}"!=n&&")"!=n||(r=r.prev),r.prev&&("}"!=n||"block"!=r.type&&"top"!=r.type&&"interpolation"!=r.type&&"restricted_atBlock"!=r.type?(")"!=n||"parens"!=r.type&&"atBlock_parens"!=r.type)&&("{"!=n||"at"!=r.type&&"atBlock"!=r.type)||(i=Math.max(0,r.indent-a)):i=(r=r.prev).indent),i},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:b,fold:"brace"}}));var r=["domain","regexp","url","url-prefix"],n=t(r),i=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],o=t(i),a=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],l=t(a),s=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],c=t(s),u=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],d=t(u),f=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],h=t(f),p=t(["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"]),m=t(["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"]),g=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],v=t(g),y=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],b=t(y),w=r.concat(i).concat(a).concat(s).concat(u).concat(f).concat(g).concat(y);function k(e,t){for(var r,n=!1;null!=(r=e.next());){if(n&&"/"==r){t.tokenize=null;break}n="*"==r;}return ["comment","comment"]}e.registerHelper("hintWords","css",w),e.defineMIME("text/css",{documentTypes:n,mediaTypes:o,mediaFeatures:l,mediaValueKeywords:c,propertyKeywords:d,nonStandardPropertyKeywords:h,fontProperties:p,counterDescriptors:m,colorKeywords:v,valueKeywords:b,tokenHooks:{"/":function(e,t){return !!e.eat("*")&&(t.tokenize=k,k(e,t))}},name:"css"}),e.defineMIME("text/x-scss",{mediaTypes:o,mediaFeatures:l,mediaValueKeywords:c,propertyKeywords:d,nonStandardPropertyKeywords:h,colorKeywords:v,valueKeywords:b,fontProperties:p,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=k,k(e,t)):["operator","operator"]},":":function(e){return !!e.match(/^\s*\{/,!1)&&[null,null]},$:function(e){return e.match(/^[\w-]+/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(e){return !!e.eat("{")&&[null,"interpolation"]}},name:"css",helperType:"scss"}),e.defineMIME("text/x-less",{mediaTypes:o,mediaFeatures:l,mediaValueKeywords:c,propertyKeywords:d,nonStandardPropertyKeywords:h,colorKeywords:v,valueKeywords:b,fontProperties:p,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=k,k(e,t)):["operator","operator"]},"@":function(e){return e.eat("{")?[null,"interpolation"]:!e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)&&(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return ["atom","atom"]}},name:"css",helperType:"less"}),e.defineMIME("text/x-gss",{documentTypes:n,mediaTypes:o,mediaFeatures:l,propertyKeywords:d,nonStandardPropertyKeywords:h,fontProperties:p,counterDescriptors:m,colorKeywords:v,valueKeywords:b,supportsAtComponent:!0,tokenHooks:{"/":function(e,t){return !!e.eat("*")&&(t.tokenize=k,k(e,t))}},name:"css",helperType:"gss"});}(CodeMirror),function(e){e.defineMode("javascript",(function(t,r){var n,i,o=t.indentUnit,a=r.statementIndent,l=r.jsonld,s=r.json||l,c=!1!==r.trackScope,u=r.typescript,d=r.wordCharacters||/[\w$\xa1-\uffff]/,f=function(){function e(e){return {type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),i=e("keyword d"),o=e("operator"),a={type:"atom",style:"atom"};return {if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:i,break:i,continue:i,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:o,typeof:o,instanceof:o,true:a,false:a,null:a,undefined:a,NaN:a,Infinity:a,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),h=/[+\-*&%=<>!?|~^@]/,p=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function m(e,t,r){return n=e,i=r,t}function g(e,t){var r,n=e.next();if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,i=!1;if(l&&"@"==e.peek()&&e.match(p))return t.tokenize=g,m("jsonld-keyword","meta");for(;null!=(n=e.next())&&(n!=r||i);)i=!i&&"\\"==n;return i||(t.tokenize=g),m("string","string")}),t.tokenize(e,t);if("."==n&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return m("number","number");if("."==n&&e.match(".."))return m("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return m(n);if("="==n&&e.eat(">"))return m("=>","operator");if("0"==n&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return m("number","number");if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),m("number","number");if("/"==n)return e.eat("*")?(t.tokenize=v,v(e,t)):e.eat("/")?(e.skipToEnd(),m("comment","comment")):Je(e,t,1)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1);}r=!r&&"\\"==t;}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),m("regexp","string-2")):(e.eat("="),m("operator","operator",e.current()));if("`"==n)return t.tokenize=y,y(e,t);if("#"==n&&"!"==e.peek())return e.skipToEnd(),m("meta","meta");if("#"==n&&e.eatWhile(d))return m("variable","property");if("<"==n&&e.match("!--")||"-"==n&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),m("comment","comment");if(h.test(n))return ">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-|&?]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),"?"==n&&e.eat(".")?m("."):m("operator","operator",e.current());if(d.test(n)){e.eatWhile(d);var i=e.current();if("."!=t.lastType){if(f.propertyIsEnumerable(i)){var o=f[i];return m(o.type,o.style,i)}if("async"==i&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return m("async","keyword",i)}return m("variable","variable",i)}}function v(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=g;break}n="*"==r;}return m("comment","comment")}function y(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=g;break}n=!n&&"\\"==r;}return m("quasi","string-2",e.current())}function b(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(u){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index);}for(var i=0,o=!1,a=r-1;a>=0;--a){var l=e.string.charAt(a),s="([{}])".indexOf(l);if(s>=0&&s<3){if(!i){++a;break}if(0==--i){"("==l&&(o=!0);break}}else if(s>=3&&s<6)++i;else if(d.test(l))o=!0;else if(/["'\/`]/.test(l))for(;;--a){if(0==a)return;if(e.string.charAt(a-1)==l&&"\\"!=e.string.charAt(a-2)){a--;break}}else if(o&&!i){++a;break}}o&&!i&&(t.fatArrowAt=a);}}var w={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function k(e,t,r,n,i,o){this.indented=e,this.column=t,this.type=r,this.prev=i,this.info=o,null!=n&&(this.align=n);}function x(e,t){if(!c)return !1;for(var r=e.localVars;r;r=r.next)if(r.name==t)return !0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return !0}function C(e,t,r,n,i){var o=e.cc;for(S.state=e,S.stream=i,S.marked=null,S.cc=o,S.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((o.length?o.pop():s?R:B)(r,n)){for(;o.length&&o[o.length-1].lex;)o.pop()();return S.marked?S.marked:"variable"==r&&x(e,n)?"variable-2":t}}var S={state:null,column:null,marked:null,cc:null};function T(){for(var e=arguments.length-1;e>=0;e--)S.cc.push(arguments[e]);}function L(){return T.apply(null,arguments),!0}function A(e,t){for(var r=t;r;r=r.next)if(r.name==e)return !0;return !1}function M(e){var t=S.state;if(S.marked="def",c){if(t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var n=z(e,t.context);if(null!=n)return void(t.context=n)}else if(!A(e,t.localVars))return void(t.localVars=new N(e,t.localVars));r.globalVars&&!A(e,t.globalVars)&&(t.globalVars=new N(e,t.globalVars));}}function z(e,t){if(t){if(t.block){var r=z(e,t.prev);return r?r==t.prev?t:new _(r,t.vars,!0):null}return A(e,t.vars)?t:new _(t.prev,new N(e,t.vars),!1)}return null}function O(e){return "public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function _(e,t,r){this.prev=e,this.vars=t,this.block=r;}function N(e,t){this.name=e,this.next=t;}var P=new N("this",new N("arguments",null));function E(){S.state.context=new _(S.state.context,S.state.localVars,!1),S.state.localVars=P;}function D(){S.state.context=new _(S.state.context,S.state.localVars,!0),S.state.localVars=null;}function W(){S.state.localVars=S.state.context.vars,S.state.context=S.state.context.prev;}function F(e,t){var r=function(){var r=S.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var i=r.lexical;i&&")"==i.type&&i.align;i=i.prev)n=i.indented;r.lexical=new k(n,S.stream.column(),e,null,r.lexical,t);};return r.lex=!0,r}function I(){var e=S.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev);}function H(e){return function t(r){return r==e?L():";"==e||"}"==r||")"==r||"]"==r?T():L(t)}}function B(e,t){return "var"==e?L(F("vardef",t),Se,H(";"),I):"keyword a"==e?L(F("form"),j,B,I):"keyword b"==e?L(F("form"),B,I):"keyword d"==e?S.stream.match(/^\s*$/,!1)?L():L(F("stat"),V,H(";"),I):"debugger"==e?L(H(";")):"{"==e?L(F("}"),D,se,I,W):";"==e?L():"if"==e?("else"==S.state.lexical.info&&S.state.cc[S.state.cc.length-1]==I&&S.state.cc.pop()(),L(F("form"),j,B,I,Oe)):"function"==e?L(Ee):"for"==e?L(F("form"),D,_e,B,W,I):"class"==e||u&&"interface"==t?(S.marked="keyword",L(F("form","class"==e?e:t),He,I)):"variable"==e?u&&"declare"==t?(S.marked="keyword",L(B)):u&&("module"==t||"enum"==t||"type"==t)&&S.stream.match(/^\s*\w/,!1)?(S.marked="keyword","enum"==t?L(Ye):"type"==t?L(We,H("operator"),he,H(";")):L(F("form"),Te,H("{"),F("}"),se,I,I)):u&&"namespace"==t?(S.marked="keyword",L(F("form"),R,B,I)):u&&"abstract"==t?(S.marked="keyword",L(B)):L(F("stat"),te):"switch"==e?L(F("form"),j,H("{"),F("}","switch"),D,se,I,I,W):"case"==e?L(R,H(":")):"default"==e?L(H(":")):"catch"==e?L(F("form"),E,$,B,I,W):"export"==e?L(F("stat"),Ze,I):"import"==e?L(F("stat"),Ue,I):"async"==e?L(B):"@"==t?L(R,B):T(F("stat"),R,H(";"),I)}function $(e){if("("==e)return L(Fe,H(")"))}function R(e,t){return U(e,t,!1)}function Z(e,t){return U(e,t,!0)}function j(e){return "("!=e?T():L(F(")"),V,H(")"),I)}function U(e,t,r){if(S.state.fatArrowAt==S.stream.start){var n=r?Q:Y;if("("==e)return L(E,F(")"),ae(Fe,")"),I,H("=>"),n,W);if("variable"==e)return T(E,Te,H("=>"),n,W)}var i=r?G:K;return w.hasOwnProperty(e)?L(i):"function"==e?L(Ee,i):"class"==e||u&&"interface"==t?(S.marked="keyword",L(F("form"),Ie,I)):"keyword c"==e||"async"==e?L(r?Z:R):"("==e?L(F(")"),V,H(")"),I,i):"operator"==e||"spread"==e?L(r?Z:R):"["==e?L(F("]"),Xe,I,i):"{"==e?le(ne,"}",null,i):"quasi"==e?T(q,i):"new"==e?L(function(e){return function(t){return "."==t?L(e?ee:J):"variable"==t&&u?L(ke,e?G:K):T(e?Z:R)}}(r)):L()}function V(e){return e.match(/[;\}\)\],]/)?T():T(R)}function K(e,t){return ","==e?L(V):G(e,t,!1)}function G(e,t,r){var n=0==r?K:G,i=0==r?R:Z;return "=>"==e?L(E,r?Q:Y,W):"operator"==e?/\+\+|--/.test(t)||u&&"!"==t?L(n):u&&"<"==t&&S.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?L(F(">"),ae(he,">"),I,n):"?"==t?L(R,H(":"),i):L(i):"quasi"==e?T(q,n):";"!=e?"("==e?le(Z,")","call",n):"."==e?L(re,n):"["==e?L(F("]"),V,H("]"),I,n):u&&"as"==t?(S.marked="keyword",L(he,n)):"regexp"==e?(S.state.lastType=S.marked="operator",S.stream.backUp(S.stream.pos-S.stream.start-1),L(i)):void 0:void 0}function q(e,t){return "quasi"!=e?T():"${"!=t.slice(t.length-2)?L(q):L(V,X)}function X(e){if("}"==e)return S.marked="string-2",S.state.tokenize=y,L(q)}function Y(e){return b(S.stream,S.state),T("{"==e?B:R)}function Q(e){return b(S.stream,S.state),T("{"==e?B:Z)}function J(e,t){if("target"==t)return S.marked="keyword",L(K)}function ee(e,t){if("target"==t)return S.marked="keyword",L(G)}function te(e){return ":"==e?L(I,B):T(K,H(";"),I)}function re(e){if("variable"==e)return S.marked="property",L()}function ne(e,t){return "async"==e?(S.marked="property",L(ne)):"variable"==e||"keyword"==S.style?(S.marked="property","get"==t||"set"==t?L(ie):(u&&S.state.fatArrowAt==S.stream.start&&(r=S.stream.match(/^\s*:\s*/,!1))&&(S.state.fatArrowAt=S.stream.pos+r[0].length),L(oe))):"number"==e||"string"==e?(S.marked=l?"property":S.style+" property",L(oe)):"jsonld-keyword"==e?L(oe):u&&O(t)?(S.marked="keyword",L(ne)):"["==e?L(R,ce,H("]"),oe):"spread"==e?L(Z,oe):"*"==t?(S.marked="keyword",L(ne)):":"==e?T(oe):void 0;var r;}function ie(e){return "variable"!=e?T(oe):(S.marked="property",L(Ee))}function oe(e){return ":"==e?L(Z):"("==e?T(Ee):void 0}function ae(e,t,r){function n(i,o){if(r?r.indexOf(i)>-1:","==i){var a=S.state.lexical;return "call"==a.info&&(a.pos=(a.pos||0)+1),L((function(r,n){return r==t||n==t?T():T(e)}),n)}return i==t||o==t?L():r&&r.indexOf(";")>-1?T(e):L(H(t))}return function(r,i){return r==t||i==t?L():T(e,n)}}function le(e,t,r){for(var n=3;n<arguments.length;n++)S.cc.push(arguments[n]);return L(F(t,r),ae(e,t),I)}function se(e){return "}"==e?L():T(B,se)}function ce(e,t){if(u){if(":"==e)return L(he);if("?"==t)return L(ce)}}function ue(e,t){if(u&&(":"==e||"in"==t))return L(he)}function de(e){if(u&&":"==e)return S.stream.match(/^\s*\w+\s+is\b/,!1)?L(R,fe,he):L(he)}function fe(e,t){if("is"==t)return S.marked="keyword",L()}function he(e,t){return "keyof"==t||"typeof"==t||"infer"==t||"readonly"==t?(S.marked="keyword",L("typeof"==t?Z:he)):"variable"==e||"void"==t?(S.marked="type",L(we)):"|"==t||"&"==t?L(he):"string"==e||"number"==e||"atom"==e?L(we):"["==e?L(F("]"),ae(he,"]",","),I,we):"{"==e?L(F("}"),me,I,we):"("==e?L(ae(be,")"),pe,we):"<"==e?L(ae(he,">"),he):"quasi"==e?T(ve,we):void 0}function pe(e){if("=>"==e)return L(he)}function me(e){return e.match(/[\}\)\]]/)?L():","==e||";"==e?L(me):T(ge,me)}function ge(e,t){return "variable"==e||"keyword"==S.style?(S.marked="property",L(ge)):"?"==t||"number"==e||"string"==e?L(ge):":"==e?L(he):"["==e?L(H("variable"),ue,H("]"),ge):"("==e?T(De,ge):e.match(/[;\}\)\],]/)?void 0:L()}function ve(e,t){return "quasi"!=e?T():"${"!=t.slice(t.length-2)?L(ve):L(he,ye)}function ye(e){if("}"==e)return S.marked="string-2",S.state.tokenize=y,L(ve)}function be(e,t){return "variable"==e&&S.stream.match(/^\s*[?:]/,!1)||"?"==t?L(be):":"==e?L(he):"spread"==e?L(be):T(he)}function we(e,t){return "<"==t?L(F(">"),ae(he,">"),I,we):"|"==t||"."==e||"&"==t?L(he):"["==e?L(he,H("]"),we):"extends"==t||"implements"==t?(S.marked="keyword",L(he)):"?"==t?L(he,H(":"),he):void 0}function ke(e,t){if("<"==t)return L(F(">"),ae(he,">"),I,we)}function xe(){return T(he,Ce)}function Ce(e,t){if("="==t)return L(he)}function Se(e,t){return "enum"==t?(S.marked="keyword",L(Ye)):T(Te,ce,Me,ze)}function Te(e,t){return u&&O(t)?(S.marked="keyword",L(Te)):"variable"==e?(M(t),L()):"spread"==e?L(Te):"["==e?le(Ae,"]"):"{"==e?le(Le,"}"):void 0}function Le(e,t){return "variable"!=e||S.stream.match(/^\s*:/,!1)?("variable"==e&&(S.marked="property"),"spread"==e?L(Te):"}"==e?T():"["==e?L(R,H("]"),H(":"),Le):L(H(":"),Te,Me)):(M(t),L(Me))}function Ae(){return T(Te,Me)}function Me(e,t){if("="==t)return L(Z)}function ze(e){if(","==e)return L(Se)}function Oe(e,t){if("keyword b"==e&&"else"==t)return L(F("form","else"),B,I)}function _e(e,t){return "await"==t?L(_e):"("==e?L(F(")"),Ne,I):void 0}function Ne(e){return "var"==e?L(Se,Pe):"variable"==e?L(Pe):T(Pe)}function Pe(e,t){return ")"==e?L():";"==e?L(Pe):"in"==t||"of"==t?(S.marked="keyword",L(R,Pe)):T(R,Pe)}function Ee(e,t){return "*"==t?(S.marked="keyword",L(Ee)):"variable"==e?(M(t),L(Ee)):"("==e?L(E,F(")"),ae(Fe,")"),I,de,B,W):u&&"<"==t?L(F(">"),ae(xe,">"),I,Ee):void 0}function De(e,t){return "*"==t?(S.marked="keyword",L(De)):"variable"==e?(M(t),L(De)):"("==e?L(E,F(")"),ae(Fe,")"),I,de,W):u&&"<"==t?L(F(">"),ae(xe,">"),I,De):void 0}function We(e,t){return "keyword"==e||"variable"==e?(S.marked="type",L(We)):"<"==t?L(F(">"),ae(xe,">"),I):void 0}function Fe(e,t){return "@"==t&&L(R,Fe),"spread"==e?L(Fe):u&&O(t)?(S.marked="keyword",L(Fe)):u&&"this"==e?L(ce,Me):T(Te,ce,Me)}function Ie(e,t){return "variable"==e?He(e,t):Be(e,t)}function He(e,t){if("variable"==e)return M(t),L(Be)}function Be(e,t){return "<"==t?L(F(">"),ae(xe,">"),I,Be):"extends"==t||"implements"==t||u&&","==e?("implements"==t&&(S.marked="keyword"),L(u?he:R,Be)):"{"==e?L(F("}"),$e,I):void 0}function $e(e,t){return "async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||u&&O(t))&&S.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(S.marked="keyword",L($e)):"variable"==e||"keyword"==S.style?(S.marked="property",L(Re,$e)):"number"==e||"string"==e?L(Re,$e):"["==e?L(R,ce,H("]"),Re,$e):"*"==t?(S.marked="keyword",L($e)):u&&"("==e?T(De,$e):";"==e||","==e?L($e):"}"==e?L():"@"==t?L(R,$e):void 0}function Re(e,t){if("!"==t)return L(Re);if("?"==t)return L(Re);if(":"==e)return L(he,Me);if("="==t)return L(Z);var r=S.state.lexical.prev;return T(r&&"interface"==r.info?De:Ee)}function Ze(e,t){return "*"==t?(S.marked="keyword",L(qe,H(";"))):"default"==t?(S.marked="keyword",L(R,H(";"))):"{"==e?L(ae(je,"}"),qe,H(";")):T(B)}function je(e,t){return "as"==t?(S.marked="keyword",L(H("variable"))):"variable"==e?T(Z,je):void 0}function Ue(e){return "string"==e?L():"("==e?T(R):"."==e?T(K):T(Ve,Ke,qe)}function Ve(e,t){return "{"==e?le(Ve,"}"):("variable"==e&&M(t),"*"==t&&(S.marked="keyword"),L(Ge))}function Ke(e){if(","==e)return L(Ve,Ke)}function Ge(e,t){if("as"==t)return S.marked="keyword",L(Ve)}function qe(e,t){if("from"==t)return S.marked="keyword",L(R)}function Xe(e){return "]"==e?L():T(ae(Z,"]"))}function Ye(){return T(F("form"),Te,H("{"),F("}"),ae(Qe,"}"),I,I)}function Qe(){return T(Te,Me)}function Je(e,t,r){return t.tokenize==g&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}return E.lex=D.lex=!0,W.lex=!0,I.lex=!0,{startState:function(e){var t={tokenize:g,lastType:"sof",cc:[],lexical:new k((e||0)-o,0,"block",!1),localVars:r.localVars,context:r.localVars&&new _(null,null,!1),indented:e||0};return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),b(e,t)),t.tokenize!=v&&e.eatSpace())return null;var r=t.tokenize(e,t);return "comment"==n?r:(t.lastType="operator"!=n||"++"!=i&&"--"!=i?n:"incdec",C(t,r,n,i,e))},indent:function(t,n){if(t.tokenize==v||t.tokenize==y)return e.Pass;if(t.tokenize!=g)return 0;var i,l=n&&n.charAt(0),s=t.lexical;if(!/^\s*else\b/.test(n))for(var c=t.cc.length-1;c>=0;--c){var u=t.cc[c];if(u==I)s=s.prev;else if(u!=Oe&&u!=W)break}for(;("stat"==s.type||"form"==s.type)&&("}"==l||(i=t.cc[t.cc.length-1])&&(i==K||i==G)&&!/^[,\.=+\-*:?[\(]/.test(n));)s=s.prev;a&&")"==s.type&&"stat"==s.prev.type&&(s=s.prev);var d=s.type,f=l==d;return "vardef"==d?s.indented+("operator"==t.lastType||","==t.lastType?s.info.length+1:0):"form"==d&&"{"==l?s.indented:"form"==d?s.indented+o:"stat"==d?s.indented+(function(e,t){return "operator"==e.lastType||","==e.lastType||h.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,n)?a||o:0):"switch"!=s.info||f||0==r.doubleIndentSwitch?s.align?s.column+(f?0:1):s.indented+(f?0:o):s.indented+(/^(?:case|default)\b/.test(n)?o:2*o)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:s?null:"/*",blockCommentEnd:s?null:"*/",blockCommentContinue:s?null:" * ",lineComment:s?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:s?"json":"javascript",jsonldMode:l,jsonMode:s,expressionAllowed:Je,skipExpression:function(t){C(t,"atom","atom","true",new e.StringStream("",2,null));}}})),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/manifest+json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0});}(CodeMirror),function(e){var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},r={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};e.defineMode("xml",(function(n,i){var o,a,l=n.indentUnit,s={},c=i.htmlMode?t:r;for(var u in c)s[u]=c[u];for(var u in i)s[u]=i[u];function d(e,t){function r(r){return t.tokenize=r,r(e,t)}var n=e.next();return "<"==n?e.eat("!")?e.eat("[")?e.match("CDATA[")?r(h("atom","]]>")):null:e.match("--")?r(h("comment","-->")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),r(p(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=h("meta","?>"),"meta"):(o=e.eat("/")?"closeTag":"openTag",t.tokenize=f,"tag bracket"):"&"==n?(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"))?"atom":"error":(e.eatWhile(/[^&<]/),null)}function f(e,t){var r,n,i=e.next();if(">"==i||"/"==i&&e.eat(">"))return t.tokenize=d,o=">"==i?"endTag":"selfcloseTag","tag bracket";if("="==i)return o="equals",null;if("<"==i){t.tokenize=d,t.state=b,t.tagName=t.tagStart=null;var a=t.tokenize(e,t);return a?a+" tag error":"tag error"}return /[\'\"]/.test(i)?(t.tokenize=(r=i,n=function(e,t){for(;!e.eol();)if(e.next()==r){t.tokenize=f;break}return "string"},n.isInAttribute=!0,n),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function h(e,t){return function(r,n){for(;!r.eol();){if(r.match(t)){n.tokenize=d;break}r.next();}return e}}function p(e){return function(t,r){for(var n;null!=(n=t.next());){if("<"==n)return r.tokenize=p(e+1),r.tokenize(t,r);if(">"==n){if(1==e){r.tokenize=d;break}return r.tokenize=p(e-1),r.tokenize(t,r)}}return "meta"}}function m(e){return e&&e.toLowerCase()}function g(e,t,r){this.prev=e.context,this.tagName=t||"",this.indent=e.indented,this.startOfLine=r,(s.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0);}function v(e){e.context&&(e.context=e.context.prev);}function y(e,t){for(var r;;){if(!e.context)return;if(r=e.context.tagName,!s.contextGrabbers.hasOwnProperty(m(r))||!s.contextGrabbers[m(r)].hasOwnProperty(m(t)))return;v(e);}}function b(e,t,r){return "openTag"==e?(r.tagStart=t.column(),w):"closeTag"==e?k:b}function w(e,t,r){return "word"==e?(r.tagName=t.current(),a="tag",S):s.allowMissingTagName&&"endTag"==e?(a="tag bracket",S(e,t,r)):(a="error",w)}function k(e,t,r){if("word"==e){var n=t.current();return r.context&&r.context.tagName!=n&&s.implicitlyClosed.hasOwnProperty(m(r.context.tagName))&&v(r),r.context&&r.context.tagName==n||!1===s.matchClosing?(a="tag",x):(a="tag error",C)}return s.allowMissingTagName&&"endTag"==e?(a="tag bracket",x(e,t,r)):(a="error",C)}function x(e,t,r){return "endTag"!=e?(a="error",x):(v(r),b)}function C(e,t,r){return a="error",x(e,0,r)}function S(e,t,r){if("word"==e)return a="attribute",T;if("endTag"==e||"selfcloseTag"==e){var n=r.tagName,i=r.tagStart;return r.tagName=r.tagStart=null,"selfcloseTag"==e||s.autoSelfClosers.hasOwnProperty(m(n))?y(r,n):(y(r,n),r.context=new g(r,n,i==r.indented)),b}return a="error",S}function T(e,t,r){return "equals"==e?L:(s.allowMissing||(a="error"),S(e,0,r))}function L(e,t,r){return "string"==e?A:"word"==e&&s.allowUnquoted?(a="string",S):(a="error",S(e,0,r))}function A(e,t,r){return "string"==e?A:S(e,0,r)}return d.isInText=!0,{startState:function(e){var t={tokenize:d,state:b,indented:e||0,tagName:null,tagStart:null,context:null};return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;o=null;var r=t.tokenize(e,t);return (r||o)&&"comment"!=r&&(a=null,t.state=t.state(o||r,e,t),a&&(r="error"==a?r+" error":a)),r},indent:function(t,r,n){var i=t.context;if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+l;if(i&&i.noIndent)return e.Pass;if(t.tokenize!=f&&t.tokenize!=d)return n?n.match(/^(\s*)/)[0].length:0;if(t.tagName)return !1!==s.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+l*(s.multilineTagIndentFactor||1);if(s.alignCDATA&&/<!\[CDATA\[/.test(r))return 0;var o=r&&/^<(\/)?([\w_:\.-]*)/.exec(r);if(o&&o[1])for(;i;){if(i.tagName==o[2]){i=i.prev;break}if(!s.implicitlyClosed.hasOwnProperty(m(i.tagName)))break;i=i.prev;}else if(o)for(;i;){var a=s.contextGrabbers[m(i.tagName)];if(!a||!a.hasOwnProperty(m(o[2])))break;i=i.prev;}for(;i&&i.prev&&!i.startOfLine;)i=i.prev;return i?i.indent+l:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:s.htmlMode?"html":"xml",helperType:s.htmlMode?"html":"xml",skipAttribute:function(e){e.state==L&&(e.state=S);},xmlCurrentTag:function(e){return e.tagName?{name:e.tagName,close:"closeTag"==e.type}:null},xmlCurrentContext:function(e){for(var t=[],r=e.context;r;r=r.prev)t.push(r.tagName);return t.reverse()}}})),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0});}(CodeMirror),function(e){function t(e,t,r,n){this.state=e,this.mode=t,this.depth=r,this.prev=n;}function r(n){return new t(e.copyState(n.mode,n.state),n.mode,n.depth,n.prev&&r(n.prev))}e.defineMode("jsx",(function(n,i){var o=e.getMode(n,{name:"xml",allowMissing:!0,multilineTagIndentPastTag:!1,allowMissingTagName:!0}),a=e.getMode(n,i&&i.base||"javascript");function l(e){var t=e.tagName;e.tagName=null;var r=o.indent(e,"","");return e.tagName=t,r}function s(r,i){return i.context.mode==o?function(r,i,c){if(2==c.depth)return r.match(/^.*?\*\//)?c.depth=1:r.skipToEnd(),"comment";if("{"==r.peek()){o.skipAttribute(c.state);var u=l(c.state),d=c.state.context;if(d&&r.match(/^[^>]*>\s*$/,!1)){for(;d.prev&&!d.startOfLine;)d=d.prev;d.startOfLine?u-=n.indentUnit:c.prev.state.lexical&&(u=c.prev.state.lexical.indented);}else 1==c.depth&&(u+=n.indentUnit);return i.context=new t(e.startState(a,u),a,0,i.context),null}if(1==c.depth){if("<"==r.peek())return o.skipAttribute(c.state),i.context=new t(e.startState(o,l(c.state)),o,0,i.context),null;if(r.match("//"))return r.skipToEnd(),"comment";if(r.match("/*"))return c.depth=2,s(r,i)}var f,h=o.token(r,c.state),p=r.current();return /\btag\b/.test(h)?/>$/.test(p)?c.state.context?c.depth=0:i.context=i.context.prev:/^</.test(p)&&(c.depth=1):!h&&(f=p.indexOf("{"))>-1&&r.backUp(p.length-f),h}(r,i,i.context):function(r,n,i){if("<"==r.peek()&&a.expressionAllowed(r,i.state))return n.context=new t(e.startState(o,a.indent(i.state,"","")),o,0,n.context),a.skipExpression(i.state),null;var l=a.token(r,i.state);if(!l&&null!=i.depth){var s=r.current();"{"==s?i.depth++:"}"==s&&0==--i.depth&&(n.context=n.context.prev);}return l}(r,i,i.context)}return {startState:function(){return {context:new t(e.startState(a),a)}},copyState:function(e){return {context:r(e.context)}},token:s,indent:function(e,t,r){return e.context.mode.indent(e.context.state,t,r)},innerMode:function(e){return e.context}}}),"xml","javascript"),e.defineMIME("text/jsx","jsx"),e.defineMIME("text/typescript-jsx",{name:"jsx",base:{name:"javascript",typescript:!0}});}(CodeMirror);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * CodeMirror function.
 *
 * This function is defined as window.CodeMirror, but @types/codemirror doesn't
 * declare that.
 */
const CodeMirror$1 = window.CodeMirror;

const styles$4 = i$6 `/**
 * This file is derived from \`code-mirror/lib/codemirror.css\`, modified in the
 * following ways:
 *
 * - CSS custom properties added.
 * - Rules for unused features and addons removed.
 * - Unnecessary vendor prefixes removed.
 * - \`.cm-s-default\` class selectors removed.
 * - Empty rules removed.
 */

/* BASICS */

.CodeMirror {
  /* Set height, width, borders, and global font properties here */
  font-family: var(--playground-code-font-family, monospace);
  font-size: var(--playground-code-font-size, 14px);
  padding: var(--playground-code-padding, 0);
  height: 350px;
  color: var(--playground-code-default-color, #000);
  background: var(--playground-code-background, #fff);
  direction: ltr;
  /* CodeMirror uses z-indexes up to 6 to e.g. place scrollbars above the code
     area. However, this can create undesirable stacking effects with the rest
     of the page. Force a new stacking context. */
  isolation: isolate;
  line-height: var(--playground-code-line-height, 1.4em);
}

/* PADDING */

.CodeMirror-lines {
  padding: 4px 0; /* Vertical padding around content */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: var(
    --playground-code-line-padding,
    0 4px
  ); /* Horizontal padding of content */
}

.CodeMirror-scrollbar-filler,
.CodeMirror-gutter-filler {
  background: var(
    --playground-code-background,
    #fff
  ); /* The little square between H and V scrollbars */
}

/* GUTTER */

.CodeMirror-gutters {
  border-right: var(--playground-code-gutter-border-right, none);
  background: var(
    --playground-code-gutter-background,
    var(--playground-code-background, #fff)
  );
  box-shadow: var(--playground-code-gutter-box-shadow, none);
  white-space: nowrap;
}
.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: var(--playground-code-linenumber-color, #767676);
  white-space: nowrap;
  margin-right: 1em;
}
.CodeMirror-code > div > .CodeMirror-line {
  /* Some extra room between the line number gutter and the line */
  padding-left: 0.7em;
}

/* CURSOR */

.CodeMirror-cursor {
  border-left: 2px solid
    var(
      --playground-code-cursor-color,
      var(--playground-code-default-color, #000)
    );
  border-right: none;
  width: 0;
}

@keyframes blink {
  0% {
  }
  50% {
    background: transparent;
  }
  100% {
  }
}

/* DEFAULT THEME */

.cm-header,
.cm-strong {
  font-weight: bold;
}
.cm-em {
  font-style: italic;
}
.cm-link {
  text-decoration: underline;
}
.cm-strikethrough {
  text-decoration: line-through;
}

.cm-keyword {
  color: var(--playground-code-keyword-color, #708);
}
.cm-atom {
  color: var(--playground-code-atom-color, #219);
}
.cm-number {
  color: var(--playground-code-number-color, #164);
}
.cm-def {
  color: var(--playground-code-def-color, #00f);
}
.cm-variable {
  color: var(--playground-code-variable-color, #000);
}
.cm-property {
  color: var(--playground-code-property-color, #000);
}
.cm-operator {
  color: var(--playground-code-operator-color, #000);
}
.cm-variable-2 {
  color: var(--playground-code-variable-2-color, #05a);
}
.cm-variable-3 {
  color: var(--playground-code-variable-3-color, #085);
}
.cm-type {
  color: var(--playground-code-type-color, #085);
}
.cm-comment {
  color: var(--playground-code-comment-color, #a50);
}
.cm-string {
  color: var(--playground-code-string-color, #a11);
}
.cm-string-2 {
  color: var(--playground-code-string-2-color, #f50);
}
.cm-meta {
  color: var(--playground-code-meta-color, #555);
}
.cm-qualifier {
  color: var(--playground-code-qualifier-color, #555);
}
.cm-builtin {
  color: var(--playground-code-builtin-color, #30a);
}
.cm-tag {
  color: var(--playground-code-tag-color, #170);
}
.cm-attribute {
  color: var(--playground-code-attribute-color, #00c);
}
.cm-callee {
  color: var(--playground-code-callee-color, #000);
}

.CodeMirror-composing {
  border-bottom: 2px solid;
}

/* STOP */

/* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */

.CodeMirror {
  position: relative;
  overflow: hidden;
}

.CodeMirror-scroll {
  overflow: scroll !important; /* Things will break if this is overridden */
  /* 50px is the magic margin used to hide the element's real scrollbars */
  /* See overflow: hidden in .CodeMirror */
  margin-bottom: -50px;
  margin-right: -50px;
  padding-bottom: 50px;
  height: 100%;
  outline: none; /* Prevent dragging from highlighting the element */
  position: relative;
}
.CodeMirror-sizer {
  position: relative;
  border-right: 50px solid transparent;
}

/* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
.CodeMirror-vscrollbar,
.CodeMirror-hscrollbar,
.CodeMirror-scrollbar-filler,
.CodeMirror-gutter-filler {
  position: absolute;
  z-index: 6;
  display: none;
  outline: none;
}
.CodeMirror-vscrollbar {
  right: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.CodeMirror-hscrollbar {
  bottom: 0;
  left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
}
.CodeMirror-scrollbar-filler {
  right: 0;
  bottom: 0;
}
.CodeMirror-gutter-filler {
  left: 0;
  bottom: 0;
}

.CodeMirror-gutters {
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100%;
  z-index: 3;
}
.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -50px;
}
.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: none !important;
  border: none !important;
}
.CodeMirror-gutter-background {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 4;
}
.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4;
}
.CodeMirror-gutter-wrapper ::selection {
  background: transparent;
}

.CodeMirror-lines {
  cursor: text;
  min-height: 1px; /* prevents collapsing before first draw */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  /* Reset some styles that the rest of the page might have set */
  border-radius: 0;
  border-width: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  white-space: pre;
  word-wrap: normal;
  line-height: inherit;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  font-variant-ligatures: contextual;
}
.CodeMirror-wrap pre.CodeMirror-line,
.CodeMirror-wrap pre.CodeMirror-line-like {
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
}

.CodeMirror-linebackground {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
}

.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  padding: 0.1px; /* Force widget margins to stay inside of the container */
}

.CodeMirror-rtl pre {
  direction: rtl;
}

.CodeMirror-code {
  outline: none;
}

/* Force content-box sizing for the elements where we expect it */
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber {
  box-sizing: content-box;
}

.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.CodeMirror-cursor {
  position: absolute;
  pointer-events: none;
}
.CodeMirror-measure pre {
  position: static;
}

div.CodeMirror-cursors {
  visibility: hidden;
  position: relative;
  z-index: 3;
}
div.CodeMirror-dragcursors {
  visibility: visible;
}

.CodeMirror-focused div.CodeMirror-cursors {
  visibility: visible;
}

.CodeMirror-selected {
  background: var(--playground-code-selection-background, #d7d4f0);
}
.CodeMirror-focused .CodeMirror-selected {
  background: var(--playground-code-selection-background, #d7d4f0);
}
.CodeMirror-crosshair {
  cursor: crosshair;
}
.CodeMirror-line::selection,
.CodeMirror-line > span::selection,
.CodeMirror-line > span > span::selection {
  background: var(--playground-code-selection-background, #d7d4f0);
}

/* Completions */

.CodeMirror-hints {
  position: absolute;
  z-index: 10;
  overflow: hidden;
  list-style: none;

  margin: 0;
  padding: 0;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
  border: 1px solid var(--playground-code-selection-background, silver);

  background: var(--playground-code-background, white);
  font-size: var(--playground-code-font-size, 14px);
  font-family: var(--playground-code-font-family, monospace);

  max-height: 20em;
  width: 600px;
  max-width: min(600px, 80vw);
  overflow-y: auto;
}

.CodeMirror-hint {
  margin: 0;
  padding: 0 6px;
  white-space: pre;
  color: var(--playground-code-cursor-color, black);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

@media (pointer: coarse) {
  .CodeMirror-hint {
    padding: 1em 6px;
  }
}

.CodeMirror-hint-active {
  background: var(--playground-code-background, rgba(0, 0, 0, 0.2));
  filter: brightness(1.2);
}

.CodeMirror-hint mark {
  background: inherit;
  color: var(--playground-code-qualifier-color, #555);
}

.CodeMirror-hint .hint-object-name {
  padding-right: 2em;
  white-space: nowrap;
}

.CodeMirror-hint .hint-object-details {
  flex-basis: 80%;
  font-size: calc(var(--playground-code-font-size, 14px) * 0.9);
  color: var(--playground-code-string-2-color, white);
  opacity: 0.8;
  text-align: right;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Used to force a border model for a node */
.cm-force-border {
  padding-right: 0.1px;
}

@media print {
  /* Hide the cursor when printing */
  .CodeMirror div.CodeMirror-cursors {
    visibility: hidden;
  }
}

/* See issue #2901 */
.cm-tab-wrap-hack:after {
  content: '';
}

/* Help users use markselection to safely style text background */
span.CodeMirror-selectedtext {
  background: none;
}
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * An absolutely positioned scrim with a floating message.
 */
let PlaygroundInternalOverlay = class PlaygroundInternalOverlay extends s$1 {
    render() {
        return x `<div id="message"><slot></slot></div>`;
    }
};
PlaygroundInternalOverlay.styles = i$6 `
    :host {
      position: absolute;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      z-index: 9;
      background: rgba(0, 0, 0, 0.32);
      overflow-y: auto;
    }

    #message {
      background: #fff;
      color: #000;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.3) 0 2px 10px;
    }
  `;
PlaygroundInternalOverlay = __decorate([
    e$6('playground-internal-overlay')
], PlaygroundInternalOverlay);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * A basic text editor with syntax highlighting for HTML, CSS, and JavaScript.
 */
let PlaygroundCodeEditor = class PlaygroundCodeEditor extends s$1 {
    constructor() {
        super(...arguments);
        /**
         * WeakMap associating a `documentKey` with CodeMirror document instance.
         * A WeakMap is used so that this component does not become the source of
         * memory leaks.
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        this._docCache = new WeakMap();
        /**
         * If true, display a left-hand-side gutter with line numbers. Default false
         * (hidden).
         */
        this.lineNumbers = false;
        /**
         * If true, wrap for long lines. Default false
         */
        this.lineWrapping = false;
        /**
         * If true, this editor is not editable.
         */
        this.readonly = false;
        /**
         * If true, will disable code completions in the code-editor.
         */
        this.noCompletions = false;
        this._completionsOpen = false;
        this._currentCompletionSelectionLabel = '';
        this._currentCompletionRequestId = 0;
        /**
         * How to handle `playground-hide` and `playground-fold` comments.
         *
         * See https://github.com/google/playground-elements#hiding--folding for
         * more details.
         *
         * Options:
         * - on: Hide and fold regions, and hide the special comments.
         * - off: Don't hide or fold regions, but still hide the special comments.
         * - off-visible: Don't hide or fold regions, and show the special comments as
         *   literal text.
         */
        this.pragmas = 'on';
        this._showKeyboardHelp = false;
        this._resizing = false;
        this._valueChangingFromOutside = false;
        this._diagnosticMarkers = [];
        this._diagnosticsMouseoverListenerActive = false;
        // Using property assignment syntax so that it's already bound to `this` for
        // add/removeEventListener.
        this._onMouseOverWithDiagnostics = (event) => {
            var _a, _b, _c;
            if (!((_a = this.diagnostics) === null || _a === void 0 ? void 0 : _a.length)) {
                return;
            }
            // Find the diagnostic. Note we could use cm.findMarksAt() with the pointer
            // coordinates (like the built-in linter plugin does), but since we've
            // encoded the diagnostic index into a class, we can just extract it
            // directly from the target.
            const idxMatch = (_b = event.target.className) === null || _b === void 0 ? void 0 : _b.match(/diagnostic-(\d+)/);
            if (idxMatch === null) {
                this._tooltipDiagnostic = undefined;
                return;
            }
            const idx = Number(idxMatch[1]);
            const diagnostic = this.diagnostics[idx];
            if (diagnostic === ((_c = this._tooltipDiagnostic) === null || _c === void 0 ? void 0 : _c.diagnostic)) {
                // Already showing the tooltip for this diagnostic.
                return;
            }
            // Position the tooltip relative to the squiggly code span. To maximize
            // available space, place it above/below and left/right depending on which
            // quadrant the span is in.
            let position = '';
            const hostRect = this.getBoundingClientRect();
            const spanRect = event.target.getBoundingClientRect();
            const hostCenterY = hostRect.y + hostRect.height / 2;
            if (spanRect.y < hostCenterY) {
                // Note the rects are viewport relative, so the extra subtractions here
                // are to convert to host-relative.
                position += `top:${spanRect.y + spanRect.height - hostRect.y}px;`;
            }
            else {
                position += `bottom:${hostRect.bottom - spanRect.y}px;`;
            }
            const hostCenterX = hostRect.x + hostRect.width / 2;
            if (spanRect.left < hostCenterX) {
                position += `left:${Math.max(0, spanRect.x - hostRect.x)}px`;
            }
            else {
                position += `right:${Math.max(0, hostRect.right - spanRect.right)}px`;
            }
            this._tooltipDiagnostic = { diagnostic, position };
        };
    }
    get cursorPosition() {
        var _a;
        const cursor = (_a = this._codemirror) === null || _a === void 0 ? void 0 : _a.getCursor('start');
        if (!cursor)
            return { ch: 0, line: 0 };
        return {
            ch: cursor.ch,
            line: cursor.line,
        };
    }
    get cursorIndex() {
        const cm = this._codemirror;
        if (!cm)
            return 0;
        const cursorPosition = cm.getCursor('start');
        return cm.indexFromPos(cursorPosition);
    }
    get tokenUnderCursor() {
        const cm = this._codemirror;
        if (!cm)
            return { start: 0, end: 0, string: '' };
        const cursorPosition = cm.getCursor('start');
        const token = cm.getTokenAt(cursorPosition);
        return {
            start: token.start,
            end: token.end,
            string: token.string,
        };
    }
    get value() {
        return this._value;
    }
    set value(v) {
        const oldValue = this._value;
        this._value = v;
        this.requestUpdate('value', oldValue);
    }
    update(changedProperties) {
        var _a, _b, _c, _d, _e, _f;
        const cm = this._codemirror;
        if (cm === undefined) {
            this._createView();
        }
        else {
            const changedTyped = changedProperties;
            for (const prop of changedTyped.keys()) {
                switch (prop) {
                    case 'documentKey': {
                        const docKey = (_a = this.documentKey) !== null && _a !== void 0 ? _a : {};
                        let docInstance = this._docCache.get(docKey);
                        let createdNewDoc = false;
                        if (!docInstance) {
                            docInstance = new CodeMirror$1.Doc((_b = this.value) !== null && _b !== void 0 ? _b : '', this._getLanguageMode());
                            this._docCache.set(docKey, docInstance);
                            createdNewDoc = true;
                        }
                        else if (docInstance.getValue() !== this.value) {
                            // The retrieved document instance has contents which don't
                            // match the currently set `value`.
                            docInstance.setValue((_c = this.value) !== null && _c !== void 0 ? _c : '');
                        }
                        this._valueChangingFromOutside = true;
                        cm.swapDoc(docInstance);
                        if (createdNewDoc) {
                            // Swapping to a document instance doesn't trigger a change event
                            // which is required for document folding. Manually fold once on
                            // document instantiation.
                            /* eslint-disable @typescript-eslint/no-floating-promises */
                            this._applyHideAndFoldRegions();
                            /* eslint-enable @typescript-eslint/no-floating-promises */
                        }
                        this._valueChangingFromOutside = false;
                        break;
                    }
                    case 'value':
                        if (changedTyped.has('documentKey')) {
                            // If the `documentKey` has changed then all `value` change logic
                            // is handled in the documentKey case.
                            break;
                        }
                        this._valueChangingFromOutside = true;
                        cm.setValue((_d = this.value) !== null && _d !== void 0 ? _d : '');
                        this._valueChangingFromOutside = false;
                        break;
                    case 'lineNumbers':
                        cm.setOption('lineNumbers', this.lineNumbers);
                        break;
                    case 'lineWrapping':
                        if (this.lineWrapping) {
                            cm.on('renderLine', this._onRenderLine);
                        }
                        else {
                            cm.off('renderLine', this._onRenderLine);
                        }
                        cm.setOption('lineWrapping', this.lineWrapping);
                        break;
                    case 'type':
                        cm.setOption('mode', this._getLanguageMode());
                        break;
                    case 'readonly':
                        cm.setOption('readOnly', this.readonly);
                        break;
                    case 'pragmas':
                        /* eslint-disable @typescript-eslint/no-floating-promises */
                        this._applyHideAndFoldRegions();
                        /* eslint-enable @typescript-eslint/no-floating-promises */
                        break;
                    case 'diagnostics':
                        this._showDiagnostics();
                        break;
                    case 'cursorIndex':
                        cm.setCursor((_e = this.cursorIndex) !== null && _e !== void 0 ? _e : 0);
                        break;
                    case 'cursorPosition':
                        cm.setCursor((_f = this.cursorPosition) !== null && _f !== void 0 ? _f : { ch: 0, line: 0 });
                        break;
                    case '_completions':
                        this._showCompletions();
                        break;
                }
            }
        }
        super.update(changedProperties);
    }
    render() {
        var _a, _b;
        if (this.readonly) {
            return this._cmDom;
        }
        return x `
      <div
        id="focusContainer"
        tabindex="0"
        @mousedown=${this._onMousedown}
        @focus=${this._onFocus}
        @blur=${this._onBlur}
        @keydown=${this._onKeyDown}
      >
        ${this._showKeyboardHelp
            ? x `<playground-internal-overlay>
              <p id="keyboardHelp" part="dialog">
                Press <strong>Enter</strong> to start editing<br />
                Press <strong>Escape</strong> to exit editor
              </p>
            </playground-internal-overlay>`
            : A}
        ${this._cmDom}
        <div
          id="tooltip"
          ?hidden=${!this._tooltipDiagnostic}
          style=${l$1((_a = this._tooltipDiagnostic) === null || _a === void 0 ? void 0 : _a.position)}
        >
          <div part="diagnostic-tooltip">
            ${(_b = this._tooltipDiagnostic) === null || _b === void 0 ? void 0 : _b.diagnostic.message}
          </div>
        </div>
      </div>
    `;
    }
    connectedCallback() {
        // CodeMirror uses JavaScript to control whether scrollbars are visible. It
        // does so automatically on interaction, but won't notice container size
        // changes. If the browser doesn't have ResizeObserver, scrollbars will
        // sometimes be missing, but typing in the editor will fix it.
        if (typeof ResizeObserver === 'function') {
            this._resizeObserver = new ResizeObserver(() => {
                var _a;
                if (this._resizing) {
                    // Don't get in a resize loop.
                    return;
                }
                this._resizing = true;
                (_a = this._codemirror) === null || _a === void 0 ? void 0 : _a.refresh();
                this._resizing = false;
            });
            this._resizeObserver.observe(this);
        }
        super.connectedCallback();
    }
    disconnectedCallback() {
        var _a;
        (_a = this._resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this._resizeObserver = undefined;
        super.disconnectedCallback();
    }
    _createView() {
        var _a;
        const cm = CodeMirror$1((dom) => {
            this._cmDom = dom;
            this._resizing = true;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    var _a;
                    // It seems that some dynamic layouts confuse CodeMirror, causing it
                    // to measure itself too soon, which then causes the position of
                    // interactions to be interpreted incorrectly. Here we hackily force
                    // a refresh after initial layout is usually done.
                    (_a = this._codemirror) === null || _a === void 0 ? void 0 : _a.refresh();
                    this._resizing = false;
                });
            });
        }, {
            value: (_a = this.value) !== null && _a !== void 0 ? _a : '',
            lineNumbers: this.lineNumbers,
            lineWrapping: this.lineWrapping,
            mode: this._getLanguageMode(),
            readOnly: this.readonly,
            inputStyle: 'contenteditable',
            // Don't allow naturally tabbing into the editor, because it's a
            // tab-trap. Instead, the container is focusable, and Enter/Escape are
            // used to explicitly enter the editable area.
            tabindex: -1,
            // Tab key inserts spaces instead of tab character
            extraKeys: {
                Tab: () => {
                    var _a;
                    cm.replaceSelection(Array(((_a = cm.getOption('indentUnit')) !== null && _a !== void 0 ? _a : 2) + 1).join(' '));
                },
                // Ctrl + Space requests code completions.
                ['Ctrl-Space']: () => {
                    const tokenUnderCursor = this.tokenUnderCursor.string.trim();
                    this._requestCompletions({
                        isRefinement: false,
                        tokenUnderCursor,
                    });
                },
                ['Ctrl-/']: () => cm.toggleComment(),
                ['Cmd-/']: () => cm.toggleComment(),
            },
        });
        cm.on('change', (_editorInstance, changeObject) => {
            this._value = cm.getValue();
            // External changes are usually things like the editor switching which
            // file it is displaying.
            if (this._valueChangingFromOutside) {
                // Users can't change hide/fold regions.
                /* eslint-disable @typescript-eslint/no-floating-promises */
                this._applyHideAndFoldRegions();
                /* eslint-enable @typescript-eslint/no-floating-promises */
                this._showDiagnostics();
            }
            else {
                this.dispatchEvent(new Event('change'));
                this._requestCompletionsIfNeeded(changeObject);
            }
        });
        if (this.lineWrapping) {
            cm.on('renderLine', this._onRenderLine);
        }
        this._codemirror = cm;
    }
    _onRenderLine(editorInstance, line, elt) {
        // When wrapping a line the subsequent wrapped code
        // needs to keep the same formatting and have the
        // same amount of indentation.
        //
        // Each line has an initial `padding-left`, this needs
        // to be preserved with the indent:
        // - playground-styles.css#L39 - standard padding.
        // - playground-styles.css#L72 - extra with line numbers.
        const basePadding = 4;
        const gutter = editorInstance.getOption('lineNumbers')
            ? '0.7em'
            : `${basePadding}px`;
        const tabSize = editorInstance.getOption('tabSize') || basePadding;
        const off = CodeMirror$1.countColumn(line.text, null, tabSize);
        if (off > 0) {
            elt.style.textIndent = `-${off}ch`;
            elt.style.paddingLeft = `calc(${gutter} + ${off}ch)`;
        }
    }
    _requestCompletionsIfNeeded(changeObject) {
        if (this.noCompletions ||
            !this._currentFiletypeSupportsCompletion() ||
            !this._codemirror)
            return;
        const previousToken = this._codemirror.getTokenAt(changeObject.from);
        const tokenUnderCursor = this.tokenUnderCursor.string.trim();
        const tokenUnderCursorAsString = tokenUnderCursor.trim();
        // To help reduce round trips to a language service or a completion provider, we
        // are providing a flag if the completion is building on top of the earlier recommendations.
        // If the flag is true, the completion system can just filter the already stored
        // collection of completions again with the more precise input.
        // On deletion events, we want to query the LS again, since we might be in a new context after
        // removing characters from our code.
        const isInputEvent = changeObject.origin === '+input';
        const isRefinement = (tokenUnderCursor.length > 1 || previousToken.string === '.') &&
            isInputEvent;
        const changeWasCodeCompletion = changeObject.origin === 'complete';
        if (tokenUnderCursorAsString.length <= 0)
            return;
        if (changeWasCodeCompletion) {
            // If the case that the user triggered a code completion,
            // we want to empty out the completions until
            // a letter is input.
            this._completions = [];
            return;
        }
        this._requestCompletions({
            isRefinement,
            tokenUnderCursor,
        });
    }
    _requestCompletions({ isRefinement, tokenUnderCursor, }) {
        if (this.noCompletions ||
            !this._currentFiletypeSupportsCompletion() ||
            !this._codemirror)
            return;
        const id = ++this._currentCompletionRequestId;
        const cursorIndexOnRequest = this.cursorIndex;
        this.dispatchEvent(new CustomEvent('request-completions', {
            detail: {
                isRefinement,
                fileContent: this.value,
                tokenUnderCursor,
                cursorIndex: this.cursorIndex,
                provideCompletions: (completions) => this._onCompletionsProvided(id, completions, cursorIndexOnRequest),
            },
        }));
    }
    _onCompletionsProvided(id, completions, cursorIndex) {
        // To prevent race conditioning, check that the completions provided
        // are from the latest completions request.
        // We also check that the cursor hasn't moved to another position since the
        // completion request, causing the completion to be applied in a wrong spot.
        if (id !== this._currentCompletionRequestId ||
            cursorIndex !== this.cursorIndex) {
            return;
        }
        this._completions = completions;
    }
    _currentFiletypeSupportsCompletion() {
        // Currently we are only supporting code completion for TS. Change
        // this in a case that we start to support it for other languages too.
        return this.type === 'ts';
    }
    focus() {
        var _a;
        (_a = this._codemirrorEditable) === null || _a === void 0 ? void 0 : _a.focus();
    }
    _completionsAsHints() {
        var _a, _b;
        const cm = this._codemirror;
        const cursorPosition = cm.getCursor('start');
        const token = cm.getTokenAt(cursorPosition);
        const lineNumber = cursorPosition.line;
        const hintList = (_b = (_a = this._completions) === null || _a === void 0 ? void 0 : _a.map((comp, i) => ({
            text: comp.text,
            displayText: comp.displayText,
            render: (element, _data, hint) => {
                const codeEditorHint = hint;
                this._renderHint(element, _data, codeEditorHint, i === 0 ? comp.details : undefined // Only render the detail on the first item
                );
            },
            get details() {
                return comp.details;
            },
        }))) !== null && _b !== void 0 ? _b : [];
        const hints = {
            from: { line: lineNumber, ch: token.start },
            to: { line: lineNumber, ch: token.end },
            list: hintList,
        };
        CodeMirror$1.on(hints, 'select', async (hint, element) => {
            var _a;
            if (!this._isCodeEditorHint(hint))
                return;
            // If the current selection is the same, e.g. the completions were just
            // updated by user input, instead of moving through completions, we don't
            // want to re-render and re-fetch the details.
            if (this._currentCompletionSelectionLabel === hint.text)
                return;
            (_a = this._onCompletionSelectedChange) === null || _a === void 0 ? void 0 : _a.call(this);
            this._renderHint(element, hints, hint, hint.details);
        });
        // As CodeMirror doesn't let us directly query if the completion hints are shown,
        // we want to have our own local state following the completions menu state.
        CodeMirror$1.on(hints, 'shown', () => {
            // Delay updating the status by a frame so that key listeners still have
            // access to the correct state for the current situation.
            window.requestAnimationFrame(() => {
                this._completionsOpen = true;
            });
        });
        CodeMirror$1.on(hints, 'close', () => {
            window.requestAnimationFrame(() => {
                this._completionsOpen = false;
            });
        });
        return hints;
    }
    _isCodeEditorHint(hint) {
        return (typeof hint !== 'string' &&
            Object.prototype.hasOwnProperty.call(hint, 'details'));
    }
    _renderHint(element, _data, hint, detail) {
        var _a;
        if (!element)
            return;
        const itemIndex = _data.list.indexOf(hint);
        const completionData = (_a = this._completions) === null || _a === void 0 ? void 0 : _a[itemIndex];
        const objectName = this._buildHintObjectName(hint.displayText, completionData);
        // Render the actual completion item first
        this._renderCompletionItem(objectName, element);
        // And if we have the detail promise passed into this function,
        // we want to asynchronously update the detail info into our completion
        // item. We don't want to block the rendering, so we don't use await.
        //
        // The detail promise is passed into this function only for the item
        // currently highlighted from the completions list.
        if (detail !== undefined) {
            /* eslint-disable @typescript-eslint/no-floating-promises */
            detail.then((detailResult) => {
                this._renderCompletionItemWithDetails(objectName, detailResult, element);
                // Set the current onSelectedChange to a callback to re-render
                // the currently selected element, but without the details. This is
                // then triggered when moving to another selection, removing the details
                // text from the previously selected element.
                this._onCompletionSelectedChange = () => this._renderHint(element, _data, hint);
                this._currentCompletionSelectionLabel = hint.text;
            });
            /* eslint-enable @typescript-eslint/no-floating-promises */
        }
    }
    _renderCompletionItem(objectName, target) {
        B(x `<span class="hint-object-name">${objectName}</span>`, target);
    }
    _renderCompletionItemWithDetails(objectName, details, target) {
        B(x `<span class="hint-object-name">${objectName}</span>
        <span class="hint-object-details">${details.text}</span> `, target);
    }
    /**
     * Builds the name of the completable item for use in the completion UI.
     * Using marks, we can highlight the matching characters in the typed input
     * matching with the completion suggestion.
     */
    _buildHintObjectName(objectName, completionData) {
        var _a;
        const markedObjectName = objectName !== null && objectName !== void 0 ? objectName : '';
        const matches = (_a = completionData === null || completionData === void 0 ? void 0 : completionData.matches) !== null && _a !== void 0 ? _a : [];
        if (matches.length <= 0) {
            // In the situation, that none of the input matches with the
            // completion item suggestion, we exit early, leaving the objectName unmarked.
            return markedObjectName;
        }
        const firstMatch = matches[0];
        const firstMatchingIndex = firstMatch.indices[0];
        const start = firstMatchingIndex[0];
        const end = firstMatchingIndex[1];
        const preMarkContent = markedObjectName === null || markedObjectName === void 0 ? void 0 : markedObjectName.substring(0, start);
        const markedContent = markedObjectName === null || markedObjectName === void 0 ? void 0 : markedObjectName.substring(start, end + 1);
        const postMarkedContent = markedObjectName === null || markedObjectName === void 0 ? void 0 : markedObjectName.substring(end + 1);
        return x `
      ${preMarkContent}<mark>${markedContent}</mark>${postMarkedContent}
    `;
    }
    _showCompletions() {
        const cm = this._codemirror;
        if (!cm || !this._completions || this._completions.length <= 0)
            return;
        const options = {
            hint: this._completionsAsHints.bind(this),
            completeSingle: false,
            closeOnPick: true,
            closeOnUnfocus: true,
            container: this._focusContainer,
            alignWithWord: true,
        };
        cm.showHint(options);
    }
    _onMousedown() {
        var _a;
        // Directly focus editable region.
        (_a = this._codemirrorEditable) === null || _a === void 0 ? void 0 : _a.focus();
    }
    _onFocus() {
        // Outer container was focused, either by tabbing from outside, or by
        // pressing Escape.
        this._showKeyboardHelp = true;
    }
    _onBlur() {
        // Outer container was unfocused, either by tabbing away from it, or by
        // pressing Enter.
        this._showKeyboardHelp = false;
    }
    _onKeyDown(event) {
        var _a, _b;
        if (event.key === 'Enter' && event.target === this._focusContainer) {
            (_a = this._codemirrorEditable) === null || _a === void 0 ? void 0 : _a.focus();
            // Prevent typing a newline from this same event.
            event.preventDefault();
        }
        else if (event.key === 'Escape') {
            // If the user has completions selection UI opened up, Escape's default action
            // is to close the completion UI instead of escaping the code editor instance.
            // Therefore we only focus on the focusContainer in situations where the completions
            // UI is not open.
            if (!this._completionsOpen) {
                // Note there is no API for "select the next naturally focusable element",
                // so instead we just re-focus the outer container, from which point the
                // user can tab to move focus entirely elsewhere.
                (_b = this._focusContainer) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
    }
    /**
     * Create hidden and folded regions for playground-hide and playground-fold
     * comments.
     */
    async _applyHideAndFoldRegions() {
        const cm = this._codemirror;
        if (!cm) {
            return;
        }
        // Reset any existing hide/fold regions.
        for (const mark of cm.getAllMarks()) {
            mark.clear();
        }
        if (this.pragmas === 'off-visible') {
            return;
        }
        const pattern = this._maskPatternForLang();
        if (pattern === undefined) {
            return;
        }
        const doc = cm.getDoc();
        const fold = (fromIdx, toIdx) => {
            cm.foldCode(/* ignored by our rangeFinder */ 0, {
                widget: '…',
                rangeFinder: () => ({
                    from: doc.posFromIndex(fromIdx),
                    to: doc.posFromIndex(toIdx),
                }),
            });
        };
        const hide = (fromIdx, toIdx, readOnly) => {
            doc.markText(doc.posFromIndex(fromIdx), doc.posFromIndex(toIdx), {
                collapsed: true,
                readOnly,
            });
        };
        const value = cm.getValue();
        for (const match of value.matchAll(pattern)) {
            const [, opener, kind, content, closer] = match;
            const openerStart = match.index;
            if (openerStart === undefined) {
                continue;
            }
            const openerEnd = openerStart + opener.length;
            hide(openerStart, openerEnd, false);
            const contentStart = openerEnd;
            let contentEnd;
            if (content && closer) {
                contentEnd = contentStart + content.length;
                const closerStart = contentEnd;
                const closerEnd = contentEnd + closer.length;
                hide(closerStart, closerEnd, false);
            }
            else {
                // No matching end comment. Include the entire rest of the file.
                contentEnd = value.length;
            }
            if (this.pragmas === 'on') {
                if (kind === 'fold') {
                    fold(contentStart, contentEnd);
                }
                else if (kind === 'hide') {
                    hide(contentStart, contentEnd, true);
                }
            }
        }
    }
    _maskPatternForLang() {
        switch (this.type) {
            case 'js':
            case 'ts':
            case 'css':
            case 'jsx':
            case 'tsx':
                // We consume all leading whitespace and one trailing newline for each
                // start/end comment. This lets us put start/end comments on their own
                // line and indent them like the surrounding without affecting the
                // selected region.
                return /( *\/\* *playground-(?<kind>hide|fold) *\*\/\n?)(?:(.*?)( *\/\* *playground-\k<kind>-end *\*\/\n?))?/gs;
            case 'html':
                return /( *<!-- *playground-(?<kind>hide|fold) *-->\n?)(?:(.*?)( *<!-- *playground-\k<kind>-end *-->\n?))?/gs;
            default:
                return undefined;
        }
    }
    _getLanguageMode() {
        switch (this.type) {
            case 'ts':
                return 'google-typescript';
            case 'js':
            case 'json':
                // While the stock CodeMirror JavaScript mode has a restricted "json"
                // mode, the google-javascript mode does not (which we use because it
                // supports html-in-js highlighting). Adding the CodeMirror JavaScript
                // mode would add ~50KiB minified + brotli, so let's just put up with
                // the fact that you'll get highlighting for JS even though it's not
                // valid JSON.
                return 'google-javascript';
            case 'html':
                return 'google-html';
            case 'css':
                return 'css';
            case 'jsx':
            case 'tsx':
                return 'jsx';
        }
        return undefined;
    }
    _showDiagnostics() {
        const cm = this._codemirror;
        if (cm === undefined) {
            return;
        }
        cm.operation(() => {
            var _a, _b, _c;
            this._tooltipDiagnostic = undefined;
            while (this._diagnosticMarkers.length > 0) {
                this._diagnosticMarkers.pop().clear();
            }
            if (!((_a = this.diagnostics) === null || _a === void 0 ? void 0 : _a.length)) {
                if (this._diagnosticsMouseoverListenerActive) {
                    (_b = this._cmDom) === null || _b === void 0 ? void 0 : _b.removeEventListener('mouseover', this._onMouseOverWithDiagnostics);
                    this._diagnosticsMouseoverListenerActive = false;
                }
                return;
            }
            if (!this._diagnosticsMouseoverListenerActive) {
                (_c = this._cmDom) === null || _c === void 0 ? void 0 : _c.addEventListener('mouseover', this._onMouseOverWithDiagnostics);
                this._diagnosticsMouseoverListenerActive = true;
            }
            for (let i = 0; i < this.diagnostics.length; i++) {
                const diagnostic = this.diagnostics[i];
                this._diagnosticMarkers.push(cm.markText({
                    line: diagnostic.range.start.line,
                    ch: diagnostic.range.start.character,
                }, {
                    line: diagnostic.range.end.line,
                    ch: diagnostic.range.end.character,
                }, {
                    className: `diagnostic diagnostic-${i}`,
                }));
            }
        });
    }
};
PlaygroundCodeEditor.styles = [
    i$6 `
      :host {
        display: block;
      }

      #focusContainer {
        height: 100%;
        position: relative;
      }
      #focusContainer:focus {
        outline: none;
      }

      .CodeMirror {
        height: 100% !important;
        border-radius: inherit;
      }

      .CodeMirror-foldmarker {
        font-family: sans-serif;
      }
      .CodeMirror-foldmarker:hover {
        cursor: pointer;
        /* Pretty much any color from the theme is good enough. */
        color: var(--playground-code-keyword-color, #770088);
      }

      #keyboardHelp {
        font-size: 18px;
        font-family: sans-serif;
        padding: 10px 20px;
      }

      .diagnostic {
        position: relative;
      }

      .diagnostic::before {
        /* It would be nice to use "text-decoration: red wavy underline" here,
           but unfortunately it renders nothing at all for single characters.
           See https://bugs.chromium.org/p/chromium/issues/detail?id=668042. */
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJDw4cOCW1/KIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAHElEQVQI12NggIL/DAz/GdA5/xkY/qPKMDAwAADLZwf5rvm+LQAAAABJRU5ErkJggg==');
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }

      #tooltip {
        position: absolute;
        padding: 7px;
        z-index: 4;
        font-family: var(--playground-code-font-family, monospace);
      }

      #tooltip > div {
        background: var(--playground-code-background, #fff);
        color: var(--playground-code-default-color, #000);
        /* Kind of hacky... line number color tends to work out as a good
           default border, because it's usually visible on top of the
           background, but slightly muted. */
        border: 1px solid var(--playground-code-linenumber-color, #ccc);
        padding: 5px;
      }
    `,
    styles$4,
];
__decorate([
    e$5()
], PlaygroundCodeEditor.prototype, "value", null);
__decorate([
    e$5({ attribute: false })
    // eslint-disable-next-line @typescript-eslint/ban-types
], PlaygroundCodeEditor.prototype, "documentKey", void 0);
__decorate([
    e$5()
], PlaygroundCodeEditor.prototype, "type", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'line-numbers', reflect: true })
], PlaygroundCodeEditor.prototype, "lineNumbers", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'line-wrapping', reflect: true })
], PlaygroundCodeEditor.prototype, "lineWrapping", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], PlaygroundCodeEditor.prototype, "readonly", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'no-completions' })
], PlaygroundCodeEditor.prototype, "noCompletions", void 0);
__decorate([
    e$5({ attribute: false })
], PlaygroundCodeEditor.prototype, "diagnostics", void 0);
__decorate([
    t$1()
], PlaygroundCodeEditor.prototype, "_completions", void 0);
__decorate([
    t$1()
], PlaygroundCodeEditor.prototype, "_completionsOpen", void 0);
__decorate([
    e$5()
], PlaygroundCodeEditor.prototype, "pragmas", void 0);
__decorate([
    t$1()
], PlaygroundCodeEditor.prototype, "_tooltipDiagnostic", void 0);
__decorate([
    t$1()
], PlaygroundCodeEditor.prototype, "_showKeyboardHelp", void 0);
__decorate([
    i$2('#focusContainer')
], PlaygroundCodeEditor.prototype, "_focusContainer", void 0);
__decorate([
    i$2('.CodeMirror-code')
], PlaygroundCodeEditor.prototype, "_codemirrorEditable", void 0);
PlaygroundCodeEditor = __decorate([
    e$6('playground-code-editor')
], PlaygroundCodeEditor);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * A text editor associated with a <playground-project>.
 */
let PlaygroundFileEditor = class PlaygroundFileEditor extends PlaygroundConnectedElement {
    constructor() {
        super(...arguments);
        /**
         * If true, display a left-hand-side gutter with line numbers. Default false
         * (hidden).
         */
        this.lineNumbers = false;
        /**
         * If true, wrap for long lines. Default false
         */
        this.lineWrapping = false;
        /**
         * How to handle `playground-hide` and `playground-fold` comments.
         *
         * See https://github.com/google/playground-elements#hiding--folding for
         * more details.
         *
         * Options:
         * - on: Hide and fold regions, and hide the special comments.
         * - off: Don't hide or fold regions, but still hide the special comments.
         * - off-visible: Don't hide or fold regions, and show the special comments as
         *   literal text.
         */
        this.pragmas = 'on';
        /**
         * If true, this editor is not editable.
         */
        this.readonly = false;
        /**
         * If true, will disable code completions in the code-editor.
         */
        this.noCompletions = false;
        this._onProjectFilesChanged = () => {
            var _a, _b;
            (_a = this.filename) !== null && _a !== void 0 ? _a : (this.filename = (_b = this._files[0]) === null || _b === void 0 ? void 0 : _b.name);
            this.requestUpdate();
        };
        this._onCompileDone = () => {
            // Propagate diagnostics.
            this.requestUpdate();
        };
        this._onDiagnosticsChanged = () => {
            // Propagate diagnostics.
            this.requestUpdate();
        };
    }
    get _files() {
        var _a, _b;
        return (_b = (_a = this._project) === null || _a === void 0 ? void 0 : _a.files) !== null && _b !== void 0 ? _b : [];
    }
    get _currentFile() {
        return this.filename
            ? this._files.find((file) => file.name === this.filename)
            : undefined;
    }
    async update(changedProperties) {
        if (changedProperties.has('_project')) {
            const oldProject = changedProperties.get('_project');
            if (oldProject) {
                oldProject.removeEventListener('filesChanged', this._onProjectFilesChanged);
                oldProject.removeEventListener('compileDone', this._onCompileDone);
                oldProject.removeEventListener('diagnosticsChanged', this._onDiagnosticsChanged);
            }
            if (this._project) {
                this._project.addEventListener('filesChanged', this._onProjectFilesChanged);
                this._project.addEventListener('compileDone', this._onCompileDone);
                this._project.addEventListener('diagnosticsChanged', this._onDiagnosticsChanged);
            }
            this._onProjectFilesChanged();
        }
        super.update(changedProperties);
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        return x `
      ${this._files
            ? x `
            <playground-code-editor
              exportparts="diagnostic-tooltip, dialog"
              .value=${
            // We need live() because the lit's dirty-checking value for
            // content is not updated by user edits.
            l((_b = (_a = this._currentFile) === null || _a === void 0 ? void 0 : _a.content) !== null && _b !== void 0 ? _b : '')}
              .documentKey=${this._currentFile}
              .type=${this._currentFile
                ? mimeTypeToTypeEnum(this._currentFile.contentType)
                : undefined}
              .lineNumbers=${this.lineNumbers}
              .lineWrapping=${this.lineWrapping}
              .readonly=${this.readonly || !this._currentFile}
              .pragmas=${this.pragmas}
              .diagnostics=${(_d = (_c = this._project) === null || _c === void 0 ? void 0 : _c.diagnostics) === null || _d === void 0 ? void 0 : _d.get((_f = (_e = this._currentFile) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '')}
              .noCompletions=${this.noCompletions}
              @change=${this._onEdit}
              @request-completions=${this._onRequestCompletions}
            >
            </playground-code-editor>
          `
            : x `<slot></slot>`}
    `;
    }
    _onEdit() {
        if (this._project === undefined ||
            this._currentFile === undefined ||
            this._editor.value === undefined) {
            return;
        }
        this._project.editFile(this._currentFile, this._editor.value);
    }
    async _onRequestCompletions(e) {
        var _a, _b;
        const codeEditorChangeData = e.detail;
        codeEditorChangeData.fileName = (_a = this.filename) !== null && _a !== void 0 ? _a : '';
        const completions = await ((_b = this._project) === null || _b === void 0 ? void 0 : _b.getCompletions(codeEditorChangeData));
        if (completions) {
            codeEditorChangeData.provideCompletions(completions);
        }
    }
};
PlaygroundFileEditor.styles = i$6 `
    :host {
      display: block;
      /* Prevents scrollbars from changing container size and shifting layout
      slightly. */
      box-sizing: border-box;
      height: 350px;
    }

    slot {
      height: 100%;
      display: block;
      background: var(--playground-code-background, unset);
    }

    playground-code-editor {
      height: 100%;
      border-radius: inherit;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `;
__decorate([
    i$2('playground-code-editor')
], PlaygroundFileEditor.prototype, "_editor", void 0);
__decorate([
    e$5()
], PlaygroundFileEditor.prototype, "filename", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'line-numbers' })
], PlaygroundFileEditor.prototype, "lineNumbers", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'line-wrapping' })
], PlaygroundFileEditor.prototype, "lineWrapping", void 0);
__decorate([
    e$5()
], PlaygroundFileEditor.prototype, "pragmas", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], PlaygroundFileEditor.prototype, "readonly", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'no-completions' })
], PlaygroundFileEditor.prototype, "noCompletions", void 0);
PlaygroundFileEditor = __decorate([
    e$6('playground-file-editor')
], PlaygroundFileEditor);
const mimeTypeToTypeEnum = (mimeType) => {
    // TODO: infer type based on extension too
    if (mimeType === undefined) {
        return;
    }
    const encodingSepIndex = mimeType.indexOf(';');
    if (encodingSepIndex !== -1) {
        mimeType = mimeType.substring(0, encodingSepIndex);
    }
    switch (mimeType) {
        // TypeScript: this is the mime-type returned by servers
        // .ts files aren't usually served to browsers, so they don't yet
        // have their own mime-type.
        case 'video/mp2t':
            return 'ts';
        case 'text/javascript':
        case 'application/javascript':
            return 'js';
        case 'text/jsx':
            return 'jsx';
        case 'text/typescript-jsx':
            return 'tsx';
        case 'application/json':
            return 'json';
        case 'text/html':
            return 'html';
        case 'text/css':
            return 'css';
    }
    return undefined;
};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class LinearProgressBase extends s$1 {
    constructor() {
        super(...arguments);
        this.indeterminate = false;
        this.progress = 0;
        this.buffer = 1;
        this.reverse = false;
        this.closed = false;
        this.stylePrimaryHalf = '';
        this.stylePrimaryFull = '';
        this.styleSecondaryQuarter = '';
        this.styleSecondaryHalf = '';
        this.styleSecondaryFull = '';
        this.animationReady = true;
        this.closedAnimationOff = false;
        this.resizeObserver = null;
    }
    connectedCallback() {
        super.connectedCallback();
        // if detached and reattached
        if (this.rootEl) {
            this.attachResizeObserver();
        }
    }
    /**
     * @soyTemplate
     */
    render() {
        /** @classMap */
        const classes = {
            'mdc-linear-progress--closed': this.closed,
            'mdc-linear-progress--closed-animation-off': this.closedAnimationOff,
            'mdc-linear-progress--indeterminate': this.indeterminate,
            // needed for controller-less render
            'mdc-linear-progress--animation-ready': this.animationReady
        };
        /** @styleMap */
        const rootStyles = {
            '--mdc-linear-progress-primary-half': this.stylePrimaryHalf,
            '--mdc-linear-progress-primary-half-neg': this.stylePrimaryHalf !== '' ? `-${this.stylePrimaryHalf}` : '',
            '--mdc-linear-progress-primary-full': this.stylePrimaryFull,
            '--mdc-linear-progress-primary-full-neg': this.stylePrimaryFull !== '' ? `-${this.stylePrimaryFull}` : '',
            '--mdc-linear-progress-secondary-quarter': this.styleSecondaryQuarter,
            '--mdc-linear-progress-secondary-quarter-neg': this.styleSecondaryQuarter !== '' ? `-${this.styleSecondaryQuarter}` :
                '',
            '--mdc-linear-progress-secondary-half': this.styleSecondaryHalf,
            '--mdc-linear-progress-secondary-half-neg': this.styleSecondaryHalf !== '' ? `-${this.styleSecondaryHalf}` : '',
            '--mdc-linear-progress-secondary-full': this.styleSecondaryFull,
            '--mdc-linear-progress-secondary-full-neg': this.styleSecondaryFull !== '' ? `-${this.styleSecondaryFull}` : '',
        };
        /** @styleMap */
        const bufferBarStyles = {
            'flex-basis': this.indeterminate ? '100%' : `${this.buffer * 100}%`,
        };
        /** @styleMap */
        const primaryBarStyles = {
            transform: this.indeterminate ? 'scaleX(1)' : `scaleX(${this.progress})`,
        };
        return x `
      <div
          role="progressbar"
          class="mdc-linear-progress ${o$3(classes)}"
          style="${o(rootStyles)}"
          dir="${l$1(this.reverse ? 'rtl' : undefined)}"
          aria-label="${l$1(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${l$1(this.indeterminate ? undefined : this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${o(bufferBarStyles)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${o(primaryBarStyles)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`;
    }
    update(changedProperties) {
        // - When showing the indicator, enable animations immediately.
        // - On first render, disable the animation immediately.
        // - For normal calls to hide the component, let transitionend event trigger
        //   disabling of animations instead (see render method), so that animation
        //   does not jump in the middle of fade out.
        if (changedProperties.has('closed') &&
            (!this.closed || changedProperties.get('closed') === undefined)) {
            this.syncClosedState();
        }
        super.update(changedProperties);
    }
    async firstUpdated(changed) {
        super.firstUpdated(changed);
        this.attachResizeObserver();
    }
    syncClosedState() {
        this.closedAnimationOff = this.closed;
    }
    updated(changed) {
        // restart animation for timing if reverse changed and is indeterminate.
        // don't restart here if indeterminate has changed as well because we don't
        // want to incur an extra style recalculation
        if (!changed.has('indeterminate') && changed.has('reverse') &&
            this.indeterminate) {
            this.restartAnimation();
        }
        // Recaclulate the animation css custom props and restart the calculation
        // if this is not the first render cycle, otherwise, resize observer init
        // will already handle this and prevent unnecessary rerender + style recalc
        // but resize observer will not update animation vals while determinate
        if (changed.has('indeterminate') &&
            changed.get('indeterminate') !== undefined && this.indeterminate &&
            window.ResizeObserver) {
            this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth);
        }
        super.updated(changed);
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        super.disconnectedCallback();
    }
    attachResizeObserver() {
        if (window.ResizeObserver) {
            this.resizeObserver =
                new window
                    .ResizeObserver((entries) => {
                    if (!this.indeterminate) {
                        return;
                    }
                    for (const entry of entries) {
                        if (entry.contentRect) {
                            const width = entry.contentRect.width;
                            this.calculateAndSetAnimationDimensions(width);
                        }
                    }
                });
            this.resizeObserver.observe(this.rootEl);
            return;
        }
        this.resizeObserver = null;
    }
    calculateAndSetAnimationDimensions(width) {
        const primaryHalf = width * 0.8367142;
        const primaryFull = width * 2.00611057;
        const secondaryQuarter = width * 0.37651913;
        const secondaryHalf = width * 0.84386165;
        const secondaryFull = width * 1.60277782;
        this.stylePrimaryHalf = `${primaryHalf}px`;
        this.stylePrimaryFull = `${primaryFull}px`;
        this.styleSecondaryQuarter = `${secondaryQuarter}px`;
        this.styleSecondaryHalf = `${secondaryHalf}px`;
        this.styleSecondaryFull = `${secondaryFull}px`;
        // need to restart animation for custom props to apply to keyframes
        this.restartAnimation();
    }
    async restartAnimation() {
        this.animationReady = false;
        await this.updateComplete;
        await new Promise(requestAnimationFrame);
        this.animationReady = true;
        await this.updateComplete;
    }
    open() {
        this.closed = false;
    }
    close() {
        this.closed = true;
    }
}
__decorate([
    i$2('.mdc-linear-progress')
], LinearProgressBase.prototype, "rootEl", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], LinearProgressBase.prototype, "indeterminate", void 0);
__decorate([
    e$5({ type: Number })
], LinearProgressBase.prototype, "progress", void 0);
__decorate([
    e$5({ type: Number })
], LinearProgressBase.prototype, "buffer", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], LinearProgressBase.prototype, "reverse", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], LinearProgressBase.prototype, "closed", void 0);
__decorate([
    ariaProperty,
    e$5({ attribute: 'aria-label' })
], LinearProgressBase.prototype, "ariaLabel", void 0);
__decorate([
    t$1()
], LinearProgressBase.prototype, "stylePrimaryHalf", void 0);
__decorate([
    t$1()
], LinearProgressBase.prototype, "stylePrimaryFull", void 0);
__decorate([
    t$1()
], LinearProgressBase.prototype, "styleSecondaryQuarter", void 0);
__decorate([
    t$1()
], LinearProgressBase.prototype, "styleSecondaryHalf", void 0);
__decorate([
    t$1()
], LinearProgressBase.prototype, "styleSecondaryFull", void 0);
__decorate([
    t$1()
], LinearProgressBase.prototype, "animationReady", void 0);
__decorate([
    t$1()
], LinearProgressBase.prototype, "closedAnimationOff", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$3 = i$6 `@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:4px}.mdc-linear-progress__bar-inner{border-top-width:4px}.mdc-linear-progress__buffer-dots{background-size:10px 4px}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let LinearProgress = class LinearProgress extends LinearProgressBase {
};
LinearProgress.styles = [styles$3];
LinearProgress = __decorate([
    e$6('mwc-linear-progress')
], LinearProgress);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * An HTML preview component consisting of an iframe and a floating reload
 * button.
 *
 * @fires reload - Fired when the user clicks the reload button
 */
let PlaygroundPreview = class PlaygroundPreview extends PlaygroundConnectedElement {
    constructor() {
        super();
        /**
         * The HTML file used in the preview.
         */
        this.htmlFile = 'index.html';
        /**
         * The string to display in the location bar.
         */
        this.location = 'Result';
        /**
         * Whether the iframe is currently loading.
         */
        this._loading = true;
        /**
         * Whether to show the loading bar.
         */
        this._showLoadingBar = false;
        /**
         * Whether the iframe has fired its "load" event at least once.
         */
        this._loadedAtLeastOnce = false;
        this.reload = () => {
            const iframe = this.iframe;
            if (!iframe) {
                return;
            }
            // Reloading the iframe can cause a history entry to be added to the parent
            // window (on Chrome but not Firefox, and only when the parent/iframe origins
            // are different). Removing the iframe from the DOM while we initiate the
            // reload prevents a history entry from being added.
            const { parentNode, nextSibling } = iframe;
            if (parentNode) {
                iframe.remove();
            }
            // Note we can't use contentWindow.location.reload() here, because the
            // IFrame might be on a different origin.
            iframe.src = '';
            iframe.src = this._indexUrl;
            if (parentNode) {
                parentNode.insertBefore(iframe, nextSibling);
            }
            this._loading = true;
            this._showLoadingBar = true;
        };
        if (navigator.serviceWorker === undefined) {
            this._error = x `<p>
          <b>Sorry!</b> Preview unavailable because this browser doesn't
          <a
            href="https://caniuse.com/serviceworkers"
            target="_blank"
            rel="noopener"
            >support</a
          >
          service workers.
        </p>
        <p>
          <i
            >Note: Firefox
            <a
              href="https://bugzilla.mozilla.org/show_bug.cgi?id=1320796"
              target="_blank"
              rel="noopener"
              >doesn't</a
            >
            support service workers in private browsing mode.</i
          >
        </p> `;
        }
    }
    update(changedProperties) {
        if (changedProperties.has('_project')) {
            const oldProject = changedProperties.get('_project');
            if (oldProject) {
                oldProject.removeEventListener('urlChanged', this.reload);
                // To be more responsive, we start loading as soon as compilation
                // starts. This is safe because requests block on compilation finishing.
                oldProject.removeEventListener('compileStart', this.reload);
            }
            if (this._project) {
                this._project.addEventListener('urlChanged', this.reload);
                this._project.addEventListener('compileStart', this.reload);
            }
        }
        super.update(changedProperties);
    }
    get _indexUrl() {
        var _a;
        const base = (_a = this._project) === null || _a === void 0 ? void 0 : _a.baseUrl;
        if (!base || !this.htmlFile) {
            return '';
        }
        const url = new URL(this.htmlFile, base);
        return url.toString();
    }
    render() {
        return x `
      <div id="toolbar" part="preview-toolbar">
        <span id="location" part="preview-location"> ${this.location}</span>
        <mwc-icon-button
          id="reload-button"
          aria-label="Reload preview"
          part="preview-reload-button"
          ?disabled=${!this._indexUrl}
          @click=${this.reload}
        >
          <!-- Source: https://material.io/resources/icons/?icon=refresh&style=baseline -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentcolor"
            width="18px"
            height="18px"
          >
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </mwc-icon-button>
      </div>

      <div id="content" class=${o$3({ error: !!this._error })}>
        <mwc-linear-progress
          aria-hidden=${this._loading ? 'false' : 'true'}
          part="preview-loading-indicator"
          indeterminate
          ?closed=${!this._showLoadingBar}
        ></mwc-linear-progress>

        ${this._loadedAtLeastOnce ? A : x `<slot></slot>`}

        <iframe
          title="Project preview"
          @load=${this._onIframeLoad}
          ?hidden=${!this._loadedAtLeastOnce}
        ></iframe>
      </div>

      ${this._error
            ? x `
            <playground-internal-overlay id="error">
              ${this._error}</playground-internal-overlay
            >
          `
            : A}
    `;
    }
    updated() {
        // TODO(aomarks) If we instead use an `ifDefined(this._indexUrl)` binding in
        // the template, then the preview loads twice. I must be doing something
        // dumb, but this hacky way of synchronizing the src works correctly for
        // now. Figure out the more elegant solution.
        if (this.iframe && this.iframe.src !== this._indexUrl) {
            this.iframe.src = this._indexUrl;
        }
    }
    async firstUpdated() {
        var _a, _b;
        // Loading should be initially indicated only when we're not pre-rendering,
        // because in that case there should be no visible change once the actual
        // iframe loads, and the indicator is distracting.
        if (this._loading && !this._slotHasAnyVisibleChildren()) {
            this._showLoadingBar = true;
        }
        // The latest version of MWC forwards the aria-label attribute to the
        // progressbar role correctly
        // (https://github.com/material-components/material-components-web-components/pull/2264),
        // but until 0.21.0 is released we'll need to fix it up ourselves.
        const progress = this.shadowRoot.querySelector('mwc-linear-progress');
        await progress.updateComplete;
        (_b = (_a = progress.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('[role=progressbar]')) === null || _b === void 0 ? void 0 : _b.setAttribute('aria-label', 'Preview is loading');
    }
    _slotHasAnyVisibleChildren() {
        var _a;
        const assigned = (_a = this._slot) === null || _a === void 0 ? void 0 : _a.assignedNodes({ flatten: true });
        if (!assigned) {
            return false;
        }
        for (const node of assigned) {
            if (node.nodeType === Node.COMMENT_NODE) {
                continue;
            }
            if (node.nodeType === Node.TEXT_NODE &&
                (node.textContent || '').trim() === '') {
                continue;
            }
            return true;
        }
        return false;
    }
    _onIframeLoad() {
        if (this._indexUrl) {
            // Check "src" because the iframe will fire a "load" for a blank page
            // before "src" is set.
            this._loading = false;
            this._loadedAtLeastOnce = true;
            this._showLoadingBar = false;
        }
    }
};
PlaygroundPreview.styles = i$6 `
    :host {
      display: flex;
      flex-direction: column;
      background: white;
      font-family: sans-serif;
      height: 350px;
      position: relative; /* for the error message overlay */
    }

    #toolbar {
      flex: 0 0 var(--playground-bar-height, 40px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: var(--playground-border, solid 1px #ddd);
      font-size: 15px;
      color: var(--playground-preview-toolbar-foreground-color, #444);
      border-radius: inherit;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      background: var(--playground-preview-toolbar-background, white);
    }

    #location {
      margin: 0 10px;
    }

    #reload-button {
      --mdc-icon-button-size: 30px;
      --mdc-icon-size: 18px;
    }

    #content {
      max-height: 100%;
      position: relative;
      flex: 1;
    }

    #content.error {
      display: none;
    }

    #error {
      padding: 0 20px;
    }

    mwc-linear-progress {
      /* There is no way to directly specify the height of a linear progress
      bar, but zooming works well enough. It's 4px by default, and we want it to
      be 2px to match the tab bar indicator.*/
      zoom: 0.5;
      --mdc-linear-progress-buffer-color: transparent;
      position: absolute;
      top: -6px;
      width: 100%;
      --mdc-theme-primary: var(--playground-highlight-color, #6200ee);
    }

    iframe,
    slot {
      width: 100%;
      height: 100%;
    }

    iframe {
      border: none;
    }

    [hidden] {
      display: none;
    }
  `;
__decorate([
    e$5({ attribute: 'html-file' })
], PlaygroundPreview.prototype, "htmlFile", void 0);
__decorate([
    e$5()
], PlaygroundPreview.prototype, "location", void 0);
__decorate([
    i$2('iframe', true)
], PlaygroundPreview.prototype, "iframe", void 0);
__decorate([
    i$2('slot')
], PlaygroundPreview.prototype, "_slot", void 0);
__decorate([
    t$1()
], PlaygroundPreview.prototype, "_loading", void 0);
__decorate([
    t$1()
], PlaygroundPreview.prototype, "_showLoadingBar", void 0);
__decorate([
    t$1()
], PlaygroundPreview.prototype, "_loadedAtLeastOnce", void 0);
__decorate([
    t$1()
], PlaygroundPreview.prototype, "_error", void 0);
PlaygroundPreview = __decorate([
    e$6('playground-preview')
], PlaygroundPreview);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * A multi-file code editor component with live preview that works without a
 * server.
 *
 * <playground-ide> loads a project configuration file and the set of source
 * files it describes from the network. The source files can be edited locally.
 * To serve the locally edited files to the live preview, <playground-ide>
 * registers a service worker to serve files to the preview from the main UI
 * thread directly, without a network roundtrip.
 *
 * The project manifest is a JSON file with a "files" property. "files" is an
 * object with properties for each file. The key is the filename, relative to
 * the project manifest.
 *
 * Example project manifest:
 * ```json
 * {
 *   "files": {
 *     "./index.html": {},
 *     "./my-element.js": {},
 *   }
 * }
 * ```
 *
 * Files can also be given as <script> tag children of <playground-ide>. The
 * type attribute must start with "sample/" and then the type of the file, one
 * of: "js", "ts", "html", or "css". The <script> must also have a "filename"
 * attribute.
 *
 * Example inline files:
 * ```html
 * <playground-ide>
 *   <script type="sample/html" filename="index.html">
 *     <script type="module" src="index.js">&lt;script>
 *     <h1>Hello World</h1>
 *   </script>
 *   <script type="sample/js" filename="index.js">
 *     document.body.append('<h2>Hello from JS</h2>');
 *   </script>
 * </playground>
 * ```
 */
let PlaygroundIde = class PlaygroundIde extends s$1 {
    constructor() {
        super(...arguments);
        /**
         * Base URL for script execution sandbox.
         *
         * It is highly advised to change this property to a URL on a separate origin
         * which has no privileges to perform sensitive actions or access sensitive
         * data. This is because this element will execute arbitrary JavaScript, and
         * does not have the ability to sanitize or sandbox it.
         *
         * This URL must host the following files from the playground-elements
         * package:
         *   1. playground-service-worker.js
         *   2. playground-service-worker-proxy.html
         *
         * Defaults to the directory containing the script that defines this element
         * on the same origin (typically something like
         * "/node_modules/playground-elements/").
         */
        this.sandboxBaseUrl = `https://unpkg.com/playground-elements@${npmVersion}/`;
        /**
         * The service worker scope to register on
         */
        // TODO: generate this?
        this.sandboxScope = `__playground_swfs_${serviceWorkerHash}/`;
        /**
         * Allow the user to add, remove, and rename files in the project's virtual
         * filesystem. Disabled by default.
         */
        this.editableFileSystem = false;
        /**
         * If true, display a left-hand-side gutter with line numbers. Default false
         * (hidden).
         */
        this.lineNumbers = false;
        /**
         * If true, wrap for long lines. Default false
         */
        this.lineWrapping = false;
        /**
         * If true, allow the user to change the relative size of the LHS editor and
         * RHS preview by clicking and dragging in the space between them.
         */
        this.resizable = false;
        /**
         * How to handle `playground-hide` and `playground-fold` comments.
         *
         * See https://github.com/google/playground-elements#hiding--folding for
         * more details.
         *
         * Options:
         * - on: Hide and fold regions, and hide the special comments.
         * - off: Don't hide or fold regions, but still hide the special comments.
         * - off-visible: Don't hide or fold regions, and show the special comments as
         *   literal text.
         */
        this.pragmas = 'on';
        /**
         * The HTML file used in the preview.
         */
        this.htmlFile = 'index.html';
        /**
         * If true, will disable code completions in the code-editor.
         */
        this.noCompletions = false;
    }
    /**
     * A document-relative path to a project configuration file.
     *
     * When both `projectSrc` and `files` are set, the one set most recently wins.
     * Slotted children win only if both `projectSrc` and `files` are undefined.
     */
    get projectSrc() {
        var _a, _b;
        // To minimize synchronization complexity, we delegate the `projectSrc` and
        // `files` getters/setters directly to our <playground-project>. The only
        // case we need to handle is properties set before upgrade or before we
        // first render the <playground-project>.
        //
        // Note we set `hasChanged: () => false` because we don't need to trigger
        // `update` when this property changes. (Why be a lit property at all?
        // Because we want [1] to respond to attribute changes, and [2] to inherit
        // property values set before upgrade).
        //
        // TODO(aomarks) Maybe a "delegate" decorator for this pattern?
        return (_b = (_a = this._project) === null || _a === void 0 ? void 0 : _a.projectSrc) !== null && _b !== void 0 ? _b : this._projectSrcSetBeforeRender;
    }
    set projectSrc(src) {
        const project = this._project;
        if (project) {
            project.projectSrc = src;
        }
        else {
            this._projectSrcSetBeforeRender = src;
        }
    }
    /**
     * Get or set the project config.
     *
     * When both `projectSrc` and `config` are set, the one set most recently
     * wins. Slotted children win only if both `projectSrc` and `config` are
     * undefined.
     */
    get config() {
        var _a, _b;
        // Note this is declared a @property only to capture properties set before
        // upgrade. Attribute reflection and update lifecycle disabled because they
        // are not needed in this case.
        return (_b = (_a = this._project) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : this._configSetBeforeRender;
    }
    set config(config) {
        const project = this._project;
        if (project) {
            project.config = config;
        }
        else {
            this._configSetBeforeRender = config;
        }
    }
    /**
     * Indicates whether the user has modified, added, or removed any project
     * files. Resets whenever a new project is loaded.
     */
    get modified() {
        var _a, _b;
        return (_b = (_a = this._project) === null || _a === void 0 ? void 0 : _a.modified) !== null && _b !== void 0 ? _b : false;
    }
    render() {
        const projectId = 'project';
        const editorId = 'editor';
        return x `
      <playground-project
        id=${projectId}
        .sandboxBaseUrl=${this.sandboxBaseUrl}
        .sandboxScope=${this.sandboxScope}
      >
        <slot></slot>
      </playground-project>

      <div id="lhs">
        <playground-tab-bar
          part="tab-bar"
          .project=${projectId}
          .editor=${editorId}
          .editableFileSystem=${this.editableFileSystem}
        >
        </playground-tab-bar>

        <playground-file-editor
          id=${editorId}
          part="editor"
          .lineNumbers=${this.lineNumbers}
          .lineWrapping=${this.lineWrapping}
          .project=${projectId}
          .pragmas=${this.pragmas}
          .noCompletions=${this.noCompletions}
        >
        </playground-file-editor>
      </div>

      <div id="rhs">
        ${this.resizable
            ? x `<div
              id="resizeBar"
              @pointerdown=${this._onResizeBarPointerdown}
            ></div>`
            : A}

        <playground-preview
          part="preview"
          exportparts="preview-toolbar,
                       preview-location,
                       preview-reload-button,
                       preview-loading-indicator,
                       diagnostic-tooltip,
                       dialog"
          .htmlFile=${this.htmlFile}
          .project=${projectId}
        ></playground-preview>
      </div>
    `;
    }
    firstUpdated() {
        if (this._configSetBeforeRender) {
            this._project.config = this._configSetBeforeRender;
            this._configSetBeforeRender = undefined;
        }
        if (this._projectSrcSetBeforeRender) {
            this._project.projectSrc = this._projectSrcSetBeforeRender;
            this._projectSrcSetBeforeRender = undefined;
        }
    }
    async update(changedProperties) {
        var _a;
        if (changedProperties.has('resizable') && this.resizable === false) {
            // Note we set this property on the RHS element instead of the host so
            // that when "resizable" is toggled, we don't reset a host value that the
            // user might have set.
            (_a = this._rhs) === null || _a === void 0 ? void 0 : _a.style.removeProperty('--playground-preview-width');
        }
        super.update(changedProperties);
    }
    _onResizeBarPointerdown({ pointerId }) {
        const bar = this._resizeBar;
        bar.setPointerCapture(pointerId);
        const rhsStyle = this._rhs.style;
        const { left: hostLeft, right: hostRight } = this.getBoundingClientRect();
        const hostWidth = hostRight - hostLeft;
        const rhsMinWidth = 100;
        const rhsMaxWidth = hostWidth - 100;
        const onPointermove = (event) => {
            const rhsWidth = Math.min(rhsMaxWidth, Math.max(rhsMinWidth, hostRight - event.clientX));
            const percent = (rhsWidth / hostWidth) * 100;
            rhsStyle.setProperty('--playground-preview-width', `${percent}%`);
        };
        bar.addEventListener('pointermove', onPointermove);
        const onPointerup = () => {
            bar.releasePointerCapture(pointerId);
            bar.removeEventListener('pointermove', onPointermove);
            bar.removeEventListener('pointerup', onPointerup);
        };
        bar.addEventListener('pointerup', onPointerup);
    }
};
PlaygroundIde.styles = i$6 `
    :host {
      display: flex;
      height: 350px;
      min-width: 200px;
      border: var(--playground-border, solid 1px #ddd);
      /* The invisible resize bar has a high z-index so that it's above
      CodeMirror. But we don't want it also above other elements on the page.
      Force a new stacking context. */
      isolation: isolate;
    }

    #lhs {
      display: flex;
      flex-direction: column;
      height: 100%;
      flex: 1;
      min-width: 100px;
      border-radius: inherit;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: var(--playground-border, solid 1px #ddd);
    }

    playground-tab-bar {
      flex-shrink: 0;
    }

    playground-file-editor {
      flex: 1;
      height: calc(100% - var(--playground-bar-height, 40px));
    }

    #rhs {
      height: 100%;
      width: max(100px, var(--playground-preview-width, 30%));
      position: relative;
      border-radius: inherit;
    }

    playground-preview {
      height: 100%;
      width: 100%;
      border-radius: inherit;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    slot {
      display: none;
    }

    #resizeBar {
      position: absolute;
      top: 0;
      left: -5px;
      width: 10px;
      height: 100%;
      z-index: 9;
      cursor: col-resize;
    }

    #resizeOverlay {
      display: none;
    }
    #resizeOverlay.resizing {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99999;
      cursor: col-resize;
    }
  `;
__decorate([
    e$5({ attribute: 'project-src', hasChanged: () => false })
], PlaygroundIde.prototype, "projectSrc", null);
__decorate([
    e$5({ attribute: false, hasChanged: () => false })
], PlaygroundIde.prototype, "config", null);
__decorate([
    e$5({ attribute: 'sandbox-base-url' })
], PlaygroundIde.prototype, "sandboxBaseUrl", void 0);
__decorate([
    e$5({ attribute: 'sandbox-scope' })
], PlaygroundIde.prototype, "sandboxScope", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'editable-file-system' })
], PlaygroundIde.prototype, "editableFileSystem", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'line-numbers' })
], PlaygroundIde.prototype, "lineNumbers", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'line-wrapping' })
], PlaygroundIde.prototype, "lineWrapping", void 0);
__decorate([
    e$5({ type: Boolean })
], PlaygroundIde.prototype, "resizable", void 0);
__decorate([
    e$5()
], PlaygroundIde.prototype, "pragmas", void 0);
__decorate([
    e$5({ attribute: 'html-file' })
], PlaygroundIde.prototype, "htmlFile", void 0);
__decorate([
    e$5({ type: Boolean, attribute: 'no-completions' })
], PlaygroundIde.prototype, "noCompletions", void 0);
__decorate([
    i$2('playground-project')
], PlaygroundIde.prototype, "_project", void 0);
__decorate([
    i$2('#resizeBar')
], PlaygroundIde.prototype, "_resizeBar", void 0);
__decorate([
    i$2('#rhs')
], PlaygroundIde.prototype, "_rhs", void 0);
PlaygroundIde = __decorate([
    e$6('playground-ide')
], PlaygroundIde);

var playgroundIde = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get PlaygroundIde () { return PlaygroundIde; }
});

/**
 * Controller which adds styles to it's host element.
 * Like `static styles = []`, except a controller.
 * Should typically only be used within other controllers.
 */
class StyleController {
    constructor(host, 
    /** These styles will be applied to the host element */
    styles) {
        this.host = host;
        this.styles = styles;
        this.stylesAdopted = false;
        host.addController(this);
    }
    hostConnected() {
        if (this.stylesAdopted || !(this.host.renderRoot instanceof ShadowRoot)) {
            return;
        }
        const styles = [this.styles].flatMap(x => c$1(x)).filter(x => !!x);
        if (e$a) {
            this.host.renderRoot.adoptedStyleSheets = [
                ...styles.map(x => x instanceof CSSStyleSheet ? x : x.styleSheet),
                ...this.host.renderRoot.adoptedStyleSheets ?? [],
            ];
        }
        else {
            styles.forEach(s => {
                const style = document.createElement('style');
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const nonce = window['litNonce'];
                if (nonce !== undefined) {
                    style.setAttribute('nonce', nonce);
                }
                style.textContent = s.cssText;
                this.host.renderRoot.appendChild(style);
            });
        }
        this.stylesAdopted = true;
    }
}

/**
 * Context Protocol
 * @link https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md
 */
/**
 * A function which creates a Context value object
 */
function createContext(name, initialValue) {
    return {
        name,
        initialValue,
    };
}
/**
 * An event fired by a context requester to signal it desires a named context.
 *
 * A provider should inspect the `context` property of the event to determine if it has a value that can
 * satisfy the request, calling the `callback` with the requested value if so.
 *
 * If the requested context event contains a truthy `multiple` value, then a provider can call the callback
 * multiple times if the value is changed, if this is the case the provider should pass a `dispose`
 * method to the callback which requesters can invoke to indicate they no longer wish to receive these updates.
 */
class ContextEvent extends Event {
    constructor(context, callback, multiple) {
        super('context-request', { bubbles: true, composed: true });
        this.context = context;
        this.callback = callback;
        this.multiple = multiple;
    }
}

const CONTEXT_BASE_STYLES = i$6 `:host(:is([color-palette^=dark])){--context:dark;--_context-text:var(--rh-color-text-primary-on-dark, #ffffff)}:host(:is([color-palette^=light],[color-palette=base])){--context:light;--_context-text:var(--rh-color-text-primary-on-light, #151515)}:host(:is([color-palette=lightest])){--_context-background-color:var(--rh-color-surface-lightest, #ffffff)}:host(:is([color-palette=lighter])){--_context-background-color:var(--rh-color-surface-lighter, #f2f2f2)}:host(:is([color-palette=light])){--_context-background-color:var(--rh-color-surface-light, #e0e0e0)}:host(:is([color-palette=base])){--_context-background-color:var(--rh-color-surface-lightest, #ffffff)}:host(:is([color-palette=dark])){--_context-background-color:var(--rh-color-surface-dark, #383838)}:host(:is([color-palette=darker])){--_context-background-color:var(--rh-color-surface-darker, #1f1f1f)}:host(:is([color-palette=darkest])){--_context-background-color:var(--rh-color-surface-darkest, #151515)}`;
/**
* Maps from consumer host elements to already-fired request events
* We hold these in memory in order to re-fire the events every time a new provider connects.
* This is a hedge against cases where an early-upgrading provider claims an early-upgrading
* consumer before a late-upgrading provider has a chance to register as the rightful provider
* @example Monkey-in-the-middle error
*          In this example, we must re-fire the event from eager-consumer when late-provider
*          upgrades, so as to ensure that late-provider claims it for itself
*          ```html
*          <early-provider>
*            <late-provider>
*              <eager-consumer>
*            </late-provider>
*          </early-provider>
*          ```
*/
const contextEvents = new Map();
/**
 * Color context is derived from the `--context` css custom property,
 * which *must* be set by the `color-palette` attribute
 * This property is set (in most cases) in `color-context.scss`,
 * which is added to components via `StyleController`.
 *
 * In this way, we avoid the need to execute javascript in order to convert from a given
 * `ColorPalette` to a given `ColorTheme`, since those relationships are specified in CSS.
 */
class ColorContextController {
    constructor(host, options) {
        this.host = host;
        /** Prefix for colour context. Set this in Options to create a separate context */
        this.prefix = 'rh-';
        /** The last-known color context on the host */
        this.last = null;
        this.prefix = options?.prefix ?? 'rh';
        this.context = createContext(`${this.prefix}-color-context`);
        this.styleController = new StyleController(host, CONTEXT_BASE_STYLES);
        host.addController(this);
    }
}

var _ColorContextConsumer_instances, _ColorContextConsumer_propertyName, _ColorContextConsumer_propertyValue_get, _ColorContextConsumer_propertyValue_set, _ColorContextConsumer_dispose, _ColorContextConsumer_override, _ColorContextConsumer_contextCallback;
/**
 * A color context consumer receives sets it's context property based on the context provided
 * by the closest color context provider.
 * The consumer has no direct access to the context, it must receive it from the provider.
 */
class ColorContextConsumer extends ColorContextController {
    get value() {
        return __classPrivateFieldGet(this, _ColorContextConsumer_instances, "a", _ColorContextConsumer_propertyValue_get);
    }
    constructor(host, options) {
        super(host, options);
        this.options = options;
        _ColorContextConsumer_instances.add(this);
        _ColorContextConsumer_propertyName.set(this, void 0);
        _ColorContextConsumer_dispose.set(this, void 0);
        _ColorContextConsumer_override.set(this, null);
        __classPrivateFieldSet(this, _ColorContextConsumer_propertyName, options?.propertyName ?? 'on', "f");
    }
    /** When a consumer connects, it requests colour context from the closest provider. */
    async hostConnected() {
        const event = new ContextEvent(this.context, e => __classPrivateFieldGet(this, _ColorContextConsumer_instances, "m", _ColorContextConsumer_contextCallback).call(this, e), true);
        __classPrivateFieldSet(this, _ColorContextConsumer_override, __classPrivateFieldGet(this, _ColorContextConsumer_instances, "a", _ColorContextConsumer_propertyValue_get), "f");
        contextEvents.set(this.host, event);
        await this.host.updateComplete;
        this.host.dispatchEvent(event);
        __classPrivateFieldSet(this, _ColorContextConsumer_override, null, "f");
    }
    /** When a consumer disconnects, it's removed from the list of consumers. */
    hostDisconnected() {
        __classPrivateFieldGet(this, _ColorContextConsumer_dispose, "f")?.call(this);
        __classPrivateFieldSet(this, _ColorContextConsumer_dispose, undefined, "f");
        contextEvents.delete(this.host);
    }
    /** Sets the `on` attribute on the host and any children that requested multiple updates */
    update(next) {
        const { last } = this;
        if (!__classPrivateFieldGet(this, _ColorContextConsumer_override, "f") && next !== last) {
            this.last = next;
            __classPrivateFieldSet(this, _ColorContextConsumer_instances, (next ?? undefined), "a", _ColorContextConsumer_propertyValue_set);
        }
        this.options?.callback?.(__classPrivateFieldGet(this, _ColorContextConsumer_instances, "a", _ColorContextConsumer_propertyValue_get));
    }
}
_ColorContextConsumer_propertyName = new WeakMap(), _ColorContextConsumer_dispose = new WeakMap(), _ColorContextConsumer_override = new WeakMap(), _ColorContextConsumer_instances = new WeakSet(), _ColorContextConsumer_propertyValue_get = function _ColorContextConsumer_propertyValue_get() {
    return this.host[__classPrivateFieldGet(this, _ColorContextConsumer_propertyName, "f")];
}, _ColorContextConsumer_propertyValue_set = function _ColorContextConsumer_propertyValue_set(x) {
    this.host[__classPrivateFieldGet(this, _ColorContextConsumer_propertyName, "f")] = x;
    this.host.requestUpdate();
}, _ColorContextConsumer_contextCallback = function _ColorContextConsumer_contextCallback(value, dispose) {
    // protect against changing providers
    if (dispose && dispose !== __classPrivateFieldGet(this, _ColorContextConsumer_dispose, "f")) {
        __classPrivateFieldGet(this, _ColorContextConsumer_dispose, "f")?.call(this);
        __classPrivateFieldSet(this, _ColorContextConsumer_dispose, dispose, "f");
    }
    this.update(value);
};
function colorContextConsumer(options) {
    return function (proto, _propertyName) {
        const propertyName = _propertyName;
        proto.constructor.addInitializer(instance => {
            const controller = new ColorContextConsumer(instance, { propertyName, ...options });
            // @ts-expect-error: this assignment is strictly for debugging purposes
            instance.__DEBUG_colorContextConsumer = controller;
        });
    };
}

function isARIAMixinProp(key) {
    return key === 'role' || key.startsWith('aria');
}
class InternalsController {
    #internals;
    #formDisabled = false;
    /** True when the control is disabled via it's containing fieldset element */
    get formDisabled() {
        return this.host.matches(':disabled') || this.#formDisabled;
    }
    static { this.protos = new WeakMap(); }
    get labels() {
        return this.#internals.labels;
    }
    get validity() {
        return this.#internals.validity;
    }
    constructor(host, options) {
        this.host = host;
        this.#internals = host.attachInternals();
        // We need to polyfill :disabled
        // see https://github.com/calebdwilliams/element-internals-polyfill/issues/88
        const orig = host.formDisabledCallback;
        host.formDisabledCallback = disabled => {
            this.#formDisabled = disabled;
            orig?.call(host, disabled);
        };
        // proxy the internals object's aria prototype
        for (const key of Object.keys(Object.getPrototypeOf(this.#internals))) {
            if (isARIAMixinProp(key)) {
                Object.defineProperty(this, key, {
                    get() {
                        return this.#internals[key];
                    },
                    set(value) {
                        this.#internals[key] = value;
                        this.host.requestUpdate();
                    }
                });
            }
        }
        for (const [key, val] of Object.entries(options ?? {})) {
            if (isARIAMixinProp(key)) {
                this[key] = val;
            }
        }
    }
    setFormValue(...args) {
        return this.#internals.setFormValue(...args);
    }
    setValidity(...args) {
        return this.#internals.setValidity(...args);
    }
    checkValidity(...args) {
        return this.#internals.checkValidity(...args);
    }
    reportValidity(...args) {
        return this.#internals.reportValidity(...args);
    }
    submit() {
        this.#internals.form?.requestSubmit();
    }
    reset() {
        this.#internals.form?.reset();
    }
}

var _RhButton_instances, _RhButton_hasIcon_get, _RhButton_internals, _RhButton_onClick, _RhButton_renderDefaultIcon;
const styles$2 = i$6 `:host{display:inline-block;height:max-content}:host([hidden]){display:none!important}[hidden]{display:none!important}button{cursor:pointer;position:relative;font-family:inherit;border-width:0;border-style:solid;border-radius:var(--rh-border-radius-default,3px);color:var(--_color);background-color:var(--_background-color);font-size:var(--rh-font-size-body-text-md, 1rem);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text, 1.5);padding-block:var(--rh-space-sm,6px);padding-inline:var(--rh-space-lg,16px);outline-offset:var(--rh-length-4xs,1px);--_color:var(--_default-color, var(--_primary-color));--_background-color:var(--_default-background-color, var(--_primary-background-color));--_border-color:var(--_default-border-color, var(--_primary-border-color));--_border-width:var(--_default-border-width, var(--_primary-border-width))}button:after{position:absolute;inset:0;content:"";border-style:solid;border-color:var(--_border-color);border-width:var(--_border-width);border-radius:var(--rh-border-radius-default,3px)}:host(:is(:disabled,[aria-disabled=true])),:host(:is(:disabled,[aria-disabled=true])) #container,:host(:is(:disabled,[aria-disabled=true])) button,:host(:is(:disabled,[aria-disabled=true])[danger]) button,:host(:is(:disabled,[aria-disabled=true])[variant=link]) button{pointer-events:none;cursor:default}[part=icon]{display:none;pointer-events:none}.hasIcon{position:relative;display:flex;align-items:center}.hasIcon [part=icon]{display:inline-flex;align-items:center;position:absolute;width:16px}[part=icon] ::slotted(*){width:16px;max-width:16px;height:16px;max-height:16px}.hasIcon button{position:absolute;inset:0}.light{--_primary-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-background-color:var(--rh-color-interactive-blue-darker, #0066cc);--_primary-border-color:transparent;--_primary-border-width:var(--rh-border-width-sm, 1px);--_primary-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-active-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_primary-active-border-width:var(--rh-border-width-sm, 1px);--_primary-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-focus-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_primary-focus-border-width:var(--rh-border-width-md, 2px);--_primary-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-hover-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_primary-hover-border-width:var(--rh-border-width-sm, 1px);--_danger-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-background-color:#c9190b;--_danger-border-color:transparent;--_danger-border-width:var(--rh-border-width-sm, 1px);--_danger-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-active-background-color:#a30000;--_danger-active-border-color:transparent;--_danger-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-focus-background-color:#a30000;--_danger-focus-border-color:transparent;--_danger-focus-border-width:var(--rh-border-width-md, 2px);--_danger-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-hover-background-color:#a30000;--_danger-hover-border-color:transparent;--_secondary-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-danger-color:var(--rh-color-red-600, #be0000);--_secondary-background-color:transparent;--_secondary-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-border-width:var(--rh-border-width-sm, 1px);--_secondary-active-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-active-background-color:transparent;--_secondary-active-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-active-border-width:var(--rh-border-width-md, 2px);--_secondary-focus-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-focus-background-color:transparent;--_secondary-focus-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-focus-border-width:var(--rh-border-width-md, 2px);--_secondary-hover-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-hover-background-color:transparent;--_secondary-hover-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-hover-border-width:var(--rh-border-width-md, 2px);--_tertiary-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-background-color:transparent;--_tertiary-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-border-width:var(--rh-border-width-sm, 1px);--_tertiary-active-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-active-background-color:transparent;--_tertiary-active-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-active-border-width:var(--rh-border-width-md, 2px);--_tertiary-focus-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-focus-background-color:transparent;--_tertiary-focus-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-focus-border-width:var(--rh-border-width-md, 2px);--_tertiary-hover-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-hover-background-color:transparent;--_tertiary-hover-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-hover-border-width:var(--rh-border-width-md, 2px);--_link-color:var(--rh-color-interactive-blue-darker, #0066cc);--_link-background-color:transparent;--_link-active-color:var(--rh-color-blue-600, #002952);--_link-active-background-color:transparent;--_link-focus-color:var(--rh-color-blue-600, #002952);--_link-focus-background-color:transparent;--_link-focus-outline-color:var(--rh-color-interactive-blue-darker, #0066cc);--_link-hover-color:var(--rh-color-blue-600, #002952);--_link-hover-background-color:transparent;--_close-color:var(--rh-color-text-secondary-on-light, #4d4d4d);--_close-background-color:transparent;--_close-active-color:var(--rh-color-icon-secondary-on-light, #151515);--_close-active-background-color:transparent;--_close-focus-color:var(--rh-color-icon-secondary-on-light, #151515);--_close-focus-background-color:transparent;--_close-focus-outline-color:var(--rh-color-interactive-blue-darker, #0066cc);--_close-hover-color:var(--rh-color-icon-secondary-on-light, #151515);--_close-hover-background-color:transparent;--_gray-90-rgb:var(--rh-color-gray-90-rgb, 21 21 21);--_play-color:var(--rh-color-icon-secondary-on-dark, #ffffff);--_play-background-color:rgb(var(--_gray-90-rgb) / var(--rh-opacity-50, 50%));--_play-active-background-color:rgb(var(--_gray-90-rgb) / var(--rh-opacity-80, 80%));--_play-focus-background-color:rgb(var(--_gray-90-rgb) / var(--rh-opacity-80, 80%));--_play-focus-outline-color:var(--rh-color-interactive-blue-darker, #0066cc);--_play-hover-background-color:rgb(var(--_gray-90-rgb) / var(--rh-opacity-80, 80%))}.dark{--_focus-outline-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_primary-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-background-color:var(--rh-color-interactive-blue-darker, #0066cc);--_primary-border-color:transparent;--_primary-border-width:var(--rh-border-width-sm, 1px);--_primary-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-active-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_primary-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-focus-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_primary-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-hover-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_danger-color:var(--rh-color-text-primary-on-light, #151515);--_danger-background-color:#fe5142;--_danger-border-color:transparent;--_danger-border-width:var(--rh-border-width-sm, 1px);--_danger-active-color:var(--rh-color-text-primary-on-light, #151515);--_danger-active-background-color:#ff7468;--_danger-active-border-color:transparent;--_danger-focus-color:var(--rh-color-text-primary-on-light, #151515);--_danger-focus-background-color:#ff7468;--_danger-focus-border-color:transparent;--_danger-hover-color:var(--rh-color-text-primary-on-light, #151515);--_danger-hover-background-color:#ff7468;--_danger-hover-border-color:transparent;--_secondary-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-danger-color:var(--rh-color-red-200, #fab6b6);--_secondary-background-color:transparent;--_secondary-border-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-border-width:var(--rh-border-width-sm, 1px);--_secondary-active-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-active-background-color:transparent;--_secondary-active-border-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-active-border-width:var(--rh-border-width-md, 2px);--_secondary-focus-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-focus-background-color:transparent;--_secondary-focus-border-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-focus-border-width:var(--rh-border-width-md, 2px);--_secondary-hover-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-hover-background-color:transparent;--_secondary-hover-border-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-hover-border-width:var(--rh-border-width-md, 2px);--_tertiary-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-background-color:transparent;--_tertiary-border-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-border-width:var(--rh-border-width-sm, 1px);--_tertiary-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-active-background-color:transparent;--_tertiary-active-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--_tertiary-active-border-width:var(--rh-border-width-md, 2px);--_tertiary-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-focus-background-color:transparent;--_tertiary-focus-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--_tertiary-focus-border-width:var(--rh-border-width-md, 2px);--_tertiary-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-hover-background-color:transparent;--_tertiary-hover-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--_tertiary-hover-border-width:var(--rh-border-width-md, 2px);--_link-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_link-background-color:transparent;--_link-active-color:var(--rh-color-interactive-blue-lightest, #bee1f4);--_link-active-background-color:transparent;--_link-focus-color:var(--rh-color-interactive-blue-lightest, #bee1f4);--_link-focus-background-color:transparent;--_link-focus-outline-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_link-hover-color:var(--rh-color-interactive-blue-lightest, #bee1f4);--_link-hover-background-color:transparent;--_close-color:var(--rh-color-text-secondary-on-dark, #c7c7c7);--_close-background-color:transparent;--_close-focus-background-color:transparent;--_close-focus-outline-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_white-rgb:var(--rh-color-white-rgb, 255 255 255);--_play-color:var(--rh-color-icon-secondary-on-light, #151515);--_play-background-color:rgb(var(--_white-rgb) / var(--rh-opacity-50, 50%));--_play-active-background-color:rgb(var(--_white-rgb) / var(--rh-opacity-80, 80%));--_play-focus-background-color:rgb(var(--_white-rgb) / var(--rh-opacity-80, 80%));--_play-focus-outline-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_play-hover-background-color:rgb(var(--_white-rgb) / var(--rh-opacity-80, 80%))}#rhds-container,:host{display:contents}:host([hidden]),[hidden]{display:none!important}rh-icon{color:currentcolor}button:active{--_color:var(--_active-color, var(--_primary-active-color));--_background-color:var(--_active-background-color, var(--_primary-active-background-color));--_border-width:var(var(--_active-border-width), var(--_primary-active-border-width))}button:focus{--_color:var(--_focus-color, var(--_primary-focus-color));--_background-color:var(--_focus-background-color, var(--_primary-focus-background-color));--_border-width:var(--_focus-border-width, var(--_primary-focus-border-width))}button:focus:after{border-width:var(--_border-width,var(--rh-border-width-md,2px))}button:active,button:focus{outline:var(--rh-border-width-md,2px) solid var(--_focus-outline-color,var(--rh-color-interactive-blue-darker,#0066cc))}button:hover{--_color:var(--_hover-color, var(--_primary-hover-color));--_background-color:var(--_hover-background-color, var(--_primary-hover-background-color));--_border-width:var(--_hover-border-width, var(--_primary-hover-border-width))}:host([danger]) button{--_default-color:var(--_danger-color);--_default-background-color:var(--_danger-background-color);--_default-border-color:var(--_danger-border-color);--_active-color:var(--_danger-active-color);--_active-background-color:var(--_danger-active-background-color);--_active-border-color:var(--_danger-active-border-color);--_focus-color:var(--_danger-focus-color);--_focus-background-color:var(--_danger-focus-background-color);--_focus-border-color:var(--_danger-focus-border-color);--_hover-color:var(--_danger-hover-color);--_hover-background-color:var(--_danger-hover-background-color);--_hover-border-color:var(--_danger-hover-border-color)}:host([variant=secondary i]) button{--_default-color:var(--_secondary-color);--_default-background-color:var(--_secondary-background-color);--_default-border-color:var(--_secondary-border-color);--_default-border-width:var(--_secondary-border-width);--_active-color:var(--_secondary-active-color);--_active-background-color:var(--_secondary-active-background-color);--_active-border-color:var(--_secondary-active-border-color);--_active-border-width:var(--_secondary-active-border-width);--_focus-color:var(--_secondary-focus-color);--_focus-background-color:var(--_secondary-focus-background-color);--_focus-border-color:var(--_secondary-focus-border-color);--_hover-color:var(--_secondary-hover-color);--_hover-background-color:var(--_secondary-hover-background-color);--_hover-border-color:var(--_secondary-hover-border-color);--_hover-border-width:var(--_secondary-hover-border-width)}:host([variant=tertiary i]) button{--_default-color:var(--_tertiary-color);--_default-background-color:var(--_tertiary-background-color);--_default-border-color:var(--_tertiary-border-color);--_active-color:var(--_tertiary-active-color);--_active-background-color:var(--_tertiary-active-background-color);--_active-border-color:var(--_tertiary-active-border-color);--_active-border-width:var(--_tertiary-active-border-width);--_focus-color:var(--_tertiary-focus-color);--_focus-background-color:var(--_tertiary-focus-background-color);--_focus-border-color:var(--_tertiary-focus-border-color);--_hover-color:var(--_tertiary-hover-color);--_hover-background-color:var(--_tertiary-hover-background-color);--_hover-border-color:var(--_tertiary-hover-border-color);--_hover-border-width:var(--_tertiary-hover-border-width)}:host([variant=link i]) button{display:inline;--_default-color:var(--_link-color);--_default-background-color:var(--_link-background-color);--_default-border-color:transparent;--_active-color:var(--_link-active-color);--_active-background-color:var(--_link-active-background-color);--_active-border-color:transparent;--_focus-color:var(--_link-focus-color);--_focus-background-color:var(--_link-focus-background-color);--_focus-border-color:transparent;--_focus-outline-color:var(--_link-focus-outline-color);--_hover-color:var(--_link-hover-color);--_hover-background-color:var(--_link-hover-background-color);--_hover-border-color:transparent}:host([variant=close i]) button{--_default-color:var(--_close-color);--_default-background-color:var(--_close-background-color);--_active-color:var(--_close-active-color);--_active-background-color:var(--_close-active-background-color);--_active-border-color:transparent;--_focus-color:var(--_close-focus-color);--_focus-background-color:var(--_close-focus-background-color);--_focus-border-color:transparent;--_focus-outline-color:var(--_close-focus-outline-color);--_hover-color:var(--_close-hover-color);--_hover-background-color:transparent;--_hover-border-color:transparent;width:var(--rh-length-lg,16px);aspect-ratio:1}:host([variant=play i]) button{border-radius:100%;width:var(--rh-length-4xl,64px);--_default-color:var(--_play-color);--_default-background-color:var(--_play-background-color);--_default-background-opacity:var(--_play-background-opacity);--_active-color:var(--_play-color);--_active-background-color:var(--_play-active-background-color);--_active-background-opacity:var(--_play-active-background-opacity);--_focus-color:var(--_play-color);--_focus-background-color:var(--_play-focus-background-color);--_focus-background-opacity:var(--_play-focus-background-opacity);--_focus-outline-color:var(--_play-focus-outline-color);--_hover-color:var(--_play-color);--_hover-background-color:var(--_play-hover-background-color);--_hover-background-opacity:var(--_play-hover-background-opacity);--_icon-size:var(--rh-size-icon-04, 40px)}:host(:is([variant=play i],[variant=close i])) button{aspect-ratio:1;display:inline-flex;align-items:center;justify-content:center;padding:0}:host(:is([variant=play i],[variant=close i])) [part=icon]{display:inline-block;width:var(--_icon-size,var(--rh-size-icon-01,16px));height:var(--_icon-size,var(--rh-size-icon-01,16px))}:host(:is([variant=play i],[variant=close i])) svg{fill:currentcolor;stroke:currentcolor}:host(:is([variant=play i],[variant=close i])) #text{display:inline;position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}:host(:disabled) button,:host(:disabled[danger]) button,:host(:disabled[variant=link]) button,button[disabled]{pointer-events:none;cursor:default;--_color:var(--rh-color-text-secondary-on-light, #4d4d4d);--_background-color:var(--rh-color-surface-light, #e0e0e0)}:host(:disabled) button:after{--_border-color:transparent}:host([variant=secondary i][danger]) button{--_default-color:var(--_secondary-danger-color);--_default-background-color:transparent;--_default-border-color:var(--_danger-background-color);--_active-color:var(--_danger-background-color);--_active-background-color:transparent;--_active-border-color:var(--_danger-active-border-color);--_focus-color:var(--_secondary-danger-color);--_focus-background-color:transparent;--_focus-border-color:var(--_danger-focus-border-color);--_hover-color:var(--_danger-background-color);--_hover-background-color:transparent;--_hover-border-color:var(--_danger-hover-border-color)}:host(:not([disabled])) .hasIcon [part=icon]{cursor:pointer}`;
/**
 * A button is clickable text or an icon that triggers an action on the page or in the background. Depending on the action, content, and hierarchy, a button can be used on its own or grouped with other buttons.
 *
 * @summary Triggers actions on the page or in the background
 *
 * @csspart button - Internal button element
 * @csspart icon - Container for the icon slot
 *
 * @slot icon - Contains the button's icon or state indicator, e.g. a spinner.
 * @slot - Contains button text
 */
let RhButton = class RhButton extends s$1 {
    constructor() {
        super(...arguments);
        _RhButton_instances.add(this);
        /** Disables the button */
        this.disabled = false;
        /**
         * Changes the style of the button.
         * - Primary: Used for the most important call to action on a page. Try to
         *   limit primary buttons to one per page.
         * - Secondary: Use secondary buttons for general actions on a page, that
         *   don’t require as much emphasis as primary button actions. For example,
         *   you can use secondary buttons where there are multiple actions, like in
         *   toolbars or data lists.
         * - Tertiary: Tertiary buttons are flexible and can be used as needed.
         */
        this.variant = 'primary';
        /**
         * Use danger buttons for actions a user can take that are potentially
         * destructive or difficult/impossible to undo, like deleting or removing
         * user data.
         */
        this.danger = false;
        _RhButton_internals.set(this, new InternalsController(this));
    }
    willUpdate() {
        const variant = this.variant.toLowerCase();
        switch (variant) {
            case 'close':
            case 'play':
                this.icon = variant;
                break;
        }
    }
    render() {
        const { on = 'light' } = this;
        const hasIcon = __classPrivateFieldGet(this, _RhButton_instances, "a", _RhButton_hasIcon_get);
        return x `
      <button aria-label="${l$1(this.label)}"
              class="${o$3({ hasIcon, [on]: !!on })}"
              part="button"
              type="${l$1(this.type)}"
              value="${l$1(this.value)}"
              @click="${__classPrivateFieldGet(this, _RhButton_instances, "m", _RhButton_onClick)}"
              ?disabled="${this.disabled || __classPrivateFieldGet(this, _RhButton_internals, "f").formDisabled}">
        <slot id="icon" part="icon" aria-hidden="true" name="icon">${__classPrivateFieldGet(this, _RhButton_instances, "m", _RhButton_renderDefaultIcon).call(this)}</slot>
        <slot id="text" aria-hidden=${String(!!this.label)}></slot>
      </button>
    `;
    }
    async formDisabledCallback() {
        await this.updateComplete;
        this.requestUpdate();
    }
};
_RhButton_internals = new WeakMap(), _RhButton_instances = new WeakSet(), _RhButton_hasIcon_get = function _RhButton_hasIcon_get() { return !!this.icon; }, _RhButton_onClick = function _RhButton_onClick() {
    switch (this.type) {
        case 'reset':
            return __classPrivateFieldGet(this, _RhButton_internals, "f").reset();
        default:
            return __classPrivateFieldGet(this, _RhButton_internals, "f").submit();
    }
}, _RhButton_renderDefaultIcon = function _RhButton_renderDefaultIcon() {
    switch (this.variant.toLowerCase()) {
        // TODO: revisit when rh-icon is ready
        // return html`<rh-icon icon=${this.variant}></rh-icon>`;
        case 'close':
            return x `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M12.54 11.46 8.92 7.83l3.45-3.46a.63.63 0 0 0 0-.88.61.61 0 0 0-.88 0L8 6.94 4.54 3.46a.61.61 0 0 0-.88 0 .63.63 0 0 0 0 .88l3.49 3.49-3.66 3.66a.61.61 0 0 0 0 .88.63.63 0 0 0 .88 0L8 8.71l3.63 3.63a.63.63 0 0 0 .88 0 .61.61 0 0 0 .03-.88Z"/>
          </svg>
        `;
        case 'play':
            return x `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="m12.3 7.5-9-5c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v10c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l9-5c.2-.1.3-.3.3-.5s-.1-.4-.3-.5z"/>
          </svg>
        `;
        default:
            return '';
    }
};
RhButton.styles = [styles$2];
RhButton.formAssociated = true;
RhButton.shadowRootOptions = { ...s$1.shadowRootOptions, delegatesFocus: true };
__decorate([
    e$5({ reflect: true, type: Boolean })
], RhButton.prototype, "disabled", void 0);
__decorate([
    e$5({ reflect: true })
], RhButton.prototype, "type", void 0);
__decorate([
    e$5()
], RhButton.prototype, "label", void 0);
__decorate([
    e$5()
], RhButton.prototype, "value", void 0);
__decorate([
    e$5()
], RhButton.prototype, "name", void 0);
__decorate([
    e$5()
], RhButton.prototype, "icon", void 0);
__decorate([
    e$5({ reflect: true })
], RhButton.prototype, "variant", void 0);
__decorate([
    e$5({ type: Boolean, reflect: true })
], RhButton.prototype, "danger", void 0);
__decorate([
    colorContextConsumer()
], RhButton.prototype, "on", void 0);
RhButton = __decorate([
    e$6('rh-button')
], RhButton);

class Logger {
    static { this.instances = new WeakMap(); }
    get prefix() {
        return `[${this.host.localName}${this.host.id ? `#${this.host.id}` : ''}]`;
    }
    /**
     * A boolean value that indicates if the logging should be printed to the console; used for debugging.
     * For use in a JS file or script tag; can also be added in the constructor of a component during development.
     * @example Logger.debugLog(true);
     * @tags debug
     */
    static debugLog(preference = null) {
        // wrap localStorage references in a try/catch; merely referencing it can
        // throw errors in some locked down environments
        try {
            if (preference !== null) {
                Logger.logDebug = !!preference;
                localStorage.pfeLog = !!preference;
            }
            return localStorage.pfeLog === 'true';
        }
        catch (e) {
            return Logger.logDebug;
        }
    }
    /**
     * A logging wrapper which checks the debugLog boolean and prints to the console if true.
     *
     * @example Logger.log("Hello");
     */
    static log(...msgs) {
        if (Logger.debugLog()) {
            // eslint-disable-next-line no-console
            console.log(...msgs);
        }
    }
    /**
     * A console warning wrapper which formats your output with useful debugging information.
     *
     * @example Logger.warn("Hello");
     */
    static warn(...msgs) {
        console.warn(...msgs); // eslint-disable-line no-console
    }
    /**
     * A console error wrapper which formats your output with useful debugging information.
     * For use inside a component's function.
     * @example Logger.error("Hello");
     */
    static error(...msgs) {
        console.error([...msgs].join(' ')); // eslint-disable-line no-console
    }
    /**
     * Local logging that outputs the tag name as a prefix automatically
     *
     * @example this.logger.log("Hello");
     */
    log(...msgs) {
        Logger.log(this.prefix, ...msgs);
    }
    /**
     * Local warning wrapper that outputs the tag name as a prefix automatically.
     * For use inside a component's function.
     * @example this.logger.warn("Hello");
     */
    warn(...msgs) {
        Logger.warn(this.prefix, ...msgs);
    }
    /**
     * Local error wrapper that outputs the tag name as a prefix automatically.
     * For use inside a component's function.
     * @example this.logger.error("Hello");
     */
    error(...msgs) {
        Logger.error(this.prefix, ...msgs);
    }
    constructor(host) {
        this.host = host;
        // We only need one logger instance per host
        if (Logger.instances.get(host)) {
            return Logger.instances.get(host);
        }
        host.addController(this);
        Logger.instances.set(host, this);
    }
    hostConnected() {
        this.log('connected');
    }
}

var _ColorContextProvider_instances, _ColorContextProvider_attribute, _ColorContextProvider_callbacks, _ColorContextProvider_mo, _ColorContextProvider_style, _ColorContextProvider_initialized, _ColorContextProvider_logger, _ColorContextProvider_consumer, _ColorContextProvider_local_get, _ColorContextProvider_isColorContextEvent, _ColorContextProvider_onChildContextEvent;
/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
class ColorContextProvider extends ColorContextController {
    get local() {
        return __classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_local_get);
    }
    get value() {
        return __classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_local_get) ?? __classPrivateFieldGet(this, _ColorContextProvider_consumer, "f").value;
    }
    constructor(host, options) {
        const { attribute = 'color-palette', ...rest } = options ?? {};
        super(host, rest);
        _ColorContextProvider_instances.add(this);
        _ColorContextProvider_attribute.set(this, void 0);
        /** Cache of context callbacks. Call each to update consumers */
        _ColorContextProvider_callbacks.set(this, new Set());
        /** Mutation observer which updates consumers when `color-palette` attribute change. */
        _ColorContextProvider_mo.set(this, new MutationObserver(() => this.update()));
        /**
         * Cached (live) computed style declaration
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
         */
        _ColorContextProvider_style.set(this, void 0);
        _ColorContextProvider_initialized.set(this, false);
        _ColorContextProvider_logger.set(this, void 0);
        _ColorContextProvider_consumer.set(this, void 0);
        __classPrivateFieldSet(this, _ColorContextProvider_consumer, new ColorContextConsumer(host, { callback: value => this.update(value) }), "f");
        __classPrivateFieldSet(this, _ColorContextProvider_logger, new Logger(host), "f");
        __classPrivateFieldSet(this, _ColorContextProvider_style, window.getComputedStyle(host), "f");
        __classPrivateFieldSet(this, _ColorContextProvider_attribute, attribute, "f");
        if (__classPrivateFieldGet(this, _ColorContextProvider_attribute, "f") !== 'color-palette') {
            __classPrivateFieldGet(this, _ColorContextProvider_logger, "f").warn('color context currently supports the `color-palette` attribute only.');
        }
    }
    /**
       * When a context provider connects, it listens for context-request events
       * it also fires all previously fired context-request events from their hosts,
       * in case this context provider upgraded after and is closer to a given consumer.
       */
    async hostConnected() {
        this.host.addEventListener('context-request', e => __classPrivateFieldGet(this, _ColorContextProvider_instances, "m", _ColorContextProvider_onChildContextEvent).call(this, e));
        __classPrivateFieldGet(this, _ColorContextProvider_mo, "f").observe(this.host, { attributes: true, attributeFilter: [__classPrivateFieldGet(this, _ColorContextProvider_attribute, "f")] });
        for (const [host, fired] of contextEvents) {
            host.dispatchEvent(fired);
        }
        await this.host.updateComplete;
        this.update();
    }
    hostUpdated() {
        __classPrivateFieldSet(this, _ColorContextProvider_initialized, __classPrivateFieldGet(this, _ColorContextProvider_initialized, "f") || (this.update(), true), "f");
        if (__classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_local_get) && this.value !== __classPrivateFieldGet(this, _ColorContextProvider_consumer, "f").value) {
            __classPrivateFieldGet(this, _ColorContextProvider_consumer, "f").update(__classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_local_get));
            this.update();
        }
    }
    /**
     * When a context provider disconnects, it disconnects its mutation observer
     */
    hostDisconnected() {
        __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f").forEach(x => __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f").delete(x));
        __classPrivateFieldGet(this, _ColorContextProvider_mo, "f").disconnect();
    }
    /** Calls the context callback for all consumers */
    async update(force) {
        const { value } = this;
        for (const cb of __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f")) {
            cb(force ?? value);
        }
    }
}
_ColorContextProvider_attribute = new WeakMap(), _ColorContextProvider_callbacks = new WeakMap(), _ColorContextProvider_mo = new WeakMap(), _ColorContextProvider_style = new WeakMap(), _ColorContextProvider_initialized = new WeakMap(), _ColorContextProvider_logger = new WeakMap(), _ColorContextProvider_consumer = new WeakMap(), _ColorContextProvider_instances = new WeakSet(), _ColorContextProvider_local_get = function _ColorContextProvider_local_get() {
    return ColorContextProvider
        .contexts.get(this.host.getAttribute(__classPrivateFieldGet(this, _ColorContextProvider_attribute, "f")) ?? '');
}, _ColorContextProvider_isColorContextEvent = function _ColorContextProvider_isColorContextEvent(event) {
    return (event.target !== this.host &&
        event.context.name === this.context.name);
}, _ColorContextProvider_onChildContextEvent = 
/**
 * Provider part of context API
 * When a child connects, claim its context-request event
 * and add its callback to the Set of children if it requests multiple updates
 */
async function _ColorContextProvider_onChildContextEvent(event) {
    // only handle ContextEvents relevant to colour context
    if (__classPrivateFieldGet(this, _ColorContextProvider_instances, "m", _ColorContextProvider_isColorContextEvent).call(this, event)) {
        // claim the context-request event for ourselves (required by context protocol)
        event.stopPropagation();
        // Run the callback to initialize the child's colour-context
        event.callback(this.value);
        // Cache the callback for future updates, if requested
        if (event.multiple) {
            __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f").add(event.callback);
        }
    }
};
ColorContextProvider.contexts = new Map(Object.entries({
    darkest: 'dark',
    darker: 'dark',
    dark: 'dark',
    light: 'light',
    lighter: 'light',
    lightest: 'light',
}));
/** Makes this element a color context provider which updates its consumers when the decorated field changes */
function colorContextProvider(options) {
    return function (proto, _propertyName) {
        const propertyName = _propertyName;
        const klass = proto.constructor;
        const propOpts = klass.getPropertyOptions(_propertyName);
        const attribute = typeof propOpts.attribute === 'boolean' ? undefined : propOpts.attribute;
        klass.addInitializer(instance => {
            const controller = new ColorContextProvider(instance, { propertyName, attribute, ...options });
            // @ts-expect-error: this assignment is strictly for debugging purposes
            instance.__DEBUG_colorContextProvider = controller;
        });
    };
}

const styles$1 = i$6 `:host{display:inline-block;width:min-content;min-height:0;aspect-ratio:1/1}svg{overflow:hidden}circle{width:100%;height:100%;transform-origin:50% 50%;stroke-linecap:round;stroke-dasharray:283;stroke-dashoffset:280}`;
/**
 * Base spinner class
 *
 * @cssprop {<length>} --pf-c-spinner--diameter                      {@default `3.375rem`}
 * @cssprop {<length>} --pf-c-spinner--Width                         {@default `3.375rem`}
 * @cssprop {<length>} --pf-c-spinner--Height                        {@default `3.375rem`}
 * @cssprop {<color>}  --pf-c-spinner--Color                         {@default `#06c`}
 * @cssprop {<length>} --pf-c-spinner--m-sm--diameter                {@default `0.625rem`}
 * @cssprop {<length>} --pf-c-spinner--m-md--diameter                {@default `1.125rem`}
 * @cssprop {<length>} --pf-c-spinner--m-lg--diameter                {@default `1.5rem`}
 * @cssprop {<length>} --pf-c-spinner--m-xl--diameter                {@default `3.375rem`}
 * @cssprop {<time>}   --pf-c-spinner--AnimationDuration             {@default `1.4s`}
 * @cssprop {<string>} --pf-c-spinner--AnimationTimingFunction       {@default `linear`}
 * @cssprop {<number>} --pf-c-spinner--stroke-width                  {@default `10`}
 * @cssprop {<color>}  --pf-c-spinner__path--Stroke                  {@default `#06c`}
 * @cssprop {<number>} --pf-c-spinner__path--StrokeWidth             {@default `10`}
 * @cssprop {<string>} --pf-c-spinner__path--AnimationTimingFunction {@default `ease-in-out`}
 */
class BaseSpinner extends s$1 {
    constructor() {
        super(...arguments);
        /** Preset sizes for the spinner */
        this.size = 'xl';
    }
    render() {
        return x `
      <svg role="progressbar" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" />
      </svg>
    `;
    }
}
BaseSpinner.styles = [styles$1];
__decorate([
    e$5({ reflect: true })
], BaseSpinner.prototype, "size", void 0);
__decorate([
    e$5({ reflect: true })
], BaseSpinner.prototype, "diameter", void 0);

const styles = i$6 `:host{display:inline-block;text-align:center;width:max-content;min-height:0}::slotted(*){margin-top:var(--rh-space-lg,16px)}::slotted(p){font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text, 1.5)}svg{aspect-ratio:1/1;width:var(--rh-length-4xl,64px);stroke-width:var(--rh-length-sm,6px);overflow:hidden;display:block;margin-left:auto;margin-right:auto}circle{width:100%;height:100%;stroke-linecap:round}circle.dash{transform-origin:50% 50%;animation:rh-spinner-animation-dash 1.4s ease-out infinite;stroke:var(--rh-color-accent-base-on-light,#0066cc);stroke-dasharray:283;stroke-dashoffset:280;transform:rotate(-90deg)}circle.track{stroke:var(--rh-color-gray-05,#f2f2f2);animation-duration:0}:host([size=lg]) svg{width:var(--rh-size-icon-06,64px);stroke-width:var(--rh-length-sm,6px)}:host([size=lg]) ::slotted(p){font-size:var(--rh-font-size-body-text-lg, 1.125rem)}:host([size=md]) svg{width:var(--rh-size-icon-04,40px);stroke-width:var(--rh-length-xs,4px)}:host([size=md]) ::slotted(p){font-size:var(--rh-font-size-body-text-md, 1rem)}:host([size=sm]) svg{width:var(--rh-size-icon-01,16px);stroke-width:var(--rh-length-2xs,3px)}:host([size=sm]) circle.dash{animation-name:rh-spinner-small-animation-dash;stroke-dasharray:71;stroke-dashoffset:71}:host([size=sm]) ::slotted(p){font-size:var(--rh-font-size-body-text-sm, .875rem)}circle.dash.dark{stroke:var(--rh-color-accent-base-on-dark,#73bcf7)}circle.track.dark{stroke:var(--rh-color-gray-60,#383838)}@keyframes rh-spinner-animation-dash{50%{stroke-dashoffset:0}75%{transform:rotate(280deg)}100%{stroke-dashoffset:-283}}@keyframes rh-spinner-small-animation-dash{50%{stroke-dashoffset:0}75%{transform:rotate(280deg)}100%{stroke-dashoffset:-71}}`;
/**
 * A spinner indicates that an action is in progress.
 * It appears as an animated circle over the section that is loading,
 * and it may include a text label
 *
 * @summary Notifies users their action is being processed or loaded
 *
 * @slot - Optional text label below the animated circle.
 *
 */
let RhSpinner = class RhSpinner extends BaseSpinner {
    constructor() {
        super(...arguments);
        /**
         * Preset sizes for the spinner
         */
        this.size = 'lg';
    }
    render() {
        const { on = '' } = this;
        return x `
      <svg role="status" viewBox="0 0 100 100" aria-live="polite">
        <circle class="track ${o$3({ [on]: !!on })}" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
        <circle class="dash ${o$3({ [on]: !!on })}" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
      </svg>
      <slot></slot>
    `;
    }
};
RhSpinner.styles = [styles];
__decorate([
    colorContextProvider(),
    e$5({ reflect: true, attribute: 'color-palette' })
], RhSpinner.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer()
], RhSpinner.prototype, "on", void 0);
__decorate([
    e$5({ reflect: true })
], RhSpinner.prototype, "size", void 0);
RhSpinner = __decorate([
    e$6('rh-spinner')
], RhSpinner);

class RhPlayground extends s$1 {
  static styles = i$6`
    :host {
      position: relative;
      display: block;

      --_max-height: 785px;
    }

    ::slotted(pre) {
      max-height:  var(--_max-height);
      margin: 0 !important;
    }

    [hidden],
    div.showing {
      display: none !important;
    }

    div {
      max-height: var(--_max-height);
      overflow-y: scroll;
    }

    rh-button {
      position: absolute;
      inset-block-end: 5px;
      inset-inline-end: 5px;
      display: block;
    }

    rh-spinner {
      opacity: 0;
      transition: opacity 0.5s ease;
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      transform: translateY(-50%) translateX(-50%);
    }

    .loading rh-spinner {
      opacity: 1;
    }

    .loading ::slotted(pre) {
      opacity: .3;
    }

    playground-project {
      display: block;
      border: var(--rh-border-width-md, 2px) solid var(--rh-color-border-subtle-on-light, #c7c7c7);
      border-radius: var(--rh-border-radius-default, 3px);
      overflow: hidden;
    }

    playground-preview {
      resize: vertical;
      overflow: hidden;
    }
  `;

  static properties = {
    loading: { type: Boolean, state: true },
    showing: { type: Boolean, state: true },
    tagName: { attribute: 'tag-name' },
  };

  constructor() {
    super();
    /** Is the demo code loading? */
    this.loading = false;
    /** Is the demo displayed? */
    this.showing = false;
    this.project; // ?: PlaygroundProject | null;
    this.tabBar; // ?: PlaygroundTabBar | null;
    this.fileEditor; // ?: PlaygroundFileEditor | null;
    this.preview; // ?: PlaygroundPreview | null;
  }

  render() {
    const { showing, loading } = this;
    return x`
      <div id="snippet" class="${o$3({ showing, loading })}">
        <slot></slot>
        <rh-spinner>Loading demo...</rh-spinner>
      </div>
      <rh-button ?hidden="${showing}" @click="${this.load}">Load Demo</rh-button>
      <playground-project ?hidden="${!showing}">
        <playground-tab-bar @click="${this.onChange}"></playground-tab-bar>
        <playground-file-editor @click="${this.onChange}" @keydown="${this.onChange}"></playground-file-editor>
        <playground-preview></playground-preview>
      </playground-project>
    `;
  }

  firstUpdated() {
    this.project = this.shadowRoot?.querySelector('playground-project');
    this.tabBar = this.shadowRoot?.querySelector('playground-tab-bar');
    this.fileEditor = this.shadowRoot?.querySelector('playground-file-editor');
    this.preview = this.shadowRoot?.querySelector('playground-preview');
    if (this.project && this.tabBar && this.fileEditor && this.preview) {
      this.tabBar.project = this.project;
      this.fileEditor.project = this.project;
      this.preview.project = this.project;
    }
  }

  onChange(event) {
    if (event.target === this.tabBar) {
      // @ts-expect-error: need a better way to handle this, but works for now
      this.switch((event.target)._activeFileName);
    } else {
      this.switch((event.target).filename);
    }
  }

  switch(filename) {
    if (filename && this.preview && this.fileEditor) {
      this.preview.htmlFile = filename;
      this.fileEditor.filename = filename;
    }
  }

  async load() {
    this.loading = true;
    this.switch('demo/index.html');
    const { configure } = await import(`/assets/playgrounds/${this.tagName}-playground.js`);
    configure(this.project);
    await Promise.resolve().then(function () { return playgroundIde; });
    this.show();
  }

  show() {
    this.loading = false;
    this.showing = true;
  }
}

customElements.define('rh-playground', RhPlayground);
