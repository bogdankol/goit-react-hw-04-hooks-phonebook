(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"ContactList_list__2gPVt",item:"ContactList_item__2cK2U",btn:"ContactList_btn__281gZ"}},13:function(t,e,n){t.exports={label:"Filter_label__3GcMy",input:"Filter_input__1nkc3"}},15:function(t,e,n){t.exports={container:"Container_container__he7no"}},16:function(t,e,n){t.exports={section:"Phonebook_section__1Gva2"}},22:function(t,e,n){},23:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(14),o=n.n(c),i=(n(22),n(2)),s=n(3),l=n(5),u=n(4),b=(n.p,n(23),n(15)),m=n.n(b),d=n(0);var j=function(t){var e=t.children;return Object(d.jsx)("div",{className:m.a.container,children:e})},h=n(12),p=n(17),f=n(16),O=n.n(f),v=n(8),g=n.n(v),_=n(9),C=n(6),x=n.n(C),y=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.inputHandler=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(_.a)({},a,r))},t.submitHandler=function(e){e.preventDefault(),t.reset(),t.props.getDataFunc(t.state)},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.inputHandler,r=this.submitHandler;return Object(d.jsxs)("form",{className:x.a.form,onSubmit:r,children:[Object(d.jsxs)("label",{className:x.a.label,children:["Name:",Object(d.jsx)("input",{type:"text",name:"name",value:e,onChange:a,className:x.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{className:x.a.label,children:["Number:",Object(d.jsx)("input",{type:"tel",name:"number",onChange:a,value:n,className:x.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{type:"submit",className:x.a.btn,children:"Add contact"})]})}}]),n}(a.Component),F=n(10),k=n.n(F),N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.listToRender,n=t.onDeleteItem;return Object(d.jsx)("ul",{className:k.a.list,children:e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(d.jsxs)("li",{className:k.a.item,children:[e,": ",a,Object(d.jsx)("button",{type:"button",onClick:function(){return n(r)},className:k.a.btn,children:"delete contact"})]},r)}))})}}]),n}(a.Component),S=n(13),D=n.n(S),w=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.value,n=t.onInputChange;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("label",{className:D.a.label,children:["Filter:",Object(d.jsx)("input",{name:"filter",value:e,onChange:n,className:D.a.input})]})})}}]),n}(a.Component),A=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:t.props.contacts,filter:t.props.filter},t.getDataFromContactForm=function(e){if(t.state.contacts.map((function(t){return t.name})).filter((function(t){return t===e.name})).length>0)return alert("You've already added this contact to your list!");t.setState((function(t){return{contacts:[].concat(Object(p.a)(t.contacts),[Object(h.a)(Object(h.a)({},e),{},{id:g.a.generate()})])}}))},t.getDataFromFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteHandler=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);if(e&&e.length>0)return this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("todos",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getDataFromContactForm,e=this.getDataFromFilter,n=this.deleteHandler,a=this.state,r=a.contacts,c=a.filter,o=c.toLowerCase(),i=r.filter((function(t){return t.name.toLowerCase().includes(o)}));return Object(d.jsxs)("section",{className:O.a.section,children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(y,{getDataFunc:t}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(w,{value:c,onInputChange:e}),Object(d.jsx)(N,{listToRender:i,onDeleteItem:n})]})}}]),n}(a.Component),I=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(d.jsx)(j,{children:Object(d.jsx)(A,{contacts:e,filter:n})})}}]),n}(a.Component),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),L()},6:function(t,e,n){t.exports={form:"ContactForm_form__9VEth",label:"ContactForm_label__-JVnD",input:"ContactForm_input__33r18",btn:"ContactForm_btn__1LCpw"}}},[[33,1,2]]]);
//# sourceMappingURL=main.52577d47.chunk.js.map