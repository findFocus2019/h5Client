(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-main"],{"2be9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("a34a")),s=i("2f62"),a=r(i("ec9c")),o=r(i("7efa"));function r(t){return t&&t.__esModule?t:{default:t}}function l(t,e,i,n,s,a,o){try{var r=t[a](o),l=r.value}catch(u){return void i(u)}r.done?e(l):Promise.resolve(l).then(n,s)}function u(t){return function(){var e=this,i=arguments;return new Promise(function(n,s){var a=t.apply(e,i);function o(t){l(a,n,s,o,r,"next",t)}function r(t){l(a,n,s,o,r,"throw",t)}o(void 0)})}}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){f(t,e,i[e])})}return t}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d={components:{uniNavBar:a.default,uniIcon:o.default},data:function(){return{barBgColor:"transparent",swiper:{indicatorDots:!1,autoplay:!0,interval:3e3,duration:500},banners:[],bannerIndex:0,imgList:[],recommendList:[],newsList:[],newsCount:0,newsItems:{},newsCurrentchannel:"all",menus:[{id:"all",name:"焦点资讯",url:"/pages/posts/news"}]}},computed:c({},(0,s.mapState)(["hasLogin","userInfo","mainSearchText","postChannels","newsDatas","recommendDatas","configs"])),onShow:function(){console.log("onShow ================")},onLoad:function(){var t=u(n.default.mark(function t(){var e,i,s,a,o,r,l,u,c=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("onLoad ======================"),e=this.configs,0==Object.keys(e).length&&this.$store.dispatch("getConfigs"),t.next=5,this.getAlbums();case 5:return t.next=7,this.getNewsList("",1);case 7:return i=t.sent,console.log("recommendListRet===============",i),0==i.code&&(s=i.data,console.log("recommendListRet===============",s.timestamp),this.recommendDatas.list=s.rows,this.recommendDatas.page=s.page+1,this.recommendDatas.count=s.count,this.recommendDatas.timestamp=s.timestamp,this.recommendList=s.rows),t.next=12,this.$store.dispatch("postChannelsGet",{type:1});case 12:return a=t.sent,0==a.code&&(o=this.postChannels,console.log("onLoad",o),o.forEach(function(t){c.menus.push({id:t,name:t,url:"/pagesPost/posts/news"})})),this.newsItems=this.newsDatas,r=this.newsCurrentchannel,t.next=18,this.getNewsList(r,0);case 18:l=t.sent,0==l.code&&(u=l.data,this.newsItems[r]={},this.newsItems[r].count=u.count,this.newsItems[r].page=u.page+1,this.newsItems[r].timestamp=u.timestamp,this.newsItems[r].list=u.rows,this.newsList=u.rows,this.newsCount=u.count);case 20:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{goNotice:function(){uni.navigateTo({url:"/pagesMain/notice/notice"})},goToPage:function(t,e){e>0&&uni.navigateTo({url:t.url+"?channel="+t.name})},goToMore:function(){uni.navigateTo({url:"/pagesPost/posts/news?channel="+this.newsCurrentchannel})},goToDetail:function(t){uni.navigateTo({url:"/pagesPost/posts/detail?id="+t.id})},goDailySign:function(){this.hasLogin?uni.navigateTo({url:"/pagesMain/user/dailySign"}):uni.navigateTo({url:"/pages/auth/login"})},goBannerHref:function(){var t=this.bannerIndex,e=this.banners[t]||{};this.bannerTap(e)},goUserCenter:function(){uni.switchTab({url:"/pages/user/index"})},goSearch:function(){uni.navigateTo({url:"/pages/main/search"})},bannerTap:function(t){t.url&&uni.navigateTo({url:t.url,fail:function(){console.log("fail"),uni.switchTab({url:t.url})}})},changeNewsChannel:function(){var t=u(n.default.mark(function t(e,i){var s,a,o,r;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.newsCurrentchannel=e.id,s=this.newsCurrentchannel,a=this.newsItems[s],a){t.next=10;break}return t.next=6,this.getNewsList(s,0);case 6:o=t.sent,0==o.code&&(r=o.data,this.newsItems[s]={},this.newsItems[s].count=r.count,this.newsItems[s].page=r.page+1,this.newsItems[s].timestamp=r.timestamp,this.newsItems[s].list=r.rows,this.newsList=r.rows,this.newsCount=r.count),t.next=12;break;case 10:this.newsList=a.list||[],this.newsCount=a.count||0;case 12:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}(),getNewsList:function(){var t=u(n.default.mark(function t(){var e,i,s,a,o,r,l=arguments;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=l.length>0&&void 0!==l[0]?l[0]:"",i=l.length>1&&void 0!==l[1]?l[1]:0,console.log("channel",e),s=parseInt(Date.now()/1e3),e&&(a=this.newsItems[e],a||(this.newsItems[e]={},this.newsItems[e].list=[])),o={},o.page=1,o.timestamp=s,e&&(o.channel=e,o.type=1),i&&(o.recommend=1),console.log("params",o),t.next=13,this.$store.dispatch("postListGet",o);case 13:return r=t.sent,t.abrupt("return",r);case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getAlbums:function(){var t=u(n.default.mark(function t(){var e,i,s=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getAlbums",{type:"banner"});case 2:e=t.sent,0==e.code&&(i=e.data.rows||[],i.forEach(function(t){s.banners.push({img:t.img,url:t.url})}));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},onPageScroll:function(t){var e=t.scrollTop;this.barBgColor=e>0?"#d81e06":"transparent"}};e.default=d},"2ca7":function(t,e,i){"use strict";i.r(e);var n=i("84cd"),s=i("5a28");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("3b71");var o=i("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"7edb760f",null);e["default"]=r.exports},"3b71":function(t,e,i){"use strict";var n=i("85fd"),s=i.n(n);s.a},"5a28":function(t,e,i){"use strict";i.r(e);var n=i("2be9"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},"84cd":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-page-body"},[i("uni-nav-bar",{attrs:{color:"#333333","background-color":t.barBgColor,fixed:"true",shadow:"false"}},[i("template",{attrs:{slot:"left"},slot:"left"}),i("v-uni-view",{staticClass:"input-search-view uni-flex",staticStyle:{"border-radius":"30upx",background:"#ffffff",opacity:"0.5","padding-left":"20upx"},on:{click:function(e){e=t.$handleEvent(e),t.goSearch(e)}}},[i("uni-icon",{attrs:{type:"search",size:"22",color:"#333333"}}),i("v-uni-input",{staticClass:"input uni-flex-item",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(e){e=t.$handleEvent(e),t.confirm(e)}}})],1),i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-view",{staticClass:"uni-common-pr",on:{click:function(e){e=t.$handleEvent(e),t.goNotice(e)}}},[i("uni-icon",{attrs:{type:"chat",size:"22",color:"#ffffff"}})],1)],1)],2),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"top-panel"},[i("v-uni-view",{staticClass:"top-panel-bg",staticStyle:{width:"750upx",height:"554upx"}},[i("v-uni-image",{staticStyle:{width:"750upx",height:"554upx"},attrs:{"lazy-load":"true",src:"https://img-juren.oss-cn-shenzhen.aliyuncs.com/assets/images/banner-bg.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"swiper-banners"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.swiper.indicatorDots,autoplay:t.swiper.autoplay,interval:t.swiper.interval,duration:0,circular:"false",current:t.bannerIndex}},t._l(t.banners,function(e,n){return i("v-uni-swiper-item",{key:n,on:{click:function(i){i=t.$handleEvent(i),t.bannerTap(e)}}},[i("v-uni-view",{staticClass:"swiper-item",staticStyle:{"text-align":"center"}},[i("v-uni-view",{staticClass:"uni-bg-red uni-inline-block",staticStyle:{width:"320upx",height:"320upx","border-radius":"160upx","margin-top":"138upx",overflow:"hidden"}},[i("v-uni-image",{staticStyle:{width:"320upx",height:"320upx","border-radius":"160upx"},attrs:{"lazy-load":"true",src:e.img,mode:"scaleToFill"}})],1)],1)],1)}),1)],1),i("v-uni-view",{staticClass:"buttons"},[i("v-uni-view",{staticClass:"button checkout left",on:{click:function(e){e=t.$handleEvent(e),t.goDailySign(e)}}},[i("v-uni-image",{attrs:{"lazy-load":"true",src:"/static/icon/home/icon_checkout.png"}}),i("v-uni-text",{staticClass:"uni-text-white"},[t._v("签到")])],1),i("v-uni-view",{staticClass:"button view-points right",on:{click:function(e){e=t.$handleEvent(e),t.goUserCenter(e)}}},[i("v-uni-image",{attrs:{"lazy-load":"true",src:"/static/icon/home/icon_pig.png"}}),i("v-uni-text",[t._v("查看")])],1)],1)],1),i("v-uni-view",{staticClass:"uni-bg-white uni-common-pa uni-flex",staticStyle:{position:"relative",top:"-2upx"}},[i("v-uni-view",{staticClass:"uni-flex-item uni-left",staticStyle:{height:"200upx"}},[i("v-uni-navigator",{attrs:{url:t.configs.main_sub_url_1}},[i("v-uni-image",{staticStyle:{width:"320upx",height:"200upx","border-radius":"8upx",background:"#EEEEEE"},attrs:{"lazy-load":"true",src:t.configs.main_sub_img_1,mode:""}})],1)],1),i("v-uni-view",{staticClass:"uni-flex-item uni-right",staticStyle:{height:"200upx"}},[i("v-uni-navigator",{attrs:{url:t.configs.main_sub_url_2}},[i("v-uni-image",{staticStyle:{width:"320upx",height:"200upx","border-radius":"8upx",background:"#EEEEEE"},attrs:{"lazy-load":"true",src:t.configs.main_sub_img_2,mode:""}})],1)],1)],1),i("v-uni-view",{staticClass:"the-focus-sugguestions"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-text",{staticClass:"title"},[t._v("焦点推荐")]),i("v-uni-navigator",{attrs:{url:"/pagesPost/posts/recommend"}},[i("v-uni-text",{staticClass:"uni-text-small"},[t._v("更多>>")])],1)],1),i("v-uni-view",{staticClass:"body"},[i("v-uni-swiper",{staticStyle:{height:"280upx"},attrs:{autoplay:"true",interval:"3000",duration:"1000",circular:"true"}},t._l(t.recommendList,function(e,n){return n<10?i("v-uni-swiper-item",{key:n,staticClass:"suggestion-swiper-item"},[i("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.goToDetail(e)}}},[i("v-uni-view",{staticClass:"post-list-cover-xl"},[i("v-uni-image",{staticClass:"post-list-cover-xl",attrs:{"lazy-load":"true",src:e.cover,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"uni-ellipsis uni-bold"},[t._v(t._s(e.title))])],1)],1):t._e()}),1)],1)],1),t.configs.index_news_display?i("v-uni-view",{staticClass:"the-focus-list"},[i("v-uni-view",{staticClass:"menu-navigator"},[i("v-uni-swiper",{staticClass:"menu-swiper"},t._l(t.menus,function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"swiper-menu-item",on:{click:function(i){i=t.$handleEvent(i),t.changeNewsChannel(e,n)}}},[i("v-uni-view",{staticClass:"menu",class:e.id===t.newsCurrentchannel?"activate":""},[i("v-uni-view",{staticClass:"menu"},[i("v-uni-text",[t._v(t._s(e.name))])],1)],1)],1)}),1)],1),i("v-uni-view",{},[t._l(t.newsList,function(e,n){return n<10?[i("v-uni-view",{key:n+"_0",staticClass:"uni-flex uni-border-top uni-bg-white uni-common-pa uni-left",on:{click:function(i){i=t.$handleEvent(i),t.goToDetail(e)}}},[i("v-uni-view",{staticClass:"post-list-cover"},[i("v-uni-image",{staticClass:"post-list-cover",attrs:{"lazy-load":"true",src:e.cover,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"uni-flex-item uni-common-pl post-list-content"},[i("v-uni-view",{staticClass:"uni-ellipsis-2 uni-left uni-bold title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"uni-text-gray uni-text-small time"},[t._v(t._s(e.publish_time))]),i("v-uni-view",{staticClass:"uni-text-gray uni-flex icon-items"},[i("v-uni-view",{staticClass:"icon-img"},[i("v-uni-image",{staticClass:"icon-img",attrs:{"lazy-load":"true",src:"/static/icon/posts/eye.png",mode:""}})],1),i("v-uni-view",{staticClass:"uni-flex-item"},[i("v-uni-text",[t._v(t._s(e.views))])],1),i("v-uni-view",{staticClass:"icon-img"},[i("v-uni-image",{staticClass:"icon-img",attrs:{"lazy-load":"true",src:"/static/icon/posts/zan.png",mode:""}})],1),i("v-uni-view",{staticClass:"uni-flex-item "},[i("v-uni-text",[t._v(t._s(e.likes))])],1),i("v-uni-view",{staticClass:"icon-img"},[i("v-uni-image",{staticClass:"icon-img",attrs:{"lazy-load":"true",src:"/static/icon/posts/share.png",mode:""}})],1),i("v-uni-view",{staticClass:"uni-flex-item "},[i("v-uni-text",[t._v(t._s(e.shares))])],1)],1)],1)],1)]:t._e()}),t.newsCount>10?i("v-uni-view",{staticClass:"uni-border-top uni-bg-white uni-common-pa",on:{click:function(e){e=t.$handleEvent(e),t.goToMore(e)}}},[t._v("查看更多")]):t._e()],2)],1):t._e()],1)],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"85fd":function(t,e,i){var n=i("b93b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("5e956812",n,!0,{sourceMap:!1,shadowMode:!1})},b93b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".scroll-view[data-v-7edb760f]{width:100%;height:100%}.content[data-v-7edb760f]{position:absolute;left:0;top:0;display:block;text-align:center;width:100%;height:100%;background-color:#f2f2f2}.content .top-panel[data-v-7edb760f]{position:relative;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:top;-webkit-justify-content:top;-ms-flex-pack:top;justify-content:top;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:%?750?%;height:%?554?%;background-position:50%;background-size:100% 100%}.content .top-panel .top-panel-bg[data-v-7edb760f]{position:absolute;left:0;top:0;width:100%}.content .top-panel .buttons[data-v-7edb760f]{position:absolute;left:0;bottom:%?60?%;width:100%;height:%?60?%;line-height:%?60?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#fff;font-size:%?25?%}.content .top-panel .buttons .button[data-v-7edb760f]{width:%?150?%;height:%?60?%;background:rgba(0,0,0,.2);color:#fff;font-size:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.content .top-panel .buttons .button uni-image[data-v-7edb760f]{width:%?40?%;height:%?34?%;line-height:1;margin-right:%?10?%}.content .top-panel .buttons .button.left[data-v-7edb760f]{border-radius:0 %?20?% %?20?% 0}.content .top-panel .buttons .button.right[data-v-7edb760f]{border-radius:%?20?% 0 0 %?20?%}.content .top-panel .search-bar-container[data-v-7edb760f]{position:absolute;left:50%;top:%?53?%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);display:block;width:%?549?%;height:%?49?%;border-radius:%?24?%;overflow:hidden}.content .swiper-banners[data-v-7edb760f]{position:relative;width:%?750?%;height:%?554?%;margin:0 auto}.content .swiper-banners .swiper[data-v-7edb760f]{height:%?554?%}.content .swiper-banners .swiper-item[data-v-7edb760f]{height:%?554?%}.content .the-focus-sugguestions[data-v-7edb760f]{display:block;width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?20?%;background-color:#fff}.content .the-focus-sugguestions .header[data-v-7edb760f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:%?100?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0 %?30?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;line-height:%?40?%}.content .the-focus-sugguestions .header .title[data-v-7edb760f]{border-left:%?8?% solid #c73441;padding-left:%?12?%;font-size:inherit;color:inherit;line-height:inherit;font-weight:inherit}.content .the-focus-sugguestions .body[data-v-7edb760f]{width:100%;height:auto}.content .the-focus-sugguestions .body .suggestion-swiper-item[data-v-7edb760f]{width:%?300?%!important;height:auto;line-height:1;padding-left:%?30?%}.content .the-focus-list[data-v-7edb760f]{margin-top:%?20?%!important;background-color:#fff}.content .the-focus-list .menu-navigator[data-v-7edb760f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;height:%?100?%;line-height:%?100?%;-webkit-box-sizing:border-box;box-sizing:border-box}.content .the-focus-list .menu-navigator .menu-swiper[data-v-7edb760f]{width:100%;height:100%;line-height:inherit}.content .the-focus-list .menu-navigator .menu-swiper .swiper-menu-item[data-v-7edb760f]{width:%?130?%!important;height:100%;line-height:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.content .the-focus-list .menu-navigator .menu-swiper .swiper-menu-item .menu[data-v-7edb760f]{line-height:inherit;width:auto!important;height:100%;font-size:%?30?%;color:#666;-webkit-box-sizing:border-box;box-sizing:border-box}.content .the-focus-list .menu-navigator .menu-swiper .swiper-menu-item .menu.activate[data-v-7edb760f]{font-size:%?26?%;font-weight:700;color:#333;border-bottom:%?6?% solid #e03c45}",""])}}]);