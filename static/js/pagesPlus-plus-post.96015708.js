(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesPlus-plus-post"],{"1eab":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"2dbd":function(t,e,n){"use strict";n.r(e);var i=n("72b1"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},3300:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-page-body uni-bg-white"},[n("v-uni-view",{staticClass:"progress-box"},[n("v-uni-progress",{attrs:{percent:t.plusPostData.progress,activeColor:"red",active:"","stroke-width":"8"}})],1),n("v-uni-view",{staticClass:"uni-common-pa"},[n("v-uni-view",{staticClass:"uni-border-bottom uni-common-pa"},[n("v-uni-input",{attrs:{type:"text",placeholder:"评测标题"},model:{value:t.plusPostData.title,callback:function(e){t.$set(t.plusPostData,"title",e)},expression:"plusPostData.title"}})],1),n("v-uni-view",{staticClass:"uni-border-bottom uni-common-pa uni-flex",on:{click:function(e){e=t.$handleEvent(e),t.toChooseGoods(e)}}},[n("v-uni-view",{},[t.plusPostData.goods.id?n("v-uni-view",{staticClass:"uni-ellipsis",staticStyle:{width:"600upx"}},[t._v(t._s(t.plusPostData.goods.title))]):n("v-uni-view",{staticClass:"uni-text-gray"},[t._v("选择评测产品")])],1),n("v-uni-view",{staticClass:"uni-right uni-flex-item"},[n("uni-icon",{attrs:{type:"arrowright",size:"24"}})],1)],1),n("v-uni-view",{staticClass:"uni-border-bottom "},[n("v-uni-view",{staticClass:"uni-common-pa"},[t._v("评测详情")]),t._l(t.plusPostData.contents,function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-common-pl uni-common-pr "},[n("v-uni-view",{staticClass:"uni-border-top uni-common-pt uni-common-pb"},[n("v-uni-view",{staticClass:"content-textarea "},[n("v-uni-textarea",{attrs:{placeholder:"请输入段落文字"},model:{value:e.text,callback:function(n){t.$set(e,"text",n)},expression:"content.text"}})],1),e.paths&&e.paths.length?n("v-uni-view",{staticClass:"uni-common-mt-sm pre-imgs"},t._l(e.paths,function(i,s){return n("v-uni-view",{key:s,staticClass:"pre-img-item",on:{click:function(n){n=t.$handleEvent(n),t.preImg(e.paths,i)}}},[n("v-uni-image",{staticStyle:{width:"100upx",height:"100upx"},attrs:{"lazy-load":"true",src:i,mode:"scaleToFill"}})],1)}),1):t._e(),n("v-uni-view",{staticClass:"uni-common-mt-sm uni-right"},[n("v-uni-text",{staticClass:"uni-text-gray uni-text-small",on:{click:function(e){e=t.$handleEvent(e),t.delContent(i)}}},[t._v("删除")])],1)],1)],1)})],2),n("v-uni-view",{staticClass:"plus-items uni-common-pa uni-border-bottom"},[n("v-uni-view",{staticClass:"uni-text-gray uni-text-small  uni-common-mb-sm"},[t._v("添加图文详情段落")]),t._l(t.plusTypes,function(e,i){return n("v-uni-view",{key:i,staticClass:"plus-item",on:{click:function(e){e=t.$handleEvent(e),t.contentTypeChoose(i)}}},[n("uni-icon",{attrs:{type:e.icon,size:"24"}})],1)})],2),t.plusPostData.video||t.plusPostData.audio?n("v-uni-view",{}):n("v-uni-view",{staticClass:"plus-items uni-common-pa"},[n("v-uni-view",{staticClass:"uni-text-gray uni-text-small  uni-common-mb-sm"},[t._v("添加视频/音频")]),t._l(t.mediaTypes,function(e,i){return n("v-uni-view",{key:i,staticClass:"plus-item",on:{click:function(e){e=t.$handleEvent(e),t.contentMediaChoose(i)}}},[n("uni-icon",{attrs:{type:e.icon,size:"24"}})],1)})],2),t.plusPostData.video?n("v-uni-view",{staticClass:"uni-common-pa"},[n("v-uni-video",{staticStyle:{width:"100%"},attrs:{src:t.plusPostData.video,controls:""}}),n("v-uni-view",{staticClass:"uni-common-mt-sm uni-right"},[n("v-uni-text",{staticClass:"uni-text-gray uni-text-small",on:{click:function(e){e=t.$handleEvent(e),t.delContentVideo(e)}}},[t._v("删除")])],1)],1):t._e(),t.recorderManagerStart?n("v-uni-view",{staticClass:"uni-common-pa uni-center",on:{click:function(e){e=t.$handleEvent(e),t.endRecord(e)}}},[n("v-uni-text",{staticStyle:{"text-decoration":"underline"}},[t._v("录音完毕")])],1):t._e(),t.plusPostData.audio?n("v-uni-view",{staticClass:"uni-common-pa"},[n("v-uni-audio",{staticStyle:{width:"100%"},attrs:{src:t.plusPostData.audio,name:t.plusPostData.title,author:"暂无",controls:""}}),n("v-uni-view",{staticClass:"uni-common-mt-sm uni-right"},[n("v-uni-text",{staticClass:"uni-text-gray uni-text-small",on:{click:function(e){e=t.$handleEvent(e),t.delContentAudio(e)}}},[t._v("删除")])],1)],1):t._e()],1),n("v-uni-view",{staticStyle:{height:"200upx"}}),n("v-uni-view",{staticClass:"uni-fixed-bottom uni-bg-white uni-flex uni-border-top plus-post-bottom"},[n("v-uni-view",{staticClass:"pre-pub"},[n("v-uni-navigator",{attrs:{url:"/pagesPlus/plus/pre"}},[n("uni-icon",{attrs:{type:"eye",size:"24"}}),n("v-uni-text",{staticClass:"uni-common-ml-sm uni-text-small"},[t._v("预览")])],1)],1),n("v-uni-view",{staticClass:"uni-flex-item uni-right ",on:{click:function(e){e=t.$handleEvent(e),t.confirm(e)}}},[n("v-uni-text",{staticClass:"btn-pub",style:{background:t.pubBtnBg}},[t._v("发布")])],1)],1)],1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},3975:function(t,e,n){"use strict";n.r(e);var i=n("3300"),s=n("2dbd");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("b904");var o=n("2877"),u=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"780edb90",null);e["default"]=u.exports},"48bf":function(t,e,n){var i=n("5f05");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("3f258cc3",i,!0,{sourceMap:!1,shadowMode:!1})},"5f05":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".plus-item[data-v-780edb90]{width:%?100?%;height:%?100?%;border:%?4?% dashed #ddd;color:#333;margin-right:%?20?%;display:inline-block;line-height:%?100?%;text-align:center}.content-textarea[data-v-780edb90]{background:#eee;padding:%?20?%}.content-textarea uni-textarea[data-v-780edb90]{width:100%;height:%?80?%;line-height:%?40?%;font-size:%?24?%;color:#333}.btn-pub[data-v-780edb90]{\n  /* background: #d81e06; */padding:%?0?% %?24?%;font-size:%?24?%;border-radius:%?8?%;color:#fff;line-height:%?60?%;height:%?60?%;display:inline-block;margin:%?20?% %?30?%}.pre-pub[data-v-780edb90]{line-height:%?60?%;height:%?60?%;margin:%?20?% %?30?%}.pre-img-item[data-v-780edb90]{width:%?100?%;height:%?100?%;margin-right:%?20?%;display:inline-block}.plus-post-bottom[data-v-780edb90]{z-index:1000}",""])},"63c7":function(t,e,n){"use strict";n.r(e);var i=n("1eab"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},"72b1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a")),s=n("2f62"),a=u(n("7efa")),o=u(n("57e2"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,s,a,o){try{var u=t[a](o),r=u.value}catch(l){return void n(l)}u.done?e(r):Promise.resolve(r).then(i,s)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(i,s){var a=t.apply(e,n);function o(t){r(a,i,s,o,u,"next",t)}function u(t){r(a,i,s,o,u,"throw",t)}o(void 0)})}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){p(t,e,n[e])})}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=uni.getRecorderManager(),h=uni.createInnerAudioContext();h.autoplay=!0;var v={components:{uniIcon:a.default},data:function(){return{plusTypes:{text:{icon:"plusempty"},image:{icon:"camera"}},mediaTypes:{video:{icon:"videocam"},audio:{icon:"mic"}},recorderManagerStart:!1,pubBtnBg:"#d81e06"}},computed:c({},(0,s.mapState)(["hasLogin","userInfo","plusPostData"])),methods:{contentMediaChoose:function(t){var e=this;"video"==t?uni.chooseVideo({count:1,success:function(t){console.log("video size ",t.size),t.size>=5242880?uni.showToast({icon:"none",title:"视频大小超过限制"}):e.plusPostData.video=t.tempFilePath}}):"audio"==t&&this.startRecord()},contentTypeChoose:function(t){var e=this;console.log("contentTypeChoose key",t);var n={type:t,text:""};"image"==t?(n.paths=[],uni.chooseImage({count:6,success:function(t){var i=t.tempFiles,s=[];i.forEach(function(t,e){t.size>5242880?s.push(e+1):n.paths.push(t.path),s.length&&uni.showToast({icon:"none",title:"第"+s.join(",")+"张图片大小超过限制"})}),n.paths.length&&e.plusPostData.contents.push(n)}})):this.plusPostData.contents.push(n)},preImg:function(t,e){uni.previewImage({urls:t,current:e,indicator:"number"})},delContent:function(t){this.plusPostData.contents.splice(t,1)},delContentVideo:function(){this.plusPostData.video=""},delContentAudio:function(){this.plusPostData.audio=""},startRecord:function(){console.log("开始录音"),this.recorderManagerStart=!0,d.start()},endRecord:function(){console.log("录音结束"),this.recorderManagerStart=!1,d.stop()},playVoice:function(){console.log("播放录音"),this.plusPostData.audio&&(h.src=this.plusPostData.audio,h.play())},confirm:function(){var t=l(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.hasLogin){t.next=3;break}return uni.navigateTo({url:"/pages/auth/login"}),t.abrupt("return");case 3:if(this.plusPostData.progress,this.plusPostData.title){t.next=7;break}return uni.showToast({icon:"none",title:"请填写标题"}),t.abrupt("return");case 7:if(this.plusPostData.goods.id){t.next=10;break}return uni.showToast({icon:"none",title:"请选择评测的产品"}),t.abrupt("return");case 10:if(!(this.plusPostData.contents.length<=0)){t.next=13;break}return uni.showToast({icon:"none",title:"请添加评测详细内容"}),t.abrupt("return");case 13:return this.pubBtnBg="#eeeeee",this.plusPostData,t.next=17,this.uploadFiles();case 17:return console.log("this.plusPostData  ====== ",this.plusPostData),t.next=20,this.$store.dispatch("postPlusByUser",this.plusPostData);case 20:e=t.sent,this.plusPostData.progress=100,this.pubBtnBg="#d81e06",0==e.code?(this.plusPostData.title="",this.plusPostData.goods={},this.plusPostData.contents=[],this.plusPostData.video="",this.plusPostData.audio="",this.plusPostData.progress=0,uni.navigateTo({url:"/pagesPlus/plus/success"})):(this.plusPostData.progress=0,uni.navigateTo({url:"/pagesPlus/plus/fail?msg="+e.message}));case 24:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),uploadFiles:function(){var t=l(i.default.mark(function t(){var e,n,s,a,o,u,r,l,c,p,d;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this.getUploadsCount(),console.log("uploadsCount =========",e),n=e+1,s=0,a=0;case 5:if(!(a<this.plusPostData.contents.length)){t.next=26;break}if(o=this.plusPostData.contents[a],"image"!=o.type){t.next=23;break}u=[],r=0;case 10:if(!(r<o.paths.length)){t.next=21;break}return l=o.paths[r],t.next=14,this.doUploadFile(l);case 14:c=t.sent,s++,this.plusPostData.progress=parseInt(100*s/n),u.push(c);case 18:r++,t.next=10;break;case 21:o.urls=u,this.plusPostData.contents[a]=o;case 23:a++,t.next=5;break;case 26:if(!this.plusPostData.video){t.next=36;break}return console.log("this.plusPostData.video ====== ",this.plusPostData.video),t.next=30,this.doUploadFile(this.plusPostData.video);case 30:p=t.sent,this.plusPostData.video_url=p,s++,this.plusPostData.progress=parseInt(100*s/n),t.next=37;break;case 36:this.plusPostData.video_url="";case 37:if(!this.plusPostData.audio){t.next=46;break}return t.next=40,this.doUploadFile(this.plusPostData.audio);case 40:d=t.sent,this.plusPostData.audio_url=d,s++,this.plusPostData.progress=parseInt(100*s/n),t.next=47;break;case 46:this.plusPostData.audio_url="";case 47:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getUploadsCount:function(){var t=0,e=this.plusPostData;return e.contents.forEach(function(e){"image"==e.type&&(t+=e.paths.length)}),e.video&&t++,e.audio&&t++,t},doUploadFile:function(){var t=l(i.default.mark(function t(e){var n;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.default.upload(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),toChooseGoods:function(){uni.navigateTo({url:"/pagesPlus/plus/choose"})}},onLoad:function(){var t=l(i.default.mark(function t(){var e,n,s=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.hasLogin){t.next=3;break}return uni.navigateTo({url:"/pages/auth/login"}),t.abrupt("return");case 3:return console.log(this.userInfo),t.next=6,this.$store.dispatch("userOrderItemsListGet",{page:1});case 6:e=t.sent,console.log("userOrderItemsListGet ret ",e),0==e.code?(n=e.data.count,n<=0&&uni.redirectTo({url:"/pagesPlus/plus/fail?type=1&msg=您还未购买过商城商品，不能进行评测！"})):uni.redirectTo({url:"/pagesPlus/plus/fail?type=1&msg=网络发生错误，请稍后重试!"}),d.onStop(function(t){console.log("recorder stop"+JSON.stringify(t)),s.plusPostData.audio=t.tempFilePath});case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()};e.default=v},"7efa":function(t,e,n){"use strict";n.r(e);var i=n("fde5"),s=n("63c7");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var o=n("2877"),u=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},b904:function(t,e,n){"use strict";var i=n("48bf"),s=n.n(i);s.a},fde5:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})}}]);