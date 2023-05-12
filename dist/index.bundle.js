(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([e.id,"body {\r\n  margin: 0;\r\n}\r\n\r\nh1 {\r\n  margin: 0 0 0 35px;\r\n  font-size: large;\r\n  padding: 10px;\r\n}\r\n\r\n.top-hd {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  border: 1px solid #f7f7f7;\r\n  align-items: center;\r\n}\r\n\r\n.add-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  padding: 20px;\r\n  background-color: white;\r\n  margin: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n}\r\n\r\nul li {\r\n  display: flex;\r\n  border: 1px solid #f7f7f7;\r\n  list-style-type: none;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n}\r\n\r\nbutton {\r\n  color: black;\r\n  display: block;\r\n  justify-content: center;\r\n  background-color: rgb(251, 251, 251);\r\n  padding: 12px;\r\n  outline: none;\r\n  border: none;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-solid {\r\n  color: #b7b2b2;\r\n  cursor: move;\r\n  padding-right: 11px;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  flex-direction: row-reverse;\r\n  justify-content: space-between;\r\n}\r\n\r\ninput {\r\n  margin: 0 0 0 45px;\r\n  border: none;\r\n  font-style: italic;\r\n  padding: 14px;\r\n  width: 65%;\r\n}\r\n\r\n#body {\r\n  border: #0c0b0b;\r\n}\r\n",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=t.base?s[0]+t.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);n[c].references--}for(var s=t(e,o),l=0;l<i.length;l++){var d=r(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),s=r.n(c),l=r(216),d=r.n(l),u=r(589),p=r.n(u),f=r(426),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const m=e=>{localStorage.setItem("mylist",JSON.stringify(e))},y=()=>JSON.parse(localStorage.getItem("mylist"));function h(e){return e.map(((e,n)=>(e.id=n,e)))}const g={add:function(e,n,r){const t=y();t.push({description:e,completed:n,id:r});const o=h(t);m(o)},remove:function(e){const n=h(y().filter((n=>n.id!==e)));m(n)},save:m,retrieve:y,updateList:h};g.retrieve()||localStorage.setItem("mylist","[]");const b=()=>{const e=g.retrieve(),n=document.getElementById("list");n.innerHTML="",e.forEach((e=>{const r=document.createElement("li");r.innerHTML=`\n    <input type="checkbox">\n    <input class="text" type="text" value="${e.description}"/> \n    <i class="fa-solid fa-ellipsis-vertical"></i>\n    `;const t=document.createElement("div");t.innerHTML='<i class="fa-regular fa-trash-can"></i>',t.addEventListener("click",(()=>{g.remove(e.id),b()})),r.appendChild(t),n.appendChild(r)})),document.querySelectorAll(".text").forEach(((e,n)=>{e.addEventListener("keyup",(()=>{const r=g.retrieve();r[n].description=e.value,g.save(r)}))}))};(()=>{const e=document.getElementById("form");e.addEventListener("submit",(n=>{n.preventDefault();const r=g.retrieve(),t=e.text.value,o=r.length;g.add(t,!1,o),b(),e.text.value=""}))})(),b(),(()=>{let e=g.retrieve();e=e.filter((e=>!e.completed));const n=g.updateList(e);g.save(n)})()})()})();