(this["webpackJsonpreact-first-project"]=this["webpackJsonpreact-first-project"]||[]).push([[3],{371:function(e,t,s){e.exports={dialogsContainer:"AddDialog_dialogsContainer__36VpY",dialogs:"AddDialog_dialogs__9MD-O",messages:"AddDialog_messages__2Y0fg",addDialog:"AddDialog_addDialog__1x_vd"}},372:function(e,t,s){e.exports={dialogItem:"DialogItem_dialogItem__1oz5P"}},373:function(e,t,s){e.exports={messageItem:"MessageItem_messageItem__nyaaK"}},379:function(e,t,s){"use strict";s.r(t);var a=s(0),i=(s(1),s(129)),c=s(371),n=s.n(c),r=s(372),d=s.n(r),o=s(20),j=function(e){return Object(a.jsxs)("div",{className:d.a.dialogItem,children:[Object(a.jsx)(o.b,{to:"/Profile",children:Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:e.userPhoto,alt:""})})}),Object(a.jsx)(o.b,{to:"/Dialogs/"+e.id,children:e.name})]})},l=s(373),u=s.n(l),g=function(e){return Object(a.jsx)("div",{className:u.a.messageItem,children:e.message})},b=s(10),x=function(e){var t=function(t){e.postNewText(t)},s=e.state.dialogsData.map((function(t){return Object(a.jsx)(j,{userPhoto:e.userPhoto,name:e.userName,id:t.id},t.id)})),i=e.state.messagesData.map((function(e){return Object(a.jsx)(g,{message:e.message},e.id)}));return Object(a.jsxs)("div",{className:n.a.dialogsContainer,children:[Object(a.jsx)("div",{className:n.a.dialogs,children:s}),Object(a.jsx)("div",{className:n.a.messages,children:i}),Object(a.jsxs)("div",{className:n.a.addDialog,children:[Object(a.jsx)("hr",{}),Object(a.jsx)("p",{}),Object(a.jsx)("div",{children:Object(a.jsx)(b.d,{initialValues:{textMessage:""},onSubmit:function(e,s){if(""===e.textMessage)return null;t(e.textMessage),s.resetForm()},children:Object(a.jsxs)(b.c,{children:[Object(a.jsx)("h2",{children:Object(a.jsx)("label",{htmlFor:"textMessage",children:"Send Message"})}),Object(a.jsx)("div",{}),Object(a.jsx)(b.b,{as:"textarea",name:"textMessage",id:"textMessage"}),Object(a.jsx)("div",{}),Object(a.jsx)("button",{type:"submit",children:"Send"})]})})})]})]})},m=s(26),h=s(74),O=s(23),f=Object(O.d)(Object(m.b)((function(e){return{state:e.dialogsReducer,userPhoto:e.headerReducer.userProfilePhoto,userName:e.authReducer.login}}),(function(e){return{postNewText:function(t){e(Object(i.b)(t))}}})),h.a)(x);t.default=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(f,{})})}}}]);
//# sourceMappingURL=3.14f8ee48.chunk.js.map