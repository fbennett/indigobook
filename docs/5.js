(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(t,n,e){var r=e(11),o=e(17),i=e(23),u=e(4),c=e(5),l=e(37),a=e(172),s=e(3),f=o("Reflect","construct"),p=s((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),d=!s((function(){f((function(){}))})),b=p||d;r({target:"Reflect",stat:!0,forced:b,sham:b},{construct:function(t,n){i(t),u(n);var e=arguments.length<3?t:i(arguments[2]);if(d&&!p)return f(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(a.apply(t,r))}var o=e.prototype,s=l(c(o)?o:Object.prototype),b=Function.apply.call(t,s,n);return c(b)?b:s}})},172:function(t,n,e){"use strict";var r=e(23),o=e(5),i=[].slice,u={},c=function(t,n,e){if(!(n in u)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";u[n]=Function("C,a","return new C("+r.join(",")+")")}return u[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=i.call(arguments,1),u=function(){var r=e.concat(i.call(arguments));return this instanceof u?c(n,r.length,r):n.apply(t,r)};return o(n.prototype)&&(u.prototype=n.prototype),u}},173:function(t,n,e){!function(t){"use strict";var n=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},e="defaultParagraphSeparator",r="formatBlock",o=function(t,n,e){return t.addEventListener(n,e)},i=function(t,n){return t.appendChild(n)},u=function(t){return document.createElement(t)},c=function(t){return document.queryCommandState(t)},l=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return document.execCommand(t,!1,n)},a={bold:{icon:"<b>B</b>",title:"Bold",state:function(){return c("bold")},result:function(){return l("bold")}},italic:{icon:"<i>I</i>",title:"Italic",state:function(){return c("italic")},result:function(){return l("italic")}},underline:{icon:"<u>U</u>",title:"Underline",state:function(){return c("underline")},result:function(){return l("underline")}},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:function(){return c("strikeThrough")},result:function(){return l("strikeThrough")}},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:function(){return l(r,"<h1>")}},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:function(){return l(r,"<h2>")}},paragraph:{icon:"&#182;",title:"Paragraph",result:function(){return l(r,"<p>")}},quote:{icon:"&#8220; &#8221;",title:"Quote",result:function(){return l(r,"<blockquote>")}},olist:{icon:"&#35;",title:"Ordered List",result:function(){return l("insertOrderedList")}},ulist:{icon:"&#8226;",title:"Unordered List",result:function(){return l("insertUnorderedList")}},code:{icon:"&lt;/&gt;",title:"Code",result:function(){return l(r,"<pre>")}},line:{icon:"&#8213;",title:"Horizontal Line",result:function(){return l("insertHorizontalRule")}},link:{icon:"&#128279;",title:"Link",result:function(){var t=window.prompt("Enter the link URL");t&&l("createLink",t)}},image:{icon:"&#128247;",title:"Image",result:function(){var t=window.prompt("Enter the image URL");t&&l("insertImage",t)}}},s={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"},f=function(t){var c=t.actions?t.actions.map((function(t){return"string"==typeof t?a[t]:a[t.name]?n({},a[t.name],t):t})):Object.keys(a).map((function(t){return a[t]})),f=n({},s,t.classes),p=t[e]||"div",d=u("div");d.className=f.actionbar,i(t.element,d);var b=t.element.content=u("div");return b.contentEditable=!0,b.className=f.content,b.oninput=function(n){var e=n.target.firstChild;e&&3===e.nodeType?l(r,"<"+p+">"):"<br>"===b.innerHTML&&(b.innerHTML=""),t.onChange(b.innerHTML)},b.onkeydown=function(t){"Enter"===t.key&&"blockquote"===document.queryCommandValue("formatBlock")&&setTimeout((function(){return l(r,"<"+p+">")}),0)},i(t.element,b),c.forEach((function(t){var n=u("button");if(n.className=f.button,n.innerHTML=t.icon,n.title=t.title,n.setAttribute("type","button"),n.onclick=function(){return t.result()&&b.focus()},t.state){var e=function(){return n.classList[t.state()?"add":"remove"](f.selected)};o(b,"keyup",e),o(b,"mouseup",e),o(n,"click",e)}i(d,n)})),t.styleWithCSS&&l("styleWithCSS"),l(e,p),t.element},p={exec:l,init:f};t.exec=l,t.init=f,t.default=p,Object.defineProperty(t,"__esModule",{value:!0})}(n)},174:function(t,n,e){var r=e(59),o=e(175);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},u=(r(o,i),o.locals?o.locals:{});t.exports=u},175:function(t,n,e){(n=e(60)(!1)).push([t.i,".pell {\n  border: 1px solid rgba(10, 10, 10, 0.1);\n  box-sizing: border-box; }\n\n.pell-content {\n  box-sizing: border-box;\n  height: 50px;\n  outline: 0;\n  overflow-y: auto;\n  padding: 10px;\n  background-color: lightgoldenrodyellow;\n}\n\n.pell-actionbar {\n  background-color: #4b0082;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.1); }\n\n.pell-button {\n  background-color: white;\n  border: none;\n  cursor: pointer;\n  height: 30px;\n  outline: 0;\n  width: 45px;\n  vertical-align: bottom;\n  margin: 1px 5px;\n  border-radius: 4px;\n}\n\n.pell-button-selected {\n  background-color: #F0F0F0; }\n\n.pell u {\n    text-decoration-color: transparent;\n    font-variant: small-caps;\n}\n\n",""]),t.exports=n},184:function(t,n,e){"use strict";e.r(n);e(33),e(171),e(34);var r=e(0),o=e.n(r),i=e(173);e(174);function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(d,t);var n,e,r,f,p=(n=d,function(){var t,e=a(n);if(l()){var r=a(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return c(this,t)});function d(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,d),(n=p.call(this,t)).state={html:null},n}return e=d,(r=[{key:"componentDidMount",value:function(){var t=this;this.editor=Object(i.init)({element:document.getElementById("editor"),onChange:function(n){return t.setState({html:n})},actions:["bold","italic",{name:"smallCaps",icon:'<div style="font-variant: small-caps;">Caps</div>',title:"Small Caps",result:function(){return Object(i.exec)("underline")}},{name:"superscript",icon:"<div>A<sup>b</sup></div>",title:"Superscript",result:function(){return Object(i.exec)("superscript")}}]}),this.editor.content.innerHTML=this.props.citeContent}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{id:"editor",className:"pell"}))}}])&&u(e.prototype,r),f&&u(e,f),d}(r.Component);n.default=f}}]);