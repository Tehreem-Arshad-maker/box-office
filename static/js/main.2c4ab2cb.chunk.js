(this["webpackJsonpbox-office"]=this["webpackJsonpbox-office"]||[]).push([[0],{36:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(24),c=t.n(i),o=t(10),a=(t(36),t(4)),s=t(2),d=t(6),l=t(19),b=t.n(l),p=t(25),u="https://api.tvmaze.com";function j(n){return h.apply(this,arguments)}function h(){return(h=Object(p.a)(b.a.mark((function n(e){var t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var x,g,f,m,O=t(3),v=t(26),w=t.n(v),A=Object(s.b)(w.a)(x||(x=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),C=s.b.div(g||(g=Object(O.a)(["\n  width: 300px;\n  height: 100%;\n  margin: 0 15px 40px;\n\n  .img-wrapper {\n    width: 100%;\n    border-radius: 40px;\n    height: 420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n\n    img {\n      object-fit: cover;\n      height: 100%;\n      width: 100%;\n    }\n  }\n\n  h1 {\n    margin: 10px 0;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 0;\n  }\n"]))),y=s.b.div(f||(f=Object(O.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-color: ",";\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n"])),(function(n){return n.active?"#ffc806":"#ddd"})),B=Object(s.b)(C)(m||(m=Object(O.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]))),S=t(0),D=function(n){var e=n.id,t=n.image,r=n.name,i=n.summary,c=n.onStarClick,a=n.isStarred,s=i?"".concat(i.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(S.jsxs)(B,{children:[Object(S.jsx)("div",{className:"img-wrapper",children:Object(S.jsx)("img",{src:t,alt:"show"})}),Object(S.jsx)("h1",{children:r}),Object(S.jsx)("p",{children:s}),Object(S.jsxs)("div",{className:"btns",children:[Object(S.jsx)(o.b,{to:"/show/".concat(e),children:"Read more"}),Object(S.jsx)("button",{type:"button",onClick:c,children:Object(S.jsx)(y,{active:a})})]})]})},E="data:image/png;base64,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",R=t(12),k=t(30);function N(n,e){switch(e.type){case"ADD":return[].concat(Object(k.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}}function V(n,e,t){var i=Object(r.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),c=Object(d.a)(i,2),o=c[0],a=c[1];return Object(r.useEffect)((function(){localStorage.setItem(t,JSON.stringify(o))}),[o,t]),[o,a]}function F(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return V(N,[],n)}var W=function(n,e){switch(e.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:e.show};case"FETCH_FAILED":return Object(R.a)(Object(R.a)({},n),{},{isLoading:!1,error:e.error});default:return n}};var I,Q,z,U,P,H,q,L,J,M,X,Y,K,Z,T,G,_,$=function(n){var e=n.data,t=F(),r=Object(d.a)(t,2),i=r[0],c=r[1];return Object(S.jsx)(A,{children:e.map((function(n){var e=n.show,t=i.includes(e.id);return Object(S.jsx)(D,{id:e.id,name:e.name,image:e.image?e.image.medium:E,summary:e.summary,onStarClick:function(){c(t?{type:"REMOVE",showId:e.id}:{type:"ADD",showId:e.id})},isStarred:t},e.id)}))})},nn=Object(s.b)(C)(I||(I=Object(O.a)(["\n  .deathday {\n    margin: 0;\n    margin-top: 15px;\n    font-weight: bold;\n  }\n"]))),en=function(n){var e=n.image,t=n.name,r=n.gender,i=n.country,c=n.birthday,o=n.deathday;return Object(S.jsxs)(nn,{children:[Object(S.jsx)("div",{className:"img-wrapper",children:Object(S.jsx)("img",{src:e,alt:"actor"})}),Object(S.jsxs)("h1",{children:[t," ",r?"(".concat(r,")"):null]}),Object(S.jsx)("p",{children:i?"Comes from ".concat(i):"No country known"}),c?Object(S.jsxs)("p",{children:["Born ",c]}):null,Object(S.jsx)("p",{className:"deathday",children:o?"Died ".concat(o):"Alive"})]})},tn=function(n){var e=n.data;return Object(S.jsx)(A,{children:e.map((function(n){var e=n.person;return Object(S.jsx)(en,{name:e.name,country:e.country?e.country.name:null,birthday:e.birthday,deathday:e.deathday,gender:e.gender,image:e.image?e.image.medium:E},e.id)}))})},rn=s.b.input(Q||(Q=Object(O.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n"]))),cn=s.b.div(z||(z=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n\n  div {\n    margin: 0 15px;\n  }\n"]))),on=s.b.div(U||(U=Object(O.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n\n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(n){return n.theme.mainColors.blue})),an=t(31),sn=["label"],dn=s.b.label(P||(P=Object(O.a)(["\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 13px;\n  user-select: none;\n  font-weight: 700;\n  line-height: 1.65;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #fff;\n    border: 2px solid ",";\n    border-radius: 50%;\n  }\n\n  input:checked ~ span {\n    background-color: #fff;\n    border: 2px solid ",";\n  }\n\n  span:after {\n    content: '';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ span:after {\n    display: block;\n  }\n\n  span:after {\n    top: 4px;\n    left: 4px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ",";\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),ln=function(n){var e=n.label,t=Object(an.a)(n,sn);return Object(S.jsxs)(dn,{htmlFor:t.id,children:[e,Object(S.jsx)("input",Object(R.a)(Object(R.a)({},t),{},{type:"radio"})),Object(S.jsx)("span",{})]})},bn=s.b.ul(H||(H=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]))),pn=Object(s.b)(o.b)(q||(q=Object(O.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n    &:after {\n      content: '';\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ",";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.mainColors.dark}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),un=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}],jn=function(){var n=Object(a.f)();return console.log("location",n),Object(S.jsx)("div",{children:Object(S.jsx)(bn,{children:un.map((function(e){return Object(S.jsx)("li",{children:Object(S.jsx)(pn,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text})},e.to)}))})})},hn=s.b.div(L||(L=Object(O.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  p {\n    color: ",";\n    margin: 0;\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark})),xn=function(n){var e=n.title,t=n.subtitle;return Object(S.jsxs)(hn,{children:[Object(S.jsx)("h1",{children:e}),Object(S.jsx)("p",{children:t})]})},gn=function(n){var e=n.children;return Object(S.jsxs)("div",{children:[Object(S.jsx)(xn,{title:"Box-Office",subtitle:"Are you looking for a movie or an actor?"}),Object(S.jsx)(jn,{}),e]})},fn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(r.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(d.a)(e,2),i=t[0],c=t[1];return[i,function(e){c(e),sessionStorage.setItem(n,JSON.stringify(e))}]}(),e=Object(d.a)(n,2),t=e[0],i=e[1],c=Object(r.useState)(null),o=Object(d.a)(c,2),a=o[0],s=o[1],l=Object(r.useState)("shows"),b=Object(d.a)(l,2),p=b[0],u=b[1],h="shows"===p,x=function(){j("/search/".concat(p,"?q=").concat(t)).then((function(n){s(n)}))},g=function(n){u(n.target.value)};return Object(S.jsxs)(gn,{children:[Object(S.jsx)(rn,{type:"text",placeholder:"Search for something",onChange:function(n){i(n.target.value)},onKeyDown:function(n){13===n.keyCode&&x()},value:t}),Object(S.jsxs)(cn,{children:[Object(S.jsx)("div",{children:Object(S.jsx)(ln,{label:"Shows",id:"shows-search",value:"shows",checked:h,onChange:g})}),Object(S.jsx)("div",{children:Object(S.jsx)(ln,{label:"Actors",id:"actors-search",value:"people",checked:!h,onChange:g})})]}),Object(S.jsx)(on,{children:Object(S.jsx)("button",{type:"button",onClick:x,children:"Search"})}),a&&0===a.length?Object(S.jsx)("div",{children:"No results"}):a&&a.length>0?a[0].show?Object(S.jsx)($,{data:a}):Object(S.jsx)(tn,{data:a}):null]})},mn=s.b.div(J||(J=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .actor {\n    margin-left: 25px;\n\n    .bold {\n      font-weight: bold;\n    }\n  }\n"]))),On=function(n){var e=n.cast;return Object(S.jsx)(mn,{children:e.map((function(n,e){var t=n.person,r=n.character,i=n.voice;return Object(S.jsxs)("div",{className:"cast-item",children:[Object(S.jsx)("div",{className:"pic-wrapper",children:Object(S.jsx)("img",{src:t.image?t.image.medium:E,alt:"cast-person"})}),Object(S.jsx)("div",{className:"actor",children:Object(S.jsxs)("span",{children:[Object(S.jsx)("span",{className:"bold",children:t.name})," | ",r.name," ",i?"| Voice":""]})})]},e)}))})},vn=s.b.div(M||(M=Object(O.a)(["\n  p {\n    margin: 5px 0;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]))),wn=function(n){var e=n.Status,t=n.premiered,r=n.network;return Object(S.jsxs)(vn,{children:[Object(S.jsxs)("p",{children:["Status: ",Object(S.jsx)("span",{children:e})]}),Object(S.jsxs)("p",{children:["Premiered ",t," ",r?"on ".concat(r.name):null]})]})},An=s.b.div(X||(X=Object(O.a)(["\n  p {\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]))),Cn=s.b.div(Y||(Y=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]))),yn=function(n){var e=n.seasons;return Object(S.jsxs)(An,{children:[Object(S.jsxs)("p",{children:["Seasons in total: ",Object(S.jsx)("span",{children:e.length})]}),Object(S.jsxs)("p",{children:["Episodes in total:"," ",Object(S.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(S.jsx)(Cn,{children:e.map((function(n){return Object(S.jsxs)("div",{className:"season-item",children:[Object(S.jsxs)("div",{className:"left",children:[Object(S.jsxs)("p",{children:["Season ",n.number]}),Object(S.jsxs)("p",{children:["Episodes: ",Object(S.jsx)("span",{children:n.episodeOrder})]})]}),Object(S.jsxs)("div",{className:"right",children:["Aired:"," ",Object(S.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})},Bn=s.b.div(K||(K=Object(O.a)(["\n  display: flex;\n  margin-bottom: 40px;\n\n  img {\n    min-width: 250px;\n    width: 300px;\n    max-height: 450px;\n    border: 1px solid #ddd;\n    border-radius: 40px;\n  }\n\n  .text-side {\n    margin-left: 20px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]))),Sn=s.b.div(Z||(Z=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]))),Dn=s.b.div(T||(T=Object(O.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]))),En=function(n){var e=n.name,t=n.rating,r=n.summary,i=n.tags,c=n.image;return Object(S.jsxs)(Bn,{children:[Object(S.jsx)("img",{src:c?c.original:E,alt:"show-cover"}),Object(S.jsxs)("div",{className:"text-side",children:[Object(S.jsxs)(Sn,{children:[Object(S.jsx)("h1",{children:e}),Object(S.jsxs)("div",{children:[Object(S.jsx)(y,{}),Object(S.jsx)("span",{children:t.average||"N/A"})]})]}),Object(S.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:r}}),Object(S.jsxs)("div",{children:["Tags:"," ",Object(S.jsx)(Dn,{children:i.map((function(n,e){return Object(S.jsx)("span",{children:n},e)}))})]})]})]})},Rn=s.b.div(G||(G=Object(O.a)(["\n  padding: 0 20px;\n\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]))),kn=s.b.div(_||(_=Object(O.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"]))),Nn=function(){var n=function(n){var e=Object(r.useReducer)(W,{show:null,isLoading:!0,error:null}),t=Object(d.a)(e,2),i=t[0],c=t[1];return Object(r.useEffect)((function(){var e=!0;return j("/shows/".concat(n,"?embed[]=seasons&embed[]=cast")).then((function(n){e&&c({type:"FETCH_SUCCESS",show:n})})).catch((function(n){e&&c({type:"FETCH_FAILED",error:n.message})})),function(){e=!1}}),[n]),i}(Object(a.g)().id),e=n.show,t=n.isLoading,i=n.error;return console.log("show",e),t?Object(S.jsx)("div",{children:"Data is being loaded"}):i?Object(S.jsxs)("div",{children:["Error occured: ",i]}):Object(S.jsxs)(Rn,{children:[Object(S.jsx)(En,{image:e.image,name:e.name,rating:e.rating,summary:e.summary,tags:e.genres}),Object(S.jsxs)(kn,{children:[Object(S.jsx)("h1",{children:"Details"}),Object(S.jsx)(wn,{status:e.status,network:e.network,premiered:e.premiered})]}),Object(S.jsxs)(kn,{children:[Object(S.jsx)("h1",{children:"Seasons"}),Object(S.jsx)(yn,{seasons:e._embedded.seasons})]}),Object(S.jsxs)(kn,{children:[Object(S.jsx)("h1",{children:"Cast"}),Object(S.jsx)(On,{cast:e._embedded.cast})]})]})},Vn=function(){var n=F(),e=Object(d.a)(n,1)[0],t=Object(r.useState)(null),i=Object(d.a)(t,2),c=i[0],o=i[1],a=Object(r.useState)(!0),s=Object(d.a)(a,2),l=s[0],b=s[1],p=Object(r.useState)(null),u=Object(d.a)(p,2),h=u[0],x=u[1];return Object(r.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return j("/shows/".concat(n))}));Promise.all(n).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){o(n),b(!1)})).catch((function(n){x(n.message),b(!1)}))}else b(!1)}),[e]),Object(S.jsxs)(gn,{children:[l&&Object(S.jsx)("div",{children:"Shows are still loading"}),h&&Object(S.jsxs)("div",{children:[" Error occurred:",h]}),!l&&!c&&Object(S.jsx)("div",{children:" No Shows were added"}),!l&&!h&&c&&Object(S.jsx)($,{data:c})]})},Fn={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var Wn=function(){return Object(S.jsx)(s.a,{theme:Fn,children:Object(S.jsxs)(a.c,{children:[Object(S.jsx)(a.a,{exact:!0,path:"/",children:Object(S.jsx)(fn,{})}),Object(S.jsxs)(a.a,{exact:!0,path:"/starred",children:[" ",Object(S.jsx)(Vn,{})]}),Object(S.jsx)(a.a,{exact:!0,path:"/show/:id",children:Object(S.jsx)(Nn,{})}),Object(S.jsx)(a.a,{children:Object(S.jsx)("div",{children:"Not found"})})]})})},In=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Qn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}c.a.render(Object(S.jsx)(o.a,{children:Object(S.jsx)(Wn,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/box-office",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/box-office","/service-worker.js");In?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Qn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Qn(e,n)}))}}()}},[[50,1,2]]]);
//# sourceMappingURL=main.2c4ab2cb.chunk.js.map