// components/video-list-item/video-list-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      default:{},
      observer:function(newValue){
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(){
      wx.navigateTo({
        url: `/pages/detail-video/detail-video?id=${this.data.item.id}`,
      })
    }

  }
})
