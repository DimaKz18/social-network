(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{286:function(t,e,s){"use strict";s.d(e,"a",(function(){return f}));var n=s(5),r=s(32),i=s(33),o=s(35),a=s(34),c=s(1),u=s(0),p=s.n(u),l=s(11),j=s(14),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){Object(o.a)(u,e);var s=Object(a.a)(u);function u(){return Object(r.a)(this,u),s.apply(this,arguments)}return Object(i.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(t,Object(n.a)({},this.props)):Object(c.jsx)(l.a,{to:"/login"})}}]),u}(p.a.Component);return Object(j.b)(d)(e)}},287:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return r}));var n=function(t){if(!t)return"Field is required, please fill it"},r=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},288:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var n=s(5);function r(t,e){if(null==t)return{};var s,n,r=function(t,e){if(null==t)return{};var s,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)s=i[n],e.indexOf(s)>=0||(r[s]=t[s]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)s=i[n],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}var i=s(1),o=(s(0),s(128),function(t){var e=t.input,s=t.meta,o=r(t,["input","meta"]),a=s.touched&&s.error;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"form-control "+(a?"error":""),children:Object(i.jsx)("textarea",Object(n.a)(Object(n.a)({},e),o))}),a?Object(i.jsx)("span",{className:"error",children:s.error}):""]})})},292:function(t,e,s){},293:function(t,e,s){},294:function(t,e,s){},295:function(t,e,s){},297:function(t,e,s){"use strict";s.r(e);var n=s(5),r=s(32),i=s(33),o=s(35),a=s(34),c=s(1),u=s(0),p=s.n(u),l=s(14),j=s(11),d=s(88),f=(s(292),function(t){return Object(c.jsxs)("div",{className:"post",children:[Object(c.jsx)("img",{className:"post__photo",src:t.img}),Object(c.jsxs)("div",{className:"post__text",children:[Object(c.jsx)("p",{className:"post__text-msg",children:t.msg}),Object(c.jsxs)("p",{className:"post__text-likes",children:["Likes: ",t.likes]})]})]})}),b=(s(293),s(119)),h=s(120),O=s(287),m=s(288),x=Object(O.a)(10),v=p.a.memo((function(t){var e=t.profilePage.posts.map((function(t){return Object(c.jsx)(f,{msg:t.msg,likes:t.likes,img:t.img})}));return Object(c.jsxs)("div",{className:"my-posts",children:[Object(c.jsx)(g,{onSubmit:function(e){t.addPost(e.newPost)}}),e]})})),g=Object(h.a)({form:"addPost"})((function(t){return Object(c.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(b.a,{placeholder:"Enter your post",name:"newPost",component:m.a,validate:[O.b,x]})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Add Post"})})]})})),k=v,S=Object(l.b)((function(t){return{profilePage:t.profilePage}}),(function(t){return{addPost:function(e){t(Object(d.a)(e))}}}))(k),y=s(62),P=function(t){Object(o.a)(s,t);var e=Object(a.a)(s);function s(){var t;Object(r.a)(this,s);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={editMode:!1,status:t.props.status},t.toggleEditMode=function(e){!0===e?(t.setState({editMode:!1}),t.props.updateStatus(t.state.status)):t.setState({editMode:!0})},t.onStatusChange=function(e){t.setState({status:e.currentTarget.value})},t}return Object(i.a)(s,[{key:"componentDidUpdate",value:function(t,e){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{children:this.state.editMode?Object(c.jsx)("div",{children:Object(c.jsx)("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:function(){t.toggleEditMode(t.state.editMode)},value:this.state.status})}):Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:function(){t.toggleEditMode(t.state.editMode)},children:this.props.status||"-------"})})})}}]),s}(p.a.Component),N=(s(294),function(t){return t.profile?Object(c.jsxs)("div",{className:"profile-info",children:[Object(c.jsx)(P,{status:t.status,updateStatus:t.updateStatus}),Object(c.jsx)("div",{className:"profile-info__photo",children:Object(c.jsx)("img",{src:t.profile.photos.small})}),Object(c.jsxs)("div",{className:"profile-info__text",children:[Object(c.jsxs)("p",{children:["Full name: ",t.profile.fullName]}),Object(c.jsxs)("p",{children:["About me: ",t.profile.aboutMe]}),Object(c.jsxs)("p",{children:["Status: ",t.profile.lookingForAJobDescription]}),Object(c.jsxs)("p",{children:["Facebook: ",t.profile.contacts.facebook]}),Object(c.jsxs)("p",{children:["Twitter: ",t.profile.contacts.twitter]})]})]}):Object(c.jsx)(y.a,{})}),M=(s(295),function(t){return Object(c.jsxs)("div",{className:"profile-content",children:[Object(c.jsx)(N,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(c.jsx)(S,{})]})}),_=s(286),w=s(9),A=function(t){Object(o.a)(s,t);var e=Object(a.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.setUserProfileThunk(t),this.props.getStatusThunk(t)}},{key:"render",value:function(){return Object(c.jsx)(M,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunk}))}}]),s}(p.a.Component);e.default=Object(w.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{setUserProfileThunk:d.d,getStatusThunk:d.c,updateStatusThunk:d.e}),j.f,_.a)(A)}}]);
//# sourceMappingURL=3.c55edaed.chunk.js.map