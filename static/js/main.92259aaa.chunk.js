(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{16:function(t,e,s){},18:function(t,e,s){"use strict";s.r(e);var n,r=s(5),c=s.n(r),o=s(4),i=s(6),a=s(7),l=s(10),u=s(8),b=s(9),h=s(1),d=s.n(h),p=(s(15),s(16),s(2)),j=s.n(p),y=s(0),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var O=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},t.reverse=function(){t.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{isReversed:!t.isReversed})}))},t.sortByAlhpabet=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(a.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=e||s!==n.NONE,c=function(t,e){var s=e.sortType,r=e.isReversed,c=Object(b.a)(t);return c.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&c.reverse(),console.log(s,r),c}(N,this.state);return Object(y.jsxs)("div",{className:"section content",children:[Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsx)("button",{onClick:this.sortByAlhpabet,type:"button",className:j()("button is-info",{"is-light":s!==n.ALPHABET}),children:"Sort alphabetically"}),Object(y.jsx)("button",{onClick:this.sortByLength,type:"button",className:j()("button is-success",{"is-light":s!==n.LENGTH}),children:"Sort by length"}),Object(y.jsx)("button",{onClick:this.reverse,type:"button",className:j()("button is-warning",{"is-light":!e}),children:"Reverse"}),r&&Object(y.jsx)("button",{onClick:this.reset,type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(y.jsx)("ul",{children:c.map((function(t){return Object(y.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(d.a.Component);c.a.render(Object(y.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.92259aaa.chunk.js.map