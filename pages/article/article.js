const app = getApp()

Page({
  data: {
    article: {}
  },

  onLoad: function (options) {
    console.log(options)
    app.post(`/api/article/${options.id}`, {}, 'GET')
      .then(res => {
        console.log(res)
        this.setData({
          article: res
        })
        wx.setNavigationBarTitle({
          title: res.title
        })
      })
      .catch(error => {
        console.log(error)
      })
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})