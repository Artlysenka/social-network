(this["webpackJsonpreact-first-project"]=this["webpackJsonpreact-first-project"]||[]).push([[0],{118:function(e,t,n){e.exports={preloaderContainer:"Preloader_preloaderContainer__2qmHb",preloader:"Preloader_preloader__3nzjs"}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(19),a=n(4),c="POST_NEW_TEXT",o={dialogsData:[],messagesData:[]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:4,name:"Tema"},s={id:4,message:t.postText};return Object(a.a)(Object(a.a)({},e),{},{dialogsData:[].concat(Object(r.a)(e.dialogsData),[n]),messagesData:[].concat(Object(r.a)(e.messagesData),[s])});default:return e}},i=function(e){return{type:c,postText:e}}},164:function(e,t,n){e.exports={contentColor:"Music_contentColor__3tC_L"}},165:function(e,t,n){e.exports={contentColor:"Users_contentColor__2Kips",addUsersButtonContainer:"Users_addUsersButtonContainer__3tC_O"}},175:function(e,t,n){e.exports={captchaImg:"LoginForm_captchaImg__1M2-6"}},200:function(e,t,n){},201:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"k",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"i",(function(){return j})),n.d(t,"j",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"l",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"h",(function(){return O})),n.d(t,"g",(function(){return g})),n.d(t,"b",(function(){return m}));var r=n(6),a=n.n(r),c=n(9),o=n(85),s=n.n(o).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-Key":"0956be17-9287-4aaa-8ddc-9d18425e88b9"}}),i=function(e,t){return s.get("users?page="+t+"&count="+e,{}).then((function(e){return e.data}))},u=function(e){return s.get("profile/"+e,{})},l=function(e){return s.put("profile/status/",{status:e})},d=function(e){return s.get("profile/status/"+e,{})},j=function(e){var t=new FormData;return t.append("image",e),s.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},b=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.put("profile",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,console.log("finally"),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return s.post("follow/"+e,{},{})},p=function(e){return s.delete("follow/"+e,{})},h=function(){return s.get("auth/me")},O=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3?arguments[3]:void 0;return s.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},g=function(){return s.delete("auth/login")},m=function(){return s.get("security/get-captcha-url")}},32:function(e,t,n){e.exports={nav:"Nav_nav__3jRL3",item:"Nav_item__3Mn2D",active:"Nav_active__10tEP"}},33:function(e,t,n){e.exports={error:"Login_error__3P2GR",formControl:"Login_formControl__2h8Kz",alert:"Login_alert__3TE9q"}},367:function(e,t,n){"use strict";n.r(t),n.d(t,"rerenderEntireTree",(function(){return ut}));var r=n(0),a=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,378)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},c=n(23),o=n(58),s=n(130),i=n(4),u={friends:[]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=Object(i.a)({},e);return t},d=n(6),j=n.n(d),b=n(9),f=n(19),p=n(21),h="FOLLOW",O="UNFOLLOW",g="SET_USERS",m="PAGE_SIZE",v="TOGGLE_PRELOADER",x="TOGGLE_FOLLOWING_PROGRESS",C="PAGE_COUNT",_="TOTAL_COUNT",w={users:[],pageSize:100,pageCount:1,totalCount:0,isFetching:!1,followingProgress:[]},k=function(e){return{type:h,userId:e}},y=function(e){return{type:O,userId:e}},P=function(e){return{type:g,users:e}},I=function(e){return{type:C,pageCount:e}},S=function(e,t){return{type:x,followingProgress:e,userId:t}},U="SET_USER_DATA",T="LOGGED_IN_TOGGLE",L="LOGGED_IN_FETCHING",F="CAPTCHA",N={userId:null,email:null,login:null,isLoggedIn:!1,isFetching:!1,confirmation:!1,captchaImg:""},E=function(e,t,n,r){return{type:U,data:{userId:e,email:t,login:n,isLoggedIn:r}}},R=function(e,t){return{type:L,isFetching:e,confirmation:t}},A=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)();case 2:n=e.sent,t((r=n.data.url,{type:F,captchaImg:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},D=n(64),z="INITIALIZED_SUCCSESS",G={initialized:!1},M=n(84),B=n(161),H=Object(c.c)({profileReducer:o.d,dialogsReducer:s.a,friendsReducer:l,usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case O:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case g:return Object(i.a)(Object(i.a)({},e),{},{users:Object(f.a)(t.users)});case m:return Object(i.a)(Object(i.a)({},e),{},{pageSize:t.pageSize});case C:return Object(i.a)(Object(i.a)({},e),{},{pageCount:t.pageCount});case _:return Object(i.a)(Object(i.a)({},e),{},{totalCount:t.totalCount});case v:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case x:return Object(i.a)(Object(i.a)({},e),{},{followingProgress:t.followingProgress?[].concat(Object(f.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(i.a)(Object(i.a)({},e),t.data);case T:return Object(i.a)(Object(i.a)({},e),{},{isLoggedIn:t.isLoggedIn});case L:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching,confirmation:t.confirmation});case F:return Object(i.a)(Object(i.a)({},e),{},{captchaImg:t.captchaImg});default:return e}},appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(i.a)(Object(i.a)({},e),{},{initialized:!0});default:return e}},headerReducer:M.b}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,W=Object(c.e)(H,J(Object(c.a)(B.a)));window.store=W;var V=W,q=n(50),K=n.n(q),X=(n(200),n(7)),Z=n(8),Y=n(12),Q=n(13),$=n(1),ee=n.n($),te=(n(201),n(14)),ne=n(20),re=n(26),ae=n(32),ce=n.n(ae),oe=function(){return Object(r.jsx)("div",{className:ce.a.nav,children:Object(r.jsxs)("nav",{children:[Object(r.jsx)("div",{className:ce.a.item,children:Object(r.jsx)(ne.b,{to:"/Profile/",activeClassName:ce.a.active,children:"My Profile"})}),Object(r.jsx)("div",{className:ce.a.item,children:Object(r.jsx)(ne.b,{to:"/Dialogs",activeClassName:ce.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:ce.a.item,children:Object(r.jsx)(ne.b,{to:"/Users",activeClassName:ce.a.active,children:"Users"})}),Object(r.jsx)("div",{className:ce.a.item,children:Object(r.jsx)(ne.b,{to:"/Music",activeClassName:ce.a.active,children:"Music"})}),Object(r.jsx)("div",{className:ce.a.item,children:Object(r.jsx)(ne.b,{to:"/Settings",activeClassName:ce.a.active,children:"Settings"})})]})})},se=n(164),ie=n.n(se),ue=function(e){return Object(r.jsx)("div",{className:ie.a.contentColor,children:Object(r.jsx)("h1",{children:"Music"})})},le=n(55),de=n.n(le),je=n(76),be=function(e){var t=document.getElementById("profileSettings"),n=function(){t&&(t.style.display="none")};return Object(r.jsx)("header",{className:de.a.header,children:Object(r.jsx)("div",{className:de.a.login,children:e.isLoggedIn?Object(r.jsxs)("div",{onMouseOver:function(){t&&(t.style.display="block")},onMouseOut:n,children:[Object(r.jsxs)("div",{className:de.a.userInfo,children:[Object(r.jsx)("div",{className:de.a.userLogin,children:Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:e.login})})}),Object(r.jsx)(ne.b,{to:"/Profile",children:Object(r.jsx)("div",{className:de.a.userAvatar,children:Object(r.jsx)("img",{src:e.userProfilePhoto||je.a,alt:"User avatar"})})})]}),Object(r.jsxs)("div",{id:"profileSettings",className:de.a.profileSettings,children:[Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){e.logOut()},children:"Log out"})}),Object(r.jsx)("div",{children:Object(r.jsx)(ne.b,{to:"/Settings",children:Object(r.jsx)("button",{onClick:n,children:"Profile settings"})})})]})]}):Object(r.jsxs)(ne.b,{to:"/Login",children:[" ",Object(r.jsx)("button",{children:"Login"})]})})})},fe=function(e){Object(Y.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserProfilePhotoThunk(this.props.userId)}},{key:"render",value:function(){return Object(r.jsx)(be,Object(i.a)({},this.props))}}]),n}(ee.a.Component),pe=Object(c.d)(te.f,Object(re.b)((function(e){return{isLoggedIn:e.authReducer.isLoggedIn,login:e.authReducer.login,isFetching:e.authReducer.isFetching,userId:e.authReducer.userId,userProfilePhoto:e.headerReducer.userProfilePhoto}}),{logOut:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.g)();case 2:0===e.sent.data.resultCode&&t(E(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getUserProfilePhotoThunk:M.a}))(fe),he=n(38),Oe=n(56),ge=n(88),me=n.n(ge),ve=n(70),xe=n.n(ve),Ce=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:xe()(Object(Oe.a)({},me.a.checkedButton,e.button===e.pageCount)),onClick:function(){e.removeUsers(),e.getUsers(e.pageSize,e.button)},children:e.button},e.button)})})},_e=function(e){var t=Object($.useState)(e.pageCount),n=Object(he.a)(t,2),a=n[0],c=n[1],o=Object($.useState)(7),s=Object(he.a)(o,1)[0],i=Object($.useState)(5),u=Object(he.a)(i,2),l=u[0],d=u[1],j=Object($.useState)(5),b=Object(he.a)(j,2),f=b[0],p=(b[1],Math.ceil(e.totalCount/e.pageSize)),h=function(){for(var e=[],t=a;t<p+1;t++)e.push(t);return 1===a||a-l<0&&d(l-1+(a-l)),e}().map((function(t){if(!(t>a+s-1))return Object(r.jsx)(Ce,{button:t,pageSize:e.pageSize,getUsers:e.getUsers,pageCount:e.pageCount,totalCount:e.totalCount,removeUsers:e.removeUsers})}));return Object(r.jsxs)("div",{className:me.a.buttonsContainer,children:[1===a?null:Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){c(a-l),!0&&5!==l&&d(5)},children:"\u043d\u0430\u0437\u0430\u0434"})}),h,p-f<=a?null:Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){c(a+f)},children:"\u0412\u043f\u0435\u0440\u0435\u0434"})})]})},we=n(48),ke=n.n(we),ye=function(e){var t=e.id,n=e.photo,a=e.followed,c=e.followingProgress,o=e.unFollowThunkCreator,s=e.followThunkCreator,i=e.name,u=e.status,l=null;return u&&u.length>50&&(l=u.slice(1,50)+"..."),Object(r.jsxs)("div",{className:ke.a.user,children:[Object(r.jsxs)("div",{className:ke.a.logoBlock,children:[Object(r.jsx)("div",{children:Object(r.jsx)(ne.b,{to:"/Users/"+t,children:Object(r.jsx)("img",{src:null==n?je.a:n,alt:"UserPhoto"})})}),Object(r.jsx)("div",{children:a?Object(r.jsx)("button",{disabled:c.some((function(e){return e===t})),onClick:function(){o(t)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:c.some((function(e){return e===t})),onClick:function(){s(t)},children:"Follow"})})]}),Object(r.jsxs)("div",{className:ke.a.infoBlock,children:[Object(r.jsx)("div",{className:ke.a.name,children:i}),Object(r.jsx)("div",{className:ke.a.status,children:l||u}),Object(r.jsxs)("div",{className:ke.a.country,children:["Belarus",Object(r.jsx)("i",{children:"(hardcode)"}),","]}),Object(r.jsxs)("div",{className:ke.a.city,children:["Bralaw",Object(r.jsx)("i",{children:"(hardcode)"})]})]})]})},Pe=n(165),Ie=n.n(Pe),Se=function(e){var t=e.users.map((function(t){return Object(r.jsx)(ye,{id:t.id,name:t.name,status:t.status,photo:t.photos.small,followed:t.followed,followingProgress:e.followingProgress,followThunkCreator:e.followThunkCreator,unFollowThunkCreator:e.unFollowThunkCreator},t.id)}));return Object(r.jsxs)("div",{className:Ie.a.users,children:[Object(r.jsx)("div",{children:t}),Object(r.jsx)(_e,{pageSize:e.pageSize,totalCount:e.totalCount,getUsers:e.getUsers,pageCount:e.pageCount,removeUsers:e.removeUsers})]})},Ue=n(57),Te=n(77),Le=n(53),Fe=function(e){Object(Y.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.pageSize,this.props.pageCount)}},{key:"componentWillUnmount",value:function(){this.props.removeUsersThunkCreator()}},{key:"render",value:function(){return this.props.users.length?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Se,{users:this.props.users,pageSize:this.props.pageSize,totalCount:this.props.totalCount,followingProgress:this.props.followingProgress,followThunkCreator:this.props.followThunkCreator,unFollowThunkCreator:this.props.unFollowThunkCreator,getUsers:this.props.getUsersThunkCreator,removeUsers:this.props.removeUsersThunkCreator,pageCount:this.props.pageCount})}):Object(r.jsx)(Ue.a,{})}}]),n}(ee.a.Component),Ne=Object(c.d)(Object(re.b)((function(e){return{users:Object(Le.a)(e),pageSize:Le.c.getPageSize(e),pageCount:Le.c.getPageCount(e),totalCount:Le.c.getTotalCount(e),isFetching:Le.c.getIsFetching(e),followingProgress:Le.c.getFollowingProgrress(e)}}),{pageSizeAC:function(e){return{type:m,pageSize:e}},getUsersThunkCreator:function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(r){var a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(t)),n.next=3,Object(p.e)(e,t);case 3:a=n.sent,r(P(a.items)),r((c=a.totalCount,{type:_,totalCount:c}));case 6:case"end":return n.stop()}var c}),n)})));return function(e){return n.apply(this,arguments)}}()},removeUsersThunkCreator:function(){return function(e){e(P([]))}},followThunkCreator:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(S(!0,e)),t.next=3,Object(p.a)(e);case 3:0===t.sent.data.resultCode&&n(k(e)),n(S(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollowThunkCreator:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(S(!0,e)),t.next=3,Object(p.l)(e);case 3:0===t.sent.data.resultCode&&n(y(e)),n(S(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},pageCountAC:I}),Te.a)(Fe),Ee=n(11),Re=n(30),Ae=n(33),De=n.n(Ae),ze=function(e){return Object(r.jsx)("div",{className:De.a.error,children:e.children})},Ge=function(e){var t=e.name,n=(e.label,e.options),a=Object(Re.a)(e,["name","label","options"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(Ee.b,Object(i.a)(Object(i.a)({name:t},a),{},{children:function(e){var t=e.field;return n.map((function(e){return Object(r.jsxs)(ee.a.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("label",{htmlFor:e.value,children:e.key})}),Object(r.jsx)("input",Object(i.a)(Object(i.a)({type:"checkbox",id:e.value},t),{},{value:e.value,checked:2===t.value.length}))]},e.key)}))}})),Object(r.jsx)(Ee.a,{name:t,component:ze})]})},Me=n(169),Be=n.n(Me),He=(n(210),function(e){var t=e.label,n=e.name,a=Object(Re.a)(e,["label","name"]);return Object(r.jsxs)("div",{className:De.a.formControl,children:[Object(r.jsx)("label",{htmlFor:n,children:t}),Object(r.jsx)(Ee.b,{name:n,children:function(e){var t=e.form,c=e.field,o=t.setFieldValue,s=c.value;return Object(r.jsx)(Be.a,Object(i.a)(Object(i.a)(Object(i.a)({id:n},c),a),{},{selected:s,onChange:function(e){return o(n,e)}}))}}),Object(r.jsx)(Ee.a,{name:n,component:ze})]})}),Je=function(e){return Object(r.jsxs)("div",{className:De.a.formControl,children:[Object(r.jsx)("label",{htmlFor:e.name,children:e.label}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Ee.b,{className:e.className,id:e.name,name:e.name,type:e.type,autocomplete:e.autocomplete}),Object(r.jsx)(Ee.a,{name:e.name,component:ze})]})]})},We=function(e){var t=e.label,n=e.name,a=e.email,c=e.password,o=e.touchedEmail,s=e.touchedPassword,i=e.type;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Je,{className:xe()(Object(Oe.a)({},De.a.alert,o&&!a||s&&!c)),name:n,label:t,type:i})})},Ve=function(e){var t=e.name,n=e.label,a=e.options,c=Object(Re.a)(e,["name","label","options"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:t,children:n}),Object(r.jsx)("div",{}),Object(r.jsx)(Ee.b,Object(i.a)(Object(i.a)({name:t},c),{},{children:function(e){var t=e.field;return console.log("field",t),a.map((function(e){return Object(r.jsxs)(ee.a.Fragment,{children:[Object(r.jsx)("input",Object(i.a)(Object(i.a)({type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),Object(r.jsx)("label",{htmlFor:e.value,children:e.key})]},e.key)}))}})),Object(r.jsx)(Ee.a,{name:t,component:ze})]})},qe=function(e){var t=e.label,n=e.name,a=e.options,c=Object(Re.a)(e,["label","name","options"]);return Object(r.jsxs)("div",{className:De.a.formControl,children:[Object(r.jsx)("label",{htmlFor:n,children:t}),Object(r.jsx)(Ee.b,Object(i.a)(Object(i.a)({as:"select",id:n,name:n},c),{},{children:a.map((function(e){return Object(r.jsx)("option",{value:e.value,children:e.key},e.value)}))})),Object(r.jsx)(Ee.a,{name:n,component:ze})]})},Ke=function(e){var t=e.label,n=e.name,a=Object(Re.a)(e,["label","name"]);return Object(r.jsxs)("div",{className:De.a.formControl,children:[Object(r.jsx)("label",{htmlFor:n,children:t}),Object(r.jsx)(Ee.b,Object(i.a)({as:"textarea",id:n,name:n},a)),Object(r.jsx)(Ee.a,{name:n,component:ze})]})},Xe=function(e){var t=e.control,n=Object(Re.a)(e,["control"]);switch(t){case"input":return Object(r.jsx)(We,Object(i.a)({},n));case"textarea":return Object(r.jsx)(Ke,Object(i.a)({},n));case"select":return Object(r.jsx)(qe,Object(i.a)({},n));case"radio":return Object(r.jsx)(Ve,Object(i.a)({},n));case"checkbox":return Object(r.jsx)(Ge,Object(i.a)({},n));case"date":return Object(r.jsx)(He,Object(i.a)({},n));default:return null}},Ze=n(24),Ye=n(175),Qe=n.n(Ye),$e=Object(re.b)((function(e){return{isLoggedIn:e.authReducer.isLoggedIn,captchaImg:e.authReducer.captchaImg}}),{login:function(e,t,n,r){return function(){var a=Object(b.a)(j.a.mark((function a(c){var o;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(p.h)(e,t,n,r);case 2:0===(o=a.sent).data.resultCode&&c(function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r,a,c,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R(!0,!1)),e.next=3,Object(p.f)();case 3:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,o=r.login,t(E(a,c,o,!0))),t(R(!1,!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),10===o.data.resultCode&&c(A());case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isLoggedIn,a=e.captchaImg,c=Ze.a({email:Ze.b().email("Invalid email format").required("Enter email"),password:Ze.b().required("Enter password")});return n?Object(r.jsx)(te.a,{to:"/Profile"}):Object(r.jsx)(Ee.d,{initialValues:{email:"",password:"",rememberMe:!0,captcha:""},validationSchema:c,onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)},children:function(e){return Object(r.jsxs)(Ee.c,{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Xe,{email:e.values.email,touchedEmail:e.touched.email,control:"input",type:"email",label:"Email",name:"email"}),Object(r.jsx)(Xe,{password:e.values.password,touchedPassword:e.touched.password,control:"input",type:"password",label:"Password",name:"password"}),Object(r.jsx)("p",{}),Object(r.jsx)("input",{type:"submit",disabled:!e.isValid,value:"Login"}),a?Object(r.jsxs)("div",{className:Qe.a.captchaImg,children:[Object(r.jsx)("p",{}),Object(r.jsx)("img",{src:a,alt:"captcha"}),Object(r.jsx)(Xe,{control:"input",label:"Enter your captcha",name:"captcha"})]}):null]})}})})),et=function(e){return function(t){return Object(r.jsx)(ee.a.Suspense,{fallback:Object(r.jsx)(Ue.a,{}),children:Object(r.jsx)(e,Object(i.a)({},t))})}},tt=function(e){var t=e.profile,n=t.fullName,a=t.aboutMe,c=t.lookingForAJob,o=t.lookingForAJobDescription,s=e.profile.contacts,i=s.facebook,u=s.github,l=s.instagram,d=s.mainLink,f=s.twitter,p=s.vk,h=s.website,O=s.youtube,g=Ze.a().shape({contacts:Ze.a().shape({github:Ze.b().url("Invalid URL!"),vk:Ze.b().url("Invalid URL!"),facebook:Ze.b().url("Invalid URL!"),instagram:Ze.b().url("Invalid URL!"),twitter:Ze.b().url("Invalid URL!"),website:Ze.b().url("Invalid URL!"),youtube:Ze.b().url("Invalid URL!"),mainLink:Ze.b().url("Invalid URL!")})}),m={fullName:n,aboutMe:a,lookingForAJob:c,lookingForAJobDescription:o,contacts:{github:u,vk:p,facebook:i,instagram:l,twitter:f,website:h,youtube:O,mainLink:d}};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Ee.d,{initialValues:m,onSubmit:function(t){function n(){return(n=Object(b.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.sendProfileSettings(t);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return console.log("Submitting"),function(){return n.apply(this,arguments)}()},validationSchema:g,validateOnChange:!1,children:function(e){return Object(r.jsxs)(Ee.c,{children:[Object(r.jsx)("h1",{children:"Profile settings"}),Object(r.jsx)(Xe,{control:"input",label:"Full Name",name:"fullName"}),Object(r.jsx)(Xe,{control:"input",label:"About me",name:"aboutMe"}),Object(r.jsx)(Xe,{control:"input",label:"My skills",name:"lookingForAJobDescription"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{}),Object(r.jsx)(Ee.b,{type:"checkbox",name:"lookingForAJob"}),Object(r.jsx)("label",{htmlFor:"lookingForAJob",children:"Looking for a job"})]}),Object(r.jsx)("h3",{children:"Contacts"}),Object(r.jsx)(Xe,{control:"input",label:"Github",name:"contacts.github"}),Object(r.jsx)(Xe,{control:"input",label:"vk",name:"contacts.vk"}),Object(r.jsx)(Xe,{control:"input",label:"Facebook",name:"contacts.facebook"}),Object(r.jsx)(Xe,{control:"input",label:"Instagram",name:"contacts.instagram"}),Object(r.jsx)(Xe,{control:"input",label:"Twitter",name:"contacts.twitter"}),Object(r.jsx)(Xe,{control:"input",label:"Website",name:"contacts.website"}),Object(r.jsx)(Xe,{control:"input",label:"Youtube",name:"contacts.youtube"}),Object(r.jsx)(Xe,{control:"input",label:"Main link",name:"contacts.mainLink"}),Object(r.jsx)("input",{type:"submit",value:"save",disabled:e.isSubmitting})]})}})})},nt=function(e){Object(Y.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserProfileThunkCreator(this.props.userId)}},{key:"componentWillUnmount",value:function(){this.props.removeUserProfileThunkCreator()}},{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:this.props.profile?Object(r.jsx)(tt,{sendProfileSettings:this.props.updateUserProfileSettings,profile:this.props.profile}):null})}}]),n}(ee.a.Component),rt=Object(c.d)(te.f,Object(re.b)((function(e){return{profile:e.profileReducer.profile,userId:e.authReducer.userId}}),{updateUserProfileSettings:o.f,getUserProfileThunkCreator:o.a,removeUserProfileThunkCreator:o.e}),Te.a)(nt),at=ee.a.lazy((function(){return n.e(3).then(n.bind(null,380))})),ct=ee.a.lazy((function(){return n.e(4).then(n.bind(null,379))})),ot=function(e){Object(Y.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(pe,{}),Object(r.jsx)(oe,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(te.b,{path:"/Dialogs",render:et(at)}),Object(r.jsx)(te.b,{path:"/Profile/:userId?",render:et(ct)}),Object(r.jsx)(te.b,{path:"/Users/:userId",render:et(ct)}),Object(r.jsx)(te.b,{exact:!0,path:"/Users",render:function(){return Object(r.jsx)(Ne,{})}}),Object(r.jsx)(te.b,{path:"/Music",render:function(){return Object(r.jsx)(ue,{})}}),Object(r.jsx)(te.b,{path:"/Settings",render:function(){return Object(r.jsx)(rt,{})}}),Object(r.jsx)(te.b,{path:"/Login",render:function(){return Object(r.jsx)($e,{})}})]})]})}):Object(r.jsx)(Ue.a,{})}}]),n}(ee.a.Component),st=Object(c.d)(te.f,Object(re.b)((function(e){return{initialized:e.appReducer.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(D.c)());Promise.all([t]).then((function(){e({type:z})}))}}}))(ot),it=function(e){return Object(r.jsx)(ne.a,{basename:"/social-network",children:Object(r.jsx)(re.a,{store:V,children:Object(r.jsx)(st,{})})})},ut=function(){K.a.render(Object(r.jsx)(it,{}),document.getElementById("root"))};ut(V),window.store=V,a()},48:function(e,t,n){e.exports={user:"User_user__3Kdvq",logoBlock:"User_logoBlock__xhS7H",infoBlock:"User_infoBlock__3O4VD",name:"User_name__3sCD6",status:"User_status__1ssRJ",city:"User_city__1xMuO",country:"User_country__1_5tH"}},53:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(166),a={getAllUsers:function(e){return e.usersReducer.users},getPageSize:function(e){return e.usersReducer.pageSize},getPageCount:function(e){return e.usersReducer.pageCount},getTotalCount:function(e){return e.usersReducer.totalCount},getIsFetching:function(e){return e.usersReducer.isFetching},getFollowingProgrress:function(e){return e.usersReducer.followingProgress},getAllUsersSelector:function(e){return this.getAllUsers(e).filter((function(e){return!0}))}},c=Object(r.a)(a.getAllUsers,(function(e){return e.filter((function(e){return!0}))})),o={getPosts:function(e){return e.profileReducer.posts},getProfile:function(e){return e.profileReducer.profile},getNewPostsText:function(e){return e.profileReducer.newPostText},getLogin:function(e){return e.authReducer.login}}},55:function(e,t,n){e.exports={header:"Header_header__eA5PG",login:"Header_login__2clXM",userInfo:"Header_userInfo__UZJGJ",userLogin:"Header_userLogin__1B_UB",userAvatar:"Header_userAvatar__8bsmo",profileSettings:"Header_profileSettings__3xpjx"}},57:function(e,t,n){"use strict";var r=n(0),a=(n(1),n.p+"static/media/loaderSVG.2997ce57.svg"),c=n(118),o=n.n(c);t.a=function(){return Object(r.jsx)("div",{className:o.a.preloaderContainer,children:Object(r.jsx)("img",{className:o.a.preloader,src:a,alt:"preloader"})})}},58:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"b",(function(){return x})),n.d(t,"g",(function(){return C})),n.d(t,"f",(function(){return _})),n.d(t,"h",(function(){return w})),n.d(t,"c",(function(){return k}));var r=n(6),a=n.n(r),c=n(9),o=n(19),s=n(4),i=n(21),u="SET_USER_PROFILE",l="APDATE_USER_STATUS",d="ADD_NEW_POST",j="DELETE_POST",b="UPDATE_USER_PHOTO",f="LOADING_NEW_PROFILE_PHOTO",p={posts:[],newPostText:"",profile:null,userStatus:"",loadingPhoto:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case l:return Object(s.a)(Object(s.a)({},e),{},{userStatus:t.userStatus});case b:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});case d:var n={id:1,postText:t.postText,userAva:null,userName:t.login,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n])});case j:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case f:return Object(s.a)(Object(s.a)({},e),{},{loadingPhoto:!e.loadingPhoto});default:return e}},O=function(e){return{type:u,profile:e}},g=function(e){return{type:l,userStatus:e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.c)(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(){return function(e){e(O(null))}},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.d)(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.k)(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.j)(e);case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.i)(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(){return function(e){e({type:f})}}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return f}));var r=n(6),a=n.n(r),c=n(9),o=(n(4),n(74)),s="SET_USER_DATA",i="LOGGED_IN_TOGGLE",u="LOGGED_IN_FETCHING",l=function(e,t,n,r){return{type:s,data:{userId:e,email:t,login:n,isLoggedIn:r}}},d=function(e){return{type:i,isLoggedIn:e}},j=function(e,t){return{type:u,isFetching:e,confirmation:t}},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,!1)),e.next=3,Object(o.d)();case 3:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,s=r.email,i=r.login,t(l(c,s,i,!0))),t(j(!1,!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.e)();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"i",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return h}));var r=n(6),a=n.n(r),c=n(9),o=n(85),s=n.n(o).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-Key":"0956be17-9287-4aaa-8ddc-9d18425e88b9"}}),i=function(e){return s.get("profile/"+e,{})},u=function(e){return s.put("profile/status/",{status:e})},l=function(e){return s.get("profile/status/"+e,{})},d=function(e){var t=new FormData;return t.append("image",e),s.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},j=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.put("profile",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,console.log("finally"),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){return s.get("auth/me")},f=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3?arguments[3]:void 0;return s.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},p=function(){return s.delete("auth/login")},h=function(){return s.get("security/get-captcha-url")}},76:function(e,t,n){"use strict";t.a=n.p+"static/media/defaultAvatar.0334f4b4.png"},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n(4),c=n(7),o=n(8),s=n(12),i=n(13),u=n(1),l=n.n(u),d=n(14),j=n(26),b=n(64),f=function(e){var t=function(t){Object(s.a)(u,t);var n=Object(i.a)(u);function u(e){var t;return Object(c.a)(this,u),(t=n.call(this,e)).props=e,t}return Object(o.a)(u,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[!this.props.isLoggedIn&&this.props.confirmation?Object(r.jsx)(d.a,{to:"/Login"}):Object(r.jsx)(r.Fragment,{}),this.props.isFetching&&!this.props.isLoggedIn?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)(e,Object(a.a)({},this.props))]})}}]),u}(l.a.Component);return Object(j.b)((function(e){return{isLoggedIn:e.authReducer.isLoggedIn,isFetching:e.authReducer.isFetching,confirmation:e.authReducer.confirmation}}),{LoggedInTogglegAC:b.b,LoggedInFetchingAC:b.a,logOut:b.d})(t)}},84:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n(6),a=n.n(r),c=n(9),o=n(4),s=n(21),i="SET_USER_PROFILE_PHOTO",u={userProfilePhoto:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(o.a)(Object(o.a)({},e),{},{userProfilePhoto:t.userProfilePhoto});default:return e}},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.c)(e);case 2:r=t.sent,n((a=r.data.photos.small,{type:i,userProfilePhoto:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()}},88:function(e,t,n){e.exports={buttonsContainer:"PageButton_buttonsContainer__135jv",checkedButton:"PageButton_checkedButton__2t6J4"}}},[[367,1,2]]]);
//# sourceMappingURL=main.eaf3b15a.chunk.js.map