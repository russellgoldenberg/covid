function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,e,n){t.$$.on_destroy.push(c(e,n))}function u(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function p(t){return null==t?"":t}function d(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function w(){return b("")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?y(e):$(e)}function A(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return b(e)}function L(t){return A(t," ")}function R(t,e){e=""+e,t.data!==e&&(t.data=e)}function k(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function C(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=document.createElement("object");let r;return n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.type="text/html",n.tabIndex=-1,n.onload=()=>{r=n.contentDocument.defaultView,r.addEventListener("resize",e)},/Trident/.test(navigator.userAgent)?(t.appendChild(n),n.data="about:blank"):(n.data="about:blank",t.appendChild(n)),{cancel:()=>{r&&r.removeEventListener&&r.removeEventListener("resize",e),t.removeChild(n)}}}function P(t,e,n){t.classList[n?"add":"remove"](e)}let N;function q(t){N=t}function j(){if(!N)throw new Error("Function called outside component initialization");return N}function O(t,e){j().$$.context.set(t,e)}function U(t){return j().$$.context.get(t)}const I=[],M=[],T=[],z=[],B=Promise.resolve();let D=!1;function J(t){T.push(t)}let K=!1;const V=new Set;function H(){if(!K){K=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];q(e),F(e.$$)}for(I.length=0;M.length;)M.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];V.has(e)||(V.add(e),e())}T.length=0}while(I.length);for(;z.length;)z.pop()();D=!1,K=!1,V.clear()}}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}const G=new Set;let Q;function W(){Q={r:0,c:[],p:Q}}function X(){Q.r||o(Q.c),Q=Q.p}function Y(t,e){t&&t.i&&(G.delete(t),t.i(e))}function Z(t,e,n,r){if(t&&t.o){if(G.has(t))return;G.add(t),Q.c.push(()=>{G.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function tt(t,e){t.d(1),e.delete(t.key)}function et(t,e){Z(t,1,1,()=>{e.delete(t.key)})}function nt(t,e,n,r,o,s,a,c,i,u,l,f){let p=t.length,d=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(o,s,h),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=u(c,t),i.c()),$.set(c,g[h]=i),c in m&&y.set(c,Math.abs(h-m[c]))}const b=new Set,v=new Set;function w(t){Y(t,1),t.m(c,l),a.set(t.key,t),l=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],r=e.key,o=n.key;e===n?(l=e.first,p--,d--):$.has(o)?!a.has(r)||b.has(r)?w(e):v.has(o)?p--:y.get(r)>y.get(o)?(v.add(r),w(e)):(b.add(o),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;d;)w(g[d-1]);return g}function rt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function ot(t){return"object"==typeof t&&null!==t?t:{}}function st(t){t&&t.c()}function at(t,e){t&&t.l(e)}function ct(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:u}=t.$$;a&&a.m(e,r),J(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),u.forEach(J)}function it(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(I.push(t),D||(D=!0,B.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,s,a,c,i,u=[-1]){const l=N;q(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:u};let d=!1;p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&ut(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(E(n.target)):p.fragment&&p.fragment.c(),n.intro&&Y(e.$$.fragment),ct(e,n.target,n.anchor),H()),q(l)}class ft{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const pt=[];function dt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!pt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),pt.push(n,e)}if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ht(e,n,r){const a=!Array.isArray(e),i=a?[e]:e,u=n.length<2;return function(t,e){return{subscribe:dt(t,e).subscribe}}(r,e=>{let r=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const r=n(a?l[0]:l,e);u?e(r):p=s(r)?r:t},h=i.map((t,e)=>c(t,t=>{l[e]=t,f&=~(1<<e),r&&d()},()=>{f|=1<<e}));return r=!0,d(),function(){o(h),p()}})}const mt={},gt=()=>({});function $t(t){let e;const n=t[1].default,r=u(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&r.p(l(n,t,t[0],null),f(n,t[0],e,null))},i(t){e||(Y(r,t),e=!0)},o(t){Z(r,t),e=!1},d(t){r&&r.d(t)}}}function yt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class bt extends ft{constructor(t){super(),lt(this,t,yt,$t,a,{})}}function vt(e){let n,r,o,s,a,c,i,u=e[0].message+"";return{c(){n=$("h1"),r=b(e[1]),o=v(),s=$("p"),a=b(u),c=v(),i=w()},l(t){n=_(t,"H1",{});var l=E(n);r=A(l,e[1]),l.forEach(m),o=L(t),s=_(t,"P",{});var f=E(s);a=A(f,u),f.forEach(m),c=L(t),i=w()},m(t,e){h(t,n,e),d(n,r),h(t,o,e),h(t,s,e),d(s,a),h(t,c,e),h(t,i,e)},p(t,[e]){2&e&&R(r,t[1]),1&e&&u!==(u=t[0].message+"")&&R(a,u)},i:t,o:t,d(t){t&&m(n),t&&m(o),t&&m(s),t&&m(c),t&&m(i)}}}function wt(t,e,n){let{error:r}=e,{status:o}=e;return t.$set=t=>{"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status)},[r,o]}class xt extends ft{constructor(t){super(),lt(this,t,wt,vt,a,{error:0,status:1})}}function St(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&st(c.$$.fragment),n=w()},l(t){c&&at(c.$$.fragment,t),n=w()},m(t,e){c&&ct(c,t,e),h(t,n,e),r=!0},p(t,e){const r=16&e?rt(o,[ot(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){W();const t=c;Z(t.$$.fragment,1,0,()=>{it(t,1)}),X()}s?(st((c=new s(a())).$$.fragment),Y(c.$$.fragment,1),ct(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&Y(c.$$.fragment,t),r=!0)},o(t){c&&Z(c.$$.fragment,t),r=!1},d(t){t&&m(n),c&&it(c,t)}}}function Et(t){let e;const n=new xt({props:{error:t[0],status:t[1]}});return{c(){st(n.$$.fragment)},l(t){at(n.$$.fragment,t)},m(t,r){ct(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){Z(n.$$.fragment,t),e=!1},d(t){it(n,t)}}}function _t(t){let e,n,r,o;const s=[Et,St],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=w()},l(t){n.l(t),r=w()},m(t,n){a[e].m(t,n),h(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(W(),Z(a[i],1,1,()=>{a[i]=null}),X(),n=a[e],n||(n=a[e]=s[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){o||(Y(n),o=!0)},o(t){Z(n),o=!1},d(t){a[e].d(t),t&&m(r)}}}function At(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[_t]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new bt({props:o});return{c(){st(s.$$.fragment)},l(t){at(s.$$.fragment,t)},m(t,e){ct(s,t,e),n=!0},p(t,[e]){const n=12&e?rt(r,[4&e&&{segment:t[2][0]},8&e&&ot(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(Y(s.$$.fragment,t),n=!0)},o(t){Z(s.$$.fragment,t),n=!1},d(t){it(s,t)}}}function Lt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;return O(mt,r),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)},[o,s,a,c,i,r]}class Rt extends ft{constructor(t){super(),lt(this,t,Lt,At,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const kt=[],Ct=[{js:()=>import("./index.16d87c5d.js"),css:["index.16d87c5d.css"]}],Pt=[{pattern:/^\/$/,parts:[{i:0}]}];const Nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let qt,jt,Ot,Ut=!1,It=[],Mt="{}";const Tt={page:dt({}),preloading:dt(null),session:dt(Nt&&Nt.session)};let zt,Bt;Tt.session.subscribe(async t=>{if(zt=t,!Ut)return;Bt=!0;const e=Qt(new URL(location.href)),n=jt={},{redirect:r,props:o,branch:s}=await Zt(e);n===jt&&await Yt(r,s,o,e.page)});let Dt,Jt=null;let Kt,Vt=1;const Ht="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ft={};function Gt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Nt.baseUrl))return null;let e=t.pathname.slice(Nt.baseUrl.length);if(""===e&&(e="/"),!kt.some(t=>t.test(e)))for(let n=0;n<Pt.length;n+=1){const r=Pt[n],o=r.pattern.exec(e);if(o){const n=Gt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Wt(){return{x:pageXOffset,y:pageYOffset}}async function Xt(t,e,n,r){if(e)Kt=e;else{const t=Wt();Ft[Kt]=t,e=Kt=++Vt,Ft[Kt]=n?t:{x:0,y:0}}Kt=e,qt&&Tt.preloading.set(!0);const o=Jt&&Jt.href===t.href?Jt.promise:Zt(t);Jt=null;const s=jt={},{redirect:a,props:c,branch:i}=await o;if(s===jt&&(await Yt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ft[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Ft[Kt]=t,t&&scrollTo(t.x,t.y)}}async function Yt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Qt(new URL(t,document.baseURI));return n?(Ht[e.replaceState?"replaceState":"pushState"]({id:Kt},"",t),Xt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Tt.page.set(r),Tt.preloading.set(!1),qt)qt.$set(n);else{n.stores={page:{subscribe:Tt.page.subscribe},preloading:{subscribe:Tt.preloading.subscribe},session:Tt.session},n.level0={props:await Ot};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ee(t.nextSibling);ee(t),ee(e)}qt=new Rt({target:Dt,props:n,hydrate:!0})}It=e,Mt=JSON.stringify(r.query),Ut=!0,Bt=!1}async function Zt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Ot||(Ot=Nt.preloaded[0]||gt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},zt));let i=1;try{const o=JSON.stringify(n.query),u=e.pattern.exec(n.path);let l=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Mt)return!0;const o=It[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,u,o)&&(l=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Bt&&!l&&It[c]&&It[c].part===e.i)return It[c];l=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(te);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Ct[e.i]);let m;return m=Ut||!Nt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},zt):{}:Nt.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:f,match:u,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function te(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function ee(t){t.parentNode.removeChild(t)}function ne(t){const e=Qt(new URL(t,document.baseURI));if(e)return Jt&&t===Jt.href||function(t,e){Jt={href:t,promise:e}}(t,Zt(e)),Jt.promise}let re;function oe(t){clearTimeout(re),re=setTimeout(()=>{se(t)},20)}function se(t){const e=ce(t.target);e&&"prefetch"===e.rel&&ne(e.href)}function ae(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Qt(o);if(s){Xt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Ht.pushState({id:Kt},"",o.href)}}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ie(t){if(Ft[Kt]=Wt(),t.state){const e=Qt(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else Vt=Vt+1,function(t){Kt=t}(Vt),Ht.replaceState({id:Kt},"",location.href)}var ue;ue={target:document.querySelector("main")},"scrollRestoration"in Ht&&(Ht.scrollRestoration="manual"),function(t){Dt=t}(ue.target),addEventListener("click",ae),addEventListener("popstate",ie),addEventListener("touchstart",se),addEventListener("mousemove",oe),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ht.replaceState({id:Vt},"",e);const n=new URL(location.href);if(Nt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Nt;Ot||(Ot=s&&s[0]),Yt(null,[],{error:c,status:a,session:o,level0:{props:Ot},level1:{props:{status:a,error:c},component:xt},segments:s},{host:e,path:n,query:Gt(r),params:{}})}();const r=Qt(n);return r?Xt(r,Vt,!0,t):void 0});export{A,R as B,g as C,w as D,v as E,L as F,p as G,k as H,P as I,st as J,at as K,ct as L,it as M,W as N,X as O,x as P,o as Q,et as R,ft as S,_ as a,E as b,u as c,m as d,$ as e,S as f,J as g,h,lt as i,C as j,l as k,f as l,Z as m,ht as n,O as o,U as p,i as q,y as r,a as s,Y as t,d as u,nt as v,dt as w,tt as x,t as y,b as z};
