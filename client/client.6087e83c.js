function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function v(t){return b(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function x(t){w=t}function E(t,e){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.context.set(t,e)}const R=[],A=[],P=[],j=[],C=Promise.resolve();let L=!1;function q(t){P.push(t)}let N=!1;const O=new Set;function U(){if(!N){N=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];x(e),I(e.$$)}for(R.length=0;A.length;)A.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];O.has(e)||(O.add(e),e())}P.length=0}while(R.length);for(;j.length;)j.pop()();L=!1,N=!1,O.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const D=new Set;let k;function V(){k={r:0,c:[],p:k}}function T(){k.r||o(k.c),k=k.p}function B(t,e){t&&t.i&&(D.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),k.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function H(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function K(t){return"object"==typeof t&&null!==t?t:{}}function M(t){t&&t.c()}function z(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),q(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(q)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(R.push(t),L||(L=!0,C.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,s,c,a,i,l=[-1]){const f=w;x(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&W(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&B(e.$$.fragment),F(e,n.target,n.anchor),U()}x(f)}class Y{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Q=[];function Z(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!Q.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Q.push(n,e)}if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const tt={},et=()=>({});function nt(t){let e,n;const r=t[1].default,o=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(r,t,t[0],null);return{c(){e=p("main"),o&&o.c()},l(t){var n=$(e=y(t,"MAIN",{}));o&&o.l(n),n.forEach(u)},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&o.p(a(r,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(r,t[0],e,null))},i(t){n||(B(o,t),n=!0)},o(t){J(o,t),n=!1},d(t){t&&u(e),o&&o.d(t)}}}function rt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=(t=>{"$$scope"in t&&n(0,o=t.$$scope)}),[o,r]}class ot extends Y{constructor(t){super(),X(this,t,rt,nt,c,{})}}function st(e){let n,r,o,s,c,a,f,m,w=e[1].message+"";return document.title=n=e[1].message,{c(){r=h(),o=p("div"),s=p("div"),c=p("div"),a=d(e[0]),f=d(": "),m=d(w),this.h()},l(t){S('[data-svelte="svelte-dlmwra"]',document.head).forEach(u),r=v(t);var n=$(o=y(t,"DIV",{class:!0})),i=$(s=y(n,"DIV",{class:!0})),l=$(c=y(i,"DIV",{class:!0}));a=b(l,e[0]),f=b(l,": "),m=b(l,w),l.forEach(u),i.forEach(u),n.forEach(u),this.h()},h(){g(c,"class","siimple-h3"),g(s,"class","siimple--mx-4 siimple--my-4"),g(o,"class","siimple-content--small")},m(t,e){l(t,r,e),l(t,o,e),i(o,s),i(s,c),i(c,a),i(c,f),i(c,m)},p(t,[e]){2&e&&n!==(n=t[1].message)&&(document.title=n),1&e&&_(a,t[0]),2&e&&w!==(w=t[1].message+"")&&_(m,w)},i:t,o:t,d(t){t&&u(r),t&&u(o)}}}function ct(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)}),[r,o]}class at extends Y{constructor(t){super(),X(this,t,ct,st,c,{status:0,error:1})}}function it(t){let n,r;const o=[t[4].props];var s=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var a=new s(c());return{c(){a&&M(a.$$.fragment),n=m()},l(t){a&&z(a.$$.fragment,t),n=m()},m(t,e){a&&F(a,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?H(o,[K(t[4].props)]):{};if(s!==(s=t[4].component)){if(a){V();const t=a;J(t.$$.fragment,1,0,()=>{G(t,1)}),T()}s?(M((a=new s(c())).$$.fragment),B(a.$$.fragment,1),F(a,n.parentNode,n)):a=null}else s&&a.$set(r)},i(t){r||(a&&B(a.$$.fragment,t),r=!0)},o(t){a&&J(a.$$.fragment,t),r=!1},d(t){t&&u(n),a&&G(a,t)}}}function lt(t){let e;const n=new at({props:{error:t[0],status:t[1]}});return{c(){M(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,r){F(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function ut(t){let e,n,r,o;const s=[lt,it],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){c[e].m(t,n),l(t,r,n),o=!0},p(t,o){let i=e;(e=a(t))===i?c[e].p(t,o):(V(),J(c[i],1,1,()=>{c[i]=null}),T(),(n=c[e])||(n=c[e]=s[e](t)).c(),B(n,1),n.m(r.parentNode,r))},i(t){o||(B(n),o=!0)},o(t){J(n),o=!1},d(t){c[e].d(t),t&&u(r)}}}function ft(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ut]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new ot({props:o});return{c(){M(s.$$.fragment)},l(t){z(s.$$.fragment,t)},m(t,e){F(s,t,e),n=!0},p(t,[e]){const n=12&e?H(r,[4&e&&{segment:t[2][0]},8&e&&K(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(B(s.$$.fragment,t),n=!0)},o(t){J(s.$$.fragment,t),n=!1},d(t){G(s,t)}}}function pt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e;return E(tt,r),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1)}),[o,s,c,a,i,r]}class dt extends Y{constructor(t){super(),X(this,t,pt,ft,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const ht=[/^\/index.json$/,/^\/blog\/([^\/]+?).json$/],mt=[{js:()=>import("./index.eb09eeed.js"),css:["index.eb09eeed.css"]},{js:()=>import("./about.b61b7a63.js"),css:[]},{js:()=>import("./[slug].45c38ba9.js"),css:[]}],gt=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:2,params:e=>({slug:t(e[1])})}]}])(decodeURIComponent);const $t="undefined"!=typeof __SAPPER__&&__SAPPER__;let yt,bt,vt,_t=!1,St=[],wt="{}";const xt={page:Z({}),preloading:Z(null),session:Z($t&&$t.session)};let Et,Rt;xt.session.subscribe(async t=>{if(Et=t,!_t)return;Rt=!0;const e=Ot(new URL(location.href)),n=bt={},{redirect:r,props:o,branch:s}=await kt(e);n===bt&&await Dt(r,s,o,e.page)});let At,Pt=null;let jt,Ct=1;const Lt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},qt={};function Nt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ot(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith($t.baseUrl))return null;let e=t.pathname.slice($t.baseUrl.length);if(""===e&&(e="/"),!ht.some(t=>t.test(e)))for(let n=0;n<gt.length;n+=1){const r=gt[n],o=r.pattern.exec(e);if(o){const n=Nt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Ut(){return{x:pageXOffset,y:pageYOffset}}async function It(t,e,n,r){if(e)jt=e;else{const t=Ut();qt[jt]=t,e=jt=++Ct,qt[jt]=n?t:{x:0,y:0}}jt=e,yt&&xt.preloading.set(!0);const o=Pt&&Pt.href===t.href?Pt.promise:kt(t);Pt=null;const s=bt={},{redirect:c,props:a,branch:i}=await o;if(s===bt&&(await Dt(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=qt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}qt[jt]=t,t&&scrollTo(t.x,t.y)}}async function Dt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ot(new URL(t,document.baseURI));return n?(Lt[e.replaceState?"replaceState":"pushState"]({id:jt},"",t),It(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(xt.page.set(r),xt.preloading.set(!1),yt)yt.$set(n);else{n.stores={page:{subscribe:xt.page.subscribe},preloading:{subscribe:xt.preloading.subscribe},session:xt.session},n.level0={props:await vt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Tt(t.nextSibling);Tt(t),Tt(e)}yt=new dt({target:At,props:n,hydrate:!0})}St=e,wt=JSON.stringify(r.query),_t=!0,Rt=!1}async function kt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let a;vt||(vt=$t.preloaded[0]||et.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Et));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==wt)return!0;const o=St[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!Rt&&!u&&St[a]&&St[a].part===e.i)return St[a];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Vt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(mt[e.i]);let m;return m=_t||!$t.preloaded[a+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Et):{}:$t.preloaded[a+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function Vt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function Tt(t){t.parentNode.removeChild(t)}function Bt(t){const e=Ot(new URL(t,document.baseURI));if(e)return Pt&&t===Pt.href||function(t,e){Pt={href:t,promise:e}}(t,kt(e)),Pt.promise}let Jt;function Ht(t){clearTimeout(Jt),Jt=setTimeout(()=>{Kt(t)},20)}function Kt(t){const e=zt(t.target);e&&"prefetch"===e.rel&&Bt(e.href)}function Mt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=zt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ot(o);if(s){It(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Lt.pushState({id:jt},"",o.href)}}function zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ft(t){if(qt[jt]=Ut(),t.state){const e=Ot(new URL(location.href));e?It(e,t.state.id):location.href=location.href}else(function(t){jt=t})(Ct=Ct+1),Lt.replaceState({id:jt},"",location.href)}!function(t){var e;"scrollRestoration"in Lt&&(Lt.scrollRestoration="manual"),e=t.target,At=e,addEventListener("click",Mt),addEventListener("popstate",Ft),addEventListener("touchstart",Kt),addEventListener("mousemove",Ht),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Lt.replaceState({id:Ct},"",e);const n=new URL(location.href);if($t.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=$t;vt||(vt=s&&s[0]),Dt(null,[],{error:a,status:c,session:o,level0:{props:vt},level1:{props:{status:c,error:a},component:at},segments:s},{host:e,path:n,query:Nt(r),params:{}})}();const r=Ot(n);return r?It(r,Ct,!0,t):void 0})}({target:document.querySelector("#sapper")});export{Y as S,$ as a,b,y as c,u as d,p as e,g as f,l as g,i as h,X as i,_ as j,h as k,v as l,f as m,t as n,S as q,c as s,d as t};
