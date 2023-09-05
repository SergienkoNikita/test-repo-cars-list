!function(){"use strict";var e,n,r={223:function(e,n,r){function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,(void 0,"symbol"==typeof(o=function(e,n){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t.key))?o:String(o)),t)}var o}r(165);let o=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.filterBlock=document.getElementById(n.id),n.options.forEach((e=>{this.filterBlock.insertAdjacentElement("beforeend",this.getOptionElement(e))}))}var n,r;return n=e,(r=[{key:"getOptionElement",value:function(e){const n=document.createElement("option");return n.setAttribute("value",e.value),n.innerText=e.label,n}},{key:"value",get:function(){return this.filterBlock.value}},{key:"onChange",value:function(e){this.filterBlock.addEventListener("change",e)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();const i=[{value:"price-max",label:"Цена от большей"},{value:"price-min",label:"Цена от меньшей"},{value:"year-max",label:"Год от старшего"},{value:"year-min",label:"Год от младшего"},{value:"mileage-max",label:"Пробег от большего"},{value:"mileage-min",label:"Пробег от меньшего"}],a={data:[]},c=()=>{const e=new Set(a.data.map((e=>e.district))),n=[];return e.forEach((e=>{n.push({value:e,label:e})})),n},l=()=>{const e=new Set(a.data.map((e=>e.city))),n=[];return e.forEach((e=>{n.push({value:e,label:e})})),n},s=e=>{const n=document.getElementById("cars-list");n.innerHTML="",(e=>{let n=[...a.data];return e.district&&(n=n.filter((n=>n.district===e.district))),e.city&&(n=n.filter((n=>n.city===e.city))),e.sort&&(n=((e,n)=>{const r=[...e];return n.includes("price")?r.sort(((e,r)=>"price-max"===n?r.price-e.price:e.price-r.price)):n.includes("year")?r.sort(((e,r)=>"year-max"===n?e.year-r.year:r.year-e.year)):n.includes("mileage")?r.sort(((e,r)=>"mileage-max"===n?r.mileage-e.mileage:e.mileage-r.mileage)):void 0})(n,e.sort)),n})(e).forEach((e=>{n.insertAdjacentHTML("beforeend",(e=>{const n=e.price>5e3?"text-red":"text-green",r=e.mileage>150?"text-red":"text-green";return`<div class="auto-cart">\n        <h4 class="auto-title">\n            ${e.name} / ${e.year}г / <span class="${r}">${e.mileage}тыс.</span> / <span class="${n}">${e.price} $</span>\n        </h4>\n        ${e.img?`<div class="cat-img">\n            <img src="${e.img}" alt="">\n        </div>`:""}\n        <div class="auto-cart-pros">\n            <p class="text-light-green">Плюсы:</p>\n            <ul class="car-desc text-light-green">\n                ${e.pluses.map((e=>`<li>${e}</li>`)).join("")}\n            </ul>\n    \n            <p class="text-light-red">Минусы:</p>\n            <ul class="car-desc text-light-red">\n                ${e.minuses.map((e=>`<li>${e}</li>`)).join("")}\n            </ul>\n        </div>\n        <div class="car-additional">\n          <p class="flex"><span class="car-addtional-head">Цена: </span><span class="${n} text-bold">${e.price} $</span></p>\n          <p class="flex"><span class="car-addtional-head">Пробег: </span><span class="${r} text-bold">${e.mileage} тыс.</span></p>\n          <p class="flex"><span class="car-addtional-head">Год: </span><span class="text-bold">${e.year}г</span></p>\n          <p class="flex"><span class="car-addtional-head">Город: </span><span class="text-bold">${e.city}</span></p>\n        </div>\n\n        <a class="mt-10"\n           href="${e.link}"\n           target="_blank">\n            Ссылка - ${e.link}\n        </a>\n    </div>`})(e))}))};window.onload=async()=>{const e=document.getElementById("cars-list");e.innerHTML='<svg class="spinner" viewBox="0 0 50 50">\n  <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>\n</svg>';try{a.data=await fetch("https://raw.githubusercontent.com/SergienkoNikita/test-repo-cars-list/main/api/cars.json").then((e=>e.json()))}finally{e.innerHTML=""}const{citySelect:n,districtSelect:r,sortSelect:t}={districtSelect:new o({id:"district-select",options:c()}),citySelect:new o({id:"city-select",options:l()}),sortSelect:new o({id:"sort-select",options:i})};s({district:r.value,city:n.value,sort:t.value}),n.onChange((()=>s({district:r.value,city:n.value,sort:t.value}))),r.onChange((()=>s({district:r.value,city:n.value,sort:t.value}))),t.onChange((()=>s({district:r.value,city:n.value,sort:t.value})))}},381:function(e,n,r){var t=r(330),o=Object.create(null),i="undefined"==typeof document,a=Array.prototype.forEach;function c(){}function l(e,n){if(!n){if(!e.href)return;n=e.href.split("?")[0]}if(d(n)&&!1!==e.isLoaded&&n&&n.indexOf(".css")>-1){e.visited=!0;var r=e.cloneNode();r.isLoaded=!1,r.addEventListener("load",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.addEventListener("error",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.href="".concat(n,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(r,e.nextSibling):e.parentNode.appendChild(r)}}function s(){var e=document.querySelectorAll("link");a.call(e,(function(e){!0!==e.visited&&l(e)}))}function d(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,n){if(i)return console.log("no window.document found, will not HMR CSS"),c;var r,u,f=function(e){var n=o[e];if(!n){if(document.currentScript)n=document.currentScript.src;else{var r=document.getElementsByTagName("script"),i=r[r.length-1];i&&(n=i.src)}o[e]=n}return function(e){if(!n)return null;var r=n.split(/([^\\/]+)\.js$/),o=r&&r[1];return o&&e?e.split(",").map((function(e){var r=new RegExp("".concat(o,"\\.js$"),"g");return t(n.replace(r,"".concat(e.replace(/{fileName}/g,o),".css")))})):[n.replace(".js",".css")]}}(e);return r=function(){var e=f(n.filename),r=function(e){if(!e)return!1;var n=document.querySelectorAll("link"),r=!1;return a.call(n,(function(n){if(n.href){var o=function(e,n){var r;return e=t(e),n.some((function(t){e.indexOf(n)>-1&&(r=t)})),r}(n.href,e);d(o)&&!0!==n.visited&&o&&(l(n,o),r=!0)}})),r}(e);if(n.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void s();r?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),s())},50,u=0,function(){var e=this,n=arguments;clearTimeout(u),u=setTimeout((function(){return r.apply(e,n)}),50)}}},330:function(e){e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var n=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",r=e.replace(new RegExp(n,"i"),"").split("/"),t=r[0].toLowerCase().replace(/\.$/,"");return r[0]="",n+t+r.reduce((function(e,n){switch(n){case"..":e.pop();break;case".":break;default:e.push(n)}return e}),[]).join("/")}},165:function(e,n,r){var t=r(381)(e.id,{locals:!1});e.hot.dispose(t),e.hot.accept(void 0,t)}},t={};function o(e){var n=t[e];if(void 0!==n){if(void 0!==n.error)throw n.error;return n.exports}var i=t[e]={id:e,exports:{}};try{var a={id:e,module:i,factory:r[e],require:o};o.i.forEach((function(e){e(a)})),i=a.module,a.factory.call(i.exports,i,i.exports,a.require)}catch(e){throw i.error=e,e}return i.exports}o.m=r,o.c=t,o.i=[],o.hu=function(e){return e+"."+o.h()+".hot-update.js"},o.miniCssF=function(e){},o.hmrF=function(){return"main."+o.h()+".hot-update.json"},o.h=function(){return"33733a91d4a750c3d121"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e={},n="for-mum:",o.l=function(r,t,i,a){if(e[r])e[r].push(t);else{var c,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==n+i){c=u;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",n+i),c.src=r),e[r]=[t];var f=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}},function(){var e,n,r,t={},i=o.c,a=[],c=[],l="idle",s=0,d=[];function u(e){l=e;for(var n=[],r=0;r<c.length;r++)n[r]=c[r].call(null,e);return Promise.all(n)}function f(){0==--s&&u("ready").then((function(){if(0===s){var e=d;d=[];for(var n=0;n<e.length;n++)e[n]()}}))}function p(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return u("check").then(o.hmrM).then((function(r){return r?u("prepare").then((function(){var t=[];return n=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,i){return o.hmrC[i](r.c,r.r,r.m,e,n,t),e}),[])).then((function(){return n=function(){return e?v(e):u("ready").then((function(){return t}))},0===s?n():new Promise((function(e){d.push((function(){e(n())}))}));var n}))})):u(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+l+")")})):v(e)}function v(e){e=e||{},m();var t=n.map((function(n){return n(e)}));n=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var i=u("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var a,c=u("apply"),l=function(e){a||(a=e)},s=[];return t.forEach((function(e){if(e.apply){var n=e.apply(l);if(n)for(var r=0;r<n.length;r++)s.push(n[r])}})),Promise.all([i,c]).then((function(){return a?u("fail").then((function(){throw a})):r?v(e).then((function(e){return s.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e})):u("idle").then((function(){return s}))}))}function m(){if(r)return n||(n=[]),Object.keys(o.hmrI).forEach((function(e){r.forEach((function(r){o.hmrI[e](r,n)}))})),r=void 0,!0}o.hmrD=t,o.i.push((function(d){var v,m,y,g,b=d.module,E=function(n,r){var t=i[r];if(!t)return n;var o=function(o){if(t.hot.active){if(i[o]){var c=i[o].parents;-1===c.indexOf(r)&&c.push(r)}else a=[r],e=o;-1===t.children.indexOf(o)&&t.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+r),a=[];return n(o)},c=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&"e"!==d&&Object.defineProperty(o,d,c(d));return o.e=function(e){return function(e){switch(l){case"ready":u("prepare");case"prepare":return s++,e.then(f,f),e;default:return e}}(n.e(e))},o}(d.require,d.id);b.hot=(v=d.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){a=m.parents.slice(),e=y?void 0:v,o(v)},active:!0,accept:function(e,n,r){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=n||function(){},g._acceptedErrorHandlers[e[t]]=r;else g._acceptedDependencies[e]=n||function(){},g._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._declinedDependencies[e[n]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=g._disposeHandlers.indexOf(e);n>=0&&g._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":n=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,n)})),u("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,n)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return l;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var n=c.indexOf(e);n>=0&&c.splice(n,1)},data:t[v]},e=void 0,g),b.parents=a,b.children=[],a=[],d.require=E})),o.hmrC={},o.hmrI={}}(),function(){var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var t=r.length-1;t>-1&&!e;)e=r[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){if("undefined"!=typeof document){var e=[],n=[],r=function(r){return{dispose:function(){for(var n=0;n<e.length;n++){var r=e[n];r.parentNode&&r.parentNode.removeChild(r)}e.length=0},apply:function(){for(var e=0;e<n.length;e++)n[e].rel="stylesheet";n.length=0}}};o.hmrC.miniCss=function(t,i,a,c,l,s){l.push(r),t.forEach((function(r){var t=o.miniCssF(r),i=o.p+t,a=function(e,n){for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var o=(a=r[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===n)return a}}(t,i);a&&c.push(new Promise((function(t,o){var c=function(e,n,r,t,o){var i=document.createElement("link");return i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(r){if(i.onerror=i.onload=null,"load"===r.type)t();else{var a=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=c,i.parentNode&&i.parentNode.removeChild(i),o(l)}},i.href=n,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i}(r,i,a,(function(){c.as="style",c.rel="preload",t()}),o);e.push(a),n.push(c)})))}))}}}(),function(){var e,n,r,t,i,a=o.hmrS_jsonp=o.hmrS_jsonp||{179:0},c={};function l(n,r){return e=r,new Promise((function(e,r){c[n]=e;var t=o.p+o.hu(n),i=new Error;o.l(t,(function(e){if(c[n]){c[n]=void 0;var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading hot update chunk "+n+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,r(i)}}))}))}function s(e){function c(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),a=i.id,c=i.chain,s=o.c[a];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var d=0;d<s.parents.length;d++){var u=s.parents[d],f=o.c[u];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([u]),moduleId:a,parentId:u};-1===n.indexOf(u)&&(f.hot._acceptedDependencies[a]?(r[u]||(r[u]=[]),l(r[u],[a])):(delete r[u],n.push(u),t.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,n=void 0;var s={},d=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(o.o(r,p)){var h,v=r[p],m=!1,y=!1,g=!1,b="";switch((h=v?c(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in u[p]=v,l(d,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,p)&&(s[p]||(s[p]=[]),l(s[p],h.outdatedDependencies[p]));g&&(l(d,[h.moduleId]),u[p]=f)}r=void 0;for(var E,w=[],x=0;x<d.length;x++){var _=d[x],k=o.c[_];k&&(k.hot._selfAccepted||k.hot._main)&&u[_]!==f&&!k.hot._selfInvalidated&&w.push({module:_,require:k.hot._requireSelf,errorHandler:k.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete a[e]})),t=void 0;for(var n,r=d.slice();r.length>0;){var i=r.pop(),c=o.c[i];if(c){var l={},u=c.hot._disposeHandlers;for(x=0;x<u.length;x++)u[x].call(null,l);for(o.hmrD[i]=l,c.hot.active=!1,delete o.c[i],delete s[i],x=0;x<c.children.length;x++){var f=o.c[c.children[x]];f&&(e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1)}}}for(var p in s)if(o.o(s,p)&&(c=o.c[p]))for(E=s[p],x=0;x<E.length;x++)n=E[x],(e=c.children.indexOf(n))>=0&&c.children.splice(e,1)},apply:function(n){for(var r in u)o.o(u,r)&&(o.m[r]=u[r]);for(var t=0;t<i.length;t++)i[t](o);for(var a in s)if(o.o(s,a)){var c=o.c[a];if(c){E=s[a];for(var l=[],f=[],p=[],h=0;h<E.length;h++){var v=E[h],m=c.hot._acceptedDependencies[v],y=c.hot._acceptedErrorHandlers[v];if(m){if(-1!==l.indexOf(m))continue;l.push(m),f.push(y),p.push(v)}}for(var g=0;g<l.length;g++)try{l[g].call(null,E)}catch(r){if("function"==typeof f[g])try{f[g](r,{moduleId:a,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:a,dependencyId:p[g],error:t,originalError:r}),e.ignoreErrored||(n(t),n(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:a,dependencyId:p[g],error:r}),e.ignoreErrored||n(r)}}}for(var b=0;b<w.length;b++){var x=w[b],_=x.module;try{x.require(_)}catch(r){if("function"==typeof x.errorHandler)try{x.errorHandler(r,{moduleId:_,module:o.c[_]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:_,error:t,originalError:r}),e.ignoreErrored||(n(t),n(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:_,error:r}),e.ignoreErrored||n(r)}}return d}}}self.webpackHotUpdatefor_mum=function(n,t,a){for(var l in t)o.o(t,l)&&(r[l]=t[l],e&&e.push(l));a&&i.push(a),c[n]&&(c[n](),c[n]=void 0)},o.hmrI.jsonp=function(e,n){r||(r={},i=[],t=[],n.push(s)),o.o(r,e)||(r[e]=o.m[e])},o.hmrC.jsonp=function(e,c,d,u,f,p){f.push(s),n={},t=c,r=d.reduce((function(e,n){return e[n]=!1,e}),{}),i=[],e.forEach((function(e){o.o(a,e)&&void 0!==a[e]?(u.push(l(e,p)),n[e]=!0):n[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,r){n&&o.o(n,e)&&!n[e]&&(r.push(l(e)),n[e]=!0)})},o.hmrM=function(){if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((function(e){if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}}(),o(223)}();