import {
  getSearchHot,
  getSearchSuggest,
  getSearchResult
} from '../../apis/search'
import debounce from '../../utils/debounce'

const debounceGetSearchSuggest = debounce(getSearchSuggest, 500)


Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotKeywords: [],
    suggestSongs: [],
    suggestSongsNodes: [],
    resultSongs: [],
    searchValue: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData()
  },
  async getPageData() {
    let res = await getSearchHot()
    this.setData({
      hotKeywords: res.result.hots
    })
  },
  //输入框变化
  handleSearchChange(event) {
    // 1.获取输入的关键字
    const searchValue = event.detail
    // 2.保存关键字
    this.setData({
      searchValue
    })
    // 3.判断关键字为空字符的处理逻辑
    if (!searchValue.length) {
      this.setData({
        suggestSongs: [],
        resultSongs: []
      })
      debounceGetSearchSuggest.cancel()
      return
    }

    // 4.根据关键字进行搜索
    // getSearchSuggest({
    //   type:'mobile',
    //   keywords:searchValue
    // }).then(res=>{
    //   this.setData({
    //     suggestSongs:res.result.allMatch
    //   })
    // })
    debounceGetSearchSuggest({
      type: 'mobile',
      keywords: searchValue
    }).then(res=>{
      //1 获取建议的关键词歌曲
      const suggestSongs=res.result.allMatch
      this.setData({suggestSongs})
      if (!suggestSongs) return 

      //2 转成nodes节点
      const suggestKeywords=suggestSongs.map(item=>item.keyword)
      const suggestSongsNodes = []
      for (const keyword of suggestKeywords) {
        const nodes = stringToNodes(keyword, searchValue)
        suggestSongsNodes.push(nodes)
      }
      this.setData({ suggestSongsNodes })
    })
  },
  //点击搜索
  handleSearchAction() {
    const searchValue=this.data.searchValue

    getSearchResult({
      keywords:searchValue
    }).then(res=>{
      this.setData({resultSongs:res.result.songs})
    })
  },
  //热门搜索点击
  handleKeywordItemClick(e) {
    //1 获取点击的关键字
    const keyword=e.currentTarget.dataset.keyword

    //2 将关键字设置到searchValue中
    this.setData({searchValue:keyword})


    //3 发送网络请求
    this.handleSearchAction()
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