(this.webpackJsonpword_count=this.webpackJsonpword_count||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(5),r=c.n(n),l=(c(11),c(6)),j=c(2),o=c(0);var h=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(0),r=Object(j.a)(n,2),h=r[0],i=r[1],b=Object(s.useState)(0),u=Object(j.a)(b,2),d=u[0],O=u[1],p=Object(s.useState)(0),x=Object(j.a)(p,2),g=x[0],v=x[1],f=Object(s.useState)(0),m=Object(j.a)(f,2),S=m[0],w=m[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("h1",{children:"Word Count"}),Object(o.jsxs)("h2",{children:["Words: ",h]}),Object(o.jsxs)("h2",{children:["Characters:",g]}),Object(o.jsxs)("h2",{children:["Characters excluding spaces: ",d]}),Object(o.jsxs)("h2",{children:["Sentence: ",S]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("textarea",{value:c,onChange:function(e){var t=e.target.value;a(t);var c,s=t.split(/\s+/g),n=0,r=Object(l.a)(s);try{for(r.s();!(c=r.n()).done;){""!==c.value&&n++}}catch(h){r.e(h)}finally{r.f()}i(n),O(t.replaceAll(/\s/g,"").length),v(t.length);var j=t.split("").filter((function(e){return e.replaceAll("\n","")}));v(j.length);var o=t.match(/\w[.?!](\s|$)/g);console.log(o),w(null!==o?o.length:0)},rows:"10",cols:"30",placeholder:"Start here",className:"text"}),Object(o.jsx)("button",{className:"reset-button",onClick:function(){a(""),i(0),O(0),w(0)},children:"reset"})]})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a5d1980a.chunk.js.map