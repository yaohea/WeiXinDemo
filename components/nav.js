// components/nav.js
Component({
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log(1);
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log(1);
    },
    created: function () {
      console.log(1);
    },
    ready: function () {
      console.log(1);
    },
    moved() {
      console.log(1);
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0
  },
  externalClasses: ['classname'],
  /**
   * 组件的方法列表
   */
  methods: {
    handle(e) {
      this.triggerEvent('emit', e.target.dataset.data.name)
      this.setData({
        active: e.target.dataset.data.id
      })
    }
  }
})
