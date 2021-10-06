(this["webpackJsonptemplate-admin-app"]=this["webpackJsonptemplate-admin-app"]||[]).push([[0],{186:function(t,e){},188:function(t,e){},201:function(t,e){},203:function(t,e){},231:function(t,e){},233:function(t,e){},234:function(t,e){},239:function(t,e){},241:function(t,e){},247:function(t,e){},249:function(t,e){},268:function(t,e){},280:function(t,e){},283:function(t,e){},300:function(t,e,n){},301:function(t,e,n){},302:function(t,e,n){},311:function(t,e,n){"use strict";n.r(e);var o=n(14),i=n(79),a=n.n(i),c=n(153),r=n(0),u=n.n(r),s=n(50),l=n.n(s),h=n(3),_=function(t){return Object(h.jsx)("h1",{children:"authorized"})},A=n(157),E=n(51),P=n(52),d=n(39),C=n.n(d),p=function(){function t(e){Object(E.a)(this,t),this.publicKey=void 0,this.currentDomain=void 0,this.basePath=void 0,this.publicKey=e.publicKey,this.currentDomain=e.api.domain,this.basePath=e.api.basePath}return Object(P.a)(t,[{key:"get",value:function(t,e){return C.a.get("".concat(this.basePath).concat(t),{params:e,withCredentials:!0}).then((function(t){return{error:0,data:t.data}})).catch((function(t){return console.error(t),{error:1,data:null}}))}},{key:"post",value:function(t,e){return C.a.post("".concat(this.basePath).concat(t),e,{withCredentials:!0}).then((function(t){return{error:0,data:t.data}})).catch((function(t){return console.error(t),{error:1,data:null}}))}}]),t}(),b=n(154),T=n.n(b),O=function(){function t(e){Object(E.a)(this,t),this.tokenKey=void 0,this.cookieKey=void 0,this.tokenString=void 0,this.authorized=!1,this.tokenKey=e.tokenKey,this.cookieKey=e.cookieKey,this.tokenString=this.getTokenString(),this.tokenString&&this.isTokenValid(e.publicKey)?this.authorized=!0:this.removeToken()}return Object(P.a)(t,[{key:"getTokenString",value:function(){if(this.tokenKey&&this.cookieKey){if(this.tokenString)return this.tokenString;var t=localStorage.getItem(this.tokenKey);if(t)return t;var e=document.cookie.match(new RegExp("(?:^|; )"+this.cookieKey.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return(t=e?decodeURIComponent(e[1]):void 0)||void 0}}},{key:"isTokenValid",value:function(t){if(!this.tokenString)return!1;try{return T.a.verify(this.tokenString,t,{algorithms:["RS256"]}),!0}catch(e){return!1}}},{key:"removeToken",value:function(){localStorage.removeItem(this.tokenKey)}},{key:"isAuthorized",value:function(){return this.authorized}}]),t}();n(300);var S=function(t){return Object(h.jsxs)("form",{className:"login",onSubmit:function(e){var n;e.preventDefault();var o=e.target,i=o.login.value,a=o.password.value;null===t||void 0===t||null===(n=t.api)||void 0===n||n.post("/auth",{login:i,password:a})},children:[Object(h.jsx)("input",{type:"text",name:"login",placeholder:"Login"}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"Password"}),Object(h.jsx)("button",{type:"submit",children:"Sign in"})]})},v=function(t){var e=new O(t),n=new p(t),o=u.a.useState(e.isAuthorized());return Object(A.a)(o,1)[0]?Object(h.jsx)("h1",{children:"authorized"}):Object(h.jsx)(S,{api:n})};n(301);var j=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"404 Not Found"}),Object(h.jsx)("a",{href:"/",children:"go back to main page"})]})},R=(n(302),n(41)),K=n(13),I=n(38),B=n(158),D=["children","appSettings"];var f=function(t){t.children;var e=t.appSettings,n=Object(B.a)(t,D);return Object(h.jsx)(K.b,Object(o.a)(Object(o.a)({},n),{},{render:function(){return Object(h.jsx)(K.a,{to:(null===e||void 0===e?void 0:e.basePath)+"/login"})}}))},k=n(18),y=n(32),g=n(152),U=!1,L={authorized:U,payload:{}},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"AUTHORIZE":case"LOGOUT":return Object(o.a)(Object(o.a)({},t),{},{authorized:U});default:return t}},x=function(t){return Object(y.b)({router:Object(I.b)(t),auth:Q})},G=Object(k.a)();var N=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("https://github.com/login/oauth/authorize",{params:e,headers:{}}).then((function(t){return{error:0,data:t.data}})).catch((function(t){return console.error(t),{error:1,data:null}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m={client_id:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_PATH:"/myapp-ui",REACT_APP_API_PATH:"http://localhost/api/v1",REACT_APP_CURRENT_DOMAIN:"localhost",REACT_APP_PUBLIC_KEY:"-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8kGa1pSjbSYZVebtTRBLxBz5H4i2p/llLCrEeQhta5kaQu/RnvuER4W8oDH3+3iuIYW4VQAzyqFpwuzjkDI+17t5t0tyazyZ8JXw+KgXTxldMPEL95+qVhgXvwtihXC1c5oGbRlEDvDF6Sa53rcFVsYJ4ehde/zUxo6UvS7UrBQIDAQAB-----END PUBLIC KEY-----",REACT_APP_TOKEN_KEY:"local_token",REACT_APP_COOKIE_KEY:"local[session_key]"}).REACT_APP_GH_APP_CLIENT_ID?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_PATH:"/myapp-ui",REACT_APP_API_PATH:"http://localhost/api/v1",REACT_APP_CURRENT_DOMAIN:"localhost",REACT_APP_PUBLIC_KEY:"-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8kGa1pSjbSYZVebtTRBLxBz5H4i2p/llLCrEeQhta5kaQu/RnvuER4W8oDH3+3iuIYW4VQAzyqFpwuzjkDI+17t5t0tyazyZ8JXw+KgXTxldMPEL95+qVhgXvwtihXC1c5oGbRlEDvDF6Sa53rcFVsYJ4ehde/zUxo6UvS7UrBQIDAQAB-----END PUBLIC KEY-----",REACT_APP_TOKEN_KEY:"local_token",REACT_APP_COOKIE_KEY:"local[session_key]"}).REACT_APP_GH_APP_CLIENT_ID):"",redirect_uri:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_PATH:"/myapp-ui",REACT_APP_API_PATH:"http://localhost/api/v1",REACT_APP_CURRENT_DOMAIN:"localhost",REACT_APP_PUBLIC_KEY:"-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8kGa1pSjbSYZVebtTRBLxBz5H4i2p/llLCrEeQhta5kaQu/RnvuER4W8oDH3+3iuIYW4VQAzyqFpwuzjkDI+17t5t0tyazyZ8JXw+KgXTxldMPEL95+qVhgXvwtihXC1c5oGbRlEDvDF6Sa53rcFVsYJ4ehde/zUxo6UvS7UrBQIDAQAB-----END PUBLIC KEY-----",REACT_APP_TOKEN_KEY:"local_token",REACT_APP_COOKIE_KEY:"local[session_key]"}).REACT_APP_GH_APP_CALLBACK?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_PATH:"/myapp-ui",REACT_APP_API_PATH:"http://localhost/api/v1",REACT_APP_CURRENT_DOMAIN:"localhost",REACT_APP_PUBLIC_KEY:"-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8kGa1pSjbSYZVebtTRBLxBz5H4i2p/llLCrEeQhta5kaQu/RnvuER4W8oDH3+3iuIYW4VQAzyqFpwuzjkDI+17t5t0tyazyZ8JXw+KgXTxldMPEL95+qVhgXvwtihXC1c5oGbRlEDvDF6Sa53rcFVsYJ4ehde/zUxo6UvS7UrBQIDAQAB-----END PUBLIC KEY-----",REACT_APP_TOKEN_KEY:"local_token",REACT_APP_COOKIE_KEY:"local[session_key]"}).REACT_APP_GH_APP_CALLBACK):""};""!==(null===m||void 0===m?void 0:m.client_id)&&N(m).then((function(t){console.log(t)})).catch((function(t){console.log(t)}));var Y,z=(Y={},Object(y.d)(x(G),Y,Object(y.c)(Object(y.a)(Object(g.a)(G))))),H={basePath:"".concat("/myapp-ui")},w={tokenKey:"".concat("local_token"),cookieKey:"".concat("local[session_key]"),publicKey:"".concat("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8kGa1pSjbSYZVebtTRBLxBz5H4i2p/llLCrEeQhta5kaQu/RnvuER4W8oDH3+3iuIYW4VQAzyqFpwuzjkDI+17t5t0tyazyZ8JXw+KgXTxldMPEL95+qVhgXvwtihXC1c5oGbRlEDvDF6Sa53rcFVsYJ4ehde/zUxo6UvS7UrBQIDAQAB-----END PUBLIC KEY-----"),api:{basePath:"".concat("http://localhost/api/v1"),domain:"".concat("localhost")}};l.a.render(Object(h.jsx)(R.a,{store:z,children:Object(h.jsx)(I.a,{history:G,children:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(K.d,{children:[Object(h.jsx)(K.b,{exact:!0,path:(null===H||void 0===H?void 0:H.basePath)+"/login",children:Object(h.jsx)(u.a.StrictMode,{children:Object(h.jsx)(v,Object(o.a)({},w))})}),Object(h.jsx)(f,{exact:!0,path:null===H||void 0===H?void 0:H.basePath,appSettings:H,children:Object(h.jsx)(u.a.StrictMode,{children:Object(h.jsx)(_,Object(o.a)({},w))})}),Object(h.jsx)(K.b,{component:j})]})})})}),document.getElementById("root"))}},[[311,1,2]]]);
//# sourceMappingURL=main.95307d3d.chunk.js.map