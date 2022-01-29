const BASE_URL="http://123.207.32.32:9001"

class MYRequest{
  request(config){//接受所需要的参数，如果不够还可以自定义参数
    return new Promise((resolve,reject)=>{
      wx.showNavigationBarLoading()
      let url=null
      if(config.url.indexOf("http") !== -1){
        url=config.url
      }else{
        url=`${BASE_URL}/${config.url}`
      }
      wx.request({
        url: url,
        data:config.params?config.params:null,
        method:config.method?config.method:'post',
        header:config.header?config.header:{'content-type':'application/x-www-form-urlencoded'},
        complete:function(){
          wx.hideNavigationBarLoading()//完成停止加载
          wx.stopPullDownRefresh()//停止下拉刷新
        },
        success:function(res){
          resolve(res.data)
        },
        fail:function(res){
          wx.showModal({
            showCancel: false,
            confirmColor:'#1d8f59',
            content:'数据加载失败,请重新进入小程序!',
            success:function(res){

            }
          })
          wx.hideLoading()
        }
      })
    })
  }
}

const myRequest=new MYRequest()

export default myRequest