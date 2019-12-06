(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("hero"),n("search")],1)},s=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero"},[n("h1",[e._v("URBN Code Test")]),n("p",[e._v("Hello! Welcome to Jamie's Code Test. This simple app uses Vue.js to pull pictures from "),n("a",{attrs:{href:"https://thecatapi.com/",target:"_blank"}},[e._v("thecatapi!")]),e._v(" On page load, the API displays the first 15 images pulled from the api. You can also choose to display images that contain a certain breed or category.")])])}],c={name:"Hero",data:function(){return{}}},l=c,u=n("2877"),p=Object(u["a"])(l,i,o,!1,null,null,null),d=p.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("div",{staticClass:"search__container u-margin--top"},[a("div",{staticClass:"menu-options u-margin--bottom"},[e.categories?a("div",{staticClass:"select-menu u-margin--right"},[a("label",{staticClass:"select-menu__label",attrs:{for:""}},[e._v("Category:")]),a("div",{staticClass:"select-menu__wrapper"},[a("img",{staticClass:"select-menu__icon",attrs:{src:n("c5d4")}}),a("select",{staticClass:"select-menu__select",on:{change:function(t){return e.onCategoryChange(t)}}},[a("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v("Select")]),e._l(e.categories,(function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)])]):e._e(),e.breeds?a("div",{staticClass:"select-menu"},[a("label",{staticClass:"select-menu__label",attrs:{for:""}},[e._v("Breeds:")]),a("div",{staticClass:"select-menu__wrapper"},[a("img",{staticClass:"select-menu__icon",attrs:{src:n("c5d4")}}),a("select",{staticClass:"select-menu__select",on:{change:function(t){return e.onBreedChange(t)}}},[a("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v("Select")]),e._l(e.breeds,(function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)])]):e._e()]),e.results?a("div",{staticClass:"img-grid"},e._l(e.results,(function(e){return a("div",{staticClass:"img-grid__item"},[a("img",{staticClass:"img-grid__img",attrs:{src:e.url}})])})),0):e._e()])])},f=[],g=n("bc3a"),m=n.n(g),v={name:"Search",data:function(){return{results:"",categories:"",breeds:""}},mounted:function(){this.getCats(),this.getCategories(),this.getBreeds()},methods:{getCats:function(){var e=this;m.a.get("https://api.thecatapi.com/v1/images/search?limit=15").then((function(t){e.results=t.data})).catch((function(e){console.log(e)}))},getCategories:function(){var e=this;m.a.get("https://api.thecatapi.com/v1/categories").then((function(t){e.categories=t.data})).catch((function(e){console.log(e)}))},getBreeds:function(){var e=this;m.a.get("https://api.thecatapi.com/v1/breeds").then((function(t){e.breeds=t.data})).catch((function(e){console.log(e)}))},onCategoryChange:function(e){var t=this;m.a.get("https://api.thecatapi.com/v1/images/search?limit=15&category_ids="+e.target.value).then((function(e){t.results=e.data})).catch((function(e){console.log(e)}))},onBreedChange:function(e){var t=this;m.a.get("https://api.thecatapi.com/v1/images/search?limit=15&breed_id="+e.target.value).then((function(e){t.results=e.data})).catch((function(e){console.log(e)}))}}},_=v,b=Object(u["a"])(_,h,f,!1,null,null,null),C=b.exports,y={name:"app",components:{Search:C,Hero:d}},O=y,w=Object(u["a"])(O,r,s,!1,null,null,null),j=w.exports;n("b3be");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(j)}}).$mount("#app")},b3be:function(e,t,n){},c5d4:function(e,t,n){e.exports=n.p+"img/arrow.163d1da8.png"}});
//# sourceMappingURL=app.d649be5d.js.map