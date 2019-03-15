//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    equip: [
      {
        img: '../../assets/equip/eq1.jpg',
        title: 'Sensor',
        content: 'Lorem Ipsum',
        date: 20181212,
      },
      {
        img: '../../assets/equip/eq2.jpg',
        title: 'Sensor Two',
        content: 'Lorem Ipsum',
        date: 20181212,
      },
      {
        img: '../../assets/equip/eq3.jpg',
        title: 'Ultrasonic sensor',
        content: 'Lorem Ipsum',
        date: 20181212,
      },
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
