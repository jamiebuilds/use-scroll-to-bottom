(this["webpackJsonpuse-scroll-to-bottom-example"]=this["webpackJsonpuse-scroll-to-bottom-example"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(16)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),m=a(2),o=a.n(m),s=a(4),u=a(1),i=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1],l=Object(n.useState)(null),r=l[0],c=l[1];return Object(n.useEffect)((function(){var e;return r&&r.parentElement?(e=new IntersectionObserver((function(e){var t=e[0];return a(t.isIntersecting)}),{root:r.parentElement})).observe(r):a(!1),function(){e&&e.disconnect()}}),[r]),[c,t]};a(13);function E(){const e=l.a.useState([]),t=Object(u.a)(e,2),a=t[0],n=t[1],r=function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breeds/image/random/3");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(e=>[...new Set([...e,...a.message])]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=i(),m=Object(u.a)(c,2),E=m[0],d=m[1];return l.a.useEffect(()=>{d&&r()},[d]),l.a.createElement("div",{className:"dogs-container"},a.map(e=>l.a.createElement("figure",{key:e},l.a.createElement("img",{src:e,alt:"dog"}))),l.a.createElement("figure",{ref:E},"Loading..."))}a(14);function d(){const e=i(),t=Object(u.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{className:"simple-container"},l.a.createElement("div",{"data-testid":"big-element",className:"big-element",style:{background:n?"grey":"green"}},n&&"Bottom reached"),l.a.createElement("div",{ref:a},"Bottom"))}a(15);function h(){const e=i(),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),m=Object(u.a)(c,2),o=m[0],s=m[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Is bottom ",r+""),l.a.createElement("button",{"data-testid":"toggle-target",onClick:()=>s(!o)},"Targeting ",o?"First":"Second"),l.a.createElement("hr",null),l.a.createElement("h3",null,"First "),l.a.createElement("div",{className:"simple-container"},l.a.createElement("div",{className:"big-element"}),l.a.createElement("div",{"data-testid":"bottom-1","data-active":o&&r,ref:o?a:null},"Bottom 1")),l.a.createElement("hr",null),l.a.createElement("h3",null,"Second "),l.a.createElement("div",{className:"simple-container"},l.a.createElement("div",{className:"big-element"}),l.a.createElement("div",{"data-testid":"bottom-2","data-active":!o&&r,ref:o?null:a},"Bottom 2")))}function g(){return l.a.createElement("section",null,l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/tudorgergely/use-scroll-to-bottom",target:"_blank",rel:"noopener noreferrer"},"github")),l.a.createElement("li",null,l.a.createElement("a",{href:"#instructions"},"install")),l.a.createElement("li",null,l.a.createElement("a",{href:"#examples"},"examples"))))),l.a.createElement("section",{id:"instructions"},l.a.createElement("header",null,l.a.createElement("h1",null,"install")),l.a.createElement("article",null,l.a.createElement("pre",null,l.a.createElement("code",null,"\n$ npm install use-scroll-to-bottom\n            ")))),l.a.createElement("section",{id:"examples"},l.a.createElement("header",null,l.a.createElement("h1",null,"examples")),l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h2",null,l.a.createElement("a",{href:"https://github.com/tudorgergely/use-scroll-to-bottom/tree/master/example/src/examples/SimpleExample.js"},"1. Changing element color when bottom is reached"))),l.a.createElement(d,null)),l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h2",null,l.a.createElement("a",{href:"https://github.com/tudorgergely/use-scroll-to-bottom/tree/master/example/src/examples/DogsExample.js"},"2. Loading dogs images when bottom is reached"))),l.a.createElement(E,null)),l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h2",null,l.a.createElement("a",{href:"https://github.com/tudorgergely/use-scroll-to-bottom/tree/master/example/src/examples/ReuseRefExample.js"},"3. Reuse ref between 2 examples")),l.a.createElement("h3",null,"(thanks"," ",l.a.createElement("a",{href:"https://www.reddit.com/r/reactjs/comments/ftgevr/created_a_small_hook_which_tells_you_when_youve/fm7hej5/"},"reddit"),")")),l.a.createElement(h,null))))}c.a.render(l.a.createElement(g,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.d8228257.chunk.js.map