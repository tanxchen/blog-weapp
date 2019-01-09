//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articles: []
  },
  goToDetailPage (e) {
    console.log()
    wx.navigateTo({
      url: `../article/article?id=${e.currentTarget.dataset.id}`
    })
  },

  onLoad: function () {
    app.post('/api/articles', {}, 'GET')
      .then(res => {
        console.log(res)
        this.setData({
          articles: res
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
})
