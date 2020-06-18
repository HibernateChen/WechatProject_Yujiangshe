// pages/album/album.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    albumSrc:[
      {src:"https://pic.downk.cc/item/5ed9ffc8c2a9a83be51d7a82.jpg"},
      {src:"https://pic.downk.cc/item/5ed9ffdac2a9a83be51d93ce.jpg"},
      {src:"https://pic.downk.cc/item/5ed9ffeac2a9a83be51dab99.jpg"},
      {src:"https://pic.downk.cc/item/5eda0002c2a9a83be51dd368.jpg"}
    ]
  },

  //预览图片
  topic_preview: function(e){
    var that = this;
    var src = e.currentTarget.dataset.src;
    var previewImgArr = [];
    //通过循环在数据链里面找到和这个id相同的这一组数据，然后再取出这一组数据当中的图片
    var data = that.data.albumSrc;

    for (var i in data) {
      previewImgArr.push(data[i].src) ;
    }
    
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: previewImgArr // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})