// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //地图
    markers:[{
      iconPath: "../../icon/map/location.png",
      id: 0,
      latitude: 30.706-0.0060,
      longitude: 104.037448-0.0065,
      width: 30,
      height: 30
    }],
    latitude: 30.706-0.0060,
    longitude: 104.037448-0.0065
  },

  //点开具体微信内置地图导航功能，注意：该功能的实现必须配合app.json的permission配置
  getLocation:function(){
    wx.getLocation({
      type: 'wgs84', 
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: 30.706-0.0060,//要去的纬度-地址
          longitude: 104.037448-0.0065,//要去的经度-地址
          name: "语匠社",
          address: '茶店子路龙湖紫宸香颂4期3栋3单元701'
        })
      }
    })
  },

  calling:function(){
    wx.makePhoneCall({
      phoneNumber: '4000303096',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
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