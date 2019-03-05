
class Share {

  qq(data, callback = null) {
    uni.share({
      provider: "qq",
      type: 0,
      title: data.title,
      summary: data.description,
      href: data.href,
      imageUrl: data.imgUrl,
      success: function(res) {
        console.log("success:" + JSON.stringify(res));
        if(callback){
          callback()
        }
      },
      fail: function(err) {
        console.log("fail:" + JSON.stringify(err));
      }
    });
  }
  
  wx(data, sence = 0 , callback = null){
    uni.share({
      provider: "weixin",
      scene: (sence == 0) ? "WXSceneSession" : "WXSenceTimeline",
      type: 0,
      title: data.title,
      summary: data.description,
      href: data.href,
      imageUrl: data.imgUrl,
      success: function(res) {
        console.log("success:" + JSON.stringify(res));
        if(callback){
          callback()
        }
      },
      fail: function(err) {
        console.log("fail:" + JSON.stringify(err));
      }
    });
  }
  
  mini(data, sence = 0 , callback = null){
    console.log('mini data：', JSON.stringify(data))
    uni.share({
      provider: "weixin",
      scene:'WXSceneSession',
      // scene: (sence == 0) ? "WXSceneSession" : "WXSenceTimeline",
      type: 5,
      title: data.title,
      summary: data.description,
      href: data.href,
      imageUrl: data.imgUrl,
      miniProgram:{
        id: data.miniAppId,
        path: data.miniPage,
        type: 0,
        webUrl: data.href
      },
      success: function(res) {
        console.log("success:" + JSON.stringify(res));
        if(callback){
          callback()
        }
      },
      fail: function(err) {
        console.log("fail:" + JSON.stringify(err));
      }
    });
  }
}

export default new Share
