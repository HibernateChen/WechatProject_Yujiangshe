// pages/orderedCourse/orderedCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headers: ["预约时间", "课程名称"],
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var thatList = that.data.list;
    if(options.type==="orderedCourse"){
      //try{
        var orderCourse = wx.getStorageSync("orderInfo");
        var thisList=[];
        if(orderCourse){
          orderCourse.forEach(function(item,index){
            console.log(index);
            thisList.push(item[index]);
            thatList.push(thisList);
          });
          console.log(thisList);
          that.setData({
            list:thatList
          });
        }else{
          wx.showToast({
            title: "暂无预约课程",
            icon:"none",
            duration: 3000
          })
        }
      // }catch(e){
      //   wx.showToast({
      //     title: "系统异常,请致电联系...",
      //     icon:"none",
      //     duration: 5000
      //   })
      // }
    }else if(options.type==="orderedExperenceCourse"){

    }else{
      wx.showToast({
        title: "系统异常,请致电联系",
        icon:"none",
        duration: 5000
      })
    }
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