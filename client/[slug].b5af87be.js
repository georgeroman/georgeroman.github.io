import{S as s,i as t,s as a,a as e,e as i,t as c,q as l,d as r,c as o,b as n,f as d,g as h,h as m,j as u,k as p,l as f,n as v}from"./client.f6c395d4.js";function E(s){let t,a,E,D,I,V,y,g,j,x,b,q=s[0].title+"",w=s[0].html+"";return document.title=t=s[0].title,{c(){a=e(),E=i("div"),D=e(),I=i("div"),V=i("div"),y=i("div"),g=i("div"),j=c(q),x=e(),b=i("div"),this.h()},l(s){l('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=o(s),E=n(s,"DIV",{class:!0}),d(E).forEach(r),D=o(s),I=n(s,"DIV",{class:!0});var t=d(I);V=n(t,"DIV",{class:!0});var e=d(V);y=n(e,"DIV",{class:!0});var i=d(y);g=n(i,"DIV",{class:!0});var c=d(g);j=h(c,q),c.forEach(r),x=o(i),b=n(i,"DIV",{}),d(b).forEach(r),i.forEach(r),e.forEach(r),t.forEach(r),this.h()},h(){m(E,"class","content"),m(g,"class","siimple-card-title"),m(y,"class","siimple-card-body"),m(V,"class","siimple-card siimple--mx-2 siimple--my-2"),m(I,"class","siimple-content--small")},m(s,t){u(s,a,t),u(s,E,t),u(s,D,t),u(s,I,t),p(I,V),p(V,y),p(y,g),p(g,j),p(y,x),p(y,b),b.innerHTML=w},p(s,[a]){1&a&&t!==(t=s[0].title)&&(document.title=t),1&a&&q!==(q=s[0].title+"")&&f(j,q),1&a&&w!==(w=s[0].html+"")&&(b.innerHTML=w)},i:v,o:v,d(s){s&&r(a),s&&r(E),s&&r(D),s&&r(I)}}}async function D({params:s,query:t}){const a=await this.fetch(`blog/${s.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function I(s,t,a){let{post:e}=t;return s.$set=(s=>{"post"in s&&a(0,e=s.post)}),[e]}export default class extends s{constructor(s){super(),t(this,s,I,E,a,{post:0})}}export{D as preload};
