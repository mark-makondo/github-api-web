(this["webpackJsonpgithub-api-web"]=this["webpackJsonpgithub-api-web"]||[]).push([[0],{17:function(e,t,r){"use strict";(function(e){var n=r(3),a=r.n(n),c=r(4),s=r(6),o=r(1),i=r(5),u=r.n(i),l=r(18),p=r(0);t.a=function(){var t=Object(o.useState)({}),r=Object(s.a)(t,2),n=r[0],i=r[1],m=Object(o.useState)([]),j=Object(s.a)(m,2),f=j[0],h=j[1],d=Object(o.useState)(""),b=Object(s.a)(d,2),O=b[0],v=b[1],x=function(){var t=Object(c.a)(a.a.mark((function t(r,n,c){var s,o,i,l,p;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.currentTarget.classList.toggle("active"),t.next=3,u.a.get("https://api.github.com/repos/".concat(n,"/").concat(c,"/contents/README.md"));case 3:s=t.sent,o=s.data,i=o.content,l=new e.from(i,"base64"),p=l.toString("ascii"),r.target.parentNode.querySelector(".repo-info p").innerHTML="Read Me: ".concat(p);case 10:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),g=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0};return Object(p.jsx)(l.a,{user:n,setUserData:i,repos:f,setRepos:h,error:O,setError:v,fetchRepoReadme:x,showClickHandler:function(e){if(e.preventDefault(),g(n))alert("Search first!");else{var t=document.querySelector(".home-content button"),r=document.querySelector(".home-content__repos");r.classList.toggle("active"),r.classList.contains("active")?t.innerHTML="Hide Repositories":t.innerHTML="Repositories"}}})}}).call(this,r(24).Buffer)},18:function(e,t,r){"use strict";var n=r(1),a=r(3),c=r.n(a),s=r(4),o=r(6),i=r(5),u=r.n(i),l=r(0),p=function(e){var t=e.clickHandler,r=e.getInput;return Object(l.jsx)("div",{className:"github-fetch",children:Object(l.jsxs)("form",{className:"input-form",children:[Object(l.jsx)("input",{autoComplete:"off",onChange:function(e){return r(e)},className:"form__home normal-2",placeholder:"Search Username",type:"text",id:"username",name:"username",required:!0}),Object(l.jsx)("input",{className:"form__submit normal-2",onClick:function(e){return t(e)},type:"button",value:"Search"})]})})},m=function(e){var t=e.user,r=e.setUserData,a=e.setRepos,i=(e.error,e.setError),m=Object(n.useState)(""),j=Object(o.a)(m,2),f=j[0],h=j[1],d=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://api.github.com/users/".concat(f));case 3:t=e.sent,r(t.data),i(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&(i(e.t0.response.data.message),r({}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t);case 2:r=e.sent,a(r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t.repos_url&&b(t.repos_url)}),[t]),Object(l.jsx)(p,{clickHandler:function(e){e.preventDefault(),d()},getInput:function(e){e.preventDefault(),h(e.target.value)}})};t.a=function(e){var t=e.user,r=e.setUserData,n=e.repos,a=e.setRepos,c=e.error,s=e.setError,o=e.fetchRepoReadme,i=e.showClickHandler;return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("header",{className:"normal-1",children:"github fetch"}),Object(l.jsx)(m,{user:t,setUserData:r,setRepos:a,setError:s,error:c}),Object(l.jsxs)("div",{className:"home-content",children:[Object(l.jsxs)("div",{className:"home-content__profile",children:[Object(l.jsx)("img",{src:t.avatar_url,alt:""}),Object(l.jsx)("span",{className:"normal-2",children:t.name})]},t.id),Object(l.jsx)("button",{className:"normal-2",onClick:function(e){return i(e)},children:"Repositories"}),c?Object(l.jsx)("span",{className:"normal-1 error",children:c}):Object(l.jsx)("div",{className:"home-content__repos",children:n?n.map((function(e,t){return Object(l.jsxs)("div",{onClick:function(t){return o(t,e.owner.login,e.name)},className:"home-content__repos-holder repo-".concat(t),children:[Object(l.jsx)("span",{className:"normal-1",children:e.name}),Object(l.jsxs)("div",{className:"repo-info",children:[Object(l.jsx)("a",{href:e.html_url,className:"normal-2",children:"Repo Link"}),Object(l.jsx)("p",{className:"normal-2 p-".concat(t)})]})]},e.id)})):Object(l.jsx)("span",{className:"normal-1",children:" Loading . . ."})})]})]})}},23:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(16),s=r.n(c),o=(r(23),r(17)),i=r(0);var u=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(o.a,{})})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.52b53f95.chunk.js.map