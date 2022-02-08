import {
  rankingStore
} from '../../store/index'
import {
  getSongMenuDetail
} from '../../apis/music'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    ranking: "",
    songInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const type = options.type
    this.setData({type})

    if (type === 'menu') {
      const id = options.id
      getSongMenuDetail({id}).then(res => {
        this.setData({ songInfo: res.playlist })
      })
    } else if (type === 'rank') {
      const ranking = options.ranking
      this.setData({ranking})
      //1 获取数据
      rankingStore.onState(ranking, this.getRankingDataHanlder)
    }
  },
  getRankingDataHanlder(res) {
    this.setData({
      songInfo: res
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
    if (this.data.ranking) {
      rankingStore.offState(this.data.ranking, this.getRankingDataHanlder)
    }
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