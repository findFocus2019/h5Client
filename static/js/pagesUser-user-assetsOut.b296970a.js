(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesUser-user-assetsOut"],{"0eea":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{num:{type:Number|String,default:0},size:{type:String,default:"24"},nums:{type:Array,default:function(){return[]}}},data:function(){return{money:"0"}},methods:{formatNum:function(){if(this.num||0===this.num||"0"===this.num){var n=parseFloat(this.num).toFixed(2);console.log(n),this.money=" ￥"+n}},formatNums:function(){if(this.nums.length){var n=0;this.nums.forEach(function(t){console.log("formatNums =========== n",t),n+=parseFloat(t)}),console.log("formatNums =========== num",n);var t=parseFloat(n).toFixed(2);t=t.toString(),this.money=" ￥"+t}}},created:function(){this.formatNum(),this.formatNums()},watch:{num:function(n,t){console.log("newVal",n),this.formatNum()},nums:function(n,t){this.formatNums()}}};t.default=i},"1de4":function(n,t,e){"use strict";e.r(t);var i=e("7a1b"),u=e("f7b5");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);var o=e("2877"),s=Object(o["a"])(u["default"],i["a"],i["b"],!1,null,"7b4e1019",null);t["default"]=s.exports},"1eab":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=i},"63c7":function(n,t,e){"use strict";e.r(t);var i=e("1eab"),u=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);t["default"]=u.a},"7a1b":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"uni-page-body uni-bg-white"},[e("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-top"},[e("v-uni-view",{staticClass:"uni-bold"},[n._v("可提取金额")]),e("v-uni-view",{staticClass:"uni-flex-item uni-right uni-text-red uni-bold"},[e("money",{attrs:{num:n.userInfo.balance,size:"28"}})],1)],1),e("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-top"},[e("v-uni-view",{staticClass:"uni-bold"},[n._v("不可提取金额")]),e("v-uni-view",{staticClass:"uni-flex-item uni-right uni-text-gray uni-bold"},[e("money",{attrs:{num:n.forzenNum,size:"28"}})],1)],1),n.userInfo.balance>=10?e("v-uni-view",{},[e("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-top"},[e("v-uni-view",{},[n._v("提取方式")]),e("v-uni-view",{staticClass:"uni-flex-item uni-right",on:{click:function(t){t=n.$handleEvent(t),n.chooseMethod(t)}}},[n.method?e("v-uni-text",{staticClass:"uni-text-gray"},[n._v(n._s(n.methodVals[n.method]))]):n._e(),e("uni-icon",{attrs:{type:"arrowright",size:"20"}})],1)],1),e("v-uni-view",{staticClass:"uni-flex uni-common-pa uni-border-top uni-border-bottom"},[e("v-uni-view",{},[n._v("金额")]),e("v-uni-view",{staticClass:"uni-flex-item uni-right"},[e("v-uni-input",{attrs:{type:"number",placeholder:n.userInfo.balance.toString()},on:{input:function(t){t=n.$handleEvent(t),n.balanceInput(t)}},model:{value:n.balance,callback:function(t){n.balance=t},expression:"balance"}})],1)],1),e("v-uni-view",{staticClass:"uni-common-mt-sm uni-common-pl uni-common-pr uni-right ",on:{click:function(t){t=n.$handleEvent(t),n.balanceAll(t)}}},[n._v("全部提取")]),e("v-uni-view",{staticClass:"uni-common-pa ",on:{click:function(t){t=n.$handleEvent(t),n.checkClick(t)}}},[n.checked?e("uni-icon",{attrs:{type:"checkbox-filled",size:"20",color:"#d81e06"}}):e("uni-icon",{attrs:{type:"circle",size:"20"}}),e("v-uni-text",[n._v("我已认真阅读并同意")]),e("v-uni-text",{},[n._v("《用户提现协议》")])],1),e("v-uni-view",{staticClass:"uni-common-pa uni-common-mt",on:{click:function(t){t=n.$handleEvent(t),n.confirm(t)}}},[e("v-uni-button",{staticClass:"uni-border-btn-radius",attrs:{type:"warn",loading:n.btn.loading,disabled:n.btn.disabled}},[n._v("提现")])],1)],1):e("v-uni-view",{staticClass:"uni-center uni-text-gray uni-common-pa uni-common-mt"},[n._v("提现金额不足10元，无法提现")]),e("v-uni-view",{staticClass:"uni-common-pa uni-center"},[e("v-uni-navigator",{attrs:{url:"/pagesUser/user/assetsOutLogs"}},[n._v("提现记录")])],1),e("v-uni-view",{staticClass:"uni-common-pa uni-common-mt"},[e("v-uni-view",{staticClass:"uni-bold"},[n._v("注意事项")]),e("v-uni-view",{staticClass:"uni-text-light uni-common-mt-sm"},[e("v-uni-rich-text",{attrs:{nodes:n.noitceText}})],1)],1)],1)},u=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return u})},"7efa":function(n,t,e){"use strict";e.r(t);var i=e("fde5"),u=e("63c7");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);var o=e("2877"),s=Object(o["a"])(u["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},"89f3":function(n,t,e){"use strict";e.r(t);var i=e("e41a"),u=e("d0f1");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);var o=e("2877"),s=Object(o["a"])(u["default"],i["a"],i["b"],!1,null,"0ca51cda",null);t["default"]=s.exports},b56f:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(e("a34a")),u=e("2f62"),a=s(e("7efa")),o=s(e("89f3"));function s(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,i,u,a,o){try{var s=n[a](o),r=s.value}catch(c){return void e(c)}s.done?t(r):Promise.resolve(r).then(i,u)}function c(n){return function(){var t=this,e=arguments;return new Promise(function(i,u){var a=n.apply(t,e);function o(n){r(a,i,u,o,s,"next",n)}function s(n){r(a,i,u,o,s,"throw",n)}o(void 0)})}}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.forEach(function(t){f(n,t,e[t])})}return n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var d={components:{uniIcon:a.default,money:o.default},data:function(){return{noitceText:"\n        <p>尊敬的注册用户，请您仔细阅读账户余额提现规则详情，以确保您的账户内余额可以正常提现。</p>\n<p>规则说明：</p>\n<p>1. 适用的主体范围：完成实名身份认证并按本规则绑定完成微信、支付宝等第三方支付工具的实名注册用户，且为发现焦点的vip用户。</p>\n<p>2. 认证要求：绑定支付宝账号或微信账号，认证真实姓名、身份证号码、身份证照片，请务必保证该收款账号经过实名认证，并与身份证信息一致或与注册使用的联系电话一致。</p>\n<p>3. 最低和最高提现额度：用户满足的最低提现要求为账户内余额大于人民币壹拾元（10元，含本数）方可提现；最高提现额度根据提现方式不同有不同的额度，请以提现时的页面提示为准。</p>\n<p>4. 提现方式：目前仅提供支付宝，后续将接入微信或其他银行端。</p>\n<p>5. 提现的到账时间：提现成功后一般将在1-3个工作日到账，周末顺延。如逾期未到账，请查询账户入账明细及个人中心余额是否有退回。</p>\n<p>6. 用户发起提现请求，即视为同意本规则；</p>\n<p>7. 提现办理时间：每日的9:00-17:00（国家法定节假日或公休日除外）。</p>\n<p>8. 如在提现过程中有任何疑问，请致电平台客服电话：400-836-5151，或联系客服qq：1952516666</p>",methods:[],balance:0,method:"",methodVals:{wxpay:"微信支付",alipay:"支付宝"},checked:!1,btn:{disabled:!1,loading:!1},forzenNum:0}},computed:l({},(0,u.mapState)(["hasLogin","userInfo","isVip"])),methods:{confirm:function(){var n=c(i.default.mark(function n(){var t,e;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(this.checked){n.next=2;break}return n.abrupt("return");case 2:if(this.method){n.next=5;break}return uni.showToast({icon:"none",title:"请选择提现方式"}),n.abrupt("return");case 5:if(this.balance&&!(this.balance<10)){n.next=8;break}return uni.showToast({icon:"none",title:"请输入正确提现金额"}),n.abrupt("return");case 8:return t={balance:this.balance,method:this.method},console.log("postData",JSON.stringify(t)),this.btn.loading=!0,this.btn.disabled=!0,n.next=14,this.$store.dispatch("userTransOut",t);case 14:e=n.sent,console.log("userTransOut ret",JSON.stringify(e)),this.btn.loading=!1,this.btn.disabled=!1,0==e.code?(uni.showToast({icon:"success",title:"提交成功"}),this.$store.dispatch("userInfoGet")):uni.showToast({icon:"none",title:"提交失败，"+e.message});case 19:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),balanceAll:function(){this.balance=this.userInfo.balance},balanceInput:function(n){n.detail.value>this.userInfo.balance&&(this.balance=this.userInfo.balance)},checkClick:function(){this.checked=!this.checked},chooseMethod:function(){var n=this;uni.showActionSheet({itemList:this.methods,success:function(t){var e=t.tapIndex;if(0==e){if(!n.userInfo.openid)return void uni.showToast({icon:"none",title:"请先设置支付宝账号",success:function(){uni.navigateTo({url:"/pagesUser/user/setting"})}});n.method="alipay"}}})}},onLoad:function(){var n=c(i.default.mark(function n(){var t,e;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(this.hasLogin){n.next=5;break}return uni.navigateTo({url:"/pages/auth/login"}),n.abrupt("return");case 5:return n.next=7,this.$store.dispatch("userInfoGet");case 7:t=n.sent,0==t.code&&(this.forzenNum=t.data.balance_frozen);case 9:console.log("userInfo",JSON.stringify(this.userInfo)),e=this.userInfo.alipay,e?this.methods.push("支付宝"):this.methods.push("支付宝(未设置)");case 12:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()};t.default=d},d0f1:function(n,t,e){"use strict";e.r(t);var i=e("0eea"),u=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);t["default"]=u.a},e41a:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticStyle:{display:"inline"}},[e("v-uni-text",{style:{fontSize:n.size/2+"px"}},[n._v(n._s(n.money))])],1)},u=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return u})},f7b5:function(n,t,e){"use strict";e.r(t);var i=e("b56f"),u=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);t["default"]=u.a},fde5:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+n.type],style:{color:n.color,"font-size":n.fontSize},on:{click:function(t){t=n.$handleEvent(t),n.onClick()}}})},u=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return u})}}]);