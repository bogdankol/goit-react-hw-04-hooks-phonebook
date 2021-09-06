(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={container:"Container_container__he7no"}},13:function(e,t,n){e.exports={section:"Phonebook_section__1Gva2"}},20:function(e,t,n){},21:function(e,t,n){},3:function(e,t,n){e.exports={form:"ContactForm_form__9VEth",label:"ContactForm_label__-JVnD",input:"ContactForm_input__33r18",btn:"ContactForm_btn__1LCpw"}},31:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),o=(n(20),n(2)),s=(n(21),n(12)),u=n.n(s),l=n(0);var b=function(e){var t=e.children;return Object(l.jsx)("div",{className:u.a.container,children:t})},m=n(10),j=n(15),d=n(13),f=n.n(d),h=n(14),O=n.n(h),p=n(3),_=n.n(p);var v=function(e){var t=e.getDataFunc,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),u=Object(o.a)(s,2),b=u[0],m=u[1],j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":m(a);break;default:return}},d={name:r,number:b},f=function(){i(""),m("")};return Object(l.jsxs)("form",{className:_.a.form,onSubmit:function(e){e.preventDefault(),t(d),f()},children:[Object(l.jsxs)("label",{className:_.a.label,children:["Name:",Object(l.jsx)("input",{type:"text",name:"name",value:r,onChange:j,className:_.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(l.jsxs)("label",{className:_.a.label,children:["Number:",Object(l.jsx)("input",{type:"tel",name:"number",onChange:j,value:b,className:_.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(l.jsx)("button",{type:"submit",className:_.a.btn,children:"Add contact"})]})},x=n(7),g=n.n(x);var C=function(e){var t=e.listToRender,n=e.onDeleteItem;return Object(l.jsx)("ul",{className:g.a.list,children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(l.jsxs)("li",{className:g.a.item,children:[t,": ",a,Object(l.jsx)("button",{type:"button",onClick:function(){return n(c)},className:g.a.btn,children:"delete contact"})]},c)}))})},N=n(9),F=n.n(N);var S=function(e){var t=e.value,n=e.onInputChange;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("label",{className:F.a.label,children:["Filter:",Object(l.jsx)("input",{name:"filter",value:t,onChange:n,className:F.a.input})]})})};var k=function(e){var t=e.contactsArr,n=e.filterInput,c=Object(a.useState)(t),r=Object(o.a)(c,2),i=r[0],s=r[1],u=Object(a.useState)(n),b=Object(o.a)(u,2),d=b[0],h=b[1],p=Object(a.useRef)(!0);Object(a.useEffect)((function(){if(p.current)return function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);if(t&&t.length>0)s(t)}(),void(p.current=!1);localStorage.setItem("todos",JSON.stringify(i))}),[i]);var _=d.toLowerCase(),x=i.filter((function(e){return e.name.toLowerCase().includes(_)}));return Object(l.jsxs)("section",{className:f.a.section,children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(v,{getDataFunc:function(e){if(i.map((function(e){return e.name})).filter((function(t){return t===e.name})).length>0)return alert("You've already added this contact to your list!");s((function(t){return[].concat(Object(j.a)(t),[Object(m.a)(Object(m.a)({},e),{},{id:O.a.generate()})])}))}}),Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(S,{value:d,onInputChange:function(e){h(e.currentTarget.value)}}),Object(l.jsx)(C,{listToRender:x,onDeleteItem:function(e){s(i.filter((function(t){return t.id!==e})))}})]})};var I=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(o.a)(e,1)[0],n=Object(a.useState)(""),c=Object(o.a)(n,1)[0];return Object(l.jsx)(b,{children:Object(l.jsx)(k,{contactsArr:t,filterInput:c})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),y()},7:function(e,t,n){e.exports={list:"ContactList_list__2gPVt",item:"ContactList_item__2cK2U",btn:"ContactList_btn__281gZ"}},9:function(e,t,n){e.exports={label:"Filter_label__3GcMy",input:"Filter_input__1nkc3"}}},[[31,1,2]]]);
//# sourceMappingURL=main.56bb2d6f.chunk.js.map