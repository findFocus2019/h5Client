(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mall-list"],{"0eea":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{num:{type:Number|String,default:0},size:{type:String,default:"24"},nums:{type:Array,default:function(){return[]}}},data:function(){return{money:"0"}},methods:{formatNum:function(){if(this.num||0===this.num||"0"===this.num){var t=parseFloat(this.num).toFixed(2);console.log(t),this.money=" ￥"+t}},formatNums:function(){if(this.nums.length){var t=0;this.nums.forEach(function(e){console.log("formatNums =========== n",e),t+=parseFloat(e)}),console.log("formatNums =========== num",t);var e=parseFloat(t).toFixed(2);e=e.toString(),this.money=" ￥"+e}}},created:function(){this.formatNum(),this.formatNums()},watch:{num:function(t,e){console.log("newVal",t),this.formatNum()},nums:function(t,e){this.formatNums()}}};e.default=n},"0f30":function(t,e,i){"use strict";i.r(e);var n=i("2519"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},2519:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("a34a")),a=r(i("ec9c")),s=r(i("7efa")),l=r(i("89f3")),o=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,i,n,a,s,l){try{var o=t[s](l),r=o.value}catch(u){return void i(u)}o.done?e(r):Promise.resolve(r).then(n,a)}function c(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var s=t.apply(e,i);function l(t){u(s,n,a,l,o,"next",t)}function o(t){u(s,n,a,l,o,"throw",t)}l(void 0)})}}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){h(t,e,i[e])})}return t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var m={data:function(){return{scrollLeft:0,tabIndex:0,topHideViewHeight:0,mallTypes:["","焦点商城","京选商城"],mallCategorys:[],mallGoodsList:{page:1,count:0,list:[],timestamp:0},showLoadMore:!1,loadMoreText:"加载中..."}},components:{uniNavBar:a.default,uniIcon:s.default,money:l.default},computed:d({},(0,o.mapState)(["mallType","mallCategorysData","mallGoodsListData","mallSearch","mallOrderTypes","mallOrderActive","mallShowType"])),methods:{changeMallShowType:function(){this.$store.state.mallShowType=0==this.mallShowType?1:0},changeMallType:function(){var t=c(n.default.mark(function t(e){var i;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(uni.showLoading({mask:!0,title:"数据加载中..."}),i=this.mallType,i!=e){t.next=5;break}return uni.hideLoading(),t.abrupt("return");case 5:return this.tabIndex=0,this.scrollLeft=0,this.$store.state.mallType=e,this.mallGoodsListData[i]["all"]=null,t.next=11,this.getDatas();case 11:uni.hideLoading();case 12:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),tapCategoryTab:function(t){this.tabIndex=t,this.scrollLeft=t>=5?80*(t-1):0,this.getLists()},listOrderTypeChoose:function(t){console.log("listTypeChoose orderType",t);var e=this.mallOrderActive;e.name!=t.name?this.mallOrderActive.name=t.name:"sales"!==t.name&&(t.type="desc"===t.type?"asc":"desc",this.mallOrderActive.type=t.type),this.refresh()},listOrderTypeInit:function(){},cancelSearch:function(){this.mallSearch.open=!1,this.mallSearch.hasDone=!1,this.mallSearch.text="",this.refresh()},getDatas:function(){var t=c(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getCategorys();case 2:return t.next=4,this.getLists();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getCategorys:function(){var t=c(n.default.mark(function t(){var e,i;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.mallType,t.next=3,this.$store.dispatch("getGoodsCategory");case 3:i=t.sent,console.log("getCategorys ret: ================================="+JSON.stringify(i)),0==i.code&&(this.mallCategorys=this.mallCategorysData[e]);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getLists:function(){var t=c(n.default.mark(function t(){var e,i,a,s,l,o,r,u,c,d=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.mallType,console.log(this.mallCategorys,this.tabIndex),i=this.tabIndex||0,a=this.mallCategorys[i].id,this.mallGoodsListData[e][a]||(this.mallGoodsListData[e][a]={page:1,list:[],count:0,timestamp:0}),s=this.mallGoodsListData[e][a],l={},l.type=e,l.category=a,l.page=s.page,l.timestamp=s.timestamp,l.order=this.mallOrderActive,o=this.mallSearch.text||"",o&&(l.search=o),console.log("getLists params",l),t.next=17,this.$store.dispatch("getGooddList",l);case 17:return r=t.sent,console.log("getGooddList ret",JSON.stringify(r)),0==r.code&&(u=r.data,this.mallGoodsListData[e][a].page+=1,this.mallGoodsListData[e][a].count=u.count,this.mallGoodsListData[e][a].timestamp=u.timestamp,c=u.rows,0==c.length?this.loadMoreText="无更多...":o&&this.$store.dispatch("mallSearchListAdd",{item:o}),c.forEach(function(t){d.mallGoodsListData[e][a].list.push(t)})),this.mallGoodsList=this.mallGoodsListData[e][a],t.abrupt("return",r);case 22:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),refresh:function(){var t=c(n.default.mark(function t(){var e,i,a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("refresh =============="),e=this.mallType,console.log(this.mallCategorys,this.tabIndex),i=this.tabIndex||0,a=this.mallCategorys[i].id,this.mallGoodsListData[e][a]=null,t.next=8,this.getLists();case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goCart:function(){uni.navigateTo({url:"/pagesMall/mall/cart"})},goSearch:function(){this.mallSearch.open=!0,uni.navigateTo({url:"/pagesMall/mall/search"})},goToDetail:function(t){uni.navigateTo({url:"/pagesMall/mall/goods?id="+t.id})}},onReady:function(){var t=this;console.log("onReady");var e=uni.createSelectorQuery().select(".uni-navbar");e.boundingClientRect(function(e){console.log("得到布局位置信息"+JSON.stringify(e)),t.topHideViewHeight=e.height}).exec()},onLoad:function(){console.log("onLoad............"),this.getDatas()},onPullDownRefresh:function(){var t=c(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.refresh();case 2:uni.stopPullDownRefresh();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onReachBottom:function(){var t=c(n.default.mark(function t(){var e=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.showLoadMore=!0,t.next=3,this.getLists();case 3:setTimeout(function(){e.showLoadMore=!1},1e3);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){console.log("onShow............"),this.mallSearch.open&&(console.log("onShow search............"),this.tabIndex=0,this.refresh(),this.mallSearch.text||(this.mallSearch.open=!1))}};e.default=m},"391e":function(t,e,i){"use strict";var n=i("4e88"),a=i.n(n);a.a},"4e88":function(t,e,i){var n=i("b5f5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("71f1a41e",n,!0,{sourceMap:!1,shadowMode:!1})},5984:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-page-body"},[i("uni-nav-bar",{attrs:{color:"#333333","background-color":"#FFFFFF",fixed:"true",id:"mall-nav-bar"},on:{"click-left":function(e){e=t.$handleEvent(e),t.goSearch(e)},"click-right":function(e){e=t.$handleEvent(e),t.goCart(e)}}},[i("template",{attrs:{slot:"left"},slot:"left"},[t.mallSearch.open?t._e():i("v-uni-view",{staticClass:"uni-common-pl uni-common-pr"},[i("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}})],1)],1),t.mallSearch.open?i("v-uni-view",{staticClass:"input-view uni-flex uni-bg-gray",staticStyle:{"border-radius":"30upx"}},[i("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}}),i("v-uni-input",{staticClass:"input uni-flex-item",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{click:function(e){e=t.$handleEvent(e),t.goSearch(e)}},model:{value:t.mallSearch.text,callback:function(e){t.$set(t.mallSearch,"text",e)},expression:"mallSearch.text"}}),i("uni-icon",{attrs:{type:"clear",size:"22",color:"#666666"},on:{click:function(e){e=t.$handleEvent(e),t.cancelSearch(e)}}})],1):i("v-uni-view",{staticClass:"input-view uni-center"},t._l(t.mallTypes,function(e,n){return e?i("v-uni-view",{key:n,staticClass:"uni-inline-block uni-common-pl uni-common-pr",on:{click:function(e){e=t.$handleEvent(e),t.changeMallType(n)}}},[n==t.mallType?i("v-uni-text",{staticClass:"uni-bold"},[t._v(t._s(e))]):i("v-uni-text",[t._v(t._s(e))])],1):t._e()})),i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-view",{staticClass:"uni-common-pl uni-common-pr"},[i("v-uni-image",{staticStyle:{width:"48upx",height:"48upx"},attrs:{"lazy-load":"true",src:"/static/icon/mall/cart.png",mode:"widthFix"}})],1)],1)],2),i("v-uni-view",{staticClass:"mall-list-body",style:{paddingTop:t.topHideViewHeight+"px"}},[i("v-uni-view",{staticClass:"uni-bg-white uni-border-bottom"},[t.mallCategorys&&t.mallCategorys.length?i("v-uni-scroll-view",{staticClass:"uni-swiper-tab uni-bg-white",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.mallCategorys,function(e,n){return i("v-uni-view",{key:n,class:["swiper-tab-list",t.tabIndex==n?"active":""],attrs:{"data-current":n},on:{click:function(e){e=t.$handleEvent(e),t.tapCategoryTab(n)}}},[t._v(t._s(e.name))])})):t._e()],1),i("v-uni-view",{},[i("v-uni-view",{staticClass:"uni-flex order-type-items uni-bg-white"},[t._l(t.mallOrderTypes,function(e){return i("v-uni-view",{key:e.name,staticClass:"uni-flex-item uni-center uni-flex",class:["order-type-item",t.mallOrderActive.name===e.name?"active":""],on:{click:function(i){i=t.$handleEvent(i),t.listOrderTypeChoose(e)}}},[i("v-uni-text",[t._v(t._s(e.text))]),"desc"===e.type?i("uni-icon",{attrs:{type:"arrowdown",size:"22"}}):i("uni-icon",{attrs:{type:"arrowup",size:"22"}})],1)}),i("v-uni-view",{staticClass:"uni-flex-item uni-center",on:{click:function(e){e=t.$handleEvent(e),t.changeMallShowType(e)}}},[1==t.mallShowType?i("v-uni-view",{staticStyle:{width:"40upx",height:"40upx",display:"inline-block"}},[i("v-uni-image",{staticStyle:{width:"40upx",height:"40upx"},attrs:{"lazy-load":"true",src:"/static/icon/mall/list-2.png",mode:"scaleToFill"}})],1):t._e(),0==t.mallShowType?i("v-uni-view",{staticStyle:{width:"40upx",height:"40upx",display:"inline-block"}},[i("v-uni-image",{staticStyle:{width:"40upx",height:"40upx"},attrs:{"lazy-load":"true",src:"/static/icon/mall/list-1.png",mode:"scaleToFill"}})],1):t._e()],1)],2)],1),t.mallGoodsList.count?i("v-uni-view",{staticClass:"mall-list-ul"},[1==t.mallType&&0==t.mallShowType?t._l(t.mallGoodsList.list,function(e,n){return i("v-uni-view",{key:n,staticClass:"mall-list-item type-self uni-bg-white uni-border-top",on:{click:function(i){i=t.$handleEvent(i),t.goToDetail(e)}}},[i("v-uni-view",{},[i("v-uni-image",{staticStyle:{width:"100%"},attrs:{"lazy-load":"true",src:e.cover,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"uni-common-pl uni-common-pr uni-common-pb "},[i("v-uni-view",{staticClass:"uni-bold uni-h4"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"uni-flex"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"uni-text-red uni-inline-block"},[i("v-uni-image",{staticStyle:{width:"36upx",height:"36upx"},attrs:{src:"/static/icon/mall/vip.png",mode:""}}),i("money",{attrs:{num:e.price_vip,size:"36"}})],1),i("v-uni-view",{staticClass:"uni-text-gray uni-inline-block uni-common-ml-sm",staticStyle:{"text-decoration":"line-through"}},[i("money",{attrs:{num:e.price}})],1)],1)],1),i("v-uni-view",{staticClass:"uni-text-light uni-text-small uni-flex-item"},[t._v("已有"+t._s(e.sales)+"付款")])],1)],1)}):t._e(),2==t.mallType&&0==t.mallShowType?t._l(t.mallGoodsList.list,function(e,n){return i("v-uni-view",{key:n,staticClass:"mall-list-item type-jd uni-bg-white uni-border-top uni-flex uni-common-pa",on:{click:function(i){i=t.$handleEvent(i),t.goToDetail(e)}}},[i("v-uni-view",{staticClass:"goods-list-cover"},[i("v-uni-image",{staticClass:"goods-list-cover",attrs:{"lazy-load":"true",src:e.cover,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"uni-common-pl goods-list-content"},[i("v-uni-view",{staticClass:"uni-bold uni-ellipsis-2 title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticStyle:{"line-height":"120upx"}},[i("v-uni-view",{staticClass:"uni-text-red uni-inline-block"},[i("v-uni-image",{staticStyle:{width:"36upx",height:"36upx"},attrs:{src:"/static/icon/mall/vip.png",mode:""}}),i("money",{attrs:{num:e.price_vip,size:"36"}})],1),i("v-uni-view",{staticClass:"uni-text-gray uni-inline-block uni-common-ml-sm",staticStyle:{"text-decoration":"line-through"}},[i("money",{attrs:{num:e.price}})],1)],1),i("v-uni-view",{staticClass:"uni-text-light uni-text-small"},[t._v("已有"+t._s(e.sales)+"付款")])],1)],1)}):t._e(),1==t.mallShowType?t._l(t.mallGoodsList.list,function(e,n){return i("v-uni-view",{key:n,staticClass:"mall-goods-list type-jd uni-bg-white uni-border-top",on:{click:function(i){i=t.$handleEvent(i),t.goToDetail(e)}}},[i("v-uni-view",{staticClass:"uni-center uni-common-pt"},[i("v-uni-image",{staticClass:"goods-list-cover",attrs:{"lazy-load":"true",src:e.cover,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"uni-common-pa"},[i("v-uni-view",{staticClass:"uni-bold uni-ellipsis "},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"uni-ellipsis"},[i("v-uni-view",{staticClass:"uni-text-red uni-inline-block"},[i("v-uni-image",{staticStyle:{width:"36upx",height:"36upx"},attrs:{src:"/static/icon/mall/vip.png",mode:""}}),i("money",{attrs:{num:e.price_vip,size:"36"}})],1),i("v-uni-view",{staticClass:"uni-text-gray uni-inline-block uni-common-ml-sm",staticStyle:{"text-decoration":"line-through"}},[i("money",{attrs:{num:e.price}})],1)],1),i("v-uni-view",{staticClass:"uni-text-light uni-text-small"},[t._v("已有"+t._s(e.sales)+"付款")])],1)],1)}):t._e()],2):i("v-uni-view",{staticClass:"uni-common-pa uni-center"},[t._v("无数据")])],1),t.showLoadMore?i("v-uni-view",{staticClass:"uni-loadmore"},[t._v(t._s(t.loadMoreText))]):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"89f3":function(t,e,i){"use strict";i.r(e);var n=i("e41a"),a=i("d0f1");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);var l=i("2877"),o=Object(l["a"])(a["default"],n["a"],n["b"],!1,null,"0ca51cda",null);e["default"]=o.exports},9227:function(t,e,i){"use strict";i.r(e);var n=i("5984"),a=i("0f30");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("391e");var l=i("2877"),o=Object(l["a"])(a["default"],n["a"],n["b"],!1,null,"2616d45a",null);e["default"]=o.exports},b5f5:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".mall-list-body[data-v-2616d45a]{position:absolute;top:0;left:0;width:100%;height:100%}\n  \n/*  .order-type-items {\n    position: fixed;\n    top: 100px;\n    z-index: 199;\n    width: 100%;\n    background: #fff;\n    border-top: 1px solid #EEEEEE;\n  } */.order-type-items[data-v-2616d45a]{padding:%?20?% 0}.swiper-tab-list.active[data-v-2616d45a]{color:#d81e06;font-size:%?32?%}.order-type-item.active[data-v-2616d45a]{color:#d81e06}.swiper-tab-list[data-v-2616d45a]{width:%?160?%;text-align:center}.mall-list-item.type-self[data-v-2616d45a]{width:100%}.mall-goods-list.type-jd[data-v-2616d45a]{width:50%;display:inline-block}",""])},d0f1:function(t,e,i){"use strict";i.r(e);var n=i("0eea"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},e41a:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{display:"inline"}},[i("v-uni-text",{style:{fontSize:t.size/2+"px"}},[t._v(t._s(t.money))])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}}]);