//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //轮播图数据
    swiperSrc:[
      {src:"https://pic.downk.cc/item/5ed76ef6c2a9a83be56901a9.jpg"},
      {src:"https://pic.downk.cc/item/5ed76ef0c2a9a83be568f94d.jpg"}
    ],

    //精品课程
    course:[
      {courseTitle:"英语小白的破冰之旅",src:"https://pic.downk.cc/item/5eda0002c2a9a83be51dd368.jpg"},
    ],

    //学校相册
    albumSrc:[
      {src:"https://pic.downk.cc/item/5ed9ffc8c2a9a83be51d7a82.jpg"},
      {src:"https://pic.downk.cc/item/5ed9ffdac2a9a83be51d93ce.jpg"},
      {src:"https://pic.downk.cc/item/5ed9ffeac2a9a83be51dab99.jpg"},
      {src:"https://pic.downk.cc/item/5eda0002c2a9a83be51dd368.jpg"}
    ],

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

  switchToTeacher(e){
    wx.switchTab({
      url: '/pages/teacher/teacher',
    });
  },

  switchToCourse(e){
    wx.switchTab({
      url: '/pages/course/course',
    });
  },

  switchToContact(e){
    wx.switchTab({
      url: '/pages/contact/contact',
    });
  },

  toCourseMore(e){
    wx.switchTab({
      url: '/pages/course/course',
    });
  },

  toCourse(e){
    wx.switchTab({
      url: '/pages/course/course',
    });
  },

  toAlbumMore(e){
    wx.navigateTo({
      url: '/pages/album/album',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  toActivityMore(e){
    wx.navigateTo({
      url: '/pages/activity/activity',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})
