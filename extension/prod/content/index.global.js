(()=>{var ke=Object.create;var z=Object.defineProperty;var Se=Object.getOwnPropertyDescriptor;var Ie=Object.getOwnPropertyNames;var Me=Object.getPrototypeOf,Ce=Object.prototype.hasOwnProperty;var Te=e=>z(e,"__esModule",{value:!0});var R=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Pe=(e,r,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Ie(r))!Ce.call(e,o)&&o!=="default"&&z(e,o,{get:()=>r[o],enumerable:!(s=Se(r,o))||s.enumerable});return e},k=e=>Pe(Te(z(e!=null?ke(Me(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var oe=R((U,ne)=>{(function(e,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof U!="undefined")r(ne);else{var s={exports:{}};r(s),e.browser=s.exports}})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:U,function(e){"use strict";if(typeof browser=="undefined"||Object.getPrototypeOf(browser)!==Object.prototype){let r="The message port closed before a response was received.",s="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",o=c=>{let A={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(A).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class m extends WeakMap{constructor(n,a=void 0){super(a);this.createItem=n}get(n){return this.has(n)||this.set(n,this.createItem(n)),super.get(n)}}let g=t=>t&&typeof t=="object"&&typeof t.then=="function",u=(t,n)=>(...a)=>{c.runtime.lastError?t.reject(new Error(c.runtime.lastError.message)):n.singleCallbackArg||a.length<=1&&n.singleCallbackArg!==!1?t.resolve(a[0]):t.resolve(a)},x=t=>t==1?"argument":"arguments",O=(t,n)=>function(l,...p){if(p.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${x(n.minArgs)} for ${t}(), got ${p.length}`);if(p.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${x(n.maxArgs)} for ${t}(), got ${p.length}`);return new Promise((b,w)=>{if(n.fallbackToNoCallback)try{l[t](...p,u({resolve:b,reject:w},n))}catch(i){console.warn(`${t} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),l[t](...p),n.fallbackToNoCallback=!1,n.noCallback=!0,b()}else n.noCallback?(l[t](...p),b()):l[t](...p,u({resolve:b,reject:w},n))})},C=(t,n,a)=>new Proxy(n,{apply(l,p,b){return a.call(p,t,...b)}}),_=Function.call.bind(Object.prototype.hasOwnProperty),j=(t,n={},a={})=>{let l=Object.create(null),p={has(w,i){return i in t||i in l},get(w,i,h){if(i in l)return l[i];if(!(i in t))return;let f=t[i];if(typeof f=="function")if(typeof n[i]=="function")f=C(t,t[i],n[i]);else if(_(a,i)){let E=O(i,a[i]);f=C(t,t[i],E)}else f=f.bind(t);else if(typeof f=="object"&&f!==null&&(_(n,i)||_(a,i)))f=j(f,n[i],a[i]);else if(_(a,"*"))f=j(f,n[i],a["*"]);else return Object.defineProperty(l,i,{configurable:!0,enumerable:!0,get(){return t[i]},set(E){t[i]=E}}),f;return l[i]=f,f},set(w,i,h,f){return i in l?l[i]=h:t[i]=h,!0},defineProperty(w,i,h){return Reflect.defineProperty(l,i,h)},deleteProperty(w,i){return Reflect.deleteProperty(l,i)}},b=Object.create(t);return new Proxy(b,p)},F=t=>({addListener(n,a,...l){n.addListener(t.get(a),...l)},hasListener(n,a){return n.hasListener(t.get(a))},removeListener(n,a){n.removeListener(t.get(a))}}),_e=new m(t=>typeof t!="function"?t:function(a){let l=j(a,{},{getContent:{minArgs:0,maxArgs:0}});t(l)}),re=!1,se=new m(t=>typeof t!="function"?t:function(a,l,p){let b=!1,w,i=new Promise(T=>{w=function(y){re||(console.warn(s,new Error().stack),re=!0),b=!0,T(y)}}),h;try{h=t(a,l,w)}catch(T){h=Promise.reject(T)}let f=h!==!0&&g(h);if(h!==!0&&!f&&!b)return!1;let E=T=>{T.then(y=>{p(y)},y=>{let W;y&&(y instanceof Error||typeof y.message=="string")?W=y.message:W="An unexpected error occurred",p({__mozWebExtensionPolyfillReject__:!0,message:W})}).catch(y=>{console.error("Failed to send onMessage rejected reply",y)})};return E(f?h:i),!0}),ve=({reject:t,resolve:n},a)=>{c.runtime.lastError?c.runtime.lastError.message===r?n():t(new Error(c.runtime.lastError.message)):a&&a.__mozWebExtensionPolyfillReject__?t(new Error(a.message)):n(a)},te=(t,n,a,...l)=>{if(l.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${x(n.minArgs)} for ${t}(), got ${l.length}`);if(l.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${x(n.maxArgs)} for ${t}(), got ${l.length}`);return new Promise((p,b)=>{let w=ve.bind(null,{resolve:p,reject:b});l.push(w),a.sendMessage(...l)})},Ee={devtools:{network:{onRequestFinished:F(_e)}},runtime:{onMessage:F(se),onMessageExternal:F(se),sendMessage:te.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:te.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},B={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return A.privacy={network:{"*":B},services:{"*":B},websites:{"*":B}},j(c,Ee,A)};if(typeof chrome!="object"||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=o(chrome)}else e.exports=browser})});var V=R(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.browser=oe()});var ae=R((Xe,ie)=>{"use strict";var P=class extends Error{constructor(r){super(P._prepareSuperMessage(r));Object.defineProperty(this,"name",{value:"NonError",configurable:!0,writable:!0}),Error.captureStackTrace&&Error.captureStackTrace(this,P)}static _prepareSuperMessage(r){try{return JSON.stringify(r)}catch{return String(r)}}},Ne=[{property:"name",enumerable:!1},{property:"message",enumerable:!1},{property:"stack",enumerable:!1},{property:"code",enumerable:!0}],J=Symbol(".toJSON called"),Oe=e=>{e[J]=!0;let r=e.toJSON();return delete e[J],r},H=({from:e,seen:r,to_:s,forceEnumerable:o,maxDepth:c,depth:A})=>{let m=s||(Array.isArray(e)?[]:{});if(r.push(e),A>=c)return m;if(typeof e.toJSON=="function"&&e[J]!==!0)return Oe(e);for(let[g,u]of Object.entries(e)){if(typeof Buffer=="function"&&Buffer.isBuffer(u)){m[g]="[object Buffer]";continue}if(typeof u!="function"){if(!u||typeof u!="object"){m[g]=u;continue}if(!r.includes(e[g])){A++,m[g]=H({from:e[g],seen:r.slice(),forceEnumerable:o,maxDepth:c,depth:A});continue}m[g]="[Circular]"}}for(let{property:g,enumerable:u}of Ne)typeof e[g]=="string"&&Object.defineProperty(m,g,{value:e[g],enumerable:o?!0:u,configurable:!0,writable:!0});return m},je=(e,r={})=>{let{maxDepth:s=Number.POSITIVE_INFINITY}=r;return typeof e=="object"&&e!==null?H({from:e,seen:[],forceEnumerable:!0,maxDepth:s,depth:0}):typeof e=="function"?`[Function: ${e.name||"anonymous"}]`:e},Re=(e,r={})=>{let{maxDepth:s=Number.POSITIVE_INFINITY}=r;if(e instanceof Error)return e;if(typeof e=="object"&&e!==null&&!Array.isArray(e)){let o=new Error;return H({from:e,seen:[],to_:o,maxDepth:s,depth:0}),o}return new P(e)};ie.exports={serializeError:je,deserializeError:Re}});var D=R((er,Z)=>{var $e=e=>typeof crypto!="undefined"&&typeof crypto.getRandomValues=="function"?()=>{let r=crypto.getRandomValues(new Uint8Array(1))[0];return(r>=e?r%e:r).toString(e)}:()=>Math.floor(Math.random()*e).toString(e),ge=(e=7,r=!1)=>Array.from({length:e},$e(r?16:36)).join("");Z.exports=ge;Z.exports.default=ge});var $=()=>({events:{},emit(e,...r){(this.events[e]||[]).forEach(s=>s(...r))},on(e,r){return(this.events[e]=this.events[e]||[]).push(r),()=>this.events[e]=(this.events[e]||[]).filter(s=>s!==r)}});var N=k(V()),de=k(ae()),ue=k(D()),fe=k(V()),he=k(D()),He=k(D());var De=Object.defineProperty,Le=Object.defineProperties,Fe=Object.getOwnPropertyDescriptors,me=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,le=(e,r,s)=>r in e?De(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,ce=(e,r)=>{for(var s in r||(r={}))Be.call(r,s)&&le(e,s,r[s]);if(me)for(var s of me(r))We.call(r,s)&&le(e,s,r[s]);return e},Ae=(e,r)=>Le(e,Fe(r)),ze=/^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/,pe=e=>{let[,r,s]=e.match(ze)||[];return{context:r,tabId:+s}};var G=e=>fe.browser[e],d=G("devtools")?"devtools":G("tabs")?"background":G("extension")?"content-script":typeof document!="undefined"?"window":null,xe=(0,ue.default)(),Y=new Map,be=new Map,K=new Set,Q=new Map,v=null,S,we;Ue();function Ue(){if(d===null)throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");if((d==="window"||d==="content-script")&&window.addEventListener("message",Ve),d==="content-script"&&top===window&&(v=N.browser.runtime.connect(),v.onMessage.addListener(e=>{I(e)})),d==="devtools"){let{tabId:e}=N.browser.devtools.inspectedWindow,r=`devtools@${e}`;v=N.browser.runtime.connect(void 0,{name:r}),v.onMessage.addListener(s=>{I(s)}),v.onDisconnect.addListener(()=>{v=null})}d==="background"&&N.browser.runtime.onConnect.addListener(e=>{let r=e.name||`content-script@${e.sender.tab.id}`,{tabId:s}=pe(r);!s||(Q.set(r,e),K.forEach(o=>{o.resolvedDestination===r&&(e.postMessage(o.message),K.delete(o))}),e.onDisconnect.addListener(()=>{Q.delete(r)}),e.onMessage.addListener(o=>{var c;((c=o==null?void 0:o.origin)==null?void 0:c.context)&&(o.origin.tabId=s,I(o))}))})}function I(e){let{origin:r,destination:s}=e;if(!e.hops.includes(xe)&&(e.hops.push(xe),!(d==="content-script"&&[s,r].some(o=>(o==null?void 0:o.context)==="window")&&!we))){if(!s)return qe(e);if(s.context){if(d==="window")return X(window,e);if(d==="content-script"&&s.context==="window")return e.destination=null,X(window,e);if(d==="devtools"||d==="content-script")return s.context==="background"&&(e.destination=null),v.postMessage(e);if(d==="background"){let{context:o,tabId:c}=s,{tabId:A}=r;o!=="window"?e.destination=null:e.destination.tabId=null;let m=`${o==="window"?"content-script":o}@${c||A}`,g=Q.get(m);g?g.postMessage(e):K.add({resolvedDestination:m,message:e})}}}}async function qe(e){let{transactionId:r,messageID:s,messageType:o}=e,c=()=>{let m=Y.get(r);if(m){let{err:g,data:u}=e;if(g){let x=g,O=self[x.name],C=new(typeof O=="function"?O:Error)(x.message);for(let _ in x)C[_]=x[_];m.reject(C)}else m.resolve(u);Y.delete(r)}},A=async()=>{let m,g,u=!1;try{let x=be.get(s);if(typeof x=="function")m=await x({sender:e.origin,id:s,data:e.data,timestamp:e.timestamp});else throw u=!0,new Error(`[webext-bridge] No handler registered in '${d}' to accept messages with id '${s}'`)}catch(x){g=x}finally{if(g&&(e.err=(0,de.serializeError)(g)),I(Ae(ce({},e),{messageType:"reply",data:m,origin:{context:d,tabId:null},destination:e.origin,hops:[]})),g&&!u)throw m}};switch(o){case"reply":return c();case"message":return A()}}async function Ve({data:e,ports:r}){d==="content-script"&&!we||(e.cmd==="__crx_bridge_verify_listening"&&e.scope===S&&e.context!==d?r[0].postMessage(!0):e.cmd==="__crx_bridge_route_message"&&e.scope===S&&e.context!==d&&(d==="content-script"&&(e.payload.origin="window"),I(e.payload)))}function X(e,r){Je();let s=new MessageChannel,o=setTimeout(()=>{s.port1.onmessage=null,X(e,r)},300);s.port1.onmessage=()=>{clearTimeout(o),e.postMessage({cmd:"__crx_bridge_route_message",scope:S,context:d,payload:r},"*")},e.postMessage({cmd:"__crx_bridge_verify_listening",scope:S,context:d},"*",[s.port2])}function Je(){if(typeof S!="string"||S.length===0)throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``)}function L(e,r){be.set(e,r)}async function ye(e,r,s){let o=typeof s=="string"?pe(s):s,c="Bridge#sendMessage ->";if(!o.context)throw new TypeError(`${c} Destination must be any one of known destinations`);if(d==="background"){let{context:A,tabId:m}=o;if(A!=="background"&&!m)throw new TypeError(`${c} When sending messages from background page, use @tabId syntax to target specific tab`)}return new Promise((A,m)=>{let g={messageID:e,data:r,destination:o,messageType:"message",transactionId:(0,he.default)(),origin:{context:d,tabId:null},hops:[],timestamp:Date.now()};Y.set(g.transactionId,{resolve:A,reject:m}),I(g)})}var M=class{constructor(e){this.handleStreamClose=()=>{this.isClosed||(this.isClosed=!0,this.emitter.emit("closed",!0),this.emitter.events={})},this.internalInfo=e,this.emitter=$(),this.isClosed=!1,M.initDone||(L("__crx_bridge_stream_transfer__",r=>{let{streamId:s,streamTransfer:o,action:c}=r.data,A=M.openStreams.get(s);A&&!A.isClosed&&(c==="transfer"&&A.emitter.emit("message",o),c==="close"&&(M.openStreams.delete(s),A.handleStreamClose()))}),M.initDone=!0),M.openStreams.set(e.streamId,this)}get info(){return this.internalInfo}send(e){if(this.isClosed)throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");ye("__crx_bridge_stream_transfer__",{streamId:this.internalInfo.streamId,streamTransfer:e,action:"transfer"},this.internalInfo.endpoint)}close(e){e&&this.send(e),this.handleStreamClose(),ye("__crx_bridge_stream_transfer__",{streamId:this.internalInfo.streamId,streamTransfer:null,action:"close"},this.internalInfo.endpoint)}onMessage(e){return this.getDisposable("message",e)}onClose(e){return this.getDisposable("closed",e)}getDisposable(e,r){let s=this.emitter.on(e,r);return Object.assign(s,{dispose:s,close:s})}},ee=M;ee.initDone=!1;ee.openStreams=new Map;var tr=new Map,Ze=new Map,Ge=$();L("__crx_bridge_stream_open__",e=>new Promise(r=>{let{sender:s,data:o}=e,{channel:c}=o,A=!1,m=()=>{},g=()=>{let u=Ze.get(c);typeof u=="function"?(u(new ee(Ae(ce({},o),{endpoint:s}))),A&&m(),r(!0)):A||(A=!0,m=Ge.on("did-change-stream-callbacks",g))};g()}));console.info("[vitesse-modernized-chrome-ext] Hello world from content script");L("tab-prev",({data:e})=>{console.log(`[vitesse-modernized-chrome-ext] Navigate from page "${e.title}"`)});})();
