//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    equip: [
      {
        img: '../../assets/equip/eq1.jpg',
        title: 'Sensor',
        avail: true
      },
      {
        img: '../../assets/equip/eq2.jpg',
        title: 'Sensor Two',
        avail: false
      },
      {
        img: '../../assets/equip/eq3.jpg',
        title: 'Ultrasonic sensor',
        avail: true
      },
    ],
    searchQuery: '',
    searchResults: []
  },
})
