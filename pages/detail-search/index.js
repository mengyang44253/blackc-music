import {
  getSearchHot,
  getSearchSuggest
} from '../../apis/search'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:"",
    hotKeywords:[],
    suggestSongs: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData()
  },
  async getPageData(){
    let res=await getSearchHot()
    this.setData({
      hotKeywords:res.result.hots
    })
  },
  handleSearchChange(event){
    // 1.获取输入的关键字
    const searchValue=event.detail
    // 2.保存关键字
    this.setData({
      searchValue
    })
    // 3.判断关键字为空字符的处理逻辑
    if (!searchValue.length) {
      this.setData({
        suggestSongs:[]
      })
      return 
    }

    // 4.根据关键字进行搜索
    getSearchSuggest({
      type:'mobile',
      keywords:searchValue
    }).then(res=>{
      this.setData({
        suggestSongs:res.result.allMatch
      })
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