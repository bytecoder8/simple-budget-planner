(this["webpackJsonpsimple-budget-planner"]=this["webpackJsonpsimple-budget-planner"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),r=n.n(a),l=(n(14),n(3)),i=n(2),o=n(9),j=n(18),d="simple-budget-planner",u=function(e){return e.reduce((function(e,t){return e+t.cost}),0)},b=n(0),m={budget:2e3,expenses:[{id:"1",name:"Shopping",cost:50},{id:"2",name:"Holiday",cost:300},{id:"3",name:"Transportaion",cost:70},{id:"4",name:"Fuel",cost:40},{id:"5",name:"Child Care",cost:500}]},O=function(e,t){switch(t.type){case"ADD_EXPENSE":return t.payload.id=Object(j.a)(),Object(l.a)(Object(l.a)({},e),{},{expenses:[].concat(Object(o.a)(e.expenses),[t.payload])});case"DELETE_EXPENSE":return Object(l.a)(Object(l.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case"CHANGE_BUDGET":return Object(l.a)(Object(l.a)({},e),{},{budget:t.payload});default:return e}},p=Object(c.createContext)(),x=function(e){return function(e,t){try{var n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return console.error(c),t}}(d,e)},h=function(e){var t=Object(c.useReducer)(O,m,x),n=Object(i.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){!function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error(n)}}(d,s)}),[s]),Object(b.jsx)(p.Provider,{value:{budget:s.budget,expenses:s.expenses,dispatch:a},children:e.children})},f=n(8);function v(e){var t=e.id,n=e.name,c=e.cost,s=e.onDelete;return Object(b.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[n,Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{className:"badge badge-primary badge-pill mr-3",children:["$",c]}),Object(b.jsx)(f.a,{size:"1.5em",onClick:function(){return s(t)}})]})]})}function N(){var e=Object(c.useContext)(p),t=e.expenses,n=e.dispatch,s=Object(c.useState)(""),a=Object(i.a)(s,2),r=a[0],o=a[1],j=function(e){n({type:"DELETE_EXPENSE",payload:e})},d=t;return r.trim()&&(d=t.filter((function(e){return e.name.toLowerCase().includes(r.trim().toLowerCase())}))),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"text",name:"search",placeholder:"Type to search...",className:"form-control mb-3",value:r,onChange:function(e){o(e.target.value)}}),d.length>0?Object(b.jsx)("ul",{className:"list-group",children:d.map((function(e){return Object(b.jsx)(v,Object(l.a)(Object(l.a)({},e),{},{onDelete:j}),e.id)}))}):Object(b.jsx)("div",{className:"alert alert-primary",children:"Nothing found"})]})}function g(e){var t=e.budget,n=e.handleSave,s=e.handleCancel,a=Object(c.useState)(t),r=Object(i.a)(a,2),l=r[0],o=r[1],j=Object(c.useState)(!1),d=Object(i.a)(j,2),u=d[0],m=d[1];return Object(b.jsxs)("form",{className:"alert alert-secondary d-flex justify-content-between align-items-center",children:[Object(b.jsx)("input",{type:"text",name:"budget",placeholder:"Enter new budget",className:"form-control",value:l,onChange:function(e){var t=parseInt(e.target.value,10);isNaN(t)?(t="",m(!0)):m(!1),o(t)}}),Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("button",{type:"submit",className:"btn btn-primary btn-small mr-1",onClick:function(e){e.preventDefault(),n(l)},disabled:u,children:"Save"}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary btn-small",onClick:function(e){e.preventDefault(),s()},children:"Cancel"})]})]})}function y(){var e=Object(c.useContext)(p),t=e.budget,n=e.dispatch,s=Object(c.useState)(!1),a=Object(i.a)(s,2),r=a[0],l=a[1];return Object(b.jsx)(b.Fragment,{children:r?Object(b.jsx)(g,{budget:t,handleSave:function(e){n({type:"CHANGE_BUDGET",payload:parseInt(e,10)}),l(!1)},handleCancel:function(){l(!1)}}):Object(b.jsxs)("div",{className:"alert alert-secondary d-flex justify-content-between align-items-center",children:[Object(b.jsxs)("div",{children:["Budget: $",t]}),Object(b.jsx)("button",{className:"btn btn-primary btn-small",onClick:function(){l((function(e){return!e}))},children:"Edit"})]})})}function E(){var e=Object(c.useContext)(p),t=e.expenses,n=function(e,t){return e-u(t)}(e.budget,t),s=n>0?"alert-success":"alert-danger";return Object(b.jsx)("div",{className:"alert ".concat(s),children:Object(b.jsxs)("span",{children:["Remaining: $",n]})})}function C(){var e=Object(c.useContext)(p).expenses,t=u(e);return Object(b.jsx)("div",{className:"alert alert-primary",children:Object(b.jsxs)("span",{children:["Spent so far: $",t]})})}function S(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(i.a)(a,2),l=r[0],o=r[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),u=d[0],m=d[1],O=Object(c.useContext)(p).dispatch;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t="";""===n.trim()?t="Please enter the expense's name":(""===l.trim()||isNaN(parseInt(l,10)))&&(t="Please enter a valid number for cost"),t?m(t):(O({type:"ADD_EXPENSE",payload:{name:n,cost:parseInt(l,10)}}),s(""),o(""),m(""))},className:"col-md-7",children:[u&&Object(b.jsx)("div",{className:"alert alert-danger",children:u}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"expense-form-name",children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",id:"expense-form-name",className:"form-control",required:"required",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"expense-form-cost",children:"Cost"}),Object(b.jsx)("input",{type:"text",name:"cost",id:"expense-form-cost",className:"form-control",required:"required",value:l,onChange:function(e){return o(e.target.value)}})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})})}var w=function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"mt-3",children:"Simple Budget Planner"}),Object(b.jsxs)("div",{className:"row mt-3",children:[Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(E,{})}),Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(C,{})})]}),Object(b.jsx)("h3",{className:"mt-3",children:"Expenses"}),Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(N,{})})}),Object(b.jsx)("h3",{className:"mt-3",children:"Add Expense"}),Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(S,{})})})]})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{children:Object(b.jsx)(w,{})})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.daaff500.chunk.js.map