(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesUser-user-setting"],{"09bc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:["uni-popup","uni-popup-"+t.type]},[t._v(t._s(t.msg)),t._t("default")],2)],1)},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},"1eab":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"35d7":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-page-body uni-bg-white"},[n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-bottom",on:{click:function(e){e=t.$handleEvent(e),t.authWeixin(e)}}},[n("v-uni-view",{staticClass:"uni-flex-item",staticStyle:{"line-height":"80upx"}},[t._v("头像")]),t.userInfo.avatar?n("v-uni-view",{staticClass:"uni-flex-item uni-right",staticStyle:{height:"80upx"}},[t.userInfo.avatar?n("v-uni-image",{staticStyle:{width:"80upx",height:"80upx","border-radius":"40upx"},attrs:{"lazy-load":"true",src:t.userInfo.avatar,mode:""}}):t._e()],1):n("v-uni-view",{staticClass:"uni-flex-item uni-right"},[n("v-uni-navigator",{attrs:{url:"/pages/auth/guide"}},[t._v("未设置")])],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-bottom",on:{click:function(e){e=t.$handleEvent(e),t.updateInputItem({name:"nickname",text:"设置昵称",val:t.userInfo.nickname})}}},[n("v-uni-view",{staticClass:"uni-flex-item"},[t._v("昵称")]),n("v-uni-view",{staticClass:"uni-flex-item uni-right"},[t._v(t._s(t.userInfo.nickname))])],1),n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-bottom"},[n("v-uni-view",{staticClass:"uni-flex-item"},[t._v("手机")]),n("v-uni-view",{staticClass:"uni-flex-item uni-right"},[t._v(t._s(t.userInfo.mobile))])],1),n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-bottom"},[n("v-uni-view",{staticClass:"uni-flex-item"},[t._v("性别")]),n("v-uni-view",{staticClass:"uni-flex-item uni-right",on:{click:function(e){e=t.$handleEvent(e),t.chooseSex(e)}}},[0==t.userInfo.sex?n("v-uni-text",[t._v("未知")]):t._e(),1==t.userInfo.sex?n("v-uni-text",[t._v("男")]):t._e(),2==t.userInfo.sex?n("v-uni-text",[t._v("女")]):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-bottom",on:{click:function(e){e=t.$handleEvent(e),t.goToPage("/pagesUser/user/passwordTrade")}}},[n("v-uni-view",{staticClass:"uni-flex-item"},[t._v("支付密码")]),n("v-uni-view",{staticClass:"uni-flex-item uni-right"},[n("uni-icon",{attrs:{type:"arrowright",size:"22"}})],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-bottom",on:{click:function(e){e=t.$handleEvent(e),t.updateInputItem({name:"alipay",text:"绑定支付宝",val:t.userInfo.alipay})}}},[n("v-uni-view",{staticClass:"uni-flex-item"},[t._v("绑定支付宝")]),n("v-uni-view",{staticClass:"uni-flex-item uni-right"},[t.userInfo.alipay?n("v-uni-text",{staticClass:"uni-text-gray uni-text-small"},[t._v("已设置")]):t._e(),n("uni-icon",{attrs:{type:"arrowright",size:"22"}})],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-bottom"},[n("v-uni-view",{staticClass:"uni-flex-item"},[t._v("版本号")]),n("v-uni-view",{staticClass:"uni-flex-item uni-right"},[t._v(t._s(t.version))])],1),n("v-uni-view",{staticClass:"uni-flex uni-common-pa ",on:{click:function(e){e=t.$handleEvent(e),t.goToPage("/pagesUser/user/about")}}},[n("v-uni-view",{staticClass:"uni-flex-item"},[t._v("关于我们")]),n("v-uni-view",{staticClass:"uni-flex-item uni-right"},[n("uni-icon",{attrs:{type:"arrowright",size:"22"}})],1)],1),0==t.userInfo.pid?n("v-uni-view",{staticClass:"uni-flex uni-common-pa ",on:{click:function(e){e=t.$handleEvent(e),t.updateInputItem({name:"pid",text:"输入推荐人手机(老用户填写)",val:""})}}},[n("v-uni-view",{staticClass:"uni-flex-item"},[t._v("老用户推荐人")]),n("v-uni-view",{staticClass:"uni-flex-item uni-right"},[n("uni-icon",{attrs:{type:"arrowright",size:"22"}})],1)],1):t._e(),n("v-uni-view",{staticClass:"uni-flex uni-common-pa ",on:{click:function(e){e=t.$handleEvent(e),t.goToLogout(e)}}},[n("v-uni-view",{staticClass:"uni-flex-item"},[t._v("退出登录")]),n("v-uni-view",{staticClass:"uni-flex-item uni-right"},[n("uni-icon",{attrs:{type:"arrowright",size:"22"}})],1)],1),n("uni-popup",{attrs:{show:t.showPopupBottom,type:"bottom"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.hidePopup(e)}}},[n("v-uni-view",{staticClass:"uni-center uni-common-pa"},[n("v-uni-view",{},[t._v(t._s(t.popupTitle))]),n("v-uni-view",{staticClass:"uni-common-mt uni-common-mb uni-border-bottom"},[n("v-uni-input",{staticClass:"uni-left",attrs:{"confirm-type":"done",type:"text"},on:{confirm:function(e){e=t.$handleEvent(e),t.updateConfirm(e)}},model:{value:t.updateVal,callback:function(e){t.updateVal=e},expression:"updateVal"}})],1),n("v-uni-view",{staticClass:"uni-common-pa"})],1)],1)],1)},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},"3e22":function(t,e,n){"use strict";n.r(e);var i=n("fec9"),u=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=u.a},4238:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("a34a")),u=n("2f62"),o=s(n("91c9")),a=s(n("7efa"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,u,o,a){try{var s=t[o](a),r=s.value}catch(c){return void n(c)}s.done?e(r):Promise.resolve(r).then(i,u)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,u){var o=t.apply(e,n);function a(t){r(o,i,u,a,s,"next",t)}function s(t){r(o,i,u,a,s,"throw",t)}a(void 0)})}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={data:function(){return{showPopupBottom:!1,popupTitle:"",updateName:"",updateVal:"",sexItems:["男","女"]}},components:{uniIcon:a.default,uniPopup:o.default},computed:l({},(0,u.mapState)(["version","userInfo"])),methods:{goToPage:function(t){uni.navigateTo({url:t})},goToLogout:function(){var t=c(i.default.mark(function t(){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("authLogout");case 2:this.$store.state.userIndexData={balance:0,score:0,count:{views:0,comments:0,likes:0,shares:0}},setTimeout(function(){uni.navigateBack({delta:1})},1e3);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),authWeixin:function(){var t=this,e=function(){uni.login({provider:"weixin",success:function(e){uni.getUserInfo({provider:"weixin",success:function(){var e=c(i.default.mark(function e(n){var u,o;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n.userInfo.openId||n.userInfo.openid,u=n.userInfo.avatarUrl,t.updateName="avatar",t.updateVal=u,e.next=6,t.updateUserInfo();case 6:o=e.sent,0==o.code&&uni.showToast({title:"设置头像成功",mask:!1,duration:1500});case 8:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()})},fail:function(){console.log(),uni.showToast({icon:"none",title:"不支持微信授权或授权失败"})}})};uni.showActionSheet({itemList:[this.userInfo.openid?"重新获取头像":"获取微信头像"],success:function(t){0==t.tapIndex&&e()},fail:function(t){console.log(t.errMsg)}})},chooseSex:function(){var t=this,e=this.sexItems;uni.showActionSheet({itemList:e,success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮"),t.updateName="sex",t.updateVal=e.tapIndex+1,t.updateUserInfo()},fail:function(t){console.log(t.errMsg)}})},updateInputItem:function(t){this.popupTitle=t.text,this.updateName=t.name,this.updateVal=t.val,this.showPopupBottom=!0},hidePopup:function(){this.showPopupBottom=!1},updateConfirm:function(){var t=this;console.log("updateConfirm"),this.updateUserInfo().then(function(){t.showPopupBottom=!1})},updateUserInfo:function(){var t=c(i.default.mark(function t(){var e,n;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={},e[this.updateName]=this.updateVal,console.log("updateUserInfo postData",JSON.stringify(e)),t.next=5,this.$store.dispatch("userInfoUpdate",e);case 5:if(n=t.sent,console.log("userInfoUpdate",JSON.stringify(n)),0!=n.code){t.next=12;break}return t.next=10,this.$store.dispatch("userInfoGet");case 10:t.next=13;break;case 12:uni.showToast({icon:"none",title:n.message});case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=p},"5baf":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-mask[data-v-4f136e98]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-4f136e98]{position:absolute;z-index:999;background-color:#fff;-webkit-box-shadow:0 0 %?30?% rgba(0,0,0,.1);box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-middle[data-v-4f136e98]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:%?380?%;height:%?380?%;border-radius:%?10?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?30?%}.uni-popup-top[data-v-4f136e98]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-4f136e98]{left:0;bottom:0;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}",""])},"63c7":function(t,e,n){"use strict";n.r(e);var i=n("1eab"),u=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=u.a},"7dce":function(t,e,n){var i=n("5baf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var u=n("4f06").default;u("39ce243f",i,!0,{sourceMap:!1,shadowMode:!1})},"7efa":function(t,e,n){"use strict";n.r(e);var i=n("fde5"),u=n("63c7");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);var a=n("2877"),s=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},"91c9":function(t,e,n){"use strict";n.r(e);var i=n("09bc"),u=n("3e22");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("e580");var a=n("2877"),s=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,"4f136e98",null);e["default"]=s.exports},"97f3":function(t,e,n){"use strict";n.r(e);var i=n("35d7"),u=n("ed18");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);var a=n("2877"),s=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,"6e7a8102",null);e["default"]=s.exports},e580:function(t,e,n){"use strict";var i=n("7dce"),u=n.n(i);u.a},ed18:function(t,e,n){"use strict";n.r(e);var i=n("4238"),u=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=u.a},fde5:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},fec9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""}},data:function(){var t=0;return t=44,{offsetTop:t}},methods:{hide:function(){this.$emit("hidePopup")}}};e.default=i}}]);