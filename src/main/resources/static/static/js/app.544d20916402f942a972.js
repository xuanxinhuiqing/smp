webpackJsonp([21],{"0AzE":function(e,n){},"Du/2":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.UPDATE_LOGIN="UPDATE_LOGIN "},DuAn:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]}},E0gt:function(e,n){},Hqqj:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("Du/2"),r=t("mtWM");!function(e){e&&e.__esModule}(r);n.default={update_login:function(e,n){var t=e.commit;e.state;t(o.UPDATE_LOGIN,n)}}},IcnI:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t("7+uW"),a=o(r),i=t("NYxO"),u=o(i),c=t("ukYY"),l=o(c),s=t("Hqqj"),f=o(s),d=t("UjVw"),p=o(d);t("yt7g");a.default.use(u.default);var h={login:!1,userPower:[{role:1,power:["查看详情","下载"]},{role:2,power:["审核","查看详情","下载"]},{role:3,power:["审核","查看详情","下载","上传","驳回"]},{role:4,power:["审核","查看详情","下载","驳回"]},{role:5,power:["申请","查看详情","上传附件","下载"]},{role:6,power:["审核","查看详情","审核上传","上传附件","下载","驳回"]}]};n.default=new u.default.Store({state:h,getters:p.default,actions:f.default,mutations:l.default})},M93x:function(e,n,t){t("E0gt");var o=t("VU/8")(t("xJD8"),t("DuAn"),null,null);e.exports=o.exports},NHnr:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t("7+uW"),a=o(r),i=t("YaEn"),u=o(i),c=t("IcnI"),l=o(c),s=t("M93x"),f=o(s),d=t("zL8q"),p=o(d),h=t("yt7g");a.default.config.productionTip=!1,a.default.use(p.default),a.default.prototype.HOST="/api",u.default.beforeEach(function(e,n,t){(0,h.getStore)("token")||"/login"==e.path?t():t({path:"/login"})}),new a.default({router:u.default,store:l.default,template:"<App></App>",components:{App:f.default}}).$mount("#rootApp")},UjVw:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},YaEn:function(e,n,t){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t("7+uW"),a=o(r),i=t("/ocq"),u=o(i),c=(t("yt7g"),t("IcnI"));o(c);a.default.use(u.default);var l=function(e){return t.e(11).then(function(){return e(t("Ntyz"))}.bind(null,t)).catch(t.oe)},s=function(e){return t.e(10).then(function(){return e(t("lyB/"))}.bind(null,t)).catch(t.oe)},f=function(e){return t.e(5).then(function(){return e(t("xwW2"))}.bind(null,t)).catch(t.oe)},d=function(e){return t.e(8).then(function(){return e(t("odra"))}.bind(null,t)).catch(t.oe)},p=function(e){return t.e(7).then(function(){return e(t("xuTh"))}.bind(null,t)).catch(t.oe)},h=function(e){return t.e(2).then(function(){return e(t("kDoD"))}.bind(null,t)).catch(t.oe)},g=function(e){return t.e(6).then(function(){return e(t("eu/n"))}.bind(null,t)).catch(t.oe)},m=function(e){return t.e(0).then(function(){return e(t("4yhV"))}.bind(null,t)).catch(t.oe)},w=function(e){return t.e(1).then(function(){return e(t("mkr3"))}.bind(null,t)).catch(t.oe)},v=function(e){return t.e(13).then(function(){return e(t("/k8t"))}.bind(null,t)).catch(t.oe)},y=function(e){return t.e(4).then(function(){return e(t("VnM9"))}.bind(null,t)).catch(t.oe)},b=function(e){return t.e(3).then(function(){return e(t("0Gj9"))}.bind(null,t)).catch(t.oe)},C=function(e){return t.e(12).then(function(){return e(t("Snpu"))}.bind(null,t)).catch(t.oe)},S=function(e){return t.e(9).then(function(){return e(t("m99Y"))}.bind(null,t)).catch(t.oe)},x=function(e){return t.e(17).then(function(){return e(t("yY9f"))}.bind(null,t)).catch(t.oe)},k=function(e){return t.e(16).then(function(){return e(t("6rkr"))}.bind(null,t)).catch(t.oe)},A=function(e){return t.e(15).then(function(){return e(t("gDmx"))}.bind(null,t)).catch(t.oe)},_=function(e){return t.e(14).then(function(){return e(t("Hx6z"))}.bind(null,t)).catch(t.oe)},D=function(e){return t.e(19).then(function(){return e(t("wMZZ"))}.bind(null,t)).catch(t.oe)},O=function(e){return t.e(18).then(function(){return e(t("PL0f"))}.bind(null,t)).catch(t.oe)},j=[{path:"/",redirect:"/login"},{path:"/login",component:l},{path:"/home",component:s,children:[{path:"clueanalysis",component:f,name:"clueanalysis"},{path:"cluetrend",component:d,name:"cluetrend"},{path:"costanalysis",component:p,name:"costanalysis"},{path:"monthwarning",component:m,name:"monthwarning"},{path:"weekwarning",component:w,name:"weekwarning"},{path:"daywarning",component:v,name:"daywarning"},{path:"channelanalysis",component:h,name:"channelanalysis"},{path:"putstrategy",component:g,name:"putstrategy"},{path:"mysupplement",component:y,name:"mysupplement"},{path:"supplementlist",component:b,name:"supplementlist"},{path:"inspectionapply",component:C,name:"inspectionapply"},{path:"inspectionlist",component:S,name:"inspectionlist"},{path:"updatedata",component:x,name:"updatedata"},{path:"updatelist",component:k,name:"updatelist"},{path:"channeldata",component:A,name:"channeldata"},{path:"channelconsume",component:_,name:"channelconsume"},{path:"dayreport",component:D,name:"dayreport"},{path:"monthreport",component:O,name:"monthreport"}]}];n.default=new u.default({routes:j,base:e,linkActiveClass:"link-active"})}).call(n,"/")},tvR6:function(e,n){},ukYY:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("bOdI"),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a=t("Du/2");t("OMJi");n.default=(0,r.default)({},a.UPDATE_LOGIN,function(e,n){e.login=n.login})},xJD8:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("0AzE"),t("tvR6"),n.default={name:"App"}},yt7g:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){var n,t=arguments.length;if(0!=t){n=1==t?"-":n;return e.split(n).map(function(e,n){return 1==e.length?"0"+e:e}).join(n)}}Object.defineProperty(n,"__esModule",{value:!0}),n.handleTime=n.Base64=n.colorRgb=n.serializeParams=n.throttle=n.getTableData=n.drawLineBarChart=n.getChartData=n.getTerminalPlatform=n.ajaxGet=n.ajaxPost=n.getFullTime=n.setPromise=n.removeStore=n.getStore=n.setStore=n.defaultDate=n.delCookie=n.getCookie=n.setCookie=n.deepExtend=void 0;var a=t("fZjL"),i=o(a),u=t("woOf"),c=o(u),l=t("//Fk"),s=o(l),f=t("mvHQ"),d=o(f),p=t("mtWM"),h=o(p),g=t("mw3O"),m=o(g),w=n.deepExtend=_.defaultsDeep,v=(n.setCookie=function(e,n,t){var o=new Date;o.setTime(o.getTime()+60*t*1e3),document.cookie=e+"="+escape(n)+(null==t?"":";expires="+o.toGMTString())},n.getCookie=function(e){if(document.cookie.length>0){var n=document.cookie.indexOf(e+"=");if(-1!=n){n=n+e.length+1;var t=document.cookie.indexOf(";",n);return-1==t&&(t=document.cookie.length),unescape(document.cookie.substring(n,t))}}return""}),y=(n.delCookie=function(e){var n=new Date;n.setTime(n.getTime()-1);var t=v(e);null!=t&&(document.cookie=e+"="+t+";expires="+n.toGMTString())},n.defaultDate=function(){var e=(new Date).getTime()-864e5,n=new Date(e-5184e5).toLocaleDateString(),t=new Date(e).toLocaleDateString();return n=n.toString().replace(/\//gi,"-"),t=t.toString().replace(/\//gi,"-"),[r(n),r(t)]}(),n.setStore=function(e,n){e&&("string"!=typeof n&&(n=(0,d.default)(n)),window.sessionStorage.setItem(e,n))},n.getStore=function(e){if(e)return window.sessionStorage.getItem(e)}),b=(n.removeStore=function(e){e&&window.sessionStorage.removeItem(e)},n.setPromise=function(e){return s.default.resolve(e)}),C=(n.getFullTime=function(e){return{year:new Date(e).getFullYear(),month:new Date(e).getMonth()+1,date:new Date(e).getDate()}},n.ajaxPost=function(e,n){return h.default.create({headers:{"Content-Type":"application/json;charset=UTF-8",token:y("token"),sign:y("sign")},transformRequest:[function(e){var e=e||{},n=y("token"),t=y("sign");return null==n?(window.sessionStorage.clear(),window.location.href=window.location.origin+window.location.pathname+"#/login"):(e.token=n,e.sign=t),(0,d.default)(e)}],transformResponse:[function(e){var e="string"==typeof e?JSON.parse(e):e;return null!=e&&8888==e.code&&(window.location.href=window.location.origin+window.location.pathname+"#/login"),e}]}).post(e,n)}),S=n.ajaxGet=function(e,n,t){var o=h.default.create({headers:{"Content-Type":"application/json;charset=UTF-8",token:y("token"),sign:y("sign")},transformRequest:[function(e){var e=e||{},n=y("token"),t=y("sign");return null==n?(window.sessionStorage.clear(),window.location.href=window.location.origin+window.location.pathname+"#/login"):(e.token=n,e.sign=t),(0,d.default)(e)}],transformResponse:[function(e){var e="string"==typeof e?JSON.parse(e):e;return null!=e&&8888==e.code&&(window.location.href=window.location.origin+window.location.pathname+"#/login"),e}]}),r={},a=y("token"),i=y("sign");null==a?window.sessionStorage.clear():(r.token=a,r.sign=i);var r=w(r,n);m.default.stringify(r,{addQueryPrefix:null==t||void 0==t||t});return o.get(e,{params:r})};n.getTerminalPlatform=function(e){var e=e||{};return C("/ai/adapter/searchparam/terminal",e).then(function(e){var e="string"==typeof e?JSON.parse(e):e,n=e.data,t=n.code,o=n.msg,r=n.result;if(0==t)return s.default.resolve(r.data);throw new Error("error code is : "+t+" and msg is : "+o)}).catch(function(e){return console.log(e),s.default.reject(e)})},n.getChartData=function(e,n){var t=(0,c.default)({},e||{}),n=n||"/intelligent/chart";return C(n,t).then(function(e){var e="string"==typeof e?JSON.parse(e):e,n=e.data,t=n.code,o=n.msg,r=n.result;if(0==t)return r&&r.data?b(r.data):null;throw new Error("error code is : "+t+" and msg is : "+o)},function(e){return s.default.reject(e)})},n.drawLineBarChart=function(e,n){var t=n&&n.length>0?n:["#01ba63","#a1d561","#cfe6c1","#ffdf79","#ff2700"],o=e.series;if(e.legend&&e.legend.data){var r=e.legend.data;r=r.map(function(e,n){return{icon:"rect",name:e}}),e.legend.data=r,e.legend.y="350"}e.xAxis&&e.xAxis;return e.yAxis.name&&e.yAxis.name.match("%")&&(e.tooltip={trigger:"axis",formatter:function(e,n){var t=void 0;return e.forEach(function(n){t=n.name+"</br>",e.forEach(function(e,n){if("-"!==e.value){var o='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+e.color+'"></span><span>'+e.seriesName+":"+e.value+"%</span></br>";t+=o}else{var r='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+e.color+'"></span><span>'+e.seriesName+":"+e.value+"</span></br>";t+=r}})}),t}}),o=o.map(function(e,n){var o=e.data.some(function(e,n){return"-"!=e}),r={symbolSize:6,itemStyle:{normal:{color:t[n%6],borderWidth:2}}};return o&&(r.areaStyle={normal:{color:"transparent"}}),e.z=500-50*n,_.merge(e,r)}),e.series=o,e},n.getTableData=function(e,n,t){var o=(0,c.default)({},e||{}),n=n||"/ai/data/marking_large",t=t||"post";return"post"==t?C(n,o).then(function(e){var e="string"==typeof e?JSON.parse(e):e,n=e.data,t=n.code,o=n.msg,r=n.result;if(0==t)return null!=r?s.default.resolve(r,e):null;throw console.log(!0),new Error("error code is : "+t+" and msg is : "+o)},function(e){console.log(e)}):S(n,o).then(function(e){var e="string"==typeof e?JSON.parse(e):e,n=e.data,t=n.code,o=n.msg,r=n.result;if(0==t)return null!=r?s.default.resolve(r):null;throw new Error("error code is : "+t+" and msg is : "+o)},function(e){console.log(e)})},n.throttle=function(e,n,t){var o=null,r=void 0;return function(){var a=this,i=arguments,u=+new Date;clearTimeout(o),r||(r=u),u-r>=t?(e.apply(a,i),r=u):o=setTimeout(function(){e.apply(a,i)},n)}},n.serializeParams=function(e){if("string"==typeof e)return e;var n=[];return(0,i.default)(e).forEach(function(t,o){if("[object Array]"==Object.prototype.toString.call(e[t])||"[object Object]"==Object.prototype.toString.call(e[t])){var r=(0,d.default)(e[t]);n.push(t+"="+encodeURIComponent(r))}else n.push(t+"="+encodeURIComponent(e[t]))}),n.length>0?n.join("&"):""},n.colorRgb=function(e,n){var t=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,o=e.toLowerCase();if(o&&t.test(o)){if(4===o.length){for(var r="#",a=1;a<4;a+=1)r+=o.slice(a,a+1).concat(o.slice(a,a+1));o=r}for(var i=[],a=1;a<7;a+=2)i.push(parseInt("0x"+o.slice(a,a+2)));return null!=n&&void 0!=n&&n>=0&&n<1?"RGBA("+i.join(",")+","+n+")":"RGB("+i.join(",")+")"}return o},n.Base64=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(t){var o,r,a,i,u,c,l,s="",f=0;for(t=n(t);f<t.length;)o=t.charCodeAt(f++),r=t.charCodeAt(f++),a=t.charCodeAt(f++),i=o>>2,u=(3&o)<<4|r>>4,c=(15&r)<<2|a>>6,l=63&a,isNaN(r)?c=l=64:isNaN(a)&&(l=64),s=s+e.charAt(i)+e.charAt(u)+e.charAt(c)+e.charAt(l);return s},this.decode=function(n){var o,r,a,i,u,c,l,s="",f=0;for(n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");f<n.length;)i=e.indexOf(n.charAt(f++)),u=e.indexOf(n.charAt(f++)),c=e.indexOf(n.charAt(f++)),l=e.indexOf(n.charAt(f++)),o=i<<2|u>>4,r=(15&u)<<4|c>>2,a=(3&c)<<6|l,s+=String.fromCharCode(o),64!=c&&(s+=String.fromCharCode(r)),64!=l&&(s+=String.fromCharCode(a));return s=t(s)};var n=function(e){e=e.replace(/\r\n/g,"\n");for(var n="",t=0;t<e.length;t++){var o=e.charCodeAt(t);o<128?n+=String.fromCharCode(o):o>127&&o<2048?(n+=String.fromCharCode(o>>6|192),n+=String.fromCharCode(63&o|128)):(n+=String.fromCharCode(o>>12|224),n+=String.fromCharCode(o>>6&63|128),n+=String.fromCharCode(63&o|128))}return n},t=function(e){for(var n="",t=0,o=c1=c2=0;t<e.length;)o=e.charCodeAt(t),o<128?(n+=String.fromCharCode(o),t++):o>191&&o<224?(c2=e.charCodeAt(t+1),n+=String.fromCharCode((31&o)<<6|63&c2),t+=2):(c2=e.charCodeAt(t+1),c3=e.charCodeAt(t+2),n+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),t+=3);return n}},n.handleTime=function(e,n){var t=new Date(e),o=t.getFullYear(),r=t.getMonth()+1,a=t.getDay(),i=t.getHours(),u=t.getMinutes();return n?o+n+r+n+a+" "+i+":"+u:o+""+r+a}}},["NHnr"]);