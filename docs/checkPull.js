(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{149:function(t,e,n){"use strict";n.d(e,"c",(function(){return D})),n.d(e,"b",(function(){return L})),n.d(e,"a",(function(){return f}));n(87),n(178),n(51),n(52),n(33),n(92),n(88);var r=n(139),a=n.n(r);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function u(t){o(i,r,a,u,c,"next",t)}function c(t){o(i,r,a,u,c,"throw",t)}u(void 0)}))}}var c=function(t,e,n){var r=t.message;e&&(r="".concat(e,": ").concat(r)),n||console.log(r)},s=function(t){return JSON.parse(JSON.stringify(t))},p=function(t){return"style_".concat(t,".txt")},f=function(){var t=u(regeneratorRuntime.mark((function t(e,n){var r,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.apiMethod?e.apiMethod:"get",i=[e.apiSection,e.repoPath,e.apiSuffix].filter((function(t){return t})).join("/"),t.next=4,a()({method:r,url:"".concat("https://api.github.com","/").concat(i),headers:{Authorization:"token ".concat(e.apiToken)},data:e.params}).catch((function(t){return c(t,"API fail",n)}));case 4:return o=t.sent,t.abrupt("return",!!o&&o.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function t(e){i(this,t),this.repo=d.bind({apiToken:e}),this.me=w.bind({apiToken:e})},l=function t(e){i(this,t),e=s(e),this.apiMethod="get",this.apiSection="repos",this.repoPath=e.result.full_name,this.apiSuffix=!1,this.info=m.bind(e),this.fork=x.bind(e),this.commits=b.bind(e),this.patch=S.bind(e),this.getBranch=I.bind(e),this.deleteBranch=_.bind(e),this.setBranch=M.bind(e),this.getContents=T.bind(e),this.updateContents=O.bind(e),this.createPullRequest=N.bind(e),this.getPullRequest=U.bind(e)};function m(){return this.result}function d(t,e){return g.apply(this,arguments)}function g(){return(g=u(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=s(this)).apiMethod="get",r.apiSection="repos",r.repoPath=e,r.apiSuffix=!1,t.next=7,f(r,n);case 7:return r.result=t.sent,t.abrupt("return",new l(r));case 9:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function w(){return v.apply(this,arguments)}function v(){return(v=u(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=s(this)).apiSection="user",t.next=4,f(e);case 4:return e.result=t.sent,t.abrupt("return",new l(e));case 6:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=u(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=s(this)).apiMethod="post",n.apiSection="repos",n.repoPath=e,n.apiSuffix="forks",t.next=7,f(n);case 7:return n.result=t.sent,t.abrupt("return",new l(n));case 9:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function b(){return R.apply(this,arguments)}function R(){return(R=u(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=s(this)).apiSuffix="commits?sha=master",t.abrupt("return",f(e));case 3:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function S(t){return k.apply(this,arguments)}function k(){return(k=u(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=s(this)).apiMethod="patch",n.apiSuffix="git/refs/heads/master",n.params={sha:e,force:!0},t.abrupt("return",f(n));case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function I(t,e){return P.apply(this,arguments)}function P(){return(P=u(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=s(this)).apiSuffix="git/ref/heads/".concat(e),t.abrupt("return",f(r,n));case 3:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function _(t){return E.apply(this,arguments)}function E(){return(E=u(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=s(this)).apiMethod="delete",n.apiSuffix="git/refs/heads/".concat(e),t.abrupt("return",f(n));case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function M(t,e){return j.apply(this,arguments)}function j(){return(j=u(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=s(this)).apiMethod="post",r.apiSuffix="git/refs",r.params={ref:"refs/heads/".concat(e),sha:n},t.abrupt("return",f(r));case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function T(t){return C.apply(this,arguments)}function C(){return(C=u(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s(this),r=p(e),n.apiSuffix="contents/".concat(r,"?ref=").concat(encodeURIComponent(e)),t.abrupt("return",f(n));case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function O(t,e,n){return A.apply(this,arguments)}function A(){return(A=u(regeneratorRuntime.mark((function t(e,n,r){var a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s(this),i=p(e),a.apiMethod="put",a.apiSuffix="contents/".concat(i),a.params={message:"Proposed edit",content:n,branch:e},r&&(a.params.sha=r),t.abrupt("return",f(a));case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function N(t,e,n){return J.apply(this,arguments)}function J(){return(J=u(regeneratorRuntime.mark((function t(e,n,r){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=s(this)).apiMethod="post",a.apiSuffix="pulls",a.params={title:"Citation: ".concat(e),head:"".concat(n,":").concat(e),base:"master",body:r,maintainer_can_modify:!0},t.abrupt("return",f(a));case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function U(t,e){return B.apply(this,arguments)}function B(){return(B=u(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=s(this)).apiMethod="get",r.apiSuffix="pulls?head=".concat(n,":").concat(e),t.abrupt("return",f(r));case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}var q=new function t(){i(this,t),this.client=function(t){return new h(t)}},D=function(){var t=u(regeneratorRuntime.mark((function t(e,n,r){var a,i,o,u,s,p,f,h,l,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=window.localStorage.getItem("access_token"),i=q.client(a),t.next=4,i.repo("Juris-M/jsti-indigobook");case 4:return o=t.sent,u=window.localStorage.getItem("cite_userName"),t.next=8,i.repo("".concat(u,"/jsti-indigobook"),!0);case 8:if(s=t.sent,(p=s.info()).full_name){t.next=14;break}return t.next=13,ghme.fork("Juris-M/jsti-indigobook").catch((function(t){return c(t,"create fork")}));case 13:p=t.sent;case 14:return t.next=16,o.commits();case 16:if(0===(f=t.sent).length){t.next=21;break}return h=f[0].sha,t.next=21,s.patch(h);case 21:if(!s.getBranch(e,!0)){t.next=25;break}return t.next=25,s.deleteBranch(e);case 25:return t.next=27,s.setBranch(e,h);case 27:return t.sent,t.next=30,s.getContents(e);case 30:if(p=t.sent,l=btoa(n),p){t.next=38;break}return t.next=35,s.updateContents(e,l);case 35:p=o.createPullRequest(e,u,r),t.next=44;break;case 38:if(m=p.content.split("\n").join(""),l===m){t.next=44;break}return d=p.sha,t.next=43,s.updateContents(e,l,d);case 43:p=o.createPullRequest(e,u,r);case 44:return t.abrupt("return",p);case 45:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),L=function(){var t=u(regeneratorRuntime.mark((function t(e){var n,r,a,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.localStorage.getItem("access_token"),r=q.client(n),t.next=4,r.repo("Juris-M/jsti-indigobook");case 4:return a=t.sent,t.next=7,r.me();case 7:return i=t.sent,o=i.info(),window.localStorage.setItem("cite_userName",o.login),t.abrupt("return",a.getPullRequest(e,o.login));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},175:function(t,e,n){"use strict";n.r(e);n(89),n(90),n(87),n(32),n(53),n(51),n(52),n(176),n(33),n(54),n(94),n(92),n(91),n(88);var r=n(149);function a(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw a}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}var u=function(){var t,e=(t=regeneratorRuntime.mark((function t(){var e,n,i,o,u,c,s,p,f,h,l,m,d,g,w,v,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.localStorage.getItem("test_id"),t.next=3,Object(r.b)(e);case 3:if(!(n=t.sent)||!n.length){t.next=26;break}return window.localStorage.setItem("cite_url",n[0].html_url),i=window.localStorage.getItem("cite_userName"),o=window.localStorage.getItem("access_token"),t.next=10,Object(r.a)({apiSection:"repos",repoPath:"".concat(i,"/jsti-indigobook"),apiSuffix:"contents/style_".concat(e,".txt?ref=").concat(e),apiToken:"".concat(o)});case 10:for(u=t.sent,c=atob(u.content),s=c.split("\n"),p={},f={open:{},close:{}},h={},l=0,m=["DESCRIPTION","RESULT"];l<m.length;l++)p[d=m[l]]=!1,f.open[d]=new RegExp(">=+\\s+".concat(d,"\\s+=+>")),f.close[d]=new RegExp("<=+\\s+".concat(d,"\\s+=+<"));g=[],w=a(s);try{for(w.s();!(v=w.n()).done;)for(d in x=v.value,(p.DESCRIPTION||p.RESULT)&&g.push(x),p)x.match(f.open[d])?p[d]=!0:x.match(f.close[d])&&(g.pop(),h[d]=g.join("\n"),g=[],p[d]=!1)}catch(t){w.e(t)}finally{w.f()}window.localStorage.setItem("citation",h.RESULT),window.localStorage.setItem("cite_desc",h.DESCRIPTION),t.next=27;break;case 26:window.localStorage.removeItem("cite_desc");case 27:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function u(t){o(i,r,a,u,c,"next",t)}function c(t){o(i,r,a,u,c,"throw",t)}u(void 0)}))});return function(){return e.apply(this,arguments)}}();e.default=u},176:function(t,e,n){var r=n(8),a=n(2),i=n(57),o=n(177),u=n(7).f,c=n(34).f,s=n(100),p=n(60),f=n(98),h=n(11),l=n(3),m=n(23).set,d=n(95),g=n(1)("match"),w=a.RegExp,v=w.prototype,x=/a/g,y=/a/g,b=new w(x)!==x,R=f.UNSUPPORTED_Y;if(r&&i("RegExp",!b||R||l((function(){return y[g]=!1,w(x)!=x||w(y)==y||"/a/i"!=w(x,"i")})))){for(var S=function(t,e){var n,r=this instanceof S,a=s(t),i=void 0===e;if(!r&&a&&t.constructor===S&&i)return t;b?a&&!i&&(t=t.source):t instanceof S&&(i&&(e=p.call(t)),t=t.source),R&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var u=o(b?new w(t,e):w(t,e),r?this:v,S);return R&&n&&m(u,{sticky:n}),u},k=function(t){t in S||u(S,t,{configurable:!0,get:function(){return w[t]},set:function(e){w[t]=e}})},I=c(w),P=0;I.length>P;)k(I[P++]);v.constructor=S,S.prototype=v,h(a,"RegExp",S)}d("RegExp")},177:function(t,e,n){var r=n(5),a=n(96);t.exports=function(t,e,n){var i,o;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(o=i.prototype)&&o!==n.prototype&&a(t,o),t}},178:function(t,e,n){"use strict";var r=n(10),a=n(58).filter,i=n(36),o=n(59),u=i("filter"),c=o("filter");r({target:"Array",proto:!0,forced:!u||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);