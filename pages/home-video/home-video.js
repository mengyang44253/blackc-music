import {
  getVideoTop
} from '../../apis/video'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMvs:[],
    hasMore:true,
    start:0,
    limit:60,
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTopMVData()
  },
  async getTopMVData(){
    if(!this.data.hasMore) return 
    wx.showNavigationBarLoading()
    let params={}
    params.offset=this.data.start
    params.limit=this.data.limit
    const res=await getVideoTop(params)
    let newData=this.data.topMvs
    if(this.data.start == 0){
      newData=res.data
    }else{
      newData=newData.concat(res.data)
    }

    //设置数据
    this.setData({
      topMvs:newData
    })
    this.setData({
      hasMore:res.hasMore
    })
    if(this.data.start == 0){
      wx.stopPullDownRefresh()
    }
  },
  handleVideoItemClick(e){
    let id=e.currentTarget.dataset.item.id

    wx.navigateTo({
      url: `/pages/datail-video?id=${id}`,
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
    this.setData({
      start:0
    })
    this.getTopMVData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(!this.data.hasMore) return 
    this.getTopMVData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})