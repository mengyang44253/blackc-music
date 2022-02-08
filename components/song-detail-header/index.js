// components/song-detail-header/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songInfo:{
      type:Object,
      value:{},
      observer:function(newValue){
        console.log(newValue,'组件');
      }
    },
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

  }
})
