(this["webpackJsonptemplate-admin-app"]=this["webpackJsonptemplate-admin-app"]||[]).push([[0],{163:function(t,e){},165:function(t,e){},178:function(t,e){},180:function(t,e){},208:function(t,e){},210:function(t,e){},211:function(t,e){},216:function(t,e){},218:function(t,e){},224:function(t,e){},226:function(t,e){},245:function(t,e){},257:function(t,e){},260:function(t,e){},277:function(t,e,n){},279:function(t,e,n){},280:function(t,e,n){"use strict";n.r(e);var i=n(137),o=n(16),a=n.n(o),r=n(134),c=n.n(r),u=n(136),s=n(36),h=n(37),l=n(64),d=n.n(l),p=function(){function t(e){Object(s.a)(this,t),this.publicKey=void 0,this.currentDomain=void 0,this.basePath=void 0,this.publicKey=e.publicKey,this.currentDomain=e.api.domain,this.basePath=e.api.basePath}return Object(h.a)(t,[{key:"get",value:function(t,e){return d.a.get("".concat(this.basePath).concat(t),{params:e,withCredentials:!0}).then((function(t){return{error:0,data:t.data}})).catch((function(t){return console.error(t),{error:1,data:null}}))}},{key:"post",value:function(t,e){return d.a.post("".concat(this.basePath).concat(t),e,{withCredentials:!0}).then((function(t){return{error:0,data:t.data}})).catch((function(t){return console.error(t),{error:1,data:null}}))}}]),t}(),f=n(135),k=n.n(f),v=function(){function t(e){Object(s.a)(this,t),this.tokenKey=void 0,this.cookieKey=void 0,this.tokenString=void 0,this.authorized=!1,this.tokenKey=e.tokenKey,this.cookieKey=e.cookieKey,this.tokenString=this.getTokenString(),this.tokenString&&this.isTokenValid(e.publicKey)?this.authorized=!0:this.removeToken()}return Object(h.a)(t,[{key:"getTokenString",value:function(){if(this.tokenKey&&this.cookieKey){if(this.tokenString)return this.tokenString;var t=localStorage.getItem(this.tokenKey);if(t)return t;var e=document.cookie.match(new RegExp("(?:^|; )"+this.cookieKey.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return(t=e?decodeURIComponent(e[1]):void 0)||void 0}}},{key:"isTokenValid",value:function(t){if(!this.tokenString)return!1;try{return k.a.verify(this.tokenString,t,{algorithms:["RS256"]}),!0}catch(e){return!1}}},{key:"removeToken",value:function(){localStorage.removeItem(this.tokenKey)}},{key:"isAuthorized",value:function(){return this.authorized}}]),t}(),b=(n(277),n(8));var y=function(t){return Object(b.jsxs)("form",{className:"login",onSubmit:function(e){var n;e.preventDefault();var i=e.target,o=i.login.value,a=i.password.value;null===t||void 0===t||null===(n=t.api)||void 0===n||n.post("/auth",{login:o,password:a})},children:[Object(b.jsx)("input",{type:"text",name:"login",placeholder:"Login"}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"Password"}),Object(b.jsx)("button",{type:"submit",children:"Sign in"})]})},g=function(t){var e=new v(t),n=new p(t),i=a.a.useState(e.isAuthorized());return Object(u.a)(i,1)[0]?Object(b.jsx)("h1",{children:"authorized"}):Object(b.jsx)(y,{api:n})},m=(n(279),{tokenKey:"".concat("local_token"),cookieKey:"".concat("local[session_key]"),publicKey:"".concat("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8kGa1pSjbSYZVebtTRBLxBz5H4i2p/llLCrEeQhta5kaQu/RnvuER4W8oDH3+3iuIYW4VQAzyqFpwuzjkDI+17t5t0tyazyZ8JXw+KgXTxldMPEL95+qVhgXvwtihXC1c5oGbRlEDvDF6Sa53rcFVsYJ4ehde/zUxo6UvS7UrBQIDAQAB-----END PUBLIC KEY-----"),api:{basePath:"".concat("http://localhost/api/v1"),domain:"".concat("localhost")}});c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,Object(i.a)({},m))}),document.getElementById("root"))}},[[280,1,2]]]);
//# sourceMappingURL=main.8c5e63e5.chunk.js.map