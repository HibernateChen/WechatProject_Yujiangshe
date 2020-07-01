// pages/orderedCourse/orderedCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //headers: ["预约时间", "课程名称"],
    listData:[] //[{},{}]表格需要传入该类型数据
    //{"date":"01","title":"aa"},{"date":"01","title":"aa"},{"date":"01","title":"aa"}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var thatList = that.data.listData;
    var orderedCourseObj={};
    if(options.type==="orderedCourse"){
      try{
        var orderCourse = wx.getStorageSync("orderInfo");
        if(orderCourse){
          for(var i in orderCourse){
            orderedCourseObj.date=orderCourse[i].date;
            orderedCourseObj.title=orderCourse[i].title;
            thatList.push(orderedCourseObj);
            orderedCourseObj={};
          }
          console.log(thatList);
          that.setData({
            listData:thatList
          });
        }else{
          wx.showToast({
            title: "暂无预约课程",
            icon:"none",
            duration: 3000
          })
        }
      }catch(e){
        wx.showToast({
          title: "系统异常,请致电联系...",
          icon:"none",
          duration: 5000
        })
      }
    }else if(options.type==="orderedExperenceCourse"){
      try{
        var orderCourse = wx.getStorageSync("orderExperenceInfo");
        if(orderCourse){
          for(var i in orderCourse){
            orderedCourseObj.date=orderCourse[i].date;
            orderedCourseObj.title=orderCourse[i].title;
            thatList.push(orderedCourseObj);
            orderedCourseObj={};
          }
          that.setData({
            listData:thatList
          });
        }else{
          wx.showToast({
            title: "暂无预约课程",
            icon:"none",
            duration: 3000
          })
        }
      }catch(e){
        wx.showToast({
          title: "系统异常,请致电联系...",
          icon:"none",
          duration: 5000
        })
      }
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