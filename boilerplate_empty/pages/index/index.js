//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sliderImgs: ['../../assets/slider/slide1.jpg',
      '../../assets/slider/slide2.jpg',
      '../../assets/slider/slide3.jpg'],
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
    ],
    newsTags: ['news', 'events', 'resources'],
    newsTag: ''
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
    console.log(this.data.newsTag);
  }
})
