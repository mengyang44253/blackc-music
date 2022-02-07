import {
  getMVDetail,
  getMVURL,
  getRelateMV
} from '../../apis/video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvInfo:{},
    mvURL:{},
    relatedMV:[],
    video_id:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      video_id:options.id
    })
    this.getVideoInfo()
  },
  async getVideoInfo(){
    Promise.all([
      getMVDetail({
        mvid:this.data.video_id
      }),
      getMVURL({
        id:this.data.video_id
      }),
      getRelateMV({
        id:this.data.video_id
      })
    ]).then(res=>{
      console.log(res);
      if(res[0].code === 200){
        this.setData({
          mvInfo:res[0].data
        })
      }
      if(res[1].code === 200){
        this.setData({
          mvURL:res[1].data
        })
      }
      if(res[2].code === 200){
        this.setData({
          relatedMV:res[2].data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})