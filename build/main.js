/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@lottiefiles/dotlottie-web/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@lottiefiles/dotlottie-web/dist/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DotLottie: () => (/* binding */ V3),
/* harmony export */   DotLottieWorker: () => (/* binding */ Y3)
/* harmony export */ });
var x4=Object.defineProperty,R4=Object.defineProperties;var j4=Object.getOwnPropertyDescriptors;var N1=Object.getOwnPropertySymbols;var $3=Object.prototype.hasOwnProperty,W3=Object.prototype.propertyIsEnumerable;var _2=(v,r,a)=>r in v?x4(v,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):v[r]=a,D=(v,r)=>{for(var a in r||(r={}))$3.call(r,a)&&_2(v,a,r[a]);if(N1)for(var a of N1(r))W3.call(r,a)&&_2(v,a,r[a]);return v},z=(v,r)=>R4(v,j4(r));var V1=(v,r)=>{var a={};for(var h in v)$3.call(v,h)&&r.indexOf(h)<0&&(a[h]=v[h]);if(v!=null&&N1)for(var h of N1(v))r.indexOf(h)<0&&W3.call(v,h)&&(a[h]=v[h]);return a};var b=(v,r,a)=>_2(v,typeof r!="symbol"?r+"":r,a);var E=(v,r,a)=>new Promise((h,d)=>{var g=j=>{try{R(a.next(j));}catch($){d($);}},T=j=>{try{R(a.throw(j));}catch($){d($);}},R=j=>j.done?h(j.value):Promise.resolve(j.value).then(g,T);R((a=a.apply(v,r)).next());});var y2=class{requestAnimationFrame(r){return requestAnimationFrame(r)}cancelAnimationFrame(r){cancelAnimationFrame(r);}},g2=class{constructor(){b(this,"_lastHandleId",0);b(this,"_lastImmediate",null);}requestAnimationFrame(r){return this._lastHandleId>=Number.MAX_SAFE_INTEGER&&(this._lastHandleId=0),this._lastHandleId+=1,this._lastImmediate=setImmediate(()=>{r(Date.now());}),this._lastHandleId}cancelAnimationFrame(r){this._lastImmediate&&clearImmediate(this._lastImmediate);}},q1=class{constructor(){b(this,"_strategy");this._strategy=typeof requestAnimationFrame=="function"?new y2:new g2;}requestAnimationFrame(r){return this._strategy.requestAnimationFrame(r)}cancelAnimationFrame(r){this._strategy.cancelAnimationFrame(r);}};var O=typeof window!="undefined"&&typeof window.document!="undefined";var J1=new Uint8Array([80,75,3,4]),z3=["v","ip","op","layers","fr","w","h"],w2="0.44.0",C2="@lottiefiles/dotlottie-web",U3=.75;var A4=(()=>{var r;var v=typeof document!="undefined"?(r=document.currentScript)==null?void 0:r.src:void 0;return function(a={}){var h,d=a,g,T,R=new Promise((t,e)=>{g=t,T=e;}),j=Object.assign({},d),$="./this.program",U="",l1;typeof document!="undefined"&&document.currentScript&&(U=document.currentScript.src),v&&(U=v),U.startsWith("blob:")?U="":U=U.substr(0,U.replace(/[?#].*/,"").lastIndexOf("/")+1),l1=t=>fetch(t,{credentials:"same-origin"}).then(e=>e.ok?e.arrayBuffer():Promise.reject(Error(e.status+" : "+e.url)));var T1=d.print||console.log.bind(console),K=d.printErr||console.error.bind(console);Object.assign(d,j),j=null,d.thisProgram&&($=d.thisProgram);var F1=d.wasmBinary,x1,R1=!1,K1,X,k,a1,f1,t1,F,S2,T2;function F2(){var t=x1.buffer;d.HEAP8=X=new Int8Array(t),d.HEAP16=a1=new Int16Array(t),d.HEAPU8=k=new Uint8Array(t),d.HEAPU16=f1=new Uint16Array(t),d.HEAP32=t1=new Int32Array(t),d.HEAPU32=F=new Uint32Array(t),d.HEAPF32=S2=new Float32Array(t),d.HEAPF64=T2=new Float64Array(t);}var x2=[],R2=[],j2=[];function K3(){var t=d.preRun.shift();x2.unshift(t);}var n1=0,p1=null;function j1(t){var e;throw (e=d.onAbort)==null||e.call(d,t),t="Aborted("+t+")",K(t),R1=!0,t=new WebAssembly.RuntimeError(t+". Build with -sASSERTIONS for more info."),T(t),t}var A2=t=>t.startsWith("data:application/octet-stream;base64,"),v1;function k2(t){if(t==v1&&F1)return new Uint8Array(F1);throw "both async and sync fetching of the wasm failed"}function X3(t){return F1?Promise.resolve().then(()=>k2(t)):l1(t).then(e=>new Uint8Array(e),()=>k2(t))}function D2(t,e,n){return X3(t).then(i=>WebAssembly.instantiate(i,e)).then(n,i=>{K(`failed to asynchronously prepare wasm: ${i}`),j1(i);})}function Z3(t,e){var n=v1;return F1||typeof WebAssembly.instantiateStreaming!="function"||A2(n)||typeof fetch!="function"?D2(n,t,e):fetch(n,{credentials:"same-origin"}).then(i=>WebAssembly.instantiateStreaming(i,t).then(e,function(o){return K(`wasm streaming compile failed: ${o}`),K("falling back to ArrayBuffer instantiation"),D2(n,t,e)}))}class O2{constructor(e){b(this,"name","ExitStatus");this.message=`Program terminated with exit(${e})`,this.status=e;}}var Z1=t=>{for(;0<t.length;)t.shift()(d);},Q1=d.noExitRuntime||!0,$2=typeof TextDecoder!="undefined"?new TextDecoder:void 0,m1=(t,e=0,n=NaN)=>{var i=e+n;for(n=e;t[n]&&!(n>=i);)++n;if(16<n-e&&t.buffer&&$2)return $2.decode(t.subarray(e,n));for(i="";e<n;){var o=t[e++];if(o&128){var s=t[e++]&63;if((o&224)==192)i+=String.fromCharCode((o&31)<<6|s);else {var u=t[e++]&63;o=(o&240)==224?(o&15)<<12|s<<6|u:(o&7)<<18|s<<12|u<<6|t[e++]&63,65536>o?i+=String.fromCharCode(o):(o-=65536,i+=String.fromCharCode(55296|o>>10,56320|o&1023));}}else i+=String.fromCharCode(o);}return i},W2=[],z2=0,s1=0;class e2{constructor(e){this.Fc=e,this.dc=e-24;}}var U2=t=>{var e=s1;if(!e)return P1(0),0;var n=new e2(e);F[n.dc+16>>2]=e;var i=F[n.dc+4>>2];if(!i)return P1(0),e;for(var o of t){if(o===0||o===i)break;if(u3(o,i,n.dc+16))return P1(o),e}return P1(i),e},_1=(t,e,n)=>{var i=k;if(0<n){n=e+n-1;for(var o=0;o<t.length;++o){var s=t.charCodeAt(o);if(55296<=s&&57343>=s){var u=t.charCodeAt(++o);s=65536+((s&1023)<<10)|u&1023;}if(127>=s){if(e>=n)break;i[e++]=s;}else {if(2047>=s){if(e+1>=n)break;i[e++]=192|s>>6;}else {if(65535>=s){if(e+2>=n)break;i[e++]=224|s>>12;}else {if(e+3>=n)break;i[e++]=240|s>>18,i[e++]=128|s>>12&63;}i[e++]=128|s>>6&63;}i[e++]=128|s&63;}}i[e]=0;}},r1=(t,e)=>Object.defineProperty(e,"name",{value:t}),t2=[],Z=[],M,Q3=t=>{throw new M(t)},c1=t=>{if(!t)throw new M("Cannot use deleted val. handle = "+t);return Z[t]},y1=t=>{switch(t){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let e=t2.pop()||Z.length;return Z[e]=t,Z[e+1]=1,e}},B2=t=>{var e=Error,n=r1(t,function(i){this.name=t,this.message=i,i=Error(i).stack,i!==void 0&&(this.stack=this.toString()+`
`+i.replace(/^Error(:[^\n]*)?\n/,""));});return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},n},H2,N2,A=t=>{for(var e="";k[t];)e+=N2[k[t++]];return e},g1={},n2=(t,e)=>{if(e===void 0)throw new M("ptr should not be undefined");for(;t.ic;)e=t.tc(e),t=t.ic;return e},i1={},V2=t=>{t=a3(t);var e=A(t);return Q(t),e},w1=(t,e)=>{var n=i1[t];if(n===void 0)throw t=`${e} has unknown type ${V2(t)}`,new M(t);return n},A1=()=>{},r2=!1,q2=(t,e,n)=>e===n?t:n.ic===void 0?null:(t=q2(t,e,n.ic),t===null?null:n.Ec(t)),J2={},e0=(t,e)=>(e=n2(t,e),g1[e]),C1,k1=(t,e)=>{if(!e.fc||!e.dc)throw new C1("makeClassHandle requires ptr and ptrType");if(!!e.lc!=!!e.jc)throw new C1("Both smartPtrType and smartPtr must be specified");return e.count={value:1},d1(Object.create(t,{cc:{value:e,writable:!0}}))},d1=t=>typeof FinalizationRegistry=="undefined"?(d1=e=>e,t):(r2=new FinalizationRegistry(e=>{e=e.cc,--e.count.value,e.count.value===0&&(e.jc?e.lc.nc(e.jc):e.fc.ec.nc(e.dc));}),d1=e=>{var n=e.cc;return n.jc&&r2.register(e,{cc:n},e),e},A1=e=>{r2.unregister(e);},d1(t)),D1={},i2=t=>{for(;t.length;){var e=t.pop();t.pop()(e);}};function b1(t){return this.fromWireType(F[t>>2])}var u1={},O1={},G=(t,e,n)=>{function i(c){if(c=n(c),c.length!==t.length)throw new C1("Mismatched type converter count");for(var l=0;l<t.length;++l)J(t[l],c[l]);}t.forEach(c=>O1[c]=e);var o=Array(e.length),s=[],u=0;e.forEach((c,l)=>{i1.hasOwnProperty(c)?o[l]=i1[c]:(s.push(c),u1.hasOwnProperty(c)||(u1[c]=[]),u1[c].push(()=>{o[l]=i1[c],++u,u===s.length&&i(o);}));}),s.length===0&&i(o);};function t0(t,e,n={}){var i=e.name;if(!t)throw new M(`type "${i}" must have a positive integer typeid pointer`);if(i1.hasOwnProperty(t)){if(n.Mc)return;throw new M(`Cannot register type '${i}' twice`)}i1[t]=e,delete O1[t],u1.hasOwnProperty(t)&&(e=u1[t],delete u1[t],e.forEach(o=>o()));}function J(t,e,n={}){return t0(t,e,n)}var o2=t=>{throw new M(t.cc.fc.ec.name+" instance already deleted")};function $1(){}var a2=(t,e,n)=>{if(t[e].hc===void 0){var i=t[e];t[e]=function(...o){if(!t[e].hc.hasOwnProperty(o.length))throw new M(`Function '${n}' called with an invalid number of arguments (${o.length}) - expects one of (${t[e].hc})!`);return t[e].hc[o.length].apply(this,o)},t[e].hc=[],t[e].hc[i.pc]=i;}},s2=(t,e,n)=>{if(d.hasOwnProperty(t)){if(n===void 0||d[t].hc!==void 0&&d[t].hc[n]!==void 0)throw new M(`Cannot register public name '${t}' twice`);if(a2(d,t,t),d[t].hc.hasOwnProperty(n))throw new M(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`);d[t].hc[n]=e;}else d[t]=e,d[t].pc=n;},r0=t=>{t=t.replace(/[^a-zA-Z0-9_]/g,"$");var e=t.charCodeAt(0);return 48<=e&&57>=e?`_${t}`:t};function i0(t,e,n,i,o,s,u,c){this.name=t,this.constructor=e,this.oc=n,this.nc=i,this.ic=o,this.Hc=s,this.tc=u,this.Ec=c,this.Bc=[];}var c2=(t,e,n)=>{for(;e!==n;){if(!e.tc)throw new M(`Expected null or instance of ${n.name}, got an instance of ${e.name}`);t=e.tc(t),e=e.ic;}return t};function o0(t,e){if(e===null){if(this.xc)throw new M(`null is not a valid ${this.name}`);return 0}if(!e.cc)throw new M(`Cannot pass "${h2(e)}" as a ${this.name}`);if(!e.cc.dc)throw new M(`Cannot pass deleted object as a pointer of type ${this.name}`);return c2(e.cc.dc,e.cc.fc.ec,this.ec)}function a0(t,e){if(e===null){if(this.xc)throw new M(`null is not a valid ${this.name}`);if(this.wc){var n=this.yc();return t!==null&&t.push(this.nc,n),n}return 0}if(!e||!e.cc)throw new M(`Cannot pass "${h2(e)}" as a ${this.name}`);if(!e.cc.dc)throw new M(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.vc&&e.cc.fc.vc)throw new M(`Cannot convert argument of type ${e.cc.lc?e.cc.lc.name:e.cc.fc.name} to parameter type ${this.name}`);if(n=c2(e.cc.dc,e.cc.fc.ec,this.ec),this.wc){if(e.cc.jc===void 0)throw new M("Passing raw pointer to smart pointer is illegal");switch(this.Tc){case 0:if(e.cc.lc===this)n=e.cc.jc;else throw new M(`Cannot convert argument of type ${e.cc.lc?e.cc.lc.name:e.cc.fc.name} to parameter type ${this.name}`);break;case 1:n=e.cc.jc;break;case 2:if(e.cc.lc===this)n=e.cc.jc;else {var i=e.clone();n=this.Pc(n,y1(()=>i.delete())),t!==null&&t.push(this.nc,n);}break;default:throw new M("Unsupporting sharing policy")}}return n}function s0(t,e){if(e===null){if(this.xc)throw new M(`null is not a valid ${this.name}`);return 0}if(!e.cc)throw new M(`Cannot pass "${h2(e)}" as a ${this.name}`);if(!e.cc.dc)throw new M(`Cannot pass deleted object as a pointer of type ${this.name}`);if(e.cc.fc.vc)throw new M(`Cannot convert argument of type ${e.cc.fc.name} to parameter type ${this.name}`);return c2(e.cc.dc,e.cc.fc.ec,this.ec)}function L1(t,e,n,i,o,s,u,c,l,f,p){this.name=t,this.ec=e,this.xc=n,this.vc=i,this.wc=o,this.Oc=s,this.Tc=u,this.Cc=c,this.yc=l,this.Pc=f,this.nc=p,o||e.ic!==void 0?this.toWireType=a0:(this.toWireType=i?o0:s0,this.kc=null);}var G2=(t,e,n)=>{if(!d.hasOwnProperty(t))throw new C1("Replacing nonexistent public symbol");d[t].hc!==void 0&&n!==void 0?d[t].hc[n]=e:(d[t]=e,d[t].pc=n);},P,c0=(t,e,n=[])=>(t.includes("j")?(t=t.replace(/p/g,"i"),e=(0, d["dynCall_"+t])(e,...n)):e=P.get(e)(...n),e),d0=(t,e)=>(...n)=>c0(t,e,n),W=(t,e)=>{t=A(t);var n=t.includes("j")?d0(t,e):P.get(e);if(typeof n!="function")throw new M(`unknown function pointer with signature ${t}: ${e}`);return n},Y2,M1=(t,e)=>{function n(s){o[s]||i1[s]||(O1[s]?O1[s].forEach(n):(i.push(s),o[s]=!0));}var i=[],o={};throw e.forEach(n),new Y2(`${t}: `+i.map(V2).join([", "]))};function K2(t){for(var e=1;e<t.length;++e)if(t[e]!==null&&t[e].kc===void 0)return !0;return !1}function X2(t){var e=Function;if(!(e instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof e} which is not a function`);var n=r1(e.name||"unknownFunctionName",function(){});return n.prototype=e.prototype,n=new n,t=e.apply(n,t),t instanceof Object?t:n}function W1(t,e,n,i,o,s){var u=e.length;if(2>u)throw new M("argTypes array size mismatch! Must at least get return value and 'this' types!");var c=e[1]!==null&&n!==null,l=K2(e);for(n=e[0].name!=="void",i=[t,Q3,i,o,i2,e[0],e[1]],o=0;o<u-2;++o)i.push(e[o+2]);if(!l)for(o=c?1:2;o<e.length;++o)e[o].kc!==null&&i.push(e[o].kc);l=K2(e),o=e.length-2;var f=[],p=["fn"];for(c&&p.push("thisWired"),u=0;u<o;++u)f.push(`arg${u}`),p.push(`arg${u}Wired`);f=f.join(","),p=p.join(","),f=`return function (${f}) {
`,l&&(f+=`var destructors = [];
`);var C=l?"destructors":"null",L="humanName throwBindingError invoker fn runDestructors retType classParam".split(" ");for(c&&(f+=`var thisWired = classParam['toWireType'](${C}, this);
`),u=0;u<o;++u)f+=`var arg${u}Wired = argType${u}['toWireType'](${C}, arg${u});
`,L.push(`argType${u}`);if(f+=(n||s?"var rv = ":"")+`invoker(${p});
`,l)f+=`runDestructors(destructors);
`;else for(u=c?1:2;u<e.length;++u)s=u===1?"thisWired":"arg"+(u-2)+"Wired",e[u].kc!==null&&(f+=`${s}_dtor(${s});
`,L.push(`${s}_dtor`));n&&(f+=`var ret = retType['fromWireType'](rv);
return ret;
`);let[I,S]=[L,f+`}
`];return I.push(S),e=X2(I)(...i),r1(t,e)}var z1=(t,e)=>{for(var n=[],i=0;i<t;i++)n.push(F[e+4*i>>2]);return n},d2=t=>{t=t.trim();let e=t.indexOf("(");return e!==-1?t.substr(0,e):t},u2=t=>{9<t&&--Z[t+1]===0&&(Z[t]=void 0,t2.push(t));},Z2={name:"emscripten::val",fromWireType:t=>{var e=c1(t);return u2(t),e},toWireType:(t,e)=>y1(e),mc:8,readValueFromPointer:b1,kc:null},u0=(t,e,n)=>{switch(e){case 1:return n?function(i){return this.fromWireType(X[i])}:function(i){return this.fromWireType(k[i])};case 2:return n?function(i){return this.fromWireType(a1[i>>1])}:function(i){return this.fromWireType(f1[i>>1])};case 4:return n?function(i){return this.fromWireType(t1[i>>2])}:function(i){return this.fromWireType(F[i>>2])};default:throw new TypeError(`invalid integer width (${e}): ${t}`)}},h2=t=>{if(t===null)return "null";var e=typeof t;return e==="object"||e==="array"||e==="function"?t.toString():""+t},h0=(t,e)=>{switch(e){case 4:return function(n){return this.fromWireType(S2[n>>2])};case 8:return function(n){return this.fromWireType(T2[n>>3])};default:throw new TypeError(`invalid float width (${e}): ${t}`)}},l0=(t,e,n)=>{switch(e){case 1:return n?i=>X[i]:i=>k[i];case 2:return n?i=>a1[i>>1]:i=>f1[i>>1];case 4:return n?i=>t1[i>>2]:i=>F[i>>2];default:throw new TypeError(`invalid integer width (${e}): ${t}`)}},f0=Object.assign({optional:!0},Z2),Q2=typeof TextDecoder!="undefined"?new TextDecoder("utf-16le"):void 0,p0=(t,e)=>{for(var n=t>>1,i=n+e/2;!(n>=i)&&f1[n];)++n;if(n<<=1,32<n-t&&Q2)return Q2.decode(k.subarray(t,n));for(n="",i=0;!(i>=e/2);++i){var o=a1[t+2*i>>1];if(o==0)break;n+=String.fromCharCode(o);}return n},v0=(t,e,n)=>{if(n!=null||(n=2147483647),2>n)return 0;n-=2;var i=e;n=n<2*t.length?n/2:t.length;for(var o=0;o<n;++o)a1[e>>1]=t.charCodeAt(o),e+=2;return a1[e>>1]=0,e-i},m0=t=>2*t.length,_0=(t,e)=>{for(var n=0,i="";!(n>=e/4);){var o=t1[t+4*n>>2];if(o==0)break;++n,65536<=o?(o-=65536,i+=String.fromCharCode(55296|o>>10,56320|o&1023)):i+=String.fromCharCode(o);}return i},y0=(t,e,n)=>{if(n!=null||(n=2147483647),4>n)return 0;var i=e;n=i+n-4;for(var o=0;o<t.length;++o){var s=t.charCodeAt(o);if(55296<=s&&57343>=s){var u=t.charCodeAt(++o);s=65536+((s&1023)<<10)|u&1023;}if(t1[e>>2]=s,e+=4,e+4>n)break}return t1[e>>2]=0,e-i},g0=t=>{for(var e=0,n=0;n<t.length;++n){var i=t.charCodeAt(n);55296<=i&&57343>=i&&++n,e+=4;}return e},l2=0,e3=(t,e,n)=>{var i=[];return t=t.toWireType(i,n),i.length&&(F[e>>2]=y1(i)),t},U1=[],w0={},C0=t=>{var e=U1.length;return U1.push(t),e},b0=(t,e)=>{for(var n=Array(t),i=0;i<t;++i)n[i]=w1(F[e+4*i>>2],"parameter "+i);return n},E1={},t3=t=>{if(!(t instanceof O2||t=="unwind"))throw t},n3=t=>{var e;throw K1=t,Q1||0<l2||((e=d.onExit)==null||e.call(d,t),R1=!0),new O2(t)},L0=t=>{if(!R1)try{if(t(),!(Q1||0<l2))try{K1=t=K1,n3(t);}catch(e){t3(e);}}catch(e){t3(e);}},f2={},r3=()=>{if(!p2){var t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:$||"./this.program"},e;for(e in f2)f2[e]===void 0?delete t[e]:t[e]=f2[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);p2=n;}return p2},p2,M0=[null,[],[]],E0=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return t=>crypto.getRandomValues(t);j1("initRandomDevice");},i3=t=>(i3=E0())(t);M=d.BindingError=class extends Error{constructor(t){super(t),this.name="BindingError";}},Z.push(0,1,void 0,1,null,1,!0,1,!1,1),d.count_emval_handles=()=>Z.length/2-5-t2.length,H2=d.PureVirtualError=B2("PureVirtualError");for(var o3=Array(256),B1=0;256>B1;++B1)o3[B1]=String.fromCharCode(B1);N2=o3,C1=d.InternalError=class extends Error{constructor(t){super(t),this.name="InternalError";}},Object.assign($1.prototype,{isAliasOf:function(t){if(!(this instanceof $1&&t instanceof $1))return !1;var e=this.cc.fc.ec,n=this.cc.dc;t.cc=t.cc;var i=t.cc.fc.ec;for(t=t.cc.dc;e.ic;)n=e.tc(n),e=e.ic;for(;i.ic;)t=i.tc(t),i=i.ic;return e===i&&n===t},clone:function(){if(this.cc.dc||o2(this),this.cc.rc)return this.cc.count.value+=1,this;var t=d1,e=Object,n=e.create,i=Object.getPrototypeOf(this),o=this.cc;return t=t(n.call(e,i,{cc:{value:{count:o.count,sc:o.sc,rc:o.rc,dc:o.dc,fc:o.fc,jc:o.jc,lc:o.lc}}})),t.cc.count.value+=1,t.cc.sc=!1,t},delete(){if(this.cc.dc||o2(this),this.cc.sc&&!this.cc.rc)throw new M("Object already scheduled for deletion");A1(this);var t=this.cc;--t.count.value,t.count.value===0&&(t.jc?t.lc.nc(t.jc):t.fc.ec.nc(t.dc)),this.cc.rc||(this.cc.jc=void 0,this.cc.dc=void 0);},isDeleted:function(){return !this.cc.dc},deleteLater:function(){if(this.cc.dc||o2(this),this.cc.sc&&!this.cc.rc)throw new M("Object already scheduled for deletion");return this.cc.sc=!0,this}}),Object.assign(L1.prototype,{Ic(t){return this.Cc&&(t=this.Cc(t)),t},zc(t){var e;(e=this.nc)==null||e.call(this,t);},mc:8,readValueFromPointer:b1,fromWireType:function(t){function e(){return this.wc?k1(this.ec.oc,{fc:this.Oc,dc:n,lc:this,jc:t}):k1(this.ec.oc,{fc:this,dc:t})}var n=this.Ic(t);if(!n)return this.zc(t),null;var i=e0(this.ec,n);if(i!==void 0)return i.cc.count.value===0?(i.cc.dc=n,i.cc.jc=t,i.clone()):(i=i.clone(),this.zc(t),i);if(i=this.ec.Hc(n),i=J2[i],!i)return e.call(this);i=this.vc?i.Dc:i.pointerType;var o=q2(n,this.ec,i.ec);return o===null?e.call(this):this.wc?k1(i.ec.oc,{fc:i,dc:o,lc:this,jc:t}):k1(i.ec.oc,{fc:i,dc:o})}}),Y2=d.UnboundTypeError=B2("UnboundTypeError");var P0={l:(t,e,n,i)=>j1(`Assertion failed: ${t?m1(k,t):""}, at: `+[e?e?m1(k,e):"":"unknown filename",n,i?i?m1(k,i):"":"unknown function"]),Fa:t=>{var e=new e2(t);return X[e.dc+12]==0&&(X[e.dc+12]=1,z2--),X[e.dc+13]=0,W2.push(e),d3(t),h3(t)},Ea:()=>{m(0,0);var t=W2.pop();c3(t.Fc),s1=0;},b:()=>U2([]),o:(t,e)=>U2([t,e]),v:(t,e,n)=>{var i=new e2(t);throw F[i.dc+16>>2]=0,F[i.dc+4>>2]=e,F[i.dc+8>>2]=n,s1=t,z2++,s1},d:t=>{throw s1||(s1=t),s1},wa:()=>{},ta:()=>{},ua:()=>{},ya:function(){},va:()=>{},Aa:()=>j1(""),da:(t,e,n)=>{t=A(t),e=w1(e,"wrapper"),n=c1(n);var i=e.ec,o=i.oc,s=i.ic.oc,u=i.ic.constructor;return t=r1(t,function(...c){i.ic.Bc.forEach(function(l){if(this[l]===s[l])throw new H2(`Pure virtual function ${l} must be implemented in JavaScript`)}.bind(this)),Object.defineProperty(this,"__parent",{value:o}),this.__construct(...c);}),o.__construct=function(...c){if(this===o)throw new M("Pass correct 'this' to __construct");c=u.implement(this,...c),A1(c);var l=c.cc;if(c.notifyOnDestruction(),l.rc=!0,Object.defineProperties(this,{cc:{value:l}}),d1(this),c=l.dc,c=n2(i,c),g1.hasOwnProperty(c))throw new M(`Tried to register registered instance: ${c}`);g1[c]=this;},o.__destruct=function(){if(this===o)throw new M("Pass correct 'this' to __destruct");A1(this);var c=this.cc.dc;if(c=n2(i,c),g1.hasOwnProperty(c))delete g1[c];else throw new M(`Tried to unregister unregistered instance: ${c}`)},t.prototype=Object.create(o),Object.assign(t.prototype,n),y1(t)},N:t=>{var e=D1[t];delete D1[t];var n=e.yc,i=e.nc,o=e.Ac,s=o.map(u=>u.Lc).concat(o.map(u=>u.Rc));G([t],s,u=>{var c={};return o.forEach((l,f)=>{var p=u[f],C=l.Jc,L=l.Kc,I=u[f+o.length],S=l.Qc,B=l.Sc;c[l.Gc]={read:V=>p.fromWireType(C(L,V)),write:(V,I1)=>{var q=[];S(B,V,I.toWireType(q,I1)),i2(q);}};}),[{name:e.name,fromWireType:l=>{var f={},p;for(p in c)f[p]=c[p].read(l);return i(l),f},toWireType:(l,f)=>{for(var p in c)if(!(p in f))throw new TypeError(`Missing field: "${p}"`);var C=n();for(p in c)c[p].write(C,f[p]);return l!==null&&l.push(i,C),C},mc:8,readValueFromPointer:b1,kc:i}]});},ma:()=>{},Pa:(t,e,n,i)=>{e=A(e),J(t,{name:e,fromWireType:function(o){return !!o},toWireType:function(o,s){return s?n:i},mc:8,readValueFromPointer:function(o){return this.fromWireType(k[o])},kc:null});},C:(t,e,n,i,o,s,u,c,l,f,p,C,L)=>{p=A(p),s=W(o,s),c&&(c=W(u,c)),f&&(f=W(l,f)),L=W(C,L);var I=r0(p);s2(I,function(){M1(`Cannot construct ${p} due to unbound types`,[i]);}),G([t,e,n],i?[i]:[],S=>{if(S=S[0],i)var B=S.ec,V=B.oc;else V=$1.prototype;S=r1(p,function(...m2){if(Object.getPrototypeOf(this)!==I1)throw new M("Use 'new' to construct "+p);if(q.qc===void 0)throw new M(p+" has no accessible constructor");var O3=q.qc[m2.length];if(O3===void 0)throw new M(`Tried to invoke ctor of ${p} with invalid number of parameters (${m2.length}) - expected (${Object.keys(q.qc).toString()}) parameters instead!`);return O3.apply(this,m2)});var I1=Object.create(V,{constructor:{value:S}});S.prototype=I1;var q=new i0(p,S,I1,L,B,s,c,f);if(q.ic){var S1;((S1=q.ic).uc)!=null||(S1.uc=[]),q.ic.uc.push(q);}return B=new L1(p,q,!0,!1,!1),S1=new L1(p+"*",q,!1,!1,!1),V=new L1(p+" const*",q,!1,!0,!1),J2[t]={pointerType:S1,Dc:V},G2(I,S),[B,S1,V]});},L:(t,e,n,i,o,s,u,c)=>{var l=z1(n,i);e=A(e),e=d2(e),s=W(o,s),G([],[t],f=>{function p(){M1(`Cannot call ${C} due to unbound types`,l);}f=f[0];var C=`${f.name}.${e}`;e.startsWith("@@")&&(e=Symbol[e.substring(2)]);var L=f.ec.constructor;return L[e]===void 0?(p.pc=n-1,L[e]=p):(a2(L,e,C),L[e].hc[n-1]=p),G([],l,I=>{if(I=W1(C,[I[0],null].concat(I.slice(1)),null,s,u,c),L[e].hc===void 0?(I.pc=n-1,L[e]=I):L[e].hc[n-1]=I,f.ec.uc)for(let S of f.ec.uc)S.constructor.hasOwnProperty(e)||(S.constructor[e]=I);return []}),[]});},K:(t,e,n,i,o,s)=>{var u=z1(e,n);o=W(i,o),G([],[t],c=>{c=c[0];var l=`constructor ${c.name}`;if(c.ec.qc===void 0&&(c.ec.qc=[]),c.ec.qc[e-1]!==void 0)throw new M(`Cannot register multiple constructors with identical number of parameters (${e-1}) for class '${c.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return c.ec.qc[e-1]=()=>{M1(`Cannot construct ${c.name} due to unbound types`,u);},G([],u,f=>(f.splice(1,0,null),c.ec.qc[e-1]=W1(l,f,null,o,s),[])),[]});},m:(t,e,n,i,o,s,u,c,l)=>{var f=z1(n,i);e=A(e),e=d2(e),s=W(o,s),G([],[t],p=>{function C(){M1(`Cannot call ${L} due to unbound types`,f);}p=p[0];var L=`${p.name}.${e}`;e.startsWith("@@")&&(e=Symbol[e.substring(2)]),c&&p.ec.Bc.push(e);var I=p.ec.oc,S=I[e];return S===void 0||S.hc===void 0&&S.className!==p.name&&S.pc===n-2?(C.pc=n-2,C.className=p.name,I[e]=C):(a2(I,e,L),I[e].hc[n-2]=C),G([],f,B=>(B=W1(L,B,p,s,u,l),I[e].hc===void 0?(B.pc=n-2,I[e]=B):I[e].hc[n-2]=B,[])),[]});},Oa:t=>J(t,Z2),P:(t,e,n,i)=>{function o(){}e=A(e),o.values={},J(t,{name:e,constructor:o,fromWireType:function(s){return this.constructor.values[s]},toWireType:(s,u)=>u.value,mc:8,readValueFromPointer:u0(e,n,i),kc:null}),s2(e,o);},w:(t,e,n)=>{var i=w1(t,"enum");e=A(e),t=i.constructor,i=Object.create(i.constructor.prototype,{value:{value:n},constructor:{value:r1(`${i.name}_${e}`,function(){})}}),t.values[n]=i,t[e]=i;},aa:(t,e,n)=>{e=A(e),J(t,{name:e,fromWireType:i=>i,toWireType:(i,o)=>o,mc:8,readValueFromPointer:h0(e,n),kc:null});},M:(t,e,n,i,o,s,u)=>{var c=z1(e,n);t=A(t),t=d2(t),o=W(i,o),s2(t,function(){M1(`Cannot call ${t} due to unbound types`,c);},e-1),G([],c,l=>(G2(t,W1(t,[l[0],null].concat(l.slice(1)),null,o,s,u),e-1),[]));},z:(t,e,n,i,o)=>{if(e=A(e),o===-1&&(o=4294967295),o=c=>c,i===0){var s=32-8*n;o=c=>c<<s>>>s;}var u=e.includes("unsigned")?function(c,l){return l>>>0}:function(c,l){return l};J(t,{name:e,fromWireType:o,toWireType:u,mc:8,readValueFromPointer:l0(e,n,i!==0),kc:null});},r:(t,e,n)=>{function i(s){return new o(X.buffer,F[s+4>>2],F[s>>2])}var o=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];n=A(n),J(t,{name:n,fromWireType:i,mc:8,readValueFromPointer:i},{Mc:!0});},O:t=>{J(t,f0);},T:(t,e,n,i,o,s,u,c,l,f,p,C)=>{n=A(n),s=W(o,s),c=W(u,c),f=W(l,f),C=W(p,C),G([t],[e],L=>(L=L[0],[new L1(n,L.ec,!1,!1,!0,L,i,s,c,f,C)]));},ba:(t,e)=>{e=A(e);var n=e==="std::string";J(t,{name:e,fromWireType:function(i){var o=F[i>>2],s=i+4;if(n)for(var u=s,c=0;c<=o;++c){var l=s+c;if(c==o||k[l]==0){if(u=u?m1(k,u,l-u):"",f===void 0)var f=u;else f+="\0",f+=u;u=l+1;}}else {for(f=Array(o),c=0;c<o;++c)f[c]=String.fromCharCode(k[s+c]);f=f.join("");}return Q(i),f},toWireType:function(i,o){o instanceof ArrayBuffer&&(o=new Uint8Array(o));var s,u=typeof o=="string";if(!(u||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array))throw new M("Cannot pass non-string to std::string");if(n&&u)for(var c=s=0;c<o.length;++c){var l=o.charCodeAt(c);127>=l?s++:2047>=l?s+=2:55296<=l&&57343>=l?(s+=4,++c):s+=3;}else s=o.length;if(c=v2(4+s+1),l=c+4,F[c>>2]=s,n&&u)_1(o,l,s+1);else if(u)for(u=0;u<s;++u){var f=o.charCodeAt(u);if(255<f)throw Q(l),new M("String has UTF-16 code units that do not fit in 8 bits");k[l+u]=f;}else for(u=0;u<s;++u)k[l+u]=o[u];return i!==null&&i.push(Q,c),c},mc:8,readValueFromPointer:b1,kc(i){Q(i);}});},S:(t,e,n)=>{if(n=A(n),e===2)var i=p0,o=v0,s=m0,u=c=>f1[c>>1];else e===4&&(i=_0,o=y0,s=g0,u=c=>F[c>>2]);J(t,{name:n,fromWireType:c=>{for(var l=F[c>>2],f,p=c+4,C=0;C<=l;++C){var L=c+4+C*e;(C==l||u(L)==0)&&(p=i(p,L-p),f===void 0?f=p:(f+="\0",f+=p),p=L+e);}return Q(c),f},toWireType:(c,l)=>{if(typeof l!="string")throw new M(`Cannot pass non-string to C++ string type ${n}`);var f=s(l),p=v2(4+f+e);return F[p>>2]=f/e,o(l,p+4,f+e),c!==null&&c.push(Q,p),p},mc:8,readValueFromPointer:b1,kc(c){Q(c);}});},H:(t,e,n,i,o,s)=>{D1[t]={name:A(e),yc:W(n,i),nc:W(o,s),Ac:[]};},x:(t,e,n,i,o,s,u,c,l,f)=>{D1[t].Ac.push({Gc:A(e),Lc:n,Jc:W(i,o),Kc:s,Rc:u,Qc:W(c,l),Sc:f});},Qa:(t,e)=>{e=A(e),J(t,{Nc:!0,name:e,mc:0,fromWireType:()=>{},toWireType:()=>{}});},Ga:function(){return Date.now()},ra:()=>{Q1=!1,l2=0;},na:()=>{throw 1/0},ca:(t,e,n)=>(t=c1(t),e=w1(e,"emval::as"),e3(e,n,t)),Sa:(t,e,n,i)=>(t=U1[t],e=c1(e),t(null,e,n,i)),D:(t,e,n,i,o)=>{t=U1[t],e=c1(e);var s=w0[n];return n=s===void 0?A(n):s,t(e,e[n],i,o)},Ja:u2,A:(t,e,n)=>{e=b0(t,e);var i=e.shift();t--;var o=`return function (obj, func, destructorsRef, args) {
`,s=0,u=[];n===0&&u.push("obj");for(var c=["retType"],l=[i],f=0;f<t;++f)u.push("arg"+f),c.push("argType"+f),l.push(e[f]),o+=`  var arg${f} = argType${f}.readValueFromPointer(args${s?"+"+s:""});
`,s+=e[f].mc;return o+=`  var rv = ${n===1?"new func":"func.call"}(${u.join(", ")});
`,i.Nc||(c.push("emval_returnValue"),l.push(e3),o+=`  return emval_returnValue(retType, destructorsRef, rv);
`),c.push(o+`};
`),t=X2(c)(...l),n=`methodCaller<(${e.map(p=>p.name).join(", ")}) => ${i.name}>`,C0(r1(n,t))},Ta:t=>{9<t&&(Z[t+1]+=1);},Ra:t=>{var e=c1(t);i2(e),u2(t);},F:(t,e)=>(t=w1(t,"_emval_take_value"),t=t.readValueFromPointer(e),y1(t)),oa:(t,e)=>{if(E1[t]&&(clearTimeout(E1[t].id),delete E1[t]),!e)return 0;var n=setTimeout(()=>{delete E1[t],L0(()=>s3(t,performance.now()));},e);return E1[t]={id:n,Uc:e},0},pa:(t,e,n,i)=>{var o=new Date().getFullYear(),s=new Date(o,0,1).getTimezoneOffset();o=new Date(o,6,1).getTimezoneOffset(),F[t>>2]=60*Math.max(s,o),t1[e>>2]=+(s!=o),e=u=>{var c=Math.abs(u);return `UTC${0<=u?"-":"+"}${String(Math.floor(c/60)).padStart(2,"0")}${String(c%60).padStart(2,"0")}`},t=e(s),e=e(o),o<s?(_1(t,n,17),_1(e,i,17)):(_1(t,i,17),_1(e,n,17));},qa:t=>{var e=k.length;if(t>>>=0,2147483648<t)return !1;for(var n=1;4>=n;n*=2){var i=e*(1+.2/n);i=Math.min(i,t+100663296);e:{i=(Math.min(2147483648,65536*Math.ceil(Math.max(t,i)/65536))-x1.buffer.byteLength+65535)/65536|0;try{x1.grow(i),F2();var o=1;break e}catch(s){}o=void 0;}if(o)return !0}return !1},Ca:(t,e)=>{var n=0;return r3().forEach((i,o)=>{var s=e+n;for(o=F[t+4*o>>2]=s,s=0;s<i.length;++s)X[o++]=i.charCodeAt(s);X[o]=0,n+=i.length+1;}),0},Da:(t,e)=>{var n=r3();F[t>>2]=n.length;var i=0;return n.forEach(o=>i+=o.length+1),F[e>>2]=i,0},za:()=>52,xa:()=>52,U:(t,e,n,i)=>{for(var o=0,s=0;s<n;s++){var u=F[e>>2],c=F[e+4>>2];e+=8;for(var l=0;l<c;l++){var f=t,p=k[u+l],C=M0[f];p===0||p===10?((f===1?T1:K)(m1(C)),C.length=0):C.push(p);}o+=c;}return F[i>>2]=o,0},Ia:Q0,n:D0,$:j0,La:J0,g:x0,u:O0,Na:A0,G:z0,J:N0,f:R0,_:q0,h:$0,Ma:B0,k:U0,R:H0,t:W0,V:a4,W:o4,Xa:I4,bb:C4,ha:l4,ka:d4,la:c4,fa:p4,db:g4,I:s4,a:S0,B:Z0,E:k0,X:r4,c:I0,Ka:G0,Ha:e4,e:T0,Y:t4,Q:i4,j:F0,y:n4,i:V0,p:Y0,s:K0,Z:X0,Wa:S4,Za:E4,Ya:P4,ab:b4,$a:L4,_a:M4,cb:w4,ia:h4,ga:f4,Va:T4,fb:_4,ea:v4,gb:m4,ja:u4,Ua:F4,eb:y4,q:t=>t,Ba:n3,sa:(t,e)=>(i3(k.subarray(t,t+e)),0)},w=function(){var n;function t(i){var o;return w=i.exports,x1=w.hb,F2(),P=w.mb,R2.unshift(w.ib),n1--,(o=d.monitorRunDependencies)==null||o.call(d,n1),n1==0&&(p1&&(i=p1,p1=null,i())),w}n1++,(n=d.monitorRunDependencies)==null||n.call(d,n1);var e={a:P0};if(d.instantiateWasm)try{return d.instantiateWasm(e,t)}catch(i){K(`Module.instantiateWasm callback failed with error: ${i}`),T(i);}return v1!=null||(v1=A2("DotLottiePlayer.wasm")?"DotLottiePlayer.wasm":d.locateFile?d.locateFile("DotLottiePlayer.wasm",U):U+"DotLottiePlayer.wasm"),Z3(e,function(i){t(i.instance);}).catch(T),{}}(),v2=t=>(v2=w.jb)(t),a3=t=>(a3=w.kb)(t),Q=t=>(Q=w.lb)(t),s3=(t,e)=>(s3=w.nb)(t,e),m=(t,e)=>(m=w.ob)(t,e),P1=t=>(P1=w.pb)(t),_=t=>(_=w.qb)(t),y=()=>(y=w.rb)(),c3=t=>(c3=w.sb)(t),d3=t=>(d3=w.tb)(t),u3=(t,e,n)=>(u3=w.ub)(t,e,n),h3=t=>(h3=w.vb)(t),l3=d.dynCall_ji=(t,e)=>(l3=d.dynCall_ji=w.wb)(t,e),f3=d.dynCall_viji=(t,e,n,i,o)=>(f3=d.dynCall_viji=w.xb)(t,e,n,i,o),p3=d.dynCall_jii=(t,e,n)=>(p3=d.dynCall_jii=w.yb)(t,e,n);d.dynCall_iijj=(t,e,n,i,o,s)=>(d.dynCall_iijj=w.zb)(t,e,n,i,o,s),d.dynCall_vijj=(t,e,n,i,o,s)=>(d.dynCall_vijj=w.Ab)(t,e,n,i,o,s);var v3=d.dynCall_vjiii=(t,e,n,i,o,s)=>(v3=d.dynCall_vjiii=w.Bb)(t,e,n,i,o,s),m3=d.dynCall_vij=(t,e,n,i)=>(m3=d.dynCall_vij=w.Cb)(t,e,n,i),_3=d.dynCall_viijii=(t,e,n,i,o,s,u)=>(_3=d.dynCall_viijii=w.Db)(t,e,n,i,o,s,u),y3=d.dynCall_jjji=(t,e,n,i,o,s)=>(y3=d.dynCall_jjji=w.Eb)(t,e,n,i,o,s),g3=d.dynCall_viijj=(t,e,n,i,o,s,u)=>(g3=d.dynCall_viijj=w.Fb)(t,e,n,i,o,s,u),w3=d.dynCall_viijji=(t,e,n,i,o,s,u,c)=>(w3=d.dynCall_viijji=w.Gb)(t,e,n,i,o,s,u,c),C3=d.dynCall_viij=(t,e,n,i,o)=>(C3=d.dynCall_viij=w.Hb)(t,e,n,i,o),b3=d.dynCall_iiiijj=(t,e,n,i,o,s,u,c)=>(b3=d.dynCall_iiiijj=w.Ib)(t,e,n,i,o,s,u,c),L3=d.dynCall_viiij=(t,e,n,i,o,s)=>(L3=d.dynCall_viiij=w.Jb)(t,e,n,i,o,s),M3=d.dynCall_viiji=(t,e,n,i,o,s)=>(M3=d.dynCall_viiji=w.Kb)(t,e,n,i,o,s),E3=d.dynCall_jiii=(t,e,n,i)=>(E3=d.dynCall_jiii=w.Lb)(t,e,n,i),P3=d.dynCall_viiiji=(t,e,n,i,o,s,u)=>(P3=d.dynCall_viiiji=w.Mb)(t,e,n,i,o,s,u),I3=d.dynCall_viiijj=(t,e,n,i,o,s,u,c)=>(I3=d.dynCall_viiijj=w.Nb)(t,e,n,i,o,s,u,c),S3=d.dynCall_viiiijjiiiiii=(t,e,n,i,o,s,u,c,l,f,p,C,L,I,S)=>(S3=d.dynCall_viiiijjiiiiii=w.Ob)(t,e,n,i,o,s,u,c,l,f,p,C,L,I,S),T3=d.dynCall_viiiijjiiii=(t,e,n,i,o,s,u,c,l,f,p,C,L)=>(T3=d.dynCall_viiiijjiiii=w.Pb)(t,e,n,i,o,s,u,c,l,f,p,C,L),F3=d.dynCall_iiiiiijjii=(t,e,n,i,o,s,u,c,l,f,p,C)=>(F3=d.dynCall_iiiiiijjii=w.Qb)(t,e,n,i,o,s,u,c,l,f,p,C),x3=d.dynCall_viiiijjii=(t,e,n,i,o,s,u,c,l,f,p)=>(x3=d.dynCall_viiiijjii=w.Rb)(t,e,n,i,o,s,u,c,l,f,p),R3=d.dynCall_viijiii=(t,e,n,i,o,s,u,c)=>(R3=d.dynCall_viijiii=w.Sb)(t,e,n,i,o,s,u,c),j3=d.dynCall_iji=(t,e,n,i)=>(j3=d.dynCall_iji=w.Tb)(t,e,n,i),A3=d.dynCall_vijjjj=(t,e,n,i,o,s,u,c,l,f)=>(A3=d.dynCall_vijjjj=w.Ub)(t,e,n,i,o,s,u,c,l,f);d.dynCall_vjii=(t,e,n,i,o)=>(d.dynCall_vjii=w.Vb)(t,e,n,i,o),d.dynCall_vjfii=(t,e,n,i,o,s)=>(d.dynCall_vjfii=w.Wb)(t,e,n,i,o,s),d.dynCall_vj=(t,e,n)=>(d.dynCall_vj=w.Xb)(t,e,n),d.dynCall_vjiiiii=(t,e,n,i,o,s,u,c)=>(d.dynCall_vjiiiii=w.Yb)(t,e,n,i,o,s,u,c),d.dynCall_vjiffii=(t,e,n,i,o,s,u,c)=>(d.dynCall_vjiffii=w.Zb)(t,e,n,i,o,s,u,c),d.dynCall_vjiiii=(t,e,n,i,o,s,u)=>(d.dynCall_vjiiii=w._b)(t,e,n,i,o,s,u),d.dynCall_iiiiij=(t,e,n,i,o,s,u)=>(d.dynCall_iiiiij=w.$b)(t,e,n,i,o,s,u),d.dynCall_iiiiijj=(t,e,n,i,o,s,u,c,l)=>(d.dynCall_iiiiijj=w.ac)(t,e,n,i,o,s,u,c,l),d.dynCall_iiiiiijj=(t,e,n,i,o,s,u,c,l,f)=>(d.dynCall_iiiiiijj=w.bc)(t,e,n,i,o,s,u,c,l,f);function I0(t,e,n){var i=y();try{P.get(t)(e,n);}catch(o){if(_(i),o!==o+0)throw o;m(1,0);}}function S0(t,e){var n=y();try{P.get(t)(e);}catch(i){if(_(n),i!==i+0)throw i;m(1,0);}}function T0(t,e,n,i){var o=y();try{P.get(t)(e,n,i);}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function F0(t,e,n,i,o){var s=y();try{P.get(t)(e,n,i,o);}catch(u){if(_(s),u!==u+0)throw u;m(1,0);}}function x0(t,e){var n=y();try{return P.get(t)(e)}catch(i){if(_(n),i!==i+0)throw i;m(1,0);}}function R0(t,e,n){var i=y();try{return P.get(t)(e,n)}catch(o){if(_(i),o!==o+0)throw o;m(1,0);}}function j0(t,e,n){var i=y();try{return P.get(t)(e,n)}catch(o){if(_(i),o!==o+0)throw o;m(1,0);}}function A0(t,e,n,i){var o=y();try{return P.get(t)(e,n,i)}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function k0(t,e,n){var i=y();try{P.get(t)(e,n);}catch(o){if(_(i),o!==o+0)throw o;m(1,0);}}function D0(t,e){var n=y();try{return P.get(t)(e)}catch(i){if(_(n),i!==i+0)throw i;m(1,0);}}function O0(t,e,n){var i=y();try{return P.get(t)(e,n)}catch(o){if(_(i),o!==o+0)throw o;m(1,0);}}function $0(t,e,n,i){var o=y();try{return P.get(t)(e,n,i)}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function W0(t,e,n,i,o,s){var u=y();try{return P.get(t)(e,n,i,o,s)}catch(c){if(_(u),c!==c+0)throw c;m(1,0);}}function z0(t,e,n,i,o,s){var u=y();try{return P.get(t)(e,n,i,o,s)}catch(c){if(_(u),c!==c+0)throw c;m(1,0);}}function U0(t,e,n,i,o){var s=y();try{return P.get(t)(e,n,i,o)}catch(u){if(_(s),u!==u+0)throw u;m(1,0);}}function B0(t,e,n,i,o){var s=y();try{return P.get(t)(e,n,i,o)}catch(u){if(_(s),u!==u+0)throw u;m(1,0);}}function H0(t,e,n,i,o,s,u){var c=y();try{return P.get(t)(e,n,i,o,s,u)}catch(l){if(_(c),l!==l+0)throw l;m(1,0);}}function N0(t,e,n,i,o,s){var u=y();try{return P.get(t)(e,n,i,o,s)}catch(c){if(_(u),c!==c+0)throw c;m(1,0);}}function V0(t,e,n,i,o,s){var u=y();try{P.get(t)(e,n,i,o,s);}catch(c){if(_(u),c!==c+0)throw c;m(1,0);}}function q0(t,e,n,i){var o=y();try{return P.get(t)(e,n,i)}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function J0(t,e,n,i){var o=y();try{return P.get(t)(e,n,i)}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function G0(t,e,n,i,o){var s=y();try{P.get(t)(e,n,i,o);}catch(u){if(_(s),u!==u+0)throw u;m(1,0);}}function Y0(t,e,n,i,o,s,u){var c=y();try{P.get(t)(e,n,i,o,s,u);}catch(l){if(_(c),l!==l+0)throw l;m(1,0);}}function K0(t,e,n,i,o,s,u,c){var l=y();try{P.get(t)(e,n,i,o,s,u,c);}catch(f){if(_(l),f!==f+0)throw f;m(1,0);}}function X0(t,e,n,i,o,s,u,c,l){var f=y();try{P.get(t)(e,n,i,o,s,u,c,l);}catch(p){if(_(f),p!==p+0)throw p;m(1,0);}}function Z0(t,e,n,i){var o=y();try{P.get(t)(e,n,i);}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function Q0(t,e,n,i){var o=y();try{return P.get(t)(e,n,i)}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function e4(t,e,n,i,o,s,u){var c=y();try{P.get(t)(e,n,i,o,s,u);}catch(l){if(_(c),l!==l+0)throw l;m(1,0);}}function t4(t,e,n,i,o){var s=y();try{P.get(t)(e,n,i,o);}catch(u){if(_(s),u!==u+0)throw u;m(1,0);}}function n4(t,e,n,i,o,s,u,c){var l=y();try{P.get(t)(e,n,i,o,s,u,c);}catch(f){if(_(l),f!==f+0)throw f;m(1,0);}}function r4(t,e,n,i){var o=y();try{P.get(t)(e,n,i);}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function i4(t,e,n,i,o,s){var u=y();try{P.get(t)(e,n,i,o,s);}catch(c){if(_(u),c!==c+0)throw c;m(1,0);}}function o4(t,e,n,i,o,s,u,c,l){var f=y();try{return P.get(t)(e,n,i,o,s,u,c,l)}catch(p){if(_(f),p!==p+0)throw p;m(1,0);}}function a4(t,e,n,i,o,s,u,c){var l=y();try{return P.get(t)(e,n,i,o,s,u,c)}catch(f){if(_(l),f!==f+0)throw f;m(1,0);}}function s4(t){var e=y();try{P.get(t)();}catch(n){if(_(e),n!==n+0)throw n;m(1,0);}}function c4(t,e,n){var i=y();try{return p3(t,e,n)}catch(o){if(_(i),o!==o+0)throw o;m(1,0);}}function d4(t,e){var n=y();try{return l3(t,e)}catch(i){if(_(n),i!==i+0)throw i;m(1,0);}}function u4(t,e,n,i,o){var s=y();try{f3(t,e,n,i,o);}catch(u){if(_(s),u!==u+0)throw u;m(1,0);}}function h4(t,e,n,i,o,s){var u=y();try{M3(t,e,n,i,o,s);}catch(c){if(_(u),c!==c+0)throw c;m(1,0);}}function l4(t,e,n,i){var o=y();try{return j3(t,e,n,i)}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function f4(t,e,n,i,o,s,u){var c=y();try{_3(t,e,n,i,o,s,u);}catch(l){if(_(c),l!==l+0)throw l;m(1,0);}}function p4(t,e,n,i){var o=y();try{return E3(t,e,n,i)}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function v4(t,e,n,i,o,s,u,c){var l=y();try{w3(t,e,n,i,o,s,u,c);}catch(f){if(_(l),f!==f+0)throw f;m(1,0);}}function m4(t,e,n,i){var o=y();try{m3(t,e,n,i);}catch(s){if(_(o),s!==s+0)throw s;m(1,0);}}function _4(t,e,n,i,o,s,u){var c=y();try{g3(t,e,n,i,o,s,u);}catch(l){if(_(c),l!==l+0)throw l;m(1,0);}}function y4(t,e,n,i,o,s){var u=y();try{v3(t,e,n,i,o,s);}catch(c){if(_(u),c!==c+0)throw c;m(1,0);}}function g4(t,e,n,i,o,s){var u=y();try{return y3(t,e,n,i,o,s)}catch(c){if(_(u),c!==c+0)throw c;m(1,0);}}function w4(t,e,n,i,o){var s=y();try{C3(t,e,n,i,o);}catch(u){if(_(s),u!==u+0)throw u;m(1,0);}}function C4(t,e,n,i,o,s,u,c){var l=y();try{return b3(t,e,n,i,o,s,u,c)}catch(f){if(_(l),f!==f+0)throw f;m(1,0);}}function b4(t,e,n,i,o,s){var u=y();try{L3(t,e,n,i,o,s);}catch(c){if(_(u),c!==c+0)throw c;m(1,0);}}function L4(t,e,n,i,o,s,u){var c=y();try{P3(t,e,n,i,o,s,u);}catch(l){if(_(c),l!==l+0)throw l;m(1,0);}}function M4(t,e,n,i,o,s,u,c){var l=y();try{I3(t,e,n,i,o,s,u,c);}catch(f){if(_(l),f!==f+0)throw f;m(1,0);}}function E4(t,e,n,i,o,s,u,c,l,f,p,C,L){var I=y();try{T3(t,e,n,i,o,s,u,c,l,f,p,C,L);}catch(S){if(_(I),S!==S+0)throw S;m(1,0);}}function P4(t,e,n,i,o,s,u,c,l,f,p,C,L,I,S){var B=y();try{S3(t,e,n,i,o,s,u,c,l,f,p,C,L,I,S);}catch(V){if(_(B),V!==V+0)throw V;m(1,0);}}function I4(t,e,n,i,o,s,u,c,l,f,p,C){var L=y();try{return F3(t,e,n,i,o,s,u,c,l,f,p,C)}catch(I){if(_(L),I!==I+0)throw I;m(1,0);}}function S4(t,e,n,i,o,s,u,c,l,f,p){var C=y();try{x3(t,e,n,i,o,s,u,c,l,f,p);}catch(L){if(_(C),L!==L+0)throw L;m(1,0);}}function T4(t,e,n,i,o,s,u,c){var l=y();try{R3(t,e,n,i,o,s,u,c);}catch(f){if(_(l),f!==f+0)throw f;m(1,0);}}function F4(t,e,n,i,o,s,u,c,l,f){var p=y();try{A3(t,e,n,i,o,s,u,c,l,f);}catch(C){if(_(p),C!==C+0)throw C;m(1,0);}}var H1;p1=function t(){H1||k3(),H1||(p1=t);};function k3(){function t(){var n;if(!H1&&(H1=!0,d.calledRun=!0,!R1)){if(Z1(R2),g(d),(n=d.onRuntimeInitialized)==null||n.call(d),d.postRun)for(typeof d.postRun=="function"&&(d.postRun=[d.postRun]);d.postRun.length;){var e=d.postRun.shift();j2.unshift(e);}Z1(j2);}}if(!(0<n1)){if(d.preRun)for(typeof d.preRun=="function"&&(d.preRun=[d.preRun]);d.preRun.length;)K3();Z1(x2),0<n1||(d.setStatus?(d.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>d.setStatus(""),1),t();},1)):t());}}if(d.preInit)for(typeof d.preInit=="function"&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();return k3(),h=R,h}})(),B3=A4;var o1=class{constructor(){throw new Error("RendererLoader is a static class and cannot be instantiated.")}static _tryLoad(r){return E(this,null,function*(){return yield B3({locateFile:()=>r})})}static _loadWithBackup(){return E(this,null,function*(){return this._ModulePromise||(this._ModulePromise=this._tryLoad(this._wasmURL).catch(r=>E(this,null,function*(){let a=`https://unpkg.com/${C2}@${w2}/dist/dotlottie-player.wasm`;console.warn(`Primary WASM load failed from ${this._wasmURL}. Error: ${r.message}`),console.warn(`Attempting to load WASM from backup URL: ${a}`);try{return yield this._tryLoad(a)}catch(h){throw console.error(`Primary WASM URL failed: ${r.message}`),console.error(`Backup WASM URL failed: ${h.message}`),new Error("WASM loading failed from all sources.")}}))),this._ModulePromise})}static load(){return E(this,null,function*(){return this._loadWithBackup()})}static setWasmUrl(r){r!==this._wasmURL&&(this._wasmURL=r,this._ModulePromise=null);}};b(o1,"_ModulePromise",null),b(o1,"_wasmURL",`https://cdn.jsdelivr.net/npm/${C2}@${w2}/dist/dotlottie-player.wasm`);var h1=class{constructor(){b(this,"_eventListeners",new Map);}addEventListener(r,a){let h=this._eventListeners.get(r);h||(h=new Set,this._eventListeners.set(r,h)),h.add(a);}removeEventListener(r,a){let h=this._eventListeners.get(r);h&&(a?(h.delete(a),h.size===0&&this._eventListeners.delete(r)):this._eventListeners.delete(r));}dispatch(r){let a=this._eventListeners.get(r.type);a==null||a.forEach(h=>h(r));}removeAllEventListeners(){this._eventListeners.clear();}};var H=class{static _initializeObserver(){if(this._observer)return;let r=a=>{a.forEach(h=>{let d=this._observedCanvases.get(h.target);d&&(h.isIntersecting?d.unfreeze():d.freeze());});};this._observer=new IntersectionObserver(r,{threshold:0});}static observe(r,a){var h;this._initializeObserver(),!this._observedCanvases.has(r)&&(this._observedCanvases.set(r,a),(h=this._observer)==null||h.observe(r));}static unobserve(r){var a,h;(a=this._observer)==null||a.unobserve(r),this._observedCanvases.delete(r),this._observedCanvases.size===0&&((h=this._observer)==null||h.disconnect(),this._observer=null);}};b(H,"_observer",null),b(H,"_observedCanvases",new Map);var N=class{static _initializeObserver(){if(this._observer)return;let r=a=>{a.forEach(h=>{let d=this._observedCanvases.get(h.target);if(!d)return;let[g,T]=d;clearTimeout(T);let R=setTimeout(()=>{g.resize();},100);this._observedCanvases.set(h.target,[g,R]);});};this._observer=new ResizeObserver(r);}static observe(r,a){var h;this._initializeObserver(),!this._observedCanvases.has(r)&&(this._observedCanvases.set(r,[a,0]),(h=this._observer)==null||h.observe(r));}static unobserve(r){var h;let a=this._observedCanvases.get(r);if(a){let d=a[1];d&&clearTimeout(d);}(h=this._observer)==null||h.unobserve(r),this._observedCanvases.delete(r),!this._observedCanvases.size&&this._observer&&(this._observer.disconnect(),this._observer=null);}};b(N,"_observer",null),b(N,"_observedCanvases",new Map);function k4(v){return /^#([\da-f]{6}|[\da-f]{8})$/iu.test(v)}function N3(v){if(!k4(v))return 0;let r=v.replace("#","");return r=r.length===6?`${r}ff`:r,parseInt(r,16)}function b2(v){if(v.byteLength<4)return !1;let r=new Uint8Array(v.slice(0,J1.byteLength));for(let a=0;a<J1.length;a+=1)if(J1[a]!==r[a])return !1;return !0}function H3(v){return z3.every(r=>Object.prototype.hasOwnProperty.call(v,r))}function L2(v){if(typeof v=="string")try{return H3(JSON.parse(v))}catch(r){return !1}else return H3(v)}function e1(){return 1+((O?window.devicePixelRatio:1)-1)*U3}function G1(v){let r=v.getBoundingClientRect();return r.top>=0&&r.left>=0&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&r.right<=(window.innerWidth||document.documentElement.clientWidth)}var M2=(v,r)=>v==="reverse"?r.Mode.Reverse:v==="bounce"?r.Mode.Bounce:v==="reverse-bounce"?r.Mode.ReverseBounce:r.Mode.Forward,D4=(v,r)=>v==="contain"?r.Fit.Contain:v==="cover"?r.Fit.Cover:v==="fill"?r.Fit.Fill:v==="fit-height"?r.Fit.FitHeight:v==="fit-width"?r.Fit.FitWidth:r.Fit.None,O4=(v,r)=>{let a=new r.VectorFloat;return a.push_back(v[0]),a.push_back(v[1]),a},E2=(v,r)=>{let a=new r.VectorFloat;return v.length!==2||(a.push_back(v[0]),a.push_back(v[1])),a},P2=(v,r)=>{var a,h;return v?{align:O4((a=v.align)!=null?a:[.5,.5],r),fit:D4((h=v.fit)!=null?h:"contain",r)}:r.createDefaultLayout()},x=class x{constructor(r){b(this,"_canvas");b(this,"_context",null);b(this,"_eventManager");b(this,"_animationFrameId",null);b(this,"_frameManager");b(this,"_dotLottieCore",null);b(this,"_renderConfig",{});b(this,"_isFrozen",!1);b(this,"_backgroundColor",null);b(this,"_pointerUpMethod");b(this,"_pointerDownMethod");b(this,"_pointerMoveMethod");b(this,"_pointerEnterMethod");b(this,"_pointerExitMethod");var a,h,d;this._canvas=r.canvas,this._eventManager=new h1,this._frameManager=new q1,this._renderConfig=z(D({},r.renderConfig),{devicePixelRatio:((a=r.renderConfig)==null?void 0:a.devicePixelRatio)||e1(),freezeOnOffscreen:(d=(h=r.renderConfig)==null?void 0:h.freezeOnOffscreen)!=null?d:!0}),o1.load().then(g=>{var T,R,j,$,U,l1,T1,K;x._wasmModule=g,this._dotLottieCore=new g.DotLottiePlayer({themeId:(T=r.themeId)!=null?T:"",stateMachineId:"",autoplay:(R=r.autoplay)!=null?R:!1,backgroundColor:0,loopAnimation:(j=r.loop)!=null?j:!1,mode:M2(($=r.mode)!=null?$:"forward",g),segment:E2((U=r.segment)!=null?U:[],g),speed:(l1=r.speed)!=null?l1:1,useFrameInterpolation:(T1=r.useFrameInterpolation)!=null?T1:!0,marker:(K=r.marker)!=null?K:"",layout:P2(r.layout,g)}),this._eventManager.dispatch({type:"ready"}),r.data?this._loadFromData(r.data):r.src&&this._loadFromSrc(r.src),r.backgroundColor&&this.setBackgroundColor(r.backgroundColor);}).catch(g=>{this._eventManager.dispatch({type:"loadError",error:new Error(`Failed to load wasm module: ${g}`)});}),this._pointerUpMethod=this._onPointerUp.bind(this),this._pointerDownMethod=this._onPointerDown.bind(this),this._pointerMoveMethod=this._onPointerMove.bind(this),this._pointerEnterMethod=this._onPointerEnter.bind(this),this._pointerExitMethod=this._onPointerLeave.bind(this);}_dispatchError(r){console.error(r),this._eventManager.dispatch({type:"loadError",error:new Error(r)});}_fetchData(r){return E(this,null,function*(){let a=yield fetch(r);if(!a.ok)throw new Error(`Failed to fetch animation data from URL: ${r}. ${a.status}: ${a.statusText}`);let h=yield a.arrayBuffer();return b2(h)?h:new TextDecoder().decode(h)})}_loadFromData(r){if(this._dotLottieCore===null)return;let a=this._canvas.width,h=this._canvas.height,d=!1;if(typeof r=="string"){if(!L2(r)){this._dispatchError("Invalid Lottie JSON string: The provided string does not conform to the Lottie JSON format.");return}d=this._dotLottieCore.loadAnimationData(r,a,h);}else if(r instanceof ArrayBuffer){if(!b2(r)){this._dispatchError("Invalid dotLottie ArrayBuffer: The provided ArrayBuffer does not conform to the dotLottie format.");return}d=this._dotLottieCore.loadDotLottieData(r,a,h);}else if(typeof r=="object"){if(!L2(r)){this._dispatchError("Invalid Lottie JSON object: The provided object does not conform to the Lottie JSON format.");return}d=this._dotLottieCore.loadAnimationData(JSON.stringify(r),a,h);}else {this._dispatchError(`Unsupported data type for animation data. Expected: 
          - string (Lottie JSON),
          - ArrayBuffer (dotLottie),
          - object (Lottie JSON). 
          Received: ${typeof r}`);return}d?(this._eventManager.dispatch({type:"load"}),O&&this.resize(),this._eventManager.dispatch({type:"frame",currentFrame:this.currentFrame}),this._render(),this._dotLottieCore.config().autoplay&&(this._dotLottieCore.play(),this._dotLottieCore.isPlaying()?(this._eventManager.dispatch({type:"play"}),this._animationFrameId=this._frameManager.requestAnimationFrame(this._draw.bind(this))):console.error("something went wrong, the animation was suppose to autoplay")),O&&this._canvas instanceof HTMLCanvasElement&&(this._renderConfig.freezeOnOffscreen&&H.observe(this._canvas,this),this._renderConfig.autoResize&&N.observe(this._canvas,this))):this._dispatchError("Failed to load animation data");}_loadFromSrc(r){this._fetchData(r).then(a=>this._loadFromData(a)).catch(a=>this._dispatchError(`Failed to load animation data from URL: ${r}. ${a}`));}get buffer(){return this._dotLottieCore?this._dotLottieCore.buffer():null}get activeAnimationId(){var r;return (r=this._dotLottieCore)==null?void 0:r.activeAnimationId()}get activeThemeId(){var r;return (r=this._dotLottieCore)==null?void 0:r.activeThemeId()}get layout(){var a;let r=(a=this._dotLottieCore)==null?void 0:a.config().layout;if(r)return {align:[r.align.get(0),r.align.get(1)],fit:(()=>{var h,d,g,T,R,j;switch(r.fit){case((h=x._wasmModule)==null?void 0:h.Fit.Contain):return "contain";case((d=x._wasmModule)==null?void 0:d.Fit.Cover):return "cover";case((g=x._wasmModule)==null?void 0:g.Fit.Fill):return "fill";case((T=x._wasmModule)==null?void 0:T.Fit.FitHeight):return "fit-height";case((R=x._wasmModule)==null?void 0:R.Fit.FitWidth):return "fit-width";case((j=x._wasmModule)==null?void 0:j.Fit.None):return "none";default:return "contain"}})()}}get marker(){var a;return (a=this._dotLottieCore)==null?void 0:a.config().marker}get manifest(){var r;try{let a=(r=this._dotLottieCore)==null?void 0:r.manifestString();if(this._dotLottieCore===null||!a)return null;let h=JSON.parse(a);return Object.keys(h).length===0?null:h}catch(a){return null}}get renderConfig(){return this._renderConfig}get segment(){var a;let r=(a=this._dotLottieCore)==null?void 0:a.config().segment;if(r&&r.size()===2)return [r.get(0),r.get(1)]}get loop(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.config().loopAnimation)!=null?a:!1}get mode(){var a,h,d,g;let r=(a=this._dotLottieCore)==null?void 0:a.config().mode;return r===((h=x._wasmModule)==null?void 0:h.Mode.Reverse)?"reverse":r===((d=x._wasmModule)==null?void 0:d.Mode.Bounce)?"bounce":r===((g=x._wasmModule)==null?void 0:g.Mode.ReverseBounce)?"reverse-bounce":"forward"}get isFrozen(){return this._isFrozen}get backgroundColor(){var r;return (r=this._backgroundColor)!=null?r:""}get autoplay(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.config().autoplay)!=null?a:!1}get useFrameInterpolation(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.config().useFrameInterpolation)!=null?a:!1}get speed(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.config().speed)!=null?a:0}get isReady(){return this._dotLottieCore!==null}get isLoaded(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.isLoaded())!=null?a:!1}get isPlaying(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.isPlaying())!=null?a:!1}get isPaused(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.isPaused())!=null?a:!1}get isStopped(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.isStopped())!=null?a:!1}get currentFrame(){return this._dotLottieCore?Math.round(this._dotLottieCore.currentFrame()*100)/100:0}get loopCount(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.loopCount())!=null?a:0}get totalFrames(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.totalFrames())!=null?a:0}get duration(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.duration())!=null?a:0}get segmentDuration(){var r,a;return (a=(r=this._dotLottieCore)==null?void 0:r.segmentDuration())!=null?a:0}get canvas(){return this._canvas}load(r){var a,h,d,g,T,R,j,$,U;this._dotLottieCore===null||x._wasmModule===null||(this._animationFrameId!==null&&(this._frameManager.cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null),this._isFrozen=!1,this._dotLottieCore.setConfig({themeId:(a=r.themeId)!=null?a:"",stateMachineId:"",autoplay:(h=r.autoplay)!=null?h:!1,backgroundColor:0,loopAnimation:(d=r.loop)!=null?d:!1,mode:M2((g=r.mode)!=null?g:"forward",x._wasmModule),segment:E2((T=r.segment)!=null?T:[],x._wasmModule),speed:(R=r.speed)!=null?R:1,useFrameInterpolation:(j=r.useFrameInterpolation)!=null?j:!0,marker:($=r.marker)!=null?$:"",layout:P2(r.layout,x._wasmModule)}),r.data?this._loadFromData(r.data):r.src&&this._loadFromSrc(r.src),this.setBackgroundColor((U=r.backgroundColor)!=null?U:""));}_render(){if(this._dotLottieCore===null)return !1;if(!this._context&&"getContext"in this._canvas&&typeof this._canvas.getContext=="function"&&(this._context=this._canvas.getContext("2d")),this._dotLottieCore.render()){if(this._context){let a=this._dotLottieCore.buffer(),h=new Uint8ClampedArray(a,0,this._canvas.width*this._canvas.height*4),d=null;typeof ImageData=="undefined"?(d=this._context.createImageData(this._canvas.width,this._canvas.height),d.data.set(h)):d=new ImageData(h,this._canvas.width,this._canvas.height),this._context.putImageData(d,0,0);}return this._eventManager.dispatch({type:"render",currentFrame:this.currentFrame}),!0}return !1}_draw(){if(!(this._dotLottieCore===null||!this._dotLottieCore.isPlaying()))try{let r=Math.round(this._dotLottieCore.requestFrame()*1e3)/1e3;if(this._dotLottieCore.setFrame(r)&&(this._eventManager.dispatch({type:"frame",currentFrame:this.currentFrame}),this._render()&&this._dotLottieCore.isComplete()))if(this._dotLottieCore.config().loopAnimation)this._eventManager.dispatch({type:"loop",loopCount:this._dotLottieCore.loopCount()});else {this._eventManager.dispatch({type:"complete"});return}this._animationFrameId=this._frameManager.requestAnimationFrame(this._draw.bind(this));}catch(r){console.error("Error in animation frame:",r),this._eventManager.dispatch({type:"renderError",error:r}),r instanceof WebAssembly.RuntimeError&&this.destroy();}}play(){if(this._dotLottieCore===null)return;this._animationFrameId!==null&&(this._frameManager.cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null),(this._dotLottieCore.play()||this._dotLottieCore.isPlaying())&&(this._isFrozen=!1,this._eventManager.dispatch({type:"play"}),this._animationFrameId=this._frameManager.requestAnimationFrame(this._draw.bind(this))),O&&this._canvas instanceof HTMLCanvasElement&&this._renderConfig.freezeOnOffscreen&&!G1(this._canvas)&&this.freeze();}pause(){if(this._dotLottieCore===null)return;(this._dotLottieCore.pause()||this._dotLottieCore.isPaused())&&this._eventManager.dispatch({type:"pause"});}stop(){if(this._dotLottieCore===null)return;this._dotLottieCore.stop()&&(this._eventManager.dispatch({type:"frame",currentFrame:this.currentFrame}),this._render(),this._eventManager.dispatch({type:"stop"}));}setFrame(r){if(this._dotLottieCore===null||r<0||r>this._dotLottieCore.totalFrames())return;this._dotLottieCore.seek(r)&&(this._eventManager.dispatch({type:"frame",currentFrame:this.currentFrame}),this._render());}setSpeed(r){this._dotLottieCore!==null&&this._dotLottieCore.setConfig(z(D({},this._dotLottieCore.config()),{speed:r}));}setBackgroundColor(r){this._dotLottieCore!==null&&(O&&this._canvas instanceof HTMLCanvasElement?this._canvas.style.backgroundColor=r:this._dotLottieCore.setConfig(z(D({},this._dotLottieCore.config()),{backgroundColor:N3(r)})),this._backgroundColor=r);}setLoop(r){this._dotLottieCore!==null&&this._dotLottieCore.setConfig(z(D({},this._dotLottieCore.config()),{loopAnimation:r}));}setUseFrameInterpolation(r){this._dotLottieCore!==null&&this._dotLottieCore.setConfig(z(D({},this._dotLottieCore.config()),{useFrameInterpolation:r}));}addEventListener(r,a){this._eventManager.addEventListener(r,a);}removeEventListener(r,a){this._eventManager.removeEventListener(r,a);}destroy(){var r;this._animationFrameId!==null&&(this._frameManager.cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null),O&&this._canvas instanceof HTMLCanvasElement&&(H.unobserve(this._canvas),N.unobserve(this._canvas)),(r=this._dotLottieCore)==null||r.delete(),this._dotLottieCore=null,this._context=null,this._eventManager.dispatch({type:"destroy"}),this._eventManager.removeAllEventListeners(),this._cleanupStateMachineListeners();}freeze(){this._animationFrameId!==null&&(this._frameManager.cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null,this._isFrozen=!0,this._eventManager.dispatch({type:"freeze"}));}unfreeze(){this._animationFrameId===null&&(this._animationFrameId=this._frameManager.requestAnimationFrame(this._draw.bind(this)),this._isFrozen=!1,this._eventManager.dispatch({type:"unfreeze"}));}resize(){if(!this._dotLottieCore||!this.isLoaded)return;if(O&&this._canvas instanceof HTMLCanvasElement){let a=this._renderConfig.devicePixelRatio||window.devicePixelRatio||1,{height:h,width:d}=this._canvas.getBoundingClientRect();h!==0&&d!==0&&(this._canvas.width=d*a,this._canvas.height=h*a);}this._dotLottieCore.resize(this._canvas.width,this._canvas.height)&&this._render();}setSegment(r,a){this._dotLottieCore===null||x._wasmModule===null||this._dotLottieCore.setConfig(z(D({},this._dotLottieCore.config()),{segment:E2([r,a],x._wasmModule)}));}setMode(r){this._dotLottieCore===null||x._wasmModule===null||this._dotLottieCore.setConfig(z(D({},this._dotLottieCore.config()),{mode:M2(r,x._wasmModule)}));}setRenderConfig(r){let g=r,{devicePixelRatio:a,freezeOnOffscreen:h}=g,d=V1(g,["devicePixelRatio","freezeOnOffscreen"]);this._renderConfig=z(D(D({},this._renderConfig),d),{devicePixelRatio:a||e1(),freezeOnOffscreen:h!=null?h:!0}),O&&this._canvas instanceof HTMLCanvasElement&&(this._renderConfig.autoResize?N.observe(this._canvas,this):N.unobserve(this._canvas),this._renderConfig.freezeOnOffscreen?H.observe(this._canvas,this):(H.unobserve(this._canvas),this._isFrozen&&this.unfreeze()));}loadAnimation(r){if(this._dotLottieCore===null||this._dotLottieCore.activeAnimationId()===r)return;this._dotLottieCore.loadAnimation(r,this._canvas.width,this._canvas.height)?(this._eventManager.dispatch({type:"load"}),this.resize()):this._eventManager.dispatch({type:"loadError",error:new Error(`Failed to animation :${r}`)});}setMarker(r){this._dotLottieCore!==null&&this._dotLottieCore.setConfig(z(D({},this._dotLottieCore.config()),{marker:r}));}markers(){var a;let r=(a=this._dotLottieCore)==null?void 0:a.markers();if(r){let h=[];for(let d=0;d<r.size();d+=1){let g=r.get(d);h.push({name:g.name,time:g.time,duration:g.duration});}return h}return []}setTheme(r){if(this._dotLottieCore===null)return !1;let a=this._dotLottieCore.setTheme(r);return this._render(),a}resetTheme(){return this._dotLottieCore===null?!1:this._dotLottieCore.resetTheme()}setThemeData(r){if(this._dotLottieCore===null)return !1;let a=this._dotLottieCore.setThemeData(r);return this._render(),a}setSlots(r){this._dotLottieCore!==null&&this._dotLottieCore.setSlots(r);}setLayout(r){this._dotLottieCore===null||x._wasmModule===null||this._dotLottieCore.setConfig(z(D({},this._dotLottieCore.config()),{layout:P2(r,x._wasmModule)}));}setViewport(r,a,h,d){return this._dotLottieCore===null?!1:this._dotLottieCore.setViewport(r,a,h,d)}static setWasmUrl(r){o1.setWasmUrl(r);}loadStateMachine(r){var a,h;return (h=(a=this._dotLottieCore)==null?void 0:a.stateMachineLoad(r))!=null?h:!1}startStateMachine(){if(x._wasmModule===null||this._dotLottieCore===null)return !1;let r=x._wasmModule.createDefaultOpenURL(),a=this._dotLottieCore.stateMachineStart(r);return a&&this._setupStateMachineListeners(),a}stopStateMachine(){var a,h;let r=(h=(a=this._dotLottieCore)==null?void 0:a.stateMachineStop())!=null?h:!1;return r&&this._cleanupStateMachineListeners(),r}_getPointerPosition(r){let a=this._canvas.getBoundingClientRect(),h=this._canvas.width/a.width,d=this._canvas.height/a.height,g=this._renderConfig.devicePixelRatio||window.devicePixelRatio||1,T=(r.clientX-a.left)*h/g,R=(r.clientY-a.top)*d/g;return {x:T,y:R}}_onPointerUp(r){let{x:a,y:h}=this._getPointerPosition(r);this.postPointerUpEvent(a,h);}_onPointerDown(r){let{x:a,y:h}=this._getPointerPosition(r);this.postPointerDownEvent(a,h);}_onPointerMove(r){let{x:a,y:h}=this._getPointerPosition(r);this.postPointerMoveEvent(a,h);}_onPointerEnter(r){let{x:a,y:h}=this._getPointerPosition(r);this.postPointerEnterEvent(a,h);}_onPointerLeave(r){let{x:a,y:h}=this._getPointerPosition(r);this.postPointerExitEvent(a,h);}postPointerUpEvent(r,a){var h;return (h=this._dotLottieCore)==null?void 0:h.stateMachinePostPointerUpEvent(r,a)}postPointerDownEvent(r,a){var h;return (h=this._dotLottieCore)==null?void 0:h.stateMachinePostPointerDownEvent(r,a)}postPointerMoveEvent(r,a){var h;return (h=this._dotLottieCore)==null?void 0:h.stateMachinePostPointerMoveEvent(r,a)}postPointerEnterEvent(r,a){var h;return (h=this._dotLottieCore)==null?void 0:h.stateMachinePostPointerEnterEvent(r,a)}postPointerExitEvent(r,a){var h;return (h=this._dotLottieCore)==null?void 0:h.stateMachinePostPointerExitEvent(r,a)}getStateMachineListeners(){if(!this._dotLottieCore)return [];let r=this._dotLottieCore.stateMachineFrameworkSetup(),a=[];for(let h=0;h<r.size();h+=1)a.push(r.get(h));return a}_setupStateMachineListeners(){if(O&&this._canvas instanceof HTMLCanvasElement&&this._dotLottieCore!==null&&this.isLoaded){let r=this.getStateMachineListeners();r.includes("PointerUp")&&this._canvas.addEventListener("pointerup",this._pointerUpMethod),r.includes("PointerDown")&&this._canvas.addEventListener("pointerdown",this._pointerDownMethod),r.includes("PointerMove")&&this._canvas.addEventListener("pointermove",this._pointerMoveMethod),r.includes("PointerEnter")&&this._canvas.addEventListener("pointerenter",this._pointerEnterMethod),r.includes("PointerExit")&&this._canvas.addEventListener("pointerleave",this._pointerExitMethod);}}_cleanupStateMachineListeners(){O&&this._canvas instanceof HTMLCanvasElement&&(this._canvas.removeEventListener("pointerup",this._pointerUpMethod),this._canvas.removeEventListener("pointerdown",this._pointerDownMethod),this._canvas.removeEventListener("pointermove",this._pointerMoveMethod),this._canvas.removeEventListener("pointerenter",this._pointerEnterMethod),this._canvas.removeEventListener("pointerleave",this._pointerExitMethod));}loadStateMachineData(r){var a,h;return (h=(a=this._dotLottieCore)==null?void 0:a.stateMachineLoadData(r))!=null?h:!1}animationSize(){var h,d,g,T;let r=(d=(h=this._dotLottieCore)==null?void 0:h.animationSize().get(0))!=null?d:0,a=(T=(g=this._dotLottieCore)==null?void 0:g.animationSize().get(1))!=null?T:0;return {width:r,height:a}}setStateMachineBooleanContext(r,a){var h,d;return (d=(h=this._dotLottieCore)==null?void 0:h.stateMachineSetBooleanInput(r,a))!=null?d:!1}setStateMachineNumericContext(r,a){var h,d;return (d=(h=this._dotLottieCore)==null?void 0:h.stateMachineSetNumericInput(r,a))!=null?d:!1}setStateMachineStringContext(r,a){var h,d;return (d=(h=this._dotLottieCore)==null?void 0:h.stateMachineSetStringInput(r,a))!=null?d:!1}getLayerBoundingBox(r){var d;let a=(d=this._dotLottieCore)==null?void 0:d.getLayerBounds(r);if(!a||a.size()!==8)return;let h=[];for(let g=0;g<8;g+=1)h.push(a.get(g));return h}static transformThemeToLottieSlots(r,a){var h,d;return (d=(h=x._wasmModule)==null?void 0:h.transformThemeToLottieSlots(r,a))!=null?d:""}};b(x,"_wasmModule",null);var V3=x;var I2=class{constructor(){if(typeof Worker=="undefined")throw new Error("Worker is not supported in this environment.");let r=new Blob([new Uint8Array([34,117,115,101,32,115,116,114,105,99,116,34,59,10,40,40,41,32,61,62,32,123,10,32,32,118,97,114,32,95,95,100,101,102,80,114,111,112,32,61,32,79,98,106,101,99,116,46,100,101,102,105,110,101,80,114,111,112,101,114,116,121,59,10,32,32,118,97,114,32,95,95,100,101,102,80,114,111,112,115,32,61,32,79,98,106,101,99,116,46,100,101,102,105,110,101,80,114,111,112,101,114,116,105,101,115,59,10,32,32,118,97,114,32,95,95,103,101,116,79,119,110,80,114,111,112,68,101,115,99,115,32,61,32,79,98,106,101,99,116,46,103,101,116,79,119,110,80,114,111,112,101,114,116,121,68,101,115,99,114,105,112,116,111,114,115,59,10,32,32,118,97,114,32,95,95,103,101,116,79,119,110,80,114,111,112,83,121,109,98,111,108,115,32,61,32,79,98,106,101,99,116,46,103,101,116,79,119,110,80,114,111,112,101,114,116,121,83,121,109,98,111,108,115,59,10,32,32,118,97,114,32,95,95,104,97,115,79,119,110,80,114,111,112,32,61,32,79,98,106,101,99,116,46,112,114,111,116,111,116,121,112,101,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,59,10,32,32,118,97,114,32,95,95,112,114,111,112,73,115,69,110,117,109,32,61,32,79,98,106,101,99,116,46,112,114,111,116,111,116,121,112,101,46,112,114,111,112,101,114,116,121,73,115,69,110,117,109,101,114,97,98,108,101,59,10,32,32,118,97,114,32,95,95,100,101,102,78,111,114,109,97,108,80,114,111,112,32,61,32,40,111,98,106,44,32,107,101,121,44,32,118,97,108,117,101,41,32,61,62,32,107,101,121,32,105,110,32,111,98,106,32,63,32,95,95,100,101,102,80,114,111,112,40,111,98,106,44,32,107,101,121,44,32,123,32,101,110,117,109,101,114,97,98,108,101,58,32,116,114,117,101,44,32,99,111,110,102,105,103,117,114,97,98,108,101,58,32,116,114,117,101,44,32,119,114,105,116,97,98,108,101,58,32,116,114,117,101,44,32,118,97,108,117,101,32,125,41,32,58,32,111,98,106,91,107,101,121,93,32,61,32,118,97,108,117,101,59,10,32,32,118,97,114,32,95,95,115,112,114,101,97,100,86,97,108,117,101,115,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,102,111,114,32,40,118,97,114,32,112,114,111,112,32,105,110,32,98,32,124,124,32,40,98,32,61,32,123,125,41,41,10,32,32,32,32,32,32,105,102,32,40,95,95,104,97,115,79,119,110,80,114,111,112,46,99,97,108,108,40,98,44,32,112,114,111,112,41,41,10,32,32,32,32,32,32,32,32,95,95,100,101,102,78,111,114,109,97,108,80,114,111,112,40,97,44,32,112,114,111,112,44,32,98,91,112,114,111,112,93,41,59,10,32,32,32,32,105,102,32,40,95,95,103,101,116,79,119,110,80,114,111,112,83,121,109,98,111,108,115,41,10,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,112,114,111,112,32,111,102,32,95,95,103,101,116,79,119,110,80,114,111,112,83,121,109,98,111,108,115,40,98,41,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,95,95,112,114,111,112,73,115,69,110,117,109,46,99,97,108,108,40,98,44,32,112,114,111,112,41,41,10,32,32,32,32,32,32,32,32,32,32,95,95,100,101,102,78,111,114,109,97,108,80,114,111,112,40,97,44,32,112,114,111,112,44,32,98,91,112,114,111,112,93,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,114,101,116,117,114,110,32,97,59,10,32,32,125,59,10,32,32,118,97,114,32,95,95,115,112,114,101,97,100,80,114,111,112,115,32,61,32,40,97,44,32,98,41,32,61,62,32,95,95,100,101,102,80,114,111,112,115,40,97,44,32,95,95,103,101,116,79,119,110,80,114,111,112,68,101,115,99,115,40,98,41,41,59,10,32,32,118,97,114,32,95,95,111,98,106,82,101,115,116,32,61,32,40,115,111,117,114,99,101,44,32,101,120,99,108,117,100,101,41,32,61,62,32,123,10,32,32,32,32,118,97,114,32,116,97,114,103,101,116,32,61,32,123,125,59,10,32,32,32,32,102,111,114,32,40,118,97,114,32,112,114,111,112,32,105,110,32,115,111,117,114,99,101,41,10,32,32,32,32,32,32,105,102,32,40,95,95,104,97,115,79,119,110,80,114,111,112,46,99,97,108,108,40,115,111,117,114,99,101,44,32,112,114,111,112,41,32,38,38,32,101,120,99,108,117,100,101,46,105,110,100,101,120,79,102,40,112,114,111,112,41,32,60,32,48,41,10,32,32,32,32,32,32,32,32,116,97,114,103,101,116,91,112,114,111,112,93,32,61,32,115,111,117,114,99,101,91,112,114,111,112,93,59,10,32,32,32,32,105,102,32,40,115,111,117,114,99,101,32,33,61,32,110,117,108,108,32,38,38,32,95,95,103,101,116,79,119,110,80,114,111,112,83,121,109,98,111,108,115,41,10,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,112,114,111,112,32,111,102,32,95,95,103,101,116,79,119,110,80,114,111,112,83,121,109,98,111,108,115,40,115,111,117,114,99,101,41,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,101,120,99,108,117,100,101,46,105,110,100,101,120,79,102,40,112,114,111,112,41,32,60,32,48,32,38,38,32,95,95,112,114,111,112,73,115,69,110,117,109,46,99,97,108,108,40,115,111,117,114,99,101,44,32,112,114,111,112,41,41,10,32,32,32,32,32,32,32,32,32,32,116,97,114,103,101,116,91,112,114,111,112,93,32,61,32,115,111,117,114,99,101,91,112,114,111,112,93,59,10,32,32,32,32,32,32,125,10,32,32,32,32,114,101,116,117,114,110,32,116,97,114,103,101,116,59,10,32,32,125,59,10,32,32,118,97,114,32,95,95,112,117,98,108,105,99,70,105,101,108,100,32,61,32,40,111,98,106,44,32,107,101,121,44,32,118,97,108,117,101,41,32,61,62,32,95,95,100,101,102,78,111,114,109,97,108,80,114,111,112,40,111,98,106,44,32,116,121,112,101,111,102,32,107,101,121,32,33,61,61,32,34,115,121,109,98,111,108,34,32,63,32,107,101,121,32,43,32,34,34,32,58,32,107,101,121,44,32,118,97,108,117,101,41,59,10,32,32,118,97,114,32,95,95,97,115,121,110,99,32,61,32,40,95,95,116,104,105,115,44,32,95,95,97,114,103,117,109,101,110,116,115,44,32,103,101,110,101,114,97,116,111,114,41,32,61,62,32,123,10,32,32,32,32,114,101,116,117,114,110,32,110,101,119,32,80,114,111,109,105,115,101,40,40,114,101,115,111,108,118,101,44,32,114,101,106,101,99,116,41,32,61,62,32,123,10,32,32,32,32,32,32,118,97,114,32,102,117,108,102,105,108,108,101,100,32,61,32,40,118,97,108,117,101,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,115,116,101,112,40,103,101,110,101,114,97,116,111,114,46,110,101,120,116,40,118,97,108,117,101,41,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,106,101,99,116,40,101,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,118,97,114,32,114,101,106,101,99,116,101,100,32,61,32,40,118,97,108,117,101,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,115,116,101,112,40,103,101,110,101,114,97,116,111,114,46,116,104,114,111,119,40,118,97,108,117,101,41,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,106,101,99,116,40,101,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,118,97,114,32,115,116,101,112,32,61,32,40,120,41,32,61,62,32,120,46,100,111,110,101,32,63,32,114,101,115,111,108,118,101,40,120,46,118,97,108,117,101,41,32,58,32,80,114,111,109,105,115,101,46,114,101,115,111,108,118,101,40,120,46,118,97,108,117,101,41,46,116,104,101,110,40,102,117,108,102,105,108,108,101,100,44,32,114,101,106,101,99,116,101,100,41,59,10,32,32,32,32,32,32,115,116,101,112,40,40,103,101,110,101,114,97,116,111,114,32,61,32,103,101,110,101,114,97,116,111,114,46,97,112,112,108,121,40,95,95,116,104,105,115,44,32,95,95,97,114,103,117,109,101,110,116,115,41,41,46,110,101,120,116,40,41,41,59,10,32,32,32,32,125,41,59,10,32,32,125,59,10,10,32,32,47,47,32,115,114,99,47,97,110,105,109,97,116,105,111,110,45,102,114,97,109,101,45,109,97,110,97,103,101,114,46,116,115,10,32,32,118,97,114,32,87,101,98,65,110,105,109,97,116,105,111,110,70,114,97,109,101,83,116,114,97,116,101,103,121,32,61,32,99,108,97,115,115,32,123,10,32,32,32,32,114,101,113,117,101,115,116,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,99,97,108,108,98,97,99,107,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,114,101,113,117,101,115,116,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,99,97,108,108,98,97,99,107,41,59,10,32,32,32,32,125,10,32,32,32,32,99,97,110,99,101,108,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,105,100,41,32,123,10,32,32,32,32,32,32,99,97,110,99,101,108,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,105,100,41,59,10,32,32,32,32,125,10,32,32,125,59,10,32,32,118,97,114,32,78,111,100,101,65,110,105,109,97,116,105,111,110,70,114,97,109,101,83,116,114,97,116,101,103,121,32,61,32,99,108,97,115,115,32,123,10,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,40,41,32,123,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,108,97,115,116,72,97,110,100,108,101,73,100,34,44,32,48,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,108,97,115,116,73,109,109,101,100,105,97,116,101,34,44,32,110,117,108,108,41,59,10,32,32,32,32,125,10,32,32,32,32,114,101,113,117,101,115,116,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,99,97,108,108,98,97,99,107,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,108,97,115,116,72,97,110,100,108,101,73,100,32,62,61,32,78,117,109,98,101,114,46,77,65,88,95,83,65,70,69,95,73,78,84,69,71,69,82,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,108,97,115,116,72,97,110,100,108,101,73,100,32,61,32,48,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,116,104,105,115,46,95,108,97,115,116,72,97,110,100,108,101,73,100,32,43,61,32,49,59,10,32,32,32,32,32,32,116,104,105,115,46,95,108,97,115,116,73,109,109,101,100,105,97,116,101,32,61,32,115,101,116,73,109,109,101,100,105,97,116,101,40,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,99,97,108,108,98,97,99,107,40,68,97,116,101,46,110,111,119,40,41,41,59,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,108,97,115,116,72,97,110,100,108,101,73,100,59,10,32,32,32,32,125,10,32,32,32,32,99,97,110,99,101,108,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,95,105,100,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,108,97,115,116,73,109,109,101,100,105,97,116,101,41,32,123,10,32,32,32,32,32,32,32,32,99,108,101,97,114,73,109,109,101,100,105,97,116,101,40,116,104,105,115,46,95,108,97,115,116,73,109,109,101,100,105,97,116,101,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,59,10,32,32,118,97,114,32,65,110,105,109,97,116,105,111,110,70,114,97,109,101,77,97,110,97,103,101,114,32,61,32,99,108,97,115,115,32,123,10,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,40,41,32,123,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,115,116,114,97,116,101,103,121,34,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,115,116,114,97,116,101,103,121,32,61,32,116,121,112,101,111,102,32,114,101,113,117,101,115,116,65,110,105,109,97,116,105,111,110,70,114,97,109,101,32,61,61,61,32,34,102,117,110,99,116,105,111,110,34,32,63,32,110,101,119,32,87,101,98,65,110,105,109,97,116,105,111,110,70,114,97,109,101,83,116,114,97,116,101,103,121,40,41,32,58,32,110,101,119,32,78,111,100,101,65,110,105,109,97,116,105,111,110,70,114,97,109,101,83,116,114,97,116,101,103,121,40,41,59,10,32,32,32,32,125,10,32,32,32,32,114,101,113,117,101,115,116,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,99,97,108,108,98,97,99,107,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,115,116,114,97,116,101,103,121,46,114,101,113,117,101,115,116,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,99,97,108,108,98,97,99,107,41,59,10,32,32,32,32,125,10,32,32,32,32,99,97,110,99,101,108,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,105,100,41,32,123,10,32,32,32,32,32,32,116,104,105,115,46,95,115,116,114,97,116,101,103,121,46,99,97,110,99,101,108,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,105,100,41,59,10,32,32,32,32,125,10,32,32,125,59,10,10,32,32,47,47,32,115,114,99,47,99,111,110,115,116,97,110,116,115,46,116,115,10,32,32,118,97,114,32,73,83,95,66,82,79,87,83,69,82,32,61,32,116,121,112,101,111,102,32,119,105,110,100,111,119,32,33,61,61,32,34,117,110,100,101,102,105,110,101,100,34,32,38,38,32,116,121,112,101,111,102,32,119,105,110,100,111,119,46,100,111,99,117,109,101,110,116,32,33,61,61,32,34,117,110,100,101,102,105,110,101,100,34,59,10,32,32,118,97,114,32,90,73,80,95,83,73,71,78,65,84,85,82,69,32,61,32,110,101,119,32,85,105,110,116,56,65,114,114,97,121,40,91,56,48,44,32,55,53,44,32,51,44,32,52,93,41,59,10,32,32,118,97,114,32,76,79,84,84,73,69,95,74,83,79,78,95,77,65,78,68,65,84,79,82,89,95,70,73,69,76,68,83,32,61,32,91,34,118,34,44,32,34,105,112,34,44,32,34,111,112,34,44,32,34,108,97,121,101,114,115,34,44,32,34,102,114,34,44,32,34,119,34,44,32,34,104,34,93,59,10,32,32,118,97,114,32,80,65,67,75,65,71,69,95,86,69,82,83,73,79,78,32,61,32,34,48,46,52,52,46,48,34,59,10,32,32,118,97,114,32,80,65,67,75,65,71,69,95,78,65,77,69,32,61,32,34,64,108,111,116,116,105,101,102,105,108,101,115,47,100,111,116,108,111,116,116,105,101,45,119,101,98,34,59,10,32,32,118,97,114,32,68,69,70,65,85,76,84,95,68,80,82,95,70,65,67,84,79,82,32,61,32,48,46,55,53,59,10,10,32,32,47,47,32,115,114,99,47,99,111,114,101,47,100,111,116,108,111,116,116,105,101,45,112,108,97,121,101,114,46,106,115,10,32,32,118,97,114,32,99,114,101,97,116,101,68,111,116,76,111,116,116,105,101,80,108,97,121,101,114,77,111,100,117,108,101,32,61,32,40,40,41,32,61,62,32,123,10,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,118,97,114,32,95,115,99,114,105,112,116,78,97,109,101,32,61,32,116,121,112,101,111,102,32,100,111,99,117,109,101,110,116,32,33,61,32,34,117,110,100,101,102,105,110,101,100,34,32,63,32,40,95,97,32,61,32,100,111,99,117,109,101,110,116,46,99,117,114,114,101,110,116,83,99,114,105,112,116,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,114,99,32,58,32,118,111,105,100,32,48,59,10,32,32,32,32,114,101,116,117,114,110,32,102,117,110,99,116,105,111,110,40,109,111,100,117,108,101,65,114,103,32,61,32,123,125,41,32,123,10,32,32,32,32,32,32,118,97,114,32,109,111,100,117,108,101,82,116,110,59,10,32,32,32,32,32,32,118,97,114,32,108,32,61,32,109,111,100,117,108,101,65,114,103,44,32,97,97,44,32,98,97,44,32,99,97,32,61,32,110,101,119,32,80,114,111,109,105,115,101,40,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,97,97,32,61,32,97,59,10,32,32,32,32,32,32,32,32,98,97,32,61,32,98,59,10,32,32,32,32,32,32,125,41,44,32,100,97,32,61,32,79,98,106,101,99,116,46,97,115,115,105,103,110,40,123,125,44,32,108,41,44,32,101,97,32,61,32,34,46,47,116,104,105,115,46,112,114,111,103,114,97,109,34,44,32,112,32,61,32,34,34,44,32,102,97,59,10,32,32,32,32,32,32,34,117,110,100,101,102,105,110,101,100,34,32,33,61,32,116,121,112,101,111,102,32,100,111,99,117,109,101,110,116,32,38,38,32,100,111,99,117,109,101,110,116,46,99,117,114,114,101,110,116,83,99,114,105,112,116,32,38,38,32,40,112,32,61,32,100,111,99,117,109,101,110,116,46,99,117,114,114,101,110,116,83,99,114,105,112,116,46,115,114,99,41,59,10,32,32,32,32,32,32,95,115,99,114,105,112,116,78,97,109,101,32,38,38,32,40,112,32,61,32,95,115,99,114,105,112,116,78,97,109,101,41,59,10,32,32,32,32,32,32,112,46,115,116,97,114,116,115,87,105,116,104,40,34,98,108,111,98,58,34,41,32,63,32,112,32,61,32,34,34,32,58,32,112,32,61,32,112,46,115,117,98,115,116,114,40,48,44,32,112,46,114,101,112,108,97,99,101,40,47,91,63,35,93,46,42,47,44,32,34,34,41,46,108,97,115,116,73,110,100,101,120,79,102,40,34,47,34,41,32,43,32,49,41,59,10,32,32,32,32,32,32,102,97,32,61,32,40,97,41,32,61,62,32,102,101,116,99,104,40,97,44,32,123,32,99,114,101,100,101,110,116,105,97,108,115,58,32,34,115,97,109,101,45,111,114,105,103,105,110,34,32,125,41,46,116,104,101,110,40,10,32,32,32,32,32,32,32,32,40,98,41,32,61,62,32,98,46,111,107,32,63,32,98,46,97,114,114,97,121,66,117,102,102,101,114,40,41,32,58,32,80,114,111,109,105,115,101,46,114,101,106,101,99,116,40,69,114,114,111,114,40,98,46,115,116,97,116,117,115,32,43,32,34,32,58,32,34,32,43,32,98,46,117,114,108,41,41,10,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,118,97,114,32,104,97,32,61,32,108,46,112,114,105,110,116,32,124,124,32,99,111,110,115,111,108,101,46,108,111,103,46,98,105,110,100,40,99,111,110,115,111,108,101,41,44,32,113,32,61,32,108,46,112,114,105,110,116,69,114,114,32,124,124,32,99,111,110,115,111,108,101,46,101,114,114,111,114,46,98,105,110,100,40,99,111,110,115,111,108,101,41,59,10,32,32,32,32,32,32,79,98,106,101,99,116,46,97,115,115,105,103,110,40,108,44,32,100,97,41,59,10,32,32,32,32,32,32,100,97,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,108,46,116,104,105,115,80,114,111,103,114,97,109,32,38,38,32,40,101,97,32,61,32,108,46,116,104,105,115,80,114,111,103,114,97,109,41,59,10,32,32,32,32,32,32,118,97,114,32,105,97,32,61,32,108,46,119,97,115,109,66,105,110,97,114,121,44,32,106,97,44,32,107,97,32,61,32,102,97,108,115,101,44,32,110,97,44,32,114,44,32,116,44,32,119,44,32,120,44,32,65,44,32,66,44,32,111,97,44,32,112,97,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,113,97,40,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,97,32,61,32,106,97,46,98,117,102,102,101,114,59,10,32,32,32,32,32,32,32,32,108,46,72,69,65,80,56,32,61,32,114,32,61,32,110,101,119,32,73,110,116,56,65,114,114,97,121,40,97,41,59,10,32,32,32,32,32,32,32,32,108,46,72,69,65,80,49,54,32,61,32,119,32,61,32,110,101,119,32,73,110,116,49,54,65,114,114,97,121,40,97,41,59,10,32,32,32,32,32,32,32,32,108,46,72,69,65,80,85,56,32,61,32,116,32,61,32,110,101,119,32,85,105,110,116,56,65,114,114,97,121,40,97,41,59,10,32,32,32,32,32,32,32,32,108,46,72,69,65,80,85,49,54,32,61,32,120,32,61,32,110,101,119,32,85,105,110,116,49,54,65,114,114,97,121,40,97,41,59,10,32,32,32,32,32,32,32,32,108,46,72,69,65,80,51,50,32,61,32,65,32,61,32,110,101,119,32,73,110,116,51,50,65,114,114,97,121,40,97,41,59,10,32,32,32,32,32,32,32,32,108,46,72,69,65,80,85,51,50,32,61,32,66,32,61,32,110,101,119,32,85,105,110,116,51,50,65,114,114,97,121,40,97,41,59,10,32,32,32,32,32,32,32,32,108,46,72,69,65,80,70,51,50,32,61,32,111,97,32,61,32,110,101,119,32,70,108,111,97,116,51,50,65,114,114,97,121,40,97,41,59,10,32,32,32,32,32,32,32,32,108,46,72,69,65,80,70,54,52,32,61,32,112,97,32,61,32,110,101,119,32,70,108,111,97,116,54,52,65,114,114,97,121,40,97,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,114,97,32,61,32,91,93,44,32,115,97,32,61,32,91,93,44,32,116,97,32,61,32,91,93,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,117,97,40,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,97,32,61,32,108,46,112,114,101,82,117,110,46,115,104,105,102,116,40,41,59,10,32,32,32,32,32,32,32,32,114,97,46,117,110,115,104,105,102,116,40,97,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,67,32,61,32,48,44,32,118,97,32,61,32,110,117,108,108,44,32,68,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,119,97,40,97,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,95,97,50,59,10,32,32,32,32,32,32,32,32,40,95,97,50,32,61,32,108,46,111,110,65,98,111,114,116,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,50,46,99,97,108,108,40,108,44,32,97,41,59,10,32,32,32,32,32,32,32,32,97,32,61,32,34,65,98,111,114,116,101,100,40,34,32,43,32,97,32,43,32,34,41,34,59,10,32,32,32,32,32,32,32,32,113,40,97,41,59,10,32,32,32,32,32,32,32,32,107,97,32,61,32,116,114,117,101,59,10,32,32,32,32,32,32,32,32,97,32,61,32,110,101,119,32,87,101,98,65,115,115,101,109,98,108,121,46,82,117,110,116,105,109,101,69,114,114,111,114,40,97,32,43,32,34,46,32,66,117,105,108,100,32,119,105,116,104,32,45,115,65,83,83,69,82,84,73,79,78,83,32,102,111,114,32,109,111,114,101,32,105,110,102,111,46,34,41,59,10,32,32,32,32,32,32,32,32,98,97,40,97,41,59,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,97,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,120,97,32,61,32,40,97,41,32,61,62,32,97,46,115,116,97,114,116,115,87,105,116,104,40,34,100,97,116,97,58,97,112,112,108,105,99,97,116,105,111,110,47,111,99,116,101,116,45,115,116,114,101,97,109,59,98,97,115,101,54,52,44,34,41,44,32,121,97,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,122,97,40,97,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,97,32,61,61,32,121,97,32,38,38,32,105,97,41,32,114,101,116,117,114,110,32,110,101,119,32,85,105,110,116,56,65,114,114,97,121,40,105,97,41,59,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,34,98,111,116,104,32,97,115,121,110,99,32,97,110,100,32,115,121,110,99,32,102,101,116,99,104,105,110,103,32,111,102,32,116,104,101,32,119,97,115,109,32,102,97,105,108,101,100,34,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,65,97,40,97,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,105,97,32,63,32,80,114,111,109,105,115,101,46,114,101,115,111,108,118,101,40,41,46,116,104,101,110,40,40,41,32,61,62,32,122,97,40,97,41,41,32,58,32,102,97,40,97,41,46,116,104,101,110,40,10,32,32,32,32,32,32,32,32,32,32,40,98,41,32,61,62,32,110,101,119,32,85,105,110,116,56,65,114,114,97,121,40,98,41,44,10,32,32,32,32,32,32,32,32,32,32,40,41,32,61,62,32,122,97,40,97,41,10,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,66,97,40,97,44,32,98,44,32,99,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,65,97,40,97,41,46,116,104,101,110,40,40,100,41,32,61,62,32,87,101,98,65,115,115,101,109,98,108,121,46,105,110,115,116,97,110,116,105,97,116,101,40,100,44,32,98,41,41,46,116,104,101,110,40,99,44,32,40,100,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,113,40,96,102,97,105,108,101,100,32,116,111,32,97,115,121,110,99,104,114,111,110,111,117,115,108,121,32,112,114,101,112,97,114,101,32,119,97,115,109,58,32,36,123,100,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,119,97,40,100,41,59,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,67,97,40,97,44,32,98,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,121,97,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,105,97,32,124,124,32,34,102,117,110,99,116,105,111,110,34,32,33,61,32,116,121,112,101,111,102,32,87,101,98,65,115,115,101,109,98,108,121,46,105,110,115,116,97,110,116,105,97,116,101,83,116,114,101,97,109,105,110,103,32,124,124,32,120,97,40,99,41,32,124,124,32,34,102,117,110,99,116,105,111,110,34,32,33,61,32,116,121,112,101,111,102,32,102,101,116,99,104,32,63,32,66,97,40,99,44,32,97,44,32,98,41,32,58,32,102,101,116,99,104,40,99,44,32,123,32,99,114,101,100,101,110,116,105,97,108,115,58,32,34,115,97,109,101,45,111,114,105,103,105,110,34,32,125,41,46,116,104,101,110,40,10,32,32,32,32,32,32,32,32,32,32,40,100,41,32,61,62,32,87,101,98,65,115,115,101,109,98,108,121,46,105,110,115,116,97,110,116,105,97,116,101,83,116,114,101,97,109,105,110,103,40,100,44,32,97,41,46,116,104,101,110,40,98,44,32,102,117,110,99,116,105,111,110,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,113,40,96,119,97,115,109,32,115,116,114,101,97,109,105,110,103,32,99,111,109,112,105,108,101,32,102,97,105,108,101,100,58,32,36,123,101,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,113,40,34,102,97,108,108,105,110,103,32,98,97,99,107,32,116,111,32,65,114,114,97,121,66,117,102,102,101,114,32,105,110,115,116,97,110,116,105,97,116,105,111,110,34,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,66,97,40,99,44,32,97,44,32,98,41,59,10,32,32,32,32,32,32,32,32,32,32,125,41,10,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,99,108,97,115,115,32,68,97,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,40,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,110,97,109,101,34,44,32,34,69,120,105,116,83,116,97,116,117,115,34,41,59,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,109,101,115,115,97,103,101,32,61,32,96,80,114,111,103,114,97,109,32,116,101,114,109,105,110,97,116,101,100,32,119,105,116,104,32,101,120,105,116,40,36,123,97,125,41,96,59,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,115,116,97,116,117,115,32,61,32,97,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,69,97,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,102,111,114,32,40,59,32,48,32,60,32,97,46,108,101,110,103,116,104,59,32,41,32,97,46,115,104,105,102,116,40,41,40,108,41,59,10,32,32,32,32,32,32,125,44,32,70,97,32,61,32,108,46,110,111,69,120,105,116,82,117,110,116,105,109,101,32,124,124,32,116,114,117,101,44,32,71,97,32,61,32,34,117,110,100,101,102,105,110,101,100,34,32,33,61,32,116,121,112,101,111,102,32,84,101,120,116,68,101,99,111,100,101,114,32,63,32,110,101,119,32,84,101,120,116,68,101,99,111,100,101,114,40,41,32,58,32,118,111,105,100,32,48,44,32,72,32,61,32,40,97,44,32,98,32,61,32,48,44,32,99,32,61,32,78,97,78,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,98,32,43,32,99,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,99,32,61,32,98,59,32,97,91,99,93,32,38,38,32,33,40,99,32,62,61,32,100,41,59,32,41,32,43,43,99,59,10,32,32,32,32,32,32,32,32,105,102,32,40,49,54,32,60,32,99,32,45,32,98,32,38,38,32,97,46,98,117,102,102,101,114,32,38,38,32,71,97,41,32,114,101,116,117,114,110,32,71,97,46,100,101,99,111,100,101,40,97,46,115,117,98,97,114,114,97,121,40,98,44,32,99,41,41,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,100,32,61,32,34,34,59,32,98,32,60,32,99,59,32,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,97,91,98,43,43,93,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,101,32,38,32,49,50,56,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,97,91,98,43,43,93,32,38,32,54,51,59,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,49,57,50,32,61,61,32,40,101,32,38,32,50,50,52,41,41,32,100,32,43,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,40,101,32,38,32,51,49,41,32,60,60,32,54,32,124,32,102,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,97,91,98,43,43,93,32,38,32,54,51,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,32,61,32,50,50,52,32,61,61,32,40,101,32,38,32,50,52,48,41,32,63,32,40,101,32,38,32,49,53,41,32,60,60,32,49,50,32,124,32,102,32,60,60,32,54,32,124,32,104,32,58,32,40,101,32,38,32,55,41,32,60,60,32,49,56,32,124,32,102,32,60,60,32,49,50,32,124,32,104,32,60,60,32,54,32,124,32,97,91,98,43,43,93,32,38,32,54,51,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,54,53,53,51,54,32,62,32,101,32,63,32,100,32,43,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,101,41,32,58,32,40,101,32,45,61,32,54,53,53,51,54,44,32,100,32,43,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,53,53,50,57,54,32,124,32,101,32,62,62,32,49,48,44,32,53,54,51,50,48,32,124,32,101,32,38,32,49,48,50,51,41,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,100,32,43,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,101,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,100,59,10,32,32,32,32,32,32,125,44,32,72,97,32,61,32,91,93,44,32,73,97,32,61,32,48,44,32,73,32,61,32,48,59,10,32,32,32,32,32,32,99,108,97,115,115,32,74,97,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,40,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,70,99,32,61,32,97,59,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,100,99,32,61,32,97,32,45,32,50,52,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,77,97,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,73,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,98,41,32,114,101,116,117,114,110,32,75,97,40,48,41,44,32,48,59,10,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,110,101,119,32,74,97,40,98,41,59,10,32,32,32,32,32,32,32,32,66,91,99,46,100,99,32,43,32,49,54,32,62,62,32,50,93,32,61,32,98,59,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,66,91,99,46,100,99,32,43,32,52,32,62,62,32,50,93,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,100,41,32,114,101,116,117,114,110,32,75,97,40,48,41,44,32,98,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,101,32,111,102,32,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,48,32,61,61,61,32,101,32,124,124,32,101,32,61,61,61,32,100,41,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,76,97,40,101,44,32,100,44,32,99,46,100,99,32,43,32,49,54,41,41,32,114,101,116,117,114,110,32,75,97,40,101,41,44,32,98,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,75,97,40,100,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,59,10,32,32,32,32,32,32,125,44,32,78,97,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,116,59,10,32,32,32,32,32,32,32,32,105,102,32,40,48,32,60,32,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,99,32,61,32,98,32,43,32,99,32,45,32,49,59,10,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,101,32,61,32,48,59,32,101,32,60,32,97,46,108,101,110,103,116,104,59,32,43,43,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,97,46,99,104,97,114,67,111,100,101,65,116,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,53,53,50,57,54,32,60,61,32,102,32,38,38,32,53,55,51,52,51,32,62,61,32,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,97,46,99,104,97,114,67,111,100,101,65,116,40,43,43,101,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,32,61,32,54,53,53,51,54,32,43,32,40,40,102,32,38,32,49,48,50,51,41,32,60,60,32,49,48,41,32,124,32,104,32,38,32,49,48,50,51,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,49,50,55,32,62,61,32,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,98,32,62,61,32,99,41,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,91,98,43,43,93,32,61,32,102,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,50,48,52,55,32,62,61,32,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,98,32,43,32,49,32,62,61,32,99,41,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,91,98,43,43,93,32,61,32,49,57,50,32,124,32,102,32,62,62,32,54,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,54,53,53,51,53,32,62,61,32,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,98,32,43,32,50,32,62,61,32,99,41,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,91,98,43,43,93,32,61,32,50,50,52,32,124,32,102,32,62,62,32,49,50,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,98,32,43,32,51,32,62,61,32,99,41,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,91,98,43,43,93,32,61,32,50,52,48,32,124,32,102,32,62,62,32,49,56,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,91,98,43,43,93,32,61,32,49,50,56,32,124,32,102,32,62,62,32,49,50,32,38,32,54,51,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,91,98,43,43,93,32,61,32,49,50,56,32,124,32,102,32,62,62,32,54,32,38,32,54,51,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,91,98,43,43,93,32,61,32,49,50,56,32,124,32,102,32,38,32,54,51,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,100,91,98,93,32,61,32,48,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,44,32,74,32,61,32,40,97,44,32,98,41,32,61,62,32,79,98,106,101,99,116,46,100,101,102,105,110,101,80,114,111,112,101,114,116,121,40,98,44,32,34,110,97,109,101,34,44,32,123,32,118,97,108,117,101,58,32,97,32,125,41,44,32,79,97,32,61,32,91,93,44,32,75,32,61,32,91,93,44,32,76,44,32,80,97,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,97,41,59,10,32,32,32,32,32,32,125,44,32,77,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,33,97,41,32,116,104,114,111,119,32,110,101,119,32,76,40,34,67,97,110,110,111,116,32,117,115,101,32,100,101,108,101,116,101,100,32,118,97,108,46,32,104,97,110,100,108,101,32,61,32,34,32,43,32,97,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,75,91,97,93,59,10,32,32,32,32,32,32,125,44,32,81,97,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,115,119,105,116,99,104,32,40,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,118,111,105,100,32,48,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,50,59,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,110,117,108,108,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,52,59,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,116,114,117,101,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,54,59,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,102,97,108,115,101,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,56,59,10,32,32,32,32,32,32,32,32,32,32,100,101,102,97,117,108,116,58,10,32,32,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,98,32,61,32,79,97,46,112,111,112,40,41,32,124,124,32,75,46,108,101,110,103,116,104,59,10,32,32,32,32,32,32,32,32,32,32,32,32,75,91,98,93,32,61,32,97,59,10,32,32,32,32,32,32,32,32,32,32,32,32,75,91,98,32,43,32,49,93,32,61,32,49,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,44,32,82,97,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,69,114,114,111,114,44,32,99,32,61,32,74,40,97,44,32,102,117,110,99,116,105,111,110,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,110,97,109,101,32,61,32,97,59,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,109,101,115,115,97,103,101,32,61,32,100,59,10,32,32,32,32,32,32,32,32,32,32,100,32,61,32,69,114,114,111,114,40,100,41,46,115,116,97,99,107,59,10,32,32,32,32,32,32,32,32,32,32,118,111,105,100,32,48,32,33,61,61,32,100,32,38,38,32,40,116,104,105,115,46,115,116,97,99,107,32,61,32,116,104,105,115,46,116,111,83,116,114,105,110,103,40,41,32,43,32,34,92,110,34,32,43,32,100,46,114,101,112,108,97,99,101,40,47,94,69,114,114,111,114,40,58,91,94,92,110,93,42,41,63,92,110,47,44,32,34,34,41,41,59,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,99,46,112,114,111,116,111,116,121,112,101,32,61,32,79,98,106,101,99,116,46,99,114,101,97,116,101,40,98,46,112,114,111,116,111,116,121,112,101,41,59,10,32,32,32,32,32,32,32,32,99,46,112,114,111,116,111,116,121,112,101,46,99,111,110,115,116,114,117,99,116,111,114,32,61,32,99,59,10,32,32,32,32,32,32,32,32,99,46,112,114,111,116,111,116,121,112,101,46,116,111,83,116,114,105,110,103,32,61,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,118,111,105,100,32,48,32,61,61,61,32,116,104,105,115,46,109,101,115,115,97,103,101,32,63,32,116,104,105,115,46,110,97,109,101,32,58,32,96,36,123,116,104,105,115,46,110,97,109,101,125,58,32,36,123,116,104,105,115,46,109,101,115,115,97,103,101,125,96,59,10,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,59,10,32,32,32,32,32,32,125,44,32,83,97,44,32,84,97,44,32,78,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,98,32,61,32,34,34,59,32,116,91,97,93,59,32,41,32,98,32,43,61,32,84,97,91,116,91,97,43,43,93,93,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,59,10,32,32,32,32,32,32,125,44,32,85,97,32,61,32,123,125,44,32,86,97,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,61,61,61,32,98,41,32,116,104,114,111,119,32,110,101,119,32,76,40,34,112,116,114,32,115,104,111,117,108,100,32,110,111,116,32,98,101,32,117,110,100,101,102,105,110,101,100,34,41,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,59,32,97,46,105,99,59,32,41,32,98,32,61,32,97,46,116,99,40,98,41,44,32,97,32,61,32,97,46,105,99,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,59,10,32,32,32,32,32,32,125,44,32,79,32,61,32,123,125,44,32,89,97,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,97,32,61,32,88,97,40,97,41,59,10,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,78,40,97,41,59,10,32,32,32,32,32,32,32,32,80,40,97,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,59,10,32,32,32,32,32,32,125,44,32,90,97,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,79,91,97,93,59,10,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,61,61,61,32,99,41,32,116,104,114,111,119,32,97,32,61,32,96,36,123,98,125,32,104,97,115,32,117,110,107,110,111,119,110,32,116,121,112,101,32,36,123,89,97,40,97,41,125,96,44,32,110,101,119,32,76,40,97,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,59,10,32,32,32,32,32,32,125,44,32,36,97,32,61,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,125,44,32,97,98,32,61,32,102,97,108,115,101,44,32,98,98,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,98,32,61,61,61,32,99,41,32,114,101,116,117,114,110,32,97,59,10,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,61,61,61,32,99,46,105,99,41,32,114,101,116,117,114,110,32,110,117,108,108,59,10,32,32,32,32,32,32,32,32,97,32,61,32,98,98,40,97,44,32,98,44,32,99,46,105,99,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,110,117,108,108,32,61,61,61,32,97,32,63,32,110,117,108,108,32,58,32,99,46,69,99,40,97,41,59,10,32,32,32,32,32,32,125,44,32,99,98,32,61,32,123,125,44,32,100,98,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,98,32,61,32,86,97,40,97,44,32,98,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,97,91,98,93,59,10,32,32,32,32,32,32,125,44,32,101,98,44,32,102,98,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,33,98,46,102,99,32,124,124,32,33,98,46,100,99,41,32,116,104,114,111,119,32,110,101,119,32,101,98,40,34,109,97,107,101,67,108,97,115,115,72,97,110,100,108,101,32,114,101,113,117,105,114,101,115,32,112,116,114,32,97,110,100,32,112,116,114,84,121,112,101,34,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,33,98,46,108,99,32,33,61,61,32,33,33,98,46,106,99,41,32,116,104,114,111,119,32,110,101,119,32,101,98,40,34,66,111,116,104,32,115,109,97,114,116,80,116,114,84,121,112,101,32,97,110,100,32,115,109,97,114,116,80,116,114,32,109,117,115,116,32,98,101,32,115,112,101,99,105,102,105,101,100,34,41,59,10,32,32,32,32,32,32,32,32,98,46,99,111,117,110,116,32,61,32,123,32,118,97,108,117,101,58,32,49,32,125,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,81,40,79,98,106,101,99,116,46,99,114,101,97,116,101,40,97,44,32,123,32,99,99,58,32,123,32,118,97,108,117,101,58,32,98,44,32,119,114,105,116,97,98,108,101,58,32,116,114,117,101,32,125,32,125,41,41,59,10,32,32,32,32,32,32,125,44,32,81,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,34,117,110,100,101,102,105,110,101,100,34,32,61,61,61,32,116,121,112,101,111,102,32,70,105,110,97,108,105,122,97,116,105,111,110,82,101,103,105,115,116,114,121,41,32,114,101,116,117,114,110,32,81,32,61,32,40,98,41,32,61,62,32,98,44,32,97,59,10,32,32,32,32,32,32,32,32,97,98,32,61,32,110,101,119,32,70,105,110,97,108,105,122,97,116,105,111,110,82,101,103,105,115,116,114,121,40,40,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,98,46,99,99,59,10,32,32,32,32,32,32,32,32,32,32,45,45,98,46,99,111,117,110,116,46,118,97,108,117,101,59,10,32,32,32,32,32,32,32,32,32,32,48,32,61,61,61,32,98,46,99,111,117,110,116,46,118,97,108,117,101,32,38,38,32,40,98,46,106,99,32,63,32,98,46,108,99,46,110,99,40,98,46,106,99,41,32,58,32,98,46,102,99,46,101,99,46,110,99,40,98,46,100,99,41,41,59,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,81,32,61,32,40,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,98,46,99,99,59,10,32,32,32,32,32,32,32,32,32,32,99,46,106,99,32,38,38,32,97,98,46,114,101,103,105,115,116,101,114,40,98,44,32,123,32,99,99,58,32,99,32,125,44,32,98,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,59,10,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,36,97,32,61,32,40,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,97,98,46,117,110,114,101,103,105,115,116,101,114,40,98,41,59,10,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,81,40,97,41,59,10,32,32,32,32,32,32,125,44,32,103,98,32,61,32,123,125,44,32,104,98,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,102,111,114,32,40,59,32,97,46,108,101,110,103,116,104,59,32,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,97,46,112,111,112,40,41,59,10,32,32,32,32,32,32,32,32,32,32,97,46,112,111,112,40,41,40,98,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,105,98,40,97,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,102,114,111,109,87,105,114,101,84,121,112,101,40,66,91,97,32,62,62,32,50,93,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,82,32,61,32,123,125,44,32,106,98,32,61,32,123,125,44,32,84,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,100,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,103,32,61,32,99,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,46,108,101,110,103,116,104,32,33,61,61,32,97,46,108,101,110,103,116,104,41,32,116,104,114,111,119,32,110,101,119,32,101,98,40,34,77,105,115,109,97,116,99,104,101,100,32,116,121,112,101,32,99,111,110,118,101,114,116,101,114,32,99,111,117,110,116,34,41,59,10,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,107,32,61,32,48,59,32,107,32,60,32,97,46,108,101,110,103,116,104,59,32,43,43,107,41,32,83,40,97,91,107,93,44,32,103,91,107,93,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,97,46,102,111,114,69,97,99,104,40,40,103,41,32,61,62,32,106,98,91,103,93,32,61,32,98,41,59,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,65,114,114,97,121,40,98,46,108,101,110,103,116,104,41,44,32,102,32,61,32,91,93,44,32,104,32,61,32,48,59,10,32,32,32,32,32,32,32,32,98,46,102,111,114,69,97,99,104,40,40,103,44,32,107,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,79,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,103,41,32,63,32,101,91,107,93,32,61,32,79,91,103,93,32,58,32,40,102,46,112,117,115,104,40,103,41,44,32,82,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,103,41,32,124,124,32,40,82,91,103,93,32,61,32,91,93,41,44,32,82,91,103,93,46,112,117,115,104,40,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,101,91,107,93,32,61,32,79,91,103,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,43,43,104,59,10,32,32,32,32,32,32,32,32,32,32,32,32,104,32,61,61,61,32,102,46,108,101,110,103,116,104,32,38,38,32,100,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,125,41,41,59,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,48,32,61,61,61,32,102,46,108,101,110,103,116,104,32,38,38,32,100,40,101,41,59,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,107,98,40,97,44,32,98,44,32,99,32,61,32,123,125,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,98,46,110,97,109,101,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,97,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,116,121,112,101,32,34,36,123,100,125,34,32,109,117,115,116,32,104,97,118,101,32,97,32,112,111,115,105,116,105,118,101,32,105,110,116,101,103,101,114,32,116,121,112,101,105,100,32,112,111,105,110,116,101,114,96,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,79,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,97,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,99,46,77,99,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,114,101,103,105,115,116,101,114,32,116,121,112,101,32,39,36,123,100,125,39,32,116,119,105,99,101,96,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,79,91,97,93,32,61,32,98,59,10,32,32,32,32,32,32,32,32,100,101,108,101,116,101,32,106,98,91,97,93,59,10,32,32,32,32,32,32,32,32,82,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,97,41,32,38,38,32,40,98,32,61,32,82,91,97,93,44,32,100,101,108,101,116,101,32,82,91,97,93,44,32,98,46,102,111,114,69,97,99,104,40,40,101,41,32,61,62,32,101,40,41,41,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,83,40,97,44,32,98,44,32,99,32,61,32,123,125,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,107,98,40,97,44,32,98,44,32,99,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,108,98,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,97,46,99,99,46,102,99,46,101,99,46,110,97,109,101,32,43,32,34,32,105,110,115,116,97,110,99,101,32,97,108,114,101,97,100,121,32,100,101,108,101,116,101,100,34,41,59,10,32,32,32,32,32,32,125,44,32,109,98,32,61,32,91,93,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,110,98,40,41,32,123,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,111,98,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,61,61,61,32,97,91,98,93,46,104,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,97,91,98,93,59,10,32,32,32,32,32,32,32,32,32,32,97,91,98,93,32,61,32,102,117,110,99,116,105,111,110,40,46,46,46,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,33,97,91,98,93,46,104,99,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,101,46,108,101,110,103,116,104,41,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,96,70,117,110,99,116,105,111,110,32,39,36,123,99,125,39,32,99,97,108,108,101,100,32,119,105,116,104,32,97,110,32,105,110,118,97,108,105,100,32,110,117,109,98,101,114,32,111,102,32,97,114,103,117,109,101,110,116,115,32,40,36,123,101,46,108,101,110,103,116,104,125,41,32,45,32,101,120,112,101,99,116,115,32,111,110,101,32,111,102,32,40,36,123,97,91,98,93,46,104,99,125,41,33,96,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,97,91,98,93,46,104,99,91,101,46,108,101,110,103,116,104,93,46,97,112,112,108,121,40,116,104,105,115,44,32,101,41,59,10,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,97,91,98,93,46,104,99,32,61,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,97,91,98,93,46,104,99,91,100,46,112,99,93,32,61,32,100,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,44,32,112,98,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,108,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,97,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,61,61,61,32,99,32,124,124,32,118,111,105,100,32,48,32,33,61,61,32,108,91,97,93,46,104,99,32,38,38,32,118,111,105,100,32,48,32,33,61,61,32,108,91,97,93,46,104,99,91,99,93,41,10,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,114,101,103,105,115,116,101,114,32,112,117,98,108,105,99,32,110,97,109,101,32,39,36,123,97,125,39,32,116,119,105,99,101,96,41,59,10,32,32,32,32,32,32,32,32,32,32,111,98,40,108,44,32,97,44,32,97,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,108,91,97,93,46,104,99,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,99,41,41,10,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,114,101,103,105,115,116,101,114,32,109,117,108,116,105,112,108,101,32,111,118,101,114,108,111,97,100,115,32,111,102,32,97,32,102,117,110,99,116,105,111,110,32,119,105,116,104,32,116,104,101,32,115,97,109,101,32,110,117,109,98,101,114,32,111,102,32,97,114,103,117,109,101,110,116,115,32,40,36,123,99,125,41,33,96,41,59,10,32,32,32,32,32,32,32,32,32,32,108,91,97,93,46,104,99,91,99,93,32,61,32,98,59,10,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,108,91,97,93,32,61,32,98,44,32,108,91,97,93,46,112,99,32,61,32,99,59,10,32,32,32,32,32,32,125,44,32,113,98,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,97,32,61,32,97,46,114,101,112,108,97,99,101,40,47,91,94,97,45,122,65,45,90,48,45,57,95,93,47,103,44,32,34,36,34,41,59,10,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,97,46,99,104,97,114,67,111,100,101,65,116,40,48,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,52,56,32,60,61,32,98,32,38,38,32,53,55,32,62,61,32,98,32,63,32,96,95,36,123,97,125,96,32,58,32,97,59,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,114,98,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,110,97,109,101,32,61,32,97,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,99,111,110,115,116,114,117,99,116,111,114,32,61,32,98,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,111,99,32,61,32,99,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,110,99,32,61,32,100,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,105,99,32,61,32,101,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,72,99,32,61,32,102,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,116,99,32,61,32,104,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,69,99,32,61,32,103,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,66,99,32,61,32,91,93,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,115,98,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,102,111,114,32,40,59,32,98,32,33,61,61,32,99,59,32,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,33,98,46,116,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,69,120,112,101,99,116,101,100,32,110,117,108,108,32,111,114,32,105,110,115,116,97,110,99,101,32,111,102,32,36,123,99,46,110,97,109,101,125,44,32,103,111,116,32,97,110,32,105,110,115,116,97,110,99,101,32,111,102,32,36,123,98,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,98,46,116,99,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,98,46,105,99,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,97,59,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,116,98,40,97,44,32,98,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,110,117,108,108,32,61,61,61,32,98,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,120,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,110,117,108,108,32,105,115,32,110,111,116,32,97,32,118,97,108,105,100,32,36,123,116,104,105,115,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,33,98,46,99,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,112,97,115,115,32,34,36,123,117,98,40,98,41,125,34,32,97,115,32,97,32,36,123,116,104,105,115,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,98,46,99,99,46,100,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,112,97,115,115,32,100,101,108,101,116,101,100,32,111,98,106,101,99,116,32,97,115,32,97,32,112,111,105,110,116,101,114,32,111,102,32,116,121,112,101,32,36,123,116,104,105,115,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,115,98,40,98,46,99,99,46,100,99,44,32,98,46,99,99,46,102,99,46,101,99,44,32,116,104,105,115,46,101,99,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,118,98,40,97,44,32,98,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,110,117,108,108,32,61,61,61,32,98,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,120,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,110,117,108,108,32,105,115,32,110,111,116,32,97,32,118,97,108,105,100,32,36,123,116,104,105,115,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,119,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,116,104,105,115,46,121,99,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,110,117,108,108,32,33,61,61,32,97,32,38,38,32,97,46,112,117,115,104,40,116,104,105,115,46,110,99,44,32,99,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,33,98,32,124,124,32,33,98,46,99,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,112,97,115,115,32,34,36,123,117,98,40,98,41,125,34,32,97,115,32,97,32,36,123,116,104,105,115,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,98,46,99,99,46,100,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,112,97,115,115,32,100,101,108,101,116,101,100,32,111,98,106,101,99,116,32,97,115,32,97,32,112,111,105,110,116,101,114,32,111,102,32,116,121,112,101,32,36,123,116,104,105,115,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,116,104,105,115,46,118,99,32,38,38,32,98,46,99,99,46,102,99,46,118,99,41,10,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,10,32,32,32,32,32,32,32,32,32,32,32,32,96,67,97,110,110,111,116,32,99,111,110,118,101,114,116,32,97,114,103,117,109,101,110,116,32,111,102,32,116,121,112,101,32,36,123,98,46,99,99,46,108,99,32,63,32,98,46,99,99,46,108,99,46,110,97,109,101,32,58,32,98,46,99,99,46,102,99,46,110,97,109,101,125,32,116,111,32,112,97,114,97,109,101,116,101,114,32,116,121,112,101,32,36,123,116,104,105,115,46,110,97,109,101,125,96,10,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,99,32,61,32,115,98,40,98,46,99,99,46,100,99,44,32,98,46,99,99,46,102,99,46,101,99,44,32,116,104,105,115,46,101,99,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,119,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,61,61,61,32,98,46,99,99,46,106,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,34,80,97,115,115,105,110,103,32,114,97,119,32,112,111,105,110,116,101,114,32,116,111,32,115,109,97,114,116,32,112,111,105,110,116,101,114,32,105,115,32,105,108,108,101,103,97,108,34,41,59,10,32,32,32,32,32,32,32,32,32,32,115,119,105,116,99,104,32,40,116,104,105,115,46,84,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,48,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,98,46,99,99,46,108,99,32,61,61,61,32,116,104,105,115,41,32,99,32,61,32,98,46,99,99,46,106,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,108,115,101,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,96,67,97,110,110,111,116,32,99,111,110,118,101,114,116,32,97,114,103,117,109,101,110,116,32,111,102,32,116,121,112,101,32,36,123,98,46,99,99,46,108,99,32,63,32,98,46,99,99,46,108,99,46,110,97,109,101,32,58,32,98,46,99,99,46,102,99,46,110,97,109,101,125,32,116,111,32,112,97,114,97,109,101,116,101,114,32,116,121,112,101,32,36,123,116,104,105,115,46,110,97,109,101,125,96,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,49,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,32,61,32,98,46,99,99,46,106,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,50,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,98,46,99,99,46,108,99,32,61,61,61,32,116,104,105,115,41,32,99,32,61,32,98,46,99,99,46,106,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,98,46,99,108,111,110,101,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,32,61,32,116,104,105,115,46,80,99,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,81,97,40,40,41,32,61,62,32,100,91,34,100,101,108,101,116,101,34,93,40,41,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,110,117,108,108,32,33,61,61,32,97,32,38,38,32,97,46,112,117,115,104,40,116,104,105,115,46,110,99,44,32,99,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,102,97,117,108,116,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,34,85,110,115,117,112,112,111,114,116,105,110,103,32,115,104,97,114,105,110,103,32,112,111,108,105,99,121,34,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,119,98,40,97,44,32,98,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,110,117,108,108,32,61,61,61,32,98,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,120,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,110,117,108,108,32,105,115,32,110,111,116,32,97,32,118,97,108,105,100,32,36,123,116,104,105,115,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,33,98,46,99,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,112,97,115,115,32,34,36,123,117,98,40,98,41,125,34,32,97,115,32,97,32,36,123,116,104,105,115,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,98,46,99,99,46,100,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,112,97,115,115,32,100,101,108,101,116,101,100,32,111,98,106,101,99,116,32,97,115,32,97,32,112,111,105,110,116,101,114,32,111,102,32,116,121,112,101,32,36,123,116,104,105,115,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,98,46,99,99,46,102,99,46,118,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,99,111,110,118,101,114,116,32,97,114,103,117,109,101,110,116,32,111,102,32,116,121,112,101,32,36,123,98,46,99,99,46,102,99,46,110,97,109,101,125,32,116,111,32,112,97,114,97,109,101,116,101,114,32,116,121,112,101,32,36,123,116,104,105,115,46,110,97,109,101,125,96,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,115,98,40,98,46,99,99,46,100,99,44,32,98,46,99,99,46,102,99,46,101,99,44,32,116,104,105,115,46,101,99,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,120,98,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,110,97,109,101,32,61,32,97,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,101,99,32,61,32,98,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,120,99,32,61,32,99,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,118,99,32,61,32,100,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,119,99,32,61,32,101,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,79,99,32,61,32,102,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,84,99,32,61,32,104,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,67,99,32,61,32,103,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,121,99,32,61,32,107,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,80,99,32,61,32,109,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,110,99,32,61,32,110,59,10,32,32,32,32,32,32,32,32,101,32,124,124,32,118,111,105,100,32,48,32,33,61,61,32,98,46,105,99,32,63,32,116,104,105,115,46,116,111,87,105,114,101,84,121,112,101,32,61,32,118,98,32,58,32,40,116,104,105,115,46,116,111,87,105,114,101,84,121,112,101,32,61,32,100,32,63,32,116,98,32,58,32,119,98,44,32,116,104,105,115,46,107,99,32,61,32,110,117,108,108,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,121,98,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,33,108,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,97,41,41,32,116,104,114,111,119,32,110,101,119,32,101,98,40,34,82,101,112,108,97,99,105,110,103,32,110,111,110,101,120,105,115,116,101,110,116,32,112,117,98,108,105,99,32,115,121,109,98,111,108,34,41,59,10,32,32,32,32,32,32,32,32,118,111,105,100,32,48,32,33,61,61,32,108,91,97,93,46,104,99,32,38,38,32,118,111,105,100,32,48,32,33,61,61,32,99,32,63,32,108,91,97,93,46,104,99,91,99,93,32,61,32,98,32,58,32,40,108,91,97,93,32,61,32,98,44,32,108,91,97,93,46,112,99,32,61,32,99,41,59,10,32,32,32,32,32,32,125,44,32,85,44,32,122,98,32,61,32,40,97,44,32,98,44,32,99,32,61,32,91,93,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,97,46,105,110,99,108,117,100,101,115,40,34,106,34,41,32,63,32,40,97,32,61,32,97,46,114,101,112,108,97,99,101,40,47,112,47,103,44,32,34,105,34,41,44,32,98,32,61,32,40,48,44,32,108,91,34,100,121,110,67,97,108,108,95,34,32,43,32,97,93,41,40,98,44,32,46,46,46,99,41,41,32,58,32,98,32,61,32,85,46,103,101,116,40,98,41,40,46,46,46,99,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,59,10,32,32,32,32,32,32,125,44,32,65,98,32,61,32,40,97,44,32,98,41,32,61,62,32,40,46,46,46,99,41,32,61,62,32,122,98,40,97,44,32,98,44,32,99,41,44,32,86,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,97,32,61,32,78,40,97,41,59,10,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,97,46,105,110,99,108,117,100,101,115,40,34,106,34,41,32,63,32,65,98,40,97,44,32,98,41,32,58,32,85,46,103,101,116,40,98,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,34,102,117,110,99,116,105,111,110,34,32,33,61,32,116,121,112,101,111,102,32,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,117,110,107,110,111,119,110,32,102,117,110,99,116,105,111,110,32,112,111,105,110,116,101,114,32,119,105,116,104,32,115,105,103,110,97,116,117,114,101,32,36,123,97,125,58,32,36,123,98,125,96,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,59,10,32,32,32,32,32,32,125,44,32,66,98,44,32,67,98,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,99,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,101,91,102,93,32,124,124,32,79,91,102,93,32,124,124,32,40,106,98,91,102,93,32,63,32,106,98,91,102,93,46,102,111,114,69,97,99,104,40,99,41,32,58,32,40,100,46,112,117,115,104,40,102,41,44,32,101,91,102,93,32,61,32,116,114,117,101,41,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,91,93,44,32,101,32,61,32,123,125,59,10,32,32,32,32,32,32,32,32,98,46,102,111,114,69,97,99,104,40,99,41,59,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,66,98,40,96,36,123,97,125,58,32,96,32,43,32,100,46,109,97,112,40,89,97,41,46,106,111,105,110,40,91,34,44,32,34,93,41,41,59,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,68,98,40,97,41,32,123,10,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,98,32,61,32,49,59,32,98,32,60,32,97,46,108,101,110,103,116,104,59,32,43,43,98,41,32,105,102,32,40,110,117,108,108,32,33,61,61,32,97,91,98,93,32,38,38,32,118,111,105,100,32,48,32,61,61,61,32,97,91,98,93,46,107,99,41,32,114,101,116,117,114,110,32,116,114,117,101,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,69,98,40,97,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,70,117,110,99,116,105,111,110,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,40,98,32,105,110,115,116,97,110,99,101,111,102,32,70,117,110,99,116,105,111,110,41,41,10,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,84,121,112,101,69,114,114,111,114,40,96,110,101,119,95,32,99,97,108,108,101,100,32,119,105,116,104,32,99,111,110,115,116,114,117,99,116,111,114,32,116,121,112,101,32,36,123,116,121,112,101,111,102,32,98,125,32,119,104,105,99,104,32,105,115,32,110,111,116,32,97,32,102,117,110,99,116,105,111,110,96,41,59,10,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,74,40,98,46,110,97,109,101,32,124,124,32,34,117,110,107,110,111,119,110,70,117,110,99,116,105,111,110,78,97,109,101,34,44,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,99,46,112,114,111,116,111,116,121,112,101,32,61,32,98,46,112,114,111,116,111,116,121,112,101,59,10,32,32,32,32,32,32,32,32,99,32,61,32,110,101,119,32,99,40,41,59,10,32,32,32,32,32,32,32,32,97,32,61,32,98,46,97,112,112,108,121,40,99,44,32,97,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,97,32,105,110,115,116,97,110,99,101,111,102,32,79,98,106,101,99,116,32,63,32,97,32,58,32,99,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,70,98,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,98,46,108,101,110,103,116,104,59,10,32,32,32,32,32,32,32,32,105,102,32,40,50,32,62,32,104,41,32,116,104,114,111,119,32,110,101,119,32,76,40,34,97,114,103,84,121,112,101,115,32,97,114,114,97,121,32,115,105,122,101,32,109,105,115,109,97,116,99,104,33,32,77,117,115,116,32,97,116,32,108,101,97,115,116,32,103,101,116,32,114,101,116,117,114,110,32,118,97,108,117,101,32,97,110,100,32,39,116,104,105,115,39,32,116,121,112,101,115,33,34,41,59,10,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,110,117,108,108,32,33,61,61,32,98,91,49,93,32,38,38,32,110,117,108,108,32,33,61,61,32,99,44,32,107,32,61,32,68,98,40,98,41,59,10,32,32,32,32,32,32,32,32,99,32,61,32,34,118,111,105,100,34,32,33,61,61,32,98,91,48,93,46,110,97,109,101,59,10,32,32,32,32,32,32,32,32,100,32,61,32,91,97,44,32,80,97,44,32,100,44,32,101,44,32,104,98,44,32,98,91,48,93,44,32,98,91,49,93,93,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,101,32,61,32,48,59,32,101,32,60,32,104,32,45,32,50,59,32,43,43,101,41,32,100,46,112,117,115,104,40,98,91,101,32,43,32,50,93,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,107,41,32,102,111,114,32,40,101,32,61,32,103,32,63,32,49,32,58,32,50,59,32,101,32,60,32,98,46,108,101,110,103,116,104,59,32,43,43,101,41,32,110,117,108,108,32,33,61,61,32,98,91,101,93,46,107,99,32,38,38,32,100,46,112,117,115,104,40,98,91,101,93,46,107,99,41,59,10,32,32,32,32,32,32,32,32,107,32,61,32,68,98,40,98,41,59,10,32,32,32,32,32,32,32,32,101,32,61,32,98,46,108,101,110,103,116,104,32,45,32,50,59,10,32,32,32,32,32,32,32,32,118,97,114,32,109,32,61,32,91,93,44,32,110,32,61,32,91,34,102,110,34,93,59,10,32,32,32,32,32,32,32,32,103,32,38,38,32,110,46,112,117,115,104,40,34,116,104,105,115,87,105,114,101,100,34,41,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,104,32,61,32,48,59,32,104,32,60,32,101,59,32,43,43,104,41,32,109,46,112,117,115,104,40,96,97,114,103,36,123,104,125,96,41,44,32,110,46,112,117,115,104,40,96,97,114,103,36,123,104,125,87,105,114,101,100,96,41,59,10,32,32,32,32,32,32,32,32,109,32,61,32,109,46,106,111,105,110,40,34,44,34,41,59,10,32,32,32,32,32,32,32,32,110,32,61,32,110,46,106,111,105,110,40,34,44,34,41,59,10,32,32,32,32,32,32,32,32,109,32,61,32,96,114,101,116,117,114,110,32,102,117,110,99,116,105,111,110,32,40,36,123,109,125,41,32,123,10,96,59,10,32,32,32,32,32,32,32,32,107,32,38,38,32,40,109,32,43,61,32,34,118,97,114,32,100,101,115,116,114,117,99,116,111,114,115,32,61,32,91,93,59,92,110,34,41,59,10,32,32,32,32,32,32,32,32,118,97,114,32,117,32,61,32,107,32,63,32,34,100,101,115,116,114,117,99,116,111,114,115,34,32,58,32,34,110,117,108,108,34,44,32,118,32,61,32,34,104,117,109,97,110,78,97,109,101,32,116,104,114,111,119,66,105,110,100,105,110,103,69,114,114,111,114,32,105,110,118,111,107,101,114,32,102,110,32,114,117,110,68,101,115,116,114,117,99,116,111,114,115,32,114,101,116,84,121,112,101,32,99,108,97,115,115,80,97,114,97,109,34,46,115,112,108,105,116,40,34,32,34,41,59,10,32,32,32,32,32,32,32,32,103,32,38,38,32,40,109,32,43,61,32,96,118,97,114,32,116,104,105,115,87,105,114,101,100,32,61,32,99,108,97,115,115,80,97,114,97,109,91,39,116,111,87,105,114,101,84,121,112,101,39,93,40,36,123,117,125,44,32,116,104,105,115,41,59,10,96,41,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,104,32,61,32,48,59,32,104,32,60,32,101,59,32,43,43,104,41,10,32,32,32,32,32,32,32,32,32,32,109,32,43,61,32,96,118,97,114,32,97,114,103,36,123,104,125,87,105,114,101,100,32,61,32,97,114,103,84,121,112,101,36,123,104,125,91,39,116,111,87,105,114,101,84,121,112,101,39,93,40,36,123,117,125,44,32,97,114,103,36,123,104,125,41,59,10,96,44,32,118,46,112,117,115,104,40,96,97,114,103,84,121,112,101,36,123,104,125,96,41,59,10,32,32,32,32,32,32,32,32,109,32,43,61,32,40,99,32,124,124,32,102,32,63,32,34,118,97,114,32,114,118,32,61,32,34,32,58,32,34,34,41,32,43,32,96,105,110,118,111,107,101,114,40,36,123,110,125,41,59,10,96,59,10,32,32,32,32,32,32,32,32,105,102,32,40,107,41,32,109,32,43,61,32,34,114,117,110,68,101,115,116,114,117,99,116,111,114,115,40,100,101,115,116,114,117,99,116,111,114,115,41,59,92,110,34,59,10,32,32,32,32,32,32,32,32,101,108,115,101,10,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,104,32,61,32,103,32,63,32,49,32,58,32,50,59,32,104,32,60,32,98,46,108,101,110,103,116,104,59,32,43,43,104,41,10,32,32,32,32,32,32,32,32,32,32,32,32,102,32,61,32,49,32,61,61,61,32,104,32,63,32,34,116,104,105,115,87,105,114,101,100,34,32,58,32,34,97,114,103,34,32,43,32,40,104,32,45,32,50,41,32,43,32,34,87,105,114,101,100,34,44,32,110,117,108,108,32,33,61,61,32,98,91,104,93,46,107,99,32,38,38,32,40,109,32,43,61,32,96,36,123,102,125,95,100,116,111,114,40,36,123,102,125,41,59,10,96,44,32,118,46,112,117,115,104,40,96,36,123,102,125,95,100,116,111,114,96,41,41,59,10,32,32,32,32,32,32,32,32,99,32,38,38,32,40,109,32,43,61,32,34,118,97,114,32,114,101,116,32,61,32,114,101,116,84,121,112,101,91,39,102,114,111,109,87,105,114,101,84,121,112,101,39,93,40,114,118,41,59,92,110,114,101,116,117,114,110,32,114,101,116,59,92,110,34,41,59,10,32,32,32,32,32,32,32,32,108,101,116,32,91,121,44,32,122,93,32,61,32,91,118,44,32,109,32,43,32,34,125,92,110,34,93,59,10,32,32,32,32,32,32,32,32,121,46,112,117,115,104,40,122,41,59,10,32,32,32,32,32,32,32,32,98,32,61,32,69,98,40,121,41,40,46,46,46,100,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,74,40,97,44,32,98,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,71,98,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,99,32,61,32,91,93,44,32,100,32,61,32,48,59,32,100,32,60,32,97,59,32,100,43,43,41,32,99,46,112,117,115,104,40,66,91,98,32,43,32,52,32,42,32,100,32,62,62,32,50,93,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,59,10,32,32,32,32,32,32,125,44,32,72,98,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,97,32,61,32,97,46,116,114,105,109,40,41,59,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,98,32,61,32,97,46,105,110,100,101,120,79,102,40,34,40,34,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,45,49,32,33,61,61,32,98,32,63,32,97,46,115,117,98,115,116,114,40,48,44,32,98,41,32,58,32,97,59,10,32,32,32,32,32,32,125,44,32,73,98,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,57,32,60,32,97,32,38,38,32,48,32,61,61,61,32,45,45,75,91,97,32,43,32,49,93,32,38,38,32,40,75,91,97,93,32,61,32,118,111,105,100,32,48,44,32,79,97,46,112,117,115,104,40,97,41,41,59,10,32,32,32,32,32,32,125,44,32,74,98,32,61,32,123,10,32,32,32,32,32,32,32,32,110,97,109,101,58,32,34,101,109,115,99,114,105,112,116,101,110,58,58,118,97,108,34,44,10,32,32,32,32,32,32,32,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,77,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,73,98,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,116,111,87,105,114,101,84,121,112,101,58,32,40,97,44,32,98,41,32,61,62,32,81,97,40,98,41,44,10,32,32,32,32,32,32,32,32,109,99,58,32,56,44,10,32,32,32,32,32,32,32,32,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,58,32,105,98,44,10,32,32,32,32,32,32,32,32,107,99,58,32,110,117,108,108,10,32,32,32,32,32,32,125,44,32,75,98,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,115,119,105,116,99,104,32,40,98,41,32,123,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,49,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,32,63,32,102,117,110,99,116,105,111,110,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,102,114,111,109,87,105,114,101,84,121,112,101,40,114,91,100,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,32,58,32,102,117,110,99,116,105,111,110,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,102,114,111,109,87,105,114,101,84,121,112,101,40,116,91,100,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,50,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,32,63,32,102,117,110,99,116,105,111,110,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,102,114,111,109,87,105,114,101,84,121,112,101,40,119,91,100,32,62,62,32,49,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,32,58,32,102,117,110,99,116,105,111,110,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,102,114,111,109,87,105,114,101,84,121,112,101,40,120,91,100,32,62,62,32,49,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,52,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,32,63,32,102,117,110,99,116,105,111,110,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,102,114,111,109,87,105,114,101,84,121,112,101,40,65,91,100,32,62,62,32,50,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,32,58,32,102,117,110,99,116,105,111,110,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,102,114,111,109,87,105,114,101,84,121,112,101,40,66,91,100,32,62,62,32,50,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,100,101,102,97,117,108,116,58,10,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,84,121,112,101,69,114,114,111,114,40,96,105,110,118,97,108,105,100,32,105,110,116,101,103,101,114,32,119,105,100,116,104,32,40,36,123,98,125,41,58,32,36,123,97,125,96,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,44,32,117,98,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,110,117,108,108,32,61,61,61,32,97,41,32,114,101,116,117,114,110,32,34,110,117,108,108,34,59,10,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,116,121,112,101,111,102,32,97,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,111,98,106,101,99,116,34,32,61,61,61,32,98,32,124,124,32,34,97,114,114,97,121,34,32,61,61,61,32,98,32,124,124,32,34,102,117,110,99,116,105,111,110,34,32,61,61,61,32,98,32,63,32,97,46,116,111,83,116,114,105,110,103,40,41,32,58,32,34,34,32,43,32,97,59,10,32,32,32,32,32,32,125,44,32,76,98,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,115,119,105,116,99,104,32,40,98,41,32,123,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,52,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,102,117,110,99,116,105,111,110,40,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,102,114,111,109,87,105,114,101,84,121,112,101,40,111,97,91,99,32,62,62,32,50,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,56,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,102,117,110,99,116,105,111,110,40,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,102,114,111,109,87,105,114,101,84,121,112,101,40,112,97,91,99,32,62,62,32,51,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,100,101,102,97,117,108,116,58,10,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,84,121,112,101,69,114,114,111,114,40,96,105,110,118,97,108,105,100,32,102,108,111,97,116,32,119,105,100,116,104,32,40,36,123,98,125,41,58,32,36,123,97,125,96,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,44,32,78,98,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,115,119,105,116,99,104,32,40,98,41,32,123,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,49,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,32,63,32,40,100,41,32,61,62,32,114,91,100,93,32,58,32,40,100,41,32,61,62,32,116,91,100,93,59,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,50,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,32,63,32,40,100,41,32,61,62,32,119,91,100,32,62,62,32,49,93,32,58,32,40,100,41,32,61,62,32,120,91,100,32,62,62,32,49,93,59,10,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,52,58,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,32,63,32,40,100,41,32,61,62,32,65,91,100,32,62,62,32,50,93,32,58,32,40,100,41,32,61,62,32,66,91,100,32,62,62,32,50,93,59,10,32,32,32,32,32,32,32,32,32,32,100,101,102,97,117,108,116,58,10,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,84,121,112,101,69,114,114,111,114,40,96,105,110,118,97,108,105,100,32,105,110,116,101,103,101,114,32,119,105,100,116,104,32,40,36,123,98,125,41,58,32,36,123,97,125,96,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,44,32,79,98,32,61,32,79,98,106,101,99,116,46,97,115,115,105,103,110,40,123,32,111,112,116,105,111,110,97,108,58,32,116,114,117,101,32,125,44,32,74,98,41,44,32,80,98,32,61,32,34,117,110,100,101,102,105,110,101,100,34,32,33,61,32,116,121,112,101,111,102,32,84,101,120,116,68,101,99,111,100,101,114,32,63,32,110,101,119,32,84,101,120,116,68,101,99,111,100,101,114,40,34,117,116,102,45,49,54,108,101,34,41,32,58,32,118,111,105,100,32,48,44,32,81,98,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,97,32,62,62,32,49,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,100,32,61,32,99,32,43,32,98,32,47,32,50,59,32,33,40,99,32,62,61,32,100,41,32,38,38,32,120,91,99,93,59,32,41,32,43,43,99,59,10,32,32,32,32,32,32,32,32,99,32,60,60,61,32,49,59,10,32,32,32,32,32,32,32,32,105,102,32,40,51,50,32,60,32,99,32,45,32,97,32,38,38,32,80,98,41,32,114,101,116,117,114,110,32,80,98,46,100,101,99,111,100,101,40,116,46,115,117,98,97,114,114,97,121,40,97,44,32,99,41,41,59,10,32,32,32,32,32,32,32,32,99,32,61,32,34,34,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,100,32,61,32,48,59,32,33,40,100,32,62,61,32,98,32,47,32,50,41,59,32,43,43,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,119,91,97,32,43,32,50,32,42,32,100,32,62,62,32,49,93,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,48,32,61,61,32,101,41,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,32,32,99,32,43,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,101,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,59,10,32,32,32,32,32,32,125,44,32,82,98,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,99,32,33,61,32,110,117,108,108,32,63,32,99,32,58,32,99,32,61,32,50,49,52,55,52,56,51,54,52,55,59,10,32,32,32,32,32,32,32,32,105,102,32,40,50,32,62,32,99,41,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,99,32,45,61,32,50,59,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,98,59,10,32,32,32,32,32,32,32,32,99,32,61,32,99,32,60,32,50,32,42,32,97,46,108,101,110,103,116,104,32,63,32,99,32,47,32,50,32,58,32,97,46,108,101,110,103,116,104,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,101,32,61,32,48,59,32,101,32,60,32,99,59,32,43,43,101,41,32,119,91,98,32,62,62,32,49,93,32,61,32,97,46,99,104,97,114,67,111,100,101,65,116,40,101,41,44,32,98,32,43,61,32,50,59,10,32,32,32,32,32,32,32,32,119,91,98,32,62,62,32,49,93,32,61,32,48,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,32,45,32,100,59,10,32,32,32,32,32,32,125,44,32,83,98,32,61,32,40,97,41,32,61,62,32,50,32,42,32,97,46,108,101,110,103,116,104,44,32,84,98,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,99,32,61,32,48,44,32,100,32,61,32,34,34,59,32,33,40,99,32,62,61,32,98,32,47,32,52,41,59,32,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,65,91,97,32,43,32,52,32,42,32,99,32,62,62,32,50,93,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,48,32,61,61,32,101,41,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,32,32,43,43,99,59,10,32,32,32,32,32,32,32,32,32,32,54,53,53,51,54,32,60,61,32,101,32,63,32,40,101,32,45,61,32,54,53,53,51,54,44,32,100,32,43,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,53,53,50,57,54,32,124,32,101,32,62,62,32,49,48,44,32,53,54,51,50,48,32,124,32,101,32,38,32,49,48,50,51,41,41,32,58,32,100,32,43,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,101,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,100,59,10,32,32,32,32,32,32,125,44,32,85,98,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,99,32,33,61,32,110,117,108,108,32,63,32,99,32,58,32,99,32,61,32,50,49,52,55,52,56,51,54,52,55,59,10,32,32,32,32,32,32,32,32,105,102,32,40,52,32,62,32,99,41,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,98,59,10,32,32,32,32,32,32,32,32,99,32,61,32,100,32,43,32,99,32,45,32,52,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,101,32,61,32,48,59,32,101,32,60,32,97,46,108,101,110,103,116,104,59,32,43,43,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,97,46,99,104,97,114,67,111,100,101,65,116,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,53,53,50,57,54,32,60,61,32,102,32,38,38,32,53,55,51,52,51,32,62,61,32,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,97,46,99,104,97,114,67,111,100,101,65,116,40,43,43,101,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,102,32,61,32,54,53,53,51,54,32,43,32,40,40,102,32,38,32,49,48,50,51,41,32,60,60,32,49,48,41,32,124,32,104,32,38,32,49,48,50,51,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,65,91,98,32,62,62,32,50,93,32,61,32,102,59,10,32,32,32,32,32,32,32,32,32,32,98,32,43,61,32,52,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,98,32,43,32,52,32,62,32,99,41,32,98,114,101,97,107,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,65,91,98,32,62,62,32,50,93,32,61,32,48,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,32,45,32,100,59,10,32,32,32,32,32,32,125,44,32,86,98,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,98,32,61,32,48,44,32,99,32,61,32,48,59,32,99,32,60,32,97,46,108,101,110,103,116,104,59,32,43,43,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,97,46,99,104,97,114,67,111,100,101,65,116,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,53,53,50,57,54,32,60,61,32,100,32,38,38,32,53,55,51,52,51,32,62,61,32,100,32,38,38,32,43,43,99,59,10,32,32,32,32,32,32,32,32,32,32,98,32,43,61,32,52,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,59,10,32,32,32,32,32,32,125,44,32,87,98,32,61,32,48,44,32,88,98,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,91,93,59,10,32,32,32,32,32,32,32,32,97,32,61,32,97,46,116,111,87,105,114,101,84,121,112,101,40,100,44,32,99,41,59,10,32,32,32,32,32,32,32,32,100,46,108,101,110,103,116,104,32,38,38,32,40,66,91,98,32,62,62,32,50,93,32,61,32,81,97,40,100,41,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,97,59,10,32,32,32,32,32,32,125,44,32,89,98,32,61,32,91,93,44,32,90,98,32,61,32,123,125,44,32,36,98,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,89,98,46,108,101,110,103,116,104,59,10,32,32,32,32,32,32,32,32,89,98,46,112,117,115,104,40,97,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,59,10,32,32,32,32,32,32,125,44,32,97,99,32,61,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,99,32,61,32,65,114,114,97,121,40,97,41,44,32,100,32,61,32,48,59,32,100,32,60,32,97,59,32,43,43,100,41,32,99,91,100,93,32,61,32,90,97,40,66,91,98,32,43,32,52,32,42,32,100,32,62,62,32,50,93,44,32,34,112,97,114,97,109,101,116,101,114,32,34,32,43,32,100,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,99,59,10,32,32,32,32,32,32,125,44,32,98,99,32,61,32,123,125,44,32,99,99,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,33,40,97,32,105,110,115,116,97,110,99,101,111,102,32,68,97,32,124,124,32,34,117,110,119,105,110,100,34,32,61,61,32,97,41,41,32,116,104,114,111,119,32,97,59,10,32,32,32,32,32,32,125,44,32,100,99,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,95,97,50,59,10,32,32,32,32,32,32,32,32,110,97,32,61,32,97,59,10,32,32,32,32,32,32,32,32,70,97,32,124,124,32,48,32,60,32,87,98,32,124,124,32,40,40,95,97,50,32,61,32,108,46,111,110,69,120,105,116,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,50,46,99,97,108,108,40,108,44,32,97,41,44,32,107,97,32,61,32,116,114,117,101,41,59,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,68,97,40,97,41,59,10,32,32,32,32,32,32,125,44,32,101,99,32,61,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,33,107,97,41,10,32,32,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,97,40,41,44,32,33,40,70,97,32,124,124,32,48,32,60,32,87,98,41,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,110,97,32,61,32,97,32,61,32,110,97,44,32,100,99,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,98,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,99,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,98,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,99,99,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,44,32,102,99,32,61,32,123,125,44,32,104,99,32,61,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,33,103,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,97,32,61,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,85,83,69,82,58,32,34,119,101,98,95,117,115,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,76,79,71,78,65,77,69,58,32,34,119,101,98,95,117,115,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,80,65,84,72,58,32,34,47,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,80,87,68,58,32,34,47,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,72,79,77,69,58,32,34,47,104,111,109,101,47,119,101,98,95,117,115,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,76,65,78,71,58,32,40,34,111,98,106,101,99,116,34,32,61,61,32,116,121,112,101,111,102,32,110,97,118,105,103,97,116,111,114,32,38,38,32,110,97,118,105,103,97,116,111,114,46,108,97,110,103,117,97,103,101,115,32,38,38,32,110,97,118,105,103,97,116,111,114,46,108,97,110,103,117,97,103,101,115,91,48,93,32,124,124,32,34,67,34,41,46,114,101,112,108,97,99,101,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,45,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,95,34,10,32,32,32,32,32,32,32,32,32,32,32,32,41,32,43,32,34,46,85,84,70,45,56,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,95,58,32,101,97,32,124,124,32,34,46,47,116,104,105,115,46,112,114,111,103,114,97,109,34,10,32,32,32,32,32,32,32,32,32,32,125,44,32,98,59,10,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,98,32,105,110,32,102,99,41,32,118,111,105,100,32,48,32,61,61,61,32,102,99,91,98,93,32,63,32,100,101,108,101,116,101,32,97,91,98,93,32,58,32,97,91,98,93,32,61,32,102,99,91,98,93,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,98,32,105,110,32,97,41,32,99,46,112,117,115,104,40,96,36,123,98,125,61,36,123,97,91,98,93,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,103,99,32,61,32,99,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,103,99,59,10,32,32,32,32,32,32,125,44,32,103,99,44,32,105,99,32,61,32,91,110,117,108,108,44,32,91,93,44,32,91,93,93,44,32,106,99,32,61,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,34,111,98,106,101,99,116,34,32,61,61,32,116,121,112,101,111,102,32,99,114,121,112,116,111,32,38,38,32,34,102,117,110,99,116,105,111,110,34,32,61,61,32,116,121,112,101,111,102,32,99,114,121,112,116,111,46,103,101,116,82,97,110,100,111,109,86,97,108,117,101,115,41,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,40,97,41,32,61,62,32,99,114,121,112,116,111,46,103,101,116,82,97,110,100,111,109,86,97,108,117,101,115,40,97,41,59,10,32,32,32,32,32,32,32,32,119,97,40,34,105,110,105,116,82,97,110,100,111,109,68,101,118,105,99,101,34,41,59,10,32,32,32,32,32,32,125,44,32,107,99,32,61,32,40,97,41,32,61,62,32,40,107,99,32,61,32,106,99,40,41,41,40,97,41,59,10,32,32,32,32,32,32,76,32,61,32,108,46,66,105,110,100,105,110,103,69,114,114,111,114,32,61,32,99,108,97,115,115,32,101,120,116,101,110,100,115,32,69,114,114,111,114,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,40,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,115,117,112,101,114,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,110,97,109,101,32,61,32,34,66,105,110,100,105,110,103,69,114,114,111,114,34,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,75,46,112,117,115,104,40,48,44,32,49,44,32,118,111,105,100,32,48,44,32,49,44,32,110,117,108,108,44,32,49,44,32,116,114,117,101,44,32,49,44,32,102,97,108,115,101,44,32,49,41,59,10,32,32,32,32,32,32,108,46,99,111,117,110,116,95,101,109,118,97,108,95,104,97,110,100,108,101,115,32,61,32,40,41,32,61,62,32,75,46,108,101,110,103,116,104,32,47,32,50,32,45,32,53,32,45,32,79,97,46,108,101,110,103,116,104,59,10,32,32,32,32,32,32,83,97,32,61,32,108,46,80,117,114,101,86,105,114,116,117,97,108,69,114,114,111,114,32,61,32,82,97,40,34,80,117,114,101,86,105,114,116,117,97,108,69,114,114,111,114,34,41,59,10,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,108,99,32,61,32,65,114,114,97,121,40,50,53,54,41,44,32,109,99,32,61,32,48,59,32,50,53,54,32,62,32,109,99,59,32,43,43,109,99,41,32,108,99,91,109,99,93,32,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,109,99,41,59,10,32,32,32,32,32,32,84,97,32,61,32,108,99,59,10,32,32,32,32,32,32,101,98,32,61,32,108,46,73,110,116,101,114,110,97,108,69,114,114,111,114,32,61,32,99,108,97,115,115,32,101,120,116,101,110,100,115,32,69,114,114,111,114,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,40,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,115,117,112,101,114,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,110,97,109,101,32,61,32,34,73,110,116,101,114,110,97,108,69,114,114,111,114,34,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,79,98,106,101,99,116,46,97,115,115,105,103,110,40,110,98,46,112,114,111,116,111,116,121,112,101,44,32,123,10,32,32,32,32,32,32,32,32,105,115,65,108,105,97,115,79,102,58,32,102,117,110,99,116,105,111,110,40,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,33,40,116,104,105,115,32,105,110,115,116,97,110,99,101,111,102,32,110,98,32,38,38,32,97,32,105,110,115,116,97,110,99,101,111,102,32,110,98,41,41,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,116,104,105,115,46,99,99,46,102,99,46,101,99,44,32,99,32,61,32,116,104,105,115,46,99,99,46,100,99,59,10,32,32,32,32,32,32,32,32,32,32,97,46,99,99,32,61,32,97,46,99,99,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,97,46,99,99,46,102,99,46,101,99,59,10,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,97,32,61,32,97,46,99,99,46,100,99,59,32,98,46,105,99,59,32,41,32,99,32,61,32,98,46,116,99,40,99,41,44,32,98,32,61,32,98,46,105,99,59,10,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,59,32,100,46,105,99,59,32,41,32,97,32,61,32,100,46,116,99,40,97,41,44,32,100,32,61,32,100,46,105,99,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,98,32,61,61,61,32,100,32,38,38,32,99,32,61,61,61,32,97,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,99,108,111,110,101,58,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,99,99,46,100,99,32,124,124,32,108,98,40,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,99,99,46,114,99,41,32,114,101,116,117,114,110,32,116,104,105,115,46,99,99,46,99,111,117,110,116,46,118,97,108,117,101,32,43,61,32,49,44,32,116,104,105,115,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,97,32,61,32,81,44,32,98,32,61,32,79,98,106,101,99,116,44,32,99,32,61,32,98,46,99,114,101,97,116,101,44,32,100,32,61,32,79,98,106,101,99,116,46,103,101,116,80,114,111,116,111,116,121,112,101,79,102,40,116,104,105,115,41,44,32,101,32,61,32,116,104,105,115,46,99,99,59,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,97,40,10,32,32,32,32,32,32,32,32,32,32,32,32,99,46,99,97,108,108,40,98,44,32,100,44,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,99,58,32,123,32,118,97,108,117,101,58,32,123,32,99,111,117,110,116,58,32,101,46,99,111,117,110,116,44,32,115,99,58,32,101,46,115,99,44,32,114,99,58,32,101,46,114,99,44,32,100,99,58,32,101,46,100,99,44,32,102,99,58,32,101,46,102,99,44,32,106,99,58,32,101,46,106,99,44,32,108,99,58,32,101,46,108,99,32,125,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,125,41,10,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,97,46,99,99,46,99,111,117,110,116,46,118,97,108,117,101,32,43,61,32,49,59,10,32,32,32,32,32,32,32,32,32,32,97,46,99,99,46,115,99,32,61,32,102,97,108,115,101,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,97,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,91,34,100,101,108,101,116,101,34,93,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,99,99,46,100,99,32,124,124,32,108,98,40,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,99,99,46,115,99,32,38,38,32,33,116,104,105,115,46,99,99,46,114,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,34,79,98,106,101,99,116,32,97,108,114,101,97,100,121,32,115,99,104,101,100,117,108,101,100,32,102,111,114,32,100,101,108,101,116,105,111,110,34,41,59,10,32,32,32,32,32,32,32,32,32,32,36,97,40,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,97,32,61,32,116,104,105,115,46,99,99,59,10,32,32,32,32,32,32,32,32,32,32,45,45,97,46,99,111,117,110,116,46,118,97,108,117,101,59,10,32,32,32,32,32,32,32,32,32,32,48,32,61,61,61,32,97,46,99,111,117,110,116,46,118,97,108,117,101,32,38,38,32,40,97,46,106,99,32,63,32,97,46,108,99,46,110,99,40,97,46,106,99,41,32,58,32,97,46,102,99,46,101,99,46,110,99,40,97,46,100,99,41,41,59,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,99,99,46,114,99,32,124,124,32,40,116,104,105,115,46,99,99,46,106,99,32,61,32,118,111,105,100,32,48,44,32,116,104,105,115,46,99,99,46,100,99,32,61,32,118,111,105,100,32,48,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,105,115,68,101,108,101,116,101,100,58,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,33,116,104,105,115,46,99,99,46,100,99,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,100,101,108,101,116,101,76,97,116,101,114,58,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,99,99,46,100,99,32,124,124,32,108,98,40,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,99,99,46,115,99,32,38,38,32,33,116,104,105,115,46,99,99,46,114,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,34,79,98,106,101,99,116,32,97,108,114,101,97,100,121,32,115,99,104,101,100,117,108,101,100,32,102,111,114,32,100,101,108,101,116,105,111,110,34,41,59,10,32,32,32,32,32,32,32,32,32,32,109,98,46,112,117,115,104,40,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,99,99,46,115,99,32,61,32,116,114,117,101,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,79,98,106,101,99,116,46,97,115,115,105,103,110,40,120,98,46,112,114,111,116,111,116,121,112,101,44,32,123,10,32,32,32,32,32,32,32,32,73,99,40,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,67,99,32,38,38,32,40,97,32,61,32,116,104,105,115,46,67,99,40,97,41,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,97,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,122,99,40,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,95,97,50,59,10,32,32,32,32,32,32,32,32,32,32,40,95,97,50,32,61,32,116,104,105,115,46,110,99,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,50,46,99,97,108,108,40,116,104,105,115,44,32,97,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,109,99,58,32,56,44,10,32,32,32,32,32,32,32,32,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,58,32,105,98,44,10,32,32,32,32,32,32,32,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,102,117,110,99,116,105,111,110,40,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,98,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,119,99,32,63,32,102,98,40,116,104,105,115,46,101,99,46,111,99,44,32,123,32,102,99,58,32,116,104,105,115,46,79,99,44,32,100,99,58,32,99,44,32,108,99,58,32,116,104,105,115,44,32,106,99,58,32,97,32,125,41,32,58,32,102,98,40,116,104,105,115,46,101,99,46,111,99,44,32,123,32,102,99,58,32,116,104,105,115,44,32,100,99,58,32,97,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,116,104,105,115,46,73,99,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,33,99,41,32,114,101,116,117,114,110,32,116,104,105,115,46,122,99,40,97,41,44,32,110,117,108,108,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,100,98,40,116,104,105,115,46,101,99,44,32,99,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,33,61,61,32,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,48,32,61,61,61,32,100,46,99,99,46,99,111,117,110,116,46,118,97,108,117,101,41,32,114,101,116,117,114,110,32,100,46,99,99,46,100,99,32,61,32,99,44,32,100,46,99,99,46,106,99,32,61,32,97,44,32,100,46,99,108,111,110,101,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,100,32,61,32,100,46,99,108,111,110,101,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,122,99,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,100,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,100,32,61,32,116,104,105,115,46,101,99,46,72,99,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,100,32,61,32,99,98,91,100,93,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,33,100,41,32,114,101,116,117,114,110,32,98,46,99,97,108,108,40,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,32,32,100,32,61,32,116,104,105,115,46,118,99,32,63,32,100,46,68,99,32,58,32,100,46,112,111,105,110,116,101,114,84,121,112,101,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,98,98,40,99,44,32,116,104,105,115,46,101,99,44,32,100,46,101,99,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,110,117,108,108,32,61,61,61,32,101,32,63,32,98,46,99,97,108,108,40,116,104,105,115,41,32,58,32,116,104,105,115,46,119,99,32,63,32,102,98,40,100,46,101,99,46,111,99,44,32,123,32,102,99,58,32,100,44,32,100,99,58,32,101,44,32,108,99,58,32,116,104,105,115,44,32,106,99,58,32,97,32,125,41,32,58,32,102,98,40,100,46,101,99,46,111,99,44,32,123,32,102,99,58,32,100,44,32,100,99,58,32,101,32,125,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,66,98,32,61,32,108,46,85,110,98,111,117,110,100,84,121,112,101,69,114,114,111,114,32,61,32,82,97,40,34,85,110,98,111,117,110,100,84,121,112,101,69,114,114,111,114,34,41,59,10,32,32,32,32,32,32,118,97,114,32,121,100,32,61,32,123,10,32,32,32,32,32,32,32,32,108,58,32,40,97,44,32,98,44,32,99,44,32,100,41,32,61,62,32,119,97,40,10,32,32,32,32,32,32,32,32,32,32,96,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,36,123,97,32,63,32,72,40,116,44,32,97,41,32,58,32,34,34,125,44,32,97,116,58,32,96,32,43,32,91,98,32,63,32,98,32,63,32,72,40,116,44,32,98,41,32,58,32,34,34,32,58,32,34,117,110,107,110,111,119,110,32,102,105,108,101,110,97,109,101,34,44,32,99,44,32,100,32,63,32,100,32,63,32,72,40,116,44,32,100,41,32,58,32,34,34,32,58,32,34,117,110,107,110,111,119,110,32,102,117,110,99,116,105,111,110,34,93,10,32,32,32,32,32,32,32,32,41,44,10,32,32,32,32,32,32,32,32,70,97,58,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,110,101,119,32,74,97,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,48,32,61,61,32,114,91,98,46,100,99,32,43,32,49,50,93,32,38,38,32,40,114,91,98,46,100,99,32,43,32,49,50,93,32,61,32,49,44,32,73,97,45,45,41,59,10,32,32,32,32,32,32,32,32,32,32,114,91,98,46,100,99,32,43,32,49,51,93,32,61,32,48,59,10,32,32,32,32,32,32,32,32,32,32,72,97,46,112,117,115,104,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,110,99,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,111,99,40,97,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,69,97,58,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,87,40,48,44,32,48,41,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,97,32,61,32,72,97,46,112,111,112,40,41,59,10,32,32,32,32,32,32,32,32,32,32,112,99,40,97,46,70,99,41,59,10,32,32,32,32,32,32,32,32,32,32,73,32,61,32,48,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,98,58,32,40,41,32,61,62,32,77,97,40,91,93,41,44,10,32,32,32,32,32,32,32,32,111,58,32,40,97,44,32,98,41,32,61,62,32,77,97,40,91,97,44,32,98,93,41,44,10,32,32,32,32,32,32,32,32,118,58,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,110,101,119,32,74,97,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,66,91,100,46,100,99,32,43,32,49,54,32,62,62,32,50,93,32,61,32,48,59,10,32,32,32,32,32,32,32,32,32,32,66,91,100,46,100,99,32,43,32,52,32,62,62,32,50,93,32,61,32,98,59,10,32,32,32,32,32,32,32,32,32,32,66,91,100,46,100,99,32,43,32,56,32,62,62,32,50,93,32,61,32,99,59,10,32,32,32,32,32,32,32,32,32,32,73,32,61,32,97,59,10,32,32,32,32,32,32,32,32,32,32,73,97,43,43,59,10,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,73,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,100,58,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,73,32,124,124,32,40,73,32,61,32,97,41,59,10,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,73,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,119,97,58,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,116,97,58,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,117,97,58,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,121,97,58,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,118,97,58,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,65,97,58,32,40,41,32,61,62,32,119,97,40,34,34,41,44,10,32,32,32,32,32,32,32,32,100,97,58,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,78,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,90,97,40,98,44,32,34,119,114,97,112,112,101,114,34,41,59,10,32,32,32,32,32,32,32,32,32,32,99,32,61,32,77,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,98,46,101,99,44,32,101,32,61,32,100,46,111,99,44,32,102,32,61,32,100,46,105,99,46,111,99,44,32,104,32,61,32,100,46,105,99,46,99,111,110,115,116,114,117,99,116,111,114,59,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,74,40,97,44,32,102,117,110,99,116,105,111,110,40,46,46,46,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,100,46,105,99,46,66,99,46,102,111,114,69,97,99,104,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,40,107,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,91,107,93,32,61,61,61,32,102,91,107,93,41,32,116,104,114,111,119,32,110,101,119,32,83,97,40,96,80,117,114,101,32,118,105,114,116,117,97,108,32,102,117,110,99,116,105,111,110,32,36,123,107,125,32,109,117,115,116,32,98,101,32,105,109,112,108,101,109,101,110,116,101,100,32,105,110,32,74,97,118,97,83,99,114,105,112,116,96,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,46,98,105,110,100,40,116,104,105,115,41,10,32,32,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,79,98,106,101,99,116,46,100,101,102,105,110,101,80,114,111,112,101,114,116,121,40,116,104,105,115,44,32,34,95,95,112,97,114,101,110,116,34,44,32,123,32,118,97,108,117,101,58,32,101,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,95,99,111,110,115,116,114,117,99,116,40,46,46,46,103,41,59,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,101,46,95,95,99,111,110,115,116,114,117,99,116,32,61,32,102,117,110,99,116,105,111,110,40,46,46,46,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,32,61,61,61,32,101,41,32,116,104,114,111,119,32,110,101,119,32,76,40,34,80,97,115,115,32,99,111,114,114,101,99,116,32,39,116,104,105,115,39,32,116,111,32,95,95,99,111,110,115,116,114,117,99,116,34,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,103,32,61,32,104,46,105,109,112,108,101,109,101,110,116,40,116,104,105,115,44,32,46,46,46,103,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,36,97,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,103,46,99,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,103,46,110,111,116,105,102,121,79,110,68,101,115,116,114,117,99,116,105,111,110,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,107,46,114,99,32,61,32,116,114,117,101,59,10,32,32,32,32,32,32,32,32,32,32,32,32,79,98,106,101,99,116,46,100,101,102,105,110,101,80,114,111,112,101,114,116,105,101,115,40,116,104,105,115,44,32,123,32,99,99,58,32,123,32,118,97,108,117,101,58,32,107,32,125,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,81,40,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,103,32,61,32,107,46,100,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,103,32,61,32,86,97,40,100,44,32,103,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,85,97,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,103,41,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,84,114,105,101,100,32,116,111,32,114,101,103,105,115,116,101,114,32,114,101,103,105,115,116,101,114,101,100,32,105,110,115,116,97,110,99,101,58,32,36,123,103,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,85,97,91,103,93,32,61,32,116,104,105,115,59,10,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,101,46,95,95,100,101,115,116,114,117,99,116,32,61,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,32,61,61,61,32,101,41,32,116,104,114,111,119,32,110,101,119,32,76,40,34,80,97,115,115,32,99,111,114,114,101,99,116,32,39,116,104,105,115,39,32,116,111,32,95,95,100,101,115,116,114,117,99,116,34,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,36,97,40,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,116,104,105,115,46,99,99,46,100,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,103,32,61,32,86,97,40,100,44,32,103,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,85,97,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,103,41,41,32,100,101,108,101,116,101,32,85,97,91,103,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,101,108,115,101,32,116,104,114,111,119,32,110,101,119,32,76,40,96,84,114,105,101,100,32,116,111,32,117,110,114,101,103,105,115,116,101,114,32,117,110,114,101,103,105,115,116,101,114,101,100,32,105,110,115,116,97,110,99,101,58,32,36,123,103,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,97,46,112,114,111,116,111,116,121,112,101,32,61,32,79,98,106,101,99,116,46,99,114,101,97,116,101,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,79,98,106,101,99,116,46,97,115,115,105,103,110,40,97,46,112,114,111,116,111,116,121,112,101,44,32,99,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,81,97,40,97,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,78,58,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,103,98,91,97,93,59,10,32,32,32,32,32,32,32,32,32,32,100,101,108,101,116,101,32,103,98,91,97,93,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,98,46,121,99,44,32,100,32,61,32,98,46,110,99,44,32,101,32,61,32,98,46,65,99,44,32,102,32,61,32,101,46,109,97,112,40,40,104,41,32,61,62,32,104,46,76,99,41,46,99,111,110,99,97,116,40,101,46,109,97,112,40,40,104,41,32,61,62,32,104,46,82,99,41,41,59,10,32,32,32,32,32,32,32,32,32,32,84,40,91,97,93,44,32,102,44,32,40,104,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,123,125,59,10,32,32,32,32,32,32,32,32,32,32,32,32,101,46,102,111,114,69,97,99,104,40,40,107,44,32,109,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,110,32,61,32,104,91,109,93,44,32,117,32,61,32,107,46,74,99,44,32,118,32,61,32,107,46,75,99,44,32,121,32,61,32,104,91,109,32,43,32,101,46,108,101,110,103,116,104,93,44,32,122,32,61,32,107,46,81,99,44,32,69,32,61,32,107,46,83,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,103,91,107,46,71,99,93,32,61,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,97,100,58,32,40,70,41,32,61,62,32,110,46,102,114,111,109,87,105,114,101,84,121,112,101,40,117,40,118,44,32,70,41,41,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,119,114,105,116,101,58,32,40,70,44,32,108,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,71,32,61,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,122,40,69,44,32,70,44,32,121,46,116,111,87,105,114,101,84,121,112,101,40,71,44,32,108,97,41,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,104,98,40,71,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,110,97,109,101,58,32,98,46,110,97,109,101,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,40,107,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,109,32,61,32,123,125,44,32,110,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,110,32,105,110,32,103,41,32,109,91,110,93,32,61,32,103,91,110,93,46,114,101,97,100,40,107,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,40,107,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,109,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,111,87,105,114,101,84,121,112,101,58,32,40,107,44,32,109,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,110,32,105,110,32,103,41,32,105,102,32,40,33,40,110,32,105,110,32,109,41,41,32,116,104,114,111,119,32,110,101,119,32,84,121,112,101,69,114,114,111,114,40,96,77,105,115,115,105,110,103,32,102,105,101,108,100,58,32,34,36,123,110,125,34,96,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,117,32,61,32,99,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,110,32,105,110,32,103,41,32,103,91,110,93,46,119,114,105,116,101,40,117,44,32,109,91,110,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,110,117,108,108,32,33,61,61,32,107,32,38,38,32,107,46,112,117,115,104,40,100,44,32,117,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,117,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,109,99,58,32,56,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,58,32,105,98,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,107,99,58,32,100,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,93,59,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,109,97,58,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,80,97,58,32,40,97,44,32,98,44,32,99,44,32,100,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,78,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,83,40,97,44,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,110,97,109,101,58,32,98,44,10,32,32,32,32,32,32,32,32,32,32,32,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,102,117,110,99,116,105,111,110,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,33,33,101,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,116,111,87,105,114,101,84,121,112,101,58,32,102,117,110,99,116,105,111,110,40,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,102,32,63,32,99,32,58,32,100,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,109,99,58,32,56,44,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,58,32,102,117,110,99,116,105,111,110,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,102,114,111,109,87,105,114,101,84,121,112,101,40,116,91,101,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,107,99,58,32,110,117,108,108,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,67,58,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,44,32,118,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,110,32,61,32,78,40,110,41,59,10,32,32,32,32,32,32,32,32,32,32,102,32,61,32,86,40,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,32,32,103,32,38,38,32,40,103,32,61,32,86,40,104,44,32,103,41,41,59,10,32,32,32,32,32,32,32,32,32,32,109,32,38,38,32,40,109,32,61,32,86,40,107,44,32,109,41,41,59,10,32,32,32,32,32,32,32,32,32,32,118,32,61,32,86,40,117,44,32,118,41,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,121,32,61,32,113,98,40,110,41,59,10,32,32,32,32,32,32,32,32,32,32,112,98,40,121,44,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,67,98,40,96,67,97,110,110,111,116,32,99,111,110,115,116,114,117,99,116,32,36,123,110,125,32,100,117,101,32,116,111,32,117,110,98,111,117,110,100,32,116,121,112,101,115,96,44,32,91,100,93,41,59,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,84,40,91,97,44,32,98,44,32,99,93,44,32,100,32,63,32,91,100,93,32,58,32,91,93,44,32,40,122,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,95,97,50,59,10,32,32,32,32,32,32,32,32,32,32,32,32,122,32,61,32,122,91,48,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,69,32,61,32,122,46,101,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,70,32,61,32,69,46,111,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,70,32,61,32,110,98,46,112,114,111,116,111,116,121,112,101,59,10,32,32,32,32,32,32,32,32,32,32,32,32,122,32,61,32,74,40,110,44,32,102,117,110,99,116,105,111,110,40,46,46,46,87,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,79,98,106,101,99,116,46,103,101,116,80,114,111,116,111,116,121,112,101,79,102,40,116,104,105,115,41,32,33,61,61,32,108,97,41,32,116,104,114,111,119,32,110,101,119,32,76,40,34,85,115,101,32,39,110,101,119,39,32,116,111,32,99,111,110,115,116,114,117,99,116,32,34,32,43,32,110,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,61,61,61,32,71,46,113,99,41,32,116,104,114,111,119,32,110,101,119,32,76,40,110,32,43,32,34,32,104,97,115,32,110,111,32,97,99,99,101,115,115,105,98,108,101,32,99,111,110,115,116,114,117,99,116,111,114,34,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,77,98,32,61,32,71,46,113,99,91,87,97,46,108,101,110,103,116,104,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,61,61,61,32,77,98,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,96,84,114,105,101,100,32,116,111,32,105,110,118,111,107,101,32,99,116,111,114,32,111,102,32,36,123,110,125,32,119,105,116,104,32,105,110,118,97,108,105,100,32,110,117,109,98,101,114,32,111,102,32,112,97,114,97,109,101,116,101,114,115,32,40,36,123,87,97,46,108,101,110,103,116,104,125,41,32,45,32,101,120,112,101,99,116,101,100,32,40,36,123,79,98,106,101,99,116,46,107,101,121,115,40,71,46,113,99,41,46,116,111,83,116,114,105,110,103,40,41,125,41,32,112,97,114,97,109,101,116,101,114,115,32,105,110,115,116,101,97,100,33,96,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,77,98,46,97,112,112,108,121,40,116,104,105,115,44,32,87,97,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,108,97,32,61,32,79,98,106,101,99,116,46,99,114,101,97,116,101,40,70,44,32,123,32,99,111,110,115,116,114,117,99,116,111,114,58,32,123,32,118,97,108,117,101,58,32,122,32,125,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,122,46,112,114,111,116,111,116,121,112,101,32,61,32,108,97,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,71,32,61,32,110,101,119,32,114,98,40,110,44,32,122,44,32,108,97,44,32,118,44,32,69,44,32,102,44,32,103,44,32,109,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,71,46,105,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,109,97,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,40,95,97,50,32,61,32,40,109,97,32,61,32,71,46,105,99,41,46,117,99,41,32,33,61,32,110,117,108,108,32,63,32,95,97,50,32,58,32,109,97,46,117,99,32,61,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,71,46,105,99,46,117,99,46,112,117,115,104,40,71,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,69,32,61,32,110,101,119,32,120,98,40,110,44,32,71,44,32,116,114,117,101,44,32,102,97,108,115,101,44,32,102,97,108,115,101,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,109,97,32,61,32,110,101,119,32,120,98,40,110,32,43,32,34,42,34,44,32,71,44,32,102,97,108,115,101,44,32,102,97,108,115,101,44,32,102,97,108,115,101,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,70,32,61,32,110,101,119,32,120,98,40,110,32,43,32,34,32,99,111,110,115,116,42,34,44,32,71,44,32,102,97,108,115,101,44,32,116,114,117,101,44,32,102,97,108,115,101,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,99,98,91,97,93,32,61,32,123,32,112,111,105,110,116,101,114,84,121,112,101,58,32,109,97,44,32,68,99,58,32,70,32,125,59,10,32,32,32,32,32,32,32,32,32,32,32,32,121,98,40,121,44,32,122,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,69,44,32,109,97,44,32,70,93,59,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,76,58,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,71,98,40,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,78,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,72,98,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,102,32,61,32,86,40,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,32,32,84,40,91,93,44,32,91,97,93,44,32,40,109,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,110,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,67,98,40,96,67,97,110,110,111,116,32,99,97,108,108,32,36,123,117,125,32,100,117,101,32,116,111,32,117,110,98,111,117,110,100,32,116,121,112,101,115,96,44,32,107,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,109,32,61,32,109,91,48,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,117,32,61,32,96,36,123,109,46,110,97,109,101,125,46,36,123,98,125,96,59,10,32,32,32,32,32,32,32,32,32,32,32,32,98,46,115,116,97,114,116,115,87,105,116,104,40,34,64,64,34,41,32,38,38,32,40,98,32,61,32,83,121,109,98,111,108,91,98,46,115,117,98,115,116,114,105,110,103,40,50,41,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,118,32,61,32,109,46,101,99,46,99,111,110,115,116,114,117,99,116,111,114,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,111,105,100,32,48,32,61,61,61,32,118,91,98,93,32,63,32,40,110,46,112,99,32,61,32,99,32,45,32,49,44,32,118,91,98,93,32,61,32,110,41,32,58,32,40,111,98,40,118,44,32,98,44,32,117,41,44,32,118,91,98,93,46,104,99,91,99,32,45,32,49,93,32,61,32,110,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,84,40,91,93,44,32,107,44,32,40,121,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,121,32,61,32,70,98,40,117,44,32,91,121,91,48,93,44,32,110,117,108,108,93,46,99,111,110,99,97,116,40,121,46,115,108,105,99,101,40,49,41,41,44,32,110,117,108,108,44,32,102,44,32,104,44,32,103,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,111,105,100,32,48,32,61,61,61,32,118,91,98,93,46,104,99,32,63,32,40,121,46,112,99,32,61,32,99,32,45,32,49,44,32,118,91,98,93,32,61,32,121,41,32,58,32,118,91,98,93,46,104,99,91,99,32,45,32,49,93,32,61,32,121,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,109,46,101,99,46,117,99,41,32,102,111,114,32,40,99,111,110,115,116,32,122,32,111,102,32,109,46,101,99,46,117,99,41,32,122,46,99,111,110,115,116,114,117,99,116,111,114,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,40,98,41,32,124,124,32,40,122,46,99,111,110,115,116,114,117,99,116,111,114,91,98,93,32,61,32,121,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,75,58,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,71,98,40,98,44,32,99,41,59,10,32,32,32,32,32,32,32,32,32,32,101,32,61,32,86,40,100,44,32,101,41,59,10,32,32,32,32,32,32,32,32,32,32,84,40,91,93,44,32,91,97,93,44,32,40,103,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,103,32,61,32,103,91,48,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,96,99,111,110,115,116,114,117,99,116,111,114,32,36,123,103,46,110,97,109,101,125,96,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,111,105,100,32,48,32,61,61,61,32,103,46,101,99,46,113,99,32,38,38,32,40,103,46,101,99,46,113,99,32,61,32,91,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,33,61,61,32,103,46,101,99,46,113,99,91,98,32,45,32,49,93,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,96,67,97,110,110,111,116,32,114,101,103,105,115,116,101,114,32,109,117,108,116,105,112,108,101,32,99,111,110,115,116,114,117,99,116,111,114,115,32,119,105,116,104,32,105,100,101,110,116,105,99,97,108,32,110,117,109,98,101,114,32,111,102,32,112,97,114,97,109,101,116,101,114,115,32,40,36,123,98,32,45,32,49,125,41,32,102,111,114,32,99,108,97,115,115,32,39,36,123,103,46,110,97,109,101,125,39,33,32,79,118,101,114,108,111,97,100,32,114,101,115,111,108,117,116,105,111,110,32,105,115,32,99,117,114,114,101,110,116,108,121,32,111,110,108,121,32,112,101,114,102,111,114,109,101,100,32,117,115,105,110,103,32,116,104,101,32,112,97,114,97,109,101,116,101,114,32,99,111,117,110,116,44,32,110,111,116,32,97,99,116,117,97,108,32,116,121,112,101,32,105,110,102,111,33,96,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,103,46,101,99,46,113,99,91,98,32,45,32,49,93,32,61,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,67,98,40,96,67,97,110,110,111,116,32,99,111,110,115,116,114,117,99,116,32,36,123,103,46,110,97,109,101,125,32,100,117,101,32,116,111,32,117,110,98,111,117,110,100,32,116,121,112,101,115,96,44,32,104,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,32,32,84,40,91,93,44,32,104,44,32,40,109,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,109,46,115,112,108,105,99,101,40,49,44,32,48,44,32,110,117,108,108,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,103,46,101,99,46,113,99,91,98,32,45,32,49,93,32,61,32,70,98,40,107,44,32,109,44,32,110,117,108,108,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,109,58,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,109,32,61,32,71,98,40,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,78,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,72,98,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,102,32,61,32,86,40,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,32,32,84,40,91,93,44,32,91,97,93,44,32,40,110,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,117,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,67,98,40,96,67,97,110,110,111,116,32,99,97,108,108,32,36,123,118,125,32,100,117,101,32,116,111,32,117,110,98,111,117,110,100,32,116,121,112,101,115,96,44,32,109,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,110,32,61,32,110,91,48,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,118,32,61,32,96,36,123,110,46,110,97,109,101,125,46,36,123,98,125,96,59,10,32,32,32,32,32,32,32,32,32,32,32,32,98,46,115,116,97,114,116,115,87,105,116,104,40,34,64,64,34,41,32,38,38,32,40,98,32,61,32,83,121,109,98,111,108,91,98,46,115,117,98,115,116,114,105,110,103,40,50,41,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,103,32,38,38,32,110,46,101,99,46,66,99,46,112,117,115,104,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,121,32,61,32,110,46,101,99,46,111,99,44,32,122,32,61,32,121,91,98,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,111,105,100,32,48,32,61,61,61,32,122,32,124,124,32,118,111,105,100,32,48,32,61,61,61,32,122,46,104,99,32,38,38,32,122,46,99,108,97,115,115,78,97,109,101,32,33,61,61,32,110,46,110,97,109,101,32,38,38,32,122,46,112,99,32,61,61,61,32,99,32,45,32,50,32,63,32,40,117,46,112,99,32,61,32,99,32,45,32,50,44,32,117,46,99,108,97,115,115,78,97,109,101,32,61,32,110,46,110,97,109,101,44,32,121,91,98,93,32,61,32,117,41,32,58,32,40,111,98,40,121,44,32,98,44,32,118,41,44,32,121,91,98,93,46,104,99,91,99,32,45,32,50,93,32,61,32,117,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,84,40,91,93,44,32,109,44,32,40,69,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,69,32,61,32,70,98,40,118,44,32,69,44,32,110,44,32,102,44,32,104,44,32,107,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,111,105,100,32,48,32,61,61,61,32,121,91,98,93,46,104,99,32,63,32,40,69,46,112,99,32,61,32,99,32,45,32,50,44,32,121,91,98,93,32,61,32,69,41,32,58,32,121,91,98,93,46,104,99,91,99,32,45,32,50,93,32,61,32,69,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,79,97,58,32,40,97,41,32,61,62,32,83,40,97,44,32,74,98,41,44,10,32,32,32,32,32,32,32,32,80,58,32,40,97,44,32,98,44,32,99,44,32,100,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,101,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,78,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,101,46,118,97,108,117,101,115,32,61,32,123,125,59,10,32,32,32,32,32,32,32,32,32,32,83,40,97,44,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,110,97,109,101,58,32,98,44,10,32,32,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,58,32,101,44,10,32,32,32,32,32,32,32,32,32,32,32,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,102,117,110,99,116,105,111,110,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,99,111,110,115,116,114,117,99,116,111,114,46,118,97,108,117,101,115,91,102,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,116,111,87,105,114,101,84,121,112,101,58,32,40,102,44,32,104,41,32,61,62,32,104,46,118,97,108,117,101,44,10,32,32,32,32,32,32,32,32,32,32,32,32,109,99,58,32,56,44,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,58,32,75,98,40,98,44,32,99,44,32,100,41,44,10,32,32,32,32,32,32,32,32,32,32,32,32,107,99,58,32,110,117,108,108,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,112,98,40,98,44,32,101,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,119,58,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,90,97,40,97,44,32,34,101,110,117,109,34,41,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,78,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,100,46,99,111,110,115,116,114,117,99,116,111,114,59,10,32,32,32,32,32,32,32,32,32,32,100,32,61,32,79,98,106,101,99,116,46,99,114,101,97,116,101,40,100,46,99,111,110,115,116,114,117,99,116,111,114,46,112,114,111,116,111,116,121,112,101,44,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,108,117,101,58,32,123,32,118,97,108,117,101,58,32,99,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,58,32,123,32,118,97,108,117,101,58,32,74,40,96,36,123,100,46,110,97,109,101,125,95,36,123,98,125,96,44,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,125,41,32,125,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,97,46,118,97,108,117,101,115,91,99,93,32,61,32,100,59,10,32,32,32,32,32,32,32,32,32,32,97,91,98,93,32,61,32,100,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,97,97,58,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,78,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,83,40,97,44,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,110,97,109,101,58,32,98,44,10,32,32,32,32,32,32,32,32,32,32,32,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,40,100,41,32,61,62,32,100,44,10,32,32,32,32,32,32,32,32,32,32,32,32,116,111,87,105,114,101,84,121,112,101,58,32,40,100,44,32,101,41,32,61,62,32,101,44,10,32,32,32,32,32,32,32,32,32,32,32,32,109,99,58,32,56,44,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,58,32,76,98,40,98,44,32,99,41,44,10,32,32,32,32,32,32,32,32,32,32,32,32,107,99,58,32,110,117,108,108,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,77,58,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,71,98,40,98,44,32,99,41,59,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,78,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,72,98,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,101,32,61,32,86,40,100,44,32,101,41,59,10,32,32,32,32,32,32,32,32,32,32,112,98,40,10,32,32,32,32,32,32,32,32,32,32,32,32,97,44,10,32,32,32,32,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,67,98,40,96,67,97,110,110,111,116,32,99,97,108,108,32,36,123,97,125,32,100,117,101,32,116,111,32,117,110,98,111,117,110,100,32,116,121,112,101,115,96,44,32,103,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,98,32,45,32,49,10,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,84,40,91,93,44,32,103,44,32,40,107,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,121,98,40,97,44,32,70,98,40,97,44,32,91,107,91,48,93,44,32,110,117,108,108,93,46,99,111,110,99,97,116,40,107,46,115,108,105,99,101,40,49,41,41,44,32,110,117,108,108,44,32,101,44,32,102,44,32,104,41,44,32,98,32,45,32,49,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,122,58,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,78,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,45,49,32,61,61,61,32,101,32,38,38,32,40,101,32,61,32,52,50,57,52,57,54,55,50,57,53,41,59,10,32,32,32,32,32,32,32,32,32,32,101,32,61,32,40,103,41,32,61,62,32,103,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,48,32,61,61,61,32,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,51,50,32,45,32,56,32,42,32,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,101,32,61,32,40,103,41,32,61,62,32,103,32,60,60,32,102,32,62,62,62,32,102,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,98,46,105,110,99,108,117,100,101,115,40,34,117,110,115,105,103,110,101,100,34,41,32,63,32,102,117,110,99,116,105,111,110,40,103,44,32,107,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,107,32,62,62,62,32,48,59,10,32,32,32,32,32,32,32,32,32,32,125,32,58,32,102,117,110,99,116,105,111,110,40,103,44,32,107,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,107,59,10,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,83,40,97,44,32,123,32,110,97,109,101,58,32,98,44,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,101,44,32,116,111,87,105,114,101,84,121,112,101,58,32,104,44,32,109,99,58,32,56,44,32,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,58,32,78,98,40,98,44,32,99,44,32,48,32,33,61,61,32,100,41,44,32,107,99,58,32,110,117,108,108,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,114,58,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,100,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,110,101,119,32,101,40,114,46,98,117,102,102,101,114,44,32,66,91,102,32,43,32,52,32,62,62,32,50,93,44,32,66,91,102,32,62,62,32,50,93,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,91,73,110,116,56,65,114,114,97,121,44,32,85,105,110,116,56,65,114,114,97,121,44,32,73,110,116,49,54,65,114,114,97,121,44,32,85,105,110,116,49,54,65,114,114,97,121,44,32,73,110,116,51,50,65,114,114,97,121,44,32,85,105,110,116,51,50,65,114,114,97,121,44,32,70,108,111,97,116,51,50,65,114,114,97,121,44,32,70,108,111,97,116,54,52,65,114,114,97,121,93,91,98,93,59,10,32,32,32,32,32,32,32,32,32,32,99,32,61,32,78,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,83,40,97,44,32,123,32,110,97,109,101,58,32,99,44,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,100,44,32,109,99,58,32,56,44,32,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,58,32,100,32,125,44,32,123,32,77,99,58,32,116,114,117,101,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,79,58,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,83,40,97,44,32,79,98,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,84,58,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,99,32,61,32,78,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,102,32,61,32,86,40,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,32,32,103,32,61,32,86,40,104,44,32,103,41,59,10,32,32,32,32,32,32,32,32,32,32,109,32,61,32,86,40,107,44,32,109,41,59,10,32,32,32,32,32,32,32,32,32,32,117,32,61,32,86,40,110,44,32,117,41,59,10,32,32,32,32,32,32,32,32,32,32,84,40,91,97,93,44,32,91,98,93,44,32,40,118,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,32,61,32,118,91,48,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,110,101,119,32,120,98,40,99,44,32,118,46,101,99,44,32,102,97,108,115,101,44,32,102,97,108,115,101,44,32,116,114,117,101,44,32,118,44,32,100,44,32,102,44,32,103,44,32,109,44,32,117,41,93,59,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,98,97,58,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,78,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,34,115,116,100,58,58,115,116,114,105,110,103,34,32,61,61,61,32,98,59,10,32,32,32,32,32,32,32,32,32,32,83,40,97,44,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,110,97,109,101,58,32,98,44,10,32,32,32,32,32,32,32,32,32,32,32,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,102,117,110,99,116,105,111,110,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,66,91,100,32,62,62,32,50,93,44,32,102,32,61,32,100,32,43,32,52,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,99,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,104,32,61,32,102,44,32,103,32,61,32,48,59,32,103,32,60,61,32,101,59,32,43,43,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,102,32,43,32,103,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,32,61,61,32,101,32,124,124,32,48,32,61,61,32,116,91,107,93,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,104,32,61,32,104,32,63,32,72,40,116,44,32,104,44,32,107,32,45,32,104,41,32,58,32,34,34,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,118,111,105,100,32,48,32,61,61,61,32,109,41,32,118,97,114,32,109,32,61,32,104,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,108,115,101,32,109,32,43,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,48,41,44,32,109,32,43,61,32,104,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,104,32,61,32,107,32,43,32,49,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,109,32,61,32,65,114,114,97,121,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,103,32,61,32,48,59,32,103,32,60,32,101,59,32,43,43,103,41,32,109,91,103,93,32,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,116,91,102,32,43,32,103,93,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,109,32,61,32,109,46,106,111,105,110,40,34,34,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,80,40,100,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,109,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,116,111,87,105,114,101,84,121,112,101,58,32,102,117,110,99,116,105,111,110,40,100,44,32,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,32,105,110,115,116,97,110,99,101,111,102,32,65,114,114,97,121,66,117,102,102,101,114,32,38,38,32,40,101,32,61,32,110,101,119,32,85,105,110,116,56,65,114,114,97,121,40,101,41,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,102,44,32,104,32,61,32,34,115,116,114,105,110,103,34,32,61,61,32,116,121,112,101,111,102,32,101,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,33,40,104,32,124,124,32,101,32,105,110,115,116,97,110,99,101,111,102,32,85,105,110,116,56,65,114,114,97,121,32,124,124,32,101,32,105,110,115,116,97,110,99,101,111,102,32,85,105,110,116,56,67,108,97,109,112,101,100,65,114,114,97,121,32,124,124,32,101,32,105,110,115,116,97,110,99,101,111,102,32,73,110,116,56,65,114,114,97,121,41,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,76,40,34,67,97,110,110,111,116,32,112,97,115,115,32,110,111,110,45,115,116,114,105,110,103,32,116,111,32,115,116,100,58,58,115,116,114,105,110,103,34,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,99,32,38,38,32,104,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,103,32,61,32,102,32,61,32,48,59,32,103,32,60,32,101,46,108,101,110,103,116,104,59,32,43,43,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,101,46,99,104,97,114,67,111,100,101,65,116,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,49,50,55,32,62,61,32,107,32,63,32,102,43,43,32,58,32,50,48,52,55,32,62,61,32,107,32,63,32,102,32,43,61,32,50,32,58,32,53,53,50,57,54,32,60,61,32,107,32,38,38,32,53,55,51,52,51,32,62,61,32,107,32,63,32,40,102,32,43,61,32,52,44,32,43,43,103,41,32,58,32,102,32,43,61,32,51,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,108,115,101,32,102,32,61,32,101,46,108,101,110,103,116,104,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,103,32,61,32,113,99,40,52,32,43,32,102,32,43,32,49,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,107,32,61,32,103,32,43,32,52,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,66,91,103,32,62,62,32,50,93,32,61,32,102,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,99,32,38,38,32,104,41,32,78,97,40,101,44,32,107,44,32,102,32,43,32,49,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,108,115,101,32,105,102,32,40,104,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,104,32,61,32,48,59,32,104,32,60,32,102,59,32,43,43,104,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,109,32,61,32,101,46,99,104,97,114,67,111,100,101,65,116,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,50,53,53,32,60,32,109,41,32,116,104,114,111,119,32,80,40,107,41,44,32,110,101,119,32,76,40,34,83,116,114,105,110,103,32,104,97,115,32,85,84,70,45,49,54,32,99,111,100,101,32,117,110,105,116,115,32,116,104,97,116,32,100,111,32,110,111,116,32,102,105,116,32,105,110,32,56,32,98,105,116,115,34,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,91,107,32,43,32,104,93,32,61,32,109,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,108,115,101,32,102,111,114,32,40,104,32,61,32,48,59,32,104,32,60,32,102,59,32,43,43,104,41,32,116,91,107,32,43,32,104,93,32,61,32,101,91,104,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,110,117,108,108,32,33,61,61,32,100,32,38,38,32,100,46,112,117,115,104,40,80,44,32,103,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,103,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,109,99,58,32,56,44,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,58,32,105,98,44,10,32,32,32,32,32,32,32,32,32,32,32,32,107,99,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,80,40,100,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,83,58,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,99,32,61,32,78,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,50,32,61,61,61,32,98,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,81,98,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,82,98,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,83,98,59,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,40,103,41,32,61,62,32,120,91,103,32,62,62,32,49,93,59,10,32,32,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,52,32,61,61,61,32,98,32,38,38,32,40,100,32,61,32,84,98,44,32,101,32,61,32,85,98,44,32,102,32,61,32,86,98,44,32,104,32,61,32,40,103,41,32,61,62,32,66,91,103,32,62,62,32,50,93,41,59,10,32,32,32,32,32,32,32,32,32,32,83,40,97,44,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,110,97,109,101,58,32,99,44,10,32,32,32,32,32,32,32,32,32,32,32,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,40,103,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,107,32,61,32,66,91,103,32,62,62,32,50,93,44,32,109,44,32,110,32,61,32,103,32,43,32,52,44,32,117,32,61,32,48,59,32,117,32,60,61,32,107,59,32,43,43,117,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,118,32,61,32,103,32,43,32,52,32,43,32,117,32,42,32,98,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,117,32,61,61,32,107,32,124,124,32,48,32,61,61,32,104,40,118,41,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,110,32,61,32,100,40,110,44,32,118,32,45,32,110,41,44,32,118,111,105,100,32,48,32,61,61,61,32,109,32,63,32,109,32,61,32,110,32,58,32,40,109,32,43,61,32,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,48,41,44,32,109,32,43,61,32,110,41,44,32,110,32,61,32,118,32,43,32,98,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,80,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,109,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,116,111,87,105,114,101,84,121,112,101,58,32,40,103,44,32,107,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,34,115,116,114,105,110,103,34,32,33,61,32,116,121,112,101,111,102,32,107,41,32,116,104,114,111,119,32,110,101,119,32,76,40,96,67,97,110,110,111,116,32,112,97,115,115,32,110,111,110,45,115,116,114,105,110,103,32,116,111,32,67,43,43,32,115,116,114,105,110,103,32,116,121,112,101,32,36,123,99,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,109,32,61,32,102,40,107,41,44,32,110,32,61,32,113,99,40,52,32,43,32,109,32,43,32,98,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,66,91,110,32,62,62,32,50,93,32,61,32,109,32,47,32,98,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,40,107,44,32,110,32,43,32,52,44,32,109,32,43,32,98,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,110,117,108,108,32,33,61,61,32,103,32,38,38,32,103,46,112,117,115,104,40,80,44,32,110,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,110,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,109,99,58,32,56,44,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,58,32,105,98,44,10,32,32,32,32,32,32,32,32,32,32,32,32,107,99,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,80,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,72,58,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,103,98,91,97,93,32,61,32,123,32,110,97,109,101,58,32,78,40,98,41,44,32,121,99,58,32,86,40,99,44,32,100,41,44,32,110,99,58,32,86,40,101,44,32,102,41,44,32,65,99,58,32,91,93,32,125,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,120,58,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,103,98,91,97,93,46,65,99,46,112,117,115,104,40,123,32,71,99,58,32,78,40,98,41,44,32,76,99,58,32,99,44,32,74,99,58,32,86,40,100,44,32,101,41,44,32,75,99,58,32,102,44,32,82,99,58,32,104,44,32,81,99,58,32,86,40,103,44,32,107,41,44,32,83,99,58,32,109,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,81,97,58,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,78,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,83,40,97,44,32,123,32,78,99,58,32,116,114,117,101,44,32,110,97,109,101,58,32,98,44,32,109,99,58,32,48,44,32,102,114,111,109,87,105,114,101,84,121,112,101,58,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,125,44,32,116,111,87,105,114,101,84,121,112,101,58,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,125,32,125,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,71,97,58,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,68,97,116,101,46,110,111,119,40,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,114,97,58,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,70,97,32,61,32,102,97,108,115,101,59,10,32,32,32,32,32,32,32,32,32,32,87,98,32,61,32,48,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,110,97,58,32,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,73,110,102,105,110,105,116,121,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,99,97,58,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,77,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,90,97,40,98,44,32,34,101,109,118,97,108,58,58,97,115,34,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,88,98,40,98,44,32,99,44,32,97,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,83,97,58,32,40,97,44,32,98,44,32,99,44,32,100,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,89,98,91,97,93,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,77,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,97,40,110,117,108,108,44,32,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,68,58,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,89,98,91,97,93,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,77,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,90,98,91,99,93,59,10,32,32,32,32,32,32,32,32,32,32,99,32,61,32,118,111,105,100,32,48,32,61,61,61,32,102,32,63,32,78,40,99,41,32,58,32,102,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,97,40,98,44,32,98,91,99,93,44,32,100,44,32,101,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,74,97,58,32,73,98,44,10,32,32,32,32,32,32,32,32,65,58,32,40,97,44,32,98,44,32,99,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,97,99,40,97,44,32,98,41,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,98,46,115,104,105,102,116,40,41,59,10,32,32,32,32,32,32,32,32,32,32,97,45,45,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,34,114,101,116,117,114,110,32,102,117,110,99,116,105,111,110,32,40,111,98,106,44,32,102,117,110,99,44,32,100,101,115,116,114,117,99,116,111,114,115,82,101,102,44,32,97,114,103,115,41,32,123,92,110,34,44,32,102,32,61,32,48,44,32,104,32,61,32,91,93,59,10,32,32,32,32,32,32,32,32,32,32,48,32,61,61,61,32,99,32,38,38,32,104,46,112,117,115,104,40,34,111,98,106,34,41,59,10,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,103,32,61,32,91,34,114,101,116,84,121,112,101,34,93,44,32,107,32,61,32,91,100,93,44,32,109,32,61,32,48,59,32,109,32,60,32,97,59,32,43,43,109,41,10,32,32,32,32,32,32,32,32,32,32,32,32,104,46,112,117,115,104,40,34,97,114,103,34,32,43,32,109,41,44,32,103,46,112,117,115,104,40,34,97,114,103,84,121,112,101,34,32,43,32,109,41,44,32,107,46,112,117,115,104,40,98,91,109,93,41,44,32,101,32,43,61,32,96,32,32,118,97,114,32,97,114,103,36,123,109,125,32,61,32,97,114,103,84,121,112,101,36,123,109,125,46,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,40,97,114,103,115,36,123,102,32,63,32,34,43,34,32,43,32,102,32,58,32,34,34,125,41,59,10,96,44,32,102,32,43,61,32,98,91,109,93,46,109,99,59,10,32,32,32,32,32,32,32,32,32,32,101,32,43,61,32,96,32,32,118,97,114,32,114,118,32,61,32,36,123,49,32,61,61,61,32,99,32,63,32,34,110,101,119,32,102,117,110,99,34,32,58,32,34,102,117,110,99,46,99,97,108,108,34,125,40,36,123,104,46,106,111,105,110,40,34,44,32,34,41,125,41,59,10,96,59,10,32,32,32,32,32,32,32,32,32,32,100,46,78,99,32,124,124,32,40,103,46,112,117,115,104,40,34,101,109,118,97,108,95,114,101,116,117,114,110,86,97,108,117,101,34,41,44,32,107,46,112,117,115,104,40,88,98,41,44,32,101,32,43,61,32,34,32,32,114,101,116,117,114,110,32,101,109,118,97,108,95,114,101,116,117,114,110,86,97,108,117,101,40,114,101,116,84,121,112,101,44,32,100,101,115,116,114,117,99,116,111,114,115,82,101,102,44,32,114,118,41,59,92,110,34,41,59,10,32,32,32,32,32,32,32,32,32,32,103,46,112,117,115,104,40,101,32,43,32,34,125,59,92,110,34,41,59,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,69,98,40,103,41,40,46,46,46,107,41,59,10,32,32,32,32,32,32,32,32,32,32,99,32,61,32,96,109,101,116,104,111,100,67,97,108,108,101,114,60,40,36,123,98,46,109,97,112,40,40,110,41,32,61,62,32,110,46,110,97,109,101,41,46,106,111,105,110,40,34,44,32,34,41,125,41,32,61,62,32,36,123,100,46,110,97,109,101,125,62,96,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,36,98,40,74,40,99,44,32,97,41,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,84,97,58,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,57,32,60,32,97,32,38,38,32,40,75,91,97,32,43,32,49,93,32,43,61,32,49,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,82,97,58,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,77,40,97,41,59,10,32,32,32,32,32,32,32,32,32,32,104,98,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,73,98,40,97,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,70,58,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,90,97,40,97,44,32,34,95,101,109,118,97,108,95,116,97,107,101,95,118,97,108,117,101,34,41,59,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,97,46,114,101,97,100,86,97,108,117,101,70,114,111,109,80,111,105,110,116,101,114,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,81,97,40,97,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,111,97,58,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,98,99,91,97,93,32,38,38,32,40,99,108,101,97,114,84,105,109,101,111,117,116,40,98,99,91,97,93,46,105,100,41,44,32,100,101,108,101,116,101,32,98,99,91,97,93,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,33,98,41,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,115,101,116,84,105,109,101,111,117,116,40,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,100,101,108,101,116,101,32,98,99,91,97,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,101,99,40,40,41,32,61,62,32,114,99,40,97,44,32,112,101,114,102,111,114,109,97,110,99,101,46,110,111,119,40,41,41,41,59,10,32,32,32,32,32,32,32,32,32,32,125,44,32,98,41,59,10,32,32,32,32,32,32,32,32,32,32,98,99,91,97,93,32,61,32,123,32,105,100,58,32,99,44,32,85,99,58,32,98,32,125,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,112,97,58,32,40,97,44,32,98,44,32,99,44,32,100,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,40,47,42,32,64,95,95,80,85,82,69,95,95,32,42,47,32,110,101,119,32,68,97,116,101,40,41,41,46,103,101,116,70,117,108,108,89,101,97,114,40,41,44,32,102,32,61,32,110,101,119,32,68,97,116,101,40,101,44,32,48,44,32,49,41,46,103,101,116,84,105,109,101,122,111,110,101,79,102,102,115,101,116,40,41,59,10,32,32,32,32,32,32,32,32,32,32,101,32,61,32,110,101,119,32,68,97,116,101,40,101,44,32,54,44,32,49,41,46,103,101,116,84,105,109,101,122,111,110,101,79,102,102,115,101,116,40,41,59,10,32,32,32,32,32,32,32,32,32,32,66,91,97,32,62,62,32,50,93,32,61,32,54,48,32,42,32,77,97,116,104,46,109,97,120,40,102,44,32,101,41,59,10,32,32,32,32,32,32,32,32,32,32,65,91,98,32,62,62,32,50,93,32,61,32,78,117,109,98,101,114,40,102,32,33,61,32,101,41,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,40,104,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,77,97,116,104,46,97,98,115,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,96,85,84,67,36,123,48,32,60,61,32,104,32,63,32,34,45,34,32,58,32,34,43,34,125,36,123,83,116,114,105,110,103,40,77,97,116,104,46,102,108,111,111,114,40,103,32,47,32,54,48,41,41,46,112,97,100,83,116,97,114,116,40,50,44,32,34,48,34,41,125,36,123,83,116,114,105,110,103,40,103,32,37,32,54,48,41,46,112,97,100,83,116,97,114,116,40,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,50,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,48,34,10,32,32,32,32,32,32,32,32,32,32,32,32,41,125,96,59,10,32,32,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,32,32,32,32,97,32,61,32,98,40,102,41,59,10,32,32,32,32,32,32,32,32,32,32,98,32,61,32,98,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,101,32,60,32,102,32,63,32,40,78,97,40,97,44,32,99,44,32,49,55,41,44,32,78,97,40,98,44,32,100,44,32,49,55,41,41,32,58,32,40,78,97,40,97,44,32,100,44,32,49,55,41,44,32,78,97,40,98,44,32,99,44,32,49,55,41,41,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,113,97,58,32,40,97,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,116,46,108,101,110,103,116,104,59,10,32,32,32,32,32,32,32,32,32,32,97,32,62,62,62,61,32,48,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,50,49,52,55,52,56,51,54,52,56,32,60,32,97,41,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,99,32,61,32,49,59,32,52,32,62,61,32,99,59,32,99,32,42,61,32,50,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,98,32,42,32,40,49,32,43,32,48,46,50,32,47,32,99,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,100,32,61,32,77,97,116,104,46,109,105,110,40,100,44,32,97,32,43,32,49,48,48,54,54,51,50,57,54,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,97,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,32,61,32,40,77,97,116,104,46,109,105,110,40,50,49,52,55,52,56,51,54,52,56,44,32,54,53,53,51,54,32,42,32,77,97,116,104,46,99,101,105,108,40,77,97,116,104,46,109,97,120,40,97,44,32,100,41,32,47,32,54,53,53,51,54,41,41,32,45,32,106,97,46,98,117,102,102,101,114,46,98,121,116,101,76,101,110,103,116,104,32,43,32,54,53,53,51,53,41,32,47,32,54,53,53,51,54,32,124,32,48,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,106,97,46,103,114,111,119,40,100,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,113,97,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,49,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,98,114,101,97,107,32,97,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,32,61,32,118,111,105,100,32,48,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,101,41,32,114,101,116,117,114,110,32,116,114,117,101,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,67,97,58,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,48,59,10,32,32,32,32,32,32,32,32,32,32,104,99,40,41,46,102,111,114,69,97,99,104,40,40,100,44,32,101,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,98,32,43,32,99,59,10,32,32,32,32,32,32,32,32,32,32,32,32,101,32,61,32,66,91,97,32,43,32,52,32,42,32,101,32,62,62,32,50,93,32,61,32,102,59,10,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,102,32,61,32,48,59,32,102,32,60,32,100,46,108,101,110,103,116,104,59,32,43,43,102,41,32,114,91,101,43,43,93,32,61,32,100,46,99,104,97,114,67,111,100,101,65,116,40,102,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,114,91,101,93,32,61,32,48,59,10,32,32,32,32,32,32,32,32,32,32,32,32,99,32,43,61,32,100,46,108,101,110,103,116,104,32,43,32,49,59,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,68,97,58,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,104,99,40,41,59,10,32,32,32,32,32,32,32,32,32,32,66,91,97,32,62,62,32,50,93,32,61,32,99,46,108,101,110,103,116,104,59,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,48,59,10,32,32,32,32,32,32,32,32,32,32,99,46,102,111,114,69,97,99,104,40,40,101,41,32,61,62,32,100,32,43,61,32,101,46,108,101,110,103,116,104,32,43,32,49,41,59,10,32,32,32,32,32,32,32,32,32,32,66,91,98,32,62,62,32,50,93,32,61,32,100,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,122,97,58,32,40,41,32,61,62,32,53,50,44,10,32,32,32,32,32,32,32,32,120,97,58,32,40,41,32,61,62,32,53,50,44,10,32,32,32,32,32,32,32,32,85,58,32,40,97,44,32,98,44,32,99,44,32,100,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,101,32,61,32,48,44,32,102,32,61,32,48,59,32,102,32,60,32,99,59,32,102,43,43,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,66,91,98,32,62,62,32,50,93,44,32,103,32,61,32,66,91,98,32,43,32,52,32,62,62,32,50,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,98,32,43,61,32,56,59,10,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,118,97,114,32,107,32,61,32,48,59,32,107,32,60,32,103,59,32,107,43,43,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,109,32,61,32,97,44,32,110,32,61,32,116,91,104,32,43,32,107,93,44,32,117,32,61,32,105,99,91,109,93,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,48,32,61,61,61,32,110,32,124,124,32,49,48,32,61,61,61,32,110,32,63,32,40,40,49,32,61,61,61,32,109,32,63,32,104,97,32,58,32,113,41,40,72,40,117,41,41,44,32,117,46,108,101,110,103,116,104,32,61,32,48,41,32,58,32,117,46,112,117,115,104,40,110,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,101,32,43,61,32,103,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,66,91,100,32,62,62,32,50,93,32,61,32,101,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,73,97,58,32,115,99,44,10,32,32,32,32,32,32,32,32,110,58,32,116,99,44,10,32,32,32,32,32,32,32,32,36,58,32,117,99,44,10,32,32,32,32,32,32,32,32,76,97,58,32,118,99,44,10,32,32,32,32,32,32,32,32,103,58,32,119,99,44,10,32,32,32,32,32,32,32,32,117,58,32,120,99,44,10,32,32,32,32,32,32,32,32,78,97,58,32,121,99,44,10,32,32,32,32,32,32,32,32,71,58,32,122,99,44,10,32,32,32,32,32,32,32,32,74,58,32,65,99,44,10,32,32,32,32,32,32,32,32,102,58,32,66,99,44,10,32,32,32,32,32,32,32,32,95,58,32,67,99,44,10,32,32,32,32,32,32,32,32,104,58,32,68,99,44,10,32,32,32,32,32,32,32,32,77,97,58,32,69,99,44,10,32,32,32,32,32,32,32,32,107,58,32,70,99,44,10,32,32,32,32,32,32,32,32,82,58,32,71,99,44,10,32,32,32,32,32,32,32,32,116,58,32,72,99,44,10,32,32,32,32,32,32,32,32,86,58,32,73,99,44,10,32,32,32,32,32,32,32,32,87,58,32,74,99,44,10,32,32,32,32,32,32,32,32,88,97,58,32,75,99,44,10,32,32,32,32,32,32,32,32,98,98,58,32,76,99,44,10,32,32,32,32,32,32,32,32,104,97,58,32,77,99,44,10,32,32,32,32,32,32,32,32,107,97,58,32,78,99,44,10,32,32,32,32,32,32,32,32,108,97,58,32,79,99,44,10,32,32,32,32,32,32,32,32,102,97,58,32,80,99,44,10,32,32,32,32,32,32,32,32,100,98,58,32,81,99,44,10,32,32,32,32,32,32,32,32,73,58,32,82,99,44,10,32,32,32,32,32,32,32,32,97,58,32,83,99,44,10,32,32,32,32,32,32,32,32,66,58,32,84,99,44,10,32,32,32,32,32,32,32,32,69,58,32,85,99,44,10,32,32,32,32,32,32,32,32,88,58,32,86,99,44,10,32,32,32,32,32,32,32,32,99,58,32,87,99,44,10,32,32,32,32,32,32,32,32,75,97,58,32,88,99,44,10,32,32,32,32,32,32,32,32,72,97,58,32,89,99,44,10,32,32,32,32,32,32,32,32,101,58,32,90,99,44,10,32,32,32,32,32,32,32,32,89,58,32,36,99,44,10,32,32,32,32,32,32,32,32,81,58,32,97,100,44,10,32,32,32,32,32,32,32,32,106,58,32,98,100,44,10,32,32,32,32,32,32,32,32,121,58,32,99,100,44,10,32,32,32,32,32,32,32,32,105,58,32,100,100,44,10,32,32,32,32,32,32,32,32,112,58,32,101,100,44,10,32,32,32,32,32,32,32,32,115,58,32,102,100,44,10,32,32,32,32,32,32,32,32,90,58,32,103,100,44,10,32,32,32,32,32,32,32,32,87,97,58,32,104,100,44,10,32,32,32,32,32,32,32,32,90,97,58,32,106,100,44,10,32,32,32,32,32,32,32,32,89,97,58,32,107,100,44,10,32,32,32,32,32,32,32,32,97,98,58,32,108,100,44,10,32,32,32,32,32,32,32,32,36,97,58,32,109,100,44,10,32,32,32,32,32,32,32,32,95,97,58,32,110,100,44,10,32,32,32,32,32,32,32,32,99,98,58,32,111,100,44,10,32,32,32,32,32,32,32,32,105,97,58,32,112,100,44,10,32,32,32,32,32,32,32,32,103,97,58,32,113,100,44,10,32,32,32,32,32,32,32,32,86,97,58,32,114,100,44,10,32,32,32,32,32,32,32,32,102,98,58,32,115,100,44,10,32,32,32,32,32,32,32,32,101,97,58,32,116,100,44,10,32,32,32,32,32,32,32,32,103,98,58,32,117,100,44,10,32,32,32,32,32,32,32,32,106,97,58,32,118,100,44,10,32,32,32,32,32,32,32,32,85,97,58,32,119,100,44,10,32,32,32,32,32,32,32,32,101,98,58,32,120,100,44,10,32,32,32,32,32,32,32,32,113,58,32,40,97,41,32,61,62,32,97,44,10,32,32,32,32,32,32,32,32,66,97,58,32,100,99,44,10,32,32,32,32,32,32,32,32,115,97,58,32,40,97,44,32,98,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,107,99,40,116,46,115,117,98,97,114,114,97,121,40,97,44,32,97,32,43,32,98,41,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,44,32,88,32,61,32,102,117,110,99,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,95,97,50,59,10,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,97,40,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,95,97,51,59,10,32,32,32,32,32,32,32,32,32,32,88,32,61,32,99,46,101,120,112,111,114,116,115,59,10,32,32,32,32,32,32,32,32,32,32,106,97,32,61,32,88,46,104,98,59,10,32,32,32,32,32,32,32,32,32,32,113,97,40,41,59,10,32,32,32,32,32,32,32,32,32,32,85,32,61,32,88,46,109,98,59,10,32,32,32,32,32,32,32,32,32,32,115,97,46,117,110,115,104,105,102,116,40,88,46,105,98,41,59,10,32,32,32,32,32,32,32,32,32,32,67,45,45,59,10,32,32,32,32,32,32,32,32,32,32,40,95,97,51,32,61,32,108,46,109,111,110,105,116,111,114,82,117,110,68,101,112,101,110,100,101,110,99,105,101,115,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,51,46,99,97,108,108,40,108,44,32,67,41,59,10,32,32,32,32,32,32,32,32,32,32,48,32,61,61,32,67,32,38,38,32,40,110,117,108,108,32,33,61,61,32,118,97,32,38,38,32,40,99,108,101,97,114,73,110,116,101,114,118,97,108,40,118,97,41,44,32,118,97,32,61,32,110,117,108,108,41,44,32,68,32,38,38,32,40,99,32,61,32,68,44,32,68,32,61,32,110,117,108,108,44,32,99,40,41,41,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,88,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,67,43,43,59,10,32,32,32,32,32,32,32,32,40,95,97,50,32,61,32,108,46,109,111,110,105,116,111,114,82,117,110,68,101,112,101,110,100,101,110,99,105,101,115,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,50,46,99,97,108,108,40,108,44,32,67,41,59,10,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,123,32,97,58,32,121,100,32,125,59,10,32,32,32,32,32,32,32,32,105,102,32,40,108,46,105,110,115,116,97,110,116,105,97,116,101,87,97,115,109,41,10,32,32,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,108,46,105,110,115,116,97,110,116,105,97,116,101,87,97,115,109,40,98,44,32,97,41,59,10,32,32,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,113,40,96,77,111,100,117,108,101,46,105,110,115,116,97,110,116,105,97,116,101,87,97,115,109,32,99,97,108,108,98,97,99,107,32,102,97,105,108,101,100,32,119,105,116,104,32,101,114,114,111,114,58,32,36,123,99,125,96,41,44,32,98,97,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,121,97,32,33,61,32,110,117,108,108,32,63,32,121,97,32,58,32,121,97,32,61,32,120,97,40,34,68,111,116,76,111,116,116,105,101,80,108,97,121,101,114,46,119,97,115,109,34,41,32,63,32,34,68,111,116,76,111,116,116,105,101,80,108,97,121,101,114,46,119,97,115,109,34,32,58,32,108,46,108,111,99,97,116,101,70,105,108,101,32,63,32,108,46,108,111,99,97,116,101,70,105,108,101,40,34,68,111,116,76,111,116,116,105,101,80,108,97,121,101,114,46,119,97,115,109,34,44,32,112,41,32,58,32,112,32,43,32,34,68,111,116,76,111,116,116,105,101,80,108,97,121,101,114,46,119,97,115,109,34,59,10,32,32,32,32,32,32,32,32,67,97,40,98,44,32,102,117,110,99,116,105,111,110,40,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,97,40,99,46,105,110,115,116,97,110,99,101,41,59,10,32,32,32,32,32,32,32,32,125,41,46,99,97,116,99,104,40,98,97,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,123,125,59,10,32,32,32,32,32,32,125,40,41,44,32,113,99,32,61,32,40,97,41,32,61,62,32,40,113,99,32,61,32,88,46,106,98,41,40,97,41,44,32,88,97,32,61,32,40,97,41,32,61,62,32,40,88,97,32,61,32,88,46,107,98,41,40,97,41,44,32,80,32,61,32,40,97,41,32,61,62,32,40,80,32,61,32,88,46,108,98,41,40,97,41,44,32,114,99,32,61,32,40,97,44,32,98,41,32,61,62,32,40,114,99,32,61,32,88,46,110,98,41,40,97,44,32,98,41,44,32,87,32,61,32,40,97,44,32,98,41,32,61,62,32,40,87,32,61,32,88,46,111,98,41,40,97,44,32,98,41,44,32,75,97,32,61,32,40,97,41,32,61,62,32,40,75,97,32,61,32,88,46,112,98,41,40,97,41,44,32,89,32,61,32,40,97,41,32,61,62,32,40,89,32,61,32,88,46,113,98,41,40,97,41,44,32,90,32,61,32,40,41,32,61,62,32,40,90,32,61,32,88,46,114,98,41,40,41,44,32,112,99,32,61,32,40,97,41,32,61,62,32,40,112,99,32,61,32,88,46,115,98,41,40,97,41,44,32,110,99,32,61,32,40,97,41,32,61,62,32,40,110,99,32,61,32,88,46,116,98,41,40,97,41,44,32,76,97,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,40,76,97,32,61,32,88,46,117,98,41,40,97,44,32,98,44,32,99,41,44,32,111,99,32,61,32,40,97,41,32,61,62,32,40,111,99,32,61,32,88,46,118,98,41,40,97,41,44,32,122,100,32,61,32,108,46,100,121,110,67,97,108,108,95,106,105,32,61,32,40,97,44,32,98,41,32,61,62,32,40,122,100,32,61,32,108,46,100,121,110,67,97,108,108,95,106,105,32,61,32,88,46,119,98,41,40,97,44,32,98,41,44,32,65,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,106,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,61,62,32,40,65,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,106,105,32,61,32,88,46,120,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,44,32,66,100,32,61,32,108,46,100,121,110,67,97,108,108,95,106,105,105,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,40,66,100,32,61,32,108,46,100,121,110,67,97,108,108,95,106,105,105,32,61,32,88,46,121,98,41,40,97,44,32,98,44,32,99,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,105,105,106,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,105,105,106,106,32,61,32,88,46,122,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,118,105,106,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,118,105,106,106,32,61,32,88,46,65,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,118,97,114,32,67,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,106,105,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,61,62,32,40,67,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,106,105,105,105,32,61,32,88,46,66,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,44,32,68,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,41,32,61,62,32,40,68,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,106,32,61,32,88,46,67,98,41,40,97,44,32,98,44,32,99,44,32,100,41,44,32,69,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,61,62,32,40,69,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,105,105,32,61,32,88,46,68,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,44,32,70,100,32,61,32,108,46,100,121,110,67,97,108,108,95,106,106,106,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,61,62,32,40,70,100,32,61,32,108,46,100,121,110,67,97,108,108,95,106,106,106,105,32,61,32,88,46,69,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,44,32,71,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,61,62,32,40,71,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,106,32,61,32,88,46,70,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,44,32,72,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,106,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,61,62,32,40,72,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,106,105,32,61,32,88,46,71,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,44,32,73,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,61,62,32,40,73,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,32,61,32,88,46,72,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,44,32,74,100,32,61,32,108,46,100,121,110,67,97,108,108,95,105,105,105,105,106,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,61,62,32,40,74,100,32,61,32,108,46,100,121,110,67,97,108,108,95,105,105,105,105,106,106,32,61,32,88,46,73,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,44,32,75,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,61,62,32,40,75,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,106,32,61,32,88,46,74,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,44,32,76,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,61,62,32,40,76,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,105,32,61,32,88,46,75,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,44,32,77,100,32,61,32,108,46,100,121,110,67,97,108,108,95,106,105,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,41,32,61,62,32,40,77,100,32,61,32,108,46,100,121,110,67,97,108,108,95,106,105,105,105,32,61,32,88,46,76,98,41,40,97,44,32,98,44,32,99,44,32,100,41,44,32,78,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,106,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,61,62,32,40,78,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,106,105,32,61,32,88,46,77,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,44,32,79,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,106,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,61,62,32,40,79,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,106,106,32,61,32,88,46,78,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,44,32,80,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,105,106,106,105,105,105,105,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,44,32,118,44,32,121,44,32,122,41,32,61,62,32,40,80,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,105,106,106,105,105,105,105,105,105,32,61,32,88,46,79,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,44,32,118,44,32,121,44,32,122,41,44,32,81,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,105,106,106,105,105,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,44,32,118,41,32,61,62,32,40,81,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,105,106,106,105,105,105,105,32,61,32,88,46,80,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,44,32,118,41,44,32,82,100,32,61,32,108,46,100,121,110,67,97,108,108,95,105,105,105,105,105,105,106,106,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,41,32,61,62,32,40,82,100,32,61,32,108,46,100,121,110,67,97,108,108,95,105,105,105,105,105,105,106,106,105,105,32,61,32,88,46,81,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,41,44,32,83,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,105,106,106,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,41,32,61,62,32,40,83,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,105,105,106,106,105,105,32,61,32,88,46,82,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,41,44,32,84,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,105,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,61,62,32,40,84,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,105,106,105,105,105,32,61,32,88,46,83,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,44,32,85,100,32,61,32,108,46,100,121,110,67,97,108,108,95,105,106,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,41,32,61,62,32,40,85,100,32,61,32,108,46,100,121,110,67,97,108,108,95,105,106,105,32,61,32,88,46,84,98,41,40,97,44,32,98,44,32,99,44,32,100,41,44,32,86,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,106,106,106,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,41,32,61,62,32,40,86,100,32,61,32,108,46,100,121,110,67,97,108,108,95,118,105,106,106,106,106,32,61,32,88,46,85,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,118,106,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,118,106,105,105,32,61,32,88,46,86,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,118,106,102,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,118,106,102,105,105,32,61,32,88,46,87,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,118,106,32,61,32,40,97,44,32,98,44,32,99,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,118,106,32,61,32,88,46,88,98,41,40,97,44,32,98,44,32,99,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,118,106,105,105,105,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,118,106,105,105,105,105,105,32,61,32,88,46,89,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,118,106,105,102,102,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,118,106,105,102,102,105,105,32,61,32,88,46,90,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,118,106,105,105,105,105,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,118,106,105,105,105,105,32,61,32,88,46,95,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,105,105,105,105,105,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,105,105,105,105,105,106,32,61,32,88,46,36,98,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,105,105,105,105,105,106,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,105,105,105,105,105,106,106,32,61,32,88,46,97,99,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,41,59,10,32,32,32,32,32,32,108,46,100,121,110,67,97,108,108,95,105,105,105,105,105,105,106,106,32,61,32,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,41,32,61,62,32,40,108,46,100,121,110,67,97,108,108,95,105,105,105,105,105,105,106,106,32,61,32,88,46,98,99,41,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,41,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,87,99,40,97,44,32,98,44,32,99,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,100,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,101,32,33,61,61,32,101,32,43,32,48,41,32,116,104,114,111,119,32,101,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,83,99,40,97,44,32,98,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,100,32,33,61,61,32,100,32,43,32,48,41,32,116,104,114,111,119,32,100,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,90,99,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,98,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,104,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,102,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,104,32,33,61,61,32,104,32,43,32,48,41,32,116,104,114,111,119,32,104,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,119,99,40,97,44,32,98,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,100,32,33,61,61,32,100,32,43,32,48,41,32,116,104,114,111,119,32,100,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,66,99,40,97,44,32,98,44,32,99,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,100,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,101,32,33,61,61,32,101,32,43,32,48,41,32,116,104,114,111,119,32,101,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,117,99,40,97,44,32,98,44,32,99,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,100,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,101,32,33,61,61,32,101,32,43,32,48,41,32,116,104,114,111,119,32,101,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,121,99,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,85,99,40,97,44,32,98,44,32,99,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,100,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,101,32,33,61,61,32,101,32,43,32,48,41,32,116,104,114,111,119,32,101,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,116,99,40,97,44,32,98,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,100,32,33,61,61,32,100,32,43,32,48,41,32,116,104,114,111,119,32,100,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,120,99,40,97,44,32,98,44,32,99,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,100,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,101,32,33,61,61,32,101,32,43,32,48,41,32,116,104,114,111,119,32,101,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,68,99,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,72,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,32,33,61,61,32,103,32,43,32,48,41,32,116,104,114,111,119,32,103,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,122,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,32,33,61,61,32,103,32,43,32,48,41,32,116,104,114,111,119,32,103,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,70,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,104,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,102,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,104,32,33,61,61,32,104,32,43,32,48,41,32,116,104,114,111,119,32,104,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,69,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,104,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,102,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,104,32,33,61,61,32,104,32,43,32,48,41,32,116,104,114,111,119,32,104,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,71,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,107,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,107,32,33,61,61,32,107,32,43,32,48,41,32,116,104,114,111,119,32,107,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,65,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,32,33,61,61,32,103,32,43,32,48,41,32,116,104,114,111,119,32,103,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,100,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,32,33,61,61,32,103,32,43,32,48,41,32,116,104,114,111,119,32,103,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,67,99,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,118,99,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,88,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,104,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,102,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,104,32,33,61,61,32,104,32,43,32,48,41,32,116,104,114,111,119,32,104,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,101,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,107,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,107,32,33,61,61,32,107,32,43,32,48,41,32,116,104,114,111,119,32,107,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,102,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,109,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,107,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,109,32,33,61,61,32,109,32,43,32,48,41,32,116,104,114,111,119,32,109,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,103,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,109,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,110,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,109,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,110,32,33,61,61,32,110,32,43,32,48,41,32,116,104,114,111,119,32,110,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,84,99,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,115,99,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,89,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,107,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,107,32,33,61,61,32,107,32,43,32,48,41,32,116,104,114,111,119,32,107,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,36,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,104,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,102,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,104,32,33,61,61,32,104,32,43,32,48,41,32,116,104,114,111,119,32,104,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,99,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,109,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,107,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,109,32,33,61,61,32,109,32,43,32,48,41,32,116,104,114,111,119,32,109,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,86,99,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,97,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,32,33,61,61,32,103,32,43,32,48,41,32,116,104,114,111,119,32,103,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,74,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,109,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,110,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,109,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,110,32,33,61,61,32,110,32,43,32,48,41,32,116,104,114,111,119,32,110,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,73,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,46,103,101,116,40,97,41,40,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,109,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,107,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,109,32,33,61,61,32,109,32,43,32,48,41,32,116,104,114,111,119,32,109,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,82,99,40,97,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,85,46,103,101,116,40,97,41,40,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,99,32,33,61,61,32,99,32,43,32,48,41,32,116,104,114,111,119,32,99,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,79,99,40,97,44,32,98,44,32,99,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,100,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,66,100,40,97,44,32,98,44,32,99,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,100,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,101,32,33,61,61,32,101,32,43,32,48,41,32,116,104,114,111,119,32,101,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,78,99,40,97,44,32,98,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,99,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,122,100,40,97,44,32,98,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,99,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,100,32,33,61,61,32,100,32,43,32,48,41,32,116,104,114,111,119,32,100,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,118,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,65,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,104,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,102,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,104,32,33,61,61,32,104,32,43,32,48,41,32,116,104,114,111,119,32,104,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,112,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,76,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,32,33,61,61,32,103,32,43,32,48,41,32,116,104,114,111,119,32,103,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,77,99,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,85,100,40,97,44,32,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,113,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,69,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,107,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,107,32,33,61,61,32,107,32,43,32,48,41,32,116,104,114,111,119,32,107,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,80,99,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,77,100,40,97,44,32,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,116,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,72,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,109,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,107,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,109,32,33,61,61,32,109,32,43,32,48,41,32,116,104,114,111,119,32,109,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,117,100,40,97,44,32,98,44,32,99,44,32,100,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,101,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,68,100,40,97,44,32,98,44,32,99,44,32,100,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,102,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,101,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,102,32,33,61,61,32,102,32,43,32,48,41,32,116,104,114,111,119,32,102,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,115,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,71,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,107,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,107,32,33,61,61,32,107,32,43,32,48,41,32,116,104,114,111,119,32,107,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,120,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,67,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,32,33,61,61,32,103,32,43,32,48,41,32,116,104,114,111,119,32,103,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,81,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,70,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,32,33,61,61,32,103,32,43,32,48,41,32,116,104,114,111,119,32,103,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,111,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,102,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,73,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,104,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,102,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,104,32,33,61,61,32,104,32,43,32,48,41,32,116,104,114,111,119,32,104,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,76,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,74,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,109,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,107,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,109,32,33,61,61,32,109,32,43,32,48,41,32,116,104,114,111,119,32,109,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,108,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,104,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,75,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,104,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,103,32,33,61,61,32,103,32,43,32,48,41,32,116,104,114,111,119,32,103,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,109,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,103,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,78,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,107,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,103,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,107,32,33,61,61,32,107,32,43,32,48,41,32,116,104,114,111,119,32,107,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,110,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,79,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,109,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,107,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,109,32,33,61,61,32,109,32,43,32,48,41,32,116,104,114,111,119,32,109,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,106,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,44,32,118,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,121,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,81,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,44,32,118,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,122,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,121,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,122,32,33,61,61,32,122,32,43,32,48,41,32,116,104,114,111,119,32,122,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,107,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,44,32,118,44,32,121,44,32,122,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,69,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,80,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,44,32,118,44,32,121,44,32,122,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,70,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,69,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,70,32,33,61,61,32,70,32,43,32,48,41,32,116,104,114,111,119,32,70,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,75,99,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,118,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,82,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,44,32,117,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,121,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,118,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,121,32,33,61,61,32,121,32,43,32,48,41,32,116,104,114,111,119,32,121,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,104,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,117,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,83,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,44,32,110,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,118,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,117,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,118,32,33,61,61,32,118,32,43,32,48,41,32,116,104,114,111,119,32,118,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,114,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,107,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,84,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,109,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,107,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,109,32,33,61,61,32,109,32,43,32,48,41,32,116,104,114,111,119,32,109,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,119,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,41,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,110,32,61,32,90,40,41,59,10,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,86,100,40,97,44,32,98,44,32,99,44,32,100,44,32,101,44,32,102,44,32,104,44,32,103,44,32,107,44,32,109,41,59,10,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,117,41,32,123,10,32,32,32,32,32,32,32,32,32,32,89,40,110,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,117,32,33,61,61,32,117,32,43,32,48,41,32,116,104,114,111,119,32,117,59,10,32,32,32,32,32,32,32,32,32,32,87,40,49,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,118,97,114,32,87,100,59,10,32,32,32,32,32,32,68,32,61,32,102,117,110,99,116,105,111,110,32,88,100,40,41,32,123,10,32,32,32,32,32,32,32,32,87,100,32,124,124,32,89,100,40,41,59,10,32,32,32,32,32,32,32,32,87,100,32,124,124,32,40,68,32,61,32,88,100,41,59,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,89,100,40,41,32,123,10,32,32,32,32,32,32,32,32,102,117,110,99,116,105,111,110,32,97,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,118,97,114,32,95,97,50,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,33,87,100,32,38,38,32,40,87,100,32,61,32,116,114,117,101,44,32,108,46,99,97,108,108,101,100,82,117,110,32,61,32,116,114,117,101,44,32,33,107,97,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,69,97,40,115,97,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,97,97,40,108,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,40,95,97,50,32,61,32,108,46,111,110,82,117,110,116,105,109,101,73,110,105,116,105,97,108,105,122,101,100,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,50,46,99,97,108,108,40,108,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,108,46,112,111,115,116,82,117,110,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,32,40,34,102,117,110,99,116,105,111,110,34,32,61,61,32,116,121,112,101,111,102,32,108,46,112,111,115,116,82,117,110,32,38,38,32,40,108,46,112,111,115,116,82,117,110,32,61,32,91,108,46,112,111,115,116,82,117,110,93,41,59,32,108,46,112,111,115,116,82,117,110,46,108,101,110,103,116,104,59,32,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,98,32,61,32,108,46,112,111,115,116,82,117,110,46,115,104,105,102,116,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,97,46,117,110,115,104,105,102,116,40,98,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,69,97,40,116,97,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,33,40,48,32,60,32,67,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,108,46,112,114,101,82,117,110,41,32,102,111,114,32,40,34,102,117,110,99,116,105,111,110,34,32,61,61,32,116,121,112,101,111,102,32,108,46,112,114,101,82,117,110,32,38,38,32,40,108,46,112,114,101,82,117,110,32,61,32,91,108,46,112,114,101,82,117,110,93,41,59,32,108,46,112,114,101,82,117,110,46,108,101,110,103,116,104,59,32,41,32,117,97,40,41,59,10,32,32,32,32,32,32,32,32,32,32,69,97,40,114,97,41,59,10,32,32,32,32,32,32,32,32,32,32,48,32,60,32,67,32,124,124,32,40,108,46,115,101,116,83,116,97,116,117,115,32,63,32,40,108,46,115,101,116,83,116,97,116,117,115,40,34,82,117,110,110,105,110,103,46,46,46,34,41,44,32,115,101,116,84,105,109,101,111,117,116,40,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,115,101,116,84,105,109,101,111,117,116,40,40,41,32,61,62,32,108,46,115,101,116,83,116,97,116,117,115,40,34,34,41,44,32,49,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,97,40,41,59,10,32,32,32,32,32,32,32,32,32,32,125,44,32,49,41,41,32,58,32,97,40,41,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,102,32,40,108,46,112,114,101,73,110,105,116,41,10,32,32,32,32,32,32,32,32,102,111,114,32,40,34,102,117,110,99,116,105,111,110,34,32,61,61,32,116,121,112,101,111,102,32,108,46,112,114,101,73,110,105,116,32,38,38,32,40,108,46,112,114,101,73,110,105,116,32,61,32,91,108,46,112,114,101,73,110,105,116,93,41,59,32,48,32,60,32,108,46,112,114,101,73,110,105,116,46,108,101,110,103,116,104,59,32,41,32,108,46,112,114,101,73,110,105,116,46,112,111,112,40,41,40,41,59,10,32,32,32,32,32,32,89,100,40,41,59,10,32,32,32,32,32,32,109,111,100,117,108,101,82,116,110,32,61,32,99,97,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,82,116,110,59,10,32,32,32,32,125,59,10,32,32,125,41,40,41,59,10,32,32,118,97,114,32,100,111,116,108,111,116,116,105,101,95,112,108,97,121,101,114,95,100,101,102,97,117,108,116,32,61,32,99,114,101,97,116,101,68,111,116,76,111,116,116,105,101,80,108,97,121,101,114,77,111,100,117,108,101,59,10,10,32,32,47,47,32,115,114,99,47,99,111,114,101,47,100,111,116,108,111,116,116,105,101,45,119,97,115,109,45,108,111,97,100,101,114,46,116,115,10,32,32,118,97,114,32,68,111,116,76,111,116,116,105,101,87,97,115,109,76,111,97,100,101,114,32,61,32,99,108,97,115,115,32,123,10,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,40,41,32,123,10,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,34,82,101,110,100,101,114,101,114,76,111,97,100,101,114,32,105,115,32,97,32,115,116,97,116,105,99,32,99,108,97,115,115,32,97,110,100,32,99,97,110,110,111,116,32,98,101,32,105,110,115,116,97,110,116,105,97,116,101,100,46,34,41,59,10,32,32,32,32,125,10,32,32,32,32,115,116,97,116,105,99,32,95,116,114,121,76,111,97,100,40,117,114,108,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,95,95,97,115,121,110,99,40,116,104,105,115,44,32,110,117,108,108,44,32,102,117,110,99,116,105,111,110,42,32,40,41,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,109,111,100,117,108,101,32,61,32,121,105,101,108,100,32,100,111,116,108,111,116,116,105,101,95,112,108,97,121,101,114,95,100,101,102,97,117,108,116,40,123,32,108,111,99,97,116,101,70,105,108,101,58,32,40,41,32,61,62,32,117,114,108,32,125,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,59,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,125,10,32,32,32,32,47,42,42,10,32,32,32,32,32,42,32,84,114,105,101,115,32,116,111,32,108,111,97,100,32,116,104,101,32,87,65,83,77,32,109,111,100,117,108,101,32,102,114,111,109,32,116,104,101,32,112,114,105,109,97,114,121,32,85,82,76,44,32,102,97,108,108,105,110,103,32,98,97,99,107,32,116,111,32,97,32,98,97,99,107,117,112,32,85,82,76,32,105,102,32,110,101,99,101,115,115,97,114,121,46,10,32,32,32,32,32,42,32,84,104,114,111,119,115,32,97,110,32,101,114,114,111,114,32,105,102,32,98,111,116,104,32,85,82,76,115,32,102,97,105,108,32,116,111,32,108,111,97,100,32,116,104,101,32,109,111,100,117,108,101,46,10,32,32,32,32,32,42,32,64,114,101,116,117,114,110,115,32,80,114,111,109,105,115,101,60,77,111,100,117,108,101,62,32,45,32,65,32,112,114,111,109,105,115,101,32,116,104,97,116,32,114,101,115,111,108,118,101,115,32,116,111,32,116,104,101,32,108,111,97,100,101,100,32,109,111,100,117,108,101,46,10,32,32,32,32,32,42,47,10,32,32,32,32,115,116,97,116,105,99,32,95,108,111,97,100,87,105,116,104,66,97,99,107,117,112,40,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,95,95,97,115,121,110,99,40,116,104,105,115,44,32,110,117,108,108,44,32,102,117,110,99,116,105,111,110,42,32,40,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,33,116,104,105,115,46,95,77,111,100,117,108,101,80,114,111,109,105,115,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,77,111,100,117,108,101,80,114,111,109,105,115,101,32,61,32,116,104,105,115,46,95,116,114,121,76,111,97,100,40,116,104,105,115,46,95,119,97,115,109,85,82,76,41,46,99,97,116,99,104,40,40,105,110,105,116,105,97,108,69,114,114,111,114,41,32,61,62,32,95,95,97,115,121,110,99,40,116,104,105,115,44,32,110,117,108,108,44,32,102,117,110,99,116,105,111,110,42,32,40,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,98,97,99,107,117,112,85,114,108,32,61,32,96,104,116,116,112,115,58,47,47,117,110,112,107,103,46,99,111,109,47,36,123,80,65,67,75,65,71,69,95,78,65,77,69,125,64,36,123,80,65,67,75,65,71,69,95,86,69,82,83,73,79,78,125,47,100,105,115,116,47,100,111,116,108,111,116,116,105,101,45,112,108,97,121,101,114,46,119,97,115,109,96,59,10,32,32,32,32,32,32,32,32,32,32,32,32,99,111,110,115,111,108,101,46,119,97,114,110,40,96,80,114,105,109,97,114,121,32,87,65,83,77,32,108,111,97,100,32,102,97,105,108,101,100,32,102,114,111,109,32,36,123,116,104,105,115,46,95,119,97,115,109,85,82,76,125,46,32,69,114,114,111,114,58,32,36,123,105,110,105,116,105,97,108,69,114,114,111,114,46,109,101,115,115,97,103,101,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,99,111,110,115,111,108,101,46,119,97,114,110,40,96,65,116,116,101,109,112,116,105,110,103,32,116,111,32,108,111,97,100,32,87,65,83,77,32,102,114,111,109,32,98,97,99,107,117,112,32,85,82,76,58,32,36,123,98,97,99,107,117,112,85,114,108,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,121,105,101,108,100,32,116,104,105,115,46,95,116,114,121,76,111,97,100,40,98,97,99,107,117,112,85,114,108,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,98,97,99,107,117,112,69,114,114,111,114,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,111,110,115,111,108,101,46,101,114,114,111,114,40,96,80,114,105,109,97,114,121,32,87,65,83,77,32,85,82,76,32,102,97,105,108,101,100,58,32,36,123,105,110,105,116,105,97,108,69,114,114,111,114,46,109,101,115,115,97,103,101,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,111,110,115,111,108,101,46,101,114,114,111,114,40,96,66,97,99,107,117,112,32,87,65,83,77,32,85,82,76,32,102,97,105,108,101,100,58,32,36,123,98,97,99,107,117,112,69,114,114,111,114,46,109,101,115,115,97,103,101,125,96,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,34,87,65,83,77,32,108,111,97,100,105,110,103,32,102,97,105,108,101,100,32,102,114,111,109,32,97,108,108,32,115,111,117,114,99,101,115,46,34,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,41,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,77,111,100,117,108,101,80,114,111,109,105,115,101,59,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,125,10,32,32,32,32,47,42,42,10,32,32,32,32,32,42,32,80,117,98,108,105,99,32,109,101,116,104,111,100,32,116,111,32,108,111,97,100,32,116,104,101,32,87,101,98,65,115,115,101,109,98,108,121,32,109,111,100,117,108,101,46,10,32,32,32,32,32,42,32,85,116,105,108,105,122,101,115,32,97,32,112,114,105,109,97,114,121,32,97,110,100,32,98,97,99,107,117,112,32,85,82,76,32,102,111,114,32,114,111,98,117,115,116,110,101,115,115,46,10,32,32,32,32,32,42,32,64,114,101,116,117,114,110,115,32,80,114,111,109,105,115,101,60,77,111,100,117,108,101,62,32,45,32,65,32,112,114,111,109,105,115,101,32,116,104,97,116,32,114,101,115,111,108,118,101,115,32,116,111,32,116,104,101,32,108,111,97,100,101,100,32,109,111,100,117,108,101,46,10,32,32,32,32,32,42,47,10,32,32,32,32,115,116,97,116,105,99,32,108,111,97,100,40,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,95,95,97,115,121,110,99,40,116,104,105,115,44,32,110,117,108,108,44,32,102,117,110,99,116,105,111,110,42,32,40,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,108,111,97,100,87,105,116,104,66,97,99,107,117,112,40,41,59,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,125,10,32,32,32,32,47,42,42,10,32,32,32,32,32,42,32,83,101,116,115,32,97,32,110,101,119,32,85,82,76,32,102,111,114,32,116,104,101,32,87,65,83,77,32,102,105,108,101,32,97,110,100,32,105,110,118,97,108,105,100,97,116,101,115,32,116,104,101,32,99,117,114,114,101,110,116,32,109,111,100,117,108,101,32,112,114,111,109,105,115,101,46,10,32,32,32,32,32,42,10,32,32,32,32,32,42,32,64,112,97,114,97,109,32,115,116,114,105,110,103,32,45,32,32,84,104,101,32,110,101,119,32,85,82,76,32,102,111,114,32,116,104,101,32,87,65,83,77,32,102,105,108,101,46,10,32,32,32,32,32,42,47,10,32,32,32,32,115,116,97,116,105,99,32,115,101,116,87,97,115,109,85,114,108,40,117,114,108,41,32,123,10,32,32,32,32,32,32,105,102,32,40,117,114,108,32,61,61,61,32,116,104,105,115,46,95,119,97,115,109,85,82,76,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,119,97,115,109,85,82,76,32,61,32,117,114,108,59,10,32,32,32,32,32,32,116,104,105,115,46,95,77,111,100,117,108,101,80,114,111,109,105,115,101,32,61,32,110,117,108,108,59,10,32,32,32,32,125,10,32,32,125,59,10,32,32,47,47,32,101,115,108,105,110,116,45,100,105,115,97,98,108,101,45,110,101,120,116,45,108,105,110,101,32,64,116,121,112,101,115,99,114,105,112,116,45,101,115,108,105,110,116,47,110,97,109,105,110,103,45,99,111,110,118,101,110,116,105,111,110,10,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,68,111,116,76,111,116,116,105,101,87,97,115,109,76,111,97,100,101,114,44,32,34,95,77,111,100,117,108,101,80,114,111,109,105,115,101,34,44,32,110,117,108,108,41,59,10,32,32,47,47,32,85,82,76,32,102,111,114,32,116,104,101,32,87,65,83,77,32,102,105,108,101,44,32,99,111,110,115,116,114,117,99,116,101,100,32,117,115,105,110,103,32,112,97,99,107,97,103,101,32,105,110,102,111,114,109,97,116,105,111,110,10,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,68,111,116,76,111,116,116,105,101,87,97,115,109,76,111,97,100,101,114,44,32,34,95,119,97,115,109,85,82,76,34,44,32,96,104,116,116,112,115,58,47,47,99,100,110,46,106,115,100,101,108,105,118,114,46,110,101,116,47,110,112,109,47,36,123,80,65,67,75,65,71,69,95,78,65,77,69,125,64,36,123,80,65,67,75,65,71,69,95,86,69,82,83,73,79,78,125,47,100,105,115,116,47,100,111,116,108,111,116,116,105,101,45,112,108,97,121,101,114,46,119,97,115,109,96,41,59,10,10,32,32,47,47,32,115,114,99,47,101,118,101,110,116,45,109,97,110,97,103,101,114,46,116,115,10,32,32,118,97,114,32,69,118,101,110,116,77,97,110,97,103,101,114,32,61,32,99,108,97,115,115,32,123,10,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,40,41,32,123,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,101,118,101,110,116,76,105,115,116,101,110,101,114,115,34,44,32,47,42,32,64,95,95,80,85,82,69,95,95,32,42,47,32,110,101,119,32,77,97,112,40,41,41,59,10,32,32,32,32,125,10,32,32,32,32,97,100,100,69,118,101,110,116,76,105,115,116,101,110,101,114,40,116,121,112,101,44,32,108,105,115,116,101,110,101,114,41,32,123,10,32,32,32,32,32,32,108,101,116,32,108,105,115,116,101,110,101,114,115,32,61,32,116,104,105,115,46,95,101,118,101,110,116,76,105,115,116,101,110,101,114,115,46,103,101,116,40,116,121,112,101,41,59,10,32,32,32,32,32,32,105,102,32,40,33,108,105,115,116,101,110,101,114,115,41,32,123,10,32,32,32,32,32,32,32,32,108,105,115,116,101,110,101,114,115,32,61,32,47,42,32,64,95,95,80,85,82,69,95,95,32,42,47,32,110,101,119,32,83,101,116,40,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,76,105,115,116,101,110,101,114,115,46,115,101,116,40,116,121,112,101,44,32,108,105,115,116,101,110,101,114,115,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,108,105,115,116,101,110,101,114,115,46,97,100,100,40,108,105,115,116,101,110,101,114,41,59,10,32,32,32,32,125,10,32,32,32,32,114,101,109,111,118,101,69,118,101,110,116,76,105,115,116,101,110,101,114,40,116,121,112,101,44,32,108,105,115,116,101,110,101,114,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,108,105,115,116,101,110,101,114,115,32,61,32,116,104,105,115,46,95,101,118,101,110,116,76,105,115,116,101,110,101,114,115,46,103,101,116,40,116,121,112,101,41,59,10,32,32,32,32,32,32,105,102,32,40,33,108,105,115,116,101,110,101,114,115,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,105,102,32,40,108,105,115,116,101,110,101,114,41,32,123,10,32,32,32,32,32,32,32,32,108,105,115,116,101,110,101,114,115,46,100,101,108,101,116,101,40,108,105,115,116,101,110,101,114,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,108,105,115,116,101,110,101,114,115,46,115,105,122,101,32,61,61,61,32,48,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,76,105,115,116,101,110,101,114,115,46,100,101,108,101,116,101,40,116,121,112,101,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,76,105,115,116,101,110,101,114,115,46,100,101,108,101,116,101,40,116,121,112,101,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,100,105,115,112,97,116,99,104,40,101,118,101,110,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,108,105,115,116,101,110,101,114,115,32,61,32,116,104,105,115,46,95,101,118,101,110,116,76,105,115,116,101,110,101,114,115,46,103,101,116,40,101,118,101,110,116,46,116,121,112,101,41,59,10,32,32,32,32,32,32,108,105,115,116,101,110,101,114,115,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,108,105,115,116,101,110,101,114,115,46,102,111,114,69,97,99,104,40,40,108,105,115,116,101,110,101,114,41,32,61,62,32,108,105,115,116,101,110,101,114,40,101,118,101,110,116,41,41,59,10,32,32,32,32,125,10,32,32,32,32,114,101,109,111,118,101,65,108,108,69,118,101,110,116,76,105,115,116,101,110,101,114,115,40,41,32,123,10,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,76,105,115,116,101,110,101,114,115,46,99,108,101,97,114,40,41,59,10,32,32,32,32,125,10,32,32,125,59,10,10,32,32,47,47,32,115,114,99,47,111,102,102,115,99,114,101,101,110,45,111,98,115,101,114,118,101,114,46,116,115,10,32,32,118,97,114,32,79,102,102,115,99,114,101,101,110,79,98,115,101,114,118,101,114,32,61,32,99,108,97,115,115,32,123,10,32,32,32,32,115,116,97,116,105,99,32,95,105,110,105,116,105,97,108,105,122,101,79,98,115,101,114,118,101,114,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,111,98,115,101,114,118,101,114,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,116,101,114,115,101,99,116,105,111,110,79,98,115,101,114,118,101,114,67,97,108,108,98,97,99,107,32,61,32,40,101,110,116,114,105,101,115,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,101,110,116,114,105,101,115,46,102,111,114,69,97,99,104,40,40,101,110,116,114,121,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,103,101,116,40,101,110,116,114,121,46,116,97,114,103,101,116,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,101,110,116,114,121,46,105,115,73,110,116,101,114,115,101,99,116,105,110,103,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,117,110,102,114,101,101,122,101,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,102,114,101,101,122,101,40,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,32,61,32,110,101,119,32,73,110,116,101,114,115,101,99,116,105,111,110,79,98,115,101,114,118,101,114,40,105,110,116,101,114,115,101,99,116,105,111,110,79,98,115,101,114,118,101,114,67,97,108,108,98,97,99,107,44,32,123,10,32,32,32,32,32,32,32,32,116,104,114,101,115,104,111,108,100,58,32,48,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,125,10,32,32,32,32,115,116,97,116,105,99,32,111,98,115,101,114,118,101,40,99,97,110,118,97,115,44,32,100,111,116,76,111,116,116,105,101,73,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,116,104,105,115,46,95,105,110,105,116,105,97,108,105,122,101,79,98,115,101,114,118,101,114,40,41,59,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,104,97,115,40,99,97,110,118,97,115,41,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,115,101,116,40,99,97,110,118,97,115,44,32,100,111,116,76,111,116,116,105,101,73,110,115,116,97,110,99,101,41,59,10,32,32,32,32,32,32,40,95,97,32,61,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,111,98,115,101,114,118,101,40,99,97,110,118,97,115,41,59,10,32,32,32,32,125,10,32,32,32,32,115,116,97,116,105,99,32,117,110,111,98,115,101,114,118,101,40,99,97,110,118,97,115,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,40,95,97,32,61,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,117,110,111,98,115,101,114,118,101,40,99,97,110,118,97,115,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,100,101,108,101,116,101,40,99,97,110,118,97,115,41,59,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,115,105,122,101,32,61,61,61,32,48,41,32,123,10,32,32,32,32,32,32,32,32,40,95,98,32,61,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,98,46,100,105,115,99,111,110,110,101,99,116,40,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,59,10,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,79,102,102,115,99,114,101,101,110,79,98,115,101,114,118,101,114,44,32,34,95,111,98,115,101,114,118,101,114,34,44,32,110,117,108,108,41,59,10,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,79,102,102,115,99,114,101,101,110,79,98,115,101,114,118,101,114,44,32,34,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,34,44,32,47,42,32,64,95,95,80,85,82,69,95,95,32,42,47,32,110,101,119,32,77,97,112,40,41,41,59,10,10,32,32,47,47,32,115,114,99,47,114,101,115,105,122,101,45,111,98,115,101,114,118,101,114,46,116,115,10,32,32,118,97,114,32,82,69,83,73,90,69,95,68,69,66,79,85,78,67,69,95,84,73,77,69,32,61,32,49,48,48,59,10,32,32,118,97,114,32,67,97,110,118,97,115,82,101,115,105,122,101,79,98,115,101,114,118,101,114,32,61,32,99,108,97,115,115,32,123,10,32,32,32,32,115,116,97,116,105,99,32,95,105,110,105,116,105,97,108,105,122,101,79,98,115,101,114,118,101,114,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,111,98,115,101,114,118,101,114,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,105,122,101,72,97,110,100,108,101,114,32,61,32,40,101,110,116,114,105,101,115,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,101,110,116,114,105,101,115,46,102,111,114,69,97,99,104,40,40,101,110,116,114,121,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,101,108,101,109,101,110,116,32,61,32,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,103,101,116,40,101,110,116,114,121,46,116,97,114,103,101,116,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,33,101,108,101,109,101,110,116,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,91,100,111,116,76,111,116,116,105,101,73,110,115,116,97,110,99,101,44,32,116,105,109,101,111,117,116,93,32,61,32,101,108,101,109,101,110,116,59,10,32,32,32,32,32,32,32,32,32,32,99,108,101,97,114,84,105,109,101,111,117,116,40,116,105,109,101,111,117,116,41,59,10,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,110,101,119,84,105,109,101,111,117,116,32,61,32,115,101,116,84,105,109,101,111,117,116,40,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,100,111,116,76,111,116,116,105,101,73,110,115,116,97,110,99,101,46,114,101,115,105,122,101,40,41,59,10,32,32,32,32,32,32,32,32,32,32,125,44,32,82,69,83,73,90,69,95,68,69,66,79,85,78,67,69,95,84,73,77,69,41,59,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,115,101,116,40,101,110,116,114,121,46,116,97,114,103,101,116,44,32,91,100,111,116,76,111,116,116,105,101,73,110,115,116,97,110,99,101,44,32,110,101,119,84,105,109,101,111,117,116,93,41,59,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,32,61,32,110,101,119,32,82,101,115,105,122,101,79,98,115,101,114,118,101,114,40,114,101,115,105,122,101,72,97,110,100,108,101,114,41,59,10,32,32,32,32,125,10,32,32,32,32,115,116,97,116,105,99,32,111,98,115,101,114,118,101,40,99,97,110,118,97,115,44,32,100,111,116,76,111,116,116,105,101,73,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,116,104,105,115,46,95,105,110,105,116,105,97,108,105,122,101,79,98,115,101,114,118,101,114,40,41,59,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,104,97,115,40,99,97,110,118,97,115,41,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,115,101,116,40,99,97,110,118,97,115,44,32,91,100,111,116,76,111,116,116,105,101,73,110,115,116,97,110,99,101,44,32,48,93,41,59,10,32,32,32,32,32,32,40,95,97,32,61,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,111,98,115,101,114,118,101,40,99,97,110,118,97,115,41,59,10,32,32,32,32,125,10,32,32,32,32,115,116,97,116,105,99,32,117,110,111,98,115,101,114,118,101,40,99,97,110,118,97,115,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,99,111,110,115,116,32,101,108,101,109,101,110,116,32,61,32,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,103,101,116,40,99,97,110,118,97,115,41,59,10,32,32,32,32,32,32,105,102,32,40,101,108,101,109,101,110,116,41,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,116,105,109,101,111,117,116,73,100,32,61,32,101,108,101,109,101,110,116,91,49,93,59,10,32,32,32,32,32,32,32,32,105,102,32,40,116,105,109,101,111,117,116,73,100,41,32,99,108,101,97,114,84,105,109,101,111,117,116,40,116,105,109,101,111,117,116,73,100,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,40,95,97,32,61,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,117,110,111,98,115,101,114,118,101,40,99,97,110,118,97,115,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,100,101,108,101,116,101,40,99,97,110,118,97,115,41,59,10,32,32,32,32,32,32,105,102,32,40,33,116,104,105,115,46,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,46,115,105,122,101,32,38,38,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,46,100,105,115,99,111,110,110,101,99,116,40,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,111,98,115,101,114,118,101,114,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,59,10,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,67,97,110,118,97,115,82,101,115,105,122,101,79,98,115,101,114,118,101,114,44,32,34,95,111,98,115,101,114,118,101,114,34,44,32,110,117,108,108,41,59,10,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,67,97,110,118,97,115,82,101,115,105,122,101,79,98,115,101,114,118,101,114,44,32,34,95,111,98,115,101,114,118,101,100,67,97,110,118,97,115,101,115,34,44,32,47,42,32,64,95,95,80,85,82,69,95,95,32,42,47,32,110,101,119,32,77,97,112,40,41,41,59,10,10,32,32,47,47,32,115,114,99,47,117,116,105,108,115,46,116,115,10,32,32,102,117,110,99,116,105,111,110,32,105,115,72,101,120,67,111,108,111,114,40,99,111,108,111,114,41,32,123,10,32,32,32,32,114,101,116,117,114,110,32,47,94,35,40,91,92,100,97,45,102,93,123,54,125,124,91,92,100,97,45,102,93,123,56,125,41,36,47,105,117,46,116,101,115,116,40,99,111,108,111,114,41,59,10,32,32,125,10,32,32,102,117,110,99,116,105,111,110,32,104,101,120,83,116,114,105,110,103,84,111,82,71,66,65,73,110,116,40,99,111,108,111,114,72,101,120,41,32,123,10,32,32,32,32,105,102,32,40,33,105,115,72,101,120,67,111,108,111,114,40,99,111,108,111,114,72,101,120,41,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,125,10,32,32,32,32,108,101,116,32,104,101,120,32,61,32,99,111,108,111,114,72,101,120,46,114,101,112,108,97,99,101,40,34,35,34,44,32,34,34,41,59,10,32,32,32,32,104,101,120,32,61,32,104,101,120,46,108,101,110,103,116,104,32,61,61,61,32,54,32,63,32,96,36,123,104,101,120,125,102,102,96,32,58,32,104,101,120,59,10,32,32,32,32,114,101,116,117,114,110,32,112,97,114,115,101,73,110,116,40,104,101,120,44,32,49,54,41,59,10,32,32,125,10,32,32,102,117,110,99,116,105,111,110,32,105,115,68,111,116,76,111,116,116,105,101,40,102,105,108,101,68,97,116,97,41,32,123,10,32,32,32,32,105,102,32,40,102,105,108,101,68,97,116,97,46,98,121,116,101,76,101,110,103,116,104,32,60,32,52,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,99,111,110,115,116,32,102,105,108,101,83,105,103,110,97,116,117,114,101,32,61,32,110,101,119,32,85,105,110,116,56,65,114,114,97,121,40,102,105,108,101,68,97,116,97,46,115,108,105,99,101,40,48,44,32,90,73,80,95,83,73,71,78,65,84,85,82,69,46,98,121,116,101,76,101,110,103,116,104,41,41,59,10,32,32,32,32,102,111,114,32,40,108,101,116,32,105,32,61,32,48,59,32,105,32,60,32,90,73,80,95,83,73,71,78,65,84,85,82,69,46,108,101,110,103,116,104,59,32,105,32,43,61,32,49,41,32,123,10,32,32,32,32,32,32,105,102,32,40,90,73,80,95,83,73,71,78,65,84,85,82,69,91,105,93,32,33,61,61,32,102,105,108,101,83,105,103,110,97,116,117,114,101,91,105,93,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,114,101,116,117,114,110,32,116,114,117,101,59,10,32,32,125,10,32,32,102,117,110,99,116,105,111,110,32,105,115,76,111,116,116,105,101,74,83,79,78,40,106,115,111,110,41,32,123,10,32,32,32,32,114,101,116,117,114,110,32,76,79,84,84,73,69,95,74,83,79,78,95,77,65,78,68,65,84,79,82,89,95,70,73,69,76,68,83,46,101,118,101,114,121,40,40,102,105,101,108,100,41,32,61,62,32,79,98,106,101,99,116,46,112,114,111,116,111,116,121,112,101,46,104,97,115,79,119,110,80,114,111,112,101,114,116,121,46,99,97,108,108,40,106,115,111,110,44,32,102,105,101,108,100,41,41,59,10,32,32,125,10,32,32,102,117,110,99,116,105,111,110,32,105,115,76,111,116,116,105,101,40,102,105,108,101,68,97,116,97,41,32,123,10,32,32,32,32,105,102,32,40,116,121,112,101,111,102,32,102,105,108,101,68,97,116,97,32,61,61,61,32,34,115,116,114,105,110,103,34,41,32,123,10,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,105,115,76,111,116,116,105,101,74,83,79,78,40,74,83,79,78,46,112,97,114,115,101,40,102,105,108,101,68,97,116,97,41,41,59,10,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,95,101,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,115,76,111,116,116,105,101,74,83,79,78,40,102,105,108,101,68,97,116,97,41,59,10,32,32,32,32,125,10,32,32,125,10,32,32,102,117,110,99,116,105,111,110,32,103,101,116,68,101,102,97,117,108,116,68,80,82,40,41,32,123,10,32,32,32,32,99,111,110,115,116,32,100,112,114,32,61,32,73,83,95,66,82,79,87,83,69,82,32,63,32,119,105,110,100,111,119,46,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,32,58,32,49,59,10,32,32,32,32,114,101,116,117,114,110,32,49,32,43,32,40,100,112,114,32,45,32,49,41,32,42,32,68,69,70,65,85,76,84,95,68,80,82,95,70,65,67,84,79,82,59,10,32,32,125,10,32,32,102,117,110,99,116,105,111,110,32,105,115,69,108,101,109,101,110,116,73,110,86,105,101,119,112,111,114,116,40,101,108,101,109,101,110,116,41,32,123,10,32,32,32,32,99,111,110,115,116,32,114,101,99,116,32,61,32,101,108,101,109,101,110,116,46,103,101,116,66,111,117,110,100,105,110,103,67,108,105,101,110,116,82,101,99,116,40,41,59,10,32,32,32,32,114,101,116,117,114,110,32,114,101,99,116,46,116,111,112,32,62,61,32,48,32,38,38,32,114,101,99,116,46,108,101,102,116,32,62,61,32,48,32,38,38,32,114,101,99,116,46,98,111,116,116,111,109,32,60,61,32,40,119,105,110,100,111,119,46,105,110,110,101,114,72,101,105,103,104,116,32,124,124,32,100,111,99,117,109,101,110,116,46,100,111,99,117,109,101,110,116,69,108,101,109,101,110,116,46,99,108,105,101,110,116,72,101,105,103,104,116,41,32,38,38,32,114,101,99,116,46,114,105,103,104,116,32,60,61,32,40,119,105,110,100,111,119,46,105,110,110,101,114,87,105,100,116,104,32,124,124,32,100,111,99,117,109,101,110,116,46,100,111,99,117,109,101,110,116,69,108,101,109,101,110,116,46,99,108,105,101,110,116,87,105,100,116,104,41,59,10,32,32,125,10,10,32,32,47,47,32,115,114,99,47,100,111,116,108,111,116,116,105,101,46,116,115,10,32,32,118,97,114,32,99,114,101,97,116,101,67,111,114,101,77,111,100,101,32,61,32,40,109,111,100,101,44,32,109,111,100,117,108,101,41,32,61,62,32,123,10,32,32,32,32,105,102,32,40,109,111,100,101,32,61,61,61,32,34,114,101,118,101,114,115,101,34,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,77,111,100,101,46,82,101,118,101,114,115,101,59,10,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,109,111,100,101,32,61,61,61,32,34,98,111,117,110,99,101,34,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,77,111,100,101,46,66,111,117,110,99,101,59,10,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,109,111,100,101,32,61,61,61,32,34,114,101,118,101,114,115,101,45,98,111,117,110,99,101,34,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,77,111,100,101,46,82,101,118,101,114,115,101,66,111,117,110,99,101,59,10,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,77,111,100,101,46,70,111,114,119,97,114,100,59,10,32,32,32,32,125,10,32,32,125,59,10,32,32,118,97,114,32,99,114,101,97,116,101,67,111,114,101,70,105,116,32,61,32,40,102,105,116,44,32,109,111,100,117,108,101,41,32,61,62,32,123,10,32,32,32,32,105,102,32,40,102,105,116,32,61,61,61,32,34,99,111,110,116,97,105,110,34,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,70,105,116,46,67,111,110,116,97,105,110,59,10,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,102,105,116,32,61,61,61,32,34,99,111,118,101,114,34,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,70,105,116,46,67,111,118,101,114,59,10,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,102,105,116,32,61,61,61,32,34,102,105,108,108,34,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,70,105,116,46,70,105,108,108,59,10,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,102,105,116,32,61,61,61,32,34,102,105,116,45,104,101,105,103,104,116,34,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,70,105,116,46,70,105,116,72,101,105,103,104,116,59,10,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,102,105,116,32,61,61,61,32,34,102,105,116,45,119,105,100,116,104,34,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,70,105,116,46,70,105,116,87,105,100,116,104,59,10,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,70,105,116,46,78,111,110,101,59,10,32,32,32,32,125,10,32,32,125,59,10,32,32,118,97,114,32,99,114,101,97,116,101,67,111,114,101,65,108,105,103,110,32,61,32,40,97,108,105,103,110,44,32,109,111,100,117,108,101,41,32,61,62,32,123,10,32,32,32,32,99,111,110,115,116,32,99,111,114,101,65,108,105,103,110,32,61,32,110,101,119,32,109,111,100,117,108,101,46,86,101,99,116,111,114,70,108,111,97,116,40,41,59,10,32,32,32,32,99,111,114,101,65,108,105,103,110,46,112,117,115,104,95,98,97,99,107,40,97,108,105,103,110,91,48,93,41,59,10,32,32,32,32,99,111,114,101,65,108,105,103,110,46,112,117,115,104,95,98,97,99,107,40,97,108,105,103,110,91,49,93,41,59,10,32,32,32,32,114,101,116,117,114,110,32,99,111,114,101,65,108,105,103,110,59,10,32,32,125,59,10,32,32,118,97,114,32,99,114,101,97,116,101,67,111,114,101,83,101,103,109,101,110,116,32,61,32,40,115,101,103,109,101,110,116,44,32,109,111,100,117,108,101,41,32,61,62,32,123,10,32,32,32,32,99,111,110,115,116,32,99,111,114,101,115,101,103,109,101,110,116,32,61,32,110,101,119,32,109,111,100,117,108,101,46,86,101,99,116,111,114,70,108,111,97,116,40,41,59,10,32,32,32,32,105,102,32,40,115,101,103,109,101,110,116,46,108,101,110,103,116,104,32,33,61,61,32,50,41,32,114,101,116,117,114,110,32,99,111,114,101,115,101,103,109,101,110,116,59,10,32,32,32,32,99,111,114,101,115,101,103,109,101,110,116,46,112,117,115,104,95,98,97,99,107,40,115,101,103,109,101,110,116,91,48,93,41,59,10,32,32,32,32,99,111,114,101,115,101,103,109,101,110,116,46,112,117,115,104,95,98,97,99,107,40,115,101,103,109,101,110,116,91,49,93,41,59,10,32,32,32,32,114,101,116,117,114,110,32,99,111,114,101,115,101,103,109,101,110,116,59,10,32,32,125,59,10,32,32,118,97,114,32,99,114,101,97,116,101,67,111,114,101,76,97,121,111,117,116,32,61,32,40,108,97,121,111,117,116,44,32,109,111,100,117,108,101,41,32,61,62,32,123,10,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,105,102,32,40,33,108,97,121,111,117,116,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,111,100,117,108,101,46,99,114,101,97,116,101,68,101,102,97,117,108,116,76,97,121,111,117,116,40,41,59,10,32,32,32,32,125,10,32,32,32,32,114,101,116,117,114,110,32,123,10,32,32,32,32,32,32,97,108,105,103,110,58,32,99,114,101,97,116,101,67,111,114,101,65,108,105,103,110,40,40,95,97,32,61,32,108,97,121,111,117,116,46,97,108,105,103,110,41,32,33,61,32,110,117,108,108,32,63,32,95,97,32,58,32,91,48,46,53,44,32,48,46,53,93,44,32,109,111,100,117,108,101,41,44,10,32,32,32,32,32,32,102,105,116,58,32,99,114,101,97,116,101,67,111,114,101,70,105,116,40,40,95,98,32,61,32,108,97,121,111,117,116,46,102,105,116,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,34,99,111,110,116,97,105,110,34,44,32,109,111,100,117,108,101,41,10,32,32,32,32,125,59,10,32,32,125,59,10,32,32,118,97,114,32,95,68,111,116,76,111,116,116,105,101,32,61,32,99,108,97,115,115,32,95,68,111,116,76,111,116,116,105,101,32,123,10,32,32,32,32,99,111,110,115,116,114,117,99,116,111,114,40,99,111,110,102,105,103,41,32,123,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,99,97,110,118,97,115,34,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,99,111,110,116,101,120,116,34,44,32,110,117,108,108,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,101,118,101,110,116,77,97,110,97,103,101,114,34,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,34,44,32,110,117,108,108,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,102,114,97,109,101,77,97,110,97,103,101,114,34,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,100,111,116,76,111,116,116,105,101,67,111,114,101,34,44,32,110,117,108,108,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,114,101,110,100,101,114,67,111,110,102,105,103,34,44,32,123,125,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,105,115,70,114,111,122,101,110,34,44,32,102,97,108,115,101,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,34,44,32,110,117,108,108,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,112,111,105,110,116,101,114,85,112,77,101,116,104,111,100,34,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,112,111,105,110,116,101,114,68,111,119,110,77,101,116,104,111,100,34,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,112,111,105,110,116,101,114,77,111,118,101,77,101,116,104,111,100,34,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,112,111,105,110,116,101,114,69,110,116,101,114,77,101,116,104,111,100,34,41,59,10,32,32,32,32,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,116,104,105,115,44,32,34,95,112,111,105,110,116,101,114,69,120,105,116,77,101,116,104,111,100,34,41,59,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,44,32,95,99,59,10,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,32,61,32,99,111,110,102,105,103,46,99,97,110,118,97,115,59,10,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,32,61,32,110,101,119,32,69,118,101,110,116,77,97,110,97,103,101,114,40,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,102,114,97,109,101,77,97,110,97,103,101,114,32,61,32,110,101,119,32,65,110,105,109,97,116,105,111,110,70,114,97,109,101,77,97,110,97,103,101,114,40,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,32,61,32,95,95,115,112,114,101,97,100,80,114,111,112,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,123,125,44,32,99,111,110,102,105,103,46,114,101,110,100,101,114,67,111,110,102,105,103,41,44,32,123,10,32,32,32,32,32,32,32,32,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,58,32,40,40,95,97,32,61,32,99,111,110,102,105,103,46,114,101,110,100,101,114,67,111,110,102,105,103,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,41,32,124,124,32,103,101,116,68,101,102,97,117,108,116,68,80,82,40,41,44,10,32,32,32,32,32,32,32,32,47,47,32,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,32,105,115,32,116,114,117,101,32,98,121,32,100,101,102,97,117,108,116,32,116,111,32,112,114,101,118,101,110,116,32,117,110,110,101,99,101,115,115,97,114,121,32,114,101,110,100,101,114,105,110,103,32,119,104,101,110,32,116,104,101,32,99,97,110,118,97,115,32,105,115,32,111,102,102,115,99,114,101,101,110,10,32,32,32,32,32,32,32,32,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,58,32,40,95,99,32,61,32,40,95,98,32,61,32,99,111,110,102,105,103,46,114,101,110,100,101,114,67,111,110,102,105,103,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,98,46,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,41,32,33,61,32,110,117,108,108,32,63,32,95,99,32,58,32,116,114,117,101,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,68,111,116,76,111,116,116,105,101,87,97,115,109,76,111,97,100,101,114,46,108,111,97,100,40,41,46,116,104,101,110,40,40,109,111,100,117,108,101,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,118,97,114,32,95,97,50,44,32,95,98,50,44,32,95,99,50,44,32,95,100,44,32,95,101,44,32,95,102,44,32,95,103,44,32,95,104,59,10,32,32,32,32,32,32,32,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,32,61,32,109,111,100,117,108,101,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,32,110,101,119,32,109,111,100,117,108,101,46,68,111,116,76,111,116,116,105,101,80,108,97,121,101,114,40,123,10,32,32,32,32,32,32,32,32,32,32,116,104,101,109,101,73,100,58,32,40,95,97,50,32,61,32,99,111,110,102,105,103,46,116,104,101,109,101,73,100,41,32,33,61,32,110,117,108,108,32,63,32,95,97,50,32,58,32,34,34,44,10,32,32,32,32,32,32,32,32,32,32,115,116,97,116,101,77,97,99,104,105,110,101,73,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,32,32,97,117,116,111,112,108,97,121,58,32,40,95,98,50,32,61,32,99,111,110,102,105,103,46,97,117,116,111,112,108,97,121,41,32,33,61,32,110,117,108,108,32,63,32,95,98,50,32,58,32,102,97,108,115,101,44,10,32,32,32,32,32,32,32,32,32,32,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,58,32,48,44,10,32,32,32,32,32,32,32,32,32,32,108,111,111,112,65,110,105,109,97,116,105,111,110,58,32,40,95,99,50,32,61,32,99,111,110,102,105,103,46,108,111,111,112,41,32,33,61,32,110,117,108,108,32,63,32,95,99,50,32,58,32,102,97,108,115,101,44,10,32,32,32,32,32,32,32,32,32,32,109,111,100,101,58,32,99,114,101,97,116,101,67,111,114,101,77,111,100,101,40,40,95,100,32,61,32,99,111,110,102,105,103,46,109,111,100,101,41,32,33,61,32,110,117,108,108,32,63,32,95,100,32,58,32,34,102,111,114,119,97,114,100,34,44,32,109,111,100,117,108,101,41,44,10,32,32,32,32,32,32,32,32,32,32,115,101,103,109,101,110,116,58,32,99,114,101,97,116,101,67,111,114,101,83,101,103,109,101,110,116,40,40,95,101,32,61,32,99,111,110,102,105,103,46,115,101,103,109,101,110,116,41,32,33,61,32,110,117,108,108,32,63,32,95,101,32,58,32,91,93,44,32,109,111,100,117,108,101,41,44,10,32,32,32,32,32,32,32,32,32,32,115,112,101,101,100,58,32,40,95,102,32,61,32,99,111,110,102,105,103,46,115,112,101,101,100,41,32,33,61,32,110,117,108,108,32,63,32,95,102,32,58,32,49,44,10,32,32,32,32,32,32,32,32,32,32,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,58,32,40,95,103,32,61,32,99,111,110,102,105,103,46,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,41,32,33,61,32,110,117,108,108,32,63,32,95,103,32,58,32,116,114,117,101,44,10,32,32,32,32,32,32,32,32,32,32,109,97,114,107,101,114,58,32,40,95,104,32,61,32,99,111,110,102,105,103,46,109,97,114,107,101,114,41,32,33,61,32,110,117,108,108,32,63,32,95,104,32,58,32,34,34,44,10,32,32,32,32,32,32,32,32,32,32,108,97,121,111,117,116,58,32,99,114,101,97,116,101,67,111,114,101,76,97,121,111,117,116,40,99,111,110,102,105,103,46,108,97,121,111,117,116,44,32,109,111,100,117,108,101,41,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,114,101,97,100,121,34,32,125,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,99,111,110,102,105,103,46,100,97,116,97,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,108,111,97,100,70,114,111,109,68,97,116,97,40,99,111,110,102,105,103,46,100,97,116,97,41,59,10,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,99,111,110,102,105,103,46,115,114,99,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,108,111,97,100,70,114,111,109,83,114,99,40,99,111,110,102,105,103,46,115,114,99,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,99,111,110,102,105,103,46,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,115,101,116,66,97,99,107,103,114,111,117,110,100,67,111,108,111,114,40,99,111,110,102,105,103,46,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,41,46,99,97,116,99,104,40,40,101,114,114,111,114,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,10,32,32,32,32,32,32,32,32,32,32,116,121,112,101,58,32,34,108,111,97,100,69,114,114,111,114,34,44,10,32,32,32,32,32,32,32,32,32,32,101,114,114,111,114,58,32,110,101,119,32,69,114,114,111,114,40,96,70,97,105,108,101,100,32,116,111,32,108,111,97,100,32,119,97,115,109,32,109,111,100,117,108,101,58,32,36,123,101,114,114,111,114,125,96,41,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,112,111,105,110,116,101,114,85,112,77,101,116,104,111,100,32,61,32,116,104,105,115,46,95,111,110,80,111,105,110,116,101,114,85,112,46,98,105,110,100,40,116,104,105,115,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,112,111,105,110,116,101,114,68,111,119,110,77,101,116,104,111,100,32,61,32,116,104,105,115,46,95,111,110,80,111,105,110,116,101,114,68,111,119,110,46,98,105,110,100,40,116,104,105,115,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,112,111,105,110,116,101,114,77,111,118,101,77,101,116,104,111,100,32,61,32,116,104,105,115,46,95,111,110,80,111,105,110,116,101,114,77,111,118,101,46,98,105,110,100,40,116,104,105,115,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,112,111,105,110,116,101,114,69,110,116,101,114,77,101,116,104,111,100,32,61,32,116,104,105,115,46,95,111,110,80,111,105,110,116,101,114,69,110,116,101,114,46,98,105,110,100,40,116,104,105,115,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,112,111,105,110,116,101,114,69,120,105,116,77,101,116,104,111,100,32,61,32,116,104,105,115,46,95,111,110,80,111,105,110,116,101,114,76,101,97,118,101,46,98,105,110,100,40,116,104,105,115,41,59,10,32,32,32,32,125,10,32,32,32,32,95,100,105,115,112,97,116,99,104,69,114,114,111,114,40,109,101,115,115,97,103,101,41,32,123,10,32,32,32,32,32,32,99,111,110,115,111,108,101,46,101,114,114,111,114,40,109,101,115,115,97,103,101,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,108,111,97,100,69,114,114,111,114,34,44,32,101,114,114,111,114,58,32,110,101,119,32,69,114,114,111,114,40,109,101,115,115,97,103,101,41,32,125,41,59,10,32,32,32,32,125,10,32,32,32,32,95,102,101,116,99,104,68,97,116,97,40,115,114,99,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,95,95,97,115,121,110,99,40,116,104,105,115,44,32,110,117,108,108,44,32,102,117,110,99,116,105,111,110,42,32,40,41,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,121,105,101,108,100,32,102,101,116,99,104,40,115,114,99,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,33,114,101,115,112,111,110,115,101,46,111,107,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,70,97,105,108,101,100,32,116,111,32,102,101,116,99,104,32,97,110,105,109,97,116,105,111,110,32,100,97,116,97,32,102,114,111,109,32,85,82,76,58,32,36,123,115,114,99,125,46,32,36,123,114,101,115,112,111,110,115,101,46,115,116,97,116,117,115,125,58,32,36,123,114,101,115,112,111,110,115,101,46,115,116,97,116,117,115,84,101,120,116,125,96,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,100,97,116,97,32,61,32,121,105,101,108,100,32,114,101,115,112,111,110,115,101,46,97,114,114,97,121,66,117,102,102,101,114,40,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,105,115,68,111,116,76,111,116,116,105,101,40,100,97,116,97,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,100,97,116,97,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,110,101,119,32,84,101,120,116,68,101,99,111,100,101,114,40,41,46,100,101,99,111,100,101,40,100,97,116,97,41,59,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,125,10,32,32,32,32,95,108,111,97,100,70,114,111,109,68,97,116,97,40,100,97,116,97,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,99,111,110,115,116,32,119,105,100,116,104,32,61,32,116,104,105,115,46,95,99,97,110,118,97,115,46,119,105,100,116,104,59,10,32,32,32,32,32,32,99,111,110,115,116,32,104,101,105,103,104,116,32,61,32,116,104,105,115,46,95,99,97,110,118,97,115,46,104,101,105,103,104,116,59,10,32,32,32,32,32,32,108,101,116,32,108,111,97,100,101,100,32,61,32,102,97,108,115,101,59,10,32,32,32,32,32,32,105,102,32,40,116,121,112,101,111,102,32,100,97,116,97,32,61,61,61,32,34,115,116,114,105,110,103,34,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,33,105,115,76,111,116,116,105,101,40,100,97,116,97,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,100,105,115,112,97,116,99,104,69,114,114,111,114,40,10,32,32,32,32,32,32,32,32,32,32,32,32,34,73,110,118,97,108,105,100,32,76,111,116,116,105,101,32,74,83,79,78,32,115,116,114,105,110,103,58,32,84,104,101,32,112,114,111,118,105,100,101,100,32,115,116,114,105,110,103,32,100,111,101,115,32,110,111,116,32,99,111,110,102,111,114,109,32,116,111,32,116,104,101,32,76,111,116,116,105,101,32,74,83,79,78,32,102,111,114,109,97,116,46,34,10,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,108,111,97,100,101,100,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,108,111,97,100,65,110,105,109,97,116,105,111,110,68,97,116,97,40,100,97,116,97,44,32,119,105,100,116,104,44,32,104,101,105,103,104,116,41,59,10,32,32,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,100,97,116,97,32,105,110,115,116,97,110,99,101,111,102,32,65,114,114,97,121,66,117,102,102,101,114,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,33,105,115,68,111,116,76,111,116,116,105,101,40,100,97,116,97,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,100,105,115,112,97,116,99,104,69,114,114,111,114,40,10,32,32,32,32,32,32,32,32,32,32,32,32,34,73,110,118,97,108,105,100,32,100,111,116,76,111,116,116,105,101,32,65,114,114,97,121,66,117,102,102,101,114,58,32,84,104,101,32,112,114,111,118,105,100,101,100,32,65,114,114,97,121,66,117,102,102,101,114,32,100,111,101,115,32,110,111,116,32,99,111,110,102,111,114,109,32,116,111,32,116,104,101,32,100,111,116,76,111,116,116,105,101,32,102,111,114,109,97,116,46,34,10,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,108,111,97,100,101,100,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,108,111,97,100,68,111,116,76,111,116,116,105,101,68,97,116,97,40,100,97,116,97,44,32,119,105,100,116,104,44,32,104,101,105,103,104,116,41,59,10,32,32,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,116,121,112,101,111,102,32,100,97,116,97,32,61,61,61,32,34,111,98,106,101,99,116,34,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,33,105,115,76,111,116,116,105,101,40,100,97,116,97,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,100,105,115,112,97,116,99,104,69,114,114,111,114,40,10,32,32,32,32,32,32,32,32,32,32,32,32,34,73,110,118,97,108,105,100,32,76,111,116,116,105,101,32,74,83,79,78,32,111,98,106,101,99,116,58,32,84,104,101,32,112,114,111,118,105,100,101,100,32,111,98,106,101,99,116,32,100,111,101,115,32,110,111,116,32,99,111,110,102,111,114,109,32,116,111,32,116,104,101,32,76,111,116,116,105,101,32,74,83,79,78,32,102,111,114,109,97,116,46,34,10,32,32,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,108,111,97,100,101,100,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,108,111,97,100,65,110,105,109,97,116,105,111,110,68,97,116,97,40,74,83,79,78,46,115,116,114,105,110,103,105,102,121,40,100,97,116,97,41,44,32,119,105,100,116,104,44,32,104,101,105,103,104,116,41,59,10,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,100,105,115,112,97,116,99,104,69,114,114,111,114,40,10,32,32,32,32,32,32,32,32,32,32,96,85,110,115,117,112,112,111,114,116,101,100,32,100,97,116,97,32,116,121,112,101,32,102,111,114,32,97,110,105,109,97,116,105,111,110,32,100,97,116,97,46,32,69,120,112,101,99,116,101,100,58,32,10,32,32,32,32,32,32,32,32,32,32,45,32,115,116,114,105,110,103,32,40,76,111,116,116,105,101,32,74,83,79,78,41,44,10,32,32,32,32,32,32,32,32,32,32,45,32,65,114,114,97,121,66,117,102,102,101,114,32,40,100,111,116,76,111,116,116,105,101,41,44,10,32,32,32,32,32,32,32,32,32,32,45,32,111,98,106,101,99,116,32,40,76,111,116,116,105,101,32,74,83,79,78,41,46,32,10,32,32,32,32,32,32,32,32,32,32,82,101,99,101,105,118,101,100,58,32,36,123,116,121,112,101,111,102,32,100,97,116,97,125,96,10,32,32,32,32,32,32,32,32,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,102,32,40,108,111,97,100,101,100,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,108,111,97,100,34,32,125,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,73,83,95,66,82,79,87,83,69,82,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,114,101,115,105,122,101,40,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,10,32,32,32,32,32,32,32,32,32,32,116,121,112,101,58,32,34,102,114,97,109,101,34,44,10,32,32,32,32,32,32,32,32,32,32,99,117,114,114,101,110,116,70,114,97,109,101,58,32,116,104,105,115,46,99,117,114,114,101,110,116,70,114,97,109,101,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,114,101,110,100,101,114,40,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,111,110,102,105,103,40,41,46,97,117,116,111,112,108,97,121,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,112,108,97,121,40,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,105,115,80,108,97,121,105,110,103,40,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,112,108,97,121,34,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,61,32,116,104,105,115,46,95,102,114,97,109,101,77,97,110,97,103,101,114,46,114,101,113,117,101,115,116,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,116,104,105,115,46,95,100,114,97,119,46,98,105,110,100,40,116,104,105,115,41,41,59,10,32,32,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,99,111,110,115,111,108,101,46,101,114,114,111,114,40,34,115,111,109,101,116,104,105,110,103,32,119,101,110,116,32,119,114,111,110,103,44,32,116,104,101,32,97,110,105,109,97,116,105,111,110,32,119,97,115,32,115,117,112,112,111,115,101,32,116,111,32,97,117,116,111,112,108,97,121,34,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,73,83,95,66,82,79,87,83,69,82,32,38,38,32,116,104,105,115,46,95,99,97,110,118,97,115,32,105,110,115,116,97,110,99,101,111,102,32,72,84,77,76,67,97,110,118,97,115,69,108,101,109,101,110,116,41,32,123,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,46,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,79,102,102,115,99,114,101,101,110,79,98,115,101,114,118,101,114,46,111,98,115,101,114,118,101,40,116,104,105,115,46,95,99,97,110,118,97,115,44,32,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,46,97,117,116,111,82,101,115,105,122,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,67,97,110,118,97,115,82,101,115,105,122,101,79,98,115,101,114,118,101,114,46,111,98,115,101,114,118,101,40,116,104,105,115,46,95,99,97,110,118,97,115,44,32,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,100,105,115,112,97,116,99,104,69,114,114,111,114,40,34,70,97,105,108,101,100,32,116,111,32,108,111,97,100,32,97,110,105,109,97,116,105,111,110,32,100,97,116,97,34,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,95,108,111,97,100,70,114,111,109,83,114,99,40,115,114,99,41,32,123,10,32,32,32,32,32,32,116,104,105,115,46,95,102,101,116,99,104,68,97,116,97,40,115,114,99,41,46,116,104,101,110,40,40,100,97,116,97,41,32,61,62,32,116,104,105,115,46,95,108,111,97,100,70,114,111,109,68,97,116,97,40,100,97,116,97,41,41,46,99,97,116,99,104,40,40,101,114,114,111,114,41,32,61,62,32,116,104,105,115,46,95,100,105,115,112,97,116,99,104,69,114,114,111,114,40,96,70,97,105,108,101,100,32,116,111,32,108,111,97,100,32,97,110,105,109,97,116,105,111,110,32,100,97,116,97,32,102,114,111,109,32,85,82,76,58,32,36,123,115,114,99,125,46,32,36,123,101,114,114,111,114,125,96,41,41,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,98,117,102,102,101,114,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,33,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,114,101,116,117,114,110,32,110,117,108,108,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,98,117,102,102,101,114,40,41,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,97,99,116,105,118,101,65,110,105,109,97,116,105,111,110,73,100,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,97,99,116,105,118,101,65,110,105,109,97,116,105,111,110,73,100,40,41,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,97,99,116,105,118,101,84,104,101,109,101,73,100,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,97,99,116,105,118,101,84,104,101,109,101,73,100,40,41,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,108,97,121,111,117,116,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,99,111,110,115,116,32,108,97,121,111,117,116,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,99,111,110,102,105,103,40,41,46,108,97,121,111,117,116,59,10,32,32,32,32,32,32,105,102,32,40,108,97,121,111,117,116,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,123,10,32,32,32,32,32,32,32,32,32,32,97,108,105,103,110,58,32,91,108,97,121,111,117,116,46,97,108,105,103,110,46,103,101,116,40,48,41,44,32,108,97,121,111,117,116,46,97,108,105,103,110,46,103,101,116,40,49,41,93,44,10,32,32,32,32,32,32,32,32,32,32,102,105,116,58,32,40,40,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,118,97,114,32,95,97,50,44,32,95,98,44,32,95,99,44,32,95,100,44,32,95,101,44,32,95,102,59,10,32,32,32,32,32,32,32,32,32,32,32,32,115,119,105,116,99,104,32,40,108,97,121,111,117,116,46,102,105,116,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,40,40,95,97,50,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,50,46,70,105,116,46,67,111,110,116,97,105,110,41,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,99,111,110,116,97,105,110,34,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,40,40,95,98,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,98,46,70,105,116,46,67,111,118,101,114,41,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,99,111,118,101,114,34,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,40,40,95,99,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,99,46,70,105,116,46,70,105,108,108,41,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,102,105,108,108,34,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,40,40,95,100,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,100,46,70,105,116,46,70,105,116,72,101,105,103,104,116,41,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,102,105,116,45,104,101,105,103,104,116,34,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,40,40,95,101,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,101,46,70,105,116,46,70,105,116,87,105,100,116,104,41,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,102,105,116,45,119,105,100,116,104,34,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,97,115,101,32,40,40,95,102,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,102,46,70,105,116,46,78,111,110,101,41,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,110,111,110,101,34,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,101,102,97,117,108,116,58,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,99,111,110,116,97,105,110,34,59,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,41,40,41,10,32,32,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,118,111,105,100,32,48,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,109,97,114,107,101,114,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,99,111,110,115,116,32,109,97,114,107,101,114,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,99,111,110,102,105,103,40,41,46,109,97,114,107,101,114,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,109,97,114,107,101,114,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,109,97,110,105,102,101,115,116,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,109,97,110,105,102,101,115,116,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,109,97,110,105,102,101,115,116,83,116,114,105,110,103,40,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,32,124,124,32,33,109,97,110,105,102,101,115,116,41,32,114,101,116,117,114,110,32,110,117,108,108,59,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,109,97,110,105,102,101,115,116,74,115,111,110,32,61,32,74,83,79,78,46,112,97,114,115,101,40,109,97,110,105,102,101,115,116,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,79,98,106,101,99,116,46,107,101,121,115,40,109,97,110,105,102,101,115,116,74,115,111,110,41,46,108,101,110,103,116,104,32,61,61,61,32,48,41,32,114,101,116,117,114,110,32,110,117,108,108,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,109,97,110,105,102,101,115,116,74,115,111,110,59,10,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,95,101,114,114,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,110,117,108,108,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,114,101,110,100,101,114,67,111,110,102,105,103,40,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,115,101,103,109,101,110,116,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,99,111,110,115,116,32,115,101,103,109,101,110,116,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,99,111,110,102,105,103,40,41,46,115,101,103,109,101,110,116,59,10,32,32,32,32,32,32,105,102,32,40,115,101,103,109,101,110,116,32,38,38,32,115,101,103,109,101,110,116,46,115,105,122,101,40,41,32,61,61,61,32,50,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,91,115,101,103,109,101,110,116,46,103,101,116,40,48,41,44,32,115,101,103,109,101,110,116,46,103,101,116,40,49,41,93,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,118,111,105,100,32,48,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,108,111,111,112,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,99,111,110,102,105,103,40,41,46,108,111,111,112,65,110,105,109,97,116,105,111,110,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,109,111,100,101,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,44,32,95,99,44,32,95,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,109,111,100,101,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,99,111,110,102,105,103,40,41,46,109,111,100,101,59,10,32,32,32,32,32,32,105,102,32,40,109,111,100,101,32,61,61,61,32,40,40,95,98,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,98,46,77,111,100,101,46,82,101,118,101,114,115,101,41,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,114,101,118,101,114,115,101,34,59,10,32,32,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,109,111,100,101,32,61,61,61,32,40,40,95,99,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,99,46,77,111,100,101,46,66,111,117,110,99,101,41,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,98,111,117,110,99,101,34,59,10,32,32,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,109,111,100,101,32,61,61,61,32,40,40,95,100,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,100,46,77,111,100,101,46,82,101,118,101,114,115,101,66,111,117,110,99,101,41,41,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,114,101,118,101,114,115,101,45,98,111,117,110,99,101,34,59,10,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,34,102,111,114,119,97,114,100,34,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,105,115,70,114,111,122,101,110,40,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,105,115,70,114,111,122,101,110,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,97,32,61,32,116,104,105,115,46,95,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,41,32,33,61,32,110,117,108,108,32,63,32,95,97,32,58,32,34,34,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,97,117,116,111,112,108,97,121,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,99,111,110,102,105,103,40,41,46,97,117,116,111,112,108,97,121,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,99,111,110,102,105,103,40,41,46,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,115,112,101,101,100,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,99,111,110,102,105,103,40,41,46,115,112,101,101,100,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,48,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,105,115,82,101,97,100,121,40,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,33,61,61,32,110,117,108,108,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,105,115,76,111,97,100,101,100,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,105,115,76,111,97,100,101,100,40,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,105,115,80,108,97,121,105,110,103,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,105,115,80,108,97,121,105,110,103,40,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,105,115,80,97,117,115,101,100,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,105,115,80,97,117,115,101,100,40,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,105,115,83,116,111,112,112,101,100,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,105,115,83,116,111,112,112,101,100,40,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,99,117,114,114,101,110,116,70,114,97,109,101,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,33,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,114,101,116,117,114,110,32,48,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,77,97,116,104,46,114,111,117,110,100,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,117,114,114,101,110,116,70,114,97,109,101,40,41,32,42,32,49,48,48,41,32,47,32,49,48,48,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,108,111,111,112,67,111,117,110,116,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,108,111,111,112,67,111,117,110,116,40,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,48,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,116,111,116,97,108,70,114,97,109,101,115,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,116,111,116,97,108,70,114,97,109,101,115,40,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,48,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,100,117,114,97,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,100,117,114,97,116,105,111,110,40,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,48,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,115,101,103,109,101,110,116,68,117,114,97,116,105,111,110,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,101,103,109,101,110,116,68,117,114,97,116,105,111,110,40,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,48,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,32,99,97,110,118,97,115,40,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,99,97,110,118,97,115,59,10,32,32,32,32,125,10,32,32,32,32,108,111,97,100,40,99,111,110,102,105,103,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,44,32,95,99,44,32,95,100,44,32,95,101,44,32,95,102,44,32,95,103,44,32,95,104,44,32,95,105,59,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,32,124,124,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,33,61,61,32,110,117,108,108,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,102,114,97,109,101,77,97,110,97,103,101,114,46,99,97,110,99,101,108,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,116,104,105,115,46,95,105,115,70,114,111,122,101,110,32,61,32,102,97,108,115,101,59,10,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,67,111,110,102,105,103,40,123,10,32,32,32,32,32,32,32,32,116,104,101,109,101,73,100,58,32,40,95,97,32,61,32,99,111,110,102,105,103,46,116,104,101,109,101,73,100,41,32,33,61,32,110,117,108,108,32,63,32,95,97,32,58,32,34,34,44,10,32,32,32,32,32,32,32,32,115,116,97,116,101,77,97,99,104,105,110,101,73,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,97,117,116,111,112,108,97,121,58,32,40,95,98,32,61,32,99,111,110,102,105,103,46,97,117,116,111,112,108,97,121,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,44,10,32,32,32,32,32,32,32,32,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,58,32,48,44,10,32,32,32,32,32,32,32,32,108,111,111,112,65,110,105,109,97,116,105,111,110,58,32,40,95,99,32,61,32,99,111,110,102,105,103,46,108,111,111,112,41,32,33,61,32,110,117,108,108,32,63,32,95,99,32,58,32,102,97,108,115,101,44,10,32,32,32,32,32,32,32,32,109,111,100,101,58,32,99,114,101,97,116,101,67,111,114,101,77,111,100,101,40,40,95,100,32,61,32,99,111,110,102,105,103,46,109,111,100,101,41,32,33,61,32,110,117,108,108,32,63,32,95,100,32,58,32,34,102,111,114,119,97,114,100,34,44,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,44,10,32,32,32,32,32,32,32,32,115,101,103,109,101,110,116,58,32,99,114,101,97,116,101,67,111,114,101,83,101,103,109,101,110,116,40,40,95,101,32,61,32,99,111,110,102,105,103,46,115,101,103,109,101,110,116,41,32,33,61,32,110,117,108,108,32,63,32,95,101,32,58,32,91,93,44,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,44,10,32,32,32,32,32,32,32,32,115,112,101,101,100,58,32,40,95,102,32,61,32,99,111,110,102,105,103,46,115,112,101,101,100,41,32,33,61,32,110,117,108,108,32,63,32,95,102,32,58,32,49,44,10,32,32,32,32,32,32,32,32,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,58,32,40,95,103,32,61,32,99,111,110,102,105,103,46,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,41,32,33,61,32,110,117,108,108,32,63,32,95,103,32,58,32,116,114,117,101,44,10,32,32,32,32,32,32,32,32,109,97,114,107,101,114,58,32,40,95,104,32,61,32,99,111,110,102,105,103,46,109,97,114,107,101,114,41,32,33,61,32,110,117,108,108,32,63,32,95,104,32,58,32,34,34,44,10,32,32,32,32,32,32,32,32,108,97,121,111,117,116,58,32,99,114,101,97,116,101,67,111,114,101,76,97,121,111,117,116,40,99,111,110,102,105,103,46,108,97,121,111,117,116,44,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,105,102,32,40,99,111,110,102,105,103,46,100,97,116,97,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,108,111,97,100,70,114,111,109,68,97,116,97,40,99,111,110,102,105,103,46,100,97,116,97,41,59,10,32,32,32,32,32,32,125,32,101,108,115,101,32,105,102,32,40,99,111,110,102,105,103,46,115,114,99,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,108,111,97,100,70,114,111,109,83,114,99,40,99,111,110,102,105,103,46,115,114,99,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,116,104,105,115,46,115,101,116,66,97,99,107,103,114,111,117,110,100,67,111,108,111,114,40,40,95,105,32,61,32,99,111,110,102,105,103,46,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,41,32,33,61,32,110,117,108,108,32,63,32,95,105,32,58,32,34,34,41,59,10,32,32,32,32,125,10,32,32,32,32,95,114,101,110,100,101,114,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,105,102,32,40,33,116,104,105,115,46,95,99,111,110,116,101,120,116,32,38,38,32,34,103,101,116,67,111,110,116,101,120,116,34,32,105,110,32,116,104,105,115,46,95,99,97,110,118,97,115,32,38,38,32,116,121,112,101,111,102,32,116,104,105,115,46,95,99,97,110,118,97,115,46,103,101,116,67,111,110,116,101,120,116,32,61,61,61,32,34,102,117,110,99,116,105,111,110,34,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,111,110,116,101,120,116,32,61,32,116,104,105,115,46,95,99,97,110,118,97,115,46,103,101,116,67,111,110,116,101,120,116,40,34,50,100,34,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,110,100,101,114,101,100,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,114,101,110,100,101,114,40,41,59,10,32,32,32,32,32,32,105,102,32,40,114,101,110,100,101,114,101,100,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,99,111,110,116,101,120,116,41,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,98,117,102,102,101,114,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,98,117,102,102,101,114,40,41,59,10,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,99,108,97,109,112,101,100,66,117,102,102,101,114,32,61,32,110,101,119,32,85,105,110,116,56,67,108,97,109,112,101,100,65,114,114,97,121,40,98,117,102,102,101,114,44,32,48,44,32,116,104,105,115,46,95,99,97,110,118,97,115,46,119,105,100,116,104,32,42,32,116,104,105,115,46,95,99,97,110,118,97,115,46,104,101,105,103,104,116,32,42,32,52,41,59,10,32,32,32,32,32,32,32,32,32,32,108,101,116,32,105,109,97,103,101,68,97,116,97,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,121,112,101,111,102,32,73,109,97,103,101,68,97,116,97,32,61,61,61,32,34,117,110,100,101,102,105,110,101,100,34,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,105,109,97,103,101,68,97,116,97,32,61,32,116,104,105,115,46,95,99,111,110,116,101,120,116,46,99,114,101,97,116,101,73,109,97,103,101,68,97,116,97,40,116,104,105,115,46,95,99,97,110,118,97,115,46,119,105,100,116,104,44,32,116,104,105,115,46,95,99,97,110,118,97,115,46,104,101,105,103,104,116,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,105,109,97,103,101,68,97,116,97,46,100,97,116,97,46,115,101,116,40,99,108,97,109,112,101,100,66,117,102,102,101,114,41,59,10,32,32,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,105,109,97,103,101,68,97,116,97,32,61,32,110,101,119,32,73,109,97,103,101,68,97,116,97,40,99,108,97,109,112,101,100,66,117,102,102,101,114,44,32,116,104,105,115,46,95,99,97,110,118,97,115,46,119,105,100,116,104,44,32,116,104,105,115,46,95,99,97,110,118,97,115,46,104,101,105,103,104,116,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,111,110,116,101,120,116,46,112,117,116,73,109,97,103,101,68,97,116,97,40,105,109,97,103,101,68,97,116,97,44,32,48,44,32,48,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,10,32,32,32,32,32,32,32,32,32,32,116,121,112,101,58,32,34,114,101,110,100,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,99,117,114,114,101,110,116,70,114,97,109,101,58,32,116,104,105,115,46,99,117,114,114,101,110,116,70,114,97,109,101,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,116,114,117,101,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,95,100,114,97,119,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,32,124,124,32,33,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,105,115,80,108,97,121,105,110,103,40,41,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,110,101,120,116,70,114,97,109,101,32,61,32,77,97,116,104,46,114,111,117,110,100,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,114,101,113,117,101,115,116,70,114,97,109,101,40,41,32,42,32,49,101,51,41,32,47,32,49,101,51,59,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,117,112,100,97,116,101,100,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,70,114,97,109,101,40,110,101,120,116,70,114,97,109,101,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,117,112,100,97,116,101,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,121,112,101,58,32,34,102,114,97,109,101,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,99,117,114,114,101,110,116,70,114,97,109,101,58,32,116,104,105,115,46,99,117,114,114,101,110,116,70,114,97,109,101,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,114,101,110,100,101,114,101,100,32,61,32,116,104,105,115,46,95,114,101,110,100,101,114,40,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,114,101,110,100,101,114,101,100,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,105,115,67,111,109,112,108,101,116,101,40,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,111,110,102,105,103,40,41,46,108,111,111,112,65,110,105,109,97,116,105,111,110,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,121,112,101,58,32,34,108,111,111,112,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,108,111,111,112,67,111,117,110,116,58,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,108,111,111,112,67,111,117,110,116,40,41,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,99,111,109,112,108,101,116,101,34,32,125,41,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,61,32,116,104,105,115,46,95,102,114,97,109,101,77,97,110,97,103,101,114,46,114,101,113,117,101,115,116,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,116,104,105,115,46,95,100,114,97,119,46,98,105,110,100,40,116,104,105,115,41,41,59,10,32,32,32,32,32,32,125,32,99,97,116,99,104,32,40,101,114,114,111,114,41,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,111,108,101,46,101,114,114,111,114,40,34,69,114,114,111,114,32,105,110,32,97,110,105,109,97,116,105,111,110,32,102,114,97,109,101,58,34,44,32,101,114,114,111,114,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,114,101,110,100,101,114,69,114,114,111,114,34,44,32,101,114,114,111,114,32,125,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,101,114,114,111,114,32,105,110,115,116,97,110,99,101,111,102,32,87,101,98,65,115,115,101,109,98,108,121,46,82,117,110,116,105,109,101,69,114,114,111,114,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,100,101,115,116,114,111,121,40,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,112,108,97,121,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,33,61,61,32,110,117,108,108,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,102,114,97,109,101,77,97,110,97,103,101,114,46,99,97,110,99,101,108,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,99,111,110,115,116,32,111,107,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,112,108,97,121,40,41,59,10,32,32,32,32,32,32,105,102,32,40,111,107,32,124,124,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,105,115,80,108,97,121,105,110,103,40,41,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,105,115,70,114,111,122,101,110,32,61,32,102,97,108,115,101,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,112,108,97,121,34,32,125,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,61,32,116,104,105,115,46,95,102,114,97,109,101,77,97,110,97,103,101,114,46,114,101,113,117,101,115,116,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,116,104,105,115,46,95,100,114,97,119,46,98,105,110,100,40,116,104,105,115,41,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,102,32,40,73,83,95,66,82,79,87,83,69,82,32,38,38,32,116,104,105,115,46,95,99,97,110,118,97,115,32,105,110,115,116,97,110,99,101,111,102,32,72,84,77,76,67,97,110,118,97,115,69,108,101,109,101,110,116,32,38,38,32,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,46,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,32,38,38,32,33,105,115,69,108,101,109,101,110,116,73,110,86,105,101,119,112,111,114,116,40,116,104,105,115,46,95,99,97,110,118,97,115,41,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,102,114,101,101,122,101,40,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,112,97,117,115,101,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,99,111,110,115,116,32,111,107,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,112,97,117,115,101,40,41,59,10,32,32,32,32,32,32,105,102,32,40,111,107,32,124,124,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,105,115,80,97,117,115,101,100,40,41,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,112,97,117,115,101,34,32,125,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,115,116,111,112,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,99,111,110,115,116,32,111,107,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,116,111,112,40,41,59,10,32,32,32,32,32,32,105,102,32,40,111,107,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,102,114,97,109,101,34,44,32,99,117,114,114,101,110,116,70,114,97,109,101,58,32,116,104,105,115,46,99,117,114,114,101,110,116,70,114,97,109,101,32,125,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,114,101,110,100,101,114,40,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,115,116,111,112,34,32,125,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,115,101,116,70,114,97,109,101,40,102,114,97,109,101,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,105,102,32,40,102,114,97,109,101,32,60,32,48,32,124,124,32,102,114,97,109,101,32,62,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,116,111,116,97,108,70,114,97,109,101,115,40,41,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,99,111,110,115,116,32,111,107,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,101,107,40,102,114,97,109,101,41,59,10,32,32,32,32,32,32,105,102,32,40,111,107,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,102,114,97,109,101,34,44,32,99,117,114,114,101,110,116,70,114,97,109,101,58,32,116,104,105,115,46,99,117,114,114,101,110,116,70,114,97,109,101,32,125,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,114,101,110,100,101,114,40,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,115,101,116,83,112,101,101,100,40,115,112,101,101,100,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,67,111,110,102,105,103,40,95,95,115,112,114,101,97,100,80,114,111,112,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,123,125,44,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,111,110,102,105,103,40,41,41,44,32,123,10,32,32,32,32,32,32,32,32,115,112,101,101,100,10,32,32,32,32,32,32,125,41,41,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,66,97,99,107,103,114,111,117,110,100,67,111,108,111,114,40,99,111,108,111,114,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,105,102,32,40,73,83,95,66,82,79,87,83,69,82,32,38,38,32,116,104,105,115,46,95,99,97,110,118,97,115,32,105,110,115,116,97,110,99,101,111,102,32,72,84,77,76,67,97,110,118,97,115,69,108,101,109,101,110,116,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,115,116,121,108,101,46,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,32,61,32,99,111,108,111,114,59,10,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,67,111,110,102,105,103,40,95,95,115,112,114,101,97,100,80,114,111,112,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,123,125,44,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,111,110,102,105,103,40,41,41,44,32,123,10,32,32,32,32,32,32,32,32,32,32,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,58,32,104,101,120,83,116,114,105,110,103,84,111,82,71,66,65,73,110,116,40,99,111,108,111,114,41,10,32,32,32,32,32,32,32,32,125,41,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,116,104,105,115,46,95,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,32,61,32,99,111,108,111,114,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,76,111,111,112,40,108,111,111,112,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,67,111,110,102,105,103,40,95,95,115,112,114,101,97,100,80,114,111,112,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,123,125,44,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,111,110,102,105,103,40,41,41,44,32,123,10,32,32,32,32,32,32,32,32,108,111,111,112,65,110,105,109,97,116,105,111,110,58,32,108,111,111,112,10,32,32,32,32,32,32,125,41,41,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,85,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,40,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,67,111,110,102,105,103,40,95,95,115,112,114,101,97,100,80,114,111,112,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,123,125,44,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,111,110,102,105,103,40,41,41,44,32,123,10,32,32,32,32,32,32,32,32,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,10,32,32,32,32,32,32,125,41,41,59,10,32,32,32,32,125,10,32,32,32,32,97,100,100,69,118,101,110,116,76,105,115,116,101,110,101,114,40,116,121,112,101,44,32,108,105,115,116,101,110,101,114,41,32,123,10,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,97,100,100,69,118,101,110,116,76,105,115,116,101,110,101,114,40,116,121,112,101,44,32,108,105,115,116,101,110,101,114,41,59,10,32,32,32,32,125,10,32,32,32,32,114,101,109,111,118,101,69,118,101,110,116,76,105,115,116,101,110,101,114,40,116,121,112,101,44,32,108,105,115,116,101,110,101,114,41,32,123,10,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,114,101,109,111,118,101,69,118,101,110,116,76,105,115,116,101,110,101,114,40,116,121,112,101,44,32,108,105,115,116,101,110,101,114,41,59,10,32,32,32,32,125,10,32,32,32,32,100,101,115,116,114,111,121,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,33,61,61,32,110,117,108,108,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,102,114,97,109,101,77,97,110,97,103,101,114,46,99,97,110,99,101,108,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,102,32,40,73,83,95,66,82,79,87,83,69,82,32,38,38,32,116,104,105,115,46,95,99,97,110,118,97,115,32,105,110,115,116,97,110,99,101,111,102,32,72,84,77,76,67,97,110,118,97,115,69,108,101,109,101,110,116,41,32,123,10,32,32,32,32,32,32,32,32,79,102,102,115,99,114,101,101,110,79,98,115,101,114,118,101,114,46,117,110,111,98,115,101,114,118,101,40,116,104,105,115,46,95,99,97,110,118,97,115,41,59,10,32,32,32,32,32,32,32,32,67,97,110,118,97,115,82,101,115,105,122,101,79,98,115,101,114,118,101,114,46,117,110,111,98,115,101,114,118,101,40,116,104,105,115,46,95,99,97,110,118,97,115,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,100,101,108,101,116,101,40,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,116,104,105,115,46,95,99,111,110,116,101,120,116,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,10,32,32,32,32,32,32,32,32,116,121,112,101,58,32,34,100,101,115,116,114,111,121,34,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,114,101,109,111,118,101,65,108,108,69,118,101,110,116,76,105,115,116,101,110,101,114,115,40,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,99,108,101,97,110,117,112,83,116,97,116,101,77,97,99,104,105,110,101,76,105,115,116,101,110,101,114,115,40,41,59,10,32,32,32,32,125,10,32,32,32,32,102,114,101,101,122,101,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,102,114,97,109,101,77,97,110,97,103,101,114,46,99,97,110,99,101,108,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,61,32,110,117,108,108,59,10,32,32,32,32,32,32,116,104,105,115,46,95,105,115,70,114,111,122,101,110,32,61,32,116,114,117,101,59,10,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,102,114,101,101,122,101,34,32,125,41,59,10,32,32,32,32,125,10,32,32,32,32,117,110,102,114,101,101,122,101,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,33,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,97,110,105,109,97,116,105,111,110,70,114,97,109,101,73,100,32,61,32,116,104,105,115,46,95,102,114,97,109,101,77,97,110,97,103,101,114,46,114,101,113,117,101,115,116,65,110,105,109,97,116,105,111,110,70,114,97,109,101,40,116,104,105,115,46,95,100,114,97,119,46,98,105,110,100,40,116,104,105,115,41,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,105,115,70,114,111,122,101,110,32,61,32,102,97,108,115,101,59,10,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,117,110,102,114,101,101,122,101,34,32,125,41,59,10,32,32,32,32,125,10,32,32,32,32,114,101,115,105,122,101,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,33,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,124,124,32,33,116,104,105,115,46,105,115,76,111,97,100,101,100,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,105,102,32,40,73,83,95,66,82,79,87,83,69,82,32,38,38,32,116,104,105,115,46,95,99,97,110,118,97,115,32,105,110,115,116,97,110,99,101,111,102,32,72,84,77,76,67,97,110,118,97,115,69,108,101,109,101,110,116,41,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,100,112,114,32,61,32,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,46,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,32,124,124,32,119,105,110,100,111,119,46,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,32,124,124,32,49,59,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,123,32,104,101,105,103,104,116,58,32,99,108,105,101,110,116,72,101,105,103,104,116,44,32,119,105,100,116,104,58,32,99,108,105,101,110,116,87,105,100,116,104,32,125,32,61,32,116,104,105,115,46,95,99,97,110,118,97,115,46,103,101,116,66,111,117,110,100,105,110,103,67,108,105,101,110,116,82,101,99,116,40,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,99,108,105,101,110,116,72,101,105,103,104,116,32,33,61,61,32,48,32,38,38,32,99,108,105,101,110,116,87,105,100,116,104,32,33,61,61,32,48,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,119,105,100,116,104,32,61,32,99,108,105,101,110,116,87,105,100,116,104,32,42,32,100,112,114,59,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,104,101,105,103,104,116,32,61,32,99,108,105,101,110,116,72,101,105,103,104,116,32,42,32,100,112,114,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,99,111,110,115,116,32,111,107,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,114,101,115,105,122,101,40,116,104,105,115,46,95,99,97,110,118,97,115,46,119,105,100,116,104,44,32,116,104,105,115,46,95,99,97,110,118,97,115,46,104,101,105,103,104,116,41,59,10,32,32,32,32,32,32,105,102,32,40,111,107,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,114,101,110,100,101,114,40,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,115,101,116,83,101,103,109,101,110,116,40,115,116,97,114,116,70,114,97,109,101,44,32,101,110,100,70,114,97,109,101,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,32,124,124,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,67,111,110,102,105,103,40,95,95,115,112,114,101,97,100,80,114,111,112,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,123,125,44,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,111,110,102,105,103,40,41,41,44,32,123,10,32,32,32,32,32,32,32,32,115,101,103,109,101,110,116,58,32,99,114,101,97,116,101,67,111,114,101,83,101,103,109,101,110,116,40,91,115,116,97,114,116,70,114,97,109,101,44,32,101,110,100,70,114,97,109,101,93,44,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,10,32,32,32,32,32,32,125,41,41,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,77,111,100,101,40,109,111,100,101,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,32,124,124,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,67,111,110,102,105,103,40,95,95,115,112,114,101,97,100,80,114,111,112,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,123,125,44,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,111,110,102,105,103,40,41,41,44,32,123,10,32,32,32,32,32,32,32,32,109,111,100,101,58,32,99,114,101,97,116,101,67,111,114,101,77,111,100,101,40,109,111,100,101,44,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,10,32,32,32,32,32,32,125,41,41,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,82,101,110,100,101,114,67,111,110,102,105,103,40,99,111,110,102,105,103,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,95,97,32,61,32,99,111,110,102,105,103,44,32,123,32,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,44,32,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,32,125,32,61,32,95,97,44,32,114,101,115,116,67,111,110,102,105,103,32,61,32,95,95,111,98,106,82,101,115,116,40,95,97,44,32,91,34,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,34,44,32,34,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,34,93,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,32,61,32,95,95,115,112,114,101,97,100,80,114,111,112,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,123,125,44,32,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,41,44,32,114,101,115,116,67,111,110,102,105,103,41,44,32,123,10,32,32,32,32,32,32,32,32,47,47,32,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,32,105,115,32,97,32,115,112,101,99,105,97,108,32,99,97,115,101,44,32,105,116,32,115,104,111,117,108,100,32,98,101,32,115,101,116,32,116,111,32,116,104,101,32,100,101,102,97,117,108,116,32,118,97,108,117,101,32,105,102,32,105,116,39,115,32,110,111,116,32,112,114,111,118,105,100,101,100,10,32,32,32,32,32,32,32,32,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,58,32,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,32,124,124,32,103,101,116,68,101,102,97,117,108,116,68,80,82,40,41,44,10,32,32,32,32,32,32,32,32,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,58,32,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,32,33,61,32,110,117,108,108,32,63,32,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,32,58,32,116,114,117,101,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,105,102,32,40,73,83,95,66,82,79,87,83,69,82,32,38,38,32,116,104,105,115,46,95,99,97,110,118,97,115,32,105,110,115,116,97,110,99,101,111,102,32,72,84,77,76,67,97,110,118,97,115,69,108,101,109,101,110,116,41,32,123,10,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,46,97,117,116,111,82,101,115,105,122,101,41,32,123,10,32,32,32,32,32,32,32,32,32,32,67,97,110,118,97,115,82,101,115,105,122,101,79,98,115,101,114,118,101,114,46,111,98,115,101,114,118,101,40,116,104,105,115,46,95,99,97,110,118,97,115,44,32,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,67,97,110,118,97,115,82,101,115,105,122,101,79,98,115,101,114,118,101,114,46,117,110,111,98,115,101,114,118,101,40,116,104,105,115,46,95,99,97,110,118,97,115,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,46,102,114,101,101,122,101,79,110,79,102,102,115,99,114,101,101,110,41,32,123,10,32,32,32,32,32,32,32,32,32,32,79,102,102,115,99,114,101,101,110,79,98,115,101,114,118,101,114,46,111,98,115,101,114,118,101,40,116,104,105,115,46,95,99,97,110,118,97,115,44,32,116,104,105,115,41,59,10,32,32,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,32,32,79,102,102,115,99,114,101,101,110,79,98,115,101,114,118,101,114,46,117,110,111,98,115,101,114,118,101,40,116,104,105,115,46,95,99,97,110,118,97,115,41,59,10,32,32,32,32,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,105,115,70,114,111,122,101,110,41,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,117,110,102,114,101,101,122,101,40,41,59,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,108,111,97,100,65,110,105,109,97,116,105,111,110,40,97,110,105,109,97,116,105,111,110,73,100,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,32,124,124,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,97,99,116,105,118,101,65,110,105,109,97,116,105,111,110,73,100,40,41,32,61,61,61,32,97,110,105,109,97,116,105,111,110,73,100,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,99,111,110,115,116,32,108,111,97,100,101,100,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,108,111,97,100,65,110,105,109,97,116,105,111,110,40,97,110,105,109,97,116,105,111,110,73,100,44,32,116,104,105,115,46,95,99,97,110,118,97,115,46,119,105,100,116,104,44,32,116,104,105,115,46,95,99,97,110,118,97,115,46,104,101,105,103,104,116,41,59,10,32,32,32,32,32,32,105,102,32,40,108,111,97,100,101,100,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,32,116,121,112,101,58,32,34,108,111,97,100,34,32,125,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,114,101,115,105,122,101,40,41,59,10,32,32,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,101,118,101,110,116,77,97,110,97,103,101,114,46,100,105,115,112,97,116,99,104,40,123,10,32,32,32,32,32,32,32,32,32,32,116,121,112,101,58,32,34,108,111,97,100,69,114,114,111,114,34,44,10,32,32,32,32,32,32,32,32,32,32,101,114,114,111,114,58,32,110,101,119,32,69,114,114,111,114,40,96,70,97,105,108,101,100,32,116,111,32,97,110,105,109,97,116,105,111,110,32,58,36,123,97,110,105,109,97,116,105,111,110,73,100,125,96,41,10,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,115,101,116,77,97,114,107,101,114,40,109,97,114,107,101,114,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,67,111,110,102,105,103,40,95,95,115,112,114,101,97,100,80,114,111,112,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,123,125,44,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,111,110,102,105,103,40,41,41,44,32,123,10,32,32,32,32,32,32,32,32,109,97,114,107,101,114,10,32,32,32,32,32,32,125,41,41,59,10,32,32,32,32,125,10,32,32,32,32,109,97,114,107,101,114,115,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,99,111,110,115,116,32,109,97,114,107,101,114,115,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,109,97,114,107,101,114,115,40,41,59,10,32,32,32,32,32,32,105,102,32,40,109,97,114,107,101,114,115,41,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,117,108,116,32,61,32,91,93,59,10,32,32,32,32,32,32,32,32,102,111,114,32,40,108,101,116,32,105,32,61,32,48,59,32,105,32,60,32,109,97,114,107,101,114,115,46,115,105,122,101,40,41,59,32,105,32,43,61,32,49,41,32,123,10,32,32,32,32,32,32,32,32,32,32,99,111,110,115,116,32,109,97,114,107,101,114,32,61,32,109,97,114,107,101,114,115,46,103,101,116,40,105,41,59,10,32,32,32,32,32,32,32,32,32,32,114,101,115,117,108,116,46,112,117,115,104,40,123,10,32,32,32,32,32,32,32,32,32,32,32,32,110,97,109,101,58,32,109,97,114,107,101,114,46,110,97,109,101,44,10,32,32,32,32,32,32,32,32,32,32,32,32,116,105,109,101,58,32,109,97,114,107,101,114,46,116,105,109,101,44,10,32,32,32,32,32,32,32,32,32,32,32,32,100,117,114,97,116,105,111,110,58,32,109,97,114,107,101,114,46,100,117,114,97,116,105,111,110,10,32,32,32,32,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,114,101,116,117,114,110,32,114,101,115,117,108,116,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,91,93,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,84,104,101,109,101,40,116,104,101,109,101,73,100,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,99,111,110,115,116,32,108,111,97,100,101,100,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,84,104,101,109,101,40,116,104,101,109,101,73,100,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,114,101,110,100,101,114,40,41,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,108,111,97,100,101,100,59,10,32,32,32,32,125,10,32,32,32,32,114,101,115,101,116,84,104,101,109,101,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,114,101,115,101,116,84,104,101,109,101,40,41,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,84,104,101,109,101,68,97,116,97,40,116,104,101,109,101,68,97,116,97,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,99,111,110,115,116,32,108,111,97,100,101,100,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,84,104,101,109,101,68,97,116,97,40,116,104,101,109,101,68,97,116,97,41,59,10,32,32,32,32,32,32,116,104,105,115,46,95,114,101,110,100,101,114,40,41,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,108,111,97,100,101,100,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,83,108,111,116,115,40,115,108,111,116,115,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,83,108,111,116,115,40,115,108,111,116,115,41,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,76,97,121,111,117,116,40,108,97,121,111,117,116,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,32,124,124,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,67,111,110,102,105,103,40,95,95,115,112,114,101,97,100,80,114,111,112,115,40,95,95,115,112,114,101,97,100,86,97,108,117,101,115,40,123,125,44,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,99,111,110,102,105,103,40,41,41,44,32,123,10,32,32,32,32,32,32,32,32,108,97,121,111,117,116,58,32,99,114,101,97,116,101,67,111,114,101,76,97,121,111,117,116,40,108,97,121,111,117,116,44,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,10,32,32,32,32,32,32,125,41,41,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,86,105,101,119,112,111,114,116,40,120,44,32,121,44,32,119,105,100,116,104,44,32,104,101,105,103,104,116,41,32,123,10,32,32,32,32,32,32,105,102,32,40,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,101,116,86,105,101,119,112,111,114,116,40,120,44,32,121,44,32,119,105,100,116,104,44,32,104,101,105,103,104,116,41,59,10,32,32,32,32,125,10,32,32,32,32,115,116,97,116,105,99,32,115,101,116,87,97,115,109,85,114,108,40,117,114,108,41,32,123,10,32,32,32,32,32,32,68,111,116,76,111,116,116,105,101,87,97,115,109,76,111,97,100,101,114,46,115,101,116,87,97,115,109,85,114,108,40,117,114,108,41,59,10,32,32,32,32,125,10,32,32,32,32,108,111,97,100,83,116,97,116,101,77,97,99,104,105,110,101,40,115,116,97,116,101,77,97,99,104,105,110,101,73,100,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,76,111,97,100,40,115,116,97,116,101,77,97,99,104,105,110,101,73,100,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,115,116,97,114,116,83,116,97,116,101,77,97,99,104,105,110,101,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,32,61,61,61,32,110,117,108,108,32,124,124,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,61,61,61,32,110,117,108,108,41,32,114,101,116,117,114,110,32,102,97,108,115,101,59,10,32,32,32,32,32,32,99,111,110,115,116,32,111,112,101,110,85,114,108,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,46,99,114,101,97,116,101,68,101,102,97,117,108,116,79,112,101,110,85,82,76,40,41,59,10,32,32,32,32,32,32,99,111,110,115,116,32,115,116,97,114,116,101,100,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,116,97,116,101,77,97,99,104,105,110,101,83,116,97,114,116,40,111,112,101,110,85,114,108,41,59,10,32,32,32,32,32,32,105,102,32,40,115,116,97,114,116,101,100,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,115,101,116,117,112,83,116,97,116,101,77,97,99,104,105,110,101,76,105,115,116,101,110,101,114,115,40,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,115,116,97,114,116,101,100,59,10,32,32,32,32,125,10,32,32,32,32,115,116,111,112,83,116,97,116,101,77,97,99,104,105,110,101,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,99,111,110,115,116,32,115,116,111,112,112,101,100,32,61,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,83,116,111,112,40,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,32,32,105,102,32,40,115,116,111,112,112,101,100,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,108,101,97,110,117,112,83,116,97,116,101,77,97,99,104,105,110,101,76,105,115,116,101,110,101,114,115,40,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,115,116,111,112,112,101,100,59,10,32,32,32,32,125,10,32,32,32,32,95,103,101,116,80,111,105,110,116,101,114,80,111,115,105,116,105,111,110,40,101,118,101,110,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,99,116,32,61,32,116,104,105,115,46,95,99,97,110,118,97,115,46,103,101,116,66,111,117,110,100,105,110,103,67,108,105,101,110,116,82,101,99,116,40,41,59,10,32,32,32,32,32,32,99,111,110,115,116,32,115,99,97,108,101,88,32,61,32,116,104,105,115,46,95,99,97,110,118,97,115,46,119,105,100,116,104,32,47,32,114,101,99,116,46,119,105,100,116,104,59,10,32,32,32,32,32,32,99,111,110,115,116,32,115,99,97,108,101,89,32,61,32,116,104,105,115,46,95,99,97,110,118,97,115,46,104,101,105,103,104,116,32,47,32,114,101,99,116,46,104,101,105,103,104,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,32,61,32,116,104,105,115,46,95,114,101,110,100,101,114,67,111,110,102,105,103,46,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,32,124,124,32,119,105,110,100,111,119,46,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,32,124,124,32,49,59,10,32,32,32,32,32,32,99,111,110,115,116,32,120,32,61,32,40,101,118,101,110,116,46,99,108,105,101,110,116,88,32,45,32,114,101,99,116,46,108,101,102,116,41,32,42,32,115,99,97,108,101,88,32,47,32,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,59,10,32,32,32,32,32,32,99,111,110,115,116,32,121,32,61,32,40,101,118,101,110,116,46,99,108,105,101,110,116,89,32,45,32,114,101,99,116,46,116,111,112,41,32,42,32,115,99,97,108,101,89,32,47,32,100,101,118,105,99,101,80,105,120,101,108,82,97,116,105,111,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,123,10,32,32,32,32,32,32,32,32,120,44,10,32,32,32,32,32,32,32,32,121,10,32,32,32,32,32,32,125,59,10,32,32,32,32,125,10,32,32,32,32,95,111,110,80,111,105,110,116,101,114,85,112,40,101,118,101,110,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,123,32,120,44,32,121,32,125,32,61,32,116,104,105,115,46,95,103,101,116,80,111,105,110,116,101,114,80,111,115,105,116,105,111,110,40,101,118,101,110,116,41,59,10,32,32,32,32,32,32,116,104,105,115,46,112,111,115,116,80,111,105,110,116,101,114,85,112,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,10,32,32,32,32,95,111,110,80,111,105,110,116,101,114,68,111,119,110,40,101,118,101,110,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,123,32,120,44,32,121,32,125,32,61,32,116,104,105,115,46,95,103,101,116,80,111,105,110,116,101,114,80,111,115,105,116,105,111,110,40,101,118,101,110,116,41,59,10,32,32,32,32,32,32,116,104,105,115,46,112,111,115,116,80,111,105,110,116,101,114,68,111,119,110,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,10,32,32,32,32,95,111,110,80,111,105,110,116,101,114,77,111,118,101,40,101,118,101,110,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,123,32,120,44,32,121,32,125,32,61,32,116,104,105,115,46,95,103,101,116,80,111,105,110,116,101,114,80,111,115,105,116,105,111,110,40,101,118,101,110,116,41,59,10,32,32,32,32,32,32,116,104,105,115,46,112,111,115,116,80,111,105,110,116,101,114,77,111,118,101,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,10,32,32,32,32,95,111,110,80,111,105,110,116,101,114,69,110,116,101,114,40,101,118,101,110,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,123,32,120,44,32,121,32,125,32,61,32,116,104,105,115,46,95,103,101,116,80,111,105,110,116,101,114,80,111,115,105,116,105,111,110,40,101,118,101,110,116,41,59,10,32,32,32,32,32,32,116,104,105,115,46,112,111,115,116,80,111,105,110,116,101,114,69,110,116,101,114,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,10,32,32,32,32,95,111,110,80,111,105,110,116,101,114,76,101,97,118,101,40,101,118,101,110,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,123,32,120,44,32,121,32,125,32,61,32,116,104,105,115,46,95,103,101,116,80,111,105,110,116,101,114,80,111,115,105,116,105,111,110,40,101,118,101,110,116,41,59,10,32,32,32,32,32,32,116,104,105,115,46,112,111,115,116,80,111,105,110,116,101,114,69,120,105,116,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,10,32,32,32,32,112,111,115,116,80,111,105,110,116,101,114,85,112,69,118,101,110,116,40,120,44,32,121,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,80,111,115,116,80,111,105,110,116,101,114,85,112,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,10,32,32,32,32,112,111,115,116,80,111,105,110,116,101,114,68,111,119,110,69,118,101,110,116,40,120,44,32,121,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,80,111,115,116,80,111,105,110,116,101,114,68,111,119,110,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,10,32,32,32,32,112,111,115,116,80,111,105,110,116,101,114,77,111,118,101,69,118,101,110,116,40,120,44,32,121,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,80,111,115,116,80,111,105,110,116,101,114,77,111,118,101,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,10,32,32,32,32,112,111,115,116,80,111,105,110,116,101,114,69,110,116,101,114,69,118,101,110,116,40,120,44,32,121,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,80,111,115,116,80,111,105,110,116,101,114,69,110,116,101,114,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,10,32,32,32,32,112,111,115,116,80,111,105,110,116,101,114,69,120,105,116,69,118,101,110,116,40,120,44,32,121,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,80,111,115,116,80,111,105,110,116,101,114,69,120,105,116,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,10,32,32,32,32,103,101,116,83,116,97,116,101,77,97,99,104,105,110,101,76,105,115,116,101,110,101,114,115,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,33,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,114,101,116,117,114,110,32,91,93,59,10,32,32,32,32,32,32,99,111,110,115,116,32,108,105,115,116,101,110,101,114,115,86,101,99,116,111,114,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,46,115,116,97,116,101,77,97,99,104,105,110,101,70,114,97,109,101,119,111,114,107,83,101,116,117,112,40,41,59,10,32,32,32,32,32,32,99,111,110,115,116,32,108,105,115,116,101,110,101,114,115,32,61,32,91,93,59,10,32,32,32,32,32,32,102,111,114,32,40,108,101,116,32,105,32,61,32,48,59,32,105,32,60,32,108,105,115,116,101,110,101,114,115,86,101,99,116,111,114,46,115,105,122,101,40,41,59,32,105,32,43,61,32,49,41,32,123,10,32,32,32,32,32,32,32,32,108,105,115,116,101,110,101,114,115,46,112,117,115,104,40,108,105,115,116,101,110,101,114,115,86,101,99,116,111,114,46,103,101,116,40,105,41,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,108,105,115,116,101,110,101,114,115,59,10,32,32,32,32,125,10,32,32,32,32,95,115,101,116,117,112,83,116,97,116,101,77,97,99,104,105,110,101,76,105,115,116,101,110,101,114,115,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,73,83,95,66,82,79,87,83,69,82,32,38,38,32,116,104,105,115,46,95,99,97,110,118,97,115,32,105,110,115,116,97,110,99,101,111,102,32,72,84,77,76,67,97,110,118,97,115,69,108,101,109,101,110,116,32,38,38,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,32,33,61,61,32,110,117,108,108,32,38,38,32,116,104,105,115,46,105,115,76,111,97,100,101,100,41,32,123,10,32,32,32,32,32,32,32,32,99,111,110,115,116,32,108,105,115,116,101,110,101,114,115,32,61,32,116,104,105,115,46,103,101,116,83,116,97,116,101,77,97,99,104,105,110,101,76,105,115,116,101,110,101,114,115,40,41,59,10,32,32,32,32,32,32,32,32,105,102,32,40,108,105,115,116,101,110,101,114,115,46,105,110,99,108,117,100,101,115,40,34,80,111,105,110,116,101,114,85,112,34,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,97,100,100,69,118,101,110,116,76,105,115,116,101,110,101,114,40,34,112,111,105,110,116,101,114,117,112,34,44,32,116,104,105,115,46,95,112,111,105,110,116,101,114,85,112,77,101,116,104,111,100,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,108,105,115,116,101,110,101,114,115,46,105,110,99,108,117,100,101,115,40,34,80,111,105,110,116,101,114,68,111,119,110,34,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,97,100,100,69,118,101,110,116,76,105,115,116,101,110,101,114,40,34,112,111,105,110,116,101,114,100,111,119,110,34,44,32,116,104,105,115,46,95,112,111,105,110,116,101,114,68,111,119,110,77,101,116,104,111,100,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,108,105,115,116,101,110,101,114,115,46,105,110,99,108,117,100,101,115,40,34,80,111,105,110,116,101,114,77,111,118,101,34,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,97,100,100,69,118,101,110,116,76,105,115,116,101,110,101,114,40,34,112,111,105,110,116,101,114,109,111,118,101,34,44,32,116,104,105,115,46,95,112,111,105,110,116,101,114,77,111,118,101,77,101,116,104,111,100,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,108,105,115,116,101,110,101,114,115,46,105,110,99,108,117,100,101,115,40,34,80,111,105,110,116,101,114,69,110,116,101,114,34,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,97,100,100,69,118,101,110,116,76,105,115,116,101,110,101,114,40,34,112,111,105,110,116,101,114,101,110,116,101,114,34,44,32,116,104,105,115,46,95,112,111,105,110,116,101,114,69,110,116,101,114,77,101,116,104,111,100,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,105,102,32,40,108,105,115,116,101,110,101,114,115,46,105,110,99,108,117,100,101,115,40,34,80,111,105,110,116,101,114,69,120,105,116,34,41,41,32,123,10,32,32,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,97,100,100,69,118,101,110,116,76,105,115,116,101,110,101,114,40,34,112,111,105,110,116,101,114,108,101,97,118,101,34,44,32,116,104,105,115,46,95,112,111,105,110,116,101,114,69,120,105,116,77,101,116,104,111,100,41,59,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,95,99,108,101,97,110,117,112,83,116,97,116,101,77,97,99,104,105,110,101,76,105,115,116,101,110,101,114,115,40,41,32,123,10,32,32,32,32,32,32,105,102,32,40,73,83,95,66,82,79,87,83,69,82,32,38,38,32,116,104,105,115,46,95,99,97,110,118,97,115,32,105,110,115,116,97,110,99,101,111,102,32,72,84,77,76,67,97,110,118,97,115,69,108,101,109,101,110,116,41,32,123,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,114,101,109,111,118,101,69,118,101,110,116,76,105,115,116,101,110,101,114,40,34,112,111,105,110,116,101,114,117,112,34,44,32,116,104,105,115,46,95,112,111,105,110,116,101,114,85,112,77,101,116,104,111,100,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,114,101,109,111,118,101,69,118,101,110,116,76,105,115,116,101,110,101,114,40,34,112,111,105,110,116,101,114,100,111,119,110,34,44,32,116,104,105,115,46,95,112,111,105,110,116,101,114,68,111,119,110,77,101,116,104,111,100,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,114,101,109,111,118,101,69,118,101,110,116,76,105,115,116,101,110,101,114,40,34,112,111,105,110,116,101,114,109,111,118,101,34,44,32,116,104,105,115,46,95,112,111,105,110,116,101,114,77,111,118,101,77,101,116,104,111,100,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,114,101,109,111,118,101,69,118,101,110,116,76,105,115,116,101,110,101,114,40,34,112,111,105,110,116,101,114,101,110,116,101,114,34,44,32,116,104,105,115,46,95,112,111,105,110,116,101,114,69,110,116,101,114,77,101,116,104,111,100,41,59,10,32,32,32,32,32,32,32,32,116,104,105,115,46,95,99,97,110,118,97,115,46,114,101,109,111,118,101,69,118,101,110,116,76,105,115,116,101,110,101,114,40,34,112,111,105,110,116,101,114,108,101,97,118,101,34,44,32,116,104,105,115,46,95,112,111,105,110,116,101,114,69,120,105,116,77,101,116,104,111,100,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,32,32,108,111,97,100,83,116,97,116,101,77,97,99,104,105,110,101,68,97,116,97,40,115,116,97,116,101,77,97,99,104,105,110,101,68,97,116,97,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,76,111,97,100,68,97,116,97,40,115,116,97,116,101,77,97,99,104,105,110,101,68,97,116,97,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,97,110,105,109,97,116,105,111,110,83,105,122,101,40,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,44,32,95,99,44,32,95,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,119,105,100,116,104,32,61,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,97,110,105,109,97,116,105,111,110,83,105,122,101,40,41,46,103,101,116,40,48,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,48,59,10,32,32,32,32,32,32,99,111,110,115,116,32,104,101,105,103,104,116,32,61,32,40,95,100,32,61,32,40,95,99,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,99,46,97,110,105,109,97,116,105,111,110,83,105,122,101,40,41,46,103,101,116,40,49,41,41,32,33,61,32,110,117,108,108,32,63,32,95,100,32,58,32,48,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,123,10,32,32,32,32,32,32,32,32,119,105,100,116,104,44,10,32,32,32,32,32,32,32,32,104,101,105,103,104,116,10,32,32,32,32,32,32,125,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,83,116,97,116,101,77,97,99,104,105,110,101,66,111,111,108,101,97,110,67,111,110,116,101,120,116,40,110,97,109,101,44,32,118,97,108,117,101,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,83,101,116,66,111,111,108,101,97,110,73,110,112,117,116,40,110,97,109,101,44,32,118,97,108,117,101,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,83,116,97,116,101,77,97,99,104,105,110,101,78,117,109,101,114,105,99,67,111,110,116,101,120,116,40,110,97,109,101,44,32,118,97,108,117,101,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,83,101,116,78,117,109,101,114,105,99,73,110,112,117,116,40,110,97,109,101,44,32,118,97,108,117,101,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,115,101,116,83,116,97,116,101,77,97,99,104,105,110,101,83,116,114,105,110,103,67,111,110,116,101,120,116,40,110,97,109,101,44,32,118,97,108,117,101,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,115,116,97,116,101,77,97,99,104,105,110,101,83,101,116,83,116,114,105,110,103,73,110,112,117,116,40,110,97,109,101,44,32,118,97,108,117,101,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,102,97,108,115,101,59,10,32,32,32,32,125,10,32,32,32,32,47,42,42,10,32,32,32,32,32,42,32,71,101,116,32,116,104,101,32,79,114,105,101,110,116,101,100,32,66,111,117,110,100,105,110,103,32,66,111,120,32,40,79,66,66,41,32,112,111,105,110,116,115,32,111,102,32,97,32,108,97,121,101,114,32,98,121,32,105,116,115,32,110,97,109,101,10,32,32,32,32,32,42,32,64,112,97,114,97,109,32,108,97,121,101,114,78,97,109,101,32,45,32,84,104,101,32,110,97,109,101,32,111,102,32,116,104,101,32,108,97,121,101,114,10,32,32,32,32,32,42,32,64,114,101,116,117,114,110,115,32,65,110,32,97,114,114,97,121,32,111,102,32,56,32,110,117,109,98,101,114,115,32,114,101,112,114,101,115,101,110,116,105,110,103,32,52,32,112,111,105,110,116,115,32,40,120,44,121,41,32,111,102,32,116,104,101,32,79,66,66,32,105,110,32,99,108,111,99,107,119,105,115,101,32,111,114,100,101,114,32,115,116,97,114,116,105,110,103,32,102,114,111,109,32,116,111,112,45,108,101,102,116,10,32,32,32,32,32,42,32,32,32,32,32,32,32,32,32,32,91,120,48,44,32,121,48,44,32,120,49,44,32,121,49,44,32,120,50,44,32,121,50,44,32,120,51,44,32,121,51,93,10,32,32,32,32,32,42,10,32,32,32,32,32,42,32,64,101,120,97,109,112,108,101,10,32,32,32,32,32,42,32,96,96,96,116,121,112,101,115,99,114,105,112,116,10,32,32,32,32,32,42,32,47,47,32,68,114,97,119,32,97,32,112,111,108,121,103,111,110,32,97,114,111,117,110,100,32,116,104,101,32,108,97,121,101,114,32,39,76,97,121,101,114,32,49,39,10,32,32,32,32,32,42,32,100,111,116,76,111,116,116,105,101,46,97,100,100,69,118,101,110,116,76,105,115,116,101,110,101,114,40,39,114,101,110,100,101,114,39,44,32,40,41,32,61,62,32,123,10,32,32,32,32,32,42,32,32,32,99,111,110,115,116,32,111,98,98,80,111,105,110,116,115,32,61,32,100,111,116,76,111,116,116,105,101,46,103,101,116,76,97,121,101,114,66,111,117,110,100,105,110,103,66,111,120,40,39,76,97,121,101,114,32,49,39,41,59,10,32,32,32,32,32,42,10,32,32,32,32,32,42,32,32,32,105,102,32,40,111,98,98,80,111,105,110,116,115,41,32,123,10,32,32,32,32,32,42,32,32,32,32,32,99,111,110,116,101,120,116,46,98,101,103,105,110,80,97,116,104,40,41,59,10,32,32,32,32,32,42,32,32,32,32,32,99,111,110,116,101,120,116,46,109,111,118,101,84,111,40,111,98,98,80,111,105,110,116,115,91,48,93,44,32,111,98,98,80,111,105,110,116,115,91,49,93,41,59,32,47,47,32,70,105,114,115,116,32,112,111,105,110,116,10,32,32,32,32,32,42,32,32,32,32,32,99,111,110,116,101,120,116,46,108,105,110,101,84,111,40,111,98,98,80,111,105,110,116,115,91,50,93,44,32,111,98,98,80,111,105,110,116,115,91,51,93,41,59,32,47,47,32,83,101,99,111,110,100,32,112,111,105,110,116,10,32,32,32,32,32,42,32,32,32,32,32,99,111,110,116,101,120,116,46,108,105,110,101,84,111,40,111,98,98,80,111,105,110,116,115,91,52,93,44,32,111,98,98,80,111,105,110,116,115,91,53,93,41,59,32,47,47,32,84,104,105,114,100,32,112,111,105,110,116,10,32,32,32,32,32,42,32,32,32,32,32,99,111,110,116,101,120,116,46,108,105,110,101,84,111,40,111,98,98,80,111,105,110,116,115,91,54,93,44,32,111,98,98,80,111,105,110,116,115,91,55,93,41,59,32,47,47,32,70,111,117,114,116,104,32,112,111,105,110,116,10,32,32,32,32,32,42,32,32,32,32,32,99,111,110,116,101,120,116,46,99,108,111,115,101,80,97,116,104,40,41,59,10,32,32,32,32,32,42,32,32,32,32,32,99,111,110,116,101,120,116,46,115,116,114,111,107,101,40,41,59,10,32,32,32,32,32,42,32,32,32,125,10,32,32,32,32,32,42,32,125,41,59,10,32,32,32,32,32,42,32,96,96,96,10,32,32,32,32,32,42,47,10,32,32,32,32,103,101,116,76,97,121,101,114,66,111,117,110,100,105,110,103,66,111,120,40,108,97,121,101,114,78,97,109,101,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,59,10,32,32,32,32,32,32,99,111,110,115,116,32,98,111,117,110,100,115,32,61,32,40,95,97,32,61,32,116,104,105,115,46,95,100,111,116,76,111,116,116,105,101,67,111,114,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,103,101,116,76,97,121,101,114,66,111,117,110,100,115,40,108,97,121,101,114,78,97,109,101,41,59,10,32,32,32,32,32,32,105,102,32,40,33,98,111,117,110,100,115,41,32,114,101,116,117,114,110,32,118,111,105,100,32,48,59,10,32,32,32,32,32,32,105,102,32,40,98,111,117,110,100,115,46,115,105,122,101,40,41,32,33,61,61,32,56,41,32,114,101,116,117,114,110,32,118,111,105,100,32,48,59,10,32,32,32,32,32,32,99,111,110,115,116,32,112,111,105,110,116,115,32,61,32,91,93,59,10,32,32,32,32,32,32,102,111,114,32,40,108,101,116,32,105,32,61,32,48,59,32,105,32,60,32,56,59,32,105,32,43,61,32,49,41,32,123,10,32,32,32,32,32,32,32,32,112,111,105,110,116,115,46,112,117,115,104,40,98,111,117,110,100,115,46,103,101,116,40,105,41,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,112,111,105,110,116,115,59,10,32,32,32,32,125,10,32,32,32,32,115,116,97,116,105,99,32,116,114,97,110,115,102,111,114,109,84,104,101,109,101,84,111,76,111,116,116,105,101,83,108,111,116,115,40,116,104,101,109,101,44,32,115,108,111,116,115,41,32,123,10,32,32,32,32,32,32,118,97,114,32,95,97,44,32,95,98,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,40,95,98,32,61,32,40,95,97,32,61,32,95,68,111,116,76,111,116,116,105,101,46,95,119,97,115,109,77,111,100,117,108,101,41,32,61,61,32,110,117,108,108,32,63,32,118,111,105,100,32,48,32,58,32,95,97,46,116,114,97,110,115,102,111,114,109,84,104,101,109,101,84,111,76,111,116,116,105,101,83,108,111,116,115,40,116,104,101,109,101,44,32,115,108,111,116,115,41,41,32,33,61,32,110,117,108,108,32,63,32,95,98,32,58,32,34,34,59,10,32,32,32,32,125,10,32,32,125,59,10,32,32,95,95,112,117,98,108,105,99,70,105,101,108,100,40,95,68,111,116,76,111,116,116,105,101,44,32,34,95,119,97,115,109,77,111,100,117,108,101,34,44,32,110,117,108,108,41,59,10,32,32,118,97,114,32,68,111,116,76,111,116,116,105,101,32,61,32,95,68,111,116,76,111,116,116,105,101,59,10,10,32,32,47,47,32,115,114,99,47,119,111,114,107,101,114,47,100,111,116,108,111,116,116,105,101,46,119,111,114,107,101,114,46,116,115,10,32,32,118,97,114,32,105,110,115,116,97,110,99,101,115,77,97,112,32,61,32,47,42,32,64,95,95,80,85,82,69,95,95,32,42,47,32,110,101,119,32,77,97,112,40,41,59,10,32,32,118,97,114,32,101,118,101,110,116,72,97,110,100,108,101,114,77,97,112,32,61,32,123,10,32,32,32,32,114,101,97,100,121,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,82,101,97,100,121,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,99,111,109,112,108,101,116,101,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,67,111,109,112,108,101,116,101,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,108,111,97,100,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,108,111,97,100,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,76,111,97,100,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,108,111,97,100,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,108,111,97,100,69,114,114,111,114,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,108,111,97,100,69,114,114,111,114,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,76,111,97,100,69,114,114,111,114,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,108,111,97,100,69,114,114,111,114,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,114,101,110,100,101,114,69,114,114,111,114,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,110,100,101,114,69,114,114,111,114,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,82,101,110,100,101,114,69,114,114,111,114,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,114,101,110,100,101,114,69,114,114,111,114,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,108,111,111,112,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,108,111,111,112,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,76,111,111,112,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,108,111,111,112,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,112,108,97,121,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,112,108,97,121,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,80,108,97,121,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,112,108,97,121,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,112,97,117,115,101,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,112,97,117,115,101,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,80,97,117,115,101,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,112,97,117,115,101,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,116,111,112,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,115,116,111,112,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,83,116,111,112,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,115,116,111,112,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,102,114,97,109,101,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,102,114,97,109,101,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,70,114,97,109,101,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,102,114,97,109,101,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,114,101,110,100,101,114,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,110,100,101,114,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,82,101,110,100,101,114,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,114,101,110,100,101,114,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,102,114,101,101,122,101,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,102,114,101,101,122,101,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,70,114,101,101,122,101,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,102,114,101,101,122,101,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,117,110,102,114,101,101,122,101,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,117,110,102,114,101,101,122,101,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,85,110,102,114,101,101,122,101,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,117,110,102,114,101,101,122,101,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,100,101,115,116,114,111,121,58,32,40,105,110,115,116,97,110,99,101,73,100,41,32,61,62,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,100,101,115,116,114,111,121,69,118,101,110,116,32,61,32,101,118,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,34,34,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,34,111,110,68,101,115,116,114,111,121,34,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,58,32,123,10,32,32,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,44,10,32,32,32,32,32,32,32,32,32,32,101,118,101,110,116,58,32,100,101,115,116,114,111,121,69,118,101,110,116,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,10,32,32,125,59,10,32,32,118,97,114,32,99,111,109,109,97,110,100,115,32,61,32,123,10,32,32,32,32,103,101,116,68,111,116,76,111,116,116,105,101,73,110,115,116,97,110,99,101,83,116,97,116,101,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,99,111,110,115,116,32,115,116,97,116,101,32,61,32,123,10,32,32,32,32,32,32,32,32,108,111,111,112,67,111,117,110,116,58,32,105,110,115,116,97,110,99,101,46,108,111,111,112,67,111,117,110,116,44,10,32,32,32,32,32,32,32,32,105,115,76,111,97,100,101,100,58,32,105,110,115,116,97,110,99,101,46,105,115,76,111,97,100,101,100,44,10,32,32,32,32,32,32,32,32,105,115,80,97,117,115,101,100,58,32,105,110,115,116,97,110,99,101,46,105,115,80,97,117,115,101,100,44,10,32,32,32,32,32,32,32,32,105,115,80,108,97,121,105,110,103,58,32,105,110,115,116,97,110,99,101,46,105,115,80,108,97,121,105,110,103,44,10,32,32,32,32,32,32,32,32,105,115,83,116,111,112,112,101,100,58,32,105,110,115,116,97,110,99,101,46,105,115,83,116,111,112,112,101,100,44,10,32,32,32,32,32,32,32,32,105,115,70,114,111,122,101,110,58,32,105,110,115,116,97,110,99,101,46,105,115,70,114,111,122,101,110,44,10,32,32,32,32,32,32,32,32,108,111,111,112,58,32,105,110,115,116,97,110,99,101,46,108,111,111,112,44,10,32,32,32,32,32,32,32,32,109,111,100,101,58,32,105,110,115,116,97,110,99,101,46,109,111,100,101,44,10,32,32,32,32,32,32,32,32,115,112,101,101,100,58,32,105,110,115,116,97,110,99,101,46,115,112,101,101,100,44,10,32,32,32,32,32,32,32,32,99,117,114,114,101,110,116,70,114,97,109,101,58,32,105,110,115,116,97,110,99,101,46,99,117,114,114,101,110,116,70,114,97,109,101,44,10,32,32,32,32,32,32,32,32,116,111,116,97,108,70,114,97,109,101,115,58,32,105,110,115,116,97,110,99,101,46,116,111,116,97,108,70,114,97,109,101,115,44,10,32,32,32,32,32,32,32,32,100,117,114,97,116,105,111,110,58,32,105,110,115,116,97,110,99,101,46,100,117,114,97,116,105,111,110,44,10,32,32,32,32,32,32,32,32,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,58,32,105,110,115,116,97,110,99,101,46,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,44,10,32,32,32,32,32,32,32,32,114,101,110,100,101,114,67,111,110,102,105,103,58,32,105,110,115,116,97,110,99,101,46,114,101,110,100,101,114,67,111,110,102,105,103,44,10,32,32,32,32,32,32,32,32,109,97,114,107,101,114,58,32,105,110,115,116,97,110,99,101,46,109,97,114,107,101,114,44,10,32,32,32,32,32,32,32,32,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,58,32,105,110,115,116,97,110,99,101,46,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,44,10,32,32,32,32,32,32,32,32,109,97,114,107,101,114,115,58,32,105,110,115,116,97,110,99,101,46,109,97,114,107,101,114,115,40,41,44,10,32,32,32,32,32,32,32,32,97,99,116,105,118,101,65,110,105,109,97,116,105,111,110,73,100,58,32,105,110,115,116,97,110,99,101,46,97,99,116,105,118,101,65,110,105,109,97,116,105,111,110,73,100,44,10,32,32,32,32,32,32,32,32,97,99,116,105,118,101,84,104,101,109,101,73,100,58,32,105,110,115,116,97,110,99,101,46,97,99,116,105,118,101,84,104,101,109,101,73,100,44,10,32,32,32,32,32,32,32,32,97,117,116,111,112,108,97,121,58,32,105,110,115,116,97,110,99,101,46,97,117,116,111,112,108,97,121,44,10,32,32,32,32,32,32,32,32,115,101,103,109,101,110,116,58,32,105,110,115,116,97,110,99,101,46,115,101,103,109,101,110,116,44,10,32,32,32,32,32,32,32,32,108,97,121,111,117,116,58,32,105,110,115,116,97,110,99,101,46,108,97,121,111,117,116,44,10,32,32,32,32,32,32,32,32,115,101,103,109,101,110,116,68,117,114,97,116,105,111,110,58,32,105,110,115,116,97,110,99,101,46,115,101,103,109,101,110,116,68,117,114,97,116,105,111,110,44,10,32,32,32,32,32,32,32,32,105,115,82,101,97,100,121,58,32,105,110,115,116,97,110,99,101,46,105,115,82,101,97,100,121,44,10,32,32,32,32,32,32,32,32,109,97,110,105,102,101,115,116,58,32,105,110,115,116,97,110,99,101,46,109,97,110,105,102,101,115,116,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,123,10,32,32,32,32,32,32,32,32,115,116,97,116,101,10,32,32,32,32,32,32,125,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,76,97,121,111,117,116,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,108,97,121,111,117,116,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,108,97,121,111,117,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,101,116,76,97,121,111,117,116,40,108,97,121,111,117,116,41,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,123,10,32,32,32,32,32,32,32,32,115,117,99,99,101,115,115,58,32,116,114,117,101,10,32,32,32,32,32,32,125,59,10,32,32,32,32,125,44,10,32,32,32,32,103,101,116,83,116,97,116,101,77,97,99,104,105,110,101,76,105,115,116,101,110,101,114,115,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,103,101,116,83,116,97,116,101,77,97,99,104,105,110,101,76,105,115,116,101,110,101,114,115,40,41,59,10,32,32,32,32,125,44,10,32,32,32,32,112,111,115,116,80,111,105,110,116,101,114,68,111,119,110,69,118,101,110,116,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,120,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,120,59,10,32,32,32,32,32,32,99,111,110,115,116,32,121,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,121,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,112,111,115,116,80,111,105,110,116,101,114,68,111,119,110,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,44,10,32,32,32,32,112,111,115,116,80,111,105,110,116,101,114,69,110,116,101,114,69,118,101,110,116,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,120,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,120,59,10,32,32,32,32,32,32,99,111,110,115,116,32,121,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,121,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,112,111,115,116,80,111,105,110,116,101,114,69,110,116,101,114,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,44,10,32,32,32,32,112,111,115,116,80,111,105,110,116,101,114,69,120,105,116,69,118,101,110,116,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,120,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,120,59,10,32,32,32,32,32,32,99,111,110,115,116,32,121,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,121,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,112,111,115,116,80,111,105,110,116,101,114,69,120,105,116,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,44,10,32,32,32,32,112,111,115,116,80,111,105,110,116,101,114,77,111,118,101,69,118,101,110,116,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,120,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,120,59,10,32,32,32,32,32,32,99,111,110,115,116,32,121,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,121,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,112,111,115,116,80,111,105,110,116,101,114,77,111,118,101,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,44,10,32,32,32,32,112,111,115,116,80,111,105,110,116,101,114,85,112,69,118,101,110,116,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,120,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,120,59,10,32,32,32,32,32,32,99,111,110,115,116,32,121,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,121,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,112,111,115,116,80,111,105,110,116,101,114,85,112,69,118,101,110,116,40,120,44,32,121,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,116,97,114,116,83,116,97,116,101,77,97,99,104,105,110,101,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,115,116,97,114,116,83,116,97,116,101,77,97,99,104,105,110,101,40,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,116,111,112,83,116,97,116,101,77,97,99,104,105,110,101,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,115,116,111,112,83,116,97,116,101,77,97,99,104,105,110,101,40,41,59,10,32,32,32,32,125,44,10,32,32,32,32,108,111,97,100,83,116,97,116,101,77,97,99,104,105,110,101,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,115,116,97,116,101,77,97,99,104,105,110,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,115,116,97,116,101,77,97,99,104,105,110,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,108,111,97,100,83,116,97,116,101,77,97,99,104,105,110,101,40,115,116,97,116,101,77,97,99,104,105,110,101,73,100,41,59,10,32,32,32,32,125,44,10,32,32,32,32,108,111,97,100,83,116,97,116,101,77,97,99,104,105,110,101,68,97,116,97,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,115,116,97,116,101,77,97,99,104,105,110,101,68,97,116,97,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,115,116,97,116,101,77,97,99,104,105,110,101,68,97,116,97,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,108,111,97,100,83,116,97,116,101,77,97,99,104,105,110,101,68,97,116,97,40,115,116,97,116,101,77,97,99,104,105,110,101,68,97,116,97,41,59,10,32,32,32,32,125,44,10,32,32,32,32,99,114,101,97,116,101,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,99,111,110,102,105,103,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,99,111,110,102,105,103,59,10,32,32,32,32,32,32,99,111,110,115,116,32,119,105,100,116,104,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,119,105,100,116,104,59,10,32,32,32,32,32,32,99,111,110,115,116,32,104,101,105,103,104,116,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,104,101,105,103,104,116,59,10,32,32,32,32,32,32,105,102,32,40,105,110,115,116,97,110,99,101,115,77,97,112,46,104,97,115,40,105,110,115,116,97,110,99,101,73,100,41,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,97,108,114,101,97,100,121,32,101,120,105,115,116,115,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,110,101,119,32,68,111,116,76,111,116,116,105,101,40,99,111,110,102,105,103,41,59,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,99,97,110,118,97,115,46,104,101,105,103,104,116,32,61,32,104,101,105,103,104,116,59,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,99,97,110,118,97,115,46,119,105,100,116,104,32,61,32,119,105,100,116,104,59,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,115,77,97,112,46,115,101,116,40,105,110,115,116,97,110,99,101,73,100,44,32,105,110,115,116,97,110,99,101,41,59,10,32,32,32,32,32,32,99,111,110,115,116,32,101,118,101,110,116,115,32,61,32,91,10,32,32,32,32,32,32,32,32,34,99,111,109,112,108,101,116,101,34,44,10,32,32,32,32,32,32,32,32,34,102,114,97,109,101,34,44,10,32,32,32,32,32,32,32,32,34,108,111,97,100,34,44,10,32,32,32,32,32,32,32,32,34,108,111,97,100,69,114,114,111,114,34,44,10,32,32,32,32,32,32,32,32,34,114,101,110,100,101,114,69,114,114,111,114,34,44,10,32,32,32,32,32,32,32,32,34,108,111,111,112,34,44,10,32,32,32,32,32,32,32,32,34,112,97,117,115,101,34,44,10,32,32,32,32,32,32,32,32,34,112,108,97,121,34,44,10,32,32,32,32,32,32,32,32,34,115,116,111,112,34,44,10,32,32,32,32,32,32,32,32,34,100,101,115,116,114,111,121,34,44,10,32,32,32,32,32,32,32,32,34,102,114,101,101,122,101,34,44,10,32,32,32,32,32,32,32,32,34,117,110,102,114,101,101,122,101,34,44,10,32,32,32,32,32,32,32,32,34,114,101,110,100,101,114,34,44,10,32,32,32,32,32,32,32,32,34,114,101,97,100,121,34,10,32,32,32,32,32,32,93,59,10,32,32,32,32,32,32,101,118,101,110,116,115,46,102,111,114,69,97,99,104,40,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,97,100,100,69,118,101,110,116,76,105,115,116,101,110,101,114,40,101,118,101,110,116,44,32,101,118,101,110,116,72,97,110,100,108,101,114,77,97,112,91,101,118,101,110,116,93,40,105,110,115,116,97,110,99,101,73,100,41,41,59,10,32,32,32,32,32,32,125,41,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,123,10,32,32,32,32,32,32,32,32,105,110,115,116,97,110,99,101,73,100,10,32,32,32,32,32,32,125,59,10,32,32,32,32,125,44,10,32,32,32,32,100,101,115,116,114,111,121,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,114,101,116,117,114,110,59,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,100,101,115,116,114,111,121,40,41,59,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,115,77,97,112,46,100,101,108,101,116,101,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,125,44,10,32,32,32,32,102,114,101,101,122,101,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,102,114,101,101,122,101,40,41,59,10,32,32,32,32,125,44,10,32,32,32,32,108,111,97,100,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,99,111,110,102,105,103,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,99,111,110,102,105,103,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,108,111,97,100,40,99,111,110,102,105,103,41,59,10,32,32,32,32,125,44,10,32,32,32,32,108,111,97,100,65,110,105,109,97,116,105,111,110,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,97,110,105,109,97,116,105,111,110,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,97,110,105,109,97,116,105,111,110,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,108,111,97,100,65,110,105,109,97,116,105,111,110,40,97,110,105,109,97,116,105,111,110,73,100,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,84,104,101,109,101,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,116,104,101,109,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,116,104,101,109,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,115,101,116,84,104,101,109,101,40,116,104,101,109,101,73,100,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,84,104,101,109,101,68,97,116,97,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,116,104,101,109,101,68,97,116,97,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,116,104,101,109,101,68,97,116,97,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,115,101,116,84,104,101,109,101,68,97,116,97,40,116,104,101,109,101,68,97,116,97,41,59,10,32,32,32,32,125,44,10,32,32,32,32,112,97,117,115,101,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,112,97,117,115,101,40,41,59,10,32,32,32,32,125,44,10,32,32,32,32,112,108,97,121,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,112,108,97,121,40,41,59,10,32,32,32,32,125,44,10,32,32,32,32,114,101,115,105,122,101,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,119,105,100,116,104,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,119,105,100,116,104,59,10,32,32,32,32,32,32,99,111,110,115,116,32,104,101,105,103,104,116,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,104,101,105,103,104,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,99,97,110,118,97,115,46,104,101,105,103,104,116,32,61,32,104,101,105,103,104,116,59,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,99,97,110,118,97,115,46,119,105,100,116,104,32,61,32,119,105,100,116,104,59,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,114,101,115,105,122,101,40,41,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,123,10,32,32,32,32,32,32,32,32,115,117,99,99,101,115,115,58,32,116,114,117,101,10,32,32,32,32,32,32,125,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,66,97,99,107,103,114,111,117,110,100,67,111,108,111,114,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,101,116,66,97,99,107,103,114,111,117,110,100,67,111,108,111,114,40,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,70,114,97,109,101,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,102,114,97,109,101,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,102,114,97,109,101,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,101,116,70,114,97,109,101,40,102,114,97,109,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,77,111,100,101,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,109,111,100,101,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,109,111,100,101,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,101,116,77,111,100,101,40,109,111,100,101,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,82,101,110,100,101,114,67,111,110,102,105,103,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,110,100,101,114,67,111,110,102,105,103,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,114,101,110,100,101,114,67,111,110,102,105,103,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,101,116,82,101,110,100,101,114,67,111,110,102,105,103,40,114,101,110,100,101,114,67,111,110,102,105,103,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,83,101,103,109,101,110,116,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,115,101,103,109,101,110,116,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,115,101,103,109,101,110,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,101,116,83,101,103,109,101,110,116,40,115,101,103,109,101,110,116,91,48,93,44,32,115,101,103,109,101,110,116,91,49,93,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,83,112,101,101,100,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,115,112,101,101,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,115,112,101,101,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,101,116,83,112,101,101,100,40,115,112,101,101,100,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,85,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,101,116,85,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,40,117,115,101,70,114,97,109,101,73,110,116,101,114,112,111,108,97,116,105,111,110,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,87,97,115,109,85,114,108,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,68,111,116,76,111,116,116,105,101,46,115,101,116,87,97,115,109,85,114,108,40,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,117,114,108,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,116,111,112,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,116,111,112,40,41,59,10,32,32,32,32,125,44,10,32,32,32,32,117,110,102,114,101,101,122,101,58,32,40,114,101,113,117,101,115,116,41,32,61,62,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,117,110,102,114,101,101,122,101,40,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,86,105,101,119,112,111,114,116,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,120,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,120,59,10,32,32,32,32,32,32,99,111,110,115,116,32,121,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,121,59,10,32,32,32,32,32,32,99,111,110,115,116,32,119,105,100,116,104,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,119,105,100,116,104,59,10,32,32,32,32,32,32,99,111,110,115,116,32,104,101,105,103,104,116,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,104,101,105,103,104,116,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,110,115,116,97,110,99,101,46,115,101,116,86,105,101,119,112,111,114,116,40,120,44,32,121,44,32,119,105,100,116,104,44,32,104,101,105,103,104,116,41,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,77,97,114,107,101,114,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,109,97,114,107,101,114,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,109,97,114,107,101,114,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,101,116,77,97,114,107,101,114,40,109,97,114,107,101,114,41,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,123,10,32,32,32,32,32,32,32,32,115,117,99,99,101,115,115,58,32,116,114,117,101,10,32,32,32,32,32,32,125,59,10,32,32,32,32,125,44,10,32,32,32,32,115,101,116,76,111,111,112,40,114,101,113,117,101,115,116,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,73,100,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,105,110,115,116,97,110,99,101,73,100,59,10,32,32,32,32,32,32,99,111,110,115,116,32,108,111,111,112,32,61,32,114,101,113,117,101,115,116,46,112,97,114,97,109,115,46,108,111,111,112,59,10,32,32,32,32,32,32,99,111,110,115,116,32,105,110,115,116,97,110,99,101,32,61,32,105,110,115,116,97,110,99,101,115,77,97,112,46,103,101,116,40,105,110,115,116,97,110,99,101,73,100,41,59,10,32,32,32,32,32,32,105,102,32,40,33,105,110,115,116,97,110,99,101,41,32,123,10,32,32,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,73,110,115,116,97,110,99,101,32,119,105,116,104,32,105,100,32,36,123,105,110,115,116,97,110,99,101,73,100,125,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,96,41,59,10,32,32,32,32,32,32,125,10,32,32,32,32,32,32,105,110,115,116,97,110,99,101,46,115,101,116,76,111,111,112,40,108,111,111,112,41,59,10,32,32,32,32,32,32,114,101,116,117,114,110,32,123,10,32,32,32,32,32,32,32,32,115,117,99,99,101,115,115,58,32,116,114,117,101,10,32,32,32,32,32,32,125,59,10,32,32,32,32,125,10,32,32,125,59,10,32,32,102,117,110,99,116,105,111,110,32,101,120,101,99,117,116,101,67,111,109,109,97,110,100,40,114,112,99,82,101,113,117,101,115,116,41,32,123,10,32,32,32,32,99,111,110,115,116,32,109,101,116,104,111,100,32,61,32,114,112,99,82,101,113,117,101,115,116,46,109,101,116,104,111,100,59,10,32,32,32,32,105,102,32,40,116,121,112,101,111,102,32,99,111,109,109,97,110,100,115,91,109,101,116,104,111,100,93,32,61,61,61,32,34,102,117,110,99,116,105,111,110,34,41,32,123,10,32,32,32,32,32,32,114,101,116,117,114,110,32,99,111,109,109,97,110,100,115,91,109,101,116,104,111,100,93,40,114,112,99,82,101,113,117,101,115,116,41,59,10,32,32,32,32,125,32,101,108,115,101,32,123,10,32,32,32,32,32,32,116,104,114,111,119,32,110,101,119,32,69,114,114,111,114,40,96,77,101,116,104,111,100,32,36,123,109,101,116,104,111,100,125,32,105,115,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,32,105,110,32,99,111,109,109,97,110,100,115,46,96,41,59,10,32,32,32,32,125,10,32,32,125,10,32,32,115,101,108,102,46,111,110,109,101,115,115,97,103,101,32,61,32,40,101,118,101,110,116,41,32,61,62,32,123,10,32,32,32,32,116,114,121,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,117,108,116,32,61,32,101,120,101,99,117,116,101,67,111,109,109,97,110,100,40,101,118,101,110,116,46,100,97,116,97,41,59,10,32,32,32,32,32,32,99,111,110,115,116,32,114,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,101,118,101,110,116,46,100,97,116,97,46,105,100,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,101,118,101,110,116,46,100,97,116,97,46,109,101,116,104,111,100,44,10,32,32,32,32,32,32,32,32,114,101,115,117,108,116,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,114,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,32,99,97,116,99,104,32,40,101,114,114,111,114,41,32,123,10,32,32,32,32,32,32,99,111,110,115,116,32,101,114,114,111,114,82,101,115,112,111,110,115,101,32,61,32,123,10,32,32,32,32,32,32,32,32,105,100,58,32,101,118,101,110,116,46,100,97,116,97,46,105,100,44,10,32,32,32,32,32,32,32,32,109,101,116,104,111,100,58,32,101,118,101,110,116,46,100,97,116,97,46,109,101,116,104,111,100,44,10,32,32,32,32,32,32,32,32,101,114,114,111,114,58,32,101,114,114,111,114,46,109,101,115,115,97,103,101,10,32,32,32,32,32,32,125,59,10,32,32,32,32,32,32,115,101,108,102,46,112,111,115,116,77,101,115,115,97,103,101,40,101,114,114,111,114,82,101,115,112,111,110,115,101,41,59,10,32,32,32,32,125,10,32,32,125,59,10,32,32,118,97,114,32,100,117,109,109,121,32,61,32,34,34,59,10,32,32,118,97,114,32,100,111,116,108,111,116,116,105,101,95,119,111,114,107,101,114,95,100,101,102,97,117,108,116,32,61,32,100,117,109,109,121,59,10,125,41,40,41,59,10])],{type:"application/javascript"}),a=URL.createObjectURL(r),h=new Worker(a);return URL.revokeObjectURL(a),h}},q3=I2;var Y1=class{constructor(){b(this,"_workers",new Map);b(this,"_animationWorkerMap",new Map);}getWorker(r){return this._workers.has(r)||this._workers.set(r,new q3),this._workers.get(r)}assignAnimationToWorker(r,a){this._animationWorkerMap.set(r,a);}unassignAnimationFromWorker(r){this._animationWorkerMap.delete(r);}sendMessage(r,a,h){this.getWorker(r).postMessage(a,h||[]);}terminateWorker(r){let a=this._workers.get(r);a&&(a.terminate(),this._workers.delete(r));}};function J3(v,r){if(v instanceof HTMLCanvasElement){let{height:a,width:h}=v.getBoundingClientRect();if(a!==0&&h!==0)return {width:h*r,height:a*r}}return {width:v.width,height:v.height}}function G3(){return Date.now().toString(36)+Math.random().toString(36).substr(2,9)}var Y=class Y{constructor(r){b(this,"_eventManager",new h1);b(this,"_id");b(this,"_worker");b(this,"_canvas");b(this,"_dotLottieInstanceState",{loopCount:0,markers:[],autoplay:!1,backgroundColor:"",currentFrame:0,duration:0,loop:!1,mode:"forward",segment:[0,0],segmentDuration:0,speed:1,totalFrames:0,isLoaded:!1,isPlaying:!1,isPaused:!1,isStopped:!0,isFrozen:!1,useFrameInterpolation:!1,renderConfig:{devicePixelRatio:e1()},activeAnimationId:"",activeThemeId:"",layout:void 0,marker:void 0,isReady:!1,manifest:null});b(this,"_created",!1);b(this,"_pointerUpMethod");b(this,"_pointerDownMethod");b(this,"_pointerMoveMethod");b(this,"_pointerEnterMethod");b(this,"_pointerExitMethod");var h,d,g;this._canvas=r.canvas,this._id=`dotlottie-${G3()}`;let a=r.workerId||"defaultWorker";this._worker=Y._workerManager.getWorker(a),Y._workerManager.assignAnimationToWorker(this._id,a),Y._wasmUrl&&this._sendMessage("setWasmUrl",{url:Y._wasmUrl}),this._create(z(D({},r),{renderConfig:z(D({},r.renderConfig),{devicePixelRatio:((h=r.renderConfig)==null?void 0:h.devicePixelRatio)||e1(),freezeOnOffscreen:(g=(d=r.renderConfig)==null?void 0:d.freezeOnOffscreen)!=null?g:!0})})),this._worker.addEventListener("message",this._handleWorkerEvent.bind(this)),this._pointerUpMethod=this._onPointerUp.bind(this),this._pointerDownMethod=this._onPointerDown.bind(this),this._pointerMoveMethod=this._onPointerMove.bind(this),this._pointerEnterMethod=this._onPointerEnter.bind(this),this._pointerExitMethod=this._onPointerLeave.bind(this);}_handleWorkerEvent(r){return E(this,null,function*(){let a=r.data;a.id||(a.method==="onLoad"&&a.result.instanceId===this._id&&(yield this._updateDotLottieInstanceState(),this._eventManager.dispatch(a.result.event),O&&this._canvas instanceof HTMLCanvasElement&&(this._dotLottieInstanceState.renderConfig.freezeOnOffscreen&&H.observe(this._canvas,this),this._dotLottieInstanceState.renderConfig.autoResize&&N.observe(this._canvas,this))),a.method==="onComplete"&&a.result.instanceId===this._id&&(yield this._updateDotLottieInstanceState(),this._eventManager.dispatch(a.result.event)),a.method==="onDestroy"&&a.result.instanceId===this._id&&this._eventManager.dispatch(a.result.event),a.method==="onUnfreeze"&&a.result.instanceId===this._id&&(yield this._updateDotLottieInstanceState(),this._dotLottieInstanceState.isFrozen=!1,this._eventManager.dispatch(a.result.event)),a.method==="onFrame"&&a.result.instanceId===this._id&&(this._dotLottieInstanceState.currentFrame=a.result.event.currentFrame,this._eventManager.dispatch(a.result.event)),a.method==="onRender"&&a.result.instanceId===this._id&&this._eventManager.dispatch(a.result.event),a.method==="onFreeze"&&a.result.instanceId===this._id&&(yield this._updateDotLottieInstanceState(),this._eventManager.dispatch(a.result.event)),a.method==="onPause"&&a.result.instanceId===this._id&&(yield this._updateDotLottieInstanceState(),this._eventManager.dispatch(a.result.event)),a.method==="onPlay"&&a.result.instanceId===this._id&&(yield this._updateDotLottieInstanceState(),this._eventManager.dispatch(a.result.event)),a.method==="onStop"&&a.result.instanceId===this._id&&(yield this._updateDotLottieInstanceState(),this._eventManager.dispatch(a.result.event)),a.method==="onLoadError"&&a.result.instanceId===this._id&&(yield this._updateDotLottieInstanceState(),this._eventManager.dispatch(a.result.event)),a.method==="onRenderError"&&a.result.instanceId===this._id&&this._eventManager.dispatch(a.result.event),a.method==="onReady"&&a.result.instanceId===this._id&&(yield this._updateDotLottieInstanceState(),this._eventManager.dispatch(a.result.event)),a.method==="onLoop"&&a.result.instanceId===this._id&&(yield this._updateDotLottieInstanceState(),this._eventManager.dispatch(a.result.event)));})}_create(r){return E(this,null,function*(){var d;let a;this._canvas instanceof HTMLCanvasElement?a=this._canvas.transferControlToOffscreen():a=this._canvas;let{instanceId:h}=yield this._sendMessage("create",D({instanceId:this._id,config:z(D({},r),{canvas:a})},J3(this._canvas,((d=r.renderConfig)==null?void 0:d.devicePixelRatio)||e1())),[a]);if(h!==this._id)throw new Error("Instance ID mismatch");this._created=!0,yield this._updateDotLottieInstanceState();})}get loopCount(){return this._dotLottieInstanceState.loopCount}get isLoaded(){return this._dotLottieInstanceState.isLoaded}get isPlaying(){return this._dotLottieInstanceState.isPlaying}get isPaused(){return this._dotLottieInstanceState.isPaused}get isStopped(){return this._dotLottieInstanceState.isStopped}get currentFrame(){return this._dotLottieInstanceState.currentFrame}get isFrozen(){return this._dotLottieInstanceState.isFrozen}get segmentDuration(){return this._dotLottieInstanceState.segmentDuration}get totalFrames(){return this._dotLottieInstanceState.totalFrames}get segment(){return this._dotLottieInstanceState.segment}get speed(){return this._dotLottieInstanceState.speed}get duration(){return this._dotLottieInstanceState.duration}get isReady(){return this._dotLottieInstanceState.isReady}get mode(){return this._dotLottieInstanceState.mode}get canvas(){return this._canvas}get autoplay(){return this._dotLottieInstanceState.autoplay}get backgroundColor(){return this._dotLottieInstanceState.backgroundColor}get loop(){return this._dotLottieInstanceState.loop}get useFrameInterpolation(){return this._dotLottieInstanceState.useFrameInterpolation}get renderConfig(){return this._dotLottieInstanceState.renderConfig}get manifest(){return this._dotLottieInstanceState.manifest}get activeAnimationId(){return this._dotLottieInstanceState.activeAnimationId}get marker(){return this._dotLottieInstanceState.marker}get activeThemeId(){return this._dotLottieInstanceState.activeThemeId}get layout(){return this._dotLottieInstanceState.layout}play(){return E(this,null,function*(){this._created&&(yield this._sendMessage("play",{instanceId:this._id}),yield this._updateDotLottieInstanceState(),O&&this._canvas instanceof HTMLCanvasElement&&this._dotLottieInstanceState.renderConfig.freezeOnOffscreen&&!G1(this._canvas)&&(yield this.freeze()));})}pause(){return E(this,null,function*(){this._created&&(yield this._sendMessage("pause",{instanceId:this._id}),yield this._updateDotLottieInstanceState());})}stop(){return E(this,null,function*(){this._created&&(yield this._sendMessage("stop",{instanceId:this._id}),yield this._updateDotLottieInstanceState());})}setSpeed(r){return E(this,null,function*(){this._created&&(yield this._sendMessage("setSpeed",{instanceId:this._id,speed:r}),yield this._updateDotLottieInstanceState());})}setMode(r){return E(this,null,function*(){this._created&&(yield this._sendMessage("setMode",{instanceId:this._id,mode:r}),yield this._updateDotLottieInstanceState());})}setFrame(r){return E(this,null,function*(){this._created&&(yield this._sendMessage("setFrame",{frame:r,instanceId:this._id}),yield this._updateDotLottieInstanceState());})}setSegment(r,a){return E(this,null,function*(){this._created&&(yield this._sendMessage("setSegment",{instanceId:this._id,segment:[r,a]}),yield this._updateDotLottieInstanceState());})}setRenderConfig(r){return E(this,null,function*(){if(!this._created)return;let g=r,{devicePixelRatio:a,freezeOnOffscreen:h}=g,d=V1(g,["devicePixelRatio","freezeOnOffscreen"]);yield this._sendMessage("setRenderConfig",{instanceId:this._id,renderConfig:z(D(D({},this._dotLottieInstanceState.renderConfig),d),{devicePixelRatio:a||e1(),freezeOnOffscreen:h!=null?h:!0})}),yield this._updateDotLottieInstanceState(),O&&this._canvas instanceof HTMLCanvasElement&&(this._dotLottieInstanceState.renderConfig.autoResize?N.observe(this._canvas,this):N.unobserve(this._canvas),this._dotLottieInstanceState.renderConfig.freezeOnOffscreen?H.observe(this._canvas,this):(H.unobserve(this._canvas),this._dotLottieInstanceState.isFrozen&&(yield this.unfreeze())));})}setUseFrameInterpolation(r){return E(this,null,function*(){this._created&&(yield this._sendMessage("setUseFrameInterpolation",{instanceId:this._id,useFrameInterpolation:r}),yield this._updateDotLottieInstanceState());})}setTheme(r){return E(this,null,function*(){if(!this._created)return !1;let a=this._sendMessage("setTheme",{instanceId:this._id,themeId:r});return yield this._updateDotLottieInstanceState(),a})}load(r){return E(this,null,function*(){this._created&&(yield this._sendMessage("load",{config:r,instanceId:this._id}),yield this._updateDotLottieInstanceState());})}setLoop(r){return E(this,null,function*(){this._created&&(yield this._sendMessage("setLoop",{instanceId:this._id,loop:r}),yield this._updateDotLottieInstanceState());})}resize(){return E(this,null,function*(){if(!this._created)return;let{height:r,width:a}=J3(this._canvas,this._dotLottieInstanceState.renderConfig.devicePixelRatio||e1());yield this._sendMessage("resize",{height:r,instanceId:this._id,width:a}),yield this._updateDotLottieInstanceState();})}destroy(){return E(this,null,function*(){this._created&&(this._created=!1,yield this._sendMessage("destroy",{instanceId:this._id}),this._cleanupStateMachineListeners(),Y._workerManager.unassignAnimationFromWorker(this._id),this._eventManager.removeAllEventListeners(),O&&this._canvas instanceof HTMLCanvasElement&&(H.unobserve(this._canvas),N.unobserve(this._canvas)));})}freeze(){return E(this,null,function*(){this._created&&(yield this._sendMessage("freeze",{instanceId:this._id}),yield this._updateDotLottieInstanceState());})}unfreeze(){return E(this,null,function*(){this._created&&(yield this._sendMessage("unfreeze",{instanceId:this._id}),yield this._updateDotLottieInstanceState());})}setBackgroundColor(r){return E(this,null,function*(){this._created&&(yield this._sendMessage("setBackgroundColor",{instanceId:this._id,backgroundColor:r}),yield this._updateDotLottieInstanceState());})}loadAnimation(r){return E(this,null,function*(){this._created&&(yield this._sendMessage("loadAnimation",{animationId:r,instanceId:this._id}),yield this._updateDotLottieInstanceState());})}setLayout(r){return E(this,null,function*(){this._created&&(yield this._sendMessage("setLayout",{instanceId:this._id,layout:r}),yield this._updateDotLottieInstanceState());})}_updateDotLottieInstanceState(){return E(this,null,function*(){if(!this._created)return;let r=yield this._sendMessage("getDotLottieInstanceState",{instanceId:this._id});this._dotLottieInstanceState=r.state;})}markers(){return this._dotLottieInstanceState.markers}setMarker(r){return E(this,null,function*(){this._created&&(yield this._sendMessage("setMarker",{instanceId:this._id,marker:r}),yield this._updateDotLottieInstanceState());})}setThemeData(r){return E(this,null,function*(){if(!this._created)return !1;let a=yield this._sendMessage("setThemeData",{instanceId:this._id,themeData:r});return yield this._updateDotLottieInstanceState(),a})}setViewport(r,a,h,d){return E(this,null,function*(){return this._created?this._sendMessage("setViewport",{x:r,y:a,width:h,height:d,instanceId:this._id}):!1})}_sendMessage(r,a,h){return E(this,null,function*(){let d={id:`dotlottie-request-${G3()}`,method:r,params:a};return this._worker.postMessage(d,h||[]),new Promise((g,T)=>{let R=j=>{let $=j.data;$.id===d.id&&(this._worker.removeEventListener("message",R),$.error?T(new Error(`Failed to execute method ${r}: ${$.error}`)):g($.result));};this._worker.addEventListener("message",R);})})}addEventListener(r,a){this._eventManager.addEventListener(r,a);}removeEventListener(r,a){this._eventManager.removeEventListener(r,a);}static setWasmUrl(r){Y._wasmUrl=r;}loadStateMachine(r){return E(this,null,function*(){if(!this._created)return !1;let a=yield this._sendMessage("loadStateMachine",{instanceId:this._id,stateMachineId:r});return yield this._updateDotLottieInstanceState(),a})}loadStateMachineData(r){return E(this,null,function*(){if(!this._created)return !1;let a=yield this._sendMessage("loadStateMachineData",{instanceId:this._id,stateMachineData:r});return yield this._updateDotLottieInstanceState(),a})}startStateMachine(){return E(this,null,function*(){if(!this._created)return !1;this._setupStateMachineListeners();let r=yield this._sendMessage("startStateMachine",{instanceId:this._id});return yield this._updateDotLottieInstanceState(),r})}stopStateMachine(){return E(this,null,function*(){return this._created?(this._cleanupStateMachineListeners(),this._sendMessage("stopStateMachine",{instanceId:this._id})):!1})}getStateMachineListeners(){return E(this,null,function*(){return this._created?this._sendMessage("getStateMachineListeners",{instanceId:this._id}):[]})}_getPointerPosition(r){let a=this._canvas.getBoundingClientRect(),h=this._canvas.width/a.width,d=this._canvas.height/a.height,g=this._dotLottieInstanceState.renderConfig.devicePixelRatio||window.devicePixelRatio||1,T=(r.clientX-a.left)*h/g,R=(r.clientY-a.top)*d/g;return {x:T,y:R}}_onPointerUp(r){let{x:a,y:h}=this._getPointerPosition(r);this._sendMessage("postPointerUpEvent",{instanceId:this._id,x:a,y:h});}_onPointerDown(r){let{x:a,y:h}=this._getPointerPosition(r);this._sendMessage("postPointerDownEvent",{instanceId:this._id,x:a,y:h});}_onPointerMove(r){let{x:a,y:h}=this._getPointerPosition(r);this._sendMessage("postPointerMoveEvent",{instanceId:this._id,x:a,y:h});}_onPointerEnter(r){let{x:a,y:h}=this._getPointerPosition(r);this._sendMessage("postPointerEnterEvent",{instanceId:this._id,x:a,y:h});}_onPointerLeave(r){let{x:a,y:h}=this._getPointerPosition(r);this._sendMessage("postPointerExitEvent",{instanceId:this._id,x:a,y:h});}_setupStateMachineListeners(){return E(this,null,function*(){if(O&&this._canvas instanceof HTMLCanvasElement&&this.isLoaded){let r=yield this._sendMessage("getStateMachineListeners",{instanceId:this._id});r.includes("PointerUp")&&this._canvas.addEventListener("pointerup",this._pointerUpMethod),r.includes("PointerDown")&&this._canvas.addEventListener("pointerdown",this._pointerDownMethod),r.includes("PointerMove")&&this._canvas.addEventListener("pointermove",this._pointerMoveMethod),r.includes("PointerEnter")&&this._canvas.addEventListener("pointerenter",this._pointerEnterMethod),r.includes("PointerExit")&&this._canvas.addEventListener("pointerleave",this._pointerExitMethod);}})}_cleanupStateMachineListeners(){O&&this._canvas instanceof HTMLCanvasElement&&(this._canvas.removeEventListener("pointerup",this._pointerUpMethod),this._canvas.removeEventListener("pointerdown",this._pointerDownMethod),this._canvas.removeEventListener("pointermove",this._pointerMoveMethod),this._canvas.removeEventListener("pointerenter",this._pointerEnterMethod),this._canvas.removeEventListener("pointerleave",this._pointerExitMethod));}};b(Y,"_workerManager",new Y1),b(Y,"_wasmUrl","");var Y3=Y;


//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPlugin: () => (/* binding */ CSSPlugin),
/* harmony export */   _createElement: () => (/* binding */ _createElement),
/* harmony export */   _getBBox: () => (/* binding */ _getBBox),
/* harmony export */   checkPrefix: () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _reverting,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle(property, isNotCSS) {
  var _this = this;

  var target = this.target,
      style = target.style,
      cache = target._gsap;

  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.

      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function (p) {
        return _saveStyle.call(_this, p, isNotCSS);
      });
    }

    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }

    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }

    property = _transformProp;
  }

  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 3) {
    // stored like this: property, isNotCSS, value
    if (!props[i + 1]) {
      props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    } else if (props[i + 1] === 2) {
      // non-CSS value (function-based)
      target[props[i]](props[i + 2]);
    } else {
      // non-CSS value (not function-based)
      target[props[i]] = props[i + 2];
    }
  }

  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }

    i = _reverting();

    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);

      if (cache.zOrigin && style[_transformOriginProp]) {
        style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.

        cache.zOrigin = 0;
        cache.renderTransform();
      }

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

  properties && target.style && target.nodeType && properties.split(",").forEach(function (p) {
    return saver.save(p);
  }); // make sure it's a DOM node too.

  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.reverting;
    _pluginInitted = 1;
  }
},
    _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var owner = target.ownerSVGElement,
      svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      clone = target.cloneNode(true),
      bbox;

  clone.style.display = "block";
  svg.appendChild(clone);

  _docElement.appendChild(svg);

  try {
    bbox = clone.getBBox();
  } catch (e) {}

  svg.removeChild(clone);

  _docElement.removeChild(svg);

  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds, cloned;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getReparentedCloneBBox(target);
    cloned = 1;
  }

  bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style,
        first2Chars;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      first2Chars = property.substr(0, 2);

      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time && !cache.uncache) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
    }

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end.substring(0, 6) === "var(--") {
    end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
  }

  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");
        style.scale = style.rotate = style.translate = "none";

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375. Note: position: fixed elements report a null offsetParent but they could also be invisible because they're in an ancestor with display: none, so we check getBoundingClientRect(). We only want to alter the DOM if we absolutely have to because it can cause iframe content to reload, like a Vimeo video.
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    if (cache.uncache) {
      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
    }

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || startValue === "auto" || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", 0, style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);

          if (type === "string" && endValue.substring(0, 6) === "var(--") {
            endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
            endNum = parseFloat(endValue);
          }

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/Observer.js":
/*!***************************************!*\
  !*** ./node_modules/gsap/Observer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observer: () => (/* binding */ Observer),
/* harmony export */   _getProxyProp: () => (/* binding */ _getProxyProp),
/* harmony export */   _getScrollFunc: () => (/* binding */ _getScrollFunc),
/* harmony export */   _getTarget: () => (/* binding */ _getTarget),
/* harmony export */   _getVelocityProp: () => (/* binding */ _getVelocityProp),
/* harmony export */   _horizontal: () => (/* binding */ _horizontal),
/* harmony export */   _isViewport: () => (/* binding */ _isViewport),
/* harmony export */   _proxies: () => (/* binding */ _proxies),
/* harmony export */   _scrollers: () => (/* binding */ _scrollers),
/* harmony export */   _vertical: () => (/* binding */ _vertical),
/* harmony export */   "default": () => (/* binding */ Observer)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _clamp,
    _win,
    _doc,
    _docEl,
    _body,
    _isTouch,
    _pointerType,
    ScrollTrigger,
    _root,
    _normalizer,
    _eventTypes,
    _context,
    _getGSAP = function _getGSAP() {
  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _startup = 1,
    _observers = [],
    _scrollers = [],
    _proxies = [],
    _getTime = Date.now,
    _bridge = function _bridge(name, value) {
  return value;
},
    _integrate = function _integrate() {
  var core = ScrollTrigger.core,
      data = core.bridge || {},
      scrollers = core._scrollers,
      proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;

  _bridge = function _bridge(name, value) {
    return data[name](value);
  };
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _isViewport = function _isViewport(el) {
  return !!~_root.indexOf(el);
},
    _addListener = function _addListener(element, type, func, passive, capture) {
  return element.addEventListener(type, func, {
    passive: passive !== false,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _onScroll = function _onScroll() {
  return _normalizer && _normalizer.isPressed || _scrollers.cache++;
},
    _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
  var cachingFunc = function cachingFunc(value) {
    // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
    if (value || value === 0) {
      _startup && (_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.

      var isNormalizing = _normalizer && _normalizer.isPressed;
      value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!

      f(value);
      cachingFunc.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
    } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
      cachingFunc.cacheID = _scrollers.cache;
      cachingFunc.v = f();
    }

    return cachingFunc.v + cachingFunc.offset;
  };

  cachingFunc.offset = 0;
  return f && cachingFunc;
},
    _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  })
},
    _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  })
},
    _getTarget = function _getTarget(t, self) {
  return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
},
    _isWithin = function _isWithin(element, list) {
  // check if the element is in the list or is a descendant of an element in the list.
  var i = list.length;

  while (i--) {
    if (list[i] === element || list[i].contains(element)) {
      return true;
    }
  }

  return false;
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;
  // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
  _isViewport(element) && (element = _doc.scrollingElement || _docEl);

  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  _scrollers[i + offset] || _addListener(element, "scroll", _onScroll); // clear the cache when a scroll occurs

  var prev = _scrollers[i + offset],
      func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
    return arguments.length ? element[s] = value : element[s];
  })));
  func.target = element;
  prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.

  return func;
},
    _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
  var v1 = value,
      v2 = value,
      t1 = _getTime(),
      t2 = t1,
      min = minTimeRefresh || 50,
      dropToZeroTime = Math.max(500, min * 3),
      update = function update(value, force) {
    var t = _getTime();

    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value;
    } else {
      // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
      v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }
  },
      reset = function reset() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  },
      getVelocity = function getVelocity(latestValue) {
    var tOld = t2,
        vOld = v2,
        t = _getTime();

    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
  };

  return {
    update: update,
    reset: reset,
    getVelocity: getVelocity
  };
},
    _getEvent = function _getEvent(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
},
    _getAbsoluteMax = function _getAbsoluteMax(a) {
  var max = Math.max.apply(Math, a),
      min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
},
    _setScrollTrigger = function _setScrollTrigger() {
  ScrollTrigger = gsap.core.globals().ScrollTrigger;
  ScrollTrigger && ScrollTrigger.core && _integrate();
},
    _initCore = function _initCore(core) {
  gsap = core || _getGSAP();

  if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;
    _root = [_win, _doc, _docEl, _body];
    _clamp = gsap.utils.clamp;

    _context = gsap.core.context || function () {};

    _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

    _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function () {
      return _startup = 0;
    }, 500);

    _setScrollTrigger();

    _coreInitted = 1;
  }

  return _coreInitted;
};

_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/function () {
  function Observer(vars) {
    this.init(vars);
  }

  var _proto = Observer.prototype;

  _proto.init = function init(vars) {
    _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance,
        dragMinimum = vars.dragMinimum,
        type = vars.type,
        target = vars.target,
        lineHeight = vars.lineHeight,
        debounce = vars.debounce,
        preventDefault = vars.preventDefault,
        onStop = vars.onStop,
        onStopDelay = vars.onStopDelay,
        ignore = vars.ignore,
        wheelSpeed = vars.wheelSpeed,
        event = vars.event,
        onDragStart = vars.onDragStart,
        onDragEnd = vars.onDragEnd,
        onDrag = vars.onDrag,
        onPress = vars.onPress,
        onRelease = vars.onRelease,
        onRight = vars.onRight,
        onLeft = vars.onLeft,
        onUp = vars.onUp,
        onDown = vars.onDown,
        onChangeX = vars.onChangeX,
        onChangeY = vars.onChangeY,
        onChange = vars.onChange,
        onToggleX = vars.onToggleX,
        onToggleY = vars.onToggleY,
        onHover = vars.onHover,
        onHoverEnd = vars.onHoverEnd,
        onMove = vars.onMove,
        ignoreCheck = vars.ignoreCheck,
        isNormalizer = vars.isNormalizer,
        onGestureStart = vars.onGestureStart,
        onGestureEnd = vars.onGestureEnd,
        onWheel = vars.onWheel,
        onEnable = vars.onEnable,
        onDisable = vars.onDisable,
        onClick = vars.onClick,
        scrollSpeed = vars.scrollSpeed,
        capture = vars.capture,
        allowClicks = vars.allowClicks,
        lockAxis = vars.lockAxis,
        onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl;
    this.vars = vars;
    ignore && (ignore = gsap.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.

    var id,
        onStopDelayedCall,
        dragged,
        moved,
        wheeled,
        locked,
        axis,
        self = this,
        prevDeltaX = 0,
        prevDeltaY = 0,
        passive = vars.passive || !preventDefault && vars.passive !== false,
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollX = scrollFuncX(),
        scrollY = scrollFuncY(),
        limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
        // for devices that accommodate mouse events and touch events, we need to distinguish.
    isViewport = _isViewport(target),
        ownerDoc = target.ownerDocument || _doc,
        deltaX = [0, 0, 0],
        // wheel, scroll, pointer/touch
    deltaY = [0, 0, 0],
        onClickTime = 0,
        clickCapture = function clickCapture() {
      return onClickTime = _getTime();
    },
        _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
      return (self.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    },
        onStopFunc = function onStopFunc() {
      self._vx.reset();

      self._vy.reset();

      onStopDelayedCall.pause();
      onStop && onStop(self);
    },
        update = function update() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX),
          dy = self.deltaY = _getAbsoluteMax(deltaY),
          changedX = Math.abs(dx) >= tolerance,
          changedY = Math.abs(dy) >= tolerance;

      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.

      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }

      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }

      if (moved || dragged) {
        onMove && onMove(self);

        if (dragged) {
          onDragStart && dragged === 1 && onDragStart(self);
          onDrag && onDrag(self);
          dragged = 0;
        }

        moved = false;
      }

      locked && !(locked = false) && onLockAxis && onLockAxis(self);

      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }

      id = 0;
    },
        onDelta = function onDelta(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;

      self._vx.update(x);

      self._vy.update(y);

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }

      if (axis !== "y") {
        deltaX[2] += x;

        self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.

      }

      if (axis !== "x") {
        deltaY[2] += y;

        self._vy.update(y, true);
      }

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        _onDrag = function _onDrag(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y,
          isDragging = self.isDragging;
      self.x = x;
      self.y = y;

      if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
        dragged = isDragging ? 2 : 1; // dragged: 0 = not dragging, 1 = first drag, 2 = normal drag

        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
      }
    },
        _onPress = self.onPress = function (e) {
      if (_ignoreCheck(e, 1) || e && e.button) {
        return;
      }

      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.

      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;

      self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.


      self._vy.reset();

      _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);

      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    },
        _onRelease = self.onRelease = function (e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);

      var isTrackingDrag = !isNaN(self.y - self.startY),
          wasDragging = self.isDragging,
          isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
          // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
      eventData = _getEvent(e);

      if (!isDragNotClick && isTrackingDrag) {
        self._vx.reset();

        self._vy.reset(); //if (preventDefault && allowClicks && self.isPressed) { // check isPressed because in a rare edge case, the inputObserver in ScrollTrigger may stopPropagation() on the press/drag, so the onRelease may get fired without the onPress/onDrag ever getting called, thus it could trigger a click to occur on a link after scroll-dragging it.


        if (preventDefault && allowClicks) {
          gsap.delayedCall(0.08, function () {
            // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
            if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                //some browsers (like mobile Safari) don't properly trigger the click event
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }

      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
      dragged && update(); // in case debouncing, we don't want onDrag to fire AFTER onDragEnd().

      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, isDragNotClick);
    },
        _onGestureStart = function _onGestureStart(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    },
        _onGestureEnd = function _onGestureEnd() {
      return (self.isGesturing = false) || onGestureEnd(self);
    },
        onScroll = function onScroll(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = scrollFuncX(),
          y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    },
        _onWheel = function _onWheel(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    },
        _onMove = function _onMove(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      onStop && onStopDelayedCall.restart(true);
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    },
        _onHover = function _onHover(e) {
      self.event = e;
      onHover(self);
    },
        _onHoverEnd = function _onHoverEnd(e) {
      self.event = e;
      onHoverEnd(self);
    },
        _onClick = function _onClick(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };

    onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;

    _context(this);

    self.enable = function (e) {
      if (!self.isEnabled) {
        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);

        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener(target, _eventTypes[0], _onPress, passive, capture);

          _addListener(ownerDoc, _eventTypes[2], _onRelease);

          _addListener(ownerDoc, _eventTypes[3], _onRelease);

          allowClicks && _addListener(target, "click", clickCapture, true, true);
          onClick && _addListener(target, "click", _onClick);
          onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener(target, _pointerType + "move", _onMove);
        }

        self.isEnabled = true;
        self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;

        self._vx.reset();

        self._vy.reset();

        scrollX = scrollFuncX();
        scrollY = scrollFuncY();
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }

      return self;
    };

    self.disable = function () {
      if (self.isEnabled) {
        // only remove the _onScroll listener if there aren't any others that rely on the functionality.
        _observers.filter(function (o) {
          return o !== self && _isViewport(o.target);
        }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        if (self.isPressed) {
          self._vx.reset();

          self._vy.reset();

          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }

        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

        _removeListener(target, "wheel", _onWheel, capture);

        _removeListener(target, _eventTypes[0], _onPress, capture);

        _removeListener(ownerDoc, _eventTypes[2], _onRelease);

        _removeListener(ownerDoc, _eventTypes[3], _onRelease);

        _removeListener(target, "click", clickCapture, true);

        _removeListener(target, "click", _onClick);

        _removeListener(ownerDoc, "gesturestart", _onGestureStart);

        _removeListener(ownerDoc, "gestureend", _onGestureEnd);

        _removeListener(target, _pointerType + "enter", _onHover);

        _removeListener(target, _pointerType + "leave", _onHoverEnd);

        _removeListener(target, _pointerType + "move", _onMove);

        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };

    self.kill = self.revert = function () {
      self.disable();

      var i = _observers.indexOf(self);

      i >= 0 && _observers.splice(i, 1);
      _normalizer === self && (_normalizer = 0);
    };

    _observers.push(self);

    isNormalizer && _isViewport(target) && (_normalizer = self);
    self.enable(event);
  };

  _createClass(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);

  return Observer;
}();
Observer.version = "3.13.0";

Observer.create = function (vars) {
  return new Observer(vars);
};

Observer.register = _initCore;

Observer.getAll = function () {
  return _observers.slice();
};

Observer.getById = function (id) {
  return _observers.filter(function (o) {
    return o.vars.id === id;
  })[0];
};

_getGSAP() && gsap.registerPlugin(Observer);


/***/ }),

/***/ "./node_modules/gsap/ScrollTrigger.js":
/*!********************************************!*\
  !*** ./node_modules/gsap/ScrollTrigger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollTrigger: () => (/* binding */ ScrollTrigger),
/* harmony export */   "default": () => (/* binding */ ScrollTrigger)
/* harmony export */ });
/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer.js */ "./node_modules/gsap/Observer.js");
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _normalizer,
    _ignoreMobileResize,
    _baseScreenHeight,
    _baseScreenWidth,
    _fixIOSBug,
    _context,
    _scrollRestoration,
    _div100vh,
    _100vh,
    _isReverted,
    _clampingMax,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 0,
    _parseClamp = function _parseClamp(value, type, self) {
  var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
  self["_" + type + "Clamp"] = clamp;
  return clamp ? value.substr(6, value.length - 7) : value;
},
    _keepClamp = function _keepClamp(value, clamp) {
  return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
},
    _rafBugFix = function _rafBugFix() {
  return _enabled && requestAnimationFrame(_rafBugFix);
},
    // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
_pointerDownHandler = function _pointerDownHandler() {
  return _pointerIsDown = 1;
},
    _pointerUpHandler = function _pointerUpHandler() {
  return _pointerIsDown = 0;
},
    _passThrough = function _passThrough(v) {
  return v;
},
    _round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getViewportDimension = function _getViewportDimension(dimensionProperty) {
  return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _100vh;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
  var d = _ref.d,
      d2 = _ref.d2,
      a = _ref.a;
  return (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref2) {
  var s = _ref2.s,
      d2 = _ref2.d2,
      d = _ref2.d,
      a = _ref2.a;
  return Math.max(0, (s = "scroll" + d2) && (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _endAnimation = function _endAnimation(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
},
    _callback = function _callback(self, func) {
  if (self.enabled) {
    var result = self._ctx ? self._ctx.add(function () {
      return func(self);
    }) : func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
},
    _abs = Math.abs,
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
  var position = _getComputedStyle(element).position;

  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
  var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;

  for (p in labels) {
    a.push(labels[p] / duration);
  }

  return a;
},
    _getClosestLabel = function _getClosestLabel(animation) {
  return function (value) {
    return gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
},
    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
  var snap = gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
    return a - b;
  });
  return a ? function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var i;

    if (!direction) {
      return snap(value);
    }

    if (direction > 0) {
      value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }

      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;

      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }

    return a[0];
  } : function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
},
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
  return function (value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _wheelListener = function _wheelListener(func, el, scrollFunc) {
  scrollFunc = scrollFunc && scrollFunc.wheelHandler;

  if (scrollFunc) {
    func(el, "wheel", scrollFunc);
    func(el, "touchmove", scrollFunc);
  }
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      fontSize = _ref4.fontSize,
      indent = _ref4.indent,
      fontWeight = _ref4.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _rafID,
    _sync = function _sync() {
  return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
},
    _onScroll = function _onScroll() {
  // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
  if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
    // if the user is dragging the scrollbar, allow it.
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;

    if (_normalizer) {
      _rafID || (_rafID = requestAnimationFrame(_updateAll));
    } else {
      _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110

    }

    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
},
    _setBaseDimensions = function _setBaseDimensions() {
  _baseScreenWidth = _win.innerWidth;
  _baseScreenHeight = _win.innerHeight;
},
    _onResize = function _onResize(force) {
  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
  (force === true || !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25)) && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (trigger && (!media || trigger._ctx === media)) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert(true, true);
      }
    }
  }

  _isReverted = true;
  media && _revertRecorded(media);
  media || _dispatch("revert");
},
    _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
  // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
  (force || !_refreshingAll) && _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
  });
  _isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
},
    _refreshingAll,
    _refreshID = 0,
    _queueRefreshID,
    _queueRefreshAll = function _queueRefreshAll() {
  // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
  if (_queueRefreshID !== _refreshID) {
    var id = _queueRefreshID = _refreshID;
    requestAnimationFrame(function () {
      return id === _refreshID && _refreshAll(true);
    });
  }
},
    _refresh100vh = function _refresh100vh() {
  _body.appendChild(_div100vh);

  _100vh = !_normalizer && _div100vh.offsetHeight || _win.innerHeight;

  _body.removeChild(_div100vh);
},
    _hideAllMarkers = function _hideAllMarkers(hide) {
  return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (el) {
    return el.style.display = hide ? "none" : "block";
  });
},
    _refreshAll = function _refreshAll(force, skipRevert) {
  _docEl = _doc.documentElement; // some frameworks like Astro may cache the <body> and replace it during routing, so we'll just re-record the _docEl and _body for safety (otherwise, the markers may not get added properly).

  _body = _doc.body;
  _root = [_win, _doc, _docEl, _body];

  if (_lastScrollTime && !force && !_isReverted) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  _refresh100vh();

  _refreshingAll = ScrollTrigger.isRefreshing = true;

  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
  }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away


  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    if (_isFunction(obj)) {
      obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes

      obj(0);
    }
  });

  _triggers.slice(0).forEach(function (t) {
    return t.refresh();
  }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.


  _isReverted = false;

  _triggers.forEach(function (t) {
    // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
    if (t._subPinOffset && t.pin) {
      var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
          original = t.pin[prop];
      t.revert(true, 1);
      t.adjustPinSpacing(t.pin[prop] - original);
      t.refresh();
    }
  });

  _clampingMax = 1; // pinSpacing might be propping a page open, thus when we .setPositions() to clamp a ScrollTrigger's end we should leave the pinSpacing alone. That's what this flag is for.

  _hideAllMarkers(true);

  _triggers.forEach(function (t) {
    // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
    var max = _maxScroll(t.scroller, t._dir),
        endClamp = t.vars.end === "max" || t._endClamp && t.end > max,
        startClamp = t._startClamp && t.start >= max;

    (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
  });

  _hideAllMarkers(false);

  _clampingMax = 0;
  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    if (_isFunction(obj)) {
      obj.smooth && requestAnimationFrame(function () {
        return obj.target.style.scrollBehavior = "smooth";
      });
      obj.rec && obj(obj.rec);
    }
  });

  _clearScrollMemory(_scrollRestoration, 1);

  _resizeDelay.pause();

  _refreshID++;
  _refreshingAll = 2;

  _updateAll(2);

  _triggers.forEach(function (t) {
    return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
  });

  _refreshingAll = ScrollTrigger.isRefreshing = false;

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _primary,
    _updateAll = function _updateAll(force) {
  if (force === 2 || !_refreshingAll && !_isReverted) {
    // _isReverted could be true if, for example, a matchMedia() is in the process of executing. We don't want to update during the time everything is reverted.
    ScrollTrigger.isUpdating = true;
    _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.

    var l = _triggers.length,
        time = _getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();

    _direction = _lastScroll > scroll ? -1 : 1;
    _refreshingAll || (_lastScroll = scroll);

    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;

        _dispatch("scrollEnd");
      }

      _time2 = _time1;
      _time1 = time;
    }

    if (_direction < 0) {
      _i = l;

      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }

      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }

    ScrollTrigger.isUpdating = false;
  }

  _rafID = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  var cache = pin._gsap;

  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin._gsap.swappedIn) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }

  pin._gsap.swappedIn = false;
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (!pin._gsap.swappedIn) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.flexBasis = cs.flexBasis || "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];

    if (pin.parentNode !== spacer) {
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }

    pin._gsap.swappedIn = true;
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
  containerAnimation && containerAnimation.seek(0);
  isNaN(value) || (value = +value); // convert a string number like "45" to an actual number

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));
    var offsets = (value || "0").split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
    element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger, self) || _body;
    bounds = _getBounds(element) || {};

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else {
    containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
    markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (clampZeroProp) {
    self[clampZeroProp] = value || -0.001;
    value < 0 && (value = 0);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    p1 = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }

  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
},
    _prefixExp = /(webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }

      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }

    gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
},
    _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
  var last1 = initialValue,
      last2 = last1;
  return function (value) {
    var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.

    if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
      // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
      value = current;
      onInterrupt && onInterrupt();
    }

    last2 = last1;
    last1 = Math.round(value);
    return last1;
  };
},
    _shiftMarker = function _shiftMarker(marker, direction, value) {
  var vars = {};
  vars[direction.p] = "+=" + value;
  gsap.set(marker, vars);
},
    // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    initialValue = initialValue || getScroll();

    var checkForInterruption = _interruptionTracker(getScroll, initialValue, function () {
      tween.kill();
      getTween.tween = 0;
    });

    change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.

    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    vars[prop] = scrollTo;
    vars.inherit = false;
    vars.modifiers = modifiers;

    modifiers[prop] = function () {
      return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
    };

    vars.onUpdate = function () {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
      getTween.tween && _updateAll(); // if it was interrupted/killed, like in a context.revert(), don't force an updateAll()
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;

  getScroll.wheelHandler = function () {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };

  _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.


  ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
  return getTween;
};

var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");

    _context(this);

    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        pinSpacer = _vars.pinSpacer,
        containerAnimation = _vars.containerAnimation,
        fastScrollEnd = _vars.fastScrollEnd,
        preventOverlaps = _vars.preventOverlaps,
        direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical,
        isToggle = !scrub && scrub !== 0,
        scroller = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.scroller || _win),
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = ("pinType" in vars ? vars.pinType : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "pinType") || isViewport && "fixed") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        lastSnap = 0,
        lastRefresh = 0,
        prevProgress = 0,
        scrollFunc = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
        tweenTo,
        pinCache,
        snapFunc,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        executingOnRefresh,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        pinMoves,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevScroll,
        prevAnimProgress,
        caMarkerSetter,
        customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.


    self._startClamp = self._endClamp = false;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;

    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
    }

    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      left: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    self.scrubDuration = function (value) {
      scrubSmooth = _isNumber(value) && value;

      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          inherit: false,
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };

    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://gsap.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010

      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    if (snap) {
      // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }

      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (o) {
        return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
      }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters


      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        var scroll = scrollFunc(),
            refreshedRecently = _getTime() - lastRefresh < 500,
            tween = tweenTo.tween;

        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change,
              totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
              velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
              naturalEnd = progress + (snap.inertia === false ? 0 : change1),
              endValue,
              endScroll,
              _snap = snap,
              onStart = _snap.onStart,
              _onInterrupt = _snap.onInterrupt,
              _onComplete = _snap.onComplete;
          endValue = snapFunc(naturalEnd, self);
          _isNumber(endValue) || (endValue = naturalEnd); // in case the function didn't return a number, fall back to using the naturalEnd

          endScroll = Math.max(0, Math.round(start + endValue * change));

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            if (snap.inertia === false) {
              change1 = endValue - progress;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();

                if (animation && !isToggle) {
                  // the resolution of the scrollbar is limited, so we should correct the scrubbed animation's playhead at the end to match EXACTLY where it was supposed to snap
                  scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                }

                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.

    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)

      self.pin = pin;
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }

        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];

      var content = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "content") || scroller);

      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));

      if (!useFixedPosition && !(_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.length && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
          oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }

    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };

    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };

    self.revert = function (revert, temp) {
      if (!temp) {
        return self.kill(true);
      } // for compatibility with gsap.context() and gsap.matchMedia() which call revert()


      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== self.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });

        if (r) {
          _refreshing = self;
          self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
        }

        if (pin && (!pinReparent || !self.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }

        r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.

        _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.

        self.isReverted = r;
      }
    };

    self.refresh = function (soft, force, position, pinOffset) {
      // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = self;

      if (tweenTo.tween && !position) {
        // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }

      scrubTween && scrubTween.pause();

      if (invalidateOnRefresh && animation) {
        animation.revert({
          kill: false
        }).invalidate();
        animation.getChildren && animation.getChildren(true, true, false).forEach(function (t) {
          return t.vars.immediateRender && t.render(0, true, true);
        }); // any from() or fromTo() tweens inside a timeline should render immediately (well, unless they have immediateRender: false)
      }

      self.isReverted || self.revert(true, true);
      self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
          isFirstRefresh = change <= 0.01 || !change,
          offset = 0,
          otherPinOffset = pinOffset || 0,
          parsedEnd = _isObject(position) ? position.end : vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
          pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.pinnedContainer, self),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll,
          initted,
          revertedPins,
          forcedOverflow,
          markerStartOffset,
          markerEndOffset;

      if (markers && _isObject(position)) {
        // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
        markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
      }

      while (i-- > 0) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;

        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert(true, true);
        }

        if (curTrigger !== _triggers[i]) {
          // in case it got removed.
          triggerIndex--;
          i--;
        }
      }

      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      parsedStart = _parseClamp(parsedStart, "start", self);
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      parsedEnd = _parseClamp(parsedEnd, "end", self);
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);

          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }

          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._startClamp && (self._startClamp += offset);

      if (self._endClamp && !_refreshingAll) {
        self._endClamp = end || -0.001;
        end = Math.min(end, _maxScroll(scroller, direction));
      }

      change = end - start || (start -= 0.01) && 0.001;

      if (isFirstRefresh) {
        // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
        prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
      }

      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical;
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;

        if (!max && end > 1) {
          // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://gsap.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
          forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };

          if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, isVertical ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;

          if (i) {
            spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

            spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }

          _setState(spacerState);

          if (pinnedContainer) {
            // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
            _triggers.forEach(function (t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }

          useFixedPosition && scrollFunc(prevScroll);
        } else {
          i = _getSize(pin, direction);
          i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);

          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }

        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false, true);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity

      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }

      self.revert(false, true);
      lastRefresh = _getTime();

      if (snapDelayedCall) {
        lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
        // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.

        snapDelayedCall.restart(true);
      }

      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      scrubTween && scrubTween.invalidate();

      if (!isNaN(markerStartOffset)) {
        // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
        markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);

        _shiftMarker(markerStartTrigger, direction, markerStartOffset);

        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));

        _shiftMarker(markerEndTrigger, direction, markerEndOffset);

        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }

      isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.

      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
        executingOnRefresh = true;
        onRefresh(self);
        executingOnRefresh = false;
      }
    };

    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);

      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };

    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };

    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
          a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

      return (_isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function (t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };

    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }

      var scroll = _refreshingAll === true ? prevScroll : self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled,
          isAtMax,
          isTakingAction;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      if (anticipatePin && pin && !_refreshing && !_startup && _lastScrollTime) {
        if (!clipped && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.0001;
        } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.9999;
        }
      }

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }

        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.

            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              // legacy support (courtesy), before 3.10.0
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                _reparent(pin, _body, bounds.top + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _offset : 0) + _px, bounds.left + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }

            _setState(isActive || isAtMax ? pinActiveState : pinState);

            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }

          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);

            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }

      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };

    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        isViewport || _addListener(scroller, "scroll", _onScroll);
        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }

        refresh !== false && self.refresh();
      }
    };

    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };

    self.setPositions = function (newStart, newEnd, keepClamp, pinOffset) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (containerAnimation) {
        // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
        var st = containerAnimation.scrollTrigger,
            duration = containerAnimation.duration(),
            _change = st.end - st.start;

        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }

      self.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset);
      self.update();
    };

    self.adjustPinSpacing = function (amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;

        _setState(spacerState);
      }
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert(true, true);
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          isViewport || _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;

      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });

      i || _refreshingAll || (self.scroll.rec = 0);

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);

      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;

        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });

        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }

      vars.onKill && vars.onKill(self);
    };

    _triggers.push(self);

    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);

    if (animation && animation.add && !change) {
      // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
      var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().

      self.update = function () {
        self.update = updateFunc;
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++; // otherwise a cached scroll position may get used in the refresh() in a very rare scenario, like if ScrollTriggers are created inside a DOMContentLoaded event and the queued requestAnimationFrame() fires beforehand. See https://gsap.com/community/forums/topic/41267-scrolltrigger-breaks-on-refresh-when-using-domcontentloaded/

        start || end || self.refresh();
      };

      gsap.delayedCall(0.01, self.update);
      change = 0.01;
      start = end = 0;
    } else {
      self.refresh();
    }

    pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();
      _windowExists() && window.document && ScrollTrigger.enable();
      _coreInitted = _enabled;
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }

    return _defaults;
  };

  ScrollTrigger.disable = function disable(reset, kill) {
    _enabled = 0;

    _triggers.forEach(function (trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });

    _removeListener(_win, "wheel", _onScroll);

    _removeListener(_doc, "scroll", _onScroll);

    clearInterval(_syncInterval);

    _removeListener(_doc, "touchcancel", _passThrough);

    _removeListener(_body, "touchstart", _passThrough);

    _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

    _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

    _resizeDelay.kill();

    _iterateAutoRefresh(_removeListener);

    for (var i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);

      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
    }
  };

  ScrollTrigger.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;

    if (gsap) {
      _toArray = gsap.utils.toArray;
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || _passThrough;
      _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
      _scrollRestoration = _win.history.scrollRestoration || "auto";
      _lastScroll = _win.pageYOffset || 0;
      gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

      if (_body) {
        _enabled = 1;
        _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.

        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";

        _refresh100vh();

        _rafBugFix();

        _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

        ScrollTrigger.isTouch = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch;
        _fixIOSBug = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503

        _ignoreMobileResize = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch === 1;

        _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.


        _root = [_win, _doc, _docEl, _body];

        if (gsap.matchMedia) {
          ScrollTrigger.matchMedia = function (vars) {
            var mm = gsap.matchMedia(),
                p;

            for (p in vars) {
              mm.add(p, vars[p]);
            }

            return mm;
          };

          gsap.addEventListener("matchMediaInit", function () {
            return _revertAll();
          });
          gsap.addEventListener("matchMediaRevert", function () {
            return _revertRecorded();
          });
          gsap.addEventListener("matchMedia", function () {
            _refreshAll(0, 1);

            _dispatch("matchMedia");
          });
          gsap.matchMedia().add("(orientation: portrait)", function () {
            // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
            _setBaseDimensions();

            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }

        _setBaseDimensions();

        _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


        var bodyHasStyle = _body.hasAttribute("style"),
            bodyStyle = _body.style,
            border = bodyStyle.borderTopStyle,
            AnimationProto = gsap.core.Animation.prototype,
            bounds,
            i;

        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)

        bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

        bounds = _getBounds(_body);
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.m = Math.round(bounds.top + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.m = Math.round(bounds.left + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");

        if (!bodyHasStyle) {
          // SSR frameworks like Next.js complain if this attribute gets added.
          _body.setAttribute("style", ""); // it's not enough to just removeAttribute() - we must first set it to empty, otherwise Next.js complains.


          _body.removeAttribute("style");
        } // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.


        _syncInterval = setInterval(_sync, 250);
        gsap.delayedCall(0.5, function () {
          return _startup = 0;
        });

        _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


        _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://gsap.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


        _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

        _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

        _transformProp = gsap.utils.checkPrefix("transform");

        _stateProps.push(_transformProp);

        _coreInitted = _getTime();
        _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function () {
          var w = _win.innerWidth,
              h = _win.innerHeight;

          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];

        _iterateAutoRefresh(_addListener);

        _triggers.forEach(function (trigger) {
          return trigger.enable(0, 1);
        });

        for (i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);

          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
        }
      }
    }
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(target),
        i = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.indexOf(t),
        isViewport = _isViewport(t);

    if (~i) {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.splice(i, isViewport ? 6 : 2);
    }

    if (vars) {
      isViewport ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(t, vars);
    }
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function (t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };

  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element) : element).getBoundingClientRect(),
        offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };

  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element));
    var bounds = element.getBoundingClientRect(),
        size = bounds[horizontal ? _width : _height],
        offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };

  ScrollTrigger.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function (t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });

    if (allowListeners !== true) {
      var listeners = _listeners.killAll || [];
      _listeners = {};
      listeners.forEach(function (f) {
        return f();
      });
    }
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.13.0";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);

      i >= 0 && _savedStyles.splice(i, 5);

      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
    }
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize(true) : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};

ScrollTrigger.update = function (force) {
  return ++_Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache && _updateAll(force === true ? 2 : 0);
};

ScrollTrigger.clearScrollMemory = _clearScrollMemory;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element), horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.


ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.snapDirectional = _snapDirectional;

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).


var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
},
    _allowNativePanning = function _allowNativePanning(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
  }

  target === _docEl && _allowNativePanning(_body, direction);
},
    _overflow = {
  auto: 1,
  scroll: 1
},
    _nestedScroll = function _nestedScroll(_ref5) {
  var event = _ref5.event,
      target = _ref5.target,
      axis = _ref5.axis;

  var node = (event.changedTouches ? event.changedTouches[0] : event).target,
      cache = node._gsap || gsap.core.getCache(node),
      time = _getTime(),
      cs;

  if (!cache._isScrollT || time - cache._isScrollT > 2000) {
    // cache for 2 seconds to improve performance.
    while (node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
      node = node.parentNode;
    }

    cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }

  if (cache._isScroll || axis === "x") {
    event.stopPropagation();
    event._gsapAllow = true;
  }
},
    // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
  return _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.create({
    target: target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type: type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, true);
    }
  });
},
    _inputExp = /(input|label|select|textarea)/i,
    _inputIsFocused,
    _captureInputs = function _captureInputs(e) {
  var isInput = _inputExp.test(e.target.tagName);

  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
},
    _getScrollNormalizer = function _getScrollNormalizer(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";

  var _vars2 = vars,
      normalizeScrollX = _vars2.normalizeScrollX,
      momentum = _vars2.momentum,
      allowNestedScroll = _vars2.allowNestedScroll,
      onRelease = _vars2.onRelease,
      self,
      maxY,
      target = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.target) || _docEl,
      smoother = gsap.core.globals().ScrollSmoother,
      smootherInstance = smoother && smoother.get(),
      content = _fixIOSBug && (vars.content && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()),
      scrollFuncY = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      scrollFuncX = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal),
      scale = 1,
      initialScale = (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth,
      wheelRefresh = 0,
      resolveMomentumDuration = _isFunction(momentum) ? function () {
    return momentum(self);
  } : function () {
    return momentum || 2.8;
  },
      lastRefreshID,
      skipTouchMove,
      inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
      resumeTouchMove = function resumeTouchMove() {
    return skipTouchMove = false;
  },
      scrollClampX = _passThrough,
      scrollClampY = _passThrough,
      updateClamps = function updateClamps() {
    maxY = _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
    scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)));
    lastRefreshID = _refreshID;
  },
      removeContentOffset = function removeContentOffset() {
    content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
    scrollFuncY.offset = scrollFuncY.cacheID = 0;
  },
      ignoreDrag = function ignoreDrag() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);

      var offset = _round(self.deltaY / 2),
          scroll = scrollClampY(scrollFuncY.v - offset);

      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;

        var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);

        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
        content._gsap.y = y + "px";
        scrollFuncY.cacheID = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache;

        _updateAll();
      }

      return true;
    }

    scrollFuncY.offset && removeContentOffset();
    skipTouchMove = true;
  },
      tween,
      startScrollX,
      startScrollY,
      onStopDelayedCall,
      onResize = function onResize() {
    // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
    updateClamps();

    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };

  content && gsap.set(content, {
    y: "+=0"
  }); // to ensure there's a cache (element._gsap)

  vars.ignoreCheck = function (e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };

  vars.onPress = function () {
    skipTouchMove = false;
    var prevScale = scale;
    scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };

  vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
    scrollFuncY.offset && removeContentOffset();

    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++; // make sure we're pulling the non-cached value
      // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)

      var dur = resolveMomentumDuration(),
          currentScroll,
          endScroll;

      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.

        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }

      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)

      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);

      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
        gsap.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }

    onRelease && onRelease(self);
  };

  vars.onWheel = function () {
    tween._ts && tween.pause();

    if (_getTime() - wheelRefresh > 1000) {
      // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
      lastRefreshID = 0;
      wheelRefresh = _getTime();
    }
  };

  vars.onChange = function (self, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.

    if (dy) {
      scrollFuncY.offset && removeContentOffset();
      var isTouch = yArray[2] === dy,
          y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1],
          yClamped = scrollClampY(y);
      isTouch && y !== yClamped && (startScrollY += yClamped - y);
      scrollFuncY(yClamped);
    }

    (dy || dx) && _updateAll();
  };

  vars.onEnable = function () {
    _allowNativePanning(target, normalizeScrollX ? false : "x");

    ScrollTrigger.addEventListener("refresh", onResize);

    _addListener(_win, "resize", onResize);

    if (scrollFuncY.smooth) {
      scrollFuncY.target.style.scrollBehavior = "auto";
      scrollFuncY.smooth = scrollFuncX.smooth = false;
    }

    inputObserver.enable();
  };

  vars.onDisable = function () {
    _allowNativePanning(target, true);

    _removeListener(_win, "resize", onResize);

    ScrollTrigger.removeEventListener("refresh", onResize);
    inputObserver.kill();
  };

  vars.lockAxis = vars.lockAxis !== false;
  self = new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
  self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.

  _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.

  _fixIOSBug && gsap.ticker.add(_passThrough); // prevent the ticker from sleeping

  onStopDelayedCall = self._dc;
  tween = gsap.to(self, {
    ease: "power4",
    paused: true,
    inherit: false,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function () {
        return tween.pause();
      })
    },
    onUpdate: _updateAll,
    onComplete: onStopDelayedCall.vars.onComplete
  }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.

  return self;
};

ScrollTrigger.sort = function (func) {
  if (_isFunction(func)) {
    return _triggers.sort(func);
  }

  var scroll = _win.pageYOffset || 0;
  ScrollTrigger.getAll().forEach(function (t) {
    return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win.innerHeight;
  });
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
  }); // anything with a containerAnimation should refresh last.
};

ScrollTrigger.observe = function (vars) {
  return new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
};

ScrollTrigger.normalizeScroll = function (vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }

  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }

  if (vars === false) {
    _normalizer && _normalizer.kill();
    _normalizer = vars;
    return;
  }

  var normalizer = vars instanceof _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};

ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._getVelocityProp,
  _inputObserver: _inputObserver,
  _scrollers: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers,
  _proxies: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   Back: () => (/* binding */ Back),
/* harmony export */   Bounce: () => (/* binding */ Bounce),
/* harmony export */   Circ: () => (/* binding */ Circ),
/* harmony export */   Cubic: () => (/* binding */ Cubic),
/* harmony export */   Elastic: () => (/* binding */ Elastic),
/* harmony export */   Expo: () => (/* binding */ Expo),
/* harmony export */   GSCache: () => (/* binding */ GSCache),
/* harmony export */   Linear: () => (/* binding */ Linear),
/* harmony export */   Power0: () => (/* binding */ Power0),
/* harmony export */   Power1: () => (/* binding */ Power1),
/* harmony export */   Power2: () => (/* binding */ Power2),
/* harmony export */   Power3: () => (/* binding */ Power3),
/* harmony export */   Power4: () => (/* binding */ Power4),
/* harmony export */   PropTween: () => (/* binding */ PropTween),
/* harmony export */   Quad: () => (/* binding */ Quad),
/* harmony export */   Quart: () => (/* binding */ Quart),
/* harmony export */   Quint: () => (/* binding */ Quint),
/* harmony export */   Sine: () => (/* binding */ Sine),
/* harmony export */   SteppedEase: () => (/* binding */ SteppedEase),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   TimelineLite: () => (/* binding */ Timeline),
/* harmony export */   TimelineMax: () => (/* binding */ Timeline),
/* harmony export */   Tween: () => (/* binding */ Tween),
/* harmony export */   TweenLite: () => (/* binding */ Tween),
/* harmony export */   TweenMax: () => (/* binding */ Tween),
/* harmony export */   _checkPlugin: () => (/* binding */ _checkPlugin),
/* harmony export */   _colorExp: () => (/* binding */ _colorExp),
/* harmony export */   _colorStringFilter: () => (/* binding */ _colorStringFilter),
/* harmony export */   _config: () => (/* binding */ _config),
/* harmony export */   _forEachName: () => (/* binding */ _forEachName),
/* harmony export */   _getCache: () => (/* binding */ _getCache),
/* harmony export */   _getProperty: () => (/* binding */ _getProperty),
/* harmony export */   _getSetter: () => (/* binding */ _getSetter),
/* harmony export */   _isString: () => (/* binding */ _isString),
/* harmony export */   _isUndefined: () => (/* binding */ _isUndefined),
/* harmony export */   _missingPlugin: () => (/* binding */ _missingPlugin),
/* harmony export */   _numExp: () => (/* binding */ _numExp),
/* harmony export */   _numWithUnitExp: () => (/* binding */ _numWithUnitExp),
/* harmony export */   _parseRelative: () => (/* binding */ _parseRelative),
/* harmony export */   _plugins: () => (/* binding */ _plugins),
/* harmony export */   _relExp: () => (/* binding */ _relExp),
/* harmony export */   _removeLinkedListItem: () => (/* binding */ _removeLinkedListItem),
/* harmony export */   _renderComplexString: () => (/* binding */ _renderComplexString),
/* harmony export */   _replaceRandom: () => (/* binding */ _replaceRandom),
/* harmony export */   _round: () => (/* binding */ _round),
/* harmony export */   _roundModifier: () => (/* binding */ _roundModifier),
/* harmony export */   _setDefaults: () => (/* binding */ _setDefaults),
/* harmony export */   _sortPropTweensByPriority: () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   _ticker: () => (/* binding */ _ticker),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   distribute: () => (/* binding */ distribute),
/* harmony export */   getUnit: () => (/* binding */ getUnit),
/* harmony export */   gsap: () => (/* binding */ gsap),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   mapRange: () => (/* binding */ mapRange),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   selector: () => (/* binding */ selector),
/* harmony export */   shuffle: () => (/* binding */ shuffle),
/* harmony export */   snap: () => (/* binding */ snap),
/* harmony export */   splitColor: () => (/* binding */ splitColor),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   unitize: () => (/* binding */ unitize),
/* harmony export */   wrap: () => (/* binding */ wrap),
/* harmony export */   wrapYoyo: () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _reverting,
    _context,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
},
    _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _isRevertWorthy = function _isRevertWorthy(animation) {
  return !!(animation._initted || animation._startAt || animation.add);
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || !!(_reverting && time < 0 && _isRevertWorthy(animation)));
  _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = (Math.random() * i) | 0, v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt < l && wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin(config) {
  if (!config) return;
  config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  if (_windowExists() || config.headless) {
    // edge case: some build tools may pass in a null/undefined value
    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config);
  }
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _registerPluginQueue.forEach(_createPlugin);
        }

        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
}); // previously 2 ** (10 * (p - 1)) but that doesn't end up with the value quite at the right spot so we do a blended ease to ensure it lands where it should perfectly.


_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context) {
      this._ctx = _context;

      _context.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    } // possible future addition - if an animation is removed from its parent and then .restart() or .play() or .resume() is called, perhaps we should force it back into the globalTimeline but be careful because what if it's already at its end? We don't want it to just persist forever and not get released for GC.
    // !this.parent && !value && this._tTime < this._tDur && this !== _globalTimeline && _globalTimeline.add(this);


    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting;
    _reverting = config;

    if (_isRevertWorthy(this)) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }

    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }

    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    this._dur || (this._zTime = -_tinyNum); // ensures onComplete fires on a zero-duration animation that gets restarted.

    return this;
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)

          iteration = ~~prevIteration;

          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && tTime && !suppressEvents && !prevIteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    child.parent === this && _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate(soft);
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this, soft);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time, tTime) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function () {
          return _callback(tween, "onUpdate");
        },
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

        tween._startAt._sat = tween; // used in globalTime()

        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
      // this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)

          iteration = ~~prevIteration;

          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          } else if (time > dur) {
            time = dur;
          }
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
            // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (!prevTime && tTime && !suppressEvents && !prevIteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
      return this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch = function _dispatch(type) {
  return (_listeners[type] || _emptyArray).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c, function (func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;

    _dispatch("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }

    var self = this,
        f = function f() {
      var prev = _context,
          prevSelector = self.selector,
          result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction ? f(self, function (func) {
      return self.add(null, func);
    }) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      (function () {
        var tweens = _this4.getTweens(),
            i = _this4.data.length,
            t;

        while (i--) {
          // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
          t = _this4.data[i];

          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort


        tweens.map(function (t) {
          return {
            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function (o) {
          return o.t.revert(revert);
        }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

        i = _this4.data.length;

        while (i--) {
          // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
          t = _this4.data[i];

          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }

        _this4._r.forEach(function (f) {
          return f(revert, _this4);
        });

        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.length;

      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  } // killWithCleanup() {
  // 	this.kill();
  // 	this._r.forEach(f => f(false, this));
  // }
  ;

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
    _context && _context.data.push(this);
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context, function (f) {
      return context.add(null, f);
    });
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _setDefaults2;

    var tween = gsap.to(target, _setDefaults((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);

        toAdd._ctx = _context;
      }

      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  headless: 1,
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.13.0";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Back: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   Bounce: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   CSSPlugin: () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   Circ: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   Cubic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   Elastic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   Expo: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   Linear: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   Power0: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   Power1: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   Power2: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   Power3: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   Power4: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   Quad: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   Quart: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   Quint: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   Sine: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   SteppedEase: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   Strong: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   TimelineLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   TimelineMax: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   TweenLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   TweenMax: () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   gsap: () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./src/scripts/animations/fadeIn.js":
/*!******************************************!*\
  !*** ./src/scripts/animations/fadeIn.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initFadeInAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
function initFadeInAnimation() {
  var $fadeInEl = document.querySelectorAll("[data-animation='fade-in']");
  $fadeInEl.forEach(function ($el) {
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from($el, {
      scrollTrigger: {
        trigger: $el,
        start: "top 100%",
        toggleActions: "play reset play reverse"
      },
      y: 150,
      opacity: 0
    });
  });
}

/***/ }),

/***/ "./src/scripts/animations/fadeInListItems.js":
/*!***************************************************!*\
  !*** ./src/scripts/animations/fadeInListItems.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initFadeInListItemsAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
function initFadeInListItemsAnimation() {
  var $items = document.querySelectorAll('[data-animation="fade-in-list-items"]');
  $items.forEach(function ($item) {
    var $children = $item.querySelectorAll('[data-animation-child="fade-in-list-items"]');
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from($children, {
      scrollTrigger: {
        trigger: $item,
        start: "top 100%",
        toggleActions: "play reset play reverse"
      },
      opacity: 0,
      x: -20,
      stagger: {
        amount: 1,
        from: "start"
      }
    });
  });
}

/***/ }),

/***/ "./src/scripts/animations/grow.js":
/*!****************************************!*\
  !*** ./src/scripts/animations/grow.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initGrowAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
function initGrowAnimation() {
  var $growParent = document.querySelectorAll('[data-animation="grow"]');
  $growParent.forEach(function ($parent) {
    var $children = $parent.querySelectorAll('[data-animation-child="grow"]');
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from($children, {
      scrollTrigger: {
        trigger: $parent,
        start: "top 100%",
        toggleActions: "play reset play reverse"
      },
      scale: 0,
      transformOrigin: "center bottom",
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "end"
      }
    });
  });
}

/***/ }),

/***/ "./src/scripts/animations/horizontalScroll.js":
/*!****************************************************!*\
  !*** ./src/scripts/animations/horizontalScroll.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initHorizontalScrollAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
var $body = document.querySelector("body");
var $mouseContainer = document.querySelector("[data-animation='mouse']");
var $mouseball = $mouseContainer.querySelector("[data-animation-child='ball']");
var $horizontalScrollTitle = document.querySelector('[data-animation="horizontal-scroll-title"]');
function initHorizontalScrollAnimation() {
  var $scrollContainer = document.querySelectorAll('[data-animation="horizontal-scroll"]');
  $scrollContainer.forEach(function ($container) {
    var $scrollItems = $container.querySelectorAll('[data-animation-child="horizontal-scroll"]');
    var ContainerMovement = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($container, {
      x: function x() {
        return "-".concat($container.scrollWidth + $container.offsetWidth, "px");
      },
      ease: "none",
      scrollTrigger: {
        trigger: $container.parentElement,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        start: "top top",
        end: function end() {
          return "+=".concat($container.scrollHeight);
        },
        onLeaveBack: function onLeaveBack() {
          gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($body, {
            backgroundColor: $container.getAttribute("data-color-bg")
          });
          gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($container, {
            color: $container.getAttribute("data-color-text")
          });
          gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($horizontalScrollTitle, {
            color: $container.getAttribute("data-color-text")
          });
          gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($mouseball, {
            backgroundColor: $container.getAttribute("data-mouse-color")
          });
          gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($container.parentElement, {
            "--gradient-color": $container.getAttribute("data-color-bg")
          });
        }
      }
    });
    $scrollItems.forEach(function ($item) {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
        trigger: $item,
        containerAnimation: ContainerMovement,
        scrub: true,
        start: "left 18%",
        end: "right 10%",
        onUpdate: function onUpdate(self) {
          changeOpacity(self);
        },
        onLeaveBack: function onLeaveBack(self) {
          changeOpacity(self);
          runColorAnimation();
        },
        onEnterBack: function onEnterBack(self) {
          runColorAnimation();
        },
        onEnter: function onEnter(self) {
          runColorAnimation();
        }
      });
      function changeOpacity(self) {
        var opacity = 1 - self.progress * 1.5;
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($item, {
          opacity: opacity
        });
      }
      function runColorAnimation() {
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($body, {
          backgroundColor: $item.getAttribute("data-color-bg")
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($container, {
          color: $item.getAttribute("data-color-text")
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($horizontalScrollTitle, {
          color: $item.getAttribute("data-color-text")
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($mouseball, {
          backgroundColor: $item.getAttribute("data-mouse-color")
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($container.parentElement, {
          "--gradient-color": $item.getAttribute("data-color-bg")
        });
      }
    });
  });
}

/***/ }),

/***/ "./src/scripts/animations/itemStick.js":
/*!*********************************************!*\
  !*** ./src/scripts/animations/itemStick.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTitleStickAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
function initTitleStickAnimation() {
  var $containers = document.querySelectorAll("[data-animation='title-pin']");
  $containers.forEach(function ($container) {
    var $title = $container.querySelectorAll("[data-animation-child='title-pin']");
    $title.forEach(function ($child) {
      stickAnimation($container, $child);
    });
  });
}
function stickAnimation($container, $child) {
  var containerHeight = $container.offsetHeight;
  var childHeight = $child.offsetHeight;
  var scrollDistance = containerHeight - childHeight;
  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($child, {
    y: scrollDistance,
    scrollTrigger: {
      trigger: $container,
      start: "top top",
      end: function end() {
        return "+=".concat(containerHeight);
      },
      scrub: true,
      invalidateOnRefresh: true
    }
  });
}

/***/ }),

/***/ "./src/scripts/animations/mouse.js":
/*!*****************************************!*\
  !*** ./src/scripts/animations/mouse.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initMouseAnimation),
/* harmony export */   mouseEnterAnimation: () => (/* binding */ mouseEnterAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var $mouseContainer = document.querySelector("[data-animation='mouse']");
var $mouseball = $mouseContainer.querySelector("[data-animation-child='ball']");
var $mouseballImage = $mouseContainer.querySelector("[data-animation-child='image']");
var mouseEnterAnimation = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from($mouseball, {
  opacity: 0,
  scale: 0,
  duration: 1,
  ease: "bounce.inOut"
});
function initMouseAnimation() {
  var mm = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.matchMedia();
  changeMouseBallColor();
  changeMouseToImage();
  mm.add("(pointer: fine)", function () {
    var quickToX = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.quickTo($mouseContainer, "x");
    var quickToY = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.quickTo($mouseContainer, "y");
    document.addEventListener("mousemove", function (event) {
      var clientX = event.clientX,
        clientY = event.clientY;
      quickToX(clientX);
      quickToY(clientY);
    });
    document.addEventListener("mouseleave", function () {
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($mouseContainer, {
        scale: 0,
        ease: "power2.inOut"
      });
    });
    document.addEventListener("mouseenter", function () {
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($mouseContainer, {
        scale: 1,
        ease: "power2.inOut"
      });
    });
  });
}
function changeMouseBallColor() {
  var $sections = document.querySelectorAll("[data-mouse-color]");
  $sections.forEach(function ($section) {
    var color = $section.dataset.mouseColor;
    $section.addEventListener("mouseover", function () {
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($mouseball, {
        backgroundColor: color,
        duration: 0.5
      });
    });
  });
}
function changeMouseToImage() {
  var $mouseImage = document.querySelectorAll("[data-mouse-image]");
  var blendModeTimeOut = null;
  $mouseImage.forEach(function ($image) {
    var image = $image.dataset.mouseImage;
    $image.addEventListener("mouseover", function () {
      clearTimeout(blendModeTimeOut);
      $mouseContainer.style.mixBlendMode = "normal";
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($mouseballImage, {
        backgroundImage: "url(./assets/".concat(image, ")"),
        duration: 0.5,
        scale: 1
      });
    });
    $image.addEventListener("mouseleave", function () {
      blendModeTimeOut = setTimeout(function () {
        $mouseContainer.style.mixBlendMode = "difference";
      }, 500);
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($mouseballImage, {
        scale: 0,
        backgroundImage: "url(./assets/".concat(image, ")"),
        duration: 0.5
      });
    });
  });
}

/***/ }),

/***/ "./src/scripts/animations/pageLoader.js":
/*!**********************************************!*\
  !*** ./src/scripts/animations/pageLoader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _mouse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse.js */ "./src/scripts/animations/mouse.js");
/* harmony import */ var _titleFadeIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titleFadeIn.js */ "./src/scripts/animations/titleFadeIn.js");



var $wrapper = document.querySelector("[data-animation='loader']");
var $logo = document.querySelector("[data-animation-child='logo']");
function logoTimeline() {
  var $logo = document.querySelector("[data-animation-child='logo']");
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    delay: 1
  });
  tl.to($logo, {
    y: 0,
    bottom: 0,
    ease: "power2.out"
  }).to($logo, {
    delay: 0.25,
    yPercent: -100,
    ease: "power2.out"
  });
  return tl;
}
function wrapperTimeline() {
  var $wrapper = document.querySelector("[data-animation='loader']");
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline();
  tl.to($wrapper, {
    xPercent: 100
  });
  return tl;
}
function initPageLoaderAnimation() {
  var masterTimeline = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline();
  masterTimeline.add(logoTimeline($logo)).add(wrapperTimeline($wrapper).add(_mouse_js__WEBPACK_IMPORTED_MODULE_0__.mouseEnterAnimation, "<+.05").add(_titleFadeIn_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPageLoaderAnimation);

/***/ }),

/***/ "./src/scripts/animations/parallax.js":
/*!********************************************!*\
  !*** ./src/scripts/animations/parallax.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initParallaxEffectAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
function initParallaxEffectAnimation() {
  var $containers = document.querySelectorAll('[data-animation="parallax"]');
  $containers.forEach(function ($container) {
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from($container, {
      scrollTrigger: {
        trigger: $container,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: "-100svh",
      ease: "none"
    });
  });
}

/***/ }),

/***/ "./src/scripts/animations/shrink.js":
/*!******************************************!*\
  !*** ./src/scripts/animations/shrink.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initShrinkAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

function initShrinkAnimation() {
  var $shrinkElements = document.querySelectorAll('[data-animation="shrink"]');
  $shrinkElements.forEach(function ($shrinkElementChild) {
    var $childElements = $shrinkElementChild.querySelectorAll('[data-animation-child="shrink"]');
    $childElements.forEach(function ($el) {
      $shrinkElementChild.addEventListener("mouseenter", function () {
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($el, {
          scale: 0.8,
          rotation: 15,
          duration: 0.5,
          ease: "back.in(2)"
        });
      });
      $shrinkElementChild.addEventListener("mouseleave", function () {
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($el, {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(2)"
        });
      });
    });
  });
}

/***/ }),

/***/ "./src/scripts/animations/titleFadeIn.js":
/*!***********************************************!*\
  !*** ./src/scripts/animations/titleFadeIn.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTitleFadeInAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
function initTitleFadeInAnimation() {
  var $titles = document.querySelectorAll("[data-animation='title-fade-in']");
  $titles.forEach(function ($title) {
    var $titleText = $title.querySelectorAll("[data-animation-child='title-fade-in']");
    if ($titleText.length === 4) {
      var titleTextArray = Array.from($titleText);
      var first = titleTextArray.slice(0, 2);
      var second = titleTextArray.slice(2, 4);
      first.forEach(function ($text, index) {
        var delay = 0.2;
        textAnimation($text, $title, delay);
      });
      second.forEach(function ($text, index) {
        var delay = 0.2 + 0.75;
        textAnimation($text, $title, delay);
      });
    } else {
      $titleText.forEach(function ($text, index) {
        var delay = index * 0.2;
        textAnimation($text, $title, delay);
      });
    }
  });
  function textAnimation($text, $title, delay) {
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to($text, {
      scrollTrigger: {
        trigger: $title,
        start: "top 100%",
        toggleActions: "play reset play reset"
      },
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      rotation: 0,
      duration: 0.5,
      delay: delay
    });
  }
}

/***/ }),

/***/ "./src/scripts/lottie.js":
/*!*******************************!*\
  !*** ./src/scripts/lottie.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lottiefiles_dotlottie_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lottiefiles/dotlottie-web */ "./node_modules/@lottiefiles/dotlottie-web/dist/index.js");

function loadLottieFiles() {
  var $canvases = document.querySelectorAll("[data-lottie-source]");
  $canvases.forEach(function ($canvas) {
    var dotLottie = new _lottiefiles_dotlottie_web__WEBPACK_IMPORTED_MODULE_0__.DotLottie({
      autoplay: $canvas.getAttribute("data-lottie-autoplay") === "true",
      loop: $canvas.getAttribute("data-lottie-loop") === "true",
      speed: $canvas.getAttribute("data-lottie-speed") || 1,
      canvas: $canvas,
      layout: {
        fit: "cover",
        align: [0.5, 0]
      },
      src: "./assets/lotties/".concat($canvas.getAttribute("data-lottie-source"))
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLottieFiles);

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations/mouse */ "./src/scripts/animations/mouse.js");
/* harmony import */ var _animations_pageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/pageLoader */ "./src/scripts/animations/pageLoader.js");
/* harmony import */ var _animations_itemStick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/itemStick */ "./src/scripts/animations/itemStick.js");
/* harmony import */ var _animations_fadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/fadeIn */ "./src/scripts/animations/fadeIn.js");
/* harmony import */ var _animations_horizontalScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/horizontalScroll */ "./src/scripts/animations/horizontalScroll.js");
/* harmony import */ var _animations_fadeInListItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animations/fadeInListItems */ "./src/scripts/animations/fadeInListItems.js");
/* harmony import */ var _lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lottie */ "./src/scripts/lottie.js");
/* harmony import */ var _animations_grow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations/grow */ "./src/scripts/animations/grow.js");
/* harmony import */ var _animations_shrink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animations/shrink */ "./src/scripts/animations/shrink.js");
/* harmony import */ var _animations_parallax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animations/parallax */ "./src/scripts/animations/parallax.js");










document.addEventListener("DOMContentLoaded", function () {
  (0,_animations_mouse__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_animations_pageLoader__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_animations_itemStick__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_animations_horizontalScroll__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_animations_fadeInListItems__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_animations_fadeIn__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_animations_grow__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_animations_shrink__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_animations_parallax__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_lottie__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/main": 0,
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkquinten_claes_clar"] = self["webpackChunkquinten_claes_clar"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/scripts/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/styles/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;