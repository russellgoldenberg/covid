function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,e,n){t.$$.on_destroy.push(c(e,n))}function u(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function p(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function v(){return y("")}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return Array.from(t.childNodes)}function S(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?$(e):g(e)}function _(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return y(e)}function E(t){return _(t," ")}function A(t,e){e=""+e,t.data!==e&&(t.data=e)}function k(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=document.createElement("object");let r;return n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.type="text/html",n.tabIndex=-1,n.onload=()=>{r=n.contentDocument.defaultView,r.addEventListener("resize",e)},/Trident/.test(navigator.userAgent)?(t.appendChild(n),n.data="about:blank"):(n.data="about:blank",t.appendChild(n)),{cancel:()=>{r&&r.removeEventListener&&r.removeEventListener("resize",e),t.removeChild(n)}}}let C;function R(t){C=t}function L(){if(!C)throw new Error("Function called outside component initialization");return C}function P(t){L().$$.on_mount.push(t)}function q(t,e){L().$$.context.set(t,e)}function N(t){return L().$$.context.get(t)}const j=[],U=[],O=[],I=[],M=Promise.resolve();let T=!1;function z(t){O.push(t)}let B=!1;const D=new Set;function J(){if(!B){B=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];R(e),K(e.$$)}for(j.length=0;U.length;)U.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];D.has(e)||(D.add(e),e())}O.length=0}while(j.length);for(;I.length;)I.pop()();T=!1,B=!1,D.clear()}}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const V=new Set;let H;function F(){H={r:0,c:[],p:H}}function G(){H.r||o(H.c),H=H.p}function W(t,e){t&&t.i&&(V.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),H.c.push(()=>{V.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Y(t,e){t.d(1),e.delete(t.key)}function Q(t,e){X(t,1,1,()=>{e.delete(t.key)})}function Z(t,e,n,r,o,s,a,c,i,u,l,f){let p=t.length,d=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(o,s,h),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=u(c,t),i.c()),$.set(c,g[h]=i),c in m&&y.set(c,Math.abs(h-m[c]))}const b=new Set,v=new Set;function w(t){W(t,1),t.m(c,l),a.set(t.key,t),l=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],r=e.key,o=n.key;e===n?(l=e.first,p--,d--):$.has(o)?!a.has(r)||b.has(r)?w(e):v.has(o)?p--:y.get(r)>y.get(o)?(v.add(r),w(e)):(b.add(o),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;d;)w(g[d-1]);return g}function tt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function et(t){return"object"==typeof t&&null!==t?t:{}}function nt(t){t&&t.c()}function rt(t,e){t&&t.l(e)}function ot(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:u}=t.$$;a&&a.m(e,r),z(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),u.forEach(z)}function st(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){-1===t.$$.dirty[0]&&(j.push(t),T||(T=!0,M.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ct(e,n,s,a,c,i,u=[-1]){const l=C;R(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:u};let d=!1;p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&at(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(x(n.target)):p.fragment&&p.fragment.c(),n.intro&&W(e.$$.fragment),ot(e,n.target,n.anchor),J()),R(l)}class it{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ut=[];function lt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ut.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ut.push(n,e)}if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ft(e,n,r){const a=!Array.isArray(e),i=a?[e]:e,u=n.length<2;return function(t,e){return{subscribe:lt(t,e).subscribe}}(r,e=>{let r=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const r=n(a?l[0]:l,e);u?e(r):p=s(r)?r:t},h=i.map((t,e)=>c(t,t=>{l[e]=t,f&=~(1<<e),r&&d()},()=>{f|=1<<e}));return r=!0,d(),function(){o(h),p()}})}const pt={},dt=()=>({});function ht(t){let e;const n=t[1].default,r=u(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&r.p(l(n,t,t[0],null),f(n,t[0],e,null))},i(t){e||(W(r,t),e=!0)},o(t){X(r,t),e=!1},d(t){r&&r.d(t)}}}function mt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class gt extends it{constructor(t){super(),ct(this,t,mt,ht,a,{})}}function $t(e){let n,r,o,s,a,c,i,u=e[0].message+"";return{c(){n=g("h1"),r=y(e[1]),o=b(),s=g("p"),a=y(u),c=b(),i=v()},l(t){n=S(t,"H1",{});var l=x(n);r=_(l,e[1]),l.forEach(h),o=E(t),s=S(t,"P",{});var f=x(s);a=_(f,u),f.forEach(h),c=E(t),i=v()},m(t,e){d(t,n,e),p(n,r),d(t,o,e),d(t,s,e),p(s,a),d(t,c,e),d(t,i,e)},p(t,[e]){2&e&&A(r,t[1]),1&e&&u!==(u=t[0].message+"")&&A(a,u)},i:t,o:t,d(t){t&&h(n),t&&h(o),t&&h(s),t&&h(c),t&&h(i)}}}function yt(t,e,n){let{error:r}=e,{status:o}=e;return t.$set=t=>{"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status)},[r,o]}class bt extends it{constructor(t){super(),ct(this,t,yt,$t,a,{error:0,status:1})}}function vt(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&nt(c.$$.fragment),n=v()},l(t){c&&rt(c.$$.fragment,t),n=v()},m(t,e){c&&ot(c,t,e),d(t,n,e),r=!0},p(t,e){const r=16&e?tt(o,[et(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){F();const t=c;X(t.$$.fragment,1,0,()=>{st(t,1)}),G()}s?(nt((c=new s(a())).$$.fragment),W(c.$$.fragment,1),ot(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&W(c.$$.fragment,t),r=!0)},o(t){c&&X(c.$$.fragment,t),r=!1},d(t){t&&h(n),c&&st(c,t)}}}function wt(t){let e;const n=new bt({props:{error:t[0],status:t[1]}});return{c(){nt(n.$$.fragment)},l(t){rt(n.$$.fragment,t)},m(t,r){ot(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){st(n,t)}}}function xt(t){let e,n,r,o;const s=[wt,vt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=v()},l(t){n.l(t),r=v()},m(t,n){a[e].m(t,n),d(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(F(),X(a[i],1,1,()=>{a[i]=null}),G(),n=a[e],n||(n=a[e]=s[e](t),n.c()),W(n,1),n.m(r.parentNode,r))},i(t){o||(W(n),o=!0)},o(t){X(n),o=!1},d(t){a[e].d(t),t&&h(r)}}}function St(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[xt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new gt({props:o});return{c(){nt(s.$$.fragment)},l(t){rt(s.$$.fragment,t)},m(t,e){ot(s,t,e),n=!0},p(t,[e]){const n=12&e?tt(r,[4&e&&{segment:t[2][0]},8&e&&et(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(W(s.$$.fragment,t),n=!0)},o(t){X(s.$$.fragment,t),n=!1},d(t){st(s,t)}}}function _t(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;return q(pt,r),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)},[o,s,a,c,i,r]}class Et extends it{constructor(t){super(),ct(this,t,_t,St,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const At=[],kt=[{js:()=>import("./index.f4f9527d.js"),css:["index.f4f9527d.css"]}],Ct=[{pattern:/^\/$/,parts:[{i:0}]}];const Rt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Lt,Pt,qt,Nt=!1,jt=[],Ut="{}";const Ot={page:lt({}),preloading:lt(null),session:lt(Rt&&Rt.session)};let It,Mt;Ot.session.subscribe(async t=>{if(It=t,!Nt)return;Mt=!0;const e=Ht(new URL(location.href)),n=Pt={},{redirect:r,props:o,branch:s}=await Xt(e);n===Pt&&await Wt(r,s,o,e.page)});let Tt,zt=null;let Bt,Dt=1;const Jt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Kt={};function Vt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ht(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Rt.baseUrl))return null;let e=t.pathname.slice(Rt.baseUrl.length);if(""===e&&(e="/"),!At.some(t=>t.test(e)))for(let n=0;n<Ct.length;n+=1){const r=Ct[n],o=r.pattern.exec(e);if(o){const n=Vt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Ft(){return{x:pageXOffset,y:pageYOffset}}async function Gt(t,e,n,r){if(e)Bt=e;else{const t=Ft();Kt[Bt]=t,e=Bt=++Dt,Kt[Bt]=n?t:{x:0,y:0}}Bt=e,Lt&&Ot.preloading.set(!0);const o=zt&&zt.href===t.href?zt.promise:Xt(t);zt=null;const s=Pt={},{redirect:a,props:c,branch:i}=await o;if(s===Pt&&(await Wt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Kt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Kt[Bt]=t,t&&scrollTo(t.x,t.y)}}async function Wt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ht(new URL(t,document.baseURI));return n?(Jt[e.replaceState?"replaceState":"pushState"]({id:Bt},"",t),Gt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ot.page.set(r),Ot.preloading.set(!1),Lt)Lt.$set(n);else{n.stores={page:{subscribe:Ot.page.subscribe},preloading:{subscribe:Ot.preloading.subscribe},session:Ot.session},n.level0={props:await qt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Qt(t.nextSibling);Qt(t),Qt(e)}Lt=new Et({target:Tt,props:n,hydrate:!0})}jt=e,Ut=JSON.stringify(r.query),Nt=!0,Mt=!1}async function Xt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;qt||(qt=Rt.preloaded[0]||dt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},It));let i=1;try{const o=JSON.stringify(n.query),u=e.pattern.exec(n.path);let l=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ut)return!0;const o=jt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,u,o)&&(l=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Mt&&!l&&jt[c]&&jt[c].part===e.i)return jt[c];l=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Yt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(kt[e.i]);let m;return m=Nt||!Rt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},It):{}:Rt.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:f,match:u,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Yt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Qt(t){t.parentNode.removeChild(t)}function Zt(t){const e=Ht(new URL(t,document.baseURI));if(e)return zt&&t===zt.href||function(t,e){zt={href:t,promise:e}}(t,Xt(e)),zt.promise}let te;function ee(t){clearTimeout(te),te=setTimeout(()=>{ne(t)},20)}function ne(t){const e=oe(t.target);e&&"prefetch"===e.rel&&Zt(e.href)}function re(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=oe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ht(o);if(s){Gt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Jt.pushState({id:Bt},"",o.href)}}function oe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function se(t){if(Kt[Bt]=Ft(),t.state){const e=Ht(new URL(location.href));e?Gt(e,t.state.id):location.href=location.href}else Dt=Dt+1,function(t){Bt=t}(Dt),Jt.replaceState({id:Bt},"",location.href)}var ae;ae={target:document.querySelector("main")},"scrollRestoration"in Jt&&(Jt.scrollRestoration="manual"),function(t){Tt=t}(ae.target),addEventListener("click",re),addEventListener("popstate",se),addEventListener("touchstart",ne),addEventListener("mousemove",ee),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Jt.replaceState({id:Dt},"",e);const n=new URL(location.href);if(Rt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Rt;qt||(qt=s&&s[0]),Wt(null,[],{error:c,status:a,session:o,level0:{props:qt},level1:{props:{status:a,error:c},component:bt},segments:s},{host:e,path:n,query:Vt(r),params:{}})}();const r=Ht(n);return r?Gt(r,Dt,!0,t):void 0});export{_ as A,A as B,m as C,b as D,nt as E,E as F,rt as G,ot as H,st as I,F as J,G as K,P as L,Q as M,it as S,S as a,x as b,u as c,h as d,g as e,w as f,z as g,d as h,ct as i,k as j,l as k,f as l,X as m,ft as n,q as o,$ as p,p as q,N as r,a as s,W as t,i as u,Z as v,lt as w,Y as x,t as y,y as z};