(this.webpackJsonptabs=this.webpackJsonptabs||[]).push([[0],{17:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(8),i=c.n(a),s=(c(17),c(12)),j=c(7),u=c.n(j),o=c(9),b=c(4),d=c(1),l=function(e){var t=e.data,c=e.handleClick,n=e.value;return Object(d.jsxs)("nav",{children:[t.map((function(e,t){return Object(d.jsx)("li",{className:t===n?"active-li":void 0,onClick:function(){c(e.id)},children:e.company},e.id)})),Object(d.jsx)("ul",{})]})},O=c(10),h=c(11),x=function(e){var t=e.company,c=e.dates,n=e.duties,r=e.title;return Object(d.jsxs)("article",{children:[Object(d.jsx)("h2",{children:r}),Object(d.jsx)("h3",{children:t}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("ul",{children:n?n.map((function(e,t){return Object(d.jsxs)("li",{children:[Object(d.jsx)(O.a,{className:"icon",icon:h.a}),e]},t)})):void 0})]})};var f=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),i=Object(b.a)(a,2),j=i[0],O=i[1],h=Object(n.useState)(!0),f=Object(b.a)(h,2),p=f[0],v=f[1],m=function(){var e=Object(o.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.com/react-tabs-project");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c),v(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m()}),[]),p?"":Object(d.jsx)("main",{children:Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Experience"}),Object(d.jsx)(l,{value:j,data:c,handleClick:function(e){var t=c.findIndex((function(t){return t.id===e}));O(t)}}),Object(d.jsx)(x,Object(s.a)({},c[j])),Object(d.jsx)("button",{children:"MORE INFO"})]})})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5adfc413.chunk.js.map