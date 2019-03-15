//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    searchQuery: '',
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
    searchResults: []
  },
  onLoad: function () {
    this.setData({
      searchResults: this.data.equip
    })
  },
  handleSearch: function(e) {
    let searchPhrase = e.detail.value;
    let results= [];
    if (searchPhrase !== '') {
      results = this.data.equip.filter(obj => obj.title.indexOf(searchPhrase) !== -1);
      this.setData({
        searchResults: results
      });   
    } else {
      this.setData({
        searchResults: this.data.equip
      });  
    }
    //console.log(this.data.searchResults)
  },
})
