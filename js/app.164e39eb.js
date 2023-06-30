(function(){"use strict";var e={825:function(e,t,a){var n=a(7195),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],r=a(1001),s={},l=(0,r.Z)(s,i,o,!1,null,null,null),d=l.exports,u=a(4337);(0,u.z)("/edit-data/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var c=a(2241),f=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container d-flex justify-content-center"},[t("div",{staticClass:"list-group my-5 mx-auto"},e._l(e.dataFields,(function(e,a){return t("div",{key:e.name,staticClass:"list__dataFieldWrapper"},[t("DataField",{attrs:{dataField:e,index:a}})],1)})),0)])},v=[],p=a(2782),b=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"list-group-item"},[e.isEditingDataField?e.isEditingDataField?t("form",{staticClass:"dataField",attrs:{onsubmit:"return false;"}},[t("div",{staticClass:"dataField__name"},[e._v(" "+e._s(e.dataField.name)+" ")]),t("div",{staticClass:"dataField__value"},[t("input",{ref:"input",staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.dataField.value}})]),t("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:e.finishEditingDataField}},[e._v("Завершить")])]):e._e():t("div",{staticClass:"dataField"},[t("div",{staticClass:"dataField__name"},[e._v(" "+e._s(e.dataField.name)+" ")]),t("div",{staticClass:"dataField__value"},[e._v(" "+e._s(e.dataField.value)+" ")]),t("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:e.editDataField}},[e._v("Редактировать")])])])},h=[],m=a(6318),g=a(408);n.ZP.use(g.ZP);const j=new g.ZP.Store({state:{dataFields:[{name:"foo1",value:"bar1"},{name:"foo2",value:"bar2"},{name:"foo3",value:"bar3"},{name:"foo4",value:"bar4"},{name:"foo5",value:"bar5"},{name:"foo6",value:"bar6"},{name:"foo7",value:"bar7"},{name:"foo8",value:"bar8"},{name:"foo9",value:"bar9"},{name:"foo10",value:"bar10"},{name:"fajdbhjfbajkdbfhbabfdjbjadbhfjbadfjbja",value:"fajdbhjfbajkdbfhbabfdjbjadbhfjbadfjbja"}]},getters:{},mutations:{updateObject(e,{index:t,newObj:a}){e.dataFields.splice(t,1,a)}},actions:{},modules:{}});var F=function(e,t,a,n){var i,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,a,r):i(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let y=class extends p.w3{constructor(...e){super(...e),(0,m.Z)(this,"dataField",void 0),(0,m.Z)(this,"index",void 0),(0,m.Z)(this,"isEditingDataField",!1)}editDataField(){document.querySelector("input")||(this.isEditingDataField=!0)}finishEditingDataField(){const e=this.$refs.input;j.commit("updateObject",{index:this.index,newObj:{name:this.dataField.name,value:e.value}}),this.isEditingDataField=!1}};F([(0,p.fI)()],y.prototype,"dataField",void 0),F([(0,p.fI)()],y.prototype,"index",void 0),y=F([p.wA],y);var _=y,w=_,x=(0,r.Z)(w,b,h,!1,null,"626eeac4",null),O=x.exports,P=function(e,t,a,n){var i,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,a,r):i(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let C=class extends p.w3{get dataFields(){return j.state.dataFields}};C=P([(0,p.wA)({components:{DataField:O}})],C);var k=C,Z=k,D=(0,r.Z)(Z,f,v,!1,null,null,null),E=D.exports;n.ZP.use(c.ZP);const R=[{path:"/",name:"home",component:E}],A=new c.ZP({mode:"history",base:"/edit-data/",routes:R});var N=A;n.ZP.config.productionTip=!1,new n.ZP({router:N,render:e=>e(d)}).$mount("#app")}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,o){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],o=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(u--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,r=n[0],s=n[1],l=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var u=l(a)}for(t&&t(n);d<r.length;d++)o=r[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkcli"]=self["webpackChunkcli"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(825)}));n=a.O(n)})();
//# sourceMappingURL=app.164e39eb.js.map