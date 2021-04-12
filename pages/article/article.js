const app = getApp()
import articles from '../../data/articles.js'

Page({
  data: {
    article: {}
  },

  onLoad: function (options) {
    const res = articles.filter(item => item._id === options.id)[0] || {}
    console.log(res)
    this.setData({
      article: res
    })
    wx.setNavigationBarTitle({
      title: res.title
    })
    // app.post(`/api/article/${options.id}`, {}, 'GET')
    //   .then(res => {
    //     this.setData({
    //       article: res
    //     })
    //     wx.setNavigationBarTitle({
    //       title: res.title
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
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