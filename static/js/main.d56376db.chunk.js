(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{21:function(e,t,n){e.exports=n(38)},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),l=(n(26),n(27),n(2)),i=n(6),u=n(7);n(28);function s(){return r.a.createElement("div",{className:"progress-bar"},r.a.createElement("div",{className:"bg-red"}),r.a.createElement("div",{className:"bg-orange"}),r.a.createElement("div",{className:"bg-yellow"}),r.a.createElement("div",{className:"bg-green"}),r.a.createElement("div",{className:"bg-blue"}),r.a.createElement("div",{className:"bg-indigo"}),r.a.createElement("div",{className:"bg-purple"}))}var m=function(e,t,n){var r=e.map((function(e){return window.matchMedia(e)})),c=function(){var e=r.findIndex((function(e){return e.matches}));return"undefined"!==typeof t[e]?t[e]:n},o=Object(a.useState)(c),i=Object(l.a)(o,2),u=i[0],s=i[1];return Object(a.useEffect)((function(){var e=function(){return s(c)};return r.forEach((function(t){return t.addListener(e)})),function(){return r.forEach((function(t){return t.removeListener(e)}))}}),[]),u},f=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(l.a)(n,2),c=r[0],o=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]};var d=function(){var e=f("dark-mode-enabled"),t=Object(l.a)(e,2),n=t[0],r=t[1],c=m(["(prefers-color-scheme: dark"],[!0],!1),o="undefined"!==typeof n?n:c;return Object(a.useEffect)((function(){var e=window.document.body;o?e.classList.add("dark-mode"):e.classList.remove("dark-mode")}),[o]),[o,r]};function E(){var e=d(),t=Object(l.a)(e,2),n=t[0],a=t[1],c=(new Date).getTime()-1583224596e3,o=Math.floor(c/864e5);return r.a.createElement("div",{className:"sidebar text-left"},r.a.createElement("h1",null,r.a.createElement(i.b,{className:"logo",to:"/"},"\u6253\u5f00\u5929\u773c\u770b\u6587\u7ae0")),r.a.createElement("p",null,"TECH | LIFE | X"),r.a.createElement("p",{className:"font-sm"},r.a.createElement(i.b,{className:"text-blue",to:"/about",title:"about me"},"@me |"),r.a.createElement("a",{className:"text-green",href:"https://github.com/xiao555",title:"github",target:"_blank",rel:"noopener noreferrer"},"@github")),r.a.createElement("p",{className:"font-sm"},r.a.createElement("a",{href:"mailto:zhangruiwu32@gmail.com"},"zhangruiwu32@gmail.com")),r.a.createElement("p",null,r.a.createElement("small",null,"\u672c\u7ad9\u5df2\u5b58\u6d3b ",o," \u5929")),r.a.createElement("button",{className:"border-0 px-0",onClick:function(){return a(!n)}},n?r.a.createElement("i",{className:"fas fa-sun"}):r.a.createElement("i",{className:"fas fa-moon"})))}var p=function(){return r.a.createElement("h1",null,"Loading...")};n(34);function v(e){return e instanceof Date&&!isNaN(e)}function b(e){var t=Number(e);return t<10?"0"+t:t.toString()}function h(e){var t=new Date(e);if(!v(t))return e;var n=function(e){return v(e)?{year:e.getFullYear(),month:b(e.getMonth()+1),date:b(e.getDate()),hour:b(e.getHours()),minute:b(e.getMinutes()),second:b(e.getSeconds())}:{}}(t),a=n.year,r=n.month,c=n.date;return"".concat(a,"-").concat(r,"-").concat(c)}var g=function(e,t){if("undefined"===typeof window.getComputedStyle(document.body).scrollBehavior){window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){return setTimeout(e,17)});!function n(){var a=e.scrollTop,r=t-a,c=a+(r>=0?Math.max(r/5,1):Math.min(r/5,-1));Math.abs(t-a)<=1?e.scrollTop=t:(e.scrollTop=c,requestAnimationFrame(n))}()}else e.style.scrollBehavior="smooth",e.scrollTop=t};var w=function(e){return e.posts.map((function(e){return r.a.createElement(i.b,{to:"/post/".concat(e.slug),key:e.id},r.a.createElement("article",{className:"post-list-item"},r.a.createElement("div",{className:"post-list-item-info"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,r.a.createElement("small",null,h(e.createDate))),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.intro}})),r.a.createElement("div",{className:"post-list-item-thumb-wrapper"},r.a.createElement("div",{className:"post-list-item-thumb",style:{backgroundImage:"url(".concat(e.thumb,")")}}))))}))},N=n(13),O=n.n(N),j=n(19),y=null,k=!1,S=function(){var e=f("articles",y),t=Object(l.a)(e,2),n=t[0],a=t[1];return k||(k=!0,fetch("https://raw.githubusercontent.com/xiao555/blog-articles/master/articles.json").then(function(){var e=Object(j.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=9;break}return e.t0=a,e.next=4,t.json();case 4:e.t1=e.sent,(0,e.t0)(e.t1),y=n,e.next=10;break;case 9:k=!1;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),{articles:n}},x=function(e){var t=S().articles,n=Object(a.useState)(t?t.find((function(t){return t.id===e})):null),r=Object(l.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){if(t){var n=t.find((function(t){return t.id===e}));o(n||null)}}),[t,e]),c},I=JSON.parse(window.localStorage.getItem("scroll-history"))||{},T=function(){var e=Object(u.f)();Object(a.useEffect)((function(){return document.documentElement.scrollTop=I[e.pathname]||0,function(){var t=document.documentElement.scrollTop;I[e.pathname]=t,window.localStorage.setItem("scroll-history",JSON.stringify(I))}}),[])};var L=function(){var e=S().articles;return T(),Object(a.useEffect)((function(){document.title="\u9996\u9875 | \u6253\u5f00\u5929\u773c\u770b\u6587\u7ae0"})),e?r.a.createElement("div",{className:"main-content"},r.a.createElement(w,{posts:e.filter((function(e){return"about-me"!==e.id}))})):r.a.createElement(p,null)},M=n(20),_=n.n(M);var D=function(){var e=Object(u.g)().id,t=x(e);return T(),Object(a.useEffect)((function(){document.title="".concat(t.title," | \u6253\u5f00\u5929\u773c\u770b\u6587\u7ae0")})),Object(a.useEffect)((function(){new _.a({el:"#vcomments",appId:"2VQxghv1P34UuWX18ynpOBhX-gzGzoHsz",appKey:"IUpu9P5iuaym0hGnWxogUvon",visitor:!0,recordIP:!0,path:e})}),[e]),t?r.a.createElement("article",{className:"main-content"},r.a.createElement("h2",null,t.title),r.a.createElement("p",null,r.a.createElement("small",null,h(t.createDate)),r.a.createElement("span",{id:e,className:"leancloud_visitors ml-1"},r.a.createElement("small",null,"\u9605\u8bfb\u91cf")," ",r.a.createElement("small",{className:"leancloud-visitors-count"}))),r.a.createElement("section",{dangerouslySetInnerHTML:{__html:t.content}}),r.a.createElement("section",{id:"vcomments"})):r.a.createElement(p,null)};var F=function(){var e=x("about-me");return Object(a.useEffect)((function(){document.title="\u5173\u4e8e | \u6253\u5f00\u5929\u773c\u770b\u6587\u7ae0"})),T(),e?r.a.createElement("article",{className:"main-content"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,r.a.createElement("small",null,h(e.createDate))),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.content}})):r.a.createElement(p,null)},H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=Object(a.useRef)();Object(a.useEffect)((function(){r.current=t}),[t]),Object(a.useEffect)((function(){if(n&&n.addEventListener){var t=function(e){return r.current(e)};return n.addEventListener(e,t),function(){n.removeEventListener(e,t)}}}),[e,n])},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,t=Object(a.useState)(e.scrollTop),n=Object(l.a)(t,2),r=n[0],c=n[1],o=function(){c(e.scrollTop)};return H("scroll",o),[r]};function z(){return r.a.createElement("div",{className:"back-to-top",onClick:function(){return g(document.documentElement,0)}},r.a.createElement("i",{className:"fa fa-fighter-jet"}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.AV=n(36),o.a.render(r.a.createElement((function(){var e=J(),t=Object(l.a)(e,1)[0];return r.a.createElement(i.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(s,null),r.a.createElement("main",{className:"main"},r.a.createElement(E,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:L}),r.a.createElement(u.a,{path:"/post/:id",component:D}),r.a.createElement(u.a,{path:"/about",component:F}))),t>800&&r.a.createElement(z,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.d56376db.chunk.js.map