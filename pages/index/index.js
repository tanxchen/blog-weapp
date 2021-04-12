//index.js
//获取应用实例
const app = getApp()
import articles from '../../data/articles.js'

Page({
  data: {
    articles: [],
    params: ''
  },
  goToDetailPage (e) {
    wx.navigateTo({
      url: `../article/article?id=${e.currentTarget.dataset.id}`
    })
  },

  onLoad() {
    this.setData({
      articles: articles
    })
    // app.post('/api/articles', {}, 'GET')
    //   .then(res => {
    //     this.setData({
    //       articles: res
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
})
