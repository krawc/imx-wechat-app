//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sliderImgs: ['../../assets/slider/slide1.jpg',
      '../../assets/slider/slide2.jpg',
      '../../assets/slider/slide3.jpg'],
    newsTags: ['news', 'events', 'resources'],
    newsTag: '',
    news: [
      {
        img: '../../assets/slider/slide1.jpg',
        title: 'New Equipment Room',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        date: 20181212,
        tag: 'news'
      },
      {
        img: '../../assets/slider/slide2.jpg',
        title: 'Installation Art Workshop',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore!',
        date: 20181212,
        tag: 'events'
      },
      {
        img: '../../assets/slider/slide3.jpg',
        title: 'Popcorn Session with Alumni!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        date: 20181212,
        tag: 'events'
      },
      {
        img: '../../assets/slider/slide1.jpg',
        title: 'Come to LAs Office Hours!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        date: 20181212,
        tag: 'resources'
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  bindTagBtnTap: function(e) {
    if (this.data.newsTag === e.target.dataset.tag) {
      this.setData({
        newsTag: ''
      })
    } else {
      this.setData({
        newsTag: e.target.dataset.tag
      });
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
